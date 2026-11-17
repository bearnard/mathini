import test from 'node:test';
import assert from 'node:assert/strict';
import { SALTS, dissolutionEquation, totalCharge, ionsPerFormula, ionConcentration, conductsBetter, soluble, EQUATIONS, REDOX, electronsTransferred, WATER, waterTotal, freshShare, dailyDemandM3, daysOfSupply, balanced } from './aq10Helpers';

test('every dissolution gives a neutral solution and the stated equation text', () => {
  for (const s of SALTS) assert.equal(totalCharge(s), 0, s.formula);
  const by = (f: string) => SALTS.find((s) => s.formula === f)!;
  assert.equal(dissolutionEquation(by('NaCl')), 'NaCl(s) → Na⁺(aq) + Cl⁻(aq)');
  assert.equal(dissolutionEquation(by('CaCl2')), 'CaCl₂(s) → Ca²⁺(aq) + 2Cl⁻(aq)');
  assert.equal(dissolutionEquation(by('Na2SO4')), 'Na₂SO₄(s) → 2Na⁺(aq) + SO₄²⁻(aq)');
});

test('ion counts and concentrations (plain arithmetic)', () => {
  const by = (f: string) => SALTS.find((s) => s.formula === f)!;
  assert.equal(ionsPerFormula(by('CaCl2')), 3);
  assert.equal(ionsPerFormula(by('Na2SO4')), 3);
  assert.equal(ionsPerFormula(by('AlCl3')), 4);
  assert.equal(ionConcentration(by('NaCl'), 0.1), 0.2);
  assert.equal(ionConcentration(by('CaCl2'), 0.1), 0.3);
  assert.equal(conductsBetter(by('NaCl'), by('CaCl2')).formula, 'CaCl2');
});

test('solubility rules', () => {
  assert.equal(soluble('Ag', 'Cl'), false);
  assert.equal(soluble('Na', 'Cl'), true);
  assert.equal(soluble('Ba', 'SO4'), false);
  assert.equal(soluble('Na', 'SO4'), true);
  assert.equal(soluble('Ag', 'NO3'), true);
  assert.equal(soluble('Ca', 'CO3'), false);
  assert.equal(soluble('Pb', 'I'), false);
});

test('the equations balance, and a broken one does not', () => {
  for (const e of Object.values(EQUATIONS)) assert.ok(balanced(e), e);
  assert.equal(balanced('BaCl2 + Na2SO4 → BaSO4 + NaCl'), false);
});

test('redox electrons, water shares and the town example', () => {
  assert.equal(electronsTransferred(REDOX.zincBefore, REDOX.zincAfter), 2);
  assert.equal(electronsTransferred(REDOX.copperBefore, REDOX.copperAfter), 2);
  assert.equal(waterTotal(), 100);
  assert.equal(freshShare(), 3);
  assert.equal(dailyDemandM3(200, 5000), (200 * 5000) / 1000);
  assert.equal(daysOfSupply(150000, 1000), 150);
});
