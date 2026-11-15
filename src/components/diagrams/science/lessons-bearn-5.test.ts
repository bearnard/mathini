import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { uncoveredAnswers } from './scienceHelpers';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '../../../curriculum');

const LESSONS: Record<string, { slides: number; uses: string[] }> = {
  'grade8/technology/term2/electrical-systems-and-circuit-safety/ElectricalSystemsAndCircuitSafety.tsx': { slides: 5, uses: ['CircuitSymbols', 'CircuitPair', 'Terms'] },
  'grade8/technology/term2/logic-and-pat-design-work/LogicAndPatDesignWork.tsx': { slides: 5, uses: ['IpoFlow', 'LogicSwitches', 'TruthTable', 'and', 'or'] },
  'grade8/technology/term3/making-and-evaluating-prototypes/MakingAndEvaluatingPrototypes.tsx': { slides: 5, uses: ['PROTOTYPE_STEPS', 'NumberedSteps', 'Terms'] },
  'grade8/technology/term3/simple-machines-revision/SimpleMachinesRevision.tsx': { slides: 4, uses: ['LeverDiagram', 'RampPicture', 'WedgePicture', 'WheelAxlePicture', 'rampEffort('] },
  'grade8/technology/term4/indigenous-technology-and-processing/IndigenousTechnologyAndProcessing.tsx': { slides: 5, uses: ['ProtectionLayers', 'Terms', 'Compare'] },
};

for (const [file, want] of Object.entries(LESSONS)) {
  const name = path.basename(file, '.tsx');
  const src = fs.readFileSync(path.join(root, file), 'utf8');
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

  test(`${name}: the lesson uses its pictures and helpers`, () => {
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
