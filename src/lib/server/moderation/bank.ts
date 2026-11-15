// What a teacher may browse: the current wording of the questions in one topic, whether each is teacher-verified, and the teacher's own open
// proposal on it. NO learner data: no answer counts, no percent correct, no reports (those are the owner's).
import type { AdminDb } from '../admin/db';
import { topicInfo } from './topics';

export interface BankQuestion { id: string; versionId: number; prompt: string; options: string[]; answer: string; explanation: string; verified: boolean; editable: boolean; myProposalId: string | null }

const parseOptions = (s: unknown): string[] => { try { const v = JSON.parse(String(s)); return Array.isArray(v) ? v.map(String) : []; } catch { return []; } };

export async function topicQuestions(db: AdminDb, userId: string, task: string): Promise<{ topic: string; subject: string; group: string; questions: BankQuestion[] } | null> {
  const info = topicInfo(task);
  if (!info) return null;
  const rows = await db.all<Record<string, unknown>>(
    `SELECT q.id, q.kind, v.id AS vid, v.prompt, v.options, v.answer, v.explanation, v.extra,
            EXISTS (SELECT 1 FROM question_verified qv WHERE qv.question_id = q.id AND qv.version_id = q.current_version_id) AS verified,
            (SELECT p.id FROM proposals p WHERE p.question_id = q.id AND p.proposer_user_id = ? AND p.status IN ('returned', 'submitted', 'applying') LIMIT 1) AS mine
     FROM questions q JOIN question_versions v ON v.id = q.current_version_id
     WHERE q.task = ? AND q.status = 'active' ORDER BY q.created_at, q.id LIMIT 300`, [userId, task]);
  return {
    topic: info.topic, subject: info.subject, group: info.groupKey,
    questions: rows.map((r) => ({
      id: String(r.id), versionId: Number(r.vid), prompt: String(r.prompt), options: parseOptions(r.options), answer: String(r.answer), explanation: String(r.explanation ?? ''),
      verified: Number(r.verified) === 1, editable: r.kind === 'mcq' && !/"diagram"\s*:\s*true/.test(String(r.extra ?? '')), myProposalId: (r.mine as string | null) ?? null,
    })),
  };
}
