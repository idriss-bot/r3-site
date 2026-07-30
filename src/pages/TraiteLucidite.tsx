import React, { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';

export default function TraiteLucidite() {
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
          listIds: [35],
          updateEnabled: true,
        }),
      });

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light mb-4 leading-[1.15] tracking-tight">
              <span className="inline-block">Traité de lucidité</span>{' '}
              <span className="inline-block">envers les agents immobiliers</span>{' '}
              <span className="inline-block">de l'ancienne école</span>{' '}
              <span className="inline-block italic gold-gradient-text">qui ont toujours réussi</span>{' '}
              <span className="inline-block">(sans les réseaux sociaux)</span>
            </h1>
            <h2 className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-loose font-light">
              <span className="inline-block">Comprenez <mark className="bg-primary/20 text-white px-1.5 py-0.5 rounded-md font-medium">pourquoi</mark></span>{' '}
              <span className="inline-block">ce qui fonctionnait hier</span>{' '}
              <span className="inline-block">ne suffit plus aujourd'hui,</span>{' '}
              <span className="inline-block">et découvrez <mark className="bg-primary/20 text-white px-1.5 py-0.5 rounded-md font-medium">comment vous adapter</mark></span>{' '}
              <span className="inline-block">sans renier ce qui a fait</span>{' '}
              <span className="inline-block gold-gradient-text font-medium">votre&nbsp;réussite.</span>
            </h2>
          </div>

          {/* Image + Form — side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

            {/* Image + accroche */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://pub-cafafba9e69048b58316855e8ac02b43.r2.dev/Trait%C3%A9%20image.png"
                  alt="Traité de lucidité — couverture"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-sm text-gray-400 font-light leading-relaxed space-y-2 px-2">
                <p className="text-white/70 font-medium text-base mb-3">Dans ce traité, vous découvrirez :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✦</span>
                    <span>Les résultats d'une expérimentation menée avec <span className="text-white/80">70&nbsp;agents immobiliers</span> entre 2023 et 2025, en France, Suisse, Belgique et Luxembourg</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✦</span>
                    <span>Pourquoi <span className="text-white/80">63,6&nbsp;% des agents accompagnés</span> ont constaté une hausse de 30 à 50&nbsp;% de leurs mandats — grâce aux recommandations, pas aux contacts directs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✦</span>
                    <span>Comment un directeur d'agence est passé de <span className="text-white/80">59 à 101&nbsp;mandats en un an</span>, sans changer son organisation — juste sa visibilité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✦</span>
                    <span>Pourquoi les réseaux sociaux ne sont pas un canal d'acquisition, mais <span className="text-white/80">un amplificateur de votre réseau existant</span> — et comment le mesurer autrement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form card */}
            <div className="glass-panel rounded-2xl p-8 md:p-10 shadow-2xl">
              {success ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(194,129,53,0.3)]">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-xl font-heading text-white mb-2">Votre Traité arrive !</p>
                  <p className="text-gray-400 font-light text-sm">Consultez votre boîte mail dans quelques instants. Pensez à vérifier vos spams si besoin.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  <p className="text-center text-white/60 text-sm font-light mb-2">
                    Renseignez vos coordonnées pour recevoir le Traité <span className="text-primary font-medium">gratuitement</span> par email.
                  </p>
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
                    className="w-full bg-primary hover:bg-primary-hover text-white px-8 py-5 rounded-full font-heading text-base tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(194,129,53,0.25)] hover:shadow-[0_0_50px_rgba(194,129,53,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2 mt-1"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      'Recevoir mon Traité gratuitement'
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

      <Footer />
    </div>
  );
}
