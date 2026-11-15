import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeQkey } from '../../shared/qkey';
import { registerQuestionSql } from '../questions/sql';
import { adminDbOf, openQuestionsDb } from '../questions/testQuestionsDb';
import type { TestD1 } from '../testD1';
import type { AdminDb } from '../admin/db';
import fs from 'node:fs';
import { hashToken } from './reviewerLink';
import { closePack, createPack, decideItem, findCandidates, inviteReviewer, listPacks, packResults, revokeReviewer } from './adminStore';

const EMAIL = 'owner@example.org';
const AFR = 'begripstoets';
const MATHS = 'gr6-area-perimeter-t3';
const P1 = 'Watter woord beteken die oggend?';
const OPTS = ['oggend', 'aand', 'gister', 'nou'];

const seed = (t: TestD1, task: string, prompt: string, answer = 'oggend') =>
  t.raw.exec(registerQuestionSql({ task, section: 'general', kind: 'mcq', source: 'curated', prompt, options: OPTS, answer, explanation: 'Oggend is die oggend.', extra: {}, author: 'seed' }).join('\n'));
const qid = (task: string, prompt: string) => makeQkey(task, prompt);

async function setup(): Promise<{ t: TestD1; db: AdminDb } | null> {
  const t = await openQuestionsDb();
  if (!t) return null;
  t.raw.exec(fs.readFileSync('migrations/0012_review.sql', 'utf8'));
  seed(t, AFR, P1);
  seed(t, AFR, 'Watter woord beteken die aand?', 'aand');
  seed(t, MATHS, 'What is the area of a 3 by 4 rectangle?', 'oggend');
  return { t, db: adminDbOf(t) };
}
const respond = (t: TestD1, reviewer: number, item: number, verdict: string, proposal: unknown = null, reason = '') =>
  t.raw.prepare('INSERT INTO review_responses (reviewer_id, item_id, verdict, proposal, confidence, reason, updated_at) VALUES (?, ?, ?, ?, ?, ?, 1)').run(reviewer, item, verdict, proposal ? JSON.stringify(proposal) : null, 'sure', reason);

test('findCandidates filters by subject, grade, language and ids, and only returns active multiple-choice questions', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  assert.equal((await findCandidates(s.db, {})).length, 3);
  assert.deepEqual((await findCandidates(s.db, { language: 'afrikaans' })).map((c) => c.task), [AFR, AFR]);
  assert.equal((await findCandidates(s.db, { subject: 'math', grade: 6 })).length, 1);
  assert.equal((await findCandidates(s.db, { grade: 7 })).length, 0);
  assert.equal((await findCandidates(s.db, { ids: [qid(AFR, P1), 'zzzz'] })).length, 1);
  assert.equal((await findCandidates(s.db, { ids: ['not-an-id'] })).length, 0);
  s.t.raw.prepare("UPDATE questions SET status = 'retired' WHERE id = ?").run(qid(AFR, P1));
  assert.equal((await findCandidates(s.db, { language: 'afrikaans' })).length, 1);
});

test('createPack validates its input and stores the current version of each question', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const bad = async (items: unknown, title: unknown = 'Afrikaans G6') => (await createPack(s.db, { title, items }, EMAIL, 1)) as { ok: false; error: string };
  assert.match((await bad([{ kind: 'question', questionId: qid(AFR, P1) }], 'x')).error, /title/);
  assert.match((await bad([])).error, /at least one/);
  assert.match((await bad([{ kind: 'question', questionId: 'abc' }])).error, /question id/);
  assert.match((await bad([{ kind: 'question', questionId: '0'.repeat(12) }])).error, /not an active/);
  assert.match((await bad([{ kind: 'question', questionId: qid(AFR, P1) }, { kind: 'question', questionId: qid(AFR, P1) }])).error, /twice/);
  assert.match((await bad([{ kind: 'lesson_line', file: '../x.ts', anchorText: 'Some lesson line' }])).error, /file path/);
  assert.match((await bad([{ kind: 'lesson_line', file: 'grade6/a.data.ts', anchorText: 'short' }])).error, /6 to 600/);
  assert.match((await bad(Array.from({ length: 61 }, () => ({ kind: 'question', questionId: qid(AFR, P1) })))).error, /at most 60/);

  const r = await createPack(s.db, { title: 'Afrikaans G6', items: [
    { kind: 'question', questionId: qid(AFR, P1), doubt: 'is oggend right?' },
    { kind: 'lesson_line', file: 'grade6/afrikaans/term2/begripstoets/Begripstoets.tsx', anchorText: 'Ek staan om sewe-uur op.', context: { slide: 'Tyd' }, doubt: 'hyphen?' },
  ] }, EMAIL, 5);
  assert.deepEqual(r.ok && [r.items], [2]);
  const list = await listPacks(s.db);
  assert.deepEqual(list.map((p) => [p.title, p.items, p.reviewers, p.decided]), [['Afrikaans G6', 2, 0, 0]]);
  const res = await packResults(s.db, r.ok ? r.packId : 0);
  assert.equal(res?.items[0].question?.prompt, P1);
  assert.equal(res?.items[1].anchorText, 'Ek staan om sewe-uur op.');
});

test('inviting stores only the hash of the token; revoking marks the reviewer; a closed pack cannot invite', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const p = await createPack(s.db, { title: 'Pack', items: [{ kind: 'question', questionId: qid(AFR, P1) }] }, EMAIL, 5);
  const packId = p.ok ? p.packId : 0;
  const bad = await inviteReviewer(s.db, packId, { displayName: '  ' });
  assert.equal(bad.ok, false);
  assert.equal((await inviteReviewer(s.db, packId, { displayName: 'Ms N.', days: 0 })).ok, false);
  const inv = await inviteReviewer(s.db, packId, { displayName: 'Ms N.', note: 'phone 082...' }, 1000);
  assert.ok(inv.ok);
  if (!inv.ok) return;
  assert.equal(inv.token.length, 43);
  assert.equal(inv.expiresAt, 1000 + 14 * 86_400_000);
  const row = s.t.raw.prepare('SELECT token_hash, display_name, contact_note FROM reviewers WHERE id = ?').get(inv.reviewerId) as Record<string, string>;
  assert.equal(row.token_hash, await hashToken(inv.token));
  assert.notEqual(row.token_hash, inv.token);
  assert.equal(JSON.stringify(s.t.raw.prepare('SELECT * FROM reviewers').all()).includes(inv.token), false);
  assert.equal(await revokeReviewer(s.db, packId, inv.reviewerId + 99, 2000), false);
  assert.equal(await revokeReviewer(s.db, packId, inv.reviewerId, 2000), true);
  assert.equal((await packResults(s.db, packId))?.reviewers[0].revokedAt, 2000);
  await closePack(s.db, packId);
  assert.equal((await inviteReviewer(s.db, packId, { displayName: 'Mr K.' })).ok, false);
});

async function packWithReviewers(s: { t: TestD1; db: AdminDb }, n = 2) {
  const p = await createPack(s.db, { title: 'Review', items: [{ kind: 'question', questionId: qid(AFR, P1), doubt: 'd' }, { kind: 'lesson_line', file: 'grade6/afrikaans/x/Y.tsx', anchorText: 'Ek staan om sewe-uur op.' }] }, EMAIL, 5);
  if (!p.ok) throw new Error('pack');
  const rs: number[] = [];
  for (let i = 0; i < n; i++) { const r = await inviteReviewer(s.db, p.packId, { displayName: `T${i}` }, 10); if (r.ok) rs.push(r.reviewerId); }
  const res = (await packResults(s.db, p.packId))!;
  return { packId: p.packId, rs, q: res.items[0].id, l: res.items[1].id };
}

test('results: responses side by side with agreement and a unanimous merged proposal', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const k = await packWithReviewers(s, 3);
  const change = { prompt: P1, options: OPTS, answer: 'oggend', explanation: 'Oggend beteken die oggend, voor middagete.' };
  respond(s.t, k.rs[0], k.q, 'change', change, 'clearer');
  respond(s.t, k.rs[1], k.q, 'change', { ...change, explanation: ' Oggend beteken die oggend,  voor middagete. ' });
  const a = (await packResults(s.db, k.packId))!.items[0];
  assert.equal(a.responses.length, 2);
  assert.deepEqual(a.responses.map((r) => r.label), ['Reviewer 1', 'Reviewer 2']);
  assert.equal(a.agreement.state, 'same_change');
  assert.ok(a.merged);
  respond(s.t, k.rs[2], k.q, 'correct');
  const b = (await packResults(s.db, k.packId))!.items[0];
  assert.equal(b.agreement.state, 'disagree');
  assert.equal(b.agreement.sameChange, 2);
});

test('accepting a reviewer\'s question change goes through the question edit pipeline and records the decision', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const k = await packWithReviewers(s);
  const change = { prompt: 'Watter woord beteken die oggend van die dag?', options: OPTS, answer: 'oggend', explanation: 'Oggend beteken die oggend, voor middagete.' };
  respond(s.t, k.rs[0], k.q, 'change', change, 'clearer');
  respond(s.t, k.rs[1], k.q, 'correct');
  const noChange = await decideItem(s.db, k.packId, k.q, { decision: 'accept_reviewer', reviewerId: k.rs[1] }, EMAIL, 100);
  assert.deepEqual([noChange.ok, !noChange.ok && noChange.status], [false, 400]);
  const r = await decideItem(s.db, k.packId, k.q, { decision: 'accept_reviewer', reviewerId: k.rs[0], changeKind: 'wording' }, EMAIL, 100);
  assert.ok(r.ok, JSON.stringify(r));
  const v = s.t.raw.prepare('SELECT prompt, source_note, author FROM question_versions WHERE id = ?').get(r.ok ? (r.versionId ?? 0) : 0) as Record<string, string>;
  assert.equal(v.prompt, change.prompt);
  assert.match(v.source_note, /Teacher review “Review” \(pack \d+\), accept reviewer; Reviewer 1/);
  assert.equal((s.t.raw.prepare('SELECT COUNT(*) AS n FROM question_edits').get() as { n: number }).n, 1);
  const d = s.t.raw.prepare('SELECT decision, decided_by, applied_version_id FROM review_decisions WHERE item_id = ?').get(k.q) as Record<string, unknown>;
  assert.deepEqual({ ...d }, { decision: 'accept_reviewer', decided_by: EMAIL, applied_version_id: r.ok ? (r.versionId ?? 0) : 0 });
  const again = await decideItem(s.db, k.packId, k.q, { decision: 'keep_original' }, EMAIL, 101);
  assert.deepEqual([again.ok, !again.ok && again.status], [false, 409]);
});

test('a question edited after the pack was made cannot be overwritten by a reviewer\'s older proposal', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const k = await packWithReviewers(s, 1);
  respond(s.t, k.rs[0], k.q, 'change', { prompt: 'Watter woord beteken die oggend van die dag?', options: OPTS, answer: 'oggend', explanation: 'Oggend beteken die oggend, voor middagete.' });
  const cur = (s.t.raw.prepare('SELECT current_version_id AS v FROM questions WHERE id = ?').get(qid(AFR, P1)) as { v: number }).v;
  s.t.raw.prepare("INSERT INTO question_versions (question_id, version_no, qkey, prompt, options, answer, explanation, extra, author, status, created_at) VALUES (?, 2, 'k2', 'Newer wording of the question?', ?, 'oggend', 'e', '{}', 'owner', 'approved', 9)").run(qid(AFR, P1), JSON.stringify(OPTS));
  s.t.raw.prepare('UPDATE questions SET current_version_id = (SELECT MAX(id) FROM question_versions) WHERE id = ?').run(qid(AFR, P1));
  assert.notEqual(cur, (s.t.raw.prepare('SELECT current_version_id AS v FROM questions WHERE id = ?').get(qid(AFR, P1)) as { v: number }).v);
  const r = await decideItem(s.db, k.packId, k.q, { decision: 'accept_merged' }, EMAIL, 100);
  assert.deepEqual([r.ok, !r.ok && r.status], [false, 409]);
  assert.equal((s.t.raw.prepare('SELECT COUNT(*) AS n FROM review_decisions').get() as { n: number }).n, 0);
});

test('a validator rejection is passed back and records nothing', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const k = await packWithReviewers(s, 1);
  const r = await decideItem(s.db, k.packId, k.q, { decision: 'edit_accept', proposal: { prompt: 'Watter woord beteken die oggend?', options: ['oggend', 'oggend', 'gister', 'nou'], answer: 'oggend', explanation: 'x' } }, EMAIL, 100);
  assert.equal(r.ok, false);
  assert.equal((s.t.raw.prepare('SELECT COUNT(*) AS n FROM review_decisions').get() as { n: number }).n, 0);
});

test('lesson-line decisions go to lesson_change_queue as file, old, new; keep_original and ask_again change nothing', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const k = await packWithReviewers(s, 2);
  respond(s.t, k.rs[0], k.l, 'change', { text: 'Ek staan om sewe-uur op.' });
  const same = await decideItem(s.db, k.packId, k.l, { decision: 'accept_merged' }, EMAIL, 100);
  assert.deepEqual([same.ok, !same.ok && same.error], [false, 'Nothing has changed']);
  const r = await decideItem(s.db, k.packId, k.l, { decision: 'edit_accept', proposal: { text: 'Ek staan om sewe uur op.' } }, EMAIL, 101);
  assert.ok(r.ok, JSON.stringify(r));
  const q = s.t.raw.prepare('SELECT file, old_text, new_text, item_id, status FROM lesson_change_queue').all() as Record<string, unknown>[];
  assert.deepEqual(q.map((x) => ({ ...x })), [{ file: 'grade6/afrikaans/x/Y.tsx', old_text: 'Ek staan om sewe-uur op.', new_text: 'Ek staan om sewe uur op.', item_id: k.l, status: 'pending' }]);

  const keep = await decideItem(s.db, k.packId, k.q, { decision: 'keep_original' }, EMAIL, 102);
  assert.ok(keep.ok);
  assert.equal((s.t.raw.prepare('SELECT COUNT(*) AS n FROM question_versions').get() as { n: number }).n, 3);
  assert.equal((await decideItem(s.db, k.packId, k.q, { decision: 'nonsense' }, EMAIL, 103)).ok, false);
});

test('ask again copies the item into one open "Ask again" pack and can be decided again later', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const k = await packWithReviewers(s, 2);
  respond(s.t, k.rs[0], k.q, 'unsure'); respond(s.t, k.rs[1], k.q, 'unsure');
  const r1 = await decideItem(s.db, k.packId, k.q, { decision: 'ask_again' }, EMAIL, 100);
  const r2 = await decideItem(s.db, k.packId, k.l, { decision: 'ask_again' }, EMAIL, 101);
  assert.ok(r1.ok && r2.ok);
  if (!r1.ok || !r2.ok) return;
  assert.equal(r1.askAgainPackId, r2.askAgainPackId);
  const again = (await packResults(s.db, r1.askAgainPackId!))!;
  assert.equal(again.pack.title, 'Ask again: Review');
  assert.deepEqual(again.items.map((i) => i.kind), ['question', 'lesson_line']);
  assert.match(again.items[0].doubt, /re-asked/);
  const later = await decideItem(s.db, k.packId, k.q, { decision: 'keep_original' }, EMAIL, 102);
  assert.ok(later.ok);
});

test('needsCheck leaves out questions that already have a teacher decision', async (t0) => {
  const s = await setup(); if (!s) return t0.skip('node:sqlite unavailable');
  const k = await packWithReviewers(s, 1);
  await decideItem(s.db, k.packId, k.q, { decision: 'keep_original' }, EMAIL, 100);
  const left = await findCandidates(s.db, { language: 'afrikaans', needsCheck: true });
  assert.deepEqual(left.map((c) => c.prompt), ['Watter woord beteken die aand?']);
});
