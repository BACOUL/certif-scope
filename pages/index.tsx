import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

const AssessmentForm = dynamic(() => import("../components/AssessmentForm"), {
  ssr: false,
  loading: () => <p className="text-center">Loading…</p>
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      <Head>
        <title>Certif-Scope — Certified CO₂ Attestation for SMEs</title>
        <meta name="description" content="Official CO₂ attestation including Scope 1, Scope 2 and Scope 3 for SMEs across Europe. Trusted by banks, procurement and insurers." />
        <meta name="keywords" content="carbon attestation, CO2 certificate SME, scope 1 2 3, ESG compliance, procurement carbon screening, tender supplier documentation" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://certif-scope.com/" />
        <meta property="og:title" content="Certified CO₂ Attestation for SMEs" />
        <meta property="og:description" content="Instant CO₂ attestation trusted by banks, procurement and insurers." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-black">
            <span className="text-[#0B3A63]">Certif-</span>
            <span className="text-[#1FB6C1]">Scope</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#475569]">
            <Link href="/why-required">Why Required</Link>
            <Link href="/methodology">Methodology</Link>
            <Link href="/verify">Verify</Link>
            <Link href="/legal">Legal</Link>
          </nav>

          <a href="#assessment" className="hidden md:inline-flex bg-[#1FB6C1] text-white text-xs font-bold px-5 py-3 rounded-lg">
            Generate Attestation
          </a>

          <button className="md:hidden text-[#0B3A63]" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6">
            <nav className="flex flex-col gap-4 text-sm font-semibold text-[#475569]">
              <Link href="/why-required" onClick={() => setMenuOpen(false)}>Why Required</Link>
              <Link href="/methodology" onClick={() => setMenuOpen(false)}>Methodology</Link>
              <Link href="/verify" onClick={() => setMenuOpen(false)}>Verify</Link>
              <Link href="/legal" onClick={() => setMenuOpen(false)}>Legal</Link>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-[#0B3A63] mb-4 leading-tight">
          Instant Certified CO₂ Attestation for SMEs
        </h1>

        <h2 className="text-lg md:text-xl font-semibold text-[#1FB6C1] mb-4">
          Scope 1 • Scope 2 • Scope 3 Emissions
        </h2>

        <p className="text-lg text-[#475569] max-w-3xl mx-auto mb-10">
          Recognised for financing, procurement, insurance and supplier onboarding across Europe.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <a href="#assessment" className="bg-[#1FB6C1] text-white font-bold px-8 py-4 rounded-xl shadow text-lg">
            Generate Attestation
          </a>

          <Link href="/verify" className="bg-[#0B3A63] text-white font-bold px-8 py-4 rounded-xl shadow text-lg">
            Verify Attestation
          </Link>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <Link href="/sample-pdf" className="text-sm underline text-[#1FB6C1] font-medium">
            View sample attestation
          </Link>
        </div>
      </section>

      {/* LONG REGULATORY EXPLANATION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-12">
          Why SMEs across Europe increasingly need a CO₂ attestation
        </h2>

        <div className="prose max-w-none text-[#475569] leading-relaxed space-y-6">

          <p>
            Across Europe, SMEs are increasingly asked to provide transparent CO₂ data. This growing requirement is not a direct legal obligation, but a structural effect created by banks, insurers, procurement departments and large corporate buyers who now demand environmental data from all suppliers—regardless of size. This dynamic is driven by EU policies such as the Corporate Sustainability Reporting Directive (CSRD), the EU Taxonomy and sector-specific due diligence rules. Even if SMEs are not obligated to perform a full carbon audit, they are indirectly required to demonstrate environmental responsibility through screening-level CO₂ estimates.
          </p>

          <p>
            As a result, businesses offering services or products to larger companies face an immediate need to produce a baseline estimation of Scope 1, Scope 2 and Scope 3 emissions. Buyers increasingly refuse onboarding without a carbon document. Banks are now integrating environmental metrics into financing risk models. Insurers evaluate exposure based on sectoral intensity. Public procurement tenders require proof of sustainability alignment. In all cases, the SME must provide a structured and verifiable CO₂ estimation.
          </p>

          <p>
            Certif-Scope is designed specifically for this need: a fast, standardised, verifiable attestation that covers the three scopes, without requiring a full consultancy audit or intrusive data collection. The document is tamper-proof, uniquely identified, and includes a cryptographic hash ensuring file integrity. It does not replace a full audit but fulfils the immediate requirement of presenting an institutional-ready CO₂ baseline for administrative, financial or commercial validation.
          </p>
        </div>
      </section>

      {/* USE CASES — LONG */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-12">
          Practical use cases across industries
        </h2>

        <div className="prose max-w-none text-[#475569] space-y-8 leading-relaxed">

          <h3 className="text-2xl font-bold text-[#0B3A63]">Banking and financing</h3>
          <p>
            Financial institutions increasingly require environmental indicators for new financing applications. SMEs that lack structured CO₂ documentation may face delays, additional administrative reviews or less favourable financing conditions. Certif-Scope provides a recognised document that can be included in financing files, due diligence processes and refinancing applications.
          </p>

          <h3 className="text-2xl font-bold text-[#0B3A63]">Procurement and supplier onboarding</h3>
          <p>
            Large corporations screen suppliers based on environmental impact. Without a CO₂ attestation, onboarding may be rejected. Certif-Scope provides a compliant document for supplier qualification portals, procurement checklists and ESG compliance forms.
          </p>

          <h3 className="text-2xl font-bold text-[#0B3A63]">Insurance and risk assessment</h3>
          <p>
            Insurers integrate sustainability metrics into policy pricing. A verified CO₂ attestation helps an SME qualify for better coverage and demonstrates risk transparency. Certif-Scope’s verified structure provides insurers with a consistent screening basis.
          </p>

          <h3 className="text-2xl font-bold text-[#0B3A63]">Public tenders and EU funding</h3>
          <p>
            Many public tenders now require environmental documentation at submission stage. Certif-Scope provides a rapid way for SMEs to supply verified CO₂ metrics without needing a full audit, which is often costly and time-consuming.
          </p>
        </div>
      </section>

      {/* METHODOLOGY LONG */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-12">
          Methodology explained in detail
        </h2>

        <div className="prose max-w-none text-[#475569] space-y-8 leading-relaxed">
          <p>
            Certif-Scope applies a proportional and standardised methodology aligned with recognised frameworks, including GHG Protocol principles and monetary-based emission factors derived from ADEME and sector averages. The objective is not to replace a full audit but to provide a structured screening appropriate for SMEs.
          </p>

          <h3 className="text-2xl font-bold text-[#0B3A63]">Scope 1 — Direct emissions</h3>
          <p>
            Scope 1 corresponds to direct emissions from fuel consumption or gas heating. Certif-Scope converts annual expenditures into CO₂ equivalents using recognised factors. This method is particularly relevant for SMEs without precise meter data.
          </p>

          <h3 className="text-2xl font-bold text-[#0B3A63]">Scope 2 — Electricity-related emissions</h3>
          <p>
            Electricity consumption is converted using regional intensity coefficients. This ensures a coherent baseline even when energy documentation is incomplete.
          </p>

          <h3 className="text-2xl font-bold text-[#0B3A63]">Scope 3 — Value chain emissions</h3>
          <p>
            Scope 3 estimation uses sector-specific averages based on annual revenue. This approach is globally recognised for screening-level assessments and avoids heavy data collection from suppliers.
          </p>

          <h3 className="text-2xl font-bold text-[#0B3A63]">Sources of emission factors</h3>
          <ul>
            <li>ADEME Base Empreinte® 2023.1</li>
            <li>GHG Protocol recognised sector averages</li>
            <li>EU sustainability documentation guidelines</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#0B3A63]">Limitations</h3>
          <p>
            This attestation is intended for screening and compliance support. It is not an ISO-certified audit. It does not replace CSRD reporting obligations for large undertakings.
          </p>
        </div>
      </section>

      {/* FAQ LONG */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8 text-[#475569]">

          {[
            { q: "Is this accepted by banks?", a: "Yes. The attestation includes a verification link, unique ID and tamper-proof hash." },
            { q: "Why include Scope 3?", a: "EU procurement requires suppliers to screen indirect emissions. Without Scope 3 the document would be rejected by buyers." },
            { q: "Does Certif-Scope store my financial data?", a: "No. All calculations are performed locally. No raw financial data is transmitted to the server." },
            { q: "Is this compliant with GHG Protocol?", a: "Yes, using the SME-appropriate spend-based approach recognised for screening." },
            { q: "Is this valid for public tenders?", a: "Yes. It provides the baseline-level CO₂ information required in most EU tender documentation." },
            { q: "Is this legally binding?", a: "It is an official attestation but not an ISO audit nor a CSRD declaration." },
            { q: "Can the file be verified independently?", a: "Yes. Each attestation is cryptographically hashed and verifiable through a dedicated portal." }
          ].map((item, i) => (
            <details key={i} className="bg-white border border-slate-200 rounded-xl p-4">
              <summary className="font-bold text-[#0B3A63] cursor-pointer">{item.q}</summary>
              <p className="mt-2 text-sm">{item.a}</p>
            </details>
          ))}

        </div>
      </section>

      {/* ASSESSMENT FORM */}
      <section id="assessment" className="max-w-4xl mx-auto py-24 px-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4">
          <AssessmentForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-2">Certif-Scope</h3>
            <p className="text-sm text-[#475569]">
              Instant certified carbon footprint attestation for SMEs.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-2">Legal</h3>
            <ul className="text-sm text-[#475569] space-y-1">
              <li><Link href="/legal">Legal Notice</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Refund</Link></li>
              <li><Link href="/verify">Verify Attestation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-2">Contact</h3>
            <p className="text-sm text-[#475569]">contact@certif-scope.com</p>
          </div>

        </div>
      </footer>
    </div>
  );
      }
