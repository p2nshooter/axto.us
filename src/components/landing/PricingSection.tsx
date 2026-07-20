'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { CheckIcon } from '@/components/ui/Icons';

// Every story is free to read and listen to — no plans, no paywall, no
// downloads (owner: "hapus semua narasi berbayar, semuanya gratis, bebas
// didengarkan tp tidak bisa di-download"). This replaces the old four-tier
// pricing table with one warm, honest "it's all free" panel, written in each
// supported language so it never falls back to English.
type FreeCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: string[];
  note: string;
  cta: string;
};

const FREE_COPY: Record<string, FreeCopy> = {
  id: {
    eyebrow: 'Gratis selamanya',
    title: 'Semua cerita, gratis untuk semua',
    subtitle: 'Tanpa langganan, tanpa biaya tersembunyi. Buka, baca, dan dengarkan — sesederhana itu.',
    features: [
      'Semua cerita terbuka — tidak ada yang terkunci',
      'Suara AI membacakan dalam bahasamu',
      'Bebas dibaca dan didengarkan, tanpa perlu mendaftar',
      'Mengikuti bahasamu secara otomatis'
    ],
    note: 'Semuanya gratis dan bebas didengarkan — namun tidak untuk diunduh, agar seluruh perpustakaan tetap gratis dan selalu terbaru.',
    cta: 'Mulai membaca gratis'
  },
  en: {
    eyebrow: 'Free, always',
    title: 'Every story, free for everyone',
    subtitle: 'No subscription, no hidden cost. Open it, read it, listen to it — that simple.',
    features: [
      'Every story open — nothing is locked',
      'AI voice reads aloud in your language',
      'Free to read and listen, no account needed',
      'Follows your language automatically'
    ],
    note: 'Everything is free and free to listen to — but not downloadable, so the whole library stays free and always up to date.',
    cta: 'Start reading free'
  },
  es: {
    eyebrow: 'Gratis, siempre',
    title: 'Cada historia, gratis para todos',
    subtitle: 'Sin suscripción, sin costos ocultos. Ábrela, léela, escúchala — así de simple.',
    features: [
      'Todas las historias abiertas — nada bloqueado',
      'La voz con IA lee en tu idioma',
      'Gratis para leer y escuchar, sin registrarte',
      'Sigue tu idioma automáticamente'
    ],
    note: 'Todo es gratis y libre de escuchar — pero no se puede descargar, para que toda la biblioteca siga siendo gratuita y siempre actualizada.',
    cta: 'Empieza a leer gratis'
  },
  fr: {
    eyebrow: 'Gratuit, pour toujours',
    title: 'Chaque histoire, gratuite pour tous',
    subtitle: 'Sans abonnement, sans frais cachés. Ouvrez, lisez, écoutez — aussi simple que cela.',
    features: [
      'Toutes les histoires ouvertes — rien de verrouillé',
      'La voix IA lit à voix haute dans votre langue',
      'Libre à lire et à écouter, sans compte',
      'Suit votre langue automatiquement'
    ],
    note: 'Tout est gratuit et libre à écouter — mais non téléchargeable, afin que toute la bibliothèque reste gratuite et toujours à jour.',
    cta: 'Commencer à lire gratuitement'
  },
  ar: {
    eyebrow: 'مجاني، دائمًا',
    title: 'كل قصة، مجانية للجميع',
    subtitle: 'بلا اشتراك وبلا تكاليف خفية. افتحها، اقرأها، استمع إليها — بهذه البساطة.',
    features: [
      'كل القصص مفتوحة — لا شيء مقفل',
      'صوت الذكاء الاصطناعي يقرأ بلغتك',
      'حرّة للقراءة والاستماع، دون تسجيل',
      'تتبع لغتك تلقائيًا'
    ],
    note: 'كل شيء مجاني وحرّ للاستماع — لكنه غير قابل للتنزيل، لتبقى المكتبة كلها مجانية ومحدّثة دائمًا.',
    cta: 'ابدأ القراءة مجانًا'
  },
  ja: {
    eyebrow: 'ずっと無料',
    title: 'すべての物語を、みんなに無料で',
    subtitle: 'サブスクなし、隠れた費用なし。開いて、読んで、聴くだけ。',
    features: [
      'すべての物語が開放 — ロックはありません',
      'AIボイスがあなたの言語で読み上げ',
      '登録不要で読む・聴くが自由',
      '自動であなたの言語に対応'
    ],
    note: 'すべて無料で自由に聴けます — ただしダウンロードはできません。ライブラリ全体を無料で最新に保つためです。',
    cta: '無料で読み始める'
  }
};

export function PricingSection() {
  const { locale } = useTranslation();
  const c = FREE_COPY[locale] ?? FREE_COPY.en!;

  return (
    <section id="pricing" className="container-page py-16 md:py-24">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-8 text-center shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 sm:p-12">
        <span className="inline-flex rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {c.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">{c.title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-300">{c.subtitle}</p>

        <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-start sm:grid-cols-2">
          {c.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              <span className="text-slate-700 dark:text-slate-200">{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/library"
          className="mt-9 inline-flex rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow transition hover:bg-brand-700"
        >
          {c.cta}
        </Link>

        <p className="mx-auto mt-5 max-w-lg text-xs text-slate-400 dark:text-slate-500">{c.note}</p>
      </div>
    </section>
  );
}
