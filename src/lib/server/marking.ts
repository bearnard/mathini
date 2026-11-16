// The server marks multiple-choice answers (security review follow-up). The browser used to send `isCorrect` and the server believed it, so XP, mastery,
// test scores and everything a parent sees could be inflated with one edited request. Now, whenever the server holds the question, `isCorrect` is worked
// out here from the option the learner chose (`chosen`) and the question's answer. The browser's claim is kept only for what the server cannot mark
// (generated exercises, order/label/explain items, questions it does not hold), and those attempts are flagged marked_by = 'client'.
import type { AdminDb } from './admin/db';

export type MarkedBy = 'server' | 'client';
export type MarkReason = 'matched' | 'unmatched_choice' | 'no_choice' | 'no_question' | 'not_markable' | 'error';

export interface MarkResult {
  isCorrect: boolean;
  markedBy: MarkedBy;
  /** What the browser claimed. */
  clientCorrect: boolean;
  reason: MarkReason;
  /**
   * Whether the answer may count at all (XP, runs, mastery, review, leaderboard, parent and teacher views). ONLY an answer the server marked itself from a
   * question it holds, with a choice that really is one of that question's options, counts. Everything else (a question the server does not hold, a
   * self-marked written answer, no choice, a choice nobody offers) is not stored and earns nothing: the browser's word is never believed.
   */
  credited: boolean;
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

/** Order and label answers are longer than one option: the learner's whole arrangement is sent as one text, so it keeps up to this many characters. */
export const MAX_CHOSEN_LONG = 600;
const normLong = (s: string): string => s.replace(/\s+/g, ' ').trim().slice(0, MAX_CHOSEN_LONG);
const bars = (s: string): string[] => normLong(s).split('|').map((x) => x.trim());
const sameMultiset = (a: readonly string[], b: readonly string[]): boolean => a.length === b.length && [...a].sort().join('\u0000') === [...b].sort().join('\u0000');

/** Order: `chosen` is the steps in the learner's order joined by "|"; the stored answer is the right order joined the same way. */
export function markOrder(options: readonly string[], answer: string, chosen: string): { isCorrect: boolean; reason: 'matched' | 'unmatched_choice' } {
  const picked = bars(chosen);
  const steps = options.map((o) => normLong(o));
  if (!sameMultiset(picked, steps)) return { isCorrect: false, reason: 'unmatched_choice' };
  return { isCorrect: picked.join('|') === bars(answer).join('|'), reason: 'matched' };
}

/** Label: `chosen` is "id=Label" pairs joined by "|" (one per hotspot, any order); the stored answer has the right pairs. */
export function markLabel(options: readonly string[], answer: string, chosen: string): { isCorrect: boolean; reason: 'matched' | 'unmatched_choice' } {
  const right = bars(answer);
  const picked = bars(chosen);
  const ids = (pairs: string[]) => pairs.map((p) => p.split('=')[0]?.trim() ?? '');
  const labels = options.map((o) => normLong(o));
  if (!sameMultiset(ids(picked), ids(right)) || picked.some((p) => !labels.includes((p.split('=')[1] ?? '').trim()))) return { isCorrect: false, reason: 'unmatched_choice' };
  return { isCorrect: sameMultiset(picked, right), reason: 'matched' };
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
  // Never believed: the browser's claim is returned only so the caller can log it; `credited` is false for everything the server did not mark itself.
  const unmarked = (reason: MarkReason): MarkResult => ({ isCorrect: false, markedBy: 'client', clientCorrect: a.clientCorrect, reason, credited: false });
  if (a.versionId === null) return unmarked('no_question');
  try {
    const shown = (await db.all<{ question_id: string; kind: string; options: string; answer: string }>(
      'SELECT v.question_id AS question_id, q.kind AS kind, v.options AS options, v.answer AS answer FROM question_versions v JOIN questions q ON q.id = v.question_id WHERE v.id = ?',
      [a.versionId],
    ))[0];
    if (!shown) return unmarked('no_question');
    // A written answer marked by the learner against a memo cannot be checked by anyone but the learner: it counts for nothing here (decision recorded in docs/notes).
    if (shown.kind !== 'mcq' && shown.kind !== 'order' && shown.kind !== 'label') return unmarked('not_markable');
    // Without a chosen option (or arrangement) nothing can be checked: a real tap or placement always sends it.
    if (a.chosen === null || normChoice(a.chosen) === '') return unmarked('no_choice');
    const options = parseOptions(shown.options);
    if (shown.kind === 'order' || shown.kind === 'label') {
      const r = shown.kind === 'order' ? markOrder(options, shown.answer, a.chosen) : markLabel(options, shown.answer, a.chosen);
      return { isCorrect: r.isCorrect, markedBy: 'server', clientCorrect: a.clientCorrect, reason: r.reason, credited: r.reason === 'matched' };
    }
    const first: Candidate = { options, answer: shown.answer };
    let r = markMcq([first], a.chosen);
    if (r.reason === 'unmatched_choice') {
      const others = await db.all<{ options: string; answer: string }>(
        "SELECT options, answer FROM question_versions WHERE question_id = ? AND id <> ? AND status IN ('approved', 'retired') ORDER BY version_no DESC LIMIT ?",
        [shown.question_id, a.versionId, MAX_OTHER_VERSIONS],
      );
      r = markMcq([first, ...others.map((o) => ({ options: parseOptions(o.options), answer: o.answer }))], a.chosen);
    }
    return { isCorrect: r.isCorrect, markedBy: 'server', clientCorrect: a.clientCorrect, reason: r.reason, credited: r.reason === 'matched' };
  } catch {
    return unmarked('error');
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
