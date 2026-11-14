// Global dashboard filters (date range, grade, subject). All dates are Africa/Johannesburg
// (SAST, UTC+2, no daylight saving), so day buckets are a constant 2-hour offset.

export const SAST_OFFSET_MS = 2 * 60 * 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;
export const MAX_RANGE_DAYS = 366;

export type RangePreset = 'today' | '7d' | '30d' | '90d' | 'custom';

export interface Filters {
  preset: RangePreset;
  /** First day, SAST, inclusive: YYYY-MM-DD */
  fromDate: string;
  /** Last day, SAST, inclusive: YYYY-MM-DD */
  toDate: string;
  /** ms epoch of the start of fromDate (SAST) */
  fromMs: number;
  /** ms epoch of the end of toDate (exclusive) */
  toMs: number;
  days: number;
  /** The same-length window immediately before */
  prevFromMs: number;
  prevToMs: number;
  grade: number | null;
  subject: string | null;
}

export function sastDate(ms: number): string {
  return new Date(ms + SAST_OFFSET_MS).toISOString().slice(0, 10);
}

/** ms epoch of 00:00 SAST on the given YYYY-MM-DD. */
export function sastDayStart(date: string): number {
  const [y, m, d] = date.split('-').map(Number);
  return Date.UTC(y, m - 1, d) - SAST_OFFSET_MS;
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
function validDate(s: string | null): s is string {
  if (!s || !DATE_RE.test(s)) return false;
  const [y, m, d] = s.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d;
}

export function dateRange(fromDate: string, toDate: string): string[] {
  const out: string[] = [];
  for (let t = sastDayStart(fromDate); t <= sastDayStart(toDate); t += DAY_MS) out.push(sastDate(t + 1));
  return out;
}

/** Parses ?range=today|7d|30d|90d|custom&from=&to=&grade=&subject= . Anything invalid falls back to a safe default. */
export function parseFilters(params: URLSearchParams, now: number = Date.now()): Filters {
  const today = sastDate(now);
  const todayStart = sastDayStart(today);
  let preset = (params.get('range') ?? '30d') as RangePreset;
  if (!['today', '7d', '30d', '90d', 'custom'].includes(preset)) preset = '30d';

  let fromDate = today;
  let toDate = today;
  if (preset === 'custom') {
    const f = params.get('from');
    const t = params.get('to');
    if (validDate(f) && validDate(t) && f <= t && sastDayStart(t) - sastDayStart(f) < MAX_RANGE_DAYS * DAY_MS) {
      fromDate = f;
      toDate = t;
    } else {
      preset = '30d';
    }
  }
  if (preset !== 'custom') {
    const n = preset === 'today' ? 1 : preset === '7d' ? 7 : preset === '30d' ? 30 : 90;
    fromDate = sastDate(todayStart - (n - 1) * DAY_MS + 1);
    toDate = today;
  }

  const fromMs = sastDayStart(fromDate);
  const toMs = sastDayStart(toDate) + DAY_MS;
  const days = Math.round((toMs - fromMs) / DAY_MS);

  const g = Number(params.get('grade'));
  const grade = Number.isInteger(g) && g >= 5 && g <= 12 ? g : null;
  const s = params.get('subject');
  const subject = s && /^[a-z0-9-]{1,32}$/.test(s) ? s : null;

  return { preset, fromDate, toDate, fromMs, toMs, days, prevFromMs: fromMs - days * DAY_MS, prevToMs: fromMs, grade, subject };
}

export function filterKey(f: Filters): string {
  return `${f.fromDate}|${f.toDate}|${f.grade ?? ''}|${f.subject ?? ''}`;
}

/** Same filters, shifted to the previous period (for deltas). */
export function previousPeriod(f: Filters): Filters {
  const fromMs = f.prevFromMs;
  const toMs = f.prevToMs;
  return {
    ...f,
    fromMs,
    toMs,
    fromDate: sastDate(fromMs + 1),
    toDate: sastDate(toMs - 1),
    prevFromMs: fromMs - f.days * DAY_MS,
    prevToMs: fromMs,
  };
}
