// /pages/api/attestation.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { generateAttestationPDF } from "../../lib/generatePdf";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { companyName, scope1, scope2, scope3, total } = req.body;

    if (!companyName || total === undefined) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const pdfStream = generateAttestationPDF({
      companyName,
      scope1,
      scope2,
      scope3,
      total
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=attestation.pdf");

    pdfStream.pipe(res);
  } catch (error) {
    console.error("PDF generation error:", error);
    return res.status(500).json({ error: "Failed to generate PDF" });
  }
}
