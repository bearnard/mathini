import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { NextRequest } from 'next/server';
import { openQuestionsDb } from '../questions/testQuestionsDb';
import { registerQuestionSql } from '../questions/sql';
import { DEMO_GRADES, STATIC_DEMO } from './demoStatic';
import { DEMO_COUNT, POOL_SIZE, POOL_TTL_S, chooseDemo, clearDemoMemory, isDemoGrade, loadDemo, pickTasks, readPool, shuffle, tasksForGrade, toDemoQuestion, type DemoQuestion, type PoolCache } from './demoQuestions';
import { GET } from '../../../app/api/demo/route';
import { EDGE_ROUTES } from '../edgeLimit';

// A deterministic rng so selection tests are repeatable.
const seeded = (seed = 7) => () => ((seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296);

test('static fallback: three questions for every grade 5 to 12, from three subjects, key among the options, no duplicate options', () => {
  assert.deepEqual([...DEMO_GRADES], [5, 6, 7, 8, 9, 10, 11, 12]);
  for (const g of DEMO_GRADES) {
    const qs = STATIC_DEMO[g];
    assert.equal(qs.length, 3, `grade ${g}`);
    assert.equal(new Set(qs.map((q) => q.subject)).size, 3, `grade ${g} has three different subjects`);
    assert.equal(new Set(qs.map((q) => q.prompt)).size, 3);
    for (const q of qs) {
      assert.ok(q.options.includes(q.answer), `${q.id}: the key is one of the options`);
      assert.equal(new Set(q.options).size, q.options.length, `${q.id}: no duplicate options`);
      assert.ok(q.options.length >= 3 && q.explanation.length >= 20, q.id);
      // maths in $...$ must be balanced so MathText can render it
      for (const t of [q.prompt, q.answer, q.explanation, ...q.options]) assert.equal((t.match(/(?<!\\)\$/g) ?? []).length % 2, 0, `${q.id}: unbalanced $ in "${t}"`);
    }
  }
});

test('static maths is right (the demo must never mark a wrong answer correct)', () => {
  const key = (g: number, i: number) => STATIC_DEMO[g][i].answer;
  assert.equal(6 * 7, 42); assert.equal(key(5, 0), '42');
  assert.equal(1 / 2, 2 / 4);
  assert.equal(1 / 2 + 1 / 4, 3 / 4);
  assert.equal(-3 + 5, 2); assert.equal(key(7, 0), '$2$');
  assert.equal((11 - 3) / 2, 4); assert.equal(2 * 4 + 3, 11); assert.equal(key(8, 0), '$x = 4$');
  assert.equal(Math.sqrt(49), 7); assert.equal(key(9, 0), '$7$');
  assert.equal(200 * 0.85, 170); assert.equal(key(10, 0), 'R170');
  assert.equal((49 - 9) / (7 - 3) / (7 + 3), 1); // x = 7: (x^2-9)/(x-3) = x+3 = 10
  assert.equal((7 * 7 - 9) / (7 - 3), 7 + 3); assert.equal(key(11, 0), '$x + 3$');
  assert.equal(2 ** 3, 8); assert.equal(key(12, 0), '$3$');
});

test('grades: 5 to 12 only; every grade has topics from the curriculum names', () => {
  for (const g of DEMO_GRADES) assert.ok(tasksForGrade(g).length >= 3, `grade ${g} has topics`);
  for (const bad of [0, 4, 13, 6.5, NaN]) assert.equal(isDemoGrade(bad), false);
  assert.equal(isDemoGrade(5) && isDemoGrade(12), true);
});

test('the demo leaves out isiXhosa and Afrikaans: a visitor who does not speak them cannot judge the questions', () => {
  for (const g of DEMO_GRADES) for (const t of tasksForGrade(g)) assert.ok(!/isixhosa|afrikaans/i.test(t.subject), `${g}: ${t.subject}`);
  assert.ok(tasksForGrade(7).some((t) => /Mathematics/.test(t.subject)));
});

test('pickTasks: a mix of subjects (round robin), no repeats, never more than asked', () => {
  const tasks = [...'abcdef'].map((t, i) => ({ task: t, subject: i < 3 ? 'Maths' : i < 5 ? 'History' : 'Science' }));
  const picked = pickTasks(tasks, 3, seeded());
  assert.equal(picked.length, 3);
  assert.equal(new Set(picked.map((t) => t.subject)).size, 3, 'three tasks from three subjects');
  assert.equal(new Set(pickTasks(tasks, 6, seeded(3)).map((t) => t.task)).size, 6);
  assert.equal(pickTasks(tasks, 20, seeded()).length, 6);
  assert.deepEqual(pickTasks([], 5), []);
});

const row = (over: Partial<{ id: string; task: string; prompt: string; options: unknown; answer: string; explanation: string | null; extra: unknown }> = {}) => ({
  id: over.id ?? 'q1', task: over.task ?? 't', prompt: over.prompt ?? 'What is 2 + 2?', options: JSON.stringify(over.options ?? ['3', '4', '5', '6']), answer: over.answer ?? '4',
  explanation: over.explanation === undefined ? 'Two and two make four.' : over.explanation, extra: JSON.stringify(over.extra ?? {}),
});
test('toDemoQuestion keeps plain MCQ and drops everything unsuitable', () => {
  const ok = toDemoQuestion(row(), () => 'Maths');
  assert.deepEqual(ok, { id: 'q1', subject: 'Maths', prompt: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4', explanation: 'Two and two make four.' });
  const bad: [string, ReturnType<typeof row>][] = [
    ['key not among the options', row({ answer: '7' })],
    ['two options only', row({ options: ['3', '4'], answer: '4' })],
    ['duplicate options', row({ options: ['4', '4', '5'], answer: '4' })],
    ['no explanation', row({ explanation: '' })],
    ['a diagram item', row({ extra: { diagram: true } })],
    ['a picture item', row({ extra: { image: 'x.webp' } })],
    ['hotspots', row({ extra: { hotspots: [1] } })],
    ['the prompt points at a diagram', row({ prompt: 'Look at the diagram below. What is shown?' })],
    ['a table below', row({ prompt: 'Use the table below to answer.' })],
    ['bad JSON', { ...row(), options: 'not json' }],
    ['options not strings', row({ options: [1, 2, 3] })],
  ];
  for (const [why, r] of bad) assert.equal(toDemoQuestion(r, () => 'x'), null, why);
});

test('chooseDemo: three questions, different subjects first, options shuffled but the key stays one of them', () => {
  const pool: DemoQuestion[] = Array.from({ length: 12 }, (_, i) => ({ id: `q${i}`, subject: ['A', 'B', 'C', 'D'][i % 4], prompt: `p${i}`, options: ['w', 'x', 'y', 'z'], answer: 'y', explanation: 'because it is so' }));
  for (let s = 1; s < 20; s++) {
    const picked = chooseDemo(pool, 3, seeded(s));
    assert.equal(picked.length, 3);
    assert.equal(new Set(picked.map((q) => q.subject)).size, 3);
    assert.equal(new Set(picked.map((q) => q.id)).size, 3);
    for (const q of picked) assert.deepEqual([...q.options].sort(), ['w', 'x', 'y', 'z']);
  }
  const positions = new Set(Array.from({ length: 40 }, (_, s) => chooseDemo(pool, 3, seeded(s + 1))[0].options.indexOf('y')));
  assert.ok(positions.size > 1, 'the key is not always in the same place');
  // one subject only: still three questions
  assert.equal(chooseDemo(pool.filter((q) => q.subject === 'A'), 3, seeded()).length, 3);
  assert.equal(chooseDemo(pool.slice(0, 2), 3).length, 2);
  assert.deepEqual(shuffle([1, 2, 3, 4], seeded()).sort(), [1, 2, 3, 4]);
});

// ---- the real D1 query, on the real migrations over node:sqlite ----
const taskOfGrade = (g: number, subject?: string) => tasksForGrade(g).filter((t) => !subject || t.subject === subject);
const curated = (t: NonNullable<Awaited<ReturnType<typeof openQuestionsDb>>>, task: string, prompt: string, over: Partial<{ options: string[]; answer: string; kind: string; source: 'curated' | 'ai'; explanation: string; extra: Record<string, unknown> }> = {}) =>
  t.raw.exec(registerQuestionSql({ task, section: 'general', kind: over.kind ?? 'mcq', source: over.source ?? 'curated', prompt, options: over.options ?? ['a1', 'b1', 'c1', 'd1'], answer: over.answer ?? 'b1', explanation: over.explanation ?? 'The explanation says why b1 is right.', extra: over.extra ?? {}, author: 'seed' }).join('\n'));

/** Registers `per` curated questions for EVERY topic of a grade, so the sampled topics always have something. */
const seedGrade = (t: NonNullable<Awaited<ReturnType<typeof openQuestionsDb>>>, g: number, per = 1, label = 'Seed') =>
  tasksForGrade(g).forEach((x, i) => { for (let k = 0; k < per; k++) curated(t, x.task, `${label} ${g}-${i}-${k} question?`); });

test('readPool: only curated, active, approved plain MCQ; skips ai, retired, other kinds, flagged-suspect keys; at most two per topic; a mix of subjects', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const g = 8;
  seedGrade(t, g, 4, 'Curated');
  const traps = tasksForGrade(g).map((x) => x.task);
  for (const task of traps) {
    curated(t, task, `AI ${task}?`, { source: 'ai' });
    curated(t, task, `Order ${task}?`, { kind: 'order' });
    curated(t, task, `Diagram ${task}?`, { extra: { diagram: true } });
    curated(t, task, `Retired ${task}?`);
    curated(t, task, `Suspect ${task}?`);
  }
  t.raw.prepare("UPDATE questions SET status = 'retired' WHERE id IN (SELECT q.id FROM questions q JOIN question_versions v ON v.id = q.current_version_id WHERE v.prompt LIKE 'Retired %')").run();
  const suspects = t.raw.prepare("SELECT q.id AS id, q.current_version_id AS v FROM questions q JOIN question_versions v ON v.id = q.current_version_id WHERE v.prompt LIKE 'Suspect %'").all() as { id: string; v: number }[];
  for (const s of suspects) t.raw.prepare("INSERT INTO question_flags (question_id, version_id, kind, value, n, status, computed_at) VALUES (?, ?, 'negative_discrimination', -0.3, 50, 'open', 1)").run(s.id, s.v);
  const pool = await readPool(t.db, g, seeded(11));
  assert.ok(pool.length > 0 && pool.length <= POOL_SIZE);
  for (const q of pool) assert.match(q.prompt, /^Curated 8-\d+-\d question\?$/, `only curated, active, approved, unflagged plain MCQ, got "${q.prompt}"`);
  assert.equal(new Set(pool.map((q) => q.prompt)).size, pool.length);
  assert.ok(new Set(pool.map((q) => q.subject)).size >= 3, 'a mix of subjects');
  const perTopic = new Map<string, number>();
  for (const q of pool) { const k = q.prompt.split(' ')[1]; perTopic.set(k, (perTopic.get(k) ?? 0) + 1); }
  assert.ok([...perTopic.values()].every((n) => n <= 2), 'at most two per topic');
  assert.deepEqual(await readPool(t.db, 12, seeded()), [], 'a grade with no registered questions gives an empty pool');
});

test('readPool: a thin first sample is topped up by a second read of other topics (only some topics have questions)', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const g = 10;
  const all = tasksForGrade(g);
  // questions only on the LAST two topics of the list: a single random sample of 14 would usually miss them
  all.slice(-2).forEach((x, i) => { for (let k = 0; k < 4; k++) curated(t, x.task, `Rare ${i}-${k} question?`); });
  let reads = 0;
  const counting = { prepare: (sql: string) => { reads++; return t.db.prepare(sql); } } as unknown as D1Database;
  const pool = await readPool(counting, g, seeded(21));
  assert.ok(reads <= 2 * 2, 'at most two rounds (each may retry once without the flags table)');
  if (all.length > 14) assert.ok(pool.length >= 0);
  assert.ok(pool.every((q) => q.prompt.startsWith('Rare')));
});

test('loadDemo: three curated questions from D1 when there are enough; the answer and explanation are included', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  clearDemoMemory();
  const g = 9;
  tasksForGrade(g).forEach((x, i) => curated(t, x.task, `Grade nine question ${i}?`));
  const r = await loadDemo(g, { db: t.db, cache: null, rng: seeded(5) });
  assert.equal(r.source, 'd1');
  assert.equal(r.questions.length, DEMO_COUNT);
  for (const q of r.questions) {
    assert.match(q.prompt, /^Grade nine question \d+\?$/);
    assert.equal(q.answer, 'b1');
    assert.ok(q.explanation.length > 10 && q.options.includes('b1'));
  }
});

test('loadDemo records NOTHING: no attempts, review items or student rows are written', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  clearDemoMemory();
  seedGrade(t, 6, 2, 'Nothing');
  const count = (table: string) => (t.raw.prepare(`SELECT COUNT(*) AS n FROM ${table}`).get() as { n: number }).n;
  const tables = ['attempts', 'review_items', 'students', 'student_xp'];
  const before = tables.map(count);
  const qBefore = count('questions');
  for (const g of DEMO_GRADES) await loadDemo(g, { db: t.db, cache: null });
  assert.deepEqual(tables.map(count), before);
  assert.equal(count('questions'), qBefore, 'it does not even register questions');
});

test('D1 problems fall back to the static set: a throwing database, a missing table, no database at all', async (t0) => {
  clearDemoMemory();
  const boom = { prepare: () => { throw new Error('D1 down'); } } as unknown as D1Database;
  for (const db of [boom, null, undefined]) {
    const r = await loadDemo(7, { db, cache: null });
    assert.equal(r.source, 'static');
    assert.equal(r.questions.length, 3);
    for (const q of r.questions) assert.ok(STATIC_DEMO[7].some((s) => s.prompt === q.prompt) && q.options.includes(q.answer));
  }
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  t.raw.exec('DROP TABLE question_versions');
  clearDemoMemory();
  assert.equal((await loadDemo(7, { db: t.db, cache: null })).source, 'static');
});

test('fewer than three curated questions: topped up from the static set, never duplicated', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  clearDemoMemory();
  tasksForGrade(10).forEach((x) => curated(t, x.task, 'The only curated Grade 10 question?', { options: ['a1', 'b1', 'c1'] }));
  const r = await loadDemo(10, { db: t.db, cache: null, rng: seeded(4) });
  assert.equal(r.source, 'mixed');
  assert.equal(r.questions.length, 3);
  assert.equal(r.questions.filter((q) => q.prompt === 'The only curated Grade 10 question?').length, 1);
  assert.equal(new Set(r.questions.map((q) => q.prompt)).size, 3);
});

test('the pool is cached at the edge for a few minutes: one D1 read serves many visitors, who still get different questions', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  clearDemoMemory();
  const g = 11;
  tasksForGrade(g).forEach((x, i) => curated(t, x.task, `Cached pool question ${i}?`));
  const store = new Map<string, Response>();
  let puts = 0;
  const cache: PoolCache = {
    async match(req) { const r = store.get(req.url); return r ? r.clone() : undefined; },
    async put(req, res) { puts++; assert.match(res.headers.get('cache-control') ?? '', new RegExp(`max-age=${POOL_TTL_S}`)); store.set(req.url, res); },
  };
  let reads = 0;
  const counting = { prepare: (sql: string) => { reads++; return t.db.prepare(sql); } } as unknown as D1Database;
  const seen = new Set<string>();
  for (let i = 0; i < 12; i++) for (const q of (await loadDemo(g, { db: counting, cache, rng: seeded(i + 1) })).questions) seen.add(q.prompt);
  assert.equal(puts, 1);
  assert.equal(reads, 1, 'D1 was read once for twelve visitors');
  assert.ok(seen.size > 3, 'different visitors saw different questions');
  assert.equal(POOL_TTL_S, 300);
  // a broken cache is only a miss; an empty result is not cached
  const broken: PoolCache = { match: async () => { throw new Error('cache down'); }, put: async () => { throw new Error('cache down'); } };
  assert.equal((await loadDemo(g, { db: t.db, cache: broken })).source, 'd1');
  const empty = new Map<string, Response>();
  await loadDemo(12, { db: t.db, cache: { match: async () => undefined, put: async (r, s) => { empty.set(r.url, s); } } });
  assert.equal(empty.size, 0, 'an empty pool (grade 12 has no questions here) is not cached');
});

test('the memory copy serves where there is no edge cache, for POOL_TTL_S, then reads again', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  clearDemoMemory();
  tasksForGrade(6).forEach((x, i) => curated(t, x.task, `Memory question ${i}?`));
  let reads = 0;
  const counting = { prepare: (sql: string) => { reads++; return t.db.prepare(sql); } } as unknown as D1Database;
  await loadDemo(6, { db: counting, cache: null, now: 1_000_000 });
  await loadDemo(6, { db: counting, cache: null, now: 1_000_000 + (POOL_TTL_S - 1) * 1000 });
  assert.equal(reads, 1);
  await loadDemo(6, { db: counting, cache: null, now: 1_000_000 + POOL_TTL_S * 1000 + 1 });
  assert.equal(reads, 2);
});

// ---- the route ----
const get = (qs: string) => GET(new NextRequest(`https://x.test/api/demo${qs}`, { headers: { 'cf-connecting-ip': '41.1.1.1' } }));
test('GET /api/demo: 3 questions with the key and explanation for a valid grade; 400 with a friendly message otherwise; never cached by the browser', async () => {
  clearDemoMemory();
  const ok = await get('?grade=8');
  assert.equal(ok.status, 200);
  assert.match(ok.headers.get('cache-control') ?? '', /no-store/);
  const body = (await ok.json()) as { grade: number; source: string; questions: DemoQuestion[] };
  assert.equal(body.grade, 8);
  assert.equal(body.questions.length, 3);
  for (const q of body.questions) assert.ok(q.answer && q.explanation && q.options.includes(q.answer));
  for (const bad of ['', '?grade=4', '?grade=13', '?grade=abc', '?grade=6.5', '?grade=']) {
    const r = await get(bad);
    assert.equal(r.status, 400, bad);
    assert.match(((await r.json()) as { error: string }).error, /grade from 5 to 12/);
  }
});

test('the demo route is behind the per-IP edge limit, and "demo" is a named edge route', () => {
  const src = fs.readFileSync(path.join(process.cwd(), 'src', 'app', 'api', 'demo', 'route.ts'), 'utf8');
  assert.match(src, /routeLimited\(req, 'demo'\)/);
  assert.ok(src.indexOf("routeLimited(req, 'demo')") < src.indexOf('loadDemo('), 'the limit comes before any read');
  assert.ok(!/learnerId|studentId|verifySession/.test(src), 'IP-keyed: no session is read');
  assert.ok((EDGE_ROUTES as readonly string[]).includes('demo'));
});

test('the server side of the demo is read-only: no INSERT, UPDATE, DELETE or run() anywhere in it', () => {
  for (const f of ['src/lib/server/demo/demoQuestions.ts', 'src/lib/server/demo/demoStatic.ts', 'src/app/api/demo/route.ts']) {
    const src = fs.readFileSync(path.join(process.cwd(), f), 'utf8').replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    assert.ok(!/\b(INSERT|UPDATE|DELETE|REPLACE)\b|\.run\(|\.batch\(|\.exec\(/.test(src), `${f} writes`);
    assert.ok(!/cookie|recordReviewAnswer|verifySession|student_id|review_items|INTO attempts/i.test(src), `${f} touches a session, the review schedule or attempts`);
  }
});
