// Test helper: the REAL migrations (0002 minus its item_cache bits, 0005-0008) over node:sqlite, plus a pre-0007 item_cache.
import fs from 'node:fs';
import { openPoolDb, type TestD1 } from '../testD1';

export async function openQuestionsDb(): Promise<TestD1 | null> {
  const t = await openPoolDb(); // item_cache with 0007 applied
  if (!t) return null;
  const mig = (n: string) => fs.readFileSync(`migrations/${n}`, 'utf8');
  t.raw.exec(mig('0002_students_results_gamification.sql').replace(/ALTER TABLE item_cache[^;]*;/g, '').replace(/CREATE INDEX IF NOT EXISTS idx_item_cache_task_section[^;]*;/g, ''));
  for (const n of ['0005_attempts_qkey.sql', '0006_review_items.sql', '0008_questions.sql']) t.raw.exec(mig(n));
  return t;
}
