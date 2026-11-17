import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../../components/subjects/lesson/lessonTest';

// Grade 12 Geography skills, branch A (map scale, distance, area; bearings and declination): standard shape, labelled pictures, and every numeric bank key
// recomputed with plain arithmetic (not the mapwork helpers), so a wrong key or a wrong helper is caught either way.
stubCss();
const scaleMod = await import('./map-scale-distance-area/MapScaleDistanceAreaT1');
const bearMod = await import('./bearings-declination/BearingsDeclinationT1');
const lessons = { scale: renderSlides(scaleMod.learnSteps), bearing: renderSlides(bearMod.learnSteps) };
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text.replace(/\u00a0/g, ' ')).join(' | ');
const key = (bank: { prompt: string; answer: string }[], start: string): string => {
  const hit = bank.filter((b) => b.prompt.startsWith(start));
  assert.equal(hit.length, 1, `exactly one question starts with: ${start}`);
  return hit[0].answer.replace(/\u00a0/g, ' ');
};

const fmt = (n: number) => String(n).replace('.', ',');
const dist = (m: number) => (m >= 1000 ? `${fmt(m / 1000)} km` : `${fmt(m)} m`);
const deg = (n: number) => `${String(Math.round(n)).padStart(3, '0')}°`;
const dm = (totalMinutes: number) => `${Math.floor(totalMinutes / 60)}°${String(totalMinutes % 60).padStart(2, '0')}'`;

test('both lessons have the standard shape and labelled pictures, 14 questions each with four options', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
  }
  for (const bank of [scaleMod.bank, bearMod.bank]) {
    assert.equal(bank.length, 14);
    for (const b of bank) { assert.equal(b.options.length, 4); assert.equal(new Set(b.options).size, 4); assert.ok(b.options.includes(b.answer)); }
  }
});

test('INDEPENDENT: scale, distance and area keys', () => {
  const b = scaleMod.bank;
  assert.equal(key(b, 'On a map at 1:50 000, two farms'), dist((7.2 * 50000) / 100));
  assert.equal(key(b, 'At the scale 1:50 000, how many metres'), dist((1 * 50000) / 100));
  assert.equal(key(b, 'Two towns are 8 cm apart'), dist((8 * 250000) / 100));
  assert.equal(key(b, 'A road measures 3,4 cm'), dist((3.4 * 10000) / 100));
  assert.equal(key(b, 'A river is 5,5 km long'), `${fmt((5500 * 100) / 50000)} cm`);
  assert.equal(key(b, 'Two points are 4 cm apart'), `1:${String((2000 * 100) / 4).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`);
  assert.equal(key(b, 'A map distance of 5 cm stands for 1 km'), `1:${String((1000 * 100) / 5).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`);
  assert.equal(key(b, 'Which of these is the largest scale'), '1:10 000');
  assert.equal(key(b, 'A route is measured in three'), dist(((3.5 + 2 + 1.5) * 50000) / 100));
  assert.equal(key(b, 'A farm is a rectangle 6 cm by 4 cm'), `${fmt(((6 * 50000) / 100 / 1000) * ((4 * 50000) / 100 / 1000))} km\u00b2`);
  assert.equal(key(b, 'A farm is 2,5 km long'), `${Math.round(2.5 * 1.2 * 100)} ha`);
  assert.equal(key(b, 'Each grid square on a 1:50 000'), `${((2 * 50000) / 100 / 1000) ** 2} km\u00b2`);
  assert.equal(key(b, 'A town covers 18 whole grid squares'), `${18 * ((2 * 50000) / 100 / 1000) ** 2} km\u00b2`);
  assert.equal(key(b, 'On a map at 1:10 000, how many centimetres'), `${fmt((1000 * 100) / 10000)} cm`);
  const t = text('scale');
  for (const s of ['500 m', '1 km\u00b2', '100 hectares', '1:10 000', 'larger scale', 'curved']) assert.ok(t.includes(s), `missing ${s}`);
  assert.equal(((3 + 2.4 + 1.6) * 50000) / 100, 3500);
  assert.ok(t.includes('3,5 km'));
});

test('INDEPENDENT: bearing and declination keys', () => {
  const b = bearMod.bank;
  assert.equal(key(b, 'What is the true bearing of south-west'), deg(225));
  assert.equal(key(b, 'Which compass point has a true bearing of 135'), 'SE');
  assert.equal(key(b, 'The bearing from A to B is 065'), deg((65 + 180) % 360));
  assert.equal(key(b, 'The bearing from P to Q is 250'), deg(250 - 180));
  assert.equal(key(b, 'Town Q is 2 km east and 2 km north'), deg((Math.atan2(2000, 2000) * 180) / Math.PI));
  assert.equal(key(b, 'Hill H is 3 km west and 3 km south'), deg(((Math.atan2(-3000, -3000) * 180) / Math.PI + 360) % 360));
  assert.equal(key(b, 'The magnetic declination is 19'), deg(65 + 19));
  assert.equal(key(b, 'The magnetic declination is 22'), deg(140 - 22));
  assert.equal(key(b, 'In South Africa, where does magnetic north lie'), 'West of true north');
  assert.equal(key(b, 'A map gives a magnetic declination of 24'), `${dm(24 * 60 + 10 + (2026 - 2006) * 6)} W`);
  assert.equal(key(b, 'A map gives a declination of 22'), `${dm(22 * 60 + 40 + (2025 - 2015) * 8)} W`);
  assert.equal(key(b, 'The declination in a year is 26'), dm(90 * 60 + 26 * 60 + 10));
  assert.equal(key(b, 'Hill K is due west'), deg(270));
  assert.equal(key(b, 'How are bearings measured'), 'Clockwise from north');
  const t = text('bearing');
  for (const s of ["26\u00b010'", '245\u00b0', 'west of true north', 'clockwise from true north', 'magnetic bearing = true bearing + declination']) assert.ok(t.includes(s), `missing ${s}`);
});
