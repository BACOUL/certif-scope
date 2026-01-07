import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode";
import { attestationTemplate } from "../../lib/attestationTemplate";

/* Replace placeholders in HTML */
function fillTemplate(template: string, data: Record<string, string>) {
  let html = template;
  for (const key in data) {
    html = html.replace(new RegExp(`{{${key}}}`, "g"), data[key]);
  }
  return html;
}

/* Compute SHA-256 hash */
function computeHash(buffer: Buffer) {
  return crypto.createHash("sha256").update(buffer).digest("hex");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const report = req.body;
    if (!report) {
      return res.status(400).json({ error: "Missing report data" });
    }

    // Generate unique attestation ID
    const attestationId = uuidv4();

    // Generate temporary HTML without QR
    const initialHTML = fillTemplate(attestationTemplate, {
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
      GENERATION_TIMESTAMP: new Date().toISOString(),
      QR_CODE: ""
    });

    // Setup Chromium for Vercel
    const executablePath =
      process.env.NODE_ENV === "development"
        ? undefined
        : await chromium.executablePath;

    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath,
      headless: true
    });

    const page = await browser.newPage();
    await page.setContent(initialHTML, { waitUntil: "networkidle0" });

    // Render initial PDF to compute hash
    const tmpPdf = await page.pdf({
      format: "a4",
      printBackground: true,
      margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" }
    });

    // Compute final hash
    const pdfHash = computeHash(tmpPdf);

    const verifyUrl = `https://certif-scope.com/verify?id=${attestationId}&hash=${pdfHash}`;

    // Generate QR code with full URL
    const qrCodeDataUrl = await QRCode.toDataURL(verifyUrl);

    // Create final HTML
    const finalHTML = fillTemplate(attestationTemplate, {
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
      GENERATION_TIMESTAMP: new Date().toISOString(),
      QR_CODE: `<img src="${qrCodeDataUrl}" style="width:140px"/>`,
      HASH: pdfHash,
      VERIFY_URL: verifyUrl
    });

    // Render final PDF
    await page.setContent(finalHTML, { waitUntil: "networkidle0" });
    const finalPdf = await page.pdf({
      format: "a4",
      printBackground: true,
      margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" }
    });

    await browser.close();

    // Register in GitHub registry
    await fetch("https://api.github.com/repos/BACOUL/certif-scope/contents/attestations.json", {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: attestationId,
        hash: pdfHash,
        timestamp: new Date().toISOString()
      })
    });

    return res.status(200).json({
      id: attestationId,
      hash: pdfHash,
      verifyUrl,
      pdfBase64: finalPdf.toString("base64")
    });

  } catch (err: any) {
    console.error("ATT-ERROR:", err);
    return res.status(500).json({
      error: "PDF generation failed",
      details: err.message
    });
  }
    }
