import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { parsePhoneNumber } from 'libphonenumber-js';
import { Loader2, CheckCircle2, UploadCloud, X } from 'lucide-react';

const COUNTRIES = [
  'France', 'Belgique', 'Suisse', 'Luxembourg',
  'Canada', 'USA', 'UK', 'Espagne', 'Italie', 'Portugal', 'Allemagne',
];

const COUNTRY_ISO: Record<string, string> = {
  France: 'FR', Belgique: 'BE', Suisse: 'CH', Luxembourg: 'LU',
  Canada: 'CA', USA: 'US', UK: 'GB', Espagne: 'ES',
  Italie: 'IT', Portugal: 'PT', Allemagne: 'DE',
};

const COUNTRY_DIAL: Record<string, string> = {
  France: '+33', Belgique: '+32', Suisse: '+41', Luxembourg: '+352',
  Canada: '+1', USA: '+1', UK: '+44', Espagne: '+34',
  Italie: '+39', Portugal: '+351', Allemagne: '+49',
};

function normalizePhone(raw: string, country: string): string | null {
  try {
    const iso = COUNTRY_ISO[country] as Parameters<typeof parsePhoneNumber>[1];
    const parsed = parsePhoneNumber(raw, iso);
    if (!parsed || !parsed.isValid()) return null;
    return parsed.number.replace('+', '');
  } catch {
    return null;
  }
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
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
    if (!cgu) errors.cgu = 'Vous devez accepter les CGU.';

    const normalizedPhone = normalizePhone(phone, country);
    if (!normalizedPhone) errors.phone = 'Numéro de téléphone invalide pour ce pays.';

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
      formData.append('phone', normalizedPhone!);
      formData.append('country', country);
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

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-heading font-light mb-3 leading-tight tracking-tight">
              Inscrivez-vous à{' '}
              <span className="gold-gradient-text italic">Mireille</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg font-light">
              Inscrivez-vous pour créer vos vidéos IA
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 md:p-10 shadow-2xl">
            {formError && (
              <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                {formError}
              </div>
            )}

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
                <label className="block text-sm text-white/60 mb-1.5">Téléphone *</label>
                <div className="flex items-center gap-2">
                  <span className="flex-shrink-0 bg-surface-light border border-white/10 rounded-xl px-3 py-3 text-white/50 text-sm min-w-[60px] text-center">
                    {COUNTRY_DIAL[country]}
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className={`flex-1 ${inputClass('phone')}`}
                  />
                </div>
                {fieldErrors.phone && <p className="mt-1 text-xs text-red-400">{fieldErrors.phone}</p>}
              </div>

              {/* Photo drag & drop */}
              <div>
                <label className="block text-sm text-white/60 mb-1.5">Photo plein pied *</label>

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
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-4 rounded-xl font-heading font-bold text-black text-base tracking-wide transition-opacity disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(to right, #E8C396, #C28135)' }}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Inscription en cours...
                  </>
                ) : (
                  'S\'inscrire'
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
