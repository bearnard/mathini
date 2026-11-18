import test from 'node:test';
import assert from 'node:assert/strict';
import { grade7 } from './index';

// Grade 7 is Senior Phase CAPS: Natural Sciences and Technology are two subjects, the subject is Life Orientation (not Life Skills), and
// Creative Arts is its own subject. Task ids never change in a restructure (progress, review cards and D1 questions key on them).
const subject = (id: string) => grade7.subjects.find((s) => s.id === id)!;
const where = (s: string) => subject(s).terms.map((t) => t.topics.map((p) => p.id));

test('Grade 7 subjects', () => {
  assert.deepEqual(grade7.subjects.map((s) => `${s.id}:${s.title}`), [
    'eng:English HL', 'afr:Afrikaans FAL', 'xho:isiXhosa SAL', 'lo:Life Orientation', 'ca:Creative Arts',
    'math:Mathematics', 'ns:Natural Sciences', 'tech:Technology', 'geo:Geography', 'his:History',
  ]);
});

test('Natural Sciences and Technology lessons sit in their CAPS terms', () => {
  assert.deepEqual(where('ns'), [['biosphere-biodiversity-and-reproduction', 'variation'], ['matter-mixtures-acids-and-bases', 'periodic-table'], ['energy-transfer-heat-and-motion', 'national-electricity-grid'], ['sun-earth-relationship-and-gravity', 'history-of-astronomy']]);
  assert.deepEqual(where('tech'), [['mechanical-systems-and-control', 'graphical-communication'], ['design-process-and-structures'], ['electrical-systems-and-control'], ['processing-materials-and-properties']]);
});

test('Life Orientation keeps PSW and PE, Creative Arts has the four arts lessons, and topic ids are unchanged', () => {
  // The Senior Phase LO gap lessons (#972) sit between PSW and PE in their CAPS terms.
  const extra: Record<number, string[]> = {
    1: ['gr7-reading-studying-memory-t1'],
    2: ['gr7-dealing-with-abuse-t2'],
    3: ['gr7-environmental-health-t3'],
    4: ['gr7-diet-and-nutrition-t4', 'gr7-common-diseases-tb-diabetes-epilepsy-t4', 'gr7-common-diseases-obesity-anorexia-hiv-t4', 'gr7-oral-traditions-and-scriptures-t4'],
  };
  assert.deepEqual(where('lo'), [1, 2, 3, 4].map((n) => [`gr7-personal-social-wellbeing-t${n}`, ...extra[n], `gr7-physical-education-t${n}`]));
  assert.deepEqual(where('ca'), [1, 2, 3, 4].map((n) => [`gr7-creative-arts-t${n}`]));
});

test('no Grade 7 term is empty', () => {
  for (const s of grade7.subjects) for (const t of s.terms) assert.ok(t.topics.length > 0, `${s.id} term ${t.id}`);
});

test('the restructured lessons keep their original task slugs and API subject codes, and new ones are added here', async () => {
  const { readdirSync, readFileSync, statSync } = await import('node:fs');
  const { join } = await import('node:path');
  const walk = (d: string): string[] => readdirSync(d).flatMap((e) => (statSync(join(d, e)).isDirectory() ? walk(join(d, e)) : [join(d, e)]));
  const found: string[] = [];
  for (const dir of ['natural-sciences', 'technology', 'life-orientation', 'creative-arts']) {
    for (const f of walk(join(import.meta.dirname, dir)).filter((f) => f.endsWith('.tsx'))) {
      const src = readFileSync(f, 'utf8');
      const task = src.match(/\btask="([^"]+)"/)?.[1];
      const api = src.match(/apiPath="\/api\/caps\/([a-z]+)"/)?.[1];
      if (task) found.push(`${task} ${api}`);
    }
  }
  const nstTasks = ['biosphere-biodiversity-and-reproduction-t1', 'design-process-and-structures-t1', 'matter-mixtures-acids-and-bases-t2', 'processing-materials-and-properties-t2', 'energy-transfer-heat-and-motion-t3', 'mechanical-systems-and-control-t3', 'sun-earth-relationship-and-gravity-t4', 'electrical-systems-and-control-t4', 'variation-t1', 'history-of-astronomy-t4', 'periodic-table-t2', 'national-electricity-grid-t3', 'graphical-communication-t1'].map((s) => `gr7-${s} nst`);
  const lskTasks = [1, 2, 3, 4].flatMap((n) => ['personal-social-wellbeing', 'physical-education', 'creative-arts'].map((s) => `gr7-${s}-t${n} lsk`));
  const loGaps = ['reading-studying-memory-t1', 'dealing-with-abuse-t2', 'environmental-health-t3', 'diet-and-nutrition-t4', 'common-diseases-tb-diabetes-epilepsy-t4', 'common-diseases-obesity-anorexia-hiv-t4', 'oral-traditions-and-scriptures-t4'].map((s) => `gr7-${s} lsk`);
  assert.deepEqual(found.sort(), [...nstTasks, ...lskTasks, ...loGaps].sort());
});
