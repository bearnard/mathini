import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LADDERS, changeOf, convert, countOn, formatRand, prismMeasures, rectMeasures, elapsedMinutes, formatDuration, formatNumber, fromMinutes, handAngles, stats, stepFactors, to24, toMinutes, workedExample,
} from './mathsHelpers';

test('handAngles: 3:00 has the minute hand on 12 and the hour hand on 3', () => {
  assert.deepEqual(handAngles(3, 0), { hour: 90, minute: 0 });
});
test('handAngles: 12:15, 6:30 and 9:45', () => {
  assert.deepEqual(handAngles(12, 15), { hour: 7.5, minute: 90 }); // hour hand just past 12, minute hand on 3
  assert.deepEqual(handAngles(6, 30), { hour: 195, minute: 180 }); // hour hand halfway between 6 and 7
  assert.deepEqual(handAngles(9, 45), { hour: 292.5, minute: 270 });
});

test('toMinutes / fromMinutes', () => {
  assert.equal(toMinutes('13:15'), 795);
  assert.equal(toMinutes('9:05'), 545);
  assert.equal(toMinutes('00:00'), 0);
  assert.equal(toMinutes('24:00'), 0);
  assert.equal(fromMinutes(795), '13:15');
  assert.equal(fromMinutes(1440 + 5), '00:05');
  assert.throws(() => toMinutes('25:00'));
  assert.throws(() => toMinutes('9.15'));
});

test('elapsedMinutes: the lesson and bank examples', () => {
  assert.equal(elapsedMinutes('13:15', '14:45'), 90);
  assert.equal(elapsedMinutes('09:45', '11:20'), 95); // train: 1 h 35 min
  assert.equal(elapsedMinutes('14:30', '16:15'), 105); // film: 1 h 45 min
  assert.equal(elapsedMinutes('23:30', '00:45'), 75); // past midnight
  assert.equal(elapsedMinutes('08:00', '08:00'), 0);
});

test('countOn: hours first, then minutes', () => {
  assert.deepEqual(countOn('13:15', '14:45'), [
    { from: '13:15', to: '14:15', label: '+1 h' },
    { from: '14:15', to: '14:45', label: '+30 min' },
  ]);
  assert.deepEqual(countOn('09:45', '11:20'), [
    { from: '09:45', to: '10:45', label: '+1 h' },
    { from: '10:45', to: '11:20', label: '+35 min' },
  ]);
  assert.deepEqual(countOn('10:00', '12:00'), [{ from: '10:00', to: '12:00', label: '+2 h' }]);
  assert.deepEqual(countOn('10:00', '10:40'), [{ from: '10:00', to: '10:40', label: '+40 min' }]);
  assert.deepEqual(countOn('23:30', '00:45'), [
    { from: '23:30', to: '00:30', label: '+1 h' },
    { from: '00:30', to: '00:45', label: '+15 min' },
  ]);
});

test('formatDuration', () => {
  assert.equal(formatDuration(90), '1 h 30 min');
  assert.equal(formatDuration(45), '45 min');
  assert.equal(formatDuration(120), '2 h');
});

test('to24: add 12 for pm after noon', () => {
  assert.equal(to24(2, true), 14);
  assert.equal(to24(3, true), 15);
  assert.equal(to24(9, true), 21);
  assert.equal(to24(12, true), 12);
  assert.equal(to24(12, false), 0);
  assert.equal(to24(9, false), 9);
});

test('stats: the first lesson slide (4, 6, 6, 9, 10)', () => {
  const s = stats([4, 6, 6, 9, 10]);
  assert.equal(s.mean, 7);
  assert.deepEqual(s.modes, [6]);
  assert.equal(s.median, 6);
});
test('stats: the second lesson slide (3, 5, 8, 8, 16)', () => {
  const s = stats([16, 3, 8, 5, 8]); // unsorted on purpose
  assert.equal(s.median, 8);
  assert.equal(s.range, 13);
  assert.deepEqual(s.sorted, [3, 5, 8, 8, 16]);
});
test('stats: the dot strip set 1, 2, 2, 3, 5, 6, 9 has four different answers', () => {
  const s = stats([1, 2, 2, 3, 5, 6, 9]);
  assert.equal(s.mean, 4);
  assert.equal(s.median, 3);
  assert.deepEqual(s.modes, [2]);
  assert.equal(s.range, 8);
  assert.equal(s.min, 1);
  assert.equal(s.max, 9);
  assert.equal(new Set([s.mean, s.median, s.modes[0], s.range]).size, 4);
});
test('stats: even count averages the middle two; ties give several modes; no repeat gives no mode', () => {
  assert.equal(stats([2, 4, 6, 8]).median, 5);
  assert.deepEqual(stats([1, 1, 2, 2, 3]).modes, [1, 2]);
  assert.deepEqual(stats([1, 2, 3]).modes, []);
  assert.equal(stats([5]).range, 0);
  assert.throws(() => stats([]));
});

test('ladder step factors', () => {
  assert.deepEqual(stepFactors('length'), [1000, 100, 10]);
  assert.deepEqual(stepFactors('mass'), [1000, 1000, 1000]);
  assert.deepEqual(stepFactors('capacity'), [1000, 1000]);
});

test('convert: every neighbouring pair both ways, and the lesson facts', () => {
  assert.equal(convert('length', 1, 'cm', 'mm'), 10);
  assert.equal(convert('length', 1, 'm', 'cm'), 100);
  assert.equal(convert('length', 1, 'km', 'm'), 1000);
  assert.equal(convert('mass', 1, 'kg', 'g'), 1000);
  assert.equal(convert('mass', 1, 't', 'kg'), 1000);
  assert.equal(convert('mass', 1, 'g', 'mg'), 1000);
  assert.equal(convert('capacity', 1, 'l', 'ml'), 1000);
  assert.equal(convert('capacity', 1, 'kl', 'l'), 1000);
  for (const kind of ['length', 'mass', 'capacity'] as const) {
    const r = LADDERS[kind];
    for (let i = 0; i < r.length - 1; i++) {
      assert.equal(convert(kind, 7, r[i].unit, r[i + 1].unit), 7 * stepFactors(kind)[i]);
      assert.equal(convert(kind, 7 * stepFactors(kind)[i], r[i + 1].unit, r[i].unit), 7);
    }
  }
  assert.equal(convert('length', 3500, 'm', 'km'), 3.5);
  assert.equal(convert('mass', 750, 'g', 'kg'), 0.75);
  assert.equal(convert('mass', 2, 'kg', 'g') + 750, 2750); // the slide's 2 kg + 750 g
  assert.equal(convert('length', 2, 'km', 'cm'), 200000); // two steps
  assert.equal(convert('capacity', 1500, 'ml', 'l'), 1.5);
  assert.throws(() => convert('mass', 1, 'ml', 'g'));
});

test('formatNumber: space for thousands, comma for decimals', () => {
  assert.equal(formatNumber(2000), '2 000');
  assert.equal(formatNumber(1000000), '1 000 000');
  assert.equal(formatNumber(999), '999');
  assert.equal(formatNumber(3.5), '3,5');
  assert.equal(formatNumber(0.75), '0,75');
  assert.equal(formatNumber(1500.25), '1 500,25');
  assert.equal(formatNumber(0.1 + 0.2), '0,3'); // no floating-point noise
});

test('workedExample reads as the lessons do', () => {
  assert.equal(workedExample('mass', 2, 'kg', 'g'), '2 kg = 2 000 g');
  assert.equal(workedExample('length', 3500, 'm', 'km'), '3 500 m = 3,5 km');
  assert.equal(workedExample('capacity', 4, 'l', 'ml'), '4 l = 4 000 ml');
});

test('rectMeasures: the lesson shapes and the 6 by 4 picture', () => {
  assert.deepEqual(rectMeasures(6, 4), { perimeter: 20, area: 24 });
  assert.deepEqual(rectMeasures(6, 6), { perimeter: 24, area: 36 }); // the square on the lesson
  assert.deepEqual(rectMeasures(8, 5), { perimeter: 26, area: 40 }); // the rectangle on the lesson (perimeter 26)
  assert.deepEqual(rectMeasures(1, 1), { perimeter: 4, area: 1 });
});

test('prismMeasures: the lesson example 4 x 3 x 2 is 24 cm3 and 12 cubes per layer', () => {
  assert.deepEqual(prismMeasures(4, 3, 2), { volume: 24, perLayer: 12 });
  assert.deepEqual(prismMeasures(4, 3, 1), { volume: 12, perLayer: 12 }); // the "12 cubic units" model
  assert.deepEqual(prismMeasures(1, 1, 1), { volume: 1, perLayer: 1 });
});

test('formatRand: decimal comma, cents always two digits, thousands grouped', () => {
  assert.equal(formatRand(1850), 'R18,50');
  assert.equal(formatRand(1200), 'R12,00');
  assert.equal(formatRand(5000), 'R50,00');
  assert.equal(formatRand(5), 'R0,05');
  assert.equal(formatRand(123456), 'R1\u00A0234,56');
  assert.equal(formatRand(-150), '-R1,50');
});

test('changeOf: the lesson shopping example in cents', () => {
  const r = changeOf(5000, [1850, 1200]);
  assert.equal(r.spent, 3050);
  assert.equal(r.change, 1950);
  assert.equal(formatRand(r.spent), 'R30,50');
  assert.equal(formatRand(r.change), 'R19,50');
  assert.equal(r.spent + r.change, 5000); // the check step: R30,50 + R19,50 = R50,00
});
