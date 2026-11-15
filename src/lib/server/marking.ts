// The server marks multiple-choice answers (security review follow-up). The browser used to send `isCorrect` and the server believed it, so XP, mastery,
// test scores and everything a parent sees could be inflated with one edited request. Now, whenever the server holds the question, `isCorrect` is worked
// out here from the option the learner chose (`chosen`) and the question's answer. The browser's claim is kept only for what the server cannot mark
// (generated exercises, order/label/explain items, questions it does not hold), and those attempts are flagged marked_by = 'client'.
import type { AdminDb } from './admin/db';

export type MarkedBy = 'server' | 'client';
export type MarkReason = 'matched' | 'unmatched_choice' | 'no_choice' | 'no_question' | 'not_mcq' | 'error';

export interface MarkResult {
  isCorrect: boolean;
  markedBy: MarkedBy;
  /** What the browser claimed. */
  clientCorrect: boolean;
  reason: MarkReason;
}

/** The same normal form on both sides: collapsed whitespace, trimmed, and cut at 200 characters (what /api/attempts stores for `chosen`). */
export const normChoice = (s: string): string => s.replace(/\s+/g, ' ').trim().slice(0, 200);

export interface Candidate { options: string[]; answer: string }

/**
 * Marks a chosen option against the versions of a question, newest relevant first (the version the learner was shown, then the others, because an
 * edit can reach the database before the code bank the learner is looking at). The first version that offers the chosen option decides: it is right
 * if that option is that version's answer. An option no version offers is wrong (a real tap is always one of the options).
 */
export function markMcq(candidates: readonly Candidate[], chosen: string): { isCorrect: boolean; reason: 'matched' | 'unmatched_choice' } {
  const c = normChoice(chosen);
  for (const v of candidates) {
    if (v.options.some((o) => normChoice(o) === c)) return { isCorrect: normChoice(v.answer) === c, reason: 'matched' };
  }
  return { isCorrect: false, reason: 'unmatched_choice' };
}

const parseOptions = (s: unknown): string[] => {
  try {
    const v = JSON.parse(String(s));
    return Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
};

export const MAX_OTHER_VERSIONS = 6;

/**
 * Marks one attempt. `versionId` is the question version found for the attempt (the one the learner was shown, else the current one), or null when the
 * server does not hold the question. Never throws: if the lookup fails, the browser's value is kept and flagged.
 */
export async function markAttempt(db: AdminDb, a: { versionId: number | null; chosen: string | null; clientCorrect: boolean }): Promise<MarkResult> {
  const client = (reason: MarkReason): MarkResult => ({ isCorrect: a.clientCorrect, markedBy: 'client', clientCorrect: a.clientCorrect, reason });
  if (a.versionId === null) return client('no_question');
  try {
    const shown = (await db.all<{ question_id: string; kind: string; options: string; answer: string }>(
      'SELECT v.question_id AS question_id, q.kind AS kind, v.options AS options, v.answer AS answer FROM question_versions v JOIN questions q ON q.id = v.question_id WHERE v.id = ?',
      [a.versionId],
    ))[0];
    if (!shown) return client('no_question');
    if (shown.kind !== 'mcq') return client('not_mcq');
    // A multiple-choice question without a chosen option cannot be checked, so a claim of "correct" is not believed (a real tap always sends it).
    if (a.chosen === null || normChoice(a.chosen) === '') return { isCorrect: false, markedBy: 'server', clientCorrect: a.clientCorrect, reason: 'no_choice' };
    const first: Candidate = { options: parseOptions(shown.options), answer: shown.answer };
    let r = markMcq([first], a.chosen);
    if (r.reason === 'unmatched_choice') {
      const others = await db.all<{ options: string; answer: string }>(
        "SELECT options, answer FROM question_versions WHERE question_id = ? AND id <> ? AND status IN ('approved', 'retired') ORDER BY version_no DESC LIMIT ?",
        [shown.question_id, a.versionId, MAX_OTHER_VERSIONS],
      );
      r = markMcq([first, ...others.map((o) => ({ options: parseOptions(o.options), answer: o.answer }))], a.chosen);
    }
    return { isCorrect: r.isCorrect, markedBy: 'server', clientCorrect: a.clientCorrect, reason: r.reason };
  } catch {
    return client('error');
  }
}

/** How many answers in a row, ending with this one, the learner has really got right: the browser's streak can never be higher than that. */
export async function verifiedStreak(db: AdminDb, studentId: string, correctNow: boolean, clientStreak: number): Promise<number> {
  const asked = Number.isFinite(clientStreak) ? Math.max(0, Math.floor(clientStreak)) : 0;
  if (!correctNow || asked === 0) return 0;
  try {
    const recent = await db.all<{ is_correct: number }>('SELECT is_correct FROM attempts WHERE student_id = ? ORDER BY id DESC LIMIT 30', [studentId]);
    let run = 0;
    for (const r of recent) {
      if (Number(r.is_correct) !== 1) break;
      run += 1;
    }
    return Math.min(asked, run + 1);
  } catch {
    return Math.min(asked, 10);
  }
}
