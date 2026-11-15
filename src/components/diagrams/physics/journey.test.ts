import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { journey } from './journey';

test('3 m east then 4 m north: distance 7 m, displacement 5 m at 53 degrees north of east', () => {
  const j = journey([{ dx: 3, dy: 0 }, { dx: 0, dy: 4 }]);
  assert.equal(j.distance, 7);
  assert.equal(j.displacement, 5);
  assert.equal(Math.round(j.angleDeg), 53);
  assert.ok(Math.abs(j.angleDeg - 53.13010235415598) < 1e-9);
  assert.deepEqual(j.points, [{ x: 0, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 4 }]);
});

test('displacement is never longer than distance, and equal only for a straight line', () => {
  assert.ok(journey([{ dx: 3, dy: 4 }, { dx: -3, dy: 0 }]).displacement < journey([{ dx: 3, dy: 4 }, { dx: -3, dy: 0 }]).distance);
  const straight = journey([{ dx: 3, dy: 4 }, { dx: 6, dy: 8 }]);
  assert.equal(straight.distance, 15);
  assert.equal(straight.displacement, 15);
  assert.equal(journey([{ dx: 5, dy: 0 }, { dx: -5, dy: 0 }]).displacement, 0, 'back at the start: displacement 0, distance 10');
  assert.throws(() => journey([]));
});

test('the lesson shows the journey next to the scalar and vector lists', () => {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade11/physical-sciences/term1/vectors/VectorsAndForces.tsx'), 'utf8');
  assert.ok(lesson.includes('DistanceDisplacement') && lesson.includes('Displacement, velocity') && lesson.includes('distance'));
});
