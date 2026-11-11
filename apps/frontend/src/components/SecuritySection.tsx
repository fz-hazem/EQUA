'use client';

import React from 'react';
import { Shield, FileCheck, CheckCircle2 } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section id="security" className="py-20 bg-[#0B1120] text-slate-200 border-t border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase mb-6">
              <Shield className="w-4 h-4 text-cyan-400" />
              Sandbox Réglementaire BCT-Lab
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight text-white">
              Conformité & Cadre Réglementaire Souverain
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Le projet EQUA s'inscrit directement dans le cadre des expérimentations d'infrastructures de paiement innovantes supervisées par la Banque Centrale de Tunisie (BCT).
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-200">
                  <strong className="text-white">Proof of Reserve 1:1</strong> : Chaque jeton EQD est adossé à 100% par des réserves en Dinar Tunisien (TND).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-200">
                  <strong className="text-white">Transparence Blockchain Auditée</strong> : Traçabilité immuable des flux sur le réseau Polygon Amoy Testnet.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-200">
                  <strong className="text-white">Protection contre le Blanchiment (AML)</strong> : Contrôle des plafonds de transaction et filtrage des adresses publiques.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <FileCheck className="w-96 h-96 text-cyan-400" />
          </div>

        </div>

      </div>
    </section>
  );
}