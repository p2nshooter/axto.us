import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { schools } from '@/lib/db/schema';
import { requireAdmin } from '@/lib/auth/guards';
import { logAdminAction } from '@/lib/audit';
import { withErrorHandling } from '@/lib/api-handler';

export const PATCH = withErrorHandling(async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;
  const { id } = await params;

  const body = (await req.json().catch(() => null)) as any;
  const status = body?.status;
  if (status !== 'approved' && status !== 'suspended' && status !== 'pending') {
    return NextResponse.json({ error: 'Status tidak valid.' }, { status: 400 });
  }

  const db = await getDb();
  await db.update(schools).set({ status, updatedAt: new Date() }).where(eq(schools.id, id));
  await logAdminAction(guard.user.id, 'school.status_update', 'school', id, { status });

  return NextResponse.json({ ok: true });
});
