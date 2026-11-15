import test from 'node:test';
import assert from 'node:assert/strict';
import {
  angleAt, circleIntersections, classifyBySides, crossingAngles, cubeSurface, cubeVolume, exteriorAngle, fourthAngle, isoscelesHeight,
  makesTriangle, parallelAngles, polar, polygonName, prismSurface, prismVolume, rectArea, rectPerimeter, supplement, thirdAngle, triangleArea,
} from './grade8GeometryHelpers';

const near = (a: number, b: number) => assert.ok(Math.abs(a - b) < 1e-9, `${a} ≈ ${b}`);

test('angle facts', () => {
  assert.equal(supplement(50), 130);
  assert.equal(thirdAngle(50, 60), 70);
  assert.equal(thirdAngle(90, 35), 55);
  assert.equal(exteriorAngle(50, 60), 110);
  assert.equal(exteriorAngle(50, 60), supplement(thirdAngle(50, 60)));
  assert.equal(fourthAngle(90, 90, 110), 70);
  assert.deepEqual(crossingAngles(40), [40, 140, 40, 140]);
  assert.deepEqual(parallelAngles(65), { corresponding: 65, alternate: 65, coInterior: 115 });
  assert.equal(polygonName(8), 'octagon');
  assert.equal(polygonName(5), 'pentagon');
  assert.equal(polygonName(6), 'hexagon');
});

test('triangles: classify, the triangle inequality, constructions', () => {
  assert.equal(classifyBySides(5, 5, 8), 'isosceles');
  assert.equal(classifyBySides(6, 6, 6), 'equilateral');
  assert.equal(classifyBySides(3, 4, 5), 'scalene');
  assert.equal(makesTriangle(5, 5, 8), true);
  assert.equal(makesTriangle(2, 3, 8), false);
  assert.equal(makesTriangle(3, 4, 9), false);
  assert.equal(isoscelesHeight(5, 8), 3);
  // arcs of 5 from both ends of AB = 8 meet 3 above and below the midpoint
  const [top, bottom] = circleIntersections({ x: 0, y: 0 }, 5, { x: 8, y: 0 }, 5);
  near(top.x, 4); near(top.y, -3); near(bottom.y, 3);
  assert.deepEqual(circleIntersections({ x: 0, y: 0 }, 3, { x: 8, y: 0 }, 3), []);
  // the equilateral construction really gives 60° angles
  const [c] = circleIntersections({ x: 0, y: 0 }, 6, { x: 6, y: 0 }, 6);
  near(angleAt({ x: 0, y: 0 }, { x: 6, y: 0 }, c), 60);
  near(angleAt(c, { x: 0, y: 0 }, { x: 6, y: 0 }), 60);
  const p = polar({ x: 0, y: 0 }, 2, 90);
  near(p.x, 0); near(p.y, -2);
});

test('measurement', () => {
  assert.equal(rectPerimeter(5, 2), 14);
  assert.equal(rectArea(8, 3), 24);
  assert.equal(triangleArea(10, 4), 20);
  assert.equal(prismVolume(4, 3, 2), 24);
  assert.equal(cubeVolume(3), 27);
  assert.equal(cubeSurface(2), 24);
  assert.deepEqual(prismSurface(4, 3, 2), { faces: [12, 8, 6], total: 52 });
});
