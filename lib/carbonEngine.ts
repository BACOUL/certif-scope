export const EMISSION_FACTORS = {
  sectors: {
    services: 0.054,
    retail: 0.120,
    construction: 0.280,
    manufacturing: 0.450,
    transport: 0.610,
  },
  energy: {
    fuel_liter: 2.65,
    electricity_kwh_eu: 0.25,
  }
};

export function calculateCarbonFootprint(data: any) {
  const fuelLiters = (data.fuelSpent || 0) / 1.7;
  const scope1 = fuelLiters * EMISSION_FACTORS.energy.fuel_liter;
  const electricityKwh = (data.electricitySpent || 0) / 0.22;
  const scope2 = electricityKwh * EMISSION_FACTORS.energy.electricity_kwh_eu;
  const factor = EMISSION_FACTORS.sectors[data.sector as keyof typeof EMISSION_FACTORS.sectors] || 0.054;
  const scope3 = (data.revenue || 0) * factor;

  return {
    scope1: Math.round(scope1),
    scope2: Math.round(scope2),
    scope3: Math.round(scope3),
    total: Math.round(scope1 + scope2 + scope3)
  };
}
