// Extends the OpenNext `CloudflareEnv` type with this project's own bindings & secrets.
// Keep in sync with wrangler.jsonc bindings and the secrets listed in README.md.
declare global {
  interface CloudflareEnv {
    DB: D1Database;
    ASSETS_BUCKET: R2Bucket;
    AXTO_KV: KVNamespace;

    APP_URL: string;
    DEFAULT_LOCALE: string;

    JWT_SECRET: string;

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
  }
}

export {};
