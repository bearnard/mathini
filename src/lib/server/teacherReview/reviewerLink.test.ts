import { test } from 'node:test';
import assert from 'node:assert/strict';
import { constantTimeEqual, expiryFrom, extendReviewer, findReviewerByToken, generateReviewerLink, generateToken, hashToken, isWellFormedToken, linkState, revokeReviewer, TOKEN_PATTERN } from './reviewerLink';
import { createReviewer, NOW, openReviewDb, seedPack } from './testDb';

test('a token is 32 random bytes as 43 base64url characters, and two tokens differ', () => {
  const t = generateToken();
  assert.equal(t.length, 43);
  assert.match(t, TOKEN_PATTERN);
  assert.equal(Buffer.from(t, 'base64url').length, 32);
  assert.notEqual(t, generateToken());
  assert.equal(new Set(Array.from({ length: 200 }, generateToken)).size, 200);
});

test('isWellFormedToken accepts only 43 url-safe characters', () => {
  assert.equal(isWellFormedToken(generateToken()), true);
  for (const bad of ['', 'abc', 'a'.repeat(42), 'a'.repeat(44), 'a'.repeat(42) + '+', 'a'.repeat(42) + '/', 'a'.repeat(42) + ' ', null, undefined, 42]) assert.equal(isWellFormedToken(bad), false, String(bad));
});

test('generateReviewerLink returns a token and the hash of exactly that token', async () => {
  const l = await generateReviewerLink();
  assert.ok(isWellFormedToken(l.token));
  assert.equal(l.hash, await hashToken(l.token));
  assert.notEqual((await generateReviewerLink()).token, l.token);
});

test('hashToken is the hex SHA-256 (known vector) and is stable', async () => {
  assert.equal(await hashToken('abc'), 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  assert.equal(await hashToken('abc'), await hashToken('abc'));
  assert.match(await hashToken(generateToken()), /^[0-9a-f]{64}$/);
});

test('constantTimeEqual', () => {
  assert.equal(constantTimeEqual('abc', 'abc'), true);
  assert.equal(constantTimeEqual('abc', 'abd'), false);
  assert.equal(constantTimeEqual('abc', 'abcd'), false);
  assert.equal(constantTimeEqual('', ''), true);
  assert.equal(constantTimeEqual('', 'a'), false);
});

test('expiry: 14 days by default; usable strictly before the expiry; revoked wins', () => {
  assert.equal(expiryFrom(1000), 1000 + 14 * 86_400_000);
  assert.equal(expiryFrom(0, 1), 86_400_000);
  assert.equal(linkState({ expires_at: 100, revoked_at: null }, 99), 'ok');
  assert.equal(linkState({ expires_at: 100, revoked_at: null }, 100), 'expired');
  assert.equal(linkState({ expires_at: 100, revoked_at: 50 }, 10), 'revoked');
  assert.equal(linkState({ expires_at: 100, revoked_at: 50 }, 500), 'revoked');
});

test('create, find, expire, revoke and extend a reviewer link; only the hash is stored', async (t0) => {
  const o = await openReviewDb(); if (!o) return t0.skip('node:sqlite unavailable');
  const { db, t } = o; seedPack(t.raw);
  const r = await createReviewer(db, 1, 'Ms N.', 'WhatsApp', NOW);
  assert.equal(r.expiresAt, NOW + 14 * 86_400_000);

  const row = t.raw.prepare('SELECT * FROM reviewers WHERE id = ?').get(r.reviewerId) as Record<string, unknown>;
  assert.equal(row.token_hash, await hashToken(r.token));
  assert.ok(!JSON.stringify(row).includes(r.token), 'the token itself must not be stored');

  const ok = await findReviewerByToken(db, r.token, NOW + 1000);
  assert.ok(ok.found && ok.state === 'ok' && ok.reviewer.id === r.reviewerId);
  assert.deepEqual(await findReviewerByToken(db, generateToken(), NOW), { found: false });
  assert.deepEqual(await findReviewerByToken(db, 'short', NOW), { found: false });
  assert.deepEqual(await findReviewerByToken(db, r.token.slice(0, 42) + (r.token.endsWith('A') ? 'B' : 'A'), NOW), { found: false });

  const late = await findReviewerByToken(db, r.token, r.expiresAt + 1);
  assert.ok(late.found && late.state === 'expired');

  await extendReviewer(db, r.reviewerId, r.expiresAt + 86_400_000);
  const again = await findReviewerByToken(db, r.token, r.expiresAt + 1);
  assert.ok(again.found && again.state === 'ok');

  await revokeReviewer(db, r.reviewerId, NOW + 5);
  await revokeReviewer(db, r.reviewerId, NOW + 99); // the first time is kept
  const rev = await findReviewerByToken(db, r.token, NOW + 10);
  assert.ok(rev.found && rev.state === 'revoked' && rev.reviewer.revoked_at === NOW + 5);
});

test('two reviewers of one pack get different links', async (t0) => {
  const o = await openReviewDb(); if (!o) return t0.skip('node:sqlite unavailable');
  seedPack(o.t.raw);
  const a = await createReviewer(o.db, 1, 'A', null, NOW);
  const b = await createReviewer(o.db, 1, 'B', null, NOW);
  assert.notEqual(a.token, b.token);
  assert.notEqual(a.reviewerId, b.reviewerId);
});
