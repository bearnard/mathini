import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { uncoveredAnswers } from './scienceHelpers';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '../../../curriculum');

const LESSONS: Record<string, { slides: number; uses: string[] }> = {
  'grade9/natural-sciences/term2/atoms-elements-compounds/AtomsElementsCompounds.tsx': { slides: 6, uses: ['AtomModel', 'MatterKinds', 'PeriodicStrip', 'Compare', 'Terms', 'countAtoms('] },
  'grade9/natural-sciences/term2/chemical-reactions-acids-bases/ChemicalReactionsAcidsBases.tsx': { slides: 6, uses: ['FlowDiagram', 'PhBar', 'NeutralisationBeakers', 'MassBars', 'litmus(', 'massTotal('] },
  'grade9/natural-sciences/term3/electricity-electric-cells/ElectricityElectricCells.tsx': { slides: 6, uses: ['CircuitSymbols', 'CircuitPair', 'WireResistance', 'current(', 'wireResistance('] },
};

for (const [file, want] of Object.entries(LESSONS)) {
  const name = path.basename(file, '.tsx');
  const src = fs.readFileSync(path.join(root, file), 'utf8');
  const slides = src.slice(0, src.indexOf('const bank'));

  test(`${name}: ${want.slides} slides, the last one is "Check yourself"`, () => {
    const titles = [...slides.matchAll(/^\s{4}title: (['"])(.+?)\1,/gm)].map((m) => m[2]);
    assert.equal(titles.length, want.slides);
    assert.equal(titles[titles.length - 1], 'Check yourself');
  });

  test(`${name}: every slide but the last has a rule, a worked example and a common mistake`, () => {
    const body = slides.slice(slides.indexOf('const learnSteps'));
    const parts = body.split(/\n\s{2}\{\n\s{4}title:/).slice(1, -1);
    assert.equal(parts.length, want.slides - 1);
    for (const p of parts) for (const tag of ['<Rule>', '<Worked', '<Mistake>']) assert.ok(p.includes(tag), `${tag} missing in a slide`);
  });

  test(`${name}: the lesson uses its pictures and helpers`, () => {
    for (const u of want.uses) assert.ok(slides.includes(u), `${u} not used`);
  });

  test(`${name}: every bank answer can be answered from the slides`, () => {
    assert.deepEqual(uncoveredAnswers(src), []);
  });

  test(`${name}: the Check yourself slide has 4 questions with answers`, () => {
    const check = slides.slice(slides.lastIndexOf("title: 'Check yourself'"));
    assert.equal((check.split('answers={')[0].match(/^\s*<>/gm) ?? []).length, 4, 'four questions, each with its own answer');
  });
}
