import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createJwksCache, parseAccessConfig, verifyAccessJwt, type AccessConfig, type Jwk } from './access';

const TEAM = 'testteam.cloudflareaccess.com';
const AUD = 'aud-tag-123';
const CFG: AccessConfig = { teamDomain: TEAM, aud: AUD, adminEmails: ['owner@example.com'] };
const NOW = 1_800_000_000_000;
const NOW_S = Math.floor(NOW / 1000);

const b64url = (b: ArrayBuffer | Uint8Array | string) => {
  const bytes = typeof b === 'string' ? new TextEncoder().encode(b) : new Uint8Array(b);
  return Buffer.from(bytes).toString('base64url');
};

async function makeKey() {
  const pair = await crypto.subtle.generateKey({ name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, true, ['sign', 'verify']);
  const jwk = (await crypto.subtle.exportKey('jwk', pair.publicKey)) as Jwk;
  return { priv: pair.privateKey, jwk };
}

async function sign(priv: CryptoKey, header: Record<string, unknown>, payload: Record<string, unknown>) {
  const h = b64url(JSON.stringify(header));
  const p = b64url(JSON.stringify(payload));
  const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', priv, new TextEncoder().encode(`${h}.${p}`));
  return `${h}.${p}.${b64url(sig)}`;
}

const claims = (over: Record<string, unknown> = {}) => ({ iss: `https://${TEAM}`, aud: [AUD], email: 'owner@example.com', exp: NOW_S + 3600, iat: NOW_S - 10, ...over });

async function setup() {
  const k = await makeKey();
  const jwks: Jwk[] = [{ ...k.jwk, kid: 'kid-1' }];
  const getKey = async (_t: string, kid: string) => jwks.find((j) => j.kid === kid) ?? null;
  const good = (over: Record<string, unknown> = {}, header: Record<string, unknown> = {}) => sign(k.priv, { alg: 'RS256', kid: 'kid-1', typ: 'JWT', ...header }, claims(over));
  return { k, jwks, getKey, good };
}

test('a good token is accepted and returns the email', async () => {
  const s = await setup();
  assert.deepEqual(await verifyAccessJwt(await s.good(), CFG, s.getKey, NOW), { ok: true, email: 'owner@example.com' });
});
test('aud may be a string or an array', async () => {
  const s = await setup();
  assert.equal((await verifyAccessJwt(await s.good({ aud: AUD }), CFG, s.getKey, NOW)).ok, true);
  assert.equal((await verifyAccessJwt(await s.good({ aud: ['other', AUD] }), CFG, s.getKey, NOW)).ok, true);
});
test('email match is case-insensitive', async () => {
  const s = await setup();
  assert.equal((await verifyAccessJwt(await s.good({ email: 'Owner@Example.COM' }), CFG, s.getKey, NOW)).ok, true);
});
test('expired token is rejected (beyond the 30 s leeway)', async () => {
  const s = await setup();
  const r = await verifyAccessJwt(await s.good({ exp: NOW_S - 31 }), CFG, s.getKey, NOW);
  assert.deepEqual(r, { ok: false, reason: 'expired' });
  assert.equal((await verifyAccessJwt(await s.good({ exp: NOW_S - 5 }), CFG, s.getKey, NOW)).ok, true);
});
test('a token without exp is rejected', async () => {
  const s = await setup();
  assert.equal((await verifyAccessJwt(await s.good({ exp: undefined }), CFG, s.getKey, NOW)).ok, false);
  assert.equal((await verifyAccessJwt(await s.good({ exp: '9999999999' }), CFG, s.getKey, NOW)).ok, false);
});
test('nbf in the future is rejected', async () => {
  const s = await setup();
  assert.deepEqual(await verifyAccessJwt(await s.good({ nbf: NOW_S + 600 }), CFG, s.getKey, NOW), { ok: false, reason: 'not yet valid' });
  assert.equal((await verifyAccessJwt(await s.good({ nbf: NOW_S - 600 }), CFG, s.getKey, NOW)).ok, true);
});
test('wrong audience is rejected', async () => {
  const s = await setup();
  assert.deepEqual(await verifyAccessJwt(await s.good({ aud: ['someone-else'] }), CFG, s.getKey, NOW), { ok: false, reason: 'wrong audience' });
  assert.equal((await verifyAccessJwt(await s.good({ aud: undefined }), CFG, s.getKey, NOW)).ok, false);
});
test('wrong issuer is rejected', async () => {
  const s = await setup();
  assert.deepEqual(await verifyAccessJwt(await s.good({ iss: 'https://evil.cloudflareaccess.com' }), CFG, s.getKey, NOW), { ok: false, reason: 'wrong issuer' });
  assert.equal((await verifyAccessJwt(await s.good({ iss: TEAM }), CFG, s.getKey, NOW)).ok, false);
});
test('an email that is not in ADMIN_EMAILS is rejected', async () => {
  const s = await setup();
  assert.deepEqual(await verifyAccessJwt(await s.good({ email: 'stranger@example.com' }), CFG, s.getKey, NOW), { ok: false, reason: 'email not allowed' });
  assert.equal((await verifyAccessJwt(await s.good({ email: undefined }), CFG, s.getKey, NOW)).ok, false);
  assert.equal((await verifyAccessJwt(await s.good({ email: 'owner@example.com.evil.com' }), CFG, s.getKey, NOW)).ok, false);
});
test('a tampered payload fails the signature check', async () => {
  const s = await setup();
  const [h, , sig] = (await s.good()).split('.');
  const forged = b64url(JSON.stringify(claims({ email: 'stranger@example.com' })));
  const swapped = `${h}.${forged}.${sig}`;
  // The forged token claims an email that would be rejected anyway, so also forge an allowed one signed by nobody.
  const forgedAllowed = `${h}.${b64url(JSON.stringify(claims({ exp: NOW_S + 999999 })))}.${sig}`;
  assert.deepEqual(await verifyAccessJwt(swapped, CFG, s.getKey, NOW), { ok: false, reason: 'bad signature' });
  assert.deepEqual(await verifyAccessJwt(forgedAllowed, CFG, s.getKey, NOW), { ok: false, reason: 'bad signature' });
});
test('a token signed by a different key with the same kid is rejected', async () => {
  const s = await setup();
  const other = await makeKey();
  const token = await sign(other.priv, { alg: 'RS256', kid: 'kid-1' }, claims());
  assert.deepEqual(await verifyAccessJwt(token, CFG, s.getKey, NOW), { ok: false, reason: 'bad signature' });
});
test('an unknown kid is rejected', async () => {
  const s = await setup();
  const token = await sign(s.k.priv, { alg: 'RS256', kid: 'nope' }, claims());
  assert.deepEqual(await verifyAccessJwt(token, CFG, s.getKey, NOW), { ok: false, reason: 'unknown key' });
});
test('alg "none" is rejected', async () => {
  const s = await setup();
  const none = `${b64url(JSON.stringify({ alg: 'none', kid: 'kid-1' }))}.${b64url(JSON.stringify(claims()))}.`;
  assert.equal((await verifyAccessJwt(none, CFG, s.getKey, NOW)).ok, false);
  const noneSig = `${b64url(JSON.stringify({ alg: 'none', kid: 'kid-1' }))}.${b64url(JSON.stringify(claims()))}.${b64url('x')}`;
  assert.deepEqual(await verifyAccessJwt(noneSig, CFG, s.getKey, NOW), { ok: false, reason: 'alg not allowed' });
});
test('HS256 key-confusion is rejected (public key used as an HMAC secret)', async () => {
  const s = await setup();
  const h = b64url(JSON.stringify({ alg: 'HS256', kid: 'kid-1' }));
  const p = b64url(JSON.stringify(claims()));
  const hmacKey = await crypto.subtle.importKey('raw', new TextEncoder().encode(String(s.k.jwk.n)), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', hmacKey, new TextEncoder().encode(`${h}.${p}`));
  assert.deepEqual(await verifyAccessJwt(`${h}.${p}.${b64url(sig)}`, CFG, s.getKey, NOW), { ok: false, reason: 'alg not allowed' });
});
test('other algorithms are rejected (RS384, ES256, PS256, lower-case rs256)', async () => {
  const s = await setup();
  for (const alg of ['RS384', 'RS512', 'ES256', 'PS256', 'rs256', '']) {
    const t = await s.good({}, { alg });
    assert.equal((await verifyAccessJwt(t, CFG, s.getKey, NOW)).ok, false, alg);
  }
});
test('a missing kid is rejected', async () => {
  const s = await setup();
  const t = await sign(s.k.priv, { alg: 'RS256' }, claims());
  assert.deepEqual(await verifyAccessJwt(t, CFG, s.getKey, NOW), { ok: false, reason: 'no kid' });
});
test('missing config denies everything, even a perfect token (fail closed)', async () => {
  const s = await setup();
  const t = await s.good();
  assert.deepEqual(await verifyAccessJwt(t, null, s.getKey, NOW), { ok: false, reason: 'not configured' });
});
test('config parsing: every one of the three settings is required', () => {
  const full = { ACCESS_TEAM_DOMAIN: TEAM, ACCESS_AUD: AUD, ADMIN_EMAILS: 'Owner@Example.com, second@example.com' };
  assert.deepEqual(parseAccessConfig(full), { teamDomain: TEAM, aud: AUD, adminEmails: ['owner@example.com', 'second@example.com'] });
  for (const k of ['ACCESS_TEAM_DOMAIN', 'ACCESS_AUD', 'ADMIN_EMAILS'] as const) {
    assert.equal(parseAccessConfig({ ...full, [k]: undefined }), null, k);
    assert.equal(parseAccessConfig({ ...full, [k]: '' }), null, k);
    assert.equal(parseAccessConfig({ ...full, [k]: '   ' }), null, k);
  }
  assert.equal(parseAccessConfig({ ...full, ADMIN_EMAILS: 'not-an-email' }), null);
  assert.equal(parseAccessConfig({ ...full, ADMIN_EMAILS: ' , ,' }), null);
});
test('config parsing rejects a team domain that is not <team>.cloudflareaccess.com', () => {
  for (const bad of ['evil.com', 'team.cloudflareaccess.com.evil.com', 'https://team.cloudflareaccess.com', 'team.cloudflareaccess.com/x', '.cloudflareaccess.com', 'a b.cloudflareaccess.com']) {
    assert.equal(parseAccessConfig({ ACCESS_TEAM_DOMAIN: bad, ACCESS_AUD: AUD, ADMIN_EMAILS: 'a@b.co' }), null, bad);
  }
});
test('malformed tokens are rejected without throwing', async () => {
  const s = await setup();
  for (const bad of [null, undefined, '', 'abc', 'a.b', 'a.b.c', '...', 'a.b.c.d', '!!!.@@@.###', 'x'.repeat(9000), `${b64url('[]')}.${b64url('{}')}.${b64url('x')}`]) {
    const r = await verifyAccessJwt(bad as string, CFG, s.getKey, NOW);
    assert.equal(r.ok, false, String(bad).slice(0, 20));
  }
});
test('a JWKS fetch failure denies (fail closed)', async () => {
  const s = await setup();
  const boom = async () => { throw new Error('network down'); };
  assert.deepEqual(await verifyAccessJwt(await s.good(), CFG, boom, NOW), { ok: false, reason: 'error' });
});
test('a non-RSA key in the JWKS is rejected', async () => {
  const s = await setup();
  const t = await s.good();
  const getKey = async () => ({ kid: 'kid-1', kty: 'EC', n: 'x', e: 'AQAB' }) as Jwk;
  assert.equal((await verifyAccessJwt(t, CFG, getKey, NOW)).ok, false);
});

test('JWKS cache: fetches once within the TTL, refetches after it', async () => {
  let calls = 0;
  const cache = createJwksCache(async () => { calls++; return [{ kid: 'k1', kty: 'RSA', n: 'n', e: 'e' }]; }, { ttlMs: 1000, refetchCooldownMs: 100 });
  await cache(TEAM, 'k1', 0);
  await cache(TEAM, 'k1', 500);
  assert.equal(calls, 1);
  await cache(TEAM, 'k1', 1001);
  assert.equal(calls, 2);
});
test('JWKS cache: an unknown kid triggers at most one refetch per cooldown', async () => {
  let calls = 0;
  const cache = createJwksCache(async () => { calls++; return [{ kid: 'k1' }]; }, { ttlMs: 10_000, refetchCooldownMs: 1000 });
  await cache(TEAM, 'k1', 0); // calls = 1
  assert.equal(await cache(TEAM, 'nope', 500), null); // inside cooldown: no refetch
  assert.equal(calls, 1);
  assert.equal(await cache(TEAM, 'nope', 1500), null); // after cooldown: one refetch
  assert.equal(calls, 2);
  assert.equal(await cache(TEAM, 'nope', 1600), null); // cooldown again
  assert.equal(calls, 2);
});
test('JWKS cache: a rotated-in key is found after the refetch', async () => {
  let rotated = false;
  const cache = createJwksCache(async () => (rotated ? [{ kid: 'k1' }, { kid: 'k2' }] : [{ kid: 'k1' }]), { ttlMs: 10_000, refetchCooldownMs: 1000 });
  await cache(TEAM, 'k1', 0);
  rotated = true;
  assert.deepEqual(await cache(TEAM, 'k2', 2000), { kid: 'k2' });
});
test('JWKS cache is per team domain', async () => {
  let calls = 0;
  const cache = createJwksCache(async () => { calls++; return [{ kid: 'k1' }]; });
  await cache('a.cloudflareaccess.com', 'k1', 0);
  await cache('b.cloudflareaccess.com', 'k1', 1);
  assert.equal(calls, 2);
});
