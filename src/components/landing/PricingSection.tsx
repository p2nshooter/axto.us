'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { CheckIcon } from '@/components/ui/Icons';
import { PLANS } from '@/lib/pricing';

const COPY = {
  id: {
    free: { name: 'Gratis', features: ['15 buku', 'AI Voice terbatas', 'Tanpa unduh', 'Kuis dasar'] },
    premium: {
      name: 'Premium',
      features: ['Buku tanpa batas', 'AI Voice penuh', 'Unduh offline', 'Kuis & lencana', 'Multi-bahasa']
    },
    family: {
      name: 'Family',
      features: ['Semua fitur Premium', 'Hingga 5 profil', 'Dashboard orang tua', 'Dukungan prioritas']
    },
    school: { name: 'Sekolah', features: ['Dashboard sekolah', 'Banyak kelas', 'Laporan detail', 'Dukungan khusus'] },
    cta: { free: 'Mulai Sekarang', premium: 'Upgrade Premium', family: 'Pilih Family', school: 'Hubungi Sales' }
  },
  en: {
    free: { name: 'Free', features: ['15 books', 'Limited AI Voice', 'No downloads', 'Basic quiz'] },
    premium: {
      name: 'Premium',
      features: ['Unlimited books', 'Full AI Voice', 'Offline downloads', 'Quizzes & badges', 'Multi-language']
    },
    family: { name: 'Family', features: ['Everything in Premium', 'Up to 5 profiles', 'Parent dashboard', 'Priority support'] },
    school: { name: 'School', features: ['School dashboard', 'Multiple classes', 'Detailed reports', 'Dedicated support'] },
    cta: { free: 'Get Started', premium: 'Go Premium', family: 'Choose Family', school: 'Contact Sales' }
  }
};

export function PricingSection() {
  const { t, locale } = useTranslation();
  const copy = locale === 'id' ? COPY.id : COPY.en;

  return (
    <section id="pricing" className="container-page py-16 md:py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white">{t('pricing.title')}</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{t('pricing.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <PlanCard
          name={copy.free.name}
          price="$0"
          suffix={t('common.perMonth')}
          features={copy.free.features}
          cta={copy.cta.free}
          href="/register"
        />
        <PlanCard
          name={copy.premium.name}
          price={`$${PLANS.premium_monthly.amountUsd}`}
          suffix={t('common.perMonth')}
          note={`$${PLANS.premium_yearly.amountUsd}${t('common.perYear')} · $${PLANS.lifetime.amountUsd} ${t('pricing.lifetime').toLowerCase()}`}
          features={copy.premium.features}
          cta={copy.cta.premium}
          href="/register?plan=premium_monthly"
          highlight
          badge={t('pricing.mostPopular')}
        />
        <PlanCard
          name={copy.family.name}
          price={`$${PLANS.family.amountUsd}`}
          suffix={t('common.perMonth')}
          features={copy.family.features}
          cta={copy.cta.family}
          href="/register?plan=family"
        />
        <PlanCard name={copy.school.name} price="—" suffix="" features={copy.school.features} cta={copy.cta.school} href="/for-schools" />
      </div>
    </section>
  );
}

function PlanCard({
  name,
  price,
  suffix,
  note,
  features,
  cta,
  href,
  highlight,
  badge
}: {
  name: string;
  price: string;
  suffix: string;
  note?: string;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 ${
        highlight
          ? 'border-brand-500 bg-brand-600 text-white shadow-lg'
          : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-3 py-0.5 text-xs font-bold text-slate-900">
          {badge}
        </span>
      )}
      <p className={`font-semibold ${highlight ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}>{name}</p>
      <p className="mt-2 text-3xl font-black">
        {price}
        <span className={`text-sm font-medium ${highlight ? 'text-brand-100' : 'text-slate-400'}`}>{suffix}</span>
      </p>
      {note && <p className={`mt-1 text-xs ${highlight ? 'text-brand-100' : 'text-slate-400'}`}>{note}</p>}
      <ul className="mt-5 flex-1 space-y-2.5">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${highlight ? 'text-white' : 'text-brand-600'}`} />
            <span className={highlight ? 'text-brand-50' : 'text-slate-600 dark:text-slate-300'}>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={`mt-6 rounded-full px-4 py-2.5 text-center text-sm font-semibold transition ${
          highlight ? 'bg-white text-brand-700 hover:bg-brand-50' : 'bg-brand-600 text-white hover:bg-brand-700'
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
