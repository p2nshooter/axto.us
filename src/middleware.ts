import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE } from '@/lib/auth/session';

// Fast, presence-only check to bounce anonymous visitors early.
// The real session + role check (DB-backed, revocable) happens server-side
// in each protected layout via getCurrentUser() — this is defense in depth,
// not the source of truth.
export function middleware(req: NextRequest) {
  const hasSession = req.cookies.has(SESSION_COOKIE);
  const isAdminPath = req.nextUrl.pathname.startsWith('/admin');

  if (!hasSession && (req.nextUrl.pathname.startsWith('/app') || isAdminPath)) {
    const url = new URL(isAdminPath ? '/admin-login' : '/login', req.url);
    if (!isAdminPath) url.searchParams.set('next', req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/app/:path*', '/admin/:path*']
};
