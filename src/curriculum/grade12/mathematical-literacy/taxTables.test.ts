import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

// The 2026/27 SARS rates of tax for individuals (sars.gov.za/tax-rates/income-tax/rates-of-tax-for-individuals/), checked for
// internal consistency and against the Grade 11 and Grade 12 Maths Literacy lessons that display them.
const BRACKETS: [number, number, number][] = [
  // [taxable income above, base tax in rand, marginal rate]
  [0, 0, 0.18],
  [245_100, 44_118, 0.26],
  [383_100, 79_998, 0.31],
  [530_200, 125_599, 0.36],
  [695_800, 185_215, 0.39],
  [887_000, 259_783, 0.41],
  [1_878_600, 666_339, 0.45],
];
const PRIMARY_REBATE = 17_820;

test('each bracket base tax equals the tax on the bracket below it (the published table is consistent)', () => {
  for (let i = 1; i < BRACKETS.length; i++) {
    const [lo, base, rate] = BRACKETS[i - 1];
    assert.equal(Math.round(base + (BRACKETS[i][0] - lo) * rate), BRACKETS[i][1], `bracket ${i}`);
  }
});

test('the tax threshold for a person under 65 is the income at which the 18% bracket equals the primary rebate', () => {
  assert.equal(PRIMARY_REBATE / 0.18, 99_000);
});

const read = (p: string) => fs.readFileSync(new URL(p, import.meta.url), 'utf8');
// the lesson part only: the bank items state their own simplified brackets and rebate and are deliberately left as they are
const g11 = read('../../grade11/mathematical-literacy/term3/finance-taxation/FinanceTaxation.tsx').split('const bank')[0];
const g12 = read('./term3/taxation/Taxation.tsx');
const fmt = (n: number) => n.toLocaleString('en-ZA').replace(/ | /g, ' ');

test('the Grade 11 table shows the 2026/27 base amounts, thresholds and rebate', () => {
  for (const [lo, base] of BRACKETS.slice(1)) {
    assert.ok(g11.includes(`R${fmt(base)} + `), `base R${fmt(base)}`);
    assert.ok(g11.includes(`over R${fmt(lo)}`), `threshold R${fmt(lo)}`);
  }
  assert.ok(g11.includes('2026/27'));
  assert.ok(g11.includes('R17 820'));
  assert.ok(!/R17 235|R237 100|R42 678|1\.817/.test(g11), 'no figure from the old table remains');
});

test('the Grade 12 lesson text shows the 2026/27 brackets and rebates', () => {
  for (const [lo, base] of BRACKETS.slice(1)) {
    assert.ok(g12.includes(`R${fmt(base)} + `), `base R${fmt(base)}`);
    assert.ok(g12.includes(`R${fmt(lo)}`), `threshold R${fmt(lo)}`);
  }
  for (const t of ['R17 820', 'R9 765', 'R3 249', 'R99 000', '2026/27']) assert.ok(g12.includes(t), t);
  assert.ok(!/R17 235|R237 100|R9 444|R3 145/.test(g12), 'no figure from the old table remains');
});
