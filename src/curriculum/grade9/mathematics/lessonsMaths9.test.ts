import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import { hypotenuse, isRightTriangle, missingAngle, shorterSide, thirdAngle } from '../../../components/diagrams/maths/grade9GeometryHelpers';

// Grade 9 Maths, branch feat/lessons-maths-9: Term 2 geometry, constructions and Pythagoras; Term 3 functions and graphs.
// The numbers each lesson shows are checked here, not with runtime throws (docs/notes/lesson-standard.md).

stubCss();
const geometry = renderSlides((await import('./term2/geometry-2d-shapes/Geometry2DShapes')).learnSteps);
const constructions = renderSlides((await import('./term2/geometry-constructions/GeometryConstructions')).learnSteps);
const pythagoras = renderSlides((await import('./term2/pythagoras/PythagorasTheorem')).learnSteps);
const functions = renderSlides((await import('./term3/functions-relationships/FunctionsRelationships')).learnSteps);
const graphs = renderSlides((await import('./term3/graphs/Graphs')).learnSteps);

test('the five lessons have the standard shape', () => {
  for (const slides of [geometry, constructions, pythagoras, functions, graphs]) assertLessonShape(slides);
});

test('Geometry of 2D shapes: the worked numbers are true and appear in the slides', () => {
  assert.equal(thirdAngle(45, 65), 70);
  assert.equal(missingAngle(4, [70, 90, 80]).missing, 120);
  assert.match(geometry[0].text, /180° − 50° = 130°/);
  assert.match(geometry[0].text, /50° \+ 130° \+ 50° \+ 130° = 360°/);
  assert.match(geometry[1].text, /180° − 65° = 115°/);
  assert.match(geometry[2].text, /= 70°/);
  assert.match(geometry[2].text, /45° \+ 70° = 115°/);
  assert.match(geometry[2].text, /2 × 50° = 80°/);
  assert.match(geometry[3].text, /360° − 240° = 120°/);
  assert.match(geometry[3].text, /= 540°/);
  assert.match(geometry[4].text, /= 68°/);
  assert.match(geometry[4].text, /= 106°/);
  assert.match(geometry[4].text, /= 52°/);
  assert.match(geometry[4].text, /= 720°; 720° ÷ 6 = 120°/);
});

test('Constructions: the steps and checks appear in the slides', () => {
  assert.match(constructions[0].text, /5 cm/);
  assert.match(constructions[1].text, /4 arcs/);
  assert.match(constructions[2].text, /Mark the point P on the line/);
  assert.match(constructions[3].text, /60° ÷ 2 = 30°/);
  assert.match(constructions[4].text, /4 \+ 5 = 9 > 7/);
  assert.match(constructions[4].text, /2 \+ 3 = 5, which is less than 6/);
  assert.match(constructions[5].text, /No: 3 \+ 4 = 7, which is less than 8/);
  assert.match(constructions[5].text, /90° ÷ 2 = 45°/);
});

test('Pythagoras: the worked numbers are true and appear in the slides', () => {
  assert.equal(hypotenuse(3, 4).c, 5);
  assert.equal(hypotenuse(7, 24).c, 25);
  assert.equal(shorterSide(10, 6).b, 8);
  assert.equal(shorterSide(13, 5).b, 12);
  assert.equal(isRightTriangle(5, 12, 13).right, true);
  assert.match(pythagoras[0].text, /9 \+ 16 = 25/);
  assert.match(pythagoras[1].text, /= 5 cm/);
  assert.match(pythagoras[1].text, /49 \+ 576 = 625/);
  assert.match(pythagoras[1].text, /= 25 cm/);
  assert.match(pythagoras[1].text, /≈ 5,39 cm/);
  assert.match(pythagoras[2].text, /100 − 36 = 64/);
  assert.match(pythagoras[2].text, /= 8 cm/);
  assert.match(pythagoras[2].text, /169 − 25 = 144/);
  assert.match(pythagoras[2].text, /= 12 m/);
  assert.match(pythagoras[3].text, /25 \+ 144 = 169/);
  assert.match(pythagoras[3].text, /9 \+ 16 = 25, but/);
  assert.match(pythagoras[4].text, /√225 = 15 cm/);
  assert.match(pythagoras[4].text, /√225 = 15 m/);
  assert.match(pythagoras[4].text, /49 \+ 64 = 113/);
  assert.match(pythagoras[4].text, /≈ 7,21 cm/);
});

test('Functions and relationships: the worked numbers are true and appear in the slides', () => {
  assert.match(functions[0].text, /8 \+ 1 = 9/);
  assert.match(functions[0].text, /−6 \+ 5 = −1/);
  assert.match(functions[1].text, /y = 2x \+ 1/);
  assert.match(functions[1].text, /c = 1/);
  assert.match(functions[2].text, /5, 10, 15/);
  assert.match(functions[2].text, /6, 3, 0/);
  assert.match(functions[2].text, /y decreases by 3/);
  assert.match(functions[3].text, /60, 120, 180 km/);
  assert.match(functions[3].text, /C = R150/);
  assert.match(functions[3].text, /= R750/);
  assert.match(functions[4].text, /= 11/);
  assert.match(functions[4].text, /y = 3x \+ 4/);
  assert.match(functions[4].text, /= 2, so yes/);
  assert.match(functions[4].text, /= R145/);
});

test('Graphs: the worked numbers are true and appear in the slides', () => {
  assert.match(graphs[1].text, /2 × 2 \+ 1 = 5/);
  assert.match(graphs[1].text, /2 × 3 \+ 1 = 7, not 5/);
  assert.match(graphs[2].text, /x = 2/);
  assert.match(graphs[2].text, /y = −3/);
  assert.match(graphs[2].text, /x = 3/);
  assert.match(graphs[3].text, /4 ÷ 2 = 2/);
  assert.match(graphs[3].text, /gradient is 0/);
  assert.match(graphs[4].text, /4; 1; 0; 1; 4/);
  assert.match(graphs[5].text, /= 10, so yes/);
  assert.match(graphs[5].text, /y-intercept 6; x-intercept 2/);
  assert.match(graphs[5].text, /6 ÷ 2 = 3/);
});
