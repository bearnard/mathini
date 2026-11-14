// Validation of the POST /api/events body. Everything is allowlisted and capped.
// The client can NOT set: timestamp, location, student id, device class, browser, os.

export const EVENT_TYPES = [
  'page_view',
  'session_start',
  'onboarding_start',
  'signup',
  'login',
  'topic_open',
  'learn_complete',
  'practice_start',
  'practice_finish',
  'mock_test_start',
  'mock_test_finish',
] as const;

export type EventType = (typeof EVENT_TYPES)[number];

export const MAX_BODY_BYTES = 16 * 1024;
export const MAX_EVENTS_PER_BATCH = 20;
export const MAX_META_CHARS = 1024;

export interface CleanEvent {
  type: EventType;
  deviceId: string;
  sessionId: string;
  grade: number | null;
  subject: string | null;
  topic: string | null;
  path: string | null;
  referrer: string | null;
  meta: string | null;
}

export interface CleanBatch {
  dnt: boolean;
  events: CleanEvent[];
}

const TYPE_SET: ReadonlySet<string> = new Set(EVENT_TYPES);
const ID_RE = /^[A-Za-z0-9_-]{6,64}$/;
const HOST_RE = /^[a-z0-9]([a-z0-9.-]{0,98}[a-z0-9])?$/;
// eslint-disable-next-line no-control-regex
const CONTROL_RE = /[\u0000-\u001f\u007f]/g;

function text(v: unknown, max: number): string | null {
  if (typeof v !== 'string') return null;
  const s = v.replace(CONTROL_RE, '').trim().slice(0, max);
  return s === '' ? null : s;
}

/** Keep only the path part: query strings and fragments can carry personal data. */
export function cleanPath(v: unknown): string | null {
  const s = text(v, 400);
  if (!s) return null;
  const cut = s.split(/[?#]/)[0].slice(0, 200);
  return cut === '' ? null : cut;
}

/** Reduce a referrer (host or full URL) to a bare lowercase host. */
export function cleanReferrerHost(v: unknown): string | null {
  const s = text(v, 300);
  if (!s) return null;
  let host = s.toLowerCase();
  if (host.includes('/')) {
    try {
      host = new URL(s).hostname.toLowerCase();
    } catch {
      return null;
    }
  }
  host = host.replace(/:\d+$/, '');
  return HOST_RE.test(host) ? host : null;
}

/** Small JSON: at most 10 keys, primitive values only, <= 1 KB serialised. */
export function cleanMeta(v: unknown): string | null {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return null;
  const out: Record<string, string | number | boolean> = {};
  let n = 0;
  for (const [k, val] of Object.entries(v as Record<string, unknown>)) {
    if (n >= 10) break;
    const key = text(k, 40);
    if (!key) continue;
    if (typeof val === 'number' && Number.isFinite(val)) out[key] = val;
    else if (typeof val === 'boolean') out[key] = val;
    else if (typeof val === 'string') out[key] = val.replace(CONTROL_RE, '').slice(0, 100);
    else continue;
    n++;
  }
  if (n === 0) return null;
  const json = JSON.stringify(out);
  return json.length <= MAX_META_CHARS ? json : null;
}

export function cleanGrade(v: unknown): number | null {
  return typeof v === 'number' && Number.isInteger(v) && v >= 5 && v <= 12 ? v : null;
}

/**
 * Returns the cleaned batch, or null when the body is not usable at all.
 * Unknown types and malformed events are dropped one by one. A batch is capped
 * at MAX_EVENTS_PER_BATCH (extra events are ignored).
 */
export function validateBatch(body: unknown): CleanBatch | null {
  if (!body || typeof body !== 'object') return null;
  const b = body as { dnt?: unknown; events?: unknown };
  if (!Array.isArray(b.events)) return null;
  const dnt = b.dnt === true;

  const events: CleanEvent[] = [];
  for (const raw of b.events.slice(0, MAX_EVENTS_PER_BATCH)) {
    if (!raw || typeof raw !== 'object') continue;
    const e = raw as Record<string, unknown>;
    if (typeof e.type !== 'string' || !TYPE_SET.has(e.type)) continue;
    const sessionId = typeof e.session_id === 'string' && ID_RE.test(e.session_id) ? e.session_id : null;
    // Under Do Not Track the device id is a constant, never a per-device value.
    const deviceId = dnt ? 'dnt' : typeof e.device_id === 'string' && ID_RE.test(e.device_id) ? e.device_id : null;
    if (!sessionId || !deviceId) continue;
    const path = cleanPath(e.path);
    // The admin area is never recorded (the owner is not a visitor).
    if (path !== null && (path === '/admin' || path.startsWith('/admin/'))) continue;
    events.push({
      type: e.type as EventType,
      deviceId,
      sessionId,
      grade: cleanGrade(e.grade),
      subject: text(e.subject, 64),
      topic: text(e.topic, 64),
      path,
      referrer: cleanReferrerHost(e.referrer),
      meta: cleanMeta(e.meta),
    });
  }
  return { dnt, events };
}
