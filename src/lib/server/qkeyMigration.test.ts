import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import { makeQkey } from '../shared/qkey';

// Applies the real migrations to an in-memory SQLite and checks the qkey column + the
// item_id -> item_cache -> qkey derivation the attempts route relies on.
function db() {
  const d = new DatabaseSync(':memory:');
  d.exec('CREATE TABLE item_cache (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT NOT NULL, prompt TEXT NOT NULL, options TEXT NOT NULL, answer TEXT NOT NULL, explanation TEXT NOT NULL DEFAULT \'\', created_at INTEGER NOT NULL)');
  for (const f of ['0002_students_results_gamification', '0005_attempts_qkey']) d.exec(readFileSync(`migrations/${f}.sql`, 'utf8'));
  return d;
}

test('0005 adds a nullable qkey column and its index; old rows stay NULL', () => {
  const d = db();
  d.exec("INSERT INTO students (id, login_code, pin_hash, pin_salt, display_name, real_name, grade, created_at, last_seen_at) VALUES ('s1','C-1','h','s','d','r',6,1,1)");
  d.exec("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, created_at) VALUES ('s1','t','g',6,'nst','t',1,1)");
  const row = d.prepare('SELECT qkey FROM attempts').get() as { qkey: string | null };
  assert.equal(row.qkey, null);
  const idx = d.prepare("SELECT name FROM sqlite_master WHERE type='index' AND name='idx_attempts_student_qkey'").get();
  assert.ok(idx);
});

test('a pool answer resolves to the same qkey as the curated prompt', () => {
  const d = db();
  const prompt = 'What does the steam do in a power station?';
  d.prepare('INSERT INTO item_cache (task, prompt, options, answer, created_at) VALUES (?,?,?,?,1)').run('mains-electricity', prompt, '[]', 'a');
  const r = d.prepare('SELECT prompt FROM item_cache WHERE id = ? AND task = ?').get(1, 'mains-electricity') as { prompt: string };
  assert.equal(makeQkey('mains-electricity', r.prompt), makeQkey('mains-electricity', prompt));
  assert.equal(d.prepare('SELECT prompt FROM item_cache WHERE id = ? AND task = ?').get(1, 'other-task'), undefined);
});
