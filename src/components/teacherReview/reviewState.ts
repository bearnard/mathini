// Pure state helpers for the reviewer's page (no React, no I/O), so the rules are unit-tested.

import { checkProposal, sameContent } from '../../lib/server/teacherReview/proposal';
import type {
  LessonLineContent, QuestionContent, ReviewConfidence, ReviewContent, ReviewItemKind, ReviewVerdict, ReviewerItemView, SaveResponseInput,
} from '../../lib/server/teacherReview/types';

/** The question editor keeps the key as an index, so editing the key's wording does not lose which option is correct. */
export interface QuestionDraft {
  prompt: string;
  options: string[];
  keyIndex: number;
  explanation: string;
}
export interface LineDraft {
  text: string;
}
export type ContentDraft = QuestionDraft | LineDraft;

export interface ItemDraft {
  verdict: ReviewVerdict | null;
  content: ContentDraft;
  confidence: ReviewConfidence | null;
  reason: string;
}

export function draftFromContent(kind: ReviewItemKind, c: ReviewContent): ContentDraft {
  if (kind === 'lesson_line') return { text: (c as LessonLineContent).text };
  const q = c as QuestionContent;
  const keyIndex = Math.max(0, q.options.indexOf(q.answer));
  return { prompt: q.prompt, options: [...q.options], keyIndex, explanation: q.explanation ?? '' };
}

export function contentFromDraft(kind: ReviewItemKind, d: ContentDraft): ReviewContent {
  if (kind === 'lesson_line') return { text: (d as LineDraft).text };
  const q = d as QuestionDraft;
  return { prompt: q.prompt, options: q.options, answer: q.options[q.keyIndex] ?? '', explanation: q.explanation };
}

/** The draft an item starts with: the saved answer if there is one, otherwise the original content. */
export function initialDraft(item: ReviewerItemView): ItemDraft {
  const r = item.response;
  return {
    verdict: r?.verdict ?? null,
    content: draftFromContent(item.kind, r?.proposal ?? item.content),
    confidence: r?.confidence ?? null,
    reason: r?.reason ?? '',
  };
}

export type SaveDecision = { send: true; body: SaveResponseInput } | { send: false; hint: string | null };

/** What to send for an item, or why nothing is sent yet (a suggestion that is incomplete or identical to the original). */
export function saveDecision(item: ReviewerItemView, d: ItemDraft): SaveDecision {
  if (!d.verdict) return { send: false, hint: null };
  const base = { itemId: item.id, verdict: d.verdict, confidence: d.confidence, reason: d.reason.trim() || null };
  if (d.verdict !== 'change') return { send: true, body: base };
  const content = contentFromDraft(item.kind, d.content);
  const check = checkProposal(item.kind, content);
  if (!check.ok) return { send: false, hint: check.error };
  if (sameContent(item.kind, item.content, check.value)) return { send: false, hint: 'Change something to suggest it, or choose "Correct as is".' };
  return { send: true, body: { ...base, proposal: check.value } };
}

export function counts(items: ReviewerItemView[], drafts: Record<number, ItemDraft>, savedIds: ReadonlySet<number>) {
  const answered = items.filter((i) => savedIds.has(i.id)).length;
  const by = { correct: 0, change: 0, unsure: 0 };
  for (const i of items) {
    const v = savedIds.has(i.id) ? drafts[i.id]?.verdict : null;
    if (v) by[v] += 1;
  }
  return { total: items.length, answered, ...by, remaining: items.length - answered };
}

/** Where "Continue" should land: the first item without a saved answer, or the last one when all are answered. */
export function resumeIndex(items: ReviewerItemView[], savedIds: ReadonlySet<number>): number {
  const i = items.findIndex((it) => !savedIds.has(it.id));
  return i === -1 ? Math.max(0, items.length - 1) : i;
}

export const progressPercent = (answered: number, total: number): number => (total <= 0 ? 0 : Math.min(100, Math.round((answered / total) * 100)));

export function formatExpiry(ms: number, now: number): string {
  const days = Math.ceil((ms - now) / 86_400_000);
  if (days <= 0) return 'today';
  return days === 1 ? 'tomorrow' : `in ${days} days`;
}

/** The small chips above an item. A lesson line gets ONE ("Lesson line: <slide title>"); a question gets its subject, grade and topic, then "Question". */
export function itemChips(kind: ReviewItemKind, ctx: { subject?: string; grade?: number; topic?: string; slideTitle?: string } | null): string[] {
  if (kind === 'lesson_line') return [ctx?.slideTitle ? `Lesson line: ${ctx.slideTitle}` : 'Lesson line'];
  return [ctx?.subject, ctx?.grade ? `Grade ${ctx.grade}` : null, ctx?.topic, 'Question'].filter((c): c is string => !!c);
}
