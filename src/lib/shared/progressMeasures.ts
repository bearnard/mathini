// ADR 0005 section 2: the measures, as PURE functions (no database, no clock, no I/O), so every rule is tested.
// Used by the server (topic_progress refresh, GET /api/progress). Everything the "My progress" page shows is computed here or from here;
// the page only formats.
//
// Percentages are 0 to 100 with at most one decimal. null means "no data yet", never 0.
import type { ExamReadiness, MasteryLevel, NextBestStep } from './progressTypes';

/** The window for topic accuracy: the learner's latest attempts in the topic. */
export const WINDOW = 20;
/** The baseline for improvement: the learner's first attempts in the topic. */
export const BASELINE = 10;
/** Mastered needs at least this many attempts in the window, on at least MASTERED_MIN_DAYS different days. */
export const MASTERED_MIN_ATTEMPTS = 10;
export const MASTERED_MIN_DAYS = 2;
export const MASTERED_PCT = 80;
export const GETTING_THERE_PCT = 50;
/** Weights across the window, oldest to newest: linear from 1 to this value. */
export const NEWEST_WEIGHT = 2;
export const TREND_POINTS = 6;
export const SAST_OFFSET_MS = 2 * 3600_000;
const DAY_MS = 86_400_000;

export const round1 = (x: number): number => Math.round(x * 10) / 10;
/** Whole SAST days since 1970-01-01 (South Africa has no daylight saving). */
export const sastDayNumber = (ms: number): number => Math.floor((ms + SAST_OFFSET_MS) / DAY_MS);

/** Plain accuracy of a list of answers, 0..100 with one decimal; null for an empty list. */
export function accuracyPct(correct: readonly boolean[]): number | null {
  if (correct.length === 0) return null;
  return round1((100 * correct.filter(Boolean).length) / correct.length);
}

/** Weights for n answers, oldest first: linear from 1 up to NEWEST_WEIGHT. A single answer weighs 1. */
export function recencyWeights(n: number): number[] {
  if (n <= 0) return [];
  if (n === 1) return [1];
  return Array.from({ length: n }, (_, i) => 1 + ((NEWEST_WEIGHT - 1) * i) / (n - 1));
}

/** Recency-weighted accuracy of answers given OLDEST FIRST (the newest answers count most). null for an empty list. */
export function weightedAccuracyPct(correctOldestFirst: readonly boolean[]): number | null {
  const n = correctOldestFirst.length;
  if (n === 0) return null;
  const w = recencyWeights(n);
  let got = 0;
  let all = 0;
  correctOldestFirst.forEach((c, i) => { all += w[i]; if (c) got += w[i]; });
  return round1((100 * got) / all);
}

/**
 * Mastery level of a topic. Not started: no attempts. Mastered: weighted accuracy of at least 80% across at least 10 attempts in the window
 * on at least 2 different days; high accuracy on fewer attempts or one day is only Getting there (it has not been shown to last).
 */
export function masteryLevel(a: { attempts: number; accuracyPct: number | null; windowN: number; days: number }): MasteryLevel {
  if (a.attempts <= 0 || a.accuracyPct === null) return 'not_started';
  if (a.accuracyPct >= MASTERED_PCT && a.windowN >= MASTERED_MIN_ATTEMPTS && a.days >= MASTERED_MIN_DAYS) return 'mastered';
  if (a.accuracyPct >= GETTING_THERE_PCT) return 'getting_there';
  return 'learning';
}

/** Number of different SAST days among the timestamps. */
export const distinctDays = (timestamps: readonly number[]): number => new Set(timestamps.map(sastDayNumber)).size;

/** "Up N points" is a sign of learning that lasts only when it shows over more than one sitting. */
export const IMPROVEMENT_MIN_DAYS = 2;

/**
 * Improvement: accuracy on the latest 10 attempts minus accuracy on the first 10, in percentage points. null until there are 20 attempts
 * (before that the two groups overlap and the number would mean nothing), and, when `days` is given, null until the learner has practised the topic
 * on at least IMPROVEMENT_MIN_DAYS different days (in one sitting a rise only shows warming up, not remembering).
 */
export function improvementPoints(attempts: number, first10Pct: number | null, last10Pct: number | null, days?: number): number | null {
  if (attempts < 2 * BASELINE || first10Pct === null || last10Pct === null) return null;
  if (typeof days === 'number' && days < IMPROVEMENT_MIN_DAYS) return null;
  return round1(last10Pct - first10Pct);
}

export interface AttemptPoint {
  correct: boolean;
  /** epoch ms */
  at: number;
}

export interface TopicMeasure {
  attempts: number;
  correct: number;
  last20N: number;
  last20Pct: number | null;
  first10Pct: number | null;
  last10Pct: number | null;
  daysPractised: number;
  level: MasteryLevel;
  firstAttemptAt: number | null;
  lastAttemptAt: number | null;
}

/**
 * All the measures of one topic. `window` is the latest (up to 20) attempts and `first` the first (up to 10), both OLDEST FIRST; `totals` is
 * over every attempt. Only the window is trusted for accuracy, so a learner who struggled long ago and is fine now reads as fine.
 */
export function topicMeasure(args: { window: readonly AttemptPoint[]; first: readonly AttemptPoint[]; total: number; totalCorrect: number; firstAt: number | null; lastAt: number | null }): TopicMeasure {
  const win = args.window.slice(-WINDOW);
  const last20Pct = weightedAccuracyPct(win.map((p) => p.correct));
  const days = distinctDays(win.map((p) => p.at));
  const last10 = win.slice(-BASELINE).map((p) => p.correct);
  return {
    attempts: args.total,
    correct: args.totalCorrect,
    last20N: win.length,
    last20Pct,
    first10Pct: accuracyPct(args.first.slice(0, BASELINE).map((p) => p.correct)),
    last10Pct: accuracyPct(last10),
    daysPractised: days,
    level: masteryLevel({ attempts: args.total, accuracyPct: last20Pct, windowN: win.length, days }),
    firstAttemptAt: args.firstAt,
    lastAttemptAt: args.lastAt,
  };
}

export interface TrendAttempt extends AttemptPoint {
  /** The run the answer belonged to; null for an answer outside a run. */
  runId: string | null;
}

/**
 * The trend of a topic: its weighted last-20 accuracy after each of the latest sessions, oldest first, at most 6 points. A session is a run; answers
 * outside a run count as one session per SAST day. Fewer than 2 sessions means there is no history to show: an empty list.
 */
export function trendPoints(attemptsOldestFirst: readonly TrendAttempt[], maxPoints = TREND_POINTS): number[] {
  const ends: number[] = []; // index of the last attempt of each session
  attemptsOldestFirst.forEach((a, i) => {
    const key = a.runId ?? `day:${sastDayNumber(a.at)}`;
    const next = attemptsOldestFirst[i + 1];
    const nextKey = next ? (next.runId ?? `day:${sastDayNumber(next.at)}`) : null;
    if (key !== nextKey) ends.push(i);
  });
  if (ends.length < 2) return [];
  return ends.slice(-maxPoints).map((end) => weightedAccuracyPct(attemptsOldestFirst.slice(Math.max(0, end + 1 - WINDOW), end + 1).map((p) => p.correct)) as number);
}

/** Topics weakest first: lowest accuracy first; topics NOT STARTED come last (there is nothing to be weak at yet). Ties by label, so the order is stable. */
export function sortWeakestFirst<T extends { level: MasteryLevel; accuracyPct: number | null; label: string }>(topics: readonly T[]): T[] {
  return [...topics].sort((a, b) => {
    const an = a.level === 'not_started' || a.accuracyPct === null;
    const bn = b.level === 'not_started' || b.accuracyPct === null;
    if (an !== bn) return an ? 1 : -1;
    if (!an && a.accuracyPct !== b.accuracyPct) return (a.accuracyPct as number) - (b.accuracyPct as number);
    return a.label.localeCompare(b.label);
  });
}

/** A subject's mastery: the mean accuracy of its practised topics (null when none is practised) and the level that gives. */
export function subjectMastery(topics: readonly { level: MasteryLevel; accuracyPct: number | null; attempts: number }[]): { masteryPct: number | null; level: MasteryLevel } {
  const practised = topics.filter((t) => t.level !== 'not_started' && t.accuracyPct !== null);
  if (practised.length === 0) return { masteryPct: null, level: 'not_started' };
  const masteryPct = round1(practised.reduce((s, t) => s + (t.accuracyPct as number), 0) / practised.length);
  const attempts = practised.reduce((s, t) => s + t.attempts, 0);
  const level: MasteryLevel = masteryPct >= MASTERED_PCT && attempts >= MASTERED_MIN_ATTEMPTS && practised.some((t) => t.level === 'mastered') ? 'mastered' : masteryPct >= GETTING_THERE_PCT ? 'getting_there' : 'learning';
  return { masteryPct, level };
}

/**
 * Exam readiness for a scope of topics (ADR 0005 section 2). Mastery counts every topic in the scope, an untried one as 0, so readiness reflects how
 * much of the scope has been covered. With a mock score: 50% mastery, 35% the latest mock, 15% how much has been practised. Without: 75% mastery,
 * 25% practised. null when nothing has been practised and there is no mock.
 */
export function examReadiness(args: {
  scopeKey: string;
  label: string;
  /** One entry per topic in the scope: its weighted accuracy, or null when not practised. */
  topics: readonly { accuracyPct: number | null }[];
  latestMock: { scorePct: number; finishedAt: string } | null;
}): ExamReadiness {
  const total = args.topics.length;
  const practised = args.topics.filter((t) => t.accuracyPct !== null).length;
  const practisedPct = total === 0 ? null : round1((100 * practised) / total);
  const masteryPct = total === 0 ? null : round1(args.topics.reduce((s, t) => s + (t.accuracyPct ?? 0), 0) / total);
  let readinessPct: number | null = null;
  if (masteryPct !== null && practisedPct !== null && (practised > 0 || args.latestMock)) {
    readinessPct = args.latestMock ? round1(0.5 * masteryPct + 0.35 * args.latestMock.scorePct + 0.15 * practisedPct) : round1(0.75 * masteryPct + 0.25 * practisedPct);
  }
  return { scopeKey: args.scopeKey, label: args.label, readinessPct, masteryPct, practisedPct, topicsTotal: total, topicsPractised: practised, latestMock: args.latestMock };
}

/**
 * Consistency: the days practised in the last 14 (today included) and the current streak. The streak is the run of consecutive days ending today,
 * or ending yesterday when today has not been practised yet (so it does not drop to 0 first thing in the morning).
 */
export function consistency(practisedDays: readonly number[], today: number): { daysPractisedLast14: number; streakDays: number } {
  const set = new Set(practisedDays);
  let last14 = 0;
  for (let d = today - 13; d <= today; d++) if (set.has(d)) last14++;
  let cursor = set.has(today) ? today : today - 1;
  let streak = 0;
  while (set.has(cursor)) { streak++; cursor--; }
  return { daysPractisedLast14: last14, streakDays: streak };
}

/** Retention: the share of review cards answered correctly. null when none were answered. */
export const retentionPct = (correct: number, answered: number): number | null => (answered <= 0 ? null : round1((100 * Math.min(correct, answered)) / answered));

/**
 * One recommended next action. Due reviews first, then the weakest PRACTISED topic in the exam scope (below Mastered), then a topic never tried,
 * then "all caught up". The wording is encouraging and never compares the learner with anyone.
 */
export function nextBestStep(args: {
  dueCount: number;
  weakestInScope: { label: string; href: string } | null;
  untried: { label: string; href: string } | null;
  reviewHref: string;
  appHref: string;
}): NextBestStep {
  if (args.dueCount > 0) {
    return {
      kind: 'review',
      title: args.dueCount === 1 ? 'Do your review card' : `Do your ${args.dueCount} review cards`,
      reason: 'A few minutes now helps you remember them for the exam.',
      href: args.reviewHref,
      cta: 'Start review',
    };
  }
  if (args.weakestInScope) {
    return { kind: 'weak_topic', title: `Practise ${args.weakestInScope.label}`, reason: 'This is the topic where a little practice helps most right now.', href: args.weakestInScope.href, cta: 'Practise this' };
  }
  if (args.untried) {
    return { kind: 'new_topic', title: `Try ${args.untried.label}`, reason: 'A new topic. Your progress will appear here.', href: args.untried.href, cta: 'Start this topic' };
  }
  return { kind: 'all_caught_up', title: 'You are all caught up', reason: 'Nothing is due. Come back tomorrow, or practise any topic you like.', href: null, cta: 'Choose a topic' };
}


/**
 * The same recommendation worded for a PARENT: "Ask Anfervio to do their 5 review cards". Uses the child's name and "their", never "he" or "she".
 * Mirrors nextBestStep branch for branch (a test keeps them in step).
 */
export function parentNextStep(args: { dueCount: number; weakestInScope: { label: string } | null; untried: { label: string } | null; name: string | null }): { title: string; reason: string } {
  const who = args.name?.trim() || 'your child';
  if (args.dueCount > 0) {
    const one = args.dueCount === 1;
    return { title: `Ask ${who} to do their ${one ? 'review card' : `${args.dueCount} review cards`}`, reason: 'A few minutes now helps them remember what they have learned, ready for the exam.' };
  }
  if (args.weakestInScope) return { title: `Ask ${who} to practise ${args.weakestInScope.label}`, reason: 'This is the topic where a little practice helps most right now.' };
  if (args.untried) return { title: `Ask ${who} to try ${args.untried.label}`, reason: 'A new topic. Their progress will appear here.' };
  return { title: `${who} is all caught up`, reason: 'Nothing is due. Any topic they practise today is a bonus.' };
}

/** The same recommendation worded for a TEACHER looking at one learner: "Encourage Anfervio to do their 5 review cards". The nickname and "their", never a gendered pronoun. */
export function teacherNextStep(args: { dueCount: number; weakestInScope: { label: string } | null; untried: { label: string } | null; name: string | null }): { title: string; reason: string } {
  const who = args.name?.trim() || 'this learner';
  if (args.dueCount > 0) {
    const one = args.dueCount === 1;
    return { title: `Encourage ${who} to do their ${one ? 'review card' : `${args.dueCount} review cards`}`, reason: 'A few minutes of review helps them remember what they have learned, ready for the exam.' };
  }
  if (args.weakestInScope) return { title: `Help ${who} practise ${args.weakestInScope.label}`, reason: 'This is the topic where a little practice helps most right now.' };
  if (args.untried) return { title: `Suggest ${who} try ${args.untried.label}`, reason: 'A topic they have not started yet.' };
  return { title: `${who} is all caught up`, reason: 'Nothing is due. Any topic they practise today is a bonus.' };
}
