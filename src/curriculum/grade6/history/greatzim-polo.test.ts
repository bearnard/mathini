import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';

// Grade 6 History Term 1, branch B (East coast trade and Great Zimbabwe; Marco Polo): standard shape, labelled pictures, every date and duration in the
// bank recomputed with plain arithmetic, and the lessons treat Great Zimbabwe as built by the ancestors of the Shona people.
stubCss();
const eMod = await import('./term1/east-coast-great-zimbabwe/EastCoastGreatZimbabwe');
const mMod = await import('./term1/marco-polo/MarcoPolo');
const lessons = { east: renderSlides(eMod.learnSteps), polo: renderSlides(mMod.learnSteps) };
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text.replace(/ /g, ' ')).join(' | ');
const key = (bank: { prompt: string; answer: string }[], start: string): string => {
  const hit = bank.filter((b) => b.prompt.startsWith(start));
  assert.equal(hit.length, 1, `exactly one question starts with: ${start}`);
  return hit[0].answer.replace(/ /g, ' ');
};

test('both lessons have the standard shape and labelled pictures; 14 questions with four distinct options', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
  }
  for (const bank of [eMod.bank, mMod.bank]) {
    assert.equal(bank.length, 14);
    for (const b of bank) { assert.equal(b.options.length, 4); assert.equal(new Set(b.options).size, 4); assert.ok(b.options.includes(b.answer)); }
  }
});

test('INDEPENDENT: dates and durations', () => {
  assert.equal(key(eMod.bank, 'Great Zimbabwe was at its height from about AD 1300'), `${1450 - 1300} years`);
  assert.equal(key(eMod.bank, 'Around which year did Great Zimbabwe take over'), 'About AD 1300');
  assert.equal(key(mMod.bank, 'Marco Polo left Europe in 1271'), `${1295 - 1271} years`);
  assert.equal(key(mMod.bank, 'In which year did Marco Polo begin'), '1271');
  assert.ok(1271 >= 1220 && 1295 <= 1300, 'his whole journey lies inside the years of Mapungubwe');
  assert.equal(key(mMod.bank, 'Which southern African kingdom was at its strongest'), 'Mapungubwe');
  assert.equal(key(mMod.bank, 'Marco Polo came from which city'), 'Venice');
  assert.equal(key(mMod.bank, 'Which ruler did Marco Polo serve'), 'Kublai Khan');
  const e = text('east');
  for (const s of ['gold and ivory', 'glass beads', 'cloth', 'Arabia, Persia and India', 'change', 'continuity', 'Great Zimbabwe', 'Shona', 'without mortar', 'porcelain', '150 years', 'about AD 1300 to about AD 1450', 'cattle']) assert.ok(e.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  const p = text('polo');
  for (const s of ['1271', '1295', '24 years', 'Venice', 'merchant', 'Kublai Khan', 'overland', 'silk', 'spices', 'porcelain', 'printing press', 'Mapungubwe', 'father and his uncle']) assert.ok(p.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  assert.equal(1295 - 1271, 24);
});

test('Great Zimbabwe is credited to the ancestors of the Shona people, never to foreigners', () => {
  const all = `${text('east')} ${text('polo')}`;
  assert.ok(/built by the ancestors of the Shona/i.test(all));
  assert.ok(!/(built by|made by) (the )?(portuguese|arabs?|egyptians?|phoenicians?|europeans?)/i.test(all.replace(/Believing the old claim that foreigners built Great Zimbabwe\./, '')));
  assert.ok(!/\b(primitive|savage|backward|tribe)\b/i.test(all));
});
