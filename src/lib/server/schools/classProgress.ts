// ADR 0005 section 4: the teacher's view of one class. Built from the same data as the learners' own progress (topic_progress, review_items, runs,
// attempts) and the same measures, so a learner and their teacher see the same numbers.
//
// Privacy, enforced here:
//   - only the teacher who owns the class (teacher_user_id = themself) can read it; anyone else gets "not found";
//   - only learners still in the class (left_at IS NULL) are included, by nickname only;
//   - every query is bounded by the class's member ids; nothing reads another learner's data.
// Cost: at most 6 reads per request (class, members, topic rows, due cards, practice tests, attempts for the "since" comparison).
import { allBatch, type AdminDb } from '../admin/db';
import type { ClassLearner, ClassProgress } from '../../shared/classProgressTypes';
import type { MasteryLevel } from '../../shared/progressTypes';
import { behindOnReviews, classTopics, dayLabel, improvementSince, lastDayLabel, mockDistribution, type HistAttempt, type MemberTopic } from '../../shared/classMeasures';
import { dayNumberOf, daysUntil } from '../../shared/dailyPlan';
import { round1, sastDayNumber } from '../../shared/progressMeasures';
import { sastDay } from '../review/scheduler';
import { isUuid } from './classes';
import { scopesForClassStatement, scopesFromRows } from './scopes';
import { TOPIC_NAMES } from '../../../components/admin/topicNames.generated';
import { prettifySlug } from '../../../components/admin/names';

const DAY_MS = 86_400_000;
export const DEFAULT_SINCE_DAYS = 14;
export const MAX_SINCE_DAYS = 180;
const MAX_HISTORY_ROWS = 20_000;
const MAX_TOPICS_SHOWN = 40;

// D1 allows 100 bound variables per statement, and a class of 60 learners with a 40-topic exam would need 100+ with one ? each, so lists go in as ONE
// JSON parameter read with json_each. The member and topic ids are always ours (uuids and slugs), never raw user input.
const JSON_LIST = 'SELECT value FROM json_each(?)';
const topicLabel = (grade: number, task: string) => TOPIC_NAMES[`${grade}|${task}`]?.[0] ?? prettifySlug(task);

export type ClassProgressResult = { ok: true; progress: ClassProgress } | { ok: false; status: number; error: string };

/** `since` is YYYY-MM-DD (South Africa time); default 14 days ago; at most 180 days back and not in the future. */
/** Who is asking: the class's own teacher, or an admin of the class's school (they see the same view). */
export type ClassOwner = string | { schoolId: string };

export async function buildClassProgress(db: AdminDb, owner: ClassOwner, classId: unknown, sinceInput: unknown, now: number): Promise<ClassProgressResult> {
  if (!isUuid(classId)) return { ok: false, status: 404, error: 'Not found' };
  // Round trip 1: the class (is it theirs and active?), its roster and its exams, all three at once. The roster and exams are thrown away if the class is not theirs.
  const [clsRows, memberRows, scopeRows] = await allBatch(db, [
    { sql: typeof owner === 'string' ? "SELECT id, name, grade, subjects, status FROM classes WHERE id = ? AND teacher_user_id = ? AND status = 'active'" : "SELECT id, name, grade, subjects, status FROM classes WHERE id = ? AND school_id = ? AND status = 'active'", params: [classId, typeof owner === 'string' ? owner : owner.schoolId] },
    { sql: 'SELECT m.student_id, st.display_name FROM class_members m JOIN students st ON st.id = m.student_id WHERE m.class_id = ? AND m.left_at IS NULL ORDER BY lower(st.display_name) LIMIT 100', params: [classId] },
    scopesForClassStatement(classId),
  ]);
  const cls = clsRows[0] as { id: string; name: string; grade: number; subjects: string; status: string } | undefined;
  if (!cls) return { ok: false, status: 404, error: 'Not found' };

  const todayDay = sastDayNumber(now);
  let sinceDay = todayDay - DEFAULT_SINCE_DAYS;
  if (sinceInput !== undefined && sinceInput !== null && sinceInput !== '') {
    const d = typeof sinceInput === 'string' ? dayNumberOf(sinceInput) : null;
    if (d === null) return { ok: false, status: 400, error: 'Choose a valid date' };
    if (d > todayDay) return { ok: false, status: 400, error: 'The date cannot be in the future' };
    if (todayDay - d > MAX_SINCE_DAYS) return { ok: false, status: 400, error: `Choose a date within the last ${MAX_SINCE_DAYS} days` };
    sinceDay = d;
  }
  const sinceLabel = dayLabel(sinceDay);
  const sinceMs = (sinceDay + 1) * DAY_MS - 2 * 3600_000; // the END of that SAST day: "how things stood at the close of that day"
  const grade = Number(cls.grade);
  let classSubjects: string[] = [];
  try { const v = JSON.parse(cls.subjects); if (Array.isArray(v)) classSubjects = v.filter((x): x is string => typeof x === 'string'); } catch { /* any subject */ }

  const members = memberRows as { student_id: string; display_name: string }[];
  const ids = members.map((m) => m.student_id);
  const nick = new Map(members.map((m) => [m.student_id, m.display_name]));

  // the exam the class is working towards, and the topics to show
  const scopes = scopesFromRows(scopeRows, now);
  const scope = scopes[0] ?? null;
  const examDay = scope ? dayNumberOf(scope.examDate) : null;
  const exam = scope && examDay !== null ? { title: scope.title, examDate: scope.examDate, daysLeft: daysUntil(examDay, todayDay) } : null;
  const subjectFilter = scope ? [scope.subject] : classSubjects;

  let tpRows: { student_id: string; task: string; subject: string; last20_pct: number | null; mastery: string; last_attempt_at: number }[] = [];
  let due: { student_id: string; due_day: number }[] = [];
  let tests: { student_id: string; score_pct: number; finished_at: number; subject: string }[] = [];
  let history: { student_id: string; task: string; is_correct: number; created_at: number }[] = [];
  let lastAny: { student_id: string; last: number }[] = [];
  // Round trip 2: everything that needs the roster. With an exam set the topics are known already, so the improvement history rides along;
  // without one the topics come from the practised rows, so the history is a third trip.
  const idsJson = JSON.stringify(ids);
  const historyStmt = (tl: string[]) => ({
    sql: `SELECT student_id, task, is_correct, created_at FROM attempts WHERE student_id IN (${JSON_LIST}) AND task IN (${JSON_LIST}) AND created_at >= ? AND marked_by IS NOT 'client' ORDER BY id ASC LIMIT ?`,
    params: [idsJson, JSON.stringify(tl), sinceMs - 120 * DAY_MS, MAX_HISTORY_ROWS] as (string | number)[],
  });
  const examTasks = scope ? scope.tasks : null;
  let historyDone = false;
  if (ids.length > 0) {
    const stmts = [
      { sql: `SELECT student_id, task, subject, last20_pct, mastery, last_attempt_at FROM topic_progress WHERE student_id IN (${JSON_LIST}) LIMIT 4000`, params: [idsJson] },
      { sql: `SELECT student_id, due_day FROM review_items WHERE student_id IN (${JSON_LIST}) AND retired_at IS NULL AND due_day <= ? LIMIT 4000`, params: [idsJson, sastDay(now)] as (string | number)[] },
      { sql: `SELECT student_id, MAX(created_at) AS last FROM attempts WHERE student_id IN (${JSON_LIST}) AND marked_by IS NOT 'client' GROUP BY student_id`, params: [idsJson] },
      { sql: `SELECT student_id, score_pct, finished_at, subject FROM runs WHERE student_id IN (${JSON_LIST}) AND status = 'finished' AND kind IN ('mock_test', 'exam_practice') AND score_pct IS NOT NULL AND n_answered > 0 ORDER BY finished_at DESC LIMIT 2000`, params: [idsJson] },
    ];
    if (examTasks && examTasks.length > 0) { stmts.push(historyStmt(examTasks)); historyDone = true; }
    const res = await allBatch(db, stmts);
    tpRows = res[0] as typeof tpRows; due = res[1] as typeof due; lastAny = res[2] as typeof lastAny; tests = res[3] as typeof tests;
    if (historyDone) history = res[4] as typeof history;
  }
  // topics in view: the exam's topics, else every topic of the class's subject(s) that anybody practised
  const inView = (subject: string) => subjectFilter.length === 0 || subjectFilter.includes(subject);
  const rows = tpRows.filter((r) => (scope ? scope.tasks.includes(r.task) : inView(r.subject)));
  const taskList: { task: string; label: string }[] = scope
    ? scope.tasks.map((t) => ({ task: t, label: topicLabel(grade, t) }))
    : [...new Set(rows.map((r) => r.task))].slice(0, MAX_TOPICS_SHOWN).map((t) => ({ task: t, label: topicLabel(grade, t) }));
  const tasksSet = new Set(taskList.map((t) => t.task));
  const memberTopics: MemberTopic[] = rows.filter((r) => tasksSet.has(r.task)).map((r) => ({ studentId: r.student_id, task: r.task, accuracyPct: r.last20_pct === null ? null : Number(r.last20_pct), level: r.mastery as MasteryLevel }));

  // practice tests in the class's subject(s)
  const latest = new Map<string, number>();
  for (const t of tests) if (inView(t.subject) && !latest.has(t.student_id)) latest.set(t.student_id, Number(t.score_pct));

  // improvement since the chosen date (attempts in the class's topics, from 120 days before it)
  let perLearnerChange = new Map<string, number>();
  let improvementSummary = improvementSince([], sinceMs, sinceLabel).summary;
  if (ids.length > 0 && taskList.length > 0) {
    const tl = taskList.map((t) => t.task);
    if (!historyDone) history = await db.all(historyStmt(tl).sql, historyStmt(tl).params);
    const att: HistAttempt[] = history.map((h) => ({ studentId: h.student_id, task: h.task, correct: Number(h.is_correct) === 1, at: Number(h.created_at) }));
    const r = improvementSince(att, sinceMs, sinceLabel);
    improvementSummary = r.summary;
    perLearnerChange = r.perLearner;
  }

  const dueByLearner = new Map<string, number>();
  for (const d of due) dueByLearner.set(d.student_id, (dueByLearner.get(d.student_id) ?? 0) + 1);
  const learners: ClassLearner[] = members.map((m) => {
    const mine = memberTopics.filter((t) => t.studentId === m.student_id && t.level !== 'not_started' && t.accuracyPct !== null);
    const lastAt = tpRows.filter((r) => r.student_id === m.student_id && tasksSet.has(r.task)).reduce((mx, r) => Math.max(mx, Number(r.last_attempt_at)), 0);
    return {
      studentId: m.student_id,
      nickname: m.display_name,
      topicsPractised: mine.length,
      avgAccuracyPct: mine.length === 0 ? null : round1(mine.reduce((s, t) => s + (t.accuracyPct as number), 0) / mine.length),
      dueCount: dueByLearner.get(m.student_id) ?? 0,
      changePoints: perLearnerChange.get(m.student_id) ?? null,
      lastPractisedDay: lastDayLabel(lastAt > 0 ? lastAt : null),
    };
  });

  return {
    ok: true,
    progress: {
      generatedAt: new Date(now).toISOString(),
      classId: cls.id,
      className: cls.name,
      grade,
      memberCount: members.length,
      exam,
      topics: classTopics(taskList, ids, memberTopics),
      behindOnReviews: behindOnReviews(due.map((d) => ({ studentId: d.student_id, dueDay: Number(d.due_day) })), nick, sastDay(now)),
      mockDistribution: mockDistribution(latest, ids),
      improvement: improvementSummary,
      notPractisedLast7: (() => {
        const last = new Map(lastAny.map((r) => [r.student_id, Number(r.last)]));
        return members
          .map((m) => ({ nickname: m.display_name, at: last.get(m.student_id) ?? null }))
          .filter((x) => x.at === null || x.at < now - 7 * DAY_MS)
          .sort((a, b) => (a.at ?? -1) - (b.at ?? -1) || a.nickname.localeCompare(b.nickname))
          .map((x) => ({ nickname: x.nickname, lastPractisedDay: lastDayLabel(x.at) }));
      })(),
      learners,
    },
  };
}

