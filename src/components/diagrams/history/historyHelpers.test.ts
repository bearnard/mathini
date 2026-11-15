import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CAPE_EVENTS, WW1_EVENTS, inOrder, positions, yearsBetween } from './historyHelpers';

const here = path.dirname(fileURLToPath(import.meta.url));
const read = (p: string) => fs.readFileSync(path.join(here, '../../../curriculum', p), 'utf8');

test('both lists are in date order', () => {
  assert.ok(inOrder(CAPE_EVENTS));
  assert.ok(inOrder(WW1_EVENTS));
});

test('the Cape sequence in the bank: British control strengthens, slavery abolished in 1834, then the Great Trek', () => {
  const y = (label: string) => CAPE_EVENTS.find((e) => e.label.includes(label))!.year;
  assert.ok(y('Britain') < y('Slavery'));
  assert.equal(y('Slavery'), 1834);
  assert.ok(y('Slavery') < y('Great Trek'));
});

test('World War I ran from 1914 to 1918: the armistice is in 1918 and the war began in 1914', () => {
  assert.equal(Math.floor(WW1_EVENTS[0].year), 1914);
  assert.equal(Math.floor(WW1_EVENTS.find((e) => e.label === 'Armistice')!.year), 1918);
  assert.equal(Math.floor(WW1_EVENTS.find((e) => e.label === 'Treaty of Versailles')!.year), 1919);
  assert.equal(yearsBetween(WW1_EVENTS[0], WW1_EVENTS.find((e) => e.label === 'Armistice')!), 4);
});

test('positions are proportional to time, start at x0 and end at x1', () => {
  const p = positions(CAPE_EVENTS, 10, 150);
  assert.equal(p[0], 10);
  assert.equal(p[p.length - 1], 150);
  const gap1819to1820 = p[3] - p[2];
  const gap1820to1834 = p[4] - p[3];
  assert.ok(gap1820to1834 > 10 * gap1819to1820, 'a 14-year gap is drawn much wider than a 1-year gap');
});

test('the dates match the topics\' own timelines (they are in the lesson files\' bank-side Timeline events, which the old slides also showed)', () => {
  const cape = read('grade7/history/term4/conflict-and-cooperation-on-the-cape-frontiers/ConflictAndCooperationOnTheCapeFrontiers.tsx');
  const wwi = read('grade8/history/term4/world-war-i/WorldWarI.tsx');
  assert.ok(cape.includes('1834'));
  assert.ok(wwi.includes('1914') && wwi.includes('1918') && wwi.includes('1917'));
});
