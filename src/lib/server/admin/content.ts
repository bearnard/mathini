// "What" aggregates (ADR 0002, section 3): topics, struggle points, learn -> practice conversion
// and mock-test scores.
//
// Two SEPARATE sources, never added together (a topic that emits both would be counted twice):
//   answers: `attempts` (one row per answered question; full history; signed-in learners; NOT written
//            by the Grade 6 Natural Sciences, Geography, History and Afrikaans shells)
//   runs:    `practice_finish` events (one per finished run, score/total in meta; every shell, anonymous
//            too; starts when tracking started)
// All topic keys are task slugs, so the topic_open id inconsistency does not matter here.

import type { AdminDb, Param } from './db';
import { attemptWhere, eventWhere } from './queries';
import type { Filters } from './filters';
export { lowestAccuracy, lowestRunScore, MIN_ANSWERS_FOR_ACCURACY, MIN_RUNS_FOR_SCORE, MIN_SESSIONS_FOR_CONVERSION, type AccuracyRow } from './contentView';

const num = (v: unknown): number => (typeof v === 'number' ? v : Number(v ?? 0)) || 0;

export interface AnswerTopic {
  subject: string;
  grade: number;
  topic: string;
  learners: number;
  questions: number;
  correct: number;
}
export interface RunTopic {
  subject: string | null;
  grade: number | null;
  topic: string;
  /** Finished practice runs. */
  runs: number;
  /** Unique devices that finished a run. */
  practisers: number;
  /** Sum of the total (questions) and of the score across runs. */
  questions: number;
  score: number;
}
export interface Conversion {
  subject: string | null;
  grade: number | null;
  topic: string;
  /** Visits in which the learner finished the learn slides for this topic. */
  learnSessions: number;
  /** ...of which went on to start practice later in the same visit. */
  thenPractised: number;
  /** Visits that started practice for this topic. */
  practiceSessions: number;
  /** ...of which finished the run. */
  finished: number;
}
export interface MockStat {
  /** e.g. "term-3-mock-test" */
  test: string;
  tests: number;
  /** Counts for score 0..total. */
  histogram: number[];
  total: number;
  average: number | null;
}
export interface ContentData {
  answers: AnswerTopic[];
  runs: RunTopic[];
  conversion: Conversion[];
  mock: MockStat[];
}

export async function content(db: AdminDb, f: Filters): Promise<ContentData> {
  const at = attemptWhere(f);
  const fin = eventWhere(f, `type = 'practice_finish' AND topic IS NOT NULL`);
  const learn = eventWhere(f, `type = 'learn_complete' AND topic IS NOT NULL`);
  const start = eventWhere(f, `type = 'practice_start' AND topic IS NOT NULL`);
  const mock = eventWhere(f, `type = 'mock_test_finish'`);

  // Learn/practice are matched per visit (session) and topic, with null-safe comparisons (IS).
  const convSql = `
    WITH l AS (SELECT subject, grade, topic, session_id, MIN(ts) AS t FROM events WHERE ${learn.sql} GROUP BY subject, grade, topic, session_id),
         s AS (SELECT subject, grade, topic, session_id, MAX(ts) AS t FROM events WHERE ${start.sql} GROUP BY subject, grade, topic, session_id),
         f AS (SELECT subject, grade, topic, session_id FROM events WHERE ${fin.sql} GROUP BY subject, grade, topic, session_id)
    SELECT 'learn' AS k, l.subject, l.grade, l.topic, COUNT(*) AS a,
           SUM(CASE WHEN s.t IS NOT NULL AND s.t >= l.t THEN 1 ELSE 0 END) AS b
      FROM l LEFT JOIN s ON s.subject IS l.subject AND s.grade IS l.grade AND s.topic = l.topic AND s.session_id = l.session_id
     GROUP BY l.subject, l.grade, l.topic
    UNION ALL
    SELECT 'practice' AS k, s.subject, s.grade, s.topic, COUNT(*) AS a,
           SUM(CASE WHEN f.session_id IS NOT NULL THEN 1 ELSE 0 END) AS b
      FROM s LEFT JOIN f ON f.subject IS s.subject AND f.grade IS s.grade AND f.topic = s.topic AND f.session_id = s.session_id
     GROUP BY s.subject, s.grade, s.topic`;

  const [ans, runs, conv, mocks] = await Promise.all([
    db.all<{ subject: string; grade: number; topic: string; learners: number; q: number; c: number }>(
      `SELECT subject, grade, topic, COUNT(DISTINCT student_id) AS learners, COUNT(*) AS q, COALESCE(SUM(is_correct), 0) AS c
         FROM attempts WHERE ${at.sql} GROUP BY subject, grade, topic`,
      at.params,
    ),
    db.all<{ subject: string | null; grade: number | null; topic: string; runs: number; practisers: number; q: number; sc: number }>(
      `SELECT subject, grade, topic, COUNT(*) AS runs,
              COUNT(DISTINCT CASE WHEN device_id != 'dnt' THEN device_id END) AS practisers,
              COALESCE(SUM(json_extract(meta, '$.total')), 0) AS q,
              COALESCE(SUM(json_extract(meta, '$.score')), 0) AS sc
         FROM events WHERE ${fin.sql} GROUP BY subject, grade, topic`,
      fin.params,
    ),
    db.all<{ k: string; subject: string | null; grade: number | null; topic: string; a: number; b: number }>(convSql, [...learn.params, ...start.params, ...fin.params]),
    db.all<{ test: string | null; score: number | null; total: number | null; n: number }>(
      `SELECT topic AS test, CAST(json_extract(meta, '$.score') AS INTEGER) AS score, CAST(json_extract(meta, '$.total') AS INTEGER) AS total, COUNT(*) AS n
         FROM events WHERE ${mock.sql} GROUP BY topic, score, total`,
      mock.params as Param[],
    ),
  ]);

  const answers: AnswerTopic[] = ans
    .map((r) => ({ subject: r.subject, grade: num(r.grade), topic: r.topic, learners: num(r.learners), questions: num(r.q), correct: num(r.c) }))
    .sort((a, b) => b.questions - a.questions || a.topic.localeCompare(b.topic))
    .slice(0, 200);

  const runList: RunTopic[] = runs
    .map((r) => ({ subject: r.subject, grade: r.grade === null ? null : num(r.grade), topic: r.topic, runs: num(r.runs), practisers: num(r.practisers), questions: num(r.q), score: num(r.sc) }))
    .sort((a, b) => b.runs - a.runs || a.topic.localeCompare(b.topic))
    .slice(0, 200);

  const key = (r: { subject: string | null; grade: number | null; topic: string }) => `${r.subject ?? ''}|${r.grade ?? ''}|${r.topic}`;
  const convMap = new Map<string, Conversion>();
  const row = (r: { subject: string | null; grade: number | null; topic: string }) => {
    const k = key(r);
    if (!convMap.has(k)) convMap.set(k, { subject: r.subject, grade: r.grade === null ? null : num(r.grade), topic: r.topic, learnSessions: 0, thenPractised: 0, practiceSessions: 0, finished: 0 });
    return convMap.get(k)!;
  };
  for (const r of conv) {
    const c = row(r);
    if (r.k === 'learn') {
      c.learnSessions = num(r.a);
      c.thenPractised = num(r.b);
    } else {
      c.practiceSessions = num(r.a);
      c.finished = num(r.b);
    }
  }
  const conversion = [...convMap.values()].sort((a, b) => b.learnSessions + b.practiceSessions - (a.learnSessions + a.practiceSessions) || a.topic.localeCompare(b.topic)).slice(0, 200);

  const byTest = new Map<string, { tests: number; hist: Map<number, number>; total: number; sum: number }>();
  for (const m of mocks) {
    if (!m.test || m.score === null || m.total === null || m.total <= 0) continue;
    const e = byTest.get(m.test) ?? { tests: 0, hist: new Map(), total: num(m.total), sum: 0 };
    const score = Math.max(0, Math.min(num(m.total), num(m.score)));
    e.tests += num(m.n);
    e.sum += score * num(m.n);
    e.hist.set(score, (e.hist.get(score) ?? 0) + num(m.n));
    e.total = Math.max(e.total, num(m.total));
    byTest.set(m.test, e);
  }
  const mockStats: MockStat[] = [...byTest.entries()]
    .map(([test, e]) => ({
      test,
      tests: e.tests,
      total: e.total,
      histogram: Array.from({ length: e.total + 1 }, (_, s) => e.hist.get(s) ?? 0),
      average: e.tests > 0 ? e.sum / e.tests : null,
    }))
    .sort((a, b) => a.test.localeCompare(b.test));

  return { answers, runs: runList, conversion, mock: mockStats };
}
