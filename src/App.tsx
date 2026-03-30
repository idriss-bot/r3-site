import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Star, ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

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

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const faqs = [
    { q: "Combien de temps dure la collaboration ?", a: <><span className="gold-gradient-text font-semibold">Engagement</span> de 2, 6 ou 12 mois <span className="whitespace-nowrap">selon l'offre choisie.</span></> },
    { q: "Est-ce qu'on peut payer en CPF ou AGEFICE ?", a: <span className="gold-gradient-text font-semibold">Non.</span> },
    { q: "Est-ce que vous publiez le contenu sur YouTube et TikTok ?", a: <>Nous publions actuellement sur TikTok, Instagram, Facebook et LinkedIn. YouTube est en cours de test, dès qu'il sera prêt, il sera intégré à notre offre. Si vous avez souscrit avant, il sera <span className="whitespace-nowrap"><span className="gold-gradient-text font-semibold">ajouté sans surcoût.</span></span></> },
    { q: "Est-ce que c'est adapté pour moi si je suis en Suisse ou en Belgique ?", a: <><span className="gold-gradient-text font-semibold">Oui</span>, tant que vous ne nous <span className="whitespace-nowrap">battez plus au foot.</span></> }
  ];

  return (
    <div className="min-h-screen bg-bg text-white font-body selection:bg-primary selection:text-white relative">
      <div className="bg-noise"></div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <img src="/images/logo-r3.png" alt="R3" className="h-12 w-auto z-50" />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-heading">
            <a href="#etudes-de-cas" className="text-white hover:text-primary transition-colors">Études de cas</a>
            <a href="#comment-ca-marche" className="text-white hover:text-primary transition-colors">Comment ça marche</a>
            <a href="#offres" className="text-white hover:text-primary transition-colors">Nos offres</a>
          </div>

          <div className="flex items-center gap-4 z-50">
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
            <a href="#etudes-de-cas" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-primary text-lg font-heading transition-colors">Études de cas</a>
            <a href="#comment-ca-marche" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-primary text-lg font-heading transition-colors">Comment ça marche</a>
            <a href="#offres" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-primary text-lg font-heading transition-colors">Nos offres</a>
            <a href="https://taap.it/VyWVAII" target="_blank" rel="noopener noreferrer" className="border border-white/20 hover:bg-white hover:text-bg text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300 w-full mt-4 block text-center">
              Prendre rendez-vous
            </a>
          </div>
        )}
      </nav>

      {/* SECTION 1 : HERO */}
      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light mb-10 leading-[1.1] tracking-tight text-balance mx-auto">
                Des vidéos de vous à partir d'une <span className="italic gold-gradient-text">simple photo</span> <span className="whitespace-nowrap">grâce à l'IA.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white mb-16 max-w-2xl mx-auto leading-relaxed font-light text-balance">
                Une photo. Un enregistrement vocal. <span className="gold-gradient-text font-semibold whitespace-nowrap">On s'occupe du reste.</span><br className="hidden md:block"/>
                Vos réseaux sociaux vivent sans vous : <span className="whitespace-nowrap">sans tournage,</span> <span className="whitespace-nowrap">sans stress,</span> <span className="gold-gradient-text font-semibold whitespace-nowrap">sans y penser.</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <a href="https://taap.it/VyWVAII" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white px-6 md:px-12 py-4 md:py-6 min-h-[48px] rounded-full text-[13px] md:text-base font-heading transition-all duration-300 inline-flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(194,129,53,0.3)] hover:shadow-[0_0_60px_rgba(194,129,53,0.5)] whitespace-nowrap">
                Je me dédouble grâce à l'IA
              </a>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.5}>
            <div className="mt-32 max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/KlJki5qhrnk"
                title="R3 — Vidéos IA Immobilier"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 : LOGOS RÉSEAUX */}
      <section className="py-16 border-y border-white/5 bg-surface-light/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm md:text-base text-white mb-12 font-body max-w-3xl mx-auto text-balance leading-relaxed">
            Ils sont chez Orpi, Century 21, IAD, Keller Williams, SAFTI ou effiCity. <span className="gold-gradient-text font-semibold whitespace-nowrap">Ils nous font confiance.</span>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            <img src="/images/logo-orpi.png" alt="Orpi" className="h-10 w-28 object-contain opacity-60 hover:opacity-90 transition-opacity" />
            <img src="/images/logo-iad.png" alt="IAD" className="h-10 w-28 object-contain opacity-60 hover:opacity-90 transition-opacity" />
            <img src="/images/logo-kw.png" alt="Keller Williams" className="h-10 w-28 object-contain opacity-60 hover:opacity-90 transition-opacity" />
            <img src="/images/logo-safti.png" alt="SAFTI" className="h-10 w-28 object-contain opacity-60 hover:opacity-90 transition-opacity" />
            <img src="/images/logo-efficity.png" alt="effiCity" className="h-10 w-28 object-contain opacity-60 hover:opacity-90 transition-opacity" />
          </div>
        </div>
      </section>

      {/* SECTION 3 : SUCCÈS CLIENTS */}
      <section id="etudes-de-cas" className="py-32 lg:py-48 bg-bg relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-heading font-light mb-8 tracking-tight text-balance text-white">Ce que la visibilité change concrètement.</h2>
              <p className="text-lg text-gray-300 font-light text-balance">Ils ont dit oui à <span className="gold-gradient-text font-semibold whitespace-nowrap">une photo.</span> Voilà ce qui s'est passé ensuite.</p>
            </FadeIn>
          </div>
          
          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="glass-panel p-8 md:p-12 rounded-2xl hover:border-primary/30 transition-all duration-500 flex flex-col md:flex-row gap-8 md:gap-16 items-center group">
                <div className="w-full md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
                  <div className="gold-gradient-text text-5xl md:text-6xl font-heading font-light mb-2 group-hover:scale-105 transition-transform origin-center md:origin-left">+ 600k €</div>
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
                  <div className="space-y-4 text-gray-300 font-light text-sm leading-relaxed">
                    <p>Son agence avait gagné 59 exclusivités en 2024 et son CA en transaction était en <span className="gold-gradient-text font-semibold">baisse de 36 %.</span></p>
                    <p>Sur les 12 premiers mois de ses vidéos IA, il a dépassé <span className="gold-gradient-text font-semibold whitespace-nowrap">1 000 000 de vues</span> sur les réseaux sociaux.</p>
                    <p className="text-white font-medium">Résultat : <span className="gold-gradient-text font-semibold whitespace-nowrap">101 exclusivités</span>, +60 offres acceptées et plus de <span className="whitespace-nowrap"><span className="gold-gradient-text font-semibold">600 000 € HT</span> d'honoraires générés.</span></p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="glass-panel p-8 md:p-12 rounded-2xl hover:border-primary/30 transition-all duration-500 flex flex-col md:flex-row gap-8 md:gap-16 items-center group">
                <div className="w-full md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
                  <div className="gold-gradient-text text-5xl md:text-6xl font-heading font-light mb-2 group-hover:scale-105 transition-transform origin-center md:origin-left">270k €</div>
                  <div className="text-xs text-gray-400 uppercase tracking-[0.2em] font-body">de CA sur Facebook</div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 shrink-0">
                      <img src="/images/dorothee.jpg" alt="Dorothée Leprince" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading text-white">Dorothée Leprince</h3>
                      <p className="text-xs uppercase tracking-widest text-primary/80 font-body">Conseillère immo à Nantes</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-300 font-light text-sm leading-relaxed">
                    <p>Avant notre collaboration, Dorothée faisait <span className="gold-gradient-text font-semibold">difficilement 7 ventes</span> par an <span className="whitespace-nowrap">sur LinkedIn et Facebook.</span></p>
                    <p>Dès qu'on a pris en charge sa visibilité avec nos contenus, <span className="whitespace-nowrap">son <span className="gold-gradient-text font-semibold">activité a décollé.</span></span></p>
                    <p className="text-white font-medium">Aujourd'hui, les réseaux sociaux représentent 90 % de son business. Elle fait <span className="gold-gradient-text font-semibold whitespace-nowrap">15 ventes par an</span> tout en profitant de <span className="gold-gradient-text font-semibold whitespace-nowrap">70 jours de vacances.</span></p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="glass-panel p-8 md:p-12 rounded-2xl hover:border-primary/30 transition-all duration-500 flex flex-col md:flex-row gap-8 md:gap-16 items-center group">
                <div className="w-full md:w-1/3 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
                  <div className="gold-gradient-text text-5xl md:text-6xl font-heading font-light mb-2 group-hover:scale-105 transition-transform origin-center md:origin-left">40k €</div>
                  <div className="text-xs text-gray-400 uppercase tracking-[0.2em] font-body">de CA sur LinkedIn</div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 shrink-0">
                      <img src="/images/sabrina.jpg" alt="Sabrina Hamoumou" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading text-white">Sabrina Hamoumou</h3>
                      <p className="text-xs uppercase tracking-widest text-primary/80 font-body">Conseillère immo à Clermont</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-300 font-light text-sm leading-relaxed">
                    <p>Avant de se lancer dans les vidéos IA, nous publiions les <span className="whitespace-nowrap"><span className="gold-gradient-text font-semibold">posts LinkedIn</span> de Sabrina.</span></p>
                    <p>Avec simplement du texte et des images, nous avons réussi à <span className="whitespace-nowrap">lui générer <span className="gold-gradient-text font-semibold">40 000 €.</span></span></p>
                    <p className="text-white font-medium">Aujourd'hui, elle vient de se dupliquer virtuellement et a atteint les <span className="gold-gradient-text font-semibold whitespace-nowrap">82 812 vues</span> sur ses <span className="whitespace-nowrap">30 premiers jours de vidéo.</span></p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5 : COMMENT ÇA MARCHE */}
      <section id="comment-ca-marche" className="py-32 lg:py-48 bg-bg relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-heading font-light mb-6 tracking-tight text-balance">Une photo. Trois étapes. <span className="italic gold-gradient-text">Zéro effort.</span></h2>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-white/10 z-0"></div>
            
            <FadeIn delay={0.1}>
              <div className="text-center relative z-10">
                <div className="w-24 h-24 rounded-full bg-surface border border-white/10 text-gray-300 flex items-center justify-center text-3xl font-heading font-light mx-auto mb-10 transition-all duration-500 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_30px_rgba(194,129,53,0.2)]">1</div>
                <h3 className="text-2xl font-heading mb-6 text-white text-balance">Envoyez une photo et <span className="whitespace-nowrap">enregistrez votre voix.</span></h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed text-balance">C'est tout ce qu'on <span className="whitespace-nowrap">vous demande. <span className="gold-gradient-text font-semibold">Une seule fois.</span></span></p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="text-center relative z-10">
                <div className="w-24 h-24 rounded-full bg-surface border border-white/10 text-gray-300 flex items-center justify-center text-3xl font-heading font-light mx-auto mb-10 transition-all duration-500 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_30px_rgba(194,129,53,0.2)]">2</div>
                <h3 className="text-2xl font-heading mb-6 text-white text-balance">Validez le rendu.</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed text-balance">On vous présente les <span className="whitespace-nowrap">premiers résultats. <span className="gold-gradient-text font-semibold">Vous validez. Terminé.</span></span></p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="text-center relative z-10">
                <div className="w-24 h-24 rounded-full bg-primary border border-primary text-white flex items-center justify-center text-3xl font-heading font-light mx-auto mb-10 shadow-[0_0_30px_rgba(194,129,53,0.4)]">3</div>
                <h3 className="text-2xl font-heading mb-6 text-white text-balance">On produit et on publie. Vous n'y pensez plus.</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed text-balance">
                  <span className="gold-gradient-text font-semibold whitespace-nowrap">3 publications par semaine</span> sur Instagram, Facebook, LinkedIn et TikTok. <span className="text-white font-medium">1 vidéo. 1 carrousel. 1 post texte/image.</span> Production, programmation, diffusion : <span className="gold-gradient-text font-semibold whitespace-nowrap">tout est fait pour vous.</span>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 6 : QUI JE SUIS */}
      <section className="py-32 lg:py-48 bg-surface border-y border-white/5 relative overflow-hidden">
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
                <span className="text-primary/80 font-body tracking-[0.3em] uppercase text-xs mb-8 block">Qui je suis ?</span>
                <h2 className="text-4xl md:text-6xl font-heading font-light mb-12 tracking-tight">Idriss Drira</h2>
                <div className="space-y-6 text-sm md:text-base text-gray-300 font-light leading-relaxed">
                  <p>De 2017 à 2022, j'étais chasseur d'appartements à Paris. Je connais ce <span className="gold-gradient-text font-semibold">métier de l'intérieur</span> : la pression des mandats, les rendez-vous qui ne convertissent pas, <span className="whitespace-nowrap">le temps qui manque toujours.</span></p>
                  <p>Pendant le confinement, je me lance sur LinkedIn. En 3 mois, ma communauté passe de 240 à 7 000 abonnés. Mon profil devient un vrai levier de business. Je comprends une chose : <span className="gold-gradient-text font-semibold whitespace-nowrap">dans l'immobilier, celui qui est visible gagne.</span></p>
                  <p>En 2023, je déménage à Marseille et je décide d'aider mes confrères à réussir là où la plupart échouent : générer du business sur les réseaux sociaux. Pendant 2 ans, j'accompagne plus de 30 agents dans toute la France. Résultat : <span className="gold-gradient-text font-semibold whitespace-nowrap">plus d'un million d'euros de CA générés</span> via LinkedIn et Facebook, simplement avec du <span className="whitespace-nowrap">texte et des images.</span></p>
                  <p>En janvier 2025, je fais pivoter mon activité. J'abandonne le texte au <span className="whitespace-nowrap"><span className="gold-gradient-text font-semibold">profit de la vidéo.</span></span></p>
                  <p>Cela faisait longtemps que je voulais opérer ce changement pour <span className="gold-gradient-text font-semibold">maximiser l'impact</span> sur le business de mes confrères. Mais ce n'était pas possible : les temps de tournage n'étaient pas compatibles <span className="whitespace-nowrap">avec le métier d'agent immobilier.</span></p>
                  <p className="text-xl md:text-2xl text-white font-heading italic py-6 gold-gradient-text font-semibold">L'IA a changé la donne.</p>
                  <p className="text-white font-medium text-balance">Aujourd'hui, je duplique virtuellement mes clients pour leur permettre de gagner des mandats, <span className="whitespace-nowrap">à partir d'<span className="gold-gradient-text font-semibold">une simple photo.</span></span></p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 : TÉMOIGNAGE */}
      <section className="py-32 lg:py-48 bg-bg relative">
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <div className="flex justify-center gap-3 mb-12">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-primary" fill="currentColor" />)}
              </div>
              <blockquote className="text-2xl md:text-4xl font-heading font-light leading-relaxed mb-16 text-white tracking-tight italic text-balance">
                "Nos clients adorent le contenu des vidéos et surtout elles nous offrent une <span className="gold-gradient-text font-semibold">énorme visibilité</span> sur les réseaux sociaux. Je ne m'attendais pas à obtenir un tel <span className="gold-gradient-text font-semibold">retour sur investissement</span>. Le tout sans jamais avoir à <span className="whitespace-nowrap">m'en occuper. Merci Idriss."</span>
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

      {/* SECTION 8 : TARIFS */}
      <section id="offres" className="py-32 lg:py-48 bg-surface-light border-y border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-heading font-light mb-8 tracking-tight text-balance">Nos offres</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light text-balance">
                Une photo. Votre voix. <span className="gold-gradient-text font-semibold">On s'occupe de tout le reste.</span><br/>
                Chaque offre inclut la <span className="gold-gradient-text font-semibold">production complète</span> + la programmation et la <span className="whitespace-nowrap">diffusion sur vos réseaux.</span>
              </p>
            </FadeIn>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
            {/* Pricing 1 */}
            <FadeIn delay={0.1}>
              <div className="bg-bg border border-white/5 rounded-3xl p-12 flex flex-col h-full hover:border-white/10 transition-colors duration-500">
                <h3 className="text-2xl font-heading mb-12 gold-gradient-text">Pack 2 mois</h3>
                <div className="mb-12 pb-12 border-b border-white/5">
                  <div className="text-5xl font-heading font-light mb-2 text-white">1 500 € <span className="text-[10px] font-body text-gray-300 uppercase tracking-[0.2em]">HT</span></div>
                  <div className="text-[10px] text-gray-300 uppercase tracking-[0.2em] whitespace-nowrap">frais de création</div>
                  <div className="text-2xl font-heading font-light mt-8 text-white">+ 200 € <span className="text-[10px] font-body text-gray-300 uppercase tracking-[0.2em] whitespace-nowrap">HT / mois</span></div>
                  <div className="text-[10px] text-gray-300 uppercase tracking-[0.2em] mt-2 whitespace-nowrap">programmation & diffusion</div>
                </div>
                <ul className="space-y-6 flex-grow text-sm font-light text-gray-400">
                  <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-primary/80 shrink-0" /> <span className="whitespace-nowrap"><span className="gold-gradient-text font-semibold">30 publications</span> au total</span></li>
                  <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-primary/80 shrink-0" /> <span>10 vidéos · <span className="whitespace-nowrap">10 carrousels · 10 posts</span></span></li>
                  <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-primary/80 shrink-0" /> <span>3 publications / semaine</span></li>
                  <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-primary/80 shrink-0" /> <span>Instagram, Facebook, LinkedIn, TikTok</span></li>
                </ul>
              </div>
            </FadeIn>
            
            {/* Pricing 2 - Highlighted */}
            <FadeIn delay={0.2}>
              <div className="glass-panel border border-primary/30 rounded-3xl p-14 flex flex-col relative transform lg:-translate-y-8 shadow-[0_0_50px_rgba(194,129,53,0.15)] z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#C28135] to-[#A86F2D] text-white px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] shadow-lg whitespace-nowrap">
                  Le + populaire
                </div>
                <h3 className="text-2xl font-heading mb-12 gold-gradient-text">Pack 12 mois</h3>
                <div className="mb-12 pb-12 border-b border-white/10">
                  <div className="text-5xl font-heading font-light mb-2 text-white">4 500 € <span className="text-[10px] font-body text-gray-300 uppercase tracking-[0.2em]">HT</span></div>
                  <div className="text-[10px] text-gray-300 uppercase tracking-[0.2em] whitespace-nowrap">frais de création</div>
                  <div className="text-2xl font-heading font-light mt-8 text-white">+ 200 € <span className="text-[10px] font-body text-gray-300 uppercase tracking-[0.2em] whitespace-nowrap">HT / mois</span></div>
                  <div className="text-[10px] text-gray-300 uppercase tracking-[0.2em] mt-2 whitespace-nowrap">programmation & diffusion</div>
                </div>
                <ul className="space-y-6 flex-grow text-sm font-light text-gray-300">
                  <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <span className="whitespace-nowrap"><span className="gold-gradient-text font-semibold">150 publications</span> au total</span></li>
                  <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <span>50 vidéos · <span className="whitespace-nowrap">50 carrousels · 50 posts</span></span></li>
                  <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <span>3 publications / semaine</span></li>
                  <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <span>Instagram, Facebook, LinkedIn, TikTok</span></li>
                </ul>
              </div>
            </FadeIn>

            {/* Pricing 3 */}
            <FadeIn delay={0.3}>
              <div className="bg-bg border border-white/5 rounded-3xl p-12 flex flex-col h-full hover:border-white/10 transition-colors duration-500">
                <h3 className="text-2xl font-heading mb-12 gold-gradient-text">Pack 6 mois</h3>
                <div className="mb-12 pb-12 border-b border-white/5">
                  <div className="text-5xl font-heading font-light mb-2 text-white">3 000 € <span className="text-[10px] font-body text-gray-300 uppercase tracking-[0.2em]">HT</span></div>
                  <div className="text-[10px] text-gray-300 uppercase tracking-[0.2em] whitespace-nowrap">frais de création</div>
                  <div className="text-2xl font-heading font-light mt-8 text-white">+ 200 € <span className="text-[10px] font-body text-gray-300 uppercase tracking-[0.2em] whitespace-nowrap">HT / mois</span></div>
                  <div className="text-[10px] text-gray-300 uppercase tracking-[0.2em] mt-2 whitespace-nowrap">programmation & diffusion</div>
                </div>
                <ul className="space-y-6 flex-grow text-sm font-light text-gray-400">
                  <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-primary/80 shrink-0" /> <span className="whitespace-nowrap"><span className="gold-gradient-text font-semibold">90 publications</span> au total</span></li>
                  <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-primary/80 shrink-0" /> <span>30 vidéos · <span className="whitespace-nowrap">30 carrousels · 30 posts</span></span></li>
                  <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-primary/80 shrink-0" /> <span>3 publications / semaine</span></li>
                  <li className="flex items-start gap-4"><CheckCircle2 className="w-5 h-5 text-primary/80 shrink-0" /> <span>Instagram, Facebook, LinkedIn, TikTok</span></li>
                </ul>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4}>
            <div className="mt-20 text-center">
              <a href="https://taap.it/VyWVAII" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white px-6 md:px-12 py-4 md:py-6 min-h-[48px] rounded-full text-[13px] md:text-base font-heading transition-all duration-300 inline-flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(194,129,53,0.3)] hover:shadow-[0_0_60px_rgba(194,129,53,0.5)] whitespace-nowrap">
                Je me dédouble grâce à l'IA
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 9 : FAQ */}
      <section className="py-32 lg:py-48 bg-bg relative">
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
      <section className="py-40 lg:py-56 bg-surface-light border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light mb-12 text-white tracking-tight leading-[1.1] text-balance mx-auto">
              Prêt à être visible<br/><span className="italic gold-gradient-text">sans lever le petit doigt ?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed text-balance">
              Une photo. Un enregistrement vocal. On s'occupe <span className="whitespace-nowrap">du reste, <span className="gold-gradient-text font-semibold">toute l'année.</span></span>
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a href="https://taap.it/VyWVAII" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white px-6 md:px-12 py-4 md:py-6 min-h-[48px] rounded-full text-[13px] md:text-base font-heading transition-all duration-300 inline-flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(194,129,53,0.3)] hover:shadow-[0_0_60px_rgba(194,129,53,0.5)] whitespace-nowrap">
              Je me dédouble grâce à l'IA
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg py-16 border-t border-white/5 text-center text-gray-600 font-light text-[10px] uppercase tracking-[0.2em]">
        <div className="container mx-auto px-6">
          <img src="/images/logo-r3.png" alt="R3" className="h-12 w-auto mx-auto mb-8" />
          <p>© {new Date().getFullYear()} R3. <span className="whitespace-nowrap">Tous droits réservés.</span></p>
          <p className="mt-4"><a href="/mentions-legales/" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a></p>
        </div>
      </footer>
    </div>
  );
}
