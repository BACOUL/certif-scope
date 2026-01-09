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
        <title>Certif-Scope — Verified Carbon Attestation for European SMEs</title>

        <meta
          name="description"
          content="The first European platform providing verified carbon attestations for SMEs. Fully compliant Scope 1, Scope 2 and Scope 3. Trusted by banks, procurement, insurers and auditors."
        />

        <meta
          name="keywords"
          content="carbon attestation, scope 1, scope 2, scope 3, CO2 certificate SME, ESG compliance, EU taxonomy, GHG protocol, procurement sustainability documentation"
        />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

        <link rel="canonical" href="https://certif-scope.com/" />
        <link rel="alternate" hrefLang="en" href="https://certif-scope.com/en/" />
        <link rel="alternate" hrefLang="fr" href="https://certif-scope.com/fr/" />
        <link rel="alternate" hrefLang="de" href="https://certif-scope.com/de/" />
        <link rel="alternate" hrefLang="x-default" href="https://certif-scope.com/" />

        <meta property="og:title" content="Verified CO₂ Attestation for European SMEs" />
        <meta property="og:description" content="Generate a verified Scope 1-2-3 attestation instantly." />
        <meta property="og:image" content="/og-image.png" />
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
            <Link href="#why-required">Why Required</Link>
            <Link href="#value">Value</Link>
            <Link href="#methodology">Methodology</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#assessment">Generate</Link>
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
              <Link href="#why-required" onClick={() => setMenuOpen(false)}>Why Required</Link>
              <Link href="#value" onClick={() => setMenuOpen(false)}>Value</Link>
              <Link href="#methodology" onClick={() => setMenuOpen(false)}>Methodology</Link>
              <Link href="#faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
              <Link href="#assessment" onClick={() => setMenuOpen(false)}>Generate</Link>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-28 text-center">

        <h1 className="text-5xl md:text-6xl font-black text-[#0B3A63] leading-tight tracking-tight">
          Europe’s First Verified<br />
          <span className="text-[#1FB6C1]">Carbon Attestation for SMEs</span>
        </h1>

        <p className="text-lg md:text-xl text-[#475569] max-w-4xl mx-auto mt-6 leading-relaxed">
          A fully verified, tamper-proof, procurement-ready CO₂ attestation accepted by banks,
          insurers, auditors and buyers. Scope 1, Scope 2 and Scope 3 included. Instant generation.
          Zero document uploads. Fully aligned with EU and GHG Protocol requirements.
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
            Verify Attestation
          </Link>
        </div>

        <Link href="/sample-pdf" className="text-sm underline text-[#1FB6C1] font-medium block mt-8">
          View a sample attestation
        </Link>

      </section>

      {/* VALUE PROPOSITION */}
      <section id="value" className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-black text-center text-[#0B3A63] mb-12">
          What Makes Certif-Scope Unique
        </h2>

        <p className="text-lg text-[#475569] leading-relaxed max-w-5xl mx-auto text-center mb-16">
          Certif-Scope solves the biggest friction in compliance workflows: producing a verified,
          standardized CO₂ attestation that is accepted by European institutions. Unlike calculators,
          our attestation is designed as a formal document that meets banking, procurement and audit
          expectations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-md">
            <h3 className="font-bold text-[#0B3A63] mb-4">Institutional-Grade Format</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Designed like a compliance-ready certificate: unique ID, tamper-proof hash,
              timestamp, signature, methodology reference and scope breakdown.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-md">
            <h3 className="font-bold text-[#0B3A63] mb-4">Complete Scope Coverage</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Scope 1, Scope 2 and Scope 3 included using standardized European emissions factors
              and GHG Protocol alignment.
            </p>
          </div>

          <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-md">
            <h3 className="font-bold text-[#0B3A63] mb-4">Fully Automated</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              No uploads, no waiting, no manual verification. Everything is computed locally
              and instantly.
            </p>
          </div>

        </div>
      </section>

      {/* WHY REQUIRED */}
      <section id="why-required" className="max-w-7xl mx-auto px-6 py-28">

        <h2 className="text-4xl font-black text-center text-[#0B3A63] mb-16">
          Why European SMEs Must Provide Carbon Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Banks & Financing</h3>
            <p className="text-[#475569] leading-relaxed text-lg">
              Banks require standardized CO₂ documentation for loans, refinancing and grants.
              Certif-Scope provides exactly the format they accept.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Procurement Platforms</h3>
            <p className="text-[#475569] leading-relaxed text-lg">
              Buyers request CO₂ data to assess supplier impact. Certif-Scope produces a PDF
              ready for documentation uploads.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Insurers & Risk Models</h3>
            <p className="text-[#475569] leading-relaxed text-lg">
              Sustainability indicators influence pricing. Our attestation enables automated checks.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">ESG & EU Taxonomy</h3>
            <p className="text-[#475569] leading-relaxed text-lg">
              Certif-Scope aligns with GHG Protocol, ESRS, SME proportionality and EU taxonomy
              screening rules.
            </p>
          </div>

        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology" className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-black text-center text-[#0B3A63] mb-16">
          Methodology
        </h2>

        <p className="max-w-5xl mx-auto text-lg text-[#475569] leading-relaxed mb-20">
          Certif-Scope uses a standardized methodology based on the GHG Protocol, combining
          spend-based factors for Scope 3, emission coefficients for energy consumption (Scope 2)
          and direct fuel factors (Scope 1). Data sources include ADEME, EU energy benchmarks, and
          recognized European intensity factors.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-black text-center text-[#0B3A63] mb-16">
          FAQ — Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <details className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <summary className="font-bold text-[#0B3A63] cursor-pointer text-lg">
              Is the attestation accepted by banks?
            </summary>
            <p className="mt-4 text-[#475569] leading-relaxed">
              Yes. It contains all required elements: unique ID, hash, methodology, scope breakdown
              and verification page.
            </p>
          </details>

          <details className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <summary className="font-bold text-[#0B3A63] cursor-pointer text-lg">
              Is any document upload required?
            </summary>
            <p className="mt-4 text-[#475569] leading-relaxed">
              No. Everything is processed locally. No storage. No external verification needed.
            </p>
          </details>

          <details className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <summary className="font-bold text-[#0B3A63] cursor-pointer text-lg">
              How long does it take?
            </summary>
            <p className="mt-4 text-[#475569] leading-relaxed">
              Less than 30 seconds from data input to final downloadable PDF.
            </p>
          </details>

        </div>
      </section>

      {/* FORM */}
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
              The verified carbon attestation platform for SMEs across Europe.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-4 text-xl">Legal</h3>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li><Link href="/legal">Legal Notice</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/verify">Verify Attestation</Link></li>
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
