import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CONSENT_DAYS, CONSENT_DEFAULT, CONSENT_KEY, GTM_ID, GTM_NOSCRIPT_URL, GTM_SCRIPT_URL, clearChoice, consentUpdateFor, isPublicPath, privacySignalOn, readChoice, writeChoice } from './gtmConsent';

const mem = () => { const m = new Map<string, string>(); return { m, getItem: (k: string) => m.get(k) ?? null, setItem: (k: string, v: string) => void m.set(k, v), removeItem: (k: string) => void m.delete(k) }; };
const DAY = 86_400_000;

test('the container id and URLs are the owner\'s, and the defaults deny everything before anything loads', () => {
  assert.equal(GTM_ID, 'GTM-MNM3XGLP');
  assert.equal(GTM_SCRIPT_URL, 'https://www.googletagmanager.com/gtm.js?id=GTM-MNM3XGLP');
  assert.equal(GTM_NOSCRIPT_URL, 'https://www.googletagmanager.com/ns.html?id=GTM-MNM3XGLP');
  assert.deepEqual(CONSENT_DEFAULT, { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', wait_for_update: 500 });
});

test('Accept grants analytics only (ads stay denied); Decline keeps analytics denied', () => {
  assert.deepEqual(consentUpdateFor('accept'), { analytics_storage: 'granted' });
  assert.deepEqual(consentUpdateFor('decline'), { analytics_storage: 'denied' });
  for (const c of ['accept', 'decline'] as const) assert.ok(!('ad_storage' in consentUpdateFor(c)));
});

test('a choice is remembered for six months, then asked again', () => {
  const s = mem();
  assert.equal(readChoice(s, 1_000), null);
  writeChoice(s, 'accept', 1_000);
  assert.equal(readChoice(s, 1_000 + 100 * DAY), 'accept');
  assert.equal(readChoice(s, 1_000 + (CONSENT_DAYS - 1) * DAY), 'accept');
  assert.equal(readChoice(s, 1_000 + (CONSENT_DAYS + 1) * DAY), null);
  writeChoice(s, 'decline', 5_000);
  assert.equal(readChoice(s, 6_000), 'decline');
  clearChoice(s);
  assert.equal(readChoice(s, 6_000), null);
  assert.equal(CONSENT_DAYS, 183);
});

test('a broken, foreign or future-dated stored value is no choice, and blocked storage never throws', () => {
  const s = mem();
  for (const raw of ['x', '{}', '{"choice":"maybe","at":1}', '{"choice":"accept"}', '{"choice":"accept","at":"1"}', `{"choice":"accept","at":${10 * 365 * DAY * 1000}}`]) {
    s.m.set(CONSENT_KEY, raw);
    assert.equal(readChoice(s, 1_000_000), null, raw);
  }
  const blocked = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); }, removeItem: () => { throw new Error('blocked'); } };
  assert.equal(readChoice(blocked), null);
  writeChoice(blocked, 'accept');
  clearChoice(blocked);
  assert.equal(readChoice(null), null);
});

test('only the marketing pages count as public; the app and every signed-in, admin, review and API path do not', () => {
  for (const p of ['/', '/privacy', '/for-parents', '/for-teachers', '/grade-6', '/grade-6/mathematics', '/grade-12/life-sciences/some-topic']) assert.equal(isPublicPath(p), true, p);
  for (const p of ['/app', '/app/x', '/progress', '/parent', '/parent/link', '/teacher', '/teacher-review', '/admin', '/admin/reviews/1', '/sign-in', '/sign-in/verify', '/account', '/invite-parent', '/unsubscribe', '/api/session', '/api', '/grade', '/gradeX', '/random', '/for-parents/x']) {
    assert.equal(isPublicPath(p), false, p);
  }
});

test('Do Not Track and Global Privacy Control switch Tag Manager off', () => {
  assert.equal(privacySignalOn({ doNotTrack: '1' }), true);
  assert.equal(privacySignalOn({ doNotTrack: 'yes' }), true);
  assert.equal(privacySignalOn({ globalPrivacyControl: true }), true);
  assert.equal(privacySignalOn({ doNotTrack: '0' }), false);
  assert.equal(privacySignalOn({ doNotTrack: null }), false);
  assert.equal(privacySignalOn(undefined), false);
});
