import { NextResponse } from 'next/server';
import { desc } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { schools } from '@/lib/db/schema';
import { requireAdmin } from '@/lib/auth/guards';
import { withErrorHandling } from '@/lib/api-handler';

export const GET = withErrorHandling(async () => {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;

  const db = await getDb();
  const rows = await db.select().from(schools).orderBy(desc(schools.createdAt));

  return NextResponse.json({ schools: rows });
});
