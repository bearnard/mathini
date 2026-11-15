import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement, Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { CONTEXT, SHORT, isComplete, sentenceLengths, wordCount } from './featureEffect';
import { learnSteps } from '../../../curriculum/grade9/english/term4/grammar-literature-consolidation/GrammarLiteratureConsolidationSlides';

test('the short-sentence evidence really has short sentences (2, 3 and 1 words)', () => {
  assert.deepEqual(sentenceLengths(SHORT.evidence), [2, 3, 1]);
  assert.equal(wordCount('  one  two '), 2);
});

test('the model answer has a feature, evidence and effect; an answer missing the effect is incomplete', () => {
  assert.ok(isComplete(SHORT));
  assert.ok(!isComplete({ ...SHORT, effect: '' }));
});

test('the context word appears in its sentence', () => {
  assert.ok(CONTEXT.sentence.includes(CONTEXT.word));
});

test('the lesson renders all 6 slides, ends with Check yourself, and teaches what the bank asks', () => {
  assert.equal(learnSteps.length, 6);
  assert.equal(learnSteps[learnSteps.length - 1].title, 'Check yourself');
  const all = learnSteps.map((s) => renderToStaticMarkup(createElement(Fragment, null, s.content))).join(' ').toLowerCase();
  for (const need of ['punctuation', 'rhythm', 'emphasis', 'personality', 'education', 'theme', 'active voice', 'direct and powerful', 'context', 'effect', 'evidence']) {
    assert.ok(all.includes(need), need);
  }
});
