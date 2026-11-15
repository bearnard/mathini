// Shared types for teacher review by secure link (docs/adr/0004-teacher-review-links.md, migrations/0012_review.sql).
// Types and constants only, so the token library, the reviewer flow, the admin pages and the AI merge all agree.
// Note: this is teacher review. The learner's spaced-repetition review lives in src/lib/server/review/ and shares nothing with it.
// The string unions below are checked against the CHECK lists in 0012_review.sql by reviewSchema.test.ts.

export const REVIEW_PACK_STATUSES = ['draft', 'open', 'closed'] as const;
export type ReviewPackStatus = (typeof REVIEW_PACK_STATUSES)[number];

export const REVIEW_ITEM_KINDS = ['question', 'lesson_line'] as const;
export type ReviewItemKind = (typeof REVIEW_ITEM_KINDS)[number];

export const REVIEW_VERDICTS = ['correct', 'change', 'unsure'] as const;
export type ReviewVerdict = (typeof REVIEW_VERDICTS)[number];

export const REVIEW_CONFIDENCES = ['sure', 'fairly_sure'] as const;
export type ReviewConfidence = (typeof REVIEW_CONFIDENCES)[number];

export const REVIEW_DECISIONS = ['accept_merged', 'accept_reviewer', 'edit_accept', 'keep_original', 'ask_again'] as const;
export type ReviewDecisionKind = (typeof REVIEW_DECISIONS)[number];

export const REVIEW_OUTCOMES = ['verified', 'changed', 'unsure'] as const;
export type ReviewOutcome = (typeof REVIEW_OUTCOMES)[number];

export const LESSON_CHANGE_STATUSES = ['pending', 'applied', 'failed'] as const;
export type LessonChangeStatus = (typeof LESSON_CHANGE_STATUSES)[number];

/** Defaults from the ADR. */
export const REVIEW_LINK_TTL_DAYS = 14;
export const REVIEW_PERSONAL_DATA_DAYS = 90;

// ---- What a reviewer proposes (review_responses.proposal, JSON) and what the AI merges ----

/** A multiple-choice question as a reviewer sees and edits it. `answer` is the text of the correct option, as in question_versions. */
export interface QuestionContent {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
}

/** A lesson line as a reviewer sees and edits it. */
export interface LessonLineContent {
  text: string;
}

export type ReviewContent = QuestionContent | LessonLineContent;

// ---- review_pack_items.context (JSON) ----

export interface QuestionItemContext {
  subject?: string;
  grade?: number;
  topic?: string;
}

export interface LessonLineItemContext {
  slideTitle: string;
  /** The slides around the line, as plain text, for the reviewer to read it in context. */
  before?: string;
  after?: string;
}

export type ReviewItemContext = QuestionItemContext | LessonLineItemContext;

// ---- Table rows (what SELECT * returns; JSON columns are still strings) ----

export interface ReviewPackRow {
  id: number;
  title: string;
  created_by: string;
  created_at: number;
  status: ReviewPackStatus;
  closed_at: number | null;
}

export interface ReviewPackItemRow {
  id: number;
  pack_id: number;
  kind: ReviewItemKind;
  question_id: string | null;
  version_id: number | null;
  file: string | null;
  anchor_text: string | null;
  context: string | null;
  doubt: string | null;
  sort: number;
}

export interface ReviewerRow {
  id: number;
  pack_id: number;
  display_name: string;
  contact_note: string | null;
  token_hash: string;
  expires_at: number;
  revoked_at: number | null;
  last_seen_at: number | null;
  done_at: number | null;
  created_at: number;
  save_count: number;
}

export interface ReviewResponseRow {
  reviewer_id: number;
  item_id: number;
  verdict: ReviewVerdict;
  proposal: string | null;
  confidence: ReviewConfidence | null;
  reason: string | null;
  updated_at: number;
}

export interface ReviewDecisionRow {
  item_id: number;
  decision: ReviewDecisionKind;
  merged: string | null;
  ai_rationale: string | null;
  ai_disagreements: string | null;
  chosen_reviewer_id: number | null;
  outcome: ReviewOutcome | null;
  decided_by: string;
  applied_version_id: number | null;
  change_queue_id: number | null;
  decided_at: number;
}

export interface LessonChangeQueueRow {
  id: number;
  file: string;
  old_text: string;
  new_text: string;
  item_id: number | null;
  status: LessonChangeStatus;
  applied_commit: string | null;
  created_at: number;
}

// ---- What the reviewer's page and API exchange. Never contains other reviewers, learners or anything outside the pack. ----

/** One item as the reviewer sees it. */
export interface ReviewerItemView {
  id: number;
  kind: ReviewItemKind;
  doubt: string | null;
  context: ReviewItemContext | null;
  /** The current content: a question version, or the lesson line. */
  content: ReviewContent;
  /** This reviewer's saved answer, if any. */
  response: ReviewerResponseView | null;
}

export interface ReviewerResponseView {
  verdict: ReviewVerdict;
  proposal: ReviewContent | null;
  confidence: ReviewConfidence | null;
  reason: string | null;
}

/** GET /api/teacher-review (token in the X-Review-Token header): the pack as one reviewer sees it. */
export interface ReviewerPackView {
  packTitle: string;
  /** The "Reviewer 1/2/3" label or the owner's display name, as the reviewer should see themselves. */
  reviewerName: string;
  expiresAt: number;
  total: number;
  answered: number;
  items: ReviewerItemView[];
}

/** The body of a save (autosave) for one item. */
export interface SaveResponseInput {
  itemId: number;
  verdict: ReviewVerdict;
  proposal?: ReviewContent | null;
  confidence?: ReviewConfidence | null;
  reason?: string | null;
}

// ---- AI merge (ADR 0004 part 3): one function, never applies anything, never receives reviewer names ----

export interface MergeSuggestionInput {
  original: ReviewContent;
  /** Anonymous: no reviewer names or contact details. */
  responses: { verdict: ReviewVerdict; proposal: ReviewContent | null; confidence: ReviewConfidence | null; reason: string | null }[];
  subject: string;
  grade: number;
}

export interface MergeSuggestion {
  merged: ReviewContent;
  rationale: string;
  disagreements: string[];
}
