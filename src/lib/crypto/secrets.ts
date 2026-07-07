import { toBase64, fromBase64 } from '@/lib/auth/crypto-utils';

/**
 * Enkripsi nilai credential sebelum disimpan di DB. Butuh CREDENTIALS_ENCRYPTION_KEY
 * (master key base64 256-bit, generate SEKALI: `openssl rand -base64 32`, simpan
 * lewat `wrangler secret put CREDENTIALS_ENCRYPTION_KEY`). Kalau master key ini
 * bocor, SEMUA credential di DB ikut bisa didekripsi — perlakukan seketat secret
 * lain, jangan taruh di kode/DB.
 */
async function importMasterKey(masterKeyB64: string): Promise<CryptoKey> {
  const raw = fromBase64(masterKeyB64);
  return crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['encrypt', 'decrypt']);
}

export async function encryptSecret(plaintext: string, masterKeyB64: string): Promise<string> {
  const key = await importMasterKey(masterKeyB64);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(plaintext));

  const combined = new Uint8Array(iv.length + ciphertext.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(ciphertext), iv.length);
  return toBase64(combined); // iv (12 byte) + ciphertext, digabung lalu base64
}

export async function decryptSecret(encoded: string, masterKeyB64: string): Promise<string> {
  const key = await importMasterKey(masterKeyB64);
  const combined = fromBase64(encoded);
  const iv = combined.slice(0, 12);
  const ciphertext = combined.slice(12);
  const plaintextBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext);
  return new TextDecoder().decode(plaintextBuf);
}

/** Buat preview aman ditampilkan di UI, mis. "••••••a91f" — bukan buat validasi apa pun. */
export function maskSecret(plaintext: string): string {
  const tail = plaintext.slice(-4);
  return `••••••${tail}`;
}
