import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import { testimonials } from "../components/testimonials";

const AssessmentForm = dynamic(() => import("../components/AssessmentForm"), {
  ssr: false,
  loading: () => <p className="text-center">Loading…</p>
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      <Head>
        <title>Certif-Scope — Instant SME Carbon Footprint Attestation (Scope 1 · Scope 2 · Scope 3)</title>

        <meta
          name="description"
          content="Generate an instant carbon footprint attestation for SMEs. Full Scope 1, Scope 2 and Scope 3 emissions estimation. Accepted by banks, procurement and insurers. Compliant with ESG requirements."
        />

        <meta
          name="keywords"
          content="carbon footprint SME, scope 1 2 3 emissions, CO2 report, ESG attestation, procurement compliance, SME sustainability documentation, carbon reporting, CO2 certificate"
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <link rel="canonical" href="https://certif-scope.com/en/" />
        <link rel="alternate" href="https://certif-scope.com/en/" hrefLang="en" />
        <link rel="alternate" href="https://certif-scope.com/fr/" hrefLang="fr" />
        <link rel="alternate" href="https://certif-scope.com/de/" hrefLang="de" />
        <link rel="alternate" href="https://certif-scope.com/" hrefLang="x-default" />

        <meta property="og:title" content="Certif-Scope — Instant SME Carbon Attestation" />
        <meta
          property="og:description"
          content="Generate a verifiable Scope 1, Scope 2 and Scope 3 emissions attestation, accepted by European banks and procurement."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://certif-scope.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Certif-Scope — SME Carbon Footprint Attestation" />
        <meta
          name="twitter:description"
          content="Instant CO2 attestation for SMEs. Scope 1, Scope 2 and Scope 3 emissions. Accepted for financing and procurement."
        />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Certif-Scope",
              "url": "https://certif-scope.com",
              "logo": "https://certif-scope.com/og-image.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@certif-scope.com",
                "contactType": "customer support"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://certif-scope.com/"
                }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Certif-Scope",
              "url": "https://certif-scope.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://certif-scope.com/search?q={query}",
                "query-input": "required name=query"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is the attestation accepted by banks?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Most European banks require a carbon indicator for financing applications."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does it include Scope 3 emissions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. The spend-based method includes Scope 3 using internationally recognised factors."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does it comply with ESG requirements?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The attestation aligns with EU proportionality principles and procurement ESG guidelines."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do SMEs need a full certified carbon audit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No full audit is required unless legally mandated for specific sectors."
                  }
                }
              ]
            })
          }}
        />
      </Head>

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

          <a
            href="#assessment"
            className="hidden md:inline-flex bg-[#1FB6C1] text-white text-xs font-bold px-5 py-3 rounded-lg"
          >
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

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-[#0B3A63] mb-6">
          Instant Carbon Footprint Attestation for SMEs
        </h1>

        <h2 className="text-xl md:text-2xl font-bold text-[#1FB6C1] mb-6">
          Scope 1 · Scope 2 · Scope 3 Emissions
        </h2>

        <p className="text-lg text-[#475569] max-w-3xl mx-auto mb-10">
          Generate a verifiable carbon footprint attestation instantly. Trusted by European banks, procurement departments and insurers.
        </p>

        <a
          href="#assessment"
          className="inline-flex bg-[#1FB6C1] text-white font-bold px-8 py-4 rounded-xl shadow text-lg"
        >
          Generate my verified CO₂ attestation
        </a>

        <div className="mt-8 flex flex-col items-center gap-2">
          <Link href="/sample-pdf" className="text-sm underline text-[#475569]">View sample attestation</Link>
          <Link href="/verify" className="text-sm underline text-[#475569]">Verify an attestation</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-12">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h3 className="font-bold text-[#0B3A63] mb-2">1. Enter your spending</h3>
            <p className="text-[#475569] text-sm">
              Add your annual expenses per category. No documents needed.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h3 className="font-bold text-[#0B3A63] mb-2">2. Instant calculation</h3>
            <p className="text-[#475569] text-sm">
              Our engine applies recognized emission factors (Scope 1–2–3).
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h3 className="font-bold text-[#0B3A63] mb-2">3. Download your attestation</h3>
            <p className="text-[#475569] text-sm">
              Receive a ready-to-send PDF accepted by banks & procurement.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-10">
          Why European SMEs Use Certif-Scope
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#475569] text-lg">
          <li className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            Accepted by banks for financing applications.
          </li>
          <li className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            Valid for procurement documentation and supplier onboarding.
          </li>
          <li className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            Used by insurers requiring climate-risk indicators.
          </li>
        </ul>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-12">
          Testimonials from European SMEs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <p className="text-sm text-[#475569] mb-4">“{t.text}”</p>
              <p className="font-bold text-[#0B3A63]">{t.author}</p>
              <p className="text-xs text-[#64748B]">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-10">
          Methodology overview
        </h2>

        <p className="text-center text-[#475569] max-w-3xl mx-auto mb-10">
          Certif-Scope uses a spend-based calculation aligned with the GHG Protocol.
          Emissions are derived from monetary activity and standardized emission factors
          covering Scope 1, Scope 2, and Scope 3. This method is recognized for SMEs
          under proportionality rules across EU procurement and ESG screening.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#475569] text-sm">
          <li className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            Based on internationally recognized emission factors
          </li>
          <li className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            Includes Supplier + Upstream + Operational emissions
          </li>
          <li className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            Fully aligned with SME proportionality requirements
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-12">
          FAQ — Carbon Attestation for SMEs
        </h2>

        <div className="space-y-6 text-[#475569]">

          <details className="bg-white border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-[#0B3A63] cursor-pointer">Is the attestation accepted by banks?</summary>
            <p className="mt-2 text-sm">Yes. Most European banks require a carbon indicator as part of ESG due diligence.</p>
          </details>

          <details className="bg-white border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-[#0B3A63] cursor-pointer">Does it include Scope 3 emissions?</summary>
            <p className="mt-2 text-sm">Yes. The spend-based methodology includes Scope 3 emissions factors.</p>
          </details>

          <details className="bg-white border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-[#0B3A63] cursor-pointer">Is this compliant with ESG requirements?</summary>
            <p className="mt-2 text-sm">Yes. It follows EU proportionality principles for SMEs.</p>
          </details>

          <details className="bg-white border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-[#0B3A63] cursor-pointer">Do SMEs need a certified carbon audit?</summary>
            <p className="mt-2 text-sm">No. A full audit is only required in specific regulated sectors.</p>
          </details>

        </div>
      </section>

      <section id="assessment" className="max-w-4xl mx-auto py-24 px-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4">
          <AssessmentForm />
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-bold text-[#0B3A63] mb-2">Certif-Scope</h3>
            <p className="text-sm text-[#475569]">
              Instant verifiable carbon footprint attestation for SMEs.
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
