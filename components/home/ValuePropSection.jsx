export default function ValuePropSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      <h2 className="text-3xl md:text-5xl font-black text-center text-[#0B3A63] leading-tight mb-16">
        The First Fully Verified Carbon Attestation<br />
        <span className="text-[#1FB6C1]">Designed Specifically for SMEs</span>
      </h2>

      <p className="max-w-5xl mx-auto text-lg text-[#475569] text-center leading-relaxed mb-20">
        Unlike calculators or consultancy reports, Certif-Scope provides a standardized,
        tamper-proof attestation engineered to satisfy the documentation requirements of banking,
        procurement, insurance, ESG reporting and sustainability evaluations. Built for small
        businesses, trusted by institutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* VALUE 1 */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-10">
          <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
            Verified & tamper-proof
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            Every attestation includes a unique identifier, hash signature, timestamp, QR code,
            and verification URL. Institutions can validate authenticity instantly without relying
            on manual checks or external communication.
          </p>
        </div>

        {/* VALUE 2 */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-10">
          <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
            Complete Scope 1 • Scope 2 • Scope 3
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            Automatically computes direct emissions, energy emissions, and full value-chain
            emissions using GHG Protocol approved conversion factors and European SME-adapted
            proportionality rules.
          </p>
        </div>

        {/* VALUE 3 */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-10">
          <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
            Instant generation — no consultant needed
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            Traditional audits take weeks and cost thousands. Certif-Scope delivers the required
            attestation in less than 60 seconds, fully compliant and ready for institutional review.
          </p>
        </div>

        {/* VALUE 4 */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-10">
          <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
            Procurement-ready formatting
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            The output PDF is formatted for direct upload into public tenders, B2B procurement
            portals, ESG documentation systems and bank application portals — no additional
            transformation is required.
          </p>
        </div>

        {/* VALUE 5 */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-10">
          <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
            Fully private — no data stored
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            All calculations happen locally in the browser. No raw financial documents or sensitive
            data are uploaded or retained. This ensures maximum confidentiality for SMEs.
          </p>
        </div>

        {/* VALUE 6 */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-10">
          <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
            Designed for institutional trust
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            The attestation includes audit-compatible metadata, methodology references, emission
            factors, calculation transparency and reproducibility — ensuring it can be used
            confidently by banks, insurers and procurement teams.
          </p>
        </div>

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
