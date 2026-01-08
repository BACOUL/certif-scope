export type CarbonInput = {
  year: number; // année déclarative
  sector:
    | "services"
    | "retail"
    | "construction"
    | "manufacturing"
    | "transport";

  // Données énergétiques annuelles
  fuelLiters: number;          // litres de diesel/essence consommés (Scope 1)
  electricityKwh: number;      // kWh consommés (Scope 2)

  // Scope 3 minimum (PME-friendly)
  freightKm: number;           // km de livraison / logistique externalisée
  businessTravelKm: number;    // déplacements professionnels
  purchasedGoodsEuro: number;  // achats de biens et services (€)
};

/**
 * Carbon estimation engine — v5 (PME Pro)
 *
 * Facteurs d’émissions inspirés :
 * - ADEME Base Carbone (approx)
 * - DEFRA UK GHG conversion factors
 * - EPA simplified methodology
 *
 * Valeurs simplifiées pour usage PME sans audit.
 */
export function calculateCarbonFootprint(input: CarbonInput) {
  // Sécurisation des valeurs
  const fuel = Math.max(0, Number(input.fuelLiters) || 0);
  const kwh = Math.max(0, Number(input.electricityKwh) || 0);
  const freight = Math.max(0, Number(input.freightKm) || 0);
  const travel = Math.max(0, Number(input.businessTravelKm) || 0);
  const purchases = Math.max(0, Number(input.purchasedGoodsEuro) || 0);

  // Coefficients (version PME simplifiée)
  const coefficients = {
    scope1_fuel_liter: 2.68,     // kg CO₂ / litre diesel (approx)
    scope2_elec_kwh: 0.06,       // kg CO₂ / kWh (mix européen)
    scope3_freight_km: 0.18,     // kg CO₂ par km de livraison
    scope3_travel_km: 0.14,      // kg CO₂ par km déplacement pro
    scope3_purchased_eur: 0.45,  // kg CO₂ / € dépensé (moyenne multi-secteurs)
  };

  // Calculs
  const scope1 = fuel * coefficients.scope1_fuel_liter;
  const scope2 = kwh * coefficients.scope2_elec_kwh;
  const scope3 =
    freight * coefficients.scope3_freight_km +
    travel * coefficients.scope3_travel_km +
    purchases * coefficients.scope3_purchased_eur;

  const total = scope1 + scope2 + scope3;

  // Arrondis
  const rounded = {
    scope1: Number(scope1.toFixed(2)),
    scope2: Number(scope2.toFixed(2)),
    scope3: Number(scope3.toFixed(2)),
    total: Number(total.toFixed(2)),
  };

  // Warnings intelligents
  const warnings: string[] = [];

  if (fuel === 0 && input.sector === "transport") {
    warnings.push("Transport sector with zero fuel usage is unusual — check data.");
  }

  if (purchases === 0 && (input.sector === "retail" || input.sector === "manufacturing")) {
    warnings.push("Purchases are normally significant in this sector — results may be underestimated.");
  }

  return {
    year: input.year,
    sector: input.sector,
    ...rounded,
    coefficients,
    methodology_version: "v5-PME",
    warnings
  };
}
