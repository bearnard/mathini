import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROLE_SENTENCE, TENSE_CHECKS, keepsTense, tokensText, verbIn } from './tense';
import type { Token } from './tense';

const here = path.dirname(fileURLToPath(import.meta.url));
const read = (p: string) => fs.readFileSync(path.join(here, '../../../curriculum/grade6/english', p), 'utf8');
const ext = read('term2/language-extension/LanguageExtension.tsx');
const cons = read('term4/language-consolidation/LanguageConsolidation.tsx');
const t = (x: readonly Token[]) => [...x];

test('verb forms: walk and write in the three tenses, one subject at a time', () => {
  assert.equal(verbIn('walk', 'past', true), 'walked');
  assert.equal(verbIn('walk', 'present', true), 'walk');
  assert.equal(verbIn('walk', 'present', false), 'walks');
  assert.equal(verbIn('walk', 'future', true), 'will walk');
  assert.equal(verbIn('write', 'past', false), 'wrote');
  assert.equal(verbIn('write', 'present', false), 'writes');
});

test('the lesson and bank sentences use these forms', () => {
  assert.ok(ext.includes('We walked to school yesterday.'));
  assert.ok(ext.includes('We will walk to school tomorrow.'));
  // the Term 4 timeline shows the lesson's own pair, "She writes neatly." and "She wrote neatly.",
  // built from the frame "She ___ neatly." and the verb table
  assert.equal(`She ${verbIn('write', 'present', false)} neatly.`, 'She writes neatly.');
  assert.equal(`She ${verbIn('write', 'past', false)} neatly.`, 'She wrote neatly.');
  assert.ok(cons.includes('before="She" after="neatly."'));
});

test('tense checks: the mistake changes tense, the correction keeps it, and both are bank sentences', () => {
  for (const [file, key] of [[ext, 'lebo'], [cons, 'revised']] as const) {
    const c = TENSE_CHECKS[key];
    assert.equal(keepsTense(t(c.wrong)), false);
    assert.equal(keepsTense(t(c.right)), true);
    assert.ok(file.includes(tokensText(t(c.wrong))), tokensText(t(c.wrong)));
    assert.ok(file.includes(tokensText(t(c.right))), tokensText(t(c.right)));
  }
});

test('word roles: the sentence has the bank noun, verb and adjective', () => {
  assert.equal(ROLE_SENTENCE.map((w) => w.text).join(' '), 'The noisy class praised the teacher.');
  const role = (w: string) => ROLE_SENTENCE.find((x) => x.text.replace('.', '') === w)?.role;
  assert.equal(role('teacher'), 'noun');
  assert.equal(role('class'), 'noun');
  assert.equal(role('praised'), 'verb');
  assert.equal(role('noisy'), 'adjective');
  assert.equal(role('The'), 'other');
  assert.ok(cons.includes('The teacher praised the class'));
  assert.ok(cons.includes('the noisy classroom'));
});
