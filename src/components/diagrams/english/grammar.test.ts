import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CONJUNCTIONS, EXAMPLES, KIND_COLOR, sentenceText, sentenceType } from './grammar';
import type { Part } from './grammar';

const here = path.dirname(fileURLToPath(import.meta.url));
const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade6/english/term3/complex-sentence-work/ComplexSentenceWork.tsx'), 'utf8');
const parts = (x: readonly Part[]) => [...x];

test('compound: two independent clauses with a conjunction, and the sentence is the bank sentence', () => {
  assert.equal(sentenceType(parts(EXAMPLES.compound)), 'compound');
  assert.equal(sentenceText(parts(EXAMPLES.compound)), 'Lebo packed his bag, and he ran to the taxi');
  assert.ok(lesson.includes(sentenceText(parts(EXAMPLES.compound))));
});

test('complex: a dependent clause plus an independent clause, and it is the bank sentence', () => {
  assert.equal(sentenceType(parts(EXAMPLES.complex)), 'complex');
  assert.equal(sentenceText(parts(EXAMPLES.complex)), 'Because Lebo packed early, he was ready on time');
  assert.ok(lesson.includes(sentenceText(parts(EXAMPLES.complex))));
});

test('a lone independent clause is simple; "When the bell rang, the class cheered" is complex', () => {
  assert.equal(sentenceType(parts(EXAMPLES.short)), 'simple');
  const bell: Part[] = [{ kind: 'dependent', text: 'When the bell rang,', lead: 'When' }, { kind: 'independent', text: 'the class cheered' }];
  assert.equal(sentenceType(bell), 'complex');
  assert.ok(lesson.includes('When the bell rang, the class cheered'));
});

test('the run-on is fixed with a conjunction and the fixed sentence is the bank one', () => {
  assert.equal(sentenceText(parts(EXAMPLES.joined)), 'Thandi finished her homework, and she went outside');
  assert.ok(lesson.includes(sentenceText(parts(EXAMPLES.joined))));
  assert.equal(sentenceText(parts(EXAMPLES.runOn)), 'Thandi finished her homework she went outside');
  assert.ok(lesson.includes(sentenceText(parts(EXAMPLES.runOn))));
  assert.equal(sentenceText(parts(EXAMPLES.split)), 'Thandi finished her homework. She went outside.');
});

test('the single-clause examples are the bank ones, and every kind has its own colour', () => {
  for (const e of [EXAMPLES.phrase, EXAMPLES.independent, EXAMPLES.dependent]) assert.ok(lesson.includes(e.text));
  assert.equal(new Set(Object.values(KIND_COLOR)).size, 4);
  for (const c of CONJUNCTIONS.slice(2)) assert.ok(lesson.includes(c));
  assert.ok(lesson.includes('and, but, because, although'));
});
