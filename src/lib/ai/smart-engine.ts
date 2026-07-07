import { eq } from 'drizzle-orm';
import { getDb, getEnv } from '@/lib/db/client';
import { contentGenerationJobs } from '@/lib/db/schema';
import { newId } from '@/lib/id';
import { resolveContentPolicy, type ContentPolicy } from './content-policy';
import { nvidiaChatCompletion, nvidiaTextToSpeech } from './nvidia';
import { submitVideoJob } from './runpod';
import { SmartEngineWsClient } from './ws-engine-client';

export type SmartEngineRequest = {
  contentType: 'book' | 'video';
  categoryId: string;
  ageMin?: number;
  ageMax?: number;
  grade?: string;
  language: string;
  // Ide singkat dari admin/pembuat konten, mis. "kelinci belajar berbagi mainan".
  topic: string;
  durationSeconds?: number;
  createdByUserId?: string;
};

type GeneratedStory = { title: string; pages: string[] };

async function broadcastProgress(env: any, jobId: string, update: Record<string, unknown>) {
  try {
    const doId = env.GENERATION_PROGRESS.idFromName(jobId);
    const stub = env.GENERATION_PROGRESS.get(doId);
    await stub.fetch('https://do-internal/broadcast', {
      method: 'POST',
      body: JSON.stringify({ jobId, ...update })
    });
  } catch (err) {
    // WebSocket cuma "nice to have" — job tetap harus lanjut walau broadcast gagal
    // (mis. Durable Object belum ke-wire dengan benar, lihat catatan di wrangler.jsonc).
    console.error('broadcastProgress gagal (non-fatal):', err);
  }
}

/**
 * Titik masuk TUNGGAL untuk semua generate konten (buku/video) — REST route
 * manapun yang menerima request generate WAJIB lewat sini, bukan manggil
 * nvidia.ts/runpod.ts langsung, supaya resolveContentPolicy() selalu jalan.
 * Kembalikan jobId secepatnya; jalankan pipeline sesungguhnya lewat
 * ctx.waitUntil() di caller (lihat route.ts) supaya request tidak nge-block.
 */
export async function startSmartEngineJob(request: SmartEngineRequest): Promise<string> {
  const db = await getDb();
  const jobId = newId('cgen');

  await db.insert(contentGenerationJobs).values({
    id: jobId,
    createdByUserId: request.createdByUserId,
    type: request.contentType === 'book' ? 'story_text' : 'video',
    status: 'processing',
    inputJson: JSON.stringify(request)
  });

  return jobId;
}

/**
 * Jalur utama KALAU EXTERNAL_ENGINE_WS_URL dikonfigurasi (mis. axto.io) —
 * satu koneksi WS dipakai untuk teks+narasi+video sekaligus, karena
 * disebutkan engine eksternal itu sudah gabung API GPU & API AI jadi satu.
 * Progress yang dikirim balik (type:'progress') diteruskan ke browser lewat
 * broadcastProgress, jadi WebSocket-ke-luar dan WebSocket-ke-browser tetap
 * dua koneksi terpisah yang saling meneruskan, bukan dicampur jadi satu.
 *
 * PROTOKOL PESAN DI SmartEngineWsClient MASIH ASUMSI — kalau axto.io beda
 * kontraknya, kabari saya bentuk pesannya biar saya sesuaikan, bukan ditebak.
 */
async function runViaExternalEngine(
  env: any,
  jobId: string,
  request: SmartEngineRequest,
  policy: ContentPolicy
): Promise<{ story: GeneratedStory; audioKeys: string[]; videoProviderJobId?: string; videoAssetKey?: string }> {
  const client = new SmartEngineWsClient(env.EXTERNAL_ENGINE_WS_URL, env.EXTERNAL_ENGINE_WS_TOKEN ?? '');
  try {
    await client.connect();

    const storyResult = (await client.send(
      'generate_text',
      { policy, topic: request.topic, language: request.language },
      { onProgress: (p) => broadcastProgress(env, jobId, { status: 'processing', stage: 'text', ...(p as object) }) }
    )) as GeneratedStory;

    await persistStoryText(jobId, storyResult);

    const audioKeys = (await client.send(
      'generate_audio',
      { pages: storyResult.pages, voiceStyle: policy.narrationVoiceStyle, language: request.language },
      { onProgress: (p) => broadcastProgress(env, jobId, { status: 'processing', stage: 'narration', ...(p as object) }) }
    )) as string[];

    if (request.contentType !== 'video') {
      return { story: storyResult, audioKeys };
    }

    const videoResult = (await client.send(
      'generate_video',
      {
        prompt: `${storyResult.title}. ${storyResult.pages.join(' ')}`,
        styleGuidance: policy.videoStyleGuidance,
        durationSeconds: request.durationSeconds ?? policy.videoMaxSceneSeconds * storyResult.pages.length
      },
      { onProgress: (p) => broadcastProgress(env, jobId, { status: 'processing', stage: 'video', ...(p as object) }) }
    )) as { providerJobId?: string; assetKey?: string };

    // axto.io bisa saja balikin hasil video LANGSUNG (assetKey) kalau generate-nya
    // sinkron di sisi mereka, atau providerJobId kalau async (mirip pola RunPod) —
    // dua-duanya ditangani, jangan asumsikan cuma salah satu.
    return {
      story: storyResult,
      audioKeys,
      videoProviderJobId: videoResult.providerJobId,
      videoAssetKey: videoResult.assetKey
    };
  } finally {
    client.close();
  }
}

async function persistStoryText(jobId: string, story: GeneratedStory, audioKeys?: string[]) {
  const db = await getDb();
  await db
    .update(contentGenerationJobs)
    .set({ outputTextJson: JSON.stringify({ ...story, audioKeys: audioKeys ?? [] }), updatedAt: new Date() })
    .where(eq(contentGenerationJobs.id, jobId));
}

/** Dipanggil lewat ctx.waitUntil() — logika pipeline sesungguhnya. */
export async function runSmartEnginePipeline(jobId: string, request: SmartEngineRequest): Promise<void> {
  const db = await getDb();
  const env = await getEnv();

  try {
    const policy = resolveContentPolicy({
      ageMin: request.ageMin,
      ageMax: request.ageMax,
      grade: request.grade,
      categoryId: request.categoryId,
      language: request.language
    });

    await broadcastProgress(env, jobId, { status: 'processing', stage: 'text', progress: 10 });

    let parsed: GeneratedStory;
    let audioKeys: string[];
    let videoProviderJobId: string | undefined;
    let videoAssetKey: string | undefined;

    if (env.EXTERNAL_ENGINE_WS_URL) {
      // Jalur utama: satu engine eksternal (mis. axto.io) pegang GPU+AI sekaligus.
      const result = await runViaExternalEngine(env, jobId, request, policy);
      parsed = result.story;
      audioKeys = result.audioKeys;
      videoProviderJobId = result.videoProviderJobId;
      videoAssetKey = result.videoAssetKey;
    } else {
      // Fallback: panggil NVIDIA NIM + RunPod terpisah seperti sebelumnya.
      const systemPrompt = [
        `Kamu penulis cerita anak untuk band umur ${policy.label}.`,
        policy.textGuidance,
        `Maksimal sekitar ${policy.maxWordsPerPage} kata per halaman, buat 5-8 halaman.`,
        policy.safetyGuidance,
        `Tulis dalam bahasa: ${request.language}. Kategori cerita: ${request.categoryId}.`,
        'Balas HANYA dengan JSON murni berbentuk {"title": string, "pages": string[]} — tanpa markdown, tanpa teks lain di luar JSON itu.'
      ].join(' ');

      const raw = await nvidiaChatCompletion(env, [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: request.topic }
      ]);
      try {
        parsed = JSON.parse(raw);
      } catch {
        throw new Error('LLM tidak mengembalikan JSON valid. Respons mentah: ' + raw.slice(0, 200));
      }
      await persistStoryText(jobId, parsed);
      await broadcastProgress(env, jobId, { status: 'processing', stage: 'narration', progress: 50 });

      audioKeys = [];
      for (let i = 0; i < parsed.pages.length; i++) {
        const audio = await nvidiaTextToSpeech(env, parsed.pages[i], {
          voiceStyle: policy.narrationVoiceStyle,
          language: request.language
        });
        const key = `generated/${jobId}/page-${i}.mp3`;
        await env.AXTO_ASSETS.put(key, audio);
        audioKeys.push(key);
      }

      if (request.contentType === 'video') {
        await broadcastProgress(env, jobId, { status: 'processing', stage: 'video', progress: 70 });
        const videoPrompt = `${parsed.title}. ${parsed.pages.join(' ')} Gaya visual: ${policy.videoStyleGuidance}`;
        videoProviderJobId = await submitVideoJob(env, {
          prompt: videoPrompt,
          durationSeconds: request.durationSeconds ?? policy.videoMaxSceneSeconds * parsed.pages.length,
          styleGuidance: policy.videoStyleGuidance
        });
      }
    }

    // outputTextJson selalu simpan {title, pages, audioKeys} lengkap di titik ini —
    // outputAssetKey di bawah MURNI buat video key, tidak pernah dipakai untuk audio
    // (bug lama: audioKeys numpang di outputAssetKey lalu ketimpa finalize-video).
    await persistStoryText(jobId, parsed, audioKeys);

    if (request.contentType === 'video') {
      if (videoAssetKey) {
        // Engine eksternal sudah kirim video jadi langsung — selesai sekarang juga.
        await db
          .update(contentGenerationJobs)
          .set({ status: 'completed', outputAssetKey: videoAssetKey, updatedAt: new Date() })
          .where(eq(contentGenerationJobs.id, jobId));
        await broadcastProgress(env, jobId, { status: 'completed', progress: 100 });
        return;
      }
      // Async (RunPod atau axto.io versi job-id) — cron finalize-video yang
      // melengkapi outputAssetKey dengan video key begitu selesai.
      await db
        .update(contentGenerationJobs)
        .set({ providerJobId: videoProviderJobId ?? null, updatedAt: new Date() })
        .where(eq(contentGenerationJobs.id, jobId));
      return;
    }

    await db
      .update(contentGenerationJobs)
      .set({ status: 'completed', updatedAt: new Date() })
      .where(eq(contentGenerationJobs.id, jobId));
    await broadcastProgress(env, jobId, { status: 'completed', progress: 100 });
  } catch (err) {
    const message = String(err instanceof Error ? err.message : err).slice(0, 500);
    await db
      .update(contentGenerationJobs)
      .set({ status: 'failed', errorMessage: message, updatedAt: new Date() })
      .where(eq(contentGenerationJobs.id, jobId));
    await broadcastProgress(env, jobId, { status: 'failed', error: message });
  }
}
