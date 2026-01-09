export default function ProblemSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      <h2 className="text-3xl md:text-5xl font-black text-[#0B3A63] leading-tight text-center mb-16">
        The Compliance Gap Affecting<br />
        <span className="text-[#1FB6C1]">Over 22 Million European SMEs</span>
      </h2>

      <div className="max-w-5xl mx-auto text-center mb-20">
        <p className="text-lg text-[#475569] leading-relaxed">
          European SMEs now face mandatory CO₂ disclosure requirements requested by banks,
          insurers, procurement platforms, and corporate buyers. Yet, no unified and standardized
          attestation format exists for small businesses — creating a massive bottleneck in
          financing, tender participation, and ESG documentation workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* PROBLEM 1 */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-md p-8">
          <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
            1. No standardized format
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            Existing CO₂ calculators offer random estimates, but none produce
            an official, traceable, procurement-ready attestation matching institutional
            expectations with ID, timestamp, hash and methodology.
          </p>
        </div>

        {/* PROBLEM 2 */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-md p-8">
          <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
            2. Lack of Scope 3 coverage
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            Most tools ignore indirect value-chain emissions, even though procurement,
            ESG scoring systems and sustainability frameworks require full Scope 1–2–3
            coverage to accept suppliers.
          </p>
        </div>

        {/* PROBLEM 3 */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-md p-8">
          <h3 className="text-xl font-bold text-[#0B3A63] mb-4">
            3. Manual verification is too slow
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            Traditional audits take weeks, require interviews, and cost thousands of euros.
            SMEs require an instant, automated solution that produces a compliant attestation
            without delays or manual input from consultants.
          </p>
        </div>

      </div>

      <div className="max-w-4xl mx-auto mt-20 text-center">
        <p className="text-lg text-[#475569] leading-relaxed">
          The result is a widespread “documentation gap” preventing millions of
          SMEs from complying with new European ESG requirements. Certif-Scope
          solves this gap with the first automated, verification-ready attestation
          engineered specifically for small and medium enterprises.
        </p>
      </div>

    </section>
  );
}
