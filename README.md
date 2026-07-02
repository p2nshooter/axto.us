# AXTO — Adventures eXplore Together, Unlimited Stories

Platform e-book anak dengan AI Voice dan multi-bahasa, dibangun dengan Next.js dan di-deploy
sebagai Cloudflare Worker (Pages/Workers + D1 + R2 + KV) lewat [OpenNext](https://opennext.js.org/cloudflare).

## Stack

- **Next.js 15** (App Router) + TypeScript + Tailwind CSS
- **Cloudflare Workers** via `@opennextjs/cloudflare` (D1 database, R2 storage, KV cache)
- **Drizzle ORM** untuk schema & migrasi D1
- Auth sendiri (bukan pihak ketiga): password di-hash dengan PBKDF2 (Web Crypto), sesi
  tersimpan di D1 (bisa di-revoke), tanpa dependency eksternal
- Pembayaran: **PayPal**, **Midtrans**, dan **crypto** (BTC/ETH/BNB/SOL/DOGE/USDT via NOWPayments)
- AI Voice: Web Speech API browser (gratis, tanpa API key), dengan arsitektur siap pakai
  untuk provider premium (ElevenLabs/Azure) bila API key diisi nanti

## Menjalankan secara lokal

```bash
npm install
npm run generate:seed        # membuat migrations/seed.sql dari src/content/*
npm run db:migrate:local     # migrasi + seed ke D1 lokal (simulasi)
npm run dev                  # Next dev server biasa (fitur non-Cloudflare)
# atau, untuk simulasi penuh dengan binding D1/R2/KV:
npm run cf:build && npx wrangler dev
```

## Setup Cloudflare (sekali saja)

1. `wrangler login`
2. `wrangler d1 create axto_db` → salin `database_id` ke `wrangler.jsonc`
3. `wrangler r2 bucket create axto-assets`
4. `wrangler r2 bucket create axto-us-opennext-cache`
5. `wrangler kv namespace create AXTO_KV` → salin `id` ke `wrangler.jsonc`
6. Set secrets (lihat daftar di bawah) dengan `wrangler secret put <NAMA>`

## Deploy otomatis (GitHub Actions)

`.github/workflows/deploy.yml` otomatis build, migrasi D1, dan deploy ke Cloudflare setiap
push ke branch `main`. Perlu 2 secret di GitHub repo (Settings → Secrets and variables → Actions):

| Secret | Keterangan |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Token dengan izin Workers Scripts + D1 + R2 (buat di dashboard Cloudflare) |
| `CLOUDFLARE_ACCOUNT_ID` | Account ID Cloudflare Anda |

## Secrets aplikasi (wajib diisi agar fitur benar-benar live)

Ada 2 cara mengisi secret ini — pilih salah satu:

1. **Otomatis lewat GitHub Actions (direkomendasikan):** tambahkan secret dengan nama yang
   sama persis di tabel bawah ini ke **Settings → Secrets and variables → Actions** pada repo
   GitHub. Step "Sync Worker secrets" di `deploy.yml` akan otomatis push tiap secret yang ada
   ke Worker via `wrangler secret put` setiap kali deploy. Secret yang belum diisi akan
   di-skip (fitur terkait otomatis nonaktif/fallback, bukan error).
2. **Manual:** jalankan `wrangler secret put <NAMA>` sendiri dari terminal (perlu `wrangler login`),
   atau isi lewat dashboard Cloudflare Workers → Settings → Variables.

| Secret | Untuk fitur |
|---|---|
| `JWT_SECRET` | *(disiapkan untuk kebutuhan masa depan; sesi saat ini sudah aman via token acak + hash di D1)* |
| `RESEND_API_KEY`, `RESEND_FROM_EMAIL` | Email reset password & welcome email. Tanpa ini, link reset hanya tercatat di log server |
| `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_MODE` (`sandbox`/`live`) | Pembayaran PayPal |
| `MIDTRANS_SERVER_KEY`, `MIDTRANS_CLIENT_KEY`, `MIDTRANS_IS_PRODUCTION` | Pembayaran Midtrans (kartu/bank/e-wallet) |
| `NOWPAYMENTS_API_KEY`, `NOWPAYMENTS_IPN_SECRET` | Pembayaran crypto (BTC/ETH/BNB/SOL/DOGE/USDT) via [NOWPayments](https://nowpayments.io) |
| `ELEVENLABS_API_KEY` / `AZURE_TTS_KEY`+`AZURE_TTS_REGION` | *(opsional)* AI Voice premium — tanpa ini otomatis fallback ke Web Speech API browser (gratis) |

Tanpa secret pembayaran di atas, halaman checkout akan menampilkan pesan error yang jelas
("belum dikonfigurasi") alih-alih pura-pura berhasil — tidak ada pembayaran yang di-mock.

## Konten e-book

Semua cerita di `src/content/stories.ts` adalah tulisan original (bukan hasil scraping situs
lain) — 11 cerita di 9 kategori, masing-masing dengan halaman EN/ID dan kuis. Admin bisa
menambah/mengubah/menghapus buku sepenuhnya lewat Portal Admin (`/admin/books`), tidak ada
yang hardcode di kode.

## Akun admin awal

Satu akun admin dibuat otomatis oleh `migrations/seed.sql` (email `admin@axto.us`). Password
acak dicetak sekali oleh `npm run generate:seed` — **tidak disimpan di file manapun**. Segera
login dan ganti password lewat `/admin/settings` setelah deploy pertama.

## Struktur proyek

```
src/
  app/            # routes (landing, auth, /app client portal, /admin admin portal, /api)
  components/      # UI per area (landing, auth, portal, admin, reader)
  lib/             # db (drizzle), auth, i18n, payments, data access
  content/         # cerita + kategori + penulis (sumber seed)
migrations/         # schema D1 (drizzle-kit generate) + seed.sql (generate:seed)
scripts/            # generate-seed.ts
```
