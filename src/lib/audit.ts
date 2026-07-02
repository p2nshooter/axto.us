import { getDb } from '@/lib/db/client';
import { auditLog } from '@/lib/db/schema';
import { newId } from '@/lib/id';

export async function logAdminAction(
  actorUserId: string,
  action: string,
  targetType?: string,
  targetId?: string,
  meta?: unknown
) {
  const db = await getDb();
  await db.insert(auditLog).values({
    id: newId('log'),
    actorUserId,
    action,
    targetType,
    targetId,
    metaJson: meta ? JSON.stringify(meta) : null
  });
}
