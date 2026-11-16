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

test('INDEPENDENT: percentage and temperature keys are recomputed with plain arithmetic', () => {
  const tp = 'gr6-percentages-t3';
  const pct = (n: number) => `${n}%`;
  assert.equal(find(tp, 'What is 1/10').answer, pct((1 * 100) / 10));
  assert.equal(find(tp, 'What is 7/100').answer, pct(7));
  assert.equal(find(tp, 'What is 3/10').answer, pct((3 * 100) / 10));
  assert.equal(find(tp, 'What is 1/4').answer, pct(100 / 4));
  assert.equal(find(tp, 'What is 3/4').answer, pct((3 * 100) / 4));
  assert.equal(find(tp, 'What is 1/5').answer, pct(100 / 5));
  assert.equal(find(tp, 'A grid has 100 squares').answer, pct(40));
  assert.equal(find(tp, 'Which decimal fraction').answer, String(25 / 100).replace('.', ','));
  assert.equal(find(tp, 'What is 0,3').answer, pct(0.3 * 100));
  assert.equal(find(tp, 'What is 25% of R300').answer, `R${300 / 4}`);
  assert.equal(find(tp, 'What is 50% of 80').answer, String(80 / 2));
  assert.equal(find(tp, 'What is 10% of R450').answer, `R${450 / 10}`);
  assert.equal(find(tp, 'A jacket costs R450').answer, `R${450 - 450 / 10}`);
  assert.equal(find(tp, 'Sipho gets 18').answer, pct((18 / 20) * 100));
  // the unit-fraction route and the percentage route agree
  for (const [percent, d] of [[50, 2], [25, 4], [20, 5], [10, 10]] as const) for (const w of [20, 40, 80, 100, 300]) assert.equal((percent * w) / 100, w / d);
  const tt = 'gr6-temperature-t3';
  assert.equal(find(tt, 'At what temperature does pure water freeze').answer, '0 °C');
  assert.equal(find(tt, 'At what temperature does pure water boil').answer, '100 °C');
  assert.equal(find(tt, 'What is the normal temperature').answer, '37 °C');
  assert.equal(find(tt, 'On a thermometer, 0, 10, 20 and 30 are numbered').answer, `${20 + 3 * 2} °C`);
  assert.equal(find(tt, 'The mercury on a thermometer is half way').answer, `${(20 + 30) / 2} °C`);
  assert.equal(find(tt, 'Which of these temperatures is higher than 37,0').answer, '37,2 °C');
  assert.equal(find(tt, 'Which of these temperatures is the lowest').answer, `${Math.min(12, 21, 9, 19)} °C`);
  assert.equal(find(tt, 'The highest temperature one day is 24').answer, `${24 - 11} °C`);
  assert.equal(find(tt, 'A learner has a temperature of 37,2').answer, `${String(Math.round((372 - 367)) / 10).replace('.', ',')} °C`);
  assert.equal(find(tt, "At 6 o'clock").answer, `${14 + 9} °C`);
  assert.equal(find(tt, 'The temperature is 14').answer, `${14 - 6} °C`);
}
);

test('INDEPENDENT: probability and position keys are recomputed with plain arithmetic', () => {
  const tp = 'gr6-probability-t4';
  assert.equal(find(tp, 'What are the possible outcomes when you toss a coin').answer, 'Heads or tails');
  assert.equal(find(tp, 'How many possible outcomes are there when you roll a die').answer, '6');
  assert.equal(find(tp, 'A spinner has 6 equal sections').answer, String(new Set(['red', 'blue', 'red', 'green', 'blue', 'red']).size));
  assert.equal(find(tp, 'A spinner has 8 equal sections').answer, '8');
  assert.equal(find(tp, 'In a tally table').answer, String(2 * 5 + 3));
  assert.equal(find(tp, 'A coin is tossed 20 times. It lands heads 12').answer, String(20 - 12));
  assert.equal(find(tp, 'A coin is tossed 30 times').answer, String(18 - (30 - 18)));
  const f = [7, 9, 5, 8, 11, 10];
  assert.equal(f.reduce((a, b) => a + b, 0), 50);
  assert.equal(find(tp, 'Rolling a die 50 times gave').answer, String(f.indexOf(Math.max(...f)) + 1));
  assert.equal(find(tp, 'In an experiment a die is rolled 50 times').answer, String(f.indexOf(Math.min(...f)) + 1));
  assert.equal(find(tp, 'A die is rolled 50 times. The numbers 1, 2, 4').answer, String(50 - (7 + 9 + 8 + 11 + 10)));
  assert.equal(find(tp, 'A spinner is spun 40 times').answer, String(40 - 15 - 12 - 6));
  assert.equal(find(tp, 'A coin experiment has 17 heads').answer, String(17 + 10));
  assert.equal(find(tp, 'Three groups toss a coin').answer, String(20 + 20 + 10));
  assert.equal(find(tp, 'A die is rolled 20 times and the number 4').answer, String(20 - 6));
  const tg = 'gr6-position-movement-t4';
  const L = 'The letters run across the top and the numbers run down the side. ';
  assert.equal(find(tg, L + 'What is the grid reference of the square in column D').answer, 'D4');
  assert.equal(find(tg, L + 'A park is in column B').answer, 'B5');
  assert.equal(find(tg, 'Which letter shows the column').answer, 'E');
  assert.equal(find(tg, L + 'Start at B2 and move 3').answer, 'E2');
  assert.equal(find(tg, L + 'Start at E6').answer, 'E4');
  assert.equal(find(tg, L + 'What are the directions from C3').answer, '4 squares down');
  assert.equal(find(tg, L + 'What are the directions from B2 to E4').answer, '3 squares right, then 2 squares down');
  assert.equal(find(tg, L + 'Start at A1').answer, 'C4'); // A1 -> E1 -> E4 -> C4
  assert.equal(find(tg, 'On a map, north is at the top').answer, 'north');
  assert.equal(find(tg, L + 'The school is at D2').answer, 'A4');
  assert.equal(find(tg, 'How many squares must you move straight down').answer, String(5 - 1));
  assert.equal(find(tg, L + 'How many squares do you walk altogether').answer, String(3 + 2));
  assert.equal(find(tg, L + 'Which square is directly to the right of C5').answer, 'D5');
  assert.equal(find(tg, L + 'What are the directions from the shop').answer, '3 squares east');
}
);

test('INDEPENDENT: transformation and enlargement keys are recomputed with plain arithmetic', () => {
  const tt = 'gr6-transformations-t3';
  const L = 'The letters run across the top and the numbers run down the side. ';
  assert.equal(find(tt, 'A pattern is made by sliding a hexagon').answer, 'Translation');
  assert.equal(find(tt, 'A bracelet pattern').answer, 'Reflection');
  assert.equal(find(tt, 'Each blade of a windmill').answer, 'Rotation');
  // C2 moved 3 right and 1 down: column C(2)+3 = 5 = F, row 2+1 = 3
  assert.equal(find(tt, L + 'A triangle has a corner at C2').answer, `${String.fromCharCode(65 + 2 + 3)}${2 + 1}`);
  assert.equal(find(tt, L + 'A corner of a shape moves from B2').answer, `${'E'.charCodeAt(0) - 'B'.charCodeAt(0)} squares right and ${5 - 2} squares down`);
  // reflection in the middle of column D: B is 2 left, image 2 right of D = F
  assert.equal(find(tt, L + 'A point at B3 is reflected').answer, `${String.fromCharCode('D'.charCodeAt(0) + ('D'.charCodeAt(0) - 'B'.charCodeAt(0)))}3`);
  // mirror between rows 3 and 4: row 2 is 1 above row 3, so the image is 1 below row 4 = row 5
  assert.equal(find(tt, L + 'A point at C2 is reflected').answer, `C${4 + (3 - 2)}`);
  assert.equal(find(tt, 'How many lines of symmetry does an equilateral').answer, '3');
  assert.equal(find(tt, 'How many lines of symmetry does a regular hexagon').answer, '6');
  assert.equal(find(tt, 'How many lines of symmetry does a rectangle').answer, '2');
  assert.equal(find(tt, 'How many quarter turns').answer, String(360 / 90));
  const te = 'gr6-enlargements-t4';
  assert.equal(find(te, 'A triangle has sides of 3 cm, 4 cm and 5 cm. All the sides are doubled to make').answer, `${5 * 2} cm`);
  assert.equal(find(te, 'A triangle has sides of 3 cm, 4 cm and 5 cm. All the sides are doubled. What is the perimeter').answer, `${(3 + 4 + 5) * 2} cm`);
  assert.equal(find(te, 'A triangle has sides of 2 cm').answer, '6 cm, 9 cm, 12 cm');
  assert.equal(find(te, 'A triangle has sides of 12 cm').answer, `${16 / 2} cm`);
  assert.equal(find(te, 'A rectangle is 4 cm long and 3 cm wide').answer, `${4 * 2} cm by ${3 * 2} cm`);
  assert.equal(find(te, 'A rectangle is 3 cm by 5 cm. Both sides').answer, `${6 * 10} cm²`);
  assert.equal(find(te, 'The area of a rectangle is 15').answer, `${(6 * 10) / (3 * 5)} times`);
  assert.equal(find(te, 'A rectangle 12 cm by 8 cm is reduced').answer, `${2 * (6 + 4)} cm`);
  assert.equal(find(te, 'Halve every side').answer, `${6 * 4} cm²`);
}
);

test('INDEPENDENT: viewing-object keys are recomputed with plain arithmetic', () => {
  const tv = 'gr6-viewing-objects-t3';
  const row = [3, 1, 2];
  assert.equal(find(tv, 'Three towers of cubes stand in a row').answer, row.join(', '));
  assert.equal(find(tv, 'You stand behind a one-cube-deep row').answer, [...row].reverse().join(', '));
  assert.equal(find(tv, 'A viewer on the right-hand side looks along a row').answer, String(Math.max(...row)));
  assert.equal(find(tv, 'How many cubes make up a row of towers').answer, String(3 + 1 + 2));
  // two rows: front 2, 1 and back 1, 3
  const front = [2, 1];
  const back = [1, 3];
  assert.equal(find(tv, 'A structure has a front row').answer, [Math.max(front[0], back[0]), Math.max(front[1], back[1])].join(', '));
  // a viewer on the left looks along each row: the back row is on their left, the front row on their right
  assert.equal(find(tv, 'Two rows of cubes').answer, [Math.max(...back), Math.max(...front)].join(', '));
  assert.equal(find(tv, 'How many cubes are in two rows').answer, String(2 + 1 + 1 + 3));
  assert.equal(find(tv, 'A bird flies over').answer, String(2 * 2));
  assert.equal(find(tv, 'You see towers 2, 1 and 3').answer, 'Behind the row');
  assert.equal(find(tv, 'A tin of beans').answer, 'A circle');
  assert.equal(find(tv, 'A party hat').answer, 'A triangle');
  assert.equal(find(tv, 'A dice is a cube').answer, 'A square from every side');
}
);
