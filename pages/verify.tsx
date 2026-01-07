import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import pdfjsWorker from "pdfjs-dist/legacy/build/pdf.worker.entry";

// ------------------------------------------------------------
// 1) Compute SHA-256 hash from uploaded PDF
// ------------------------------------------------------------
async function computeHash(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", arrayBuffer);
  const hashArray = Array.from(new Uint8Array(digest));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// ------------------------------------------------------------
// 2) Extract text from PDF (client-side using pdf.js)
// ------------------------------------------------------------
async function extractTextFromPDF(file: File): Promise<string> {
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

// ------------------------------------------------------------
// 3) React Page Component
// ------------------------------------------------------------
export default function VerifyPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<null | "valid" | "invalid">(null);
  const [loading, setLoading] = useState(false);

  const [extractedId, setExtractedId] = useState("");
  const [extractedHash, setExtractedHash] = useState("");
  const [computedHash, setComputedHash] = useState("");

  const handleVerify = async () => {
    if (!file) return;

    setStatus(null);
    setLoading(true);

    // Step 1: Compute real hash
    const hash = await computeHash(file);
    setComputedHash(hash);

    // Step 2: Extract text content
    const text = await extractTextFromPDF(file);

    // Extract ID
    const idMatch = text.match(/ATTESTATION ID[:\s]+([A-Za-z0-9\-]+)/i);
    const id = idMatch ? idMatch[1] : "";
    setExtractedId(id);

    // Extract expected hash
    const hashMatch = text.match(/SHA-256[:\s]+([a-f0-9]{64})/i);
    const docHash = hashMatch ? hashMatch[1] : "";
    setExtractedHash(docHash);

    // Step 3: Compare
    if (docHash && docHash.toLowerCase() === hash.toLowerCase()) {
      setStatus("valid");
    } else {
      setStatus("invalid");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-black text-[#0B3A63] mb-6">
          Verify Attestation
        </h1>

        <p className="text-sm text-slate-600 mb-8">
          Upload an attestation PDF to verify its authenticity.
          Verification is done locally in your browser — no data is uploaded.
        </p>

        {/* Upload UI */}
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
            className="w-full bg-[#1FB6C1] hover:bg-[#17A2AC] text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            {loading ? "Verifying..." : "Verify PDF"}
          </button>
        </div>

        {/* Results */}
        {(status === "valid" || status === "invalid") && (
          <div className="mt-10 bg-white border border-slate-300 p-6 rounded-xl shadow-sm">
            {status === "valid" ? (
              <p className="text-green-600 font-bold text-xl mb-4">
                ✔ VALID — Authentic Attestation
              </p>
            ) : (
              <p className="text-red-600 font-bold text-xl mb-4">
                ✖ INVALID — PDF Tampered or Modified
              </p>
            )}

            <div className="text-sm text-slate-700 space-y-2">
              <p><strong>Extracted Attestation ID:</strong> {extractedId || "Not found"}</p>
              <p><strong>Hash inside PDF:</strong> {extractedHash || "Not found"}</p>
              <p><strong>Computed hash:</strong> {computedHash || "Not computed"}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
