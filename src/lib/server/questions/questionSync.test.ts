import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeQkey } from '../../shared/qkey';
import { registerQuestionSql } from './sql';
import { createVersion, resolveCanonicalId } from './store';
import { openQuestionsDb } from './testQuestionsDb';
import type { TestD1 } from '../testD1';
import { CHUNK_MAX, COST, EDIT_COST, buildChunks, planSync, type EditItem, type NewItem, type Options } from '../../../../scripts/question-sync';
import { buildProdMap, classify, type Classified, type CodeQuestion, type ProdQuestion, type ProdVersion } from '../../../../scripts/question-drift';

const TASK = 'ancient-medicine';
const NO: Options = { resetReviews: false, keepSource: false };
const code = (prompt: string, p: Partial<CodeQuestion> = {}): CodeQuestion => ({ task: TASK, id: makeQkey(TASK, prompt), grade: 7, prompt, options: ['yes', 'no', 'maybe'], answer: 'yes', explanation: 'fixed text', extra: '{}', ...p });
const seed = (t: TestD1, prompt: string, source: 'curated' | 'ai' = 'curated', over: Partial<{ answer: string; options: string[] }> = {}) =>
  t.raw.exec(registerQuestionSql({ task: TASK, section: 'general', kind: 'mcq', source, prompt, options: over.options ?? ['yes', 'no', 'maybe'], answer: over.answer ?? 'yes', explanation: 'old text', extra: {}, author: source === 'ai' ? 'ai' : 'seed' }).join('\n'));
const cur = (t: TestD1, prompt: string) => (t.raw.prepare('SELECT current_version_id AS v FROM questions WHERE id = ?').get(makeQkey(TASK, prompt)) as { v: number }).v;
const edit = (t: TestD1, oldPrompt: string, over: Partial<EditItem> & { newCode?: CodeQuestion } = {}): EditItem => ({
  kind: 'edit', grade: 7, task: TASK, questionId: makeQkey(TASK, oldPrompt), fromVersionId: cur(t, oldPrompt), source: 'curated',
  code: over.newCode ?? code(oldPrompt), fields: ['explanation'], meaning: false, reworded: false, ...over,
});
const run = (t: TestD1, sql: string) => t.raw.exec(sql);
const count = (t: TestD1, table: string, where = '1=1') => (t.raw.prepare(`SELECT COUNT(*) AS n FROM ${table} WHERE ${where}`).get() as { n: number }).n;

test('an edit adds a sync version, moves the pointer, keeps the id and writes one audit row', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Q one?');
  const it = edit(t, 'Q one?');
  const [chunk] = buildChunks([it], NO);
  run(t, chunk.sql);
  const id = makeQkey(TASK, 'Q one?');
  const q = t.raw.prepare('SELECT id, current_version_id AS v, source FROM questions WHERE id = ?').get(id) as { id: string; v: number; source: string };
  assert.equal(q.id, id);
  assert.notEqual(q.v, it.fromVersionId);
  const v = t.raw.prepare('SELECT version_no, author, status, explanation, source_note FROM question_versions WHERE id = ?').get(q.v) as Record<string, unknown>;
  assert.deepEqual({ ...v }, { version_no: 2, author: 'seed', status: 'approved', explanation: 'fixed text', source_note: `sync from v${it.fromVersionId}` });
  const a = t.raw.prepare('SELECT from_version_id, to_version_id, change_kind, admin_email, reviews_reset FROM question_edits').all() as Record<string, unknown>[];
  assert.deepEqual(a.map((x) => ({ ...x })), [{ from_version_id: it.fromVersionId, to_version_id: q.v, change_kind: 'sync', admin_email: 'sync', reviews_reset: 0 }]);
  assert.equal(q.source, 'curated');
});

test('applying a chunk twice changes nothing the second time (versions, audit rows and ledger rows stay at one)', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Q one?'); seed(t, 'Q two?');
  const chunks = buildChunks([edit(t, 'Q one?'), edit(t, 'Q two?'), { kind: 'new', grade: 7, code: code('Brand new?') } as NewItem], NO);
  run(t, chunks[0].sql);
  const snap = () => [count(t, 'questions'), count(t, 'question_versions'), count(t, 'question_edits'), count(t, 'migration_ledger')];
  const first = snap();
  run(t, chunks[0].sql);
  assert.deepEqual(snap(), first);
  assert.deepEqual(first, [3, 5, 2, 1]);
  const l = t.raw.prepare('SELECT step, rows_written FROM migration_ledger').get() as { step: string; rows_written: number };
  assert.deepEqual({ ...l }, { step: 'sync-g07-001', rows_written: chunks[0].estimatedRows });
});

test('a HUMAN edit made after the export wins: the sync skips that question', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Q one?');
  const it = edit(t, 'Q one?');
  const [chunk] = buildChunks([it], NO);
  const r = await createVersion(t.db, { questionId: it.questionId, expectedVersionId: it.fromVersionId, fields: { prompt: 'Q one?', options: ['yes', 'no'], answer: 'no', explanation: 'owner wording' }, author: 'owner', now: 5 });
  assert.equal(r.ok, true);
  run(t, chunk.sql);
  assert.equal(count(t, 'question_versions'), 2, 'no third version');
  assert.equal(count(t, 'question_edits'), 0);
  const v = t.raw.prepare('SELECT v.explanation FROM questions q JOIN question_versions v ON v.id = q.current_version_id WHERE q.id = ?').get(it.questionId) as { explanation: string };
  assert.equal(v.explanation, 'owner wording');
});

test('a retired question is not touched', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Q one?');
  const it = edit(t, 'Q one?');
  t.raw.prepare("UPDATE questions SET status = 'retired' WHERE id = ?").run(it.questionId);
  run(t, buildChunks([it], NO)[0].sql);
  assert.equal(count(t, 'question_versions'), 1);
});

test('a reworded prompt keeps the OLD id and its new wording resolves to it (alias); a clash with another question is refused', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Old wording?'); seed(t, 'Taken wording?');
  const newCode = code('New wording?');
  const it = edit(t, 'Old wording?', { newCode, fields: 'prompt', reworded: true });
  run(t, buildChunks([it], NO)[0].sql);
  assert.equal(await resolveCanonicalId(t.db, makeQkey(TASK, 'New wording?')), makeQkey(TASK, 'Old wording?'));
  assert.equal(count(t, 'questions'), 2, 'no new question');
  // a reword onto a prompt that already belongs to another question
  const clash = edit(t, 'Taken wording?', { newCode: code('Old wording?'), fields: 'prompt', reworded: true });
  const before = count(t, 'question_versions');
  run(t, buildChunks([clash], NO)[0].sql);
  assert.equal(count(t, 'question_versions'), before, 'refused');
});

test('an edited AI-pool question becomes curated (it now holds the bank wording); --keep-source leaves it', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Pool copy?', 'ai'); seed(t, 'Pool copy two?', 'ai');
  run(t, buildChunks([edit(t, 'Pool copy?', { source: 'ai' })], NO)[0].sql);
  run(t, buildChunks([edit(t, 'Pool copy two?', { source: 'ai' })], { ...NO, keepSource: true })[0].sql);
  const src = (p: string) => (t.raw.prepare('SELECT source FROM questions WHERE id = ?').get(makeQkey(TASK, p)) as { source: string }).source;
  assert.equal(src('Pool copy?'), 'curated');
  assert.equal(src('Pool copy two?'), 'ai');
});

function review(t: TestD1, qkey: string, student: string, box: number, retired: number | null = null) {
  t.raw.exec(`INSERT OR IGNORE INTO students (id, login_code, pin_hash, pin_salt, display_name, real_name, grade, created_at, last_seen_at) VALUES ('${student}', '${student}-code', 'h', 's', '${student}', 'n', 6, 1, 1)`);
  t.raw.prepare('INSERT INTO review_items (student_id, qkey, task, subject, box, due_day, streak_correct, retired_at, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?,?,?)').run(student, qkey, TASK, 'his', box, 1, 2, retired, 1, 1);
}

test('Grade 6: a meaning edit is HELD without --reset-reviews; with it, active review rows go back to box 1 and the audit row counts them', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Review me?'); seed(t, 'Other?');
  const id = makeQkey(TASK, 'Review me?');
  review(t, id, 's1', 3); review(t, id, 's2', 2); review(t, id, 's3', 3, 99); review(t, makeQkey(TASK, 'Other?'), 's1', 3);
  const c: Classified = { identical: [], editedSamePrompt: [{ code: code('Review me?', { grade: 6, answer: 'no' }), fields: ['answer'], source: 'curated' }], conflict: [], reworded: [], ambiguous: [], newInCode: [], goneFromCode: [] };
  const prod = new Map([[id, { q: { id, status: 'active', current_version_id: cur(t, 'Review me?'), source: 'curated' }, cur: { author: 'seed' } }]]);
  const held = planSync([{ grade: 6, c }], prod, NO);
  assert.equal(held.items.length, 0);
  assert.equal(held.held.length, 1);
  const plan = planSync([{ grade: 6, c }], prod, { ...NO, resetReviews: true });
  assert.equal(plan.items.length, 1);
  const [chunk] = buildChunks(plan.items, { ...NO, resetReviews: true });
  run(t, chunk.sql);
  const boxes = t.raw.prepare('SELECT student_id, qkey, box, streak_correct, retired_at FROM review_items ORDER BY student_id, qkey').all() as { student_id: string; qkey: string; box: number; streak_correct: number; retired_at: number | null }[];
  const get = (s: string, q: string) => boxes.find((b) => b.student_id === s && b.qkey === q)!;
  assert.deepEqual([get('s1', id).box, get('s1', id).streak_correct, get('s2', id).box], [1, 0, 1]);
  assert.equal(get('s3', id).box, 3, 'a retired review row is left alone');
  assert.equal(get('s1', makeQkey(TASK, 'Other?')).box, 3, 'other questions are untouched');
  assert.equal((t.raw.prepare('SELECT reviews_reset AS n FROM question_edits').get() as { n: number }).n, 2);
  // second apply: nothing more is reset or recorded
  review(t, id, 's4', 3);
  run(t, chunk.sql);
  assert.equal(get('s1', id).box, 1);
  assert.equal((t.raw.prepare("SELECT box FROM review_items WHERE student_id = 's4'").get() as { box: number }).box, 3, 'a second run does not reset again');
});

test('Grade 6 wording-only edits apply by default and never touch review boxes', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Wording only?');
  const id = makeQkey(TASK, 'Wording only?');
  review(t, id, 's1', 3);
  const c: Classified = { identical: [], editedSamePrompt: [{ code: code('Wording only?', { grade: 6 }), fields: ['explanation'], source: 'curated' }], conflict: [], reworded: [], ambiguous: [], newInCode: [], goneFromCode: [] };
  const prod = new Map([[id, { q: { id, status: 'active', current_version_id: cur(t, 'Wording only?'), source: 'curated' }, cur: { author: 'seed' } }]]);
  const plan = planSync([{ grade: 6, c }], prod, NO);
  assert.equal(plan.items.length, 1);
  run(t, buildChunks(plan.items, NO)[0].sql);
  assert.equal((t.raw.prepare('SELECT box FROM review_items').get() as { box: number }).box, 3);
});

test('planSync skips conflicts, retired questions and unmatched ambiguous rewords, and applies a rename-map entry', () => {
  const a = code('New A?'), b = code('New B?');
  const c: Classified = {
    identical: [], editedSamePrompt: [], reworded: [],
    conflict: [{ code: code('Conflict?'), fields: ['answer'] }],
    ambiguous: [{ code: a, candidates: [{ id: 'o1', prompt: 'x', score: 1 }, { id: 'o2', prompt: 'y', score: 1 }] }, { code: b, candidates: [{ id: 'o3', prompt: 'x', score: 1 }, { id: 'o4', prompt: 'y', score: 1 }] }],
    newInCode: [], goneFromCode: [],
  };
  const row = (id: string, status = 'active') => [id, { q: { id, status, current_version_id: 1, source: 'ai' }, cur: { author: 'ai' } }] as const;
  const prod = new Map([row('o1'), row('o2'), row('o3', 'retired'), row('o4')]);
  const plan = planSync([{ grade: 7, c }], prod, NO, { o1: 'New A?', o3: 'New B?' });
  assert.deepEqual(plan.items.map((i) => (i.kind === 'edit' ? i.questionId : '')), ['o1']);
  assert.deepEqual(plan.skipped.map((s) => s.why.split(':')[0]).sort(), ['human-authored version differs from the code', 'retired in production']);
});

test('chunks: one grade each, at most 1,000 questions, each with its own ledger row; new questions are registered', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const items: NewItem[] = Array.from({ length: CHUNK_MAX * 2 + 5 }, (_, i) => ({ kind: 'new', grade: 8, code: code(`Generated question number ${i}?`, { grade: 8 }) }));
  const six: NewItem = { kind: 'new', grade: 6, code: code('Grade six new?', { grade: 6 }) };
  const chunks = buildChunks([...items, six], NO);
  assert.deepEqual(chunks.map((c) => [c.name, c.questions]), [['sync-g06-001', 1], ['sync-g08-001', CHUNK_MAX], ['sync-g08-002', CHUNK_MAX], ['sync-g08-003', 5]]);
  for (const c of chunks) assert.match(c.sql, new RegExp(`migration_ledger[^\\n]*'${c.name}'`));
  run(t, chunks[0].sql);
  run(t, chunks[3].sql);
  assert.equal(count(t, 'questions', "source = 'curated'"), 6);
  assert.equal(count(t, 'migration_ledger'), 2);
});

test('the row estimate matches the schema: an edit writes 3 table rows + 3 index entries, a new question 3 + 4', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const idx = (table: string) => (t.raw.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'index' AND tbl_name = ?").get(table) as { n: number }).n;
  const total = () => (t.raw.prepare('SELECT total_changes() AS n').get() as { n: number }).n;
  seed(t, 'Q one?');
  const it = edit(t, 'Q one?');
  const before = total();
  run(t, buildChunks([it], NO)[0].sql.split('\n').filter((l) => !l.includes('migration_ledger')).join('\n'));
  assert.equal(total() - before, 3, 'version row, pointer update, audit row');
  assert.equal(EDIT_COST, 3 + idx('question_versions') + idx('question_edits') + 0, 'plus the index entries of the version and audit tables (the pointer update touches no index)');
  const b2 = total();
  run(t, buildChunks([{ kind: 'new', grade: 7, code: code('Fresh?') }], NO)[0].sql.split('\n').filter((l) => !l.includes('migration_ledger')).join('\n'));
  assert.equal(total() - b2, 3, 'question row, version row, pointer update');
  assert.equal(COST.newQuestion, 3 + (idx('questions') - 1) + idx('question_versions'), 'questions: pk + task/status index (the legacy partial index stays empty for a curated question), versions: 2 indexes');
});

// Read the local database like a fresh wrangler export, then classify the code against it again.
const reclassify = (t: TestD1, codeQs: CodeQuestion[]) => {
  const prodQ = t.raw.prepare('SELECT * FROM questions').all() as unknown as ProdQuestion[];
  const prodV = t.raw.prepare('SELECT * FROM question_versions').all() as unknown as ProdVersion[];
  const { prod } = buildProdMap(prodQ, prodV);
  return { c: classify(codeQs, prod, new Set([TASK])), prod };
};

test('after a sync, a fresh export classifies the SAME code as identical (a reworded question is found through its alias), so a second sync makes nothing', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Old wording?'); seed(t, 'Edited one?'); seed(t, 'Untouched?');
  const reworded = code('New wording?');
  const edited = code('Edited one?');
  const untouched = code('Untouched?', { explanation: 'old text' });
  const items = [edit(t, 'Old wording?', { newCode: reworded, fields: 'prompt', reworded: true }), edit(t, 'Edited one?', { newCode: edited })];
  run(t, buildChunks(items, NO)[0].sql);
  const { c, prod } = reclassify(t, [reworded, edited, untouched]);
  assert.equal(c.identical.length, 3);
  assert.equal(c.editedSamePrompt.length + c.reworded.length + c.newInCode.length + c.ambiguous.length + c.goneFromCode.length, 0);
  const plan = planSync([{ grade: 7, c }], prod, NO);
  assert.equal(plan.items.length, 0);
  // and the alias still resolves to the canonical id when a later edit happens
  assert.equal(prod.get(makeQkey(TASK, 'New wording?'))!.q.id, makeQkey(TASK, 'Old wording?'));
});

test('a later code change to an already-reworded question becomes an edit on the ORIGINAL id (never a new question)', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  seed(t, 'Old wording?');
  run(t, buildChunks([edit(t, 'Old wording?', { newCode: code('New wording?'), fields: 'prompt', reworded: true })], NO)[0].sql);
  const changed = code('New wording?', { explanation: 'changed again' });
  const { c, prod } = reclassify(t, [changed]);
  assert.equal(c.editedSamePrompt.length, 1);
  const plan = planSync([{ grade: 7, c }], prod, NO);
  assert.equal(plan.items.length, 1);
  assert.equal(plan.items[0].kind === 'edit' && plan.items[0].questionId, makeQkey(TASK, 'Old wording?'));
  run(t, buildChunks(plan.items, NO)[0].sql);
  assert.equal(count(t, 'questions'), 1);
  assert.equal(count(t, 'question_versions'), 3);
});
