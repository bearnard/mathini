import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openPoolDb } from './testD1';
import { bandCounts, scoreRows, updateSql, type BackfillRow } from './qualityBackfill';

const row = (id: number, task: string, prompt: string, options: string[], answer: string, explanation: string | null = 'This explains why the answer is right.'): BackfillRow => ({ id, task, prompt, options: JSON.stringify(options), answer, explanation });
const good = (id: number, task = 'what-is-history') => row(id, task, `What is the job of source number ${id} in a history lesson about evidence?`, ['It gives evidence', 'It gives a verdict', 'It gives a deadline', 'It gives a diagram'], 'It gives evidence');

test('scores every row: clean 80+, warn 1-79, rejected 0, with reason codes', () => {
  const scored = scoreRows([
    good(1),
    row(2, 'what-is-history', 'What is time management?', ['Wasting time', 'Organizing and using your time well', 'Studying all the time', 'Never resting'], 'Organizing and using your time well'),
    row(3, 'what-is-history', 'How can sand be separated from muddy water?', ['By filtering it twice', 'By using a magnet', 'By sieving the sand', 'By evaporating it'], 'By filtering it twice', 'Filter paper holds back the sand and lets the water through.'),
    row(4, 'what-is-history', 'Which is right?', ['a1', 'b1', 'c1', 'd1'], 'z9'),
  ]);
  const byId = Object.fromEntries(scored.map((s) => [s.id, s]));
  assert.ok(byId[1].score >= 80 && byId[1].flags.length === 0);
  assert.equal(byId[2].score, 0);
  assert.equal(byId[2].flags[0], 'length_tell_strong');
  assert.ok(byId[3].score > 0 && byId[3].score < 80);
  assert.deepEqual(byId[3].flags, ['length_tell']);
  assert.equal(byId[4].score, 0);
  assert.deepEqual(bandCounts(scored), { total: 4, rejected: 2, warn: 1, clean: 1 });
});

test('a bad options JSON is a rejected row, not a crash', () => {
  const [s] = scoreRows([{ id: 9, task: 't', prompt: 'p?', options: 'not json', answer: 'a', explanation: 'e' }]);
  assert.equal(s.score, 0);
});

test('near-duplicates: the EARLIER id keeps its place, the later copy is rejected', () => {
  const scored = scoreRows([good(7), { ...good(5), prompt: good(7).prompt }, good(6, 'other-task')]);
  const byId = Object.fromEntries(scored.map((s) => [s.id, s]));
  assert.ok(byId[5].score >= 80, 'id 5 came first');
  assert.equal(byId[7].score, 0);
  assert.ok(byId[7].flags.includes('near_duplicate'));
  assert.ok(byId[6].score >= 80, 'other tasks are independent');
});

test('numeric word problems are flagged as drift only outside maths-like subjects', () => {
  const q = (task: string) => row(1, task, 'If Sam buys 3 pens at R4 each, how many rand is that in total?', ['R12', 'R7', 'R16', 'R9'], 'R12', 'Three pens at R4 each cost 3 times R4, which is R12.');
  assert.ok(scoreRows([q('what-is-history')])[0].flags.includes('off_topic_numeric'));
  assert.ok(!scoreRows([q('gr6-area-perimeter-t3')])[0].flags.includes('off_topic_numeric'));
});

test('the generated SQL, applied to a real item_cache, stores the scores and flags', async () => {
  const t = await openPoolDb();
  if (!t) return;
  const rows = [good(1), row(2, 'what-is-history', 'What is time management?', ['Wasting time', 'Organizing and using your time well', 'Studying all the time', 'Never resting'], 'Organizing and using your time well')];
  const ins = t.raw.prepare('INSERT INTO item_cache (id, task, prompt, options, answer, explanation, created_at) VALUES (?,?,?,?,?,?,1)');
  for (const r of rows) ins.run(r.id, r.task, r.prompt, r.options, r.answer, r.explanation);
  const files = updateSql(scoreRows(rows), 1);
  assert.equal(files.length, 2, 'split into files of the requested size');
  for (const f of files) t.raw.exec(f);
  const out = (t.raw.prepare('SELECT id, quality_score AS s, quality_flags AS f FROM item_cache ORDER BY id').all() as { id: number; s: number; f: string }[]).map((r) => ({ ...r }));
  assert.ok(out[0].s >= 80 && out[0].f === '[]');
  assert.equal(out[1].s, 0);
  assert.ok(JSON.parse(out[1].f).includes('length_tell_strong'));
  // running the backfill twice is harmless (idempotent)
  for (const f of files) t.raw.exec(f);
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM item_cache WHERE quality_score IS NOT NULL').get() as { n: number }).n, 2);
});

test('single quotes in flags or text cannot break the SQL', () => {
  const sql = updateSql([{ id: 1, score: 0, flags: ["it's"] }])[0];
  assert.match(sql, /'\["it''s"\]'/);
});
