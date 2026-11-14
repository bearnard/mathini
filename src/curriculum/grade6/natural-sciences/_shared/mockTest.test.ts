import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildMockTest, scoreByTopic, topicsToRevise, type TopicBank } from './mockTest';

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeGroup(topic: string, n: number): TopicBank {
  return {
    topic,
    items: Array.from({ length: n }, (_, i) => ({
      prompt: `${topic} question ${i}`,
      options: ['A', 'B', 'C', 'D'].map((o) => `${topic}-${i}-${o}`),
      answer: `${topic}-${i}-A`,
    })),
  };
}

function countByTopic(items: { topic: string }[]) {
  const c: Record<string, number> = {};
  for (const it of items) c[it.topic] = (c[it.topic] ?? 0) + 1;
  return c;
}

test('20 items over 5 topics gives 4 from each', () => {
  const groups = ['a', 'b', 'c', 'd', 'e'].map((t) => makeGroup(t, 14));
  const test20 = buildMockTest(groups, 20, mulberry32(1));
  assert.equal(test20.length, 20);
  assert.deepEqual(countByTopic(test20), { a: 4, b: 4, c: 4, d: 4, e: 4 });
});

test('20 items over 4 topics gives 5 from each', () => {
  const groups = ['a', 'b', 'c', 'd'].map((t) => makeGroup(t, 16));
  const items = buildMockTest(groups, 20, mulberry32(2));
  assert.deepEqual(countByTopic(items), { a: 5, b: 5, c: 5, d: 5 });
});

test('uneven count spreads the remainder, differing by at most 1', () => {
  const groups = ['a', 'b', 'c'].map((t) => makeGroup(t, 14));
  const items = buildMockTest(groups, 20, mulberry32(3));
  const counts = Object.values(countByTopic(items));
  assert.equal(items.length, 20);
  assert.ok(Math.max(...counts) - Math.min(...counts) <= 1);
});

test('no item repeats', () => {
  const groups = ['a', 'b', 'c', 'd', 'e'].map((t) => makeGroup(t, 12));
  for (let seed = 0; seed < 20; seed++) {
    const items = buildMockTest(groups, 20, mulberry32(seed));
    assert.equal(new Set(items.map((i) => i.prompt)).size, items.length);
  }
});

test('answer is always still one of the shuffled options', () => {
  const groups = ['a', 'b'].map((t) => makeGroup(t, 14));
  for (const it of buildMockTest(groups, 20, mulberry32(4))) {
    assert.equal(it.options.length, 4);
    assert.ok(it.options.includes(it.answer));
  }
});

test('does not mutate the source banks', () => {
  const groups = [makeGroup('a', 14), makeGroup('b', 14)];
  const snapshot = JSON.stringify(groups);
  buildMockTest(groups, 20, mulberry32(5));
  assert.equal(JSON.stringify(groups), snapshot);
});

test('a short bank is topped up from the others', () => {
  const groups = [makeGroup('small', 2), makeGroup('b', 14), makeGroup('c', 14), makeGroup('d', 14)];
  const items = buildMockTest(groups, 20, mulberry32(6));
  assert.equal(items.length, 20);
  assert.equal(countByTopic(items).small, 2);
  assert.equal(new Set(items.map((i) => i.prompt)).size, 20);
});

test('returns fewer items when the banks together are too small', () => {
  const items = buildMockTest([makeGroup('a', 3), makeGroup('b', 4)], 20, mulberry32(7));
  assert.equal(items.length, 7);
});

test('empty input gives an empty test', () => {
  assert.deepEqual(buildMockTest([], 20), []);
  assert.deepEqual(buildMockTest([makeGroup('a', 0)], 20), []);
});

test('same seed gives the same test; different seeds differ', () => {
  const groups = ['a', 'b', 'c', 'd', 'e'].map((t) => makeGroup(t, 14));
  const one = buildMockTest(groups, 20, mulberry32(8)).map((i) => i.prompt);
  const two = buildMockTest(groups, 20, mulberry32(8)).map((i) => i.prompt);
  const three = buildMockTest(groups, 20, mulberry32(9)).map((i) => i.prompt);
  assert.deepEqual(one, two);
  assert.notDeepEqual(one, three);
});

test('scoreByTopic counts first-attempt results per topic', () => {
  const items = [
    { topic: 'a', prompt: '1', options: [], answer: '' },
    { topic: 'b', prompt: '2', options: [], answer: '' },
    { topic: 'a', prompt: '3', options: [], answer: '' },
  ];
  assert.deepEqual(scoreByTopic(items, [true, false, false]), [
    { topic: 'a', total: 2, correct: 1 },
    { topic: 'b', total: 1, correct: 0 },
  ]);
});

test('topicsToRevise lists topics under 60%, lowest first', () => {
  const scores = [
    { topic: 'ok', total: 5, correct: 4 },
    { topic: 'low', total: 5, correct: 1 },
    { topic: 'mid', total: 5, correct: 2 },
    { topic: 'edge', total: 5, correct: 3 },
  ];
  assert.deepEqual(topicsToRevise(scores), ['low', 'mid']);
});

test('the same prompt in two topic banks is asked at most once, across many seeds, and the test still has 20 questions', () => {
  const shared = { prompt: 'Why does the Sun seem to move across the sky?', options: ['A', 'B', 'C', 'D'], answer: 'A' };
  for (let seed = 0; seed < 200; seed++) {
    const a = makeGroup('a', 14); const b = makeGroup('b', 14);
    a.items[0] = { ...shared }; b.items[0] = { ...shared };
    const items = buildMockTest([a, b, makeGroup('c', 14), makeGroup('d', 14)], 20, mulberry32(seed));
    assert.equal(items.length, 20, `seed ${seed}`);
    assert.ok(items.filter((i) => i.prompt === shared.prompt).length <= 1, `seed ${seed}`);
    assert.equal(new Set(items.map((i) => i.prompt)).size, items.length, `seed ${seed}`);
  }
});
test('when every bank is the same ten questions the test is as long as the unique questions allow', () => {
  const same = (topic: string): TopicBank => ({ topic, items: Array.from({ length: 10 }, (_, i) => ({ prompt: `shared ${i}`, options: ['A', 'B'], answer: 'A' })) });
  const items = buildMockTest([same('a'), same('b'), same('c')], 20, mulberry32(1));
  assert.equal(items.length, 10);
  assert.equal(new Set(items.map((i) => i.prompt)).size, 10);
});

// ---- order and label items in mock tests ----

function recallGroup(topic: string, mcq: number, order: number): TopicBank {
  const base = makeGroup(topic, mcq);
  const orders = Array.from({ length: order }, (_, i) => ({
    kind: 'order' as const,
    prompt: `Put the ${topic} steps ${i} in order`,
    options: ['one', 'two', 'three'],
    answer: 'one|two|three',
  }));
  return { topic, items: [...base.items, ...orders] };
}

test('a mock test holds at most 3 order/label items per 20, however many the banks have', () => {
  const groups = [recallGroup('A', 6, 6), recallGroup('B', 6, 6), recallGroup('C', 6, 6), recallGroup('D', 6, 6)];
  for (let seed = 1; seed <= 40; seed++) {
    const test20 = buildMockTest(groups, 20, mulberry32(seed));
    assert.equal(test20.length, 20);
    const recall = test20.filter((i) => i.kind === 'order').length;
    assert.ok(recall <= 3, `seed ${seed}: ${recall} order items`);
  }
});

test('mock test: order options are never shown already in the right sequence', () => {
  const groups = [recallGroup('A', 0, 3)];
  for (let seed = 1; seed <= 60; seed++) {
    for (const it of buildMockTest(groups, 3, mulberry32(seed))) {
      assert.notDeepEqual(it.options, ['one', 'two', 'three']);
    }
  }
});

test('mock test: unplayable items are dropped and unknown kinds fall back to mcq', () => {
  const groups: TopicBank[] = [{
    topic: 'A',
    items: [
      { prompt: 'ok', options: ['x', 'y'], answer: 'x' },
      { prompt: 'future kind, valid as mcq', options: ['x', 'y'], answer: 'x', kind: 'sorting' as never },
      { prompt: 'broken order', kind: 'order', options: ['x', 'y'], answer: 'x|z' },
      { prompt: 'broken label', kind: 'label', options: ['x'], answer: 'h=x' },
    ],
  }];
  const built = buildMockTest(groups, 10, mulberry32(1));
  assert.deepEqual(built.map((i) => i.prompt).sort(), ['future kind, valid as mcq', 'ok']);
  assert.ok(built.every((i) => (i.kind ?? 'mcq') === 'mcq'));
});

test('scoring and the re-ask round only need a fully-right boolean per question, whatever the kind', () => {
  const items = buildMockTest([recallGroup('A', 2, 2), recallGroup('B', 2, 2)], 8, mulberry32(7));
  const firstAttempt = items.map((it) => it.kind !== 'order'); // all order items wrong
  const scores = scoreByTopic(items, firstAttempt);
  assert.equal(scores.reduce((n, s) => n + s.total, 0), items.length);
  assert.equal(scores.reduce((n, s) => n + s.correct, 0), items.filter((i) => i.kind !== 'order').length);
});
