import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().trim().min(2, 'Nama minimal 2 karakter').max(80),
  email: z.string().trim().toLowerCase().email('Email tidak valid'),
  password: z.string().min(8, 'Password minimal 8 karakter').max(200),
  locale: z.string().min(2).max(5).optional()
});

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email('Email tidak valid'),
  password: z.string().min(1, 'Password wajib diisi')
});

export const forgotPasswordSchema = z.object({
  email: z.string().trim().toLowerCase().email('Email tidak valid')
});

export const resetPasswordSchema = z.object({
  token: z.string().min(10),
  password: z.string().min(8, 'Password minimal 8 karakter').max(200)
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8, 'Password minimal 8 karakter').max(200)
});

export const changeEmailSchema = z.object({
  currentPassword: z.string().min(1),
  newEmail: z.string().trim().toLowerCase().email('Email tidak valid')
});

export const updateProfileSchema = z.object({
  name: z.string().trim().min(2).max(80).optional(),
  locale: z.string().min(2).max(5).optional()
});

export const adminBookPageSchema = z.object({
  illustrationSeed: z.string().trim().min(1).max(60),
  textEn: z.string().trim().min(1),
  textId: z.string().trim().min(1)
});

export const adminQuizQuestionSchema = z.object({
  questionEn: z.string().trim().min(1),
  questionId: z.string().trim().min(1),
  optionsEn: z.array(z.string().trim().min(1)).min(2).max(6),
  optionsId: z.array(z.string().trim().min(1)).min(2).max(6),
  correctIndex: z.number().int().min(0),
  xpReward: z.number().int().min(0).max(1000).default(10)
});

export const adminBookSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(2)
    .max(80)
    .regex(/^[a-z0-9-]+$/, 'Slug hanya boleh huruf kecil, angka, dan tanda hubung.'),
  titleEn: z.string().trim().min(1).max(150),
  titleId: z.string().trim().min(1).max(150),
  descriptionEn: z.string().trim().min(1).max(1000),
  descriptionId: z.string().trim().min(1).max(1000),
  categoryId: z.string().trim().min(1),
  authorId: z.string().trim().min(1).nullable().optional(),
  coverEmoji: z.string().trim().min(1).max(8),
  coverPalette: z.string().trim().min(1).max(30),
  ageMin: z.number().int().min(0).max(18),
  ageMax: z.number().int().min(0).max(18),
  isPremium: z.boolean(),
  status: z.enum(['draft', 'published']),
  pages: z.array(adminBookPageSchema).min(1).max(60),
  quiz: z.array(adminQuizQuestionSchema).max(10)
});

export const adminCategorySchema = z.object({
  slug: z
    .string()
    .trim()
    .min(2)
    .max(50)
    .regex(/^[a-z0-9-]+$/, 'Slug hanya boleh huruf kecil, angka, dan tanda hubung.'),
  icon: z.string().trim().min(1).max(8),
  nameEn: z.string().trim().min(1).max(60),
  nameId: z.string().trim().min(1).max(60),
  sortOrder: z.number().int().min(0).default(0)
});

export const adminAuthorSchema = z.object({
  name: z.string().trim().min(1).max(100),
  bio: z.string().trim().max(500).optional(),
  avatarSeed: z.string().trim().min(1).max(60)
});

export const adminPromoSchema = z.object({
  code: z
    .string()
    .trim()
    .min(3)
    .max(30)
    .regex(/^[A-Z0-9-]+$/, 'Kode hanya boleh huruf kapital, angka, dan tanda hubung.'),
  discountPercent: z.number().int().min(1).max(100),
  maxUses: z.number().int().min(1).nullable().optional(),
  active: z.boolean().default(true)
});

export const adminUserUpdateSchema = z.object({
  role: z.enum(['user', 'admin']).optional(),
  plan: z.enum(['free', 'premium_monthly', 'premium_yearly', 'lifetime', 'family', 'school']).optional()
});
