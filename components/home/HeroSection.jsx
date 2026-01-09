export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-28 text-center">

      <h1 className="text-5xl md:text-6xl font-black text-[#0B3A63] leading-tight tracking-tight">
        Europe’s Most Advanced<br />
        <span className="text-[#1FB6C1]">Carbon Attestation for SMEs</span>
      </h1>

      <p className="text-lg md:text-xl text-[#475569] max-w-4xl mx-auto mt-6 leading-relaxed">
        Certif-Scope delivers a verified, tamper-proof and procurement-ready CO₂
        attestation accepted by banks, buyers, insurers and auditors. It includes
        Scope 1, Scope 2 and Scope 3, computed instantly with a GHG Protocol aligned
        methodology adapted for SMEs across Europe. No documents to upload. No delays.
        Full trust and transparency.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <a
          href="#assessment"
          className="bg-[#1FB6C1] hover:bg-[#19a8ae] transition text-white font-bold px-12 py-5 rounded-xl shadow-xl text-lg"
        >
          Generate Attestation
        </a>

        <a
          href="/verify"
          className="bg-[#0B3A63] hover:bg-[#082d4f] transition text-white font-bold px-12 py-5 rounded-xl shadow-xl text-lg"
        >
          Verify Attestation
        </a>
      </div>

      <a
        href="/sample-pdf"
        className="text-sm underline text-[#1FB6C1] font-medium block mt-8"
      >
        View sample attestation
      </a>

    </section>
  );
}
