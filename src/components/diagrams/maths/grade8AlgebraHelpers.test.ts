import test from 'node:test';
import assert from 'node:assert/strict';
import { collectTerms, evaluate, expand, exprText, factorOut, isLike } from './grade8AlgebraHelpers';

test('exprText writes terms with real minus signs', () => {
  assert.equal(exprText([{ n: 5, letter: 'm' }, { n: 4 }]), '5m + 4');
  assert.equal(exprText([{ n: 5, letter: 'x' }, { n: -10 }]), '5x − 10');
  assert.equal(exprText([{ n: -3, letter: 'a' }, { n: 12 }]), '−3a + 12');
  assert.equal(exprText([{ n: 1, letter: 'x' }, { n: 0 }]), 'x');
  assert.equal(exprText([]), '0');
});

test('like terms and collecting', () => {
  assert.ok(isLike({ n: 8, letter: 'x' }, { n: -3, letter: 'x' }));
  assert.ok(!isLike({ n: 8, letter: 'x' }, { n: 8, letter: 'x²' }));
  assert.ok(!isLike({ n: 8, letter: 'x' }, { n: 8 }));
  assert.deepEqual(collectTerms([{ n: 7, letter: 'a' }, { n: -3, letter: 'a' }]), [{ n: 4, letter: 'a' }]);
  assert.deepEqual(collectTerms([{ n: 2, letter: 'm' }, { n: 5 }, { n: 3, letter: 'm' }, { n: -1 }]), [{ n: 5, letter: 'm' }, { n: 4 }]);
});

test('expanding, factorising and substituting', () => {
  assert.deepEqual(expand(5, [{ n: 1, letter: 'x' }, { n: -2 }]), [{ n: 5, letter: 'x' }, { n: -10 }]);
  assert.deepEqual(expand(-3, [{ n: 1, letter: 'a' }, { n: -4 }]), [{ n: -3, letter: 'a' }, { n: 12 }]);
  assert.deepEqual(factorOut(6, 12), { k: 6, p: 1, q: 2 });
  assert.deepEqual(factorOut(4, 6), { k: 2, p: 2, q: 3 });
  assert.deepEqual(factorOut(5, 20), { k: 5, p: 1, q: 4 });
  assert.equal(evaluate([{ n: 3, letter: 'p' }, { n: 2 }], 4), 14);
  assert.equal(evaluate([{ n: 2, letter: 'n' }, { n: -7 }], 10), 13);
});
