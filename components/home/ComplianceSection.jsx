export default function ComplianceSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-14">
        EU Compliance & Regulatory Alignment
      </h2>

      {/* INTRO */}
      <p className="text-lg leading-relaxed text-[#475569] max-w-6xl mx-auto text-center mb-20">
        Certif-Scope is designed to comply with the main European regulatory frameworks that 
        require carbon transparency across supply chains. It supports procurement, banking, 
        insurance and ESG reporting workflows by providing a standardized, verifiable and 
        instantly deliverable CO₂ attestation specifically adapted for SMEs. The methodology 
        aligns with CSRD, ESRS, EU Taxonomy, and GHG Protocol screening guidelines.
      </p>

      {/* 4-BLOCK GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-28">

        {/* BLOCK 1 — CSRD */}
        <div className="bg-white p-10 border border-slate-200 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
            CSRD — Corporate Sustainability Reporting Directive
          </h3>
          <p className="text-[#475569] leading-relaxed">
            Under CSRD, large companies must report detailed CO₂ data including upstream and 
            downstream emissions. As a result, all suppliers—even micro and small businesses—
            are increasingly required to provide carbon documentation. Certif-Scope provides 
            a standardized screening-level attestation adapted for submission to buyers covered 
            by CSRD obligations.
          </p>
        </div>

        {/* BLOCK 2 — ESRS */}
        <div className="bg-white p-10 border border-slate-200 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
            ESRS — European Sustainability Reporting Standards
          </h3>
          <p className="text-[#475569] leading-relaxed">
            ESRS E1 (Climate) requires companies to collect emissions data across all scopes. 
            Certif-Scope structures the attestation with clear Scope 1, Scope 2 and Scope 3 data 
            to ensure compatibility with ESRS disclosure tables and procurement questionnaires.
          </p>
        </div>

        {/* BLOCK 3 — EU TAXONOMY */}
        <div className="bg-white p-10 border border-slate-200 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
            EU Taxonomy & Sustainable Finance Requirements
          </h3>
          <p className="text-[#475569] leading-relaxed">
            Financial institutions must classify activities according to environmental impact. 
            Certif-Scope provides consistent and verifiable emissions data that can be integrated 
            into sustainable finance assessments, risk scoring models and eligibility checks.
          </p>
        </div>

        {/* BLOCK 4 — SUPPLY CHAIN */}
        <div className="bg-white p-10 border border-slate-200 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
            Supply Chain & Procurement Requirements
          </h3>
          <p className="text-[#475569] leading-relaxed">
            Buyers and procurement platforms increasingly require carbon documentation from suppliers. 
            Certif-Scope generates a ready-to-submit PDF with all mandatory fields: ID, hash, 
            methodology reference, emission breakdown, verification link and timestamp.
          </p>
        </div>
      </div>

      {/* SME PROPORTIONALITY */}
      <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
        SME Proportionality — A Practical and Recognized Approach
      </h3>
      <p className="text-[#475569] leading-relaxed text-lg mb-14">
        European regulations acknowledge that SMEs cannot perform full lifecycle carbon analysis. 
        Certif-Scope applies a proportional screening method (spend-based) aligned with GHG Protocol 
        guidance for small entities. This ensures compliance without requiring complex data collection 
        or supplier-specific emission factors.
      </p>

      {/* RISK & BANKING */}
      <div className="bg-white border border-slate-200 p-10 rounded-xl shadow-lg mb-20">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
          Banking, Insurance & Risk-Scoring Compatibility
        </h3>
        <p className="text-[#475569] leading-relaxed text-base">
          Many European banks and insurers now incorporate climate-related indicators into risk 
          scoring models. Certif-Scope provides a standardized data format including emission 
          totals, scope breakdown, methodology references and verification elements that can be 
          integrated into automated credit and insurance risk workflows.
        </p>
      </div>

      {/* LIMITS */}
      <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">Regulatory Limitations</h3>
      <p className="text-[#475569] leading-relaxed text-base">
        Certif-Scope provides a screening-level attestation suitable for procurement, financing and 
        supplier documentation. It does not replace a full CSRD audit or ISO 14064 certification. 
        For companies with binding regulatory duties, a detailed audit is still necessary.
      </p>

    </section>
  );
}
