import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeQkey } from '../../shared/qkey';
import { pointBiserial } from '../../shared/itemAnalysis';
import { registerQuestionSql } from './sql';
import { createVersion, resolveQuestion, setQuestionStatus } from './store';
import { computeItemFlags, refreshItemFlags } from './itemAnalysis';
import { dismissQuestion, reportQueue, retireQuestion } from './moderation';
import { adminDbOf, openQuestionsDb } from './testQuestionsDb';
import type { TestD1 } from '../testD1';

const TASK = 'earth-moon-movement';
const plain = <T>(x: T): T => JSON.parse(JSON.stringify(x)) as T;
const seed = (t: TestD1, prompt: string, answer = 'A') =>
  t.raw.exec(registerQuestionSql({ task: TASK, section: 'general', kind: 'mcq', source: 'curated', prompt, options: ['A', 'B', 'C'], answer, explanation: '', extra: {}, author: 'seed' }).join('\n'));
const learner = (t: TestD1, id: string, correct: number, total: number) => {
  t.raw.prepare("INSERT INTO students (id, login_code, pin_hash, pin_salt, display_name, real_name, grade, created_at, last_seen_at) VALUES (?,?,'h','s','d','r',6,1,1)").run(id, `C-${id}`);
  t.raw.prepare("INSERT INTO student_xp (student_id, scope, xp, correct_count, total_count, updated_at) VALUES (?, 'overall', 0, ?, ?, 1)").run(id, correct, total);
};
const answer = (t: TestD1, student: string, versionId: number, correct: number, chosen: string | null = null, qkey = 'x') =>
  t.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, created_at, qkey, question_version_id, chosen) VALUES (?, ?, 'g', 6, 'nst', 't', ?, 1, ?, ?, ?)").run(student, TASK, correct, qkey, versionId, chosen);
const versionOf = async (t: TestD1, prompt: string) => (await resolveQuestion(t.db, makeQkey(TASK, prompt)))!.version.id;

/** 40 learners with overall accuracy 0.3 + i/100; each answers the question once. `rightFor(i)` decides who gets it right. */
async function populate(t: TestD1, prompt: string, rightFor: (i: number) => boolean, chosenFor?: (i: number, right: boolean) => string) {
  const v = await versionOf(t, prompt);
  for (let i = 0; i < 40; i++) {
    const id = `${prompt.slice(0, 3)}-${i}`;
    learner(t, id, 30 + i, 100);
    const right = rightFor(i);
    answer(t, id, v, right ? 1 : 0, chosenFor ? chosenFor(i, right) : null);
  }
  return v;
}

test('SQL aggregates give the same point-biserial as a direct computation, and flag a wrong-key pattern', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Wrong-key question?');
  const v = await populate(t, 'Wrong-key question?', (i) => i < 20); // the weakest 20 get it right, the strongest 20 wrong
  const flags = await computeItemFlags(adminDbOf(t));
  const f = flags.find((x) => x.kind === 'negative_discrimination')!;
  assert.ok(f, 'flagged');
  assert.equal(f.versionId, v);
  assert.equal(f.questionId, makeQkey(TASK, 'Wrong-key question?'));
  // direct: X = (overall correct - this answer) / (total - 1)
  const xs = Array.from({ length: 40 }, (_, i) => ({ x: (30 + i - (i < 20 ? 1 : 0)) / 99, c: i < 20 ? 1 : 0 }));
  const sumX = xs.reduce((s, r) => s + r.x, 0), sumXX = xs.reduce((s, r) => s + r.x * r.x, 0), sumX1 = xs.filter((r) => r.c).reduce((s, r) => s + r.x, 0);
  const direct = pointBiserial({ n: 40, k: 20, nx: 40, kx: 20, sumX, sumXX, sumX1 })!;
  assert.ok(Math.abs(f.value - Math.round(direct * 1000) / 1000) < 1e-9, `${f.value} vs ${direct}`);
  assert.ok(f.value < 0);
});

test('a healthy question (stronger learners get it right) gets no flag; fewer than 30 answers is never analysed', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Healthy question?');
  await populate(t, 'Healthy question?', (i) => i >= 18);
  seed(t, 'Small sample?');
  const v = await versionOf(t, 'Small sample?');
  for (let i = 0; i < 20; i++) { learner(t, `sm-${i}`, 50, 100); answer(t, `sm-${i}`, v, 1); }
  assert.deepEqual(await computeItemFlags(adminDbOf(t)), []);
});

test('too easy and too hard come from the p-value; learners with under 10 answers do not count towards discrimination', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Easy one?'); seed(t, 'Hard one?');
  await populate(t, 'Easy one?', (i) => i !== 5);          // 39/40 right
  await populate(t, 'Hard one?', (i) => i === 3 || i === 9); // 2/40 right
  const kinds = (await computeItemFlags(adminDbOf(t))).map((f) => `${f.kind}`).sort();
  assert.ok(kinds.includes('too_easy'));
  assert.ok(kinds.includes('too_hard'));

  const t2 = await openQuestionsDb(); if (!t2) return;
  seed(t2, 'Newbies?');
  const v = await versionOf(t2, 'Newbies?');
  for (let i = 0; i < 40; i++) { learner(t2, `nb-${i}`, i < 20 ? 3 : 4, 5); answer(t2, `nb-${i}`, v, i < 20 ? 0 : 1); } // totals under 10
  assert.deepEqual(await computeItemFlags(adminDbOf(t2)), [], 'no ability measure, no discrimination flag');
});

test('distractor flag uses the recorded choices and the current key', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Tricky question?');
  await populate(t, 'Tricky question?', (i) => i % 3 === 0, (i, right) => (right ? 'A' : i % 2 ? 'B' : 'B'));
  const f = (await computeItemFlags(adminDbOf(t))).find((x) => x.kind === 'distractor')!;
  assert.ok(f);
  assert.equal(f.detail!.option, 'B');
  assert.ok((f.detail!.picks as number) > (f.detail!.keyPicks as number));
});

test('refresh writes flags once, keeps a dismissed flag dismissed, removes flags that no longer apply, and is idempotent', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Wrong-key question?');
  const v = await populate(t, 'Wrong-key question?', (i) => i < 20);
  const db = adminDbOf(t);
  const id = makeQkey(TASK, 'Wrong-key question?');
  const r1 = await refreshItemFlags(db, 1000);
  assert.ok(r1.flags >= 1);
  await refreshItemFlags(db, 2000);
  const rows = () => plain(t.raw.prepare('SELECT kind, status, computed_at, version_id FROM question_flags ORDER BY kind').all() as { kind: string; status: string; computed_at: number; version_id: number }[]);
  assert.equal(rows().length, r1.flags, 'no duplicates');
  assert.ok(rows().every((r) => r.computed_at === 2000 && r.version_id === v));

  // admin dismisses: flags stay dismissed across the next run
  assert.deepEqual(await dismissQuestion(db, id, 'looked at it, key is right', 'a@x.org', 3000), { ok: true });
  await refreshItemFlags(db, 4000);
  assert.ok(rows().every((r) => r.status === 'dismissed'));

  // data changes so the flag no longer applies: an OPEN flag disappears
  t.raw.exec("UPDATE question_flags SET status = 'open'");
  t.raw.exec(`UPDATE attempts SET is_correct = CASE WHEN rowid % 2 = 0 THEN 1 ELSE 0 END WHERE question_version_id = ${v}`);
  await refreshItemFlags(db, 5000);
  assert.ok(!rows().some((r) => r.kind === 'negative_discrimination' && r.computed_at < 5000), 'stale open flag removed');
});

test('statistics are per version: an edit starts afresh, and a retired question is not analysed', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Wrong-key question?');
  const v1 = await populate(t, 'Wrong-key question?', (i) => i < 20);
  const db = adminDbOf(t);
  const id = makeQkey(TASK, 'Wrong-key question?');
  assert.ok((await computeItemFlags(db)).length >= 1);
  const e = await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: { prompt: 'Wrong-key question, fixed?', options: ['A', 'B', 'C'], answer: 'B' }, author: 'o', now: 5 });
  assert.ok(e.ok);
  assert.deepEqual(await computeItemFlags(db), [], 'the new version has no answers yet');
  await refreshItemFlags(db, 6000);
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM question_flags WHERE status = \'open\'').get() as { n: number }).n, 0, 'old version flags cleared');

  const t2 = await openQuestionsDb(); if (!t2) return;
  seed(t2, 'Retired one?');
  await populate(t2, 'Retired one?', (i) => i < 20);
  await setQuestionStatus(t2.db, makeQkey(TASK, 'Retired one?'), 'retired', 1);
  assert.deepEqual(await computeItemFlags(adminDbOf(t2)), []);
});

test('flags appear in the queue with no learner report, rank after reported questions, and dismiss/retire close them', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Wrong-key question?');
  await populate(t, 'Wrong-key question?', (i) => i < 20);
  seed(t, 'Reported question?');
  t.raw.prepare("INSERT INTO question_reports (question_id, version_id, task, student_id, reason, status, created_at) VALUES (?, NULL, ?, 'zz', 'typo', 'open', 5)").run(makeQkey(TASK, 'Reported question?'), TASK);
  const db = adminDbOf(t);
  await refreshItemFlags(db, 1000);
  const q = await reportQueue(db);
  assert.deepEqual(q.map((x) => x.current?.prompt), ['Reported question?', 'Wrong-key question?']);
  const flagged = q[1];
  assert.equal(flagged.reports, 0);
  assert.equal(flagged.reporters, 0);
  assert.ok(flagged.flags.some((f) => f.kind === 'negative_discrimination'));
  assert.equal(flagged.stats.answers, 0, 'attempts here were stored under a different qkey, answers come from attempts.qkey');

  const id = makeQkey(TASK, 'Wrong-key question?');
  assert.deepEqual(await retireQuestion(db, id, 'wrong key confirmed', 'a@x.org', 2000), { ok: true });
  assert.equal((t.raw.prepare("SELECT COUNT(*) AS n FROM question_flags WHERE status = 'resolved'").get() as { n: number }).n >= 1, true);
  assert.equal((await reportQueue(db)).length, 1);
});

test('a flags-only question can be dismissed (no report needed)', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Wrong-key question?');
  await populate(t, 'Wrong-key question?', (i) => i < 20);
  const db = adminDbOf(t);
  await refreshItemFlags(db, 1000);
  const id = makeQkey(TASK, 'Wrong-key question?');
  assert.deepEqual(await dismissQuestion(db, id, 'key verified against CAPS', 'a@x.org', 2000), { ok: true });
  assert.equal((await reportQueue(db)).length, 0);
  assert.equal((await dismissQuestion(db, id, 'again again', 'a@x.org', 3000)).ok, false, 'nothing left open');
});
