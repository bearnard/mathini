import test from 'node:test';
import assert from 'node:assert/strict';
import * as g from './g6geoHelpers';

test('the sample atlas: page counts, sections by page, an alphabetical index', () => {
  assert.deepEqual(g.CONTENTS.map((s) => g.pagesIn(s)), [2, 2, 2, 9]);
  assert.equal(g.totalPages(g.CONTENTS), 15);
  assert.equal(g.sectionOfPage(14), 'The nine provinces');
  assert.equal(g.sectionOfPage(6), 'Africa');
  assert.equal(g.sectionOfPage(30), undefined);
  // sections do not overlap and follow each other
  for (let i = 1; i < g.CONTENTS.length; i++) assert.equal(g.CONTENTS[i].from, g.CONTENTS[i - 1].to + 1);
  assert.ok(g.isAlphabetical(g.INDEX));
  assert.ok(!g.isAlphabetical([...g.INDEX].reverse()));
  // every indexed page is in the atlas
  for (const e of g.INDEX) assert.ok(g.sectionOfPage(e.page), e.place);
});

test('highest mountains: in order, with the gaps', () => {
  assert.deepEqual(g.PEAKS.map((p) => p.name), ['Mount Everest', 'K2', 'Kangchenjunga']);
  assert.ok(g.PEAKS[0].metres > g.PEAKS[1].metres && g.PEAKS[1].metres > g.PEAKS[2].metres);
  assert.equal(g.higherBy(g.PEAKS[0], g.PEAKS[1]), 238);
  assert.equal(g.higherBy(g.PEAKS[1], g.PEAKS[2]), 25);
});

test('latitude bands: rainforest by the Equator, deserts and then coniferous forests further north, none overlapping', () => {
  const [rain, desert, conifer] = g.BANDS;
  assert.ok(rain.from < 0 && rain.to > 0);
  assert.ok(desert.from > rain.to && conifer.from > desert.to);
  assert.ok(conifer.from > 0, 'coniferous forests are in the Northern Hemisphere');
  assert.equal(g.latFraction(90), 0);
  assert.equal(g.latFraction(0), 0.5);
  assert.equal(g.latFraction(-90), 1);
  assert.ok(g.latFraction(65) < g.latFraction(50));
});

test('example coniferous climate: warmest July, coldest January, range 30, five months below zero, 550 mm', () => {
  assert.equal(g.TEMP_C.length, 12);
  assert.equal(g.RAIN_MM.length, 12);
  assert.equal(g.monthOfMax(g.TEMP_C), 'July');
  assert.equal(g.monthOfMin(g.TEMP_C), 'January');
  assert.equal(g.annualRange(g.TEMP_C), 30);
  assert.equal(g.monthsBelowZero(g.TEMP_C), 5);
  assert.equal(g.total(g.RAIN_MM), 550);
  assert.equal(g.monthOfMax(g.RAIN_MM), 'August');
  // rain in every month
  assert.ok(g.RAIN_MM.every((r) => r > 0));
});
