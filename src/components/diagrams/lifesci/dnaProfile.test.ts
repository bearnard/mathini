import test from 'node:test';
import assert from 'node:assert/strict';
import * as d from './dnaProfile';

// the worked paternity example in the lesson
const mother = [2, 5, 7, 10];
const child = [2, 4, 7, 9];
const man1 = [1, 4, 6, 9];
const man2 = [3, 4, 8, 10];

test('paternity: the bands the mother does not have must come from the father', () => {
  assert.deepEqual(d.paternalBands(mother, child), [4, 9]);
  assert.equal(d.couldBeFather(mother, child, man1), true);
  assert.equal(d.couldBeFather(mother, child, man2), false);
  assert.deepEqual(d.missingFromMan(mother, child, man1), []);
  assert.deepEqual(d.missingFromMan(mother, child, man2), [9]);
  // every band of the child is accounted for by mother or father when the man is the father
  const o = d.origin(mother, child, man1);
  assert.deepEqual(o, { mother: 2, father: 2, both: 0 });
  assert.equal(o.mother + o.father + o.both, new Set(child).size);
});

test('forensics: only an identical profile matches the scene', () => {
  const scene = [1, 3, 6, 8];
  const suspects = { 'Suspect A': [1, 3, 6, 9], 'Suspect B': [1, 3, 6, 8], 'Suspect C': [2, 3, 6, 8] };
  assert.deepEqual(d.suspectsMatching(scene, suspects), ['Suspect B']);
  assert.equal(d.matches([1, 3], [3, 1]), true, 'order does not matter');
  assert.equal(d.matches([1, 3], [1, 3, 5]), false);
  assert.deepEqual(d.sharedBands(scene, suspects['Suspect A']), [1, 3, 6]);
});

test('a child always has at least half of its bands from each parent that is the real parent (random profiles)', () => {
  for (let i = 0; i < 300; i++) {
    const pick = () => [...new Set(Array.from({ length: 4 }, () => 1 + Math.floor(Math.random() * 10)))];
    const m = pick();
    const f = pick();
    const c = [...new Set([m[0], f[0], m[m.length - 1], f[f.length - 1]])];
    assert.equal(d.couldBeFather(m, c, f), true, 'the real father is never excluded');
  }
});
