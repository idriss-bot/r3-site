import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-bg py-16 border-t border-white/5 text-center text-gray-600 font-light text-[10px] uppercase tracking-[0.2em]">
      <div className="container mx-auto px-6">
        <img src="/images/logo-r3.png" alt="R3" className="h-12 w-auto mx-auto mb-8" />
        <p>© {new Date().getFullYear()} R3. <span className="whitespace-nowrap">Tous droits réservés.</span></p>
        <p className="mt-4"><a href="/mentions-legales/" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a></p>
      </div>
    </footer>
  );
}
