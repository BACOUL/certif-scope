export default function Methodology() {
  return (
    <>
      <div className="w-full min-h-screen bg-white text-[#334155] font-sans" id="top">

        <header className="sticky top-0 bg-white border-b border-[#E2E8F0] py-4 px-6 md:px-12 z-40 shadow-sm">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <a href="/" className="text-[#0B3A63] font-semibold hover:text-[#1FB6C1] transition flex items-center gap-2">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4L6 9L12 14" />
              </svg>
              Back to Certif-Scope
            </a>
            <a href="/verify" className="text-sm text-[#1FB6C1] font-bold hover:text-[#0B3A63]">
              Verify Attestation
            </a>
          </div>
        </header>

        <div className="max-w-[1200px] mx-auto flex flex-col gap-10 pt-10 px-6 md:px-12">

          <h1 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63]">
            Methodology & Calculation Principles
          </h1>

          <p className="text-sm text-center text-[#1FB6C1] uppercase tracking-widest font-bold">
            Standardized CO₂ estimation based on GHG Protocol
          </p>

          <div className="text-center mb-6">
            <a
              href="/#assessment"
              className="inline-block bg-[#1FB6C1] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#17A2AC]"
            >
              Generate my CO₂ attestation
            </a>
          </div>

          <p className="text-center text-[#475569] max-w-[800px] mx-auto leading-relaxed">
            Certif-Scope applies a standardized spend-based CO₂ estimation methodology aligned with the
            GHG Protocol and recognized European emission factors (ADEME Base Carbone / monetary
            intensity ratios). This approach provides a proportional and accessible estimation for SMEs
            without requiring audits or detailed activity reports.
          </p>

          <div className="bg-[#F1F5F9] border border-[#CBD5E1] rounded-xl p-6 text-sm shadow-sm leading-relaxed">
            <strong>TL;DR:</strong><br />
            Certif-Scope uses a simplified spend-based model: fuel × factor, electricity × factor, revenue ×
            sector coefficient. This produces a screening-level estimate valid for banking, supply-chain and ESG requests.
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold mt-6">
            <a href="#calculation" className="text-[#1FB6C1] hover:text-[#0B3A63]">Calculation</a>
            <a href="#factors" className="text-[#1FB6C1] hover:text-[#0B3A63]">Emission factors</a>
            <a href="#limitations" className="text-[#1FB6C1] hover:text-[#0B3A63]">Limitations</a>
            <a href="#legal" className="text-[#1FB6C1] hover:text-[#0B3A63]">Legal scope</a>
          </div>

          {/* SECTION 1 - CALCULATION LOGIC */}
          <section id="calculation" className="bg-[#F8FAFC] py-20 px-6 md:px-12 rounded-xl">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-10">
              1. Calculation Logic
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                ["Scope 1 — Direct emissions", "Fuel expenses × standard emission factor."],
                ["Scope 2 — Electricity", "Electricity cost × national energy factor (kWh equivalent)."],
                ["Scope 3 — Value-chain emissions", "Annual revenue × sector intensity coefficient."]
              ].map(([title, text]) => (
                <div key={title} className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-sm">
                  <h3 className="font-bold text-[#0B3A63] mb-2">{title}</h3>
                  <p className="text-sm text-[#475569]">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white border border-[#E2E8F0] rounded-xl p-6 text-sm text-[#475569] leading-relaxed">
              <strong>Formula summary:</strong><br />
              Total CO₂e = (Fuel × EF1) + (Electricity × EF2) + (Revenue × SectorIntensity)
            </div>
          </section>

          {/* SECTION 2 - EMISSION FACTORS */}
          <section id="factors" className="bg-white py-20 px-6 md:px-12 rounded-xl">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-10">
              2. Emission Factors & Data Sources
            </h2>

            <p className="text-[#475569] mb-10">
              Certif-Scope uses recognized public databases and monetary ratios validated by environmental
              agencies. Factors are periodically updated.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                ["ADEME Base Carbone", "Used for fuel, gas and electricity reference factors."],
                ["European Energy Mix Factors", "Conversion from monetary electricity cost to kWh equivalent."],
                ["Sector Intensity Ratios", "Revenue-based emission coefficients derived from European datasets."],
                ["GHG Protocol Spend-Based Model", "International reference for screening-level carbon estimates."]
              ].map(([title, desc]) => (
                <div key={title} className="p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl shadow-sm">
                  <h3 className="font-bold text-[#0B3A63] mb-2">{title}</h3>
                  <p className="text-sm text-[#475569]">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-[#E6F6F7] border border-[#BAE6FD] text-[#0B3A63] rounded-xl p-6 text-sm leading-relaxed">
              Factors updated: <strong>Methodology v3</strong>  
            </div>
          </section>

          {/* SECTION 3 - LIMITATIONS */}
          <section id="limitations" className="bg-[#F8FAFC] py-20 px-6 md:px-12 rounded-xl">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-6">
              3. Purpose & Limitations
            </h2>

            <p className="text-[#475569] max-w-[800px] mx-auto mb-10 text-center">
              This methodology provides a screening-level estimation suited for banking compliance,
              vendor qualification and internal awareness. It is not a substitute for a full physical carbon audit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                ["Suitable for:", [
                  "Banking compliance reviews",
                  "Procurement questionnaires",
                  "Supply-chain requests",
                  "Internal baseline estimation"
                ]],
                ["Not suitable for:", [
                  "Regulated CSRD reporting for large entities",
                  "ISO 14064 certified audits",
                  "Detailed activity-based carbon accounting"
                ]]
              ].map(([title, list]) => (
                <div key={title} className="p-5 bg-white border border-[#E2E8F0] rounded-xl">
                  <h3 className="font-bold text-[#0B3A63] mb-2">{title}</h3>
                  <ul className="text-sm text-[#475569] list-disc ml-4">
                    {(list as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4 - LEGAL SCOPE */}
          <section id="legal" className="bg-white py-20 px-6 md:px-12 rounded-xl">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-6">
              4. Legal Disclaimer & Compliance
            </h2>

            <p className="text-[#475569] mb-6 leading-relaxed">
              This attestation is a methodological estimate provided “as is”. It is not an audited document,
              nor a regulatory CSRD-compliant report. It is intended for informative and voluntary disclosure.
            </p>

            <blockquote className="border-l-4 border-[#1FB6C1] bg-[#F8FAFC] rounded-md p-4 text-sm text-[#475569] italic">
              “SMEs may provide simplified and proportionate estimates. No mandatory audit can be required.”
              — ESRS E1 Appendix B
            </blockquote>

            <p className="text-[#475569] mt-8 text-sm italic">
              Any modification of the document invalidates its integrity.
            </p>
          </section>

          {/* FOOTER ACTIONS */}
          <div className="text-center mt-16">
            <a
              href="/#assessment"
              className="inline-block bg-[#1FB6C1] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#17A2AC]"
            >
              Generate my CO₂ attestation
            </a>
          </div>

          <div className="text-center mt-4">
            <a href="/verify" className="text-[#1FB6C1] font-semibold hover:text-[#0B3A63]">
              Verify an attestation →
            </a>
          </div>

          <div className="text-center mt-6 mb-14">
            <a href="#top" className="text-[#1FB6C1] hover:text-[#0B3A63] font-semibold">
              Back to top ↑
            </a>
          </div>

        </div>
      </div>

      <style jsx>{`
        #calculation, #factors, #limitations, #legal {
          scroll-margin-top: 120px;
        }
      `}</style>
    </>
  );
}
