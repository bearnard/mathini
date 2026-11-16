import test from 'node:test';
import assert from 'node:assert/strict';
import * as p from './grade6Probability';

test('tally marks and frequency tables', () => {
  assert.deepEqual(p.tallyGroups(13), { fives: 2, rest: 3 });
  assert.deepEqual(p.tallyGroups(5), { fives: 1, rest: 0 });
  assert.equal(p.tallyWords(13), '2 groups of five and 3 more');
  assert.equal(p.tallyWords(5), '1 group of five');
  assert.equal(p.tallyWords(4), '4 strokes');
  assert.equal(p.totalTrials([12, 8]), 20);
  assert.equal(p.totalTrials([7, 9, 5, 8, 11, 10]), 50);
  assert.equal(p.mostOften([7, 9, 5, 8, 11, 10]), 4);
  assert.equal(p.leastOften([7, 9, 5, 8, 11, 10]), 2);
  assert.equal(p.mostOften([5, 5, 3]), -1);
  assert.equal(p.moreThan(12, 8), 4);
  for (const n of [0, 1, 4, 5, 6, 9, 10, 23, 50]) { const g = p.tallyGroups(n); assert.equal(g.fives * 5 + g.rest, n); }
});

test('outcomes of coins, dice and spinners', () => {
  assert.equal(p.COIN.length, 2);
  assert.equal(p.DIE.length, 6);
  assert.deepEqual(p.twoCoinOutcomes(), ['HH', 'HT', 'TH', 'TT']);
  assert.deepEqual(p.spinnerOutcomes(['red', 'blue', 'red', 'green', 'blue', 'red']), ['red', 'blue', 'green']);
  assert.equal(p.sectionsOf(['red', 'blue', 'red', 'green', 'blue', 'red'], 'red'), 3);
});

test('grid references and directions', () => {
  assert.equal(p.cellName(3, 4), 'D4');
  assert.deepEqual(p.parseCell('E7'), { col: 4, row: 7 });
  assert.equal(p.move('B2', 'right', 3), 'E2');
  assert.equal(p.move('E6', 'up', 2), 'E4');
  assert.equal(p.move('E6', 'left', 4), 'A6');
  assert.equal(p.move('A1', 'down', 3), 'A4');
  assert.equal(p.follow('B2', [['right', 3], ['down', 2]]), 'E4');
  assert.deepEqual(p.directions('B2', 'E4'), [['right', 3], ['down', 2]]);
  assert.deepEqual(p.directions('E4', 'B2'), [['left', 3], ['up', 2]]);
  assert.equal(p.dirsText(p.directions('B2', 'E4')), '3 squares right, then 2 squares down');
  assert.equal(p.dirsText([['up', 1]]), '1 square up');
  assert.equal(p.stepsIn([['right', 3], ['down', 2]]), 5);
  assert.equal(p.compass('up'), 'north');
  // following the shortest directions always arrives
  for (const a of ['A1', 'C3', 'F6', 'D2']) for (const b of ['B5', 'E1', 'A6', 'F2']) assert.equal(p.follow(a, p.directions(a, b)), b);
});
