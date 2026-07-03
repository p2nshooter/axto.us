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
    role: text('role', { enum: ['user', 'admin'] }).notNull().default('user'),
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
    loginSource: text('login_source', { enum: ['client', 'admin'] }).notNull().default('client'),
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
