import { isBot, parseUserAgent } from './ua';
import { locationFromCf, type CfLike } from './location';
import { MAX_BODY_BYTES, validateBatch } from './validate';
import { buildEventRows, INSERT_EVENT_SQL } from './rows';
import type { RateLimiter } from './ratelimit';
import { purgeOldEvents, shouldPurge } from './retention';

interface Stmt {
  bind(...values: unknown[]): unknown;
}

export interface EventsDb {
  prepare(sql: string): Stmt;
  batch(statements: never[]): Promise<unknown>;
}

export interface EventsRequest {
  /** Value of the Content-Length header, if any. */
  contentLength: string | null;
  /** Raw request body text. */
  body: string;
  userAgent: string | null;
  /** The pp_session cookie value. */
  sessionCookie: string | undefined;
}

export interface EventsDeps {
  db: EventsDb;
  cf: CfLike | undefined;
  now: number;
  /** Returns the student id for a valid session token, else null. */
  verifySession: (token: string | undefined) => Promise<string | null>;
  rateLimiter: RateLimiter;
  /** Run background work after the response (ctx.waitUntil). Omit if unavailable. */
  waitUntil?: (p: Promise<unknown>) => void;
  random?: () => number;
}

export interface EventsResult {
  /** Always 204 for the client; `stored` is for tests and logs. */
  status: 204;
  stored: number;
  reason?: 'too-large' | 'bot' | 'invalid' | 'empty' | 'rate-limited' | 'error';
}

/**
 * Handles POST /api/events. Never throws and never reports failure to the
 * client: analytics must not break the app. student_id, location, device,
 * browser, os and ts are all set here; none are read from the body.
 */
export async function handleEvents(req: EventsRequest, deps: EventsDeps): Promise<EventsResult> {
  const done = (stored: number, reason?: EventsResult['reason']): EventsResult => ({ status: 204, stored, reason });
  try {
    if (req.contentLength && Number(req.contentLength) > MAX_BODY_BYTES) return done(0, 'too-large');
    if (new TextEncoder().encode(req.body).length > MAX_BODY_BYTES) return done(0, 'too-large');

    if (isBot(req.userAgent, deps.cf?.verifiedBotCategory)) return done(0, 'bot');

    let parsed: unknown;
    try {
      parsed = JSON.parse(req.body);
    } catch {
      return done(0, 'invalid');
    }
    const batch = validateBatch(parsed);
    if (!batch) return done(0, 'invalid');
    if (batch.events.length === 0) return done(0, 'empty');

    // Key by device; under Do Not Track every device shares 'dnt', so use the session instead.
    const key = batch.dnt ? `s:${batch.events[0].sessionId}` : `d:${batch.events[0].deviceId}`;
    if (!deps.rateLimiter.allow(key, batch.events.length, deps.now)) return done(0, 'rate-limited');

    let studentId: string | null = null;
    if (!batch.dnt) {
      try {
        studentId = await deps.verifySession(req.sessionCookie);
      } catch {
        studentId = null;
      }
    }

    const rows = buildEventRows(batch.events, {
      now: deps.now,
      studentId,
      location: locationFromCf(deps.cf),
      ua: parseUserAgent(req.userAgent),
      dnt: batch.dnt,
    });
    const stmts = rows.map((r) => deps.db.prepare(INSERT_EVENT_SQL).bind(...r)) as never[];
    await deps.db.batch(stmts);

    if (deps.waitUntil && shouldPurge(deps.random?.())) {
      deps.waitUntil(purgeOldEvents(deps.db as never, deps.now).catch(() => {}));
    }
    return done(rows.length);
  } catch {
    return done(0, 'error');
  }
}
