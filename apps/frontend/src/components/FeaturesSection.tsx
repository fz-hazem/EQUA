'use client';

import React from 'react';
import { Send, Lock, LayoutDashboard, ShieldCheck } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-[#080C14] text-slate-200 border-t border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/50">
            Paiements & Web3
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
            Fonctionnalités Clés d'<span className="text-cyan-400">EQUA</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Une suite complète d'outils financiers conçue pour la simplicité, la vitesse et la sécurité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 text-cyan-400 flex items-center justify-center mb-6">
              <Send className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Virements P2P Instantanés</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Envoyez et recevez du Dinar Numérique (EQD) en moins de 3 secondes grâce à des pseudo-handles faciles à retenir.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-950/80 text-blue-400 flex items-center justify-center mb-6">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Facturation Escrow Intelligente</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Sécurisez vos transactions commerciales. Les fonds restent sous séquestre dans un Smart Contract autonome.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 text-cyan-400 flex items-center justify-center mb-6">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Tableau de Bord Exécutif</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Suivez vos soldes, historique de transactions et contrats sous séquestre en temps réel avec exportation des justificatifs.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-950/80 text-blue-400 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Identité Numérique Vérifiée</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Vérification automatique KYC/AML alignée avec les critères d'agrément des établissements de paiement en Tunisie.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}