import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { makeQkey } from '../../shared/qkey';
import { registerQuestionSql } from '../questions/sql';
import { adminDbOf, openQuestionsDb } from '../questions/testQuestionsDb';
import { createSession, ADULT_COOKIE } from '../adultAuth/sessions';
import { appointModerator } from './groups';
import { ownerList } from './views';
import { handleModDecide, handleModQueue, handleBank, handleComment, handleComments, handleCommentRemove, handleMine, handleOne, handlePropose, handleRevise, handleWithdraw } from './http';

const NOW = 1_800_000_000_000;
const TASK = 'ancient-medicine';
const P = 'Which plant was used to treat burns in early medicine?';
const qid = makeQkey(TASK, P);
const O = 'https://example.invalid';
const GOOD = { prompt: 'Which plant did early healers use on burns?', options: ['Aloe', 'Rubber', 'Plastic', 'Cement'], answer: 'Aloe', explanation: 'Aloe has been used on burns and skin problems for a very long time.' };
const SRC = { sourceKind: 'caps', sourceRef: 'CAPS History Gr 6 p. 12', reason: 'The old wording was unclear to learners.' };

async function world() {
  const t = await openQuestionsDb(); if (!t) return null;
  for (const f of ['0013_adult_auth.sql', '0016_schools.sql', '0020_moderation.sql']) t.raw.exec(fs.readFileSync(`migrations/${f}`, 'utf8'));
  t.raw.exec(registerQuestionSql({ task: TASK, section: 'general', kind: 'mcq', source: 'curated', prompt: P, options: ['Aloe', 'Rubber', 'Plastic', 'Cement'], answer: 'Aloe', explanation: 'Aloe was used for burns and skin problems.', extra: {}, author: 'seed' }).join('\n'));
  // learner data that must never appear in a teacher's view
  t.raw.exec("INSERT INTO question_reports (question_id, task, student_id, reason, status, created_at) VALUES ('" + qid + "', '" + TASK + "', 'learner-secret-1', 'typo', 'open', 1)");
  const db = adminDbOf(t);
  let i = 0;
  const who = async (roles: string[]) => {
    const id = `00000000-0000-4000-8000-${String(++i).padStart(12, '0')}`;
    t.raw.prepare('INSERT INTO users (id, email, created_at) VALUES (?, ?, 1)').run(id, `u${i}@example.invalid`);
    for (const r of roles) t.raw.prepare("INSERT INTO user_roles (user_id, role, granted_by, granted_at) VALUES (?, ?, 'test', 1)").run(id, r);
    return { id, cookie: `${ADULT_COOKIE}=${(await createSession(db, id, NOW)).token}` };
  };
  return { t, db, who, deps: { db, now: NOW + 1000 } };
}
const get = (path: string, cookie?: string) => new Request(`${O}${path}`, { headers: cookie ? { cookie } : {} });
const send = (path: string, method: string, action: string, cookie: string | undefined, body: unknown, over: Record<string, string> = {}) =>
  new Request(`${O}${path}`, { method, headers: { 'content-type': 'application/json', 'x-auth-action': action, origin: O, ...(cookie ? { cookie } : {}), ...over }, body: JSON.stringify(body) });
const version = (w: NonNullable<Awaited<ReturnType<typeof world>>>) => (w.t.raw.prepare('SELECT current_version_id AS v FROM questions WHERE id = ?').get(qid) as { v: number }).v;

test('a parent or a signed-out visitor gets nothing; a teacher gets the topic bank without any learner data', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const parent = await w.who(['parent']); const teacher = await w.who(['parent', 'teacher']);
  assert.equal((await handleBank(get(`/x?task=${TASK}`), w.deps)).status, 401);
  assert.equal((await handleBank(get(`/x?task=${TASK}`, parent.cookie), w.deps)).status, 403);
  assert.equal((await handleMine(get('/x', parent.cookie), w.deps)).status, 403);
  const res = await handleBank(get(`/x?task=${TASK}`, teacher.cookie), w.deps);
  assert.equal(res.status, 200);
  const text = await res.text();
  assert.ok(text.includes(P));
  assert.ok(!/learner-secret|student|report|percent|answers/i.test(text.replace(P, '')), 'no learner data in the bank view');
  assert.equal((await handleBank(get('/x?task=../etc', teacher.cookie), w.deps)).status, 400);
  assert.equal((await handleBank(get('/x?task=no-such-topic', teacher.cookie), w.deps)).status, 404);
});

test('propose: CSRF header and Origin are required; a failing check answers 422 with reasons; revise then succeeds; withdraw; only the author reads it', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const a = await w.who(['teacher']); const b = await w.who(['teacher']); const parent = await w.who(['parent']);
  const body = { kind: 'edit', questionId: qid, baseVersionId: version(w), content: GOOD, ...SRC };
  assert.equal((await handlePropose(send('/x', 'POST', 'wrong', a.cookie, body), w.deps)).status, 403);
  assert.equal((await handlePropose(send('/x', 'POST', 'proposal-create', a.cookie, body, { origin: 'https://evil.invalid' }), w.deps)).status, 403);
  assert.equal((await handlePropose(send('/x', 'POST', 'proposal-create', parent.cookie, body), w.deps)).status, 403);
  assert.equal((await handlePropose(send('/x', 'POST', 'proposal-create', undefined, body), w.deps)).status, 401);
  const bad = await handlePropose(send('/x', 'POST', 'proposal-create', a.cookie, { ...body, content: { ...GOOD, options: ['Aloe', 'Aloe', 'Plastic', 'Cement'] } }), w.deps);
  assert.equal(bad.status, 422);
  const bj = await bad.json() as { id: string; findings: unknown[] };
  assert.ok(bj.findings.length > 0);
  assert.equal((await handleRevise(send('/x', 'POST', 'proposal-revise', b.cookie, body), w.deps, bj.id)).status, 404, 'not the author');
  const fixed = await handleRevise(send('/x', 'POST', 'proposal-revise', a.cookie, body), w.deps, bj.id);
  assert.equal(fixed.status, 200);
  assert.equal((await handleOne(get('/x', b.cookie), w.deps, bj.id)).status, 404);
  assert.equal((await handleOne(get('/x', a.cookie), w.deps, bj.id)).status, 200);
  const mine = await (await handleMine(get('/x', a.cookie), w.deps)).json() as { proposals: { status: string }[]; points: number };
  assert.deepEqual(mine.proposals.map((p) => p.status), ['submitted']);
  assert.equal((await handleWithdraw(send('/x', 'DELETE', 'proposal-withdraw', b.cookie, {}), w.deps, bj.id)).status, 404);
  assert.equal((await handleWithdraw(send('/x', 'DELETE', 'proposal-withdraw', a.cookie, {}), w.deps, bj.id)).status, 200);
});

test('discussion: teachers and moderators only; authors show as Teacher at <school>, never an email; only the author removes a comment', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const a = await w.who(['teacher']); const b = await w.who(['teacher']); const parent = await w.who(['parent']);
  w.t.raw.prepare("INSERT INTO teacher_applications (user_id, sace_number, school_name, status, submitted_at) VALUES (?, '11111111', 'Bay Primary', 'approved', 1)").run(a.id);
  const say = (c: string | undefined, text: unknown) => handleComment(send('/x', 'POST', 'comment-create', c, { question: qid, body: text }), w.deps);
  assert.equal((await say(parent.cookie, 'hello')).status, 403);
  assert.equal((await say(undefined, 'hello')).status, 401);
  assert.equal((await say(a.cookie, '   ')).status, 400);
  assert.equal((await say(a.cookie, 'x'.repeat(1001))).status, 400);
  const r = await say(a.cookie, 'I think option C is also arguable.');
  assert.equal(r.status, 201);
  const { id } = await r.json() as { id: string };
  assert.equal((await handleComments(get(`/x?question=${qid}`, parent.cookie), w.deps)).status, 403);
  const seen = await (await handleComments(get(`/x?question=${qid}`, b.cookie), w.deps)).text();
  assert.match(seen, /Teacher at Bay Primary/);
  assert.ok(!seen.includes('example.invalid') && !seen.includes('11111111') && !seen.includes(a.id), 'no email, SACE number or user id');
  assert.equal(JSON.parse(seen).comments[0].mine, false);
  assert.equal((await handleCommentRemove(send('/x', 'DELETE', 'comment-remove', b.cookie, {}), w.deps, id)).status, 403);
  assert.equal((await handleCommentRemove(send('/x', 'DELETE', 'comment-remove', a.cookie, {}), w.deps, id)).status, 200);
  const after = JSON.parse(await (await handleComments(get(`/x?question=${qid}`, b.cookie), w.deps)).text()).comments[0];
  assert.deepEqual({ body: after.body, removed: after.removed }, { body: '', removed: true });
  assert.equal((await handleComments(get('/x', b.cookie), w.deps)).status, 400);
  assert.equal((await handleComment(send('/x', 'POST', 'comment-create', a.cookie, { question: 'zzzzzzzzzzzz', body: 'hi' }), w.deps)).status, 404);
});

test('moderators decide through their own endpoints: only at 5 moderators, only their group, a reason is required, and they never see an email', async (t0) => {
  const w = await world(); if (!w) return t0.skip('node:sqlite unavailable');
  const author = await w.who(['teacher']); const plain = await w.who(['teacher']);
  const mods = [] as { id: string; cookie: string }[];
  for (let i = 0; i < 5; i++) mods.push(await w.who(['teacher']));
  w.t.raw.prepare("INSERT INTO teacher_applications (user_id, sace_number, school_name, status, submitted_at) VALUES (?, '22222222', 'Bay Primary', 'approved', 1)").run(author.id);
  const sub = await (await handlePropose(send('/x', 'POST', 'proposal-create', author.cookie, { kind: 'edit', questionId: qid, baseVersionId: version(w), content: GOOD, ...SRC }), w.deps)).json() as { id: string };
  const G = 'History|intermediate';
  for (const m of mods.slice(0, 4)) await appointModerator(w.db, G, m.id, 'o', 1);
  const decide = (c: string | undefined, body: unknown, over: Record<string, string> = {}) => handleModDecide(send('/x', 'POST', 'proposal-decide', c, body, over), w.deps, sub.id);
  // role gates
  assert.equal((await handleModQueue(get('/x', plain.cookie), w.deps)).status, 403);
  assert.equal((await handleModQueue(get('/x'), w.deps)).status, 401);
  assert.equal((await decide(plain.cookie, { decision: 'approve', reason: 'fine by me' })).status, 403);
  assert.equal((await decide(mods[0].cookie, { decision: 'approve', reason: 'fine by me' }, { 'x-auth-action': 'other' })).status, 403);
  // four moderators: they see nothing and cannot decide
  assert.deepEqual((await (await handleModQueue(get('/x', mods[0].cookie), w.deps)).json() as { proposals: unknown[] }).proposals, []);
  assert.equal((await decide(mods[0].cookie, { decision: 'approve', reason: 'fine by me' })).status, 403);
  await appointModerator(w.db, G, mods[4].id, 'o', 2);
  const q = await (await handleModQueue(get('/x', mods[0].cookie), w.deps)).text();
  assert.match(q, /Teacher at Bay Primary/);
  assert.ok(!q.includes('example.invalid') && !q.includes('22222222') && !q.includes(author.id), 'no email, SACE number or user id for a moderator');
  assert.equal((await decide(mods[0].cookie, { decision: 'approve', reason: '' })).status, 400);
  assert.equal((await decide(mods[0].cookie, { decision: 'approve', reason: 'Matches the textbook, page 12' })).status, 200);
  assert.equal(w.t.raw.prepare("SELECT decided_by FROM proposals WHERE id = ?").get(sub.id)!.decided_by, 'moderator');
  // the owner's list shows the email, and the decision with its reason
  const owner = (await ownerList(w.db, 'approved'))[0];
  assert.equal(owner.authorEmail, `u1@example.invalid`);
  assert.equal(owner.decisionReason, 'Matches the textbook, page 12');
  assert.equal(owner.moderators, 5);
  assert.equal(owner.selfGoverning, true);
  assert.equal('proposerUserId' in owner, false);
});
