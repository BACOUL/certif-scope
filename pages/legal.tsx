import React from 'react';
import Link from 'next/link';

export default function Legal() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* BACK */}
        <Link
          href="/"
          className="inline-block mb-10 text-sm font-semibold text-[#1FB6C1] hover:text-[#17A2AC]"
        >
          ← Back to Certif-Scope
        </Link>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-black mb-12 text-[#0B3A63]">
          Legal notice
        </h1>

        <div className="space-y-10">

          {/* 1. PUBLISHER */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              1. Website publisher
            </h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><strong>Service name:</strong> Certif-Scope</li>
              <li><strong>Operator:</strong> Jeason Alexandre Bacoul (Sole Proprietor – Entrepreneur Individuel)</li>
              <li><strong>Company ID (SIREN):</strong> 999 356 439</li>
              <li><strong>Registered address:</strong> 3 rue de l’Église de Louppy, 55000 Les Hauts-de-Chée, France</li>
              <li><strong>Contact:</strong> contact@timeproofs.io</li>
            </ul>
          </section>

          {/* 2. PRICING & TAX */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              2. Pricing & tax information
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Prices displayed on this website are expressed in Euros (€).
              <br />
              In accordance with Article 293 B of the French General Tax Code (CGI),
              VAT is not applicable to these services (VAT exemption scheme – “franchise en base”).
            </p>
          </section>

          {/* 3. DATA & CONFIDENTIALITY */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              3. Data processing & confidentiality
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Certif-Scope operates on a <strong>client-side calculation model</strong>.
              <br />
              No raw financial or accounting data (revenue, expenses, invoices) is transmitted to or stored on any server.
              All calculations are performed locally within the user’s browser.
              <br /><br />
              Only the final aggregated results are used for the generation of the attestation.
              This design ensures full confidentiality and minimizes data exposure.
            </p>
          </section>

          {/* 4. HOSTING */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              4. Hosting
            </h2>
            <p className="text-sm text-slate-600">
              This website is hosted by <strong>Vercel Inc.</strong>,
              440 N Barranca Ave #4133, Covina, CA 91723, USA.
            </p>
          </section>

          {/* 5. SERVICE SCOPE */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B3A63] mb-4">
              5. Nature of the service & limitations
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Certif-Scope provides a <strong>methodological carbon footprint attestation</strong>
              based on standardized, publicly documented calculation methods.
              <br /><br />
              This document does not constitute an official government certification,
              a regulatory approval, or a carbon audit performed by an accredited third party.
              <br /><br />
              Results are indicative and intended exclusively for ESG questionnaires,
              partner requests, financing discussions and pre-compliance reporting.
            </p>
          </section>
        </div>

        {/* FOOTER */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
          Last updated: January 6, 2026
        </div>
      </div>
    </div>
  );
}
