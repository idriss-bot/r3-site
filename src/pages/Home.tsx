import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Star, ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import Footer from '../components/Footer';

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function VideoPlayer({ src, aspectRatio = "16/9" }: { src: string; aspectRatio?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="relative overflow-hidden"
      style={{ aspectRatio, borderRadius: 20, boxShadow: '0 0 40px rgba(194,129,53,0.3)' }}
    >
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        playsInline
        controls={isPlaying}
        className="w-full h-full object-cover"
      />
      {!isPlaying && (
        <button
          type="button"
          onClick={() => {
            videoRef.current?.play();
            setIsPlaying(true);
          }}
          className="absolute inset-0 flex items-center justify-center"
          aria-label="Lire la vidéo"
        >
          <div
            className="flex items-center justify-center rounded-full transition-transform hover:scale-105"
            style={{
              width: 64,
              height: 64,
              background: 'rgba(194,129,53,0.85)',
              backdropFilter: 'blur(8px)',
              border: '1.5px solid rgba(255,255,255,0.2)',
              boxShadow: '0 4px 24px rgba(194,129,53,0.4)',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}

function BadgeWhatsAppHero() {
  return (
    <span
      className="inline-flex items-center align-middle rounded-full whitespace-nowrap"
      style={{
        background: 'rgba(37,211,102,0.15)',
        color: '#25d366',
        padding: '0.05em 0.4em',
        fontSize: '0.85em',
        fontWeight: 600,
        gap: '0.25em',
        verticalAlign: 'baseline',
      }}
    >
      <svg width="0.85em" height="0.85em" viewBox="0 0 24 24" fill="#25d366" style={{ flexShrink: 0 }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
      WhatsApp
    </span>
  );
}

function BadgeWhatsApp({ size = 13 }: { size?: number }) {
  const isLarge = size >= 20;
  return (
    <span
      className="inline-flex items-center align-middle rounded-full"
      style={{
        background: 'rgba(37,211,102,0.12)',
        color: '#25d366',
        padding: isLarge ? '4px 14px' : '2px 9px',
        fontSize: size,
        fontWeight: 500,
        gap: isLarge ? 8 : 4,
      }}
    >
      <WhatsAppIcon size={size} color="#25d366" />
      WhatsApp
    </span>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const faqs = [
    { q: "Combien de temps dure la collaboration ?", a: <><span className="gold-gradient-text font-semibold">Engagement</span> de <span className="whitespace-nowrap">12 mois.</span></> },
    { q: "Est-ce qu'on peut payer en CPF ou AGEFICE ?", a: <span className="gold-gradient-text font-semibold">Non.</span> },
    { q: "Est-ce que c'est adapté pour moi si je suis en Suisse ou en Belgique ?", a: <><span className="gold-gradient-text font-semibold">Oui</span>, tant que vous ne nous <span className="whitespace-nowrap">battez plus au foot.</span></> }
  ];

  const realisations = [
    {
      video: "https://res.cloudinary.com/dvpvig9ww/video/upload/v1778059160/r3/videos/Ahmed%20RASHID/Ahmed%20RASHID%20136_1778059156.mp4",
      name: "Ahmed Rashid",
      role: "Agent immobilier à",
      ville: "Limoges",
    },
    {
      video: "https://res.cloudinary.com/dvpvig9ww/video/upload/v1778077982/r3/videos/Romain%20MARTINAUD/Romain%20MARTINAUD%20143_1778077980.mp4",
      name: "Romain Martinaud",
      role: "Co-fondateur d'Advance Immobilier à",
      ville: "Toulouse",
    },
    {
      video: "https://res.cloudinary.com/dvpvig9ww/video/upload/v1778237257/Camille_Nouguier_y3ttu8.mp4",
      name: "Camille Nouguier",
      role: "Conseillère immobilier IAD à",
      ville: "Avignon",
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-white font-body selection:bg-primary selection:text-white relative overflow-x-hidden">
      <div className="bg-noise"></div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <img src="/images/logo-r3.png" alt="R3" className="h-12 w-auto z-50" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-heading">
            <a href="#realisations" className="text-white hover:text-primary transition-colors">Réalisations</a>
            <a href="#comment-ca-marche" className="text-white hover:text-primary transition-colors">Comment ça marche</a>
            <a href="#offre" className="text-white hover:text-primary transition-colors">L'offre</a>
          </div>

          <div className="flex items-center gap-3 z-50">
            <a href="/inscription-mireille" className="hidden md:inline-flex items-center gap-2 border border-whatsapp/40 hover:bg-whatsapp/10 hover:border-whatsapp text-whatsapp px-4 py-3 rounded-full text-[10px] uppercase tracking-[0.15em] transition-all duration-300">
              <WhatsAppIcon size={14} color="#25D366" />
              Tester Mireille Gratuitement
            </a>
            <a href="https://taap.it/VyWVAII" target="_blank" rel="noopener noreferrer" className="hidden md:block border border-white/20 hover:bg-white hover:text-bg text-white px-8 py-3 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300">
              Prendre rendez-vous
            </a>
            <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 bg-bg/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col gap-6 shadow-2xl">
            <a href="#realisations" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-primary text-lg font-heading transition-colors">Réalisations</a>
            <a href="#comment-ca-marche" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-primary text-lg font-heading transition-colors">Comment ça marche</a>
            <a href="#offre" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-primary text-lg font-heading transition-colors">L'offre</a>
            <a href="https://taap.it/VyWVAII" target="_blank" rel="noopener noreferrer" className="border border-white/20 hover:bg-white hover:text-bg text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300 w-full mt-4 block text-center">
              Prendre rendez-vous
            </a>
            <a href="/inscription-mireille" onClick={() => setIsMobileMenuOpen(false)} className="border border-whatsapp/40 hover:bg-whatsapp/10 hover:border-whatsapp text-whatsapp px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300 w-full flex items-center justify-center text-center">
              Tester Mireille Gratuitement
            </a>
          </div>
        )}
      </nav>

      {/* SECTION 1 : HERO */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-light mb-10 leading-[1.1] tracking-tight text-balance mx-auto">
                <span className="md:whitespace-nowrap"><span className="italic gold-gradient-text">Mireille</span> réalise vos vidéos</span> <span className="md:whitespace-nowrap">à partir d'une photo</span> <span style={{ color: '#C28135' }}>&amp;</span> <span className="md:whitespace-nowrap">d'un simple vocal</span> <span className="md:whitespace-nowrap">en 15 minutes</span> <span className="md:whitespace-nowrap">sur <BadgeWhatsAppHero /></span> <span className="md:whitespace-nowrap">grâce à l'IA.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white mb-16 max-w-2xl mx-auto leading-relaxed font-light text-balance">
                <span className="md:whitespace-nowrap"><span className="gold-gradient-text font-semibold">Mireille</span> est une assistante IA</span> <span className="md:whitespace-nowrap">qui s'occupe de tout pour vous :</span> <span className="md:whitespace-nowrap">voix,</span> <span className="md:whitespace-nowrap">création de votre avatar,</span> <span className="md:whitespace-nowrap">mise en scène.</span> <span className="md:whitespace-nowrap">Vous recevez</span> <span className="md:whitespace-nowrap">une vidéo prête à publier</span> <span className="md:whitespace-nowrap">sur tous vos réseaux</span> <span className="md:whitespace-nowrap">en 15 petites minutes.</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col items-center justify-center gap-4">
                <a href="https://taap.it/VyWVAII" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white px-6 md:px-10 py-3 md:py-3.5 min-h-[48px] rounded-full text-[13px] md:text-base font-heading font-bold transition-all duration-300 inline-flex items-center justify-center shadow-[0_0_40px_rgba(194,129,53,0.3)] hover:shadow-[0_0_60px_rgba(194,129,53,0.5)] whitespace-nowrap">
                  Prendre RDV
                </a>
                <a href="/inscription-mireille" className="bg-whatsapp hover:bg-whatsapp-hover text-white px-6 md:px-10 py-3 md:py-3.5 min-h-[48px] rounded-full text-[13px] md:text-base font-heading font-bold transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)] whitespace-nowrap">
                  <WhatsAppIcon size={18} color="#ffffff" />
                  <span className="hidden sm:inline">Tester Mireille Gratuitement</span>
                  <span className="sm:hidden">Tester gratuitement</span>
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-16 max-w-5xl mx-auto">
              <VideoPlayer src="https://res.cloudinary.com/dvpvig9ww/video/upload/v1777565768/Mireille_kqzj2t.mp4" aspectRatio="16/9" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 : LOGOS RÉSEAUX */}
      <section className="py-16 border-y border-white/5 bg-surface-light/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-light mb-12 tracking-tight text-balance text-white">
            <span className="gold-gradient-text font-semibold">Les professionnels de ces réseaux nous font confiance.</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            <img src="/images/logo-orpi.png" alt="Orpi" className="h-10 w-28 object-contain opacity-100 hover:scale-105 transition-transform" />
            <img src="https://res.cloudinary.com/dvpvig9ww/image/upload/v1778245773/logotype-665723940654c-removebg-preview_twlvqu.png" alt="Century 21" className="h-16 w-auto sm:h-24 md:h-40 object-contain opacity-100 hover:scale-105 transition-transform" />
            <img src="/images/logo-iad.png" alt="IAD" className="h-10 w-28 object-contain opacity-100 hover:scale-105 transition-transform" />
            <img src="/images/logo-kw.png" alt="Keller Williams" className="h-10 w-28 object-contain opacity-100 hover:scale-105 transition-transform" />
            <img src="/images/logo-safti.png" alt="SAFTI" className="h-10 w-28 object-contain opacity-100 hover:scale-105 transition-transform" />
            <img src="/images/logo-efficity.png" alt="effiCity" className="h-10 w-28 object-contain opacity-100 hover:scale-105 transition-transform" />
          </div>
        </div>
      </section>

      {/* SECTION 3 : RÉALISATIONS MIREILLE */}
      <section id="realisations" className="py-16 lg:py-24 bg-bg relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <FadeIn>
              <p
                className="font-heading mb-6"
                style={{ textTransform: 'uppercase', letterSpacing: 2.5, fontSize: 11, color: '#8a7560' }}
              >
                Réalisations
              </p>
              <h2 className="text-4xl md:text-6xl font-heading font-light mb-8 tracking-tight text-balance text-white">Les réalisations <span className="italic gold-gradient-text">de Mireille</span></h2>
              <p className="text-lg text-gray-300 font-light text-balance">Trois agents immobiliers, trois vidéos générées en 15 minutes <span className="whitespace-nowrap">par Mireille.</span></p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {realisations.map((r, i) => (
              <FadeIn key={r.name} delay={i * 0.15}>
                <div className="glass-panel rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500" style={{ boxShadow: '0 0 30px rgba(194,129,53,0.08)' }}>
                  <VideoPlayer src={r.video} aspectRatio="9/16" />
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-white">{r.name}</h3>
                    <p className="text-sm text-white/60 mt-1">{r.role} <span className="gold-gradient-text font-semibold">{r.ville}</span></p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 : SUCCÈS CLIENT — FABIAN BRUNA */}
      <section id="etudes-de-cas" className="py-16 lg:py-24 bg-bg relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-heading font-light mb-8 tracking-tight text-balance text-white">Ce que la visibilité change concrètement.</h2>
              <p className="text-lg text-gray-300 font-light text-balance">Il a dit oui à <span className="gold-gradient-text font-semibold whitespace-nowrap">une photo.</span> Voilà ce qui s'est passé ensuite.</p>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="glass-panel p-8 md:p-12 rounded-2xl hover:border-primary/30 transition-all duration-500 flex flex-col md:flex-row gap-8 md:gap-16 items-center group">
                <div className="w-full md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
                  <div className="gold-gradient-text text-5xl md:text-6xl font-heading font-light mb-2 group-hover:scale-105 transition-transform origin-center md:origin-left whitespace-nowrap">+ 600k €</div>
                  <div className="text-xs text-gray-400 uppercase tracking-[0.2em] font-body">de CA sur Instagram</div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 shrink-0">
                      <img src="/images/fabian.jpg" alt="Fabian Bruna" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading text-white">Fabian Bruna</h3>
                      <p className="text-xs uppercase tracking-widest text-primary/80 font-body">Directeur Octo Immo à Toulouse</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-300 font-light text-base sm:text-lg md:text-xl leading-relaxed">
                    <p>Son agence avait gagné 59 exclusivités en 2024 et son CA en transaction était en <span className="gold-gradient-text font-semibold">baisse de 36 %.</span></p>
                    <p>Sur les 12 premiers mois de ses vidéos IA, il a dépassé <span className="gold-gradient-text font-semibold whitespace-nowrap">1 000 000 de vues</span> sur les réseaux sociaux.</p>
                    <p className="text-white font-medium">Résultat : <span className="gold-gradient-text font-semibold whitespace-nowrap">101 exclusivités</span>, +60 offres acceptées et plus de <span className="whitespace-nowrap"><span className="gold-gradient-text font-semibold">600 000 € HT</span> d'honoraires générés.</span></p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5 : COMMENT ÇA MARCHE */}
      <section id="comment-ca-marche" className="py-16 lg:py-24 bg-bg relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <p
                className="font-heading mb-6"
                style={{ textTransform: 'uppercase', letterSpacing: 2.5, fontSize: 11, color: '#8a7560' }}
              >
                Comment ça marche
              </p>
              <h2 className="text-4xl md:text-6xl font-heading font-light mb-6 tracking-tight text-balance">Une photo. Trois étapes. <span className="italic gold-gradient-text">Zéro effort.</span></h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-xl md:max-w-4xl mx-auto">
            {[
              { num: '1', node: <>Inscrivez-vous</> },
              { num: '2', node: <>Vocal sur <BadgeWhatsApp size={12} /></> },
              { num: '3', node: <><span className="gold-gradient-text" style={{ fontWeight: 600 }}>Mireille</span> réalise votre vidéo <span className="whitespace-nowrap">en 15 minutes</span></> },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div
                  className="text-center"
                  style={{
                    background: 'var(--color-surface-light)',
                    borderRadius: 10,
                    padding: '2rem 1.5rem',
                  }}
                >
                  <div className="font-heading" style={{ fontSize: 32, color: '#C28135', fontWeight: 600, marginBottom: 10 }}>
                    {step.num}
                  </div>
                  <div className="text-base md:text-lg text-[#f5e8d8]" style={{ lineHeight: 1.5 }}>{step.node}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 : QUI JE SUIS */}
      <section className="py-16 lg:py-24 bg-surface border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center max-w-6xl mx-auto">
            <div className="w-full lg:w-2/5">
              <FadeIn>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-white/5 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-bg/90 via-bg/20 to-transparent z-10 mix-blend-overlay"></div>
                  <img src="/images/idriss.jpg" alt="Idriss Drira" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </FadeIn>
            </div>
            <div className="w-full lg:w-3/5">
              <FadeIn delay={0.2}>
                <h2 className="text-4xl md:text-6xl font-heading font-light mb-4 tracking-tight"><span className="italic gold-gradient-text">Idriss Drira</span></h2>
                <p className="text-lg md:text-xl text-gray-400 font-light mb-12">Le fondateur <span className="italic gold-gradient-text font-semibold">de Mireille</span></p>
                <div className="space-y-6 text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                  <p>De 2017 à 2022, j'étais chasseur d'appartements à Paris. Je connais ce <span className="gold-gradient-text font-semibold">métier de l'intérieur</span> : la pression des mandats, les rendez-vous qui ne convertissent pas, <span className="whitespace-nowrap">le temps qui manque toujours.</span></p>
                  <p>Pendant le confinement, je me lance sur LinkedIn. En 3 mois, ma communauté passe de 240 à 7 000 abonnés. Mon profil devient un vrai levier de business. Je comprends une chose : <span className="gold-gradient-text font-semibold whitespace-nowrap">dans l'immobilier, celui qui est visible gagne.</span></p>
                  <p>En 2023, je déménage à Marseille et je décide d'aider mes confrères à réussir là où la plupart échouent : générer du business sur les réseaux sociaux. Pendant 2 ans, j'accompagne plus de 30 agents dans toute la France. Résultat : <span className="gold-gradient-text font-semibold whitespace-nowrap">plus d'un million d'euros de CA générés</span> via LinkedIn et Facebook, simplement avec du <span className="whitespace-nowrap">texte et des images.</span></p>
                  <p>En janvier 2025, je fais pivoter mon activité. J'abandonne le texte au <span className="whitespace-nowrap"><span className="gold-gradient-text font-semibold">profit de la vidéo.</span></span></p>
                  <p>Cela faisait longtemps que je voulais opérer ce changement pour <span className="gold-gradient-text font-semibold">maximiser l'impact</span> sur le business de mes confrères. Mais ce n'était pas possible : les temps de tournage n'étaient pas compatibles <span className="whitespace-nowrap">avec le métier d'agent immobilier.</span></p>
                  <p className="text-xl md:text-2xl text-white font-heading italic py-6 gold-gradient-text font-semibold">L'IA a changé la donne.</p>
                  <p className="text-white font-medium text-balance">Aujourd'hui, j'ai conçu <span className="gold-gradient-text font-semibold">Mireille</span> pour permettre à mes clients d'être présents sur les réseaux sans tournage, sans logistique, <span className="whitespace-nowrap">sans stress.</span></p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 : TÉMOIGNAGE */}
      <section className="py-16 lg:py-24 bg-bg relative">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <div className="flex justify-center gap-3 mb-12">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-primary" fill="currentColor" />)}
              </div>
              <blockquote className="text-2xl md:text-4xl font-heading font-light leading-relaxed mb-16 text-white tracking-tight italic text-balance">
                <span className="md:whitespace-nowrap">"Nos clients adorent</span> <span className="md:whitespace-nowrap">le contenu des vidéos</span> <span className="md:whitespace-nowrap">et surtout elles nous offrent</span> <span className="md:whitespace-nowrap">une <span className="gold-gradient-text font-semibold">énorme visibilité</span></span> <span className="md:whitespace-nowrap">sur les réseaux sociaux.</span> <span className="md:whitespace-nowrap">Je ne m'attendais pas</span> <span className="md:whitespace-nowrap">à obtenir un tel</span> <span className="md:whitespace-nowrap"><span className="gold-gradient-text font-semibold">retour sur investissement</span>.</span> <span className="md:whitespace-nowrap">Le tout sans jamais</span> <span className="md:whitespace-nowrap">avoir à m'en occuper.</span> <span className="md:whitespace-nowrap">Merci Mireille."</span>
              </blockquote>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="w-20 h-20 rounded-full bg-surface-light overflow-hidden border border-white/10 shadow-lg">
                  <img src="/images/fabian.jpg" alt="Fabian Bruna" className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <div className="font-heading text-xl text-white mb-1">Fabian Bruna</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-primary/80">Directeur agence Octo-Immo à Toulouse</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 8 : L'OFFRE MIREILLE */}
      <section id="offre" className="py-16 lg:py-24 bg-surface-light border-y border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-heading font-light mb-8 tracking-tight text-balance">L'offre <span className="italic gold-gradient-text">Mireille</span></h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="max-w-md mx-auto glass-panel border border-primary/30 rounded-3xl p-6 md:p-8 text-center relative shadow-[0_0_50px_rgba(194,129,53,0.15)] overflow-visible">

              {/* Sceau Garantie — Top-left exterior (desktop) */}
              <div
                className="absolute top-0 left-0 -translate-x-2/3 -translate-y-1/3 hidden md:flex z-20"
              >
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: 130,
                    height: 130,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, rgba(194,129,53,0.45), rgba(194,129,53,0.25))',
                    border: '4px double #E8A552',
                    boxShadow: '0 0 40px rgba(194,129,53,0.6), 0 0 80px rgba(194,129,53,0.3), inset 0 0 25px rgba(194,129,53,0.2)',
                    transform: 'rotate(-8deg)',
                  }}
                >
                  <div className="absolute inset-2 rounded-full border-2 border-white/30"></div>
                  <div className="text-center px-2">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="mx-auto mb-1">
                      <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="rgba(255,255,255,0.2)" stroke="#ffffff" strokeWidth="1.5" />
                      <path d="M9 12l2 2 4-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div
                      className="font-heading text-white"
                      style={{ fontSize: 8, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', lineHeight: 1.3, textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                    >
                      Garantie<br/>
                      Satisfait<br/>
                      ou Remboursé<br/>
                      <span style={{ fontSize: 11 }}>14 jours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sceau Garantie — Mobile centré au-dessus du prix */}
              <div className="md:hidden flex justify-center mb-6">
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: 130,
                    height: 130,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, rgba(194,129,53,0.45), rgba(194,129,53,0.25))',
                    border: '4px double #E8A552',
                    boxShadow: '0 0 40px rgba(194,129,53,0.6), 0 0 80px rgba(194,129,53,0.3), inset 0 0 25px rgba(194,129,53,0.2)',
                    transform: 'rotate(-8deg)',
                  }}
                >
                  <div className="absolute inset-2 rounded-full border-2 border-white/30"></div>
                  <div className="text-center px-2">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="mx-auto mb-1">
                      <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="rgba(255,255,255,0.2)" stroke="#ffffff" strokeWidth="1.5" />
                      <path d="M9 12l2 2 4-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div
                      className="font-heading text-white"
                      style={{ fontSize: 8, fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', lineHeight: 1.3, textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                    >
                      Garantie<br/>
                      Satisfait<br/>
                      ou Remboursé<br/>
                      <span style={{ fontSize: 11 }}>14 jours</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <div
                  className="text-5xl md:text-6xl font-heading font-light gold-gradient-text mb-2 flex items-center justify-center gap-3 flex-wrap"
                  style={{ filter: 'drop-shadow(0 0 30px rgba(194,129,53,0.6)) drop-shadow(0 0 60px rgba(194,129,53,0.3))' }}
                >
                  <span className="md:whitespace-nowrap">10 minutes</span>{" "}<span className="md:whitespace-nowrap">de vidéos / mois</span>{" "}<span className="md:whitespace-nowrap">via <BadgeWhatsApp size={28} /></span>
                </div>
              </div>

              <ul className="space-y-5 text-left max-w-sm mx-auto mb-10">
                <li className="flex items-start gap-4 text-base sm:text-lg md:text-xl font-light text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span><span className="gold-gradient-text font-semibold">200 € HT</span> / mois</span>
                </li>
                <li className="flex items-start gap-4 text-base sm:text-lg md:text-xl font-light text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>Engagement <span className="gold-gradient-text font-semibold">12 mois</span></span>
                </li>
              </ul>

              <div className="flex flex-col items-center justify-center gap-4">
                <a href="https://taap.it/VyWVAII" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white px-8 py-3 md:py-3.5 min-h-[48px] rounded-full text-[13px] md:text-base font-heading font-bold transition-all duration-300 inline-flex items-center justify-center shadow-[0_0_40px_rgba(194,129,53,0.3)] hover:shadow-[0_0_60px_rgba(194,129,53,0.5)] whitespace-nowrap w-full sm:w-auto">
                  Prendre RDV
                </a>
                <a href="/inscription-mireille" className="bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-3 md:py-3.5 min-h-[48px] rounded-full text-[13px] md:text-base font-heading font-bold transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)] whitespace-nowrap w-full sm:w-auto">
                  <WhatsAppIcon size={18} color="#ffffff" />
                  <span className="hidden sm:inline">Tester Mireille Gratuitement</span>
                  <span className="sm:hidden">Tester gratuitement</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 9 : FAQ */}
      <section className="py-16 lg:py-24 bg-bg relative">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading font-light mb-20 text-center tracking-tight text-white">Questions fréquentes</h2>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <details className="group glass-panel rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
                  <summary className="flex items-center justify-between p-8 cursor-pointer font-heading text-xl list-none text-white">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-primary/50 transition-transform duration-300 group-open:rotate-180 shrink-0 ml-4" />
                  </summary>
                  <div className="p-8 pt-0 text-gray-400 text-sm font-light leading-relaxed border-t border-white/5 mt-2">
                    {faq.a}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 : CTA FINAL */}
      <section className="py-16 lg:py-24 bg-surface-light border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light mb-12 text-white tracking-tight leading-[1.1] text-balance mx-auto">
              Prêt <span className="whitespace-nowrap">à être visible</span> <span className="whitespace-nowrap">sans lever</span> <span className="whitespace-nowrap italic gold-gradient-text">le petit doigt ?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed text-balance">
              Une photo. Un enregistrement vocal. <span className="gold-gradient-text font-semibold">Mireille s'occupe du reste.</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col items-center justify-center gap-4">
              <a href="https://taap.it/VyWVAII" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white px-6 md:px-10 py-3 md:py-3.5 min-h-[48px] rounded-full text-[13px] md:text-base font-heading font-bold transition-all duration-300 inline-flex items-center justify-center shadow-[0_0_40px_rgba(194,129,53,0.3)] hover:shadow-[0_0_60px_rgba(194,129,53,0.5)] whitespace-nowrap">
                Prendre RDV
              </a>
              <a href="/inscription-mireille" className="bg-whatsapp hover:bg-whatsapp-hover text-white px-6 md:px-10 py-3 md:py-3.5 min-h-[48px] rounded-full text-[13px] md:text-base font-heading font-bold transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(37,211,102,0.3)] hover:shadow-[0_0_60px_rgba(37,211,102,0.5)] whitespace-nowrap">
                <WhatsAppIcon size={18} color="#ffffff" />
                <span className="hidden sm:inline">Tester Mireille Gratuitement</span>
                <span className="sm:hidden">Tester gratuitement</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
