// Linking a child to a parent account (ADR 0003 section 1). Two ways: the child's login code + PIN, or a link made on the child's own screen.
// The weak point is the 4-digit PIN (10 000 values), so a wrong PIN is counted against the CHILD (5 a hour, durable) as well as against the parent
// (10 attempts an hour, durable), and a blocked child is refused BEFORE the PIN is checked and with the same answer as a wrong PIN, so the limit
// itself reveals nothing about which login codes exist.
import type { AdminDb } from '../admin/db';
import { generateToken, isWellFormedToken, sha256Hex } from '../adultAuth/crypto';
import { allowDurable, bumpDurable, isBlockedDurable } from '../adultAuth/rateLimit';
import { verifyPin } from '../identity';
import { giveConsentStatements } from './consent';

export const HOUR_MS = 3_600_000;
export const PARENT_ATTEMPTS_PER_HOUR = 10;
export const CHILD_FAILURES_PER_HOUR = 5;
export const INVITE_TTL_MS = 60 * 60 * 1000;
export const MAX_ACTIVE_INVITES = 3;

/** One answer for every way a code + PIN can be wrong. */
export const NOT_RIGHT = 'That login code or PIN is not right.';
export const TOO_MANY = 'Too many tries. Please wait an hour and try again.';

export type LinkResult = { ok: true; studentId: string; displayName: string } | { ok: false; status: 400 | 429; error: string };

/** A hash that no PIN matches. Checking against it costs the same time as checking a real learner's PIN, so an unknown code (or a blocked child) is not faster than a wrong PIN. */
const DUMMY_SALT = '00000000000000000000000000000000';
const DUMMY_HASH = '0000000000000000000000000000000000000000000000000000000000000000';

const normaliseCode = (c: unknown): string => (typeof c === 'string' ? c.trim().toUpperCase().slice(0, 40) : '');

const linkStatements = (userId: string, studentId: string, method: 'pin' | 'invite', now: number) => [
  { sql: "INSERT INTO parent_links (user_id, student_id, method, linked_at, unlinked_at) VALUES (?, ?, ?, ?, NULL) ON CONFLICT(user_id, student_id) DO UPDATE SET method = excluded.method, linked_at = excluded.linked_at, unlinked_at = NULL", params: [userId, studentId, method, now] },
];

/** Links with the child's login code and PIN. `consent: true` also records the parent's consent (replacing the learner's tick). */
export async function linkByPin(db: AdminDb, userId: string, input: { loginCode: unknown; pin: unknown; consent: unknown }, now: number): Promise<LinkResult> {
  if (!(await allowDurable(db, `plink:user:${userId}`, PARENT_ATTEMPTS_PER_HOUR, HOUR_MS, now))) return { ok: false, status: 429, error: TOO_MANY };
  const code = normaliseCode(input.loginCode);
  const pin = typeof input.pin === 'string' ? input.pin.trim() : '';
  if (!code || !/^\d{4}$/.test(pin)) return { ok: false, status: 400, error: NOT_RIGHT };
  const s = (await db.all<{ id: string; pin_hash: string; pin_salt: string; display_name: string }>('SELECT id, pin_hash, pin_salt, display_name FROM students WHERE login_code = ?', [code]))[0];
  if (!s) {
    await verifyPin(pin, DUMMY_SALT, DUMMY_HASH);
    return { ok: false, status: 400, error: NOT_RIGHT };
  }
  const childKey = `plink:child:${s.id}`;
  if (await isBlockedDurable(db, childKey, CHILD_FAILURES_PER_HOUR, HOUR_MS, now)) {
    await verifyPin(pin, DUMMY_SALT, DUMMY_HASH);
    return { ok: false, status: 400, error: NOT_RIGHT };
  }
  if (!(await verifyPin(pin, s.pin_salt, s.pin_hash))) {
    await bumpDurable(db, childKey, HOUR_MS, now);
    return { ok: false, status: 400, error: NOT_RIGHT };
  }
  await db.batch([...linkStatements(userId, s.id, 'pin', now), ...(input.consent === true ? giveConsentStatements(userId, s.id, now) : [])]);
  return { ok: true, studentId: s.id, displayName: s.display_name };
}

/** Makes a link for the child's own screen. Returns the token ONCE; only its hash is stored. At most 3 are active at a time. */
export async function createInvite(db: AdminDb, studentId: string, now: number): Promise<{ ok: true; token: string; expiresAt: number } | { ok: false; error: string }> {
  const active = (await db.all<{ n: number }>('SELECT COUNT(*) AS n FROM child_invites WHERE student_id = ? AND used_at IS NULL AND expires_at > ?', [studentId, now]))[0];
  if (Number(active?.n ?? 0) >= MAX_ACTIVE_INVITES) return { ok: false, error: 'You already have links waiting. Use one, or wait an hour.' };
  const token = generateToken();
  const expiresAt = now + INVITE_TTL_MS;
  await db.batch([{ sql: 'INSERT INTO child_invites (student_id, token_hash, created_at, expires_at) VALUES (?, ?, ?, ?)', params: [studentId, await sha256Hex(token), now, expiresAt] }]);
  return { ok: true, token, expiresAt };
}

/** Links with an invite made on the child's screen. Single use, 60 minutes; unknown, used and expired links read the same. */
export async function linkByInvite(db: AdminDb, userId: string, input: { token: unknown; consent: unknown }, now: number): Promise<LinkResult> {
  if (!(await allowDurable(db, `plink:user:${userId}`, PARENT_ATTEMPTS_PER_HOUR, HOUR_MS, now))) return { ok: false, status: 429, error: TOO_MANY };
  if (!isWellFormedToken(input.token)) return { ok: false, status: 400, error: 'This link has expired or was already used. Ask your child for a new one.' };
  const used = (await db.all<{ student_id: string }>('UPDATE child_invites SET used_at = ?, used_by = ? WHERE token_hash = ? AND used_at IS NULL AND expires_at > ? RETURNING student_id', [now, userId, await sha256Hex(input.token), now]))[0];
  if (!used) return { ok: false, status: 400, error: 'This link has expired or was already used. Ask your child for a new one.' };
  const s = (await db.all<{ id: string; display_name: string }>('SELECT id, display_name FROM students WHERE id = ?', [used.student_id]))[0];
  if (!s) return { ok: false, status: 400, error: 'This link has expired or was already used. Ask your child for a new one.' };
  await db.batch([...linkStatements(userId, s.id, 'invite', now), ...(input.consent === true ? giveConsentStatements(userId, s.id, now) : [])]);
  return { ok: true, studentId: s.id, displayName: s.display_name };
}

export async function isLinked(db: AdminDb, userId: string, studentId: string): Promise<boolean> {
  return (await db.all('SELECT 1 FROM parent_links WHERE user_id = ? AND student_id = ? AND unlinked_at IS NULL', [userId, studentId])).length > 0;
}

export async function unlink(db: AdminDb, userId: string, studentId: string, now: number): Promise<void> {
  await db.batch([{ sql: 'UPDATE parent_links SET unlinked_at = ? WHERE user_id = ? AND student_id = ? AND unlinked_at IS NULL', params: [now, userId, studentId] }]);
}

export type ConsentState = 'none' | 'learner' | 'parent';

/** The plain activity numbers on a child's card. They come from the answers themselves, so they show even when the full progress cannot be built. */
export interface ChildActivity {
  answersThisWeek: number;
  daysPractisedLast14: number;
  lastPractisedAt: number | null;
  /** Share of this week's answers that were right, 0 to 100; null with no answers this week. */
  weekAccuracyPct: number | null;
  /** This week's accuracy minus the week before, in points; null unless both weeks have at least MIN_WEEK_ANSWERS answers (a few answers say nothing). */
  changeSinceLastWeek: number | null;
}

export const MIN_WEEK_ANSWERS = 5;

export interface ChildSummary {
  id: string;
  displayName: string;
  grade: number;
  avatar: string | null;
  linkedAt: number;
  lastSeenAt: number | null;
  /** none = no consent; learner = the learner's own tick (until a parent gives consent); parent = a parent's recorded consent. */
  consent: ConsentState;
  consentVersion: string | null;
  /** Filled by withActivity (the list handler); absent when it could not be read. */
  activity?: ChildActivity;
}

/** The children linked to this adult. Only fields a parent should see: never the login code, the PIN hash or the learner's real name. */
export async function listChildren(db: AdminDb, userId: string): Promise<ChildSummary[]> {
  const rows = await db.all<{ id: string; display_name: string; grade: number; avatar: string | null; linked_at: number; last_seen_at: number | null; parent_consent_at: number | null; consent_version: string | null; last_event: string | null }>(
    `SELECT s.id, s.display_name, s.grade, s.avatar, l.linked_at, s.last_seen_at, s.parent_consent_at, s.consent_version,
            (SELECT e.action FROM consent_events e WHERE e.student_id = s.id ORDER BY e.id DESC LIMIT 1) AS last_event
       FROM parent_links l JOIN students s ON s.id = l.student_id
      WHERE l.user_id = ? AND l.unlinked_at IS NULL ORDER BY l.linked_at, s.id`,
    [userId],
  );
  return rows.map((r) => ({
    id: r.id, displayName: r.display_name, grade: Number(r.grade), avatar: r.avatar, linkedAt: Number(r.linked_at),
    lastSeenAt: r.last_seen_at == null ? null : Number(r.last_seen_at),
    consent: r.parent_consent_at == null ? 'none' : r.last_event === 'given' ? 'parent' : 'learner',
    consentVersion: r.parent_consent_at == null ? null : r.consent_version,
  }));
}

const DAY = 86_400_000;

/** Adds the activity numbers to each child: one small read for all of them. A failure leaves the list as it was (no activity), never an error. */
export async function withActivity(db: AdminDb, children: ChildSummary[], now: number): Promise<ChildSummary[]> {
  if (children.length === 0) return children;
  try {
    const ids = children.map((c) => c.id);
    const marks = ids.map(() => '?').join(',');
    const rows = await db.all<{ student_id: string; week: number; days: number; last: number | null; c1: number | null; n2: number | null; c2: number | null }>(
      `SELECT student_id,
              SUM(CASE WHEN created_at >= ? THEN 1 ELSE 0 END) AS week,
              COUNT(DISTINCT CASE WHEN created_at >= ? THEN (created_at + 7200000) / 86400000 END) AS days,
              MAX(created_at) AS last,
              SUM(CASE WHEN created_at >= ? THEN is_correct ELSE 0 END) AS c1,
              SUM(CASE WHEN created_at >= ? AND created_at < ? THEN 1 ELSE 0 END) AS n2,
              SUM(CASE WHEN created_at >= ? AND created_at < ? THEN is_correct ELSE 0 END) AS c2
         FROM attempts WHERE student_id IN (${marks}) AND marked_by IS NOT 'client' GROUP BY student_id`,
      [now - 7 * DAY, now - 14 * DAY, now - 7 * DAY, now - 14 * DAY, now - 7 * DAY, now - 14 * DAY, now - 7 * DAY, ...ids],
    );
    const by = new Map(rows.map((r) => [r.student_id, r]));
    return children.map((c) => {
      const r = by.get(c.id);
      const n1 = Number(r?.week ?? 0), k1 = Number(r?.c1 ?? 0), n2 = Number(r?.n2 ?? 0), k2 = Number(r?.c2 ?? 0);
      const acc = (k: number, n: number) => (n > 0 ? Math.round((k / n) * 100) : null);
      const change = n1 >= MIN_WEEK_ANSWERS && n2 >= MIN_WEEK_ANSWERS ? (acc(k1, n1) as number) - (acc(k2, n2) as number) : null;
      return { ...c, activity: { answersThisWeek: n1, daysPractisedLast14: Number(r?.days ?? 0), lastPractisedAt: r?.last == null ? null : Number(r.last), weekAccuracyPct: acc(k1, n1), changeSinceLastWeek: change } };
    });
  } catch {
    return children;
  }
}
