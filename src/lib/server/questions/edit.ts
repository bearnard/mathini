// Admin edit of a question's wording (docs/notes/d1-serving-plan.md section 4.5). Server only; every caller sits behind adminWrite.
// Written against AdminDb so the same SQL is unit-tested on node:sqlite.
//
// ONE batch writes the new version, the pointer move, (for a change of meaning) the review reset, the audit row, and closes the open reports
// and flags. Every statement after the version insert is guarded by "my version is now the current one", so a concurrent edit makes the whole
// batch a no-op and the caller gets 'stale' instead of a half-applied edit. Version ids only grow, so "id > expected" identifies the new one.
import type { AdminDb, Param, Statement } from '../admin/db';
import { TOPIC_NAMES } from '../../../components/admin/topicNames.generated';
import { makeQkey } from '../../shared/qkey';
import { checkQuestion, type QualityContext, type Reason } from '../../shared/questionQuality';
import { isMeaningChange, parseEditInput, parseRestoreInput, sameContent, cleanNote, type QuestionContent } from '../../shared/questionEdit';
import { taskGrade } from '../serving/flags';

const QID = /^[0-9a-f]{12}$/;
const TOMORROW_SAST = "CAST((strftime('%s', 'now') + 7200) / 86400 AS INTEGER) + 1";

export type EditResult =
  | { ok: true; versionId: number; versionNo: number; reviewsReset: number; warnings: Reason[] }
  | { ok: false; status: 400 | 404 | 409 | 422; error: string; findings?: Reason[]; needsAcknowledgement?: boolean };

interface QRow {
  id: string;
  task: string;
  kind: string;
  status: string;
  source: string;
  current_version_id: number | null;
  legacy_item_id: number | null;
}
interface VRow extends QuestionContent {
  id: number;
  version_no: number;
  options_json: string;
  extra: string;
  author: string;
  source_note: string | null;
  created_at: number;
  status: string;
}

const parseOptions = (s: unknown): string[] => {
  try { const v = JSON.parse(String(s)); return Array.isArray(v) ? v.map(String) : []; } catch { return []; }
};

/** Decimal-comma policy of a task: Grade 6 maths rejects a decimal point, other maths-type tasks warn (caps/formatPolicy.ts). */
export function decimalPolicyForTask(task: string): QualityContext['decimalComma'] {
  const g = taskGrade(task);
  if (g === 6) return task.startsWith('gr6-') ? 'reject' : undefined;
  if (g === null) return undefined;
  const subject = TOPIC_NAMES[`${g}|${task}`]?.[1] ?? '';
  return subject === 'Mathematics' || subject === 'Mathematical Literacy' ? 'warn' : undefined;
}

async function loadQuestion(db: AdminDb, id: string): Promise<{ q: QRow; cur: VRow } | null> {
  const q = (await db.all<QRow>('SELECT id, task, kind, status, source, current_version_id, legacy_item_id FROM questions WHERE id = ?', [id]))[0];
  if (!q || q.current_version_id == null) return null;
  const cur = await versionRow(db, q.current_version_id, id);
  return cur ? { q, cur } : null;
}

async function versionRow(db: AdminDb, versionId: number, questionId: string): Promise<VRow | null> {
  const r = (await db.all<Record<string, unknown>>('SELECT id, version_no, prompt, options, answer, explanation, extra, author, source_note, created_at, status FROM question_versions WHERE id = ? AND question_id = ?', [versionId, questionId]))[0];
  if (!r) return null;
  return {
    id: Number(r.id), version_no: Number(r.version_no), prompt: String(r.prompt), options: parseOptions(r.options), options_json: String(r.options), answer: String(r.answer),
    explanation: String(r.explanation ?? ''), extra: String(r.extra ?? '{}'), author: String(r.author), source_note: r.source_note == null ? null : String(r.source_note),
    created_at: Number(r.created_at), status: String(r.status),
  };
}

function plainMcq(q: QRow, cur: VRow): string | null {
  if (q.kind !== 'mcq') return 'Only multiple-choice questions can be edited here. Order, label and explain questions stay in the code.';
  try { if ((JSON.parse(cur.extra || '{}') as { diagram?: boolean }).diagram) return 'This question has a diagram, so it stays in the code.'; } catch { /* no extra */ }
  return null;
}

const findings = (reasons: Reason[]) => reasons.map((r) => ({ code: r.code, severity: r.severity, detail: r.detail }));

interface Apply {
  questionId: string;
  task: string;
  source: string;
  expectedVersionId: number;
  next: QuestionContent;
  extra: string;
  sourceNote: string;
  changeKind: 'wording' | 'meaning' | 'restore';
  reason: string;
  resetReviews: boolean;
  findings: Reason[];
  adminEmail: string;
  now: number;
}

/** The one atomic batch. Returns null on success, or 'stale' when the question moved on (nothing was written). */
async function apply(db: AdminDb, a: Apply): Promise<EditResult> {
  const Q = a.questionId;
  const qk = makeQkey(a.task, a.next.prompt);
  const clash = await db.all<{ x: number }>('SELECT 1 AS x FROM questions WHERE id = ? AND id <> ? UNION SELECT 1 FROM question_versions WHERE qkey = ? AND question_id <> ? LIMIT 1', [qk, Q, qk, Q]);
  if (clash.length > 0) return { ok: false, status: 409, error: 'That wording is already used by another question in this topic' };

  const ours = `EXISTS (SELECT 1 FROM questions q JOIN question_versions v ON v.id = q.current_version_id WHERE q.id = ? AND v.author = 'owner' AND v.created_at = ? AND v.id > ?)`;
  const oursP: Param[] = [Q, a.now, a.expectedVersionId];
  const statements: Statement[] = [
    {
      sql: `INSERT INTO question_versions (question_id, version_no, qkey, prompt, options, answer, explanation, extra, source_note, author, status, created_at)
            SELECT ?, (SELECT COALESCE(MAX(version_no), 0) + 1 FROM question_versions WHERE question_id = ?), ?, ?, ?, ?, ?, ?, ?, 'owner', 'approved', ?
            WHERE EXISTS (SELECT 1 FROM questions WHERE id = ? AND status = 'active' AND current_version_id = ?)`,
      params: [Q, Q, qk, a.next.prompt, JSON.stringify(a.next.options), a.next.answer, a.next.explanation, a.extra, a.sourceNote, a.now, Q, a.expectedVersionId],
    },
    {
      // An AI-pool question a human has approved is a curated one from now on: the AI-only quality filter in serving no longer applies to it.
      sql: `UPDATE questions SET current_version_id = (SELECT id FROM question_versions WHERE question_id = ? AND id > ? AND author = 'owner' AND created_at = ? ORDER BY id DESC LIMIT 1)${a.source === 'ai' ? ", source = 'curated'" : ''}
            WHERE id = ? AND status = 'active' AND current_version_id = ? AND EXISTS (SELECT 1 FROM question_versions WHERE question_id = ? AND id > ? AND author = 'owner' AND created_at = ?)`,
      params: [Q, a.expectedVersionId, a.now, Q, a.expectedVersionId, Q, a.expectedVersionId, a.now],
    },
  ];
  if (a.resetReviews) {
    statements.push({
      sql: `UPDATE review_items SET box = 1, due_day = ${TOMORROW_SAST}, streak_correct = 0, updated_at = ? WHERE qkey = ? AND retired_at IS NULL AND ${ours}`,
      params: [a.now, Q, ...oursP],
    });
  }
  statements.push(
    {
      sql: `INSERT INTO question_edits (question_id, from_version_id, to_version_id, change_kind, reason, admin_email, findings, reviews_reset, created_at)
            SELECT ?, ?, current_version_id, ?, ?, ?, ?, ${a.resetReviews ? '(SELECT changes())' : '0'}, ? FROM questions WHERE id = ? AND ${ours}`,
      params: [Q, a.expectedVersionId, a.changeKind, a.reason, a.adminEmail, a.findings.length ? JSON.stringify(findings(a.findings)) : null, a.now, Q, ...oursP],
    },
    { sql: `UPDATE question_reports SET status = 'actioned', resolved_at = ? WHERE question_id = ? AND status = 'open' AND ${ours}`, params: [a.now, Q, ...oursP] },
    { sql: `UPDATE question_flags SET status = 'resolved' WHERE question_id = ? AND status = 'open' AND ${ours}`, params: [Q, ...oursP] },
  );
  await db.batch(statements);

  const done = (await db.all<{ vid: number; no: number }>(
    `SELECT v.id AS vid, v.version_no AS no FROM questions q JOIN question_versions v ON v.id = q.current_version_id WHERE q.id = ? AND v.author = 'owner' AND v.created_at = ? AND v.id > ?`,
    [Q, a.now, a.expectedVersionId],
  ))[0];
  if (!done) return { ok: false, status: 409, error: 'Someone else changed this question first. Reload it and try again.' };
  const audit = (await db.all<{ n: number }>('SELECT reviews_reset AS n FROM question_edits WHERE to_version_id = ?', [done.vid]))[0];
  return { ok: true, versionId: Number(done.vid), versionNo: Number(done.no), reviewsReset: Number(audit?.n ?? 0), warnings: a.findings.filter((f) => f.severity === 'warn') };
}

export async function editQuestion(db: AdminDb, questionId: string, raw: unknown, adminEmail: string, now = Date.now()): Promise<EditResult> {
  if (!QID.test(questionId)) return { ok: false, status: 404, error: 'Not found' };
  const parsed = parseEditInput(raw);
  if (!parsed.ok) return { ok: false, status: 400, error: parsed.error };
  const input = parsed.value;
  const loaded = await loadQuestion(db, questionId);
  if (!loaded) return { ok: false, status: 404, error: 'This question is not in the database, so it cannot be edited here' };
  const { q, cur } = loaded;
  if (q.status === 'retired') return { ok: false, status: 409, error: 'This question is retired. Reinstate it first.' };
  const notEditable = plainMcq(q, cur);
  if (notEditable) return { ok: false, status: 400, error: notEditable };
  if (q.current_version_id !== input.expectedVersionId) return { ok: false, status: 409, error: 'Someone else changed this question first. Reload it and try again.' };
  const next: QuestionContent = { prompt: input.prompt, options: input.options, answer: input.answer, explanation: input.explanation };
  if (sameContent(cur, next)) return { ok: false, status: 400, error: 'Nothing has changed' };

  const others = (await db.all<{ prompt: string }>(
    `SELECT v.prompt FROM questions q2 JOIN question_versions v ON v.id = q2.current_version_id WHERE q2.task = ? AND q2.id <> ? AND q2.status = 'active' LIMIT 500`,
    [q.task, questionId],
  )).map((r) => r.prompt);
  const result = checkQuestion(next, { existingPrompts: others, decimalComma: decimalPolicyForTask(q.task) });
  const rejects = result.reasons.filter((r) => r.severity === 'reject');
  if (rejects.length > 0) return { ok: false, status: 422, error: 'The quality checker rejects this wording', findings: result.reasons };
  const warns = result.reasons.filter((r) => r.severity === 'warn');
  if (warns.length > 0 && !input.acknowledgeWarnings) return { ok: false, status: 409, error: 'The quality checker has warnings. Fix them or tick the box to save anyway.', findings: result.reasons, needsAcknowledgement: true };

  // The `meaning` choice is the editor's; it is also forced when the answer or the options really changed, so a key fix can never keep stale review boxes.
  const meaning = input.changeKind === 'meaning' || isMeaningChange(cur, next);
  return apply(db, {
    questionId, task: q.task, source: q.source, expectedVersionId: input.expectedVersionId, next, extra: cur.extra, sourceNote: input.sourceNote,
    changeKind: meaning ? 'meaning' : 'wording', reason: input.sourceNote, resetReviews: meaning, findings: result.reasons, adminEmail, now,
  });
}

/** Undo: writes a NEW version that copies an older one (history stays linear, nothing is deleted). */
export async function restoreVersion(db: AdminDb, questionId: string, raw: unknown, adminEmail: string, now = Date.now()): Promise<EditResult> {
  if (!QID.test(questionId)) return { ok: false, status: 404, error: 'Not found' };
  const parsed = parseRestoreInput(raw);
  if (!parsed.ok) return { ok: false, status: 400, error: parsed.error };
  const input = parsed.value;
  const loaded = await loadQuestion(db, questionId);
  if (!loaded) return { ok: false, status: 404, error: 'Not found' };
  const { q, cur } = loaded;
  if (q.status === 'retired') return { ok: false, status: 409, error: 'This question is retired. Reinstate it first.' };
  const notEditable = plainMcq(q, cur);
  if (notEditable) return { ok: false, status: 400, error: notEditable };
  if (q.current_version_id !== input.expectedVersionId) return { ok: false, status: 409, error: 'Someone else changed this question first. Reload it and try again.' };
  const old = await versionRow(db, input.versionId, questionId);
  if (!old) return { ok: false, status: 404, error: 'That version does not belong to this question' };
  const next: QuestionContent = { prompt: old.prompt, options: old.options, answer: old.answer, explanation: old.explanation };
  if (sameContent(cur, next)) return { ok: false, status: 400, error: 'That is already the current wording' };
  // Undo must stay possible, so the checker's findings are recorded, not enforced.
  const result = checkQuestion(next, { decimalComma: decimalPolicyForTask(q.task) });
  const note = cleanNote(`restore of v${old.version_no}: ${input.reason}`) ?? `restore of v${old.version_no}`;
  return apply(db, {
    questionId, task: q.task, source: q.source, expectedVersionId: input.expectedVersionId, next, extra: old.extra, sourceNote: note,
    changeKind: 'restore', reason: input.reason, resetReviews: isMeaningChange(cur, next), findings: result.reasons, adminEmail, now,
  });
}

export interface VersionView extends QuestionContent { id: number; versionNo: number; author: string; note: string | null; at: number; current: boolean }
export interface EditView { at: number; kind: string; by: string; reason: string; fromVersionId: number | null; toVersionId: number; reviewsReset: number }
export interface QuestionDetail {
  questionId: string;
  task: string;
  status: string;
  source: string;
  kind: string;
  editable: boolean;
  notEditableReason: string | null;
  current: VersionView;
  versions: VersionView[];
  edits: EditView[];
}

/** Everything the edit form needs: the current wording, the history (for restore) and the audit trail. */
export async function questionDetail(db: AdminDb, questionId: string): Promise<QuestionDetail | null> {
  if (!QID.test(questionId)) return null;
  const loaded = await loadQuestion(db, questionId);
  if (!loaded) return null;
  const { q, cur } = loaded;
  const rows = await db.all<Record<string, unknown>>('SELECT id, version_no, prompt, options, answer, explanation, author, source_note, created_at FROM question_versions WHERE question_id = ? ORDER BY version_no DESC LIMIT 30', [questionId]);
  const view = (r: Record<string, unknown>): VersionView => ({ id: Number(r.id), versionNo: Number(r.version_no), prompt: String(r.prompt), options: parseOptions(r.options), answer: String(r.answer), explanation: String(r.explanation ?? ''), author: String(r.author), note: r.source_note == null ? null : String(r.source_note), at: Number(r.created_at), current: Number(r.id) === q.current_version_id });
  const edits = await db.all<Record<string, unknown>>('SELECT created_at, change_kind, admin_email, reason, from_version_id, to_version_id, reviews_reset FROM question_edits WHERE question_id = ? ORDER BY id DESC LIMIT 20', [questionId]);
  const why = q.status === 'retired' ? 'This question is retired. Reinstate it first.' : plainMcq(q, cur);
  return {
    questionId, task: q.task, status: q.status, source: q.source, kind: q.kind, editable: why === null, notEditableReason: why,
    current: view({ id: cur.id, version_no: cur.version_no, prompt: cur.prompt, options: cur.options_json, answer: cur.answer, explanation: cur.explanation, author: cur.author, source_note: cur.source_note, created_at: cur.created_at }),
    versions: rows.map(view),
    edits: edits.map((e) => ({ at: Number(e.created_at), kind: String(e.change_kind), by: String(e.admin_email), reason: String(e.reason), fromVersionId: e.from_version_id == null ? null : Number(e.from_version_id), toVersionId: Number(e.to_version_id), reviewsReset: Number(e.reviews_reset) })),
  };
}
