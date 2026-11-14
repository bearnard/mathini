/**
 * Pure date parsing for the to-scale timeline. No React.
 *
 * The History lessons write dates as people do: "1948", "27 Apr 1994", "c. 1550 BCE", "45 BCE",
 * "525 CE", "508/507 BCE", "1800s", and also vague ones such as "Long before 1652". A to-scale
 * timeline must either place an event correctly or refuse, never guess, so parseTimelineDate
 * returns null for anything it cannot place with confidence, and the timeline then falls back
 * to the plain list.
 *
 * Years are returned as signed numbers: CE/AD years are positive and BCE/BC years are negative
 * (440 BCE = -440). There is no year zero, so use `axis()` or `yearsBetween()` for distances.
 */

export interface ParsedDate {
  /** Signed year: BCE negative, CE positive. */
  year: number;
  /** True for "c.", "about", ranges ("508/507 BCE", "1652-1700") and decades ("1800s"). */
  approx: boolean;
}

const APPROX_WORDS = /(^|[^a-z])(c|ca|circa|about|around|approx|approximately)\.?(?=\s|\d|$)|~/i;
// Words that make a date relative or a span, which cannot be placed on a scale.
const RELATIVE = /\b(before|after|since|until|till|early|late|mid|middle|century|centuries|ago|era|period|between|from|later|earlier|decade|decades|millennium)\b/i;
const MAX_PLAIN_YEAR = 2100;

const eraSign = (token: string): 1 | -1 => (/^(bce|bc)$/i.test(token.replace(/\./g, '')) ? -1 : 1);

export function parseTimelineDate(input: string): ParsedDate | null {
  if (typeof input !== 'string') return null;
  const s = input.trim().replace(/[–—]/g, '-').replace(/\s+/g, ' ');
  if (!s) return null;
  if (RELATIVE.test(s)) return null;
  const approxFlag = APPROX_WORDS.test(s);

  // Era-marked years: "45 BCE", "c. 1550 BCE", "508/507 BCE", "525 CE", "1066 AD", "AD 1066".
  const eraAfter = s.match(/(\d{1,4})(?:\s*\/\s*(\d{1,4}))?\s*(B\.?C\.?E\.?|B\.?C\.?|C\.?E\.?|A\.?D\.?)(?![A-Za-z])/i);
  const eraBefore = s.match(/(?<![A-Za-z])(A\.?D\.?|C\.?E\.?)\s*(\d{1,4})(?!\d)/i);
  if (eraAfter) {
    const n = Number(eraAfter[1]);
    if (n === 0) return null;
    return { year: eraSign(eraAfter[3]) * n, approx: approxFlag || eraAfter[2] !== undefined };
  }
  if (eraBefore) {
    const n = Number(eraBefore[2]);
    if (n === 0) return null;
    return { year: n, approx: approxFlag };
  }
  // A lone era word with no number, or digits that are not a year, is not placeable.
  if (/\b(bce|bc|ce|ad)\b/i.test(s.replace(/\./g, ''))) return null;

  // Plain four-digit years, optionally a decade ("1800s") or a range ("1652-1700").
  const years = [...s.matchAll(/(?<![\d/])(\d{4})(s?)(?!\d)/g)];
  if (years.length === 0) return null;
  if (years.length === 1) {
    const y = Number(years[0][1]);
    if (y < 1 || y > MAX_PLAIN_YEAR) return null;
    return { year: y, approx: approxFlag || years[0][2] === 's' };
  }
  if (years.length === 2 && /^\D*\d{4}s?\s*(-|to)\s*\d{4}s?\D*$/i.test(s)) {
    const a = Number(years[0][1]);
    const b = Number(years[1][1]);
    if (a >= 1 && b <= MAX_PLAIN_YEAR && a < b) return { year: a, approx: true };
  }
  return null;
}

/** Position on a continuous axis (no year zero): 1 BCE = -1, 1 CE = 0, 2 CE = 1. */
export const axis = (year: number): number => (year > 0 ? year - 1 : year);

/** Whole years from `a` to `b` (both signed), with no year zero. */
export const yearsBetween = (a: number, b: number): number => axis(b) - axis(a);

/** "440 BCE" for negative years, "1994" otherwise (CE years above 999 are written bare). */
export function formatYear(year: number): string {
  if (year < 0) return `${-year} BCE`;
  return year < 1000 ? `${year} CE` : String(year);
}
