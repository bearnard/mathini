import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { dropRetired, isRetiredPrompt, loadRetired, setRetiredForTest } from './retired';
import { promptKey } from '../shared/retiredKey';
import { prepareItems } from '../../curriculum/grade6/natural-sciences/_shared/itemKinds';
import { buildMockTest } from '../../curriculum/grade6/natural-sciences/_shared/mockTest';

const realFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = realFetch; setRetiredForTest(null); });

const item = (prompt: string) => ({ prompt, options: ['a', 'b', 'c'], answer: 'a' });

test('nothing is hidden until a list is loaded (fail open), and wording differences in case and spacing still match', () => {
  assert.equal(isRetiredPrompt('Bad question?'), false);
  assert.equal(dropRetired([item('Bad question?')]).length, 1);
  setRetiredForTest([promptKey('Bad question?')]);
  assert.equal(isRetiredPrompt('  BAD   question? '), true);
  assert.deepEqual(dropRetired([item('Bad question?'), item('Fine one?')]).map((i) => i.prompt), ['Fine one?']);
});

test('loadRetired reads the list once; a failing, malformed or slow response leaves everything visible', async () => {
  let calls = 0;
  globalThis.fetch = (async () => { calls++; return new Response(JSON.stringify({ prompts: [promptKey('Bad question?')] })); }) as typeof fetch;
  setRetiredForTest(null);
  await loadRetired();
  await loadRetired();
  assert.equal(calls, 1);
  assert.equal(isRetiredPrompt('Bad question?'), true);

  for (const mk of [
    () => new Response('nope', { status: 500 }),
    () => new Response('{"prompts": "x"}'),
    () => { throw new Error('offline'); },
  ]) {
    setRetiredForTest(null);
    globalThis.fetch = (async () => mk()) as typeof fetch;
    await loadRetired();
    assert.equal(isRetiredPrompt('Bad question?'), false);
  }
});

test('the practice preparer and the mock test builder leave retired questions out', () => {
  setRetiredForTest([promptKey('Bad question?')]);
  const items = [item('Bad question?'), item('Good one?'), item('Another good one?')];
  assert.deepEqual(prepareItems(items).map((i) => i.prompt).sort(), ['Another good one?', 'Good one?']);
  const test = buildMockTest([{ topic: 'T', task: 'task-x', items }], 10);
  assert.deepEqual(test.map((i) => i.prompt).sort(), ['Another good one?', 'Good one?']);
  assert.ok(test.every((i) => i.task === 'task-x'));
});
