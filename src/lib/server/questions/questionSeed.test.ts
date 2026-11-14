import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { makeQkey } from '../../shared/qkey';
import { openQuestionsDb } from './testQuestionsDb';

test('the curated seed file is current with the code banks', () => {
  execFileSync(process.execPath, ['--import', 'tsx', 'scripts/gen-question-seed.ts', '--check'], { cwd: process.cwd(), stdio: 'pipe' });
});

test('applying the curated seed twice registers every bank question once, id = qkey, with a current version', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const sql = fs.readFileSync('migrations/seeds/0008_questions_curated.sql', 'utf8');
  t.raw.exec(sql);
  const n1 = (t.raw.prepare('SELECT COUNT(*) AS n FROM questions').get() as { n: number }).n;
  t.raw.exec(sql);
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM questions').get() as { n: number }).n, n1);
  assert.ok(n1 > 1000, `only ${n1} questions`);
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM question_versions').get() as { n: number }).n, n1);
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM questions WHERE current_version_id IS NULL').get() as { n: number }).n, 0);
  // every id is the qkey of its own prompt, and every curated NST Moon question from the earlier review work is there
  const rows = t.raw.prepare('SELECT q.id, q.task, v.prompt FROM questions q JOIN question_versions v ON v.id = q.current_version_id').all() as { id: string; task: string; prompt: string }[];
  for (const r of rows) assert.equal(r.id, makeQkey(r.task, r.prompt));
  assert.ok(rows.some((r) => r.task === 'earth-moon-movement'));
});
