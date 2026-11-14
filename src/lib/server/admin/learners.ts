// Learners: list, CSV, detail, private details and delete (ADR 0002, section 3).
//
// PRIVACY: these are children. The list and detail NEVER return real name, school, age, login code
// or PIN. Real name, school and age come only from learnerPrivate() (one learner, on request), and the
// CSV includes real name and school only when explicitly asked for.

import type { AdminDb, Param, Statement } from './db';
import { attemptWhere } from './queries';
import { dateRange, type Filters } from './filters';

const num = (v: unknown): number => (typeof v === 'number' ? v : Number(v ?? 0)) || 0;
const SAST = 2 * 3_600_000;

export const LEARNER_SORTS = ['nickname', 'grade', 'first_seen', 'last_seen', 'questions', 'accuracy', 'xp', 'badges'] as const;
export type LearnerSort = (typeof LEARNER_SORTS)[number];

export interface LearnerRow {
  id: string;
  nickname: string;
  avatar: string | null;
  grade: number;
  /** A parent or guardian has agreed. */
  consented: boolean;
  firstSeen: number;
  lastSeen: number;
  /** Most recent city, only ever recorded for learners with parent agreement. */
  lastCity: string | null;
  questions: number;
  /** 0..1, null with no recorded answers */
  accuracy: number | null;
  xp: number;
  badges: number;
  /** Only when explicitly requested (CSV with real names). */
  realName?: string;
  school?: string;
}
export interface LearnersData {
  total: number;
  learners: LearnerRow[];
}

const ORDER: Record<LearnerSort, string> = {
  nickname: 'LOWER(s.display_name)',
  grade: 's.grade',
  first_seen: 's.created_at',
  last_seen: 'last_seen',
  questions: 'q',
  accuracy: 'CASE WHEN q = 0 THEN -1 ELSE c * 1.0 / q END',
  xp: 'xp',
  badges: 'badges',
};

/** Escapes LIKE wildcards so a search for "50%" or "a_b" matches literally. */
export function likePattern(search: string): string {
  return `%${search.trim().replace(/[\\%_]/g, (m) => `\\${m}`).toLowerCase()}%`;
}

export interface ListOptions {
  search?: string;
  sort?: LearnerSort;
  dir?: 'asc' | 'desc';
  limit?: number;
  /** Add real name and school to each row. ONLY for the explicit "include real names" CSV. */
  includePrivate?: boolean;
}

export async function listLearners(db: AdminDb, f: Filters, o: ListOptions = {}): Promise<LearnersData> {
  const sort: LearnerSort = LEARNER_SORTS.includes(o.sort as LearnerSort) ? (o.sort as LearnerSort) : 'last_seen';
  const dir = o.dir === 'asc' ? 'ASC' : 'DESC';
  const limit = Math.min(Math.max(Math.floor(o.limit ?? 200), 1), 1000);
  const at = attemptWhere(f).sql.replace(/created_at/g, 'a.created_at').replace(/\bgrade = \?/, 'a.grade = ?').replace(/\bsubject = \?/, 'a.subject = ?');
  const atParams: Param[] = [f.fromMs, f.toMs, ...(f.grade !== null ? [f.grade] : []), ...(f.subject !== null ? [f.subject] : [])];

  const where: string[] = [];
  const whereParams: Param[] = [];
  if (f.grade !== null) {
    where.push('s.grade = ?');
    whereParams.push(f.grade);
  }
  if (o.search && o.search.trim()) {
    where.push(`LOWER(s.display_name) LIKE ? ESCAPE '\\'`);
    whereParams.push(likePattern(o.search));
  }
  const whereSql = where.length ? `WHERE ${where.join(' AND ')}` : '';

  const rows = await db.all<{
    id: string; display_name: string; avatar: string | null; grade: number; created_at: number; last_seen: number;
    consented: number; last_city: string | null; q: number; c: number; xp: number; badges: number; real_name?: string; school?: string | null;
  }>(
    `SELECT s.id, s.display_name, s.avatar, s.grade, s.created_at,
            MAX(s.last_seen_at, COALESCE((SELECT MAX(e.ts) FROM events e WHERE e.student_id = s.id), 0)) AS last_seen,
            CASE WHEN s.parent_consent_at IS NULL THEN 0 ELSE 1 END AS consented,
            (SELECT e.city FROM events e WHERE e.student_id = s.id AND e.city IS NOT NULL ORDER BY e.ts DESC LIMIT 1) AS last_city,
            (SELECT COUNT(*) FROM attempts a WHERE a.student_id = s.id AND ${at}) AS q,
            (SELECT COALESCE(SUM(a.is_correct), 0) FROM attempts a WHERE a.student_id = s.id AND ${at}) AS c,
            COALESCE((SELECT x.xp FROM student_xp x WHERE x.student_id = s.id AND x.scope = 'overall'), 0) AS xp,
            (SELECT COUNT(*) FROM student_badges b WHERE b.student_id = s.id) AS badges
            ${o.includePrivate ? ', s.real_name AS real_name, s.school AS school' : ''}
       FROM students s ${whereSql}
      ORDER BY ${ORDER[sort]} ${dir}, s.id ASC
      LIMIT ${limit}`,
    [...atParams, ...atParams, ...whereParams],
  );
  const total = await db.all<{ n: number }>(`SELECT COUNT(*) AS n FROM students s ${whereSql}`, whereParams);

  return {
    total: num(total[0]?.n),
    learners: rows.map((r) => ({
      id: r.id,
      nickname: r.display_name,
      avatar: r.avatar,
      grade: num(r.grade),
      consented: num(r.consented) === 1,
      firstSeen: num(r.created_at),
      lastSeen: num(r.last_seen),
      lastCity: r.last_city,
      questions: num(r.q),
      accuracy: num(r.q) > 0 ? num(r.c) / num(r.q) : null,
      xp: num(r.xp),
      badges: num(r.badges),
      ...(o.includePrivate ? { realName: r.real_name ?? '', school: r.school ?? '' } : {}),
    })),
  };
}

// ---------- CSV ----------

/** Guards against spreadsheet formula injection: a cell that starts with = + - @ (or tab/CR) is prefixed with '. */
export function csvCell(v: string | number | null | undefined): string {
  if (v === null || v === undefined) return '';
  let s = String(v);
  if (typeof v === 'string' && /^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

const sastStamp = (ms: number) => (ms ? new Date(ms + SAST).toISOString().slice(0, 16).replace('T', ' ') : '');

/** CSV text (with a UTF-8 BOM for Excel). Real name and school are included only with includeNames. */
export function learnersToCsv(rows: LearnerRow[], includeNames = false): string {
  const head = ['nickname', ...(includeNames ? ['real_name', 'school'] : []), 'grade', 'parent_agreement', 'first_seen_sast', 'last_seen_sast', 'last_city', 'questions', 'accuracy_percent', 'xp', 'badges'];
  const lines = [head.join(',')];
  for (const r of rows) {
    lines.push(
      [
        csvCell(r.nickname),
        ...(includeNames ? [csvCell(r.realName ?? ''), csvCell(r.school ?? '')] : []),
        csvCell(r.grade),
        r.consented ? 'yes' : 'no',
        sastStamp(r.firstSeen),
        sastStamp(r.lastSeen),
        csvCell(r.lastCity),
        csvCell(r.questions),
        r.accuracy === null ? '' : (Math.round(r.accuracy * 1000) / 10).toFixed(1),
        csvCell(r.xp),
        csvCell(r.badges),
      ].join(','),
    );
  }
  return '﻿' + lines.join('\r\n') + '\r\n';
}

// ---------- detail ----------

export interface LearnerDetail {
  id: string;
  nickname: string;
  avatar: string | null;
  grade: number;
  firstSeen: number;
  lastSeen: number;
  consent: { agreedAt: number | null; version: string | null };
  xp: number;
  /** All-time recorded answers. */
  totals: { questions: number; correct: number };
  /** Daily accuracy over the selected range. */
  accuracy: { date: string; questions: number; correct: number }[];
  topics: { task: string; subject: string; grade: number; questions: number; correct: number }[];
  /** Sections with 4+ answers below 60% accuracy. */
  weakSections: { task: string; subject: string; grade: number; section: string; questions: number; correct: number }[];
  locations: { country: string | null; region: string | null; city: string | null; events: number; lastSeen: number }[];
  devices: { device: string | null; browser: string | null; os: string | null; events: number; lastSeen: number }[];
  badges: { id: string; title: string; tier: string; earnedAt: number }[];
  timeline: { ts: number; type: string; topic: string | null; subject: string | null; grade: number | null }[];
}

export const WEAK_MIN_ANSWERS = 4;
export const WEAK_BELOW = 0.6;

export async function learnerDetail(db: AdminDb, id: string, f: Filters): Promise<LearnerDetail | null> {
  const s = await db.all<{ id: string; display_name: string; avatar: string | null; grade: number; created_at: number; last_seen_at: number; parent_consent_at: number | null; consent_version: string | null }>(
    'SELECT id, display_name, avatar, grade, created_at, last_seen_at, parent_consent_at, consent_version FROM students WHERE id = ?',
    [id],
  );
  if (!s[0]) return null;
  const st = s[0];
  const at = attemptWhere(f);
  const [xp, tot, daily, tasks, sections, locs, devs, badges, timeline, lastEv] = await Promise.all([
    db.all<{ xp: number }>(`SELECT xp FROM student_xp WHERE student_id = ? AND scope = 'overall'`, [id]),
    db.all<{ q: number; c: number }>('SELECT COUNT(*) AS q, COALESCE(SUM(is_correct), 0) AS c FROM attempts WHERE student_id = ?', [id]),
    db.all<{ d: string; q: number; c: number }>(
      `SELECT strftime('%Y-%m-%d', created_at / 1000 + ${SAST / 1000}, 'unixepoch') AS d, COUNT(*) AS q, COALESCE(SUM(is_correct), 0) AS c
         FROM attempts WHERE student_id = ? AND ${at.sql} GROUP BY d`,
      [id, ...at.params],
    ),
    db.all<{ task: string; subject: string; grade: number; q: number; c: number }>(
      `SELECT task, subject, grade, COUNT(*) AS q, COALESCE(SUM(is_correct), 0) AS c FROM attempts WHERE student_id = ? AND ${at.sql} GROUP BY task, subject, grade ORDER BY q DESC, task`,
      [id, ...at.params],
    ),
    db.all<{ task: string; subject: string; grade: number; section: string; q: number; c: number }>(
      `SELECT task, subject, grade, section, COUNT(*) AS q, COALESCE(SUM(is_correct), 0) AS c FROM attempts WHERE student_id = ? AND ${at.sql} GROUP BY task, subject, grade, section`,
      [id, ...at.params],
    ),
    db.all<{ country: string | null; region: string | null; city: string | null; n: number; last_ts: number }>(
      `SELECT country, region, city, COUNT(*) AS n, MAX(ts) AS last_ts FROM events WHERE student_id = ? AND type != 'admin_delete' GROUP BY country, region, city ORDER BY last_ts DESC LIMIT 30`,
      [id],
    ),
    db.all<{ device: string | null; browser: string | null; os: string | null; n: number; last_ts: number }>(
      `SELECT device, browser, os, COUNT(*) AS n, MAX(ts) AS last_ts FROM events WHERE student_id = ? AND type != 'admin_delete' GROUP BY device, browser, os ORDER BY last_ts DESC LIMIT 20`,
      [id],
    ),
    db.all<{ id: string; title: string; tier: string; earned_at: number }>(
      'SELECT b.id, b.title, b.tier, sb.earned_at FROM student_badges sb JOIN badges b ON b.id = sb.badge_id WHERE sb.student_id = ? ORDER BY sb.earned_at DESC',
      [id],
    ),
    db.all<{ ts: number; type: string; topic: string | null; subject: string | null; grade: number | null }>(
      `SELECT ts, type, topic, subject, grade FROM events WHERE student_id = ? AND type != 'admin_delete' ORDER BY ts DESC, id DESC LIMIT 80`,
      [id],
    ),
    db.all<{ t: number | null }>('SELECT MAX(ts) AS t FROM events WHERE student_id = ?', [id]),
  ]);

  const byDay = new Map(daily.map((r) => [r.d, r]));
  return {
    id: st.id,
    nickname: st.display_name,
    avatar: st.avatar,
    grade: num(st.grade),
    firstSeen: num(st.created_at),
    lastSeen: Math.max(num(st.last_seen_at), num(lastEv[0]?.t)),
    consent: { agreedAt: st.parent_consent_at === null ? null : num(st.parent_consent_at), version: st.consent_version },
    xp: num(xp[0]?.xp),
    totals: { questions: num(tot[0]?.q), correct: num(tot[0]?.c) },
    accuracy: dateRange(f.fromDate, f.toDate).map((date) => ({ date, questions: num(byDay.get(date)?.q), correct: num(byDay.get(date)?.c) })),
    topics: tasks.map((r) => ({ task: r.task, subject: r.subject, grade: num(r.grade), questions: num(r.q), correct: num(r.c) })),
    weakSections: sections
      .filter((r) => num(r.q) >= WEAK_MIN_ANSWERS && num(r.c) / num(r.q) < WEAK_BELOW)
      .map((r) => ({ task: r.task, subject: r.subject, grade: num(r.grade), section: r.section, questions: num(r.q), correct: num(r.c) }))
      .sort((a, b) => a.correct / a.questions - b.correct / b.questions || b.questions - a.questions),
    locations: locs.map((r) => ({ country: r.country, region: r.region, city: r.city, events: num(r.n), lastSeen: num(r.last_ts) })),
    devices: devs.map((r) => ({ device: r.device, browser: r.browser, os: r.os, events: num(r.n), lastSeen: num(r.last_ts) })),
    badges: badges.map((r) => ({ id: r.id, title: r.title, tier: r.tier, earnedAt: num(r.earned_at) })),
    timeline: timeline.map((r) => ({ ts: num(r.ts), type: r.type, topic: r.topic, subject: r.subject, grade: r.grade === null ? null : num(r.grade) })),
  };
}

/** Real name, school and age for ONE learner. Fetched only when the admin clicks "Show private details". */
export async function learnerPrivate(db: AdminDb, id: string): Promise<{ realName: string; school: string | null; age: number | null } | null> {
  const r = await db.all<{ real_name: string; school: string | null; age: number | null }>('SELECT real_name, school, age FROM students WHERE id = ?', [id]);
  return r[0] ? { realName: r[0].real_name, school: r[0].school, age: r[0].age === null ? null : num(r[0].age) } : null;
}

// ---------- delete ----------

export type DeleteResult =
  | { ok: true; deleted: { attempts: number; events: number; xp: number; badges: number } }
  | { ok: false; status: 400 | 404; error: string };

/**
 * Deletes a learner and everything linked to them (POPIA erasure), plus one audit row, atomically.
 * The audit row records counts, the admin's email and the time only: no name, nickname or id.
 * Events recorded while the device was anonymous (student_id NULL) are not linked to the person and stay.
 */
export async function deleteLearner(db: AdminDb, id: string, confirm: unknown, adminEmail: string, now: number = Date.now()): Promise<DeleteResult> {
  const s = await db.all<{ display_name: string }>('SELECT display_name FROM students WHERE id = ?', [id]);
  if (!s[0]) return { ok: false, status: 404, error: 'Learner not found' };
  if (typeof confirm !== 'string' || confirm !== s[0].display_name) return { ok: false, status: 400, error: 'The confirmation does not match the nickname' };

  const count = async (sql: string) => num((await db.all<{ n: number }>(sql, [id]))[0]?.n);
  const [attempts, events, xp, badges] = await Promise.all([
    count('SELECT COUNT(*) AS n FROM attempts WHERE student_id = ?'),
    count('SELECT COUNT(*) AS n FROM events WHERE student_id = ?'),
    count('SELECT COUNT(*) AS n FROM student_xp WHERE student_id = ?'),
    count('SELECT COUNT(*) AS n FROM student_badges WHERE student_id = ?'),
  ]);
  const meta = JSON.stringify({ rows: { students: 1, attempts, events, xp, badges }, by: adminEmail, at: now });
  const statements: Statement[] = [
    { sql: 'DELETE FROM student_badges WHERE student_id = ?', params: [id] },
    { sql: 'DELETE FROM student_xp WHERE student_id = ?', params: [id] },
    { sql: 'DELETE FROM attempts WHERE student_id = ?', params: [id] },
    { sql: 'DELETE FROM events WHERE student_id = ?', params: [id] },
    { sql: 'DELETE FROM students WHERE id = ?', params: [id] },
    { sql: `INSERT INTO events (ts, type, device_id, session_id, student_id, meta) VALUES (?, 'admin_delete', 'admin', 'admin', NULL, ?)`, params: [now, meta] },
  ];
  await db.batch(statements);
  return { ok: true, deleted: { attempts, events, xp, badges } };
}
