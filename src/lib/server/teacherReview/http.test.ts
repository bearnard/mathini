import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createLimiter, handleReview, reviewJson, WINDOW_MS, type ReviewDeps } from './http';
import { loadReviewerPack, markDone, saveResponse } from './store';
import { generateToken, revokeReviewer } from './reviewerLink';
import { newReviewer, NOW, openReviewDb, seedPack } from './testDb';

const req = (token: string, action: string | null, method = 'GET', body?: unknown, extra: Record<string, string> = {}) =>
  new Request('https://example.com/api/teacher-review', {
    method,
    headers: { 'x-review-token': token, ...(action ? { 'x-review-action': action } : {}), ...extra },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

const setup = async () => {
  const o = await openReviewDb(); if (!o) return null;
  const s = seedPack(o.t.raw);
  const r = await newReviewer(o.db, s.packId);
  const deps = (now = NOW + 1000): ReviewDeps => ({ db: o.db, now, tokenLimiter: createLimiter(5, WINDOW_MS), unknownLimiter: createLimiter(3, WINDOW_MS) });
  return { ...o, s, r, deps };
};

const echo = async (c: { reviewer: { display_name: string }; body: unknown }) => reviewJson({ name: c.reviewer.display_name, body: c.body });

test('every answer carries the privacy headers', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  for (const res of [
    await handleReview(req(x.r.token, 'load'), 'load', echo, x.deps()),
    await handleReview(req(generateToken(), 'load'), 'load', echo, x.deps()),
    await handleReview(req('bad', null), 'load', echo, x.deps()),
  ]) {
    assert.equal(res.headers.get('cache-control'), 'no-store');
    assert.equal(res.headers.get('referrer-policy'), 'no-referrer');
    assert.match(res.headers.get('x-robots-tag') ?? '', /noindex/);
    assert.equal(res.headers.get('content-type'), 'application/json');
  }
});

test('the X-Review-Action header must name the action', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  assert.equal((await handleReview(req(x.r.token, null), 'load', echo, x.deps())).status, 403);
  assert.equal((await handleReview(req(x.r.token, 'save'), 'load', echo, x.deps())).status, 403);
  assert.equal((await handleReview(req(x.r.token, 'load'), 'load', echo, x.deps())).status, 200);
});

test('the token is read from the header only; a token in the URL, or no token, finds nothing', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const d = { ...x.deps(), unknownLimiter: createLimiter(100, WINDOW_MS) };
  const inUrl = new Request(`https://example.com/api/teacher-review/${x.r.token}?token=${x.r.token}`, { headers: { 'x-review-action': 'load' } });
  assert.equal((await handleReview(inUrl, 'load', echo, d)).status, 404);
  assert.equal((await handleReview(req('', 'load'), 'load', echo, d)).status, 404);
  assert.equal((await handleReview(req(x.r.token, 'load'), 'load', echo, d)).status, 200);
});

test('link states: unknown and malformed 404, revoked and expired 410, draft pack 404, closed pack 410', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const run = (token: string, now?: number) => handleReview(req(token, 'load'), 'load', echo, { ...x.deps(now), unknownLimiter: createLimiter(100, WINDOW_MS) });
  assert.equal((await run(generateToken())).status, 404);
  assert.equal((await run('short')).status, 404);
  assert.equal((await run(x.r.token)).status, 200);
  assert.equal((await run(x.r.token, x.r.expiresAt + 1)).status, 410);
  assert.deepEqual(await (await run(x.r.token, x.r.expiresAt + 1)).json(), { error: 'expired' });
  const closed = await newReviewer(x.db, 2);
  assert.deepEqual(await (await run(closed.token)).json(), { error: 'closed' });
  const draft = await newReviewer(x.db, 3);
  assert.equal((await run(draft.token)).status, 404);
  await revokeReviewer(x.db, x.r.reviewerId, NOW + 5);
  const res = await run(x.r.token);
  assert.equal(res.status, 410);
  assert.deepEqual(await res.json(), { error: 'revoked' });
});

test('rate limits: per link, and per client for unknown links', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const d = x.deps();
  const statuses: number[] = [];
  for (let i = 0; i < 7; i++) statuses.push((await handleReview(req(x.r.token, 'load'), 'load', echo, d)).status);
  assert.deepEqual(statuses, [200, 200, 200, 200, 200, 429, 429]);
  const other = await newReviewer(x.db, 1, 'Mr B');
  assert.equal((await handleReview(req(other.token, 'load'), 'load', echo, d)).status, 200, 'another link has its own allowance');
  const guesses: number[] = [];
  for (let i = 0; i < 5; i++) { const t = generateToken(); guesses.push((await handleReview(req(t, 'load', 'GET', undefined, { 'cf-connecting-ip': '1.2.3.4' }), 'load', echo, d)).status); }
  assert.deepEqual(guesses, [404, 404, 404, 429, 429]);
});

test('bodies: JSON is parsed, bad JSON is 400, over 8 KB is 413, GET has none', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const post = (body: string) => handleReview(new Request('https://e.com/api', { method: 'POST', headers: { 'x-review-action': 'save', 'x-review-token': x.r.token }, body }), 'save', echo, { ...x.deps(), tokenLimiter: createLimiter(100, WINDOW_MS) });
  assert.deepEqual(await (await post('{"a":1}')).json(), { name: 'Ms N.', body: { a: 1 } });
  assert.equal((await post('{nope')).status, 400);
  assert.equal((await post(JSON.stringify({ a: 'x'.repeat(9000) }))).status, 413);
});

test('save and done through the handler, scoped to the link', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const save = await handleReview(req(x.r.token, 'save', 'POST', { itemId: x.s.qItemId, verdict: 'correct' }), 'save', async (c) => {
    const r = await saveResponse(c.db, c.reviewer, c.body, c.now);
    return r.ok ? reviewJson({ ok: true, answered: r.answered }) : reviewJson({ error: r.error }, r.status);
  }, x.deps());
  assert.deepEqual(await save.json(), { ok: true, answered: 1 });
  const done = await handleReview(req(x.r.token, 'done', 'POST', {}), 'done', async (c) => { await markDone(c.db, c.reviewer, c.now); return reviewJson({ ok: true }); }, x.deps());
  assert.equal(done.status, 200);
  const view = await handleReview(req(x.r.token, 'load'), 'load', async (c) => reviewJson(await loadReviewerPack(c.db, c.reviewer, c.pack)), x.deps());
  assert.equal(((await view.json()) as { answered: number }).answered, 1);
});

test('a failure gives a generic 500 and the token never reaches the log', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const logged: string[] = [];
  const orig = console.error;
  console.error = (...a: unknown[]) => { logged.push(a.map(String).join(' ')); };
  try {
    const boom = async () => { throw new Error('database exploded'); };
    const res = await handleReview(req(x.r.token, 'load'), 'load', boom, x.deps());
    assert.equal(res.status, 500);
    assert.deepEqual(await res.json(), { error: 'Internal error' });
    const badDb = { async all() { throw new Error(`query for ${x.r.token} failed`.replace(x.r.token, 'redacted')); }, async batch() {} };
    assert.equal((await handleReview(req(x.r.token, 'load'), 'load', echo, { ...x.deps(), db: badDb })).status, 500);
  } finally { console.error = orig; }
  assert.ok(logged.length >= 2);
  assert.ok(logged.every((l) => !l.includes(x.r.token)), logged.join('\n'));
});
