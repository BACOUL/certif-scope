import type { NextApiRequest, NextApiResponse } from "next";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
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

    const attestationId = uuidv4();

    const tempHTML = fillTemplate(attestationTemplate, {
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

    const executablePath =
      process.env.NODE_ENV === "development"
        ? undefined
        : await chromium.executablePath;

    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath,
      headless: true,
    });

    const page = await browser.newPage();
    await page.setContent(tempHTML, { waitUntil: "networkidle0" });

    const firstPdf = await page.pdf({
      format: "a4",
      printBackground: true,
      margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" },
    });

    const pdfHash = computeHash(firstPdf);

    const verifyUrl = `https://certif-scope.com/verify?id=${attestationId}&hash=${pdfHash}`;

    const qrCode = await QRCode.toDataURL(verifyUrl);

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
      QR_CODE: `<img src="${qrCode}" style="width:140px"/>`,
    });

    await page.setContent(finalHTML, { waitUntil: "networkidle0" });
    const finalPdf = await page.pdf({
      format: "a4",
      printBackground: true,
      margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" },
    });

    await browser.close();

    return res.status(200).json({
      id: attestationId,
      hash: pdfHash,
      verifyUrl,
      pdfBase64: finalPdf.toString("base64"),
      test: true,
    });

  } catch (err: any) {
    console.error("TEST-ATT-ERROR:", err);
    return res.status(500).json({
      error: "Test attestation generation failed",
      details: err.message
    });
  }
      }
