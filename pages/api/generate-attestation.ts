import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';
import chromium from 'chrome-aws-lambda';
import crypto from 'crypto';
import QRCode from 'qrcode';

import { renderAttestationHTML } from '../../lib/renderAttestation';
import { calculateCarbonFootprint } from '../../lib/carbonEngine';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      companyName,
      sector,
      country,
      period,
      revenue,
      fuelSpent,
      electricitySpent
    } = req.body;

    if (!companyName || !sector || !revenue) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // -------------------------------------------------------------
    // 1) Recalcul server-side pour éviter les manipulations (anti-fraude)
    // -------------------------------------------------------------
    const result = calculateCarbonFootprint({
      sector,
      revenue: Number(revenue),
      fuelSpent: Number(fuelSpent || 0),
      electricitySpent: Number(electricitySpent || 0)
    });

    const now = new Date();

    // -------------------------------------------------------------
    // 2) Générer un identifiant unique
    // -------------------------------------------------------------
    const attestationId = uuidv4();

    // -------------------------------------------------------------
    // 3) Préparer le HTML
    // -------------------------------------------------------------
    const html = renderAttestationHTML({
      COMPANY_NAME: companyName,
      BUSINESS_SECTOR: sector,
      COUNTRY: country || 'N/A',
      ASSESSMENT_PERIOD: period || 'N/A',

      SCOPE_1: String(result.scope1),
      SCOPE_2: String(result.scope2),
      SCOPE_3: String(result.scope3),
      TOTAL: String(result.total),

      ATTESTATION_ID: attestationId,
      ISSUE_DATE_UTC: now.toISOString().split('T')[0],
      GENERATION_TIMESTAMP: now.toISOString(),
      METHODOLOGY_VERSION: 'v3',

      QR_CODE: '' // placeholder remplacé juste après
    });

    // -------------------------------------------------------------
    // 4) Générer le PDF avec Puppeteer
    // -------------------------------------------------------------
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
      format: 'a4',
      printBackground: true,
      margin: {
        top: '20mm',
        bottom: '20mm',
        left: '15mm',
        right: '15mm'
      }
    });

    await browser.close();

    // -------------------------------------------------------------
    // 5) Calcul du hash SHA-256 du PDF
    // -------------------------------------------------------------
    const pdfHash = crypto.createHash('sha256').update(pdfBuffer).digest('hex');

    console.log('ATTESTATION_ID:', attestationId);
    console.log('PDF_HASH:', pdfHash);

    // -------------------------------------------------------------
    // 6) Générer l’URL de vérification + QR code
    // -------------------------------------------------------------
    const verifyUrl = `https://certif-scope.vercel.app/verify?id=${attestationId}&hash=${pdfHash}`;
    const qrDataUrl = await QRCode.toDataURL(verifyUrl);

    // -------------------------------------------------------------
    // 7) Re-rendre le HTML avec QR intégré
    // -------------------------------------------------------------
    const htmlWithQR = renderAttestationHTML({
      COMPANY_NAME: companyName,
      BUSINESS_SECTOR: sector,
      COUNTRY: country || 'N/A',
      ASSESSMENT_PERIOD: period || 'N/A',

      SCOPE_1: String(result.scope1),
      SCOPE_2: String(result.scope2),
      SCOPE_3: String(result.scope3),
      TOTAL: String(result.total),

      ATTESTATION_ID: attestationId,
      ISSUE_DATE_UTC: now.toISOString().split('T')[0],
      GENERATION_TIMESTAMP: now.toISOString(),
      METHODOLOGY_VERSION: 'v3',

      QR_CODE: qrDataUrl
    });

    // -------------------------------------------------------------
    // 8) Générer un PDF final avec QR visible
    // -------------------------------------------------------------
    const browser2 = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless
    });

    const page2 = await browser2.newPage();
    await page2.setContent(htmlWithQR, { waitUntil: 'networkidle0' });

    const finalPDF = await page2.pdf({
      format: 'a4',
      printBackground: true,
      margin: {
        top: '20mm',
        bottom: '20mm',
        left: '15mm',
        right: '15mm'
      }
    });

    await browser2.close();

    // -------------------------------------------------------------
    // 9) Retourner le PDF final
    // -------------------------------------------------------------
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="certif-scope-attestation.pdf"'
    );

    return res.status(200).send(finalPDF);

  } catch (error) {
    console.error('[ATTESTATION_ERROR]', error);
    return res.status(500).json({ error: 'Attestation generation failed' });
  }
      }
