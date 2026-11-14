// Number/date formatting for the admin dashboard (South African English, SAST dates).

const nf = new Intl.NumberFormat('en-ZA');

export function formatInt(n: number | null | undefined): string {
  return n === null || n === undefined ? '–' : nf.format(Math.round(n));
}

/** 0.742 -> "74%". */
export function formatPercent(n: number | null | undefined, digits = 0): string {
  return n === null || n === undefined ? '–' : `${(n * 100).toFixed(digits)}%`;
}

/** 83 -> "1m 23s"; 3700 -> "1h 2m". */
export function formatDuration(seconds: number | null | undefined): string {
  if (seconds === null || seconds === undefined) return '–';
  const s = Math.round(seconds);
  if (s < 60) return `${s}s`;
  if (s < 3600) return `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, '0')}s`;
  return `${Math.floor(s / 3600)}h ${Math.floor((s % 3600) / 60)}m`;
}

export interface DeltaText {
  text: string;
  direction: 'up' | 'down' | 'flat' | 'none';
}

/** Relative change vs the previous period: "+12%", "-8%", "no change", or "new" when there was nothing before. */
export function formatDelta(value: number | null, prev: number | null, delta: number | null): DeltaText {
  if (value === null) return { text: 'no data', direction: 'none' };
  if ((prev === null || prev === 0) && value > 0) return { text: 'new', direction: 'up' };
  if (delta === null) return { text: 'no change', direction: 'none' };
  const pct = Math.round(delta * 100);
  if (pct === 0) return { text: 'no change', direction: 'flat' };
  return { text: `${pct > 0 ? '+' : '−'}${Math.abs(pct)}%`, direction: pct > 0 ? 'up' : 'down' };
}

/** Change in a share, in percentage points: "+3.1 pts". */
export function formatPoints(points: number | null): DeltaText {
  if (points === null) return { text: 'no change', direction: 'none' };
  const p = Math.round(points * 1000) / 10;
  if (p === 0) return { text: 'no change', direction: 'flat' };
  return { text: `${p > 0 ? '+' : '−'}${Math.abs(p)} pts`, direction: p > 0 ? 'up' : 'down' };
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** "2026-11-14" -> "14 Nov". */
export function shortDate(iso: string): string {
  const [, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1] ?? ''}`;
}
/** "2026-11-14" -> "14 Nov 2026". */
export function longDate(iso: string): string {
  const [y] = iso.split('-').map(Number);
  return `${shortDate(iso)} ${y}`;
}

const regionNames = (() => {
  try {
    return new Intl.DisplayNames(['en-ZA'], { type: 'region' });
  } catch {
    return null;
  }
})();
/** "GB" -> "United Kingdom"; null -> "Unknown". */
export function countryName(code: string | null | undefined): string {
  if (!code) return 'Unknown';
  try {
    return regionNames?.of(code) ?? code;
  } catch {
    return code;
  }
}

export const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;
export const WEEKDAYS_LONG = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
/** 16 -> "16:00–17:00". */
export function hourRange(h: number): string {
  const p = (n: number) => String(n % 24).padStart(2, '0');
  return `${p(h)}:00–${p(h + 1)}:00`;
}

/** Today's date in South Africa (SAST, UTC+2): "2026-11-14". */
export function todaySast(now: number = Date.now()): string {
  return new Date(now + 2 * 3_600_000).toISOString().slice(0, 10);
}

const EVENT_LABELS: Record<string, string> = {
  page_view: 'Viewed a page',
  session_start: 'Started a visit',
  onboarding_start: 'Started sign-up',
  signup: 'Signed up',
  login: 'Logged in',
  topic_open: 'Opened a topic',
  learn_complete: 'Finished the learn slides',
  practice_start: 'Started practice',
  practice_finish: 'Finished a practice run',
  mock_test_start: 'Started a mock test',
  mock_test_finish: 'Finished a mock test',
};
/** Event type -> plain-language label (unknown types are shown as stored). */
export function eventLabel(type: string): string {
  return EVENT_LABELS[type] ?? type;
}

/** ms epoch -> "14 Nov 2026, 10:30" in South Africa time. Without the year when it is this year. */
export function formatDateTime(ms: number, now: number = Date.now()): string {
  if (!ms) return '–';
  const d = new Date(ms + 2 * 3_600_000).toISOString();
  const date = d.slice(0, 10);
  const sameYear = date.slice(0, 4) === new Date(now + 2 * 3_600_000).toISOString().slice(0, 4);
  return `${sameYear ? shortDate(date) : longDate(date)}, ${d.slice(11, 16)}`;
}
/** ms epoch -> "14 Nov 2026" (SAST). */
export function formatDay(ms: number): string {
  return ms ? longDate(new Date(ms + 2 * 3_600_000).toISOString().slice(0, 10)) : '–';
}
/** 45 -> "45 s ago"; 130 -> "2 min ago". */
export function formatAge(seconds: number): string {
  return seconds < 60 ? `${seconds} s ago` : `${Math.round(seconds / 60)} min ago`;
}
