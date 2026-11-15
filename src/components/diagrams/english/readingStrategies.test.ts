import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement, Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { EVIDENCE, PARAGRAPHS, SUMMARY, scan, skim, totalWords, wordCount } from './readingStrategies';
import { learnSteps } from '../../../curriculum/grade9/english/term4/synoptic-revision/SynopticRevisionSlides';

test('skimming gives the first sentence of each of the 3 paragraphs', () => {
  const s = skim(PARAGRAPHS);
  assert.equal(s.length, 3);
  assert.equal(s[0], 'Our school started a vegetable garden in March.');
});

test('scanning for spinach finds two sentences, in paragraphs 1 and 3; an absent word finds none', () => {
  assert.deepEqual(scan(PARAGRAPHS, 'spinach').map((h) => h.paragraph), [0, 2]);
  assert.deepEqual(scan(PARAGRAPHS, 'giraffe'), []);
});

test('the summary is shorter than the passage and is not a copied sentence', () => {
  assert.ok(wordCount(SUMMARY.text) < totalWords(PARAGRAPHS));
  assert.ok(!PARAGRAPHS.join(' ').includes(SUMMARY.text));
  assert.ok(PARAGRAPHS.join(' ').includes(SUMMARY.copied));
});

test('the best evidence is in the passage and differs from the irrelevant one', () => {
  assert.ok(PARAGRAPHS.join(' ').includes(EVIDENCE.best));
  assert.notEqual(EVIDENCE.best, EVIDENCE.irrelevant);
});

test('the lesson renders all 6 slides, ends with Check yourself, and teaches what the bank asks', () => {
  assert.equal(learnSteps.length, 6);
  assert.equal(learnSteps[learnSteps.length - 1].title, 'Check yourself');
  const all = learnSteps.map((s) => renderToStaticMarkup(createElement(Fragment, null, s.content))).join(' ').toLowerCase();
  for (const need of ['skimming', 'scanning', 'main idea', 'paraphrase', 'own words', 'inference', 'relevant', 'read all the questions', 'proofread', 'plan']) {
    assert.ok(all.includes(need), need);
  }
});
