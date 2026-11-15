// Plumbing for the teacher-review API routes. The routes sit OUTSIDE /admin (and outside Cloudflare Access), so every
// response gets the privacy headers, every request needs the X-Review-Action header, the token is rate-limited, and the
// token is never logged. This file imports nothing from the admin, learner or events code.

import { getCloudflareContext } from '@opennextjs/cloudflare';
import { trDbOfD1, type TrDb } from './db';
import { loadPack } from './store';
import { findReviewerByToken, hashToken, isWellFormedToken } from './reviewerLink';
import type { ReviewPackRow, ReviewerRow } from './types';

/** The header every review API call must carry. A cross-site page cannot set a custom header without a CORS preflight. */
export const REVIEW_ACTION_HEADER = 'x-review-action';
/** The link's token travels in this header on API calls, not in the URL: platform request logs record URLs, not headers. */
export const REVIEW_TOKEN_HEADER = 'x-review-token';
export const REVIEW_ACTIONS = ['load', 'save', 'done'] as const;
export type ReviewAction = (typeof REVIEW_ACTIONS)[number];

export const PRIVACY_HEADERS: Record<string, string> = {
  'Cache-Control': 'no-store',
  'Referrer-Policy': 'no-referrer',
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
  'X-Content-Type-Options': 'nosniff',
};

export function reviewJson(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', ...PRIVACY_HEADERS } });
}

// A soft in-memory rate limit per Worker isolate: it only has to stop a runaway client.
export interface Limiter {
  allow(key: string, now: number): boolean;
}
export function createLimiter(limit: number, windowMs: number, maxKeys = 5000): Limiter {
  const buckets = new Map<string, { start: number; count: number }>();
  return {
    allow(key, now) {
      if (buckets.size > maxKeys) buckets.clear();
      const b = buckets.get(key);
      if (!b || now - b.start >= windowMs) {
        buckets.set(key, { start: now, count: 1 });
        return true;
      }
      if (b.count >= limit) return false;
      b.count += 1;
      return true;
    },
  };
}

export const TOKEN_LIMIT = 300; // calls per link per 10 minutes: an autosave every second for five minutes still fits
export const UNKNOWN_LIMIT = 30; // failed lookups per client per 10 minutes
export const WINDOW_MS = 10 * 60 * 1000;
const tokenLimiter = createLimiter(TOKEN_LIMIT, WINDOW_MS);
const unknownLimiter = createLimiter(UNKNOWN_LIMIT, WINDOW_MS);
export const MAX_BODY_BYTES = 8192;

export interface ReviewDeps {
  db: TrDb;
  now: number;
  tokenLimiter?: Limiter;
  unknownLimiter?: Limiter;
}

export interface Ctx {
  db: TrDb;
  now: number;
  reviewer: ReviewerRow;
  pack: ReviewPackRow;
  body: unknown;
}

/**
 * Runs one review API call. Order: action header, token header and shape, rate limit, link lookup (unknown 404, revoked or expired 410, pack not open),
 * body size and JSON, then `run`. Errors give a generic 500 and log no request detail.
 */
export async function handleReview(
  req: Request,
  action: ReviewAction,
  run: (c: Ctx) => Promise<Response>,
  deps?: ReviewDeps,
): Promise<Response> {
  try {
    if (req.headers.get(REVIEW_ACTION_HEADER) !== action) return reviewJson({ error: 'missing action header' }, 403);
    const token = req.headers.get(REVIEW_TOKEN_HEADER) ?? '';
    const now = deps?.now ?? Date.now();
    const clientKey = `ip:${req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'}`;
    const unknownL = deps?.unknownLimiter ?? unknownLimiter;
    const tokenL = deps?.tokenLimiter ?? tokenLimiter;

    if (!isWellFormedToken(token)) {
      if (!unknownL.allow(clientKey, now)) return reviewJson({ error: 'too many requests' }, 429);
      return reviewJson({ error: 'not found' }, 404);
    }
    const hash = await hashToken(token);
    if (!tokenL.allow(`t:${hash}`, now)) return reviewJson({ error: 'too many requests' }, 429);

    const db = deps?.db ?? trDbOfD1(getCloudflareContext().env.DB as never);
    const found = await findReviewerByToken(db, token, now);
    if (!found.found) {
      if (!unknownL.allow(clientKey, now)) return reviewJson({ error: 'too many requests' }, 429);
      return reviewJson({ error: 'not found' }, 404);
    }
    if (found.state === 'revoked') return reviewJson({ error: 'revoked' }, 410);
    if (found.state === 'expired') return reviewJson({ error: 'expired' }, 410);
    const pack = await loadPack(db, found.reviewer.pack_id);
    if (!pack || pack.status === 'draft') return reviewJson({ error: 'not found' }, 404);
    if (pack.status === 'closed') return reviewJson({ error: 'closed' }, 410);

    let body: unknown = null;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const text = await req.text();
      if (text.length > MAX_BODY_BYTES) return reviewJson({ error: 'request too large' }, 413);
      try {
        body = text ? JSON.parse(text) : null;
      } catch {
        return reviewJson({ error: 'invalid JSON' }, 400);
      }
    }
    return await run({ db, now, reviewer: found.reviewer, pack, body });
  } catch (err) {
    // Only the error's message, never the request: it carries the token.
    console.error('teacher-review error:', err instanceof Error ? err.message : 'unknown');
    return reviewJson({ error: 'Internal error' }, 500);
  }
}
