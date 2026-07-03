import { NextResponse } from 'next/server';

/**
 * Wraps a route handler so an unexpected throw never reaches the client as an
 * empty body. Without this, a runtime error inside the handler surfaces in the
 * browser as "Unexpected end of JSON input" (from `await res.json()` on an
 * empty response), which is impossible to diagnose from the client side.
 *
 * The `detail` field carries the real error message (never a secret — the auth
 * routes only ever throw on DB/crypto/runtime failures, not on user input) so
 * a failing production request is diagnosable from the network tab alone.
 */
export function withErrorHandling<T extends (...args: any[]) => Promise<Response>>(handler: T): T {
  return (async (...args: Parameters<T>) => {
    try {
      return await handler(...args);
    } catch (err) {
      const detail = err instanceof Error ? err.message : String(err);
      console.error('API route error:', err);
      return NextResponse.json(
        { error: 'Terjadi kesalahan di server. Silakan coba lagi.', detail },
        { status: 500 }
      );
    }
  }) as T;
}
