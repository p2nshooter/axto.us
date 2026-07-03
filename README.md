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
npm run generate:seed        # membuat seed/seed.sql dari src/content/*
npm run db:migrate:local     # migrasi skema ke D1 lokal (simulasi)
npm run db:seed:local        # isi data (kategori, buku, admin) ke D1 lokal
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

`.github/workflows/deploy.yml` otomatis build, migrasi skema D1, isi data (seed), deploy ke
Cloudflare, lalu sync secret aplikasi — setiap push ke branch `main`. Perlu 2 secret di GitHub
repo (Settings → Secrets and variables → Actions):

| Secret | Keterangan |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Token dengan izin **Account → Workers Scripts: Edit**, **Account → D1: Edit**, **Account → Workers R2 Storage: Edit**, **Account → Workers KV Storage: Edit**, dan **Zone → DNS: Edit** + **Zone → Zone: Read** (di-scope ke zona `axto.us`, dibutuhkan untuk custom domain otomatis) |
| `CLOUDFLARE_ACCOUNT_ID` | Account ID Cloudflare Anda |

`axto.us` di-bind langsung sebagai custom domain Worker lewat `routes` di `wrangler.jsonc` —
tidak perlu setting CNAME manual, Cloudflare yang mengatur DNS-nya otomatis saat deploy
(asalkan token punya izin Zone di atas).

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
| `RESEND_API_KEY`, `RESEND_FROM_EMAIL` | Email reset password & welcome email. Tanpa ini, link reset hanya tercatat di log server |
| `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, `PAYPAL_MODE` (`sandbox`/`live`) | Pembayaran PayPal |
| `MIDTRANS_SERVER_KEY`, `MIDTRANS_CLIENT_KEY`, `MIDTRANS_IS_PRODUCTION` | Pembayaran Midtrans (kartu/bank/e-wallet) |
| `NOWPAYMENTS_API_KEY`, `NOWPAYMENTS_IPN_SECRET` | Pembayaran crypto (BTC/ETH/BNB/SOL/DOGE/USDT) via [NOWPayments](https://nowpayments.io) |
| `ELEVENLABS_API_KEY` / `AZURE_TTS_KEY`+`AZURE_TTS_REGION` | *(opsional)* AI Voice premium — tanpa ini otomatis fallback ke Web Speech API browser (gratis) |
| `ADMIN_BOOTSTRAP_EMAIL`, `ADMIN_BOOTSTRAP_PASSWORD` | *(opsional)* Membuat 1 akun admin utama otomatis saat deploy — lihat bagian "Akun admin awal" di bawah |

Tanpa secret pembayaran di atas, halaman checkout akan menampilkan pesan error yang jelas
("belum dikonfigurasi") alih-alih pura-pura berhasil — tidak ada pembayaran yang di-mock.

## Konten e-book

Semua cerita di `src/content/stories.ts` adalah tulisan original (bukan hasil scraping situs
lain) — 11 cerita di 9 kategori, masing-masing dengan halaman EN/ID dan kuis. Admin bisa
menambah/mengubah/menghapus buku sepenuhnya lewat Portal Admin (`/admin/books`), tidak ada
yang hardcode di kode.

## Akun admin awal

Dua cara membuat akun admin, keduanya tidak pernah menaruh password asli di kode/git:

1. **Akun admin utama (direkomendasikan):** tambahkan secret `ADMIN_BOOTSTRAP_EMAIL` dan
   `ADMIN_BOOTSTRAP_PASSWORD` di GitHub Actions. Step "Bootstrap primary admin account" di
   `deploy.yml` akan meng-hash password itu (PBKDF2, tidak pernah plaintext) dan
   memasukkannya ke D1 sekali saja saat deploy berikutnya. Karena pakai `INSERT OR IGNORE`
   dengan id tetap, kalau admin nanti ganti email/password sendiri lewat `/admin/settings`,
   deploy selanjutnya **tidak** akan menimpanya kembali.
2. **Akun bootstrap fallback:** `seed/seed.sql` juga membuat 1 akun admin (email
   `admin@axto.us`) dengan password acak yang dicetak sekali oleh `npm run generate:seed`
   dan tidak disimpan di file manapun.

**Login admin tersembunyi:** halaman `/admin-login` tidak ditautkan di navigasi manapun.
Untuk membukanya, klik teks copyright di footer landing page 5x dalam 3 detik — muncul link
kecil "Admin" di sebelahnya. Halaman ini juga diberi `noindex` agar tidak muncul di mesin
pencari. Ini hanya menyembunyikan pintu masuknya dari tampilan publik — batas keamanan
sebenarnya tetap pengecekan role admin di server pada setiap route `/admin/*`.

Admin bisa mengganti email dan password akunnya sendiri kapan saja lewat `/admin/settings`
(perlu memasukkan password saat ini untuk konfirmasi kedua perubahan tersebut).

## Struktur proyek

```
src/
  app/            # routes (landing, auth, /app client portal, /admin admin portal, /api)
  components/      # UI per area (landing, auth, portal, admin, reader)
  lib/             # db (drizzle), auth, i18n, payments, data access
  content/         # cerita + kategori + penulis (sumber seed)
migrations/         # schema D1 (drizzle-kit generate)
seed/               # data konten: kategori, buku, admin (generate:seed) — re-run tiap deploy
scripts/            # generate-seed.ts
```
