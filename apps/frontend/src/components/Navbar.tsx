'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Menu, X } from 'lucide-react';
import TransferModal from './TransferModal';
import EscrowModal from './EscrowModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [isEscrowOpen, setIsEscrowOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080C14]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo EQUA */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
                E
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block leading-none">
                  EQUA
                </span>
                <span className="text-[10px] font-mono text-cyan-400 tracking-wider">
                  Equitable, Quick & Universal Access
                </span>
              </div>
            </Link>

            {/* Nav Desktop */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#trust" className="hover:text-cyan-400 transition-colors">Pourquoi EQUA</a>
              <a href="#features" className="hover:text-cyan-400 transition-colors">Fonctionnalités</a>
              <a href="#security" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-cyan-400" />
                Conformité BCT
              </a>
            </nav>

            {/* Actions Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setIsTransferOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 text-sm font-semibold transition-all cursor-pointer"
              >
                Virement P2P
              </button>

              <Link
                href="/login"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Se Connecter</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#080C14] px-4 pt-2 pb-6 space-y-4">
            <a href="#trust" className="block text-slate-300 py-2">Pourquoi EQUA</a>
            <a href="#features" className="block text-slate-300 py-2">Fonctionnalités</a>
            <a href="#security" className="block text-cyan-400 py-2">Conformité BCT</a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => { setIsTransferOpen(true); setIsMenuOpen(false); }}
                className="w-full py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-center"
              >
                Virement P2P
              </button>
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-center block"
              >
                Se Connecter
              </Link>
            </div>
          </div>
        )}
      </header>

      <TransferModal isOpen={isTransferOpen} onClose={() => setIsTransferOpen(false)} />
      <EscrowModal isOpen={isEscrowOpen} onClose={() => setIsEscrowOpen(false)} />
    </>
  );
}