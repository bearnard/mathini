import { test } from 'node:test';
import assert from 'node:assert/strict';
import { EXAM_GROUPS, EXAM_QUESTION_COUNT, EXAM_EXPLAIN_COUNT } from './Terms34ExamPractice';
import { buildMockTest, scoreByTopic, totalMarks } from '../_shared/mockTest';
import { explainMarks, kindOf, marksOf } from '../_shared/itemKinds';

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const build = (seed: number) => buildMockTest(EXAM_GROUPS, EXAM_QUESTION_COUNT, mulberry32(seed), { explain: EXAM_EXPLAIN_COUNT });

test('the exam practice covers all nine Term 3 and Term 4 topics', () => {
  assert.equal(EXAM_GROUPS.length, 9);
  assert.equal(new Set(EXAM_GROUPS.map((g) => g.topic)).size, 9);
});

test('exam practice: 25 questions, exactly 5 written, at most 4 order/label, no repeated prompt', () => {
  for (let seed = 1; seed <= 100; seed++) {
    const test25 = build(seed);
    assert.equal(test25.length, 25, `seed ${seed}`);
    assert.equal(test25.filter((i) => kindOf(i) === 'explain').length, 5, `seed ${seed}: written answers`);
    assert.ok(test25.filter((i) => kindOf(i) === 'order' || kindOf(i) === 'label').length <= 4, `seed ${seed}: order/label cap`);
    assert.equal(new Set(test25.map((i) => i.prompt)).size, 25, `seed ${seed}: no repeats`);
  }
});

test('exam practice: every topic is represented at least twice, and written answers come from different topics', () => {
  for (let seed = 1; seed <= 100; seed++) {
    const test25 = build(seed);
    const per: Record<string, number> = {};
    for (const it of test25) per[it.topic] = (per[it.topic] ?? 0) + 1;
    for (const g of EXAM_GROUPS) assert.ok((per[g.topic] ?? 0) >= 2, `seed ${seed}: ${g.topic} has ${per[g.topic] ?? 0}`);
    const writtenTopics = test25.filter((i) => kindOf(i) === 'explain').map((i) => i.topic);
    assert.equal(new Set(writtenTopics).size, 5, `seed ${seed}: five different topics for the written answers`);
  }
});

test('exam practice: marks are 1 each for auto-marked questions and the points for written ones, out of a real total', () => {
  for (let seed = 1; seed <= 100; seed++) {
    const test25 = build(seed);
    const written = test25.filter((i) => kindOf(i) === 'explain');
    const expected = 20 + written.reduce((n, i) => n + explainMarks(i), 0);
    assert.equal(totalMarks(test25), expected);
    assert.ok(written.every((i) => marksOf(i) >= 1 && marksOf(i) <= 6));
    assert.ok(totalMarks(test25) >= 25 && totalMarks(test25) <= 45, `total ${totalMarks(test25)}`);
  }
});

test('exam practice: scoring in marks per topic, partial credit for written answers, topic marks add up', () => {
  const test25 = build(7);
  const perfect = test25.map((i) => (kindOf(i) === 'explain' ? marksOf(i) : true));
  const full = scoreByTopic(test25, perfect);
  assert.equal(full.reduce((n, r) => n + r.correct, 0), totalMarks(test25));
  assert.equal(full.reduce((n, r) => n + r.total, 0), totalMarks(test25));
  const halfWritten = test25.map((i) => (kindOf(i) === 'explain' ? 1 : true));
  const written = test25.filter((i) => kindOf(i) === 'explain');
  assert.equal(scoreByTopic(test25, halfWritten).reduce((n, r) => n + r.correct, 0), 20 + written.length);
  assert.equal(scoreByTopic(test25, test25.map(() => false)).reduce((n, r) => n + r.correct, 0), 0);
  // a learner cannot score above the marks a question is worth
  const cheat = test25.map(() => 99);
  assert.equal(scoreByTopic(test25, cheat).reduce((n, r) => n + r.correct, 0), totalMarks(test25));
});

test('the term mock tests and plain builds never contain written (explain) questions', () => {
  for (let seed = 1; seed <= 60; seed++) {
    assert.equal(buildMockTest(EXAM_GROUPS, 20, mulberry32(seed)).filter((i) => kindOf(i) === 'explain').length, 0);
    assert.equal(buildMockTest(EXAM_GROUPS.slice(0, 5), 20, mulberry32(seed)).filter((i) => kindOf(i) === 'explain').length, 0);
  }
});
