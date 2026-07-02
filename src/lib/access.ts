import type { SessionUser } from '@/lib/auth/session';

export function hasPremiumAccess(user: Pick<SessionUser, 'plan' | 'planExpiresAt'>): boolean {
  if (user.plan === 'free') return false;
  if (!user.planExpiresAt) return true; // lifetime, family, school (or monthly still within grace via provider)
  return user.planExpiresAt.getTime() > Date.now();
}
