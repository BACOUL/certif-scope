import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <Link href="/" className="text-xl font-bold text-slate-800">
          Certif-Scope
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
          <Link href="/#how">How it Works</Link>
          <Link href="/why-required">Why Required</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/verify">Verify</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 border rounded"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 flex flex-col gap-3 text-sm">
          <Link href="/#how">How it Works</Link>
          <Link href="/why-required">Why Required</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/verify">Verify</Link>
        </div>
      )}
    </header>
  );
}
