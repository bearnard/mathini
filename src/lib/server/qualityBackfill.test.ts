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

// ---- targeted decimal-comma backfill ----
import { hasDecimalPoint, targetedDecimalUpdates, type StoredRow } from './qualityBackfill';
import { TASK_INDEX } from './caps/taskIndex.generated';

const dr = (id: number, task: string, prompt: string, options: string[], answer: string, explanation = 'This explains why the answer is right.', quality_score?: number | null): StoredRow => ({ id, task, prompt, options: JSON.stringify(options), answer, explanation, quality_score });
const POINT_Q = (id: number, task: string, quality_score?: number | null) => dr(id, task, `What is ${id}.5 + 1.5 in this question number ${id}?`, [`${id + 2},0`, `${id + 1},5`, `${id + 3},5`, `${id + 9},0`], `${id + 2},0`, 'Add the tenths and then the ones.', quality_score);

test('hasDecimalPoint: digit.digit in the prompt, an option, the answer or the explanation; not sentence ends or commas', () => {
  assert.equal(hasDecimalPoint(POINT_Q(1, 'gr6-length-t3')), true);
  assert.equal(hasDecimalPoint(dr(2, 'gr6-length-t3', 'Convert 3,5 m to cm.', ['350 cm', '35 cm'], '350 cm')), false);
  assert.equal(hasDecimalPoint(dr(3, 'gr6-length-t3', 'x?', ['a', '0.5 kg'], 'a')), true);
  assert.equal(hasDecimalPoint(dr(4, 'gr6-length-t3', 'Sam has R5. 3 more.', ['R8', 'R2'], 'R8', 'R5 + R3. Done.')), false);
});

test('targeted backfill: Grade 6 maths rows with a point are rejected, other grades only warned, uncovered subjects untouched', () => {
  const g6 = 'gr6-decimal-fractions-t2', g7 = 'gr7-decimal-fractions-t2';
  assert.ok(TASK_INDEX[g6] && TASK_INDEX[g7] && TASK_INDEX['current-issues-media']);
  const rows: StoredRow[] = [
    POINT_Q(10, g6), POINT_Q(11, g7),
    dr(12, g6, 'Convert 3,5 m to centimetres in this very question?', ['350 cm', '35 cm', '3 500 cm', '3,5 cm'], '350 cm'),   // comma already: untouched
    POINT_Q(13, 'current-issues-media'),                                                                                      // Grade 6 English: not a maths task
    POINT_Q(14, 'gr10-database-introductory-object-concepts-t2'),                                                            // IT: excluded
  ];
  const { updates, report } = targetedDecimalUpdates(rows);
  assert.deepEqual(updates.map((u) => u.id), [10, 11], 'only the two covered rows with a point');
  assert.equal(updates.find((u) => u.id === 10)!.score, 0);
  assert.ok(updates.find((u) => u.id === 10)!.flags.includes('decimal_point'));
  const warn = updates.find((u) => u.id === 11)!;
  assert.ok(warn.score > 0 && warn.score < 80, 'warn: still served, after clean rows');
  assert.deepEqual(report.map((r) => [r.grade, r.policy, r.affected, r.changed]), [[6, 'reject', 1, 1], [7, 'warn', 1, 1]]);
  assert.deepEqual(report[0].transitions, { 'clean -> rejected': 1 });
  assert.deepEqual(report[1].transitions, { 'clean -> warn': 1 });
});

test('targeted backfill: uses the STORED score when present; rows whose score would not change are not rewritten', () => {
  const g6 = 'gr6-length-t3';
  const alreadyRejected = POINT_Q(20, g6, 0);            // stored 0, new 0: no change
  const stale = POINT_Q(21, g6, 95);                      // stored 95, new 0: change
  const { updates, report } = targetedDecimalUpdates([alreadyRejected, stale]);
  assert.deepEqual(updates.map((u) => u.id), [21]);
  assert.equal(report[0].affected, 2);
  assert.equal(report[0].changed, 1);
});

test('targeted backfill: the generated SQL, applied to a real item_cache, changes ONLY those rows, and a second run has nothing left to do', async () => {
  const t = await openPoolDb();
  if (!t) return;
  const rows: StoredRow[] = [POINT_Q(30, 'gr6-length-t3'), POINT_Q(31, 'gr8-common-and-decimal-fractions-t3'), good(32, 'gr6-length-t3')];
  const ins = t.raw.prepare('INSERT INTO item_cache (id, task, prompt, options, answer, explanation, created_at, quality_score) VALUES (?,?,?,?,?,?,1,?)');
  for (const r of rows) ins.run(r.id, r.task, r.prompt, r.options, r.answer, r.explanation, 95);
  const { updates } = targetedDecimalUpdates(rows.map((r) => ({ ...r, quality_score: 95 })));
  assert.deepEqual(updates.map((u) => u.id), [30, 31]);
  for (const f of updateSql(updates)) t.raw.exec(f);
  const out = (t.raw.prepare('SELECT id, quality_score AS s FROM item_cache ORDER BY id').all() as { id: number; s: number }[]).map((r) => ({ ...r }));
  assert.deepEqual(out.map((r) => r.s > 0 && r.s < 80 ? 'warn' : r.s === 0 ? 'rejected' : 'clean'), ['rejected', 'warn', 'clean']);
  // second run: the stored scores now match, so no update is produced
  const stored = (t.raw.prepare('SELECT id, task, prompt, options, answer, explanation, quality_score FROM item_cache ORDER BY id').all() as unknown as StoredRow[]).map((r) => ({ ...r }));
  assert.deepEqual(targetedDecimalUpdates(stored).updates, []);
});

test('the full scoreRows applies the rule too (a later full backfill stays consistent), and decimalRule:false reproduces the old scores', () => {
  const r = POINT_Q(40, 'gr6-length-t3');
  assert.equal(scoreRows([r])[0].score, 0);
  assert.ok(scoreRows([r], { decimalRule: false })[0].score >= 80);
});

// ── retired questions (moderation) must never be rescored ───────────────────────────────────────────────────────────────────────

test('rows of a RETIRED question get no update: a full backfill must not overwrite quality_score 0 and serve it again', () => {
  const rows = [good(1), good(2), good(3)];
  const all = scoreRows(rows);
  assert.deepEqual(all.map((s) => s.id), [1, 2, 3]);
  const skipped = scoreRows(rows, { retiredIds: new Set([2]) });
  assert.deepEqual(skipped.map((s) => s.id), [1, 3]);
  const sql = updateSql(skipped).join('\n');
  assert.ok(!/WHERE id = 2;/.test(sql), 'no UPDATE for the retired row');
  assert.ok(/WHERE id = 1;/.test(sql) && /WHERE id = 3;/.test(sql));
});

test('retired rows still count as existing questions for the near-duplicate check of the others', () => {
  const a = row(1, 't', 'What is the capital city of the country called France in Europe?', ['Paris', 'Rome', 'Madrid', 'Berlin'], 'Paris');
  const b = row(2, 't', 'What is the capital city of the country called France in Europe?', ['Paris', 'Rome', 'Madrid', 'Berlin'], 'Paris');
  const res = scoreRows([a, b], { retiredIds: new Set([1]) });
  assert.deepEqual(res.map((s) => s.id), [2]);
  assert.ok(res[0].flags.includes('near_duplicate'), 'the later copy is still judged against the retired original');
});

test('a retired row is skipped by the decimal-comma targeted backfill too', async () => {
  const { targetedDecimalUpdates } = await import('./qualityBackfill');
  const taskCode = Object.keys((await import('./caps/taskIndex.generated')).TASK_INDEX).find((t) => /^gr6-decimal/.test(t));
  assert.ok(taskCode, 'a Grade 6 decimal task exists in the index');
  const r = (id: number) => ({ id, task: taskCode!, prompt: `What is 1.${id} + 0.5 when you add them together?`, options: JSON.stringify(['1.5', '2.0', '0.5', '3.1']), answer: '2.0', explanation: 'Add the tenths and then the ones.', quality_score: 90 });
  const all = targetedDecimalUpdates([r(1), r(2)]).updates.map((u) => u.id);
  assert.deepEqual(all, [1, 2]);
  const some = targetedDecimalUpdates([r(1), r(2)], new Set([2])).updates.map((u) => u.id);
  assert.deepEqual(some, [1]);
});
