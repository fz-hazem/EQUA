'use client';

import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TransferModal({ isOpen, onClose }: TransferModalProps) {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setRecipient('');
        setAmount('');
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 text-slate-100">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/50">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Virement Instantané P2P</h3>
              <p className="text-xs text-slate-400 font-mono">Polygon Amoy • Frais ~0.001 TND</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {success ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
            <h4 className="text-xl font-bold text-white">Virement Effectué !</h4>
            <p className="text-sm text-slate-400">
              {amount} EQD transférés avec succès vers <span className="font-semibold text-cyan-300">{recipient}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleTransfer} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase font-semibold">
                Destinataire (@handle ou Adresse Web3)
              </label>
              <input
                type="text"
                required
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="ex: @hazem.equa ou 0x71C...8A"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase font-semibold">
                Montant (EQD / TND)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.001"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono text-lg font-bold transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 font-mono text-sm font-bold">
                  EQD
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Conformité KYC BCT-Lab
              </span>
              <span className="font-mono text-slate-400 font-semibold">Délai : &lt; 2s</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Validation sur la Blockchain...</span>
                </>
              ) : (
                <span>Confirmer le transfert</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}