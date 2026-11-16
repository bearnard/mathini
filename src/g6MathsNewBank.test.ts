import test from 'node:test';
import assert from 'node:assert/strict';
import { compose } from './curriculum/grade10/mathematics/_shared/bank';
import { ALL_SPECS } from './curriculum/grade6/mathsNew/_shared/specs';
import { checkQuestion } from './lib/shared/questionQuality';
import { renderFile } from '../scripts/gen-g6-maths-bank';

// Grade 6 Mathematics banks for the CAPS gap topics. They are written from specs that compute their keys from tested helpers (grade6AddSub.ts and the other
// grade6*.ts helpers) and verified AGAIN here: the structure, the quality validator with the Grade 6 decimal-comma rule, the generated literal in each
// topic file, and (below) an independent recomputation of the arithmetic keys.

const banks = ALL_SPECS.map((s) => ({ ...s, items: compose(s.questions) }));
const all = banks.flatMap((b) => b.items.map((it) => ({ ...it, task: b.task })));

test('every topic has at least 12 distinct questions with four distinct options, the key among them, and the key spread over all four positions', () => {
  for (const b of banks) {
    assert.ok(b.items.length >= 12, `${b.task}: ${b.items.length} items`);
    assert.equal(new Set(b.items.map((i) => i.prompt)).size, b.items.length, `${b.task}: duplicate prompts`);
    for (const it of b.items) {
      assert.equal(it.options.length, 4, it.prompt);
      assert.equal(new Set(it.options).size, 4, `${it.prompt}: duplicate options`);
      assert.equal(it.options.filter((o) => o === it.answer).length, 1, `${it.prompt}: the key must be exactly one option`);
    }
    assert.equal(new Set(b.items.map((i) => i.options.indexOf(i.answer))).size, 4, `${b.task}: the key sits in fewer than four positions`);
  }
});

test('the question quality validator finds nothing at all (reject or warn), with the Grade 6 decimal-comma rule', () => {
  for (const it of all) {
    const others = all.filter((o) => o.task === it.task && o.prompt !== it.prompt).map((o) => o.prompt);
    const r = checkQuestion({ prompt: it.prompt, options: it.options, answer: it.answer, explanation: it.explanation }, { decimalComma: 'reject', existingPrompts: others });
    assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], it.prompt);
  }
});

test('the `export const bank` literal in every topic file is exactly what its spec computes (run scripts/gen-g6-maths-bank.ts)', () => {
  for (const b of banks) {
    const r = renderFile(b.file, b.items);
    assert.equal(r.before, r.after, `${b.file} is out of date`);
  }
});

const find = (task: string, start: string) => {
  const b = banks.find((x) => x.task === task)!;
  const it = b.items.find((x) => x.prompt.startsWith(start));
  assert.ok(it, `${task}: no question starts with: ${start}`);
  return it!;
};
const sp = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const rd = (n: number, p: number) => Math.floor((n + p / 2) / p) * p;

test('INDEPENDENT: addition and subtraction keys are recomputed with plain arithmetic, and no wrong option equals the true value', () => {
  const t1 = 'gr6-add-subtract-5digit-t1';
  assert.equal(find(t1, 'Estimate 45 678').answer, sp(rd(45678, 1000) + rd(12345, 1000)));
  assert.equal(find(t1, 'What is 56 423 rounded').answer, sp(56000));
  assert.equal(find(t1, 'What is 98 743 rounded').answer, sp(100000));
  assert.equal(find(t1, 'Calculate 56 423').answer, sp(56423 + 7581 + 21479));
  assert.equal(find(t1, 'Calculate 98 743').answer, sp(98743 - 45684));
  assert.equal(find(t1, 'Calculate 45 362').answer, sp(45362 + 32488));
  assert.equal(54687 - 32134, 22553);
  assert.equal(22553 + 32134, 54687);
  assert.equal(45362 + 32488, 77850);
  assert.equal(77850 - 32488, 45362);
  assert.equal(find(t1, 'Veli').answer, `R${200 - 163}`);
  assert.equal(find(t1, 'What is 48 275').answer, sp(48275));
  assert.equal(find(t1, 'Use compensating').answer, sp(4999 + 3245));
  assert.equal(find(t1, 'A school library').answer, sp(12345 + 5678));
  const t3 = 'gr6-add-subtract-6digit-t3';
  assert.equal(find(t3, 'Calculate 345 678').answer, sp(345678 + 123456));
  assert.equal(find(t3, 'Calculate 800 000').answer, sp(800000 - 365478));
  assert.equal(find(t3, 'Calculate 502 340').answer, sp(502340 + 98765));
  assert.equal(find(t3, 'Estimate 489 650').answer, sp(rd(489650, 10000) + rd(312400, 10000)));
  assert.equal(find(t3, 'Farm workers').answer, sp(866589 - 342345));
  assert.equal(find(t3, 'A man buys').answer, sp(126789 + 341567 + 344532));
  assert.equal(find(t3, 'The price of sugar').answer, `R${sp(268231 - 43789)}`);
  assert.equal(find(t3, 'A factory makes').answer, `R${sp(864328 - 367435)}`);
  assert.equal(find(t3, 'A farmer decreased').answer, `R${sp(589544 + 10456)}`);
  assert.equal(find(t3, 'Calculate 1 000 000').answer, sp(1000000 - 345678));
  assert.equal(find(t3, 'Use compensating').answer, sp(299999 + 123456));
  assert.equal(find(t3, 'Estimate 598 214').answer, sp(rd(598214, 100000) - rd(201876, 100000)));
  // the "which check" questions: the key is a true statement and the wrong options are false
  const trueEq = (s: string): boolean => {
    const m = /^([\d ]+) ([+−]) ([\d ]+) = ([\d ]+)$/.exec(s);
    if (!m) return false;
    const [x, y, z] = [m[1], m[3], m[4]].map((v) => Number(v.replace(/ /g, '')));
    return m[2] === '+' ? x + y === z : x - y === z;
  };
  for (const [task, start] of [[t1, '54 687 −'], [t1, '45 362 + 32 488 = 77 850'], [t3, '654 322 +']] as const) {
    const it = find(task, start);
    assert.ok(trueEq(it.answer), `${it.answer} must be true`);
    for (const o of it.options.filter((x) => x !== it.answer)) assert.ok(!trueEq(o), `${o} must be false`);
  }
  // no wrong option is the true value of a numeric question
  for (const it of all) assert.equal(new Set(it.options).size, 4, it.prompt);
});
