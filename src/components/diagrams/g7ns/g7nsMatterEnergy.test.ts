import test from 'node:test';
import assert from 'node:assert/strict';
import * as m from './g7nsMatterEnergy';

test('the first 20 elements are in order with unique symbols and names', () => {
  assert.equal(m.FIRST_20.length, 20);
  assert.deepEqual(m.FIRST_20.map((e) => e.z), Array.from({ length: 20 }, (_, i) => i + 1));
  assert.equal(new Set(m.FIRST_20.map((e) => e.symbol)).size, 20);
  assert.equal(new Set(m.FIRST_20.map((e) => e.name)).size, 20);
  assert.equal(m.FIRST_20.map((e) => e.symbol).join(' '), 'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca');
});

test('periods and groups match the real table', () => {
  // written out by hand from the Periodic Table: [symbol, period, group]
  const table: [string, number, number][] = [
    ['H', 1, 1], ['He', 1, 18],
    ['Li', 2, 1], ['Be', 2, 2], ['B', 2, 13], ['C', 2, 14], ['N', 2, 15], ['O', 2, 16], ['F', 2, 17], ['Ne', 2, 18],
    ['Na', 3, 1], ['Mg', 3, 2], ['Al', 3, 13], ['Si', 3, 14], ['P', 3, 15], ['S', 3, 16], ['Cl', 3, 17], ['Ar', 3, 18],
    ['K', 4, 1], ['Ca', 4, 2],
  ];
  for (const [sym, p, g] of table) {
    const e = m.bySymbol(sym);
    assert.equal(m.periodOf(e.z), p, sym);
    assert.equal(m.groupOf(e.z), g, sym);
    assert.ok((m.COLUMNS as readonly number[]).includes(g), sym);
  }
});

test('categories: 7 metals, 2 semi-metals, 11 non-metals', () => {
  assert.equal(m.countOf('metal'), 7);
  assert.equal(m.countOf('semi-metal'), 2);
  assert.equal(m.countOf('non-metal'), 11);
  assert.deepEqual(m.FIRST_20.filter((e) => e.category === 'semi-metal').map((e) => e.symbol), ['B', 'Si']);
  // the metals are on the left of the table (groups 1, 2 and 13)
  for (const e of m.FIRST_20.filter((x) => x.category === 'metal')) assert.ok([1, 2, 13].includes(m.groupOf(e.z)), e.symbol);
});

test('grid: 5 steps, 4 non-renewable and 2 renewable sources, bulbs', () => {
  assert.equal(m.GRID_CHAIN.length, 5);
  assert.deepEqual(m.SOURCES.filter((s) => !s.renewable).map((s) => s.name), ['coal', 'oil', 'gas', 'nuclear fuel']);
  assert.deepEqual(m.SOURCES.filter((s) => s.renewable).map((s) => s.name), ['falling water', 'wind']);
  const [a, b] = m.BULBS;
  assert.equal(m.wattsSaved(a, b), 50);
  assert.equal(m.timesMore(a, b), 6);
});
