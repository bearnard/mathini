import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';

// Grade 12 Geography skills, branch C (GIS; atlases and thematic maps): standard shape, labelled pictures, every numeric bank key recomputed with plain
// arithmetic (not the mapwork helpers), and the lesson text covers the terms the bank uses.
stubCss();
const gMod = await import('./term2/gis/GisT2');
const aMod = await import('./term3/atlases-thematic-maps/AtlasesThematicMapsT3');
const lessons = { gis: renderSlides(gMod.learnSteps), atlas: renderSlides(aMod.learnSteps) };
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text.replace(/ /g, ' ')).join(' | ');
const key = (bank: { prompt: string; answer: string }[], start: string): string => {
  const hit = bank.filter((b) => b.prompt.startsWith(start));
  assert.equal(hit.length, 1, `exactly one question starts with: ${start}`);
  return hit[0].answer.replace(/ /g, ' ');
};
const fmt = (n: number) => String(n).replace('.', ',');

test('both lessons have the standard shape and labelled pictures; four distinct options per question', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
  }
  for (const bank of [gMod.bank, aMod.bank]) {
    assert.ok(bank.length >= 14 && bank.length <= 15);
    for (const b of bank) { assert.equal(b.options.length, 4); assert.equal(new Set(b.options).size, 4); assert.ok(b.options.includes(b.answer)); }
  }
});

test('INDEPENDENT: GIS keys', () => {
  const b = gMod.bank;
  assert.equal(key(b, 'Each cell of a raster is 30 m by 30 m'), `${30 * 30} m²`);
  assert.equal(key(b, 'A feature covers 40 raster cells'), `${fmt((40 * 30 * 30) / 10000)} ha`);
  assert.equal(key(b, 'A buffer of 100 m is made on both sides'), `${(2 * 100 * 3000) / 10000} ha`);
  const nearRiver = ['A', 'B', 'C'];
  const gentle = ['B', 'C', 'D'];
  assert.equal(key(b, 'Farms near a river are A, B and C'), nearRiver.filter((f) => gentle.includes(f)).join(' and '));
  assert.equal(key(b, 'Which type of data stores an area as a grid'), 'Raster data');
  assert.equal(key(b, 'In a vector GIS, a river'), 'Line');
  assert.equal(key(b, 'Which vector type best shows the boundary'), 'Polygon');
  const t = text('gis');
  for (const s of ['remote sensing', 'spatial resolution', '30 m by 30 m', 'attribute data', 'vector data', 'raster data', 'buffer', 'query', 'tracing paper', '900 m²', '1,08 ha', '60 ha']) assert.ok(t.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  assert.equal(12 * 900 / 10000, 1.08);
  assert.equal(25 * 400 / 10000, 1);
  assert.equal(2 * 50 * 2000 / 10000, 20);
});

test('INDEPENDENT: atlas, isoline and degrees-and-minutes keys', () => {
  const b = aMod.bank;
  assert.equal(key(b, "What is 25°45'S written in decimal degrees"), `${fmt(25 + 45 / 60)}°S`);
  assert.equal(key(b, "What is 28°15'E written in decimal degrees"), `${fmt(28 + 15 / 60)}°E`);
  assert.equal(key(b, 'How many minutes are there in 1 degree'), '60');
  assert.equal(key(b, 'What does an isotherm join'), 'Places with the same temperature');
  assert.equal(key(b, 'What does an isohyet join'), 'Places with the same rainfall');
  assert.equal(key(b, 'What does an isobar join'), 'Places with the same air pressure');
  assert.equal(key(b, 'Latitude is measured from which line'), 'The equator');
  const t = text('atlas');
  for (const s of ['26,5°S', '28,25°E', '60 minutes', 'isohyet', 'isotherm', 'isobar', 'cross-referencing', 'equator', 'Greenwich', '25,75°S', '29,33°E']) assert.ok(t.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  assert.equal(30 / 60, 0.5);
  assert.equal(15 / 60, 0.25);
  assert.equal(Math.round((20 / 60) * 100) / 100, 0.33);
});
