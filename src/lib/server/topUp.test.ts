import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openQuestionsDb } from './questions/testQuestionsDb';
import { buildTopUpPrompt, DEFAULT_LIMITS, numericOkFor, poolsBelowTarget, runTopUp, type TopUpLimits } from './topUp';
import { QUALITY_RULES } from './caps/qualityRules';
import type { GeneratedItem } from './gemini';

// Fake generator: a stream of distinct, clean questions (never repeats, so near-duplicate rejection is not triggered).
let n = 0;
const words = ['river', 'planet', 'magnet', 'harvest', 'volcano', 'compass', 'fraction', 'pattern', 'monsoon', 'circuit', 'glacier', 'orbit'];
function clean(): GeneratedItem {
  n++;
  const w = `${words[n % words.length]}${n}`;
  return {
    prompt: `Which statement about ${w} explains how scientists group it correctly in class ${n}?`,
    options: [`It belongs with ${w} group alpha`, `It belongs with ${w} group beta`, `It belongs with ${w} group gamma`, `It belongs with ${w} group delta`],
    answer: `It belongs with ${w} group alpha`,
    explanation: `${w} belongs with group alpha because of how it is defined in the topic.`,
  };
}
const cleanBatch = (k = 10) => Array.from({ length: k }, clean);
const limits = (o: Partial<TopUpLimits> = {}): TopUpLimits => ({ ...DEFAULT_LIMITS, ...o });

async function fixture(pools: Record<string, { rows?: number; rejected?: number; enabled?: number; target?: number }>) {
  const t = await openQuestionsDb(); // production has the question tables (0008), so the fixture does too
  if (!t) return null;
  t.raw.exec('DELETE FROM pool_tasks');
  const ins = t.raw.prepare('INSERT INTO item_cache (task, prompt, options, answer, explanation, created_at, quality_score) VALUES (?,?,?,?,?,1,?)');
  for (const [task, p] of Object.entries(pools)) {
    t.raw.prepare('INSERT INTO pool_tasks (task, target, enabled, created_at) VALUES (?,?,?,1)').run(task, p.target ?? 50, p.enabled ?? 1);
    for (let i = 0; i < (p.rows ?? 0); i++) ins.run(task, `existing ${task} ${i}`, '["a","b","c","d"]', 'a', 'because', 90);
    for (let i = 0; i < (p.rejected ?? 0); i++) ins.run(task, `rejected ${task} ${i}`, '["a","b","c","d"]', 'a', 'because', 0);
  }
  return t;
}

test('pools below target count SERVABLE rows only, biggest deficit first, disabled pools never', async () => {
  const t = await fixture({
    'gr6-area-perimeter-t3': { rows: 10, rejected: 40 }, // 50 rows but only 10 servable: deficit 40
    'road-to-democracy': { rows: 45 },                    // deficit 5
    'early-indigenous-medicine': { rows: 50 },                     // full
    'modern-medicine': { rows: 0, enabled: 0 },           // disabled
    'what-is-democracy': { rows: 0 },                       // purged to zero: deficit 50
  });
  if (!t) return;
  const below = await poolsBelowTarget(t.db);
  assert.deepEqual(below.map((b) => [b.task, b.servable]), [['what-is-democracy', 0], ['gr6-area-perimeter-t3', 10], ['road-to-democracy', 45]]);
});

test('a pool purged to zero is refilled; a task NOT in pool_tasks (deliberately empty) is never touched', async () => {
  const t = await fixture({ 'what-is-democracy': { rows: 0, target: 12 } });
  if (!t) return;
  const prompts: string[] = [];
  const s = await runTopUp({ db: t.db, generate: async (p) => { prompts.push(p); return cleanBatch(); } }, limits());
  assert.equal(s.accepted, 12, 'filled to target');
  assert.equal((t.raw.prepare("SELECT COUNT(*) AS n FROM item_cache WHERE task='what-is-democracy'").get() as { n: number }).n, 12);
  assert.equal((t.raw.prepare("SELECT COUNT(*) AS n FROM item_cache WHERE task='electric-circuits'").get() as { n: number }).n, 0);
  assert.ok(prompts.length >= 1);
  // stored rows carry a clean score and a flags column
  const row = t.raw.prepare("SELECT quality_score AS q, quality_flags AS f FROM item_cache WHERE task='what-is-democracy' LIMIT 1").get() as { q: number; f: string };
  assert.ok(row.q >= 80);
  assert.equal(row.f, '[]');
  // already full pools do no work at all
  const s2 = await runTopUp({ db: t.db, generate: async () => { throw new Error('must not be called'); } }, limits());
  assert.equal(s2.accepted, 0);
  assert.equal(s2.apiCalls, 0);
});

test('the prompt is the registry preamble + the task CAPS instruction + the quality rules, for the right grade', async () => {
  const p = buildTopUpPrompt('what-is-democracy', 'definitions');
  assert.ok(p);
  assert.ok(p.includes('what-is-democracy'));
  assert.ok(p.includes(QUALITY_RULES), 'quality rules are in the prompt');
  assert.ok(/Grade 6/.test(p), 'grade 6 preamble');
  assert.ok(p.includes('DEFINITIONS'));
  assert.ok(!p.includes('{count}'));
  const g7 = Object.entries((await import('./caps/taskIndex.generated')).TASK_INDEX).find(([, v]) => v[1] === 7 && v[0] !== 'grade6');
  assert.ok(g7);
  assert.ok(/Grade 7/.test(buildTopUpPrompt(g7[0], 'definitions') ?? ''), 'a Grade 7 task gets a Grade 7 prompt, not the old generic Grade 6 one');
  assert.equal(buildTopUpPrompt('no-such-task', 'definitions'), null);
});

test('bad generations are rejected and NEVER stored, with the reasons counted', async () => {
  const t = await fixture({ 'what-is-democracy': { rows: 0, target: 3 } });
  if (!t) return;
  const bad: GeneratedItem[] = [
    { prompt: 'What is time management in school life today?', options: ['Wasting time', 'Organizing and using your time well', 'Studying all the time', 'Never resting'], answer: 'Organizing and using your time well', explanation: 'It means planning your time well.' },
    { prompt: 'What is 5^2 x 5^3 in index notation please?', options: ['5^10', '5^6', '5^5', '75'], answer: '5^10', explanation: 'Add exponents: 5^2 x 5^3 = 5^5, NOT 5^10.' },
    { prompt: 'Which choice avoids a bad plan for the exam week ahead?', options: ['Make a study plan', 'Choose randomly', 'Wait passively', 'Do nothing'], answer: 'Make a study plan', explanation: 'A study plan helps you cover everything.' },
  ];
  let first = true;
  const s = await runTopUp({ db: t.db, generate: async () => { if (first) { first = false; return bad; } return cleanBatch(); } }, limits());
  assert.equal(s.accepted, 3);
  assert.ok(s.rejected >= 3);
  assert.ok((s.rejectedByReason.length_tell_strong ?? 0) >= 1);
  assert.ok((s.rejectedByReason.explanation_contradicts_key ?? 0) >= 1);
  assert.ok((s.rejectedByReason.filler_distractor ?? 0) >= 1);
  const stored = (t.raw.prepare("SELECT prompt FROM item_cache WHERE task='what-is-democracy'").all() as { prompt: string }[]).map((r) => r.prompt);
  for (const b of bad) assert.ok(!stored.includes(b.prompt), 'a rejected question was stored');
});

test('a batch whose keys are mostly the longest is regenerated (at most maxRegenerate times)', async () => {
  const t = await fixture({ 'what-is-democracy': { rows: 0, target: 4 } });
  if (!t) return;
  let calls = 0;
  const allLongest = (): GeneratedItem[] => Array.from({ length: 6 }, (_, i) => ({ prompt: `Which of these ideas ${calls}-${i} is described by the topic text above?`, options: ['short', 'tiny', 'brief', 'a medium sized correct sentence'], answer: 'a medium sized correct sentence', explanation: 'The medium sized sentence is correct here.' }));
  const s = await runTopUp({ db: t.db, generate: async () => { calls++; return calls <= 2 ? allLongest() : cleanBatch(); } }, limits());
  assert.equal(s.regenerated, 2);
  assert.equal(s.accepted, 4);
  // if the model never obeys, regeneration stops after maxRegenerate and the strong-tell rows are simply rejected
  const t2 = await fixture({ 'what-is-democracy': { rows: 0, target: 4 } });
  if (!t2) return;
  let c2 = 0;
  const s2 = await runTopUp({ db: t2.db, generate: async () => { c2++; return allLongest(); } }, limits({ maxApiCalls: 20, maxRegenerate: 2 }));
  assert.equal(s2.accepted, 0);
  assert.ok(c2 <= 20);
  assert.ok(s2.rejectedByReason.length_tell_strong >= 1);
});

test('budget: stops at maxAccepted and at maxApiCalls, and reports why', async () => {
  const t = await fixture({ 'what-is-democracy': { rows: 0 }, 'road-to-democracy': { rows: 0 }, 'early-indigenous-medicine': { rows: 0 } });
  if (!t) return;
  const s = await runTopUp({ db: t.db, generate: async () => cleanBatch() }, limits({ maxAccepted: 15 }));
  assert.equal(s.accepted, 15);
  assert.equal(s.stoppedBy, 'maxAccepted');
  const t2 = await fixture({ 'what-is-democracy': { rows: 0 }, 'road-to-democracy': { rows: 0 } });
  if (!t2) return;
  let calls = 0;
  const s2 = await runTopUp({ db: t2.db, generate: async () => { calls++; return cleanBatch(); } }, limits({ maxApiCalls: 3 }));
  assert.equal(calls, 3);
  assert.equal(s2.stoppedBy, 'maxApiCalls');
  const s3 = await runTopUp({ db: (await fixture({ 'what-is-democracy': { rows: 0 }, 'road-to-democracy': { rows: 0 }, 'early-indigenous-medicine': { rows: 0 } }))!.db, generate: async () => cleanBatch() }, limits({ maxTasks: 1, maxAccepted: 1000 }));
  assert.equal(s3.tasksWorked, 1);
});

test('near-duplicates of existing rows (including rejected ones) are rejected; a failing generator is survived', async () => {
  const t = await fixture({ 'what-is-democracy': { rows: 2, target: 4 } });
  if (!t) return;
  const dup: GeneratedItem = { ...clean(), prompt: 'existing what-is-democracy 0' };
  let call = 0;
  const s = await runTopUp({ db: t.db, generate: async () => { call++; if (call === 1) throw new Error('Gemini error: 500'); return call === 2 ? [dup, ...cleanBatch(5)] : cleanBatch(5); } }, limits());
  assert.ok((s.rejectedByReason.near_duplicate ?? 0) >= 1);
  assert.equal(s.accepted, 2);
});

test('numeric word problems are only on topic in maths-like subjects', () => {
  assert.equal(numericOkFor('gr6-area-perimeter-t3', 'grade6'), true);
  assert.equal(numericOkFor('what-is-democracy', 'grade6'), false);
  assert.equal(numericOkFor('gr7-whole-numbers-t1', 'math'), true);
  assert.equal(numericOkFor('gr8-drama-t1', 'ca'), false);
});

test('semantic duplicates are dropped when an embedder and vector index are supplied, and the vector id is stored', async () => {
  const t = await fixture({ 'what-is-democracy': { rows: 0, target: 3 } });
  if (!t) return;
  const upserts: string[] = [];
  const vec = { async query() { return { matches: [] as { score: number }[] }; }, async upsert(v: { id: string }[]) { upserts.push(...v.map((x) => x.id)); } };
  let k = 0;
  const embed = async () => (k++ % 2 === 0 ? [1, 0] : [0, 1]); // alternating orthogonal vectors: every other one is a duplicate of an earlier one only if equal
  const s = await runTopUp({ db: t.db, generate: async () => cleanBatch(6), embed, vector: vec }, limits());
  assert.ok(s.accepted >= 2 && s.accepted <= 3);
  assert.ok(upserts.length >= 1);
  assert.ok((t.raw.prepare('SELECT COUNT(*) AS n FROM item_cache WHERE vector_id IS NOT NULL').get() as { n: number }).n >= 1);
  assert.ok((s.rejectedByReason.semantic_duplicate ?? 0) >= 1);
});

test('a Grade 6 maths question with a decimal point is rejected at insert; the same question in a Grade 7 maths pool is stored with a lower score', async () => {
  const withPoint = (n: number): GeneratedItem => ({
    prompt: `A rope is ${n}.5 metres long and a second rope is 1.5 metres long. How long are they together in total?`,
    options: [`${n + 2},0 m`, `${n + 1},5 m`, `${n + 3},5 m`, `${n + 9},0 m`],
    answer: `${n + 2},0 m`,
    explanation: `Add ${n},5 and 1,5 to get ${n + 2},0 metres.`,
  });
  const t6 = await fixture({ 'gr6-length-t3': { rows: 0, target: 2 } });
  if (!t6) return;
  let first = true;
  const s6 = await runTopUp({ db: t6.db, generate: async () => { if (first) { first = false; return [withPoint(3), withPoint(4)]; } return cleanBatch(); } }, limits());
  assert.ok((s6.rejectedByReason.decimal_point ?? 0) >= 2, JSON.stringify(s6.rejectedByReason));
  assert.equal(s6.accepted, 2);
  const stored6 = (t6.raw.prepare("SELECT prompt FROM item_cache WHERE task='gr6-length-t3'").all() as { prompt: string }[]).map((r) => r.prompt);
  assert.ok(stored6.every((p) => !/\d\.\d/.test(p)), 'no decimal-point question was stored for Grade 6 maths');

  const t7 = await fixture({ 'gr7-decimal-fractions-t2': { rows: 0, target: 2 } });
  if (!t7) return;
  let once = true;
  const s7 = await runTopUp({ db: t7.db, generate: async () => { if (once) { once = false; return [withPoint(3), withPoint(4)]; } return []; } }, limits());
  assert.equal(s7.accepted, 2);
  const rows7 = t7.raw.prepare("SELECT quality_score AS q, quality_flags AS f FROM item_cache WHERE task='gr7-decimal-fractions-t2'").all() as { q: number; f: string }[];
  for (const r of rows7) { assert.ok(r.q > 0 && r.q < 80); assert.ok(JSON.parse(r.f).includes('decimal_point')); }
});

// ---------- registration at insert (served from D1 at once) ----------
import { makeQkey } from '../shared/qkey';
import { servePool, clearServedCache } from './serving/served';
import { clearFlagCache } from './serving/flags';

test('every accepted top-up row is registered in questions in the same batch: source ai, v1 current, the pool row linked, id = qkey', async () => {
  const t = await fixture({ 'what-is-democracy': { rows: 0 } });
  if (!t) return;
  const s = await runTopUp({ db: t.db, generate: async () => cleanBatch(10) }, limits({ maxAccepted: 6 }));
  assert.equal(s.accepted, 6);
  assert.equal(s.registered, 6);
  const rows = t.raw.prepare("SELECT c.id AS item, c.prompt, q.id AS qid, q.source, q.status, q.current_version_id AS cv, v.version_no, v.author, v.status AS vs, v.qkey FROM item_cache c JOIN questions q ON q.legacy_item_id = c.id JOIN question_versions v ON v.id = q.current_version_id WHERE c.task = 'what-is-democracy'").all() as Record<string, unknown>[];
  assert.equal(rows.length, 6);
  for (const r of rows) {
    assert.equal(r.qid, makeQkey('what-is-democracy', String(r.prompt)));
    assert.deepEqual([r.source, r.status, r.version_no, r.author, r.vs, r.qkey], ['ai', 'active', 1, 'ai', 'approved', r.qid]);
  }
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM questions').get() as { n: number }).n, 6);
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM question_versions').get() as { n: number }).n, 6);
});

test('the new rows are served from D1 when the flag is on (the point of registering them)', async () => {
  const t = await fixture({ 'what-is-democracy': { rows: 0 } });
  if (!t) return;
  await runTopUp({ db: t.db, generate: async () => cleanBatch(10) }, limits({ maxAccepted: 5 }));
  t.raw.prepare("UPDATE serving_flags SET value = ? WHERE key = 'serve_from_d1'").run('{"grades":[],"tasks":["what-is-democracy"],"exclude":[]}');
  clearFlagCache(); clearServedCache();
  const served = await servePool(t.db, 'what-is-democracy', 20);
  assert.equal(served.length, 5);
  assert.ok(served.every((i) => 'qid' in i));
});

test('registration is idempotent: running it again for the same rows adds nothing', async () => {
  const t = await fixture({ 'what-is-democracy': { rows: 0 } });
  if (!t) return;
  await runTopUp({ db: t.db, generate: async () => cleanBatch(10) }, limits({ maxAccepted: 4 }));
  const { registerAiStatements } = await import('./questions/register');
  const items = t.raw.prepare("SELECT task, prompt, options, answer, explanation, section FROM item_cache WHERE task = 'what-is-democracy'").all() as { task: string; prompt: string; options: string; answer: string; explanation: string; section: string }[];
  const before = [(t.raw.prepare('SELECT COUNT(*) AS n FROM questions').get() as { n: number }).n, (t.raw.prepare('SELECT COUNT(*) AS n FROM question_versions').get() as { n: number }).n];
  for (const it of items) for (const st of registerAiStatements({ ...it, options: JSON.parse(it.options) })) t.raw.prepare(st.sql).run(...st.params);
  assert.deepEqual([(t.raw.prepare('SELECT COUNT(*) AS n FROM questions').get() as { n: number }).n, (t.raw.prepare('SELECT COUNT(*) AS n FROM question_versions').get() as { n: number }).n], before);
});

test('if the question tables are missing (migration 0008 not applied), the row is still stored and generation carries on', async () => {
  const t = await fixture({ 'what-is-democracy': { rows: 0 } });
  if (!t) return;
  t.raw.exec('DROP TABLE question_versions'); t.raw.exec('DROP TABLE questions');
  const s = await runTopUp({ db: t.db, generate: async () => cleanBatch(10) }, limits({ maxAccepted: 3 }));
  assert.equal(s.accepted, 3);
  assert.equal(s.registered, 0);
  assert.equal((t.raw.prepare("SELECT COUNT(*) AS n FROM item_cache WHERE task = 'what-is-democracy'").get() as { n: number }).n, 3);
});

test('a pool row identical to an existing curated question is LINKED to it, not duplicated', async () => {
  const t = await fixture({ 'what-is-democracy': { rows: 0 } });
  if (!t) return;
  const item = clean();
  const { registerQuestionSql } = await import('./questions/sql');
  t.raw.exec(registerQuestionSql({ task: 'what-is-democracy', section: 'general', kind: 'mcq', source: 'curated', prompt: item.prompt, options: item.options, answer: item.answer, explanation: item.explanation ?? '', extra: {}, author: 'seed' }).join('\n'));
  const s = await runTopUp({ db: t.db, generate: async () => [item, ...cleanBatch(9)] }, limits({ maxAccepted: 3 }));
  assert.ok(s.accepted >= 1);
  const q = t.raw.prepare('SELECT source, legacy_item_id AS l FROM questions WHERE id = ?').get(makeQkey('what-is-democracy', item.prompt)) as { source: string; l: number | null };
  assert.equal(q.source, 'curated');
  assert.ok(q.l !== null, 'linked to the pool row');
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM questions WHERE id = ?').get(makeQkey('what-is-democracy', item.prompt)) as { n: number }).n, 1);
});
