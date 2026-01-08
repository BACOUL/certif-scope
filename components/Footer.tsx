export default function Footer() {
  return (
    <footer className="w-full bg-[#0B3A63] text-white mt-20 pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND / SERVICE BLOCK */}
        <div>
          <h3 className="font-bold text-lg mb-3">Certif-Scope</h3>
          <p className="text-sm opacity-90 leading-relaxed">
            Instant, certified CO₂ attestation for SMEs.<br/>
            Automated calculation • Independent verification • Traceable document.
          </p>

          <div className="mt-4 space-y-2">
            <a 
              href="/#assessment"
              className="inline-block bg-[#1FB6C1] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#17A2AC]"
            >
              Generate Attestation
            </a>
            <br/>
            <a 
              href="/verify"
              className="inline-block text-[#1FB6C1] text-sm font-semibold hover:text-white"
            >
              Verify Attestation →
            </a>
          </div>
        </div>

        {/* WHY IT MATTERS */}
        <div>
          <h3 className="font-bold text-lg mb-3">Why it matters</h3>
          <ul className="text-sm opacity-90 space-y-2">
            <li>Accepted by banks and procurement</li>
            <li>Includes Scope 1, 2, 3 indicators</li>
            <li>Structured & traceable attestation</li>
            <li>Compliant with EU proportionality rules</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="font-bold text-lg mb-3">Legal</h3>
          <ul className="text-sm opacity-90 space-y-2">
            <li><a href="/legal" className="hover:text-[#1FB6C1]">Legal Notice</a></li>
            <li><a href="/privacy" className="hover:text-[#1FB6C1]">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-[#1FB6C1]">Terms & Refund</a></li>
            <li><a href="/refund-policy" className="hover:text-[#1FB6C1]">Refund Policy</a></li>
          </ul>
        </div>

        {/* OPERATOR */}
        <div>
          <h3 className="font-bold text-lg mb-3">Operator</h3>
          <p className="text-sm opacity-90 leading-relaxed">
            TimeProofs — Jeason Alexandre Bacoul<br/>
            SIREN: 999356439<br/>
            3 rue de l’Église de Louppy,<br/>
            55000 Les Hauts-de-Chée, France<br/>
            <a href="mailto:contact@timeproofs.io" className="text-[#1FB6C1] hover:text-white">
              contact@timeproofs.io
            </a>
          </p>
        </div>
      </div>

      <div className="text-center text-xs opacity-70 mt-10">
        © {new Date().getFullYear()} Certif-Scope — All rights reserved.
      </div>
    </footer>
  );
                                          }
