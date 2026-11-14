// Pure helpers shared by the content API and the dashboard UI (no SQL, safe for the browser bundle).

import type { AnswerTopic, RunTopic } from './content';

export const MIN_ANSWERS_FOR_ACCURACY = 10;
export const MIN_RUNS_FOR_SCORE = 3;
export const MIN_SESSIONS_FOR_CONVERSION = 3;
const TOP_N = 12;

export interface AccuracyRow {
  label: { subject: string | null; grade: number | null; topic: string };
  /** 0..1 */
  value: number;
  /** answers or questions behind the figure */
  n: number;
}

/** Lowest accuracy first, ignoring topics with too little data to mean anything. */
export function lowestAccuracy(rows: AnswerTopic[], min = MIN_ANSWERS_FOR_ACCURACY, limit = TOP_N): AccuracyRow[] {
  return rows
    .filter((r) => r.questions >= min)
    .map((r) => ({ label: { subject: r.subject, grade: r.grade, topic: r.topic }, value: r.correct / r.questions, n: r.questions }))
    .sort((a, b) => a.value - b.value || b.n - a.n || a.label.topic.localeCompare(b.label.topic))
    .slice(0, limit);
}
/** Same for practice runs: score / questions across runs, needing a few runs and some questions. */
export function lowestRunScore(rows: RunTopic[], minRuns = MIN_RUNS_FOR_SCORE, limit = TOP_N): AccuracyRow[] {
  return rows
    .filter((r) => r.runs >= minRuns && r.questions > 0)
    .map((r) => ({ label: { subject: r.subject, grade: r.grade, topic: r.topic }, value: r.score / r.questions, n: r.runs }))
    .sort((a, b) => a.value - b.value || b.n - a.n || a.label.topic.localeCompare(b.label.topic))
    .slice(0, limit);
}
