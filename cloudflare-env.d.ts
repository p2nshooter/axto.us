// Extends the OpenNext `CloudflareEnv` type with this project's own bindings & secrets.
// Keep in sync with wrangler.jsonc bindings and the secrets listed in README.md.
declare global {
  interface CloudflareEnv {
    DB: D1Database;
    AXTO_KV: KVNamespace;
    AXTO_ASSETS: R2Bucket;
    GENERATION_PROGRESS: DurableObjectNamespace;

    APP_URL: string;
    DEFAULT_LOCALE: string;

    RESEND_API_KEY?: string;
    RESEND_FROM_EMAIL?: string;

    PAYPAL_CLIENT_ID?: string;
    PAYPAL_CLIENT_SECRET?: string;
    PAYPAL_MODE?: string;

    MIDTRANS_SERVER_KEY?: string;
    MIDTRANS_CLIENT_KEY?: string;
    MIDTRANS_IS_PRODUCTION?: string;

    NOWPAYMENTS_API_KEY?: string;
    NOWPAYMENTS_IPN_SECRET?: string;

    ELEVENLABS_API_KEY?: string;
    AZURE_TTS_KEY?: string;
    AZURE_TTS_REGION?: string;

    // NVIDIA NIM — satu API key NIM bisa dipakai lintas model (chat completion,
    // TTS). Pool key spesifik-per-model tetap didukung lewat NVIDIA_API_KEY_MAP
    // kalau suatu saat perlu (lihat lib/ai/nvidia.ts), tapi satu key umum cukup
    // untuk mulai.
    NVIDIA_API_KEY?: string;

    // RunPod Serverless — endpoint video generation self-hosted (Wan 2.7 / LTX-2.3).
    // Belum dikonfigurasi sampai pod-nya benar-benar di-deploy di RunPod.
    RUNPOD_API_KEY?: string;
    RUNPOD_ENDPOINT_ID?: string;

    // Header rahasia yang harus dikirim scheduler eksternal ke
    // POST /api/ai/jobs/finalize-video — bukan endpoint publik.
    CRON_SECRET?: string;

    // Opsional — kalau diisi, smart-engine.ts akan pakai SmartEngineWsClient
    // ke sini (mis. wss://axto.io/engine) sebagai jalur utama, bukan panggil
    // NVIDIA NIM/RunPod langsung. Kosongkan kalau belum ada engine eksternal.
    EXTERNAL_ENGINE_WS_URL?: string;
    EXTERNAL_ENGINE_WS_TOKEN?: string;

    // Master key (base64, 256-bit) buat enkripsi credential yang disimpan di
    // tabel api_credentials — generate SEKALI (`openssl rand -base64 32`),
    // jangan pernah diganti kalau sudah ada credential tersimpan (gak akan
    // bisa didekripsi lagi). Lihat src/lib/crypto/secrets.ts.
    CREDENTIALS_ENCRYPTION_KEY?: string;
  }
}

export {};
