'use client';

import React from 'react';
import { Zap, Lock, Globe } from 'lucide-react';

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 bg-[#0B1120] text-slate-200 border-t border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Pourquoi faire confiance à <span className="text-cyan-400">EQUA</span> ?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Une infrastructure de paiement souveraine conçue pour répondre aux exigences du BCT-Lab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Zap className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Instantanéité</h3>
            <p className="text-sm text-slate-400">Règlement finalisé en moins de 3 secondes sur Polygon Amoy.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Lock className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Sécurité Escrow</h3>
            <p className="text-sm text-slate-400">Smart contracts autonomes garantissant le blocage et déblocage des fonds.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <Globe className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Inclusion Financière</h3>
            <p className="text-sm text-slate-400">Adresses simplifiées par handles lisibles sans barrière technique.</p>
          </div>
        </div>
      </div>
    </section>
  );
}