import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db/client';
import { auditLog } from '@/lib/db/schema';
import { newId } from '@/lib/id';
import { z } from 'zod';

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email(),
  school: z.string().trim().min(1).max(150),
  message: z.string().trim().max(2000).optional()
});

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as any;
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Data tidak valid.' }, { status: 400 });
  }

  const db = await getDb();
  await db.insert(auditLog).values({
    id: newId('log'),
    action: 'school_inquiry',
    targetType: 'school_inquiry',
    metaJson: JSON.stringify(parsed.data)
  });

  return NextResponse.json({ ok: true });
}
