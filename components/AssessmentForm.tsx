import { useState } from "react";
import type { CarbonInput } from "../lib/carbonEngine";
import { calculateCarbonFootprint } from "../lib/carbonEngine";

export default function AssessmentForm() {
  const currentYear = new Date().getFullYear();

  const [year, setYear] = useState<number>(currentYear);
  const [sector, setSector] = useState<CarbonInput["sector"]>("services");

  const [data, setData] = useState({
    fuelLiters: "",
    electricityKwh: "",
    freightKm: "",
    businessTravelKm: "",
    purchasedGoodsEuro: ""
  });

  const [result, setResult] = useState<any>(null);

  const handleChange = (field: string, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const calculate = () => {
    const input: CarbonInput = {
      year,
      sector,
      fuelLiters: Number(data.fuelLiters) || 0,
      electricityKwh: Number(data.electricityKwh) || 0,
      freightKm: Number(data.freightKm) || 0,
      businessTravelKm: Number(data.businessTravelKm) || 0,
      purchasedGoodsEuro: Number(data.purchasedGoodsEuro) || 0
    };

    const output = calculateCarbonFootprint(input);
    setResult(output);
  };

  return (
    <div className="space-y-10">

      <h2 className="text-2xl font-bold text-[#0B3A63]">Carbon Assessment (PME)</h2>
      <p className="text-sm text-slate-600">
        Remplissez uniquement les données disponibles. Estimations acceptées.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div>
          <label className="font-semibold text-sm">Année déclarative</label>
          <input
            type="number"
            value={year}
            min="2000"
            max={currentYear}
            onChange={(e) => setYear(Number(e.target.value))}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Secteur d’activité</label>
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value as CarbonInput["sector"])}
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="services">Services</option>
            <option value="retail">Commerce / Retail</option>
            <option value="construction">Construction</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="transport">Transport</option>
          </select>
        </div>

      </div>

      <h3 className="font-bold text-lg text-[#0B3A63] mt-6">Données d’activité</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="font-semibold text-sm">Carburant utilisé (litres)</label>
          <input
            type="number"
            value={data.fuelLiters}
            onChange={(e) => handleChange("fuelLiters", e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
          <p className="text-xs text-slate-500 mt-1">Diesel, essence — flotte interne</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Electricité consommée (kWh)</label>
          <input
            type="number"
            value={data.electricityKwh}
            onChange={(e) => handleChange("electricityKwh", e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
          <p className="text-xs text-slate-500 mt-1">Bureaux / ateliers / site</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Fret / logistique externalisée (km)</label>
          <input
            type="number"
            value={data.freightKm}
            onChange={(e) => handleChange("freightKm", e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
          <p className="text-xs text-slate-500 mt-1">Distance parcourue pour livraisons</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Déplacements professionnels (km)</label>
          <input
            type="number"
            value={data.businessTravelKm}
            onChange={(e) => handleChange("businessTravelKm", e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
          <p className="text-xs text-slate-500 mt-1">Train, voiture, avion → total annuel</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Achats annuels (€)</label>
          <input
            type="number"
            value={data.purchasedGoodsEuro}
            onChange={(e) => handleChange("purchasedGoodsEuro", e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
          <p className="text-xs text-slate-500 mt-1">Matériel, services, sous-traitance</p>
        </div>

      </div>

      <button
        onClick={calculate}
        className="w-full bg-[#1FB6C1] text-white py-3 rounded-lg font-bold"
      >
        Calculer les émissions
      </button>

      {result && (
        <div className="mt-10 bg-[#0B3A63] text-white p-6 rounded-xl space-y-3">
          <h3 className="text-xl font-bold">Résultats – Année {result.year}</h3>

          <p><strong>Scope 1 :</strong> {result.scope1} kg CO₂e</p>
          <p><strong>Scope 2 :</strong> {result.scope2} kg CO₂e</p>
          <p><strong>Scope 3 :</strong> {result.scope3} kg CO₂e</p>

          <hr className="border-slate-500 my-2" />

          <p className="text-lg font-bold">
            Total : {result.total} kg CO₂e
          </p>

          {result.warnings?.length > 0 && (
            <div className="mt-4 bg-yellow-200 text-yellow-900 p-3 rounded text-sm">
              <strong>Avertissements :</strong>
              <ul className="list-disc ml-4 mt-1">
                {result.warnings.map((w: string, i: number) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
