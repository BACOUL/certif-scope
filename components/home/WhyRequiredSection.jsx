export default function WhyRequiredSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      {/* HEADLINE */}
      <h2 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-14">
        Why European SMEs Are Now Required to Provide Carbon Attestations
      </h2>

      {/* INTRO */}
      <p className="text-lg text-[#475569] leading-relaxed max-w-5xl mx-auto text-center mb-20">
        Since 2024, European banks, insurers, procurement platforms and large companies have 
        intensified their ESG compliance requirements. Even small businesses must now provide 
        <strong>verified and standardized CO₂ data</strong> to remain eligible for tenders, financing,
        supplier onboarding, risk scoring and partnership renewals.
      </p>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* BLOCK 1 */}
        <div>
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">1. Supply Chain & Procurement Pressure</h3>
          <p className="text-[#475569] leading-relaxed text-lg">
            Large companies subject to the CSRD and ESRS regulations are now legally obligated to
            collect CO₂ information from their suppliers — including SMEs. This creates a cascade 
            effect: every vendor must provide standardized emissions data, whether or not they are 
            directly regulated.
          </p>
          <ul className="list-disc ml-6 mt-4 text-[#475569] text-base space-y-2">
            <li>Supplier onboarding portals require emissions documentation</li>
            <li>Public tenders enforce sustainability disclosure</li>
            <li>Purchasing teams prioritize suppliers with transparent CO₂ data</li>
          </ul>
        </div>

        {/* BLOCK 2 */}
        <div>
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">2. Banks & Finance Require Carbon Documentation</h3>
          <p className="text-[#475569] leading-relaxed text-lg">
            Financial institutions across Europe have integrated sustainability scoring into 
            loan approvals, leasing, refinancing and grants. SMEs must now provide CO₂ data 
            to remain eligible, especially in sectors considered “environmentally exposed.”
          </p>
          <ul className="list-disc ml-6 mt-4 text-[#475569] text-base space-y-2">
            <li>Risk scoring models use Scope 1-2-3 intensity</li>
            <li>Green financing requires basic CO₂ evidence</li>
            <li>Subsidies and grants may ask for carbon documentation</li>
          </ul>
        </div>

        {/* BLOCK 3 */}
        <div>
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">3. Insurance & Risk Pricing Models</h3>
          <p className="text-[#475569] leading-relaxed text-lg">
            Insurers are increasingly integrating environmental indicators into risk assessment 
            and premium calculation. Companies with no carbon documentation may face higher rates 
            or reduced coverage options.
          </p>
          <ul className="list-disc ml-6 mt-4 text-[#475569] text-base space-y-2">
            <li>Coverage eligibility depends on sustainability metrics</li>
            <li>Risk-adjusted premiums include environmental exposure</li>
            <li>Missing CO₂ documentation triggers “high-risk” flags</li>
          </ul>
        </div>

        {/* BLOCK 4 */}
        <div>
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">4. CSRD & ESRS Indirect Requirements</h3>
          <p className="text-[#475569] leading-relaxed text-lg">
            Even though SMEs are not directly regulated under CSRD, they are indirectly impacted 
            because their emissions become part of their clients' Scope 3 reporting obligations.
          </p>
          <ul className="list-disc ml-6 mt-4 text-[#475569] text-base space-y-2">
            <li>Large companies must collect supplier emissions</li>
            <li>SMEs without data risk being excluded from contracts</li>
            <li>ESRS requires suppliers to provide emission breakdowns</li>
          </ul>
        </div>

      </div>

      {/* MINI SUMMARY */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-md p-10 mt-20 max-w-5xl mx-auto">
        <h3 className="font-bold text-[#0B3A63] text-xl mb-3 text-center">
          What this means for SMEs
        </h3>

        <p className="text-[#475569] leading-relaxed text-center text-lg">
          A simple CO₂ calculator is no longer sufficient. SMEs must provide a 
          <strong>verified, formatted and procurement-ready</strong> attestation that includes
          Scope 1, Scope 2 and Scope 3, with a traceable methodology.
        </p>

        <p className="text-center text-[#0B3A63] font-bold mt-6 text-lg">
          This is exactly what Certif-Scope delivers.
        </p>
      </div>

    </section>
  );
}
