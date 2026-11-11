'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  RefreshCw,
  CheckCircle2,
  Send,
  Sparkles,
  Activity,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function HeroSection() {
  // Onglet actif dans le simulateur de transaction en direct
  const [activeTab, setActiveTab] = useState<'p2p' | 'escrow'>('p2p');

  return (
    <section className="relative overflow-hidden bg-[#080C14] pt-32 pb-24 text-slate-100 min-h-screen flex flex-col justify-center">
      
      {/* Halos Lumineux d'Arrière-Plan */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[420px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grille de Fond Discrète (Futuriste) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Badge d'Homologation Réglementaire */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-950/30 hover:border-cyan-400/60 hover:shadow-cyan-500/20 transition-all duration-300 group cursor-pointer">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-cyan-300 uppercase font-mono">
              Alignement BCT-Lab & Regulatory Sandbox
            </span>
            <ShieldCheck className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </div>

        {/* Titre Principal & Accroche */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-6">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Equitable, Quick &
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]">
              Universal Access
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            L'infrastructure de paiement souveraine pour la Tunisie : transferts P2P instantanés sur Polygon Amoy, séquestre Escrow autonome et parité stricte <strong className="text-slate-200 font-semibold">1 EQD = 1 TND</strong>.
          </p>

          {/* Boutons d'Action Principaux */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>Accéder à l'Espace Sécurisé</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white font-semibold backdrop-blur-sm hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200 cursor-pointer"
            >
              <span>Explorer le Dashboard Démo</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>
          </div>
        </div>

        {/* Widget Simulateur de Transaction en Direct */}
        <div className="max-w-2xl mx-auto mb-16 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl shadow-2xl shadow-cyan-950/20 overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
          
          {/* Header du Widget avec Onglets */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800/80 bg-slate-950/60">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                Polygon Amoy Testnet
              </span>
            </div>

            {/* Sélecteur P2P / Escrow */}
            <div className="flex items-center bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab('p2p')}
                className={`px-3 py-1 rounded-md font-mono transition-all cursor-pointer ${
                  activeTab === 'p2p'
                    ? 'bg-cyan-950 text-cyan-400 font-bold border border-cyan-800/60'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Virement P2P
              </button>
              <button
                onClick={() => setActiveTab('escrow')}
                className={`px-3 py-1 rounded-md font-mono transition-all cursor-pointer ${
                  activeTab === 'escrow'
                    ? 'bg-blue-950 text-blue-400 font-bold border border-blue-800/60'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Smart Escrow
              </button>
            </div>
          </div>

          {/* Contenu Dynamique du Widget */}
          <div className="p-6">
            {activeTab === 'p2p' ? (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5 text-cyan-400" /> Transfert Direct Instantané
                  </span>
                  <span className="text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                    Tx ID: #8f92a4...e91
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div>
                    <p className="text-[11px] font-mono text-slate-500 uppercase">Émetteur</p>
                    <p className="font-semibold text-slate-200 text-sm font-mono">@hazem.equa</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-cyan-400 font-mono mb-1 font-semibold">0.001 TND (Frais)</span>
                    <div className="w-28 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 relative">
                      <div className="absolute -top-1 right-0 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono mt-1">Validation : 1.8s</span>
                  </div>

                  <div className="text-right">
                    <p className="text-[11px] font-mono text-slate-500 uppercase">Montant Transféré</p>
                    <p className="font-bold text-cyan-400 font-mono text-base">+ 150.00 EQD</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-blue-400" /> Contrat Sous Séquestre Automatique
                  </span>
                  <span className="text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/50">
                    Contract ID: #ESC-8920
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Acheteur : <strong className="text-white">@hazem.equa</strong></span>
                    <span className="text-slate-400">Prestataire : <strong className="text-cyan-300">@ste.maghreb</strong></span>
                  </div>
                  
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full w-3/4 rounded-full" />
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">Jalon : Deliverable Web API</span>
                    <span className="text-emerald-400 font-mono font-bold">500.00 EQD Bloqués</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Grille des 4 Métriques & Garanties (KPIs) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold font-mono text-cyan-400">&lt; 3s</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Délai de règlement instantané</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 group-hover:scale-110 transition-transform">
                <RefreshCw className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold font-mono text-cyan-400">0.001 TND</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Frais réseau quasi-nuls</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold font-mono text-cyan-400">100%</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Conformité KYC BCT-Lab</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-800/50 text-cyan-400 group-hover:scale-110 transition-transform">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold font-mono text-cyan-400">1:1 TND</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Proof of Reserve Garanti</p>
          </div>

        </div>

      </div>
    </section>
  );
}