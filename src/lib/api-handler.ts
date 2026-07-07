import { NextResponse } from 'next/server';
import { AppError, ErrorCodes } from './errors';

/**
 * Wraps a route handler so an unexpected throw never reaches the client as an
 * empty body. Without this, a runtime error inside the handler surfaces in the
 * browser as "Unexpected end of JSON input" (from `await res.json()` on an
 * empty response), which is impossible to diagnose from the client side.
 *
 * Every error response now also carries a stable `code` (see lib/errors.ts) —
 * `throw new AppError(...)` anywhere inside the handler for a specific code
 * status combo; anything else (plain Error, runtime crash) falls back to
 * ERR_INTERNAL/500. The `detail` field carries the real error message (never
 * a secret — the auth routes only ever throw on DB/crypto/runtime failures,
 * not on user input) so a failing production request is diagnosable from the
 * network tab alone.
 */
export function withErrorHandling<T extends (...args: any[]) => Promise<Response>>(handler: T): T {
  return (async (...args: Parameters<T>) => {
    try {
      return await handler(...args);
    } catch (err) {
      if (err instanceof AppError) {
        console.error(`API route error [${err.code}]:`, err.message);
        return NextResponse.json({ error: err.message, code: err.code }, { status: err.status });
      }
      const detail = err instanceof Error ? err.message : String(err);
      console.error('API route error:', err);
      return NextResponse.json(
        { error: 'Terjadi kesalahan di server. Silakan coba lagi.', code: ErrorCodes.INTERNAL, detail },
        { status: 500 }
      );
    }
  }) as T;
}
