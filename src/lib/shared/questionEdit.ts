// Shared by the admin edit route and the edit form (docs/notes/d1-serving-plan.md section 4.5): the shape of an edit, its limits,
// and the two judgements both sides must agree on (did anything change, and is it a change of MEANING).
export const EDIT_LIMITS = { prompt: 600, option: 300, explanation: 800, note: 300, minNote: 3, minOptions: 2, maxOptions: 6 } as const;

export type ChangeKind = 'wording' | 'meaning';

export interface QuestionContent {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface EditInput extends QuestionContent {
  /** The version the editor was looking at: a newer edit makes this one stale instead of silently overwriting it. */
  expectedVersionId: number;
  /** Why the change is made (3 to 300 characters). Stored on the version and in the audit row. */
  sourceNote: string;
  changeKind: ChangeKind;
  acknowledgeWarnings: boolean;
}

export interface RestoreInput {
  expectedVersionId: number;
  versionId: number;
  reason: string;
}

export type Parsed<T> = { ok: true; value: T } | { ok: false; error: string };

const tidy = (s: string) => s.replace(/\r\n?/g, '\n').trim();
const isId = (n: unknown): n is number => typeof n === 'number' && Number.isInteger(n) && n > 0;

export function cleanNote(v: unknown): string | null {
  if (typeof v !== 'string') return null;
  const s = v.replace(/\s+/g, ' ').trim();
  return s.length >= EDIT_LIMITS.minNote && s.length <= EDIT_LIMITS.note ? s : null;
}

export function parseEditInput(raw: unknown): Parsed<EditInput> {
  if (!raw || typeof raw !== 'object') return { ok: false, error: 'Missing edit' };
  const b = raw as Record<string, unknown>;
  if (!isId(b.expectedVersionId)) return { ok: false, error: 'Missing the version you were looking at' };
  if (typeof b.prompt !== 'string' || typeof b.answer !== 'string') return { ok: false, error: 'The question and the answer are required' };
  const prompt = tidy(b.prompt);
  const answer = tidy(b.answer);
  if (!prompt || prompt.length > EDIT_LIMITS.prompt) return { ok: false, error: `The question must be 1 to ${EDIT_LIMITS.prompt} characters` };
  if (!Array.isArray(b.options) || b.options.length < EDIT_LIMITS.minOptions || b.options.length > EDIT_LIMITS.maxOptions || b.options.some((o) => typeof o !== 'string')) {
    return { ok: false, error: `Give ${EDIT_LIMITS.minOptions} to ${EDIT_LIMITS.maxOptions} options` };
  }
  const options = (b.options as string[]).map(tidy);
  if (options.some((o) => !o || o.length > EDIT_LIMITS.option)) return { ok: false, error: `Each option must be 1 to ${EDIT_LIMITS.option} characters` };
  if (!options.includes(answer)) return { ok: false, error: 'The answer must be one of the options' };
  const explanation = typeof b.explanation === 'string' ? tidy(b.explanation) : '';
  if (explanation.length > EDIT_LIMITS.explanation) return { ok: false, error: `The explanation must be at most ${EDIT_LIMITS.explanation} characters` };
  const sourceNote = cleanNote(b.sourceNote);
  if (!sourceNote) return { ok: false, error: `Say why you are changing it (${EDIT_LIMITS.minNote} to ${EDIT_LIMITS.note} characters)` };
  if (b.changeKind !== 'wording' && b.changeKind !== 'meaning') return { ok: false, error: 'Say whether this is a wording fix or a change of meaning' };
  return { ok: true, value: { expectedVersionId: b.expectedVersionId, prompt, options, answer, explanation, sourceNote, changeKind: b.changeKind, acknowledgeWarnings: b.acknowledgeWarnings === true } };
}

export function parseRestoreInput(raw: unknown): Parsed<RestoreInput> {
  if (!raw || typeof raw !== 'object') return { ok: false, error: 'Missing restore' };
  const b = raw as Record<string, unknown>;
  if (!isId(b.expectedVersionId) || !isId(b.versionId)) return { ok: false, error: 'Missing version' };
  const reason = cleanNote(b.reason);
  if (!reason) return { ok: false, error: `Say why you are restoring it (${EDIT_LIMITS.minNote} to ${EDIT_LIMITS.note} characters)` };
  return { ok: true, value: { expectedVersionId: b.expectedVersionId, versionId: b.versionId, reason } };
}

export const sameContent = (a: QuestionContent, b: QuestionContent): boolean =>
  a.prompt === b.prompt && a.answer === b.answer && a.explanation === b.explanation && a.options.length === b.options.length && a.options.every((o, i) => o === b.options[i]);

/** A change of MEANING: the answer, or the set of options, is different. A different order or wording of the explanation or question is not. */
export function isMeaningChange(a: QuestionContent, b: QuestionContent): boolean {
  if (a.answer !== b.answer) return true;
  const x = [...a.options].sort();
  const y = [...b.options].sort();
  return x.length !== y.length || x.some((o, i) => o !== y[i]);
}

export type EditedField = 'prompt' | 'options' | 'answer' | 'explanation';
export function changedFields(a: QuestionContent, b: QuestionContent): EditedField[] {
  const out: EditedField[] = [];
  if (a.prompt !== b.prompt) out.push('prompt');
  if (a.options.length !== b.options.length || a.options.some((o, i) => o !== b.options[i])) out.push('options');
  if (a.answer !== b.answer) out.push('answer');
  if (a.explanation !== b.explanation) out.push('explanation');
  return out;
}
