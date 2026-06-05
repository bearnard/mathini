import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

export const dynamic = 'force-dynamic';

// Generic question-pool reader for every CAPS subject (/api/caps/<code>).
// The `[subject]` segment only namespaces the URL — item_cache is keyed by the
// globally-unique task slug, so the lookup is by `task` alone, identical to the
// dedicated /api/caps/grade6 route.

interface CacheRow {
  prompt: string;
  options: string;
  answer: string;
  explanation: string;
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
      'SELECT prompt, options, answer, explanation FROM item_cache WHERE task = ? ORDER BY RANDOM() LIMIT ?',
    )
    .bind(task, count)
    .all<CacheRow>();

  const items = (res.results ?? []).map((r) => ({
    prompt: r.prompt,
    options: JSON.parse(r.options) as string[],
    answer: r.answer,
    explanation: r.explanation,
  }));

  return NextResponse.json({ items });
}
