import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

// Dynamic import for the assessment form
const AssessmentWrapper = dynamic(
  () => import("../components/AssessmentWrapper"),
  { ssr: false, loading: () => <p className="text-center">Loading…</p> }
);

// Modular sections
import Hero from "../components/Hero";
import Trusted from "../components/Trusted";
import HowItWorks from "../components/HowItWorks";
import ComparisonTable from "../components/ComparisonTable";
import PdfMockup from "../components/PdfMockup";
import SecurityBlock from "../components/SecurityBlock";
import TestimonialsSlider from "../components/TestimonialsSlider";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[#F8FAFC] font-sans text-[#1E293B]">

      {/* SEO */}
      <Head>
        <title>Certif-Scope — Instant Carbon Footprint Attestation for SMEs</title>
        <meta
          name="description"
          content="Generate an instant, verifiable carbon footprint attestation (Scope 1 · Scope 2 · Scope 3) for SMEs across Europe."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://certif-scope.com/" />
        <link rel="preload" href="/sample-attestation.png" as="image" />
      </Head>

      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-[#0B3A63]">Certif-</span>
            <span className="text-[#1FB6C1]">Scope</span>
          </Link>

          {/* Desktop Menu */}
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
            Start Assessment
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0B3A63]"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
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

      {/* MAIN CONTENT */}
      <main role="main">

        {/* HERO BLOCK */}
        <Hero />

        {/* TRUSTED BLOCK */}
        <Trusted />

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* COMPARISON TABLE */}
        <ComparisonTable />

        {/* PDF MOCKUP (Preview of attestation) */}
        <PdfMockup />

        {/* SECURITY / VERIFICATION SECTION */}
        <SecurityBlock />

        {/* TESTIMONIALS */}
        <TestimonialsSlider />

        {/* ASSESSMENT FORM */}
        <section id="assessment" className="max-w-4xl mx-auto py-24 px-6">
          <AssessmentWrapper />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <h3 className="font-bold text-[#0B3A63] mb-2">Certif-Scope</h3>
            <p className="text-sm text-[#475569]">
              Independent ESG Screening Service. Privacy-first. Verifiable attestations.
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
