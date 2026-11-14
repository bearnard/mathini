// Test helper: the REAL migrations (0002 minus its item_cache bits, 0005-0008) over node:sqlite, plus a pre-0007 item_cache.
import fs from 'node:fs';
import { openPoolDb, type TestD1 } from '../testD1';
import type { AdminDb, Param, Statement } from '../admin/db';

export async function openQuestionsDb(): Promise<TestD1 | null> {
  const t = await openPoolDb(); // item_cache with 0007 applied
  if (!t) return null;
  const mig = (n: string) => fs.readFileSync(`migrations/${n}`, 'utf8');
  t.raw.exec(mig('0002_students_results_gamification.sql').replace(/ALTER TABLE item_cache[^;]*;/g, '').replace(/CREATE INDEX IF NOT EXISTS idx_item_cache_task_section[^;]*;/g, ''));
  for (const n of ['0005_attempts_qkey.sql', '0006_review_items.sql', '0008_questions.sql', '0009_question_reports.sql']) t.raw.exec(mig(n));
  return t;
}

/** The admin SQL interface over the same in-memory database, so moderation runs exactly as it does on D1. */
export function adminDbOf(t: TestD1): AdminDb {
  return {
    async all<T>(sql: string, params: Param[] = []) {
      return t.raw.prepare(sql).all(...params) as unknown as T[];
    },
    async batch(statements: Statement[]) {
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
}
