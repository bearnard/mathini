// Item analysis (ADR 0003 section 5). Pure maths, shared by the nightly job and its tests.
//
// For one version of a question with at least MIN_ANSWERS answers:
//   p-value          share of answers that were right. Above 0.95: probably a giveaway. Below 0.20: probably a wrong key or
//                    out of the syllabus.
//   discrimination   point-biserial correlation between getting THIS question right and the learner's accuracy on everything
//                    else. Below 0 means strong learners miss it more than weak ones: the classic sign of a wrong key.
//   distractor       a wrong option picked more often than the right one.
// Small samples are noisy, so nothing is flagged below MIN_ANSWERS.

export const MIN_ANSWERS = 30;
export const TOO_EASY_ABOVE = 0.95;
export const TOO_HARD_BELOW = 0.2;
/** A learner needs this many answers overall before their accuracy counts as a measure of ability. */
export const MIN_LEARNER_ANSWERS = 10;

export type FlagKind = 'too_easy' | 'too_hard' | 'negative_discrimination' | 'distractor';

export interface FlagResult {
  kind: FlagKind;
  value: number;
  n: number;
  detail?: Record<string, unknown>;
}

/** Aggregates of one version's answers (computed in SQL). x = the learner's accuracy on every OTHER question. */
export interface VersionAggregate {
  /** All answers for the version. */
  n: number;
  /** Right answers. */
  k: number;
  /** Answers whose learner has enough history to have an ability measure. */
  nx: number;
  /** Right answers among those. */
  kx: number;
  sumX: number;
  sumXX: number;
  /** Sum of x over the right answers only. */
  sumX1: number;
}

export function pValue(a: Pick<VersionAggregate, 'n' | 'k'>): number | null {
  return a.n > 0 ? a.k / a.n : null;
}

/** Point-biserial correlation, or null when it cannot be computed (too few answers, everyone right/wrong, no spread). */
export function pointBiserial(a: VersionAggregate): number | null {
  if (a.nx < MIN_ANSWERS || a.kx <= 0 || a.kx >= a.nx) return null;
  const mean = a.sumX / a.nx;
  const variance = a.sumXX / a.nx - mean * mean;
  if (!(variance > 1e-12)) return null;
  const sd = Math.sqrt(variance);
  const m1 = a.sumX1 / a.kx;
  const m0 = (a.sumX - a.sumX1) / (a.nx - a.kx);
  const p = a.kx / a.nx;
  return ((m1 - m0) / sd) * Math.sqrt(p * (1 - p));
}

export function difficultyAndDiscriminationFlags(a: VersionAggregate): FlagResult[] {
  if (a.n < MIN_ANSWERS) return [];
  const out: FlagResult[] = [];
  const p = pValue(a)!;
  if (p > TOO_EASY_ABOVE) out.push({ kind: 'too_easy', value: round(p), n: a.n });
  if (p < TOO_HARD_BELOW) out.push({ kind: 'too_hard', value: round(p), n: a.n });
  const r = pointBiserial(a);
  if (r !== null && r < 0) out.push({ kind: 'negative_discrimination', value: round(r), n: a.nx });
  return out;
}

/** picks: how many answers chose each option (of the answers that recorded a choice). */
export function distractorFlag(answer: string, picks: Record<string, number>): FlagResult | null {
  const total = Object.values(picks).reduce((s, c) => s + c, 0);
  if (total < MIN_ANSWERS) return null;
  const keyPicks = picks[answer] ?? 0;
  let top: [string, number] | null = null;
  for (const [option, c] of Object.entries(picks)) {
    if (option === answer) continue;
    if (!top || c > top[1] || (c === top[1] && option < top[0])) top = [option, c];
  }
  if (!top || top[1] <= keyPicks) return null;
  return { kind: 'distractor', value: round(top[1] / total), n: total, detail: { option: top[0], picks: top[1], keyPicks } };
}

const round = (v: number): number => Math.round(v * 1000) / 1000;
