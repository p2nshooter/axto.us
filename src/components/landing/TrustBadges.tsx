'use client';

import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { ShieldIcon, SparkleIcon, ChartIcon, HeartIcon } from '@/components/ui/Icons';

export function TrustBadges() {
  const { locale } = useTranslation();

  const items =
    locale === 'id'
      ? [
          { icon: ShieldIcon, title: 'Aman & Terpercaya', desc: 'Konten ramah anak, bebas iklan berbahaya.' },
          { icon: SparkleIcon, title: 'Personalisasi', desc: 'Rekomendasi cerita sesuai minat anak.' },
          { icon: ChartIcon, title: 'Pantau Perkembangan', desc: 'Orang tua dapat memantau aktivitas dan kemajuan anak.' },
          { icon: HeartIcon, title: 'Belajar dengan Seru', desc: 'Membaca jadi petualangan yang tak terlupakan.' }
        ]
      : [
          { icon: ShieldIcon, title: 'Safe & Trusted', desc: 'Kid-friendly content, free of harmful ads.' },
          { icon: SparkleIcon, title: 'Personalized', desc: 'Story recommendations matched to your child.' },
          { icon: ChartIcon, title: 'Track Progress', desc: 'Parents can monitor activity and growth.' },
          { icon: HeartIcon, title: 'Fun Learning', desc: 'Reading becomes an unforgettable adventure.' }
        ];

  return (
    <section className="container-page py-16">
      <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h3 className="mb-8 text-center text-2xl font-black text-slate-900 dark:text-white">
          {locale === 'id' ? 'Dibuat untuk Anak, Disukai Orang Tua' : 'Built for Kids, Loved by Parents'}
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-300">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-100">{item.title}</p>
                <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
