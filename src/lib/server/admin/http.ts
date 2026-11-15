import { getCloudflareContext } from '@opennextjs/cloudflare';
import { d1Adapter, type AdminDb } from './db';
import { createTtlCache } from './cache';
import { filterKey, parseFilters, type Filters } from './filters';
import { authorizeRequest, forbidden, requireAdmin } from './guard';

// Shared plumbing for the admin APIs.

const cache = createTtlCache<unknown>(60_000);

/** Forget every cached answer (call after a delete, so dashboards and counts update at once). */
export function invalidateAdminCache(): void {
  cache.clear();
}

export function adminJson(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

interface GetOptions {
  /** Extra cache-key part (e.g. a learner id and the query string). */
  key?: string;
  /** false = never cache (private details, CSV). Default true. */
  cache?: boolean;
}

/**
 * Runs an admin GET: guard first, then parse the shared filters, then answer from a 60 s
 * cache of identical queries. Errors give a generic 500 (no internals leaked).
 */
export async function adminGet<T>(
  req: Request,
  name: string,
  load: (db: AdminDb, f: Filters, url: URL) => Promise<T>,
  opts: GetOptions = {},
): Promise<Response> {
  const denied = await requireAdmin(req);
  if (denied) return denied;
  try {
    const url = new URL(req.url);
    const f = parseFilters(url.searchParams);
    const { env } = getCloudflareContext();
    const db = d1Adapter(env.DB as never);
    const run = () => load(db, f, url);
    const data = opts.cache === false ? await run() : await cache.get(`${name}|${opts.key ?? ''}|${filterKey(f)}`, run);
    if (data instanceof Response) return data;
    return adminJson(data);
  } catch (err) {
    console.error(`admin/${name} error:`, err);
    return adminJson({ error: 'Internal error' }, 500);
  }
}

/** Header every state-changing admin request must carry, so a cross-site form post cannot trigger it. */
export const ADMIN_ACTION_HEADER = 'x-admin-action';

/**
 * Extra checks for state-changing requests, on top of the Access assertion:
 *   - a custom header naming the action (a cross-site request cannot set one without a CORS preflight)
 *   - an Origin that matches this site (browsers always send Origin on POST)
 * Returns an error message, or null when the request passes.
 */
export function checkWriteRequest(req: Request, action: string): string | null {
  if (req.headers.get(ADMIN_ACTION_HEADER) !== action) return 'missing action header';
  const origin = req.headers.get('origin');
  if (!origin) return 'missing origin';
  try {
    if (new URL(origin).host !== new URL(req.url).host) return 'origin mismatch';
  } catch {
    return 'bad origin';
  }
  return null;
}

/**
 * Runs a state-changing admin request: guard first, then the CSRF checks, then the JSON body (max 2 KB, or `opts.maxBytes`).
 * `run` receives the database, the parsed body and the admin's email (for the audit row).
 */
export async function adminWrite(
  req: Request,
  name: string,
  action: string,
  run: (db: AdminDb, body: unknown, adminEmail: string) => Promise<Response>,
  opts: { maxBytes?: number } = {},
): Promise<Response> {
  const denied = await requireAdmin(req);
  if (denied) return denied;
  const auth = await authorizeRequest((n) => req.headers.get(n));
  if (!auth.ok) return forbidden();
  if (checkWriteRequest(req, action) !== null) return forbidden();
  try {
    const text = await req.text();
    if (text.length > (opts.maxBytes ?? 2048)) return adminJson({ error: 'Request too large' }, 413);
    let body: unknown = null;
    try {
      body = text ? JSON.parse(text) : null;
    } catch {
      return adminJson({ error: 'Invalid JSON' }, 400);
    }
    const { env } = getCloudflareContext();
    return await run(d1Adapter(env.DB as never), body, auth.email);
  } catch (err) {
    console.error(`admin/${name} error:`, err);
    return adminJson({ error: 'Internal error' }, 500);
  }
}

const ID_RE = /^[A-Za-z0-9-]{1,64}$/;
export const validLearnerId = (id: string | undefined): id is string => !!id && ID_RE.test(id);
