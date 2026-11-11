'use client';

import React, { useState } from 'react';
import { X, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface EscrowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EscrowModal({ isOpen, onClose }: EscrowModalProps) {
  const [client, setClient] = useState('');
  const [amount, setAmount] = useState('');
  const [condition, setCondition] = useState('');
  const [created, setCreated] = useState(false);

  if (!isOpen) return null;

  const handleCreateEscrow = (e: React.FormEvent) => {
    e.preventDefault();
    setCreated(true);
    setTimeout(() => {
      setCreated(false);
      setClient('');
      setAmount('');
      setCondition('');
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 text-slate-100">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-blue-950 text-blue-400 border border-blue-800/50">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Nouvelle Facture Escrow</h3>
              <p className="text-xs text-slate-400">Smart Contract BCT-Lab</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {created ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
            <h4 className="text-xl font-bold text-white">Contrat Escrow Généré !</h4>
            <p className="text-sm text-slate-400">
              Les fonds de <span className="font-semibold text-cyan-300">{amount} EQD</span> seront bloqués jusqu'à validation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleCreateEscrow} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase font-semibold">
                Client / Payeur (@handle)
              </label>
              <input
                type="text"
                required
                value={client}
                onChange={(e) => setClient(e.target.value)}
                placeholder="ex: @entreprise.tn"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase font-semibold">
                Montant sous séquestre (EQD)
              </label>
              <input
                type="number"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="500.00"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono text-lg font-bold transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase font-semibold">
                Condition de Déblocage (Jalon)
              </label>
              <textarea
                required
                rows={2}
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                placeholder="ex: Validation du livrable web ou signature du PV"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-5 h-5" />
              <span>Créer le Smart Contract Escrow</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}