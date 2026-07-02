'use client';

import { useTranslation } from '@/lib/i18n/LocaleProvider';

type Stats = { booksCompleted: number; totalXp: number; streak: number; level: number };

export function AchievementsClient({ stats }: { stats: Stats }) {
  const { locale } = useTranslation();
  const isId = locale === 'id';

  const badges = [
    {
      icon: '📖',
      name: isId ? 'Pembaca Pemula' : 'First Reader',
      desc: isId ? 'Baca 1 buku' : 'Read 1 book',
      earned: stats.booksCompleted >= 1
    },
    {
      icon: '🧭',
      name: isId ? 'Penjelajah' : 'Explorer',
      desc: isId ? 'Baca 10 buku' : 'Read 10 books',
      earned: stats.booksCompleted >= 10
    },
    {
      icon: '🌟',
      name: isId ? 'Bintang Cerita' : 'Story Star',
      desc: isId ? 'Baca 20 buku' : 'Read 20 books',
      earned: stats.booksCompleted >= 20
    },
    {
      icon: '🔥',
      name: isId ? 'Rajin Membaca' : 'Consistent Reader',
      desc: isId ? '3 hari beruntun' : '3-day streak',
      earned: stats.streak >= 3
    },
    {
      icon: '💯',
      name: isId ? 'Seratus XP' : 'Century Club',
      desc: '100 XP',
      earned: stats.totalXp >= 100
    },
    {
      icon: '🏆',
      name: isId ? 'Master Cerita' : 'Story Master',
      desc: '500 XP',
      earned: stats.totalXp >= 500
    }
  ];

  return (
    <div>
      <h1 className="mb-6 text-2xl font-black text-slate-900 dark:text-white">{isId ? 'Pencapaian' : 'Achievements'}</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {badges.map((b) => (
          <div
            key={b.name}
            className={`card flex flex-col items-center gap-2 text-center ${!b.earned ? 'opacity-40 grayscale' : ''}`}
          >
            <span className="text-4xl">{b.icon}</span>
            <p className="font-semibold text-slate-800 dark:text-slate-100">{b.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
