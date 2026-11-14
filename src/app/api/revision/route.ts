import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { fetchPoolItems } from '../../../lib/server/poolStore';

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

    const items = await fetchPoolItems(db, task, count, section || undefined);

    return NextResponse.json({ items });
  } catch (err) {
    console.error('Revision questions error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
