import { getCloudflareContext } from '@opennextjs/cloudflare';
import { d1Adapter, type AdminDb } from './db';
import { createTtlCache } from './cache';
import { filterKey, parseFilters, type Filters } from './filters';
import { requireAdmin } from './guard';

// Shared plumbing for the read-only admin APIs.

const cache = createTtlCache<unknown>(60_000);

export function adminJson(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

/**
 * Runs an admin GET: guard first, then parse the shared filters, then answer from a 60 s
 * cache of identical queries. Errors give a generic 500 (no internals leaked).
 */
export async function adminGet<T>(
  req: Request,
  name: string,
  load: (db: AdminDb, f: Filters) => Promise<T>,
): Promise<Response> {
  const denied = await requireAdmin(req);
  if (denied) return denied;
  try {
    const f = parseFilters(new URL(req.url).searchParams);
    const { env } = getCloudflareContext();
    const db = d1Adapter(env.DB as never);
    const data = await cache.get(`${name}|${filterKey(f)}`, () => load(db, f));
    return adminJson(data);
  } catch (err) {
    console.error(`admin/${name} error:`, err);
    return adminJson({ error: 'Internal error' }, 500);
  }
}
