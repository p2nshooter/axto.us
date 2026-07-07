import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { apiCredentials } from '@/lib/db/schema';
import { requireAdmin } from '@/lib/auth/guards';
import { logAdminAction } from '@/lib/audit';
import { AppError, ErrorCodes } from '@/lib/errors';
import { withErrorHandling } from '@/lib/api-handler';

export const DELETE = withErrorHandling(async (_req: Request, { params }: { params: Promise<{ id: string }> }) => {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;
  const { id } = await params;

  const db = await getDb();
  const rows = await db.select({ id: apiCredentials.id }).from(apiCredentials).where(eq(apiCredentials.id, id)).limit(1);
  if (rows.length === 0) {
    throw new AppError(ErrorCodes.NOT_FOUND, 'Credential tidak ditemukan.', 404);
  }

  // Nonaktifkan, bukan hapus baris — jejak audit tetap ada soal credential apa
  // yang pernah dipakai kapan.
  await db.update(apiCredentials).set({ isActive: false, updatedAt: new Date() }).where(eq(apiCredentials.id, id));
  await logAdminAction(guard.user.id, 'credential.deactivate', 'api_credential', id);

  return NextResponse.json({ ok: true });
});
