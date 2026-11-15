// ADR 0005 section 4: the teacher's class measures, as PURE functions over plain data (no database, no clock). They reuse the learner measures in
// progressMeasures.ts so a learner and their teacher always see the same numbers.
import type { MasteryLevel } from './progressTypes';
import type { BehindOnReviews, ClassTopicProgress, ImprovementSince, MockDistribution, ScoreBucket } from './classProgressTypes';
import { WINDOW, round1, sastDayNumber, weightedAccuracyPct } from './progressMeasures';

/** A card that has waited this many days or more makes a learner "behind". */
export const BEHIND_AFTER_DAYS = 2;
/** History needed before the chosen date, and a change this big counts as up or down. */
export const MIN_BEFORE = 5;
export const MOVE_POINTS = 5;

const LEVELS: MasteryLevel[] = ['not_started', 'learning', 'getting_there', 'mastered'];
export const emptyLevels = (): Record<MasteryLevel, number> => ({ not_started: 0, learning: 0, getting_there: 0, mastered: 0 });

export interface MemberTopic { studentId: string; task: string; accuracyPct: number | null; level: MasteryLevel }

/**
 * Per topic: how many learners practised it, their mean accuracy, and how many are at each level. `tasks` is the list to show (the exam's topics, or
 * every topic anybody practised); a learner with no row for a task counts as not started. Weakest first, topics nobody practised last.
 */
export function classTopics(tasks: readonly { task: string; label: string }[], memberIds: readonly string[], rows: readonly MemberTopic[]): ClassTopicProgress[] {
  const byTask = new Map<string, Map<string, MemberTopic>>();
  for (const r of rows) {
    const m = byTask.get(r.task) ?? new Map();
    m.set(r.studentId, r);
    byTask.set(r.task, m);
  }
  const out = tasks.map(({ task, label }) => {
    const levels = emptyLevels();
    let sum = 0;
    let n = 0;
    for (const id of memberIds) {
      const r = byTask.get(task)?.get(id);
      const level: MasteryLevel = r && LEVELS.includes(r.level) ? r.level : 'not_started';
      levels[level]++;
      if (r && level !== 'not_started' && r.accuracyPct !== null) { sum += r.accuracyPct; n++; }
    }
    return { task, label, practised: n, avgAccuracyPct: n === 0 ? null : round1(sum / n), levels };
  });
  return out.sort((a, b) => {
    const an = a.avgAccuracyPct === null;
    const bn = b.avgAccuracyPct === null;
    if (an !== bn) return an ? 1 : -1;
    if (!an && a.avgAccuracyPct !== b.avgAccuracyPct) return (a.avgAccuracyPct as number) - (b.avgAccuracyPct as number);
    return a.label.localeCompare(b.label);
  });
}

export interface DueCard { studentId: string; dueDay: number }

/** Learners whose oldest due card has waited BEHIND_AFTER_DAYS or more, longest first (then by nickname). `today` is a SAST day number. */
export function behindOnReviews(cards: readonly DueCard[], nicknames: ReadonlyMap<string, string>, today: number): BehindOnReviews[] {
  const by = new Map<string, { n: number; oldest: number }>();
  for (const c of cards) {
    if (c.dueDay > today) continue;
    const e = by.get(c.studentId) ?? { n: 0, oldest: Infinity };
    e.n++;
    e.oldest = Math.min(e.oldest, c.dueDay);
    by.set(c.studentId, e);
  }
  const out: BehindOnReviews[] = [];
  for (const [id, e] of by) {
    const nickname = nicknames.get(id);
    const overdueDays = today - e.oldest;
    if (nickname !== undefined && overdueDays >= BEHIND_AFTER_DAYS) out.push({ nickname, dueCount: e.n, overdueDays });
  }
  return out.sort((a, b) => b.overdueDays - a.overdueDays || b.dueCount - a.dueCount || a.nickname.localeCompare(b.nickname));
}

export const SCORE_BUCKETS: readonly { label: string; from: number; to: number }[] = [
  { label: 'Under 40%', from: 0, to: 39 },
  { label: '40 to 59%', from: 40, to: 59 },
  { label: '60 to 79%', from: 60, to: 79 },
  { label: '80% and over', from: 80, to: 100 },
];

/** The spread of each learner's latest practice-test score. Learners with no score are counted as "not taken", never as 0. */
export function mockDistribution(latestScores: ReadonlyMap<string, number>, memberIds: readonly string[]): MockDistribution {
  const buckets: ScoreBucket[] = SCORE_BUCKETS.map((b) => ({ ...b, count: 0 }));
  let sum = 0;
  let scored = 0;
  for (const id of memberIds) {
    const s = latestScores.get(id);
    if (s === undefined) continue;
    const b = buckets.find((x) => s >= x.from && s <= x.to) ?? buckets[buckets.length - 1];
    b.count++;
    sum += s;
    scored++;
  }
  return { buckets, scored, notTaken: memberIds.length - scored, averagePct: scored === 0 ? null : round1(sum / scored) };
}

export interface HistAttempt { studentId: string; task: string; correct: boolean; at: number }

/**
 * Improvement since a date. For every learner-and-topic with at least MIN_BEFORE attempts on or before `sinceMs` AND at least one after it: the
 * recency-weighted accuracy over the latest 20 attempts now, minus the same as it stood at that date. Averaged per learner, then across the class.
 * `attempts` must be in the order they happened (oldest first).
 */
export function improvementSince(attempts: readonly HistAttempt[], sinceMs: number, sinceLabel: string): { summary: ImprovementSince; perLearner: Map<string, number> } {
  const byPair = new Map<string, HistAttempt[]>();
  for (const a of attempts) {
    const k = `${a.studentId}\u0000${a.task}`;
    byPair.set(k, [...(byPair.get(k) ?? []), a]);
  }
  const deltas = new Map<string, number[]>();
  for (const list of byPair.values()) {
    const before = list.filter((a) => a.at <= sinceMs);
    const after = list.filter((a) => a.at > sinceMs);
    if (before.length < MIN_BEFORE || after.length === 0) continue;
    const then = weightedAccuracyPct(before.slice(-WINDOW).map((a) => a.correct)) as number;
    const now = weightedAccuracyPct(list.slice(-WINDOW).map((a) => a.correct)) as number;
    const id = list[0].studentId;
    deltas.set(id, [...(deltas.get(id) ?? []), now - then]);
  }
  const perLearner = new Map<string, number>();
  let all = 0;
  let improved = 0;
  let declined = 0;
  for (const [id, d] of deltas) {
    const mean = round1(d.reduce((s, x) => s + x, 0) / d.length);
    perLearner.set(id, mean);
    all += mean;
    if (mean >= MOVE_POINTS) improved++;
    else if (mean <= -MOVE_POINTS) declined++;
  }
  const n = perLearner.size;
  return { summary: { since: sinceLabel, avgChangePoints: n === 0 ? null : round1(all / n), learnersCompared: n, improved, declined, steady: n - improved - declined }, perLearner };
}

/** A SAST calendar day label (YYYY-MM-DD) for a day number. */
export const dayLabel = (day: number): string => new Date(day * 86_400_000).toISOString().slice(0, 10);
export const lastDayLabel = (ms: number | null): string | null => (ms === null ? null : dayLabel(sastDayNumber(ms)));
