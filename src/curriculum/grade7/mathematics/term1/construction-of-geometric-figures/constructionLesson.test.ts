import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { arcMeet, triangleType } from '../../../../../components/diagrams/maths/grade7Helpers';

const source = readFileSync(new URL('./ConstructionOfGeometricFigures.tsx', import.meta.url), 'utf8');

test('perpendicular bisector: arcs of exactly half the line only touch, so half or less fails', () => {
  assert.throws(() => arcMeet(0, 8, 3));
  assert.throws(() => arcMeet(0, 8, 4)); // half of the 8 cm line: no pair of crossing points
  const [up, down] = arcMeet(0, 8, 5); // the 5 cm width used in the worked example
  assert.equal(up.x, 4);
  assert.equal(up.y, 3);
  assert.equal(down.y, -3);
});

test('the mistake box names half of AB (4 cm) as the largest failing width', () => {
  assert.match(source, /const bisect = \{ len: 8, half: 8 \/ 2, goodWidth: 5 \}/);
  assert.match(source, /A compass width of \{minWidth\} cm \(half of AB\) or less/);
  assert.doesNotMatch(source, /minWidth - 1/);
});

test('5, 5, 8 is isosceles and 7, 7, 3 is isosceles; the mistake box says so', () => {
  assert.equal(triangleType(5, 5, 8), 'isosceles');
  assert.equal(triangleType(7, 7, 3), 'isosceles');
  assert.match(source, /so it is isosceles\. Equilateral needs all three sides equal\./);
});
