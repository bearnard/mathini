// Formatting for the "My progress" page, and NOTHING else: every number shown comes from GET /api/progress. These helpers only turn a
// value the server sent into text (decimal comma, arrows, words, short dates, level names). No arithmetic, sorting or aggregation.
import { commaText } from '../subjects/graphTicks';
import type { MasteryLevel, TestResult } from '../../lib/shared/progressTypes';
import { MASTERED_MIN_ATTEMPTS, MASTERED_MIN_DAYS, MASTERED_PCT } from '../../lib/shared/progressMeasures';

/** 72 -> "72%", 72.5 -> "72,5%", null -> the fallback. */
export const pctText = (n: number | null | undefined, fallback = 'Not yet'): string => (typeof n === 'number' ? `${commaText(n)}%` : fallback);

/** A plain number with the decimal comma. */
export const numText = (n: number): string => commaText(n);

/** "12 Nov": a short date in South African time, the same on the server and in the browser. */
export const shortDate = (iso: string): string =>
  new Date(iso).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', timeZone: 'Africa/Johannesburg' });

export const LEVEL_TEXT: Record<MasteryLevel, string> = {
  not_started: 'Not started',
  learning: 'Learning',
  getting_there: 'Getting there',
  mastered: 'Mastered',
};

/** A gentle line for each level: encouraging, never a verdict on the learner. */
export const LEVEL_HINT: Record<MasteryLevel, string> = {
  not_started: 'Ready when you are',
  learning: 'Every try helps',
  getting_there: 'Nice progress',
  mastered: 'Well done',
};

export const LEVEL_COLOUR: Record<MasteryLevel, { bar: string; chip: string }> = {
  not_started: { bar: 'bg-slate-300', chip: 'bg-slate-100 text-slate-600' },
  learning: { bar: 'bg-amber-400', chip: 'bg-amber-50 text-amber-800' },
  getting_there: { bar: 'bg-sky-500', chip: 'bg-sky-50 text-sky-800' },
  mastered: { bar: 'bg-emerald-500', chip: 'bg-emerald-50 text-emerald-800' },
};

/** "↑ 5" or "↓ 5" (the size as the server sent it, decimal comma); null, 0 and anything else give an empty string. */
export const arrowPoints = (points: number | null | undefined): string => {
  if (typeof points !== 'number' || points === 0) return '';
  const size = commaText(points < 0 ? Number(String(points).slice(1)) : points);
  return `${points > 0 ? '↑' : '↓'} ${size}`;
};

/** A TEST: "↑ 5 since last time" / "↓ 5 since last time" / "Same as last time"; null (first try) reads as a fresh start. */
export const changeText = (points: number | null | undefined): string => {
  if (typeof points !== 'number') return 'First try';
  if (points === 0) return 'Same as last time';
  return `${arrowPoints(points)} since last time`;
};

/** A TOPIC: the latest 10 answers against the first 10 (ADR 0005), so it reads "since you started", not "since last time". */
export const startChangeText = (points: number | null | undefined): string => {
  if (typeof points !== 'number') return '';
  if (points === 0) return 'Steady since you started';
  return `${arrowPoints(points)} since you started`;
};

/**
 * A topic at 80% or more that is still "Getting there" has not yet shown it lasts: Mastered needs MASTERED_MIN_ATTEMPTS answers on MASTERED_MIN_DAYS
 * different days. Say so, instead of a plain "Getting there" next to a perfect score. `attempts` is the count the server sent for the topic.
 */
export const earlyHighScore = (level: MasteryLevel, accuracyPct: number | null): boolean => level === 'getting_there' && typeof accuracyPct === 'number' && accuracyPct >= MASTERED_PCT;

export const levelChipText = (level: MasteryLevel, accuracyPct: number | null): string => (earlyHighScore(level, accuracyPct) ? 'Great start' : LEVEL_TEXT[level]);

/** The line beside the percentage for a topic. `you`: the learner reads it ("Practise ..."), a parent reads a third-person line. */
export const levelHintText = (level: MasteryLevel, accuracyPct: number | null, attempts: number, notStartedText?: string): string => {
  if (earlyHighScore(level, accuracyPct)) {
    return attempts < MASTERED_MIN_ATTEMPTS
      ? `Mastered needs ${MASTERED_MIN_ATTEMPTS} answers on ${MASTERED_MIN_DAYS} different days (${attempts} so far)`
      : `Practise on another day to lock it in (Mastered needs ${MASTERED_MIN_DAYS} different days)`;
  }
  return level === 'not_started' && notStartedText ? notStartedText : LEVEL_HINT[level];
};

/** The tone of a change, for colour only: up is green, down is a calm neutral (a dip is not a failure), first try is neutral. */
export const changeTone = (points: number | null | undefined): 'up' | 'flat' | 'down' => (typeof points !== 'number' || points === 0 ? 'flat' : points > 0 ? 'up' : 'down');

export const KIND_TEXT: Record<TestResult['kind'], string> = { quiz: 'Quiz', mock_test: 'Mock test', exam_practice: 'Exam practice' };

/** "You remembered 34 of 40 review cards this week". */
export const remembered = (correct: number, answered: number): string => `You remembered ${numText(correct)} of ${numText(answered)} review cards this week`;
