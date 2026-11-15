import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement, Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { AUDIENCE, CHECK_ORDER, JUMBLED, REPORT_PARTS, TEA_BUNDLED, TEA_STEPS, VOICE, hasFirstPerson, isImperative, sortReport } from './reportText';
import { learnSteps } from '../../../curriculum/grade9/english/term3/reports-instructional-texts/ReportsInstructionalTextsSlides';

test('the report parts sort into title, introduction, sections, conclusion', () => {
  assert.deepEqual(sortReport(JUMBLED), ['title', 'intro', 'body', 'conclusion']);
  assert.deepEqual(sortReport(CHECK_ORDER), REPORT_PARTS.map((p) => p.id));
});

test('every instruction step opens with an imperative verb and the bundled version is not split', () => {
  assert.ok(TEA_STEPS.every(isImperative));
  assert.ok(isImperative('Open the box.'));
  assert.equal(TEA_STEPS.length, 5);
  assert.ok(TEA_BUNDLED.includes(' and '));
});

test('the opinion has first person and the report sentence has none', () => {
  assert.ok(hasFirstPerson(VOICE.first));
  assert.ok(!hasFirstPerson(VOICE.third));
});

test('the two audience sentences differ', () => {
  assert.notEqual(AUDIENCE.learners, AUDIENCE.principal);
  assert.ok(isImperative(AUDIENCE.learners));
});

test('the lesson renders all 5 slides, ends with Check yourself, and teaches what the bank asks', () => {
  assert.equal(learnSteps.length, 5);
  assert.equal(learnSteps[learnSteps.length - 1].title, 'Check yourself');
  const html = learnSteps.map((s) => renderToStaticMarkup(createElement(Fragment, null, s.content)));
  const all = html.join(' ').toLowerCase();
  for (const need of ['objectively', 'headings', 'numbered steps', 'imperative', 'third person', 'audience', 'purpose', 'one action']) {
    assert.ok(all.includes(need), need);
  }
  assert.ok(html[0].includes('aria-label'));
});
