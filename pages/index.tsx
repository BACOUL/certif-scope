import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

const AssessmentForm = dynamic(() => import("../components/AssessmentForm"), {
  ssr: false,
  loading: () => <p className="text-center p-10">Loading…</p>
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">

      {/* ===================== HEAD META ===================== */}
      <Head>
        <title>Certif-Scope — Instant EU-Aligned CO₂ Attestation for SMEs</title>
        <meta
          name="description"
          content="Generate a certified CO₂ attestation for Scope 1, Scope 2 and Scope 3 in under 60 seconds. Cryptographic verification, QR validation, accepted by banks, procurement and insurers."
        />
        <meta
          name="keywords"
          content="CO2 certificate, carbon attestation SME, scope 1 2 3, ESG compliance, supplier onboarding, procurement CO2 documentation, cryptographic verification"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://certif-scope.com/" />

        <link rel="alternate" href="https://certif-scope.com/en/" hrefLang="en" />
        <link rel="alternate" href="https://certif-scope.com/fr/" hrefLang="fr" />
        <link rel="alternate" href="https://certif-scope.com/de/" hrefLang="de" />
        <link rel="alternate" href="https://certif-scope.com/" hrefLang="x-default" />

        <meta property="og:title" content="Certified CO₂ Attestation for SMEs" />
        <meta property="og:description" content="Instant CO₂ attestation trusted by banks, procurement and insurers." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      {/* ===================== HEADER ===================== */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link href="/" className="text-2xl font-black tracking-tight">
            <span className="text-[#0B3A63]">Certif-</span>
            <span className="text-[#1FB6C1]">Scope</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-[#475569]">
            <Link href="/why-required">Why Required</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/verify">Verify</Link>
            <Link href="/legal">Legal</Link>
          </nav>

          <a
            href="#assessment"
            className="hidden md:inline-flex bg-[#1FB6C1] text-white text-xs font-bold px-6 py-3 rounded-lg shadow-md hover:opacity-90"
          >
            Generate Attestation
          </a>

          <button
            className="md:hidden text-[#0B3A63]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="28" height="28" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="7" x2="24" y2="7" />
              <line x1="4" y1="14" x2="24" y2="14" />
              <line x1="4" y1="21" x2="24" y2="21" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6 shadow-lg">
            <nav className="flex flex-col gap-4 text-sm font-bold text-[#475569]">
              <Link href="/why-required" onClick={() => setMenuOpen(false)}>Why Required</Link>
              <Link href="/methodology" onClick={() => setMenuOpen(false)}>Methodology</Link>
              <Link href="/verify" onClick={() => setMenuOpen(false)}>Verify</Link>
              <Link href="/legal" onClick={() => setMenuOpen(false)}>Legal</Link>
            </nav>
          </div>
        )}
      </header>

      {/* ===================== HERO ===================== */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-[#0B3A63] leading-tight max-w-4xl mx-auto">
          Instant, Verified, EU-Aligned CO₂ Attestation for SMEs
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-[#1FB6C1] mt-4">
          Scope 1 • Scope 2 • Scope 3 — automated, standardized, verifiable
        </h2>

        <p className="text-lg md:text-xl text-[#475569] max-w-4xl mx-auto mt-8 leading-relaxed">
          Certif-Scope produces a standardized CO₂ attestation in under 60 seconds,
          including cryptographic integrity, QR validation and bank-grade verification.
          Accepted by financing institutions, procurement departments and insurers across Europe.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
          <a
            href="#assessment"
            className="bg-[#1FB6C1] text-white px-10 py-5 rounded-xl shadow-lg font-bold text-lg hover:opacity-90"
          >
            Generate Attestation
          </a>

          <Link
            href="/verify"
            className="bg-[#0B3A63] text-white px-10 py-5 rounded-xl shadow-lg font-bold text-lg hover:opacity-90"
          >
            Verify Attestation
          </Link>
        </div>

        <div className="mt-8">
          <Link href="/sample-pdf" className="text-sm underline text-[#1FB6C1] font-medium">
            View sample attestation (PDF)
          </Link>
        </div>
      </section>

      {/* ===================== VALUE PROPOSITION ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-center text-[#0B3A63] mb-16">
          A New Category: Instant, Verifiable CO₂ Attestation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">
            <h3 className="text-xl font-bold text-[#0B3A63] mb-4">An attestation, not a calculator</h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Unique ID, cryptographic hash, QR verification link and registry entry.
              Designed to be accepted by banks, insurers and procurement portals.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">
            <h3 className="text-xl font-bold text-[#0B3A63] mb-4">Instant, not weeks</h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Traditional audits take 4–12 weeks. Certif-Scope delivers a compliant
              screening-level attestation in under 60 seconds.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">
            <h3 className="text-xl font-bold text-[#0B3A63] mb-4">Full Scope 3 included</h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Complete spend-based Scope 3 estimation using EUR monetary emission factors,
              updated annually and aligned with GHG Protocol recommendations.
            </p>
          </div>
        </div>

        {/* Comparative table */}
        <div className="overflow-x-auto mt-16">
          <table className="min-w-full bg-white border border-slate-200 rounded-xl shadow-sm text-sm">
            <thead className="bg-slate-100 text-[#0B3A63] font-semibold">
              <tr>
                <th className="px-6 py-3 border-b">Feature</th>
                <th className="px-6 py-3 border-b">Calculators</th>
                <th className="px-6 py-3 border-b">Audit</th>
                <th className="px-6 py-3 border-b">Certif-Scope</th>
              </tr>
            </thead>
            <tbody className="text-[#475569]">
              <tr className="border-b">
                <td className="px-6 py-4 font-bold">Time to deliver</td>
                <td className="px-6 py-4">Seconds</td>
                <td className="px-6 py-4">Weeks</td>
                <td className="px-6 py-4 text-[#0B3A63] font-bold">60 seconds</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 font-bold">Scope 3 included</td>
                <td className="px-6 py-4">No</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4 text-[#0B3A63] font-bold">Yes (automatic)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold">Verification</td>
                <td className="px-6 py-4">None</td>
                <td className="px-6 py-4">Auditor</td>
                <td className="px-6 py-4 text-[#0B3A63] font-bold">QR + Hash + Registry</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===================== REGULATORY CONTEXT ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-white border-t border-b border-slate-200">
        <h2 className="text-4xl font-black text-center text-[#0B3A63] mb-16">
          Why This Documentation Is Required Across Europe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[#475569]">

          <div>
            <h3 className="font-bold text-[#0B3A63] text-lg mb-3">Banking & Financing</h3>
            <p className="text-sm leading-relaxed">
              ESG risk assessment and credit procedures now require standardized CO₂ documentation.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0B3A63] text-lg mb-3">Procurement & Supply Chain</h3>
            <p className="text-sm leading-relaxed">
              Many buyers must collect CO₂ data from all suppliers as part of CSRD and CSDDD compliance.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0B3A63] text-lg mb-3">Insurance Underwriting</h3>
            <p className="text-sm leading-relaxed">
              CO₂ exposure is increasingly used in risk modelling, requiring verifiable documentation.
            </p>
          </div>

        </div>
      </section>

      {/* ===================== CALCULATION PROCESS ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-center text-[#0B3A63] mb-16">
          How Certif-Scope Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-10">
            <h3 className="font-bold text-[#0B3A63] text-xl mb-3">1. Input</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              The SME inputs yearly activity and spend data. No documents uploaded. All processing is local.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-10">
            <h3 className="font-bold text-[#0B3A63] text-xl mb-3">2. Calculation</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Scope 1, 2 and 3 emissions are estimated using EUR-based emission factors updated annually.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-10">
            <h3 className="font-bold text-[#0B3A63] text-xl mb-3">3. Attestation</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              A PDF is generated with a unique ID, SHA-256 hash and QR code linked to verification endpoint.
            </p>
          </div>

        </div>
      </section>

      {/* ===================== FORM ===================== */}
      <section id="assessment" className="max-w-4xl mx-auto py-28 px-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6 md:p-10">
          <AssessmentForm />
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-white border-t border-slate-200 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-3">Certif-Scope</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Instant certified carbon footprint attestation for SMEs. Cryptographically verifiable.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-3">Legal</h3>
            <ul className="text-sm text-[#475569] space-y-1">
              <li><Link href="/legal">Legal Notice</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Refund</Link></li>
              <li><Link href="/verify">Verify Attestation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-3">Contact</h3>
            <p className="text-sm text-[#475569]">contact@certif-scope.com</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
