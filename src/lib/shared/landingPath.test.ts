import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { adultLandingPath } from './landingPath';
import ParentLinkCard from '../../components/parents/ParentLinkCard';

test('adultLandingPath: teacher first, then school admin, then parent, else the account page', () => {
  assert.equal(adultLandingPath(['parent']), '/parent');
  assert.equal(adultLandingPath(['parent', 'teacher']), '/teacher');
  assert.equal(adultLandingPath(['teacher', 'parent', 'school_admin']), '/teacher');
  assert.equal(adultLandingPath(['parent', 'school_admin']), '/school');
  assert.equal(adultLandingPath(['moderator']), '/account');
  for (const none of [[], null, undefined, 'teacher' as unknown as string[], {} as unknown as string[]]) assert.equal(adultLandingPath(none), '/account');
});

test('every landing page is a real, private page', () => {
  for (const p of ['/teacher', '/school', '/parent', '/account']) assert.ok(fs.existsSync(`src/app${p}/page.tsx`), p);
});

test('the sign-in link page sends the adult by role (not always to /account)', () => {
  const src = fs.readFileSync('src/components/adultAuth/VerifyLink.tsx', 'utf8');
  assert.match(src, /adultLandingPath\(j\.roles\)/);
  assert.ok(!/location\.assign\('\/account'\)/.test(src));
});

test('the learner home has a clear "Link a parent or guardian" entry pointing at /invite-parent, for signed-in learners only, next to the classes card', () => {
  const html = renderToStaticMarkup(createElement(ParentLinkCard));
  assert.match(html, /Link a parent or guardian/);
  assert.match(html, /href="\/invite-parent"/);
  assert.ok(fs.existsSync('src/app/invite-parent/page.tsx'));
  const app = fs.readFileSync('src/App.tsx', 'utf8');
  assert.match(app, /{status === 'active' && !selectedSubject && \(\s*<div[^>]*>\s*<ClassesCard \/>\s*<ParentLinkCard \/>/);
});
