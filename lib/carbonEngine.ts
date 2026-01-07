export type CarbonInput = {
  sector: "services" | "retail" | "construction" | "manufacturing" | "transport";
  revenue: number;
  fuelSpent: number;
  electricitySpent: number;
};

/**
 * Standardized screening-level carbon estimation
 * Coefficients are aligned across UI, backend, and attestation PDF.
 *
 * - Scope 1 → fuel emissions
 * - Scope 2 → electricity emissions
 * - Scope 3 → spend-based revenue multiplier
 *
 * All values are rounded to 2 decimals for consistency.
 */

export function calculateCarbonFootprint(input: CarbonInput) {
  const revenue = Math.max(0, Number(input.revenue) || 0);
  const fuel = Math.max(0, Number(input.fuelSpent) || 0);
  const electricity = Math.max(0, Number(input.electricitySpent) || 0);

  // Coefficients normalisés
  const scope1 = fuel * 0.0002;         // tCO₂e / €
  const scope2 = electricity * 0.0001;  // tCO₂e / €
  const scope3 = revenue * 0.00005;     // tCO₂e / €

  const total = scope1 + scope2 + scope3;

  return {
    scope1: Number(scope1.toFixed(2)),
    scope2: Number(scope2.toFixed(2)),
    scope3: Number(scope3.toFixed(2)),
    total: Number(total.toFixed(2))
  };
}
