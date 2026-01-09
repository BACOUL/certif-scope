export default function ComparisonSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      <h2 className="text-3xl md:text-5xl font-black text-center text-[#0B3A63] leading-tight mb-16">
        How Certif-Scope Compares to Alternatives
      </h2>

      <p className="max-w-5xl mx-auto text-lg text-[#475569] text-center leading-relaxed mb-20">
        Most SMEs struggle to provide carbon documentation because available solutions are
        incomplete, slow, or too expensive. Certif-Scope is the first platform built specifically
        to generate a **verified, procurement-ready attestation**, not just a calculation.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left shadow-xl rounded-xl overflow-hidden">
          
          <thead className="bg-[#0B3A63] text-white text-sm md:text-base">
            <tr>
              <th className="p-5">Feature</th>
              <th className="p-5">Certif-Scope</th>
              <th className="p-5">Online Calculators</th>
              <th className="p-5">Consultants & Audits</th>
            </tr>
          </thead>

          <tbody className="text-sm md:text-base text-[#475569] bg-white">

            <tr className="border-b border-slate-200">
              <td className="p-5 font-bold text-[#0B3A63]">Verified Attestation</td>
              <td className="p-5 text-green-600 font-bold">YES ✓</td>
              <td className="p-5 text-red-600">NO ✕</td>
              <td className="p-5 text-orange-600">PARTIAL ~</td>
            </tr>

            <tr className="border-b border-slate-200">
              <td className="p-5 font-bold text-[#0B3A63]">Institution-ready PDF</td>
              <td className="p-5 text-green-600 font-bold">YES ✓</td>
              <td className="p-5 text-red-600">NO ✕</td>
              <td className="p-5 text-orange-600">Requires request / extra cost</td>
            </tr>

            <tr className="border-b border-slate-200">
              <td className="p-5 font-bold text-[#0B3A63]">Covers Scope 1 + 2 + 3</td>
              <td className="p-5 text-green-600 font-bold">YES ✓</td>
              <td className="p-5 text-red-600">NO (usually 1–2 only)</td>
              <td className="p-5 text-orange-600">YES but expensive</td>
            </tr>

            <tr className="border-b border-slate-200">
              <td className="p-5 font-bold text-[#0B3A63]">Fully Automated</td>
              <td className="p-5 text-green-600 font-bold">YES ✓</td>
              <td className="p-5 text-red-600">YES (but incomplete)</td>
              <td className="p-5 text-orange-600">NO (manual review)</td>
            </tr>

            <tr className="border-b border-slate-200">
              <td className="p-5 font-bold text-[#0B3A63]">Data Privacy</td>
              <td className="p-5 text-green-600 font-bold">Local – No upload ✓</td>
              <td className="p-5 text-red-600">Often stores data ✕</td>
              <td className="p-5 text-orange-600">Stores sensitive files</td>
            </tr>

            <tr className="border-b border-slate-200">
              <td className="p-5 font-bold text-[#0B3A63]">Delivery Time</td>
              <td className="p-5 text-green-600 font-bold">&lt; 60 seconds ✓</td>
              <td className="p-5 text-orange-600">Instant, but not verified</td>
              <td className="p-5 text-red-600">2–6 weeks</td>
            </tr>

            <tr className="border-b border-slate-200">
              <td className="p-5 font-bold text-[#0B3A63]">Cost</td>
              <td className="p-5 text-green-600 font-bold">Low, fixed ✓</td>
              <td className="p-5 text-green-600">Low</td>
              <td className="p-5 text-red-600">High (1000–5000€)</td>
            </tr>

            <tr>
              <td className="p-5 font-bold text-[#0B3A63]">Designed for SMEs</td>
              <td className="p-5 text-green-600 font-bold">YES ✓</td>
              <td className="p-5 text-orange-600">Not adapted</td>
              <td className="p-5 text-orange-600">Over-engineered</td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className="text-center mt-20">
        <a
          href="#assessment"
          className="inline-block bg-[#1FB6C1] text-white px-12 py-5 font-bold rounded-xl shadow-xl hover:bg-[#19a8ae] transition text-lg"
        >
          Generate My Attestation Now
        </a>
      </div>

    </section>
  );
}
