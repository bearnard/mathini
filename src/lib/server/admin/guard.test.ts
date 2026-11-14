import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { authorizeRequest, devBypassEnabled, requireAdmin, forbidden, ACCESS_HEADER } from './guard';
import type { Jwk } from './access';

const TEAM = 'testteam.cloudflareaccess.com';
const ENV = { ACCESS_TEAM_DOMAIN: TEAM, ACCESS_AUD: 'aud-1', ADMIN_EMAILS: 'owner@example.com' };

const saved = { NODE_ENV: process.env.NODE_ENV, BYPASS: process.env.ADMIN_DEV_BYPASS };
const setEnv = (nodeEnv: string | undefined, bypass: string | undefined) => {
  const e = process.env as Record<string, string | undefined>;
  if (nodeEnv === undefined) delete e.NODE_ENV; else e.NODE_ENV = nodeEnv;
  if (bypass === undefined) delete e.ADMIN_DEV_BYPASS; else e.ADMIN_DEV_BYPASS = bypass;
};
afterEach(() => setEnv(saved.NODE_ENV, saved.BYPASS));

const b64url = (b: ArrayBuffer | string) => Buffer.from(typeof b === 'string' ? new TextEncoder().encode(b) : new Uint8Array(b)).toString('base64url');
async function fixture() {
  const pair = await crypto.subtle.generateKey({ name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, true, ['sign', 'verify']);
  const jwk = { ...((await crypto.subtle.exportKey('jwk', pair.publicKey)) as Jwk), kid: 'k1' };
  const now = 1_800_000_000_000;
  const h = b64url(JSON.stringify({ alg: 'RS256', kid: 'k1' }));
  const p = b64url(JSON.stringify({ iss: `https://${TEAM}`, aud: ['aud-1'], email: 'owner@example.com', exp: Math.floor(now / 1000) + 600 }));
  const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', pair.privateKey, new TextEncoder().encode(`${h}.${p}`));
  return { token: `${h}.${p}.${b64url(sig)}`, getKey: async () => jwk, now };
}
const reqWith = (token?: string) => new Request('http://localhost/api/admin/overview', { headers: token ? { [ACCESS_HEADER]: token } : {} });

test('dev bypass is on ONLY for NODE_ENV=development with ADMIN_DEV_BYPASS=1', () => {
  for (const nodeEnv of ['development', 'production', 'test', undefined, '']) {
    for (const flag of ['1', '0', 'true', 'yes', ' 1', '', undefined]) {
      setEnv(nodeEnv, flag);
      assert.equal(devBypassEnabled(), nodeEnv === 'development' && flag === '1', `${nodeEnv}/${flag}`);
    }
  }
});

test('PRODUCTION: ADMIN_DEV_BYPASS=1 does NOT let a request in (API guard)', async () => {
  setEnv('production', '1');
  const denied = await requireAdmin(reqWith(), { env: null });
  assert.equal(denied?.status, 403);
  const denied2 = await requireAdmin(reqWith(), { env: ENV });
  assert.equal(denied2?.status, 403);
});
test('PRODUCTION: ADMIN_DEV_BYPASS=1 does NOT let a page request in (authorizeRequest)', async () => {
  setEnv('production', '1');
  assert.deepEqual(await authorizeRequest(() => null, { env: null }), { ok: false, reason: 'not configured' });
});
test('PRODUCTION: bypass flag is ignored even alongside a valid config but no token', async () => {
  setEnv('production', '1');
  assert.equal((await authorizeRequest(() => null, { env: ENV })).ok, false);
});
test('development without the flag is NOT bypassed', async () => {
  setEnv('development', undefined);
  assert.equal((await requireAdmin(reqWith(), { env: null }))?.status, 403);
  setEnv('development', '0');
  assert.equal((await requireAdmin(reqWith(), { env: null }))?.status, 403);
});
test('development WITH the flag is allowed (local use only)', async () => {
  setEnv('development', '1');
  assert.equal(await requireAdmin(reqWith(), { env: null }), null);
  assert.deepEqual(await authorizeRequest(() => null, { env: null }), { ok: true, email: 'dev@localhost' });
});

test('no assertion header -> 403', async () => {
  setEnv('production', undefined);
  const f = await fixture();
  const r = await requireAdmin(reqWith(), { env: ENV, getKey: f.getKey, now: f.now });
  assert.equal(r?.status, 403);
});
test('a valid assertion with full config -> allowed', async () => {
  setEnv('production', undefined);
  const f = await fixture();
  assert.equal(await requireAdmin(reqWith(f.token), { env: ENV, getKey: f.getKey, now: f.now }), null);
});
test('a valid assertion but missing config -> 403 (fail closed)', async () => {
  setEnv('production', undefined);
  const f = await fixture();
  for (const env of [null, {}, { ...ENV, ACCESS_AUD: '' }, { ...ENV, ADMIN_EMAILS: undefined }, { ...ENV, ACCESS_TEAM_DOMAIN: undefined }]) {
    const r = await requireAdmin(reqWith(f.token), { env: env as never, getKey: f.getKey, now: f.now });
    assert.equal(r?.status, 403, JSON.stringify(env));
  }
});
test('an expired or garbage assertion -> 403', async () => {
  setEnv('production', undefined);
  const f = await fixture();
  assert.equal((await requireAdmin(reqWith(f.token), { env: ENV, getKey: f.getKey, now: f.now + 3600_000 }))?.status, 403);
  assert.equal((await requireAdmin(reqWith('garbage'), { env: ENV, getKey: f.getKey, now: f.now }))?.status, 403);
});
test('a throwing key fetch -> 403, never an exception', async () => {
  setEnv('production', undefined);
  const f = await fixture();
  const r = await requireAdmin(reqWith(f.token), { env: ENV, getKey: async () => { throw new Error('down'); }, now: f.now });
  assert.equal(r?.status, 403);
});
test('the 403 is JSON, uncached, and reveals no reason', async () => {
  const r = forbidden();
  assert.equal(r.status, 403);
  assert.equal(r.headers.get('cache-control'), 'no-store');
  assert.equal(await r.text(), '{"error":"Forbidden"}');
});
