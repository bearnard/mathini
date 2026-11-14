// Admin moderation of reported questions (ADR 0003 section 4). Server only; every caller sits behind requireAdmin.
// Written against AdminDb so the same SQL is unit-tested on node:sqlite.
//
// Queue: open reports grouped by question, ranked by distinct reporters, then reach (attempts), then newest.
// Actions: dismiss (close the reports with a reason), retire (stop SERVING the question), reinstate (undo a retire).
// A retired AI-pool question also gets item_cache.quality_score = 0 (poolStore never serves score 0); the score it had is kept
// in question_moderation.detail so reinstate restores it. Curated questions are filtered client-side from the retired list.
import type { AdminDb, Param, Statement } from '../admin/db';
import { REPORT_REASONS, type ReportReason } from '../../shared/questionReport';
import { promptKey } from '../../shared/retiredKey';

const num = (v: unknown): number => (typeof v === 'number' ? v : Number(v) || 0);
export const MAX_QUEUE_GROUPS = 50;
export const MAX_NOTES_PER_QUESTION = 20;
export const MAX_REASON_LENGTH = 300;

export interface QueueVersion {
  versionId: number;
  versionNo: number;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  source: string;
}

export interface QueueItem {
  questionId: string;
  task: string;
  registered: boolean;
  status: 'active' | 'retired' | 'unregistered';
  reporters: number;
  reports: number;
  reasons: Record<ReportReason, number>;
  notes: { reason: ReportReason; note: string; at: number }[];
  latestAt: number;
  /** The question's current version; null when the question is not registered in D1. */
  current: QueueVersion | null;
  /** Unregistered only: what the learner's browser said it was looking at. Unverified. */
  promptSnapshot: string | null;
  stats: { answers: number; correct: number; pctCorrect: number | null };
}

function parseOptions(s: unknown): string[] {
  try { const v = JSON.parse(String(s)); return Array.isArray(v) ? v.map(String) : []; } catch { return []; }
}

export async function reportQueue(db: AdminDb): Promise<QueueItem[]> {
  const groups = await db.all<{ question_id: string; task: string; reports: number; reporters: number; latest: number }>(
    `SELECT question_id, MIN(task) AS task, COUNT(*) AS reports, COUNT(DISTINCT student_id) AS reporters, MAX(created_at) AS latest
     FROM question_reports WHERE status = 'open' GROUP BY question_id
     ORDER BY reporters DESC, latest DESC LIMIT ?`,
    [MAX_QUEUE_GROUPS],
  );
  if (groups.length === 0) return [];
  const ids = groups.map((g) => g.question_id);
  const ph = ids.map(() => '?').join(',');

  const [reasonRows, noteRows, qRows, statRows, snapRows] = await Promise.all([
    db.all<{ question_id: string; reason: string; n: number }>(`SELECT question_id, reason, COUNT(*) AS n FROM question_reports WHERE status = 'open' AND question_id IN (${ph}) GROUP BY question_id, reason`, ids),
    db.all<{ question_id: string; reason: string; note: string; created_at: number }>(`SELECT question_id, reason, note, created_at FROM question_reports WHERE status = 'open' AND note IS NOT NULL AND question_id IN (${ph}) ORDER BY created_at DESC`, ids),
    db.all<Record<string, unknown>>(
      `SELECT q.id, q.status, v.id AS vid, v.version_no, v.prompt, v.options, v.answer, v.explanation, v.author, v.source_note
       FROM questions q LEFT JOIN question_versions v ON v.id = q.current_version_id WHERE q.id IN (${ph})`, ids),
    db.all<{ qkey: string; answers: number; correct: number }>(`SELECT qkey, COUNT(*) AS answers, SUM(is_correct) AS correct FROM attempts WHERE qkey IN (${ph}) GROUP BY qkey`, ids),
    db.all<{ question_id: string; prompt_snapshot: string }>(`SELECT question_id, prompt_snapshot FROM question_reports WHERE status = 'open' AND prompt_snapshot IS NOT NULL AND question_id IN (${ph}) ORDER BY created_at DESC`, ids),
  ]);

  const reasons = new Map<string, Record<ReportReason, number>>();
  for (const r of reasonRows) {
    const m = reasons.get(r.question_id) ?? (Object.fromEntries(REPORT_REASONS.map((x) => [x, 0])) as Record<ReportReason, number>);
    if ((REPORT_REASONS as readonly string[]).includes(r.reason)) m[r.reason as ReportReason] = num(r.n);
    reasons.set(r.question_id, m);
  }
  const notes = new Map<string, QueueItem['notes']>();
  for (const r of noteRows) {
    const l = notes.get(r.question_id) ?? [];
    if (l.length < MAX_NOTES_PER_QUESTION) l.push({ reason: r.reason as ReportReason, note: String(r.note), at: num(r.created_at) });
    notes.set(r.question_id, l);
  }
  const qs = new Map(qRows.map((r) => [String(r.id), r]));
  const stats = new Map(statRows.map((r) => [r.qkey, r]));
  const snaps = new Map<string, string>();
  for (const r of snapRows) if (!snaps.has(r.question_id)) snaps.set(r.question_id, r.prompt_snapshot);

  const items: QueueItem[] = groups.map((g) => {
    const q = qs.get(g.question_id);
    const st = stats.get(g.question_id);
    const answers = num(st?.answers);
    const correct = num(st?.correct);
    return {
      questionId: g.question_id, task: g.task, registered: !!q,
      status: q ? (q.status === 'retired' ? 'retired' : 'active') : 'unregistered',
      reporters: num(g.reporters), reports: num(g.reports),
      reasons: reasons.get(g.question_id) ?? (Object.fromEntries(REPORT_REASONS.map((x) => [x, 0])) as Record<ReportReason, number>),
      notes: notes.get(g.question_id) ?? [], latestAt: num(g.latest),
      current: q && q.vid != null ? { versionId: num(q.vid), versionNo: num(q.version_no), prompt: String(q.prompt), options: parseOptions(q.options), answer: String(q.answer), explanation: String(q.explanation ?? ''), source: String(q.author ?? '') } : null,
      promptSnapshot: q ? null : snaps.get(g.question_id) ?? null,
      stats: { answers, correct, pctCorrect: answers > 0 ? Math.round((correct / answers) * 100) : null },
    };
  });
  return items.sort((a, b) => b.reporters - a.reporters || b.stats.answers - a.stats.answers || b.latestAt - a.latestAt);
}

export type ModerationResult = { ok: true } | { ok: false; status: 400 | 404 | 409; error: string };

function cleanReason(reason: unknown): string | null {
  if (typeof reason !== 'string') return null;
  const r = reason.replace(/\s+/g, ' ').trim();
  return r.length >= 3 && r.length <= MAX_REASON_LENGTH ? r : null;
}
const QID = /^[0-9a-f]{12}$/;

const audit = (questionId: string, action: string, reason: string, email: string, versionId: number | null, detail: unknown, now: number): Statement => ({
  sql: 'INSERT INTO question_moderation (question_id, action, reason, admin_email, version_id, detail, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
  params: [questionId, action, reason, email, versionId, detail == null ? null : JSON.stringify(detail), now],
});

/** Close every open report on the question with a reason. Works for unregistered questions too. */
export async function dismissQuestion(db: AdminDb, questionId: string, reason: unknown, adminEmail: string, now = Date.now()): Promise<ModerationResult> {
  const why = cleanReason(reason);
  if (!QID.test(questionId)) return { ok: false, status: 404, error: 'Not found' };
  if (!why) return { ok: false, status: 400, error: 'Give a reason (3-300 characters)' };
  const open = await db.all<{ n: number }>(`SELECT COUNT(*) AS n FROM question_reports WHERE question_id = ? AND status = 'open'`, [questionId]);
  if (num(open[0]?.n) === 0) return { ok: false, status: 404, error: 'No open reports for this question' };
  const cur = await db.all<{ c: number | null }>('SELECT current_version_id AS c FROM questions WHERE id = ?', [questionId]);
  await db.batch([
    { sql: `UPDATE question_reports SET status = 'dismissed', resolved_at = ? WHERE question_id = ? AND status = 'open'`, params: [now, questionId] },
    audit(questionId, 'dismiss', why, adminEmail, cur[0]?.c ?? null, null, now),
  ]);
  return { ok: true };
}

interface QRow { status: string; legacy_item_id: number | null; current_version_id: number | null }

/** Stop serving the question. Pool rows get quality_score 0 (the previous score and flags are kept to undo it). */
export async function retireQuestion(db: AdminDb, questionId: string, reason: unknown, adminEmail: string, now = Date.now()): Promise<ModerationResult> {
  const why = cleanReason(reason);
  if (!QID.test(questionId)) return { ok: false, status: 404, error: 'Not found' };
  if (!why) return { ok: false, status: 400, error: 'Give a reason (3-300 characters)' };
  const q = (await db.all<QRow>('SELECT status, legacy_item_id, current_version_id FROM questions WHERE id = ?', [questionId]))[0];
  if (!q) return { ok: false, status: 404, error: 'This question is not registered, so it cannot be retired from here' };
  if (q.status === 'retired') return { ok: false, status: 409, error: 'Already retired' };

  const statements: Statement[] = [
    { sql: `UPDATE questions SET status = 'retired', retired_at = ? WHERE id = ? AND status = 'active'`, params: [now, questionId] },
  ];
  let detail: Record<string, unknown> | null = null;
  if (q.legacy_item_id != null) {
    const row = (await db.all<{ quality_score: number | null; quality_flags: string | null }>('SELECT quality_score, quality_flags FROM item_cache WHERE id = ?', [q.legacy_item_id]))[0];
    if (row) {
      let flags: unknown[] = [];
      try { const f = JSON.parse(row.quality_flags ?? '[]'); if (Array.isArray(f)) flags = f; } catch { /* keep [] */ }
      detail = { itemId: q.legacy_item_id, prevScore: row.quality_score, prevFlags: row.quality_flags };
      statements.push({ sql: 'UPDATE item_cache SET quality_score = 0, quality_flags = ? WHERE id = ?', params: [JSON.stringify(['retired', ...flags.filter((x) => x !== 'retired')]), q.legacy_item_id] });
    }
  }
  statements.push(
    { sql: `UPDATE question_reports SET status = 'actioned', resolved_at = ? WHERE question_id = ? AND status = 'open'`, params: [now, questionId] },
    audit(questionId, 'retire', why, adminEmail, q.current_version_id, detail, now),
  );
  await db.batch(statements);
  return { ok: true };
}

/** Undo a retire: active again, and the pool row gets back the score and flags it had before. */
export async function reinstateQuestion(db: AdminDb, questionId: string, reason: unknown, adminEmail: string, now = Date.now()): Promise<ModerationResult> {
  const why = cleanReason(reason);
  if (!QID.test(questionId)) return { ok: false, status: 404, error: 'Not found' };
  if (!why) return { ok: false, status: 400, error: 'Give a reason (3-300 characters)' };
  const q = (await db.all<QRow>('SELECT status, legacy_item_id, current_version_id FROM questions WHERE id = ?', [questionId]))[0];
  if (!q) return { ok: false, status: 404, error: 'Not found' };
  if (q.status !== 'retired') return { ok: false, status: 409, error: 'Not retired' };

  const statements: Statement[] = [{ sql: `UPDATE questions SET status = 'active', retired_at = NULL WHERE id = ? AND status = 'retired'`, params: [questionId] }];
  if (q.legacy_item_id != null) {
    const last = (await db.all<{ detail: string | null }>(`SELECT detail FROM question_moderation WHERE question_id = ? AND action = 'retire' ORDER BY id DESC LIMIT 1`, [questionId]))[0];
    let prev: { prevScore?: number | null; prevFlags?: string | null } | null = null;
    try { prev = last?.detail ? JSON.parse(last.detail) : null; } catch { /* no restore info */ }
    // With no record, fall back to "not scored" (NULL: served exactly as before the validator existed) rather than leaving it at 0.
    const params: Param[] = [prev?.prevScore ?? null, prev?.prevFlags ?? null, q.legacy_item_id];
    statements.push({ sql: 'UPDATE item_cache SET quality_score = ?, quality_flags = ? WHERE id = ?', params });
  }
  statements.push(audit(questionId, 'reinstate', why, adminEmail, q.current_version_id, null, now));
  await db.batch(statements);
  return { ok: true };
}

/**
 * What the browser hides: the key of the wording of EVERY version of each retired question (so an edited question stays hidden
 * under both its old and its new text). Content-free: hashes only.
 */
export async function retiredPromptKeys(db: AdminDb): Promise<string[]> {
  const rows = await db.all<{ prompt: string }>(
    `SELECT v.prompt FROM question_versions v JOIN questions q ON q.id = v.question_id WHERE q.status = 'retired'`,
  );
  return [...new Set(rows.map((r) => promptKey(r.prompt)))].sort();
}

export interface RecentAction {
  questionId: string;
  action: 'dismiss' | 'retire' | 'reinstate';
  reason: string;
  by: string;
  at: number;
  /** Retire rows only: the question is still retired, so it can be reinstated from the page. */
  canReinstate: boolean;
  prompt: string | null;
}

/** The last admin decisions, newest first. */
export async function recentActions(db: AdminDb, limit = 20): Promise<RecentAction[]> {
  const rows = await db.all<{ question_id: string; action: string; reason: string; admin_email: string; created_at: number; status: string | null; prompt: string | null }>(
    `SELECT m.question_id, m.action, m.reason, m.admin_email, m.created_at, q.status,
            (SELECT v.prompt FROM question_versions v WHERE v.id = q.current_version_id) AS prompt
     FROM question_moderation m LEFT JOIN questions q ON q.id = m.question_id
     ORDER BY m.id DESC LIMIT ?`,
    [limit],
  );
  const seenRetire = new Set<string>();
  return rows.map((r) => {
    const canReinstate = r.action === 'retire' && r.status === 'retired' && !seenRetire.has(r.question_id);
    if (r.action === 'retire') seenRetire.add(r.question_id);
    return { questionId: r.question_id, action: r.action as RecentAction['action'], reason: r.reason, by: r.admin_email, at: num(r.created_at), canReinstate, prompt: r.prompt };
  });
}
