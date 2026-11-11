'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, UserPlus, ShieldCheck, Wallet, ArrowRight, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const [authMethod, setAuthMethod] = useState<'classic' | 'web3'>('classic');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Génération dynamique du handle à partir de l'email saisi
    if (email) {
      const username = email.split('@')[0].toLowerCase().replace(/[^a-z0-9._-]/g, '');
      const dynamicHandle = `@${username || 'user'}.equa`;
      localStorage.setItem('equa_user_handle', dynamicHandle);
    }
    
    window.location.href = '/dashboard';
  };

  const handleWeb3Connect = (walletName: string) => {
    // Handle par défaut pour la connexion Web3
    localStorage.setItem('equa_user_handle', '@0x71C...8A');
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col justify-between relative overflow-hidden">
      
      {/* Halos Lumineux Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="px-6 py-6 flex items-center justify-between relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Accueil</span>
          </Link>

          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              E
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-extrabold tracking-tight text-white block leading-none">
                EQUA
              </span>
              <span className="text-[10px] font-mono text-cyan-400 tracking-wider">
                Equitable, Quick & Universal Access
              </span>
            </div>
          </Link>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md text-cyan-300 text-xs font-mono shadow-sm">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span className="hidden sm:inline">Environnement Sécurisé BCT-Lab</span>
        </div>
      </header>

      {/* Formulaire Login */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 relative z-10">
        <div className="w-full max-w-md bg-slate-900/70 border border-slate-800/90 rounded-2xl p-8 backdrop-blur-xl shadow-2xl shadow-cyan-950/20">
          
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Accès à la Console EQUA
            </h1>
            <p className="text-xs text-slate-400">
              Choisissez votre méthode d'authentification sécurisée
            </p>
          </div>

          <div className="grid grid-cols-2 p-1 bg-slate-950/80 rounded-xl border border-slate-800 mb-6">
            <button
              type="button"
              onClick={() => setAuthMethod('classic')}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                authMethod === 'classic'
                  ? 'bg-slate-800/90 text-cyan-400 shadow-sm border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Compte Classique</span>
            </button>

            <button
              type="button"
              onClick={() => setAuthMethod('web3')}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                authMethod === 'web3'
                  ? 'bg-slate-800/90 text-cyan-400 shadow-sm border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wallet className="w-3.5 h-3.5" />
              <span>Portefeuille Web3</span>
            </button>
          </div>

          {authMethod === 'classic' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-2 tracking-wider">
                  Adresse Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nom@institution.tn"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm font-medium transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-2 tracking-wider">
                  Mot de Passe
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm font-medium transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-800 bg-slate-950 text-cyan-500 focus:ring-cyan-500/20"
                  />
                  <span>Se souvenir de moi</span>
                </label>
                <a href="#forgot" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Mot de passe oublié ?
                </a>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Se connecter</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <div className="space-y-4 py-2">
              <p className="text-xs text-slate-400 text-center mb-4">
                Connectez votre portefeuille Web3 pour signer votre session sur le réseau Polygon Amoy.
              </p>
              <button
                type="button"
                onClick={() => handleWeb3Connect('MetaMask')}
                className="w-full py-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-cyan-500/30 text-white font-semibold text-sm transition-all flex items-center justify-center gap-3 cursor-pointer hover:border-cyan-400"
              >
                <span className="text-lg">🦊</span>
                <span>Connexion via MetaMask</span>
              </button>
              <button
                type="button"
                onClick={() => handleWeb3Connect('WalletConnect')}
                className="w-full py-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-3 cursor-pointer hover:border-slate-700"
              >
                <span className="text-lg">⚡</span>
                <span>WalletConnect</span>
              </button>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <span>Vous n'avez pas encore de compte ?</span>
            <a href="#register" className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1">
              <UserPlus className="w-3.5 h-3.5" />
              <span>S'inscrire</span>
            </a>
          </div>

        </div>
      </main>

      <footer className="py-4 text-center text-[11px] font-mono text-slate-500 relative z-10">
        EQUA Protocol © 2026 • Equitable, Quick & Universal Access
      </footer>
    </div>
  );
}