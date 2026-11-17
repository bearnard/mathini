import test from 'node:test';
import assert from 'node:assert/strict';
import * as h from './history6';

test('the Limpopo Valley spans follow one another from 900 to 1300', () => {
  assert.equal(h.years(h.SCHRODA), 100);
  assert.equal(h.years(h.K2), 220);
  assert.equal(h.years(h.MAPUNGUBWE), 80);
  assert.equal(h.years(h.LIMPOPO_PERIOD), 400);
  assert.equal(h.SPANS.reduce((a, s) => a + h.years(s), 0), h.years(h.LIMPOPO_PERIOD));
  assert.equal(h.SCHRODA.to, h.K2.from);
  assert.equal(h.K2.to, h.MAPUNGUBWE.from);
  assert.equal(h.after(h.SCHRODA), h.K2);
  assert.equal(h.after(h.K2), h.MAPUNGUBWE);
  assert.equal(h.after(h.MAPUNGUBWE), undefined);
  assert.equal(h.spanAt(950)?.name, 'Schroda');
  assert.equal(h.spanAt(1100)?.name, 'K2');
  assert.equal(h.spanAt(1250)?.name, 'Mapungubwe');
  assert.equal(h.spanAt(1300), undefined);
  assert.equal(h.spanText(h.MAPUNGUBWE), 'AD 1220 to 1300');
  assert.equal(h.spanText(h.K2), 'about AD 1000 to 1220');
  assert.equal(h.MAPUNGUBWE.exact, true);
  assert.equal(h.yearsBetween(1220, 1300), 80);
});

test('Marco Polo and Mapungubwe overlapped; Great Zimbabwe came after', () => {
  assert.equal(h.years(h.MARCO_POLO_JOURNEY), 24);
  assert.equal(h.overlap(h.MAPUNGUBWE, h.MARCO_POLO_JOURNEY), 1295 - 1271 + 0);
  assert.equal(h.overlap(h.MAPUNGUBWE, h.GREAT_ZIMBABWE), 50);
  assert.ok(h.GREAT_ZIMBABWE.from > h.MAPUNGUBWE.from);
  assert.equal(h.age(h.MARCO_POLO_LIFE), 70);
  assert.equal(h.overlap({ name: 'a', from: 0, to: 10, exact: true }, { name: 'b', from: 20, to: 30, exact: true }), 0);
});

test('Renaissance and exploration dates', () => {
  assert.equal(h.age(h.LEONARDO), 67);
  assert.equal(h.age(h.GALILEO), 78);
  assert.equal(h.DA_GAMA_VOYAGE.from - h.DIAS_MOSSEL_BAY, 9);
  assert.equal(h.DA_GAMA_VOYAGE.to - h.DIAS_MOSSEL_BAY, 10);
  assert.equal(h.VOC_FOUNDED - h.DIAS_MOSSEL_BAY, 114);
  assert.deepEqual(h.inOrder([{ year: 1602 }, { year: 1488 }, { year: 1498 }]).map((x) => x.year), [1488, 1498, 1602]);
});
