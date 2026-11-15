import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import HomePaths from '../../components/seo/HomePaths';

test('the home page has a real path for learners, parents and teachers, with nothing marked coming soon', () => {
  const html = renderToStaticMarkup(createElement(HomePaths));
  for (const id of ['learners', 'parents', 'teachers']) assert.match(html, new RegExp(`id="${id}"`));
  assert.ok(!/coming soon/i.test(html), 'parent and teacher accounts are live');
  assert.match(html, /href="\/app\?start=register"/);
  assert.match(html, /href="\/app\?start=resume"/);
  const parents = html.slice(html.indexOf('id="parents"'), html.indexOf('id="teachers"'));
  const teachers = html.slice(html.indexOf('id="teachers"'));
  assert.match(parents, /Sign in as a parent/);
  assert.match(parents, /href="\/sign-in"/);
  assert.match(parents, /href="\/for-parents"/);
  assert.match(teachers, /Apply as a teacher/);
  assert.match(teachers, /href="\/for-teachers"/);
  assert.match(teachers, /SACE/);
  assert.match(teachers, /not instant/, 'honest that approval takes a check');
});
