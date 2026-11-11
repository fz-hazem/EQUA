'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Send,
  ShieldCheck,
  ArrowUpRight,
  ArrowDownLeft,
  Lock,
  Plus,
  Search,
  Download,
  Copy,
  Check,
  Clock,
  TrendingUp,
  ExternalLink,
  Wallet
} from 'lucide-react';

import TransferModal from '../../components/TransferModal';
import EscrowModal from '../../components/EscrowModal';

export default function DashboardPage() {
  const router = useRouter();

  // Handle dynamique de l'utilisateur
  const [userHandle, setUserHandle] = useState('@hazem.equa');

  // Chargement du nom depuis le localStorage au montage du composant
  useEffect(() => {
    const savedHandle = localStorage.getItem('equa_user_handle');
    if (savedHandle) {
      setUserHandle(savedHandle);
    }
  }, []);

  // États des Modales
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [isEscrowOpen, setIsEscrowOpen] = useState(false);

  // Recherche & Filtres
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'p2p' | 'escrow'>('all');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(userHandle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const transactions = [
    {
      id: 'tx-1',
      type: 'p2p_received',
      title: 'Reçu de @salim.dev',
      date: "Aujourd'hui • 14:32",
      amount: '+ 150.00 EQD',
      isPositive: true,
      category: 'p2p',
      hash: '0x8f92a4b1...e91',
      status: 'Confirmé',
    },
    {
      id: 'tx-2',
      type: 'escrow_created',
      title: 'Escrow Créé vers @ste.maghreb',
      date: 'Hier • 09:15',
      amount: '- 500.00 EQD',
      isPositive: false,
      category: 'escrow',
      hash: '0x3c11f7a2...b40',
      status: 'Bloqué en Smart Contract',
    },
    {
      id: 'tx-3',
      type: 'p2p_sent',
      title: 'Envoyé à @amir_tech',
      date: '08 Nov 2026 • 18:45',
      amount: '- 80.00 EQD',
      isPositive: false,
      category: 'p2p',
      hash: '0x9a88e1c4...f12',
      status: 'Confirmé',
    },
    {
      id: 'tx-4',
      type: 'escrow_released',
      title: 'Déblocage Escrow de @freelance_tn',
      date: '05 Nov 2026 • 11:20',
      amount: '+ 300.00 EQD',
      isPositive: true,
      category: 'escrow',
      hash: '0x1d55f9a0...c33',
      status: 'Libéré',
    },
  ];

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch =
      tx.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.hash.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || tx.category === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <header className="bg-slate-900/80 border-b border-slate-800/80 px-4 sm:px-8 py-4 flex items-center justify-between backdrop-blur-md relative z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push('/')}
            className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center gap-2 text-xs font-semibold"
            title="Retour à l'accueil"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Accueil</span>
          </button>

          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              E
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-white tracking-tight leading-none">
                Tableau de Bord EQUA
              </h1>
              <span className="text-[10px] font-mono text-cyan-400 tracking-wider">
                Console Financière Souveraine
              </span>
            </div>
          </Link>
        </div>

        {/* Profil utilisateur dynamique */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/30 text-xs font-mono text-slate-300 transition-all cursor-pointer"
            title="Cliquer pour copier le handle"
          >
            <span className="text-cyan-400 font-semibold">{userHandle}</span>
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
          </button>

          <div className="hidden md:flex items-center gap-2 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyan-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Sandbox BCT-Lab • KYC Verified</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 flex-1 w-full relative z-10">
        
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-900/50 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/50">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Opérations Instantanées</h2>
              <p className="text-xs text-slate-400">Exécution sur Polygon Amoy Testnet (Garantie BCT 1:1)</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsTransferOpen(true)}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Virement P2P</span>
            </button>

            <button
              onClick={() => setIsEscrowOpen(true)}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock className="w-4 h-4 text-blue-400" />
              <span>Facture Escrow</span>
            </button>

            <button
              onClick={() => alert('Fonctionnalité On-Ramp BCT Sandbox en cours de synchronisation avec la banque hôte.')}
              className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Recharger</span>
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-950/40 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase text-cyan-100 tracking-wider font-semibold">
                  Solde Disponible (EQD)
                </span>
                <Wallet className="w-4 h-4 text-cyan-200" />
              </div>
              <h2 className="text-3xl font-extrabold font-mono tracking-tight mt-1">
                2,450.00 <span className="text-lg font-normal text-cyan-200">TND</span>
              </h2>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs">
              <span className="text-cyan-100 font-medium">Parité : 1 EQD = 1 TND</span>
              <button
                onClick={() => setIsTransferOpen(true)}
                className="underline hover:text-white font-semibold flex items-center gap-1 cursor-pointer"
              >
                Envoyer <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                  Escrow sous Séquestre
                </span>
                <Lock className="w-4 h-4 text-cyan-400" />
              </div>
              <h2 className="text-3xl font-extrabold font-mono text-cyan-400 tracking-tight mt-1">
                800.00 <span className="text-lg font-normal text-slate-400">TND</span>
              </h2>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                2 Contrats en cours
              </span>
              <span className="text-cyan-400 font-semibold">Sécurisé</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                  Volume Mensuel
                </span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-extrabold font-mono text-white tracking-tight mt-1">
                3,400.00 <span className="text-lg font-normal text-slate-400">EQD</span>
              </h2>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Economie frais : ~42.5 TND</span>
              <span className="text-emerald-400 font-mono font-semibold">+14.2%</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                  Réseau & Protocole
                </span>
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
              </div>
              <h2 className="text-xl font-bold font-mono text-white tracking-tight mt-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                Polygon Amoy
              </h2>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Frais : 0.001 TND/tx</span>
              <span className="text-cyan-400 font-semibold">Proof 1:1</span>
            </div>
          </div>

        </div>

        {/* Section Escrow avec Handle Dynamique */}
        <div className="bg-slate-900/60 rounded-2xl border border-slate-800/90 p-6 backdrop-blur-xl shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white">Contrats Escrow en Cours de Validation</h3>
            </div>
            <span className="text-xs font-mono text-slate-400">2 Jalons en attente</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-cyan-400">#ESC-8920</span>
                  <h4 className="font-semibold text-slate-200 text-sm">Développement Module Payment API</h4>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-[10px] font-mono">
                  75% Effectué
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Payeur : <strong className="text-cyan-300">{userHandle}</strong> → Bénéficiaire : <strong className="text-white">@ste.maghreb</strong>
              </p>
              
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[75%]" />
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <span className="text-slate-400">Montant : <strong className="text-white">500.00 EQD</strong></span>
                <span className="text-slate-500 text-[10px]">Jalon 2/3</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-cyan-400">#ESC-7412</span>
                  <h4 className="font-semibold text-slate-200 text-sm">Audit Conformité BCT Regulatory Sandbox</h4>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-[10px] font-mono">
                  En Attente Validation
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Payeur : <strong className="text-cyan-300">{userHandle}</strong> → Bénéficiaire : <strong className="text-white">@freelance_tn</strong>
              </p>
              
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[50%]" />
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <span className="text-slate-400">Montant : <strong className="text-white">300.00 EQD</strong></span>
                <span className="text-slate-500 text-[10px]">Jalon 1/2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Transactions */}
        <div className="bg-slate-900/60 rounded-2xl border border-slate-800/90 p-6 backdrop-blur-xl shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Historique Général des Transactions</h3>
              <p className="text-xs text-slate-400">Traçabilité immuable enregistrée sur la blockchain Polygon</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 md:w-64">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher handle, tx..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-all font-mono"
                />
              </div>

              <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    filterType === 'all' ? 'bg-slate-800 text-cyan-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Tous
                </button>
                <button
                  onClick={() => setFilterType('p2p')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    filterType === 'p2p' ? 'bg-slate-800 text-cyan-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  P2P
                </button>
                <button
                  onClick={() => setFilterType('escrow')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    filterType === 'escrow' ? 'bg-slate-800 text-cyan-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Escrow
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 transition-all gap-3"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        tx.isPositive
                          ? 'bg-emerald-950/80 border-emerald-800/50 text-emerald-400'
                          : 'bg-cyan-950/80 border-cyan-800/50 text-cyan-400'
                      }`}
                    >
                      {tx.isPositive ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-slate-200 text-sm">{tx.title}</p>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                          {tx.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mt-0.5">
                        <span>{tx.date}</span>
                        <span>•</span>
                        <span className="text-cyan-400/80 flex items-center gap-1">
                          {tx.hash} <ExternalLink className="w-3 h-3 cursor-pointer hover:text-cyan-300" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800/60">
                    <span
                      className={`font-mono font-bold text-sm ${
                        tx.isPositive ? 'text-emerald-400' : 'text-cyan-400'
                      }`}
                    >
                      {tx.amount}
                    </span>

                    <button
                      onClick={() => alert(`Téléchargement du reçu officialisé BCT pour ${tx.hash}`)}
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center text-slate-500 text-sm font-mono">
                Aucune transaction trouvée.
              </div>
            )}
          </div>
        </div>

      </main>

      <footer className="py-4 text-center text-[11px] font-mono text-slate-500 relative z-10 border-t border-slate-800/80">
        EQUA Protocol © 2026 • Environment BCT-Lab & Polygon Amoy
      </footer>

      <TransferModal isOpen={isTransferOpen} onClose={() => setIsTransferOpen(false)} />
      <EscrowModal isOpen={isEscrowOpen} onClose={() => setIsEscrowOpen(false)} />

    </div>
  );
}