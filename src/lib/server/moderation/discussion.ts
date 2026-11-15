// Discussion threads on a question or a proposal. Teachers and moderators ONLY: every function re-checks the role, and no learner id, learner
// answer or learner count is ever in what comes back. A comment shows its author as "Teacher at <school>" (or "Moderator"), never an email.
import type { AdminDb } from '../admin/db';
import { cleanComment, LIMITS } from '../../shared/moderation';
import { isTeacherOrModerator } from './groups';

const QID = /^[0-9a-f]{12}$/;
const UUID = /^[0-9a-f-]{36}$/;
const DAY = 86_400_000;
export const MAX_COMMENTS_PER_DAY = 30;
export const MAX_COMMENTS_SHOWN = 200;

export type Target = { questionId: string } | { proposalId: string };
export interface Comment { id: string; author: string; mine: boolean; body: string; createdAt: number; removed: boolean }
export type CommentResult = { ok: true; id: string } | { ok: false; status: 400 | 403 | 404 | 429; error: string };

async function targetExists(db: AdminDb, t: Target): Promise<boolean> {
  if ('questionId' in t) return QID.test(t.questionId) && (await db.all('SELECT 1 AS x FROM questions WHERE id = ?', [t.questionId])).length > 0;
  return UUID.test(t.proposalId) && (await db.all('SELECT 1 AS x FROM proposals WHERE id = ?', [t.proposalId])).length > 0;
}

export async function postComment(db: AdminDb, userId: string, t: Target, rawBody: unknown, now: number): Promise<CommentResult> {
  if (!(await isTeacherOrModerator(db, userId))) return { ok: false, status: 403, error: 'Only teachers and moderators can take part in the discussion' };
  const body = cleanComment(rawBody);
  if (!body) return { ok: false, status: 400, error: `Write a comment of up to ${LIMITS.commentMax} characters` };
  if (!(await targetExists(db, t))) return { ok: false, status: 404, error: 'Not found' };
  const today = Number((await db.all<{ n: number }>('SELECT COUNT(*) AS n FROM discussion_comments WHERE user_id = ? AND created_at > ?', [userId, now - DAY]))[0]?.n ?? 0);
  if (today >= MAX_COMMENTS_PER_DAY) return { ok: false, status: 429, error: 'That is enough comments for today. Try again tomorrow.' };
  const id = crypto.randomUUID();
  await db.batch([{
    sql: 'INSERT INTO discussion_comments (id, question_id, proposal_id, user_id, body, created_at) VALUES (?, ?, ?, ?, ?, ?)',
    params: [id, 'questionId' in t ? t.questionId : null, 'proposalId' in t ? t.proposalId : null, userId, body, now],
  }]);
  return { ok: true, id };
}

export async function listComments(db: AdminDb, viewerId: string, t: Target): Promise<{ ok: true; comments: Comment[] } | { ok: false; status: 403 | 404; error: string }> {
  if (!(await isTeacherOrModerator(db, viewerId))) return { ok: false, status: 403, error: 'Only teachers and moderators can read the discussion' };
  return readThread(db, viewerId, t);
}

/** The owner reads any thread (Cloudflare Access guards the caller). Authors still show as "Teacher at <school>"; the owner removes by comment id. */
export const listCommentsForOwner = (db: AdminDb, t: Target) => readThread(db, null, t);

async function readThread(db: AdminDb, viewerId: string | null, t: Target): Promise<{ ok: true; comments: Comment[] } | { ok: false; status: 403 | 404; error: string }> {
  if (!(await targetExists(db, t))) return { ok: false, status: 404, error: 'Not found' };
  const [col, val] = 'questionId' in t ? ['question_id', t.questionId] : ['proposal_id', t.proposalId];
  const rows = await db.all<{ id: string; user_id: string; body: string; created_at: number; removed_at: number | null; school: string | null; is_mod: number }>(
    `SELECT c.id, c.user_id, c.body, c.created_at, c.removed_at,
            COALESCE((SELECT s.name FROM teacher_applications a JOIN schools s ON s.id = a.school_id WHERE a.user_id = c.user_id), (SELECT a.school_name FROM teacher_applications a WHERE a.user_id = c.user_id)) AS school,
            EXISTS (SELECT 1 FROM user_roles r WHERE r.user_id = c.user_id AND r.role = 'moderator') AS is_mod
     FROM discussion_comments c WHERE c.${col} = ? ORDER BY c.created_at, c.id LIMIT ?`, [val, MAX_COMMENTS_SHOWN]);
  return {
    ok: true,
    comments: rows.map((r) => ({
      id: r.id,
      author: r.user_id === 'deleted' ? 'A former teacher' : `${r.is_mod ? 'Moderator' : 'Teacher'}${r.school ? ` at ${r.school}` : ''}`,
      mine: viewerId !== null && r.user_id === viewerId,
      body: r.removed_at ? '' : r.body,
      createdAt: Number(r.created_at),
      removed: r.removed_at != null,
    })),
  };
}

/** A comment is taken down (the text is cleared from view, the row stays) by its author, or by the owner. removed_by records who: 'author' or 'owner:<email>' (the audit). */
export async function removeComment(db: AdminDb, actor: { userId: string } | { owner: string }, commentId: string, now: number): Promise<{ ok: true } | { ok: false; status: 403 | 404; error: string }> {
  if (!UUID.test(commentId)) return { ok: false, status: 404, error: 'Not found' };
  const row = (await db.all<{ user_id: string }>('SELECT user_id FROM discussion_comments WHERE id = ? AND removed_at IS NULL', [commentId]))[0];
  if (!row) return { ok: false, status: 404, error: 'Not found' };
  if ('userId' in actor && actor.userId !== row.user_id) return { ok: false, status: 403, error: 'Only the author can remove a comment' };
  await db.batch([{ sql: 'UPDATE discussion_comments SET removed_at = ?,  removed_by = ? WHERE id = ? AND removed_at IS NULL', params: [now, 'userId' in actor ? 'author' : `owner:${actor.owner}`, commentId] }]);
  return { ok: true };
}
