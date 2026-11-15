import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import { cube, cylinder, mean, rectPrism } from '../../../components/diagrams/maths/grade9SpaceDataHelpers';

// Grade 9 Maths, branch feat/lessons-maths-10: Term 3 surface area and volume; Term 4 3D objects, data, probability, transformations.
// The numbers each lesson shows are checked here, not with runtime throws (docs/notes/lesson-standard.md).

stubCss();
const volume = renderSlides((await import('./term3/surface-volume-3d/SurfaceVolumeT3')).learnSteps);
const solids = renderSlides((await import('./term4/3d-objects/Geometry3DObjects')).learnSteps);
const data = renderSlides((await import('./term4/data-handling/DataHandling')).learnSteps);
const prob = renderSlides((await import('./term4/probability/Probability')).learnSteps);
const trans = renderSlides((await import('./term4/transformations/TransformationGeometry')).learnSteps);

test('the five lessons have the standard shape', () => {
  for (const slides of [volume, solids, data, prob, trans]) assertLessonShape(slides);
});

test('Surface area and volume: the worked numbers are true and appear in the slides', () => {
  assert.equal(rectPrism(5, 3, 4).volume, 60);
  assert.equal(cube(3).surface, 54);
  assert.equal(cylinder(2, 10).volume, 125.6);
  assert.match(volume[0].text, /15 × 4 = 60 cm/);
  assert.match(volume[0].text, /2 × 3 × 5 = 30 cm/);
  assert.match(volume[0].text, /= 8 cm/);
  assert.match(volume[1].text, /6 × 9 = 54 cm/);
  assert.match(volume[1].text, /6 × 16 = 96 cm/);
  assert.match(volume[2].text, /15 \+ 20 \+ 12 = 47/);
  assert.match(volume[2].text, /2 × 47 = 94 cm/);
  assert.match(volume[3].text, /= 12,56 cm/);
  assert.match(volume[3].text, /= 125,6 cm/);
  assert.match(volume[3].text, /25,12 \+ 125,6 = 150,72 cm/);
  assert.match(volume[4].text, /V = 36 cm/);
  assert.match(volume[4].text, /= 72 cm/);
  assert.match(volume[4].text, /6 × 25 = 150 cm/);
  assert.match(volume[4].text, /= 141,3 cm/);
});

test('3D objects: the counts appear in the slides', () => {
  assert.match(solids[0].text, /4 upright = 12/);
  assert.match(solids[0].text, /4 at the bottom = 8/);
  assert.match(solids[1].text, /3 rectangles = 5 faces/);
  assert.match(solids[1].text, /3 \+ 3 \+ 3 = 9 edges/);
  assert.match(solids[1].text, /4 triangles = 5 faces/);
  assert.match(solids[2].text, /6 \+ 8 = 14; E \+ 2 = 12 \+ 2 = 14/);
  assert.match(solids[2].text, /5 \+ 6 − 2 = 9/);
  assert.match(solids[3].text, /a cone/);
  assert.match(solids[3].text, /2 flat faces 1 curved surface 0 vertices/);
  assert.match(solids[3].text, /0 flat faces 1 curved surface 0 vertices/);
  assert.doesNotMatch(solids[3].text, /3 faces|1 face\b/);
  assert.match(solids[5].text, /8 faces, 18 edges, 12 vertices/);
  assert.match(solids[5].text, /6 faces: 1 pentagon/);
});

test('Data handling: the worked numbers are true and appear in the slides', () => {
  assert.equal(mean([1, 2, 3, 4, 100]), 22);
  assert.match(data[0].text, /Median = 7/);
  assert.match(data[0].text, /\(8 \+ 12\) ÷ 2 = 10/);
  assert.match(data[0].text, /Mode = 5/);
  assert.match(data[1].text, /40 ÷ 4 = 10/);
  assert.match(data[1].text, /110 ÷ 5 = 22/);
  assert.match(data[2].text, /20 − 3 = 17/);
  assert.match(data[3].text, /5 \+ 3 \+ 2 = 10/);
  assert.match(data[3].text, /17 ÷ 10 = 1,7/);
  assert.match(data[4].text, /= 180°/);
  assert.match(data[4].text, /180 \+ 108 \+ 72 = 360°/);
  assert.match(data[5].text, /30 ÷ 5 = 6/);
  assert.match(data[5].text, /mode = 9; range = 9 − 2 = 7/);
});

test('Probability: the worked numbers are true and appear in the slides', () => {
  assert.match(prob[0].text, /P = 1\/6/);
  assert.match(prob[0].text, /3 ÷ 5 = 3\/5/);
  assert.match(prob[0].text, /13\/52 = 1\/4/);
  assert.match(prob[1].text, /1 − 0,3 = 0,7/);
  assert.match(prob[1].text, /1 − 3\/5 = 2\/5/);
  assert.match(prob[2].text, /HH, HT, TH, TT/);
  assert.match(prob[2].text, /P\(HH\) = 1\/4/);
  assert.match(prob[2].text, /2\/4 = 1\/2/);
  assert.match(prob[3].text, /3\/6 \+ 1\/6 = 4\/6 = 2\/3/);
  assert.match(prob[3].text, /23\/50 = 0,46/);
  assert.match(prob[4].title, /^Try it yourself/);
  assert.match(prob[4].text, /about 0,17/);
  assert.match(prob[5].text, /4\/10 = 2\/5/);
  assert.match(prob[5].text, /1 − 0,85 = 0,15/);
  assert.match(prob[5].text, /12 outcomes; P\(H6\) = 1\/12/);
  assert.match(prob[5].text, /4\/52 = 1\/13/);
});

test('Transformations: the image points appear in the slides', () => {
  assert.match(trans[0].text, /A'\(5, 5\)/);
  assert.match(trans[1].text, /B'\(−3, 4\)/);
  assert.match(trans[1].text, /\(3, −4\)/);
  assert.match(trans[1].text, /stays at \(2, 2\)/);
  assert.match(trans[2].text, /\(0, 1\)/);
  assert.match(trans[2].text, /\(−2, −1\)/);
  assert.match(trans[3].text, /\(6, 2\)/);
  assert.match(trans[3].text, /\(2, 3\)/);
  assert.match(trans[4].text, /\(4, 1\)/);
  assert.match(trans[4].text, /\(5, 2\); \(−2, 5\)/);
  assert.match(trans[4].text, /\(−2, 3\)/);
  assert.match(trans[4].text, /\(2, −1\)/);
});
