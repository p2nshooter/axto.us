import { NextRequest, NextResponse } from 'next/server';
import { and, eq, like } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { schools } from '@/lib/db/schema';
import { withErrorHandling } from '@/lib/api-handler';

// Publik — dipakai di toggle "Daftar lewat sekolah" pada halaman signup, dan
// nanti di landing page direktori sekolah. Hanya sekolah berstatus 'approved'
// yang boleh muncul di sini (lihat catatan fraud-risk di arsitektur fitur).
export const GET = withErrorHandling(async (req: NextRequest) => {
  const country = req.nextUrl.searchParams.get('country');

  const db = await getDb();
  const conditions = [eq(schools.status, 'approved')];
  if (country) conditions.push(like(schools.country, country));

  const rows = await db
    .select({
      id: schools.id,
      name: schools.name,
      country: schools.country,
      city: schools.city,
      logoUrl: schools.logoUrl
    })
    .from(schools)
    .where(and(...conditions))
    .orderBy(schools.name);

  return NextResponse.json({ schools: rows });
});
