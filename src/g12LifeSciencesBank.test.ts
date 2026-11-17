import test from 'node:test';
import assert from 'node:assert/strict';
import * as d from './components/diagrams/lifesci/dnaProfile';

// Independent recomputation of every band-position question in the Grade 12 DNA fingerprinting bank (gr12-dna-fingerprinting-t2), using plain
// array logic, not the helpers, so a wrong key in the bank or a wrong helper is caught either way.
const fs = await import('node:fs');
const src = fs.readFileSync('src/curriculum/grade12/life-sciences/term2/dna-fingerprinting/DnaFingerprinting.tsx', 'utf8');
const bankSrc = src.slice(src.indexOf('const bank: CapsItem[] = ['));
const find = (start: string): { prompt: string; answer: string } => {
  const re = new RegExp(`\\{ prompt: '(${start.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^']*(?:\\\\'[^']*)*)'[\\s\\S]*?answer: '([^']*(?:\\\\'[^']*)*)'`);
  const m = bankSrc.match(re);
  assert.ok(m, `no question starts with ${start}`);
  return { prompt: m[1], answer: m[2] };
};
const nums = (text: string): number[][] => [...text.matchAll(/(\d+(?:, \d+)*(?: and \d+)?)/g)].map((x) => x[1].replace(' and ', ', ').split(', ').map(Number));

test('INDEPENDENT: paternity and forensic keys are recomputed with plain arithmetic', () => {
  const mother = [2, 5, 7, 10];
  const child = [2, 4, 7, 9];
  const fromFather = child.filter((b) => !mother.includes(b));
  assert.deepEqual(fromFather, [4, 9]);
  assert.equal(find('A child has bands at positions 2, 4, 7 and 9').answer, fromFather.join(' and '));
  assert.ok(find('Man 1 has bands at 1, 4, 6 and 9').answer.includes('both bands 4 and 9'));
  assert.ok([1, 4, 6, 9].includes(4) && [1, 4, 6, 9].includes(9));
  assert.equal(find('Man 2 has bands at 3, 4, 8 and 10').answer, 'He lacks band 9');
  assert.ok([3, 4, 8, 10].includes(4) && ![3, 4, 8, 10].includes(9));
  const child2 = [1, 3, 6, 8];
  const mother2 = [1, 4, 6, 9];
  assert.equal(find('A child has bands at 1, 3, 6 and 8').answer, child2.filter((b) => !mother2.includes(b)).join(' and '));
  const scene = [1, 4, 5, 8];
  const suspects: Record<string, number[]> = { 'Suspect P': [1, 4, 5, 9], 'Suspect Q': [1, 4, 5, 8], 'Suspect R': [2, 4, 5, 8] };
  const same = Object.keys(suspects).filter((k) => suspects[k].length === scene.length && suspects[k].every((v, i) => v === scene[i]));
  assert.deepEqual(same, ['Suspect Q']);
  assert.equal(find('DNA from a crime scene has bands at 1, 4, 5 and 8').answer, same[0]);
  // the helpers agree
  assert.deepEqual(d.paternalBands(mother, child), fromFather);
  assert.deepEqual(d.suspectsMatching(scene, suspects), same);
  void nums;
});
