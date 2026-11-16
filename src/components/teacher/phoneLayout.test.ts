import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { TopicHeatmap } from './ClassDashboard';
import type { ClassProgress } from '../../lib/shared/classProgressTypes';

const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);

test('the topic heatmap has a phone layout that shows ALL four levels for every topic, not a table that hides columns', () => {
  const p = {
    memberCount: 24, exam: null,
    topics: [{ task: 't1', label: 'Electric circuits', practised: 17, avgAccuracyPct: 38, levels: { not_started: 7, learning: 10, getting_there: 7, mastered: 0 } }],
  } as unknown as ClassProgress;
  const out = html(h(TopicHeatmap, { p }));
  const phone = out.slice(out.indexOf('<ul'), out.indexOf('</ul>'));
  assert.match(out, /<ul[^>]*sm:hidden/, 'the stacked list is for phones');
  assert.match(out, /<div class="hidden [^"]*sm:block"/, 'the table is for wider screens only');
  for (const label of ['Not started', 'Learning', 'Getting there', 'Mastered']) assert.ok(phone.includes(label), `phone list names the level: ${label}`);
  for (const n of ['>7<', '>10<', '>0<']) assert.ok(phone.includes(n), `phone list shows the count ${n}`);
  assert.ok(phone.includes('Electric circuits') && phone.includes('17 of 24 practised'));
});
