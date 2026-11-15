import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement, Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { EXAMPLE, limit, rounds, totalSpent } from './tourism';
import { learnSteps } from '../../../curriculum/grade12/economics/term3/tourism-environmental-sustainability/TourismEnvironmentalSustainabilitySlides';

test('R1000 with 60% kept gives rounds of 1000, 600, 360, 216 and the leaked part is the rest', () => {
  const rs = rounds(EXAMPLE.initial, EXAMPLE.keptShare, EXAMPLE.n);
  assert.deepEqual(rs.map((r) => r.spent), [1000, 600, 360, 216]);
  assert.deepEqual(rs.map((r) => r.leaked), [400, 240, 144, 86]);
  assert.ok(rs.every((r) => r.kept + r.leaked === r.spent));
  assert.equal(totalSpent(rs), 2176);
});

test('each round re-spends the previous kept amount, and the total never passes the limit', () => {
  const rs = rounds(1000, 0.6, 8);
  for (let i = 1; i < rs.length; i += 1) assert.equal(rs[i].spent, rs[i - 1].kept);
  assert.equal(limit(1000, 0.6), 2500);
  assert.ok(totalSpent(rs) < 2500);
});

test('more leakage (a smaller kept share) means a smaller total', () => {
  assert.ok(totalSpent(rounds(1000, 0.4, 4)) < totalSpent(rounds(1000, 0.6, 4)));
});

test('the lesson renders all 5 slides, ends with Check yourself, and teaches what the bank asks', () => {
  assert.equal(learnSteps.length, 5);
  assert.equal(learnSteps[learnSteps.length - 1].title, 'Check yourself');
  const all = learnSteps.map((s) => renderToStaticMarkup(createElement(Fragment, null, s.content))).join(' ').toLowerCase();
  for (const need of ['foreign exchange', 'multiplier', 'leakage', 'seasonality', 'negative externality', 'carrying capacity', 'ecotourism', 'sustainable development', 'future generations', 'litter']) {
    assert.ok(all.includes(need), need);
  }
});
