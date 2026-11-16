// ADR 0005 part 2: builds the response of GET /api/progress (the type is src/lib/shared/progressTypes.ts, the contract with the "My progress" page).
// Everything the page shows is computed HERE, from topic_progress, attempts, runs and review_items; the page only formats it.
//
// Cost: at most 8 reads per request, all for ONE learner (the route checks the session; there is no way to ask for anyone else).
// Sections that depend on tables a deployment may not have yet (review_items, runs) degrade to "no data" instead of failing the page.
import type { AdminDb } from '../admin/db';
import type { ConsistencyProgress, MasteryLevel, ProgressResponse, RecentSession, RetentionProgress, SubjectProgress, TestResult, TestSeries, TopicProgress } from '../../shared/progressTypes';
import {
  consistency, examReadiness, improvementPoints, nextBestStep, parentNextStep, teacherNextStep, retentionPct, sastDayNumber, sortWeakestFirst, subjectMastery, trendPoints, type TrendAttempt,
} from '../../shared/progressMeasures';
import { examScopeForGrade } from '../../shared/examScopes';
import { dailyPlan, dayNumberOf, daysUntil, type PlanTopic } from '../../shared/dailyPlan';
import { scopesForStudent } from '../schools/scopes';
import { sastDay } from '../review/scheduler';
import { ensureProgressRows } from './topicProgress';
import { SUBJECT_TITLES, TOPIC_NAMES } from '../../../components/admin/topicNames.generated';
import { prettifySlug } from '../../../components/admin/names';

/** Where "Practise this" and the review button go. The app has no deep links to a topic yet, so every action opens the app; the learner picks there. */
export const APP_HREF = '/app';
const UNTRIED_PER_SUBJECT = 6;
const TESTS_SHOWN = 20;
const SERIES_SHOWN = 4;
const SERIES_POINTS = 10;
const TEST_HISTORY_READ = 120;
const TREND_ATTEMPTS_READ = 600;
const STREAK_LOOKBACK_DAYS = 120;
const DAY_MS = 86_400_000;
const TEST_KINDS = ['quiz', 'mock_test', 'exam_practice'] as const;

interface TpRow {
  task: string; grade: number; subject: string; topic: string; attempts: number; last20_pct: number | null; first10_pct: number | null; last10_pct: number | null;
  mastery: string; last_attempt_at: number; days_practised?: number;
}
interface RunRow { id: string; subject: string; kind: string; scope_key: string; scope_label: string; score_pct: number; n_correct: number; n_items: number; n_answered: number; finished_at: number }

const iso = (ms: number) => new Date(ms).toISOString();
const safe = async <T,>(f: () => Promise<T>, fallback: T): Promise<T> => {
  try {
    return await f();
  } catch {
    return fallback;
  }
};

/** Subject title for an attempts.subject code, for a grade. Unknown codes fall back to the code itself. */
const subjectLabel = (code: string, grade: number): string => SUBJECT_TITLES[`${grade}|${code}`] ?? Object.entries(SUBJECT_TITLES).find(([k]) => k.endsWith(`|${code}`))?.[1] ?? code;
const topicLabel = (grade: number, task: string): string => TOPIC_NAMES[`${grade}|${task}`]?.[0] ?? prettifySlug(task);

/** The last practice sessions from the latest answers (newest first in `rows`): one per run, or one per topic per day for answers outside a run. Pure. */
export function recentSessionsOf(rows: readonly { task: string; is_correct: number; created_at: number; run_id: string | null }[], grade: number, limit = 5): RecentSession[] {
  const groups = new Map<string, { at: number; tasks: Map<string, number>; answered: number; correct: number }>();
  for (const r of rows) {
    const key = r.run_id ?? `${r.task}|${Math.floor((Number(r.created_at) + 7_200_000) / 86_400_000)}`;
    const g = groups.get(key) ?? { at: 0, tasks: new Map(), answered: 0, correct: 0 };
    g.at = Math.max(g.at, Number(r.created_at));
    g.tasks.set(r.task, Math.max(g.tasks.get(r.task) ?? 0, Number(r.created_at)));
    g.answered += 1;
    g.correct += Number(r.is_correct) === 1 ? 1 : 0;
    groups.set(key, g);
  }
  return [...groups.values()].sort((a, b) => b.at - a.at).slice(0, limit).map((g) => {
    const tasks = [...g.tasks.entries()].sort((a, b) => b[1] - a[1]).map(([t]) => t);
    return {
      at: new Date(g.at).toISOString(),
      label: tasks.length === 1 ? topicLabel(grade, tasks[0]) : `${topicLabel(grade, tasks[0])} and ${tasks.length - 1} more`,
      answered: g.answered,
      correct: g.correct,
      scorePct: Math.round((g.correct / g.answered) * 100),
    };
  });
}

export async function buildProgress(db: AdminDb, studentId: string, now: number): Promise<ProgressResponse | null> {
  const student = (await db.all<{ grade: number; display_name: string }>('SELECT grade, display_name FROM students WHERE id = ?', [studentId]))[0];
  if (!student) return null;
  const grade = Number(student.grade);

  // --- topics (the cache) and their trends (a bounded look at the latest attempts)
  const readTp = () => db.all<TpRow>(
    'SELECT task, grade, subject, topic, attempts, last20_pct, first10_pct, last10_pct, days_practised, mastery, last_attempt_at FROM topic_progress WHERE student_id = ? ORDER BY last_attempt_at DESC LIMIT 400',
    [studentId],
  );
  let tp = await readTp();
  // Answers but no cached rows (history from before the cache, or no finished run yet): build them now, once. A failure here only leaves the page as it was.
  if (tp.length === 0 && (await safe(() => ensureProgressRows(db, studentId, now), 0)) > 0) tp = await readTp();
  const recent = await safe(
    () => db.all<{ task: string; is_correct: number; created_at: number; run_id: string | null }>("SELECT task, is_correct, created_at, run_id FROM attempts WHERE student_id = ? AND marked_by IS NOT 'client' ORDER BY id DESC LIMIT ?", [studentId, TREND_ATTEMPTS_READ]),
    [],
  );
  const recentSessions = recentSessionsOf(recent, grade);
  const byTask = new Map<string, TrendAttempt[]>();
  for (const a of [...recent].reverse()) {
    const list = byTask.get(a.task) ?? [];
    list.push({ correct: Number(a.is_correct) === 1, at: Number(a.created_at), runId: a.run_id });
    byTask.set(a.task, list);
  }

  // --- finished tests (newest first) and the previous result on the same scope
  const finished = await safe(
    () => db.all<RunRow>(
      `SELECT id, subject, kind, scope_key, scope_label, score_pct, n_correct, n_items, n_answered, finished_at FROM runs
       WHERE student_id = ? AND status = 'finished' AND kind IN ('quiz', 'mock_test', 'exam_practice') AND score_pct IS NOT NULL AND n_answered > 0
       ORDER BY finished_at DESC LIMIT ?`,
      [studentId, TEST_HISTORY_READ],
    ),
    [],
  );
  const tests: TestResult[] = finished.slice(0, TESTS_SHOWN).map((r, i) => {
    const previous = finished.slice(i + 1).find((p) => p.scope_key === r.scope_key);
    return {
      runId: r.id,
      kind: r.kind as TestResult['kind'],
      scopeKey: r.scope_key,
      scopeLabel: r.scope_label || r.scope_key,
      scorePct: Number(r.score_pct),
      nCorrect: Number(r.n_correct),
      nItems: Math.max(Number(r.n_items), Number(r.n_answered)),
      finishedAt: iso(Number(r.finished_at)),
      changeSinceLast: previous ? Number(r.score_pct) - Number(previous.score_pct) : null,
    };
  });
  const seriesMap = new Map<string, RunRow[]>();
  for (const r of finished) seriesMap.set(r.scope_key, [...(seriesMap.get(r.scope_key) ?? []), r]);
  const testSeries: TestSeries[] = [...seriesMap.values()]
    .filter((rs) => rs.length >= 2)
    .sort((a, b) => Number(b[0].finished_at) - Number(a[0].finished_at))
    .slice(0, SERIES_SHOWN)
    .map((rs) => ({
      scopeKey: rs[0].scope_key,
      scopeLabel: rs[0].scope_label || rs[0].scope_key,
      points: rs.slice(0, SERIES_POINTS).reverse().map((r) => ({ finishedAt: iso(Number(r.finished_at)), scorePct: Number(r.score_pct) })),
    }));

  // --- topics by subject, weakest first, with a few untried topics so there is somewhere to go
  const practisedTasks = new Set(tp.map((r) => r.task));
  const bySubject = new Map<string, TopicProgress[]>();
  const subjectGrade = new Map<string, number>();
  const toTopic = (r: TpRow): TopicProgress => ({
    task: r.task,
    label: topicLabel(Number(r.grade), r.task),
    level: r.mastery as MasteryLevel,
    accuracyPct: r.last20_pct === null ? null : Number(r.last20_pct),
    attempts: Number(r.attempts),
    trend: trendPoints(byTask.get(r.task) ?? []),
    changePoints: improvementPoints(Number(r.attempts), r.first10_pct === null ? null : Number(r.first10_pct), r.last10_pct === null ? null : Number(r.last10_pct), r.days_practised === undefined ? undefined : Number(r.days_practised)),
    practiseHref: APP_HREF,
  });
  for (const r of tp) {
    bySubject.set(r.subject, [...(bySubject.get(r.subject) ?? []), toTopic(r)]);
    subjectGrade.set(r.subject, Number(r.grade));
  }
  const untriedAll: { subject: string; task: string; label: string }[] = [];
  for (const [code, g] of subjectGrade) {
    const title = subjectLabel(code, g);
    let added = 0;
    for (const [key, [label, subjectTitle]] of Object.entries(TOPIC_NAMES)) {
      if (added >= UNTRIED_PER_SUBJECT) break;
      const [kg, ...rest] = key.split('|');
      const task = rest.join('|');
      if (Number(kg) !== g || subjectTitle !== title || practisedTasks.has(task)) continue;
      bySubject.get(code)!.push({ task, label, level: 'not_started', accuracyPct: null, attempts: 0, trend: [], changePoints: null, practiseHref: APP_HREF });
      untriedAll.push({ subject: code, task, label });
      added++;
    }
  }
  const subjects: SubjectProgress[] = [...bySubject.entries()]
    .map(([code, topics]) => {
      const sorted = sortWeakestFirst(topics);
      const m = subjectMastery(sorted);
      return { subject: code, label: subjectLabel(code, subjectGrade.get(code) ?? grade), masteryPct: m.masteryPct, level: m.level, topics: sorted };
    })
    .sort((a, b) => (a.masteryPct === null ? 1 : 0) - (b.masteryPct === null ? 1 : 0) || (a.masteryPct ?? 0) - (b.masteryPct ?? 0) || a.label.localeCompare(b.label));

  // --- the exam: the class's exam when a teacher set one (nearest date first), else the built-in scope for the grade
  const today = sastDay(now);
  const classScopes = await safe(() => scopesForStudent(db, studentId, now), []);
  const teacherScope = classScopes[0] ?? null;
  const builtIn = teacherScope ? null : examScopeForGrade(grade);
  const scope = teacherScope
    ? { scopeKey: `class-scope:${teacherScope.id}`, label: teacherScope.title, tasks: teacherScope.tasks, grade: teacherScope.grade }
    : builtIn
      ? { scopeKey: builtIn.scopeKey, label: builtIn.label, tasks: builtIn.tasks, grade: builtIn.grade }
      : null;
  let exam: ProgressResponse['exam'] = null;
  let weakestInScope: { label: string; href: string } | null = null;
  let untriedInScope: { label: string; href: string } | null = null;
  let planTopics: PlanTopic[] = [];
  let daysSinceMock: number | null = null;
  const examDay = teacherScope ? dayNumberOf(teacherScope.examDate) : null;
  if (scope) {
    const byTaskRow = new Map(tp.map((r) => [r.task, r]));
    const isMock = (r: RunRow) => r.kind === 'mock_test' || r.kind === 'exam_practice';
    const mockRun = teacherScope
      ? finished.find((r) => isMock(r) && r.subject === teacherScope.subject) // a practice test in the exam's subject
      : finished.find((r) => isMock(r) && builtIn!.mockScopeKeys.includes(r.scope_key));
    const latestMock = mockRun ? { scorePct: Number(mockRun.score_pct), finishedAt: iso(Number(mockRun.finished_at)) } : null;
    if (mockRun) daysSinceMock = Math.max(0, sastDayNumber(now) - sastDayNumber(Number(mockRun.finished_at)));
    const e = examReadiness({ scopeKey: scope.scopeKey, label: scope.label, topics: scope.tasks.map((t) => ({ accuracyPct: byTaskRow.get(t)?.last20_pct ?? null })), latestMock });
    exam = !teacherScope && e.readinessPct === null && e.topicsPractised === 0 && !latestMock ? null : e;
    const weak = scope.tasks
      .map((t) => byTaskRow.get(t))
      .filter((r): r is TpRow => !!r && r.mastery !== 'mastered' && r.mastery !== 'not_started' && r.last20_pct !== null)
      .sort((a, b) => Number(a.last20_pct) - Number(b.last20_pct))[0];
    if (weak) weakestInScope = { label: topicLabel(Number(weak.grade), weak.task), href: APP_HREF };
    const untriedTask = scope.tasks.find((t) => !byTaskRow.has(t));
    if (untriedTask) untriedInScope = { label: topicLabel(scope.grade, untriedTask), href: APP_HREF };
    planTopics = scope.tasks.map((t) => {
      const r = byTaskRow.get(t);
      return { task: t, label: topicLabel(scope.grade, t), level: (r?.mastery ?? 'not_started') as MasteryLevel, accuracyPct: r?.last20_pct == null ? null : Number(r.last20_pct) };
    });
  }

  // --- retention (review cards)
  const due = await safe(() => db.all<{ n: number }>('SELECT COUNT(*) AS n FROM review_items WHERE student_id = ? AND retired_at IS NULL AND due_day <= ?', [studentId, today]), [{ n: 0 }]);
  const retired = await safe(() => db.all<{ n: number }>('SELECT COUNT(*) AS n FROM review_items WHERE student_id = ? AND retired_at IS NOT NULL', [studentId]), [{ n: 0 }]);
  const week = await safe(
    () => db.all<{ a: number; c: number }>("SELECT COALESCE(SUM(n_answered), 0) AS a, COALESCE(SUM(n_correct), 0) AS c FROM runs WHERE student_id = ? AND kind = 'review' AND status = 'finished' AND finished_at >= ?", [studentId, now - 7 * DAY_MS]),
    [{ a: 0, c: 0 }],
  );
  const weekAnswered = Number(week[0]?.a ?? 0);
  const weekCorrect = Math.min(Number(week[0]?.c ?? 0), weekAnswered);
  const dueCount = Number(due[0]?.n ?? 0);
  const retention: RetentionProgress = { weekCorrect, weekAnswered, weekPct: retentionPct(weekCorrect, weekAnswered), retiredCount: Number(retired[0]?.n ?? 0), dueCount };

  // --- consistency
  const dayRows = await safe(
    () => db.all<{ d: number }>("SELECT DISTINCT ((created_at + 7200000) / 86400000) AS d FROM attempts WHERE student_id = ? AND created_at >= ? AND marked_by IS NOT 'client'", [studentId, now - STREAK_LOOKBACK_DAYS * DAY_MS]),
    [],
  );
  const cons: ConsistencyProgress = consistency(dayRows.map((r) => Number(r.d)), sastDayNumber(now));

  if (exam && teacherScope && examDay !== null) {
    const daysLeft = daysUntil(examDay, sastDayNumber(now));
    exam = { ...exam, setByTeacher: true, examDate: teacherScope.examDate, daysLeft, plan: dailyPlan({ daysLeft, topics: planTopics, dueCount, daysSinceMock, appHref: APP_HREF }) };
  }

  const nextStep = nextBestStep({
    dueCount,
    weakestInScope: scope ? weakestInScope : weakestOverall(subjects),
    untried: untriedInScope ?? (untriedAll[0] ? { label: untriedAll[0].label, href: APP_HREF } : null),
    reviewHref: APP_HREF,
    appHref: APP_HREF,
  });
  if (tp.length === 0 && dueCount === 0 && !teacherScope) {
    // A learner who has not started: encourage, never an empty "all caught up".
    return { generatedAt: iso(now), grade, displayName: student.display_name || null, exam: null, subjects: [], tests, testSeries, retention, consistency: cons, recentSessions, parentNextStep: { title: `Ask ${student.display_name?.trim() || 'your child'} to try their first topic`, reason: 'They can pick any topic. Their progress will appear here.' }, teacherNextStep: { title: `Suggest ${student.display_name?.trim() || 'this learner'} try a first topic`, reason: 'They can pick any topic. Their progress will appear here.' }, nextStep: { kind: 'new_topic', title: 'Try your first topic', reason: 'Pick any topic. Your progress will appear here.', href: APP_HREF, cta: 'Choose a topic' } };
  }
  return { generatedAt: iso(now), grade, displayName: student.display_name || null, exam, subjects, tests, testSeries, retention, consistency: cons, nextStep, recentSessions, parentNextStep: parentNextStep({ dueCount, weakestInScope: scope ? weakestInScope : weakestOverall(subjects), untried: untriedInScope ?? (untriedAll[0] ? { label: untriedAll[0].label } : null), name: student.display_name }), teacherNextStep: teacherNextStep({ dueCount, weakestInScope: scope ? weakestInScope : weakestOverall(subjects), untried: untriedInScope ?? (untriedAll[0] ? { label: untriedAll[0].label } : null), name: student.display_name }) };
}

/** With no exam scope for the grade: the weakest practised topic that is not yet mastered, across subjects. */
function weakestOverall(subjects: readonly SubjectProgress[]): { label: string; href: string } | null {
  const all = subjects.flatMap((s) => s.topics).filter((t) => t.level !== 'mastered' && t.level !== 'not_started' && t.accuracyPct !== null);
  all.sort((a, b) => (a.accuracyPct as number) - (b.accuracyPct as number));
  return all[0] ? { label: all[0].label, href: APP_HREF } : null;
}

