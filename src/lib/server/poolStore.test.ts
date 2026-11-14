import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openPoolDb, openTestD1 } from './testD1';
import { fetchPoolItems, poolQuery } from './poolStore';

async function seeded(withBadJson = false) {
  const t = await openPoolDb();
  if (!t) return null;
  const ins = t.raw.prepare('INSERT INTO item_cache (task, prompt, options, answer, explanation, created_at, section, quality_score) VALUES (?,?,?,?,?,?,?,?)');
  const row = (task: string, p: string, score: number | null, section = 'general') => ins.run(task, p, JSON.stringify(['a', 'b', 'c', 'd']), 'a', 'because', 1, section, score);
  for (let i = 0; i < 6; i++) row('t', `clean ${i}`, 90 + i);
  for (let i = 0; i < 3; i++) row('t', `warn ${i}`, 50 + i);
  for (let i = 0; i < 4; i++) row('t', `rejected ${i}`, 0);
  for (let i = 0; i < 2; i++) row('t', `unscored ${i}`, null);
  row('t', 'sec', 95, 'special');
  row('other', 'other task', 95);
  if (withBadJson) t.raw.prepare("INSERT INTO item_cache (task, prompt, options, answer, explanation, created_at, quality_score) VALUES ('t','bad json','not json','a','e',1,95)").run();
  return t;
}

test('migration 0007: adds the quality columns, the index and pool_tasks seeded from existing tasks', async () => {
  const t = await openPoolDb();
  if (!t) return;
  const cols = (t.raw.prepare('PRAGMA table_info(item_cache)').all() as { name: string }[]).map((c) => c.name);
  assert.ok(cols.includes('quality_score') && cols.includes('quality_flags'));
  assert.ok(t.raw.prepare("SELECT 1 FROM sqlite_master WHERE type='index' AND name='idx_item_cache_task_quality'").get());
  assert.ok(t.raw.prepare("SELECT 1 FROM sqlite_master WHERE name='pool_tasks'").get());
});

test('migration 0007 seeds pool_tasks from the tasks that already have rows (and only those)', async () => {
  const t = await openTestD1();
  if (!t) return;
  const fs = await import('node:fs');
  t.raw.exec(`CREATE TABLE item_cache (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT NOT NULL, prompt TEXT NOT NULL, options TEXT NOT NULL, answer TEXT NOT NULL, explanation TEXT NOT NULL DEFAULT '', created_at INTEGER NOT NULL, vector_id TEXT, section TEXT NOT NULL DEFAULT 'general')`);
  for (const task of ['maths-a', 'maths-a', 'history-b']) t.raw.prepare('INSERT INTO item_cache (task, prompt, options, answer, created_at) VALUES (?, ?, ?, ?, 1)').run(task, `q${Math.random()}`, '[]', 'a');
  t.raw.exec(fs.readFileSync('migrations/0007_item_quality.sql', 'utf8'));
  const tasks = (t.raw.prepare('SELECT task, target, enabled FROM pool_tasks ORDER BY task').all() as { task: string; target: number; enabled: number }[]).map((r) => ({ ...r }));
  assert.deepEqual(tasks, [{ task: 'history-b', target: 50, enabled: 1 }, { task: 'maths-a', target: 50, enabled: 1 }]);
  // existing rows are untouched and unscored (served exactly as before)
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM item_cache WHERE quality_score IS NULL').get() as { n: number }).n, 3);
});

test('serving: never a rejected row; clean rows first; unscored rows still served', async () => {
  const t = await seeded(true);
  if (!t) return;
  const all = await fetchPoolItems(t.db, 't', 100);
  assert.ok(!all.some((i) => i.prompt.startsWith('rejected')), 'rejected rows are never served');
  assert.ok(!all.some((i) => i.prompt === 'bad json'), 'a row with invalid options JSON is skipped, not a 500');
  // 6 clean + 2 unscored + 'sec' are in the clean band (>=80 or NULL); the 3 warn rows come last
  const firstWarn = all.findIndex((i) => i.prompt.startsWith('warn'));
  assert.ok(firstWarn >= 9, `warn rows must come after the ${9} clean/unscored rows, got index ${firstWarn}`);
  assert.equal(all.length, 12);
  assert.ok(all.slice(0, 9).every((i) => !i.prompt.startsWith('warn')));
});

test('serving: a small count is filled from the clean band only', async () => {
  const t = await seeded();
  if (!t) return;
  for (let k = 0; k < 20; k++) {
    const some = await fetchPoolItems(t.db, 't', 5);
    assert.equal(some.length, 5);
    assert.ok(some.every((i) => !i.prompt.startsWith('warn') && !i.prompt.startsWith('rejected')));
  }
});

test('serving: filters by task and section, and an unknown task is empty', async () => {
  const t = await seeded();
  if (!t) return;
  assert.deepEqual((await fetchPoolItems(t.db, 'other', 10)).map((i) => i.prompt), ['other task']);
  assert.deepEqual((await fetchPoolItems(t.db, 't', 10, 'special')).map((i) => i.prompt), ['sec']);
  assert.deepEqual(await fetchPoolItems(t.db, 'nope', 10), []);
  assert.match(poolQuery(true), /AND section = \?/);
  assert.doesNotMatch(poolQuery(false), /section = \?/);
});

test('serving returns the id, options array, answer, explanation and section the clients expect', async () => {
  const t = await seeded();
  if (!t) return;
  const [item] = await fetchPoolItems(t.db, 'other', 1);
  assert.deepEqual(Object.keys(item).sort(), ['answer', 'explanation', 'id', 'options', 'prompt', 'section']);
  assert.deepEqual(item.options, ['a', 'b', 'c', 'd']);
});
