import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../../components/subjects/lesson/lessonTest';

// Grade 9 Natural Sciences Term 3, branch B (electricity generation and the national grid; cost of electrical power): standard shape, labelled pictures, and
// every numeric bank key recomputed with plain arithmetic (not the ns9Energy helpers). The unit price is always given in a question.
stubCss();
const gMod = await import('./generation-grid/GenerationGrid');
const cMod = await import('./cost-power/CostPower');
const lessons = { grid: renderSlides(gMod.learnSteps), cost: renderSlides(cMod.learnSteps) };
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text.replace(/ /g, ' ')).join(' | ');
const key = (bank: { prompt: string; answer: string }[], start: string): string => {
  const hit = bank.filter((b) => b.prompt.startsWith(start));
  assert.equal(hit.length, 1, `exactly one question starts with: ${start}`);
  return hit[0].answer.replace(/ /g, ' ');
};
const fmt = (n: number) => String(n).replace('.', ',');
const rand = (n: number) => `R${Number.isInteger(n) ? n : n.toFixed(2).replace('.', ',')}`;

test('both lessons have the standard shape and labelled pictures; 14 questions with four distinct options', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
  }
  for (const bank of [gMod.bank, cMod.bank]) {
    assert.equal(bank.length, 14);
    for (const b of bank) { assert.equal(b.options.length, 4); assert.equal(new Set(b.options).size, 4); assert.ok(b.options.includes(b.answer)); }
  }
});

test('INDEPENDENT: generation and grid keys', () => {
  const b = gMod.bank;
  assert.equal(key(b, 'About 15% of energy is wasted in the grid. If 200 MWh'), `${200 - 200 * 0.15} MWh`);
  assert.equal(key(b, 'Which fuel do most power stations in South Africa use'), 'Coal');
  assert.equal(key(b, 'Which South African power station uses nuclear fission'), 'Koeberg');
  assert.equal(key(b, 'In a coal power station, what turns the turbine'), 'Steam');
  const t = text('grid');
  for (const s of ['coal', 'steam', 'turbine', 'generator', 'wind', 'falling water', 'sun-heated steam', 'nuclear fission', 'waves', 'Koeberg', 'radioactive', 'national grid', 'transformers', '15%', '85 MWh', '15 MWh', 'overload']) assert.ok(t.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  assert.equal(100 * 0.15, 15);
  assert.equal(100 - 15, 85);
  assert.equal(400 * 0.85, 340);
  assert.equal(400 * 0.15, 60);
  assert.ok(t.includes('340 MWh') && t.includes('60 MWh'));
  assert.ok(!/trips by/.test(t), 'no "trips by"');
});

test('INDEPENDENT: cost of power keys (the price is given in each question that needs one)', () => {
  const b = cMod.bank;
  assert.equal(key(b, 'How many watts are there in 2,5 kW'), `${2.5 * 1000} W`.replace('2500', '2 500'));
  assert.equal(key(b, 'A 2 kW heater is switched on for 3 hours'), `${2 * 3} kWh`);
  assert.equal(key(b, 'A 100 W TV is used for 5 hours'), `${fmt((100 / 1000) * 5)} kWh`);
  assert.equal(key(b, 'A kettle uses 1 kWh of energy. The price is R2,50'), rand(1 * 2.5));
  assert.equal(key(b, 'A 1 500 W heater is used for 4 hours. The price is R3'), rand((1500 / 1000) * 4 * 3));
  assert.equal(key(b, 'The only appliance on is a 2 000 W kettle'), `${50 / 2.5 / 2} hours`);
  assert.equal(key(b, 'A 60 W incandescent lamp is replaced'), rand((60 / 1000) * 1000 * 2.5 - (11 / 1000) * 1000 * 2.5));
  assert.equal(key(b, 'Which of these uses the most energy in 10 hours'), 'A 2 kW kettle');
  assert.ok(2 * 10 > 0.1 * 10 && 2 * 10 > 0.06 * 10 && 2 * 10 > 0.011 * 10);
  for (const x of b) if (/^R\d/.test(x.answer) || /Prepaid/.test(x.prompt)) assert.ok(/per kWh/.test(x.prompt), `a question with a rand answer or a prepaid amount must give the price per kWh: ${x.prompt}`);
  const t = text('cost');
  for (const s of ['1 W = 1 J/s', '1 kW = 1 000 W', 'kilowatt-hours', 'unit price', 'R2,50', 'R122,50', '10 hours', 'prepaid', 'compact fluorescent', 'solar water heating', '4,5 kWh', 'R11,25']) assert.ok(t.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  assert.equal(1.5 * 3, 4.5);
  assert.equal(4.5 * 2.5, 11.25);
  assert.equal(60 * 1000 / 1000 * 2.5, 150);
  assert.equal(11 * 1000 / 1000 * 2.5, 27.5);
  assert.equal(150 - 27.5, 122.5);
  assert.equal(0.75 * 4, 3);
  assert.equal(3 * 2, 6);
  assert.equal(30 / 2 / 1.5, 10);
});
