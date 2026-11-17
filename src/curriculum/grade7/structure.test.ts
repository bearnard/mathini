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
  assert.deepEqual(where('ns'), [['biosphere-biodiversity-and-reproduction'], ['matter-mixtures-acids-and-bases'], ['energy-transfer-heat-and-motion'], ['sun-earth-relationship-and-gravity']]);
  assert.deepEqual(where('tech'), [['mechanical-systems-and-control'], ['design-process-and-structures'], ['electrical-systems-and-control'], ['processing-materials-and-properties']]);
});

test('Life Orientation keeps PSW and PE, Creative Arts has the four arts lessons, and topic ids are unchanged', () => {
  assert.deepEqual(where('lo'), [1, 2, 3, 4].map((n) => [`gr7-personal-social-wellbeing-t${n}`, `gr7-physical-education-t${n}`]));
  assert.deepEqual(where('ca'), [1, 2, 3, 4].map((n) => [`gr7-creative-arts-t${n}`]));
});

test('no Grade 7 term is empty', () => {
  for (const s of grade7.subjects) for (const t of s.terms) assert.ok(t.topics.length > 0, `${s.id} term ${t.id}`);
});

test('the 24 restructured lessons keep their original task slugs and API subject codes', async () => {
  const { readdirSync, readFileSync, statSync } = await import('node:fs');
  const { join } = await import('node:path');
  const walk = (d: string): string[] => readdirSync(d).flatMap((e) => (statSync(join(d, e)).isDirectory() ? walk(join(d, e)) : [join(d, e)]));
  const found: string[] = [];
  for (const dir of ['natural-sciences', 'technology', 'life-orientation', 'creative-arts']) {
    for (const f of walk(join(import.meta.dirname, dir)).filter((f) => f.endsWith('.tsx'))) {
      const src = readFileSync(f, 'utf8');
      const task = src.match(/\btask="([^"]+)"/)?.[1];
      const api = src.match(/apiPath="\/api\/caps\/([a-z]+)"/)?.[1];
      found.push(`${task} ${api}`);
    }
  }
  const nstTasks = ['biosphere-biodiversity-and-reproduction-t1', 'design-process-and-structures-t1', 'matter-mixtures-acids-and-bases-t2', 'processing-materials-and-properties-t2', 'energy-transfer-heat-and-motion-t3', 'mechanical-systems-and-control-t3', 'sun-earth-relationship-and-gravity-t4', 'electrical-systems-and-control-t4'].map((s) => `gr7-${s} nst`);
  const lskTasks = [1, 2, 3, 4].flatMap((n) => ['personal-social-wellbeing', 'physical-education', 'creative-arts'].map((s) => `gr7-${s}-t${n} lsk`));
  assert.deepEqual(found.sort(), [...nstTasks, ...lskTasks].sort());
});
