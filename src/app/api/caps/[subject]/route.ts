import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { fetchPoolItems } from '../../../../lib/server/poolStore';

export const dynamic = 'force-dynamic';

// Generic question-pool reader for every CAPS subject (/api/caps/<code>).
// The `[subject]` segment only namespaces the URL — item_cache is keyed by the
// globally-unique task slug, so the lookup is by `task` alone, identical to the
// dedicated /api/caps/grade6 route.

export async function GET(req: NextRequest) {
  const task = req.nextUrl.searchParams.get('task')?.trim() ?? '';
  const count = Math.min(parseInt(req.nextUrl.searchParams.get('count') ?? '20', 10), 40);

  if (!task) {
    return NextResponse.json({ error: 'Missing task' }, { status: 400 });
  }

  const { env } = getCloudflareContext();
  const items = await fetchPoolItems(env.DB, task, count);

  return NextResponse.json({ items });
}
