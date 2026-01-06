import React from 'react';
import Link from 'next/link';

export default function Legal() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6 text-slate-800 leading-relaxed">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block font-medium">
        ← Retour au calculateur Certif-Scope
      </Link>
      
      <h1 className="text-4xl font-extrabold text-slate-900 mb-10 text-center md:text-left">Mentions Légales</h1>
      
      <div className="space-y-10">
        <section className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4 mb-4">1. Éditeur du Site</h2>
          <div className="space-y-2 text-slate-600">
            <p><span className="font-semibold">Nom Commercial :</span> TimeProofs</p>
            <p><span className="font-semibold">Entrepreneur :</span> Jeason Alexandre BACOUL (Entrepreneur Individuel - EI)</p>
            <p><span className="font-semibold">SIREN :</span> 999 356 439</p>
            <p><span className="font-semibold">Siège Social :</span> 3 rue de l’Église de Louppy, 55000 Les Hauts-de-Chée, France</p>
            <p><span className="font-semibold">Email :</span> contact@timeproofs.io</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4 mb-4">2. Fiscalité & Prix</h2>
          <p className="text-slate-600">
            Les prix affichés sur le site sont exprimés en Euros (€). 
            Conformément à l'article 293 B du CGI, la TVA est non applicable sur nos prestations (Franchise en base de TVA).
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4 mb-4">3. Technologie ActProofs & Données</h2>
          <p className="text-slate-600 italic">
            Certif-Scope repose sur l'infrastructure <strong>ActProofs (Option A : Hashage client)</strong>. 
            Dans ce cadre, aucune donnée comptable brute (chiffre d'affaires, factures) n'est transmise ou stockée sur nos serveurs. 
            Le calcul est réalisé localement dans votre navigateur, garantissant une confidentialité totale.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4 mb-4">4. Hébergement</h2>
          <p className="text-slate-600">
            Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          </p>
        </section>
      </div>

      <footer className="mt-16 pt-8 border-t border-slate-200 text-slate-400 text-sm text-center">
        Dernière mise à jour : 06 Janvier 2026
      </footer>
    </div>
  );
}
