import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { specsFromSlugs } from './seedSlugs';

const PURGE = ['reading-viewing-t3', 'listening-speaking-t3', 'creative-arts-t2', 'what-is-democracy', 'constitution-bill-rights', 'fair-trade', 'nutrients', 'ecosystems'];

test('the 8 Grade 6 purge pools all resolve, including the History/Geography/NST shells the component scan cannot see', () => {
  const specs = specsFromSlugs(PURGE.join(','), 6);
  assert.equal(specs.length, 8);
  assert.deepEqual(Object.fromEntries(specs.map((s) => [s.slug, s.code])), {
    'creative-arts-t2': 'grade6', ecosystems: 'nst', 'fair-trade': 'geo', 'constitution-bill-rights': 'his', 'listening-speaking-t3': 'grade6', nutrients: 'nst', 'reading-viewing-t3': 'grade6', 'what-is-democracy': 'his',
  });
});

test('refuses unknown slugs, slugs of another grade, and an empty list (never a silent partial run)', () => {
  assert.throws(() => specsFromSlugs('what-is-democracy,no-such-task', 6), /no-such-task: not in the task index/);
  const g7 = 'gr7-whole-numbers-t1';
  assert.throws(() => specsFromSlugs(`${g7}`, 6), /Grade 7 task/);
  assert.throws(() => specsFromSlugs('', 6), /needs a comma-separated list/);
  assert.equal(specsFromSlugs('what-is-democracy, what-is-democracy ,nutrients', 6).length, 2, 'duplicates and spaces are tolerated');
});

test('it never expands to the whole index: an empty-on-purpose pool is only seeded when it is named', () => {
  const specs = specsFromSlugs('nutrients', 6);
  assert.deepEqual(specs.map((s) => s.slug), ['nutrients']);
});

test('the seed script uses --slugs, forces those pools even if "done", and still gates inserts with the validator', () => {
  const src = fs.readFileSync('scripts/seed-questions.ts', 'utf8');
  assert.match(src, /--slugs/);
  assert.match(src, /specsFromSlugs\(forcedSlugs, GRADE\)/);
  assert.match(src, /forcedSlugs \? specs : specs\.filter/);
  assert.match(src, /acceptItems/);
});
