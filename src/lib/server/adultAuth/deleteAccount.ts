// An adult deletes their own account (POPIA: erasure on request; security review item). One atomic batch removes everything that identifies them:
// the account, roles and sessions, their links to children, their summary-email settings, any sign-in links for their address, the teacher application (and
// with it the SACE number) and, for a teacher, their classes (with the members, exam scopes and join codes). What has to stay for the CHILD's sake stays but
// no longer says who: the consent record (the event remains, its parent is replaced by 'deleted'), the log of PIN resets, and which parent used an invite.
// Children's accounts, their progress and the consent already given are not touched: deleting a parent does not delete a learner.
import type { AdminDb, Statement } from '../admin/db';
import { sha256Hex } from './crypto';

export const ANONYMOUS_USER = 'deleted';

export interface DeletedCounts {
  sessions: number;
  links: number;
  classes: number;
  members: number;
  scopes: number;
  applications: number;
  /** Schools they were appointed school admin of (the appointment goes with the account). */
  schoolAdminships: number;
  /** Consent events and PIN resets kept but made anonymous. */
  consentsAnonymised: number;
  pinResetsAnonymised: number;
  /** Teacher proposals and comments kept but made anonymous; open proposals are withdrawn. */
  proposalsAnonymised: number;
  commentsAnonymised: number;
}

export type DeleteAccountResult = { ok: true; deleted: DeletedCounts } | { ok: false; status: 404; error: string };

export async function deleteAdultAccount(db: AdminDb, userId: string, now: number): Promise<DeleteAccountResult> {
  const u = (await db.all<{ email: string }>('SELECT email FROM users WHERE id = ?', [userId]))[0];
  if (!u) return { ok: false, status: 404, error: 'Account not found' };
  const n = async (sql: string, p: (string | number)[] = [userId]) => Number((await db.all<{ n: number }>(sql, p))[0]?.n ?? 0);
  const mine = '(SELECT id FROM classes WHERE teacher_user_id = ?)';
  const [sessions, links, classes, members, scopes, applications, schoolAdminships, consentsAnonymised, pinResetsAnonymised, proposalsAnonymised, commentsAnonymised] = await Promise.all([
    n('SELECT COUNT(*) AS n FROM sessions WHERE user_id = ?'),
    n('SELECT COUNT(*) AS n FROM parent_links WHERE user_id = ?'),
    n('SELECT COUNT(*) AS n FROM classes WHERE teacher_user_id = ?'),
    n(`SELECT COUNT(*) AS n FROM class_members WHERE class_id IN ${mine}`),
    n(`SELECT COUNT(*) AS n FROM exam_scopes WHERE class_id IN ${mine}`),
    n('SELECT COUNT(*) AS n FROM teacher_applications WHERE user_id = ?'),
    n('SELECT COUNT(*) AS n FROM school_admins WHERE user_id = ?'),
    n('SELECT COUNT(*) AS n FROM consent_events WHERE user_id = ?'),
    n('SELECT COUNT(*) AS n FROM pin_resets WHERE user_id = ?'),
    n('SELECT COUNT(*) AS n FROM proposals WHERE proposer_user_id = ?'),
    n('SELECT COUNT(*) AS n FROM discussion_comments WHERE user_id = ?'),
  ]);
  const deleted: DeletedCounts = { sessions, links, classes, members, scopes, applications, schoolAdminships, consentsAnonymised, pinResetsAnonymised, proposalsAnonymised, commentsAnonymised };
  const emailKey = `email:${await sha256Hex(u.email)}`;
  const statements: Statement[] = [
    { sql: `DELETE FROM class_members WHERE class_id IN ${mine}`, params: [userId] },
    { sql: `DELETE FROM exam_scopes WHERE class_id IN ${mine}`, params: [userId] },
    { sql: 'DELETE FROM classes WHERE teacher_user_id = ?', params: [userId] },
    { sql: 'DELETE FROM teacher_applications WHERE user_id = ?', params: [userId] },
    { sql: 'DELETE FROM teacher_endorsements WHERE user_id = ?', params: [userId] },
    { sql: "UPDATE teacher_endorsements SET endorsed_by = '(deleted)' WHERE endorsed_by = ?", params: [u.email] },
    { sql: 'DELETE FROM school_admins WHERE user_id = ?', params: [userId] },
    { sql: 'DELETE FROM class_join_seen WHERE user_id = ?', params: [userId] },
    { sql: 'DELETE FROM parent_links WHERE user_id = ?', params: [userId] },
    { sql: 'UPDATE consent_events SET user_id = ? WHERE user_id = ?', params: [ANONYMOUS_USER, userId] },
    { sql: 'UPDATE pin_resets SET user_id = ? WHERE user_id = ?', params: [ANONYMOUS_USER, userId] },
    { sql: 'UPDATE child_invites SET used_by = NULL WHERE used_by = ?', params: [userId] },
    // Moderation: what they wrote and decided stays (the question bank and its history are the owner's record) but no longer says who.
    { sql: "UPDATE proposals SET status = 'withdrawn', updated_at = ? WHERE proposer_user_id = ? AND status IN ('returned', 'submitted')", params: [now, userId] },
    { sql: 'UPDATE proposals SET proposer_user_id = ? WHERE proposer_user_id = ?', params: [ANONYMOUS_USER, userId] },
    { sql: 'UPDATE proposals SET decided_by_user = ? WHERE decided_by_user = ?', params: [ANONYMOUS_USER, userId] },
    { sql: 'UPDATE discussion_comments SET user_id = ? WHERE user_id = ?', params: [ANONYMOUS_USER, userId] },
    { sql: 'UPDATE question_versions SET author = ? WHERE author = ?', params: ['teacher', `teacher:${userId}`] },
    { sql: 'DELETE FROM group_moderators WHERE user_id = ?', params: [userId] },
    { sql: 'DELETE FROM reputation_events WHERE user_id = ?', params: [userId] },
    { sql: 'DELETE FROM summary_prefs WHERE user_id = ?', params: [userId] },
    { sql: 'DELETE FROM summary_sent WHERE user_id = ?', params: [userId] },
    { sql: 'DELETE FROM sessions WHERE user_id = ?', params: [userId] },
    { sql: 'DELETE FROM user_roles WHERE user_id = ?', params: [userId] },
    { sql: 'DELETE FROM magic_links WHERE email = ?', params: [u.email] },
    { sql: 'DELETE FROM auth_rate WHERE key = ?', params: [emailKey] },
    { sql: 'DELETE FROM users WHERE id = ?', params: [userId] },
    // One audit row: counts and the time only (no address, no id), like the learner erasure.
    { sql: "INSERT INTO events (ts, type, device_id, session_id, student_id, meta) VALUES (?, 'account_delete', 'self', 'self', NULL, ?)", params: [now, JSON.stringify({ rows: { users: 1, ...deleted }, at: now })] },
  ];
  await db.batch(statements);
  return { ok: true, deleted };
}
