import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { buildMockTest, seededRandom } from './mockTest';
import { StudentProvider } from '../../../../lib/client/StudentContext';
import Term3MockTest from '../term3/mock-test/Term3MockTest';
import Term4MockTest from '../term4/mock-test/Term4MockTest';
import Terms34ExamPractice from '../exam/Terms34ExamPractice';

// The hydration bug: the server and the first client render built DIFFERENT random tests, so React threw "Hydration failed".
// The first render must now be deterministic, which is what these tests pin down.

test('seededRandom is deterministic, in [0, 1), and differs by seed', () => {
  const a = seededRandom(1);
  const b = seededRandom(1);
  const xs = Array.from({ length: 50 }, () => a());
  assert.deepEqual(xs, Array.from({ length: 50 }, () => b()));
  assert.ok(xs.every((x) => x >= 0 && x < 1));
  assert.notDeepEqual(xs, Array.from({ length: 50 }, ((c) => () => c())(seededRandom(2))));
  assert.ok(new Set(xs).size > 45, 'it is not stuck');
});

test('a seeded test is the same every time, and an unseeded one is not', () => {
  const items = Array.from({ length: 12 }, (_, i) => ({ prompt: `Q${i}`, options: ['a', 'b', 'c', 'd'], answer: 'a', explanation: 'x' }));
  const groups = [{ topic: 'T', items }];
  const one = buildMockTest(groups, 8, seededRandom(1));
  assert.deepEqual(one, buildMockTest(groups, 8, seededRandom(1)));
  const many = new Set(Array.from({ length: 8 }, () => JSON.stringify(buildMockTest(groups, 8))));
  assert.ok(many.size > 1, 'the learner still gets a random test');
});

for (const [name, Lesson] of [['Term 3 mock test', Term3MockTest], ['Term 4 mock test', Term4MockTest], ['Terms 3 and 4 exam practice', Terms34ExamPractice]] as const) {
  test(`${name}: two server renders give identical HTML (nothing random in the first render)`, () => {
    const html = () => renderToString(createElement(StudentProvider, null, createElement(Lesson)));
    const a = html();
    assert.ok(a.length > 500, 'it rendered');
    assert.equal(a, html());
  });
}
