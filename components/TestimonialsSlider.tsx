import { useEffect, useRef } from "react";

export default function TestimonialsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!slider) return;

      scrollAmount += 1;
      slider.scrollLeft = scrollAmount;

      // reset at the end for infinite loop
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
        slider.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      author: "Martin L.",
      role: "PME BTP – Strasbourg",
      text: "Première attestation carbone demandée par une banque. Certif-Scope a été accepté immédiatement."
    },
    {
      author: "Sofia R.",
      role: "E-commerce – Portugal",
      text: "Simple, clair et validé par nos partenaires logistiques. Aucun audit demandé."
    },
    {
      author: "Davide M.",
      role: "Maintenance industrielle – Italie",
      text: "Document conforme pour répondre aux exigences de nos grands clients. Délivré en 2 minutes."
    },
    {
      author: "Anna K.",
      role: "Consulting – Allemagne",
      text: "Utilisé pour un appel d’offre public. L’attestation a été acceptée sans aucun problème."
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 px-6 md:px-12">
      <h2 className="text-3xl font-black text-center text-[#0B3A63] mb-10">
        What our clients say
      </h2>

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="min-w-[300px] md:min-w-[350px] bg-white border border-[#E2E8F0] shadow-sm p-6 rounded-xl snap-center"
          >
            <p className="text-[#475569] text-sm mb-4">“{t.text}”</p>
            <p className="text-[#0B3A63] font-bold text-sm">{t.author}</p>
            <p className="text-[#64748B] text-xs">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
