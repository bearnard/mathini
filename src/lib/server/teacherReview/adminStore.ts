// Admin side of ADR 0004 (teacher review by secure link): the data-access layer behind /admin/reviews. Written against AdminDb and the table and
// column names of the ADR's migration 0012, so the same SQL runs on D1 and, in tests, on node:sqlite. Every caller sits behind adminGet/adminWrite.
import type { AdminDb, Param, Statement } from '../admin/db';
import { TOPIC_NAMES } from '../../../components/admin/topicNames.generated';
import { taskGrade } from '../serving/flags';
import { editQuestion, type EditResult } from '../questions/edit';
import { generateReviewerLink } from './reviewerLink';
import {
  parseProposal, summariseAgreement, unanimousProposal,
  type Agreement, type DecisionKind, type ItemKind, type Proposal, type QuestionProposal, type ReviewResponse, type Verdict, type Confidence,
} from '../../shared/teacherReview/types';

export const DAY_MS = 86_400_000;
export const DEFAULT_EXPIRY_DAYS = 14;
export const MAX_ITEMS_PER_PACK = 60;

const json = (v: unknown): string | null => (v == null ? null : JSON.stringify(v));
const parse = <T>(s: unknown, fallback: T): T => { try { return s == null ? fallback : (JSON.parse(String(s)) as T); } catch { return fallback; } };
const clip = (s: unknown, n: number): string => String(s ?? '').replace(/\s+/g, ' ').trim().slice(0, n);

// ---------- Picking questions ----------

export interface CandidateFilters { subject?: string; grade?: number; language?: 'afrikaans' | 'isixhosa' | 'english'; needsCheck?: boolean; ids?: string[]; limit?: number }
export interface Candidate { questionId: string; versionId: number; task: string; grade: number | null; subject: string; topic: string; prompt: string; options: string[]; answer: string; explanation: string }

const LANGUAGE_SUBJECT: Record<NonNullable<CandidateFilters['language']>, RegExp> = { afrikaans: /afrikaans/i, isixhosa: /isixhosa|xhosa/i, english: /english/i };

/** Active multiple-choice questions matching the filters. Subject, grade and language come from the curriculum registry (the task slug), so they are filtered in code. */
export async function findCandidates(db: AdminDb, f: CandidateFilters): Promise<Candidate[]> {
  const limit = Math.min(Math.max(f.limit ?? 100, 1), 300);
  const params: Param[] = [];
  let where = "q.status = 'active' AND q.kind = 'mcq' AND q.current_version_id IS NOT NULL";
  if (f.ids && f.ids.length > 0) {
    const ids = f.ids.filter((x) => /^[0-9a-f]{12}$/.test(x)).slice(0, 200);
    if (ids.length === 0) return [];
    where += ` AND q.id IN (${ids.map(() => '?').join(',')})`;
    params.push(...ids);
  }
  if (f.needsCheck) where += ' AND NOT EXISTS (SELECT 1 FROM review_pack_items i JOIN review_decisions d ON d.item_id = i.id WHERE i.question_id = q.id AND d.decision <> \'ask_again\')';
  const rows = await db.all<{ id: string; task: string; vid: number; prompt: string; options: string; answer: string; explanation: string }>(
    `SELECT q.id, q.task, v.id AS vid, v.prompt, v.options, v.answer, v.explanation FROM questions q JOIN question_versions v ON v.id = q.current_version_id WHERE ${where} ORDER BY q.task, q.id LIMIT 20000`,
    params,
  );
  const out: Candidate[] = [];
  for (const r of rows) {
    const grade = taskGrade(r.task);
    const info = grade == null ? undefined : TOPIC_NAMES[`${grade}|${r.task}`];
    const subject = info?.[1] ?? '';
    if (f.grade != null && grade !== f.grade) continue;
    if (f.subject && !subject.toLowerCase().includes(f.subject.toLowerCase())) continue;
    if (f.language && !LANGUAGE_SUBJECT[f.language].test(subject)) continue;
    out.push({ questionId: r.id, versionId: r.vid, task: r.task, grade, subject, topic: info?.[0] ?? r.task, prompt: r.prompt, options: parse<string[]>(r.options, []), answer: r.answer, explanation: r.explanation ?? '' });
    if (out.length >= limit) break;
  }
  return out;
}

// ---------- Packs ----------

export interface PackItemInput {
  kind: ItemKind;
  questionId?: string;
  file?: string;
  anchorText?: string;
  context?: unknown;
  doubt?: string;
}

export interface PackSummary { id: number; title: string; status: string; createdAt: number; items: number; reviewers: number; answeredItems: number; decided: number }

export async function listPacks(db: AdminDb): Promise<PackSummary[]> {
  const rows = await db.all<Record<string, unknown>>(
    `SELECT p.id, p.title, p.status, p.created_at,
       (SELECT COUNT(*) FROM review_pack_items i WHERE i.pack_id = p.id) AS items,
       (SELECT COUNT(*) FROM reviewers r WHERE r.pack_id = p.id) AS reviewers,
       (SELECT COUNT(DISTINCT s.item_id) FROM review_responses s JOIN review_pack_items i ON i.id = s.item_id WHERE i.pack_id = p.id) AS answered,
       (SELECT COUNT(*) FROM review_decisions d JOIN review_pack_items i ON i.id = d.item_id WHERE i.pack_id = p.id) AS decided
     FROM review_packs p ORDER BY p.id DESC LIMIT 200`,
  );
  return rows.map((r) => ({ id: Number(r.id), title: String(r.title), status: String(r.status), createdAt: Number(r.created_at), items: Number(r.items), reviewers: Number(r.reviewers), answeredItems: Number(r.answered), decided: Number(r.decided) }));
}

export type CreateResult = { ok: true; packId: number; items: number } | { ok: false; error: string };

/** One pack from a title and its items. Question items store the question's CURRENT version id; lesson lines store file + anchor text (+ context). */
export async function createPack(db: AdminDb, input: { title: unknown; items: unknown }, adminEmail: string, now = Date.now()): Promise<CreateResult> {
  const title = clip(input.title, 120);
  if (title.length < 3) return { ok: false, error: 'Give the pack a title (3 to 120 characters)' };
  if (!Array.isArray(input.items) || input.items.length === 0) return { ok: false, error: 'Add at least one item' };
  if (input.items.length > MAX_ITEMS_PER_PACK) return { ok: false, error: `A pack holds at most ${MAX_ITEMS_PER_PACK} items` };
  const rows: { kind: ItemKind; questionId: string | null; versionId: number | null; file: string | null; anchor: string | null; context: string | null; doubt: string }[] = [];
  const seen = new Set<string>();
  for (const raw of input.items as PackItemInput[]) {
    if (!raw || (raw.kind !== 'question' && raw.kind !== 'lesson_line')) return { ok: false, error: 'Each item must be a question or a lesson line' };
    const doubt = clip(raw.doubt, 400);
    if (raw.kind === 'question') {
      const qid = String(raw.questionId ?? '');
      if (!/^[0-9a-f]{12}$/.test(qid)) return { ok: false, error: 'A question item needs a question id' };
      if (seen.has('q' + qid)) return { ok: false, error: 'The same question is in the pack twice' };
      seen.add('q' + qid);
      const cur = (await db.all<{ v: number }>("SELECT current_version_id AS v FROM questions WHERE id = ? AND status = 'active' AND kind = 'mcq' AND current_version_id IS NOT NULL", [qid]))[0];
      if (!cur) return { ok: false, error: `Question ${qid} is not an active multiple-choice question in the database` };
      rows.push({ kind: 'question', questionId: qid, versionId: Number(cur.v), file: null, anchor: null, context: null, doubt });
    } else {
      const file = clip(raw.file, 300);
      const anchor = String(raw.anchorText ?? '').trim();
      if (!file || !/^[\w./-]+$/.test(file) || file.includes('..')) return { ok: false, error: 'A lesson line needs a file path under src/curriculum' };
      if (anchor.length < 6 || anchor.length > 600) return { ok: false, error: 'The lesson line text must be 6 to 600 characters' };
      if (seen.has('l' + file + '\n' + anchor)) return { ok: false, error: 'The same lesson line is in the pack twice' };
      seen.add('l' + file + '\n' + anchor);
      const ctx = raw.context == null ? null : JSON.stringify(raw.context);
      if (ctx && ctx.length > 4000) return { ok: false, error: 'The lesson context is too long' };
      rows.push({ kind: 'lesson_line', questionId: null, versionId: null, file, anchor, context: ctx, doubt });
    }
  }
  await db.batch([{ sql: "INSERT INTO review_packs (title, created_by, created_at, status) VALUES (?, ?, ?, 'open')", params: [title, adminEmail, now] }]);
  const pack = (await db.all<{ id: number }>('SELECT id FROM review_packs WHERE created_at = ? AND created_by = ? AND title = ? ORDER BY id DESC LIMIT 1', [now, adminEmail, title]))[0];
  const packId = Number(pack.id);
  await db.batch(rows.map((r, i): Statement => ({
    sql: 'INSERT INTO review_pack_items (pack_id, kind, question_id, version_id, file, anchor_text, context, doubt, sort) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    params: [packId, r.kind, r.questionId, r.versionId, r.file, r.anchor, r.context, r.doubt, i],
  })));
  return { ok: true, packId, items: rows.length };
}

export async function closePack(db: AdminDb, packId: number, now = Date.now()): Promise<boolean> {
  const has = await db.all('SELECT 1 FROM review_packs WHERE id = ?', [packId]);
  if (has.length === 0) return false;
  await db.batch([{ sql: "UPDATE review_packs SET status = 'closed', closed_at = ? WHERE id = ?", params: [now, packId] }]);
  return true;
}

// ---------- Reviewers ----------

export type InviteResult = { ok: true; reviewerId: number; token: string; expiresAt: number } | { ok: false; status: 400 | 404 | 409; error: string };

/** Makes a link for one reviewer. The token is returned ONCE here and never stored: only its hash is. */
export async function inviteReviewer(db: AdminDb, packId: number, input: { displayName?: unknown; note?: unknown; days?: unknown }, now = Date.now()): Promise<InviteResult> {
  const name = clip(input.displayName, 60);
  if (name.length < 1) return { ok: false, status: 400, error: 'Give the reviewer a display name, for example “Ms N.”' };
  const note = clip(input.note, 200);
  const days = input.days == null ? DEFAULT_EXPIRY_DAYS : Number(input.days);
  if (!Number.isInteger(days) || days < 1 || days > 90) return { ok: false, status: 400, error: 'The link can last 1 to 90 days' };
  const pack = (await db.all<{ status: string }>('SELECT status FROM review_packs WHERE id = ?', [packId]))[0];
  if (!pack) return { ok: false, status: 404, error: 'Pack not found' };
  if (pack.status === 'closed') return { ok: false, status: 409, error: 'This pack is closed' };
  const { token, hash } = await generateReviewerLink();
  const expiresAt = now + days * DAY_MS;
  await db.batch([{ sql: 'INSERT INTO reviewers (pack_id, display_name, contact_note, token_hash, expires_at, created_at) VALUES (?, ?, ?, ?, ?, ?)', params: [packId, name, note || null, hash, expiresAt, now] }]);
  const r = (await db.all<{ id: number }>('SELECT id FROM reviewers WHERE token_hash = ?', [hash]))[0];
  return { ok: true, reviewerId: Number(r.id), token, expiresAt };
}

export async function revokeReviewer(db: AdminDb, packId: number, reviewerId: number, now = Date.now()): Promise<boolean> {
  const r = await db.all('SELECT 1 FROM reviewers WHERE id = ? AND pack_id = ?', [reviewerId, packId]);
  if (r.length === 0) return false;
  await db.batch([{ sql: 'UPDATE reviewers SET revoked_at = COALESCE(revoked_at, ?) WHERE id = ? AND pack_id = ?', params: [now, reviewerId, packId] }]);
  return true;
}

// ---------- Results ----------

export interface ReviewerRow { id: number; label: string; displayName: string; note: string; expiresAt: number; revokedAt: number | null; lastSeenAt: number | null; doneAt: number | null; answered: number }
export interface ResultItem {
  id: number;
  kind: ItemKind;
  doubt: string;
  file: string | null;
  anchorText: string | null;
  context: unknown;
  /** The question as the reviewers saw it (the item's version), and whether it has moved on since. */
  question: (Candidate & { currentVersionId: number }) | null;
  responses: (ReviewResponse & { displayName: string })[];
  agreement: Agreement;
  /** A proposal ready to accept: the unanimous one (the AI merge will fill this in for split opinions). */
  merged: Proposal | null;
  decision: { decision: DecisionKind; decidedBy: string; decidedAt: number; appliedVersionId: number | null; changeQueueId: number | null } | null;
}
export interface PackResults { pack: { id: number; title: string; status: string; createdAt: number }; reviewers: ReviewerRow[]; items: ResultItem[] }

export async function packResults(db: AdminDb, packId: number): Promise<PackResults | null> {
  const p = (await db.all<Record<string, unknown>>('SELECT id, title, status, created_at FROM review_packs WHERE id = ?', [packId]))[0];
  if (!p) return null;
  const rv = await db.all<Record<string, unknown>>(
    `SELECT r.id, r.display_name, r.contact_note, r.expires_at, r.revoked_at, r.last_seen_at, r.done_at,
       (SELECT COUNT(*) FROM review_responses s WHERE s.reviewer_id = r.id) AS answered FROM reviewers r WHERE r.pack_id = ? ORDER BY r.id`, [packId]);
  const reviewers: ReviewerRow[] = rv.map((r, i) => ({ id: Number(r.id), label: `Reviewer ${i + 1}`, displayName: String(r.display_name ?? ''), note: String(r.contact_note ?? ''), expiresAt: Number(r.expires_at), revokedAt: r.revoked_at == null ? null : Number(r.revoked_at), lastSeenAt: r.last_seen_at == null ? null : Number(r.last_seen_at), doneAt: r.done_at == null ? null : Number(r.done_at), answered: Number(r.answered) }));
  const byId = new Map(reviewers.map((r) => [r.id, r]));
  const items = await db.all<Record<string, unknown>>('SELECT id, kind, question_id, version_id, file, anchor_text, context, doubt FROM review_pack_items WHERE pack_id = ? ORDER BY sort, id', [packId]);
  const resp = await db.all<Record<string, unknown>>(
    'SELECT s.reviewer_id, s.item_id, s.verdict, s.proposal, s.confidence, s.reason FROM review_responses s JOIN review_pack_items i ON i.id = s.item_id WHERE i.pack_id = ? ORDER BY s.reviewer_id', [packId]);
  const dec = await db.all<Record<string, unknown>>(
    'SELECT d.item_id, d.decision, d.decided_by, d.decided_at, d.applied_version_id, d.change_queue_id FROM review_decisions d JOIN review_pack_items i ON i.id = d.item_id WHERE i.pack_id = ?', [packId]);

  const out: ResultItem[] = [];
  for (const it of items) {
    const id = Number(it.id);
    const kind = String(it.kind) as ItemKind;
    let question: ResultItem['question'] = null;
    if (kind === 'question' && it.question_id) {
      const v = (await db.all<Record<string, unknown>>(
        `SELECT q.task, q.current_version_id AS cur, v.id AS vid, v.prompt, v.options, v.answer, v.explanation FROM questions q JOIN question_versions v ON v.id = ? WHERE q.id = ?`, [it.version_id as Param, it.question_id as Param]))[0];
      if (v) {
        const grade = taskGrade(String(v.task));
        const info = grade == null ? undefined : TOPIC_NAMES[`${grade}|${String(v.task)}`];
        question = { questionId: String(it.question_id), versionId: Number(v.vid), currentVersionId: Number(v.cur), task: String(v.task), grade, subject: info?.[1] ?? '', topic: info?.[0] ?? String(v.task), prompt: String(v.prompt), options: parse<string[]>(v.options, []), answer: String(v.answer), explanation: String(v.explanation ?? '') };
      }
    }
    const responses = resp.filter((r) => Number(r.item_id) === id).map((r) => {
      const rev = byId.get(Number(r.reviewer_id));
      return { reviewerId: Number(r.reviewer_id), label: rev?.label ?? 'Reviewer', displayName: rev?.displayName ?? '', verdict: String(r.verdict) as Verdict, proposal: parseProposal(kind, parse<unknown>(r.proposal, null)), confidence: (r.confidence ? String(r.confidence) : null) as Confidence | null, reason: String(r.reason ?? '') };
    });
    const live = reviewers.filter((r) => r.revokedAt == null).length;
    const agreement = summariseAgreement(Math.max(live, responses.length), responses);
    const d = dec.find((x) => Number(x.item_id) === id);
    out.push({
      id, kind, doubt: String(it.doubt ?? ''), file: it.file == null ? null : String(it.file), anchorText: it.anchor_text == null ? null : String(it.anchor_text), context: parse<unknown>(it.context, null),
      question, responses, agreement, merged: unanimousProposal(responses),
      decision: d ? { decision: String(d.decision) as DecisionKind, decidedBy: String(d.decided_by), decidedAt: Number(d.decided_at), appliedVersionId: d.applied_version_id == null ? null : Number(d.applied_version_id), changeQueueId: d.change_queue_id == null ? null : Number(d.change_queue_id) } : null,
    });
  }
  return { pack: { id: Number(p.id), title: String(p.title), status: String(p.status), createdAt: Number(p.created_at) }, reviewers, items: out };
}

// ---------- Decisions ----------

export interface DecideInput { decision?: unknown; reviewerId?: unknown; proposal?: unknown; changeKind?: unknown; acknowledgeWarnings?: unknown; note?: unknown }
export type DecideResult =
  | { ok: true; decision: DecisionKind; versionId?: number; changeQueueId?: number; askAgainPackId?: number; warnings?: unknown }
  | { ok: false; status: 400 | 404 | 409 | 422; error: string; findings?: unknown; needsAcknowledgement?: boolean };

const fromEdit = (r: EditResult): DecideResult | null => (r.ok ? null : { ok: false, status: r.status, error: r.error, findings: r.findings, needsAcknowledgement: r.needsAcknowledgement === true });

/**
 * The owner's decision on one item. Question changes go through editQuestion (the same code as POST /api/admin/questions/[id]/edit: validator, new version,
 * audit row); lesson-line changes go into lesson_change_queue as {file, old, new}. Nothing is applied for keep_original or ask_again.
 * The AI merge will supply `proposal` for accept_merged later (see mergeHook.ts); until then accept_merged takes the unanimous proposal.
 */
export async function decideItem(db: AdminDb, packId: number, itemId: number, input: DecideInput, adminEmail: string, now = Date.now()): Promise<DecideResult> {
  const res = await packResults(db, packId);
  const item = res?.items.find((i) => i.id === itemId);
  if (!res || !item) return { ok: false, status: 404, error: 'Item not found' };
  const kind = input.decision as DecisionKind;
  if (!['accept_merged', 'accept_reviewer', 'edit_accept', 'keep_original', 'ask_again'].includes(String(input.decision))) return { ok: false, status: 400, error: 'Unknown decision' };
  if (item.decision && item.decision.decision !== 'ask_again') return { ok: false, status: 409, error: 'This item already has a decision' };

  const outcome = kind === 'keep_original' ? 'verified' : kind === 'ask_again' ? 'unsure' : 'changed';
  const recordOnly = (extra?: { mergedJson?: string | null; versionId?: number | null; queueId?: number | null }): Statement => ({
    sql: 'INSERT OR REPLACE INTO review_decisions (item_id, decision, merged, ai_rationale, ai_disagreements, chosen_reviewer_id, outcome, decided_by, applied_version_id, change_queue_id, decided_at) VALUES (?, ?, ?, NULL, NULL, ?, ?, ?, ?, ?, ?)',
    params: [itemId, kind, extra?.mergedJson ?? null, kind === 'accept_reviewer' ? Number(input.reviewerId) : null, outcome, adminEmail, extra?.versionId ?? null, extra?.queueId ?? null, now],
  });

  if (kind === 'keep_original') { await db.batch([recordOnly()]); return { ok: true, decision: kind }; }

  if (kind === 'ask_again') {
    const title = clip(`Ask again: ${res.pack.title}`, 120);
    let pack = (await db.all<{ id: number }>("SELECT id FROM review_packs WHERE title = ? AND status = 'open' ORDER BY id DESC LIMIT 1", [title]))[0];
    if (!pack) {
      await db.batch([{ sql: "INSERT INTO review_packs (title, created_by, created_at, status) VALUES (?, ?, ?, 'open')", params: [title, adminEmail, now] }]);
      pack = (await db.all<{ id: number }>('SELECT id FROM review_packs WHERE created_at = ? AND created_by = ? AND title = ? ORDER BY id DESC LIMIT 1', [now, adminEmail, title]))[0];
    }
    const n = (await db.all<{ n: number }>('SELECT COALESCE(MAX(sort), -1) + 1 AS n FROM review_pack_items WHERE pack_id = ?', [pack.id]))[0].n;
    const doubt = clip(`${item.doubt} (re-asked: ${item.agreement.label})`, 400);
    await db.batch([
      { sql: 'INSERT INTO review_pack_items (pack_id, kind, question_id, version_id, file, anchor_text, context, doubt, sort) SELECT ?, kind, question_id, version_id, file, anchor_text, context, ?, ? FROM review_pack_items WHERE id = ?', params: [pack.id, doubt, n, itemId] },
      recordOnly(),
    ]);
    return { ok: true, decision: kind, askAgainPackId: Number(pack.id) };
  }

  // Everything else applies a proposal.
  let proposal: Proposal | null = null;
  if (kind === 'accept_merged') proposal = item.merged;
  else if (kind === 'accept_reviewer') {
    const r = item.responses.find((x) => x.reviewerId === Number(input.reviewerId));
    if (!r || r.verdict !== 'change' || !r.proposal) return { ok: false, status: 400, error: 'That reviewer did not suggest a change' };
    proposal = r.proposal;
  } else proposal = parseProposal(item.kind, input.proposal);
  if (!proposal) return { ok: false, status: 400, error: kind === 'accept_merged' ? 'There is no merged proposal to accept yet' : 'Give the new wording' };

  const who = res.reviewers.filter((r) => item.responses.some((x) => x.reviewerId === r.id)).map((r) => r.label).join(', ') || 'no reviewers';
  const note = `Teacher review “${res.pack.title}” (pack ${packId}), ${kind.replace('_', ' ')}; ${who}${clip(input.note, 120) ? `; ${clip(input.note, 120)}` : ''}`;

  if (item.kind === 'lesson_line') {
    const text = (proposal as { text: string }).text.trim();
    if (!item.file || !item.anchorText) return { ok: false, status: 400, error: 'This lesson line has no file or text' };
    if (text === item.anchorText) return { ok: false, status: 400, error: 'Nothing has changed' };
    await db.batch([
      { sql: "INSERT INTO lesson_change_queue (file, old_text, new_text, item_id, status, created_at) VALUES (?, ?, ?, ?, 'pending', ?)", params: [item.file, item.anchorText, text, itemId, now] },
    ]);
    const q = (await db.all<{ id: number }>('SELECT id FROM lesson_change_queue WHERE item_id = ? ORDER BY id DESC LIMIT 1', [itemId]))[0];
    await db.batch([recordOnly({ mergedJson: json(proposal), queueId: Number(q.id) })]);
    return { ok: true, decision: kind, changeQueueId: Number(q.id) };
  }

  if (!item.question) return { ok: false, status: 404, error: 'The question is no longer in the database' };
  if (item.question.currentVersionId !== item.question.versionId) return { ok: false, status: 409, error: 'This question was edited after the pack was made, so the reviewers saw an older wording. Keep the original or ask again.' };
  const qp = proposal as QuestionProposal;
  const changeKind = input.changeKind === 'meaning' ? 'meaning' : 'wording';
  const edit = await editQuestion(db, item.question.questionId, {
    expectedVersionId: item.question.currentVersionId, prompt: qp.prompt, options: qp.options, answer: qp.answer, explanation: qp.explanation,
    sourceNote: clip(note, 200), changeKind, acknowledgeWarnings: input.acknowledgeWarnings === true,
  }, adminEmail, now);
  const failed = fromEdit(edit);
  if (failed) return failed;
  const ok = edit as Extract<EditResult, { ok: true }>;
  await db.batch([recordOnly({ mergedJson: json(proposal), versionId: ok.versionId })]);
  return { ok: true, decision: kind, versionId: ok.versionId, warnings: ok.warnings };
}
