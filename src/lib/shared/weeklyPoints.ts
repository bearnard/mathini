// Weekly points: the ONE scoring function of the leaderboard (docs/notes/leaderboard.md). Pure: no clock, no database.
// Points reward LEARNING, not volume: a wrong answer earns nothing, repeating a question you already got right in the last 7 days earns nothing,
// and the answer points of one day are capped. Only server-marked data is ever passed in (the caller filters marked_by IS NOT 'client').

export const WEIGHTS = {
  /** A correct answer to a question not answered correctly in the 7 days before it. */
  newCorrect: 10,
  /** A spaced-review card remembered (answered correctly in a review run), once per card per week. Replaces the answer points. */
  reviewRemembered: 5,
  /** A topic that reached Mastered for the first time this week. */
  topicMastered: 40,
  /** A finished mock test or exam practice that beat the learner's previous best on the same scope. */
  mockBeatBest: 25,
  /** The most answer points (new-correct plus review) one SAST day can add. Bonuses are not capped: each is bounded by learning. */
  dailyCap: 100,
} as const;

export const DAY_MS = 86_400_000;
export const WEEK_MS = 7 * DAY_MS;
const SAST_MS = 2 * 3_600_000;

/** Monday 00:00 South Africa time (UTC+2, no daylight saving) of the week holding `ms`, as epoch ms. */
export function weekStartOf(ms: number): number {
  const local = ms + SAST_MS;
  const day = Math.floor(local / DAY_MS);
  const dow = (day + 3) % 7; // 1970-01-01 was a Thursday: Monday = 0
  return (day - dow) * DAY_MS - SAST_MS;
}
export const sastDayOf = (ms: number): number => Math.floor((ms + SAST_MS) / DAY_MS);

export interface ScoredAttempt { qkey: string | null; correct: boolean; at: number; inReviewRun: boolean }
export interface ScoredRun { scopeKey: string; scorePct: number; nItems: number; finishedAt: number }
export interface PointsInput {
  weekStart: number;
  /** Server-marked answers from 7 days before the week until its end (the extra days are only used to look back). */
  attempts: readonly ScoredAttempt[];
  /** Topics whose first Mastered moment (ms) lies in the week. */
  masteredAt: readonly number[];
  /** Finished mock-test / exam-practice runs of the week, and the best earlier score per scope before the week. */
  runs: readonly ScoredRun[];
  priorBest: Readonly<Record<string, number>>;
}
export interface PointsResult { points: number; answered: number; breakdown: { answers: number; review: number; mastered: number; mock: number; capped: number } }

/** Smallest run that can earn the bonus: a 2-question "test" must not. */
export const MIN_BONUS_RUN_ITEMS = 5;

export function weeklyPoints(input: PointsInput): PointsResult {
  const end = input.weekStart + WEEK_MS;
  const sorted = [...input.attempts].sort((a, b) => a.at - b.at);
  const lastCorrect = new Map<string, number>(); // qkey -> time of its latest correct answer
  const reviewSeen = new Set<string>();
  const perDay = new Map<number, { answers: number; review: number }>();
  let answered = 0;
  for (const a of sorted) {
    const inWeek = a.at >= input.weekStart && a.at < end;
    if (inWeek) answered++;
    if (!a.correct || !a.qkey) continue;
    const prev = lastCorrect.get(a.qkey);
    const repeat = prev !== undefined && a.at - prev < WEEK_MS;
    lastCorrect.set(a.qkey, a.at);
    if (!inWeek) continue;
    const day = sastDayOf(a.at);
    const d = perDay.get(day) ?? { answers: 0, review: 0 };
    if (a.inReviewRun) {
      if (!reviewSeen.has(a.qkey)) { reviewSeen.add(a.qkey); d.review += WEIGHTS.reviewRemembered; }
    } else if (!repeat) d.answers += WEIGHTS.newCorrect;
    perDay.set(day, d);
  }
  let answers = 0, review = 0, capped = 0;
  for (const d of perDay.values()) {
    const raw = d.answers + d.review;
    const kept = Math.min(raw, WEIGHTS.dailyCap);
    capped += raw - kept;
    // the cap trims both kinds in proportion (the order within a day is not tracked)
    const reviewKept = raw === 0 ? 0 : Math.floor((d.review * kept) / raw);
    review += reviewKept;
    answers += kept - reviewKept;
  }
  const mastered = input.masteredAt.filter((t) => t >= input.weekStart && t < end).length * WEIGHTS.topicMastered;
  let mock = 0;
  const best = { ...input.priorBest };
  for (const r of [...input.runs].filter((x) => x.finishedAt >= input.weekStart && x.finishedAt < end).sort((a, b) => a.finishedAt - b.finishedAt)) {
    const before = best[r.scopeKey];
    if (before !== undefined && r.nItems >= MIN_BONUS_RUN_ITEMS && r.scorePct > before) mock += WEIGHTS.mockBeatBest;
    if (before === undefined || r.scorePct > before) best[r.scopeKey] = r.scorePct;
  }
  return { points: answers + review + mastered + mock, answered, breakdown: { answers, review, mastered, mock, capped } };
}

/** A school's score for an area board: the average weekly points per active learner, one decimal. null under the minimum (it must not appear). */
export const MIN_ACTIVE_LEARNERS = 5;
export function schoolScore(totalPoints: number, activeLearners: number): number | null {
  if (activeLearners < MIN_ACTIVE_LEARNERS) return null;
  return Math.round((totalPoints / activeLearners) * 10) / 10;
}

/** Competition ranking: equal points share a rank (1, 2, 2, 4). Input must already be sorted best first. */
export function rankOf<T>(sorted: readonly T[], value: (t: T) => number): number[] {
  const out: number[] = [];
  sorted.forEach((t, i) => out.push(i > 0 && value(t) === value(sorted[i - 1]) ? out[i - 1] : i + 1));
  return out;
}
