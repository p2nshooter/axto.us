// CloudflareEnv adalah global ambient type, tidak di-import — lihat catatan di nvidia.ts.
import { getCredential } from './credentials';
import { AppError, ErrorCodes } from '@/lib/errors';

type RunPodEnv = Pick<CloudflareEnv, 'RUNPOD_API_KEY' | 'RUNPOD_ENDPOINT_ID' | 'CREDENTIALS_ENCRYPTION_KEY'>;

async function resolveRunpodConfig(env: RunPodEnv): Promise<{ apiKey: string; endpointId: string }> {
  const apiKey = await getCredential(env, 'runpod_api_key', env.RUNPOD_API_KEY);
  const endpointId = await getCredential(env, 'runpod_endpoint_id', env.RUNPOD_ENDPOINT_ID);
  if (!apiKey || !endpointId) {
    throw new AppError(
      ErrorCodes.CREDENTIAL_MISSING,
      'RunPod belum dikonfigurasi — deploy dulu endpoint Serverless-nya, lalu tambahkan RUNPOD_API_KEY & RUNPOD_ENDPOINT_ID lewat Admin > Kredensial API (atau env var).',
      503
    );
  }
  return { apiKey, endpointId };
}

/**
 * Submit job video ke RunPod Serverless (async — model open-source seperti
 * Wan 2.7 / LTX-2.3 yang kamu self-host, BUKAN NVIDIA Cosmos, lihat catatan
 * rekomendasi API sebelumnya). Mengembalikan job id RunPod untuk di-poll cron.
 *
 * Bentuk `input` di bawah ini generik (prompt/duration/style) — sesuaikan
 * field-nya dengan skema input image yang benar-benar kamu deploy di pod
 * (tiap image ComfyUI/Wan/LTX punya kontrak input sedikit berbeda).
 */
export async function submitVideoJob(
  env: RunPodEnv,
  input: { prompt: string; durationSeconds: number; styleGuidance: string }
): Promise<string> {
  const { apiKey, endpointId } = await resolveRunpodConfig(env);

  const res = await fetch(`https://api.runpod.ai/v2/${endpointId}/run`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input })
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new AppError(ErrorCodes.EXTERNAL_PROVIDER_ERROR, `RunPod submit error ${res.status}: ${body.slice(0, 300)}`, 502);
  }

  const data = (await res.json()) as any;
  if (!data.id) {
    throw new AppError(ErrorCodes.EXTERNAL_PROVIDER_ERROR, 'RunPod tidak mengembalikan job id.', 502);
  }
  return data.id as string;
}

export type RunpodJobStatus = {
  status: 'IN_QUEUE' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
  // Bentuk output tergantung image yang di-deploy — umumnya base64 atau URL sementara.
  outputBase64?: string;
  outputUrl?: string;
  error?: string;
};

export async function checkVideoJobStatus(env: RunPodEnv, providerJobId: string): Promise<RunpodJobStatus> {
  const { apiKey, endpointId } = await resolveRunpodConfig(env);

  const res = await fetch(`https://api.runpod.ai/v2/${endpointId}/status/${providerJobId}`, {
    headers: { Authorization: `Bearer ${apiKey}` }
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new AppError(ErrorCodes.EXTERNAL_PROVIDER_ERROR, `RunPod status error ${res.status}: ${body.slice(0, 300)}`, 502);
  }

  const data = (await res.json()) as any;
  return {
    status: data.status,
    outputBase64: data.output?.video_base64,
    outputUrl: data.output?.video_url,
    error: data.error
  };
}
