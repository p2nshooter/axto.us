import { NextRequest, NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { parentalConsents } from '@/lib/db/schema';
import { sha256Hex } from '@/lib/auth/crypto-utils';
import { activateSchoolStudentIfReady } from '@/lib/schools';
import { withErrorHandling } from '@/lib/api-handler';

export const POST = withErrorHandling(async (req: NextRequest) => {
  const body = (await req.json().catch(() => null)) as any;
  const token = typeof body?.token === 'string' ? body.token : '';
  if (!token) {
    return NextResponse.json({ error: 'Token tidak valid.' }, { status: 400 });
  }

  const tokenHash = await sha256Hex(token);
  const db = await getDb();
  const rows = await db.select().from(parentalConsents).where(eq(parentalConsents.tokenHash, tokenHash)).limit(1);
  const record = rows[0];

  if (!record || record.expiresAt.getTime() < Date.now()) {
    return NextResponse.json({ error: 'Link persetujuan tidak valid atau sudah kedaluwarsa.' }, { status: 400 });
  }

  // Idempotent — kalau parent klik link dua kali, ini tidak error, cuma no-op.
  if (record.status !== 'confirmed') {
    await db
      .update(parentalConsents)
      .set({ status: 'confirmed', confirmedAt: new Date() })
      .where(eq(parentalConsents.id, record.id));
    await activateSchoolStudentIfReady(record.schoolStudentId);
  }

  return NextResponse.json({ ok: true });
});
