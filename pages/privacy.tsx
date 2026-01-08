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
            This privacy policy explains how Certif-Scope processes and protects data in accordance with GDPR (EU 2016/679).
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
              <a href="mailto:contact@certif-scope.com" className="text-[#1FB6C1]">
                contact@certif-scope.com
              </a>
            </p>
          </section>

          {/* 2 — Privacy-by-design architecture */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Privacy-by-design</h2>
            <p className="text-sm text-[#475569] leading-relaxed mb-3">
              Certif-Scope is intentionally designed to minimise data collection:
            </p>
            <ul className="list-disc ml-6 text-sm text-[#475569] leading-relaxed">
              <li>No account creation required.</li>
              <li>No personal data stored on the server.</li>
              <li>No consumption or operational inputs transmitted—calculations run locally in the browser.</li>
              <li>No cookies, no analytics, no tracking technologies.</li>
            </ul>
          </section>

          {/* 3 — Data NOT collected */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Data NOT collected</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Certif-Scope does <strong>not</strong> collect:
            </p>
            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>names, emails, or identity information,</li>
              <li>company names or business activity details,</li>
              <li>financial data or invoices,</li>
              <li>energy or operational data entered in the calculator,</li>
              <li>IP addresses or device tracking information,</li>
              <li>cookies or analytics data.</li>
            </ul>
          </section>

          {/* 4 — What is stored for verification */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Data stored for verification</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              When a user pays and downloads the official attestation, only the following are stored:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li><strong>Attestation ID</strong> (unique identifier)</li>
              <li><strong>SHA-256 hash</strong> of the PDF</li>
              <li><strong>Timestamp</strong> of issuance</li>
            </ul>

            <p className="text-sm text-[#475569] leading-relaxed mt-3">
              This enables third-party verification without revealing or reconstructing user-provided data.
            </p>
          </section>

          {/* 5 — Payments */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Payment Processing</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Payments are processed exclusively by <strong>Stripe</strong>.  
              Certif-Scope never receives or stores credit card information.
            </p>
          </section>

          {/* 6 — GDPR Rights */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">GDPR Rights</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              In accordance with GDPR, users may request:
            </p>

            <ul className="list-disc ml-6 mt-3 text-sm text-[#475569] leading-relaxed">
              <li>access to the data registered about an attestation,</li>
              <li>correction of inaccurate records,</li>
              <li>deletion of an attestation ID/hash from the registry,</li>
              <li>information on processing purposes.</li>
            </ul>

            <p className="text-sm text-[#475569] leading-relaxed mt-3">
              Requests should be sent to:{" "}
              <a href="mailto:contact@certif-scope.com" className="text-[#1FB6C1]">
                contact@certif-scope.com
              </a>
            </p>
          </section>

          {/* 7 — Retention */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Retention</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Attestation IDs and hashes are stored until the user requests deletion.
            </p>
          </section>

          {/* 8 — Hosting */}
          <section className="mb-14">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Hosting Provider</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              This website is hosted by:<br /><br />
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723 — USA<br />
            </p>
          </section>

          {/* 9 — Contact */}
          <section className="mb-20 text-center">
            <h2 className="text-2xl font-black text-[#0B3A63] mb-4">Contact</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              For privacy requests:<br />
              <a href="mailto:contact@certif-scope.com" className="text-[#1FB6C1] font-semibold">
                contact@certif-scope.com
              </a>
            </p>
          </section>

          {/* BACK TO TOP */}
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
