export type PlanId = 'premium_monthly' | 'premium_yearly' | 'lifetime' | 'family' | 'school';

export type Plan = {
  id: PlanId;
  amountUsd: number;
  interval: 'month' | 'year' | 'once' | null;
};

// Canonical prices — the server always looks up the amount from here.
// Never trust an amount sent by the client when creating an order.
export const PLANS: Record<PlanId, Plan> = {
  premium_monthly: { id: 'premium_monthly', amountUsd: 4.99, interval: 'month' },
  premium_yearly: { id: 'premium_yearly', amountUsd: 49.99, interval: 'year' },
  lifetime: { id: 'lifetime', amountUsd: 149.99, interval: 'once' },
  family: { id: 'family', amountUsd: 12.99, interval: 'month' },
  school: { id: 'school', amountUsd: 0, interval: null } // custom quote, handled outside checkout
};

export function isPlanId(value: string): value is PlanId {
  return value in PLANS;
}

export function applyPromo(amountUsd: number, discountPercent: number): number {
  const discounted = amountUsd * (1 - discountPercent / 100);
  return Math.round(discounted * 100) / 100;
}
