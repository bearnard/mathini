// Learner "Report a problem" (ADR 0003 section 4). Server only.
//   - signed-in learners only (the route checks the session); only student_id is stored, never a name
//   - note <= 200 chars (a child's text: admin-only, removed with the learner)
//   - D1-based rate limit so it holds across Worker isolates
//   - the question is identified exactly like an attempt (canonical id + the version shown); an unregistered question is
//     keyed by its qkey and keeps a short prompt snapshot so an admin can see what was reported
import { isQkey } from '../../shared/qkey';
import { isReportReason, REPORT_NOTE_MAX, REPORT_SNAPSHOT_MAX, type ReportReason } from '../../shared/questionReport';
import { identifyAttempt } from './store';

export const REPORT_LIMIT_PER_HOUR = 10;
export const REPORT_LIMIT_PER_DAY = 30;

export interface ReportInput {
  task: string;
  reason: ReportReason;
  note: string | null;
  qkey: string | null;
  itemId: number | null;
  promptSnapshot: string | null;
}

export type ParseResult = { ok: true; value: ReportInput } | { ok: false; error: string };

/** Strict parse of the request body. Control characters are removed; limits are enforced, not just checked. */
export function parseReportBody(body: unknown): ParseResult {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Invalid request' };
  const b = body as Record<string, unknown>;
  if (typeof b.task !== 'string' || !/^[a-z0-9][a-z0-9-]{0,80}$/i.test(b.task)) return { ok: false, error: 'Invalid task' };
  if (!isReportReason(b.reason)) return { ok: false, error: 'Invalid reason' };
  const clean = (s: string) => s.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').replace(/\s+/g, ' ').trim();
  let note: string | null = null;
  if (b.note !== undefined && b.note !== null) {
    if (typeof b.note !== 'string') return { ok: false, error: 'Invalid note' };
    const n = clean(b.note);
    if (n.length > REPORT_NOTE_MAX) return { ok: false, error: `The note can be at most ${REPORT_NOTE_MAX} characters` };
    note = n || null;
  }
  const qkey = isQkey(b.qkey) ? b.qkey : null;
  const itemId = Number.isInteger(b.itemId) && (b.itemId as number) > 0 ? (b.itemId as number) : null;
  if (!qkey && !itemId) return { ok: false, error: 'Missing question' };
  let promptSnapshot: string | null = null;
  if (typeof b.prompt === 'string') promptSnapshot = clean(b.prompt).slice(0, REPORT_SNAPSHOT_MAX) || null;
  return { ok: true, value: { task: b.task, reason: b.reason, note, qkey, itemId, promptSnapshot } };
}

export type SubmitResult = { ok: true } | { ok: false; status: 400 | 429; error: string };

export async function submitReport(db: D1Database, studentId: string, input: ReportInput, now: number): Promise<SubmitResult> {
  const counts = await db
    .prepare('SELECT SUM(created_at > ?) AS hour, COUNT(*) AS day FROM question_reports WHERE student_id = ? AND created_at > ?')
    .bind(now - 3_600_000, studentId, now - 86_400_000)
    .first<{ hour: number | null; day: number }>();
  if ((counts?.hour ?? 0) >= REPORT_LIMIT_PER_HOUR || (counts?.day ?? 0) >= REPORT_LIMIT_PER_DAY) {
    return { ok: false, status: 429, error: 'You have sent a lot of reports. Please try again later.' };
  }

  const ident = await identifyAttempt(db, { task: input.task, qkey: input.qkey, itemId: input.itemId, now });
  const questionId = ident.qkey;
  if (!questionId) return { ok: false, status: 400, error: 'Unknown question' };
  const registered = ident.versionId !== null;

  await db
    .prepare(
      `INSERT OR IGNORE INTO question_reports (question_id, version_id, task, student_id, reason, note, prompt_snapshot, status, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'open', ?)`,
    )
    .bind(questionId, ident.versionId, input.task, studentId, input.reason, input.note, registered ? null : input.promptSnapshot, now)
    .run();
  return { ok: true };
}
