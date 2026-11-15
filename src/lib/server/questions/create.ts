// A new curated multiple-choice question, added by an approved teacher proposal. One batch: question row, version 1, pointer.
import type { AdminDb } from '../admin/db';
import { makeQkey } from '../../shared/qkey';
import type { QuestionContent } from '../../shared/questionEdit';

export type CreateResult = { ok: true; questionId: string; versionId: number } | { ok: false; status: 409; error: string };

export async function createCuratedQuestion(db: AdminDb, task: string, c: QuestionContent, sourceNote: string, author: string, now: number): Promise<CreateResult> {
  const id = makeQkey(task, c.prompt);
  const clash = await db.all('SELECT 1 AS x FROM questions WHERE id = ? UNION SELECT 1 FROM question_versions WHERE qkey = ? LIMIT 1', [id, id]);
  if (clash.length > 0) return { ok: false, status: 409, error: 'That wording is already used by another question in this topic' };
  const section = (await db.all<{ section: string }>('SELECT section FROM questions WHERE task = ? ORDER BY created_at LIMIT 1', [task]))[0]?.section ?? 'general';
  await db.batch([
    { sql: "INSERT OR IGNORE INTO questions (id, task, section, kind, source, status, current_version_id, legacy_item_id, created_at) VALUES (?, ?, ?, 'mcq', 'curated', 'active', NULL, NULL, ?)", params: [id, task, section, now] },
    {
      sql: `INSERT INTO question_versions (question_id, version_no, qkey, prompt, options, answer, explanation, extra, source_note, author, status, created_at)
            SELECT ?, 1, ?, ?, ?, ?, ?, '{}', ?, ?, 'approved', ? WHERE NOT EXISTS (SELECT 1 FROM question_versions WHERE question_id = ?)`,
      params: [id, id, c.prompt, JSON.stringify(c.options), c.answer, c.explanation, sourceNote, author, now, id],
    },
    { sql: 'UPDATE questions SET current_version_id = (SELECT id FROM question_versions WHERE question_id = ? AND version_no = 1) WHERE id = ? AND current_version_id IS NULL', params: [id, id] },
  ]);
  const v = (await db.all<{ id: number }>('SELECT v.id FROM questions q JOIN question_versions v ON v.id = q.current_version_id WHERE q.id = ? AND v.author = ? AND v.created_at = ?', [id, author, now]))[0];
  return v ? { ok: true, questionId: id, versionId: Number(v.id) } : { ok: false, status: 409, error: 'That question could not be added' };
}
