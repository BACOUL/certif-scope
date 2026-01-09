export default function ComparisonSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-16">
        How Certif-Scope Compares to Existing Solutions
      </h2>

      {/* INTRO */}
      <p className="text-lg text-[#475569] max-w-5xl mx-auto leading-relaxed text-center mb-20">
        Most SMEs rely on tools that were never designed for procurement, banking or 
        regulatory documentation. Certif-Scope is the only platform engineered to produce 
        a standardized, verifiable, procurement-ready carbon attestation accepted by 
        European institutions. Below is an objective comparison showing where each 
        solution stands.
      </p>

      {/* MAIN COMPARISON TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-0 text-sm shadow-2xl rounded-xl overflow-hidden">
          
          <thead>
            <tr>
              <th className="bg-[#0B3A63] text-white font-bold p-6 text-left rounded-tl-xl">
                Criteria
              </th>
              <th className="bg-[#1FB6C1] text-white font-bold p-6 text-left">
                Certif-Scope
              </th>
              <th className="bg-[#E2E8F0] text-[#0B3A63] font-bold p-6 text-left">
                Online Calculators
              </th>
              <th className="bg-[#CBD5E1] text-[#0B3A63] font-bold p-6 text-left rounded-tr-xl">
                Audit Firms
              </th>
            </tr>
          </thead>

          <tbody>

            {/* Row 1 — Purpose */}
            <tr>
              <td className="border p-6 font-semibold text-[#0B3A63] bg-[#F8FAFC]">
                Primary Purpose
              </td>
              <td className="border p-6 bg-white">Verified attestation for institutional use</td>
              <td className="border p-6 bg-[#F1F5F9]">Basic estimate for awareness</td>
              <td className="border p-6 bg-[#F1F5F9]">Full regulatory audit for large enterprises</td>
            </tr>

            {/* Row 2 — Scope */}
            <tr>
              <td className="border p-6 font-semibold text-[#0B3A63] bg-[#F8FAFC]">
                Scope 1 • 2 • 3 Coverage
              </td>
              <td className="border p-6 bg-white font-bold text-green-600">✔ Full Scopes 1-2-3 Included</td>
              <td className="border p-6 bg-[#F1F5F9] text-slate-500">✖ Usually Scope 1-2 only</td>
              <td className="border p-6 bg-[#F1F5F9] text-slate-500">✔ Full, but requires lengthy process</td>
            </tr>

            {/* Row 3 — Verification */}
            <tr>
              <td className="border p-6 font-semibold text-[#0B3A63] bg-[#F8FAFC]">
                Verification Link & Hash
              </td>
              <td className="border p-6 bg-white font-bold text-green-600">✔ Yes (QR + Hash + ID)</td>
              <td className="border p-6 bg-[#F1F5F9] text-slate-500">✖ No verification mechanism</td>
              <td className="border p-6 bg-[#F1F5F9] text-slate-500">✔ Provided manually in audit report</td>
            </tr>

            {/* Row 4 — Delivery Time */}
            <tr>
              <td className="border p-6 font-semibold text-[#0B3A63] bg-[#F8FAFC]">
                Delivery Time
              </td>
              <td className="border p-6 bg-white font-bold text-green-600">Instant (Fully automated)</td>
              <td className="border p-6 bg-[#F1F5F9]">Instant (simple output)</td>
              <td className="border p-6 bg-[#F1F5F9]">Weeks to months</td>
            </tr>

            {/* Row 5 — SME Proportionality */}
            <tr>
              <td className="border p-6 font-semibold text-[#0B3A63] bg-[#F8FAFC]">
                SME Proportionality
              </td>
              <td className="border p-6 bg-white font-bold text-green-600">✔ Fully aligned with EU rules</td>
              <td className="border p-6 bg-[#F1F5F9]">✖ Not optimized for SME workflows</td>
              <td className="border p-6 bg-[#F1F5F9]">✔ But cost-prohibitive for SMEs</td>
            </tr>

            {/* Row 6 — Cost */}
            <tr>
              <td className="border p-6 font-semibold text-[#0B3A63] bg-[#F8FAFC]">
                Annual Cost
              </td>
              <td className="border p-6 bg-white font-bold text-green-600">Low, one-time fee</td>
              <td className="border p-6 bg-[#F1F5F9]">Low (free or freemium)</td>
              <td className="border p-6 bg-[#F1F5F9]">Very high (€5,000–€40,000)</td>
            </tr>

            {/* Row 7 — Data Privacy */}
            <tr>
              <td className="border p-6 font-semibold text-[#0B3A63] bg-[#F8FAFC]">
                Data Privacy
              </td>
              <td className="border p-6 bg-white font-bold text-green-600">
                No uploads — local processing
              </td>
              <td className="border p-6 bg-[#F1F5F9]">Often requires registration</td>
              <td className="border p-6 bg-[#F1F5F9]">Requires full financial disclosure</td>
            </tr>

            {/* Row 8 — Procurement Acceptance */}
            <tr>
              <td className="border p-6 font-semibold text-[#0B3A63] bg-[#F8FAFC]">
                Procurement Acceptance
              </td>
              <td className="border p-6 bg-white font-bold text-green-600">
                ✔ Fully compatible (ID + Hash + Scope breakdown)
              </td>
              <td className="border p-6 bg-[#F1F5F9]">✖ Not accepted in formal processes</td>
              <td className="border p-6 bg-[#F1F5F9]">✔ Yes, but high cost & delays</td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* CLOSING BLOCK */}
      <div className="bg-white shadow-xl border border-slate-200 rounded-2xl p-10 mt-20 text-center">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
          The Only Attestation Built for Real Institutional Use
        </h3>
        <p className="text-lg text-[#475569] max-w-4xl mx-auto leading-relaxed">
          Certif-Scope fills the gap between informal calculators and costly audits. It delivers 
          the only standardized, instantly verifiable attestation that SMEs can submit directly 
          to banks, insurers, procurement platforms and ESG scoring systems.
        </p>
      </div>

    </section>
  );
}
