import React from 'react';
import Link from 'next/link';

export default function Legal() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6 text-slate-800 leading-relaxed">
      <Link
        href="/"
        className="text-blue-600 hover:text-blue-800 mb-8 inline-block font-medium"
      >
        ← Back to the Certif-Scope calculator
      </Link>

      <h1 className="text-4xl font-extrabold text-slate-900 mb-10 text-center md:text-left">
        Legal Notice
      </h1>

      <div className="space-y-10">
        {/* 1. PUBLISHER */}
        <section className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4 mb-4">
            1. Website Publisher
          </h2>
          <div className="space-y-2 text-slate-600">
            <p>
              <span className="font-semibold">Trade name:</span> TimeProofs
            </p>
            <p>
              <span className="font-semibold">Owner:</span> Jeason Alexandre
              BACOUL (Sole Proprietor – Entrepreneur Individuel)
            </p>
            <p>
              <span className="font-semibold">Company ID (SIREN):</span> 999 356
              439
            </p>
            <p>
              <span className="font-semibold">Registered address:</span> 3 rue de
              l’Église de Louppy, 55000 Les Hauts-de-Chée, France
            </p>
            <p>
              <span className="font-semibold">Contact email:</span>{' '}
              contact@timeproofs.io
            </p>
          </div>
        </section>

        {/* 2. PRICING & TAX */}
        <section className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4 mb-4">
            2. Pricing & Tax Information
          </h2>
          <p className="text-slate-600">
            Prices displayed on this website are expressed in Euros (€).
            <br />
            In accordance with Article 293 B of the French General Tax Code (CGI),
            VAT is not applicable to these services (VAT exemption scheme –
            “franchise en base”).
          </p>
        </section>

        {/* 3. TECHNOLOGY & DATA */}
        <section className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4 mb-4">
            3. Technology & Data Processing
          </h2>
          <p className="text-slate-600 italic">
            Certif-Scope relies on the <strong>ActProofs</strong> technical
            architecture (Option A: client-side processing).
            <br />
            No raw financial or accounting data (revenue, invoices, expenses) is
            transmitted to or stored on our servers. All calculations are
            performed locally within the user’s browser, ensuring full data
            confidentiality.
          </p>
        </section>

        {/* 4. HOSTING */}
        <section className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4 mb-4">
            4. Hosting
          </h2>
          <p className="text-slate-600">
            This website is hosted by <strong>Vercel Inc.</strong>, 440 N Barranca
            Ave #4133, Covina, CA 91723, USA.
          </p>
        </section>

        {/* 5. LIMITATION & NATURE OF SERVICE */}
        <section className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4 mb-4">
            5. Nature of the Service & Limitation of Liability
          </h2>
          <p className="text-slate-600">
            Certif-Scope provides a <strong>methodological carbon footprint
            attestation</strong> based on standardized calculation methods.
            <br />
            This document does not constitute an official government
            certification, a regulatory approval, or a carbon audit performed by
            an accredited third party.
            <br />
            Results are indicative and intended to support ESG questionnaires,
            partner requests and pre-compliance reporting only.
          </p>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-slate-200 text-slate-400 text-sm text-center">
        Last updated: January 6, 2026
      </footer>
    </div>
  );
      }
