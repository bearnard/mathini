import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createAttemptRecorder, type AttemptBody, type RecorderDeps } from './attemptRecorderCore';

function setup(over: Partial<RecorderDeps> = {}, response: { newBadges?: string[] } | null = {}) {
  const posts: AttemptBody[] = [];
  const badges: string[][] = [];
  let recorded = 0;
  const deps: RecorderDeps = {
    signedIn: () => true,
    post: async (b) => { posts.push(b); return response; },
    onBadges: (b) => badges.push(b),
    onRecorded: () => { recorded++; },
    ...over,
  };
  return { rec: createAttemptRecorder('mains-electricity', 'nst', deps), posts, badges, get recorded() { return recorded; } };
}
const flush = () => new Promise((r) => setTimeout(r, 0));

test('a correct answer posts task, subject, section, correctness and the streak', async () => {
  const s = setup();
  s.rec.record(true, 'power-station');
  await flush();
  assert.deepEqual(s.posts, [{ task: 'mains-electricity', subject: 'nst', section: 'power-station', isCorrect: true, streak: 1 }]);
  assert.equal(s.recorded, 1);
});
test('the streak counts up on correct answers and resets on a wrong one', async () => {
  const s = setup();
  for (const ok of [true, true, true, false, true]) s.rec.record(ok);
  await flush();
  assert.deepEqual(s.posts.map((p) => p.streak), [1, 2, 3, 0, 1]);
  assert.equal(s.rec.streak(), 1);
});
test('resetStreak starts a new run from zero ("Practice again")', async () => {
  const s = setup();
  s.rec.record(true); s.rec.record(true);
  s.rec.resetStreak();
  s.rec.record(true);
  await flush();
  assert.deepEqual(s.posts.map((p) => p.streak), [1, 2, 1]);
});
test('a missing section is "general"', async () => {
  const s = setup();
  s.rec.record(true); s.rec.record(true, ''); s.rec.record(true, undefined);
  await flush();
  assert.ok(s.posts.every((p) => p.section === 'general'));
});
test('an item id is sent only when it is a positive integer', async () => {
  const s = setup();
  s.rec.record(true, 'x', 42); s.rec.record(true, 'x', 0); s.rec.record(true, 'x', -3); s.rec.record(true, 'x', 1.5); s.rec.record(true, 'x', undefined);
  await flush();
  assert.deepEqual(s.posts.map((p) => p.itemId), [42, undefined, undefined, undefined, undefined]);
  assert.ok(!('itemId' in s.posts[1]));
});
test('nobody signed in: nothing is sent, but the streak still counts', async () => {
  const s = setup({ signedIn: () => false });
  s.rec.record(true); s.rec.record(true);
  await flush();
  assert.equal(s.posts.length, 0);
  assert.equal(s.recorded, 0);
  assert.equal(s.rec.streak(), 2);
});
test('signing in part-way starts recording from the next answer, with the streak so far', async () => {
  let signed = false;
  const s = setup({ signedIn: () => signed });
  s.rec.record(true);
  signed = true;
  s.rec.record(true);
  await flush();
  assert.deepEqual(s.posts.map((p) => p.streak), [2]);
});
test('earned badges are passed on, and only when there are some', async () => {
  const a = setup({}, { newBadges: ['first-correct', 'streak-3'] });
  a.rec.record(true);
  await flush();
  assert.deepEqual(a.badges, [['first-correct', 'streak-3']]);
  const b = setup({}, { newBadges: [] });
  b.rec.record(true);
  await flush();
  assert.deepEqual(b.badges, []);
  assert.equal(b.recorded, 1);
});
test('a failed request (null) or a rejected post never throws and refreshes nothing', async () => {
  const failed = setup({}, null);
  failed.rec.record(true);
  await flush();
  assert.deepEqual([failed.badges.length, failed.recorded], [0, 0]);
  const rejecting = setup({ post: async () => { throw new Error('offline'); } });
  assert.doesNotThrow(() => rejecting.rec.record(true));
  await flush();
  assert.equal(rejecting.recorded, 0);
});
test('a throwing dependency never breaks practice', () => {
  const rec = createAttemptRecorder('t', 's', { signedIn: () => { throw new Error('boom'); }, post: async () => null, onBadges: () => {}, onRecorded: () => {} });
  assert.doesNotThrow(() => rec.record(true));
  assert.doesNotThrow(() => rec.resetStreak());
});
test('a synchronous throw from post is contained', () => {
  const rec = createAttemptRecorder('t', 's', { signedIn: () => true, post: () => { throw new Error('sync'); }, onBadges: () => {}, onRecorded: () => {} });
  assert.doesNotThrow(() => rec.record(false));
});

test('a known prompt adds a qkey; no prompt adds none', async () => {
  const s = setup();
  s.rec.record(true, 'a', undefined, 'What does the steam do in a power station?');
  s.rec.record(true, 'a');
  await flush();
  assert.equal(s.posts[0].qkey, '60ab0be931f9');
  assert.equal('qkey' in s.posts[1], false);
});

test('the tapped option is sent as `chosen` (trimmed to 200 chars) and omitted when there is none', async () => {
  const s = setup();
  s.rec.record(false, 'sec', undefined, 'A prompt?', 'Wrong option');
  s.rec.record(true, 'sec', undefined, 'A prompt?', 'x'.repeat(500));
  s.rec.record(true, 'sec', undefined, 'A prompt?');
  await flush();
  assert.equal(s.posts[0].chosen, 'Wrong option');
  assert.equal(s.posts[1].chosen!.length, 200);
  assert.equal('chosen' in s.posts[2], false);
});

// ---- ADR 0005: runs
import { createRunTracker, type RunResult, type RunTrackerDeps } from './runs/runTracker';

function withRun(over: Partial<RunTrackerDeps> = {}, signedIn = true) {
  const log: string[] = [];
  const run = createRunTracker({
    signedIn: () => signedIn,
    newId: () => 'run-1',
    now: () => 5,
    start: async () => { log.push('start'); return true; },
    finish: async (id) => { log.push(`finish:${id}`); return { id, status: 'finished', nItems: 2, nAnswered: 2, nCorrect: 1, scorePct: 50, durationMs: 1 } as RunResult; },
    ...over,
  });
  const s = setup({ signedIn: () => signedIn, run: { tracker: run, scope: () => ({ kind: 'practice', grade: 6, subject: 'nst', scopeKey: 'mains-electricity', scopeLabel: 'Mains', nItems: 2 }) } });
  return { ...s, log, run };
}

test('with a run: the first answer starts the run and every answer carries its id', async () => {
  const s = withRun();
  s.rec.record(true); s.rec.record(false);
  await flush();
  assert.deepEqual(s.posts.map((p) => p.runId), ['run-1', 'run-1']);
  assert.deepEqual(s.log, ['start']);
});

test('with a run: finishRun waits for the posts, then finishes once', async () => {
  const s = withRun();
  s.rec.record(true); s.rec.record(true);
  const r = await s.rec.finishRun();
  assert.equal(s.posts.length, 2, 'both answers were posted before the run finished');
  assert.equal(r?.scorePct, 50);
  assert.deepEqual(s.log, ['start', 'finish:run-1']);
  assert.equal(await s.rec.finishRun(), null);
});

test('with a run: resetStreak ("Practice again") ends the run so the next answer starts a new one', async () => {
  let n = 0;
  const s = withRun({ newId: () => `run-${++n}` });
  s.rec.record(true);
  s.rec.resetStreak();
  s.rec.record(true);
  await flush();
  assert.deepEqual(s.posts.map((p) => p.runId), ['run-1', 'run-2']);
});

test('with a run that the server refused: answers are still posted, without a run id', async () => {
  const s = withRun({ start: async () => false });
  s.rec.record(true);
  await flush();
  assert.equal(s.posts.length, 1);
  assert.ok(!('runId' in s.posts[0]));
});

test('with a run, anonymous: nothing is posted and nothing is started', async () => {
  const s = withRun({}, false);
  s.rec.record(true);
  await flush();
  assert.deepEqual(s.posts, []);
  assert.deepEqual(s.log, []);
});

test('without a run the recorder behaves exactly as before (finishRun resolves null)', async () => {
  const s = setup();
  s.rec.record(true);
  await flush();
  assert.ok(!('runId' in s.posts[0]));
  assert.equal(await s.rec.finishRun(), null);
});
