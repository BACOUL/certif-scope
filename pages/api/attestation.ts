import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import puppeteerCore from "puppeteer-core";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { attestationTemplate } from "../../lib/attestationTemplate";

/* Replace placeholders in HTML template */
function fillTemplate(template: string, data: Record<string, string>) {
  let html = template;
  for (const key in data) {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), data[key]);
  }
  return html;
}

/* Compute SHA-256 hash of PDF buffer */
function computeHash(buffer: Buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const attestationId = uuidv4();
    const report = req.body;

    if (!report) {
      return res.status(400).json({ error: "Missing report data" });
    }

    const filledHTML = fillTemplate(attestationTemplate, {
      ATTESTATION_ID: attestationId,
      ISSUE_DATE_UTC: new Date().toISOString(),
      COMPANY_NAME: report.companyName || "N/A",
      BUSINESS_SECTOR: report.sector || "N/A",
      COUNTRY: "France",
      ASSESSMENT_PERIOD: "FY2024",
      SCOPE_1: String(report.scope1 || 0),
      SCOPE_2: String(report.scope2 || 0),
      SCOPE_3: String(report.scope3 || 0),
      TOTAL: String(report.total || 0),
      METHODOLOGY_VERSION: "v3",
      GENERATION_TIMESTAMP: new Date().toISOString()
    });

    const executablePath =
      process.env.NODE_ENV === "development"
        ? undefined
        : await chromium.executablePath;

    const browser = await puppeteerCore.launch({
      args: chromium.args,
      executablePath,
      headless: chromium.headless
    });

    const page = await browser.newPage();
    await page.setContent(filledHTML, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "a4",
      printBackground: true
    });

    await browser.close();

    const pdfHash = computeHash(pdfBuffer);

    // Register attestation in GitHub registry
    const registerRes = await fetch(
      "https://certif-scope.vercel.app/api/register-attestation",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: attestationId, hash: pdfHash })
      }
    );

    if (!registerRes.ok) {
      return res.status(500).json({
        error: "Attestation generated but registry update failed"
      });
    }

    // Return id + hash + PDF in base64 for frontend
    const pdfBase64 = pdfBuffer.toString("base64");

    return res.status(200).json({
      id: attestationId,
      hash: pdfHash,
      pdfBase64
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "PDF generation failed", details: err });
  }
      }
