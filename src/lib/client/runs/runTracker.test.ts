import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRunTracker, type LocalRunSummary, type RunResult, type RunScope, type RunTrackerDeps } from './runTracker';
import { LOCAL_RUNS_KEY, MAX_LOCAL_RUNS, readLocalRuns, saveLocalRun, type StorageLike } from './localRuns';
import { submitPracticeRun } from './submitRun';

const scope: RunScope = { kind: 'practice', grade: 6, subject: 'nst', scopeKey: 'electric-circuits', scopeLabel: 'Electric Circuits', nItems: 3 };
const result = (id: string): RunResult => ({ id, status: 'finished', nItems: 3, nAnswered: 3, nCorrect: 2, scorePct: 67, durationMs: 1000 });

function setup(over: Partial<RunTrackerDeps> = {}, o: { accept?: boolean; signedIn?: boolean } = {}) {
  const log: string[] = [];
  const started: unknown[] = [];
  const local: LocalRunSummary[] = [];
  let n = 0;
  let t = 1000;
  const deps: RunTrackerDeps = {
    signedIn: () => o.signedIn ?? true,
    newId: () => `id-${++n}`,
    now: () => (t += 10),
    start: async (b) => { log.push('start'); started.push(b); return o.accept ?? true; },
    finish: async (id) => { log.push(`finish:${id}`); return result(id); },
    saveLocal: (s) => local.push(s),
    ...over,
  };
  return { tr: createRunTracker(deps), log, started, local };
}

test('begin starts one run; a second begin while it is active does nothing; runId resolves to the accepted id', async () => {
  const s = setup();
  s.tr.begin(scope);
  s.tr.begin(scope);
  assert.equal(await s.tr.runId(), 'id-1');
  assert.deepEqual(s.log, ['start']);
  assert.equal(s.tr.active(), true);
});

test('runId is null when the server refuses the start or throws, and before any begin', async () => {
  const refused = setup({}, { accept: false });
  refused.tr.begin(scope);
  assert.equal(await refused.tr.runId(), null);
  const boom = setup({ start: async () => { throw new Error('offline'); } });
  boom.tr.begin(scope);
  assert.equal(await boom.tr.runId(), null);
  assert.equal(await setup().tr.runId(), null);
});

test('finish waits for the answers that are still being posted, then asks the server to finish', async () => {
  const s = setup();
  s.tr.begin(scope);
  let release!: () => void;
  s.tr.track(new Promise<void>((r) => { release = () => { s.log.push('answer-posted'); r(); }; }));
  const f = s.tr.finish();
  await new Promise((r) => setTimeout(r, 5));
  assert.deepEqual(s.log, ['start'], 'not finished while an answer is in flight');
  release();
  const res = await f;
  assert.deepEqual(s.log, ['start', 'answer-posted', 'finish:id-1']);
  assert.equal(res?.scorePct, 67);
  assert.equal(s.tr.active(), false);
});

test('a failed answer post does not stop the run from finishing', async () => {
  const s = setup();
  s.tr.begin(scope);
  s.tr.track(Promise.reject(new Error('network')));
  assert.equal((await s.tr.finish())?.id, 'id-1');
});

test('finish is idempotent and returns null when no run is active', async () => {
  const s = setup();
  assert.equal(await s.tr.finish(), null);
  s.tr.begin(scope);
  assert.ok(await s.tr.finish());
  assert.equal(await s.tr.finish(), null);
  assert.deepEqual(s.log, ['start', 'finish:id-1']);
});

test('finish with a refused start asks the server for nothing', async () => {
  const s = setup({}, { accept: false });
  s.tr.begin(scope);
  assert.equal(await s.tr.finish(), null);
  assert.deepEqual(s.log, ['start']);
});

test('reset forgets the run without finishing it; the next begin makes a new run', async () => {
  const s = setup();
  s.tr.begin(scope);
  s.tr.reset();
  assert.equal(s.tr.active(), false);
  s.tr.begin(scope);
  assert.equal(await s.tr.runId(), 'id-2');
  assert.deepEqual(s.log, ['start', 'start']);
});

test('the start request carries the scope, the id and a start time that is never in the future', async () => {
  const s = setup();
  s.tr.begin({ ...scope, startedAt: 500 });
  const b = s.started[0] as Record<string, unknown>;
  assert.deepEqual([b.id, b.kind, b.scopeKey, b.nItems, b.startedAt], ['id-1', 'practice', 'electric-circuits', 3, 500]);
  const f = setup();
  f.tr.begin({ ...scope, startedAt: 9_999_999 });
  assert.ok((f.started[0] as { startedAt: number }).startedAt < 9_999_999);
});

test('anonymous learners: nothing is sent, and a summary is kept on the device only', async () => {
  const s = setup({}, { signedIn: false });
  s.tr.begin(scope);
  s.tr.note(true); s.tr.note(false); s.tr.note(true);
  assert.equal(await s.tr.runId(), null);
  assert.equal(await s.tr.finish(), null);
  assert.deepEqual(s.log, []);
  assert.deepEqual(s.local.map((l) => [l.scopeKey, l.answered, l.correct, l.nItems]), [['electric-circuits', 3, 2, 3]]);
});

test('anonymous with no answers keeps nothing', async () => {
  const s = setup({}, { signedIn: false });
  s.tr.begin(scope);
  await s.tr.finish();
  assert.deepEqual(s.local, []);
});

test('a throwing dependency never escapes', async () => {
  const s = setup({ newId: () => { throw new Error('x'); } });
  assert.doesNotThrow(() => s.tr.begin(scope));
  assert.equal(await s.tr.finish(), null);
});

// ---- submitPracticeRun
test('submitPracticeRun: starts the run, posts every answer with the run id, finishes after the posts, and collects the badges', async () => {
  const s = setup();
  const posts: Record<string, unknown>[] = [];
  const order: string[] = [];
  const out = await submitPracticeRun(
    { tracker: s.tr, post: async (b) => { posts.push(b); order.push('post'); return { newBadges: b.isCorrect ? ['first'] : [] }; } },
    { scope, task: 'electric-circuits', subject: 'nst', results: [{ correct: true, section: 'a', qkey: 'q1', chosen: 'x' }, { correct: false }, { correct: true }] },
  );
  assert.deepEqual(posts.map((p) => p.runId), ['id-1', 'id-1', 'id-1']);
  assert.deepEqual(posts.map((p) => p.isCorrect), [true, false, true]);
  assert.deepEqual(s.log, ['start', 'finish:id-1']);
  assert.deepEqual(out.newBadges, ['first']);
  assert.equal(out.run?.id, 'id-1');
});

test('submitPracticeRun: if the run could not start the answers are still posted, without a run id', async () => {
  const s = setup({}, { accept: false });
  const posts: Record<string, unknown>[] = [];
  const out = await submitPracticeRun({ tracker: s.tr, post: async (b) => { posts.push(b); return {}; } }, { scope, task: 't', subject: 'nst', results: [{ correct: true }, { correct: true }] });
  assert.equal(posts.length, 2);
  assert.ok(posts.every((p) => !('runId' in p)));
  assert.equal(out.run, null);
});

test('submitPracticeRun: a post that fails is skipped and the run still finishes', async () => {
  const s = setup();
  const out = await submitPracticeRun({ tracker: s.tr, post: async () => { throw new Error('x'); } }, { scope, task: 't', subject: 'nst', results: [{ correct: true }] });
  assert.equal(out.newBadges.length, 0);
  assert.equal(out.run?.id, 'id-1');
});

test('submitPracticeRun: anonymous (post = null) sends nothing and keeps the summary on the device', async () => {
  const s = setup({}, { signedIn: false });
  const out = await submitPracticeRun({ tracker: s.tr, post: null }, { scope, task: 't', subject: 'nst', results: [{ correct: true }, { correct: false }] });
  assert.deepEqual(out, { newBadges: [], run: null });
  assert.deepEqual(s.local.map((l) => [l.answered, l.correct]), [[2, 1]]);
  assert.deepEqual(s.log, []);
});

// ---- localRuns
const mem = (): StorageLike & { data: Map<string, string> } => {
  const data = new Map<string, string>();
  return { data, getItem: (k) => data.get(k) ?? null, setItem: (k, v) => void data.set(k, v) };
};
const summary = (i: number): LocalRunSummary => ({ kind: 'practice', grade: 6, subject: 'nst', scopeKey: `k${i}`, scopeLabel: 'x', nItems: 3, answered: 3, correct: 2, at: i, durationMs: 5 });

test('local runs: saved, read back, capped at MAX_LOCAL_RUNS, and tolerant of bad storage', () => {
  const st = mem();
  for (let i = 0; i < MAX_LOCAL_RUNS + 5; i++) saveLocalRun(st, summary(i));
  const all = readLocalRuns(st);
  assert.equal(all.length, MAX_LOCAL_RUNS);
  assert.equal(all[all.length - 1].scopeKey, `k${MAX_LOCAL_RUNS + 4}`);
  st.data.set(LOCAL_RUNS_KEY, '{not json');
  assert.deepEqual(readLocalRuns(st), []);
  st.data.set(LOCAL_RUNS_KEY, JSON.stringify([{ nope: 1 }, summary(1)]));
  assert.equal(readLocalRuns(st).length, 1);
  assert.deepEqual(readLocalRuns(null), []);
  assert.doesNotThrow(() => saveLocalRun(null, summary(1)));
  assert.doesNotThrow(() => saveLocalRun({ getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('full'); } }, summary(1)));
});
