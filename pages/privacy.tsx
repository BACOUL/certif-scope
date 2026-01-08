export default function PrivacyPolicy() {
  return (
    <>
      <div className="w-full min-h-screen bg-white text-[#334155] font-sans" id="top">

        {/* HEADER */}
        <div className="sticky top-0 bg-white border-b border-[#E2E8F0] py-4 px-6 md:px-12 z-40 shadow-sm">
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
        </div>

        {/* CONTENT */}
        <div className="max-w-[900px] mx-auto pt-14 px-6 md:px-12 pb-28">

          <h1 className="text-3xl md:text-4xl font-black text-center text-[#0B3A63] mb-10">
            Privacy Policy
          </h1>

          <p className="text-center text-[#475569] max-w-[700px] mx-auto mb-12">
            This Privacy Policy explains how Certif-Scope handles data.  
            Our platform is designed to operate with <strong>maximum privacy</strong> and <strong>minimal data exposure</strong>.
          </p>

          {/* 1 — Data We Collect */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              1. Personal data we collect
            </h2>
            <p className="text-[#475569] text-sm leading-relaxed">
              Certif-Scope does <strong>not</strong> collect, store, or retain any personal or business information entered in the assessment form.  
              All calculation operations are performed <strong>locally on your device</strong>.
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>No personal identification data</li>
              <li>No business addresses</li>
              <li>No turnover or cost details</li>
              <li>No environmental or operational data</li>
            </ul>

            <p className="text-sm text-[#475569] mt-3">
              Your answers are never transmitted to our servers.
            </p>
          </section>

          {/* 2 — Cookies */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              2. Cookies and tracking technologies
            </h2>
            <p className="text-[#475569] text-sm leading-relaxed">
              Certif-Scope uses <strong>no cookies</strong>, <strong>no analytics trackers</strong>, 
              and <strong>no third-party scripts</strong> that collect behavioral data.
            </p>
            <p className="text-[#475569] text-sm leading-relaxed mt-3">
              We do not use:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>Google Analytics</li>
              <li>Facebook Pixel</li>
              <li>Advertising cookies</li>
              <li>Device fingerprinting</li>
            </ul>
          </section>

          {/* 3 — Payment Processing */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              3. Payment processing (Stripe)
            </h2>
            <p className="text-[#475569] text-sm leading-relaxed">
              Payments are processed by <strong>Stripe</strong>, a certified PCI-DSS Level 1 provider.
              Certif-Scope does not access or store:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>credit card numbers</li>
              <li>bank account information</li>
              <li>billing addresses</li>
            </ul>

            <p className="text-sm text-[#475569] mt-3">
              Stripe may collect necessary billing details according to its own privacy policy.
            </p>
          </section>

          {/* 4 — Attestation Data */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              4. Attestation data stored in the registry
            </h2>
            <p className="text-[#475569] text-sm leading-relaxed">
              To ensure verification integrity, Certif-Scope stores only:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li><strong>Attestation ID (UUID)</strong></li>
              <li><strong>SHA-256 hash of the PDF</strong></li>
              <li><strong>Timestamp</strong></li>
            </ul>

            <p className="text-sm text-[#475569] mt-3">
              No raw data, no personal data, no financial values are stored.
            </p>
          </section>

          {/* 5 — Your Rights */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              5. Your rights under GDPR
            </h2>
            <p className="text-[#475569] text-sm leading-relaxed">
              Since we do not store personal information, most GDPR rights do not apply.  
              However, you may request:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>information about the registry entry (ID + hash)</li>
              <li>removal of a registry entry if justified</li>
            </ul>
          </section>

          {/* 6 — Contact */}
          <section className="mb-20">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">
              6. Contact
            </h2>
            <p className="text-[#475569] text-sm">
              For privacy-related questions, contact:<br />
              <a href="mailto:contact@timeproofs.io" className="text-[#1FB6C1] font-semibold">
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
