// ADR 0004 (teacher review by secure link): shapes and pure helpers shared by the admin API and the admin pages. No server imports.

export type ItemKind = 'question' | 'lesson_line';
export type Verdict = 'correct' | 'change' | 'unsure';
export type Confidence = 'sure' | 'fairly_sure';
export type DecisionKind = 'accept_merged' | 'accept_reviewer' | 'edit_accept' | 'keep_original' | 'ask_again';
export const DECISION_KINDS: readonly DecisionKind[] = ['accept_merged', 'accept_reviewer', 'edit_accept', 'keep_original', 'ask_again'];

/** What a reviewer proposes. A question: the whole content. A lesson line: the replacement text. */
export interface QuestionProposal { prompt: string; options: string[]; answer: string; explanation: string }
export interface LessonProposal { text: string }
export type Proposal = QuestionProposal | LessonProposal;

export interface ReviewResponse {
  reviewerId: number;
  /** "Reviewer 1", "Reviewer 2" ... in invite order. Names stay on the reviewer row; the results view shows the label plus the display name. */
  label: string;
  verdict: Verdict;
  proposal: Proposal | null;
  confidence: Confidence | null;
  reason: string;
}

export interface Agreement {
  invited: number;
  answered: number;
  correct: number;
  change: number;
  unsure: number;
  /** Largest group of reviewers that proposed the very same change (0 when nobody did). */
  sameChange: number;
  state: 'pending' | 'all_correct' | 'same_change' | 'mixed' | 'disagree';
  label: string;
}

const norm = (s: string) => s.replace(/\s+/g, ' ').trim();

/** A stable key for a proposal, so identical suggestions group together. Whitespace-insensitive. Options keep their order. */
export function proposalKey(p: Proposal | null): string {
  if (!p) return '';
  if ('text' in p) return JSON.stringify({ text: norm(p.text) });
  return JSON.stringify({ prompt: norm(p.prompt), options: p.options.map(norm), answer: norm(p.answer), explanation: norm(p.explanation ?? '') });
}

export function summariseAgreement(invited: number, responses: ReviewResponse[]): Agreement {
  const answered = responses.length;
  const correct = responses.filter((r) => r.verdict === 'correct').length;
  const changes = responses.filter((r) => r.verdict === 'change');
  const unsure = responses.filter((r) => r.verdict === 'unsure').length;
  const groups = new Map<string, number>();
  for (const r of changes) groups.set(proposalKey(r.proposal), (groups.get(proposalKey(r.proposal)) ?? 0) + 1);
  const sameChange = Math.max(0, ...groups.values());
  const base = { invited, answered, correct, change: changes.length, unsure, sameChange };
  if (answered === 0) return { ...base, state: 'pending', label: `Waiting for ${invited} reviewer${invited === 1 ? '' : 's'}` };
  if (correct === answered) return { ...base, state: 'all_correct', label: `${correct}/${answered} correct` };
  if (changes.length > 0 && changes.length === answered && groups.size === 1) {
    return { ...base, state: 'same_change', label: answered === 1 ? '1 suggests a change' : `${answered}/${answered} suggest the same change` };
  }
  if (correct > 0 && changes.length > 0) return { ...base, state: 'disagree', label: `Disagree: ${correct} correct, ${changes.length} suggest a change` };
  if (changes.length > 1 && groups.size > 1) return { ...base, state: 'disagree', label: `Disagree: ${changes.length} different changes` };
  if (changes.length > 0 && unsure > 0) return { ...base, state: 'mixed', label: `${changes.length} suggest a change, ${unsure} not sure` };
  return { ...base, state: 'mixed', label: `${unsure}/${answered} not sure` };
}

/** If every reviewer who suggested a change suggested the same one, that is the merged proposal without needing any AI. */
export function unanimousProposal(responses: ReviewResponse[]): Proposal | null {
  const changes = responses.filter((r) => r.verdict === 'change' && r.proposal);
  if (changes.length === 0) return null;
  const k = proposalKey(changes[0].proposal);
  return changes.every((r) => proposalKey(r.proposal) === k) ? changes[0].proposal : null;
}

export function parseProposal(kind: ItemKind, raw: unknown): Proposal | null {
  if (!raw || typeof raw !== 'object') return null;
  const b = raw as Record<string, unknown>;
  if (kind === 'lesson_line') return typeof b.text === 'string' && b.text.trim() ? { text: b.text } : null;
  if (typeof b.prompt !== 'string' || typeof b.answer !== 'string' || !Array.isArray(b.options) || b.options.some((o) => typeof o !== 'string')) return null;
  return { prompt: b.prompt, options: b.options as string[], answer: b.answer, explanation: typeof b.explanation === 'string' ? b.explanation : '' };
}
