// CloudflareEnv adalah global ambient type (declare global di cloudflare-env.d.ts
// project root) — TIDAK di-import, otomatis tersedia di seluruh project persis
// seperti dipakai getEnv() di lib/db/client.ts.
import { getCredential } from './credentials';
import { AppError, ErrorCodes } from '@/lib/errors';

const NIM_BASE_URL = 'https://integrate.api.nvidia.com/v1';

// Model teks default — GLM & DeepSeek sama-sama tersedia di NIM catalog kamu.
// GLM dipilih default karena kuat multilingual (relevan buat en/id/es/fr/ar/ja).
// Ganti gampang lewat parameter, jangan hardcode ulang di caller lain.
export const DEFAULT_TEXT_MODEL = 'zai-org/glm-5.2';

export type ChatMessage = { role: 'system' | 'user' | 'assistant'; content: string };

type NvidiaEnv = Pick<CloudflareEnv, 'NVIDIA_API_KEY' | 'CREDENTIALS_ENCRYPTION_KEY'>;

async function resolveNvidiaKey(env: NvidiaEnv): Promise<string> {
  const key = await getCredential(env, 'nvidia', env.NVIDIA_API_KEY);
  if (!key) {
    throw new AppError(
      ErrorCodes.CREDENTIAL_MISSING,
      'NVIDIA API key belum diatur — tambahkan lewat Admin > Kredensial API, atau set NVIDIA_API_KEY.',
      503
    );
  }
  return key;
}

/**
 * Panggilan chat completion ke NVIDIA NIM. Model open-weight seperti ini
 * BELUM punya guardrail konten-anak sekuat model yang sudah safety-tuned
 * khusus (mis. Claude/GPT) — makanya resolveContentPolicy() SELALU disisipkan
 * sebagai system prompt, dan hasilnya tetap harus lewat review sebelum publish
 * (lihat status 'queued' di admin, belum otomatis live).
 */
export async function nvidiaChatCompletion(
  env: NvidiaEnv,
  messages: ChatMessage[],
  opts?: { model?: string; temperature?: number; maxTokens?: number }
): Promise<string> {
  const apiKey = await resolveNvidiaKey(env);

  const res = await fetch(`${NIM_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: opts?.model ?? DEFAULT_TEXT_MODEL,
      messages,
      temperature: opts?.temperature ?? 0.8,
      max_tokens: opts?.maxTokens ?? 2000,
      stream: false
    })
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new AppError(ErrorCodes.EXTERNAL_PROVIDER_ERROR, `NVIDIA NIM error ${res.status}: ${body.slice(0, 300)}`, 502);
  }

  const data = (await res.json()) as any;
  const content = data?.choices?.[0]?.message?.content;
  if (typeof content !== 'string') {
    throw new AppError(ErrorCodes.EXTERNAL_PROVIDER_ERROR, 'Respons NVIDIA NIM tidak berisi teks yang diharapkan.', 502);
  }
  return content;
}

/**
 * CATATAN VERIFIKASI: endpoint TTS (chatterbox-multilingual-tts) NVIDIA NIM
 * kemungkinan pakai pola invocation berbasis function_id, BEDA dari endpoint
 * chat completion di atas — saya tidak bisa pastikan bentuk request/response
 * persisnya dari sini. Sebelum pakai fungsi TTS di smart-engine.ts, buka
 * halaman model "chatterbox-multilingual-tts" di build.nvidia.com, tab "Code",
 * dan samakan URL + payload di bawah dengan yang tertera di sana.
 *
 * Catatan lain dari dokumentasi resmi: kualitas Chatterbox multilingual
 * PALING KUAT di Bahasa Inggris — bahasa lain (termasuk kemungkinan Indonesia
 * & Arab) bisa salah lafal atau bercampur bahasa. Tes tiap bahasa target
 * (en/id/es/fr/ar/ja) sebelum dipakai produksi, jangan asumsikan semua sama bagus.
 */
export async function nvidiaTextToSpeech(
  env: NvidiaEnv,
  text: string,
  opts: { voiceStyle: string; language: string }
): Promise<ArrayBuffer> {
  const apiKey = await resolveNvidiaKey(env);

  // TODO-VERIFIKASI: ganti path & payload sesuai contoh resmi di build.nvidia.com
  // untuk model "chatterbox-multilingual-tts" sebelum dipakai di produksi.
  const res = await fetch(`${NIM_BASE_URL}/audio/speech`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'nvidia/chatterbox-multilingual-tts',
      input: text,
      voice: opts.voiceStyle,
      language: opts.language
    })
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new AppError(ErrorCodes.EXTERNAL_PROVIDER_ERROR, `NVIDIA TTS error ${res.status}: ${body.slice(0, 300)}`, 502);
  }

  return res.arrayBuffer();
}
