import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { getCurrentUser } from '@/lib/auth/session';
import { schoolAdmins, schools } from '@/lib/db/schema';
import { SchoolStudentsClient } from '@/components/school/SchoolStudentsClient';

export const dynamic = 'force-dynamic';

export default async function SchoolPortalPage() {
  const user = await getCurrentUser();
  const db = await getDb();

  const adminRows = await db
    .select({ schoolId: schoolAdmins.schoolId })
    .from(schoolAdmins)
    .where(eq(schoolAdmins.userId, user!.id))
    .limit(1);
  const schoolId = adminRows[0]?.schoolId;
  const schoolRows = schoolId
    ? await db.select().from(schools).where(eq(schools.id, schoolId)).limit(1)
    : [];
  const school = schoolRows[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">{school?.name ?? 'Sekolah'}</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Kode registrasi: <span className="font-mono">{school?.registrationCode}</span> · Status:{' '}
          <span
            className={
              school?.status === 'approved'
                ? 'text-green-600'
                : school?.status === 'suspended'
                  ? 'text-red-600'
                  : 'text-amber-600'
            }
          >
            {school?.status === 'approved' ? 'Disetujui' : school?.status === 'suspended' ? 'Ditangguhkan' : 'Menunggu persetujuan AXTO'}
          </span>
        </p>
      </div>
      <SchoolStudentsClient />
    </div>
  );
}
