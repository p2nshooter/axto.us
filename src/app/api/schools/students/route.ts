import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/client';
import { schoolAdmins, schoolStudents, users } from '@/lib/db/schema';
import { requireSchoolAdmin } from '@/lib/auth/guards';
import { withErrorHandling } from '@/lib/api-handler';

export const GET = withErrorHandling(async () => {
  const auth = await requireSchoolAdmin();
  if ('error' in auth) return auth.error;

  const db = await getDb();
  const adminRows = await db
    .select({ schoolId: schoolAdmins.schoolId })
    .from(schoolAdmins)
    .where(eq(schoolAdmins.userId, auth.user.id))
    .limit(1);
  const schoolId = adminRows[0]?.schoolId;
  if (!schoolId) {
    return NextResponse.json({ error: 'Akun ini tidak terhubung ke sekolah mana pun.' }, { status: 403 });
  }

  const students = await db
    .select({
      id: schoolStudents.id,
      status: schoolStudents.status,
      registrationNumber: schoolStudents.registrationNumber,
      appliedAt: schoolStudents.appliedAt,
      schoolApprovedAt: schoolStudents.schoolApprovedAt,
      activatedAt: schoolStudents.activatedAt,
      deactivatedAt: schoolStudents.deactivatedAt,
      studentName: users.name,
      studentEmail: users.email
    })
    .from(schoolStudents)
    .innerJoin(users, eq(schoolStudents.userId, users.id))
    .where(eq(schoolStudents.schoolId, schoolId));

  return NextResponse.json({ students });
});
