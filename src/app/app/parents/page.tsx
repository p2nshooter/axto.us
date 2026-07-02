import { getCurrentUser } from '@/lib/auth/session';
import { getUserStats, getReadingHistory } from '@/lib/data/dashboard';
import { ParentsClient } from '@/components/portal/ParentsClient';

export const dynamic = 'force-dynamic';

export default async function ParentsPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const [stats, history] = await Promise.all([getUserStats(user.id), getReadingHistory(user.id)]);

  return (
    <ParentsClient
      stats={stats}
      history={history.slice(0, 10).map((r) => ({
        title: r.book.titleId,
        titleEn: r.book.titleEn,
        completed: !!r.progress.completedAt,
        quizScore: r.progress.quizScore,
        updatedAt: r.progress.updatedAt.getTime()
      }))}
    />
  );
}
