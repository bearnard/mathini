import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CHANGE_NOTE, DIRECT, REPORTED, changesBetween, speechText } from './speech';

const here = path.dirname(fileURLToPath(import.meta.url));
const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade6/english/term4/language-consolidation/LanguageConsolidation.tsx'), 'utf8');

test('the pair is the lesson pair: She writes neatly, he said / He said that she wrote neatly', () => {
  assert.equal(speechText(DIRECT), '“She writes neatly,” he said.');
  assert.equal(speechText(REPORTED), 'He said that she wrote neatly.');
});

test('the three changes are worked out from the two sentences: marks dropped, "that" added, tense steps back', () => {
  assert.deepEqual(changesBetween(DIRECT, REPORTED), [1, 2, 3]);
  assert.deepEqual(Object.keys(CHANGE_NOTE), ['1', '2', '3']);
});

test('no change is claimed when nothing changed', () => {
  assert.deepEqual(changesBetween(REPORTED, REPORTED), []);
});

test('the bank agrees that indirect speech has no speech marks and that direct speech has them', () => {
  assert.ok(lesson.includes('Sam said that he was tired.'));
  assert.ok(lesson.includes('Mia said, “I am ready.”'));
  assert.ok(lesson.includes('<SpeechChange />'));
});
