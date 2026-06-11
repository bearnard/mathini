import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

interface CacheRow {
  id: number;
  prompt: string;
  options: string;
  answer: string;
  explanation: string;
  section: string;
}

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const task = req.nextUrl.searchParams.get('task')?.trim() ?? '';
    const section = req.nextUrl.searchParams.get('section')?.trim();
    const count = Math.min(parseInt(req.nextUrl.searchParams.get('count') ?? '20', 10), 40);

    if (!task) {
      return NextResponse.json({ error: 'Missing task' }, { status: 400 });
    }

    const { env } = getCloudflareContext();
    const db = env.DB;

    let query = 'SELECT id, prompt, options, answer, explanation, section FROM item_cache WHERE task = ?';
    const params: (string | number)[] = [task];

    if (section) {
      query += ' AND section = ?';
      params.push(section);
    }

    query += ' ORDER BY RANDOM() LIMIT ?';
    params.push(count);

    const res = await db.prepare(query).bind(...params).all<CacheRow>();

    const items = (res.results ?? []).map((r) => ({
      id: r.id,
      prompt: r.prompt,
      options: JSON.parse(r.options) as string[],
      answer: r.answer,
      explanation: r.explanation,
      section: r.section,
    }));

    return NextResponse.json({ items });
  } catch (err) {
    console.error('Revision questions error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
