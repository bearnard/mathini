import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { servePool } from '../../../../lib/server/serving/served';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const task = req.nextUrl.searchParams.get('task')?.trim() ?? '';
  const count = Math.min(parseInt(req.nextUrl.searchParams.get('count') ?? '20', 10), 40);

  if (!task) {
    return NextResponse.json({ error: 'Missing task' }, { status: 400 });
  }

  const { env } = getCloudflareContext();
  const items = await servePool(env.DB, task, count);

  return NextResponse.json({ items });
}
