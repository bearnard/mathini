import test from 'node:test';
import assert from 'node:assert/strict';
import { inputFor, inverseRule, rulesFitting, twoStep } from './grade6FlowHelpers';
import { applyRule } from './mathsHelpers';

test('flow diagram lesson numbers: outputs, working backwards, finding the rule, two steps', () => {
  assert.equal(applyRule({ op: '×', n: 4 }, 6), 24);
  assert.equal(applyRule({ op: '+', n: 4 }, 6), 10); // the mistake
  assert.equal(applyRule({ op: '÷', n: 5 }, 30), 6);
  assert.equal(applyRule({ op: '+', n: 7 }, 4), 11);
  assert.deepEqual(inverseRule({ op: '+', n: 9 }), { op: '−', n: 9 });
  assert.equal(inputFor({ op: '+', n: 9 }, 17), 8);
  assert.equal(inputFor({ op: '×', n: 6 }, 42), 7);
  assert.equal(inputFor({ op: '+', n: 8 }, 20), 12);
  assert.equal(applyRule({ op: '+', n: 9 }, 8) + 9, 26); // the mistake: adding again
});

test('finding the rule: the first pair alone can fit two rules, all three pairs fit one', () => {
  assert.deepEqual(rulesFitting([[3, 12]]).map((r) => `${r.op}${r.n}`).sort(), ['+9', '×4']);
  assert.deepEqual(rulesFitting([[3, 12], [5, 20], [7, 28]]), [{ op: '×', n: 4 }]);
  assert.deepEqual(rulesFitting([[2, 10], [3, 15]]), [{ op: '×', n: 5 }]);
  assert.equal(applyRule({ op: '+', n: 9 }, 5), 14); // not 20
});

test('two-step rules: order matters', () => {
  assert.deepEqual(twoStep({ op: '×', n: 2 }, { op: '+', n: 1 }, 5), { right: 11, swapped: 12 });
  assert.equal(twoStep({ op: '×', n: 3 }, { op: '+', n: 2 }, 4).right, 14);
});
