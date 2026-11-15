import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import HomePaths from '../../components/seo/HomePaths';

test('the home page offers a path for learners, parents and teachers, and is honest that adult accounts are not live', () => {
  const html = renderToStaticMarkup(createElement(HomePaths));
  for (const id of ['learners', 'parents', 'teachers']) assert.match(html, new RegExp(`id="${id}"`));
  assert.equal((html.match(/Coming soon/g) ?? []).length, 2, 'parents and teachers are both marked coming soon');
  assert.match(html, /href="\/app\?start=register"/);
  assert.match(html, /href="\/app\?start=resume"/);
  // Nothing on the parent or teacher card may send an adult to a sign-up or login that does not exist.
  const adult = html.slice(html.indexOf('id="parents"'));
  assert.ok(!/start=register|start=resume|sign up|log ?in/i.test(adult), 'no adult sign-up or login links');
});
