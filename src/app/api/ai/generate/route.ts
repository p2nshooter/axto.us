import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { requireAdmin } from '@/lib/auth/guards';
import { startSmartEngineJob, runSmartEnginePipeline } from '@/lib/ai/smart-engine';
import { withErrorHandling } from '@/lib/api-handler';

// Admin-only: ini alat produksi katalog internal (buku/video AI), bukan fitur
// yang langsung dipakai siswa. Personalisasi cerita siswa (create-story) tetap
// terpisah untuk sekarang — lihat catatan di respons chat.
export const POST = withErrorHandling(async (req: NextRequest) => {
  const guard = await requireAdmin();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  if (!body?.categoryId || !body?.language || !body?.topic || !body?.contentType) {
    return NextResponse.json(
      { error: 'contentType, categoryId, language, dan topic wajib diisi.' },
      { status: 400 }
    );
  }

  const request = {
    contentType: body.contentType === 'video' ? ('video' as const) : ('book' as const),
    categoryId: String(body.categoryId),
    ageMin: body.ageMin ? Number(body.ageMin) : undefined,
    ageMax: body.ageMax ? Number(body.ageMax) : undefined,
    grade: body.grade ? String(body.grade) : undefined,
    language: String(body.language),
    topic: String(body.topic).slice(0, 500),
    durationSeconds: body.durationSeconds ? Number(body.durationSeconds) : undefined,
    createdByUserId: guard.user.id
  };

  const jobId = await startSmartEngineJob(request);

  // Jalankan pipeline di background — client dapat jobId dulu, lalu poll
  // GET /api/ai/jobs/{id} atau subscribe WebSocket-nya buat progress real-time.
  const { ctx } = await getCloudflareContext({ async: true });
  ctx.waitUntil(runSmartEnginePipeline(jobId, request));

  return NextResponse.json({ jobId });
});
