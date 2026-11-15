// The weekly progress email to a parent (ADR 0005 section 4), as pure functions: which week it is, what to say about each child, the plain and
// HTML text, and the signed unsubscribe token. Nothing here touches a database or the network, so all of it is unit-tested.
import type { ProgressResponse } from '../../shared/progressTypes';

const DAY_MS = 86_400_000;
const SAST_OFFSET_MS = 2 * 3_600_000; // UTC+2, no daylight saving
export const WEEK_MS = 7 * DAY_MS;

// ---------- which week, and which days it is sent ----------

/** The South African calendar date and weekday (0 = Sunday) of an instant. */
export function sastDate(now: number): { date: string; weekday: number } {
  const d = new Date(now + SAST_OFFSET_MS);
  return { date: d.toISOString().slice(0, 10), weekday: d.getUTCDay() };
}

/** The week a summary belongs to: the date (South African time) of the most recent Sunday. Sunday, Monday and Tuesday all share one key. */
export function weekKey(now: number): string {
  const { weekday } = sastDate(now);
  return sastDate(now - weekday * DAY_MS).date;
}

/** Sunday, Monday and Tuesday. Sunday is the send day; Monday and Tuesday catch up on parents the budget or a failed send left over. */
export const SEND_WEEKDAYS: readonly number[] = [0, 1, 2];
export const isSendDay = (now: number): boolean => SEND_WEEKDAYS.includes(sastDate(now).weekday);

// ---------- what to say about a child ----------

export interface ChildWeek {
  name: string;
  grade: number;
  /** Days in the last 7 with at least one answer, and how many answers. */
  daysThisWeek: number;
  answersThisWeek: number;
  tests: { label: string; scorePct: number; changePoints: number | null }[];
  improving: { label: string; points: number }[];
  attention: { label: string; accuracyPct: number | null }[];
  nextStep: { title: string; reason: string } | null;
  /** The child has not practised in the last 14 days and took no test this week. */
  quiet: boolean;
}

const TOP = 3;

/** The parts of a child's ProgressResponse the weekly email uses, plus this week's counts. */
export function childWeekFrom(p: ProgressResponse, week: { days: number; answers: number }, now: number): ChildWeek {
  const topics = p.subjects.flatMap((s) => s.topics);
  const tests = p.tests
    .filter((t) => Date.parse(t.finishedAt) >= now - WEEK_MS)
    .map((t) => ({ label: t.scopeLabel, scorePct: t.scorePct, changePoints: t.changeSinceLast }));
  return {
    name: p.displayName ?? 'Your child',
    grade: p.grade,
    daysThisWeek: week.days,
    answersThisWeek: week.answers,
    tests,
    improving: topics
      .filter((t) => typeof t.changePoints === 'number' && t.changePoints > 0)
      .sort((a, b) => (b.changePoints as number) - (a.changePoints as number))
      .slice(0, TOP)
      .map((t) => ({ label: t.label, points: t.changePoints as number })),
    attention: topics
      .filter((t) => t.attempts > 0 && (t.level === 'learning' || (typeof t.accuracyPct === 'number' && t.accuracyPct < 50)))
      .sort((a, b) => (a.accuracyPct ?? 101) - (b.accuracyPct ?? 101))
      .slice(0, TOP)
      .map((t) => ({ label: t.label, accuracyPct: t.accuracyPct })),
    nextStep: p.nextStep.kind === 'all_caught_up' ? null : { title: p.nextStep.title, reason: p.nextStep.reason },
    quiet: p.consistency.daysPractisedLast14 === 0 && tests.length === 0,
  };
}

// ---------- the message ----------

export const escapeHtml = (s: string): string => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/** 72 -> "72%", 72.5 -> "72,5%": the South African decimal comma. */
const pct = (n: number): string => `${String(Math.round(n * 10) / 10).replace('.', ',')}%`;
const pts = (n: number): string => `${String(Math.round(Math.abs(n) * 10) / 10).replace('.', ',')} ${Math.abs(n) === 1 ? 'point' : 'points'}`;
const plural = (n: number, one: string, many: string): string => `${n} ${n === 1 ? one : many}`;

const changeWords = (c: number | null): string => (c === null ? '' : c > 0 ? `, up ${pts(c)} since last time` : c < 0 ? `, down ${pts(c)} since last time` : ', the same as last time');

/** One child's lines, as plain text. The HTML is built from the same lines, so the two cannot disagree. */
export function childLines(c: ChildWeek): { heading: string; lines: string[] } {
  const lines: string[] = [];
  lines.push(c.daysThisWeek === 0
    ? 'No practice in the last 7 days.'
    : `Practised on ${c.daysThisWeek} of the last 7 days (${plural(c.answersThisWeek, 'answer', 'answers')}).`);
  lines.push(c.tests.length === 0
    ? 'No tests this week.'
    : `Tests this week: ${c.tests.map((t) => `${t.label} ${pct(t.scorePct)}${changeWords(t.changePoints)}`).join('; ')}.`);
  if (c.improving.length > 0) lines.push(`Getting better: ${c.improving.map((t) => `${t.label} (up ${pts(t.points)})`).join('; ')}.`);
  if (c.attention.length > 0) lines.push(`Needs attention: ${c.attention.map((t) => (t.accuracyPct === null ? t.label : `${t.label} (${pct(t.accuracyPct)} right)`)).join('; ')}.`);
  if (c.nextStep) lines.push(`Next step: ${c.nextStep.title}. ${c.nextStep.reason}`);
  return { heading: `${c.name} (Grade ${c.grade})`, lines };
}

export interface SummaryContext {
  siteUrl: string;
  /** The page with the one-click unsubscribe button. */
  unsubscribeUrl: string;
}

export interface BuiltSummary { subject: string; text: string; html: string }

const joinNames = (names: string[]): string => (names.length <= 1 ? names[0] ?? '' : `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`);

export function buildSummary(children: ChildWeek[], ctx: SummaryContext): BuiltSummary {
  const site = ctx.siteUrl.replace(/\/+$/, '');
  const names = children.map((c) => c.name);
  const subject = children.length <= 2 ? `PrepPals: how ${joinNames(names)} did this week` : 'PrepPals: your weekly summary';
  const blocks = children.map(childLines);
  const footer = [
    `You get this email once a week because you linked ${joinNames(names)} to your PrepPals account and gave consent as their parent or guardian. It only uses their practice results on PrepPals, and nobody else gets it.`,
    `Stop these emails any time with one click: ${ctx.unsubscribeUrl}`,
    `See more, change consent or unlink a child: ${site}/parent`,
    'PrepPals, scholar.hibbins.org. Our email provider, Resend, delivers this message for us.',
  ];
  const text = ['Hello,', '', "Here is how your child's week went on PrepPals.", '', ...blocks.flatMap((b) => [b.heading, ...b.lines.map((l) => `- ${l}`), '']), ...footer.flatMap((f) => [f, ''])].join('\n').trimEnd() + '\n';
  const li = (l: string) => `<li style="margin:0 0 6px 0">${escapeHtml(l)}</li>`;
  const html = [
    '<!doctype html><html><body style="margin:0;padding:16px;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;font-size:16px;line-height:1.5">',
    '<div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;padding:20px">',
    '<p style="margin:0 0 4px 0;font-size:13px;font-weight:bold;color:#4338ca;text-transform:uppercase">PrepPals</p>',
    "<h1 style=\"margin:0 0 12px 0;font-size:22px\">Your child's week</h1>",
    ...blocks.map((b) => `<h2 style="margin:16px 0 6px 0;font-size:18px">${escapeHtml(b.heading)}</h2><ul style="margin:0;padding-left:20px">${b.lines.map(li).join('')}</ul>`),
    `<p style="margin:20px 0 0 0"><a href="${escapeHtml(site)}/parent" style="color:#4338ca">Open your children page</a></p>`,
    '<hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0">',
    `<p style="margin:0 0 8px 0;font-size:13px;color:#475569">${escapeHtml(footer[0])}</p>`,
    `<p style="margin:0 0 8px 0;font-size:13px;color:#475569"><a href="${escapeHtml(ctx.unsubscribeUrl)}" style="color:#475569">Stop these emails</a> with one click. <a href="${escapeHtml(site)}/parent" style="color:#475569">Change consent or unlink a child</a>.</p>`,
    `<p style="margin:0;font-size:13px;color:#475569">${escapeHtml(footer[3])}</p>`,
    '</div></body></html>',
  ].join('');
  return { subject, text, html };
}

// ---------- the unsubscribe token ----------

/** Domain separation: this key can only ever sign unsubscribe tokens, even though it is derived from the same secret as the learner sessions. */
const TOKEN_PURPOSE = 'weekly-summary-unsubscribe:v1:';
const TOKEN_PURPOSE_V2 = 'weekly-summary-unsubscribe:v2:';

/** An unsubscribe link works for a year after the email it came in was sent. */
export const TOKEN_TTL_DAYS = 365;
/** The first emails carried a token with no expiry in it (`<user id>.<signature>`). Those are still accepted until this date, a year after the weekly email went live, and then not. */
export const LEGACY_TOKEN_UNTIL = Date.UTC(2027, 10, 15);
const dayNumber = (ms: number): number => Math.floor(ms / DAY_MS);

const hmacHex = async (secret: string, message: string, purpose = TOKEN_PURPOSE): Promise<string> => {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(purpose + message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
};

/** `<user id>.<last valid day>.<signature>`: it says which parent and until when, and only we can have made it. The only thing it can do is stop the email. */
export async function makeUnsubscribeToken(userId: string, secret: string, now: number): Promise<string> {
  const exp = dayNumber(now) + TOKEN_TTL_DAYS;
  return `${userId}.${exp}.${await hmacHex(secret, `${userId}:${exp}`, TOKEN_PURPOSE_V2)}`;
}

const sameHex = (a: string, b: string): boolean => {
  let diff = a.length ^ b.length;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ (b.charCodeAt(i) || 0);
  return diff === 0;
};

/** The user id inside a valid, unexpired token, or null. The comparison is constant-time. Tokens from the first emails (no expiry inside) work until LEGACY_TOKEN_UNTIL. */
export async function verifyUnsubscribeToken(token: unknown, secret: string, now: number): Promise<string | null> {
  if (typeof token !== 'string' || token.length > 200) return null;
  const parts = token.split('.');
  const ID = /^[A-Za-z0-9-]{8,64}$/;
  const SIG = /^[0-9a-f]{64}$/;
  if (parts.length === 3) {
    const [userId, exp, sig] = parts;
    if (!ID.test(userId) || !/^\d{1,7}$/.test(exp) || !SIG.test(sig)) return null;
    if (!sameHex(await hmacHex(secret, `${userId}:${Number(exp)}`, TOKEN_PURPOSE_V2), sig)) return null;
    return Number(exp) >= dayNumber(now) ? userId : null;
  }
  if (parts.length === 2) {
    const [userId, sig] = parts;
    if (!ID.test(userId) || !SIG.test(sig) || now >= LEGACY_TOKEN_UNTIL) return null;
    return sameHex(await hmacHex(secret, userId), sig) ? userId : null;
  }
  return null;
}
