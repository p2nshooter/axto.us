import { sqliteTable, text, integer, real, uniqueIndex, index } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

const timestamps = {
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`),
  updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`)
};

export const users = sqliteTable(
  'users',
  {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    passwordHash: text('password_hash').notNull(),
    role: text('role', { enum: ['user', 'admin', 'school_admin'] }).notNull().default('user'),
    locale: text('locale').notNull().default('id'),
    avatarSeed: text('avatar_seed').notNull(),
    plan: text('plan', { enum: ['free', 'premium_monthly', 'premium_yearly', 'lifetime', 'family', 'school'] })
      .notNull()
      .default('free'),
    planExpiresAt: integer('plan_expires_at', { mode: 'timestamp_ms' }),
    emailVerifiedAt: integer('email_verified_at', { mode: 'timestamp_ms' }),
    ...timestamps
  },
  (t) => ({
    emailIdx: uniqueIndex('users_email_idx').on(t.email)
  })
);

export const sessions = sqliteTable(
  'sessions',
  {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    expiresAt: integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
    userAgent: text('user_agent'),
    // Which door this session was created through. Admin panel access requires
    // both role='admin' AND loginSource='admin' — logging in with correct
    // admin credentials via the public /login form only ever grants a
    // 'client' session, never admin access. See requireAdmin() in guards.ts.
    // Same defense-in-depth applies to school_admin + loginSource='school',
    // see requireSchoolAdmin() in guards.ts.
    loginSource: text('login_source', { enum: ['client', 'admin', 'school'] }).notNull().default('client'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`)
  },
  (t) => ({
    userIdx: index('sessions_user_idx').on(t.userId)
  })
);

export const passwordResetTokens = sqliteTable(
  'password_reset_tokens',
  {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    tokenHash: text('token_hash').notNull(),
    expiresAt: integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
    usedAt: integer('used_at', { mode: 'timestamp_ms' }),
    createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`)
  },
  (t) => ({
    userIdx: index('prt_user_idx').on(t.userId)
  })
);

export const childProfiles = sqliteTable('child_profiles', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  age: integer('age'),
  avatarSeed: text('avatar_seed').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`)
});

export const categories = sqliteTable('categories', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  icon: text('icon').notNull(),
  nameEn: text('name_en').notNull(),
  nameId: text('name_id').notNull(),
  sortOrder: integer('sort_order').notNull().default(0)
});

export const authors = sqliteTable('authors', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  bio: text('bio'),
  avatarSeed: text('avatar_seed').notNull(),
  isStaff: integer('is_staff', { mode: 'boolean' }).notNull().default(true),
  ...timestamps
});

export const books = sqliteTable(
  'books',
  {
    id: text('id').primaryKey(),
    slug: text('slug').notNull().unique(),
    titleEn: text('title_en').notNull(),
    titleId: text('title_id').notNull(),
    descriptionEn: text('description_en').notNull(),
    descriptionId: text('description_id').notNull(),
    categoryId: text('category_id').notNull().references(() => categories.id),
    authorId: text('author_id').references(() => authors.id),
    coverPalette: text('cover_palette').notNull().default('sunrise'),
    coverEmoji: text('cover_emoji').notNull().default('📖'),
    ageMin: integer('age_min').notNull().default(3),
    ageMax: integer('age_max').notNull().default(10),
    isPremium: integer('is_premium', { mode: 'boolean' }).notNull().default(false),
    status: text('status', { enum: ['draft', 'published'] }).notNull().default('published'),
    pageCount: integer('page_count').notNull().default(0),
    readCount: integer('read_count').notNull().default(0),
    ...timestamps
  },
  (t) => ({
    categoryIdx: index('books_category_idx').on(t.categoryId),
    statusIdx: index('books_status_idx').on(t.status)
  })
);

export const bookPages = sqliteTable(
  'book_pages',
  {
    id: text('id').primaryKey(),
    bookId: text('book_id').notNull().references(() => books.id, { onDelete: 'cascade' }),
    pageNumber: integer('page_number').notNull(),
    illustrationSeed: text('illustration_seed').notNull(),
    textEn: text('text_en').notNull(),
    textId: text('text_id').notNull(),
    textEs: text('text_es'),
    textFr: text('text_fr'),
    textAr: text('text_ar'),
    textJa: text('text_ja')
  },
  (t) => ({
    bookIdx: index('pages_book_idx').on(t.bookId),
    bookPageUnique: uniqueIndex('pages_book_page_unique').on(t.bookId, t.pageNumber)
  })
);

export const quizQuestions = sqliteTable(
  'quiz_questions',
  {
    id: text('id').primaryKey(),
    bookId: text('book_id').notNull().references(() => books.id, { onDelete: 'cascade' }),
    sortOrder: integer('sort_order').notNull().default(0),
    questionEn: text('question_en').notNull(),
    questionId: text('question_id').notNull(),
    optionsEnJson: text('options_en_json').notNull(),
    optionsIdJson: text('options_id_json').notNull(),
    correctIndex: integer('correct_index').notNull(),
    xpReward: integer('xp_reward').notNull().default(10)
  },
  (t) => ({
    bookIdx: index('quiz_book_idx').on(t.bookId)
  })
);

export const favorites = sqliteTable(
  'favorites',
  {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    bookId: text('book_id').notNull().references(() => books.id, { onDelete: 'cascade' }),
    createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`)
  },
  (t) => ({
    userBookUnique: uniqueIndex('favorites_user_book_unique').on(t.userId, t.bookId)
  })
);

export const readingProgress = sqliteTable(
  'reading_progress',
  {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    profileId: text('profile_id').references(() => childProfiles.id, { onDelete: 'cascade' }),
    bookId: text('book_id').notNull().references(() => books.id, { onDelete: 'cascade' }),
    currentPage: integer('current_page').notNull().default(1),
    xpEarned: integer('xp_earned').notNull().default(0),
    quizScore: integer('quiz_score'),
    completedAt: integer('completed_at', { mode: 'timestamp_ms' }),
    updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`)
  },
  (t) => ({
    userBookUnique: uniqueIndex('progress_user_book_unique').on(t.userId, t.bookId)
  })
);

export const orders = sqliteTable(
  'orders',
  {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id),
    plan: text('plan', { enum: ['premium_monthly', 'premium_yearly', 'lifetime', 'family', 'school'] }).notNull(),
    amountUsd: real('amount_usd').notNull(),
    provider: text('provider', { enum: ['paypal', 'midtrans', 'crypto'] }).notNull(),
    providerRef: text('provider_ref'),
    status: text('status', { enum: ['pending', 'paid', 'failed', 'expired', 'refunded'] })
      .notNull()
      .default('pending'),
    cryptoCurrency: text('crypto_currency'),
    cryptoPayAddress: text('crypto_pay_address'),
    cryptoPayAmount: text('crypto_pay_amount'),
    promoCode: text('promo_code'),
    ...timestamps
  },
  (t) => ({
    userIdx: index('orders_user_idx').on(t.userId),
    statusIdx: index('orders_status_idx').on(t.status)
  })
);

export const promoCodes = sqliteTable('promo_codes', {
  id: text('id').primaryKey(),
  code: text('code').notNull().unique(),
  discountPercent: integer('discount_percent').notNull(),
  maxUses: integer('max_uses'),
  usedCount: integer('used_count').notNull().default(0),
  expiresAt: integer('expires_at', { mode: 'timestamp_ms' }),
  active: integer('active', { mode: 'boolean' }).notNull().default(true),
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`)
});

export const auditLog = sqliteTable(
  'audit_log',
  {
    id: text('id').primaryKey(),
    actorUserId: text('actor_user_id').references(() => users.id),
    action: text('action').notNull(),
    targetType: text('target_type'),
    targetId: text('target_id'),
    metaJson: text('meta_json'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`)
  },
  (t) => ({
    actorIdx: index('audit_actor_idx').on(t.actorUserId)
  })
);

export const generatedStories = sqliteTable(
  'generated_stories',
  {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    childName: text('child_name').notNull(),
    childAge: integer('child_age').notNull(),
    favoriteAnimal: text('favorite_animal').notNull(),
    favoriteColor: text('favorite_color').notNull(),
    contentJson: text('content_json').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`)
  },
  (t) => ({
    userIdx: index('generated_stories_user_idx').on(t.userId)
  })
);

// --- Program Sekolah ---
// Lihat arsitektur-fitur-program-sekolah-axto.md untuk konteks bisnis lengkap.

export const schools = sqliteTable(
  'schools',
  {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    country: text('country').notNull(),
    city: text('city'),
    logoUrl: text('logo_url'),
    description: text('description'),
    // Dipakai di link/kode registrasi siswa dan sebagai prefix nomor registrasi siswa.
    registrationCode: text('registration_code').notNull(),
    // axto harus approve sebelum sekolah tampil di direktori publik & bisa menerima siswa.
    status: text('status', { enum: ['pending', 'approved', 'suspended'] }).notNull().default('pending'),
    payoutEmail: text('payout_email'),
    ...timestamps
  },
  (t) => ({
    registrationCodeIdx: uniqueIndex('schools_registration_code_idx').on(t.registrationCode),
    statusIdx: index('schools_status_idx').on(t.status)
  })
);

export const schoolAdmins = sqliteTable(
  'school_admins',
  {
    id: text('id').primaryKey(),
    schoolId: text('school_id').notNull().references(() => schools.id, { onDelete: 'cascade' }),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    // 'owner' dibuat otomatis saat sekolah daftar. 'staff' untuk multi-admin —
    // skema sudah siap, UI untuk menambah staff belum dibangun di v1.
    role: text('role', { enum: ['owner', 'staff'] }).notNull().default('owner'),
    createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`)
  },
  (t) => ({
    schoolUserUnique: uniqueIndex('school_admins_school_user_unique').on(t.schoolId, t.userId),
    userIdx: index('school_admins_user_idx').on(t.userId)
  })
);

export const schoolStudents = sqliteTable(
  'school_students',
  {
    id: text('id').primaryKey(),
    schoolId: text('school_id').notNull().references(() => schools.id, { onDelete: 'cascade' }),
    userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    // Digenerate otomatis saat kedua syarat aktivasi terpenuhi — lihat activatedAt.
    registrationNumber: text('registration_number'),
    status: text('status', { enum: ['pending', 'active', 'inactive', 'rejected'] })
      .notNull()
      .default('pending'),
    appliedAt: integer('applied_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`),
    // Sekolah sudah approve, tapi belum tentu aktif kalau consent ortu belum masuk.
    schoolApprovedAt: integer('school_approved_at', { mode: 'timestamp_ms' }),
    // Diisi begitu KEDUA syarat terpenuhi (approve sekolah + consent ortu terkonfirmasi).
    // Saat itu juga registrationNumber dibuat dan plan user di-upgrade ke 'school'.
    activatedAt: integer('activated_at', { mode: 'timestamp_ms' }),
    deactivatedAt: integer('deactivated_at', { mode: 'timestamp_ms' })
  },
  (t) => ({
    schoolUserUnique: uniqueIndex('school_students_school_user_unique').on(t.schoolId, t.userId),
    schoolIdx: index('school_students_school_idx').on(t.schoolId),
    userIdx: index('school_students_user_idx').on(t.userId),
    registrationNumberIdx: uniqueIndex('school_students_reg_number_idx').on(t.registrationNumber)
  })
);

export const parentalConsents = sqliteTable(
  'parental_consents',
  {
    id: text('id').primaryKey(),
    schoolStudentId: text('school_student_id')
      .notNull()
      .references(() => schoolStudents.id, { onDelete: 'cascade' }),
    parentEmail: text('parent_email').notNull(),
    tokenHash: text('token_hash').notNull(),
    status: text('status', { enum: ['pending', 'confirmed'] }).notNull().default('pending'),
    confirmedAt: integer('confirmed_at', { mode: 'timestamp_ms' }),
    expiresAt: integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
    createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`)
  },
  (t) => ({
    schoolStudentIdx: index('parental_consents_school_student_idx').on(t.schoolStudentId),
    tokenIdx: uniqueIndex('parental_consents_token_idx').on(t.tokenHash)
  })
);

// Dicatat tiap kali pembayaran terkait siswa sekolah lunas. Payout mingguan
// sendiri (proses transfer ke sekolah) belum diotomasi di v1 — baris di sini
// baru menandai *berapa yang harus dibayar*, belum melakukan pembayarannya.
export const affiliateCommissions = sqliteTable(
  'affiliate_commissions',
  {
    id: text('id').primaryKey(),
    schoolId: text('school_id').notNull().references(() => schools.id, { onDelete: 'cascade' }),
    schoolStudentId: text('school_student_id').references(() => schoolStudents.id, { onDelete: 'set null' }),
    orderId: text('order_id').references(() => orders.id, { onDelete: 'set null' }),
    source: text('source', { enum: ['subscription', 'video'] }).notNull(),
    amountUsd: real('amount_usd').notNull(),
    payoutStatus: text('payout_status', { enum: ['pending', 'paid'] }).notNull().default('pending'),
    paidAt: integer('paid_at', { mode: 'timestamp_ms' }),
    createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull().default(sql`(unixepoch() * 1000)`)
  },
  (t) => ({
    schoolIdx: index('affiliate_commissions_school_idx').on(t.schoolId),
    payoutStatusIdx: index('affiliate_commissions_payout_status_idx').on(t.payoutStatus)
  })
);

// --- Kredensial API (dikelola lewat portal admin) ---
// Nilai asli TIDAK PERNAH disimpan polos — dienkripsi AES-GCM pakai
// CREDENTIALS_ENCRYPTION_KEY (1 secret master di Cloudflare, bukan di DB).
// Lihat src/lib/crypto/secrets.ts. Kalau row untuk satu provider tidak ada/
// tidak aktif, kode fallback ke env var biasa (mis. NVIDIA_API_KEY) — lihat
// src/lib/ai/credentials.ts.
export const apiCredentials = sqliteTable(
  'api_credentials',
  {
    id: text('id').primaryKey(),
    // Bebas/tidak enum — provider baru bisa nambah kapan saja tanpa migration.
    // Konvensi yang dipakai kode sekarang: 'nvidia', 'runpod_api_key',
    // 'runpod_endpoint_id', 'external_engine_ws_url', 'external_engine_ws_token'.
    provider: text('provider').notNull(),
    label: text('label').notNull(),
    encryptedValue: text('encrypted_value').notNull(),
    // 4 karakter terakhir buat ditampilkan di UI — BUKAN buat validasi apa pun.
    maskedPreview: text('masked_preview').notNull(),
    isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
    createdByUserId: text('created_by_user_id').references(() => users.id, { onDelete: 'set null' }),
    ...timestamps
  },
  (t) => ({
    providerIdx: index('api_credentials_provider_idx').on(t.provider)
  })
);
// Satu tabel generik untuk 3 tipe job (teks/narasi/video) daripada 3 tabel
// terpisah — payload spesifik-tipe disimpan sebagai JSON di inputJson/outputTextJson.
// type='video' berjalan async lewat RunPod Serverless (self-hosted Wan2.7/LTX),
// difinalisasi oleh POST /api/ai/jobs/finalize-video yang dipanggil scheduler
// eksternal (lihat catatan di wrangler.jsonc) — bukan native Cloudflare Cron.
export const contentGenerationJobs = sqliteTable(
  'content_generation_jobs',
  {
    id: text('id').primaryKey(),
    createdByUserId: text('created_by_user_id').references(() => users.id, { onDelete: 'set null' }),
    type: text('type', { enum: ['story_text', 'narration_audio', 'video'] }).notNull(),
    status: text('status', { enum: ['queued', 'processing', 'completed', 'failed'] }).notNull().default('queued'),
    inputJson: text('input_json').notNull(),
    // ID job di sisi RunPod — dipakai cron buat polling status (cuma dipakai type='video').
    providerJobId: text('provider_job_id'),
    // Key R2 tempat hasil disimpan (audio/video), null kalau belum selesai/gagal.
    outputAssetKey: text('output_asset_key'),
    // Untuk story_text, hasilnya teks biasa, disimpan langsung di sini (bukan file R2).
    outputTextJson: text('output_text_json'),
    errorMessage: text('error_message'),
    ...timestamps
  },
  (t) => ({
    statusIdx: index('content_jobs_status_idx').on(t.status),
    typeIdx: index('content_jobs_type_idx').on(t.type)
  })
);
