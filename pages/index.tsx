import AssessmentForm from '../components/AssessmentForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* HEADER */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-slate-100">
        <div className="text-2xl font-black text-blue-600 tracking-tighter">
          CERTIF-SCOPE
        </div>
        <div className="flex gap-6 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <Link href="/legal" className="hover:text-blue-600">
            Legal
          </Link>
          <a href="#methodology" className="hover:text-blue-600">
            Methodology
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          Your Carbon Footprint{' '}
          <span className="text-blue-600">Pre-Compliance Attestation</span>
          <br />
          in 5 minutes.
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Generate a standardized carbon footprint attestation aligned with the
          <strong> VSME standard</strong> and compatible with
          <strong> CSRD value-chain reporting</strong>.
          <br />
          Designed for ESG questionnaires, banking requests and tender
          documentation.
        </p>
      </header>

      {/* REGULATORY & BUSINESS VALUE */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-blue-600 mb-4">
              CSRD Value-Chain Alignment
            </h3>
            <p className="text-sm text-slate-500">
              While CSRD primarily applies to large companies, SMEs are increasingly
              required to provide carbon data as part of their partners’ CSRD
              reporting obligations. Certif-Scope helps you respond with a
              structured, standardized document.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-blue-600 mb-4">
              ESG & Banking Requests
            </h3>
            <p className="text-sm text-slate-500">
              Financial institutions increasingly request carbon footprint
              indicators as part of ESG assessments. Certif-Scope provides a
              methodological attestation suitable for such requests, without
              requiring a full audit.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-blue-600 mb-4">
              Tenders & Procurement
            </h3>
            <p className="text-sm text-slate-500">
              Strengthen your bids by attaching a greenhouse gas emissions
              attestation aligned with recognized standards (GHG Protocol),
              commonly expected in public and private procurement processes.
            </p>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section
        id="methodology"
        className="max-w-4xl mx-auto py-20 px-6"
      >
        <h2 className="text-3xl font-black mb-8 text-center">
          Transparent & Recognized Methodology
        </h2>

        <div className="space-y-6 text-slate-700">
          <p>
            The calculation engine relies on the{' '}
            <strong>spend-based method</strong> as defined in the{' '}
            <strong>GHG Protocol Corporate Standard</strong>.
            Your accounting expenditures are matched with official emission
            factors from the <strong>ADEME Base Empreinte</strong>.
          </p>

          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
            <h4 className="font-bold mb-2">Emission scopes covered:</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Scope 1:</strong> Direct emissions (fuel consumption,
                refrigerant gases).
              </li>
              <li>
                <strong>Scope 2:</strong> Indirect energy emissions (electricity).
              </li>
              <li>
                <strong>Scope 3:</strong> Value-chain emissions (purchased goods
                and services, sector-based estimation).
              </li>
            </ul>
          </div>

          <p className="text-sm text-slate-500">
            This approach provides a fast, standardized estimation. Results are
            indicative and do not replace a full carbon audit conducted by an
            accredited expert.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black italic">
            Start your assessment
          </h2>
          <p className="text-slate-400">
            Free simulation · €99 for the downloadable attestation
          </p>
        </div>
        <AssessmentForm />
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-500 py-12 px-6 text-center">
        <p className="mb-4">
          © 2026 TimeProofs — Jeason Bacoul (Sole Proprietor) · SIREN 999 356 439
        </p>
        <div className="flex justify-center gap-6 text-xs uppercase tracking-widest font-bold">
          <Link href="/legal" className="hover:text-white">
            Legal notice
          </Link>
          <Link href="/legal" className="hover:text-white">
            Terms
          </Link>
          <a
            href="mailto:contact@timeproofs.io"
            className="hover:text-white"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
      }
