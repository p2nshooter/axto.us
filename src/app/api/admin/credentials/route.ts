import { NextRequest, NextResponse } from 'next/server';
import { desc } from 'drizzle-orm';
import { getDb, getEnv } from '@/lib/db/client';
import { apiCredentials } from '@/lib/db/schema';
import { requireAdmin } from '@/lib/auth/guards';
import { apiCredentialSchema } from '@/lib/validation';
import { encryptSecret, maskSecret } from '@/lib/crypto/secrets';
import { logAdminAction } from '@/lib/audit';
import { newId } from '@/lib/id';
import { AppError, ErrorCodes } from '@/lib/errors';
import { withErrorHandling } from '@/lib/api-handler';

// PENTING: route ini TIDAK PERNAH mengembalikan nilai asli credential — cuma
// maskedPreview. Nilai asli hanya pernah didekripsi di dalam nvidia.ts/runpod.ts
// saat benar-benar dipanggil ke provider, tidak pernah dikirim balik ke browser.
export const GET = withErrorHandling(async () => {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;

  const db = await getDb();
  const rows = await db
    .select({
      id: apiCredentials.id,
      provider: apiCredentials.provider,
      label: apiCredentials.label,
      maskedPreview: apiCredentials.maskedPreview,
      isActive: apiCredentials.isActive,
      createdAt: apiCredentials.createdAt
    })
    .from(apiCredentials)
    .orderBy(desc(apiCredentials.createdAt));

  return NextResponse.json({ credentials: rows });
});

export const POST = withErrorHandling(async (req: NextRequest) => {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const parsed = apiCredentialSchema.safeParse(body);
  if (!parsed.success) {
    throw new AppError(ErrorCodes.VALIDATION_FAILED, parsed.error.issues[0]?.message ?? 'Data tidak valid.', 400);
  }
  const { provider, label, value } = parsed.data;

  const env = await getEnv();
  if (!env.CREDENTIALS_ENCRYPTION_KEY) {
    throw new AppError(
      ErrorCodes.CREDENTIAL_MISSING,
      'CREDENTIALS_ENCRYPTION_KEY belum di-set di server — generate dulu (openssl rand -base64 32) dan wrangler secret put sebelum bisa simpan credential lewat portal ini.',
      503
    );
  }

  const encryptedValue = await encryptSecret(value, env.CREDENTIALS_ENCRYPTION_KEY);
  const id = newId('cred');

  const db = await getDb();
  await db.insert(apiCredentials).values({
    id,
    provider,
    label,
    encryptedValue,
    maskedPreview: maskSecret(value),
    createdByUserId: guard.user.id
  });
  await logAdminAction(guard.user.id, 'credential.create', 'api_credential', id, { provider, label });

  return NextResponse.json({
    id,
    provider,
    label,
    maskedPreview: maskSecret(value),
    isActive: true
  });
});
