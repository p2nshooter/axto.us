import { getCurrentUser } from '@/lib/auth/session';
import { getReadingHistory } from '@/lib/data/dashboard';
import { HistoryClient } from '@/components/portal/HistoryClient';

export const dynamic = 'force-dynamic';

export default async function HistoryPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const rows = await getReadingHistory(user.id);

  return (
    <HistoryClient
      rows={rows.map((r) => ({
        book: r.book,
        currentPage: r.progress.currentPage,
        completed: !!r.progress.completedAt,
        quizScore: r.progress.quizScore,
        updatedAt: r.progress.updatedAt.getTime()
      }))}
    />
  );
}
