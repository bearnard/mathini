// What a reviewer may propose, and the checks for it. Pure (no I/O), used by the server to validate a save and by the
// reviewer's page to decide whether a suggestion is ready to send.

import type { LessonLineContent, QuestionContent, ReviewContent, ReviewItemKind } from './types';

export const LIMITS = {
  prompt: 600,
  option: 300,
  explanation: 1200,
  lineText: 1500,
  reason: 1500,
  minOptions: 2,
  maxOptions: 6,
} as const;

export type ProposalCheck = { ok: true; value: ReviewContent } | { ok: false; error: string };

const str = (v: unknown): string | null => (typeof v === 'string' ? v : null);

export const clean = (s: string): string => s.replace(/\r\n?/g, '\n').trim();

export function checkQuestionProposal(p: unknown): ProposalCheck {
  if (!p || typeof p !== 'object') return { ok: false, error: 'proposal must be an object' };
  const o = p as Record<string, unknown>;
  const prompt = str(o.prompt);
  const answer = str(o.answer);
  const explanation = o.explanation === undefined || o.explanation === null ? '' : str(o.explanation);
  if (prompt === null || answer === null || explanation === null || !Array.isArray(o.options)) return { ok: false, error: 'proposal needs prompt, options, answer and explanation' };
  if (o.options.some((x) => typeof x !== 'string')) return { ok: false, error: 'options must be text' };
  const options = (o.options as string[]).map(clean);
  const value: QuestionContent = { prompt: clean(prompt), options, answer: clean(answer), explanation: clean(explanation) };
  if (!value.prompt) return { ok: false, error: 'the question needs wording' };
  if (value.prompt.length > LIMITS.prompt) return { ok: false, error: 'the question wording is too long' };
  if (options.length < LIMITS.minOptions || options.length > LIMITS.maxOptions) return { ok: false, error: 'a question needs 2 to 6 options' };
  if (options.some((x) => !x || x.length > LIMITS.option)) return { ok: false, error: 'every option needs text (up to 300 characters)' };
  if (new Set(options.map((x) => x.toLowerCase())).size !== options.length) return { ok: false, error: 'two options are the same' };
  if (!options.includes(value.answer)) return { ok: false, error: 'the correct answer must be one of the options' };
  if (value.explanation.length > LIMITS.explanation) return { ok: false, error: 'the explanation is too long' };
  return { ok: true, value };
}

export function checkLineProposal(p: unknown): ProposalCheck {
  if (!p || typeof p !== 'object') return { ok: false, error: 'proposal must be an object' };
  const text = str((p as Record<string, unknown>).text);
  if (text === null) return { ok: false, error: 'proposal needs the text' };
  const value: LessonLineContent = { text: clean(text) };
  if (!value.text) return { ok: false, error: 'the line needs text' };
  if (value.text.length > LIMITS.lineText) return { ok: false, error: 'the line is too long' };
  return { ok: true, value };
}

export const checkProposal = (kind: ReviewItemKind, p: unknown): ProposalCheck => (kind === 'question' ? checkQuestionProposal(p) : checkLineProposal(p));

/** True when the suggestion is the same as what the reviewer was shown (nothing to change). */
export function sameContent(kind: ReviewItemKind, a: ReviewContent, b: ReviewContent): boolean {
  if (kind === 'lesson_line') return clean((a as LessonLineContent).text) === clean((b as LessonLineContent).text);
  const x = a as QuestionContent;
  const y = b as QuestionContent;
  return clean(x.prompt) === clean(y.prompt) && clean(x.answer) === clean(y.answer) && clean(x.explanation ?? '') === clean(y.explanation ?? '')
    && x.options.length === y.options.length && x.options.every((o, i) => clean(o) === clean(y.options[i]));
}
