import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CONSENT_DAYS, CONSENT_DEFAULT, CONSENT_KEY, GTM_ID, GTM_SCRIPT_URL, clearChoice, consentUpdateFor, isPublicPath, loadGtm, privacySignalOn, readChoice, withdrawGtm, writeChoice, type GtmDocument, type GtmWindow } from './gtmConsent';

const mem = () => { const m = new Map<string, string>(); return { m, getItem: (k: string) => m.get(k) ?? null, setItem: (k: string, v: string) => void m.set(k, v), removeItem: (k: string) => void m.delete(k) }; };
const DAY = 86_400_000;

test('the container id and URLs are the owner\'s, and the defaults deny everything before anything loads', () => {
  assert.equal(GTM_ID, 'GTM-MNM3XGLP');
  assert.equal(GTM_SCRIPT_URL, 'https://www.googletagmanager.com/gtm.js?id=GTM-MNM3XGLP');
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

// A stub browser that records everything that would reach Google or the dataLayer.
const stubBrowser = () => {
  const appended: { src: string }[] = [];
  const doc: GtmDocument = {
    querySelector: (sel: string) => appended.find((s) => sel.includes(s.src)) ?? null,
    createElement: () => ({ async: false, src: '' }),
    head: { appendChild: (n: unknown) => void appended.push(n as { src: string }) },
  };
  const w: GtmWindow = {};
  return { w, doc, appended };
};

test('before an Accept nothing is loaded and nothing is pushed: no script, no dataLayer, no gtag', () => {
  const { w, appended } = stubBrowser();
  // No answer, Decline and a privacy signal never call loadGtm; what the page holds is still untouched.
  assert.equal(appended.length, 0);
  assert.equal(w.dataLayer, undefined);
  assert.equal(w.gtag, undefined);
  // A Decline after nothing was loaded does not create the dataLayer either.
  withdrawGtm(w);
  assert.equal(w.dataLayer, undefined);
});

test('Accept loads Tag Manager once: defaults denied, analytics granted, container started, one script', () => {
  const { w, doc, appended } = stubBrowser();
  loadGtm(w, doc);
  assert.equal(appended.length, 1);
  assert.equal(appended[0].src, GTM_SCRIPT_URL);
  const calls = (w.dataLayer as unknown[]).map((e) => (typeof e === 'object' && e && 'length' in e ? Array.from(e as ArrayLike<unknown>) : e));
  assert.deepEqual(calls[0], ['consent', 'default', { ...CONSENT_DEFAULT }]);
  assert.deepEqual(calls[1], ['consent', 'update', { analytics_storage: 'granted' }]);
  assert.equal((calls[2] as { event: string }).event, 'gtm.js');
  loadGtm(w, doc); // a second call adds no second script
  assert.equal(appended.length, 1);
});

test('a Decline or "ask me again" after Accept in the same page view switches analytics storage off again', () => {
  const { w, doc } = stubBrowser();
  loadGtm(w, doc);
  withdrawGtm(w);
  const last = Array.from((w.dataLayer as unknown[]).at(-1) as ArrayLike<unknown>);
  assert.deepEqual(last, ['consent', 'update', { analytics_storage: 'denied' }]);
});
