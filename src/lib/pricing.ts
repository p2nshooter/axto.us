export type PlanId = 'premium_monthly' | 'premium_yearly' | 'lifetime' | 'family' | 'school';

export type Plan = {
  id: PlanId;
  amountUsd: number;
  interval: 'month' | 'year' | 'once' | null;
};

export function applyPromo(amountUsd: number, discountPercent: number): number {
  const discounted = amountUsd * (1 - discountPercent / 100);
  return Math.round(discounted * 100) / 100;
}

// --- Program Sekolah ---
// Detail bisnis lengkap: arsitektur-fitur-program-sekolah-axto.md
//
// Siswa yang register lewat sekolah bayar harga premium_yearly dikurangi
// diskon ini, LANGSUNG ke axto (bukan ke sekolah). Sekolah dapat komisi
// afiliasi dari nilai itu, dibayarkan mingguan — uang tidak pernah lewat
// tangan sekolah.
export const SCHOOL_STUDENT_DISCOUNT_PERCENT = 25;
export const SCHOOL_SUBSCRIPTION_COMMISSION_PERCENT = 20;

// Fitur video belum dibangun sama sekali — dua angka di bawah ini sudah
// disepakati lebih dulu, disimpan di sini supaya jadi satu sumber kebenaran
// begitu fitur video mulai dikerjakan (jangan hardcode ulang di tempat lain).
export const SCHOOL_VIDEO_STUDENT_DISCOUNT_PERCENT = 10;
export const SCHOOL_VIDEO_COMMISSION_PERCENT = 10;

const PREMIUM_YEARLY_USD = 49.99;

// Canonical prices — the server always looks up the amount from here.
// Never trust an amount sent by the client when creating an order.
export const PLANS: Record<PlanId, Plan> = {
  premium_monthly: { id: 'premium_monthly', amountUsd: 4.99, interval: 'month' },
  premium_yearly: { id: 'premium_yearly', amountUsd: PREMIUM_YEARLY_USD, interval: 'year' },
  lifetime: { id: 'lifetime', amountUsd: 149.99, interval: 'once' },
  family: { id: 'family', amountUsd: 12.99, interval: 'month' },
  // Bukan lagi custom quote — harga tetap, diturunkan dari premium_yearly.
  school: {
    id: 'school',
    amountUsd: applyPromo(PREMIUM_YEARLY_USD, SCHOOL_STUDENT_DISCOUNT_PERCENT),
    interval: 'year'
  }
};

export function isPlanId(value: string): value is PlanId {
  return value in PLANS;
}

/** Komisi afiliasi yang didapat sekolah dari satu pembayaran langganan siswa. */
export function getSchoolSubscriptionCommission(amountPaidUsd: number): number {
  return Math.round(amountPaidUsd * (SCHOOL_SUBSCRIPTION_COMMISSION_PERCENT / 100) * 100) / 100;
}
