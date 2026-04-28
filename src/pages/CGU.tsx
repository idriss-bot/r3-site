import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CGU() {
  const [showTools, setShowTools] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-white font-body selection:bg-primary selection:text-white relative overflow-x-hidden">
      <div className="bg-noise" />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <h1 className="font-body text-5xl md:text-6xl text-white mb-4 leading-tight">
            Conditions Générales{' '}
            <span className="text-primary italic">d&rsquo;Utilisation</span>
          </h1>
          <p className="font-heading text-lg text-gray-400">
            Offre Découverte &mdash; Vidéo gratuite via Mireille
          </p>
          <p className="font-heading text-sm text-gray-500 mt-2 italic">
            Dernière mise à jour : 28 avril 2026
          </p>
        </div>

        {/* ── Sommaire ── */}
        <nav className="border border-gray-800 rounded-2xl p-8 mb-16 bg-black/40">
          <h2 className="font-body text-2xl text-primary mb-6">Sommaire</h2>
          <ol className="font-heading text-base text-gray-300 space-y-2 list-decimal list-inside">
            <li><a href="#article-1"  className="hover:text-primary transition-colors">Objet</a></li>
            <li><a href="#article-2"  className="hover:text-primary transition-colors">Description du Service</a></li>
            <li><a href="#article-3"  className="hover:text-primary transition-colors">Inscription et déroulement</a></li>
            <li><a href="#article-4"  className="hover:text-primary transition-colors">Obligations et garanties de l&rsquo;Utilisateur</a></li>
            <li><a href="#article-5"  className="hover:text-primary transition-colors">Propriété intellectuelle et licences</a></li>
            <li><a href="#article-6"  className="hover:text-primary transition-colors">Technologie d&rsquo;intelligence artificielle et outils tiers</a></li>
            <li><a href="#article-7"  className="hover:text-primary transition-colors">Responsabilité</a></li>
            <li><a href="#article-8"  className="hover:text-primary transition-colors">Suspension et exclusion</a></li>
            <li><a href="#article-9"  className="hover:text-primary transition-colors">Protection des données personnelles</a></li>
            <li><a href="#article-10" className="hover:text-primary transition-colors">Modification des CGU</a></li>
            <li><a href="#article-11" className="hover:text-primary transition-colors">Dispositions diverses</a></li>
            <li><a href="#article-12" className="hover:text-primary transition-colors">Droit applicable et litiges</a></li>
          </ol>
        </nav>

        {/* ── Article 1 ── */}
        <section id="article-1" className="mb-16 scroll-mt-24">
          <h2 className="font-body text-3xl md:text-4xl text-primary mb-6 border-b border-gray-800 pb-3">
            Article 1 &mdash; Objet
          </h2>
          <div className="font-heading text-base text-gray-300 leading-relaxed space-y-4">
            <p>
              Les présentes Conditions Générales d&rsquo;Utilisation (ci-après les &laquo;&nbsp;CGU&nbsp;&raquo;) ont pour objet de définir les modalités et conditions d&rsquo;utilisation de l&rsquo;offre découverte gratuite proposée par R3, société par actions simplifiée unipersonnelle au capital de 500 euros, dont le siège social est situé au 10 rue de Penthièvre &mdash; 75008 Paris, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 919&nbsp;572&nbsp;339 (ci-après dénommée &laquo;&nbsp;R3&nbsp;&raquo; ou la &laquo;&nbsp;Société&nbsp;&raquo;).
            </p>
            <p>
              L&rsquo;offre découverte consiste en la mise à disposition gratuite, à toute personne en faisant la demande (ci-après l&rsquo;&laquo;&nbsp;Utilisateur&nbsp;&raquo;), d&rsquo;une (1) vidéo personnalisée générée par intelligence artificielle, intégrant un avatar virtuel reproduisant l&rsquo;image et la voix de l&rsquo;Utilisateur (ci-après la &laquo;&nbsp;Vidéo Découverte&nbsp;&raquo;).
            </p>
            <p>L&rsquo;offre est accessible via :</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>le formulaire d&rsquo;inscription disponible sur le site r-3.fr&nbsp;; et</li>
              <li>la délivrance de la Vidéo Découverte via WhatsApp, par l&rsquo;intermédiaire de l&rsquo;agent virtuel <em>Mireille</em> (ci-après le &laquo;&nbsp;Service&nbsp;&raquo;).</li>
            </ul>
            <p>
              L&rsquo;utilisation du Service est subordonnée à la consultation, l&rsquo;acceptation et le respect intégral des présentes CGU. Toute inscription au Service vaut acceptation pleine et entière des CGU.
            </p>
            <p>
              Les présentes CGU sont distinctes des Conditions Générales de Vente (CGV) de R3, lesquelles s&rsquo;appliquent uniquement aux Clients ayant souscrit un abonnement payant aux services de R3.
            </p>
          </div>
        </section>

        {/* ── Article 2 ── */}
        <section id="article-2" className="mb-16 scroll-mt-24">
          <h2 className="font-body text-3xl md:text-4xl text-primary mb-6 border-b border-gray-800 pb-3">
            Article 2 &mdash; Description du Service
          </h2>
          <div className="font-heading text-base text-gray-300 leading-relaxed space-y-4">
            <p>
              Le Service permet à l&rsquo;Utilisateur de recevoir, à titre gratuit et sans engagement, une (1) Vidéo Découverte personnalisée générée par intelligence artificielle à partir des éléments fournis par l&rsquo;Utilisateur.
            </p>
            <p>
              La Vidéo Découverte est strictement limitée à une seule vidéo par Utilisateur. Toute demande supplémentaire devra faire l&rsquo;objet d&rsquo;une commande payante régie par les CGV de R3.
            </p>
            <p>
              Le Service est ouvert à tout public, professionnel comme particulier, sans condition de qualité, d&rsquo;âge minimum (sous réserve de la majorité légale) ou de secteur d&rsquo;activité.
            </p>
            <p>
              R3 se réserve le droit de modifier, suspendre ou interrompre l&rsquo;offre découverte à tout moment, sans préavis et sans que sa responsabilité ne puisse être engagée à ce titre.
            </p>
          </div>
        </section>

        {/* ── Article 3 ── */}
        <section id="article-3" className="mb-16 scroll-mt-24">
          <h2 className="font-body text-3xl md:text-4xl text-primary mb-6 border-b border-gray-800 pb-3">
            Article 3 &mdash; Inscription et déroulement
          </h2>
          <div className="font-heading text-base text-gray-300 leading-relaxed space-y-4">
            <p>Pour bénéficier du Service, l&rsquo;Utilisateur doit :</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>compléter le formulaire d&rsquo;inscription disponible sur r-3.fr en y renseignant les informations demandées et en y téléchargeant une (1) photo de lui-même&nbsp;;</li>
              <li>transmettre, via WhatsApp à l&rsquo;agent Mireille, un enregistrement audio (voix) selon les instructions communiquées&nbsp;;</li>
              <li>accepter expressément les présentes CGU.</li>
            </ul>
            <p>
              La Vidéo Découverte sera générée et délivrée à l&rsquo;Utilisateur via WhatsApp, par l&rsquo;intermédiaire de Mireille, dans un délai indicatif communiqué lors de l&rsquo;inscription. Tout délai communiqué l&rsquo;est à titre purement indicatif et aucun retard ne saurait engager la responsabilité de R3.
            </p>
            <p>
              R3 se réserve le droit, à sa seule et entière discrétion et sans avoir à motiver sa décision, de refuser la création ou la délivrance d&rsquo;une Vidéo Découverte, notamment dans les cas suivants&nbsp;: photo ou audio de qualité insuffisante, contenu inapproprié, suspicion de fraude, suspicion d&rsquo;usurpation d&rsquo;identité, utilisation par un concurrent, ou tout autre motif que R3 jugera pertinent.
            </p>
          </div>
        </section>

        {/* ── Article 4 ── */}
        <section id="article-4" className="mb-16 scroll-mt-24">
          <h2 className="font-body text-3xl md:text-4xl text-primary mb-6 border-b border-gray-800 pb-3">
            Article 4 &mdash; Obligations et garanties de l&rsquo;Utilisateur
          </h2>
          <div className="font-heading text-base text-gray-300 leading-relaxed space-y-4">

            <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">
              4.1 Garantie sur les contenus transmis
            </h3>
            <p>L&rsquo;Utilisateur s&rsquo;engage à ne transmettre à R3 que des photos, vidéos et audios :</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>le représentant lui-même et lui seul, à l&rsquo;exclusion expresse de toute autre personne&nbsp;;</li>
              <li>dont il est l&rsquo;auteur ou pour lesquels il dispose de l&rsquo;intégralité des droits, autorisations et consentements nécessaires.</li>
            </ul>
            <p>
              Par l&rsquo;envoi de ces éléments à R3, l&rsquo;Utilisateur <strong>garantit</strong> expressément qu&rsquo;il dispose de l&rsquo;intégralité des droits, autorisations et consentements nécessaires, notamment au titre du droit à l&rsquo;image, du droit à la vie privée, du droit d&rsquo;auteur, du droit voisin et de toute réglementation applicable, pour permettre l&rsquo;utilisation des personnes représentées aux fins de création de la Vidéo Découverte.
            </p>
            <p>
              L&rsquo;Utilisateur <strong>s&rsquo;engage à indemniser et à relever R3 indemne</strong> de toute responsabilité, réclamation, condamnation, frais, dommages ou dépenses (y compris frais de justice et honoraires d&rsquo;avocat) résultant directement ou indirectement de la violation de la présente garantie.
            </p>
            <p>
              Il est expressément rappelé que <strong>l&rsquo;envoi de la photo, de la vidéo ou de l&rsquo;audio d&rsquo;une personne tierce sans son consentement est strictement interdit</strong> et est susceptible d&rsquo;engager la responsabilité civile et pénale de l&rsquo;Utilisateur, notamment au titre des articles 226-1 et suivants du Code pénal (atteinte à la vie privée), de l&rsquo;article 9 du Code civil (droit à l&rsquo;image) et des articles L.&nbsp;335-2 et suivants du Code de la propriété intellectuelle. R3 se réserve expressément le droit d&rsquo;engager toutes poursuites utiles à l&rsquo;encontre de tout Utilisateur contrevenant à la présente clause.
            </p>

            <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">
              4.2 Comportement de l&rsquo;Utilisateur
            </h3>
            <p>L&rsquo;Utilisateur s&rsquo;engage à utiliser le Service de manière loyale et conforme à sa destination. Il s&rsquo;interdit notamment :</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>de fournir des informations fausses, trompeuses ou usurpées&nbsp;;</li>
              <li>de tenter de contourner la limite d&rsquo;une (1) Vidéo Découverte par personne (notamment via plusieurs inscriptions, plusieurs numéros de téléphone ou plusieurs adresses e-mail)&nbsp;;</li>
              <li>d&rsquo;utiliser le Service à des fins illégales, frauduleuses, diffamatoires, injurieuses, racistes, sexuelles, violentes, haineuses ou contraires aux bonnes m&oelig;urs&nbsp;;</li>
              <li>de tenter de perturber, de pirater ou de désorganiser le Service, ses infrastructures techniques ou l&rsquo;agent Mireille&nbsp;;</li>
              <li>d&rsquo;utiliser le Service pour le compte d&rsquo;un concurrent de R3 à des fins de veille, de rétro-ingénierie ou de captation de savoir-faire.</li>
            </ul>

          </div>
        </section>

        {/* ── Article 5 ── */}
        <section id="article-5" className="mb-16 scroll-mt-24">
          <h2 className="font-body text-3xl md:text-4xl text-primary mb-6 border-b border-gray-800 pb-3">
            Article 5 &mdash; Propriété intellectuelle et licences
          </h2>
          <div className="font-heading text-base text-gray-300 leading-relaxed space-y-4">

            <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">
              5.1 Sur les contenus transmis par l&rsquo;Utilisateur
            </h3>
            <p>
              En adressant les photos, vidéos et audios à R3 (ci-après les &laquo;&nbsp;Contenus Remis&nbsp;&raquo;), l&rsquo;Utilisateur concède à R3 une licence gratuite, non exclusive et mondiale d&rsquo;exploitation des Contenus Remis, dans les conditions visées ci-dessous.
            </p>
            <p>La licence porte sur les droits suivants :</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>le droit d&rsquo;utilisation, de consultation et d&rsquo;exploitation des Contenus Remis&nbsp;;</li>
              <li>le droit de reproduction, de fixation, de numérisation et d&rsquo;édition des Contenus Remis en tout ou partie, sans limitation de nombre, par tous moyens et sur tous supports connus ou inconnus à ce jour&nbsp;;</li>
              <li>le droit d&rsquo;adaptation, de traduction, d&rsquo;arrangement, de retouche, d&rsquo;évolution, de modification des Contenus Remis, en tout ou partie, d&rsquo;assemblage et/ou d&rsquo;intégration dans toute prestation ou création intellectuelle, sous toutes formes et par tous moyens&nbsp;;</li>
              <li>le droit de représentation, à titre privé ou public, de distribution, d&rsquo;exploitation, de diffusion auprès de tout public et par tout moyen de télécommunication connu ou inconnu à ce jour&nbsp;;</li>
              <li>le droit d&rsquo;autoriser des prestataires tiers (notamment des fournisseurs de services d&rsquo;IA et de génération d&rsquo;avatars) à traiter les Contenus Remis pour le compte de R3.</li>
            </ul>
            <p>
              La licence est consentie pour la durée nécessaire à la réalisation et à la délivrance de la Vidéo Découverte, ainsi que, le cas échéant, pour les usages promotionnels visés à l&rsquo;article 5.3 ci-dessous.
            </p>

            <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">
              5.2 Sur la Vidéo Découverte
            </h3>
            <p>
              La Vidéo Découverte, ainsi que tous les éléments qui la composent (avatar virtuel, voix synthétique, textes, musiques, graphismes, etc.), ainsi que tous les droits de propriété intellectuelle qui y sont associés, sont et demeurent la propriété exclusive de R3.
            </p>
            <p>
              Sous réserve du respect des présentes CGU, R3 consent à l&rsquo;Utilisateur une licence personnelle, gratuite, non exclusive, non transférable et non sous-licenciable pour utiliser la Vidéo Découverte sur ses propres réseaux sociaux et supports de communication, à des fins non commerciales ou de promotion de son activité personnelle.
            </p>
            <p>
              Toute exploitation non autorisée de la Vidéo Découverte sera considérée comme constitutive d&rsquo;une contrefaçon et poursuivie conformément aux dispositions des articles L.&nbsp;335-2 et suivants et L.&nbsp;716-4 du Code de la propriété intellectuelle.
            </p>

            <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">
              5.3 Utilisation promotionnelle par R3
            </h3>
            <p>
              L&rsquo;Utilisateur <strong>autorise expressément R3</strong>, à titre gratuit, non exclusif et pour le monde entier, à utiliser, reproduire, diffuser et adapter la Vidéo Découverte (en ce inclus son image et sa voix telles que reproduites par l&rsquo;avatar virtuel) ainsi que son nom et/ou son prénom, à des fins de promotion, de communication, de démonstration et de témoignage commercial du Service et plus largement des services proposés par R3, sur tous supports (sites internet, réseaux sociaux, supports publicitaires, démonstrations commerciales, etc.) et pour une durée de cinq (5) ans à compter de la délivrance de la Vidéo Découverte.
            </p>
            <p>
              L&rsquo;Utilisateur peut à tout moment retirer cette autorisation pour l&rsquo;avenir, par simple courriel adressé à{' '}
              <a href="mailto:idriss@r-3.fr" className="text-primary hover:underline">idriss@r-3.fr</a>.
              {' '}Le retrait n&rsquo;affectera pas les exploitations antérieures de bonne foi.
            </p>

          </div>
        </section>

        {/* ── Article 6 ── */}
        <section id="article-6" className="mb-16 scroll-mt-24">
          <h2 className="font-body text-3xl md:text-4xl text-primary mb-6 border-b border-gray-800 pb-3">
            Article 6 &mdash; Technologie d&rsquo;intelligence artificielle et outils tiers
          </h2>
          <div className="font-heading text-base text-gray-300 leading-relaxed space-y-4">

            <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">
              6.1 Limites techniques de l&rsquo;IA
            </h3>
            <p>L&rsquo;Utilisateur est expressément informé et accepte sans réserve :</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>que la création d&rsquo;avatars et de vidéos personnalisées par IA dépend d&rsquo;une technologie qui reste perfectible, sujette à diverses limitations techniques et qui évolue de jour en jour&nbsp;;</li>
              <li>que si l&rsquo;IA permet de créer des avatars virtuels, ceux-ci peuvent ne pas être fidèles à 100&nbsp;% aux personnes qu&rsquo;ils représentent&nbsp;;</li>
              <li>que les avatars sont créés par les outils d&rsquo;IA et utilisés par les mêmes outils pour créer la Vidéo Découverte, si bien que R3 n&rsquo;est pas en mesure d&rsquo;opérer des retouches sur les avatars ou la Vidéo Découverte&nbsp;;</li>
              <li>que le Service n&rsquo;inclut aucun service de retouche photo ou vidéo, ni aucune correction sur demande.</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">
              6.2 Outils tiers utilisés dans le cadre du Service
            </h3>
            <p>
              Pour délivrer le Service, R3 est susceptible de recourir à un ou plusieurs outils, services et technologies d&rsquo;intelligence artificielle édités par des tiers (ci-après les &laquo;&nbsp;Outils Tiers&nbsp;&raquo;), notamment pour la génération d&rsquo;images, de vidéos, de voix synthétiques, d&rsquo;avatars virtuels et pour le traitement et l&rsquo;amélioration des Contenus Remis.
            </p>
            <p>
              La liste des Outils Tiers susceptibles d&rsquo;être utilisés par R3, ainsi que les liens vers leurs conditions générales d&rsquo;utilisation et/ou licences respectives, est consultable ci-dessous (liste susceptible d&rsquo;évoluer).
            </p>

            <button
              onClick={() => setShowTools(!showTools)}
              className="flex items-center gap-2 px-6 py-3 border border-primary/40 rounded-full text-primary hover:bg-primary/10 transition-colors my-6 font-heading"
            >
              {showTools ? '▲ Réduire la liste' : '▼ Voir la liste complète (130+ outils)'}
            </button>

            {showTools && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 my-6 list-disc list-inside font-heading text-sm text-gray-400">
                <li><a href="https://vectorizer.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Vectorizer.AI</a></li>
                <li><a href="https://magnific.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Magnific AI</a></li>
                <li><a href="https://github.com/Wan-Video/Wan2.1/blob/main/LICENSE.txt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Wan (Alibaba, open source)</a></li>
                <li><a href="https://avatarify.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Avatarify</a></li>
                <li><a href="https://huggingface.co/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Hugging Face Inference API</a></li>
                <li><a href="https://civitai.com/content/tos" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Civitai</a></li>
                <li><a href="https://www.lightricks.com/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Lightricks LTX Video</a></li>
                <li><a href="https://playground.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Playground AI</a></li>
                <li><a href="https://getimg.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">getimg.ai</a></li>
                <li><a href="https://runwayml.com/terms-of-use/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Runway (Gen-4 / Gen-4.5)</a></li>
                <li><a href="https://www.adobe.com/legal/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Adobe Firefly</a></li>
                <li><a href="https://www.vidwud.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Vidwud</a></li>
                <li><a href="https://pollinations.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Pollinations.AI</a></li>
                <li><a href="https://vectorize.io/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Vectorize.io</a></li>
                <li><a href="https://www.topazlabs.com/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Topaz Labs</a></li>
                <li><a href="https://pixverse.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">PixVerse Face Swap</a></li>
                <li><a href="https://openai.com/policies/terms-of-use/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Sora / Sora 2 (OpenAI)</a></li>
                <li><a href="https://domoai.app/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Domo AI</a></li>
                <li><a href="https://github.com/comfyanonymous/ComfyUI/blob/master/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ComfyUI</a></li>
                <li><a href="https://about.ideogram.ai/legal/tos" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Ideogram</a></li>
                <li><a href="https://openai.com/policies/terms-of-use/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DALL·E 3 / GPT Image (ChatGPT Images)</a></li>
                <li><a href="https://www.miocreate.com/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">MioCreate</a></li>
                <li><a href="https://www.veed.io/legal/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Veed.io</a></li>
                <li><a href="https://www.facemagic.ai/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">FaceMagic</a></li>
                <li><a href="https://www.opus.pro/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Opus Clip</a></li>
                <li><a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Google Veo 3 / Veo 3.1</a></li>
                <li><a href="https://faceswapper.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">FaceSwapper.ai</a></li>
                <li><a href="https://www.descript.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Descript</a></li>
                <li><a href="https://www.tavus.io/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Tavus</a></li>
                <li><a href="https://www.gettyimages.com/eula" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Getty Images Generative AI</a></li>
                <li><a href="https://www.wombo.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Dream by WOMBO</a></li>
                <li><a href="https://www.swapped.io/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Swapped.io</a></li>
                <li><a href="https://leonardo.ai/terms-of-service/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Leonardo.AI</a></li>
                <li><a href="https://pixlr.com/terms/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Pixlr AI</a></li>
                <li><a href="https://haiper.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Haiper AI</a></li>
                <li><a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Google Imagen / Gemini Image (Nano Banana)</a></li>
                <li><a href="https://www.synthesia.io/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Synthesia</a></li>
                <li><a href="https://snap.com/en-US/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Snap Camera / Snapchat Lenses</a></li>
                <li><a href="https://www.adobe.com/legal/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Adobe Firefly Video / Premiere Generative Extend</a></li>
                <li><a href="https://vivideo.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Vivideo</a></li>
                <li><a href="https://tensor.art/template/954258687793556247" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Tensor.Art</a></li>
                <li><a href="https://github.com/deepinsight/insightface/blob/master/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">InsightFace / inswapper</a></li>
                <li><a href="https://www.capcut.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">CapCut AI</a></li>
                <li><a href="https://www.steve.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Steve.ai</a></li>
                <li><a href="https://higgsfield.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Higgsfield AI</a></li>
                <li><a href="https://remaker.ai/terms-of-service/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Remaker AI</a></li>
                <li><a href="https://higgsfield.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Higgsfield Face Swap</a></li>
                <li><a href="https://looka.com/terms/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Looka</a></li>
                <li><a href="https://www.krea.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Krea AI</a></li>
                <li><a href="https://stability.ai/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Stable Diffusion / Stability AI</a></li>
                <li><a href="https://docs.midjourney.com/hc/en-us/articles/32083055291277-Terms-of-Service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Midjourney</a></li>
                <li><a href="https://invideo.io/terms/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">InVideo AI</a></li>
                <li><a href="https://elevenlabs.io/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ElevenLabs</a></li>
                <li><a href="https://www.mage.space/tos" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Mage.space</a></li>
                <li><a href="https://fal.ai/legal/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">fal.ai</a></li>
                <li><a href="https://github.com/deepfakes/faceswap/blob/master/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Faceswap (faceswap.dev)</a></li>
                <li><a href="https://akool.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Akool</a></li>
                <li><a href="https://www.figma.com/legal/tos/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Figma AI</a></li>
                <li><a href="https://pixverse.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">PixVerse</a></li>
                <li><a href="https://github.com/upscayl/upscayl/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Upscayl</a></li>
                <li><a href="https://www.photoroom.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Photoroom</a></li>
                <li><a href="https://www.colossyan.com/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Colossyan</a></li>
                <li><a href="https://www.flexclip.com/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">FlexClip AI</a></li>
                <li><a href="https://vidyo.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Vidyo.ai</a></li>
                <li><a href="https://www.pica-ai.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Pica AI</a></li>
                <li><a href="https://www.freepik.com/legal/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Freepik AI</a></li>
                <li><a href="https://github.com/s0md3v/roop/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Roop</a></li>
                <li><a href="https://magichour.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Magic Hour</a></li>
                <li><a href="https://replicate.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Replicate</a></li>
                <li><a href="https://www.vidu.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Vidu</a></li>
                <li><a href="https://www.microsoft.com/en-us/servicesagreement/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Microsoft Designer / Copilot Image Creator</a></li>
                <li><a href="https://picsart.com/terms-of-use/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Picsart AI</a></li>
                <li><a href="https://github.com/neuralchen/SimSwap/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">SimSwap</a></li>
                <li><a href="https://www.microsoft.com/en-us/servicesagreement/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Microsoft Clipchamp AI</a></li>
                <li><a href="https://swapface.org/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Swapface</a></li>
                <li><a href="https://deepswapper.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DeepSwapper</a></li>
                <li><a href="https://www.moonvalley.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Moonvalley (Marey)</a></li>
                <li><a href="https://www.vidnoz.com/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Vidnoz Face Swap</a></li>
                <li><a href="https://www.aistudios.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DeepBrain AI / AI Studios</a></li>
                <li><a href="https://www.krea.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Krea Video</a></li>
                <li><a href="https://www.fotor.com/terms/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Fotor AI</a></li>
                <li><a href="https://lumalabs.ai/legal/tos" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Luma Dream Machine / Ray3</a></li>
                <li><a href="https://lumen5.com/terms/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Lumen5</a></li>
                <li><a href="https://www.faceplay.cc/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">FacePlay</a></li>
                <li><a href="https://www.vozo.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Vozo / RecCloud</a></li>
                <li><a href="https://www.banuba.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Banuba SDK</a></li>
                <li><a href="https://pictory.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Pictory</a></li>
                <li><a href="https://www.captions.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Captions</a></li>
                <li><a href="https://www.invoke.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">InvokeAI</a></li>
                <li><a href="https://www.hedra.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Hedra (avatars + voix)</a></li>
                <li><a href="https://www.arcads.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Arcads.ai</a></li>
                <li><a href="https://elai.io/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Elai.io</a></li>
                <li><a href="https://www.together.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Together AI</a></li>
                <li><a href="https://blackforestlabs.ai/terms-of-service/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">FLUX (Black Forest Labs)</a></li>
                <li><a href="https://github.com/lllyasviel/Fooocus/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Fooocus</a></li>
                <li><a href="https://bestphoto.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">BestPhotoAI</a></li>
                <li><a href="https://www.genmo.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Genmo (Mochi)</a></li>
                <li><a href="https://www.basedlabs.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">BasedLabs AI Face Swap</a></li>
                <li><a href="https://www.canva.com/policies/terms-of-use/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Canva (Magic Studio / Magic Media)</a></li>
                <li><a href="https://reface.ai/legal-info/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Reface</a></li>
                <li><a href="https://www.runpod.io/legal/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">RunPod</a></li>
                <li><a href="https://deepfakesweb.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Deepfakes Web</a></li>
                <li><a href="https://www.craiyon.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Craiyon</a></li>
                <li><a href="https://www.shutterstock.com/license" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Shutterstock AI</a></li>
                <li><a href="https://fliki.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Fliki</a></li>
                <li><a href="https://x.ai/legal/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Grok Imagine / Aurora (xAI)</a></li>
                <li><a href="https://www.submagic.co/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Submagic</a></li>
                <li><a href="https://www.d-id.com/terms-of-use/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">D-ID</a></li>
                <li><a href="https://www.segmind.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Segmind</a></li>
                <li><a href="https://pika.art/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Pika</a></li>
                <li><a href="https://www.adcreative.ai/terms-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">AdCreative.ai</a></li>
                <li><a href="https://www.volcengine.com/docs/82379/1099455" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Seedance (ByteDance)</a></li>
                <li><a href="https://www.recraft.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Recraft</a></li>
                <li><a href="https://viggle.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Viggle AI</a></li>
                <li><a href="https://lexica.art/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Lexica</a></li>
                <li><a href="https://vivago.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Vivago</a></li>
                <li><a href="https://zao.momocdn.com/zao-h5/term.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Zao</a></li>
                <li><a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Google Vids</a></li>
                <li><a href="https://kaiber.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Kaiber</a></li>
                <li><a href="https://modal.com/legal/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Modal</a></li>
                <li><a href="https://magichour.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Magic Hour (Cling Cling)</a></li>
                <li><a href="https://creator.nightcafe.studio/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">NightCafe</a></li>
                <li><a href="https://github.com/iperov/DeepFaceLab/blob/master/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DeepFaceLab</a></li>
                <li><a href="https://app.klingai.com/global/user-agreement-en" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Kling AI (Kuaishou)</a></li>
                <li><a href="https://aiease.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Aiease (PicWish)</a></li>
                <li><a href="https://logome.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Logome AI</a></li>
                <li><a href="https://icons8.com/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Icons8 Face Swapper</a></li>
                <li><a href="https://www.heygen.com/policy?content=terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">HeyGen</a></li>
                <li><a href="https://hailuoai.video/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Hailuo AI (MiniMax)</a></li>
                <li><a href="https://deepai.org/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DeepAI</a></li>
                <li><a href="https://www.artbreeder.com/terms.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Artbreeder</a></li>
                <li><a href="https://github.com/AUTOMATIC1111/stable-diffusion-webui/blob/master/LICENSE.txt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">AUTOMATIC1111 (Stable Diffusion WebUI)</a></li>
                <li><a href="https://github.com/Hillobar/Rope/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Rope</a></li>
                <li><a href="https://github.com/hacksider/Deep-Live-Cam/blob/main/LICENSE.md" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Deep-Live-Cam</a></li>
                <li><a href="https://github.com/iperov/DeepFaceLive/blob/master/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DeepFaceLive</a></li>
                <li><a href="https://github.com/facefusion/facefusion/blob/master/LICENSE.md" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">FaceFusion</a></li>
                <li><a href="https://www.hedra.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Hedra</a></li>
                <li><a href="https://hourone.ai/terms-of-service/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Hour One</a></li>
                <li><a href="https://klap.app/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Klap</a></li>
                <li><a href="https://www.argil.ai/legal-mentions" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Argil</a></li>
                <li><a href="https://www.deepswap.ai/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DeepSwap</a></li>
              </ul>
            )}

            <p>
              En acceptant les présentes CGU, l&rsquo;Utilisateur <strong>reconnaît expressément avoir pris connaissance des conditions générales d&rsquo;utilisation et/ou licences des Outils Tiers listés ci-dessus</strong> et <strong>autorise R3 à utiliser ces Outils Tiers</strong> dans le cadre de la création des avatars virtuels, de la voix synthétique et de la Vidéo Découverte, ce qui peut impliquer la transmission, la reproduction et le traitement des Contenus Remis par lesdits Outils Tiers, conformément aux finalités du Service.
            </p>
            <p>
              R3 sélectionne ses Outils Tiers avec soin mais ne saurait être tenue responsable de leur fonctionnement, de leurs éventuels dysfonctionnements, de leurs modifications, de l&rsquo;évolution de leurs conditions d&rsquo;utilisation, de leur indisponibilité, ni de tout traitement effectué par lesdits Outils Tiers en dehors du strict périmètre confié par R3.
            </p>
            <p>
              La liste ci-dessus est susceptible d&rsquo;évoluer en fonction des technologies disponibles. La liste à jour pourra être obtenue à tout moment, sur simple demande adressée par courriel à{' '}
              <a href="mailto:idriss@r-3.fr" className="text-primary hover:underline">idriss@r-3.fr</a>.
            </p>

          </div>
        </section>

        {/* ── Article 7 ── */}
        <section id="article-7" className="mb-16 scroll-mt-24">
          <h2 className="font-body text-3xl md:text-4xl text-primary mb-6 border-b border-gray-800 pb-3">
            Article 7 &mdash; Responsabilité
          </h2>
          <div className="font-heading text-base text-gray-300 leading-relaxed space-y-4">
            <p>Le Service étant fourni à titre entièrement gratuit, dans le cadre d&rsquo;une offre découverte, il est expressément stipulé que :</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>le Service est fourni <em>&laquo;&nbsp;en l&rsquo;état&nbsp;&raquo;</em>, sans garantie d&rsquo;aucune sorte, expresse ou implicite, et notamment sans garantie de qualité, de ressemblance, de continuité, de disponibilité ou d&rsquo;adéquation à un usage particulier&nbsp;;</li>
              <li>R3 ne saurait être tenue responsable de l&rsquo;indisponibilité du Service, des retards de délivrance, de la non-conformité de l&rsquo;avatar à l&rsquo;image de l&rsquo;Utilisateur, ou de tout autre dysfonctionnement du Service&nbsp;;</li>
              <li>R3 ne saurait être tenue responsable des dysfonctionnements imputables aux services tiers utilisés (notamment WhatsApp, Outils Tiers, hébergeurs, opérateurs internet)&nbsp;;</li>
            </ul>
            <p>
              dans toute la mesure permise par la loi applicable, <strong>R3 ne sera responsable envers l&rsquo;Utilisateur d&rsquo;aucun dommage indirect, consécutif ou accessoire, ni d&rsquo;aucune perte de profits, de chiffre d&rsquo;affaires, de clientèle ou d&rsquo;opportunité commerciale</strong>, résultant de l&rsquo;utilisation ou de l&rsquo;impossibilité d&rsquo;utiliser le Service ou la Vidéo Découverte.
            </p>
            <p>
              L&rsquo;Utilisateur est seul responsable de la protection de ses propres équipements informatiques, de ses comptes WhatsApp et de la sécurisation de ses accès.
            </p>
          </div>
        </section>

        {/* ── Article 8 ── */}
        <section id="article-8" className="mb-16 scroll-mt-24">
          <h2 className="font-body text-3xl md:text-4xl text-primary mb-6 border-b border-gray-800 pb-3">
            Article 8 &mdash; Suspension et exclusion
          </h2>
          <div className="font-heading text-base text-gray-300 leading-relaxed space-y-4">
            <p>R3 se réserve le droit, à tout moment et sans préavis, de suspendre ou d&rsquo;exclure tout Utilisateur qui contreviendrait aux présentes CGU, et notamment qui :</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>transmettrait la photo, la voix ou tout autre contenu d&rsquo;un tiers sans son consentement&nbsp;;</li>
              <li>tenterait de contourner la limite d&rsquo;une (1) Vidéo Découverte par personne&nbsp;;</li>
              <li>utiliserait le Service à des fins illégales, frauduleuses ou contraires aux bonnes m&oelig;urs&nbsp;;</li>
              <li>perturberait le fonctionnement du Service ou de l&rsquo;agent Mireille.</li>
            </ul>
            <p>
              Cette suspension ou exclusion ne donnera lieu à aucune indemnisation, le Service étant fourni à titre gratuit. Elle est sans préjudice de toutes autres actions, notamment judiciaires, que R3 pourra engager à l&rsquo;encontre de l&rsquo;Utilisateur fautif.
            </p>
          </div>
        </section>

        {/* ── Article 9 ── */}
        <section id="article-9" className="mb-16 scroll-mt-24">
          <h2 className="font-body text-3xl md:text-4xl text-primary mb-6 border-b border-gray-800 pb-3">
            Article 9 &mdash; Protection des données personnelles
          </h2>
          <div className="font-heading text-base text-gray-300 leading-relaxed space-y-4">
            <p>
              Dans le cadre de l&rsquo;utilisation du Service, R3 traite des données à caractère personnel concernant l&rsquo;Utilisateur, conformément à la loi n°78-17 du 6 janvier 1978 dite loi Informatique et Libertés et au Règlement général sur la protection des données 2016/679 du 27 avril 2016 (ci-après le &laquo;&nbsp;RGPD&nbsp;&raquo;).
            </p>

            <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">
              9.1 Responsable de traitement
            </h3>
            <p>
              Le responsable de traitement est R3, dont les coordonnées figurent à l&rsquo;article 1 des présentes.
            </p>

            <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">
              9.2 Données collectées et finalités
            </h3>
            <p>R3 collecte et traite les données suivantes :</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>données d&rsquo;identification (nom, prénom, e-mail, numéro de téléphone WhatsApp)&nbsp;: pour la gestion de l&rsquo;inscription et la délivrance de la Vidéo Découverte&nbsp;;</li>
              <li>photo, vidéo et audio transmis&nbsp;: pour la création de l&rsquo;avatar virtuel et de la Vidéo Découverte, ainsi que, le cas échéant, pour les usages promotionnels visés à l&rsquo;article 5.3&nbsp;;</li>
              <li>données de contact et historique des échanges&nbsp;: pour la gestion de la relation, la prospection commerciale et l&rsquo;éventuelle conversion vers une offre payante.</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">
              9.3 Bases légales
            </h3>
            <p>
              Les traitements reposent sur l&rsquo;exécution des présentes CGU (article 6.1.b RGPD), le consentement de l&rsquo;Utilisateur (article 6.1.a RGPD, notamment pour les usages promotionnels et la prospection) et l&rsquo;intérêt légitime de R3 (article 6.1.f RGPD, notamment pour la sécurité et la prévention de la fraude).
            </p>

            <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">
              9.4 Durées de conservation
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Les photos, vidéos et audios bruts transmis par l&rsquo;Utilisateur, ainsi que les avatars virtuels associés, sont conservés pendant une durée maximale de trente (30) jours à compter de la délivrance de la Vidéo Découverte, puis supprimés&nbsp;;</li>
              <li>la Vidéo Découverte elle-même peut être conservée par R3 pendant la durée nécessaire aux usages promotionnels visés à l&rsquo;article 5.3, soit cinq (5) ans maximum&nbsp;;</li>
              <li>les données de contact à des fins de prospection commerciale sont conservées pendant trois (3) ans à compter du dernier contact avec l&rsquo;Utilisateur&nbsp;;</li>
              <li>les données comptables éventuelles sont conservées dix (10) ans conformément aux obligations légales et fiscales applicables.</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">
              9.5 Destinataires
            </h3>
            <p>
              Les données sont traitées par R3 et son personnel et peuvent être communiquées à des prestataires tiers agissant en qualité de sous-traitants au sens du RGPD, notamment les éditeurs des Outils Tiers visés à l&rsquo;article 6.2 des présentes, ainsi que les hébergeurs et services de messagerie. Ces sous-traitants sont soumis à des obligations contractuelles de sécurité et de confidentialité au moins équivalentes à celles incombant à R3.
            </p>

            <h3 className="font-heading text-xl font-semibold text-white mt-8 mb-4">
              9.6 Droits de l&rsquo;Utilisateur
            </h3>
            <p>
              L&rsquo;Utilisateur dispose, à tout moment, d&rsquo;un droit d&rsquo;accès, de rectification, d&rsquo;effacement, de limitation, de portabilité, d&rsquo;opposition au traitement de ses données personnelles, ainsi que du droit de retirer son consentement à tout moment et de définir des directives relatives au sort de ses données après son décès.
            </p>
            <p>
              Ces droits peuvent être exercés par courriel à l&rsquo;adresse&nbsp;:{' '}
              <a href="mailto:idriss@r-3.fr" className="text-primary hover:underline">idriss@r-3.fr</a>.
            </p>
            <p>
              En cas de réclamation, l&rsquo;Utilisateur peut saisir la CNIL, autorité compétente en matière de protection des données personnelles, dont les coordonnées sont&nbsp;: 3 Place de Fontenoy &mdash; 75007 Paris (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>).
            </p>

          </div>
        </section>

        {/* ── Article 10 ── */}
        <section id="article-10" className="mb-16 scroll-mt-24">
          <h2 className="font-body text-3xl md:text-4xl text-primary mb-6 border-b border-gray-800 pb-3">
            Article 10 &mdash; Modification des CGU
          </h2>
          <div className="font-heading text-base text-gray-300 leading-relaxed space-y-4">
            <p>
              R3 se réserve le droit de modifier à tout moment les présentes CGU. Les CGU applicables sont celles en vigueur à la date d&rsquo;inscription de l&rsquo;Utilisateur au Service.
            </p>
            <p>
              Les CGU à jour sont disponibles en permanence sur le site r-3.fr.
            </p>
          </div>
        </section>

        {/* ── Article 11 ── */}
        <section id="article-11" className="mb-16 scroll-mt-24">
          <h2 className="font-body text-3xl md:text-4xl text-primary mb-6 border-b border-gray-800 pb-3">
            Article 11 &mdash; Dispositions diverses
          </h2>
          <div className="font-heading text-base text-gray-300 leading-relaxed space-y-4">
            <p>
              Si l&rsquo;une des stipulations des présentes CGU venait à être déclarée nulle ou inapplicable, les autres stipulations conserveraient leur plein et entier effet.
            </p>
            <p>
              Le fait que R3 ne se prévale pas, à un moment donné, de l&rsquo;une quelconque des stipulations des présentes CGU ne pourra être interprété comme valant renonciation à s&rsquo;en prévaloir ultérieurement.
            </p>
          </div>
        </section>

        {/* ── Article 12 ── */}
        <section id="article-12" className="mb-16 scroll-mt-24">
          <h2 className="font-body text-3xl md:text-4xl text-primary mb-6 border-b border-gray-800 pb-3">
            Article 12 &mdash; Droit applicable et litiges
          </h2>
          <div className="font-heading text-base text-gray-300 leading-relaxed space-y-4">
            <p>
              Les présentes CGU sont soumises au droit français.
            </p>
            <p>
              En cas de litige, les parties s&rsquo;engagent à rechercher une solution amiable avant tout recours contentieux. À défaut d&rsquo;accord amiable dans un délai de trente (30) jours à compter de la première notification du litige, et sous réserve des dispositions impératives de l&rsquo;article R.&nbsp;631-3 du Code de la consommation lorsque l&rsquo;Utilisateur a la qualité de consommateur, les tribunaux du ressort de la Cour d&rsquo;appel de Paris seront seuls compétents.
            </p>
            <p>
              Conformément aux articles L.&nbsp;611-1 et suivants du Code de la consommation, l&rsquo;Utilisateur consommateur est informé qu&rsquo;il peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige qui l&rsquo;opposerait à R3.
            </p>
          </div>
        </section>

        {/* ── Footer ── */}
        <div className="text-center mt-20 pb-8">
          <Link to="/" className="font-heading text-primary hover:underline">
            &larr; Retour à l&rsquo;accueil
          </Link>
        </div>

      </main>
    </div>
  );
}
