import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createLimiter, handleReview, MAX_BODY_BYTES, readCapped, reviewJson, tokenFromRequest, WINDOW_MS, type ReviewDeps } from './http';
import { MAX_SAVES_PER_LINK, SEEN_REFRESH_MS, saveResponse, touchSeen } from './store';
import { generateToken } from './reviewerLink';
import { newReviewer, NOW, openReviewDb, seedPack } from './testDb';
import type { ReviewerRow } from './types';

// Findings of the 2026-11 security review: write-budget abuse, token in logs, limiter flush, unbounded body read.

const setup = async () => {
  const o = await openReviewDb(); if (!o) return null;
  const s = seedPack(o.t.raw);
  const r = await newReviewer(o.db, s.packId);
  const load = () => o.t.raw.prepare('SELECT * FROM reviewers WHERE id = ?').get(r.reviewerId) as unknown as ReviewerRow;
  return { ...o, s, r, load };
};
const count = (x: NonNullable<Awaited<ReturnType<typeof setup>>>, sql: string) => (x.t.raw.prepare(sql).get() as { n: number }).n;

test('an identical re-save writes nothing: no new row, no count, no timestamp', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const body = { itemId: x.s.qItemId, verdict: 'correct', confidence: 'sure', reason: 'fine' };
  assert.deepEqual(await saveResponse(x.db, x.load(), body, NOW), { ok: true, answered: 1 });
  assert.equal(x.load().save_count, 1);
  for (let i = 1; i <= 5; i++) assert.deepEqual(await saveResponse(x.db, x.load(), body, NOW + i * 1000), { ok: true, answered: 1 });
  assert.equal(x.load().save_count, 1, 'five identical autosaves cost no writes');
  assert.equal(x.load().last_seen_at, NOW);
  assert.equal(count(x, 'SELECT updated_at AS n FROM review_responses'), NOW);
  await saveResponse(x.db, x.load(), { ...body, reason: 'fine, really' }, NOW + 9000);
  assert.equal(x.load().save_count, 2, 'a real change is saved and counted');
});

test('a link can make only MAX_SAVES_PER_LINK saves, then gets 429; reads and identical saves still work', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  x.t.raw.prepare('UPDATE reviewers SET save_count = ? WHERE id = ?').run(MAX_SAVES_PER_LINK - 1, x.r.reviewerId);
  assert.equal((await saveResponse(x.db, x.load(), { itemId: x.s.qItemId, verdict: 'correct' }, NOW)).ok, true);
  assert.equal(x.load().save_count, MAX_SAVES_PER_LINK);
  assert.deepEqual(await saveResponse(x.db, x.load(), { itemId: x.s.qItemId, verdict: 'unsure' }, NOW + 1), { ok: false, status: 429, error: 'too many saves for this link' });
  assert.equal(x.load().save_count, MAX_SAVES_PER_LINK, 'a refused save writes nothing');
  assert.deepEqual(await saveResponse(x.db, x.load(), { itemId: x.s.qItemId, verdict: 'correct' }, NOW + 2), { ok: true, answered: 1 }, 'an unchanged answer is not a new save');
});

test('page loads refresh last_seen_at at most every five minutes', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  await touchSeen(x.db, x.load(), NOW);
  assert.equal(x.load().last_seen_at, NOW);
  await touchSeen(x.db, x.load(), NOW + SEEN_REFRESH_MS - 1);
  assert.equal(x.load().last_seen_at, NOW, 'too soon: no write');
  await touchSeen(x.db, x.load(), NOW + SEEN_REFRESH_MS);
  assert.equal(x.load().last_seen_at, NOW + SEEN_REFRESH_MS);
});

test('the token is accepted as Authorization: Bearer and as X-Review-Token; the URL is never read', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const r = (headers: Record<string, string>, url = 'https://e.com/api/teacher-review') => new Request(url, { headers });
  const t = x.r.token;
  assert.equal(tokenFromRequest(r({ authorization: `Bearer ${t}` })), t);
  assert.equal(tokenFromRequest(r({ Authorization: `bearer   ${t} ` })), t);
  assert.equal(tokenFromRequest(r({ 'x-review-token': t })), t);
  assert.equal(tokenFromRequest(r({})), '');
  assert.equal(tokenFromRequest(r({}, `https://e.com/api/teacher-review?token=${t}`)), '');
  assert.equal(tokenFromRequest(r({ authorization: `Basic ${t}` })), '', 'only the Bearer scheme');
  const deps: ReviewDeps = { db: x.db, now: NOW + 1000, tokenLimiter: createLimiter(50, WINDOW_MS), unknownLimiter: createLimiter(50, WINDOW_MS) };
  const echo = async (c: { reviewer: { id: number } }) => reviewJson({ id: c.reviewer.id });
  const res = await handleReview(new Request('https://e.com/api/teacher-review', { headers: { authorization: `Bearer ${t}`, 'x-review-action': 'load' } }), 'load', echo, deps);
  assert.equal(res.status, 200);
  assert.equal(JSON.stringify(await res.json()).includes(t), false, 'the token is never echoed');
});

test('the limiter forgets the oldest key at the cap, so many keys cannot flush another client\'s limit', () => {
  const l = createLimiter(2, 1000, 3);
  assert.ok(l.allow('victim', 0) && l.allow('victim', 0));
  assert.equal(l.allow('victim', 0), false, 'victim is at its limit');
  for (const k of ['a', 'b']) l.allow(k, 0);
  l.allow('c', 0); // over the cap of 3: only the oldest key (victim) can go
  assert.equal(l.allow('a', 0), true);
  const attacker = createLimiter(2, 1000, 3);
  assert.ok(attacker.allow('x', 0) && attacker.allow('x', 0) && !attacker.allow('x', 0));
  attacker.allow('k1', 1); attacker.allow('k2', 1);
  assert.equal(attacker.allow('x', 1), false, 'x keeps its bucket while other keys fill in: not everything is cleared');
});

test('readCapped refuses an oversized body by Content-Length or by streaming, without buffering it all', async () => {
  const mk = (body: BodyInit | null, headers: Record<string, string> = {}) => new Request('https://e.com/x', { method: 'POST', body, headers, ...(body instanceof ReadableStream ? { duplex: 'half' } : {}) } as RequestInit);
  assert.equal(await readCapped(mk('{"a":1}'), MAX_BODY_BYTES), '{"a":1}');
  assert.equal(await readCapped(new Request('https://e.com/x', { method: 'GET' }), MAX_BODY_BYTES), '');
  assert.equal(await readCapped(mk('x'.repeat(MAX_BODY_BYTES + 1)), MAX_BODY_BYTES), null);
  assert.equal(await readCapped(mk('x'.repeat(MAX_BODY_BYTES)), MAX_BODY_BYTES), 'x'.repeat(MAX_BODY_BYTES));
  let pulled = 0;
  const stream = new ReadableStream<Uint8Array>({ pull(c) { pulled += 1024; c.enqueue(new Uint8Array(1024)); if (pulled > 10_000_000) c.close(); } });
  assert.equal(await readCapped(mk(stream), MAX_BODY_BYTES), null);
  assert.ok(pulled < 100_000, `read ${pulled} bytes before giving up`);
  assert.equal(await readCapped(new Request('https://e.com/x', { method: 'POST', body: 'ok', headers: { 'content-length': '99999' } }), MAX_BODY_BYTES), null, 'a declared size over the cap is refused up front');
  void generateToken;
});
