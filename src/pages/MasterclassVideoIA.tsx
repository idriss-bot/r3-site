import React, { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function MasterclassVideoIA() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = prenom.trim().length > 0 && emailRegex.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || loading) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': import.meta.env.VITE_BREVO_API_KEY as string,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          attributes: { PRENOM: prenom.trim() },
          listIds: [39],
          updateEnabled: true,
        }),
      });

      // 204 = already exists + updated, 201 = created — both are success
      if (!res.ok && res.status !== 204) {
        throw new Error(`HTTP ${res.status}`);
      }

      setSuccess(true);
    } catch {
      setError('Une erreur est survenue, veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-white font-body selection:bg-primary selection:text-white relative flex flex-col overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="bg-noise"></div>

      {/* Ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Logo header */}
      <header className="relative z-10 pt-6 pb-4 text-center">
        <a href="/" aria-label="Retour à l'accueil R3">
          <img src="/images/logo-r3.png" alt="R3" className="h-10 w-auto mx-auto" />
        </a>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center relative z-10 px-6 py-6 md:py-10">
        <div className="w-full max-w-5xl mx-auto">

          {/* Headings */}
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light mb-4 leading-[1.1] tracking-tight text-balance">
              <span className="italic gold-gradient-text">Dupliquez-vous</span> virtuellement<br />
              <span className="inline-block mt-4 px-6 py-2 rounded-full text-xl md:text-2xl font-bold text-black tracking-wide shadow-lg" style={{background: 'linear-gradient(to right, #E8C396, #C28135)'}}>Mardi 21 avril 2026 à 12h</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light text-balance">
              La masterclass gratuite qui vous montre comment créer des vidéos à votre image grâce à l'IA (à partir d'une simple photo).
            </p>
          </div>

          {/* Image + Form — side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

            {/* Video */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/N49Yz8aGsXc"
                title="Masterclass Vidéo 100% IA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Form card */}
            <div className="glass-panel rounded-2xl p-8 md:p-10 shadow-2xl">
              {success ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(194,129,53,0.3)]">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-xl font-heading text-white mb-2">Vous êtes inscrit(e) !</p>
                  <p className="text-gray-400 font-light text-sm">Vérifiez votre boîte mail.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Votre prénom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    disabled={loading}
                    required
                    className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white font-body text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors disabled:opacity-50"
                  />
                  <input
                    type="email"
                    placeholder="Votre email professionnel"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    required
                    className="w-full bg-surface border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white font-body text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!isValid || loading}
                    className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-full font-heading text-sm tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(194,129,53,0.25)] hover:shadow-[0_0_50px_rgba(194,129,53,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2 mt-1"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Inscription en cours...
                      </>
                    ) : (
                      'Je m\'inscris gratuitement'
                    )}
                  </button>

                  {error && (
                    <p className="text-red-400 text-xs text-center font-light">{error}</p>
                  )}

                  <p className="text-white text-xs text-center font-light mt-1">
                    En m'inscrivant, j'accepte de recevoir des mails de R3.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-bg py-16 border-t border-white/5 text-center text-gray-600 font-light text-[10px] uppercase tracking-[0.2em]">
        <div className="container mx-auto px-6">
          <img src="/images/logo-r3.png" alt="R3" className="h-12 w-auto mx-auto mb-8" />
          <p>© {new Date().getFullYear()} R3. <span className="whitespace-nowrap">Tous droits réservés.</span></p>
          <p className="mt-4"><a href="/mentions-legales/" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a></p>
        </div>
      </footer>
    </div>
  );
}
