import test from 'node:test';
import assert from 'node:assert/strict';
import * as c from './cradle';

test('the fossil sites: the facts the lesson and bank rely on', () => {
  const taung = c.SITES.find((s) => s.site === 'Taung');
  assert.equal(taung?.scientist, 'Raymond Dart (1924)');
  assert.equal(c.SITES.filter((s) => s.site === 'Sterkfontein').length, 2);
  assert.equal(c.SITES.find((s) => s.fossil.includes('sediba'))?.scientist, 'Lee Berger (2008)');
  assert.equal(c.SITES.find((s) => s.site === 'Kromdraai')?.fossil, 'Paranthropus robustus');
  assert.equal(c.myaText(2.5), '2,5 million years');
  assert.equal(c.myaText(2), '2 million years');
  assert.equal(c.myaText(3.67), '3,67 million years');
});

test('ages are listed oldest first and Little Foot is the oldest', () => {
  const ages = c.byAge().map((s) => s.mya);
  assert.deepEqual(ages, [...ages].sort((a, b) => (b as number) - (a as number)));
  assert.match(c.byAge()[0].fossil, /Little Foot/);
  assert.ok(c.SITES.every((s) => s.mya === null || (s.mya > 0 && s.mya < 5)), 'every age is in the Australopithecus range');
});

test('brain size grows from Australopithecus to Homo sapiens', () => {
  const sizes = c.BRAIN_CM3.map((b) => b.cm3);
  assert.deepEqual(sizes, [...sizes].sort((a, b) => a - b));
  assert.equal(c.brainRatio(450, 1350), 3);
  assert.equal(c.brainRatio(450, 900), 2);
  assert.equal(c.brainRatio(900, 1350), 1.5);
});
