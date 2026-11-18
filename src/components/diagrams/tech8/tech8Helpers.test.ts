import test from 'node:test';
import assert from 'node:assert/strict';
import { LINE_TYPES, lineFor, scaleDown, scaleUp, realFromDrawing, dimensionLabel, isometric, kingPostTruss, rafterLength, forceIn, TRUSS_MEMBERS, isRigid, FAILURES, failureFor, stable, toppleAngle, SPANS } from './tech8Helpers';

test('line types and scale (plain arithmetic)', () => {
  assert.equal(LINE_TYPES.length, 4);
  assert.equal(lineFor('guides'), 'construction line');
  assert.equal(lineFor('hidden behind'), 'hidden detail');
  assert.equal(scaleDown(200, 2), 100);
  assert.equal(scaleDown(1200, 10), 120);
  assert.equal(scaleUp(15, 2), 30);
  assert.equal(realFromDrawing(60, 5), 300);
  assert.equal(realFromDrawing(scaleDown(480, 4), 4), 480);
  assert.equal(dimensionLabel(250), '250 mm');
});

test('isometric points: the x and y axes go at 30 degrees, z is vertical', () => {
  assert.deepEqual(isometric(0, 0, 0), { x: 0, y: 0 });
  assert.deepEqual(isometric(0, 0, 10), { x: 0, y: -10 });
  const px = isometric(10, 0, 0), py = isometric(0, 10, 0);
  assert.equal(px.x, 8.66);
  assert.equal(px.y, 5);
  assert.equal(py.x, -8.66);
  assert.equal(py.y, 5);
  // the top of a cube of edge 10 is directly above the origin vertex of the back corner
  assert.deepEqual(isometric(10, 10, 10), { x: 0, y: 0 });
});

test('truss members and forces', () => {
  assert.equal(forceIn('rafter'), 'compression');
  assert.equal(forceIn('tie beam'), 'tension');
  assert.equal(forceIn('king post'), 'tension');
  assert.equal(forceIn('strut'), 'compression');
  assert.equal(TRUSS_MEMBERS.length, 5);
  const t = kingPostTruss(6000, 2000);
  assert.deepEqual(t.apex, [3000, 2000]);
  assert.equal(rafterLength(6000, 2000), 3605.551);
  assert.ok(Math.abs(Math.hypot(3000, 2000) - rafterLength(6000, 2000)) < 0.001);
  assert.ok(isRigid(3, false) && !isRigid(4, false) && isRigid(4, true));
});

test('structural failure and stability', () => {
  assert.equal(FAILURES.length, 3);
  assert.equal(failureFor('strength'), 'fracture');
  assert.equal(failureFor('stiffness'), 'bending (buckling)');
  assert.equal(failureFor('stability'), 'toppling');
  assert.ok(stable(40, 10));
  assert.ok(!stable(40, 25));
  assert.equal(toppleAngle(40, 20), 45);
  assert.ok(toppleAngle(20, 60) < toppleAngle(40, 60)); // a narrower base topples at a smaller tilt
  assert.equal(SPANS.beam.length, 3);
});
