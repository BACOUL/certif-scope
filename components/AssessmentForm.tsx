import React, { useState } from 'react';
import { calculateCarbonFootprint } from '../lib/carbonEngine';

export default function AssessmentForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    sector: 'services',
    revenue: '',
    fuelSpent: '',
    electricitySpent: ''
  });

  const [results, setResults] = useState<any>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const calculation = calculateCarbonFootprint(formData);
    setResults(calculation);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-10">
      {/* FORM */}
      <form
        onSubmit={handleCalculate}
        className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xl"
      >
        {/* HEADER */}
        <div className="bg-blue-900 px-8 py-6">
          <h2 className="text-xl font-bold text-white">
            Carbon Footprint Assessment
          </h2>
          <p className="text-blue-200 text-sm mt-1">
            Standardized estimation based on recognized methodologies.
          </p>
        </div>

        {/* BODY */}
        <div className="p-8 space-y-8">
          {/* COMPANY */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Company name
            </label>
            <input
              type="text"
              required
              placeholder="Your company legal name"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
          </div>

          {/* SECTOR & REVENUE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Business sector
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white"
                onChange={(e) =>
                  setFormData({ ...formData, sector: e.target.value })
                }
              >
                <option value="services">Services</option>
                <option value="retail">Retail</option>
                <option value="manufacturing">Manufacturing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Annual revenue (€)
              </label>
              <input
                type="number"
                required
                placeholder="e.g. 500000"
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
                onChange={(e) =>
                  setFormData({ ...formData, revenue: e.target.value })
                }
              />
            </div>
          </div>

          {/* ENERGY */}
          <div className="pt-2">
            <p className="text-sm font-semibold text-slate-700 mb-3">
              Energy-related expenses (annual)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="number"
                placeholder="Fuel expenses (€)"
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
                onChange={(e) =>
                  setFormData({ ...formData, fuelSpent: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Electricity expenses (€)"
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
                onChange={(e) =>
                  setFormData({ ...formData, electricitySpent: e.target.value })
                }
              />
            </div>
          </div>

          {/* PRIVACY NOTE */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
            All calculations are performed locally in your browser.
            <br />
            No raw financial data is transmitted or stored on our servers.
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition"
          >
            Calculate my carbon footprint
          </button>
        </div>
      </form>

      {/* RESULTS PREVIEW */}
      {results && (
        <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            Carbon footprint preview
            <span className="text-xs font-semibold bg-blue-500 px-3 py-1 rounded-full italic">
              indicative
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center">
              <p className="text-slate-400 text-xs uppercase mb-1">
                Scope 1
              </p>
              <p className="text-xl font-bold">{results.scope1} tCO₂e</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center">
              <p className="text-slate-400 text-xs uppercase mb-1">
                Scope 2
              </p>
              <p className="text-xl font-bold">{results.scope2} tCO₂e</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center">
              <p className="text-slate-400 text-xs uppercase mb-1">
                Scope 3
              </p>
              <p className="text-xl font-bold">{results.scope3} tCO₂e</p>
            </div>
          </div>

          <div className="bg-blue-600 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-blue-100 text-sm">
                Total estimated emissions
              </p>
              <p className="text-4xl font-extrabold">
                {results.total} tCO₂e
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-blue-100 text-sm mb-2">
                Generate your downloadable attestation
              </p>
              <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition">
                Get attestation (€99)
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            This preview is provided for informational purposes only and does not
            constitute a regulatory certification or an accredited carbon audit.
          </p>
        </div>
      )}
    </div>
  );
              }
