import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { uncoveredAnswers } from '../science/scienceHelpers';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '../../../curriculum');

const LESSONS: Record<string, { slides: number; uses: string[] }> = {
  'grade7/geography/term1/map-skills-in-the-local-area/MapSkillsInTheLocalArea.tsx': { slides: 6, uses: ['NeighbourhoodMap', 'GlobeLines', 'NumberedSteps', 'ROUTE_STEPS', 'direction(', 'routeMetres('] },
  'grade8/geography/term1/maps-globes-and-satellite-images/MapsGlobesAndSatelliteImages.tsx': { slides: 6, uses: ['GlobeLines', 'RatioRuler', 'TimeStrip', 'DateLine', 'SeasonsTilt', 'groundMetres(', 'hoursBetween('] },
  'grade7/history/term4/conflict-and-cooperation-on-the-cape-frontiers/ConflictAndCooperationOnTheCapeFrontiers.tsx': { slides: 6, uses: ['TimelineStrip', 'CAPE_EVENTS', 'Compare', 'Terms'] },
  'grade8/history/term4/world-war-i/WorldWarI.tsx': { slides: 6, uses: ['TimelineStrip', 'WW1_EVENTS', 'TrenchSection', 'WW1_CAUSE_STEPS', 'Compare', 'Terms'] },
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
