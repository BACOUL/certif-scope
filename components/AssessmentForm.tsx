"use client";

import { useState } from "react";

function Accordion({
  title,
  children,
  defaultOpen = false
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 bg-[#F8FAFC] text-left"
      >
        <span className="font-medium text-[#0B3A63]">{title}</span>
        <span className="text-sm text-gray-500">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-5 py-6 bg-white space-y-5">
          {children}
        </div>
      )}
    </div>
  );
}

export default function AssessmentForm() {
  const currentYear = new Date().getFullYear();

  const [apiKey, setApiKey] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [year, setYear] = useState(currentYear);
  const [country, setCountry] = useState("FR");

  const [expenses, setExpenses] = useState({
    it: "",
    services: "",
    goods: "",
    logistics: "",
    travel: "",
    accommodation: "",
    other: ""
  });

  const update = (field: string, value: string) => {
    setExpenses(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!apiKey || !companyName) return;

    const payload = {
      apiKey,
      company: {
        name: companyName,
        id: companyId || null
      },
      year,
      country,
      expenses: Object.fromEntries(
        Object.entries(expenses).map(([k, v]) => [k, Number(v) || 0])
      )
    };

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) return;

    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-20 space-y-10">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B3A63] mb-3">
            Generate your carbon attestation
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Spend-based indicative estimation. No audit. No physical data required.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            <strong>Price:</strong> 89 € per attestation · One-time fee · No subscription
          </p>
        </div>

        {/* API KEY */}
        <Accordion title="Attestation key" defaultOpen>
          <div>
            <label className="block text-sm font-medium">Pack key</label>
            <input
              type="text"
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              placeholder="Enter your pack key"
              className="w-full border rounded-md px-4 py-2 mt-1"
            />
            <p className="text-xs text-gray-500 mt-1">
              Required. Provided after purchasing a pack.
            </p>
          </div>
        </Accordion>

        {/* COMPANY */}
        <Accordion title="Company information" defaultOpen>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Company / legal entity name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                className="w-full border rounded-md px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Business identifier (optional)
              </label>
              <input
                type="text"
                value={companyId}
                onChange={e => setCompanyId(e.target.value)}
                placeholder="SIREN / SIRET / EU registration number"
                className="w-full border rounded-md px-4 py-2 mt-1"
              />
            </div>
          </div>
        </Accordion>

        {/* CONTEXT */}
        <Accordion title="Context" defaultOpen>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Reference year</label>
              <input
                type="number"
                value={year}
                onChange={e => setYear(Number(e.target.value))}
                className="w-full border rounded-md px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Main country</label>
              <select
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="w-full border rounded-md px-4 py-2 mt-1"
              >
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="ES">Spain</option>
                <option value="IT">Italy</option>
                <option value="EU">Other EU</option>
              </select>
            </div>
          </div>
        </Accordion>

        {/* EXPENSES */}
        <Accordion title="Annual external expenses (€)">
          <Input label="IT & digital services" hint="Software, cloud, SaaS, IT outsourcing" value={expenses.it} onChange={v => update("it", v)} />
          <Input label="Professional services" hint="Consulting, accounting, legal services" value={expenses.services} onChange={v => update("services", v)} />
          <Input label="Purchased goods" hint="Office supplies, equipment, materials" value={expenses.goods} onChange={v => update("goods", v)} />
          <Input label="Logistics & transport services" hint="Freight, delivery, transport providers" value={expenses.logistics} onChange={v => update("logistics", v)} />
          <Input label="Business travel" hint="Flights, trains, taxis, car rentals" value={expenses.travel} onChange={v => update("travel", v)} />
          <Input label="Accommodation & events" hint="Hotels, conferences, corporate events" value={expenses.accommodation} onChange={v => update("accommodation", v)} />
          <Input label="Other external expenses" hint="Marketing, subscriptions, miscellaneous costs" value={expenses.other} onChange={v => update("other", v)} />
        </Accordion>

        {/* CTA */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#0B3A63] hover:bg-[#092f50] text-white py-4 rounded-xl font-semibold transition"
        >
          Proceed to payment — 89 €
        </button>

        {/* DISCLAIMER */}
        <p className="text-xs text-gray-500 leading-relaxed">
          This attestation is based solely on the information provided by the applicant and is not an audit.
        </p>

      </section>
    </main>
  );
}

function Input({
  label,
  hint,
  value,
  onChange
}: {
  label: string;
  hint: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input
        type="number"
        min="0"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border rounded-md px-4 py-2 mt-1"
      />
      <p className="text-xs text-gray-500 mt-1">{hint}</p>
    </div>
  );
                                                  }
