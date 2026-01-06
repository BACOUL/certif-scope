import { useEffect, useState } from "react";
import jsPDF from "jspdf";

export default function Success() {
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("certif-scope-report");
    if (data) setReport(JSON.parse(data));
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Carbon Footprint Attestation", 20, 20);

    doc.setFontSize(12);
    doc.text(`Company: ${report.companyName}`, 20, 40);
    doc.text(`Scope 1: ${report.scope1} tCO2e`, 20, 60);
    doc.text(`Scope 2: ${report.scope2} tCO2e`, 20, 80);
    doc.text(`Scope 3: ${report.scope3} tCO2e`, 20, 100);
    doc.text(`Total: ${report.total} tCO2e`, 20, 120);

    doc.save("attestation.pdf");
  };

  if (!report) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto text-center mt-20">
      <h1 className="text-3xl font-bold text-[#0B3A63]">Payment confirmed</h1>

      <p className="mt-4 text-slate-600">
        Your carbon footprint attestation is ready.
      </p>

      <button
        onClick={downloadPDF}
        className="mt-8 bg-[#1FB6C1] text-white font-bold px-6 py-4 rounded-xl"
      >
        Download PDF
      </button>
    </div>
  );
}
