import { desc, and, eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { apiCredentials } from '@/lib/db/schema';
import { decryptSecret } from '@/lib/crypto/secrets';

/**
 * Ambil credential provider tertentu — DB dulu (yang dikelola admin lewat
 * portal), fallback ke env var kalau belum ada row aktif di DB. Ini yang
 * dipanggil nvidia.ts/runpod.ts, BUKAN baca env.NVIDIA_API_KEY dkk langsung,
 * supaya kredensial dari portal admin benar-benar kepakai.
 */
export async function getCredential(
  env: Pick<CloudflareEnv, 'CREDENTIALS_ENCRYPTION_KEY'>,
  provider: string,
  envFallback?: string
): Promise<string | null> {
  if (env.CREDENTIALS_ENCRYPTION_KEY) {
    try {
      const db = await getDb();
      const rows = await db
        .select()
        .from(apiCredentials)
        .where(and(eq(apiCredentials.provider, provider), eq(apiCredentials.isActive, true)))
        .orderBy(desc(apiCredentials.createdAt))
        .limit(1);
      const row = rows[0];
      if (row) {
        return await decryptSecret(row.encryptedValue, env.CREDENTIALS_ENCRYPTION_KEY);
      }
    } catch (err) {
      // Jangan sampai DB/dekripsi error bikin seluruh request gagal kalau
      // env var fallback masih ada — cuma log, lanjut ke fallback di bawah.
      console.error(`getCredential('${provider}') gagal baca dari DB:`, err);
    }
  }
  return envFallback ?? null;
}
