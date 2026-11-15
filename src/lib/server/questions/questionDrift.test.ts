import { test } from 'node:test';
import assert from 'node:assert/strict';
import { classify, jaccard, changedFields, staleRows, type CodeQuestion, type ProdQuestion, type Content } from '../../../../scripts/question-drift';

const content = (p: Partial<Content> = {}): Content => ({ prompt: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4', explanation: 'Add.', extra: '{}', ...p });
const code = (id: string, p: Partial<CodeQuestion> = {}): CodeQuestion => ({ task: 't1', id, grade: 7, ...content(), ...p });
const prodRow = (id: string, source: string, author: string, c: Partial<Content> = {}, task = 't1') => ({
  q: { id, task, source, status: 'active', current_version_id: 1 } as ProdQuestion,
  cur: { ...content(c), author },
});
const prod = (...rows: ReturnType<typeof prodRow>[]) => new Map(rows.map((r) => [r.q.id, r]));
const T = new Set(['t1']);

test('identical content is class 1, whatever the source', () => {
  const r = classify([code('a'), code('b')], prod(prodRow('a', 'curated', 'seed'), prodRow('b', 'ai', 'ai')), T);
  assert.equal(r.identical.length, 2);
  assert.equal(r.editedSamePrompt.length + r.reworded.length + r.newInCode.length + r.conflict.length, 0);
});

test('same prompt, different key or options: an edit of a seed-written or AI version; the fields are named', () => {
  const r = classify([code('a', { answer: '5' }), code('b', { options: ['1', '4', '2', '3'] }), code('c', { explanation: 'New.' })], prod(prodRow('a', 'curated', 'seed'), prodRow('b', 'ai', 'ai'), prodRow('c', 'curated', 'seed')), T);
  assert.deepEqual(r.editedSamePrompt.map((e) => [e.code.id, e.source, e.fields.join('+')]), [['a', 'curated', 'answer'], ['b', 'ai', 'options'], ['c', 'curated', 'explanation']]);
});

test('a HUMAN-authored current version is never overwritten: a different code text is a conflict', () => {
  const r = classify([code('a', { answer: '5' })], prod(prodRow('a', 'curated', 'owner')), T);
  assert.equal(r.conflict.length, 1);
  assert.equal(r.editedSamePrompt.length, 0);
});

test('a reworded prompt is matched by the same answer and options, or by a unique 0.8 similarity', () => {
  const exact = classify([code('new', { prompt: 'Calculate the sum of 2 and 2.' })], prod(prodRow('old', 'ai', 'ai', { prompt: 'Something quite different about arithmetic?' })), T);
  assert.equal(exact.reworded.length, 1);
  assert.equal(exact.reworded[0].oldId, 'old');
  assert.equal(exact.reworded[0].how, 'answer+options');
  const sim = classify([code('new', { prompt: 'The capital city of France is which one?', options: ['a', 'b'], answer: 'a' })], prod(prodRow('old', 'curated', 'seed', { prompt: 'The capital city of France is which?', options: ['x', 'y'], answer: 'x' })), T);
  assert.equal(sim.reworded.length, 1);
  assert.equal(sim.reworded[0].how, 'similarity');
});

test('two candidates with the same answer and options are ambiguous, not guessed', () => {
  const r = classify([code('new', { prompt: 'Brand new wording here' })], prod(prodRow('o1', 'ai', 'ai', { prompt: 'First old one' }), prodRow('o2', 'ai', 'ai', { prompt: 'Second old one' })), T);
  assert.equal(r.ambiguous.length, 1);
  assert.equal(r.reworded.length + r.newInCode.length, 0);
});

test('nothing similar: new in code; an unmatched CURATED question is gone, an unmatched AI row is just the pool', () => {
  const r = classify([code('new', { prompt: 'Totally unrelated question text', options: ['p', 'q'], answer: 'p' })], prod(prodRow('c1', 'curated', 'seed', { prompt: 'Curated one that left', options: ['m', 'n'], answer: 'm' }), prodRow('ai1', 'ai', 'ai', { prompt: 'Pool only question', options: ['s', 't'], answer: 's' })), T);
  assert.equal(r.newInCode.length, 1);
  assert.deepEqual(r.goneFromCode.map((g) => g.id), ['c1']);
});

test('tasks the code does not cover are left alone', () => {
  const r = classify([code('a')], prod(prodRow('a', 'curated', 'seed'), prodRow('z', 'curated', 'seed', { prompt: 'other' }, 'other-task')), T);
  assert.equal(r.goneFromCode.length, 0);
});

test('similarity ignores punctuation, so a decimal point turned into a decimal comma is the same prompt', () => {
  assert.equal(jaccard('Calculate 3.6 + 2.45.', 'Calculate 3,6 + 2,45.'), 1);
  assert.ok(jaccard('Which ocean is on the east coast?', 'Name three kinds of rock.') < 0.3);
});

test('changedFields compares options in order and ignores nothing else', () => {
  assert.deepEqual(changedFields(content(), content()), []);
  assert.deepEqual(changedFields(content(), content({ options: ['4', '3', '5', '6'] })), ['options']);
  assert.deepEqual(changedFields(content(), content({ extra: '{"diagram":true}' })), ['extra']);
});

test('staleRows lists the item_cache ids (legacy_item_id) of edited and reworded questions, and skips questions with no pool row', () => {
  const withLegacy = (id: string, legacy: number | null, source: string, c: Partial<Content> = {}) => {
    const r = prodRow(id, source, source === 'ai' ? 'ai' : 'seed', c);
    r.q.legacy_item_id = legacy;
    return r;
  };
  const p = prod(
    withLegacy('edited', 101, 'ai'),
    withLegacy('same', 102, 'ai'),
    withLegacy('nolink', null, 'curated'),
    withLegacy('old', 103, 'ai', { prompt: 'Something quite different about arithmetic?' }),
  );
  const c = classify([code('edited', { answer: '5' }), code('same'), code('nolink', { answer: '6' }), code('newid', { prompt: 'Calculate the sum of 2 and 2.' })], p, T);
  const rows = staleRows([{ grade: 7, c }], p);
  assert.deepEqual(rows.map((r) => [r.itemId, r.kind]).sort(), [[101, 'edited'], [103, 'reworded-exact']]);
  assert.ok(rows.every((r) => typeof r.codeUsable === 'boolean'));
});
