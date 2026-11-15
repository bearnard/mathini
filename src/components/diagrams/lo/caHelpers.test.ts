import test from 'node:test';
import assert from 'node:assert/strict';
import { contrastRatio, layerRects, risingBars, tileRow } from './caHelpers';

test('contrastRatio: black on white is 21, same colour is 1, and strong contrast beats weak', () => {
  assert.equal(contrastRatio('#000000', '#ffffff'), 21);
  assert.equal(contrastRatio('#ffffff', '#000000'), 21);
  assert.equal(contrastRatio('#777777', '#777777'), 1);
  assert.ok(contrastRatio('#f8fafc', '#0f172a') > 15);
  assert.ok(contrastRatio('#fde68a', '#fef3c7') < 1.5);
});

test('risingBars scales to the biggest value', () => {
  assert.deepEqual(risingBars([1, 2, 4], 40).map((b) => b.h), [10, 20, 40]);
  assert.equal(risingBars([0, 0])[0].h, 0);
});

test('layerRects stack upwards and each layer is narrower', () => {
  const l = layerRects(4);
  assert.equal(l.length, 4);
  assert.ok(l[1].y < l[0].y && l[3].y < l[2].y);
  assert.ok(l[3].w < l[0].w);
  assert.equal(l[0].y + l[0].h, 70 - 2);
});

test('tileRow: tiles are equal and the last one ends at the right edge', () => {
  const t = tileRow(4);
  assert.equal(t.length, 4);
  assert.ok(Math.abs(t[3].x + t[3].w - 114) < 0.01);
  assert.equal(t[0].w, t[2].w);
});
