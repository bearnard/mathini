import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

export const dynamic = 'force-dynamic';

interface CacheRow {
  id: number;
  prompt: string;
  options: string;
  answer: string;
  explanation: string;
  section: string;
}

export async function GET(req: NextRequest) {
  const task = req.nextUrl.searchParams.get('task')?.trim() ?? '';
  const count = Math.min(parseInt(req.nextUrl.searchParams.get('count') ?? '20', 10), 40);

  if (!task) {
    return NextResponse.json({ error: 'Missing task' }, { status: 400 });
  }

  const { env } = getCloudflareContext();
  const db: D1Database = env.DB;

  const res = await db
    .prepare(
      'SELECT id, prompt, options, answer, explanation, section FROM item_cache WHERE task = ? ORDER BY RANDOM() LIMIT ?',
    )
    .bind(task, count)
    .all<CacheRow>();

  const items = (res.results ?? []).map((r) => ({
    id: r.id,
    prompt: r.prompt,
    options: JSON.parse(r.options) as string[],
    answer: r.answer,
    explanation: r.explanation,
    section: r.section,
  }));

  return NextResponse.json({ items });
}
