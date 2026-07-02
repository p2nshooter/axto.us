'use client';

import { useTranslation } from '@/lib/i18n/LocaleProvider';

type Stats = {
  booksCompleted: number;
  totalXp: number;
  favoriteCategoryName: { en: string; id: string } | null;
  streak: number;
  level: number;
};

type HistoryRow = { title: string; titleEn: string; completed: boolean; quizScore: number | null; updatedAt: number };

export function ParentsClient({ stats, history }: { stats: Stats; history: HistoryRow[] }) {
  const { t, locale } = useTranslation();
  const title = (r: HistoryRow) => (locale === 'id' ? r.title : r.titleEn);

  return (
    <div>
      <h1 className="text-2xl font-black text-slate-900 dark:text-white">{t('parents.title')}</h1>
      <p className="mt-1 text-slate-500 dark:text-slate-400">{t('parents.subtitle')}</p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Stat label={t('parents.booksCompleted')} value={stats.booksCompleted} />
        <Stat
          label={t('parents.favoriteTopic')}
          value={stats.favoriteCategoryName ? (locale === 'id' ? stats.favoriteCategoryName.id : stats.favoriteCategoryName.en) : '—'}
        />
        <Stat label={t('parents.currentStreak')} value={`${stats.streak} 🔥`} />
        <Stat label={t('parents.level')} value={stats.level} />
      </div>

      <h2 className="mt-10 mb-4 text-lg font-bold text-slate-900 dark:text-white">
        {locale === 'id' ? 'Aktivitas Terbaru' : 'Recent Activity'}
      </h2>
      {history.length === 0 ? (
        <p className="text-slate-400">—</p>
      ) : (
        <div className="space-y-2">
          {history.map((r, i) => (
            <div key={i} className="card flex items-center justify-between">
              <div>
                <p className="font-medium text-slate-800 dark:text-slate-100">{title(r)}</p>
                <p className="text-xs text-slate-400">{new Date(r.updatedAt).toLocaleString(locale)}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  r.completed
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                    : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                }`}
              >
                {r.completed ? (r.quizScore !== null ? `✓ ${r.quizScore} pts` : '✓') : '…'}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="card">
      <p className="text-xl font-black text-slate-900 dark:text-white">{value}</p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}
