import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { makeQkey } from '../../shared/qkey';
import { registerQuestionSql } from '../questions/sql';
import { adminDbOf, openQuestionsDb } from '../questions/testQuestionsDb';
import type { TestD1 } from '../testD1';
import type { AdminDb } from '../admin/db';
import { MODERATOR_THRESHOLD, groupKeyOf, parseProposalInput, phaseOfGrade } from '../../shared/moderation';
import { appointModerator, candidates, listGroups, removeModerator, reputationOf } from './groups';
import { canDecide, decideProposal, listMine, proposalById, queueFor, reviseProposal, submitProposal, verifyQuestion, withdrawProposal } from './proposals';
import { topicInfo } from './topics';

const TASK = 'ancient-medicine';
const GROUP = groupKeyOf('History', 'intermediate');
const P = 'Which plant was used to treat burns in early medicine?';
const OWNER = { kind: 'owner' as const, email: 'owner@example.org' };
const U = (n: number) => `00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;
const qid = (p = P) => makeQkey(TASK, p);
const GOOD = { prompt: 'Which plant did early healers use on burns?', options: ['Aloe', 'Rubber', 'Plastic', 'Cement'], answer: 'Aloe', explanation: 'Aloe has been used on burns and skin problems for a very long time.' };
const SRC = { sourceKind: 'caps', sourceRef: 'CAPS NST Gr 6 p. 41', reason: 'The old wording was unclear to learners.' };

async function world() {
  const t = await openQuestionsDb(); if (!t) return null;
  t.raw.exec(fs.readFileSync('migrations/0013_adult_auth.sql', 'utf8'));
  t.raw.exec(fs.readFileSync('migrations/0016_schools.sql', 'utf8'));
  t.raw.exec(fs.readFileSync('migrations/0020_moderation.sql', 'utf8'));
  t.raw.exec(registerQuestionSql({ task: TASK, section: 'general', kind: 'mcq', source: 'curated', prompt: P, options: ['Aloe', 'Rubber', 'Plastic', 'Cement'], answer: 'Aloe', explanation: 'Aloe was used for burns and skin problems.', extra: {}, author: 'seed' }).join('\n'));
  const db = adminDbOf(t);
  const user = (n: number, roles: string[]) => {
    t.raw.prepare('INSERT INTO users (id, email, created_at) VALUES (?, ?, 1)').run(U(n), `t${n}@example.org`);
    for (const r of roles) t.raw.prepare("INSERT INTO user_roles (user_id, role, granted_by, granted_at) VALUES (?, ?, 'test', 1)").run(U(n), r);
    return U(n);
  };
  const v = () => (t.raw.prepare('SELECT current_version_id AS v FROM questions WHERE id = ?').get(qid()) as { v: number }).v;
  return { t, db, user, v };
}
const edit = (v: number, over: Record<string, unknown> = {}) => ({ kind: 'edit', questionId: qid(), baseVersionId: v, content: GOOD, ...SRC, ...over });
const n = (t: TestD1, sql: string, p: (string | number)[] = []) => (t.raw.prepare(sql).get(...p) as { n: number }).n;

test('0020 is additive: eight new tables, nothing else changes, and it can run twice', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const before = w.t.raw.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all().map((r) => (r as { name: string }).name);
  w.t.raw.exec(fs.readFileSync('migrations/0020_moderation.sql', 'utf8'));
  const after = w.t.raw.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all().map((r) => (r as { name: string }).name);
  assert.deepEqual(after.sort(), before.sort());
  const sql = fs.readFileSync('migrations/0020_moderation.sql', 'utf8');
  assert.equal([...sql.matchAll(/CREATE TABLE IF NOT EXISTS (\w+)/g)].length, 6);
  assert.doesNotMatch(sql, /ALTER TABLE|DROP |DELETE FROM|UPDATE /i);
});

test('phases and topics: grades map to CAPS phases and a topic knows its group', () => {
  assert.deepEqual([3, 4, 6, 7, 9, 10, 12].map(phaseOfGrade), ['foundation', 'intermediate', 'intermediate', 'senior', 'senior', 'fet', 'fet']);
  assert.equal(topicInfo(TASK)?.groupKey, GROUP);
  assert.equal(topicInfo('no-such-topic'), null);
});

test('input parsing: reason and source are required; a new question needs a topic; an edit needs the version it saw', () => {
  const ok = parseProposalInput(edit(1));
  assert.equal(ok.ok, true);
  assert.equal(parseProposalInput(edit(1, { reason: 'short' })).ok, false);
  assert.equal(parseProposalInput(edit(1, { sourceKind: 'blog' })).ok, false);
  assert.equal(parseProposalInput(edit(1, { sourceRef: '' })).ok, false);
  assert.equal(parseProposalInput(edit(1, { baseVersionId: undefined })).ok, false);
  assert.equal(parseProposalInput(edit(1, { content: { ...GOOD, answer: 'Gold' } })).ok, false);
  assert.equal(parseProposalInput({ kind: 'new', content: GOOD, ...SRC }).ok, false);
  assert.equal(parseProposalInput({ kind: 'new', task: TASK, content: GOOD, ...SRC }).ok, true);
  assert.equal(parseProposalInput({ kind: 'retire', questionId: qid(), ...SRC }).ok, true);
});

test('only teachers and moderators can propose; a parent cannot', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const parent = w.user(1, ['parent']);
  const r = await submitProposal(w.db, parent, edit(w.v()), 10);
  assert.equal(r.ok ? 200 : r.status, 403);
  assert.equal(n(w.t, 'SELECT COUNT(*) AS n FROM proposals'), 0);
});

test('a passing proposal is submitted; a failing one is returned to its author with the reasons, then can be revised', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const teacher = w.user(1, ['teacher']);
  const bad = await submitProposal(w.db, teacher, edit(w.v(), { content: { ...GOOD, options: ['Aloe', 'Aloe', 'Plastic', 'Cement'] } }), 10);
  assert.equal(bad.ok, false);
  if (bad.ok) return;
  assert.equal(bad.status, 422);
  assert.ok(bad.findings && bad.findings.some((f) => f.severity === 'reject'));
  const row = await proposalById(w.db, bad.id!);
  assert.equal(row?.status, 'returned');
  assert.ok(row!.findings.length > 0);
  assert.deepEqual((await queueFor(w.db, OWNER)).map((p) => p.id), [], 'a returned proposal is not in the queue');
  const fixed = await reviseProposal(w.db, teacher, bad.id!, edit(w.v()), 20);
  assert.equal(fixed.ok, true);
  assert.equal((await proposalById(w.db, bad.id!))?.status, 'submitted');
  assert.equal((await queueFor(w.db, OWNER)).length, 1);
  // someone else cannot revise it
  const other = w.user(2, ['teacher']);
  assert.equal((await reviseProposal(w.db, other, bad.id!, edit(w.v()), 30)).ok, false);
});

test('a stale edit (the question moved on) and nothing-changed are refused at submit', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const teacher = w.user(1, ['teacher']);
  assert.equal((await submitProposal(w.db, teacher, edit(w.v() + 5), 10) as { status: number }).status, 409);
  const same = await submitProposal(w.db, teacher, edit(w.v(), { content: { prompt: P, options: ['Aloe', 'Rubber', 'Plastic', 'Cement'], answer: 'Aloe', explanation: 'Aloe was used for burns and skin problems.' } }), 10);
  assert.equal(same.ok, false);
});

test('the OWNER approves while a group has fewer than 5 moderators; a moderator cannot', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const author = w.user(1, ['teacher']);
  const mod = w.user(2, ['teacher']);
  assert.equal((await appointModerator(w.db, GROUP, mod, 'owner@example.org', 5)).ok, true);
  const sub = await submitProposal(w.db, author, edit(w.v()), 10) as { ok: true; id: string };
  const asMod = await decideProposal(w.db, { kind: 'moderator', userId: mod }, sub.id, 'approve', 'Looks right to me', 20);
  assert.equal(asMod.ok ? 200 : asMod.status, 403);
  assert.deepEqual((await queueFor(w.db, { kind: 'moderator', userId: mod })).map((p) => p.id), [], 'not in the moderator queue below the threshold');
  const r = await decideProposal(w.db, OWNER, sub.id, 'approve', 'Matches CAPS page 41', 30);
  assert.equal(r.ok, true);
});

test(`from ${MODERATOR_THRESHOLD} moderators one moderator approves; never their own proposal; only their own group`, async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const author = w.user(1, ['teacher']);
  const mods = [2, 3, 4, 5, 6].map((i) => w.user(i, ['teacher']));
  for (const m of mods.slice(0, 4)) await appointModerator(w.db, GROUP, m, 'o', 5);
  const sub = await submitProposal(w.db, author, edit(w.v()), 10) as { ok: true; id: string };
  assert.equal((await canDecide(w.db, { kind: 'moderator', userId: mods[0] }, (await proposalById(w.db, sub.id))!)).ok, false, 'four is not enough');
  await appointModerator(w.db, GROUP, mods[4], 'o', 6);
  // the author is also a moderator now: still cannot decide their own
  await appointModerator(w.db, GROUP, author, 'o', 7);
  const self = await decideProposal(w.db, { kind: 'moderator', userId: author }, sub.id, 'approve', 'my own work is fine', 20);
  assert.equal(self.ok ? 200 : self.status, 403);
  // a moderator of a different group cannot
  const outsider = w.user(9, ['teacher']);
  await appointModerator(w.db, groupKeyOf('Mathematics', 'senior'), outsider, 'o', 8);
  assert.equal((await decideProposal(w.db, { kind: 'moderator', userId: outsider }, sub.id, 'approve', 'not my group', 20) as { status: number }).status, 403);
  // a plain teacher cannot
  assert.equal((await decideProposal(w.db, { kind: 'moderator', userId: w.user(10, ['teacher']) }, sub.id, 'approve', 'just a teacher', 20) as { status: number }).status, 403);
  assert.equal((await queueFor(w.db, { kind: 'moderator', userId: mods[0] })).length, 1);
  const done = await decideProposal(w.db, { kind: 'moderator', userId: mods[0] }, sub.id, 'approve', 'Checked against the textbook', 30);
  assert.equal(done.ok, true);
  const row = await proposalById(w.db, sub.id);
  assert.equal(row?.status, 'approved');
  assert.equal(row?.decidedBy, 'moderator');
  assert.equal(row?.decisionReason, 'Checked against the textbook');
  // removing one drops the group back to owner approval
  await removeModerator(w.db, GROUP, mods[4]);
  await removeModerator(w.db, GROUP, author); // 6 -> 4
  const again = await submitProposal(w.db, w.user(11, ['teacher']), { kind: 'retire', questionId: qid(), ...SRC }, 40) as { ok: true; id: string };
  assert.equal((await decideProposal(w.db, { kind: 'moderator', userId: mods[0] }, again.id, 'approve', 'fine fine', 50) as { status: number }).status, 403);
});

test('every decision needs a reason; a rejection changes nothing in the question bank', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const author = w.user(1, ['teacher']);
  const sub = await submitProposal(w.db, author, edit(w.v()), 10) as { ok: true; id: string };
  for (const bad of [undefined, '', 'ok', '   ']) assert.equal((await decideProposal(w.db, OWNER, sub.id, 'approve', bad, 20) as { status: number }).status, 400);
  assert.equal((await decideProposal(w.db, OWNER, sub.id, 'maybe', 'a good reason', 20) as { status: number }).status, 400);
  const before = n(w.t, 'SELECT COUNT(*) AS n FROM question_versions');
  const r = await decideProposal(w.db, OWNER, sub.id, 'reject', 'Not what the CAPS page says', 30);
  assert.equal(r.ok, true);
  assert.equal(n(w.t, 'SELECT COUNT(*) AS n FROM question_versions'), before);
  assert.equal(await reputationOf(w.db, author), 0);
  assert.equal((await proposalById(w.db, sub.id))?.decisionReason, 'Not what the CAPS page says');
  assert.equal((await decideProposal(w.db, OWNER, sub.id, 'approve', 'second thoughts', 40) as { status: number }).status, 409, 'decided once only');
});

test('an approved edit goes through editQuestion: new version by the teacher, audit row, review reset on a meaning change, verified, points', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const author = w.user(1, ['teacher']);
  const v0 = w.v();
  w.t.raw.exec('PRAGMA foreign_keys = OFF');
  w.t.raw.prepare("INSERT INTO review_items (student_id, qkey, task, subject, box, due_day, streak_correct, created_at, updated_at) VALUES ('s1', ?, ?, 'History', 3, 1, 2, 1, 1)").run(qid(), TASK);
  const sub = await submitProposal(w.db, author, edit(v0, { content: { ...GOOD, options: ['Aloe', 'Rubber', 'Plastic', 'Honey'], answer: 'Honey', explanation: 'Honey was used on burns in some early traditions.' } }), 10) as { ok: true; id: string };
  const r = await decideProposal(w.db, OWNER, sub.id, 'approve', 'Matches the lesson slide', 100);
  assert.equal(r.ok, true);
  const v = w.t.raw.prepare('SELECT id, author, source_note, status FROM question_versions WHERE question_id = ? ORDER BY id DESC LIMIT 1').get(qid()) as Record<string, string>;
  assert.equal(v.author, `teacher:${author}`);
  assert.match(v.source_note, /^\[CAPS document\] CAPS NST Gr 6 p\. 41: /);
  assert.equal(w.v() > v0, true);
  const audit = w.t.raw.prepare('SELECT change_kind, admin_email, reviews_reset FROM question_edits').get() as Record<string, unknown>;
  assert.equal(audit.change_kind, 'meaning');
  assert.equal(audit.reviews_reset, 1);
  assert.equal(audit.admin_email, 'owner@example.org');
  assert.equal(n(w.t, 'SELECT box AS n FROM review_items'), 1);
  assert.equal(n(w.t, 'SELECT COUNT(*) AS n FROM question_verified WHERE question_id = ? AND version_id = ?', [qid(), w.v()]), 1);
  assert.equal(await reputationOf(w.db, author), 10);
  assert.equal((await proposalById(w.db, sub.id))?.status, 'approved');
  // a second approval of the same proposal does not award twice
  w.t.raw.prepare("UPDATE proposals SET status = 'submitted' WHERE id = ?").run(sub.id);
  await decideProposal(w.db, OWNER, sub.id, 'approve', 'again', 200);
  assert.equal(n(w.t, 'SELECT COUNT(*) AS n FROM reputation_events'), 1);
});

test('a proposal made stale by an owner edit is marked stale when approved, and nothing is written', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const author = w.user(1, ['teacher']);
  const sub = await submitProposal(w.db, author, edit(w.v()), 10) as { ok: true; id: string };
  const { editQuestion } = await import('../questions/edit');
  const e = await editQuestion(w.db, qid(), { expectedVersionId: w.v(), prompt: P, options: ['Aloe', 'Rubber', 'Plastic', 'Cement'], answer: 'Aloe', explanation: 'Aloe was used on burns and also other skin problems.', sourceNote: 'owner fix', changeKind: 'wording', acknowledgeWarnings: false }, 'o@e.org', 50);
  assert.equal(e.ok, true);
  const r = await decideProposal(w.db, OWNER, sub.id, 'approve', 'looks good to me', 60);
  assert.equal(r.ok ? 200 : r.status, 409);
  assert.equal((await proposalById(w.db, sub.id))?.status, 'stale');
  assert.equal(n(w.t, 'SELECT COUNT(*) AS n FROM question_versions WHERE question_id = ?', [qid()]), 2);
  assert.equal(await reputationOf(w.db, author), 0);
});

test('retire and new proposals: approval retires, or adds a curated question with version 1 by the teacher', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const author = w.user(1, ['teacher']);
  const neu = await submitProposal(w.db, author, { kind: 'new', task: TASK, content: GOOD, ...SRC }, 10) as { ok: true; id: string };
  assert.equal((await decideProposal(w.db, OWNER, neu.id, 'approve', 'a good new question', 20)).ok, true);
  const created = w.t.raw.prepare("SELECT q.id, q.source, q.status, v.author, v.version_no FROM questions q JOIN question_versions v ON v.id = q.current_version_id WHERE v.prompt = ?").get(GOOD.prompt) as Record<string, unknown>;
  assert.deepEqual({ ...created, id: undefined }, { id: undefined, source: 'curated', status: 'active', author: `teacher:${author}`, version_no: 1 });
  assert.equal(n(w.t, 'SELECT COUNT(*) AS n FROM question_verified WHERE question_id = ?', [created.id as string]), 1);
  const ret = await submitProposal(w.db, author, { kind: 'retire', questionId: qid(), ...SRC, reason: 'This question is no longer in the CAPS.' }, 30) as { ok: true; id: string };
  assert.equal((await decideProposal(w.db, OWNER, ret.id, 'approve', 'agreed, out of scope', 40)).ok, true);
  assert.equal((w.t.raw.prepare('SELECT status FROM questions WHERE id = ?').get(qid()) as { status: string }).status, 'retired');
  assert.equal(await reputationOf(w.db, author), 15);
  // a new question with wording already in use is refused at approval time as out of date
  const dup = await submitProposal(w.db, w.user(2, ['teacher']), { kind: 'new', task: TASK, content: { ...GOOD, prompt: 'Which plant did early healers use on burns?' }, ...SRC }, 50);
  assert.equal(dup.ok, false);
});

test('limits: withdraw works for the author only; open proposals per question per teacher; per-day cap', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const a = w.user(1, ['teacher']); const b = w.user(2, ['teacher']);
  const s1 = await submitProposal(w.db, a, edit(w.v()), 10) as { ok: true; id: string };
  assert.equal((await submitProposal(w.db, a, edit(w.v()), 11) as { status: number }).status, 409);
  assert.equal((await withdrawProposal(w.db, b, s1.id, 12)).ok, false);
  assert.equal((await withdrawProposal(w.db, a, s1.id, 13)).ok, true);
  assert.equal((await listMine(w.db, a))[0].status, 'withdrawn');
  assert.equal((await decideProposal(w.db, OWNER, s1.id, 'approve', 'too late', 20) as { status: number }).status, 409);
  for (let i = 0; i < 15; i++) await submitProposal(w.db, b, { kind: 'new', task: TASK, content: { ...GOOD, prompt: `Which plant number ${i} did early healers use on burns?` }, ...SRC }, 100 + i);
  const over = await submitProposal(w.db, b, { kind: 'new', task: TASK, content: { ...GOOD, prompt: 'One more plant question for the burns?' }, ...SRC }, 200);
  assert.equal(over.ok ? 200 : over.status, 429);
});

test('explicit verification: owner, or a qualified moderator; an edit afterwards makes it unverified', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const m = w.user(1, ['teacher']);
  assert.equal((await verifyQuestion(w.db, { kind: 'moderator', userId: m }, qid(), 5) as { status: number }).status, 403);
  assert.equal((await verifyQuestion(w.db, OWNER, qid(), 6)).ok, true);
  const verifiedNow = () => n(w.t, 'SELECT COUNT(*) AS n FROM question_verified qv JOIN questions q ON q.id = qv.question_id AND q.current_version_id = qv.version_id WHERE q.id = ?', [qid()]);
  assert.equal(verifiedNow(), 1);
  const { editQuestion } = await import('../questions/edit');
  await editQuestion(w.db, qid(), { expectedVersionId: w.v(), prompt: P, options: ['Aloe', 'Rubber', 'Plastic', 'Cement'], answer: 'Aloe', explanation: 'Aloe was used on burns and also other skin problems.', sourceNote: 'owner fix', changeKind: 'wording', acknowledgeWarnings: false }, 'o@e.org', 50);
  assert.equal(verifiedNow(), 0);
});

test('candidates and the group list show adults and points only; appointing needs an approved teacher', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const parent = w.user(1, ['parent']); const teacher = w.user(2, ['teacher']);
  assert.equal((await appointModerator(w.db, GROUP, parent, 'o', 1) as { status: number }).status, 400);
  assert.equal((await appointModerator(w.db, 'Nonsense|senior', teacher, 'o', 1) as { status: number }).status, 404);
  assert.equal((await appointModerator(w.db, GROUP, teacher, 'o', 1)).ok, true);
  assert.equal((await appointModerator(w.db, GROUP, teacher, 'o', 2) as { status: number }).status, 409);
  assert.equal(n(w.t, "SELECT COUNT(*) AS n FROM user_roles WHERE user_id = ? AND role = 'moderator'", [teacher]), 1);
  const g = (await listGroups(w.db)).find((x) => x.groupKey === GROUP)!;
  assert.deepEqual(g.moderators.map((m) => m.email), ['t2@example.org']);
  assert.equal(g.selfGoverning, false);
  assert.deepEqual((await candidates(w.db)).map((c) => c.userId), [teacher]);
  await removeModerator(w.db, GROUP, teacher);
  assert.equal(n(w.t, "SELECT COUNT(*) AS n FROM user_roles WHERE user_id = ? AND role IN ('moderator')", [teacher]), 0);
  assert.equal(n(w.t, "SELECT COUNT(*) AS n FROM user_roles WHERE user_id = ? AND role = 'teacher'", [teacher]), 1);
});

test('owner finishers: the question detail shows the verified mark for the current version only; the owner reads and removes any comment, audited with their email', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const { questionDetail, editQuestion } = await import('../questions/edit');
  const { postComment, listCommentsForOwner, removeComment } = await import('./discussion');
  assert.equal((await questionDetail(w.db, qid()))!.verified, null);
  assert.equal((await verifyQuestion(w.db, OWNER, qid(), 500)).ok, true);
  assert.deepEqual((await questionDetail(w.db, qid()))!.verified, { at: 500, via: 'review', by: 'owner' });
  await editQuestion(w.db, qid(), { expectedVersionId: w.v(), prompt: P, options: ['Aloe', 'Rubber', 'Plastic', 'Cement'], answer: 'Aloe', explanation: 'Aloe was used on burns and also other skin problems.', sourceNote: 'owner fix', changeKind: 'wording', acknowledgeWarnings: false }, 'o@e.org', 600);
  assert.equal((await questionDetail(w.db, qid()))!.verified, null, 'a later edit makes it unverified');
  const teacher = w.user(1, ['teacher']);
  const c = await postComment(w.db, teacher, { questionId: qid() }, 'a comment that must go', 700) as { ok: true; id: string };
  const seen = await listCommentsForOwner(w.db, { questionId: qid() });
  assert.equal(seen.ok && seen.comments.length, 1);
  assert.ok(!JSON.stringify(seen).includes(teacher), 'no user id even for the owner');
  assert.equal((await removeComment(w.db, { owner: 'owner@example.org' }, c.id, 800)).ok, true);
  assert.deepEqual({ ...(w.t.raw.prepare('SELECT removed_at, removed_by FROM discussion_comments WHERE id = ?').get(c.id) as object) }, { removed_at: 800, removed_by: 'owner:owner@example.org' });
  const after = await listCommentsForOwner(w.db, { questionId: qid() });
  assert.deepEqual(after.ok && after.comments.map((x) => [x.body, x.removed]), [['', true]]);
  assert.equal((await removeComment(w.db, { owner: 'owner@example.org' }, c.id, 900) as { status: number }).status, 404, 'already removed');
});
