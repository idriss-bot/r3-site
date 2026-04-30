import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Loader2, CheckCircle2, UploadCloud, X } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const COUNTRIES = [
  'France', 'Belgique', 'Suisse', 'Luxembourg',
  'Canada', 'USA', 'UK', 'Espagne', 'Italie', 'Portugal', 'Allemagne',
];

const COUNTRY_TO_CODE: Record<string, string> = {
  France: '33', Belgique: '32', Suisse: '41', Luxembourg: '352',
  Canada: '1', USA: '1', UK: '44', Espagne: '34',
  Italie: '39', Portugal: '351', Allemagne: '49',
};

const COUNTRY_NAMES: Record<string, string> = Object.fromEntries(
  Object.entries(COUNTRY_TO_CODE).map(([name, code]) => [code, name])
);

const COUNTRY_EXAMPLES: Record<string, string> = {
  '33': '06 12 34 56 78 ou +33 6 12 34 56 78',
  '32': '04 12 34 56 78 ou +32 4 12 34 56 78',
  '41': '079 123 45 67 ou +41 79 123 45 67',
  '1': '514 123 4567 ou +1 514 123 4567',
  '352': '621 12 34 56 ou +352 621 12 34 56',
  '44': '07700 900123 ou +44 7700 900123',
  '34': '612 34 56 78 ou +34 612 34 56 78',
  '39': '312 345 6789 ou +39 312 345 6789',
  '351': '912 345 678 ou +351 912 345 678',
  '49': '0151 12345678 ou +49 151 12345678',
};

function normalizePhone(raw: string, country: string): string {
  const countryCode = COUNTRY_TO_CODE[country] ?? '33';

  // 1. Strip espaces, tirets, points, parenthèses, slashes
  const cleaned = raw.replace(/[\s\-\.\/\(\)]/g, '');

  // 2. Format : optionnel + en tête, puis chiffres uniquement
  if (!/^\+?\d+$/.test(cleaned)) {
    throw new Error('Le numéro contient des caractères invalides. Utilisez uniquement des chiffres.');
  }

  // 3. Commence par +
  if (cleaned.startsWith('+')) {
    const digits = cleaned.slice(1);
    if (!digits.startsWith(countryCode)) {
      const countryName = COUNTRY_NAMES[countryCode] ?? 'votre pays';
      const example = COUNTRY_EXAMPLES[countryCode] ?? '';
      throw new Error(`Vous êtes en ${countryName}, veuillez utiliser le format correspondant (${example}).`);
    }
    if (digits.length < countryCode.length + 8 || digits.length > 15) {
      throw new Error('Numéro invalide : trop court ou trop long.');
    }
    return `+${digits}`;
  }

  // 4. Sans +
  const digits = cleaned.startsWith('0') ? cleaned.slice(1) : cleaned;
  if (digits.length < 8 || countryCode.length + digits.length > 15) {
    throw new Error('Numéro invalide : trop court ou trop long.');
  }
  return `+${countryCode}${digits}`;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
}

function BadgeWhatsApp({ size = 13 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center align-middle rounded-full"
      style={{
        background: 'rgba(37,211,102,0.12)',
        color: '#25d366',
        padding: '2px 9px',
        fontSize: size,
        fontWeight: 500,
        gap: 4,
      }}
    >
      <WhatsAppIcon size={size} color="#25d366" />
      WhatsApp
    </span>
  );
}

export default function InscriptionMireille() {
  const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('France');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoError, setPhotoError] = useState('');
  const [identityConfirmed, setIdentityConfirmed] = useState(false);
  const [cgu, setCgu] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const onDrop = useCallback((accepted: File[], rejected: { file: File; errors: { code: string }[] }[]) => {
    setPhotoError('');
    if (rejected.length > 0) {
      const err = rejected[0].errors[0];
      if (err.code === 'file-too-large') setPhotoError('Le fichier dépasse la taille maximale de 10 Mo.');
      else if (err.code === 'file-invalid-type') setPhotoError('Format invalide. Acceptés : JPEG, PNG, WebP.');
      else setPhotoError('Fichier invalide.');
      return;
    }
    if (accepted.length > 0) {
      const file = accepted[0];
      setPhoto(file);
      const url = URL.createObjectURL(file);
      setPhotoPreview(url);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/jpeg': [], 'image/png': [], 'image/webp': [] },
    maxSize: 10 * 1024 * 1024,
    multiple: false,
  });

  const resetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhoto(null);
    setPhotoPreview(null);
    setPhotoError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFieldErrors({});

    const errors: Record<string, string> = {};

    if (!firstName.trim()) errors.firstName = 'Le prénom est requis.';
    if (!name.trim()) errors.name = 'Le nom est requis.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Email invalide.';
    if (!photo) errors.photo = 'Une photo est requise.';
    if (!identityConfirmed) errors.identityConfirmed = 'Vous devez confirmer que la personne sur la photo est bien vous-même.';
    if (!cgu) errors.cgu = 'Vous devez accepter les CGU.';

    let normalizedPhone = '';
    try {
      normalizedPhone = normalizePhone(phone, country);
    } catch (err) {
      errors.phone = err instanceof Error ? err.message : 'Numéro de téléphone invalide.';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name.trim());
      formData.append('first_name', firstName.trim());
      formData.append('email', email.trim().toLowerCase());
      formData.append('phone', normalizedPhone);
      formData.append('country', country);
      formData.append('identity_confirmed', 'true');
      formData.append('cgu', 'true');
      formData.append('photo', photo!);

      const res = await fetch('https://mireille.r-3.fr/api/signup', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        return;
      }

      if (res.status === 409) {
        setFormError('Ce numéro est déjà inscrit. Si c\'est une erreur, contactez le support.');
        return;
      }

      if (res.status === 400) {
        const data = await res.json().catch(() => ({}));
        if (data.field) {
          setFieldErrors({ [data.field]: data.message || 'Valeur invalide.' });
        } else {
          setFormError(data.message || 'Données invalides, vérifiez le formulaire.');
        }
        return;
      }

      setFormError('Une erreur est survenue, veuillez réessayer.');
    } catch {
      setFormError('Une erreur est survenue, veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-surface-light border ${fieldErrors[field] ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`;

  if (success) {
    return (
      <div className="min-h-screen bg-bg text-white font-body selection:bg-primary selection:text-white relative flex flex-col overflow-x-hidden">
        <div className="bg-noise" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
        <header className="relative z-10 pt-6 pb-4 text-center">
          <a href="/" aria-label="Retour à l'accueil R3">
            <img src="/images/logo-r3.png" alt="R3" className="h-10 w-auto mx-auto" />
          </a>
        </header>
        <main className="flex-1 flex items-center justify-center relative z-10 px-6 py-10">
          <div className="text-center max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(194,129,53,0.3)]">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-heading font-light text-white mb-4">Inscription réussie !</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Consultez votre WhatsApp, Mireille vient de vous envoyer un message de bienvenue.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-white font-body selection:bg-primary selection:text-white relative flex flex-col overflow-x-hidden">
      <div className="bg-noise" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <header className="relative z-10 pt-6 pb-4 text-center">
        <a href="/" aria-label="Retour à l'accueil R3">
          <img src="/images/logo-r3.png" alt="R3" className="h-10 w-auto mx-auto" />
        </a>
      </header>

      <main className="flex-1 flex items-center justify-center relative z-10 px-6 py-8 md:py-12">
        <div className="w-full max-w-[600px] mx-auto">

          {/* ── H1 ── */}
          <div className="text-center mb-6">
            <h1
              className="font-heading leading-tight"
              style={{ fontSize: 'clamp(22px, 4.5vw, 32px)', fontWeight: 500, lineHeight: 1.3, textWrap: 'balance' } as React.CSSProperties}
            >
              Recevez votre vidéo IA gratuite en 15 minutes<br />
              <span className="gold-gradient-text italic">grâce à votre avatar virtuel</span>
            </h1>
          </div>

          {/* ── H2 sous-titre ── */}
          <p
            className="text-center mx-auto mb-6 text-white/70"
            style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 560, textWrap: 'balance' } as React.CSSProperties}
          >
            Envoyez un vocal et une photo sur{' '}
            <BadgeWhatsApp />.<br />
            <span className="gold-gradient-text" style={{ fontWeight: 600 }}>Mireille</span> s'occupe de tout : <span style={{ whiteSpace: 'nowrap' }}>voix, création de votre avatar, mise en scène</span>.<br />
            Vous recevez une vidéo prête à publier <span style={{ whiteSpace: 'nowrap' }}>sur tous vos réseaux</span>.
          </p>

          {/* ── Badge "Première vidéo offerte" ── */}
          <div className="flex justify-center mb-8">
            <span
              className="inline-flex items-center rounded-full"
              style={{
                background: 'rgba(194,129,53,0.08)',
                border: '0.5px solid rgba(194,129,53,0.3)',
                color: '#C28135',
                padding: '6px 16px',
                fontSize: 13,
                fontWeight: 500,
                gap: 10,
              }}
            >
              Première vidéo offerte
              <span style={{ width: 1, height: 14, background: 'rgba(194,129,53,0.3)', display: 'inline-block' }} />
              <span className="inline-flex items-center" style={{ gap: 4, opacity: 0.7, fontSize: 12 }}>
                <svg width="14" height="11" viewBox="0 0 24 18">
                  <rect x="1" y="1" width="22" height="16" rx="2" fill="none" stroke="#C28135" strokeWidth="1.4" />
                  <line x1="1" y1="6" x2="23" y2="6" stroke="#C28135" strokeWidth="1.4" />
                  <line x1="3" y1="2.5" x2="21" y2="15.5" stroke="#e24b4a" strokeWidth="1.5" />
                </svg>
                sans CB
              </span>
            </span>
          </div>

          {/* ── Vidéo démo placeholder ── */}
          {/* TODO : remplacer par <video src="..." autoPlay muted loop playsInline /> */}
          <div
            className="mx-auto mb-10"
            style={{
              maxWidth: 520,
              aspectRatio: '16/9',
              background: 'var(--color-surface-light)',
              border: '1px dashed rgba(194,129,53,0.25)',
              borderRadius: 14,
              display: 'flex',
              flexDirection: 'column' as const,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 52,
                height: 52,
                background: 'rgba(194,129,53,0.15)',
                border: '1px solid rgba(194,129,53,0.3)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#C28135">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span style={{ color: '#C28135', fontSize: 13, fontWeight: 500 }}>Vidéo démo Mireille</span>
            <span style={{ color: 'rgba(194,129,53,0.4)', fontSize: 11 }}>(à intégrer plus tard)</span>
          </div>

          {/* ── Comment ça marche ── */}
          <div className="mb-10">
            <p
              className="text-center mb-4 font-heading"
              style={{
                textTransform: 'uppercase' as const,
                letterSpacing: 2.5,
                fontSize: 11,
                color: '#8a7560',
              }}
            >
              Comment ça marche
            </p>
            <div className="grid grid-cols-3 gap-2.5" style={{ maxWidth: 520, margin: '0 auto' }}>
              {[
                { num: '1', node: <>Inscrivez-vous</> },
                { num: '2', node: <>Vocal sur <BadgeWhatsApp size={12} /></> },
                { num: '3', node: <>Mireille réalise votre vidéo en 15 minutes</> },
              ].map((step) => (
                <div
                  key={step.num}
                  className="text-center"
                  style={{
                    background: 'var(--color-surface-light)',
                    borderRadius: 10,
                    padding: '1rem 0.75rem',
                  }}
                >
                  <div className="font-heading" style={{ fontSize: 22, color: '#C28135', fontWeight: 600, marginBottom: 6 }}>
                    {step.num}
                  </div>
                  <div style={{ fontSize: 12, color: '#f5e8d8', lineHeight: 1.4 }}>{step.node}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Titre section inscription ── */}
          <p
            className="text-center mb-4 font-heading"
            style={{
              textTransform: 'uppercase' as const,
              letterSpacing: 2.5,
              fontSize: 11,
              color: '#8a7560',
            }}
          >
            Inscription
          </p>

          <div className="glass-panel rounded-2xl p-6 md:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Prénom + Nom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Prénom *</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder="Marie"
                    className={inputClass('firstName')}
                  />
                  {fieldErrors.firstName && <p className="mt-1 text-xs text-red-400">{fieldErrors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Nom *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Dupont"
                    className={inputClass('name')}
                  />
                  {fieldErrors.name && <p className="mt-1 text-xs text-red-400">{fieldErrors.name}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-white/60 mb-1.5">Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="marie@exemple.fr"
                  className={inputClass('email')}
                />
                {fieldErrors.email && <p className="mt-1 text-xs text-red-400">{fieldErrors.email}</p>}
              </div>

              {/* Pays */}
              <div>
                <label className="block text-sm text-white/60 mb-1.5">Pays *</label>
                <select
                  value={country}
                  onChange={e => { setCountry(e.target.value); setPhone(''); }}
                  className={`${inputClass('country')} appearance-none cursor-pointer`}
                >
                  {COUNTRIES.map(c => (
                    <option key={c} value={c} className="bg-surface text-white">{c}</option>
                  ))}
                </select>
              </div>

              {/* Téléphone */}
              <div>
                <label className="flex items-center gap-2 text-sm text-white/60 mb-1.5">
                  Téléphone *
                  <span
                    className="inline-flex items-center rounded-full"
                    style={{
                      background: 'rgba(37,211,102,0.12)',
                      color: '#25d366',
                      padding: '2px 8px',
                      borderRadius: 10,
                      fontSize: 11,
                      fontWeight: 500,
                      gap: 4,
                    }}
                  >
                    <WhatsAppIcon size={11} color="#25d366" />
                    WhatsApp
                  </span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+33 6 12 34 56 78 ou 06 12 34 56 78"
                  className={inputClass('phone')}
                />
                {fieldErrors.phone && <p className="mt-1 text-xs text-red-400">{fieldErrors.phone}</p>}
              </div>

              {/* Photo drag & drop */}
              <div>
                <h3
                  className="font-heading text-white mt-2 mb-3"
                  style={{ fontSize: 16, fontWeight: 500 }}
                >
                  Envoyez-nous une photo de vous
                </h3>
                <label className="block text-sm text-white/60 mb-1.5">Consignes à respecter *</label>

                <div
                  className="grid grid-cols-2 gap-2 mb-3"
                  style={{ maxWidth: 480 }}
                >
                  {[
                    { text: 'Plein pied', type: 'positive' },
                    { text: 'Visage de face', type: 'positive' },
                    { text: 'Sans chapeau', type: 'negative' },
                    { text: 'Sans téléphone', type: 'negative' },
                  ].map((critere) => (
                    <div
                      key={critere.text}
                      className="flex items-center gap-2"
                      style={{
                        background: 'rgba(194,129,53,0.06)',
                        border: '0.5px solid rgba(194,129,53,0.2)',
                        borderRadius: 8,
                        padding: '8px 12px',
                        fontSize: 13,
                        color: '#f5e8d8',
                      }}
                    >
                      {critere.type === 'positive' ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12l5 5L20 7"
                            stroke="#25d366"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M6 6L18 18M18 6L6 18"
                            stroke="#e24b4a"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                      <span>{critere.text}</span>
                    </div>
                  ))}
                </div>

                {photo && photoPreview ? (
                  <div className="relative border border-white/10 rounded-xl p-4 bg-surface-light">
                    <button
                      type="button"
                      onClick={resetPhoto}
                      className="absolute top-3 right-3 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label="Supprimer la photo"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                    <div className="flex items-center gap-4">
                      <img
                        src={photoPreview}
                        alt="Aperçu"
                        className="rounded-lg object-cover w-[80px]"
                        style={{ maxHeight: '200px', width: 'auto', maxWidth: '80px' }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{photo.name}</p>
                        <p className="text-white/40 text-xs mt-0.5">{formatFileSize(photo.size)}</p>
                        <button
                          type="button"
                          onClick={resetPhoto}
                          className="mt-2 text-xs text-primary hover:text-primary-hover transition-colors"
                        >
                          Changer la photo
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-xl px-6 py-8 text-center cursor-pointer transition-colors ${
                      isDragActive
                        ? 'border-primary bg-primary/5'
                        : 'border-white/20 bg-surface-light hover:border-primary/60 hover:bg-primary/5'
                    }`}
                  >
                    <input {...getInputProps()} />
                    <UploadCloud className={`w-8 h-8 mx-auto mb-3 ${isDragActive ? 'text-primary' : 'text-white/30'}`} />
                    <p className="text-white/60 text-sm">
                      {isDragActive
                        ? 'Déposez votre photo ici...'
                        : 'Glissez-déposez votre photo ou cliquez pour parcourir'}
                    </p>
                    <p className="text-white/30 text-xs mt-1">JPEG, PNG, WebP — 10 Mo max</p>
                  </div>
                )}

                {(photoError || fieldErrors.photo) && (
                  <p className="mt-1 text-xs text-red-400">{photoError || fieldErrors.photo}</p>
                )}
              </div>

              {/* Confirmation identité */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={identityConfirmed}
                    onChange={e => setIdentityConfirmed(e.target.checked)}
                    className="mt-0.5 accent-primary w-4 h-4 flex-shrink-0"
                  />
                  <span className="text-sm text-white/70 leading-relaxed">
                    Je certifie que la personne sur la photo est bien moi-même. Je comprends que créer un avatar IA à partir de la photo d'une autre personne sans son consentement est illégal et peut entraîner des poursuites.
                  </span>
                </label>
                {fieldErrors.identityConfirmed && <p className="mt-1 text-xs text-red-400">{fieldErrors.identityConfirmed}</p>}
              </div>

              {/* CGU */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cgu}
                    onChange={e => setCgu(e.target.checked)}
                    className="mt-0.5 accent-primary w-4 h-4 flex-shrink-0"
                  />
                  <span className="text-sm text-white/70 leading-relaxed">
                    J'accepte les{' '}
                    <a
                      href="/cgu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
                    >
                      conditions générales d'utilisation
                    </a>
                  </span>
                </label>
                {fieldErrors.cgu && <p className="mt-1 text-xs text-red-400">{fieldErrors.cgu}</p>}
              </div>

              {/* Submit */}
              <div className="mt-2" style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="font-heading transition-opacity disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center"
                  style={{
                    background: '#25d366',
                    color: '#ffffff',
                    padding: '13px 26px',
                    borderRadius: 10,
                    fontWeight: 500,
                    fontSize: 15,
                    gap: 10,
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <WhatsAppIcon size={18} color="#ffffff" />
                      Recevoir ma vidéo gratuite
                    </>
                  )}
                </button>
              </div>

              {formError && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                  {formError}
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
