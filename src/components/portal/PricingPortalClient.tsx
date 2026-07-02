'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { CheckIcon } from '@/components/ui/Icons';
import { PLANS, type PlanId } from '@/lib/pricing';

type CheckoutPlanId = Exclude<PlanId, 'school'>;

const COPY = {
  id: {
    premium_monthly: { name: 'Premium Bulanan', features: ['Buku tanpa batas', 'AI Voice penuh', 'Unduh offline', 'Kuis & lencana'] },
    premium_yearly: { name: 'Premium Tahunan (hemat 17%)', features: ['Semua fitur Premium bulanan', 'Bayar per tahun'] },
    lifetime: { name: 'Seumur Hidup', features: ['Semua fitur Premium', 'Sekali bayar, selamanya'] },
    family: { name: 'Family', features: ['Semua fitur Premium', 'Hingga 5 profil anak', 'Dashboard orang tua'] }
  },
  en: {
    premium_monthly: { name: 'Premium Monthly', features: ['Unlimited books', 'Full AI Voice', 'Offline downloads', 'Quizzes & badges'] },
    premium_yearly: { name: 'Premium Yearly (save 17%)', features: ['Everything in monthly', 'Billed once a year'] },
    lifetime: { name: 'Lifetime', features: ['Everything in Premium', 'Pay once, forever'] },
    family: { name: 'Family', features: ['Everything in Premium', 'Up to 5 child profiles', 'Parent dashboard'] }
  }
};

export function PricingPortalClient({ currentPlan }: { currentPlan: string }) {
  const { t, locale } = useTranslation();
  const copy = locale === 'id' ? COPY.id : COPY.en;

  const planIds: CheckoutPlanId[] = ['premium_monthly', 'premium_yearly', 'lifetime', 'family'];

  return (
    <div>
      <h1 className="text-2xl font-black text-slate-900 dark:text-white">{t('pricing.title')}</h1>
      <p className="mt-1 text-slate-500 dark:text-slate-400">{t('pricing.subtitle')}</p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {planIds.map((id) => {
          const plan = PLANS[id];
          const info = copy[id];
          const isCurrent = currentPlan === id;
          return (
            <div key={id} className="card flex flex-col">
              <p className="font-semibold text-slate-500 dark:text-slate-400">{info.name}</p>
              <p className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
                ${plan.amountUsd}
                {plan.interval === 'month' && <span className="text-sm font-medium text-slate-400">{t('common.perMonth')}</span>}
                {plan.interval === 'year' && <span className="text-sm font-medium text-slate-400">{t('common.perYear')}</span>}
                {plan.interval === 'once' && <span className="text-sm font-medium text-slate-400"> {t('common.oneTime')}</span>}
              </p>
              <ul className="mt-4 flex-1 space-y-2">
                {info.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {f}
                  </li>
                ))}
              </ul>
              {isCurrent ? (
                <span className="mt-5 rounded-full bg-slate-100 px-4 py-2 text-center text-sm font-semibold text-slate-500 dark:bg-slate-800">
                  {locale === 'id' ? 'Paket Aktif' : 'Current Plan'}
                </span>
              ) : (
                <Link href={`/app/pricing/checkout?plan=${id}`} className="btn-primary mt-5">
                  {t('pricing.goPremium')}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
