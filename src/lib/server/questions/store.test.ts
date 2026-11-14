import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeQkey } from '../../shared/qkey';
import { registerQuestionSql } from './sql';
import { backfillStatements } from './backfill';
import { createVersion, ensureQuestionForItem, identifyAttempt, resolveCanonicalId, resolveQuestion, setQuestionStatus } from './store';
import { openQuestionsDb } from './testQuestionsDb';
import type { TestD1 } from '../testD1';

function addPoolItem(t: TestD1, task: string, prompt: string, over: Partial<{ options: string; answer: string; section: string }> = {}): number {
  const r = t.raw.prepare('INSERT INTO item_cache (task, prompt, options, answer, explanation, created_at, section) VALUES (?,?,?,?,?,?,?)')
    .run(task, prompt, over.options ?? '["a","b","c"]', over.answer ?? 'a', 'because', 1, over.section ?? 'general');
  return Number(r.lastInsertRowid);
}

const TASK = 'earth-moon-movement';
const P1 = 'Which phase of the Moon do we see when the Moon is between the Earth and the Sun?';
const seedCurated = (t: TestD1, prompt = P1, task = TASK) =>
  t.raw.exec(registerQuestionSql({ task, section: 'general', kind: 'mcq', source: 'curated', prompt, options: ['New moon', 'Full moon'], answer: 'New moon', explanation: 'e', extra: {}, author: 'seed' }).join('\n'));
const fields = (prompt: string) => ({ prompt, options: ['New moon', 'Full moon'], answer: 'New moon', explanation: 'edited' });

test('a registered question gets id = qkey of its prompt, version 1 current, source curated', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seedCurated(t);
  const id = makeQkey(TASK, P1);
  const q = await resolveQuestion(t.db, id);
  assert.ok(q);
  assert.equal(q.id, id);
  assert.equal(q.source, 'curated');
  assert.equal(q.status, 'active');
  assert.equal(q.version.versionNo, 1);
  assert.equal(q.version.qkey, id);
  assert.deepEqual(q.version.options, ['New moon', 'Full moon']);
});

test('registering twice changes nothing, and never undoes an edit', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seedCurated(t);
  const id = makeQkey(TASK, P1);
  const v1 = (await resolveQuestion(t.db, id))!.version.id;
  const edit = await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: fields('Which Moon phase is seen when the Moon is between Earth and Sun?'), author: 'owner', now: 5 });
  assert.ok(edit.ok);
  seedCurated(t); // a re-seed after the edit
  const q = (await resolveQuestion(t.db, id))!;
  assert.equal(q.version.versionNo, 2);
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM questions').get() as { n: number }).n, 1);
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM question_versions').get() as { n: number }).n, 2);
});

test('createVersion keeps the id, adds the next version, and review_items/attempts are untouched', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seedCurated(t);
  const id = makeQkey(TASK, P1);
  t.raw.exec("INSERT INTO students (id, login_code, pin_hash, pin_salt, display_name, real_name, grade, created_at, last_seen_at) VALUES ('s1','C-1','h','s','d','r',6,1,1)");
  t.raw.exec(`INSERT INTO review_items (student_id, qkey, task, subject, box, due_day, streak_correct, created_at, updated_at) VALUES ('s1','${id}','${TASK}','natural-sciences',2,100,1,1,1)`);
  t.raw.exec(`INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, created_at, qkey) VALUES ('s1','${TASK}','g',6,'natural-sciences','t',0,1,'${id}')`);
  const before = JSON.stringify([t.raw.prepare('SELECT * FROM review_items').all(), t.raw.prepare('SELECT * FROM attempts').all()]);

  const v1 = (await resolveQuestion(t.db, id))!.version.id;
  const newPrompt = 'Which Moon phase do we see when the Moon sits between Earth and Sun?';
  const r = await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: fields(newPrompt), author: 'owner', sourceNote: 'typo fix', now: 9 });
  assert.ok(r.ok && r.versionNo === 2 && r.questionId === id);

  const q = (await resolveQuestion(t.db, id))!;
  assert.equal(q.id, id);
  assert.equal(q.version.prompt, newPrompt);
  assert.equal(q.version.explanation, 'edited');
  assert.equal(q.version.sourceNote, 'typo fix');
  assert.equal(q.version.id, (r as { versionId: number }).versionId);
  assert.equal(JSON.stringify([t.raw.prepare('SELECT * FROM review_items').all(), t.raw.prepare('SELECT * FROM attempts').all()]), before);
});

test('qkey keeps working: the original id and the edited prompt both resolve to the same question', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seedCurated(t);
  const id = makeQkey(TASK, P1);
  const v1 = (await resolveQuestion(t.db, id))!.version.id;
  const newPrompt = 'Which Moon phase is seen when the Moon is between the Earth and the Sun?';
  await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: fields(newPrompt), author: 'owner', now: 9 });
  const newKey = makeQkey(TASK, newPrompt);
  assert.notEqual(newKey, id);
  assert.equal(await resolveCanonicalId(t.db, newKey), id);
  assert.equal(await resolveCanonicalId(t.db, id), id);
  assert.equal((await resolveQuestion(t.db, newKey))!.id, id);
  assert.equal(await resolveCanonicalId(t.db, 'ffffffffffff'), null);
  assert.equal(await resolveCanonicalId(t.db, 'not-a-key'), null);
});

test('an edit that only changes options/explanation keeps the same prompt alias', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seedCurated(t);
  const id = makeQkey(TASK, P1);
  const v1 = (await resolveQuestion(t.db, id))!.version.id;
  const r = await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: { ...fields(P1), options: ['New moon', 'Full moon', 'Half moon'] }, author: 'owner', now: 9 });
  assert.ok(r.ok);
  assert.equal(await resolveCanonicalId(t.db, id), id);
  assert.equal((await resolveQuestion(t.db, id))!.version.options.length, 3);
});

test('a stale edit is refused (optimistic check) and a second concurrent edit cannot overwrite the first', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seedCurated(t);
  const id = makeQkey(TASK, P1);
  const v1 = (await resolveQuestion(t.db, id))!.version.id;
  const a = await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: fields('First edit of the Moon question?'), author: 'a', now: 1 });
  const b = await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: fields('Second edit of the Moon question?'), author: 'b', now: 2 });
  assert.ok(a.ok);
  assert.deepEqual(b, { ok: false, reason: 'stale' });
  assert.equal((await resolveQuestion(t.db, id))!.version.prompt, 'First edit of the Moon question?');
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM question_versions').get() as { n: number }).n, 2);
});

test('an edit whose new wording hashes to ANOTHER question is refused', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seedCurated(t);
  const other = 'Why does the Moon have phases?';
  seedCurated(t, other);
  const id = makeQkey(TASK, P1);
  const v1 = (await resolveQuestion(t.db, id))!.version.id;
  assert.deepEqual(await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: fields(other), author: 'o', now: 1 }), { ok: false, reason: 'qkey_collision' });
  // case/spacing differences hash the same, so they collide too
  assert.deepEqual(await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: fields('  WHY does the moon   have phases? '), author: 'o', now: 1 }), { ok: false, reason: 'qkey_collision' });
  assert.equal((await resolveQuestion(t.db, id))!.version.versionNo, 1);
});

test('createVersion rejects unknown, retired and invalid input; retire/reinstate works and history stays resolvable', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seedCurated(t);
  const id = makeQkey(TASK, P1);
  const v1 = (await resolveQuestion(t.db, id))!.version.id;
  assert.deepEqual(await createVersion(t.db, { questionId: 'aaaaaaaaaaaa', expectedVersionId: 1, fields: fields('x'), author: 'o', now: 1 }), { ok: false, reason: 'not_found' });
  assert.deepEqual(await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: { ...fields('x'), prompt: '  ' }, author: 'o', now: 1 }), { ok: false, reason: 'invalid' });
  assert.equal(await setQuestionStatus(t.db, id, 'retired', 5), true);
  assert.equal(await setQuestionStatus(t.db, id, 'retired', 6), false);
  assert.deepEqual(await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: fields('New wording?'), author: 'o', now: 1 }), { ok: false, reason: 'retired' });
  assert.equal((await resolveQuestion(t.db, id))!.status, 'retired');
  assert.equal(await setQuestionStatus(t.db, id, 'active', 7), true);
  assert.ok((await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: fields('New wording?'), author: 'o', now: 1 })).ok);
});

test('a failed insert in the batch rolls back, leaving the pointer on the old version', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seedCurated(t);
  const id = makeQkey(TASK, P1);
  const v1 = (await resolveQuestion(t.db, id))!.version.id;
  // Pre-plant version 2 so the next insert violates UNIQUE (question_id, version_no).
  t.raw.exec(`INSERT INTO question_versions (question_id, version_no, qkey, prompt, options, answer, author, created_at) VALUES ('${id}', 2, 'bbbbbbbbbbbb', 'x', '[]', 'x', 'z', 1)`);
  assert.deepEqual(await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: fields('Another wording?'), author: 'o', now: 1 }), { ok: false, reason: 'stale' });
  assert.equal((await resolveQuestion(t.db, id))!.version.id, v1);
});

test('a pool row is registered lazily with id = qkey, linked by legacy_item_id, and registering again is a no-op', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const itemId = addPoolItem(t, 'mains-electricity', 'What does a fuse do?', { section: 'safety' });
  const id = await ensureQuestionForItem(t.db, 'mains-electricity', itemId, 1);
  assert.equal(id, makeQkey('mains-electricity', 'What does a fuse do?'));
  const q = (await resolveQuestion(t.db, id!))!;
  assert.equal(q.source, 'ai');
  assert.equal(q.legacyItemId, itemId);
  assert.equal(q.section, 'safety');
  assert.equal(await ensureQuestionForItem(t.db, 'mains-electricity', itemId, 2), id);
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM question_versions').get() as { n: number }).n, 1);
  assert.equal(await ensureQuestionForItem(t.db, 'wrong-task', itemId, 1), null);
  assert.equal(await ensureQuestionForItem(t.db, 'mains-electricity', 9999, 1), null);
});

test('a pool row identical to a curated question joins it (same id) instead of duplicating it', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seedCurated(t);
  const itemId = addPoolItem(t, TASK, P1);
  const id = await ensureQuestionForItem(t.db, TASK, itemId, 1);
  assert.equal(id, makeQkey(TASK, P1));
  const q = (await resolveQuestion(t.db, id!))!;
  assert.equal(q.source, 'curated');
  assert.equal(q.legacyItemId, itemId);
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM questions').get() as { n: number }).n, 1);
});

test('backfill: registers every valid pool row with the same ids, skips bad JSON, and is idempotent', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const a = addPoolItem(t, 'task-a', 'First?');
  addPoolItem(t, 'task-a', 'Broken options?', { options: 'not json' });
  const c = addPoolItem(t, 'task-b', "It's a quote? O'Neil");
  const rows = t.raw.prepare('SELECT id, task, prompt, options, answer, explanation, section FROM item_cache ORDER BY id').all() as never;
  const plan = backfillStatements(rows);
  assert.equal(plan.registered, 2);
  assert.equal(plan.skipped.length, 1);
  const run = () => t.raw.exec(plan.statements.join('\n'));
  run(); run();
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM questions').get() as { n: number }).n, 2);
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM question_versions').get() as { n: number }).n, 2);
  assert.equal((await resolveQuestion(t.db, makeQkey('task-a', 'First?')))!.legacyItemId, a);
  assert.equal((await resolveQuestion(t.db, makeQkey('task-b', "It's a quote? O'Neil")))!.legacyItemId, c);
  assert.equal((await resolveQuestion(t.db, makeQkey('task-b', "It's a quote? O'Neil")))!.version.prompt, "It's a quote? O'Neil");
});

test('identifyAttempt: canonical id for the original and an edited qkey, the current version, client version only if it belongs', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seedCurated(t);
  seedCurated(t, 'A different question?');
  const id = makeQkey(TASK, P1);
  const v1 = (await resolveQuestion(t.db, id))!.version.id;
  const other = (await resolveQuestion(t.db, makeQkey(TASK, 'A different question?')))!.version.id;
  const newPrompt = 'Which Moon phase is seen when the Moon is between Earth and the Sun?';
  const e = await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: fields(newPrompt), author: 'o', now: 3 });
  const v2 = (e as { versionId: number }).versionId;

  assert.deepEqual(await identifyAttempt(t.db, { task: TASK, qkey: id, now: 1 }), { qkey: id, versionId: v2 });
  assert.deepEqual(await identifyAttempt(t.db, { task: TASK, qkey: makeQkey(TASK, newPrompt), now: 1 }), { qkey: id, versionId: v2 });
  assert.deepEqual(await identifyAttempt(t.db, { task: TASK, qkey: id, clientVersionId: v1, now: 1 }), { qkey: id, versionId: v1 });
  assert.deepEqual(await identifyAttempt(t.db, { task: TASK, qkey: id, clientVersionId: other, now: 1 }), { qkey: id, versionId: v2 }, 'a version of another question is ignored');
  assert.deepEqual(await identifyAttempt(t.db, { task: TASK, qkey: 'ffffffffffff', now: 1 }), { qkey: 'ffffffffffff', versionId: null });
  assert.deepEqual(await identifyAttempt(t.db, { task: TASK, qkey: null, now: 1 }), { qkey: null, versionId: null });
});

test('identifyAttempt registers a pool item on the fly and returns its qkey and version', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const itemId = addPoolItem(t, 'mains-electricity', 'What is a conductor?');
  const r = await identifyAttempt(t.db, { task: 'mains-electricity', qkey: null, itemId, now: 1 });
  assert.equal(r.qkey, makeQkey('mains-electricity', 'What is a conductor?'));
  assert.ok(r.versionId);
});

test('0008 is additive: attempts.question_version_id is nullable and old rows keep NULL', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  t.raw.exec("INSERT INTO students (id, login_code, pin_hash, pin_salt, display_name, real_name, grade, created_at, last_seen_at) VALUES ('s1','C-1','h','s','d','r',6,1,1)");
  t.raw.exec("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, created_at) VALUES ('s1','t','g',6,'nst','t',1,1)");
  assert.equal((t.raw.prepare('SELECT question_version_id AS v FROM attempts').get() as { v: number | null }).v, null);
});
