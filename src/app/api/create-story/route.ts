import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getDb } from '@/lib/db/client';
import { generatedStories } from '@/lib/db/schema';
import { requireUser } from '@/lib/auth/guards';
import { newId } from '@/lib/id';
import { generateStory } from '@/lib/storyGenerator';

const schema = z.object({
  childName: z.string().trim().min(1).max(40),
  childAge: z.coerce.number().int().min(1).max(14),
  favoriteAnimal: z.string().trim().min(1).max(30),
  favoriteColor: z.string().trim().min(1).max(30),
  locale: z.enum(['id', 'en']).default('en')
});

export async function POST(req: NextRequest) {
  const guard = await requireUser();
  if ('error' in guard) return guard.error;

  const body = (await req.json().catch(() => null)) as any;
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Data tidak valid.' }, { status: 400 });
  }

  const { childName, childAge, favoriteAnimal, favoriteColor, locale } = parsed.data;
  const content = generateStory({ childName, childAge, favoriteAnimal, favoriteColor }, locale);

  const db = await getDb();
  await db.insert(generatedStories).values({
    id: newId('gen'),
    userId: guard.user.id,
    childName,
    childAge,
    favoriteAnimal,
    favoriteColor,
    contentJson: JSON.stringify(content)
  });

  return NextResponse.json({ ok: true, story: content });
}
