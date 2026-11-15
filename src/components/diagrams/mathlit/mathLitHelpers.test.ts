import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { lineScaleMarks, mapCmPerKm, rand, sa, scaleDistance, splitWidths, taxSteps, vatFacts } from './mathLitHelpers';

const here = path.dirname(fileURLToPath(import.meta.url));
const lesson = (p: string) => fs.readFileSync(path.join(here, '../../../curriculum', p), 'utf8');

test('South African number format: decimal comma, space for thousands', () => {
  assert.equal(sa(1.15), '1,15');
  assert.equal(sa(210000), '210 000');
  assert.equal(rand(230), 'R230');
  assert.equal(rand(19.5), 'R19,5');
  assert.equal(sa(-30000), '−30 000');
});

test('VAT at 15%: R200 excluding is R30 VAT and R230 including, and working back with 15/115 gives the same VAT', () => {
  const f = vatFacts(200);
  assert.deepEqual([f.excl, f.vat, f.incl], [200, 30, 230]);
  assert.deepEqual(f.fractionOfIncl, [15, 115]);
  assert.equal(f.vatFromIncl, 30);
  assert.equal(f.multiplier, '1,15');
  assert.equal(Math.round(f.excl * 1.15 * 100) / 100, f.incl, 'multiplying by 1,15 gives the same price');
  for (const excl of [100, 80, 250, 19.99, 1234]) { const g = vatFacts(excl); assert.equal(g.vatFromIncl, g.vat, String(excl)); }
  assert.throws(() => vatFacts(0));
});

test('taxable income = gross - deductions; tax payable = tax before rebate - rebate', () => {
  const t = taxSteps(240_000, 30_000, 30_000, 15_000);
  assert.deepEqual([t.taxable, t.payable], [210_000, 15_000]);
  assert.throws(() => taxSteps(100, 200, 10, 5));
  assert.throws(() => taxSteps(100, 10, 10, 20));
  const [a, b] = splitWidths(t.taxable, t.deductions, 120);
  assert.equal(a + b, 120);
  assert.equal(b / (a + b), 30_000 / 240_000, 'the deduction is drawn as its true share of gross income');
});

test('map scale 1 : 50 000: 4 cm on the map is 200 000 cm = 2 000 m = 2 km; 1 km is 2 cm on the map', () => {
  const d = scaleDistance(4, 50_000);
  assert.deepEqual([d.cm, d.m, d.km], [200_000, 2_000, 2]);
  assert.equal(mapCmPerKm(50_000), 2);
  assert.deepEqual(lineScaleMarks(50_000, 2).km, [0, 2, 4]);
  assert.deepEqual(lineScaleMarks(50_000, 2).ruler, [0, 1, 2, 3, 4]);
  assert.equal(scaleDistance(mapCmPerKm(50_000), 50_000).km, 1);
  assert.throws(() => scaleDistance(0, 50_000));
  assert.throws(() => scaleDistance(1, 1.5));
});

test('the lessons show these pictures next to the rules they teach', () => {
  const vat = lesson('grade11/mathematical-literacy/term3/finance-taxation/FinanceTaxation.tsx');
  assert.ok(vat.includes('VatBreakdown') && vat.includes('15}{115}'));
  const tax = lesson('grade12/mathematical-literacy/term3/taxation/Taxation.tsx');
  assert.ok(tax.includes('TaxableIncomeSteps') && tax.includes('\\text{Taxable income} = \\text{gross income} - \\text{allowable deductions}'));
  const s11 = lesson('grade11/mathematical-literacy/term2/maps-plans-scale/MapsPlansScale.tsx');
  assert.ok(s11.includes('ScaleDistanceExample') && s11.includes('4 \\times 50\\,000'));
  const s12 = lesson('grade12/mathematical-literacy/term2/maps-plans-scale/MapsPlansScale.tsx');
  assert.ok(s12.includes('LineScaleKm') && s12.includes('1:50 000'));
});
