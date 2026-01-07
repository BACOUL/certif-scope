import { useState } from "react";

// Compute SHA-256 hash of a file
async function computeHash(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", arrayBuffer);
  const hashArray = Array.from(new Uint8Array(digest));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// Read text from PDF using pdf.js
async function extractTextFromPDF(file: File): Promise<string> {
  const pdfjsLib = await import("pdfjs-dist/build/pdf");
  const pdfWorker = await import("pdfjs-dist/build/pdf.worker.entry");

  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;

  let fullText = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    fullText += content.items.map((i: any) => i.str).join(" ");
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

    // Step 1: Compute actual hash from the PDF file
    const realHash = await computeHash(file);
    setComputedHash(realHash);

    // Step 2: Extract text (including ID + hash printed)
    const text = await extractTextFromPDF(file);

    // Extract the ID from the text
    const idMatch = text.match(/ATTESTATION ID[:\s]+([A-Za-z0-9\-]+)/i);
    const hashMatch = text.match(/SHA-256[:\s]+([a-f0-9]{64})/i);

    const docId = idMatch ? idMatch[1] : "";
    const docHash = hashMatch ? hashMatch[1] : "";

    setExtractedId(docId);
    setExtractedHash(docHash);

    // Step 3: Compare hash printed vs actual hash
    if (docHash && docHash.toLowerCase() === realHash.toLowerCase()) {
      setStatus("valid");
    } else {
      setStatus("invalid");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-black text-[#0B3A63] mb-6">
          Verify Attestation
        </h1>

        <p className="text-sm text-slate-600 mb-6">
          Upload an attestation PDF to verify its authenticity.
          Verification is performed locally in your browser.
          No data is uploaded or stored.
        </p>

        {/* Upload */}
        <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full mb-4"
          />

          <button
            onClick={handleVerify}
            disabled={!file || loading}
            className="w-full bg-[#1FB6C1] hover:bg-[#17A2AC] text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Verifying..." : "Verify PDF"}
          </button>
        </div>

        {/* Results */}
        {status && (
          <div className="mt-10 p-6 rounded-xl border shadow-sm bg-white">

            {status === "valid" ? (
              <p className="text-green-600 font-bold text-xl mb-4">
                ✔ VALID — Authentic Attestation
              </p>
            ) : (
              <p className="text-red-600 font-bold text-xl mb-4">
                ✖ INVALID — PDF Tampered
              </p>
            )}

            <div className="text-sm text-slate-700 space-y-2">
              <p><strong>Extracted ID:</strong> {extractedId || "Not found"}</p>
              <p><strong>Hash inside PDF:</strong> {extractedHash || "Not found"}</p>
              <p><strong>Computed hash:</strong> {computedHash || "Not computed"}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
      }
