'use client';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import FeaturesSection from '../components/FeaturesSection';
import SecuritySection from '../components/SecuritySection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080C14] text-slate-100 antialiased selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <SecuritySection />
    </main>
  );
}