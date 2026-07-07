/**
 * Error code terstruktur — dipakai supaya tiap error API punya identitas stabil
 * (`code`) yang bisa dirujuk di support/log, terpisah dari `message` yang bebas
 * berubah redaksinya. Lempar AppError dari mana saja (route, lib/), withErrorHandling
 * di api-handler.ts otomatis mengubahnya jadi respons JSON {error, code} yang konsisten.
 *
 * Route BARU sebaiknya throw AppError langsung daripada bikin NextResponse.json
 * manual per kasus. Route LAMA (school/consent/dll) belum semua dipindah ke pola
 * ini — bisa dirapikan bertahap, bukan sekali sweep semua file.
 */
export const ErrorCodes = {
  UNAUTHORIZED: 'ERR_UNAUTHORIZED',
  FORBIDDEN_ADMIN_REQUIRED: 'ERR_FORBIDDEN_ADMIN_REQUIRED',
  FORBIDDEN_SCHOOL_ADMIN_REQUIRED: 'ERR_FORBIDDEN_SCHOOL_ADMIN_REQUIRED',
  VALIDATION_FAILED: 'ERR_VALIDATION_FAILED',
  NOT_FOUND: 'ERR_NOT_FOUND',
  CONFLICT: 'ERR_CONFLICT',
  CREDENTIAL_MISSING: 'ERR_CREDENTIAL_MISSING',
  EXTERNAL_PROVIDER_ERROR: 'ERR_EXTERNAL_PROVIDER_ERROR',
  INTERNAL: 'ERR_INTERNAL'
} as const;

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];

export class AppError extends Error {
  code: ErrorCode;
  status: number;

  constructor(code: ErrorCode, message: string, status = 400) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.status = status;
  }
}
