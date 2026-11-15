import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import { arcMeet, missingAngle, primeFactors, primeVenn, regularExterior, regularInterior, triangleType } from '../../../components/diagrams/maths/grade7Helpers';
import { rectMeasures } from '../../../components/diagrams/maths/mathsHelpers';

// Branch 1 of the Grade 7 Maths lesson rewrite: the numbers shown in each lesson (docs/notes/lesson-standard.md).

stubCss();
const construction = renderSlides((await import('./term1/construction-of-geometric-figures/ConstructionOfGeometricFigures')).learnSteps);
const geometry = renderSlides((await import('./term1/geometry-of-2d-shapes-and-straight-lines/GeometryOf2DShapesAndStraightLines')).learnSteps);
const whole = renderSlides((await import('./term1/whole-numbers/WholeNumbers')).learnSteps);
const area = renderSlides((await import('./term2/area-and-perimeter-of-2d-shapes/AreaAndPerimeterOf2DShapes')).learnSteps);
const decimals = renderSlides((await import('./term2/decimal-fractions/DecimalFractions')).learnSteps);

test('every lesson in the branch has the standard shape', () => {
  for (const s of [construction, geometry, whole, area, decimals]) assertLessonShape(s);
});

test('Construction: compass widths, the bisector and the triangle facts are true', () => {
  assert.doesNotThrow(() => arcMeet(0, 8, 5)); // 5 cm is wider than half of 8 cm
  assert.throws(() => arcMeet(0, 8, 4)); // half the line or less never meets
  assert.throws(() => arcMeet(0, 8, 3));
  assert.equal(triangleType(5, 5, 8), 'isosceles');
  assert.equal(missingAngle([60, 70], 180), 50);
  assert.equal(missingAngle([40, 75], 180), 65);
  assert.match(construction[0].text, /crosses the scale at 50°/);
  assert.match(construction[3].text, /180° − 130° = 50°/);
  assert.match(construction[5].text, /180° − 115° = 65°/);
  assert.match(construction[2].text, /Half of AB is 4 cm/);
});

test('Geometry of 2D shapes: angle facts and polygon angles are true', () => {
  assert.equal(180 - 65, 115);
  assert.equal(180 - 50, 130);
  assert.equal(180 - 70, 110);
  assert.equal(missingAngle([90, 80, 100], 360), 90);
  assert.equal(regularInterior(5), 108);
  assert.equal(regularExterior(5), 72);
  assert.equal(regularInterior(8), 135);
  assert.equal(regularInterior(6), 120);
  assert.equal(regularExterior(6), 60);
  assert.match(geometry[0].text, /180° − 65° = 115°/);
  assert.match(geometry[3].text, /360° − 270° = 90°/);
  assert.match(geometry[4].text, /540° ÷ 5 = 108°/);
  assert.match(geometry[4].text, /8 octagon/);
  assert.match(geometry[5].text, /\(6 − 2\) × 180° ÷ 6 = 120° interior, and 60° exterior/);
});

test('Whole numbers: factors, HCF/LCM, divisibility, ratio and rate are true', () => {
  assert.deepEqual(primeFactors(84), [2, 2, 3, 7]);
  assert.equal(primeVenn(18, 24).hcf, 6);
  assert.equal(primeVenn(6, 8).lcm, 24);
  assert.equal(primeVenn(30, 45).hcf, 15);
  assert.equal(primeVenn(12, 18).hcf, 6);
  assert.equal(primeVenn(12, 18).lcm, 36);
  assert.match(whole[0].text, /9 742/);
  assert.match(whole[1].text, /4 \+ 5 \+ 7 \+ 2 = 18/);
  assert.match(whole[2].text, /84 = 2 × 2 × 3 × 7/);
  assert.match(whole[3].text, /LCM = 2 × 3 × 2 × 2 = 24/);
  assert.match(whole[4].text, /3 : 5/);
  assert.match(whole[4].text, /180 ÷ 3 = 60 km\/h/);
  assert.match(whole[5].text, /HCF = 6 .* LCM = 36/);
  assert.match(whole[5].text, /150 ÷ 2 = 75 km\/h/);
});

test('Area and perimeter: the worked numbers are true', () => {
  assert.deepEqual(rectMeasures(8, 5), { perimeter: 26, area: 40 });
  assert.deepEqual(rectMeasures(7, 7), { perimeter: 28, area: 49 });
  assert.deepEqual(rectMeasures(10, 3), { perimeter: 26, area: 30 });
  assert.deepEqual(rectMeasures(12, 3), { perimeter: 30, area: 36 });
  assert.deepEqual(rectMeasures(9, 4), { perimeter: 26, area: 36 });
  assert.deepEqual(rectMeasures(6, 6), { perimeter: 24, area: 36 });
  assert.match(area[0].text, /2 × 13 = 26 cm/);
  assert.match(area[1].text, /8 × 5 = 40 cm²/);
  assert.match(area[2].text, /4 × 7 = 28 cm/);
  assert.match(area[2].text, /7 × 7 = 49 cm²/);
  assert.match(area[3].text, /24 \+ 12 = 36 cm²/);
  assert.match(area[3].text, /perimeter of 26 cm/);
  assert.match(area[4].text, /30 cm/);
  assert.match(area[4].text, /grew by 4 cm/);
  assert.match(area[5].text, /20 \+ 8 = 28 cm²/);
});

test('Decimal fractions: the worked numbers use the decimal comma and are true', () => {
  assert.match(decimals[0].text, /7,43/);
  assert.match(decimals[0].text, /4 tenths = 0,4/);
  assert.match(decimals[0].text, /3 hundredths = 0,03/);
  assert.match(decimals[1].text, /0,8 > 0,75/);
  assert.match(decimals[2].text, /3,60 \+ 2,45 = 6,05/);
  assert.match(decimals[2].text, /9,20 − 3,78 = 5,42/);
  assert.match(decimals[2].text, /R12,50 \+ R7,75 = R20,25/);
  assert.match(decimals[3].text, /0,20 = 0,2/);
  assert.match(decimals[3].text, /63 ÷ 9 = 7/);
  assert.match(decimals[4].text, /4,678 to the nearest tenth/);
  assert.match(decimals[4].text, /round up: 4,7/);
  assert.match(decimals[5].text, /7,05/);
  assert.match(decimals[5].text, /0,24/);
  assert.match(decimals[5].text, /6,2/);
  for (const s of decimals) assert.ok(!/\d\.\d/.test(s.text.replace(/\d\.\s/g, '')), `${s.title}: no decimal points in the text`);
});
