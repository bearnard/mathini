import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LETTER_F, WHEEL, alternate, complementOf, crossHatching, depthLayers, hang, hatching, hexToRgb, hslToHex, lightness, lineSamples, mirrorX,
  mixHex, pickRange, repeatX, shade, stipple, temperature, tint, valueScale, wheelColor,
} from './ca8-visual-helpers';

test('hsl to hex for the pure colours and greys', () => {
  assert.equal(hslToHex(0, 100, 50), '#ff0000');
  assert.equal(hslToHex(120, 100, 50), '#00ff00');
  assert.equal(hslToHex(240, 100, 50), '#0000ff');
  assert.equal(hslToHex(0, 0, 100), '#ffffff');
  assert.equal(hslToHex(0, 0, 0), '#000000');
  assert.deepEqual(hexToRgb('#ff8000'), [255, 128, 0]);
});

test('tints get lighter and shades get darker', () => {
  assert.equal(tint('#ff0000', 0.5), '#ff8080');
  assert.equal(shade('#ff0000', 0.5), '#800000');
  assert.equal(mixHex('#000000', '#ffffff', 0.5), '#808080');
  const red = '#d62828';
  assert.ok(lightness(tint(red, 0.4)) > lightness(red));
  assert.ok(lightness(shade(red, 0.4)) < lightness(red));
});

test('the colour wheel: 12 steps, 3 primaries, 3 secondaries, 6 tertiaries; complements are opposite', () => {
  assert.equal(WHEEL.length, 12);
  assert.equal(WHEEL.filter((w) => w.kind === 'primary').length, 3);
  assert.equal(WHEEL.filter((w) => w.kind === 'secondary').length, 3);
  assert.equal(WHEEL.filter((w) => w.kind === 'tertiary').length, 6);
  assert.deepEqual(WHEEL.filter((w) => w.kind === 'primary').map((w) => w.name), ['red', 'yellow', 'blue']);
  const name = (i: number) => WHEEL[i].name;
  assert.deepEqual([name(complementOf(0)), name(complementOf(2)), name(complementOf(4))], ['green', 'blue', 'violet']);
  assert.ok(WHEEL.every((_, i) => complementOf(complementOf(i)) === i));
  assert.equal(new Set(WHEEL.map((_, i) => wheelColor(i))).size, 12);
});

test('warm and cool: red and orange are warm, blue and green are cool', () => {
  assert.equal(temperature(0), 'warm');
  assert.equal(temperature(2), 'warm');
  assert.equal(temperature(4), 'warm');
  assert.equal(temperature(6), 'cool');
  assert.equal(temperature(8), 'cool');
  assert.equal(temperature(11), 'in between');
});

test('a value scale goes from light to dark in even steps', () => {
  const v = valueScale(7);
  assert.equal(v.length, 7);
  const l = v.map(lightness);
  assert.ok(l.every((x, i) => i === 0 || x < l[i - 1]));
  assert.ok(l[0] > 230 && l[6] < 40);
});

test('line samples: the diagonal rises, the zigzag alternates, the curve crosses the middle', () => {
  const s = lineSamples(100, 40);
  assert.deepEqual(s.horizontal, [[0, 20], [100, 20]]);
  assert.deepEqual(s.vertical, [[50, 0], [50, 40]]);
  assert.deepEqual(s.diagonal, [[0, 40], [100, 0]]);
  assert.deepEqual(s.zigzag.map((p) => p[1]), [40, 0, 40, 0, 40, 0, 40]);
  assert.equal(s.curved.length, 21);
  assert.ok(Math.abs(s.curved[10][1] - 20) < 1e-9);
});

test('hatching stays inside the box and the lines are 45 degrees; cross-hatching doubles them', () => {
  const h = hatching(40, 20, 4);
  assert.ok(h.length > 8);
  for (const [x1, y1, x2, y2] of h) {
    for (const v of [x1, x2]) assert.ok(v >= -1e-9 && v <= 40 + 1e-9);
    for (const v of [y1, y2]) assert.ok(v >= -1e-9 && v <= 20 + 1e-9);
    assert.ok(Math.abs(Math.abs(x2 - x1) - Math.abs(y2 - y1)) < 1e-9);
    assert.ok(x2 > x1 && y2 < y1);
  }
  assert.equal(crossHatching(40, 20, 4).length, 2 * h.length);
});

test('stipple: the right number of dots, in the box, the same every time', () => {
  const a = stipple(40, 20, [3, 6, 12]);
  assert.equal(a.length, 21);
  assert.deepEqual(a, stipple(40, 20, [3, 6, 12]));
  for (const [x, y] of a) assert.ok(x >= 0 && x <= 40 && y >= 0 && y <= 20);
  assert.equal(a.slice(3, 9).every(([, y]) => y >= 20 / 3 && y <= 40 / 3), true);
});

test('depth: each layer further away is smaller and higher up', () => {
  const d = depthLayers(60, 14);
  assert.deepEqual(d.map((l) => l.name), ['foreground', 'middle ground', 'background']);
  assert.deepEqual(d.map((l) => l.scale), [1, 0.62, 0.384]);
  assert.deepEqual(d.map((l) => l.base), [60, 46, 32]);
});

test('pattern: repeats are evenly spaced and an alternating pattern goes A B A B', () => {
  assert.deepEqual(repeatX(4, 10, 6, 5), [5, 21, 37, 53]);
  assert.deepEqual(alternate(5), ['A', 'B', 'A', 'B', 'A']);
});

test('a print is the mirror image of its block (the F is reversed)', () => {
  const m = mirrorX(LETTER_F, 5);
  assert.deepEqual(m[0], [9, 13]);
  assert.deepEqual(m[2], [1, 1]);
  assert.deepEqual(mirrorX(m, 5), LETTER_F);
});

test('exhibition: equal gaps at the ends and between the works', () => {
  const h = hang(4000, [600, 800, 600]);
  assert.equal(h.total, 2000);
  assert.equal(h.gap, 500);
  assert.deepEqual(h.xs, [500, 1600, 2900]);
  assert.equal(h.xs[2] + 600 + h.gap, 4000);
});

test('portfolio: pick from each kind in turn so the choice shows range', () => {
  assert.deepEqual(pickRange({ drawings: 4, prints: 3, collages: 3, paintings: 2 }, 6), { drawings: 2, prints: 2, collages: 1, paintings: 1 });
  assert.deepEqual(pickRange({ drawings: 1, prints: 5 }, 4), { drawings: 1, prints: 3 });
  assert.deepEqual(pickRange({ drawings: 1 }, 4), { drawings: 1 });
});
