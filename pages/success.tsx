import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';

export default function Success() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('certif-scope-result');
    if (!saved) return;

    const parsed = JSON.parse(saved);
    setData(parsed);
  }, []);

  const generatePDF = () => {
    if (!data) return;

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Certif-Scope – Official Carbon Attestation', 10, 20);

    doc.setFontSize(12);
    doc.text(`Company: ${data.companyName}`, 10, 40);
    doc.text(`Sector: ${data.sector}`, 10, 50);
    doc.text(`Revenue: ${data.revenue} €`, 10, 60);

    doc.text(`Scope 1: ${data.scope1} tCO₂e`, 10, 80);
    doc.text(`Scope 2: ${data.scope2} tCO₂e`, 10, 90);
    doc.text(`Scope 3: ${data.scope3} tCO₂e`, 10, 100);
    doc.text(`TOTAL: ${data.total} tCO₂e`, 10, 120);

    doc.save('certif-scope-attestation.pdf');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] text-[#0B3A63]">
      <h1 className="text-3xl font-black mb-6">Payment confirmed</h1>

      {data ? (
        <>
          <p className="mb-6 text-[#334155]">
            Your carbon footprint attestation is ready.
          </p>

          <button
            onClick={generatePDF}
            className="bg-[#1FB6C1] text-white font-bold px-8 py-4 rounded-xl shadow hover:bg-[#17A2AC]"
          >
            Download your PDF attestation
          </button>
        </>
      ) : (
        <p>No data found. Please calculate again.</p>
      )}
    </div>
  );
}
