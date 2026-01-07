import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import { attestationTemplate } from "../../lib/attestationTemplate";

const BROWSERLESS_KEY = process.env.BROWSERLESS_KEY;

function fillTemplate(template: string, data: Record<string, string>) {
  let html = template;
  for (const key in data) {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), data[key]);
  }
  return html;
}

function computeHash(buffer: Buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!BROWSERLESS_KEY) {
    return res.status(500).json({ error: "Missing BROWSERLESS_KEY" });
  }

  try {
    const report = req.body;
    if (!report) {
      return res.status(400).json({ error: "Missing report data" });
    }

    const attestationId = uuidv4();
    const issueDate = new Date().toISOString();

    const s1 = Number(report.scope1 || 0);
    const s2 = Number(report.scope2 || 0);
    const s3 = Number(report.scope3 || 0);
    const total = Number(report.total || 0);

    const pct1 = total > 0 ? ((s1 / total) * 100).toFixed(1) : "0";
    const pct2 = total > 0 ? ((s2 / total) * 100).toFixed(1) : "0";
    const pct3 = total > 0 ? ((s3 / total) * 100).toFixed(1) : "0";

    const tempHTML = fillTemplate(attestationTemplate, {
      ATTESTATION_ID: attestationId,
      ISSUE_DATE_UTC: issueDate,
      COMPANY_NAME: report.companyName || "N/A",
      BUSINESS_SECTOR: report.sector || "N/A",
      COUNTRY: report.country || "France",
      ASSESSMENT_PERIOD: report.period || "N/A",
      SCOPE_1: s1.toString(),
      SCOPE_2: s2.toString(),
      SCOPE_3: s3.toString(),
      TOTAL: total.toString(),
      SCOPE_1_PERCENT: pct1,
      SCOPE_2_PERCENT: pct2,
      SCOPE_3_PERCENT: pct3,
      METHODOLOGY_VERSION: "v3",
      GENERATION_TIMESTAMP: issueDate,
      PREPARED_ON: issueDate,
      QR_CODE: "",
      HASH: "",
      HASH_SHORT: ""
    });

    const pdf1 = await fetch(`https://chrome.browserless.io/pdf?token=${BROWSERLESS_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        html: tempHTML,
        options: { printBackground: true, format: "A4" }
      })
    }).then(r => r.arrayBuffer());

    const hash = computeHash(Buffer.from(pdf1));
    const hashShort = hash.substring(0, 8) + "...";

    const verifyUrl = `https://certif-scope.com/verify?id=${attestationId}&hash=${hash}`;
    const qrDataURL = await QRCode.toDataURL(verifyUrl);

    const finalHTML = fillTemplate(attestationTemplate, {
      ATTESTATION_ID: attestationId,
      ISSUE_DATE_UTC: issueDate,
      COMPANY_NAME: report.companyName || "N/A",
      BUSINESS_SECTOR: report.sector || "N/A",
      COUNTRY: report.country || "France",
      ASSESSMENT_PERIOD: report.period || "N/A",
      SCOPE_1: s1.toString(),
      SCOPE_2: s2.toString(),
      SCOPE_3: s3.toString(),
      TOTAL: total.toString(),
      SCOPE_1_PERCENT: pct1,
      SCOPE_2_PERCENT: pct2,
      SCOPE_3_PERCENT: pct3,
      METHODOLOGY_VERSION: "v3",
      GENERATION_TIMESTAMP: issueDate,
      PREPARED_ON: issueDate,
      QR_CODE: `<img src="${qrDataURL}" width="110" height="110" />`,
      HASH: hash,
      HASH_SHORT: hashShort
    });

    const pdf2 = await fetch(`https://chrome.browserless.io/pdf?token=${BROWSERLESS_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        html: finalHTML,
        options: { printBackground: true, format: "A4" }
      })
    }).then(r => r.arrayBuffer());

    res.status(200).json({
      id: attestationId,
      hash,
      hashShort,
      verifyUrl,
      pdfBase64: Buffer.from(pdf2).toString("base64")
    });

  } catch (error: any) {
    console.error("BROWSERLESS_ERROR", error);
    res.status(500).json({
      error: "PDF generation failed",
      details: error?.message || String(error)
    });
  }
      }
