import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';
import chromium from 'chrome-aws-lambda';
import crypto from 'crypto';
import QRCode from 'qrcode';
import { renderAttestationHTML } from '../../lib/renderAttestation';
import { calculateCarbonFootprint } from '../../lib/carbonEngine';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { companyName, sector, country, period, revenue, fuelSpent, electricitySpent } = req.body;

    if (!companyName || !sector || !revenue) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // ============================================================
    // 1) Secure recalculation server-side
    // ============================================================
    const result = calculateCarbonFootprint({
      sector,
      revenue: Number(revenue),
      fuelSpent: Number(fuelSpent || 0),
      electricitySpent: Number(electricitySpent || 0)
    });

    const attestationId = uuidv4();
    const now = new Date();

    // ============================================================
    // 2) Define base domain
    // ============================================================
    const origin =
      req.headers.origin ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://certif-scope.com";

    // ============================================================
    // 3) QR & verification URL
    // ============================================================
    const verifyUrl = `${origin}/verify?id=${attestationId}&hash=__HASH__`;
    const qrDataUrl = await QRCode.toDataURL(verifyUrl);

    // ============================================================
    // 4) HTML with QR placeholder
    // ============================================================
    let html = renderAttestationHTML({
      COMPANY_NAME: companyName,
      BUSINESS_SECTOR: sector,
      COUNTRY: country || "N/A",
      ASSESSMENT_PERIOD: period || "N/A",
      SCOPE_1: String(result.scope1),
      SCOPE_2: String(result.scope2),
      SCOPE_3: String(result.scope3),
      TOTAL: String(result.total),
      ATTESTATION_ID: attestationId,
      ISSUE_DATE_UTC: now.toISOString().split("T")[0],
      GENERATION_TIMESTAMP: now.toISOString(),
      METHODOLOGY_VERSION: "v3",
      QR_CODE: qrDataUrl
    });

    // ============================================================
    // 5) Launch Puppeteer for final PDF only
    // ============================================================
    const executablePath =
      process.env.NODE_ENV === "development"
        ? undefined
        : await chromium.executablePath;

    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath,
      headless: chromium.headless
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "a4",
      printBackground: true,
      margin: { top: "20mm", bottom: "20mm", left: "15mm", right: "15mm" }
    });

    await browser.close();

    // ============================================================
    // 6) Compute SHA-256 hash of final PDF
    // ============================================================
    const pdfHash = crypto.createHash("sha256").update(pdfBuffer).digest("hex");

    // Final verify URL with hash included
    const finalVerifyUrl = verifyUrl.replace("__HASH__", pdfHash);

    // ============================================================
    // 7) Register attestation in GitHub registry
    // ============================================================
    await fetch(`${origin}/api/register-attestation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: attestationId,
        hash: pdfHash
      })
    });

    // ============================================================
    // 8) Return JSON payload (compatible frontend)
    // ============================================================
    return res.status(200).json({
      id: attestationId,
      hash: pdfHash,
      verifyUrl: finalVerifyUrl,
      pdfBase64: pdfBuffer.toString("base64")
    });

  } catch (error: any) {
    console.error("[ATTESTATION_ERROR]", error);
    return res.status(500).json({ error: "Attestation generation failed", details: error.message });
  }
  }
