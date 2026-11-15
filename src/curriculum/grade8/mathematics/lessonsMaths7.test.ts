import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import { coinOutcomes, euler, prismCounts, probability, quadrant, reflectInY, rotate90cw, translate } from '../../../components/diagrams/maths/grade8SpaceHelpers';

// Grade 8 Maths lessons, batch 7 (term 4): Geometry of 3D Objects, Graphs, Probability and Transformation Geometry.

stubCss();
const solids = renderSlides((await import('./term4/geometry-of-3d-objects/GeometryOf3DObjects')).learnSteps);
const graphs = renderSlides((await import('./term4/graphs/Graphs')).learnSteps);
const prob = renderSlides((await import('./term4/probability/Probability')).learnSteps);
const transf = renderSlides((await import('./term4/transformation-geometry/TransformationGeometry')).learnSteps);

test('batch 7 lessons have the standard shape', () => {
  for (const slides of [solids, graphs, prob, transf]) assertLessonShape(slides);
  assert.equal(solids.length, 6);
  assert.equal(graphs.length, 5);
  assert.equal(prob.length, 7); // five teaching slides, the optional experiment and Check yourself
  assert.match(prob[5].title, /^Try it yourself/);
  assert.match(prob[5].text, /settles near 0,5/);
  assert.equal(transf.length, 5);
});

test('Geometry of 3D Objects: worked numbers', () => {
  assert.equal(euler(8, 12, 6), 2);
  assert.deepEqual(prismCounts(5), { faces: 7, edges: 15, vertices: 10 });
  assert.match(solids[0].text, /6 faces/);
  assert.match(solids[0].text, /5 faces , 8 edges, 5 vertices/);
  assert.match(solids[1].text, /= 5 faces/);
  assert.match(solids[1].text, /3 \+ 3 = 6 vertices/);
  assert.match(solids[1].text, /3 \+ 3 \+ 3 = 9 edges/);
  assert.match(solids[2].text, /2 circular faces and 1 curved surface/);
  assert.match(solids[2].text, /0 edges/);
  assert.match(solids[3].text, /8 − 12 \+ 6 = 2/);
  assert.match(solids[3].text, /6 − 9 \+ 5 = 2/);
  assert.match(solids[5].text, /7 faces \(2 pentagons, 5 rectangles\), 15 edges, 10 vertices/);
  assert.match(solids[5].text, /10 − 15 \+ 7 = 2/);
  assert.match(solids[5].text, /4 faces/);
});

test('Graphs: worked numbers', () => {
  assert.equal(quadrant(-2, 3), 2);
  assert.match(graphs[0].text, /Quadrant II/);
  assert.match(graphs[0].text, /on the y-axis/);
  assert.match(graphs[0].text, /Quadrant IV/);
  assert.match(graphs[1].text, /\(0; 0\), \(1; 2\), \(2; 4\), \(3; 6\)/);
  assert.match(graphs[2].text, /y = 1, 3, 5/);
  assert.match(graphs[2].text, /y = 6, 5, 4/);
  assert.match(graphs[3].text, /for 5 minutes/);
  assert.match(graphs[3].text, /takes 15 minutes/);
  assert.match(graphs[4].text, /\(3; −4\): Quadrant IV\. \(−5; −1\): Quadrant III/);
  assert.match(graphs[4].text, /y = 4, 7, 10/);
});

test('Probability: worked numbers', () => {
  assert.equal(probability(1, 4).d, 4);
  assert.deepEqual(coinOutcomes(2), ['HH', 'HT', 'TH', 'TT']);
  assert.match(prob[1].text, /3 \+ 1 = 4 marbles/);
  assert.match(prob[2].text, /HH, HT, TH, TT: 4 outcomes/);
  assert.match(prob[3].text, /= 0,8 = 80%/);
  assert.match(prob[3].text, /= 0,2 = 20%/);
  assert.match(prob[4].text, /= 0,46 \(46%\)/);
  assert.match(prob[4].text, /about 25 heads/);
  assert.match(prob[6].text, /= 0,4 = 40%/);
  assert.match(prob[6].text, /8: HHH/);
});

test('Transformation Geometry: worked numbers', () => {
  assert.deepEqual(translate([2, -1], 3, 2), [5, 1]);
  assert.deepEqual(reflectInY([4, -3]), [-4, -3]);
  assert.deepEqual(rotate90cw([1, 2]), [2, -1]);
  assert.match(transf[0].text, /The image is \(5; 1\)/);
  assert.match(transf[1].text, /at the same height: \(−4; −3\)/);
  assert.match(transf[1].text, /\(4; −3\) → \(4; 3\)/);
  assert.match(transf[2].text, /Change the sign of the new y: \(2; −1\)/);
  assert.match(transf[2].text, /\(1; 2\) → \(−1; −2\)/);
  assert.match(transf[3].text, /2 × 2 = 4 and 3 × 2 = 6/);
  assert.match(transf[3].text, /4 × 6 = 24/);
  assert.match(transf[4].text, /\(2; 2\)\./);
  assert.match(transf[4].text, /\(−2; −5\)\./);
  assert.match(transf[4].text, /\(1; −3\)\./);
  assert.match(transf[4].text, /9 cm by 3 cm/);
});
