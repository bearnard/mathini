import test from 'node:test';
import assert from 'node:assert/strict';
import * as p from './grade6Percent';

test('fractions, tenths, hundredths and decimals as percentages (the CAPS scope)', () => {
  assert.equal(p.fractionToPercent(1, 2), 50);
  assert.equal(p.fractionToPercent(1, 4), 25);
  assert.equal(p.fractionToPercent(3, 4), 75);
  assert.equal(p.fractionToPercent(1, 5), 20);
  assert.equal(p.fractionToPercent(3, 10), 30);
  assert.equal(p.fractionToPercent(7, 100), 7);
  assert.equal(p.fractionToPercent(1, 20), 5);
  assert.equal(p.fractionToPercent(1, 25), 4);
  assert.equal(p.fractionToPercent(1, 50), 2);
  assert.equal(p.fractionToPercent(1, 3), null); // not a factor of 100: CAPS does not ask for it
  assert.equal(p.fractionToPercent(1, 8), null);
  assert.deepEqual(p.hundredths(3, 4), { n: 75, d: 100, k: 25 });
  assert.deepEqual(p.hundredths(3, 10), { n: 30, d: 100, k: 10 });
  assert.equal(p.hundredths(1, 3), null);
  for (const d of p.PERCENT_DENOMINATORS) assert.equal(100 % d, 0);
});

test('percentages of whole numbers (the CAPS example 25% of R300 = R75)', () => {
  assert.equal(p.percentOf(25, 300), 75);
  assert.equal(p.unitFractionOf(25), 4);
  assert.equal(300 / 4, 75);
  assert.equal(p.percentOf(10, 450), 45);
  assert.equal(p.percentOf(50, 80), 40);
  assert.equal(p.percentOf(20, 250), 50);
  assert.equal(p.percentOf(75, 200), 150);
  assert.equal(p.percentOf(5, 360), 18);
  assert.equal(p.percentOf(5, 365), null);
  assert.equal(p.tenPercent(360), 36);
  assert.equal(p.tenPercent(365), null);
  assert.equal(p.partAsPercent(18, 20), 90);
  assert.equal(p.partAsPercent(20, 50), 40);
  assert.equal(p.partAsPercent(7, 8), null);
  assert.equal(p.afterDiscount(450, 10), 405);
  assert.equal(p.afterDiscount(300, 25), 225);
  assert.equal(p.unitFractionOf(30), null);
  // every percentage of every multiple of 100 / its unit fraction agrees with plain arithmetic
  for (const pc of [5, 10, 20, 25, 50, 75]) for (const w of [20, 40, 60, 80, 100, 200, 300, 400, 500]) {
    const v = p.percentOf(pc, w);
    if (v !== null) assert.equal(v, (w * pc) / 100);
  }
});

test('temperatures: tenths of a degree, differences and changes, with the decimal comma', () => {
  assert.equal(p.tempText(0), '0 °C');
  assert.equal(p.tempText(370), '37 °C');
  assert.equal(p.tempText(367), '36,7 °C');
  assert.equal(p.tempText(1000), '100 °C');
  assert.equal(p.tempText(205), '20,5 °C');
  assert.equal(p.tempDifference(240, 110), 130);
  assert.equal(p.tempText(p.tempDifference(372, 367)), '0,5 °C');
  assert.equal(p.afterChange(140, 90), 230);
  assert.equal(p.afterChange(140, -60), 80);
  assert.equal(p.afterChange(40, -60), null);
  assert.equal(p.onLine(230, 10), true);
  assert.equal(p.onLine(235, 10), false);
});

test('thermometer scale: small lines between numbers, and the mercury sits exactly on the drawn line', () => {
  assert.equal(p.smallLinesBetween(10, 2), 4); // 5 equal steps need 4 small lines
  assert.equal(p.smallLinesBetween(10, 5), 1);
  assert.equal(p.smallLinesBetween(20, 10), 1);
  const ticks = p.scaleTicks(0, 40, 2);
  assert.equal(ticks.length, 21);
  const between = ticks.filter((d) => d > 20 && d < 30);
  assert.equal(between.length, p.smallLinesBetween(10, 2));
  assert.deepEqual(between, [22, 24, 26, 28]);
  for (const [min, max, step, numberEvery] of [[0, 40, 2, 10], [0, 30, 5, 10], [0, 100, 10, 20]] as const) {
    const t = p.scaleTicks(min, max, step);
    const labels = t.filter((d) => d % numberEvery === 0);
    for (let i = 1; i < labels.length; i++) assert.equal(t.filter((d) => d > labels[i - 1] && d < labels[i]).length, p.smallLinesBetween(numberEvery, step));
  }
  // the mercury at 26 is drawn at exactly the y of the 26 line, and 3 steps of 2 above the 20 line
  const y = (d: number) => p.scaleY(d, 0, 40, 10, 58);
  assert.equal(y(26), y(ticks[13]));
  assert.ok(Math.abs((y(20) - y(26)) - 3 * (y(22) - y(20)) * -1) < 1e-6);
  assert.ok(y(26) < y(20) && y(30) < y(26));
});
