import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import { collectTerms, evaluate, expand, factorOut } from '../../../components/diagrams/maths/grade8AlgebraHelpers';
import {
  classifyBySides, crossingAngles, cubeSurface, cubeVolume, exteriorAngle, fourthAngle, makesTriangle, parallelAngles, prismSurface, prismVolume,
  rectArea, rectPerimeter, supplement, thirdAngle, triangleArea,
} from '../../../components/diagrams/maths/grade8GeometryHelpers';

// Grade 8 Maths lessons, batch 5: Algebraic Expressions, Construction of Geometric Figures, Geometry of 2D Shapes
// (term 2) and Area, Perimeter, Surface Area and Volume (term 3). Shape and worked numbers.

stubCss();
const algebra = renderSlides((await import('./term2/algebraic-expressions/AlgebraicExpressions')).learnSteps);
const construct = renderSlides((await import('./term2/construction-of-geometric-figures/ConstructionOfGeometricFigures')).learnSteps);
const geometry = renderSlides((await import('./term2/geometry-of-2d-shapes-and-straight-lines/GeometryOf2DShapesAndStraightLines')).learnSteps);
const measure = renderSlides((await import('./term3/area-perimeter-surface-area-and-volume/AreaPerimeterSurfaceAreaAndVolume')).learnSteps);

test('batch 5 lessons have the standard shape', () => {
  for (const slides of [algebra, construct, geometry, measure]) assertLessonShape(slides);
  assert.equal(algebra.length, 6);
  assert.equal(construct.length, 6);
  assert.equal(geometry.length, 5);
  assert.equal(measure.length, 6);
});

test('Algebraic Expressions: worked numbers', () => {
  assert.deepEqual(collectTerms([{ n: 7, letter: 'a' }, { n: -3, letter: 'a' }]), [{ n: 4, letter: 'a' }]);
  assert.deepEqual(expand(4, [{ n: 2, letter: 'k' }, { n: 1 }]), [{ n: 8, letter: 'k' }, { n: 4 }]);
  assert.equal(evaluate([{ n: 3, letter: 'p' }, { n: 2 }], 4), 14);
  assert.equal(4 * (2 * 2 + 1) - 3 * 2, evaluate([{ n: 5, letter: 'k' }, { n: 4 }], 2));
  assert.match(algebra[0].text, /7a − 3a = 4a/);
  assert.match(algebra[1].text, /= 5m \+ 4/);
  assert.match(algebra[2].text, /= 5x − 10/);
  assert.match(algebra[2].text, /the answer is 5k \+ 4/);
  assert.match(algebra[3].text, /The HCF is 6/);
  assert.match(algebra[3].text, /6x \+ 12 = 6\(x \+ 2\)/);
  assert.match(algebra[4].text, /2n − 7/);
  assert.match(algebra[4].text, /3 × 4 \+ 2 = 12 \+ 2 = 14/);
  assert.match(algebra[4].text, /= 14 and 5k \+ 4 = 14/);
  assert.deepEqual(factorOut(5, 20), { k: 5, p: 1, q: 4 });
  assert.match(algebra[5].text, /7y − 2\./);
  assert.match(algebra[5].text, /−3a \+ 12/);
  assert.match(algebra[5].text, /5\(x \+ 4\)/);
  assert.match(algebra[5].text, /4 × 3 − 9 = 3/);
});

test('Construction of Geometric Figures: worked numbers', () => {
  assert.equal(supplement(50), 130);
  assert.equal(classifyBySides(5, 5, 8), 'isosceles');
  assert.equal(makesTriangle(2, 3, 8), false);
  assert.equal(thirdAngle(90, 35), 55);
  assert.match(construct[0].text, /x = 180° − 50° = 130°/);
  assert.match(construct[2].text, /AM = MB = 4 cm/);
  assert.match(construct[3].text, /triangle is isosceles/);
  assert.match(construct[3].text, /2 \+ 3 = 5 is less than 8/);
  assert.match(construct[4].text, /180° ÷ 3 = 60°/);
  assert.match(construct[4].text, /= 55°/);
  assert.match(construct[5].text, /= 65°/);
  assert.match(construct[5].text, /Isosceles/);
  assert.match(construct[5].text, /No: 3 \+ 4 = 7/);
  assert.match(construct[5].text, /= 65°\./);
});

test('Geometry of 2D Shapes: worked numbers', () => {
  assert.deepEqual(crossingAngles(40), [40, 140, 40, 140]);
  assert.equal(parallelAngles(65).coInterior, 115);
  assert.equal(exteriorAngle(50, 60), 110);
  assert.equal(fourthAngle(90, 90, 110), 70);
  assert.match(geometry[0].text, /180° − 40° = 140°/);
  assert.match(geometry[0].text, /= 360°/);
  assert.match(geometry[1].text, /180° − 65° = 115°/);
  assert.match(geometry[2].text, /180° − 50° − 60° = 70°/);
  assert.match(geometry[2].text, /50° \+ 60° = 110°/);
  assert.match(geometry[3].text, /= 70°/);
  assert.match(geometry[3].text, /8 sides, octagon/);
  assert.match(geometry[4].text, /108°, 72° and 108°/);
  assert.match(geometry[4].text, /Alternate: 128°\. Co-interior: 180° − 128° = 52°/);
  assert.match(geometry[4].text, /35° \+ 75° = 110°/);
  assert.match(geometry[4].text, /= 80°/);
});

test('Area, Perimeter, Surface Area and Volume: worked numbers', () => {
  assert.equal(rectPerimeter(5, 2), 14);
  assert.equal(rectArea(8, 3), 24);
  assert.equal(triangleArea(10, 4), 20);
  assert.equal(prismVolume(4, 3, 2), 24);
  assert.equal(cubeVolume(3), 27);
  assert.equal(cubeSurface(2), 24);
  assert.equal(prismSurface(4, 3, 2).total, 52);
  assert.match(measure[0].text, /= 2 × 7 = 14 m/);
  assert.match(measure[1].text, /8 × 3 = 24 cm²/);
  assert.match(measure[2].text, /½ × 10 × 4 = 20 cm²/);
  assert.match(measure[3].text, /= 24 cm³/);
  assert.match(measure[3].text, /3 × 3 × 3 = 27 cm³/);
  assert.match(measure[4].text, /6 × 4 = 24 cm²/);
  assert.match(measure[4].text, /= 52 cm²/);
  assert.match(measure[5].text, /= 22 m; A = 7 × 4 = 28 m²/);
  assert.match(measure[5].text, /= 30 cm²/);
  assert.match(measure[5].text, /= 30 cm³/);
  assert.match(measure[5].text, /= 150 cm²/);
});
