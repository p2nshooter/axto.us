import { getCloudflareContext } from '@opennextjs/cloudflare';

// Proxy tipis ke Durable Object — DO yang benar-benar handle WebSocketPair-nya
// (lihat src/durable-objects/GenerationProgressRoom.ts). Route ini cuma
// merutekan koneksi ke instance DO yang benar berdasarkan jobId.
//
// BELUM DIVERIFIKASI jalan di setup OpenNext ini — lihat catatan wiring
// Durable Object di wrangler.jsonc sebelum mengandalkan endpoint ini.
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: jobId } = await params;
  const { env } = await getCloudflareContext({ async: true });

  const doId = env.GENERATION_PROGRESS.idFromName(jobId);
  const stub = env.GENERATION_PROGRESS.get(doId);

  return stub.fetch(req);
}
