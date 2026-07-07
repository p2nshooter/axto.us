import type { SessionUser } from '@/lib/auth/session';

export function hasPremiumAccess(user: Pick<SessionUser, 'plan' | 'planExpiresAt'>): boolean {
  if (user.plan === 'free') return false;
  if (!user.planExpiresAt) return true; // lifetime, family (or monthly still within grace via provider)
  // Catatan: plan 'school' SELALU punya planExpiresAt (1 tahun dari aktivasi) —
  // lihat activateSchoolStudentIfReady() di lib/schools.ts. Beda dari asumsi lama.
  return user.planExpiresAt.getTime() > Date.now();
}
