// What the deciders see: a proposal with the question it is about and who wrote it. The owner sees the teacher's email; a moderator sees only
// "Teacher at <school>" (never an email, never a user id). No learner data.
import type { AdminDb } from '../admin/db';
import { groupTitle, splitGroupKey, type ProposalStatus } from '../../shared/moderation';
import type { QuestionContent } from '../../shared/questionEdit';
import { moderatorCount, groupIsSelfGoverning } from './groups';
import { listByStatus, type ProposalRow } from './proposals';

export interface ProposalView extends Omit<ProposalRow, 'proposerUserId'> {
  author: string;
  authorEmail?: string;
  groupTitle: string;
  moderators: number;
  selfGoverning: boolean;
  current: (QuestionContent & { versionId: number }) | null;
  comments: number;
}

const parseOptions = (s: unknown): string[] => { try { const v = JSON.parse(String(s)); return Array.isArray(v) ? v.map(String) : []; } catch { return []; } };

export async function toViews(db: AdminDb, rows: ProposalRow[], forOwner: boolean): Promise<ProposalView[]> {
  const counts = new Map<string, number>();
  for (const g of new Set(rows.map((r) => r.groupKey))) counts.set(g, await moderatorCount(db, g));
  const out: ProposalView[] = [];
  for (const r of rows) {
    const who = (await db.all<{ email: string | null; school: string | null }>(
      `SELECT (SELECT email FROM users WHERE id = ?) AS email,
              COALESCE((SELECT s.name FROM teacher_applications a JOIN schools s ON s.id = a.school_id WHERE a.user_id = ?), (SELECT a.school_name FROM teacher_applications a WHERE a.user_id = ?)) AS school`,
      [r.proposerUserId, r.proposerUserId, r.proposerUserId]))[0];
    const cur = r.questionId
      ? (await db.all<Record<string, unknown>>('SELECT v.id, v.prompt, v.options, v.answer, v.explanation FROM questions q JOIN question_versions v ON v.id = q.current_version_id WHERE q.id = ?', [r.questionId]))[0]
      : undefined;
    const n = Number((await db.all<{ n: number }>('SELECT COUNT(*) AS n FROM discussion_comments WHERE removed_at IS NULL AND (proposal_id = ? OR (question_id IS NOT NULL AND question_id = ?))', [r.id, r.questionId ?? '']))[0]?.n ?? 0);
    const { proposerUserId: _omit, ...rest } = r; void _omit;
    const mods = counts.get(r.groupKey) ?? 0;
    out.push({
      ...rest,
      author: r.proposerUserId === 'deleted' ? 'A former teacher' : `Teacher${who?.school ? ` at ${who.school}` : ''}`,
      ...(forOwner && who?.email ? { authorEmail: who.email } : {}),
      groupTitle: splitGroupKey(r.groupKey) ? groupTitle(r.groupKey) : r.groupKey,
      moderators: mods, selfGoverning: groupIsSelfGoverning(mods),
      current: cur ? { versionId: Number(cur.id), prompt: String(cur.prompt), options: parseOptions(cur.options), answer: String(cur.answer), explanation: String(cur.explanation ?? '') } : null,
      comments: n,
    });
  }
  return out;
}

/** The owner's list: waiting proposals by default, or every proposal with a given status, newest decided first. */
export async function ownerList(db: AdminDb, status: ProposalStatus | 'all' | 'waiting'): Promise<ProposalView[]> {
  return toViews(db, await listByStatus(db, status), true);
}
