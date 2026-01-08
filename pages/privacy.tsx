export default function Privacy() {
  return (
    <>
      <div className="w-full min-h-screen bg-white text-[#334155] font-sans" id="top">

        {/* HEADER */}
        <div className="sticky top-0 bg-white border-b border-[#E2E8F0] py-4 px-6 md:px-12 z-40 shadow-sm">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <a
              href="/"
              className="text-[#0B3A63] font-semibold hover:text-[#1FB6C1] transition flex items-center gap-2"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4L6 9L12 14" />
              </svg>
              Back to Certif-Scope
            </a>
            <a href="/verify" className="text-sm text-[#1FB6C1] font-bold hover:text-[#0B3A63]">
              Verify Attestation
            </a>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-[900px] mx-auto pt-14 px-6 md:px-12 pb-28">

          <h1 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-10">
            Privacy Policy
          </h1>

          <p className="text-center text-[#475569] max-w-[700px] mx-auto mb-12">
            This privacy policy explains how Certif-Scope handles information in compliance with EU law,
            with a strict “no storage” approach. The service is designed to operate without collecting or
            retaining user data.
          </p>

          {/* 1 — Data handling principles */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              1. Data handling principles
            </h2>
            <p className="text-[#475569] leading-relaxed text-sm">
              Certif-Scope follows a privacy-first architecture:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>No account creation</li>
              <li>No cookies for tracking or analytics</li>
              <li>No user profiling</li>
              <li>No retention of raw data entered in the assessment</li>
              <li>No transmission of calculation inputs to any server</li>
            </ul>

            <p className="text-sm text-[#475569] mt-4">
              All calculations are performed locally in the user’s browser.
            </p>
          </section>

          {/* 2 — What data is not stored */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              2. Information that is not stored
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Certif-Scope does <strong>not</strong> store the following information:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>company name</li>
              <li>industry category</li>
              <li>annual expenditure inputs</li>
              <li>kilowatt-hour usage or fuel data</li>
              <li>calculated emissions results</li>
              <li>downloaded PDF contents</li>
              <li>IP address or device identifiers</li>
            </ul>
          </section>

          {/* 3 — What is stored */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              3. What data is stored
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Only the <strong>attestation ID</strong> and its <strong>file integrity hash (SHA-256)</strong>
              are stored in the verification registry, for the sole purpose of enabling independent validation.
            </p>

            <p className="text-sm text-[#475569] mt-3">
              No other user information is associated or linked to the registry entry.
            </p>
          </section>

          {/* 4 — Legal basis */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              4. Legal basis under EU law
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Under GDPR (Regulation 2016/679), the service operates on the following legal basis:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li><strong>Art. 6(1)(b)</strong> — the attestation requires minimal data processing to be generated</li>
              <li><strong>Art. 6(1)(c)</strong> — regulatory pre-compliance for ESG documentation</li>
              <li><strong>Art. 5(1)(c)</strong> — strict data minimisation</li>
              <li><strong>Art. 5(1)(e)</strong> — no storage beyond necessity</li>
            </ul>
          </section>

          {/* 5 — Third-party services */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              5. Third-party services
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Certif-Scope does not use external analytics or tracking services.
            </p>

            <p className="text-sm text-[#475569] mt-3 leading-relaxed">
              Payment processing (if applicable) is handled by Stripe.  
              No payment details transit through or are stored by Certif-Scope.
            </p>
          </section>

          {/* 6 — User rights */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              6. User rights under GDPR
            </h2>

            <p className="text-sm text-[#475569] leading-relaxed">
              Since no personal data is stored, most GDPR rights (access, rectification, deletion)
              are not applicable.  
              However, users may request information regarding:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>registry entries for attestation ID + hash</li>
              <li>removal of a registry entry if requested by the original issuer</li>
            </ul>
          </section>

          {/* 7 — Contact */}
          <section className="mb-20 text-center">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              Contact
            </h2>
            <p className="text-[#475569] text-sm">
              For privacy-related inquiries:<br />
              <a
                href="mailto:contact@timeproofs.io"
                className="text-[#1FB6C1] font-semibold"
              >
                contact@timeproofs.io
              </a>
            </p>
          </section>

          {/* Back to top */}
          <div className="text-center mt-10 mb-16">
            <a href="#top" className="text-[#1FB6C1] hover:text-[#0B3A63] font-semibold">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
