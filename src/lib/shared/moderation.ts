// Teacher proposals and moderator groups (ADR 0003 sections 1 and 4): the shapes, the limits and the rules both the server and the pages share.
import { EDIT_LIMITS, type QuestionContent } from './questionEdit';

export const PHASES = ['foundation', 'intermediate', 'senior', 'fet'] as const;
export type Phase = (typeof PHASES)[number];
export const PHASE_LABEL: Record<Phase, string> = { foundation: 'Foundation', intermediate: 'Intermediate', senior: 'Senior', fet: 'FET' };

/** The CAPS phase of a grade: Foundation R-3, Intermediate 4-6, Senior 7-9, FET 10-12. */
export const phaseOfGrade = (grade: number): Phase => (grade <= 3 ? 'foundation' : grade <= 6 ? 'intermediate' : grade <= 9 ? 'senior' : 'fet');
export const groupKeyOf = (subject: string, phase: Phase): string => `${subject}|${phase}`;
export const splitGroupKey = (key: string): { subject: string; phase: Phase } | null => {
  const i = key.lastIndexOf('|');
  const phase = key.slice(i + 1) as Phase;
  return i > 0 && (PHASES as readonly string[]).includes(phase) ? { subject: key.slice(0, i), phase } : null;
};
export const groupTitle = (key: string): string => { const g = splitGroupKey(key); return g ? `${g.subject} · ${PHASE_LABEL[g.phase]}` : key; };

export const PROPOSAL_KINDS = ['edit', 'retire', 'new'] as const;
export type ProposalKind = (typeof PROPOSAL_KINDS)[number];
export const SOURCE_KINDS = ['caps', 'textbook', 'lesson_slide'] as const;
export type SourceKind = (typeof SOURCE_KINDS)[number];
export const SOURCE_LABEL: Record<SourceKind, string> = { caps: 'CAPS document', textbook: 'Textbook and page', lesson_slide: 'Lesson slide' };
export const PROPOSAL_STATUSES = ['returned', 'submitted', 'applying', 'approved', 'rejected', 'stale', 'withdrawn'] as const;
export type ProposalStatus = (typeof PROPOSAL_STATUSES)[number];
/** Statuses that still count as "open" for the limits and for one-open-proposal-per-question. */
export const OPEN_STATUSES: readonly ProposalStatus[] = ['returned', 'submitted', 'applying'];

export const LIMITS = {
  reasonMin: 10, reasonMax: 400, sourceMin: 3, sourceMax: 200, decisionMin: 3, decisionMax: 400, commentMax: 1000,
  /** A teacher can have at most this many open proposals (returned, submitted), and send at most this many a day. */
  maxOpenPerTeacher: 20, maxPerDay: 15,
} as const;

/** Until a group has this many moderators, the OWNER approves every proposal in it; from then on one moderator's approval is enough. */
export const MODERATOR_THRESHOLD = 5;
/** Points an accepted proposal earns, and what unlocks eligibility to be appointed a moderator. No up or down votes. */
export const POINTS: Record<ProposalKind, number> = { edit: 10, new: 10, retire: 5 };
export const MODERATOR_ELIGIBLE_POINTS = 30;

export interface ProposalInput {
  kind: ProposalKind;
  questionId: string | null;
  baseVersionId: number | null;
  task: string | null;
  content: QuestionContent | null;
  reason: string;
  sourceKind: SourceKind;
  sourceRef: string;
}

export type Parsed<T> = { ok: true; value: T } | { ok: false; error: string };

const tidy = (s: string) => s.replace(/\r\n?/g, '\n').trim();
const line = (v: unknown, min: number, max: number): string | null => {
  if (typeof v !== 'string') return null;
  const s = v.replace(/\s+/g, ' ').trim();
  return s.length >= min && s.length <= max ? s : null;
};

/** One text in the form, as a person reads it: the shared limits on a question's wording come from EDIT_LIMITS. */
export function parseContent(raw: unknown): Parsed<QuestionContent> {
  if (!raw || typeof raw !== 'object') return { ok: false, error: 'Write the question' };
  const b = raw as Record<string, unknown>;
  if (typeof b.prompt !== 'string' || typeof b.answer !== 'string') return { ok: false, error: 'The question and the answer are required' };
  const prompt = tidy(b.prompt);
  const answer = tidy(b.answer);
  if (!prompt || prompt.length > EDIT_LIMITS.prompt) return { ok: false, error: `The question must be 1 to ${EDIT_LIMITS.prompt} characters` };
  if (!Array.isArray(b.options) || b.options.length < EDIT_LIMITS.minOptions || b.options.length > EDIT_LIMITS.maxOptions || b.options.some((o) => typeof o !== 'string')) return { ok: false, error: `Give ${EDIT_LIMITS.minOptions} to ${EDIT_LIMITS.maxOptions} options` };
  const options = (b.options as string[]).map(tidy);
  if (options.some((o) => !o || o.length > EDIT_LIMITS.option)) return { ok: false, error: `Each option must be 1 to ${EDIT_LIMITS.option} characters` };
  if (!options.includes(answer)) return { ok: false, error: 'The answer must be one of the options' };
  const explanation = typeof b.explanation === 'string' ? tidy(b.explanation) : '';
  if (explanation.length > EDIT_LIMITS.explanation) return { ok: false, error: `The explanation must be at most ${EDIT_LIMITS.explanation} characters` };
  return { ok: true, value: { prompt, options, answer, explanation } };
}

export function parseProposalInput(raw: unknown): Parsed<ProposalInput> {
  if (!raw || typeof raw !== 'object') return { ok: false, error: 'Missing proposal' };
  const b = raw as Record<string, unknown>;
  if (!(PROPOSAL_KINDS as readonly string[]).includes(b.kind as string)) return { ok: false, error: 'Choose edit, retire or new' };
  const kind = b.kind as ProposalKind;
  const reason = line(b.reason, LIMITS.reasonMin, LIMITS.reasonMax);
  if (!reason) return { ok: false, error: `Say why, in ${LIMITS.reasonMin} to ${LIMITS.reasonMax} characters` };
  if (!(SOURCE_KINDS as readonly string[]).includes(b.sourceKind as string)) return { ok: false, error: 'Say where this comes from: the CAPS document, a textbook, or a lesson slide' };
  const sourceRef = line(b.sourceRef, LIMITS.sourceMin, LIMITS.sourceMax);
  if (!sourceRef) return { ok: false, error: `Name the source and the page or slide (${LIMITS.sourceMin} to ${LIMITS.sourceMax} characters)` };
  const qid = typeof b.questionId === 'string' && /^[0-9a-f]{12}$/.test(b.questionId) ? b.questionId : null;
  let baseVersionId: number | null = null;
  let content: QuestionContent | null = null;
  let task: string | null = null;
  if (kind === 'edit' || kind === 'retire') {
    if (!qid) return { ok: false, error: 'Choose the question' };
  }
  if (kind === 'edit') {
    if (typeof b.baseVersionId !== 'number' || !Number.isInteger(b.baseVersionId) || b.baseVersionId < 1) return { ok: false, error: 'Missing the version you were looking at' };
    baseVersionId = b.baseVersionId;
  }
  if (kind === 'edit' || kind === 'new') {
    const c = parseContent(b.content);
    if (!c.ok) return c;
    content = c.value;
  }
  if (kind === 'new') {
    if (typeof b.task !== 'string' || !/^[A-Za-z0-9][A-Za-z0-9_\-]{1,120}$/.test(b.task)) return { ok: false, error: 'Choose the topic' };
    task = b.task;
  }
  return { ok: true, value: { kind, questionId: kind === 'new' ? null : qid, baseVersionId, task, content, reason, sourceKind: b.sourceKind as SourceKind, sourceRef } };
}

/** The reason that goes with an approve or reject. */
export const cleanDecisionReason = (v: unknown): string | null => line(v, LIMITS.decisionMin, LIMITS.decisionMax);
export const cleanComment = (v: unknown): string | null => {
  if (typeof v !== 'string') return null;
  const s = v.replace(/\r\n?/g, '\n').replace(/[ \t]+/g, ' ').trim();
  return s.length >= 1 && s.length <= LIMITS.commentMax ? s : null;
};

/** The note stored on the new question version: the citation, then the reason, cut to the version note limit. */
export const sourceNoteOf = (kind: SourceKind, ref: string, reason: string): string => `[${SOURCE_LABEL[kind]}] ${ref}: ${reason}`.slice(0, EDIT_LIMITS.note);
