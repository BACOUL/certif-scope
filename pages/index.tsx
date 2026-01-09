import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

const AssessmentForm = dynamic(() => import("../components/AssessmentForm"), {
  ssr: false
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">

      <Head>
        <title>
          Certif-Scope — Verified Carbon Attestation for European SMEs · Scope 1 · Scope 2 · Scope 3
        </title>

        <meta
          name="description"
          content="The most complete carbon attestation for European SMEs. Verified, tamper-proof, instantly generated, covering Scope 1, Scope 2 and Scope 3. Accepted by banks, procurement departments, auditors and insurers. Full EU compliance, ready for tenders, RFP, ESG scoring and sustainability documentation."
        />

        <meta
          name="keywords"
          content="carbon attestation, CO2 certification, SME carbon certificate, scope 1 2 3, ESG compliance, procurement documentation, carbon reporting SME, sustainability certificate, EU taxonomy alignment, GHG Protocol SME, verified carbon footprint"
        />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://certif-scope.com/" />

        <link rel="alternate" hrefLang="x-default" href="https://certif-scope.com/" />
        <link rel="alternate" hrefLang="en" href="https://certif-scope.com/en/" />
        <link rel="alternate" hrefLang="fr" href="https://certif-scope.com/fr/" />
        <link rel="alternate" hrefLang="de" href="https://certif-scope.com/de/" />

        <meta property="og:title" content="Verified CO₂ Attestation for European SMEs" />
        <meta property="og:description" content="Generate a verified Scope 1-2-3 attestation instantly." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://certif-scope.com/" />
        <meta property="og:type" content="website" />
      </Head>

      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link href="/" className="text-2xl font-black tracking-tight">
            <span className="text-[#0B3A63]">Certif-</span>
            <span className="text-[#1FB6C1]">Scope</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-[#475569]">
            <Link href="/why-required">Why Required</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/verify">Verify</Link>
            <Link href="/legal">Legal</Link>
          </nav>

          <a
            href="#assessment"
            className="hidden md:inline-flex bg-[#1FB6C1] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-sm"
          >
            Generate Attestation
          </a>

          <button className="md:hidden text-[#0B3A63]" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="26" height="26" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="22" y2="6" />
              <line x1="4" y1="13" x2="22" y2="13" />
              <line x1="4" y1="20" x2="22" y2="20" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6 shadow-md">
            <nav className="flex flex-col gap-4 text-sm font-semibold text-[#475569]">
              <Link href="/why-required" onClick={() => setMenuOpen(false)}>Why Required</Link>
              <Link href="/methodology" onClick={() => setMenuOpen(false)}>Methodology</Link>
              <Link href="/compliance" onClick={() => setMenuOpen(false)}>Compliance</Link>
              <Link href="/verify" onClick={() => setMenuOpen(false)}>Verify</Link>
              <Link href="/legal" onClick={() => setMenuOpen(false)}>Legal</Link>
            </nav>
          </div>
        )}
      </header>

      {/* HERO — ULTRA WIDE PREMIUM */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-28 text-center">

        <h1 className="text-5xl md:text-6xl font-black text-[#0B3A63] leading-tight tracking-tight">
          Europe’s Most Advanced<br />
          <span className="text-[#1FB6C1]">Carbon Attestation for SMEs</span>
        </h1>

        <p className="text-lg md:text-xl text-[#475569] max-w-4xl mx-auto mt-6 leading-relaxed">
          Certif-Scope delivers a verified, tamper-proof and procurement-ready CO₂ attestation
          accepted by banks, buyers, insurers and auditors. It includes Scope 1, Scope 2 and Scope 3,
          computed instantly through a fully compliant GHG Protocol methodology adapted for SMEs
          across Europe. No uploads. No delays. No manual verification. Full trust and transparency.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
          <a
            href="#assessment"
            className="bg-[#1FB6C1] hover:bg-[#19a8ae] transition text-white font-bold px-12 py-5 rounded-xl shadow-xl text-lg"
          >
            Generate Attestation
          </a>

          <Link
            href="/verify"
            className="bg-[#0B3A63] hover:bg-[#082d4f] transition text-white font-bold px-12 py-5 rounded-xl shadow-xl text-lg"
          >
            Verify an Attestation
          </Link>
        </div>

        <Link href="/sample-pdf" className="text-sm underline text-[#1FB6C1] font-medium block mt-8">
          View a sample attestation
        </Link>

      </section>

      {/* SECTION: FULL VALUE PROPOSITION */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-12">
          A Complete, Verified and Procurement-Ready CO₂ Attestation
        </h2>

        <p className="text-lg text-[#475569] leading-relaxed max-w-5xl mx-auto text-center mb-16">
          Certif-Scope solves the largest compliance bottleneck for SMEs: producing a
          standardized, verifiable and instantly deliverable carbon attestation covering
          all emission scopes. Unlike traditional calculators or incomplete CO₂ estimates,
          Certif-Scope generates an attestation specifically engineered for documentation
          workflows in financial institutions, procurement platforms and sustainability audits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-md">
            <h3 className="font-bold text-[#0B3A63] mb-4">Institutional-grade Format</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Designed to match expectations from European banks, public procurement platforms,
              insurers, certification bodies and sustainability teams. Includes unique ID,
              tamper-proof hash, QR verification link, timestamp, methodology reference and
              breakdown by scopes.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-md">
            <h3 className="font-bold text-[#0B3A63] mb-4">Full Scope 1, 2 and 3 Coverage</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Covers direct emissions (Scope 1), indirect energy emissions (Scope 2) and value-chain
              emissions (Scope 3) using GHG Protocol-aligned spend-based coefficients, updated with
              European reference datasets and SME proportionality rules.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-md">
            <h3 className="font-bold text-[#0B3A63] mb-4">No Uploads, No Manual Review</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              All calculations are performed locally. Nothing is stored. There are no documents to
              upload, no waiting time, no verification queue and no intermediary review required.
              The attestation is generated instantly and can be verified independently at any moment.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION: WHY REQUIRED */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <h2 className="text-3xl md:text-4xl font-black text-[#0B3A63] mb-16 text-center">
          Why European Companies Are Now Required to Provide Carbon Attestations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Banking & Financing</h3>
            <p className="text-[#475569] leading-relaxed text-lg">
              Banks increasingly require carbon documentation for financing, refinancing, leasing
              or grants. Certif-Scope provides a standardized attestation with transparent
              methodology, enabling fast approval and compliance scoring integration.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Procurement & Supply Chain</h3>
            <p className="text-[#475569] leading-relaxed text-lg">
              European buyers and procurement platforms request CO₂ information from suppliers,
              even small businesses, to meet ESG reporting requirements. Certif-Scope offers a
              ready-to-submit PDF that matches procurement documentation expectations.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Insurance & Risk Scoring</h3>
            <p className="text-[#475569] leading-relaxed text-lg">
              Insurers increasingly integrate sustainability indicators into risk pricing.
              Certif-Scope provides an official, standardized attestation enabling automated
              scoring and acceptability checks.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">ESG & Reporting Frameworks</h3>
            <p className="text-[#475569] leading-relaxed text-lg">
              Certif-Scope is aligned with major frameworks such as GHG Protocol, ESRS, EU taxonomy,
              and SME proportionality rules, enabling consistent integration into both simplified
              and extended reporting formats.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION: METHOD */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-black text-[#0B3A63] text-center mb-16">
          Methodology Overview
        </h2>

        <p className="max-w-5xl mx-auto text-lg text-[#475569] leading-relaxed mb-20">
          Certif-Scope applies a standardized calculation method aligned with recognized frameworks
          such as the GHG Protocol and European SME proportionality rules. It follows a spend-based
          conversion for Scope 3, direct fuel conversion for Scope 1, and electricity coefficient
          conversion for Scope 2. Emission factors are sourced from reputable European datasets,
          including ADEME and EU energy intensity benchmarks.
        </p>

      </section>

      {/* SECTION: LONG FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-16">FAQ</h2>

        <div className="space-y-6">

          <details className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <summary className="font-bold text-[#0B3A63] cursor-pointer text-lg">
              Is the attestation accepted by banks?
            </summary>
            <p className="mt-4 text-[#475569] leading-relaxed">
              Yes. Certif-Scope provides all required elements: unique ID, tamper-resistant hash,
              verification portal, standardized methodology and clear scope breakdown.
            </p>
          </details>

          <details className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <summary className="font-bold text-[#0B3A63] cursor-pointer text-lg">
              Do I need to upload documents?
            </summary>
            <p className="mt-4 text-[#475569] leading-relaxed">
              No. All calculations happen locally. Nothing is stored or transmitted beyond what is
              required to generate the attestation PDF.
            </p>
          </details>

          <details className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <summary className="font-bold text-[#0B3A63] cursor-pointer text-lg">
              Does this replace a full carbon audit?
            </summary>
            <p className="mt-4 text-[#475569] leading-relaxed">
              No. For regulatory CSRD reporting or ISO 14064 certification, a complete audit is
              required. Certif-Scope provides a proportional, screening-level attestation tailored
              for SMEs and accepted in procurement and financing workflows.
            </p>
          </details>

        </div>

      </section>

      {/* ASSESSMENT FORM */}
      <section id="assessment" className="max-w-4xl mx-auto py-24 px-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-6">
          <AssessmentForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-24 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-4 text-xl">Certif-Scope</h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Certif-Scope is the European standard for verified SME carbon attestations.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-4 text-xl">Legal</h3>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li><Link href="/legal">Legal Notice</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/verify">Verify</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-4 text-xl">Contact</h3>
            <p className="text-sm text-[#475569] leading-relaxed">contact@certif-scope.com</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
