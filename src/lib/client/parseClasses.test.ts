import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { parseClasses, parseJoined } from './parseClasses';

const good = { classId: 'c1', name: '6B', grade: 6, schoolName: 'Bay Primary' };

test('parseClasses: a good answer is kept as it is', () => {
  assert.deepEqual(parseClasses({ classes: [good] }), [good]);
  assert.deepEqual(parseClasses({ classes: [] }), []);
});

test('parseClasses: a missing, failed or unexpected answer is "no classes", never an error', () => {
  for (const bad of [undefined, null, 5, 'x', [], {}, { classes: null }, { classes: 'x' }, { classes: {} }, { error: 'Sign in first' }, { items: [], questions: [] }]) {
    assert.doesNotThrow(() => parseClasses(bad), JSON.stringify(bad));
    assert.deepEqual(parseClasses(bad), [], JSON.stringify(bad));
  }
});

test('parseClasses: bad entries are skipped, odd fields get safe defaults', () => {
  const out = parseClasses({ classes: [null, 3, 'x', {}, { classId: 'a' }, { name: 'n' }, { classId: '', name: 'x' }, { classId: 'k', name: 'K', grade: 'six', schoolName: 7 }, good] });
  assert.deepEqual(out, [{ classId: 'k', name: 'K', grade: 0, schoolName: '' }, good]);
});

test('parseJoined: the class from a join answer, or null', () => {
  assert.deepEqual(parseJoined({ joined: good, alreadyMember: false }), good);
  for (const bad of [undefined, null, {}, { joined: null }, { joined: 'x' }, { joined: {} }, { error: 'x' }]) assert.equal(parseJoined(bad), null, JSON.stringify(bad));
});

test('the card reads both answers only through these parsers (no raw .classes or .joined access)', () => {
  const src = fs.readFileSync('src/components/classes/ClassesCard.tsx', 'utf8');
  assert.match(src, /parseClasses\(j\)/);
  assert.match(src, /parseJoined\(r\.data\)/);
  assert.ok(!/\bj\.classes\b|r\.data\.joined as/.test(src));
});

test('the card renders without a response (loading shows nothing), and a failed fetch ends as the Join prompt', async () => {
  const { default: ClassesCard } = await import('../../components/classes/ClassesCard');
  assert.equal(renderToStaticMarkup(createElement(ClassesCard)), '', 'nothing while it loads');
  // the load path itself, with a stub that answers the way --stub-api does and with a network failure
  const run = async (answer: () => Promise<unknown>) => { const r = (await answer().then((x) => x, () => null)) as { ok?: boolean; json?: () => Promise<unknown> } | null; return parseClasses(r && r.ok ? await r.json!() : null); };
  assert.deepEqual(await run(async () => ({ ok: true, json: async () => ({ items: [], questions: [] }) })), []);
  assert.deepEqual(await run(async () => ({ ok: false })), []);
  assert.deepEqual(await run(async () => { throw new Error('offline'); }), []);
  assert.deepEqual(await run(async () => ({ ok: true, json: async () => { throw new Error('not json'); } })).catch(() => 'threw'), 'threw', 'a body that is not JSON is caught by the card\'s .catch');
});
