import { test } from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs';
import { ADSENSE_CLIENT, ADSENSE_SCRIPT_URL, ADS_ON_CLASS, ADS_TXT_LINE, AD_RESERVED_PX, AD_SLOTS, adsAllowed, adsCss, adsPrePaintScript } from './adsense';
import { CONSENT_DAYS, CONSENT_KEY } from '../consent/gtmConsent';

const DAY = 86_400_000;

function runPrePaint(opts: { stored?: unknown; now?: number; dnt?: string | null; gpc?: boolean; throwing?: boolean }): string[] {
  const classes: string[] = [];
  const now = opts.now ?? 1_000_000_000_000;
  const ctx = {
    localStorage: { getItem: (k: string) => { if (opts.throwing) throw new Error('blocked'); return k === CONSENT_KEY && opts.stored !== undefined ? JSON.stringify(opts.stored) : null; } },
    navigator: { doNotTrack: opts.dnt ?? null, globalPrivacyControl: opts.gpc },
    document: { documentElement: { classList: { add: (c: string) => classes.push(c) } } },
    Date: class extends Date { static now() { return now; } },
    JSON,
  };
  vm.runInNewContext(adsPrePaintScript(), ctx);
  return classes;
}

test('the owner\'s ids and the ads.txt line are exact', () => {
  assert.equal(ADSENSE_CLIENT, 'ca-pub-4961734822376251');
  assert.equal(ADSENSE_SCRIPT_URL, 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4961734822376251');
  assert.equal(ADS_TXT_LINE, 'google.com, pub-4961734822376251, DIRECT, f08c47fec0942fa0');
  assert.equal(fs.readFileSync('public/ads.txt', 'utf8'), `${ADS_TXT_LINE}\n`);
});

test('ads need an Accept and no privacy signal: Decline, no choice and Do Not Track all mean no ads', () => {
  assert.equal(adsAllowed('accept', false), true);
  assert.equal(adsAllowed('accept', true), false);
  assert.equal(adsAllowed('decline', false), false);
  assert.equal(adsAllowed(null, false), false);
});

test('without slot ids no slot is drawn: the owner has to create the ad units first', () => {
  if (!process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOPIC) assert.equal(AD_SLOTS.topic, '');
  if (!process.env.NEXT_PUBLIC_ADSENSE_SLOT_SUBJECT) assert.equal(AD_SLOTS.subject, '');
});

test('the before-paint marker (run as text in a stub browser) reserves ad space only for a fresh Accept with no privacy signal', () => {
  const now = 1_000_000_000_000;
  assert.deepEqual(runPrePaint({ stored: { choice: 'accept', at: now - 10 * DAY } }), [ADS_ON_CLASS]);
  assert.deepEqual(runPrePaint({ stored: { choice: 'accept', at: now - (CONSENT_DAYS - 1) * DAY } }), [ADS_ON_CLASS]);
  assert.deepEqual(runPrePaint({ stored: { choice: 'accept', at: now - (CONSENT_DAYS + 1) * DAY } }), [], 'older than six months: asked again');
  assert.deepEqual(runPrePaint({ stored: { choice: 'decline', at: now } }), []);
  assert.deepEqual(runPrePaint({}), []);
  assert.deepEqual(runPrePaint({ stored: { choice: 'accept', at: now }, dnt: '1' }), []);
  assert.deepEqual(runPrePaint({ stored: { choice: 'accept', at: now }, gpc: true }), []);
  assert.deepEqual(runPrePaint({ stored: { choice: 'accept', at: now + 30 * DAY } }), [], 'a date far in the future is not ours');
  assert.deepEqual(runPrePaint({ stored: 'garbage' }), []);
  assert.deepEqual(runPrePaint({ throwing: true }), [], 'blocked storage never throws');
});

test('the slot is hidden by default and gets its fixed height only when the page is marked', () => {
  const css = adsCss();
  assert.match(css, /\.pp-ad\{display:none\}/);
  assert.ok(css.includes(`.${ADS_ON_CLASS} .pp-ad{display:block;min-height:${AD_RESERVED_PX}px`));
  assert.ok(AD_RESERVED_PX >= 250 && AD_RESERVED_PX <= 300);
});
