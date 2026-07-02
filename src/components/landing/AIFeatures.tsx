'use client';

import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { HeadphoneIcon, GlobeIcon, SparkleIcon, TrophyIcon, WandIcon } from '@/components/ui/Icons';

export function AIFeatures() {
  const { t } = useTranslation();

  const items = [
    { icon: HeadphoneIcon, key: 'voice' },
    { icon: GlobeIcon, key: 'translate' },
    { icon: SparkleIcon, key: 'explain' },
    { icon: TrophyIcon, key: 'quiz' },
    { icon: WandIcon, key: 'recommend' }
  ] as const;

  return (
    <section id="features" className="bg-slate-50 py-16 dark:bg-slate-900/40 md:py-24">
      <div className="container-page">
        <h2 className="mb-10 text-center text-3xl font-black text-slate-900 dark:text-white">{t('aiFeatures.title')}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {items.map(({ icon: Icon, key }) => (
            <div key={key} className="card flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-100">{t(`aiFeatures.${key}.title`)}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t(`aiFeatures.${key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
