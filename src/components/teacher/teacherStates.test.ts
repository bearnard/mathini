import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { AttentionCard } from './ClassDashboard';
import type { ClassProgress } from '../../lib/shared/classProgressTypes';
import { PRIVACY_LINE, CONSENT_VERSION } from '../../lib/privacyNotice';

const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const empty = (memberCount: number) => ({ memberCount, behindOnReviews: [], notPractisedLast7: [], learners: [] }) as unknown as ClassProgress;

test('an empty class never says "Everyone is on track"; a class whose learners are all up to date does', () => {
  const none = html(h(AttentionCard, { p: empty(0) }));
  assert.doesNotMatch(none, /Everyone is on track/);
  assert.match(none, /No learners yet/);
  assert.match(html(h(AttentionCard, { p: empty(3) })), /Everyone is on track/);
});

test('the register-form privacy line says who really sees the data (owner, linked parent, class teacher), not "only the owner"', () => {
  assert.doesNotMatch(PRIVACY_LINE, /Only the app's owner can see this/);
  assert.match(PRIVACY_LINE, /owner/);
  assert.match(PRIVACY_LINE, /parent or guardian/);
  assert.match(PRIVACY_LINE, /teacher/);
  assert.match(CONSENT_VERSION, /v6$/);
});
