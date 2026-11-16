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

const plain = (t: string) => t.replace(/\u00a0/g, ' ');
const find = (task: string, start: string) => {
  const b = banks.find((x) => x.task === task)!;
  const it = b.items.find((x) => plain(x.prompt).startsWith(start));
  assert.ok(it, `${task}: no question starts with: ${start}`);
  return { ...it!, prompt: plain(it!.prompt), answer: plain(it!.answer), options: it!.options.map(plain) };
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

test('numbers in questions never split across lines: no ordinary space between digit groups in a prompt, an option or an explanation', () => {
  for (const it of all) {
    for (const text of [it.prompt, it.explanation ?? '', ...it.options]) {
      assert.ok(!/\d \d{3}(?!\d)/.test(text), `a breakable space inside a number: ${text}`);
    }
  }
});

test('INDEPENDENT: multiplication and division keys are recomputed with plain arithmetic', () => {
  const t2 = 'gr6-multiply-2digit-t2';
  assert.equal(find(t2, 'Estimate 3 487').answer, sp(3000 * 40));
  assert.equal(find(t2, 'Calculate 547 × 45').answer, sp(547 * 45));
  assert.equal(find(t2, '547 × 45 = 547 × 40').answer, sp(547 * 40));
  assert.equal(find(t2, 'What is 547 × 50').answer, sp(547 * 50));
  assert.equal(find(t2, 'To calculate 547 × 42').answer, sp(547 * 6));
  assert.equal(find(t2, 'Calculate 547 × 42').answer, sp(547 * 42));
  assert.equal(find(t2, 'Calculate 2 345 × 67').answer, sp(2345 * 67));
  assert.equal(find(t2, 'Estimate 2 345').answer, sp(2000 * 70));
  assert.equal(find(t2, 'Calculate 3 456 × 23').answer, sp(3456 * 23));
  assert.equal(find(t2, 'In 3 456 × 23').answer, sp(3456 * 20));
  assert.equal(find(t2, 'A bus holds 65').answer, sp(65 * 28));
  assert.equal(find(t2, 'What is 4 506 × 100').answer, sp(450600));
  assert.equal(find(t2, 'A machine makes 235').answer, sp(235 * 24));
  const dv = (n: number, d: number) => `${sp(Math.floor(n / d))}${n % d ? ` remainder ${sp(n % d)}` : ''}`;
  const t2d = 'gr6-divide-2digit-t2';
  assert.equal(find(t2d, 'Calculate 3 447').answer, dv(3447, 17));
  assert.equal(find(t2d, 'What is 200 × 17').answer, sp(200 * 17));
  assert.equal(find(t2d, 'Calculate 1 440').answer, dv(1440, 24));
  assert.equal(find(t2d, 'Calculate 5 640').answer, dv(5640, 24));
  assert.equal(find(t2d, 'Calculate 4 536').answer, dv(4536, 36));
  assert.equal(find(t2d, 'Calculate 1 000 ÷ 12').answer, dv(1000, 12));
  assert.equal(find(t2d, '500 sweets').answer, `${Math.floor(500 / 12)} each and ${500 % 12} left over`);
  assert.equal(find(t2d, 'Estimate 4 217').answer, String(4200 / 20));
  assert.equal(find(t2d, 'Calculate 7 200').answer, dv(7200, 18));
  assert.equal(find(t2d, 'Calculate 1 234').answer, dv(1234, 15));
  assert.equal(find(t2d, '300 learners').answer, `${Math.ceil(300 / 24)} buses`);
  assert.equal(202 * 17 + 13, 3447);
  const t3 = 'gr6-multiply-3digit-t4';
  assert.equal(find(t3, 'Calculate 4 362 × 108').answer, sp(4362 * 108));
  assert.equal(find(t3, 'Estimate 4 362').answer, sp(4000 * 100));
  assert.equal(find(t3, 'In 4 362 × 108, what is the partial product 8').answer, sp(8 * 4362));
  assert.equal(find(t3, 'In 4 362 × 108, what is the partial product 100').answer, sp(100 * 4362));
  assert.equal(find(t3, 'Calculate 3 245').answer, sp(3245 * 126));
  assert.equal(find(t3, 'Calculate 2 457').answer, sp(2457 * 312));
  assert.equal(find(t3, 'Calculate 1 205').answer, sp(1205 * 204));
  assert.equal(find(t3, 'Calculate 5 400').answer, sp(5400 * 120));
  assert.equal(find(t3, 'A concert').answer, `R${sp(1250 * 180)}`);
  assert.equal(find(t3, 'A factory fills').answer, sp(3125 * 168));
  assert.equal(find(t3, 'Estimate 6 812').answer, sp(7000 * 400));
  assert.equal(find(t3, 'What is 3 456 × 0').answer, '0');
  const t3d = 'gr6-divide-3digit-t4';
  assert.equal(find(t3d, 'Calculate 3 484').answer, dv(3484, 132));
  assert.equal(find(t3d, 'In 3 484 ÷ 132').answer, sp(20 * 132));
  assert.equal(find(t3d, '3 484 − 2 640').answer, sp(3484 - 2640));
  assert.equal(find(t3d, 'Calculate 8 640').answer, dv(8640, 120));
  assert.equal(find(t3d, 'Calculate 6 125').answer, dv(6125, 125));
  assert.equal(find(t3d, 'Calculate 9 876').answer, dv(9876, 123));
  assert.equal(find(t3d, 'Calculate 5 000').answer, dv(5000, 150));
  assert.equal(find(t3d, 'Estimate 7 812').answer, String(8000 / 200));
  assert.equal(find(t3d, 'R12 600').answer, `R${sp(12600 / 105)}`);
  assert.equal(find(t3d, '2 000 bricks').answer, `${Math.floor(2000 / 150)} full pallets and ${2000 % 150} bricks left over`);
  assert.equal(find(t3d, 'Calculate 4 500').answer, dv(4500, 100));
  assert.equal(find(t3d, 'How many packets').answer, sp(3000 / 125));
  assert.equal(find(t3d, 'Calculate 7 245').answer, dv(7245, 105));
  assert.equal(80 * 123 + 36, 9876);
});
