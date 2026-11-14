import test from 'node:test';
import assert from 'node:assert/strict';
import { PLATE, wedges } from './EcoMixtures';

test('balanced plate: the shares add up to a whole plate and the wedges fill the circle', () => {
  assert.equal(PLATE.reduce((a, p) => a + p.share, 0), 100);
  const ws = wedges(PLATE.map((p) => p.share), 38, 40, 31);
  assert.equal(ws.length, 4);
  assert.equal(ws[0].from, 0);
  assert.equal(Math.round(ws[ws.length - 1].to), 360);
  // each wedge starts where the last one ended
  ws.slice(1).forEach((w, i) => assert.equal(w.from, ws[i].to));
});

test('wedge arcs are rounded so server and browser agree', () => {
  for (const w of wedges([35, 30, 25, 10], 38, 40, 31)) assert.doesNotMatch(w.d, /\d\.\d{4,}/);
});
