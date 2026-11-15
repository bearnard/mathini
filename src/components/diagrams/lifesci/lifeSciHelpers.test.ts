import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { countAtoms, insideEllipse, isBalanced, kidneyLayout, photosynthesis, populationChange, signed } from './lifeSciHelpers';

const here = path.dirname(fileURLToPath(import.meta.url));
const lesson = (p: string) => fs.readFileSync(path.join(here, '../../../curriculum', p), 'utf8');

test('population change: births and immigrants in, deaths and emigrants out', () => {
  const p = populationChange(100, 12, 5, 8, 4);
  assert.equal(p.delta, 5);
  assert.equal(p.after, 105);
  assert.equal(populationChange(100, 2, 1, 10, 3).delta, -10);
  assert.equal(populationChange(50, 3, 3, 3, 3).delta, 0);
  assert.throws(() => populationChange(5, 0, 0, 10, 0));
  assert.throws(() => populationChange(5, -1, 0, 0, 0));
  assert.equal(signed(5), '+5');
  assert.equal(signed(-3), '−3');
  assert.equal(signed(0), '0');
});

test('6CO2 + 6H2O -> C6H12O6 + 6O2 is balanced: 6 C, 12 H, 18 O on each side', () => {
  assert.deepEqual(countAtoms(photosynthesis.inputs), { C: 6, O: 18, H: 12 });
  assert.deepEqual(countAtoms(photosynthesis.outputs), { C: 6, H: 12, O: 18 });
  assert.ok(isBalanced(photosynthesis));
  assert.ok(!isBalanced({ inputs: [{ coefficient: 1, formula: { C: 1, O: 2 } }], outputs: [{ coefficient: 1, formula: { O: 2 } }] }));
});

test('the kidney drawing nests: pyramids and pelvis sit inside the inner ellipse, which sits inside the outline', () => {
  const k = kidneyLayout();
  assert.ok(k.cortexInnerRx < k.rx && k.cortexInnerRy < k.ry, 'a cortex band exists');
  for (const py of k.pyramids) {
    for (const b of py.base) assert.ok(insideEllipse(b, k.cortexInnerRx, k.cortexInnerRy), 'base on the cortex inner edge');
    assert.ok(insideEllipse(py.apex, k.cortexInnerRx, k.cortexInnerRy));
    const baseMid = { x: (py.base[0].x + py.base[1].x) / 2, y: (py.base[0].y + py.base[1].y) / 2 };
    const d = (p: { x: number; y: number }) => Math.hypot(p.x - k.pelvis.cx, p.y - k.pelvis.cy);
    assert.ok(d(py.apex) < d(baseMid), 'the apex points at the pelvis');
    assert.ok(d(py.apex) > k.pelvis.r, 'the apex stops short of the pelvis');
  }
  assert.ok(insideEllipse({ x: k.pelvis.cx + k.pelvis.r, y: k.pelvis.cy }, k.cortexInnerRx, k.cortexInnerRy));
  assert.ok(!insideEllipse(k.ureterEnd, k.rx, k.ry), 'the ureter leaves the kidney');
});

test('the lessons show the pictures next to what they teach', () => {
  assert.ok(lesson('grade11/life-sciences/term3/population-ecology/PopulationEcology.tsx').includes('PopulationChangeDiagram'));
  assert.ok(lesson('grade11/life-sciences/term3/population-ecology/PopulationEcology.tsx').includes('ΔN = (Natality + Immigration) − (Mortality + Emigration)'));
  const ph = lesson('grade11/life-sciences/term2/photosynthesis/Photosynthesis.tsx');
  assert.ok(ph.includes('PhotosynthesisFlow') && ph.includes('6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂'));
  const kid = lesson('grade11/life-sciences/term3/excretion-humans/ExcretionHumans.tsx');
  assert.ok(kid.includes('KidneySection') && kid.includes('Cortex (outer)') && kid.includes('Pelvis (central)'));
});
