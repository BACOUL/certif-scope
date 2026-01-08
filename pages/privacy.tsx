export default function Privacy() {
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
            This privacy policy explains how Certif-Scope processes data, 
            in compliance with the General Data Protection Regulation (GDPR – EU 2016/679).
          </p>

          {/* 1 — Data Controller */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Data Controller</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Certif-Scope is operated by:<br /><br />
              <strong>Jeason Alexandre Bacoul</strong><br />
              Entrepreneur Individuel<br />
              SIREN : <strong>999356439</strong><br />
              Adresse : 3 rue de l’Église de Louppy, 55000 Les Hauts-de-Chée, France<br />
              Email de contact :{" "}
              <a href="mailto:contact@timeproofs.io" className="text-[#1FB6C1]">
                contact@timeproofs.io
              </a>
            </p>
          </section>

          {/* 2 — Data Processing Logic */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Data Processing Principles</h2>
            <p className="text-sm text-[#475569] leading-relaxed mb-3">
              Certif-Scope follows a strict <strong>privacy-first</strong> architecture:
            </p>

            <ul className="list-disc ml-6 text-sm text-[#475569] leading-relaxed">
              <li><strong>No account creation</strong> required.</li>
              <li><strong>No personal data</strong> is stored on the server.</li>
              <li><strong>No raw inputs</strong> are transmitted — calculations run locally on the user's device.</li>
              <li>Only the attestation <strong>ID</strong> and <strong>encrypted hash</strong> are registered for verification purposes.</li>
              <li>No tracking cookies, no analytics, no advertising scripts.</li>
            </ul>
          </section>

          {/* 3 — What data is NOT collected */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Data we do NOT collect</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Certif-Scope does <strong>not</strong> collect or store:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>names or identities of users,</li>
              <li>company names or client lists,</li>
              <li>financial information or invoices,</li>
              <li>consumption or operational details entered in the calculator,</li>
              <li>IP addresses or technical fingerprints,</li>
              <li>cookies, tracking pixels, third-party analytics.</li>
            </ul>

            <p className="text-sm text-[#475569] leading-relaxed mt-3">
              All computations (Scope 1/2/3) occur <strong>inside the browser</strong>.  
              Nothing is transmitted unless the user pays to generate an attestation.
            </p>
          </section>

          {/* 4 — What data IS stored */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Data stored when generating an attestation</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              When a user pays and downloads the official attestation, the system registers:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li><strong>Attestation ID</strong> (unique identifier)</li>
              <li><strong>SHA-256 hash</strong> of the final PDF</li>
              <li><strong>Timestamp</strong> of issuance</li>
            </ul>

            <p className="text-sm text-[#475569] leading-relaxed mt-3">
              These elements allow third parties to check authenticity via the independent verification system.  
              They do <strong>not</strong> allow reconstruction of the client’s data.
            </p>
          </section>

          {/* 5 — Payment Handling */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Payments</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Payments are processed by <strong>Stripe</strong>.  
              Certif-Scope does not access, store, or process credit card information at any time.
            </p>
          </section>

          {/* 6 — GDPR Rights */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Your GDPR Rights</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Under GDPR, users have the right to:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>access the data stored about their attestation,</li>
              <li>request correction if information is inaccurate,</li>
              <li>request deletion of their attestation ID/hash from the registry,</li>
              <li>object to processing where applicable.</li>
            </ul>

            <p className="text-sm text-[#475569] leading-relaxed mt-3">
              Requests can be made by email at{" "}
              <a href="mailto:contact@timeproofs.io" className="text-[#1FB6C1]">
                contact@timeproofs.io
              </a>.
            </p>
          </section>

          {/* 7 — Data Retention */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Data retention</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Attestation IDs and hashes are kept for <strong>verification integrity</strong>.  
              Users may request permanent deletion at any time.
            </p>
          </section>

          {/* 8 — Hosting */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Hosting</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              The website is hosted by:
              <br /><br />
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723 – United States
            </p>
          </section>

          {/* 9 — Contact */}
          <section className="mb-20 text-center">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Contact</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              For any privacy-related request:<br />
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
