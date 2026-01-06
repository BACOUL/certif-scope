import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';

export default function Success() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("certif-scope-report");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();

    const id = "ATT-" + Date.now();
    const date = new Date().toLocaleDateString();

    doc.setFontSize(22);
    doc.text("Official Carbon Footprint Attestation", 20, 20);

    doc.setFontSize(12);
    doc.text(`Company: ${data.companyName}`, 20, 40);
    doc.text(`Date: ${date}`, 20, 48);
    doc.text(`Attestation ID: ${id}`, 20, 56);

    doc.text("Breakdown:", 20, 75);
    doc.text(`Scope 1: ${data.scope1} tCO₂e`, 20, 85);
    doc.text(`Scope 2: ${data.scope2} tCO₂e`, 20, 95);
    doc.text(`Scope 3: ${data.scope3} tCO₂e`, 20, 105);

    doc.setFontSize(16);
    doc.text(`Total: ${data.total} tCO₂e`, 20, 125);

    doc.save(`attestation-${id}.pdf`);
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-10 text-center">
      <h1 className="text-2xl font-bold text-[#0B3A63] mb-6">
        Payment confirmed
      </h1>

      <p className="text-slate-600 mb-8">
        Your official carbon footprint attestation is ready.
      </p>

      <button
        onClick={generatePDF}
        className="w-full bg-[#1FB6C1] text-white font-bold py-4 rounded-xl"
      >
        Download my attestation (PDF)
      </button>
    </div>
  );
}
