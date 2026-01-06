import AssessmentForm from '../components/AssessmentForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white font-sans text-[#1E293B]">

      {/* HEADER */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-slate-100">
        <div className="text-2xl font-black tracking-tight">
          <span className="text-[#0B3A63]">Certif-</span>
          <span className="text-[#1FB6C1]">Scope</span>
        </div>

        <div className="flex gap-6 text-xs font-bold text-[#64748B] uppercase tracking-widest">
          <a href="#how-it-works" className="hover:text-[#1FB6C1] transition">
            How it works
          </a>
          <a href="#methodology" className="hover:text-[#1FB6C1] transition">
            Methodology
          </a>
          <a href="#faq" className="hover:text-[#1FB6C1] transition">
            FAQ
          </a>
          <Link href="/legal" className="hover:text-[#1FB6C1] transition">
            Legal
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-6xl mx-auto px-6 py-32 text-center">
        <span className="inline-block mb-6 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-[#E6F6F7] text-[#0B3A63]">
          ESG pre-compliance for SMEs
        </span>

        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-[#0B3A63]">
          A carbon footprint attestation
          <br />
          <span className="text-[#1FB6C1]">
            built for real-world decisions
          </span>
        </h1>

        <p className="text-xl text-[#475569] leading-relaxed max-w-3xl mx-auto mb-14">
          Certif-Scope helps small and medium-sized businesses generate a
          standardized carbon footprint attestation aligned with the
          <strong> VSME standard</strong> and compatible with
          <strong> CSRD value-chain expectations</strong>.
        </p>

        <a
          href="#assessment"
          className="inline-flex items-center justify-center bg-[#1FB6C1] text-white font-bold px-12 py-4 rounded-xl shadow-lg hover:bg-[#17A2AC] transition"
        >
          Get a free preview
        </a>

        <p className="mt-6 text-sm text-[#64748B]">
          No account · No data storage · €99 only if you download the attestation
        </p>
      </header>

      {/* TRUST BLOCKS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h3 className="font-bold text-[#0B3A63] mb-3">
              What this is
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              A methodological, standardized carbon footprint attestation
              designed for ESG questionnaires, partner reporting and procurement
              documentation.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h3 className="font-bold text-[#0B3A63] mb-3">
              What this is not
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Not a statutory CSRD filing. Not a certified audit. Not a regulatory
              declaration. It does not replace assessments by accredited experts
              when legally required.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h3 className="font-bold text-[#0B3A63] mb-3">
              Privacy by design
            </h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              All calculations run locally in your browser.
              No raw financial or accounting data is transmitted or stored.
            </p>
          </div>

        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-[#E6F6F7] py-28 px-6">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-black mb-4 text-[#0B3A63]">
            Why carbon data is now expected
          </h2>
          <p className="text-[#475569] max-w-3xl mx-auto">
            Carbon indicators are no longer optional. Even SMEs not directly
            subject to CSRD are increasingly expected to provide reliable data.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            ['Corporate buyers', 'CSRD requires large companies to report Scope 3 emissions, pushing carbon data requests down the supply chain.'],
            ['Banks & financing', 'Financial institutions integrate ESG metrics into credit decisions and risk assessments.'],
            ['Tenders & procurement', 'Public and private tenders increasingly expect documented greenhouse gas emissions.']
          ].map(([title, text], i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-[#1FB6C1] mb-3">{title}</h3>
              <p className="text-sm text-[#475569]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="max-w-6xl mx-auto py-28 px-6">
        <h2 className="text-3xl font-black mb-20 text-center text-[#0B3A63]">
          A simple, rational process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center">
          {[
            ['01', 'Provide high-level inputs', 'Revenue and energy expenses. No granular accounting required.'],
            ['02', 'Instant estimation', 'Spend-based calculation using recognized emission factors.'],
            ['03', 'Download attestation', 'A clear, shareable PDF for banks, buyers and procurement teams.']
          ].map(([step, title, text]) => (
            <div key={step}>
              <div className="text-[#1FB6C1] font-black text-4xl mb-6">{step}</div>
              <h3 className="font-bold mb-3 text-[#0B3A63]">{title}</h3>
              <p className="text-sm text-[#475569]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology" className="bg-[#E6F6F7] py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10 text-center text-[#0B3A63]">
            Methodology
          </h2>

          <div className="space-y-8 text-[#334155]">
            <p>
              Certif-Scope applies a <strong>spend-based estimation approach</strong>
              inspired by the <strong>GHG Protocol Corporate Standard</strong>,
              using emission factors from the <strong>ADEME Base Empreinte</strong>.
            </p>

            <div className="bg-white p-6 rounded-xl border-l-4 border-[#1FB6C1] shadow-sm">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Scope 1:</strong> Direct emissions</li>
                <li><strong>Scope 2:</strong> Indirect energy emissions</li>
                <li><strong>Scope 3:</strong> Value-chain emissions</li>
              </ul>
            </div>

            <p className="text-sm text-[#475569]">
              Results are indicative and intended for pre-compliance and partner
              reporting only.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="assessment" className="max-w-4xl mx-auto py-28 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-3 text-[#0B3A63]">
            Start your assessment
          </h2>
          <p className="text-[#64748B]">
            Free preview · €99 only if you choose to download the attestation
          </p>
        </div>

        <AssessmentForm />
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 pb-28">
        <h2 className="text-3xl font-black mb-12 text-center text-[#0B3A63]">
          Frequently asked questions
        </h2>

        <div className="space-y-8">
          {[
            ['Is this legally binding?', 'No. This is a methodological attestation for pre-compliance and reporting purposes.'],
            ['Is my data stored?', 'No. All calculations are performed locally in your browser.'],
            ['Who is this for?', 'SMEs responding to ESG requests from banks, clients or procurement processes.'],
            ['What do I receive?', 'A downloadable PDF carbon footprint attestation after payment.']
          ].map(([q, a], i) => (
            <div key={i} className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-[#0B3A63] mb-2">{q}</h3>
              <p className="text-sm text-[#475569]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B3A63] text-[#CBD5E1] py-12 px-6 text-center">
        <p className="mb-4">
          © 2026 TimeProofs — Jeason Bacoul (Sole Proprietor) · SIREN 999 356 439
        </p>
        <div className="flex justify-center gap-6 text-xs uppercase tracking-widest font-bold">
          <Link href="/legal" className="hover:text-white">Legal notice</Link>
          <a href="#top" className="hover:text-white">Back to top</a>
          <a href="mailto:contact@timeproofs.io" className="hover:text-white">Contact</a>
        </div>
      </footer>

    </div>
  );
}
