import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeQkey } from '../../shared/qkey';
import { registerQuestionSql } from './sql';
import { submitReport } from './reports';
import { createVersion, resolveQuestion } from './store';
import { promptKey } from '../../shared/retiredKey';
import { dismissQuestion, recentActions, reinstateQuestion, reportQueue, retireQuestion, retiredPromptKeys } from './moderation';
import { fetchPoolItems } from '../poolStore';
import { deleteLearner } from '../admin/learners';
import { openTestDb } from '../admin/testdb';
import { adminDbOf, openQuestionsDb } from './testQuestionsDb';
import type { TestD1 } from '../testD1';

const plain = <T>(x: T): T => JSON.parse(JSON.stringify(x)) as T;
const TASK = 'earth-moon-movement';
const mk = (prompt: string) => makeQkey(TASK, prompt);
const seed = (t: TestD1, prompt: string, task = TASK) =>
  t.raw.exec(registerQuestionSql({ task, section: 'general', kind: 'mcq', source: 'curated', prompt, options: ['A', 'B'], answer: 'A', explanation: 'because', extra: {}, author: 'seed' }).join('\n'));
const report = (t: TestD1, student: string, prompt: string, reason: 'wrong_answer' | 'typo' | 'confusing' = 'wrong_answer', over: { note?: string | null; task?: string } = {}, at = 1000) =>
  submitReport(t.db, student, { task: over.task ?? TASK, reason, note: over.note ?? null, qkey: makeQkey(over.task ?? TASK, prompt), itemId: null, promptSnapshot: prompt }, at);
const addAttempts = (t: TestD1, qkey: string, correct: number, wrong: number) => {
  t.raw.exec("INSERT OR IGNORE INTO students (id, login_code, pin_hash, pin_salt, display_name, real_name, grade, created_at, last_seen_at) VALUES ('a1','A-1','h','s','d','r',6,1,1)");
  for (let i = 0; i < correct + wrong; i++) t.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, created_at, qkey) VALUES ('a1', ?, 'g', 6, 'nst', 't', ?, 1, ?)").run(TASK, i < correct ? 1 : 0, qkey);
};
const poolItem = (t: TestD1, task: string, prompt: string, score: number | null = 90, flags = '["x"]') =>
  Number(t.raw.prepare('INSERT INTO item_cache (task, prompt, options, answer, explanation, created_at, section, quality_score, quality_flags) VALUES (?,?,?,?,?,?,?,?,?)').run(task, prompt, '["a","b"]', 'a', '', 1, 'general', score, flags).lastInsertRowid);

test('queue groups open reports by question and ranks by distinct reporters, then attempts, then newest', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  for (const p of ['Q one?', 'Q two?', 'Q three?']) seed(t, p);
  await report(t, 's1', 'Q one?', 'wrong_answer', { note: 'key looks wrong' }, 100);
  await report(t, 's1', 'Q one?', 'typo', {}, 110);          // same learner twice: 1 reporter, 2 reports
  await report(t, 's1', 'Q two?', 'wrong_answer', {}, 120);
  await report(t, 's2', 'Q two?', 'confusing', { note: 'what does it mean' }, 130);
  await report(t, 's3', 'Q three?', 'wrong_answer', {}, 140);
  addAttempts(t, mk('Q three?'), 8, 2); // more reach than Q one
  addAttempts(t, mk('Q one?'), 1, 3);
  const q = await reportQueue(adminDbOf(t));
  assert.deepEqual(q.map((x) => x.current?.prompt), ['Q two?', 'Q three?', 'Q one?']);
  const one = q[2];
  assert.equal(one.reporters, 1);
  assert.equal(one.reports, 2);
  assert.equal(one.reasons.wrong_answer, 1);
  assert.equal(one.reasons.typo, 1);
  assert.deepEqual(one.notes.map((n) => n.note), ['key looks wrong']);
  assert.deepEqual(one.stats, { answers: 4, correct: 1, pctCorrect: 25 });
  assert.equal(q[1].stats.pctCorrect, 80);
  assert.equal(q[0].stats.pctCorrect, null);
  assert.equal(one.current!.answer, 'A');
  assert.deepEqual(one.current!.options, ['A', 'B']);
  assert.equal(one.current!.explanation, 'because');
  assert.equal(one.status, 'active');
  // never exposes who reported
  assert.ok(!JSON.stringify(q).includes('s1'));
});

test('an unregistered question appears with its unverified snapshot and no current version', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  await report(t, 's1', 'What is 2+2?', 'wrong_answer', { task: 'g9-task' });
  const [item] = await reportQueue(adminDbOf(t));
  assert.equal(item.registered, false);
  assert.equal(item.status, 'unregistered');
  assert.equal(item.current, null);
  assert.equal(item.promptSnapshot, 'What is 2+2?');
});

test('dismiss closes the open reports with a logged reason; a later report re-opens the question', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Q one?');
  await report(t, 's1', 'Q one?');
  const db = adminDbOf(t);
  const id = mk('Q one?');
  assert.deepEqual(await dismissQuestion(db, id, 'x', 'admin@example.org', 5), { ok: false, status: 400, error: 'Give a reason (3-300 characters)' });
  assert.deepEqual(await dismissQuestion(db, 'nothex', 'because', 'admin@example.org', 5), { ok: false, status: 404, error: 'Not found' });
  assert.deepEqual(await dismissQuestion(db, id, 'The key is correct (CAPS p.12)', 'admin@example.org', 5), { ok: true });
  assert.equal((await reportQueue(db)).length, 0);
  assert.equal((await dismissQuestion(db, id, 'again please', 'admin@example.org', 6)).ok, false, 'nothing left to dismiss');
  const log = t.raw.prepare('SELECT action, reason, admin_email FROM question_moderation').all();
  assert.deepEqual(plain(log), [{ action: 'dismiss', reason: 'The key is correct (CAPS p.12)', admin_email: 'admin@example.org' }]);
  await report(t, 's2', 'Q one?', 'wrong_answer', {}, 9000);
  assert.equal((await reportQueue(db)).length, 1);
});

test('retiring an AI pool question sets status retired, quality_score 0 with a retired flag, closes reports, and the pool stops serving it', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const keep = poolItem(t, 'mains-electricity', 'Good question?', 95, '[]');
  const bad = poolItem(t, 'mains-electricity', 'Bad question?', 85, '["short"]');
  await submitReport(t.db, 's1', { task: 'mains-electricity', reason: 'wrong_answer', note: null, qkey: null, itemId: bad, promptSnapshot: null }, 100);
  const id = makeQkey('mains-electricity', 'Bad question?');
  assert.equal((await fetchPoolItems(t.db, 'mains-electricity', 10)).length, 2);

  assert.deepEqual(await retireQuestion(adminDbOf(t), id, 'wrong key, CAPS says otherwise', 'admin@example.org', 500), { ok: true });

  assert.deepEqual((await fetchPoolItems(t.db, 'mains-electricity', 10)).map((i) => i.id), [keep]);
  const row = t.raw.prepare('SELECT quality_score, quality_flags FROM item_cache WHERE id = ?').get(bad) as { quality_score: number; quality_flags: string };
  assert.equal(row.quality_score, 0);
  assert.deepEqual(JSON.parse(row.quality_flags), ['retired', 'short']);
  assert.equal((await resolveQuestion(t.db, id))!.status, 'retired');
  assert.equal((await reportQueue(adminDbOf(t))).length, 0);
  assert.equal((t.raw.prepare("SELECT status FROM question_reports").get() as { status: string }).status, 'actioned');
  assert.deepEqual(await retireQuestion(adminDbOf(t), id, 'twice', 'admin@example.org', 600), { ok: false, status: 409, error: 'Already retired' });
});

test('reinstate restores the exact score and flags the pool row had, and the question is served again', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const bad = poolItem(t, 'mains-electricity', 'Bad question?', 85, '["short"]');
  const none = poolItem(t, 'mains-electricity', 'Unscored question?', null, null as unknown as string);
  const db = adminDbOf(t);
  for (const item of [bad, none]) {
    await submitReport(t.db, 's1', { task: 'mains-electricity', reason: 'typo', note: null, qkey: null, itemId: item, promptSnapshot: null }, 100);
  }
  const ids = [makeQkey('mains-electricity', 'Bad question?'), makeQkey('mains-electricity', 'Unscored question?')];
  for (const id of ids) assert.ok((await retireQuestion(db, id, 'retire it', 'a@x.org', 1)).ok);
  assert.equal((await fetchPoolItems(t.db, 'mains-electricity', 10)).length, 0);
  for (const id of ids) assert.ok((await reinstateQuestion(db, id, 'checked, fine', 'a@x.org', 2)).ok);
  const a = t.raw.prepare('SELECT quality_score s, quality_flags f FROM item_cache WHERE id = ?').get(bad) as { s: number | null; f: string | null };
  const b = t.raw.prepare('SELECT quality_score s, quality_flags f FROM item_cache WHERE id = ?').get(none) as { s: number | null; f: string | null };
  assert.deepEqual(plain(a), { s: 85, f: '["short"]' });
  assert.deepEqual(plain(b), { s: null, f: null });
  assert.equal((await fetchPoolItems(t.db, 'mains-electricity', 10)).length, 2);
  assert.deepEqual(await reinstateQuestion(db, ids[0], 'again', 'a@x.org', 3), { ok: false, status: 409, error: 'Not retired' });
});

test('retiring a curated question only changes its status; an unregistered one cannot be retired; the retired list includes alias keys', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Curated Q?');
  const db = adminDbOf(t);
  const id = mk('Curated Q?');
  const v1 = (await resolveQuestion(t.db, id))!.version.id;
  const newPrompt = 'Curated Q, reworded?';
  assert.ok((await createVersion(t.db, { questionId: id, expectedVersionId: v1, fields: { prompt: newPrompt, options: ['A', 'B'], answer: 'A' }, author: 'o', now: 1 })).ok);
  assert.deepEqual(await retiredPromptKeys(db), []);
  assert.ok((await retireQuestion(db, id, 'out of syllabus', 'a@x.org', 1)).ok);
  assert.deepEqual(await retiredPromptKeys(db), [promptKey('Curated Q?'), promptKey(newPrompt)].sort());
  assert.equal((await retireQuestion(db, 'abcdefabcdef', 'nope', 'a@x.org', 1)).ok, false);
  assert.ok((await reinstateQuestion(db, id, 'restore', 'a@x.org', 2)).ok);
  assert.deepEqual(await retiredPromptKeys(db), []);
});

test('recentActions lists decisions newest first and only the live retire can be reinstated', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Curated Q?');
  const db = adminDbOf(t);
  const id = mk('Curated Q?');
  await report(t, 's1', 'Curated Q?');
  await retireQuestion(db, id, 'retire it', 'a@x.org', 1);
  let r = await recentActions(db);
  assert.equal(r[0].action, 'retire');
  assert.equal(r[0].canReinstate, true);
  assert.equal(r[0].prompt, 'Curated Q?');
  await reinstateQuestion(db, id, 'back', 'a@x.org', 2);
  r = await recentActions(db);
  assert.deepEqual(r.map((x) => [x.action, x.canReinstate]), [['reinstate', false], ['retire', false]]);
});

test('deleting a learner removes their reports (a child\'s notes) and counts them in the audit row', async (t0) => {
  const t = await openTestDb(); if (!t) return t0.skip('node:sqlite unavailable');
  t.exec("INSERT INTO students (id, login_code, pin_hash, pin_salt, display_name, real_name, grade, created_at, last_seen_at) VALUES ('kid1','K-1','h','s','Sunny','Real Name',6,1,1)");
  t.exec("INSERT INTO question_reports (question_id, task, student_id, reason, note, status, created_at) VALUES ('aaaaaaaaaaaa','t','kid1','other','my private note','open',1)");
  t.exec("INSERT INTO question_reports (question_id, task, student_id, reason, status, created_at) VALUES ('aaaaaaaaaaaa','t','kid2','other','open',1)");
  const r = await deleteLearner(t.db, 'kid1', 'Sunny', 'admin@example.org', 99);
  assert.ok(r.ok);
  assert.equal((r as { deleted: { reports: number } }).deleted.reports, 1);
  const left = await t.db.all<{ student_id: string }>('SELECT student_id FROM question_reports');
  assert.deepEqual(plain(left), [{ student_id: 'kid2' }]);
  const audit = await t.db.all<{ meta: string }>("SELECT meta FROM events WHERE type = 'admin_delete'");
  assert.equal(JSON.parse(audit[0].meta).rows.reports, 1);
  assert.ok(!audit[0].meta.includes('private note'));
});
