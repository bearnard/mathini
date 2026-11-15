// What the reviewer's page reads and writes. Everything is scoped to ONE reviewer and the pack that reviewer was invited to:
// there is no query here that returns another reviewer's answers, a learner, or anything outside the pack.

import type { TrDb } from './db';
import { checkProposal, clean, LIMITS, sameContent } from './proposal';
import type {
  LessonLineContent, QuestionContent, ReviewContent, ReviewItemContext, ReviewItemKind, ReviewPackRow, ReviewerPackView, ReviewerRow,
  ReviewerItemView, ReviewResponseRow, SaveResponseInput,
} from './types';
import { REVIEW_CONFIDENCES, REVIEW_VERDICTS } from './types';

interface ItemJoinRow {
  id: number;
  kind: ReviewItemKind;
  context: string | null;
  doubt: string | null;
  anchor_text: string | null;
  prompt: string | null;
  options: string | null;
  answer: string | null;
  explanation: string | null;
}

const parseJson = <T>(s: string | null): T | null => {
  if (!s) return null;
  try {
    return JSON.parse(s) as T;
  } catch {
    return null;
  }
};

export async function loadPack(db: TrDb, packId: number): Promise<ReviewPackRow | null> {
  const rows = await db.all<ReviewPackRow>('SELECT * FROM review_packs WHERE id = ?', [packId]);
  return rows[0] ?? null;
}

const contentOf = (r: ItemJoinRow): ReviewContent | null => {
  if (r.kind === 'lesson_line') return r.anchor_text === null ? null : ({ text: r.anchor_text } satisfies LessonLineContent);
  const options = parseJson<string[]>(r.options);
  if (r.prompt === null || r.answer === null || !Array.isArray(options)) return null;
  return { prompt: r.prompt, options, answer: r.answer, explanation: r.explanation ?? '' } satisfies QuestionContent;
};

/** The pack as this reviewer sees it: items in order, each with the reviewer's own saved answer. */
export async function loadReviewerPack(db: TrDb, reviewer: ReviewerRow, pack: ReviewPackRow): Promise<ReviewerPackView> {
  const items = await db.all<ItemJoinRow>(
    `SELECT i.id, i.kind, i.context, i.doubt, i.anchor_text, v.prompt, v.options, v.answer, v.explanation
       FROM review_pack_items i LEFT JOIN question_versions v ON v.id = i.version_id
      WHERE i.pack_id = ? ORDER BY i.sort, i.id`,
    [pack.id],
  );
  const responses = await db.all<ReviewResponseRow>('SELECT * FROM review_responses WHERE reviewer_id = ?', [reviewer.id]);
  const byItem = new Map(responses.map((r) => [r.item_id, r]));
  const views: ReviewerItemView[] = [];
  for (const it of items) {
    const content = contentOf(it);
    if (!content) continue;
    const r = byItem.get(it.id);
    views.push({
      id: it.id,
      kind: it.kind,
      doubt: it.doubt,
      context: parseJson<ReviewItemContext>(it.context),
      content,
      response: r
        ? { verdict: r.verdict, proposal: parseJson<ReviewContent>(r.proposal), confidence: r.confidence, reason: r.reason }
        : null,
    });
  }
  return {
    packTitle: pack.title,
    reviewerName: reviewer.display_name,
    expiresAt: reviewer.expires_at,
    total: views.length,
    answered: views.filter((v) => v.response).length,
    items: views,
  };
}

export type SaveResult = { ok: true; answered: number } | { ok: false; status: 400 | 404; error: string };

/**
 * Saves (or overwrites) this reviewer's answer for one item. The item must belong to the reviewer's pack. A suggested
 * change must be a valid, different version of the content. Other verdicts drop any proposal.
 */
export async function saveResponse(db: TrDb, reviewer: ReviewerRow, input: unknown, now: number): Promise<SaveResult> {
  if (!input || typeof input !== 'object') return { ok: false, status: 400, error: 'bad request' };
  const b = input as Partial<SaveResponseInput> & Record<string, unknown>;
  if (typeof b.itemId !== 'number' || !Number.isInteger(b.itemId)) return { ok: false, status: 400, error: 'itemId is required' };
  if (!REVIEW_VERDICTS.includes(b.verdict as never)) return { ok: false, status: 400, error: 'verdict must be correct, change or unsure' };
  const confidence = b.confidence ?? null;
  if (confidence !== null && !REVIEW_CONFIDENCES.includes(confidence as never)) return { ok: false, status: 400, error: 'confidence must be sure or fairly_sure' };
  if (b.reason !== undefined && b.reason !== null && typeof b.reason !== 'string') return { ok: false, status: 400, error: 'reason must be text' };
  const reason = typeof b.reason === 'string' ? clean(b.reason) : '';
  if (reason.length > LIMITS.reason) return { ok: false, status: 400, error: 'the reason is too long' };

  const rows = await db.all<ItemJoinRow>(
    `SELECT i.id, i.kind, i.context, i.doubt, i.anchor_text, v.prompt, v.options, v.answer, v.explanation
       FROM review_pack_items i LEFT JOIN question_versions v ON v.id = i.version_id
      WHERE i.id = ? AND i.pack_id = ?`,
    [b.itemId, reviewer.pack_id],
  );
  const item = rows[0];
  if (!item) return { ok: false, status: 404, error: 'no such item' };
  const original = contentOf(item);
  if (!original) return { ok: false, status: 404, error: 'no such item' };

  let proposalJson: string | null = null;
  if (b.verdict === 'change') {
    const c = checkProposal(item.kind, b.proposal);
    if (!c.ok) return { ok: false, status: 400, error: c.error };
    if (sameContent(item.kind, original, c.value)) return { ok: false, status: 400, error: 'the suggestion is the same as the original' };
    proposalJson = JSON.stringify(c.value);
  }

  await db.batch([
    {
      sql: 'INSERT OR REPLACE INTO review_responses (reviewer_id, item_id, verdict, proposal, confidence, reason, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
      params: [reviewer.id, item.id, b.verdict as string, proposalJson, confidence, reason || null, now],
    },
    { sql: 'UPDATE reviewers SET last_seen_at = ? WHERE id = ?', params: [now, reviewer.id] },
  ]);
  const n = await db.all<{ n: number }>('SELECT COUNT(*) AS n FROM review_responses WHERE reviewer_id = ?', [reviewer.id]);
  return { ok: true, answered: Number(n[0]?.n ?? 0) };
}

/** The reviewer says they are finished. Can be repeated; the first time is kept. */
export async function markDone(db: TrDb, reviewer: ReviewerRow, now: number): Promise<void> {
  await db.batch([
    { sql: 'UPDATE reviewers SET done_at = COALESCE(done_at, ?), last_seen_at = ? WHERE id = ?', params: [now, now, reviewer.id] },
  ]);
}

export async function touchSeen(db: TrDb, reviewer: ReviewerRow, now: number): Promise<void> {
  await db.batch([{ sql: 'UPDATE reviewers SET last_seen_at = ? WHERE id = ?', params: [now, reviewer.id] }]);
}
