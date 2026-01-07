import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id, hash } = req.body;

  if (!id || !hash) {
    return res.status(400).json({ error: "Missing id or hash" });
  }

  try {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      return res.status(500).json({ error: "Missing GitHub token" });
    }

    // === 1) Get current attestations.json ===
    const raw = await fetch(
      "https://api.github.com/repos/BACOUL/certif-scope/contents/attestations.json",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!raw.ok) {
      return res.status(500).json({ error: "Unable to fetch attestations.json" });
    }

    const file = await raw.json();

    const existingContent = Buffer.from(file.content, "base64").toString("utf8");
    const json = JSON.parse(existingContent);

    // === 2) Add entry ===
    json.attestations.push({
      id,
      hash,
      timestamp: new Date().toISOString(),
    });

    // === 3) Encode new content ===
    const updatedContent = Buffer.from(JSON.stringify(json, null, 2)).toString("base64");

    // === 4) Commit update to GitHub ===
    const commitRes = await fetch(
      "https://api.github.com/repos/BACOUL/certif-scope/contents/attestations.json",
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Add attestation ${id}`,
          content: updatedContent,
          sha: file.sha,
        }),
      }
    );

    if (!commitRes.ok) {
      const text = await commitRes.text();
      return res.status(500).json({ error: "GitHub commit failed", details: text });
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: "Unexpected error", details: err.message });
  }
}
