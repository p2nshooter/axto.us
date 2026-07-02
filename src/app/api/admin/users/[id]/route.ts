import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { requireAdmin } from '@/lib/auth/guards';
import { adminUserUpdateSchema } from '@/lib/validation';
import { logAdminAction } from '@/lib/audit';

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;
  const { id } = await params;

  const body = (await req.json().catch(() => null)) as any;
  const parsed = adminUserUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }
  if (Object.keys(parsed.data).length === 0) {
    return NextResponse.json({ error: 'Tidak ada perubahan.' }, { status: 400 });
  }

  const db = await getDb();
  await db.update(users).set({ ...parsed.data, updatedAt: new Date() }).where(eq(users.id, id));
  await logAdminAction(guard.user.id, 'user.update', 'user', id, parsed.data);

  return NextResponse.json({ ok: true });
}
