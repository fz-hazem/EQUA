'use client';

import React, { useState } from 'react';
import { Wallet, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface ConnectWalletProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectWallet({ isOpen, onClose }: ConnectWalletProps) {
  const [connecting, setConnecting] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleConnect = (walletName: string) => {
    setConnecting(walletName);
    setTimeout(() => {
      setConnecting(null);
      onClose();
      window.location.href = '/dashboard';
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 text-slate-100">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/50">
              <Wallet className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Connecter un Wallet</h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleConnect('MetaMask')}
            className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">🦊</span>
              <span className="font-semibold text-slate-200 text-sm">MetaMask</span>
            </div>
            {connecting === 'MetaMask' ? (
              <span className="text-xs font-mono text-cyan-400 animate-pulse">Connexion...</span>
            ) : (
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            )}
          </button>

          <button
            onClick={() => handleConnect('WalletConnect')}
            className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">⚡</span>
              <span className="font-semibold text-slate-200 text-sm">WalletConnect</span>
            </div>
            {connecting === 'WalletConnect' ? (
              <span className="text-xs font-mono text-cyan-400 animate-pulse">Connexion...</span>
            ) : (
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            )}
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Polygon Amoy • Sandbox BCT-Lab</span>
        </div>

      </div>
    </div>
  );
}