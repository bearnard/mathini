// Test helper: the real migrations plus 0012 over node:sqlite, with a small pack seeded (one question, one lesson line, one open pack).
import fs from 'node:fs';
import { openQuestionsDb } from '../questions/testQuestionsDb';
import type { TrDb } from './db';
import { createReviewer } from './token';

export async function openReviewDb() {
  const t = await openQuestionsDb();
  if (!t) return null;
  t.raw.exec(fs.readFileSync('migrations/0012_review.sql', 'utf8'));
  const db: TrDb = {
    async all<T>(sql: string, params: (string | number | null)[] = []) {
      return t.raw.prepare(sql).all(...params) as unknown as T[];
    },
    async batch(statements) {
      t.raw.exec('BEGIN');
      try {
        for (const s of statements) t.raw.prepare(s.sql).run(...(s.params ?? []));
        t.raw.exec('COMMIT');
      } catch (e) {
        t.raw.exec('ROLLBACK');
        throw e;
      }
    },
  };
  return { t, db };
}

export const NOW = 1_800_000_000_000;

export interface Seeded {
  packId: number;
  closedPackId: number;
  qItemId: number;
  lineItemId: number;
  otherPackItemId: number;
  versionId: number;
}

export function seedPack(raw: NonNullable<Awaited<ReturnType<typeof openReviewDb>>>['t']['raw']): Seeded {
  raw.exec(`INSERT INTO questions (id, task, source, current_version_id, created_at) VALUES ('q1', 'gr7-afrikaans-t1', 'curated', 1, 1)`);
  raw.prepare(`INSERT INTO question_versions (id, question_id, version_no, qkey, prompt, options, answer, explanation, author, created_at) VALUES (1, 'q1', 1, 'k1', ?, ?, ?, ?, 'seed', 1)`)
    .run('Wat beteken "kusasa"?', JSON.stringify(['gister', 'vandag', 'more', 'volgende jaar']), 'more', 'Kusasa is more.');
  raw.exec(`INSERT INTO review_packs (id, title, created_by, created_at, status) VALUES (1, 'Afrikaans G7', 'owner@example.com', 1, 'open'), (2, 'Old pack', 'owner@example.com', 1, 'closed'), (3, 'Draft pack', 'owner@example.com', 1, 'draft')`);
  const ins = raw.prepare('INSERT INTO review_pack_items (pack_id, kind, question_id, version_id, file, anchor_text, context, doubt, sort) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
  ins.run(1, 'question', 'q1', 1, null, null, JSON.stringify({ subject: 'Afrikaans', grade: 7, topic: 'Woordeskat' }), 'Is "kusasa" more of tomorrow?', 1);
  ins.run(1, 'lesson_line', null, null, 'grade7/afrikaans/x.tsx', 'Ek gaan more skool toe.', JSON.stringify({ slideTitle: 'Tyd', before: 'Gister was dit Maandag.', after: 'Volgende week is toetsweek.' }), 'Is this natural?', 2);
  ins.run(2, 'lesson_line', null, null, 'f.tsx', 'Other pack line', null, null, 1);
  return { packId: 1, closedPackId: 2, qItemId: 1, lineItemId: 2, otherPackItemId: 3, versionId: 1 };
}

export async function newReviewer(db: TrDb, packId: number, name = 'Ms N.') {
  return createReviewer(db, packId, name, 'WhatsApp 082 000 0000', NOW);
}
