import { useState } from "react";

export default function AssessmentForm() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const [data, setData] = useState({
    sector: "services",
    fuel: "",
    electricity: "",
    gas: "",
    train: "",
    flight: "",
    hotel: "",
    it: "",
    services: "",
    logistics: ""
  });

  const change = (field: string, value: string) =>
    setData({ ...data, [field]: value });

  const calculate = () => {
    const f = (n: string, factor: number) => (parseFloat(n) || 0) * factor;

    const scope1 = f(data.fuel, 2.68);
    const scope2 = f(data.electricity, 0.059) + f(data.gas, 0.204);
    const scope3 =
      f(data.train, 0.012) +
      f(data.flight, 0.255) +
      f(data.hotel, 6.5) +
      f(data.it, 0.25) +
      f(data.services, 0.18) +
      f(data.logistics, 0.7);

    setResult({
      year,
      scope1: Math.round(scope1),
      scope2: Math.round(scope2),
      scope3: Math.round(scope3),
      total: Math.round(scope1 + scope2 + scope3)
    });
  };

  const generateAttestation = async () => {
    if (!result) return alert("You must calculate emissions first.");
    setLoading(true);

    const res = await fetch("/api/generate-attestation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        year,
        sector: data.sector,
        fuelLiters: data.fuel,
        electricityKwh: data.electricity,
        freightKm: data.logistics,
        businessTravelKm: data.flight,
        purchasedGoodsEuro: data.services,
        companyName: "Your Company",
        country: "Unknown"
      })
    });

    const out = await res.json();
    setLoading(false);

    if (!out?.html) return alert("Error generating attestation.");

    const blob = new Blob([out.html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-10">

      <div>
        <h2 className="text-2xl font-bold text-[#0B3A63]">Carbon Assessment (SME)</h2>
        <p className="text-sm text-[#475569]">
          Provide annual values. Estimates are acceptable. Only fill what you know.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="font-semibold text-sm">Reporting Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Business Sector</label>
          <select
            value={data.sector}
            onChange={(e) => change("sector", e.target.value)}
            className="w-full p-2 border rounded mt-1"
          >
            <option value="services">Services</option>
            <option value="retail">Retail</option>
            <option value="construction">Construction</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="transport">Transport</option>
          </select>
          <p className="text-xs text-slate-500 mt-1">
            Choose the closest business category.
          </p>
        </div>

        <div>
          <label className="font-semibold text-sm">Fuel used (litres)</label>
          <input
            type="number"
            className="w-full p-2 border rounded mt-1"
            value={data.fuel}
            onChange={(e) => change("fuel", e.target.value)}
          />
          <p className="text-xs text-slate-500">Diesel + gasoline for internal fleet.</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Electricity (kWh)</label>
          <input
            type="number"
            className="w-full p-2 border rounded mt-1"
            value={data.electricity}
            onChange={(e) => change("electricity", e.target.value)}
          />
          <p className="text-xs text-slate-500">Office / workshop electricity bills.</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Natural Gas (kWh)</label>
          <input
            type="number"
            className="w-full p-2 border rounded mt-1"
            value={data.gas}
            onChange={(e) => change("gas", e.target.value)}
          />
          <p className="text-xs text-slate-500">Heating fuel for buildings.</p>
        </div>

        <div>
          <label className="font-semibold text-sm">Train Travel (km)</label>
          <input
            type="number"
            className="w-full p-2 border rounded mt-1"
            value={data.train}
            onChange={(e) => change("train", e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Flight Travel (km)</label>
          <input
            type="number"
            className="w-full p-2 border rounded mt-1"
            value={data.flight}
            onChange={(e) => change("flight", e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Hotel nights</label>
          <input
            type="number"
            className="w-full p-2 border rounded mt-1"
            value={data.hotel}
            onChange={(e) => change("hotel", e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold text-sm">IT equipment (€)</label>
          <input
            type="number"
            className="w-full p-2 border rounded mt-1"
            value={data.it}
            onChange={(e) => change("it", e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold text-sm">External Services (€)</label>
          <input
            type="number"
            className="w-full p-2 border rounded mt-1"
            value={data.services}
            onChange={(e) => change("services", e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold text-sm">Goods Logistics (€)</label>
          <input
            type="number"
            className="w-full p-2 border rounded mt-1"
            value={data.logistics}
            onChange={(e) => change("logistics", e.target.value)}
          />
        </div>

      </div>

      <button
        onClick={calculate}
        className="w-full bg-[#1FB6C1] text-white py-3 rounded-lg font-bold"
      >
        Calculate Emissions
      </button>

      {result && (
        <div className="bg-[#0B3A63] text-white p-6 rounded-xl space-y-2 mt-8">
          <h3 className="text-xl font-bold">Results – Year {result.year}</h3>

          <div>Total CO₂e: <b>{result.total} kg/year</b></div>
          <div>Scope 1: {result.scope1} kg</div>
          <div>Scope 2: {result.scope2} kg</div>
          <div>Scope 3: {result.scope3} kg</div>

          <div className="mt-4">
            <button
              onClick={generateAttestation}
              className="w-full bg-white text-[#0B3A63] font-bold py-2 rounded-lg"
            >
              {loading ? "Generating..." : "Generate Attestation (PDF)"}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
