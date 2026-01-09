export default function MethodologySection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-14">
        Methodology & Calculation Principles
      </h2>

      {/* INTRO PARAGRAPH */}
      <p className="text-lg text-[#475569] leading-relaxed max-w-5xl mx-auto text-center mb-20">
        Certif-Scope applies a standardized methodology aligned with international frameworks 
        such as the GHG Protocol, ESRS guidance and European SME proportionality rules. The 
        methodology ensures that Scope 1, Scope 2 and Scope 3 emissions are calculated 
        consistently using validated European emission factors. The process is automated, 
        reproducible and designed for institutional-grade documentation.
      </p>

      {/* GRID 1 — THREE SCOPE EXPLANATION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">

        {/* SCOPE 1 */}
        <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-md">
          <h3 className="font-bold text-[#0B3A63] mb-4 text-xl">Scope 1 — Direct Emissions</h3>
          <p className="text-[#475569] text-base leading-relaxed">
            Direct emissions from fuel consumption (vehicles, heating, machinery). Calculations 
            are based on fuel volumes or estimated fuel spend converted using standardized EU 
            emission factors. Includes natural gas, diesel, gasoline and other direct combustion.
          </p>
        </div>

        {/* SCOPE 2 */}
        <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-md">
          <h3 className="font-bold text-[#0B3A63] mb-4 text-xl">Scope 2 — Indirect Electricity Emissions</h3>
          <p className="text-[#475569] text-base leading-relaxed">
            Indirect emissions from purchased electricity. CO₂ intensity is calculated using 
            country-specific electricity factors (EU averages or national coefficients from ADEME, 
            Eurostat and AIB). The system automatically adjusts depending on the country selected.
          </p>
        </div>

        {/* SCOPE 3 */}
        <div className="bg-white p-8 border border-slate-200 rounded-xl shadow-md">
          <h3 className="font-bold text-[#0B3A63] mb-4 text-xl">Scope 3 — Value Chain Emissions</h3>
          <p className="text-[#475569] text-base leading-relaxed">
            The most significant emissions category for SMEs. Calculated using a spend-based method 
            aligned with the GHG Protocol guidelines and SME proportionality rules. Coefficients 
            are derived from recognized EU datasets and sectoral emission intensities.
          </p>
        </div>
      </div>

      {/* DETAILED METHODOLOGY */}
      <h3 className="text-2xl font-bold text-[#0B3A63] mb-6">
        Calculation Framework
      </h3>

      <p className="text-[#475569] leading-relaxed text-lg mb-10">
        Certif-Scope applies a structured four-stage calculation process that ensures consistency, 
        repeatability and transparency:
      </p>

      <ol className="list-decimal ml-6 text-[#475569] space-y-4 text-base mb-20">
        <li>
          <strong>Data entry</strong>: energy usage, travel and expenditures are entered using annual values.
        </li>
        <li>
          <strong>Normalization</strong>: data is standardized and converted into comparable units (kWh, litres, € spent).
        </li>
        <li>
          <strong>Emission factor mapping</strong>: each category is matched with EU or ADEME reference coefficients.
        </li>
        <li>
          <strong>Total CO₂ calculation</strong>: Scope 1, 2 and 3 are computed and aggregated with full traceability.
        </li>
      </ol>

      {/* DATA SOURCES */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-10 mb-20">
        <h3 className="font-bold text-[#0B3A63] text-2xl mb-4">Emission Factor Sources</h3>

        <p className="text-[#475569] text-base leading-relaxed mb-6">
          Certif-Scope uses recognized and publicly documented European emission factors from:
        </p>

        <ul className="list-disc ml-6 text-[#475569] text-base space-y-2">
          <li>ADEME Base Carbone</li>
          <li>Eurostat energy intensity benchmarks</li>
          <li>AIB (Association of Issuing Bodies) electricity mix data</li>
          <li>GHG Protocol Sector Guidance factors</li>
          <li>EU average values for commercial sectors</li>
        </ul>
      </div>

      {/* SPEND-BASED JUSTIFICATION */}
      <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
        Why the Spend-Based Method for Scope 3?
      </h3>

      <p className="text-[#475569] leading-relaxed text-lg mb-10">
        SMEs rarely have access to supplier-specific CO₂ data. The European Commission therefore 
        recommends a “spend-based screening” method for SMEs participating in supply-chain reporting. 
        This method converts expenditure categories into emissions based on sectoral intensities, 
        ensuring a proportional and practical approach that remains fully compliant for procurement 
        documentation.
      </p>

      {/* LIMITATIONS */}
      <div className="bg-[#F8FAFC] border border-slate-200 p-10 rounded-xl shadow-md mt-10">

        <h3 className="font-bold text-[#0B3A63] text-2xl mb-4">Limitations & Transparency Statement</h3>

        <p className="text-[#475569] leading-relaxed text-base mb-6">
          Certif-Scope provides a standardized attestation for documentation workflows. It does not 
          replace a full carbon audit or a certification under ISO 14064 or CSRD disclosure 
          requirements. The spend-based methodology is accurate for screening and procurement 
          purposes, but detailed lifecycle assessments require supplier-specific data.
        </p>
      </div>

    </section>
  );
}
