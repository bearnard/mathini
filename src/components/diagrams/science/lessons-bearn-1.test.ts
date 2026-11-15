import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { uncoveredAnswers } from './scienceHelpers';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '../../../curriculum/grade7/natural-sciences-technology');

const LESSONS: Record<string, { slides: number; uses: string[] }> = {
  'term1/biosphere-biodiversity-and-reproduction/BiosphereBiodiversityAndReproduction.tsx': { slides: 5, uses: ['KeyTree', 'FlowerParts', 'Compare'] },
  'term1/design-process-and-structures/DesignProcessAndStructures.tsx': { slides: 5, uses: ['NumberedSteps', 'StructureTypes', 'TensionCompression', 'BracedFrame'] },
  'term2/matter-mixtures-acids-and-bases/MatterMixturesAcidsAndBases.tsx': { slides: 6, uses: ['ParticleStates', 'FiltrationSetup', 'PhBar', 'litmus'] },
  'term2/processing-materials-and-properties/ProcessingMaterialsAndProperties.tsx': { slides: 6, uses: ['NumberedSteps', 'Terms'] },
  'term3/energy-transfer-heat-and-motion/EnergyTransferHeatAndMotion.tsx': { slides: 5, uses: ['EnergyHill', 'HeatTransfer', 'efficiency'] },
};

const read = (f: string) => fs.readFileSync(path.join(root, f), 'utf8');

for (const [file, want] of Object.entries(LESSONS)) {
  const name = path.basename(file, '.tsx');
  const src = read(file);
  const slides = src.slice(0, src.indexOf('const bank'));

  test(`${name}: ${want.slides} slides, the last one is "Check yourself"`, () => {
    const titles = [...slides.matchAll(/^\s{4}title: '([^']+)'/gm)].map((m) => m[1]);
    assert.equal(titles.length, want.slides);
    assert.equal(titles[titles.length - 1], 'Check yourself');
  });

  test(`${name}: every slide but the last has a rule, a worked example and a common mistake`, () => {
    const body = slides.slice(slides.indexOf('const learnSteps'));
    const parts = body.split(/\n\s{2}\{\n\s{4}title:/).slice(1, -1);
    assert.equal(parts.length, want.slides - 1);
    for (const p of parts) for (const tag of ['<Rule>', '<Worked', '<Mistake>']) assert.ok(p.includes(tag), `${tag} missing in a slide`);
  });

  test(`${name}: the lesson uses its pictures`, () => {
    for (const u of want.uses) assert.ok(slides.includes(u), `${u} not used`);
  });

  test(`${name}: every bank answer can be answered from the slides`, () => {
    assert.deepEqual(uncoveredAnswers(src), []);
  });

  test(`${name}: the Check yourself slide has 4 questions with answers`, () => {
    const check = slides.slice(slides.lastIndexOf("title: 'Check yourself'"));
    assert.equal((check.match(/<li>/g) ?? []).length, 8);
  });
}
