import './globals.css';

export const metadata = {
  title: 'EQUA — Infrastructure de Paiement Souveraine',
  description: 'Equitable, Quick & Universal Access (Sandbox BCT-Lab)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className="bg-[#080C14] text-slate-100 min-h-screen antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}