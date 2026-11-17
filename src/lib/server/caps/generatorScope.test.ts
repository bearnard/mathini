import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { openPoolDb } from '../testD1';
import { buildTopUpPrompt, FACT_GUARD, runTopUp, DEFAULT_LIMITS } from '../topUp';
import { registry } from './registry';
import { TASK_INDEX } from './taskIndex.generated';
import { usableScope, scopeFor, MIN_SCOPE_CHARS } from './scope';
import { batchesFor, calculationsOkFor, misconceptionsOkFor, BATCH_INSTRUCTIONS } from './batches';
import { checkQuestion, FALSE_STATEMENT_STEM_RE } from '../../shared/questionQuality';
import type { GeneratedItem } from '../gemini';

// ── 1. A task without scope text is never generated from ─────────────────────────────────────────────────────────────────────
// The 2026-11 audit: 'trappe-van-vergelyking' (degrees of comparison) became the trapezoid rule and 'lidwoord' a quantifier because
// the topic had only its slug to go on.

test('usableScope: a bare slug, an empty string and a one-line label are not scope', () => {
  assert.equal(usableScope(undefined), null);
  assert.equal(usableScope(''), null);
  assert.equal(usableScope('   '), null);
  assert.equal(usableScope('trappe-van-vergelyking'), null);
  assert.equal(usableScope('Topic: Degrees of comparison.'), null);
  assert.equal(usableScope(42), null);
  const real = 'Topic: Plurals. Cover that a meervoud means more than one and that many nouns add -e (hond - honde). Ask for the plural of a noun.';
  assert.equal(usableScope(real), real);
  assert.ok(real.length >= MIN_SCOPE_CHARS);
});

test('every indexed task, and every pool-mode component slug of Grades 6-12, has usable scope text', () => {
  for (const [slug, [code]] of Object.entries(TASK_INDEX)) assert.ok(usableScope(registry[code].tasks[slug]), `${slug} (${code}) has no usable scope`);
  const root = path.join(process.cwd(), 'src/curriculum');
  const walk = (d: string, out: string[] = []): string[] => { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p, out); else if (p.endsWith('.tsx')) out.push(p); } return out; };
  const missing: string[] = [];
  for (let g = 6; g <= 12; g++) {
    for (const f of walk(path.join(root, `grade${g}`))) {
      const c = fs.readFileSync(f, 'utf8');
      const api = c.match(/apiPath="\/api\/caps\/([a-z0-9]+)"/);
      if (!api) continue;
      for (const m of c.matchAll(/task="([^"]+)"/g)) if (!usableScope(registry[api[1]]?.tasks[m[1]])) missing.push(`${g}|${m[1]}`);
    }
  }
  assert.deepEqual(missing, [], 'pool-mode tasks without scope text would be skipped by the cron');
});

const GRADE6_AFRIKAANS = ['meervoude', 'naamwoorde-lidwoorde', 'teenwoordige-tyd', 'woordeskat', 'begripstoets', 'byvoeglike-naamwoorde', 'verlede-tyd', 'vriendskaplike-brief', 'sinonieme-antonieme', 'sinsbou', 'toekomende-tyd', 'trappe-van-vergelyking', 'gemengde-hersiening', 'visuele-tekste', 'voegwoorde', 'voorsetsels'];

test('the 16 Grade 6 Afrikaans tasks have scope that names the topic and demands Afrikaans', () => {
  for (const slug of GRADE6_AFRIKAANS) {
    const s = scopeFor(slug);
    assert.ok(s, `${slug} has no scope`);
    assert.equal(s.code, 'grade6');
    assert.equal(s.grade, 6);
    assert.ok(s.scope.startsWith('Topic: '), slug);
    assert.ok(/in Afrikaans/.test(s.scope), `${slug} must tell the model to write in Afrikaans`);
  }
  // the topics that were generated wrongly are now pinned to their real meaning
  assert.ok(/degrees of comparison/i.test(scopeFor('trappe-van-vergelyking')!.scope) && /groter|beter/.test(scopeFor('trappe-van-vergelyking')!.scope));
  assert.ok(!/trapez/i.test(scopeFor('trappe-van-vergelyking')!.scope));
  assert.ok(/articles/i.test(scopeFor('naamwoorde-lidwoorde')!.scope) && /die/.test(scopeFor('naamwoorde-lidwoorde')!.scope));
  assert.ok(/unchanged/.test(scopeFor('teenwoordige-tyd')!.scope));
});

test('Grade 6 History and Geography scopes carry the lesson facts, and the lesson wins over the older scope', () => {
  const slugs = Object.entries(TASK_INDEX).filter(([, v]) => v[1] === 6 && (v[0] === 'his' || v[0] === 'geo')).map(([s]) => s);
  assert.ok(slugs.length >= 32, 'the 16 History and 16 Geography Grade 6 topics, and the Wave A History additions');
  for (const slug of slugs) {
    const s = scopeFor(slug)!.scope;
    assert.ok(s.includes('Lesson facts to rely on:'), `${slug} has no lesson facts`);
    assert.ok(s.includes('follow the lesson facts'), slug);
  }
});

test('buildTopUpPrompt refuses a task whose scope is missing or too thin, and never uses the bare slug', () => {
  assert.equal(buildTopUpPrompt('no-such-task', 'definitions'), null);
  const tasks = registry.grade6.tasks;
  const original = tasks['meervoude'];
  try {
    tasks['meervoude'] = 'meervoude';
    assert.equal(buildTopUpPrompt('meervoude', 'definitions'), null, 'a bare slug is not scope');
    tasks['meervoude'] = 'Plurals of nouns for Grade 6.';
    assert.equal(buildTopUpPrompt('meervoude', 'definitions'), null, 'a one-line label is not scope');
    delete tasks['meervoude'];
    assert.equal(buildTopUpPrompt('meervoude', 'definitions'), null, 'no entry at all');
  } finally { tasks['meervoude'] = original; }
  const p = buildTopUpPrompt('meervoude', 'definitions');
  assert.ok(p && p.includes('Topic "meervoude": Topic: Meervoude'));
  assert.ok(p.includes(FACT_GUARD), 'the prompt forbids invented numbers, dates and names');
});

async function poolFixture(tasks: string[]) {
  const t = await openPoolDb();
  if (!t) return null;
  t.raw.exec('DELETE FROM pool_tasks');
  for (const task of tasks) t.raw.prepare('INSERT INTO pool_tasks (task, target, enabled, created_at) VALUES (?,?,?,1)').run(task, 200, 1);
  return t;
}

const okItem = (i: number): GeneratedItem => ({ prompt: `Which of these describes sample idea number ${i} in the topic?`, options: [`Description one for ${i}`, `Description two for ${i}`, `Description three for ${i}`, `Description four for ${i}`], answer: `Description one for ${i}`, explanation: `Description one for ${i} matches the idea.` });

test('runTopUp skips and logs a pool without scope: the generator is never called for it', async () => {
  const t = await poolFixture(['made-up-bare-slug', 'meervoude', 'what-is-democracy']);
  if (!t) return;
  const tasks = registry.grade6.tasks;
  const original = tasks['meervoude'];
  const prompts: string[] = [];
  const logs: string[] = [];
  let n = 0;
  try {
    tasks['meervoude'] = 'meervoude'; // indexed, but only the slug
    const s = await runTopUp({ db: t.db, log: (l) => logs.push(l), generate: async (p) => { prompts.push(p); return Array.from({ length: 10 }, () => okItem(++n)); } }, { ...DEFAULT_LIMITS });
    assert.deepEqual(s.skippedNoIndex, ['made-up-bare-slug']);
    assert.deepEqual(s.skippedNoScope, ['meervoude']);
    assert.ok(prompts.length > 0, 'the grounded pool is still worked');
    assert.ok(prompts.every((p) => p.includes('what-is-democracy')), 'every prompt was for the grounded task');
    assert.ok(!prompts.some((p) => p.includes('meervoude') || p.includes('made-up-bare-slug')));
    assert.ok(logs.some((l) => l.includes('SKIPPED meervoude') && l.includes('bare slug')), 'the skip is logged');
    assert.ok(logs.some((l) => l.includes('SKIPPED made-up-bare-slug')));
  } finally { tasks['meervoude'] = original; }
});

// ── 2 + 3. Which batch types a subject gets ──────────────────────────────────────────────────────────────────────────────────

test('calculations batch: only for subjects that calculate (and the Grade 6 maths slugs)', () => {
  for (const code of ['math', 'ml', 'ps', 'acc', 'econ', 'ems', 'ns', 'nst']) assert.ok(calculationsOkFor('x', code), code);
  for (const code of ['his', 'geo', 'eng', 'xho', 'lsk', 'lo', 'ls', 'ca', 'cat', 'it', 'bus', 'tech']) assert.ok(!calculationsOkFor('x', code), code);
  assert.ok(calculationsOkFor('gr6-time-t4', 'grade6'));
  assert.ok(!calculationsOkFor('meervoude', 'grade6'));
  assert.ok(!calculationsOkFor('what-is-democracy', 'his'));
});

test('misconceptions batch: dropped for non-science subjects', () => {
  for (const code of ['math', 'ml', 'ps', 'ls', 'ns', 'nst', 'tech', 'acc', 'econ', 'ems']) assert.ok(misconceptionsOkFor('x', code), code);
  for (const code of ['his', 'geo', 'eng', 'xho', 'lsk', 'lo', 'ca', 'cat', 'it', 'bus']) assert.ok(!misconceptionsOkFor('x', code), code);
  assert.ok(misconceptionsOkFor('gr6-patterns-t2', 'grade6'));
  assert.ok(!misconceptionsOkFor('verlede-tyd', 'grade6'));
});

test('batchesFor selects templates by subject, in a fixed order, and always includes definitions and application', () => {
  assert.deepEqual(batchesFor('gr6-time-t4', 'grade6'), ['definitions', 'calculations', 'application', 'misconceptions']);
  assert.deepEqual(batchesFor('meervoude', 'grade6'), ['definitions', 'application']);
  assert.deepEqual(batchesFor('what-is-democracy', 'his'), ['definitions', 'application']);
  assert.deepEqual(batchesFor('map-scale', 'geo'), ['definitions', 'application']);
  assert.deepEqual(batchesFor('x', 'eng'), ['definitions', 'application']);
  assert.deepEqual(batchesFor('x', 'ps'), ['definitions', 'calculations', 'application', 'misconceptions']);
  assert.deepEqual(batchesFor('x', 'ls'), ['definitions', 'application', 'misconceptions']);
  assert.deepEqual(batchesFor('x', 'nst'), ['definitions', 'calculations', 'application', 'misconceptions']);
  assert.deepEqual(batchesFor('x', 'bus'), ['definitions', 'application']);
});

test('a disallowed batch type produces no prompt', () => {
  assert.equal(buildTopUpPrompt('what-is-democracy', 'calculations'), null);
  assert.equal(buildTopUpPrompt('what-is-democracy', 'misconceptions'), null);
  assert.equal(buildTopUpPrompt('meervoude', 'calculations'), null);
  assert.ok(buildTopUpPrompt('gr6-time-t4', 'calculations')?.includes('CALCULATIONS'));
});

test('runTopUp asks a History pool only for definitions and application, and a Maths pool for all four', async () => {
  const t = await poolFixture(['what-is-democracy', 'gr6-time-t4']);
  if (!t) return;
  const seen: Record<string, Set<string>> = { 'what-is-democracy': new Set(), 'gr6-time-t4': new Set() };
  let n = 0;
  await runTopUp({ db: t.db, generate: async (p) => {
    const task = p.includes('Topic "gr6-time-t4"') ? 'gr6-time-t4' : 'what-is-democracy';
    for (const k of ['DEFINITIONS', 'CALCULATIONS', 'APPLICATION', 'MISCONCEPTIONS']) if (p.includes(`testing ${k}`) || p.includes(`requiring ${k}`) || p.includes(`apply the topic`) && k === 'APPLICATION' || p.includes('the three WRONG options') && k === 'MISCONCEPTIONS') seen[task].add(k);
    return Array.from({ length: 10 }, () => okItem(++n));
  } }, { ...DEFAULT_LIMITS, maxAccepted: 500, maxApiCalls: 200, maxOps: 500 });
  assert.deepEqual([...seen['what-is-democracy']].sort(), ['APPLICATION', 'DEFINITIONS']);
  assert.deepEqual([...seen['gr6-time-t4']].sort(), ['APPLICATION', 'CALCULATIONS', 'DEFINITIONS', 'MISCONCEPTIONS']);
});

// ── 2. The misconceptions template cannot key a true statement as 'the misconception' ────────────────────────────────────────

test('the misconceptions template asks a neutral question whose key is the TRUE answer', () => {
  const w = BATCH_INSTRUCTIONS.misconceptions;
  assert.ok(/WRONG options are the typical learner errors/.test(w));
  assert.ok(/neutral content question/.test(w));
  assert.ok(/correct option must always be the TRUE statement/.test(w));
  assert.ok(/NEVER ask which statement is a misconception, mistake, myth, error, incorrect, false or wrong/.test(w));
  assert.ok(/NEVER ask "which is NOT"/.test(w));
  assert.ok(!/Ask each as a direct question/.test(w), 'the old wording is gone');
  const p = buildTopUpPrompt('gr6-patterns-t2', 'misconceptions');
  assert.ok(p && p.includes(w));
});

test('validator: generated items that ask for the misconception, mistake or false statement are rejected', () => {
  const opts = ['Rights are fixed and apply equally to all', 'Rights can change depending on personal needs', 'The Constitution only protects rich people', 'Rights depend on what local communities say'];
  const bad = { prompt: 'Which misunderstanding is common among young learners about the Bill of Rights?', options: opts, answer: opts[0], explanation: 'Rights are fixed and apply equally to all, so this one is true.' };
  const result = checkQuestion(bad, { rejectFalseStatementStems: true });
  assert.ok(result.reasons.some((r) => r.code === 'false_statement_stem' && r.severity === 'reject'));
  assert.equal(result.ok, false);
  // the same item passes this rule when the flag is off (the curated banks are held by their own baseline)
  assert.ok(!checkQuestion(bad).reasons.some((r) => r.code === 'false_statement_stem'));
  for (const stem of ['What is a common mistake when adding fractions?', 'Which statement is false about the Moon?', 'What is the misconception about plants?', 'Spot the mistake in this sum.', 'A student says rights can change. What is wrong with this?', 'Which of these is an incorrect statement about gravity?', 'Why is this wrong?'])
    assert.ok(FALSE_STATEMENT_STEM_RE.test(stem), stem);
  for (const stem of ['What do rights protect?', 'Which fraction equals one half?', 'How many sides does a hexagon have?', 'What is the correct plural of hond?', 'Which word is a noun?', 'Which statement about the Moon is correct?'])
    assert.ok(!FALSE_STATEMENT_STEM_RE.test(stem), stem);
});

test('runTopUp stores neutral items and rejects false-statement stems from the model', async () => {
  const t = await poolFixture(['gr6-patterns-t2']);
  if (!t) return;
  const tell = (i: number): GeneratedItem => ({ prompt: `Which statement is a misconception about pattern number ${i}?`, options: [`Rule one for ${i}`, `Rule two for ${i}`, `Rule three for ${i}`, `Rule four for ${i}`], answer: `Rule one for ${i}`, explanation: `Rule one for ${i} is the keyed option.` });
  let n = 0;
  const s = await runTopUp({ db: t.db, generate: async (p) => (p.includes('the three WRONG options') ? Array.from({ length: 10 }, () => tell(++n)) : Array.from({ length: 10 }, () => okItem(++n))) }, { ...DEFAULT_LIMITS, maxAccepted: 500, maxApiCalls: 100, maxOps: 500 });
  assert.ok((s.rejectedByReason.false_statement_stem ?? 0) >= 10, 'the polarity stems were rejected');
  const stored = t.raw.prepare("SELECT prompt FROM item_cache WHERE task = 'gr6-patterns-t2'").all() as { prompt: string }[];
  assert.ok(stored.length > 0 && stored.every((r) => !/misconception/i.test(r.prompt)));
});
