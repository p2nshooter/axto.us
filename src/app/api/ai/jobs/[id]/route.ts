import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { contentGenerationJobs } from '@/lib/db/schema';
import { requireAdmin } from '@/lib/auth/guards';
import { withErrorHandling } from '@/lib/api-handler';

export const GET = withErrorHandling(async (_req: Request, { params }: { params: Promise<{ id: string }> }) => {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;
  const { id } = await params;

  const db = await getDb();
  const rows = await db.select().from(contentGenerationJobs).where(eq(contentGenerationJobs.id, id)).limit(1);
  const job = rows[0];
  if (!job) return NextResponse.json({ error: 'Job tidak ditemukan.' }, { status: 404 });

  return NextResponse.json({ job });
});
