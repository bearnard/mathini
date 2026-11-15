import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { uncoveredAnswers } from '../science/scienceHelpers';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '../../../curriculum');

const LESSONS: Record<string, { slides: number; uses: string[] }> = {
  'grade7/geography/term2/natural-hazards-volcanoes-earthquakes-and-floods/NaturalHazardsVolcanoesEarthquakesAndFloods.tsx': { slides: 4, uses: ['PlateBoundary', 'FloodPlain', 'Compare'] },
  'grade7/geography/term3/population-growth-and-change/PopulationGrowthAndChange.tsx': { slides: 5, uses: ['GrowthLines', 'AgeShapes', 'Terms', 'project('] },
  'grade8/geography/term2/climate-regions-in-south-africa-and-the-world/ClimateRegionsInSouthAfricaAndTheWorld.tsx': { slides: 5, uses: ['ClimatePatterns', 'MountainRain', 'Terms', 'tempAtHeight('] },
  'grade8/geography/term3/settlement-and-urbanisation/SettlementAndUrbanisation.tsx': { slides: 5, uses: ['SettlementPatterns', 'CityZones', 'FlowDiagram', 'URBANISATION_STEPS', 'Compare'] },
  'grade8/geography/term4/transport-and-trade/TransportAndTrade.tsx': { slides: 5, uses: ['FlowDiagram', 'Terms', 'EXPORT_STEPS', 'NumberedSteps'] },
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
    assert.equal((check.match(/<li>/g) ?? []).length, 8);
  });
}
