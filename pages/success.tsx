import { useEffect } from 'react';

export default function Success() {
  useEffect(() => {
    // Génération du PDF directement dans le navigateur
    const generatePDF = async () => {
      const { default: jsPDF } = await import('jspdf');

      const doc = new jsPDF();

      doc.setFontSize(18);
      doc.text('Official Carbon Footprint Attestation', 20, 20);

      doc.setFontSize(12);
      doc.text('Payment confirmed.', 20, 40);
      doc.text('Your attestation is generated automatically.', 20, 50);
      doc.text(
        'Thank you for using Certif-Scope.', 
        20, 
        60
      );

      doc.save('carbon-attestation.pdf');
    };

    generatePDF();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
      <div className="bg-white p-10 rounded-xl shadow-lg border border-slate-200 text-center">
        <h1 className="text-2xl font-bold text-[#0B3A63] mb-4">
          Payment successful
        </h1>

        <p className="text-slate-600">
          Your official attestation is being generated…
        </p>

        <p className="text-slate-500 mt-2 text-sm">
          If the download does not start automatically, please reload the page.
        </p>
      </div>
    </div>
  );
}
