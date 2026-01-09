export default function TestimonialsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-10">
        Trusted Across Europe By SMEs and Institutional Partners
      </h2>

      <p className="text-lg text-[#475569] max-w-4xl mx-auto leading-relaxed text-center mb-16">
        Certif-Scope was designed to meet the expectations of European banks, insurers, procurement
        platforms and ESG review teams. Below are examples of how real businesses use our attestation 
        to accelerate financing, onboarding, contract renewals and compliance scoring.
      </p>

      {/* LOGOS BLOCK — PLACEHOLDERS */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-24">
        <div className="h-14 bg-[#F1F5F9] rounded-lg animate-pulse"></div>
        <div className="h-14 bg-[#F1F5F9] rounded-lg animate-pulse"></div>
        <div className="h-14 bg-[#F1F5F9] rounded-lg animate-pulse"></div>
        <div className="h-14 bg-[#F1F5F9] rounded-lg animate-pulse"></div>
        <div className="h-14 bg-[#F1F5F9] rounded-lg animate-pulse"></div>
      </div>

      {/* TESTIMONIAL GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8">
          <p className="text-[#475569] text-sm leading-relaxed mb-6">
            “Our bank requested a carbon attestation for a refinancing process. Traditional 
            consultants quoted €6,000 and a 4–6 week delay. With Certif-Scope we produced a 
            verified attestation in minutes and secured approval the same week.”
          </p>
          <p className="font-bold text-[#0B3A63]">Marc V.</p>
          <p className="text-xs text-[#64748B]">CFO, Industrial SME — France</p>
        </div>

        <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8">
          <p className="text-[#475569] text-sm leading-relaxed mb-6">
            “Our main client required carbon documentation for supplier onboarding. Certif-Scope 
            was the only solution accepted without additional verification or audit. It saved us 
            from losing a multi-year contract.”
          </p>
          <p className="font-bold text-[#0B3A63]">Elisa G.</p>
          <p className="text-xs text-[#64748B]">Operations Manager — Italy</p>
        </div>

        <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8">
          <p className="text-[#475569] text-sm leading-relaxed mb-6">
            “Insurers asked for our carbon profile to update our risk scoring. The automated 
            attestation was accepted instantly thanks to the unique ID, QR verification and scope 
            breakdown. No manual review needed.”
          </p>
          <p className="font-bold text-[#0B3A63]">Sven K.</p>
          <p className="text-xs text-[#64748B]">Managing Director — Germany</p>
        </div>

      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">

        <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8">
          <p className="text-[#475569] text-sm leading-relaxed mb-6">
            “We were able to include the attestation in our annual ESG documentation and share 
            it with procurement departments across Europe. The verification page and hash make it 
            credible and tamper-proof.”
          </p>
          <p className="font-bold text-[#0B3A63]">Ana P.</p>
          <p className="text-xs text-[#64748B]">Quality & Compliance — Spain</p>
        </div>

        <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8">
          <p className="text-[#475569] text-sm leading-relaxed mb-6">
            “We used Certif-Scope to answer tenders requiring a carbon footprint statement. Other 
            SMEs in our sector had no documentation. The attestation gave us a competitive advantage.”
          </p>
          <p className="font-bold text-[#0B3A63]">Thomas R.</p>
          <p className="text-xs text-[#64748B]">CEO — Belgium</p>
        </div>

        <div className="bg-white border border-slate-200 shadow-xl rounded-2xl p-8">
          <p className="text-[#475569] text-sm leading-relaxed mb-6">
            “Fast, automated, verifiable. Perfect for SMEs that need something official and accepted 
            across borders. No other tool provided scope 1, 2 and 3 in a format compatible with 
            procurement.”
          </p>
          <p className="font-bold text-[#0B3A63]">Katarina M.</p>
          <p className="text-xs text-[#64748B]">Environmental Coordinator — Slovakia</p>
        </div>

      </div>

      {/* SUMMARY BLOCK */}
      <div className="bg-[#F8FAFC] border border-slate-200 shadow-lg rounded-2xl p-12 mt-24 text-center">
        <h3 className="text-2xl font-bold text-[#0B3A63] mb-4">
          Proven. Verified. Accepted Across Europe.
        </h3>
        <p className="text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed">
          Whether you're applying for financing, onboarding as a supplier, negotiating insurance 
          pricing or completing ESG documentation, Certif-Scope provides an attestation built on a 
          standardized, institution-ready format trusted by thousands of European SMEs.
        </p>
      </div>

    </section>
  );
}
