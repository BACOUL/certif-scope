export default function WhyRequiredPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans">
      
      {/* PAGE CONTAINER */}
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* INTRODUCTION */}
        <section className="mb-20">
          <h1 className="text-3xl md:text-4xl font-black text-[#0B3A63] mb-4">
            Why this attestation is now required
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed max-w-3xl">
            European SMEs face a growing number of carbon data requests from banks,
            insurers, clients, investors and supply-chain partners. 
            There is currently no single mandatory EU format for SMEs—yet all major actors
            now expect a structured CO₂ indicator.
          </p>
        </section>


        {/* SECTION 2 — SEVEN ACTORS */}
        <section className="mb-24">
          <h2 className="text-2xl font-black text-[#0B3A63] mb-6">
            The 7 major actors requesting carbon data from SMEs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Large Corporations / Supply-Chain", "They need supplier data to complete mandatory Scope 3 reporting under CSRD."],
              ["Procurement Platforms", "Carbon indicators are now required fields in digital purchasing systems."],
              ["Banks & Financial Institutions", "ESG indicators influence credit scoring and risk exposure."],
              ["Insurance Companies", "Climate exposure is now part of underwriting and premium calculations."],
              ["Investors & Funds", "They assess long-term climate risk and governance quality."],
              ["B2B Clients", "They increasingly request emissions data as part of vendor qualification."],
              ["Public Tenders", "ESG scoring and carbon documentation are now selection criteria."]
            ].map(([title, text]) => (
              <div key={title} className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-[#0B3A63] mb-2">{title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>


        {/* SECTION 3 — REGULATORY FRAMEWORK */}
        <section className="mb-24">
          <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
            European Regulatory Framework
          </h2>

          <p className="text-[#475569] max-w-3xl mb-10 leading-relaxed">
            Several EU regulations explain why carbon indicators are becoming universal
            requirements — without imposing a strict methodology on SMEs.
          </p>

          {/* 3.1 CSRD */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#0B3A63] mb-2">3.1 CSRD Directive (2022/2464)</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              The CSRD obliges large companies to report full Scope 1, 2 and 3 emissions.
              This creates a compulsory need for supplier data — including SMEs — but
              <strong> does not impose any specific format or audit</strong> for those SMEs.
            </p>
          </div>

          {/* 3.2 ESRS E1 */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#0B3A63] mb-2">3.2 ESRS E1 & E1-4 (Technical Standards)</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              These standards require companies to obtain emissions data from their supply chain.
              However, the ESRS explicitly states that SMEs may provide
              <strong> “reasonable, proportionate and accessible” </strong> indicators,
              meaning <strong> no audit or official certification can be forced.</strong>
            </p>
          </div>

          {/* 3.3 PROPORTIONALITY */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#0B3A63] mb-2">3.3 EU Principle of Proportionality (Art. 6 ESRS)</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              Legally, SMEs cannot be required to produce documents that exceed their capacities.
              A lightweight, methodological attestation is fully compliant as long as it provides
              consistent indicators. Banks and partners <strong>cannot reject it for format reasons.</strong>
            </p>
          </div>

          {/* 3.4 NO MANDATORY FORMAT */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#0B3A63] mb-2">3.4 No mandatory EU carbon format for SMEs</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              There is <strong>no official PDF, audit, or standard form</strong> that SMEs must use.
              As long as the data is structured, transparent and verifiable, institutions must
              accept it on a proportionate basis.
            </p>
          </div>

          {/* 3.5 BANKS */}
          <div>
            <h3 className="text-xl font-bold text-[#0B3A63] mb-2">3.5 Can a bank refuse this attestation?</h3>
            <p className="text-sm text-[#475569] leading-relaxed">
              In practice, a bank may ask for carbon indicators, but it cannot legally impose
              a specific proprietary format. Under EU proportionality and non-discrimination
              principles, a structured CO₂ attestation such as Certif-Scope must be accepted.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

        {/* SECTION 4 — WHY IT MATTERS FOR SMEs */}
        <section className="mb-24">
          <h2 className="text-2xl font-black text-[#0B3A63] mb-6">
            Why this matters for SMEs
          </h2>

          <p className="text-[#475569] max-w-3xl leading-relaxed mb-8">
            Providing a standardized carbon indicator gives SMEs a strategic advantage:
            faster onboarding with clients, fewer blocked tenders, better access to finance,
            and higher transparency in ESG documentation.  
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-[#0B3A63] mb-2">Remove friction with clients</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Large buyers increasingly block vendor onboarding until carbon data is provided.
                Having an attestation ready prevents delays and lost contracts.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-[#0B3A63] mb-2">Improve bank scoring</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                ESG is now integrated in credit risk models. Providing CO₂ indicators can help
                avoid additional risk premiums.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-[#0B3A63] mb-2">Win more tenders</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Many RFPs and public tenders now include ESG scoring criteria.  
                A structured attestation increases competitiveness instantly.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-[#0B3A63] mb-2">Prepare future CSRD/VSME needs</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Even if SMEs are not directly in scope today, the entire supply chain is
                progressively expected to align with CSRD indicators.
              </p>
            </div>

          </div>
        </section>



        {/* SECTION 5 — COMPARATIVE TABLE */}
        <section className="mb-24">
          <h2 className="text-2xl font-black text-[#0B3A63] mb-6">
            Who asks for what? A clear comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg">
              <thead>
                <tr className="bg-[#E6F6F7] text-[#0B3A63] font-bold">
                  <th className="p-3 border border-slate-200">Requester</th>
                  <th className="p-3 border border-slate-200">Why they ask</th>
                  <th className="p-3 border border-slate-200">Accepted document</th>
                </tr>
              </thead>
              <tbody className="text-[#475569]">

                <tr>
                  <td className="p-3 border border-slate-200">Banks</td>
                  <td className="p-3 border border-slate-200">ESG risk scoring</td>
                  <td className="p-3 border border-slate-200">Any structured CO₂ estimate</td>
                </tr>

                <tr>
                  <td className="p-3 border border-slate-200">Large Corporations</td>
                  <td className="p-3 border border-slate-200">Scope 3 supplier reporting</td>
                  <td className="p-3 border border-slate-200">Methodological attestation</td>
                </tr>

                <tr>
                  <td className="p-3 border border-slate-200">Procurement Platforms</td>
                  <td className="p-3 border border-slate-200">Vendor qualification</td>
                  <td className="p-3 border border-slate-200">PDF or numeric indicator</td>
                </tr>

                <tr>
                  <td className="p-3 border border-slate-200">Insurers</td>
                  <td className="p-3 border border-slate-200">Climate exposure analysis</td>
                  <td className="p-3 border border-slate-200">Any consistent CO₂ indicator</td>
                </tr>

                <tr>
                  <td className="p-3 border border-slate-200">Investors</td>
                  <td className="p-3 border border-slate-200">Sustainability risk disclosure</td>
                  <td className="p-3 border border-slate-200">Methodological summary</td>
                </tr>

                <tr>
                  <td className="p-3 border border-slate-200">Public Tenders</td>
                  <td className="p-3 border border-slate-200">ESG scoring criteria</td>
                  <td className="p-3 border border-slate-200">Structured CO₂ PDF</td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>



        {/* SECTION 6 — WHY CERTIF-SCOPE IS ACCEPTED */}
        <section className="mb-24">
          <h2 className="text-2xl font-black text-[#0B3A63] mb-6">
            Why Certif-Scope is accepted by institutions
          </h2>

          <div className="space-y-6 max-w-3xl">

            <div>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-2">
                1. Complies with EU proportionality
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                SMEs cannot be forced to produce audited or complex documents.
                A standardized methodological attestation is fully legitimate.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-2">
                2. Based on recognized principles
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Spend-based model derived from the GHG Protocol + ADEME reference factors.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-2">
                3. Verifiable and tamper-evident
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Each PDF includes a unique ID and SHA-256 hash, verifiable independently.
                This guarantees integrity and authenticity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0B3A63] mb-2">
                4. Bank-ready format
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Institutions require indicators — not a specific design.
                Certif-Scope provides all expected fields in a clean standardized format.
              </p>
            </div>

          </div>
        </section>



        {/* SECTION 7 — LIMITATIONS & TRANSPARENCY */}
        <section className="mb-32">
          <h2 className="text-2xl font-black text-[#0B3A63] mb-6">
            Transparency & Limitations
          </h2>

          <ul className="list-disc pl-6 text-sm text-[#475569] leading-relaxed space-y-2">
            <li>This is a methodological estimation, not an audited carbon footprint.</li>
            <li>Based on monetary proxies, not activity-based measurements.</li>
            <li>Suitable for ESG questionnaires, not for CSRD-compliant reporting.</li>
            <li>Data remains local and is never stored by Certif-Scope.</li>
          </ul>
        </section>



        {/* FINAL CTA */}
        <section className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-black text-[#0B3A63] mb-6">
            Ready to generate your attestation?
          </h2>

          <a
            href="/#assessment"
            className="inline-block bg-[#1FB6C1] text-white font-bold px-8 py-4 rounded-xl shadow hover:bg-[#17A2AC]"
          >
            Start my assessment
          </a>
        </section>
