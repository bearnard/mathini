import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FIRST_BRACKET_TOP, firstBracketTax, linearPoints, lineScaleMarks, mapCmPerKm, planRoom, PRIMARY_REBATE, rand, sa, scaleDistance, splitWidths, stepRise, taxSteps, vatFacts, viewsOf } from './mathLitHelpers';

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

test('a rate as a table and a graph: R5 per GB gives (1; 5), (2; 10), (3; 15), (4; 20) on one straight line, R5 higher for each extra GB', () => {
  const pts = linearPoints(5, [1, 2, 3, 4]);
  assert.deepEqual(pts.map((p) => p.y), [5, 10, 15, 20]);
  assert.equal(stepRise(pts), 5);
  assert.throws(() => stepRise([{ x: 0, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 5 }]));
  assert.throws(() => linearPoints(0, [1, 2]));
});

test('plan at 1 : 50: 8 cm x 6 cm is 4 m x 3 m and 12 m2 (area grows by the SCALE SQUARED, not the scale)', () => {
  const r = planRoom(50, 8, 6);
  assert.deepEqual([r.realWidth.m, r.realDepth.m, r.areaM2], [4, 3, 12]);
  assert.equal(r.areaM2, (8 * 6 * 50 * 50) / 10_000, 'plan area 48 cm2 x 2 500 = 120 000 cm2 = 12 m2');
  assert.notEqual(r.areaM2, (8 * 6 * 50) / 10_000);
});

test('views of a solid: top is the footprint, front the tallest stack per column, side the tallest per row seen from the right', () => {
  const v = viewsOf([[3, 2, 1], [1, 0, 0]]); // back row first
  assert.deepEqual(v.top, [[true, true, true], [true, false, false]]);
  assert.deepEqual(v.front, [3, 2, 1]);
  assert.deepEqual(v.side, [1, 3], 'from the right, the front row is on the left');
  assert.equal(v.top.flat().filter(Boolean).length, 4);
  assert.throws(() => viewsOf([[1, 2], [3]]));
  assert.throws(() => viewsOf([]));
});

test('SARS 2026/27 first bracket: taxable R210 000 x 18% = R37 800, less the R17 820 primary rebate = R19 980 payable', () => {
  assert.equal(firstBracketTax(210_000), 37_800);
  assert.equal(PRIMARY_REBATE, 17_820);
  const t = taxSteps(240_000, 30_000, firstBracketTax(240_000 - 30_000), PRIMARY_REBATE);
  assert.deepEqual([t.taxable, t.taxBeforeRebate, t.payable], [210_000, 37_800, 19_980]);
  assert.equal(firstBracketTax(99_000), PRIMARY_REBATE, 'the lesson: no tax up to R99 000 for under 65s');
  assert.throws(() => firstBracketTax(FIRST_BRACKET_TOP + 1));
  const tax = fs.readFileSync(path.join(here, '../../../curriculum/grade12/mathematical-literacy/term3/taxation/Taxation.tsx'), 'utf8');
  assert.ok(tax.includes('R245 100') && tax.includes('R17 820') && tax.includes('18% of R99 000 = R17 820'), 'the picture uses the figures the lesson teaches');
});

test('the stem-2 lessons show their pictures next to the numbers they teach', () => {
  const l = (p: string) => fs.readFileSync(path.join(here, '../../../curriculum', p), 'utf8');
  const pat = l('grade11/mathematical-literacy/term1/patterns-relationships/PatternsRelationships.tsx');
  assert.ok(pat.includes('LinearRelationGraph') && pat.includes('Cost} = 5 \\times \\text{GB}'));
  const plan = l('grade12/mathematical-literacy/term3/maps-plans-models/MapsPlansModels.tsx');
  assert.ok(plan.includes('PlanScaleExample') && plan.includes('scale factor'));
  const views = l('grade11/mathematical-literacy/term3/maps-plans-models/MapsPlansModels.tsx');
  assert.ok(views.includes('ThreeViews') && views.includes('Top view (plan view)'));
});
