export default function ValuePropositionSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      <h2 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-14">
        Why Certif-Scope Is the Only Fully Validated CO₂ Attestation for SMEs
      </h2>

      <p className="text-lg text-[#475569] leading-relaxed max-w-5xl mx-auto text-center mb-20">
        Traditional calculators generate estimates that cannot be used in procurement,
        financing or insurance contexts. Certif-Scope provides the first <strong>verified, 
        tamper-proof and compliance-ready attestation</strong> specifically engineered 
        for small and medium businesses across Europe.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Block 1 */}
        <div className="bg-white p-10 border border-slate-200 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
          <h3 className="text-[#0B3A63] font-bold text-xl mb-3">Institution-Grade Format</h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            The attestation includes all mandatory compliance markers: unique ID,
            hash signature, QR verification portal, timestamp, scope breakdown,
            methodology reference and consistency indicators. Fully suitable for
            banks, public procurement portals, insurers and auditors.
          </p>
        </div>

        {/* Block 2 */}
        <div className="bg-white p-10 border border-slate-200 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
          <h3 className="text-[#0B3A63] font-bold text-xl mb-3">Full Scope 1 · 2 · 3 Coverage</h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            Unlike partial calculators, Certif-Scope computes all scopes using
            GHG Protocol aligned factors. Scope 3 is estimated through a
            standardized spend-based model, enabling compatibility with procurement
            requests and ESG questionnaires.
          </p>
        </div>

        {/* Block 3 */}
        <div className="bg-white p-10 border border-slate-200 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
          <h3 className="text-[#0B3A63] font-bold text-xl mb-3">Instant • Private • Automated</h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            No document upload. No data retention. No pending review. All processing 
            occurs locally on the device. The attestation is generated instantly and 
            verifiable independently at any time, without depending on servers.
          </p>
        </div>

      </div>
    </section>
  );
}
