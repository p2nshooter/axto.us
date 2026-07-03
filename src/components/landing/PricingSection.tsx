'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { CheckIcon } from '@/components/ui/Icons';
import { PLANS } from '@/lib/pricing';

export function PricingSection() {
  const { t, dict } = useTranslation();
  const p = dict.pricing;

  return (
    <section id="pricing" className="container-page py-16 md:py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white">{t('pricing.title')}</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{t('pricing.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <PlanCard
          name={p.free}
          price="$0"
          suffix={t('common.perMonth')}
          features={p.freeFeatures}
          cta={p.getStarted}
          href="/register"
        />
        <PlanCard
          name={p.premium}
          price={`$${PLANS.premium_monthly.amountUsd}`}
          suffix={t('common.perMonth')}
          note={`$${PLANS.premium_yearly.amountUsd}${t('common.perYear')} · $${PLANS.lifetime.amountUsd} ${p.lifetime.toLowerCase()}`}
          features={p.premiumFeatures}
          cta={p.goPremium}
          href="/register?plan=premium_monthly"
          highlight
          badge={p.mostPopular}
        />
        <PlanCard
          name={p.family}
          price={`$${PLANS.family.amountUsd}`}
          suffix={t('common.perMonth')}
          features={p.familyFeatures}
          cta={p.chooseFamily}
          href="/register?plan=family"
        />
        <PlanCard name={p.school} price="—" suffix="" features={p.schoolFeatures} cta={p.contactSales} href="/for-schools" />
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
