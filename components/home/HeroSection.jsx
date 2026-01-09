export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-28 text-center">

      <h1 className="text-5xl md:text-6xl font-black text-[#0B3A63] leading-tight tracking-tight">
        The First Verified<br />
        <span className="text-[#1FB6C1]">Carbon Attestation for European SMEs</span>
      </h1>

      <p className="text-lg md:text-xl text-[#475569] max-w-4xl mx-auto mt-8 leading-relaxed">
        Certif-Scope is the only platform that generates a <strong>verified, tamper-proof, 
        institution-ready CO₂ attestation</strong> specifically designed for small and 
        medium enterprises. Fully aligned with GHG Protocol, procurement requirements, 
        bank compliance and EU expectations.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <a
          href="#assessment"
          className="bg-[#1FB6C1] hover:bg-[#19a8ae] transition text-white font-bold px-12 py-5 rounded-xl shadow-xl text-lg"
        >
          Generate My Attestation
        </a>

        <a
          href="/verify"
          className="bg-[#0B3A63] hover:bg-[#082d4f] transition text-white font-bold px-12 py-5 rounded-xl shadow-xl text-lg"
        >
          Verify an Attestation
        </a>
      </div>

      <p className="text-sm text-[#475569] mt-6">
        No upload • No storage • Instant verification • Fully automated
      </p>

      <a
        href="/sample-pdf"
        className="text-sm underline text-[#1FB6C1] font-medium mt-8 block"
      >
        View a sample attestation
      </a>

    </section>
  );
}
