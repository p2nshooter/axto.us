import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { users } from '@/lib/db/schema';
import { requireUser } from '@/lib/auth/guards';
import { updateProfileSchema } from '@/lib/validation';

export async function PATCH(req: NextRequest) {
  const guard = await requireUser();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const parsed = updateProfileSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }

  const db = await getDb();
  await db.update(users).set({ ...parsed.data, updatedAt: new Date() }).where(eq(users.id, guard.user.id));

  return NextResponse.json({ ok: true });
}
