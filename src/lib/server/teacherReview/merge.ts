// AI merge suggestion for teacher review (ADR 0004, part 3). ONE function, suggestMerge: given the original content and what the
// reviewers answered, it proposes a single merged version, a one-line rationale and the points where reviewers disagree.
//
// It NEVER applies anything: the owner decides. It sends Gemini only the content and the suggestions (reviewers are called
// "Reviewer A", "Reviewer B"... and only verdict, confidence, reason and proposal are copied across, so a name or contact note can't leak
// through an extra property). Anything wrong with the AI (network, status, bad JSON, wrong shape) gives the fallback
// 'AI unavailable, decide manually', never an exception.
import { generateJson } from '../gemini';
import { checkQuestion, type QualityContext, type Reason } from '../../shared/questionQuality';
import { EDIT_LIMITS } from '../../shared/questionEdit';
import type { LessonLineContent, QuestionContent, ReviewConfidence, ReviewContent, ReviewItemKind, ReviewVerdict } from './types';

export type { LessonLineContent, QuestionContent, ReviewConfidence, ReviewContent, ReviewVerdict } from './types';
export type { Reason as QualityFinding } from '../../shared/questionQuality';

export type MergeKind = ReviewItemKind;

/** The content of one review item (types.ts). */
export type MergeContent = ReviewContent;

/**
 * One reviewer's answer for one item, as stored in review_responses. Extra properties (such as a name) are never read.
 * At runtime a question proposal may leave fields out (they keep the original's value).
 */
export interface MergeResponse {
  verdict: ReviewVerdict;
  /** For 'change': the edited content. */
  proposal?: ReviewContent | Partial<QuestionContent> | null;
  confidence?: ReviewConfidence | null;
  reason?: string | null;
}

export interface MergeInput {
  kind: MergeKind;
  original: MergeContent;
  responses: MergeResponse[];
  subject: string;
  grade: number | string;
  /** Passed to checkQuestion for question items (decimal-comma policy of the task, existing prompts...). Optional. */
  qualityContext?: QualityContext;
}

/** The result of suggestMerge. Same fields as types.ts MergeSuggestion, plus `source`, `findings` and `error`; `merged` is null only when the AI was unavailable. */
export interface MergeResult {
  /** The one merged proposal; null only when the AI was unavailable. Same shape as the original for the item's kind. */
  merged: MergeContent | null;
  /** One line: why this merge. 'all reviewers agree' when no AI was used; AI_UNAVAILABLE_TEXT on failure. */
  rationale: string;
  /** The points where reviewers disagree, one short sentence each. Empty on agreement and on failure. */
  disagreements: string[];
  /** 'agreement': identical changes, no AI call. 'ai': Gemini merged. 'unavailable': fallback, decide manually. */
  source: 'agreement' | 'ai' | 'unavailable';
  /** Question items only: everything checkQuestion says about `merged` (reject-level and warn-level). Empty for lesson lines. */
  findings: Reason[];
  /** Why the AI was unavailable (short, for the owner's log; never contains the key). */
  error?: string;
}

export const AI_UNAVAILABLE_TEXT = 'AI unavailable, decide manually';
export const ALL_AGREE_TEXT = 'all reviewers agree';

/** The injectable part, for tests: the structured-output Gemini call. */
export interface MergeDeps {
  generateJson?: (prompt: string, schema: object) => Promise<unknown>;
}

const MAX_RATIONALE = 400;
const MAX_DISAGREEMENTS = 8;
const MAX_DISAGREEMENT_CHARS = 300;
const MAX_REASON_CHARS = 600;

const str = (v: unknown): string | null => (typeof v === 'string' ? v.trim() : null);

/** A question with every field present and within the edit limits' basic shape; null when it cannot be one. */
function toQuestion(raw: unknown, fallback?: QuestionContent): QuestionContent | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Record<string, unknown>;
  const prompt = r.prompt === undefined ? fallback?.prompt : str(r.prompt);
  const answer = r.answer === undefined ? fallback?.answer : str(r.answer);
  const explanation = r.explanation === undefined || r.explanation === null ? (fallback?.explanation ?? '') : str(r.explanation);
  let options: string[] | undefined;
  if (r.options === undefined) options = fallback?.options.slice();
  else if (Array.isArray(r.options) && r.options.every((o) => typeof o === 'string')) options = (r.options as string[]).map((o) => o.trim());
  if (!prompt || !answer || explanation === null || explanation === undefined || !options) return null;
  if (options.length < EDIT_LIMITS.minOptions || options.length > EDIT_LIMITS.maxOptions || options.some((o) => !o)) return null;
  return { prompt, options, answer, explanation };
}

function toLine(raw: unknown): LessonLineContent | null {
  const t = raw && typeof raw === 'object' ? str((raw as Record<string, unknown>).text) : typeof raw === 'string' ? raw.trim() : null;
  return t ? { text: t } : null;
}

const normalise = (kind: MergeKind, raw: unknown, original?: MergeContent): MergeContent | null =>
  kind === 'question' ? toQuestion(raw, original as QuestionContent | undefined) : toLine(raw);

const keyOf = (c: MergeContent): string => JSON.stringify(c);

/** The AI's merged value must be complete and inside the edit limits, and for a question the key must be one of the options. */
function validMerged(kind: MergeKind, raw: unknown): MergeContent | null {
  const c = normalise(kind, raw);
  if (!c) return null;
  if (kind === 'lesson_line') return (c as LessonLineContent).text.length <= EDIT_LIMITS.prompt * 2 ? c : null;
  const q = c as QuestionContent;
  if (!q.options.includes(q.answer)) return null;
  if (q.prompt.length > EDIT_LIMITS.prompt || q.explanation.length > EDIT_LIMITS.explanation || q.options.some((o) => o.length > EDIT_LIMITS.option)) return null;
  return q;
}

const SCHEMAS = {
  question: {
    type: 'object',
    properties: {
      merged: {
        type: 'object',
        properties: {
          prompt: { type: 'string' },
          options: { type: 'array', items: { type: 'string' } },
          answer: { type: 'string' },
          explanation: { type: 'string' },
        },
        required: ['prompt', 'options', 'answer', 'explanation'],
      },
      rationale: { type: 'string' },
      disagreements: { type: 'array', items: { type: 'string' } },
    },
    required: ['merged', 'rationale', 'disagreements'],
  },
  lesson_line: {
    type: 'object',
    properties: {
      merged: { type: 'object', properties: { text: { type: 'string' } }, required: ['text'] },
      rationale: { type: 'string' },
      disagreements: { type: 'array', items: { type: 'string' } },
    },
    required: ['merged', 'rationale', 'disagreements'],
  },
} as const;

// ---- Scrubbing the free-text reasons before they go to Gemini ----
// A reviewer can type anything into the reason box ("Hi, it's Mrs Naidoo, call me on 082 555 0100"). Reasons are scrubbed here, on the way out,
// whatever the caller passes. It is a best-effort filter for the common patterns, not a guarantee: the owner must not paste personal data
// into packs either. Removed text becomes a placeholder so the sentence still reads.
const EMAIL_RE = /[^\s@<>()[\]"',;:]+@[^\s@<>()[\]"',;]+\.[A-Za-z]{2,}/g;
const LINK_RE = /\b(?:https?:\/\/|www\.)[^\s)]+/gi;
/** A run of digits with the usual separators; it counts as a phone number when it holds 9 or more digits (South African numbers have 10). */
const PHONE_RE = /\+?\(?\d[\d\s().-]{6,}\d/g;
const TITLES = 'Mrs|Mr|Ms|Miss|Mx|Dr|Prof|Mev|Mevr|Mnr|Mej';
const NAME_WORD = "[A-Z][\\p{L}'’-]+";
/** "Mrs Naidoo", "Mr. J. Dlamini", "Dr Anna van der Merwe" (the surname particles stay lowercase). */
const TITLE_NAME_RE = new RegExp(`\\b(?:${TITLES})\\.?\\s+(?:[A-Z]\\.?\\s+)*${NAME_WORD}(?:\\s+(?:van|der|de|du|le|la|von|ten|ter)){0,2}(?:\\s+${NAME_WORD})?`, 'gu');
/** "I am Sipho", "I'm Thandi Mokoena", "my name is Ms N.", "my naam is Pieter". "I am sure" is not a name: it needs a capital letter, and common capitalised words are skipped. */
const SELF_INTRO_RE = new RegExp(`\\b(?:I am|I'm|I’m|my name is|my naam is)\\s+(?:(?:${TITLES})\\.?\\s+)?${NAME_WORD}(?:\\s+${NAME_WORD}){0,2}`, 'gu');
const NOT_A_NAME = new Set(['Afrikaans', 'English', 'Xhosa', 'IsiXhosa', 'Zulu', 'IsiZulu', 'South', 'African', 'Grade', 'Sure', 'Not', 'Fairly', 'Certain', 'Unsure', 'Happy', 'Confident', 'Wrong', 'Correct', 'Right', 'Teacher', 'Head', 'Principal', 'Sorry', 'Aware', 'Afraid']);

/** Replaces emails, links, phone numbers, titled names ("Mrs X") and self-introductions ("I am X") in a reviewer's free text with [email], [link], [phone] and [name]. */
export function scrubReason(text: string): string {
  return text
    .replace(EMAIL_RE, '[email]')
    .replace(LINK_RE, '[link]')
    .replace(PHONE_RE, (m) => (m.replace(/\D/g, '').length >= 9 ? '[phone]' : m))
    .replace(TITLE_NAME_RE, '[name]')
    .replace(SELF_INTRO_RE, (m) => {
      const words = m.split(/\s+/);
      const first = words.findIndex((w, i) => i >= 2 && /^[A-Z]/.test(w) && !TITLES.split('|').includes(w.replace(/\.$/, '')));
      return first !== -1 && NOT_A_NAME.has(words[first].split(/[-’']/)[0].replace(/[^\p{L}]/gu, '')) ? m : m.replace(/^(I am|I'm|I’m|my name is|my naam is)\s+.*$/su, '$1 [name]');
    });
}

const show = (kind: MergeKind, c: MergeContent): string =>
  kind === 'question'
    ? JSON.stringify({ prompt: (c as QuestionContent).prompt, options: (c as QuestionContent).options, answer: (c as QuestionContent).answer, explanation: (c as QuestionContent).explanation }, null, 2)
    : JSON.stringify({ text: (c as LessonLineContent).text }, null, 2);

/** The prompt. Reviewers are lettered; only verdict, confidence, reason and proposal are copied from each response. */
export function buildMergePrompt(input: MergeInput, original: MergeContent): string {
  const lines = input.responses.map((r, i) => {
    const who = `Reviewer ${String.fromCharCode(65 + (i % 26))}`;
    const parts = [`${who}: verdict = ${r.verdict}`];
    if (typeof r.confidence === 'string' && r.confidence) parts.push(`confidence = ${r.confidence.slice(0, 40)}`);
    if (typeof r.reason === 'string' && r.reason.trim()) parts.push(`reason = ${JSON.stringify(scrubReason(r.reason.trim()).slice(0, MAX_REASON_CHARS))}`);
    if (r.verdict === 'change') {
      const p = normalise(input.kind, r.proposal, original);
      parts.push(p ? `suggested version =\n${show(input.kind, p)}` : 'suggested version = (none given)');
    }
    return parts.join('; ');
  });
  return [
    `You help a South African education team merge corrections from several teachers into ONE proposal.`,
    `Subject: ${String(input.subject).slice(0, 80)}. Grade: ${String(input.grade).slice(0, 10)} (CAPS curriculum). Content type: ${input.kind === 'question' ? 'a multiple-choice practice question' : 'one line from a lesson'}.`,
    ``,
    `ORIGINAL:`,
    show(input.kind, original),
    ``,
    `REVIEWERS (verdict 'correct' means keep the original; 'unsure' is a comment only):`,
    ...lines,
    ``,
    `Rules:`,
    `- Return ONE merged version. Start from the original and change only what at least one reviewer supports with a reason. Do not add facts nobody suggested.`,
    `- Keep the language of the original (it may be Afrikaans or isiXhosa). Keep the learner's reading level.`,
    input.kind === 'question'
      ? `- Keep 2 to 6 options. The answer must be copied exactly from one of the options. Do not make the key longer or more detailed than the other options.`
      : `- Keep it one sentence or example of about the same length.`,
    `- rationale: one short line saying why you merged it this way.`,
    `- disagreements: every point where reviewers disagree (for example two different corrections, or one says correct while another changes it), one short sentence each, naming reviewers by letter. Empty list if none.`,
    `- Personal details in the reviewers' reasons were removed and show as [name], [email], [phone] or [link]; ignore those placeholders.`,
    `- Answer with JSON only.`,
  ].join('\n');
}

const unavailable = (error: string): MergeResult => ({ merged: null, rationale: AI_UNAVAILABLE_TEXT, disagreements: [], source: 'unavailable', findings: [], error: error.slice(0, 200) });

const findingsFor = (input: MergeInput, merged: MergeContent): Reason[] =>
  input.kind === 'question' ? checkQuestion(merged as QuestionContent, input.qualityContext ?? {}).reasons : [];

/** Validates the AI's reply; null when its shape is wrong. */
function readAiReply(kind: MergeKind, raw: unknown): { merged: MergeContent; rationale: string; disagreements: string[] } | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Record<string, unknown>;
  const merged = validMerged(kind, r.merged);
  const rationale = str(r.rationale);
  if (!merged || !rationale) return null;
  if (!Array.isArray(r.disagreements) || !r.disagreements.every((d) => typeof d === 'string')) return null;
  const disagreements = (r.disagreements as string[]).map((d) => d.trim().slice(0, MAX_DISAGREEMENT_CHARS)).filter(Boolean).slice(0, MAX_DISAGREEMENTS);
  return { merged, rationale: rationale.slice(0, MAX_RATIONALE), disagreements };
}

/**
 * Suggests ONE merged version of an item from the reviewers' answers. Returns null when there is nothing to merge: no 'change' response
 * with a usable proposal, or only changes identical to the original. When every reviewer who took a side ('unsure' takes none) proposes
 * the same change, that change is returned with rationale 'all reviewers agree' and the AI is NOT called. Otherwise Gemini is asked for a
 * merged proposal; on any failure the result is { merged: null, rationale: 'AI unavailable, decide manually', source: 'unavailable' }.
 * For question items `findings` holds checkQuestion's verdict on the merged proposal. Nothing is ever applied.
 */
export async function suggestMerge(input: MergeInput, deps: MergeDeps = {}): Promise<MergeResult | null> {
  const original = normalise(input.kind, input.original);
  if (!original) throw new TypeError('suggestMerge: the original content is not a valid ' + input.kind);
  const origKey = keyOf(original);

  const changes = input.responses.filter((r) => r.verdict === 'change');
  const usable = changes
    .map((r) => normalise(input.kind, r.proposal, original))
    .filter((p): p is MergeContent => p !== null && keyOf(p) !== origKey);
  if (usable.length === 0) return null;

  const stances = input.responses.filter((r) => r.verdict !== 'unsure');
  const allSameChange = usable.length === changes.length && stances.length === changes.length && new Set(usable.map(keyOf)).size === 1;
  if (allSameChange) {
    const merged = usable[0];
    return { merged, rationale: ALL_AGREE_TEXT, disagreements: [], source: 'agreement', findings: findingsFor(input, merged) };
  }

  const call = deps.generateJson ?? ((prompt: string, schema: object) => generateJson(prompt, schema));
  let reply: unknown;
  try {
    reply = await call(buildMergePrompt(input, original), SCHEMAS[input.kind]);
  } catch (e) {
    return unavailable(e instanceof Error ? e.message : 'request failed');
  }
  const read = readAiReply(input.kind, reply);
  if (!read) return unavailable('the AI reply did not match the expected shape');
  return { ...read, source: 'ai', findings: findingsFor(input, read.merged) };
}
