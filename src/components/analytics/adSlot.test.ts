import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

// The slot ids are build variables; set them before the module is read (each test file runs in its own process).
process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOPIC = '1234567890';
delete process.env.NEXT_PUBLIC_ADSENSE_SLOT_SUBJECT;

test('with a slot id the slot is one labelled, responsive, reserved-height aside; without one it draws nothing at all', async () => {
  const { default: AdSlot } = await import('./AdSlot');
  const topic = renderToStaticMarkup(createElement(AdSlot, { placement: 'topic' }));
  assert.match(topic, /<aside class="pp-ad" aria-label="Advertisement">/);
  assert.match(topic, /data-ad-client="ca-pub-4961734822376251"/);
  assert.match(topic, /data-ad-slot="1234567890"/);
  assert.match(topic, /data-full-width-responsive="true"/);
  assert.equal((topic.match(/<ins /g) ?? []).length, 1, 'one slot');
  assert.ok(!/<script/.test(topic), 'the slot itself never writes a script tag');
  assert.equal(renderToStaticMarkup(createElement(AdSlot, { placement: 'subject' })), '', 'no id, no slot, no empty box');
});

test('the public analytics block carries the before-paint marker and the slot CSS, and no ad script', async () => {
  const { default: PublicAnalytics } = await import('./PublicAnalytics');
  const h = renderToStaticMarkup(createElement(PublicAnalytics));
  assert.match(h, /pp-ads-on/);
  assert.match(h, /\.pp-ad\{display:none\}/);
  assert.ok(!/pagead2|adsbygoogle\.js/.test(h), 'the AdSense script is added by AdSlot only after Accept, never by this block');
  assert.ok(!/GTM-MNM3XGLP|googletagmanager/.test(h), 'no Tag Manager id or iframe in the page itself: nothing from Google is requested before an Accept');
});
