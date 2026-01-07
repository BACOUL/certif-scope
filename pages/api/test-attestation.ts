import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import crypto from "crypto";
import QRCode from "qrcode";
import { attestationTemplate } from "../../lib/attestationTemplate";

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

  try {
    const report = req.body;
    if (!report) {
      return res.status(400).json({ error: "Missing report data" });
    }

    // 1) Chromium executable path
    const executablePath =
      process.env.NODE_ENV === "development"
        ? null
        : await chromium.executablePath;

    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: executablePath || undefined,
      headless: chromium.headless,
    });

    const page = await browser.newPage();

    // 2) Create HTML without QR
    const firstHTML = fillTemplate(attestationTemplate, {
      ATTESTATION_ID: "TEST-ID",
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
      QR_CODE: "" // important — pas <img>
    });

    await page.setContent(firstHTML, { waitUntil: "networkidle0" });
    const tmpPDF = await page.pdf({ format: "a4", printBackground: true });
    const hash = computeHash(tmpPDF);

    // 3) QR code
    const qrDataURL = await QRCode.toDataURL(`https://certif-scope.com/test?hash=${hash}`);

    // 4) Final HTML with QR
    const finalHTML = fillTemplate(attestationTemplate, {
      ATTESTATION_ID: "TEST-ID",
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
      QR_CODE: qrDataURL // DATA URL direct, pas de <img>
    });

    await page.setContent(finalHTML, { waitUntil: "networkidle0" });
    const finalPDF = await page.pdf({
      format: "a4",
      printBackground: true,
    });

    await browser.close();

    res.status(200).json({
      pdfBase64: finalPDF.toString("base64"),
      hash,
      ok: true,
    });

  } catch (err: any) {
    console.log("TEST-PDF-ERROR:", err);
    return res.status(500).json({ error: "PDF generation failed" });
  }
}
