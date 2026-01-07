import { useState, useEffect } from "react";
import Link from "next/link";

export default function VerifyPage() {
  const [id, setId] = useState("");
  const [hash, setHash] = useState("");
  const [result, setResult] = useState<null | { valid: boolean; item?: any }>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load query params
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const qid = params.get("id");
    const qhash = params.get("hash");

    if (qid) setId(qid);
    if (qhash) setHash(qhash);

    if (qid && qhash && /^[a-f0-9]{64}$/i.test(qhash)) {
      verify(qid, qhash);
    }
  }, []);

  async function verify(customId?: string, customHash?: string) {
    const finalId = (customId || id).trim();
    const finalHash = (customHash || hash).trim().toLowerCase();

    // Validation formats
    if (finalId.length < 20) {
      setError("Invalid Attestation ID.");
      return;
    }
    if (!/^[a-f0-9]{64}$/i.test(finalHash)) {
      setError("Invalid SHA-256 hash format.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const sources = [
        "https://raw.githubusercontent.com/BACOUL/certif-scope/main/attestations.json",
        "/attestations.json"
      ];

      let registry: any = null;

      for (const src of sources) {
        try {
          const r = await fetch(src, { cache: "no-store" });
          if (r.ok) {
            registry = await r.json();
            break;
          }
        } catch {
          continue;
        }
      }

      if (!registry || !Array.isArray(registry.attestations)) {
        setError("Verification service unavailable.");
        setLoading(false);
        return;
      }

      const match = registry.attestations.find(
        (a: any) =>
          String(a.id).trim() === finalId &&
          String(a.hash).trim().toLowerCase() === finalHash
      );

      setResult(match ? { valid: true, item: match } : { valid: false });
    } catch {
      setError("Unexpected server error.");
    }

    setLoading(false);
  }

  const ready =
    id.trim().length >= 20 && /^[a-f0-9]{64}$/i.test(hash.trim());

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] px-6 py-16">
      <div className="max-w-2xl mx-auto">

        <Link
          href="/"
          className="inline-block mb-10 text-sm font-semibold text-[#1FB6C1]"
        >
          ← Back to Certif-Scope
        </Link>

        <h1 className="text-3xl md:text-4xl font-black mb-2 text-[#0B3A63]">
          Verify Attestation
        </h1>

        <p className="text-xs text-slate-500 mb-6">
          Certif-Scope — Independent automated verification system.
        </p>

        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-6">

          <div>
            <label className="text-sm font-semibold">Attestation ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="mt-2 w-full border border-slate-300 rounded-lg p-3 text-sm"
              placeholder="UUID (auto-filled if using QR code)"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">SHA-256 Hash</label>
            <input
              type="text"
              value={hash}
              onChange={(e) => setHash(e.target.value)}
              className="mt-2 w-full border border-slate-300 rounded-lg p-3 text-sm"
              placeholder="64 characters"
            />
          </div>

          <button
            onClick={() => verify()}
            disabled={!ready || loading}
            className={`w-full py-3 rounded-lg text-white font-semibold ${
              ready
                ? "bg-[#1FB6C1] hover:bg-[#17A2AC]"
                : "bg-slate-300 cursor-not-allowed"
            }`}
          >
            {loading ? "Verifying..." : "Verify Attestation"}
          </button>
        </div>

        {error && (
          <p className="mt-6 text-red-600 font-semibold text-center">{error}</p>
        )}

        {result && (
          <div className="mt-10 p-6 bg-white border border-slate-300 rounded-xl shadow-sm">
            {result.valid ? (
              <>
                <p className="text-green-600 font-bold text-xl mb-2">
                  ✔ VALID — Official Record Found
                </p>
                <p className="text-sm mb-4">
                  This attestation is registered in the Certif-Scope registry.
                </p>

                <div className="text-sm space-y-1">
                  <p><strong>ID:</strong> {id}</p>
                  <p><strong>SHA-256:</strong> {hash}</p>
                  <p><strong>Registered:</strong> {result.item.timestamp}</p>
                </div>
              </>
            ) : (
              <>
                <p className="text-red-600 font-bold text-xl mb-2">
                  ✖ INVALID — No matching record
                </p>
                <p className="text-sm">
                  The provided ID and hash are not registered. The document may be altered or not issued by Certif-Scope.
                </p>
              </>
            )}
          </div>
        )}

        <div className="text-center mt-10 text-xs text-slate-500 space-x-4">
          <Link href="/legal" className="text-[#1FB6C1]">Legal</Link>
          <Link href="/privacy" className="text-[#1FB6C1]">Privacy</Link>
          <Link href="/refund-policy" className="text-[#1FB6C1]">Refund Policy</Link>
        </div>
      </div>
    </div>
  );
}
