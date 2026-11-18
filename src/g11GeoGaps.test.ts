import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';
import * as g from './components/diagrams/geo11/geo11';

// Grade 11 Geography gaps (droughts, desertification, frameworks for development, aerial photographs, orthophoto maps, atlases, fieldwork).
// The numbers in the questions are recomputed here independently of geo11.ts.

stubCss();
const topics = [
  ['term1/droughts', 'DroughtsCausesEffects'], ['term1/desertification-management', 'DesertificationManagement'],
  ['term1/aerial-photographs-landforms', 'AerialPhotographsLandforms'], ['term1/orthophoto-maps-orienting', 'OrthophotoMapsOrienting'],
  ['term2/fieldwork-weather-data', 'FieldworkWeatherData'], ['term3/development-factors', 'DevelopmentFactors'],
  ['term3/development-models', 'DevelopmentModels'], ['term3/community-based-development', 'CommunityBasedDevelopment'], ['term3/using-atlases', 'UsingAtlases'],
];
for (const [dir, name] of topics) {
  const lesson = renderSlides((await import(`./curriculum/grade11/geography/${dir}/${name}`)).learnSteps);
  const bank = extractCuratedBanks().filter((q) => q.file.includes(`grade11/geography/${dir}/`));
  test(`${dir}: standard lesson shape and 14 valid questions`, () => {
    assertLessonShape(lesson);
    assert.equal(bank.length, 14);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(res.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
  });
  test(`${dir}: key words of every answer appear in the lesson`, () => {
    const words = (x: string) => x.toLowerCase().match(/[a-z]{6,}/g) ?? [];
    const text = lesson.map((x) => x.text).join(' ').toLowerCase();
    for (const q of bank) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length < 3, `${q.prompt}: ${missing.join(', ')}`);
    }
  });
}

test('INDEPENDENT: drought, overgrazing and yield sums', () => {
  assert.equal(330 / 500 * 100, 66);
  assert.equal(500 - 300, 200);
  assert.equal(((3 - 1.2) / 3) * 100, 60);
  assert.ok(Math.abs(((3 - 2.7) / 3) * 100 - 10) < 1e-9);
  assert.equal(400 / 8, 50);
  assert.equal(80 - 50, 30);
  assert.equal((30 / 50) * 100, 60);
});
test('INDEPENDENT: development sums', () => {
  assert.equal(84 - 96, -12);
  assert.equal(70 / 2, 35);
  assert.equal(70 / 3.5, 20);
  assert.equal(12 / 100 * 100, 12);
  assert.equal(20 * 50, 1000);
  assert.equal(20 * 50 * 12, 12000);
  assert.equal(Math.round(30.4 / 2.17), 14);
});
test('INDEPENDENT: map sums', () => {
  assert.equal(100000 / 10000, 10);
  assert.equal(100000 / 50000, 2);
  assert.equal(7 * 10000 / 100, 700);
  assert.equal(70000 / 50000, 1.4);
  assert.equal(3 * 100 * 2 * 100 / 10000, 6);
  assert.equal(75000 / 5, 15000);
  assert.equal(4 * 15000 / 100, 600);
  assert.equal(29 + 50 / 60 > 29.83 && 29 + 50 / 60 < 29.84, true);
  assert.equal(g.gridRef(4, 3), 'D3');
});
test('INDEPENDENT: the fieldwork week', () => {
  const rain = [0, 0, 6, 14, 4, 0, 0], max = [24, 26, 23, 20, 23, 25, 27];
  assert.equal(rain.reduce((a, b) => a + b, 0), 24);
  assert.equal(max.reduce((a, b) => a + b, 0) / 7, 24);
  assert.equal(Math.max(...max), 27);
  assert.equal(rain.filter((r) => r > 0).length, 3);
  assert.deepEqual(g.WEEK.map((d) => d.rain), rain);
  assert.deepEqual(g.WEEK.map((d) => d.max), max);
});
