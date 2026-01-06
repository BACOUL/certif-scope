import AssessmentForm from '../components/AssessmentForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* 1. NAVIGATION / LOGO */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">C</div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">CERTIF<span className="text-blue-600">-SCOPE</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
          <a href="#how" className="hover:text-blue-600">Methodology</a>
          <a href="#legal" className="hover:text-blue-600">Compliance</a>
          <Link href="/legal" className="hover:text-blue-600">Legal</Link>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="max-w-5xl mx-auto px-6 py-16 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-100 rounded-full">
          Standard EU VSME compliant
        </span>
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
          Official Carbon Assessment <br/>for <span className="text-blue-600">European SMEs.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Generate a verified carbon footprint certificate in 5 minutes. Compliant with CSRD voluntary standards for small businesses.
        </p>
      </header>

      {/* 3. LE FORMULAIRE (Le coeur de l'app) */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Texte de réassurance à gauche */}
          <div className="lg:col-span-5 space-y-8 py-10">
            <div>
              <h3 className="text-lg font-bold mb-2">Why Certif-Scope?</h3>
              <p className="text-slate-500">Traditional audits cost €5,000+. We use spend-based emission factors (ADEME/GHG Protocol) to deliver instant, affordable compliance.</p>
            </div>
            
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="text-blue-600">🛡️</div>
              <div>
                <h4 className="font-bold text-sm">ActProofs Protection (Option A)</h4>
                <p className="text-xs text-slate-500">Data is hashed locally. Your financial figures never leave your device. Only the proof is certified.</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="text-green-600">⚖️</div>
              <div>
                <h4 className="font-bold text-sm">Regulatory Compliance</h4>
                <p className="text-xs text-slate-500">Alignment with the EFRAG VSME ED standard for simplified European sustainability reporting.</p>
              </div>
            </div>
          </div>

          {/* Formulaire à droite */}
          <div className="lg:col-span-7">
            <AssessmentForm />
          </div>

        </div>
      </main>

      {/* 4. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-white font-bold mb-4">Certif-Scope by TimeProofs</p>
            <p className="text-sm">Helping SMEs navigate the green transition with cryptographic proof of sustainability.</p>
          </div>
          <div>
            <p className="text-white font-bold mb-4">Regulations</p>
            <ul className="text-sm space-y-2">
              <li>GHG Protocol Corporate Standard</li>
              <li>CSRD (Directive 2022/2464/EU)</li>
              <li>EFRAG VSME Voluntary Standard</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold mb-4">Legal</p>
            <ul className="text-sm space-y-2">
              <li><Link href="/legal" className="hover:text-white">Legal Notice</Link></li>
              <li><a href="mailto:contact@timeproofs.io" className="hover:text-white">Contact Support</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
