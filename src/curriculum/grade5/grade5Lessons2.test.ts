import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkLessons } from '../grade6/standardCheck';

const here = path.dirname(fileURLToPath(import.meta.url));

const LESSONS = {
  'grade5/term1/life-skills/FestivalsCustoms.tsx': { slides: 4 },
  'grade5/term2/life-skills/HealthyEating.tsx': { slides: 4, uses: ['FoodGroups'] },
  'grade5/term3/life-skills/LocalEnvironment.tsx': { slides: 4, uses: ['FlowDiagram'] },
  'grade5/term4/life-skills/SubstanceAbuse.tsx': { slides: 4 },
  'grade5/term4/life-skills/TbHiv.tsx': { slides: 4 },
};

checkLessons(LESSONS);

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

test('no lesson or lesson question repeats an assessment question word for word', () => {
  const src = fs.readFileSync(path.join(here, 'term5/life-skills/LifeSkillsAssessment.tsx'), 'utf8');
  const asked = [...src.matchAll(/text: "((?:[^"\\]|\\.)*)"/g)].map((m) => norm(m[1]));
  assert.equal(asked.length, 30);
  for (const file of Object.keys(LESSONS)) {
    const text = norm(fs.readFileSync(path.join(here, '..', file), 'utf8'));
    for (const q of asked) assert.ok(!text.includes(q), `${file} repeats an assessment question: ${q}`);
  }
});

test('every Grade 5 Life Skills lesson is reachable from the Grade 5 index', () => {
  const index = fs.readFileSync(path.join(here, 'index.ts'), 'utf8');
  for (const file of Object.keys(LESSONS)) {
    const rel = './' + file.replace(/^grade5\//, '').replace(/\.tsx$/, '');
    assert.ok(index.includes(rel), `${rel} is not in the index`);
  }
});
