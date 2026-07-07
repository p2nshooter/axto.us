import { NextRequest, NextResponse } from 'next/server';
import { and, eq, isNotNull } from 'drizzle-orm';
import { getDb, getEnv } from '@/lib/db/client';
import { contentGenerationJobs } from '@/lib/db/schema';
import { checkVideoJobStatus } from '@/lib/ai/runpod';
import { withErrorHandling } from '@/lib/api-handler';

/**
 * Dipanggil scheduler EKSTERNAL (cron-job.org, GitHub Actions schedule, dll)
 * tiap ~1 menit — lihat catatan di wrangler.jsonc soal kenapa bukan native
 * Cloudflare Cron Trigger. Set CRON_SECRET dan konfigurasikan scheduler untuk
 * kirim header X-Cron-Secret yang cocok.
 */
export const POST = withErrorHandling(async (req: NextRequest) => {
  const env = await getEnv();
  if (!env.CRON_SECRET || req.headers.get('x-cron-secret') !== env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  const db = await getDb();
  const pending = await db
    .select()
    .from(contentGenerationJobs)
    .where(
      and(
        eq(contentGenerationJobs.type, 'video'),
        eq(contentGenerationJobs.status, 'processing'),
        isNotNull(contentGenerationJobs.providerJobId)
      )
    );

  const results: Array<{ jobId: string; result: string }> = [];

  for (const job of pending) {
    try {
      const status = await checkVideoJobStatus(env, job.providerJobId!);

      if (status.status === 'COMPLETED') {
        let videoBytes: ArrayBuffer;
        if (status.outputBase64) {
          videoBytes = Uint8Array.from(atob(status.outputBase64), (c) => c.charCodeAt(0)).buffer;
        } else if (status.outputUrl) {
          const fetched = await fetch(status.outputUrl);
          videoBytes = await fetched.arrayBuffer();
        } else {
          throw new Error('RunPod COMPLETED tapi tidak ada outputBase64/outputUrl.');
        }

        const key = `generated/${job.id}/video.mp4`;
        await env.AXTO_ASSETS.put(key, videoBytes);
        await db
          .update(contentGenerationJobs)
          .set({ status: 'completed', outputAssetKey: key, updatedAt: new Date() })
          .where(eq(contentGenerationJobs.id, job.id));
        results.push({ jobId: job.id, result: 'completed' });
      } else if (status.status === 'FAILED') {
        await db
          .update(contentGenerationJobs)
          .set({ status: 'failed', errorMessage: status.error ?? 'RunPod job failed', updatedAt: new Date() })
          .where(eq(contentGenerationJobs.id, job.id));
        results.push({ jobId: job.id, result: 'failed' });
      } else {
        results.push({ jobId: job.id, result: 'still-processing' });
      }
    } catch (err) {
      results.push({ jobId: job.id, result: `error: ${String(err).slice(0, 100)}` });
    }
  }

  return NextResponse.json({ checked: pending.length, results });
});
