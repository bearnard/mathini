import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { markAttempt, markMcq, normChoice, verifiedStreak } from './marking';
import { attemptInsertPlans } from './progress/attemptPlans';
import { MIN_EXAM_ITEMS, REVIEW_SCOPE_KEY, scopeProblem, startRun } from './progress/runs';
import { openTestDb, insertStudent, type TestDb } from './admin/testdb';

const NOW = 1_800_000_000_000;

async function world() {
  const t = await openTestDb(); if (!t) return null;
  insertStudent(t, { id: 's1', created: NOW - 1000, grade: 6 });
  const q = (id: string, kind: string) => t.exec("INSERT INTO questions (id, task, kind, source, current_version_id, created_at) VALUES (?, 'electric-circuits', ?, 'curated', NULL, 1)", [id, kind]);
  const v = (id: number, qid: string, no: number, options: string[], answer: string, status = 'approved') =>
    t.exec("INSERT INTO question_versions (id, question_id, version_no, qkey, prompt, options, answer, explanation, author, status, created_at) VALUES (?, ?, ?, ?, 'p', ?, ?, '', 'seed', ?, 1)", [id, qid, no, `k${id}`, JSON.stringify(options), answer, status]);
  q('q-mcq', 'mcq'); v(1, 'q-mcq', 1, ['Cape Town', 'Pretoria', 'Durban', 'Gqeberha'], 'Cape Town');
  v(2, 'q-mcq', 2, ['Pretoria', 'Bloemfontein', 'Durban', 'Gqeberha'], 'Pretoria'); // an edit: the options and the answer changed
  q('q-order', 'order'); v(3, 'q-order', 1, ['a', 'b'], 'a');
  return t;
}
const mark = (t: TestDb, a: { versionId: number | null; chosen: string | null; clientCorrect: boolean }) => markAttempt(t.db, a);

test('markMcq: right or wrong from the chosen option; spacing and the 200-character cut do not matter; an option nobody offers is wrong', () => {
  const v = [{ options: ['Cape  Town', 'Pretoria'], answer: 'Cape Town' }];
  assert.deepEqual(markMcq(v, 'Cape Town'), { isCorrect: true, reason: 'matched' });
  assert.deepEqual(markMcq(v, '  Pretoria '), { isCorrect: false, reason: 'matched' });
  assert.deepEqual(markMcq(v, 'Durban'), { isCorrect: false, reason: 'unmatched_choice' });
  const long = 'x'.repeat(300);
  assert.deepEqual(markMcq([{ options: [long, 'y'], answer: long }], long.slice(0, 200)), { isCorrect: true, reason: 'matched' }, 'chosen is stored cut at 200 characters');
  assert.equal(normChoice(' a \n b '), 'a b');
});

test('the server marks a multiple-choice answer and ignores what the browser claims', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  assert.deepEqual(await mark(t, { versionId: 2, chosen: 'Pretoria', clientCorrect: false }), { isCorrect: true, markedBy: 'server', clientCorrect: false, reason: 'matched' }, 'an honest right answer the browser got wrong is right');
  assert.deepEqual(await mark(t, { versionId: 2, chosen: 'Durban', clientCorrect: true }), { isCorrect: false, markedBy: 'server', clientCorrect: true, reason: 'matched' }, 'a tampered claim of "correct" is not believed, and the claim is kept');
  assert.equal((await mark(t, { versionId: 2, chosen: 'Pretoria', clientCorrect: true })).isCorrect, true);
});

test('a multiple-choice answer with no chosen option, or one that is not an option, is never marked right', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  for (const chosen of [null, '', '   ']) assert.deepEqual(await mark(t, { versionId: 2, chosen, clientCorrect: true }), { isCorrect: false, markedBy: 'server', clientCorrect: true, reason: 'no_choice' });
  assert.deepEqual(await mark(t, { versionId: 2, chosen: 'Johannesburg', clientCorrect: true }), { isCorrect: false, markedBy: 'server', clientCorrect: true, reason: 'unmatched_choice' });
});

test('an edit that has reached the database before the code bank does not punish a learner who saw the old version', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  // the learner was shown version 1 (Cape Town is right there), the current version is 2
  assert.equal((await mark(t, { versionId: 2, chosen: 'Cape Town', clientCorrect: true })).isCorrect, true, "the old option is judged by the old version that offers it");
  assert.equal((await mark(t, { versionId: 2, chosen: 'Pretoria', clientCorrect: true })).isCorrect, true, 'and the new answer is right under the new version');
  t.exec("UPDATE question_versions SET status = 'draft' WHERE id = 1");
  assert.equal((await mark(t, { versionId: 2, chosen: 'Cape Town', clientCorrect: true })).isCorrect, false, 'a draft version is not consulted');
});

test('what the server cannot mark keeps the browser\'s value and is flagged: other kinds, questions it does not hold, a failed lookup', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  assert.deepEqual(await mark(t, { versionId: 3, chosen: null, clientCorrect: true }), { isCorrect: true, markedBy: 'client', clientCorrect: true, reason: 'not_mcq' });
  assert.deepEqual(await mark(t, { versionId: null, chosen: null, clientCorrect: true }), { isCorrect: true, markedBy: 'client', clientCorrect: true, reason: 'no_question' });
  assert.deepEqual(await mark(t, { versionId: 999, chosen: 'x', clientCorrect: false }), { isCorrect: false, markedBy: 'client', clientCorrect: false, reason: 'no_question' });
  const broken = { all: async () => { throw new Error('D1 down'); }, batch: async () => undefined };
  assert.deepEqual(await markAttempt(broken, { versionId: 2, chosen: 'x', clientCorrect: true }), { isCorrect: true, markedBy: 'client', clientCorrect: true, reason: 'error' });
});

test('the streak a browser sends can never be higher than the right answers the server has seen in a row', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  const put = (ok: number) => t.exec("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, created_at) VALUES ('s1', 'electric-circuits', 'general', 6, 'nst', 'electric-circuits', ?, 1)", [ok]);
  assert.equal(await verifiedStreak(t.db, 's1', true, 1_000_000), 1, 'no history: only this answer');
  put(0); put(1); put(1); put(1);
  assert.equal(await verifiedStreak(t.db, 's1', true, 1_000_000), 4, 'three right in a row, plus this one');
  assert.equal(await verifiedStreak(t.db, 's1', true, 2), 2, 'the browser may claim less');
  assert.equal(await verifiedStreak(t.db, 's1', false, 50), 0, 'a wrong answer ends the streak');
  assert.equal(await verifiedStreak(t.db, 's1', true, -5), 0);
  assert.equal(await verifiedStreak(t.db, 's1', true, Number.NaN), 0);
  assert.equal(await verifiedStreak({ all: async () => { throw new Error('x'); }, batch: async () => undefined }, 's1', true, 99), 10, 'a failed lookup still caps it');
});

test('migration 0018 adds two nullable columns, and the marking plan inserts into the real attempts table', async (t0) => {
  const sql = fs.readFileSync('migrations/0018_attempt_marking.sql', 'utf8').replace(/--.*$/gm, '');
  assert.deepEqual([...sql.matchAll(/ALTER TABLE (\w+) ADD COLUMN (\w+) (\w+)/g)].map((m) => `${m[1]}.${m[2]} ${m[3]}`), ['attempts.marked_by TEXT', 'attempts.client_correct INTEGER']);
  assert.ok(!/NOT NULL/i.test(sql) && !/\b(DROP|DELETE|UPDATE|INSERT)\b/i.test(sql));
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  const baseCols = ['student_id', 'task', 'item_id', 'section', 'grade', 'subject', 'topic', 'is_correct', 'xp_awarded', 'streak_at', 'created_at', 'qkey'];
  const baseVals = ['s1', 'electric-circuits', null, 'general', 6, 'nst', 'electric-circuits', 0, 2, 0, NOW, 'k'];
  const [cols, vals] = attemptInsertPlans(baseCols, baseVals, { questionVersionId: 2, chosen: 'Durban', runId: null, marking: { markedBy: 'server', clientCorrect: true } })[0];
  t.exec(`INSERT INTO attempts (${cols.join(', ')}) VALUES (${cols.map(() => '?').join(', ')})`, vals);
  const row = (await t.db.all<{ marked_by: string; client_correct: number; is_correct: number }>('SELECT marked_by, client_correct, is_correct FROM attempts WHERE chosen = ?', ['Durban']))[0];
  assert.deepEqual({ ...row }, { marked_by: 'server', client_correct: 1, is_correct: 0 }, 'the server said wrong, the browser said right, both are on record');
});

test('the attempts route uses the server\'s verdict for XP, the review schedule, the XP rows and badges, and tells the browser what it decided', () => {
  const route = fs.readFileSync('src/app/api/attempts/route.ts', 'utf8');
  assert.ok(route.indexOf('markAttempt(') > route.indexOf('identifyAttempt(') && route.indexOf('markAttempt(') < route.indexOf('computeXp('), 'marked after the question is identified, before XP is computed');
  assert.ok(route.includes('const isCorrect = marking.isCorrect;') && route.includes('verifiedStreak('));
  for (const bad of ['computeXp(clientCorrect', 'clientStreak, ', ', clientCorrect ?']) assert.ok(!route.includes(bad), bad);
  const using = route.split('\n').filter((l) => /\bclientCorrect\b/.test(l) && !l.trim().startsWith('//'));
  assert.ok(using.every((l) => /const \{ task|typeof clientCorrect|markAttempt\(|marking: \{ markedBy/.test(l)), `the browser's claim is only read, marked and stored: ${using.join(' | ')}`);
  assert.ok(route.includes('marking: { markedBy: marking.markedBy, clientCorrect: marking.clientCorrect }'));
  assert.ok(route.includes('isCorrect, // the server'));
});

// ---------- run scopes ----------

test('scopeProblem: reviews, tests and exam practice must be scopes the app has; practice may be any topic but not a reserved key', () => {
  assert.equal(scopeProblem('review', REVIEW_SCOPE_KEY, 6, 'review', 12), null);
  assert.ok(scopeProblem('review', 'electric-circuits', 6, 'review', 12));
  assert.equal(scopeProblem('exam_practice', 'nst-terms34-exam', 6, 'nst', 25), null);
  assert.equal(scopeProblem('mock_test', 'nst-term3-mock', 6, 'nst', 20), null);
  assert.equal(scopeProblem('mock_test', 'nst-term4-mock', 6, 'nst', 20), null);
  assert.ok(scopeProblem('mock_test', 'made-up-test', 6, 'nst', 20), 'an unknown test');
  assert.ok(scopeProblem('mock_test', 'nst-term3-mock', 7, 'nst', 20), 'the wrong grade for that test');
  assert.ok(scopeProblem('mock_test', 'nst-term3-mock', 6, 'maths', 20), 'the wrong subject');
  assert.ok(scopeProblem('mock_test', 'nst-term3-mock', 6, 'nst', MIN_EXAM_ITEMS - 1), 'one easy question is not a mock test');
  assert.ok(scopeProblem('exam_practice', 'nst-terms34-exam', 6, 'nst', 0));
  assert.equal(scopeProblem('practice', 'electric-circuits', 6, 'nst', 10), null);
  assert.equal(scopeProblem('quiz', 'solar-system', 6, 'nst', 0), null);
  assert.ok(scopeProblem('practice', 'nst-term3-mock', 6, 'nst', 10), 'practice cannot pose as a mock test');
  assert.ok(scopeProblem('practice', REVIEW_SCOPE_KEY, 6, 'nst', 10), 'or as a review');
});

test('starting a run refuses a made-up test or a one-question mock (400) and still accepts every scope the app really uses', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  const id = (n: number) => `00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;
  const start = (n: number, over: Record<string, unknown>) => startRun(t.db, 's1', { id: id(n), kind: 'practice', grade: 6, subject: 'nst', scopeKey: 'electric-circuits', nItems: 10, ...over }, NOW);
  assert.equal((await start(1, { kind: 'mock_test', scopeKey: 'my-own-mock', nItems: 20 })).ok, false);
  const one = await start(2, { kind: 'mock_test', scopeKey: 'nst-term3-mock', nItems: 1 });
  assert.deepEqual([one.ok, !one.ok && one.status], [false, 400]);
  assert.equal((await start(3, { kind: 'practice', scopeKey: 'nst-term3-mock' })).ok, false);
  for (const [n, over] of [[4, {}], [5, { kind: 'mock_test', scopeKey: 'nst-term3-mock', nItems: 20 }], [6, { kind: 'exam_practice', scopeKey: 'nst-terms34-exam', nItems: 25 }], [7, { kind: 'review', subject: 'review', scopeKey: 'spaced-review', nItems: 12 }]] as [number, Record<string, unknown>][]) {
    assert.equal((await start(n, over)).ok, true, JSON.stringify(over));
  }
  const rows = await t.db.all<{ n: number }>("SELECT COUNT(*) AS n FROM runs");
  assert.equal(rows[0].n, 4, 'refused runs were not stored');
});
