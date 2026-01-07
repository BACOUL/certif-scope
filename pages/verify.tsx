import { useState } from "react";

async function computeHash(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", arrayBuffer);
  const hashArray = Array.from(new Uint8Array(digest));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function extractTextFromPDF(file: File): Promise<string> {
  // Ensure browser-only
  if (typeof window === "undefined") return "";

  // Dynamic import to avoid server-side resolution
  const pdfjsLib = await import("pdfjs-dist/build/pdf");
  const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker.entry");

  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

  let fullText = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    fullText += content.items.map((item: any) => item.str).join(" ");
  }

  return fullText;
}

export default function VerifyPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<null | "valid" | "invalid">(null);
  const [loading, setLoading] = useState(false);

  const [extractedId, setExtractedId] = useState("");
  const [extractedHash, setExtractedHash] = useState("");
  const [computedHash, setComputedHash] = useState("");

  const handleVerify = async () => {
    if (!file) return;

    setLoading(true);
    setStatus(null);

    const realHash = await computeHash(file);
    setComputedHash(realHash);

    const text = await extractTextFromPDF(file);

    const idMatch = text.match(/ATTESTATION ID[:\s]+([A-Za-z0-9\-]+)/i);
    const hashMatch = text.match(/SHA-256[:\s]+([a-f0-9]{64})/i);

    const docId = idMatch ? idMatch[1] : "";
    const docHash = hashMatch ? hashMatch[1] : "";

    setExtractedId(docId);
    setExtractedHash(docHash);

    if (docHash && docHash.toLowerCase() === realHash.toLowerCase()) {
      setStatus("valid");
    } else {
      setStatus("invalid");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black text-[#0B3A63] mb-6">
          Verify Attestation
        </h1>

        <p className="text-sm text-slate-600 mb-8">
          Upload an attestation PDF to verify authenticity. No data is uploaded — verification runs locally.
        </p>

        <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm space-y-6">
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full text-sm"
          />

          <button
            onClick={handleVerify}
            disabled={!file || loading}
            className="w-full bg-[#1FB6C1] text-white py-3 rounded-lg"
          >
            {loading ? "Verifying…" : "Verify PDF"}
          </button>
        </div>

        {status && (
          <div className="mt-10 bg-white border p-6 rounded-xl">
            {status === "valid" ? (
              <p className="text-green-600 font-bold text-xl mb-4">✔ VALID — Authentic</p>
            ) : (
              <p className="text-red-600 font-bold text-xl mb-4">✖ INVALID — Modified</p>
            )}

            <div className="text-sm text-slate-700 space-y-2">
              <p><strong>Extracted ID:</strong> {extractedId || "Not found"}</p>
              <p><strong>Hash printed:</strong> {extractedHash || "Not found"}</p>
              <p><strong>Hash computed:</strong> {computedHash}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
