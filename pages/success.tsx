import { useEffect } from "react";

export default function Success() {

  useEffect(() => {
    async function downloadPDF() {
      const res = await fetch("/api/attestation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: "Your Company",
          scope1: 12,
          scope2: 34,
          scope3: 56,
          total: 102
        }),
      });

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "attestation.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }

    downloadPDF();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Payment successful!</h1>
      <p>Your attestation is being generated…</p>
    </div>
  );
}
