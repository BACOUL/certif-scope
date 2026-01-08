import type { NextApiRequest, NextApiResponse } from "next";
import { calculateCarbonFootprint } from "../../lib/carbonEngine";
import { fillAttestationTemplate } from "../../lib/renderAttestation";
import crypto from "crypto";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      year,
      sector,
      fuelLiters,
      electricityKwh,
      freightKm,
      businessTravelKm,
      purchasedGoodsEuro,
      companyName,
      country
    } = req.body;

    const input = {
      year: Number(year),
      sector: sector,
      fuelLiters: Number(fuelLiters) || 0,
      electricityKwh: Number(electricityKwh) || 0,
      freightKm: Number(freightKm) || 0,
      businessTravelKm: Number(businessTravelKm) || 0,
      purchasedGoodsEuro: Number(purchasedGoodsEuro) || 0
    };

    const calc = calculateCarbonFootprint(input);

    const attestationId = crypto.randomUUID();
    const issueDate = new Date().toISOString();

    const hash = crypto
      .createHash("sha256")
      .update(JSON.stringify({ attestationId, calc }))
      .digest("hex");

    const html = fillAttestationTemplate({
      attestationId,
      issueDate,
      preparedOn: issueDate,

      companyName: companyName || "Unknown",
      sector: sector,
      country: country || "France",
      period: year || new Date().getFullYear(),

      scope1: calc.scope1,
      scope2: calc.scope2,
      scope3: calc.scope3,
      total: calc.total,

      methodologyVersion: calc.methodology_version,
      hash
    });

    res.status(200).json({
      attestationId,
      hash,
      result: calc,
      html
    });

  } catch (e) {
    res.status(500).json({ error: "Internal error", details: String(e) });
  }
}
