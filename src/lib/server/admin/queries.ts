// Aggregate SQL for the admin dashboard. Every function takes an AdminDb, so the
// same SQL runs on D1 (production) and node:sqlite (tests). Times are SAST.
//
// Event filters: when a grade or subject filter is set, only events TAGGED with
// that grade/subject are counted (page views carry no grade, so a filter narrows
// visitors to people who opened or practised that grade/subject).

import type { AdminDb, Param } from './db';
import { dateRange, previousPeriod, SAST_OFFSET_MS, type Filters } from './filters';

const DAY_BUCKET = (col: string) => `strftime('%Y-%m-%d', ${col} / 1000 + ${SAST_OFFSET_MS / 1000}, 'unixepoch')`;
const MAX_SESSION_MS = 2 * 60 * 60 * 1000;

/** Subject codes of the Grade 6 topic shells that began recording answers later than other subjects. */
export const SHELL_SUBJECT_CODES = ['nst', 'geo', 'his', 'afr'] as const;

interface Where {
  sql: string;
  params: Param[];
}

/** WHERE clause for the events table (excludes server-only admin rows). */
export function eventWhere(f: Filters, extra = ''): Where {
  let sql = `ts >= ? AND ts < ? AND type != 'admin_delete'`;
  const params: Param[] = [f.fromMs, f.toMs];
  if (f.grade !== null) {
    sql += ' AND grade = ?';
    params.push(f.grade);
  }
  if (f.subject !== null) {
    sql += ' AND subject = ?';
    params.push(f.subject);
  }
  if (extra) sql += ` AND ${extra}`;
  return { sql, params };
}

/** WHERE clause for the attempts table. */
export function attemptWhere(f: Filters): Where {
  let sql = 'created_at >= ? AND created_at < ?';
  const params: Param[] = [f.fromMs, f.toMs];
  if (f.grade !== null) {
    sql += ' AND grade = ?';
    params.push(f.grade);
  }
  if (f.subject !== null) {
    sql += ' AND subject = ?';
    params.push(f.subject);
  }
  return { sql, params };
}

export interface PeriodTotals {
  visitors: number;
  /** Do Not Track visits, counted per session (they have no device id). */
  dntSessions: number;
  learners: number;
  signups: number;
  questions: number;
  correct: number;
  /** Finished practice runs (from practice_finish events: covers every topic shell, anonymous too). */
  runs: number;
  /** Sum of run scores and of run totals (score / total = average run score). */
  runScore: number;
  runTotal: number;
  /** Average length of sessions with 2+ events, capped at 2 h, in seconds (null when none). */
  sessionSeconds: number | null;
}

const num = (v: unknown): number => (typeof v === 'number' ? v : Number(v ?? 0)) || 0;

export async function periodTotals(db: AdminDb, f: Filters): Promise<PeriodTotals> {
  const ev = eventWhere(f);
  const at = attemptWhere(f);
  const signupParams: Param[] = [f.fromMs, f.toMs];
  let signupSql = 'created_at >= ? AND created_at < ?';
  if (f.grade !== null) {
    signupSql += ' AND grade = ?';
    signupParams.push(f.grade);
  }

  const runEv = eventWhere(f, `type = 'practice_finish'`);
  const [vis, learn, sign, att, sess, runs] = await Promise.all([
    db.all<{ devices: number; dnt: number }>(
      `SELECT COUNT(DISTINCT CASE WHEN device_id != 'dnt' THEN device_id END) AS devices,
              COUNT(DISTINCT CASE WHEN device_id = 'dnt' THEN session_id END) AS dnt
         FROM events WHERE ${ev.sql}`,
      ev.params,
    ),
    db.all<{ n: number }>(
      `SELECT COUNT(*) AS n FROM (
         SELECT student_id FROM events WHERE student_id IS NOT NULL AND ${ev.sql}
         UNION
         SELECT student_id FROM attempts WHERE ${at.sql})`,
      [...ev.params, ...at.params],
    ),
    db.all<{ n: number }>(`SELECT COUNT(*) AS n FROM students WHERE ${signupSql}`, signupParams),
    db.all<{ n: number; c: number }>(`SELECT COUNT(*) AS n, COALESCE(SUM(is_correct), 0) AS c FROM attempts WHERE ${at.sql}`, at.params),
    db.all<{ avg_ms: number | null }>(
      `SELECT AVG(dur) AS avg_ms FROM (
         SELECT CASE WHEN MAX(ts) - MIN(ts) > ${MAX_SESSION_MS} THEN ${MAX_SESSION_MS} ELSE MAX(ts) - MIN(ts) END AS dur
           FROM events WHERE ${ev.sql}
          GROUP BY session_id HAVING COUNT(*) >= 2)`,
      ev.params,
    ),
    db.all<{ n: number; sc: number; tot: number }>(
      `SELECT COUNT(*) AS n,
              COALESCE(SUM(json_extract(meta, '$.score')), 0) AS sc,
              COALESCE(SUM(json_extract(meta, '$.total')), 0) AS tot
         FROM events WHERE ${runEv.sql}`,
      runEv.params,
    ),
  ]);

  const avg = sess[0]?.avg_ms;
  return {
    visitors: num(vis[0]?.devices),
    dntSessions: num(vis[0]?.dnt),
    learners: num(learn[0]?.n),
    signups: num(sign[0]?.n),
    questions: num(att[0]?.n),
    correct: num(att[0]?.c),
    runs: num(runs[0]?.n),
    runScore: num(runs[0]?.sc),
    runTotal: num(runs[0]?.tot),
    sessionSeconds: avg === null || avg === undefined ? null : Math.round(num(avg) / 1000),
  };
}

export interface DayPoint {
  date: string;
  visitors: number;
  learners: number;
  signups: number;
  questions: number;
  correct: number;
  /** Finished practice runs that day (practice_finish events). */
  runs: number;
}

/** One point per SAST day in the range, zero-filled. */
export async function dailySeries(db: AdminDb, f: Filters): Promise<DayPoint[]> {
  const ev = eventWhere(f);
  const at = attemptWhere(f);
  const signupParams: Param[] = [f.fromMs, f.toMs];
  let signupSql = 'created_at >= ? AND created_at < ?';
  if (f.grade !== null) {
    signupSql += ' AND grade = ?';
    signupParams.push(f.grade);
  }

  const runEv = eventWhere(f, `type = 'practice_finish'`);
  const [vis, learn, sign, att, runs] = await Promise.all([
    db.all<{ d: string; n: number }>(
      `SELECT ${DAY_BUCKET('ts')} AS d, COUNT(DISTINCT CASE WHEN device_id != 'dnt' THEN device_id END) AS n
         FROM events WHERE ${ev.sql} GROUP BY d`,
      ev.params,
    ),
    db.all<{ d: string; n: number }>(
      `SELECT d, COUNT(DISTINCT s) AS n FROM (
         SELECT ${DAY_BUCKET('ts')} AS d, student_id AS s FROM events WHERE student_id IS NOT NULL AND ${ev.sql}
         UNION
         SELECT ${DAY_BUCKET('created_at')} AS d, student_id AS s FROM attempts WHERE ${at.sql}) GROUP BY d`,
      [...ev.params, ...at.params],
    ),
    db.all<{ d: string; n: number }>(`SELECT ${DAY_BUCKET('created_at')} AS d, COUNT(*) AS n FROM students WHERE ${signupSql} GROUP BY d`, signupParams),
    db.all<{ d: string; n: number; c: number }>(
      `SELECT ${DAY_BUCKET('created_at')} AS d, COUNT(*) AS n, COALESCE(SUM(is_correct), 0) AS c FROM attempts WHERE ${at.sql} GROUP BY d`,
      at.params,
    ),
    db.all<{ d: string; n: number }>(`SELECT ${DAY_BUCKET('ts')} AS d, COUNT(*) AS n FROM events WHERE ${runEv.sql} GROUP BY d`, runEv.params),
  ]);

  const by = <T extends { d: string }>(rows: T[]) => new Map(rows.map((r) => [r.d, r]));
  const v = by(vis), l = by(learn), s = by(sign), a = by(att), r = by(runs);
  return dateRange(f.fromDate, f.toDate).map((date) => ({
    date,
    visitors: num(v.get(date)?.n),
    learners: num(l.get(date)?.n),
    signups: num(s.get(date)?.n),
    questions: num(a.get(date)?.n),
    correct: num(a.get(date)?.c),
    runs: num(r.get(date)?.n),
  }));
}

export interface Tile {
  value: number | null;
  prev: number | null;
  /** Relative change vs the previous period (0.12 = +12%); null when the previous value is 0 or missing. */
  delta: number | null;
  /** Daily values across the range. */
  spark: (number | null)[];
}

export interface Overview {
  range: { from: string; to: string; days: number; previousFrom: string; previousTo: string };
  tiles: {
    visitors: Tile & { dntSessions: number };
    learners: Tile;
    signups: Tile;
    questions: Tile;
    /** 0..1 */
    accuracy: Tile & { deltaPoints: number | null };
    /** Finished practice runs (practice_finish events). */
    runs: Tile;
    /** Average run score, 0..1 (sum of scores / sum of totals). */
    runScore: Tile & { deltaPoints: number | null };
    sessionSeconds: Tile;
  };
  /** Distinct subject codes present in the data, for the filter. */
  options: { subjects: string[] };
  consent: { learners: number; consented: number };
  /** SAST date of the first recorded event, or null. */
  eventsSince: string | null;
  /**
   * SAST date of the first recorded ANSWER for Grade 6 Natural Sciences, Geography, History or Afrikaans
   * (these started recording later than other subjects), or null when none has been recorded yet.
   */
  recordedSince: string | null;
  generatedAt: number;
}

const rel = (cur: number | null, prev: number | null): number | null =>
  cur === null || prev === null || prev === 0 ? null : (cur - prev) / prev;

export async function overview(db: AdminDb, f: Filters, now: number = Date.now()): Promise<Overview> {
  const pf = previousPeriod(f);
  const [cur, prev, series, consent, first, subjects, shells] = await Promise.all([
    periodTotals(db, f),
    periodTotals(db, pf),
    dailySeries(db, f),
    db.all<{ total: number; consented: number }>('SELECT COUNT(*) AS total, COUNT(parent_consent_at) AS consented FROM students'),
    db.all<{ first_ts: number | null }>(`SELECT MIN(ts) AS first_ts FROM events WHERE type != 'admin_delete'`),
    db.all<{ subject: string }>(
      `SELECT subject FROM attempts WHERE subject IS NOT NULL
       UNION SELECT subject FROM events WHERE subject IS NOT NULL AND type != 'admin_delete' ORDER BY subject`,
    ),
    db.all<{ t: number | null }>(`SELECT MIN(created_at) AS t FROM attempts WHERE grade = 6 AND subject IN (${SHELL_SUBJECT_CODES.map(() => '?').join(',')})`, [...SHELL_SUBJECT_CODES]),
  ]);

  const acc = (t: PeriodTotals) => (t.questions > 0 ? t.correct / t.questions : null);
  const accCur = acc(cur);
  const accPrev = acc(prev);
  const runAcc = (t: PeriodTotals) => (t.runTotal > 0 ? t.runScore / t.runTotal : null);
  const runCur = runAcc(cur);
  const runPrev = runAcc(prev);
  const tile = (value: number | null, prevValue: number | null, spark: (number | null)[]): Tile => ({
    value,
    prev: prevValue,
    delta: rel(value, prevValue),
    spark,
  });

  const firstTs = first[0]?.first_ts;
  const shellTs = shells[0]?.t;
  return {
    range: { from: f.fromDate, to: f.toDate, days: f.days, previousFrom: pf.fromDate, previousTo: pf.toDate },
    tiles: {
      visitors: { ...tile(cur.visitors, prev.visitors, series.map((d) => d.visitors)), dntSessions: cur.dntSessions },
      learners: tile(cur.learners, prev.learners, series.map((d) => d.learners)),
      signups: tile(cur.signups, prev.signups, series.map((d) => d.signups)),
      questions: tile(cur.questions, prev.questions, series.map((d) => d.questions)),
      accuracy: {
        ...tile(accCur, accPrev, series.map((d) => (d.questions > 0 ? d.correct / d.questions : null))),
        deltaPoints: accCur !== null && accPrev !== null ? accCur - accPrev : null,
      },
      runs: tile(cur.runs, prev.runs, series.map((d) => d.runs)),
      runScore: { ...tile(runCur, runPrev, []), deltaPoints: runCur !== null && runPrev !== null ? runCur - runPrev : null },
      sessionSeconds: tile(cur.sessionSeconds, prev.sessionSeconds, []),
    },
    options: { subjects: subjects.map((s) => s.subject) },
    consent: { learners: num(consent[0]?.total), consented: num(consent[0]?.consented) },
    eventsSince: firstTs === null || firstTs === undefined ? null : new Date(num(firstTs) + SAST_OFFSET_MS).toISOString().slice(0, 10),
    recordedSince: shellTs === null || shellTs === undefined ? null : new Date(num(shellTs) + SAST_OFFSET_MS).toISOString().slice(0, 10),
    generatedAt: now,
  };
}
