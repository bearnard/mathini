import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BASE_NAME, complement, hydrogenBonds, PAIR, rungs } from './dna';

test('A pairs with T and C pairs with G, both ways round', () => {
  assert.deepEqual(PAIR, { A: 'T', T: 'A', C: 'G', G: 'C' });
  for (const b of ['A', 'T', 'C', 'G'] as const) assert.equal(PAIR[PAIR[b]], b);
  assert.equal(complement('ATGC'), 'TACG');
  assert.equal(complement(complement('GATTACA')), 'GATTACA');
  assert.throws(() => complement('AUGC'), 'U is RNA, not DNA');
});

test('two hydrogen bonds for A-T and three for C-G', () => {
  assert.equal(hydrogenBonds('A'), 2);
  assert.equal(hydrogenBonds('T'), 2);
  assert.equal(hydrogenBonds('C'), 3);
  assert.equal(hydrogenBonds('G'), 3);
  const r = rungs('ATGC');
  assert.deepEqual(r.map((x) => `${x.left}${x.right}${x.bonds}`), ['AT2', 'TA2', 'GC3', 'CG3']);
  assert.equal(BASE_NAME.A, 'adenine');
});

test('the lesson shows the picture next to the pairing rule', () => {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade12/life-sciences/term1/dna-protein-synthesis/DNAProteinSynthesis.tsx'), 'utf8');
  assert.ok(lesson.includes('DnaBasePairing'));
  assert.ok(lesson.includes('adenine pairs with thymine and cytosine pairs with guanine'));
});
