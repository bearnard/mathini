import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkLessons } from '../grade6/standardCheck';

const here = path.dirname(fileURLToPath(import.meta.url));

const LESSONS = {
  'grade5/term4/history/AncientEgypt.tsx': { slides: 5, uses: ['NileValley', 'SocietyPyramid'] },
  'grade5/term1/geography/MapSkills.tsx': { slides: 5, uses: ['CompassRose', 'ScaleBar'] },
  'grade5/term2/geography/PhysicalFeatures.tsx': { slides: 4, uses: ['LandProfile'] },
  'grade5/term3/geography/WeatherClimateVegetation.tsx': { slides: 5, uses: ['RainGauge'] },
  'grade5/term4/geography/MineralsMining.tsx': { slides: 6, uses: ['MiningTypes'] },
};

checkLessons(LESSONS);

const ASSESSMENTS = [
  'term5/history/FinalAssessment.tsx',
  'term5/geography/GeographyAssessment.tsx',
  'term5/life-skills/LifeSkillsAssessment.tsx',
];

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

test('no lesson or lesson question repeats an assessment question word for word', () => {
  const asked = ASSESSMENTS.flatMap((f) => {
    const src = fs.readFileSync(path.join(here, f), 'utf8');
    return [...src.matchAll(/text: "((?:[^"\\]|\\.)*)"/g)].map((m) => norm(m[1]));
  });
  assert.ok(asked.length >= 90);
  for (const file of Object.keys(LESSONS)) {
    const src = norm(fs.readFileSync(path.join(here, '..', file), 'utf8'));
    for (const q of asked) assert.ok(!src.includes(q), `${file} repeats an assessment question: ${q}`);
  }
});

test('every Grade 5 lesson is reachable from the Grade 5 index', () => {
  const index = fs.readFileSync(path.join(here, 'index.ts'), 'utf8');
  for (const file of Object.keys(LESSONS)) {
    const rel = './' + file.replace(/^grade5\//, '').replace(/\.tsx$/, '');
    assert.ok(index.includes(rel), `${rel} is not in the index`);
  }
});
