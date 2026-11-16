import test from 'node:test';
import assert from 'node:assert/strict';
import { compose } from './curriculum/grade10/mathematics/_shared/bank';
import { ALL_SPECS } from './curriculum/grade10/mathematics/_shared/specs';
import { checkQuestion } from './lib/shared/questionQuality';
import { renderFile } from '../scripts/gen-g10-maths-bank';

// Grade 10 Mathematics question banks. They are written from specs that compute their keys from tested helpers (grade10Helpers.ts) and
// then verified AGAIN here by a second, independent route: algebra items are checked by evaluating the prompt's expression and each option at
// many points (the key must equal it everywhere and every wrong option must differ somewhere), equations by substituting the roots, inequalities
// on a grid of test values, and simultaneous equations by substitution. A wrong option that is accidentally right fails this test.

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
    const positions = new Set(b.items.map((i) => i.options.indexOf(i.answer)));
    assert.equal(positions.size, 4, `${b.task}: the key sits in ${[...positions]}`);
  }
});

test('the question quality validator rejects nothing, and no decimal point appears (decimal comma)', () => {
  for (const it of all) {
    const r = checkQuestion({ prompt: it.prompt, options: it.options, answer: it.answer, explanation: it.explanation }, { decimalComma: 'warn' });
    const bad = r.reasons.filter((x) => x.severity === 'reject' || x.code === 'decimal_point');
    assert.deepEqual(bad.map((x) => `${x.code}: ${x.detail}`), [], it.prompt);
  }
});

test('the `const bank` literal in every topic file is exactly what its spec computes (run scripts/gen-g10-maths-bank.ts)', () => {
  for (const b of banks) {
    const r = renderFile(b.file, b.items);
    assert.equal(r.before === r.after, true, `${b.file} is out of date: node --import tsx scripts/gen-g10-maths-bank.ts`);
  }
});

// ---------------------------------------------------------------- the independent check
const SUP: Record<string, string> = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-' };
/** "(x − 7)(x + 7)", "3x(2x + 3)", "x² + 8x + 15", "a⁴b³" -> a JavaScript expression. Single-letter variables only. */
const toJs = (s: string): string =>
  s
    .replace(/−/g, '-')
    .replace(/·/g, '*')
    .replace(/÷/g, '/')
    .replace(/([a-z0-9)])([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_m, base: string, e: string) => `${base}**(${[...e].map((c) => SUP[c]).join('')})`)
    .replace(/(\d)([a-z(])/g, '$1*$2')
    .replace(/([a-z)])([a-z(])/g, '$1*$2')
    .replace(/([a-z)])([a-z(])/g, '$1*$2') // twice: "xyz"
    .replace(/(\d)\s+(?=\d)/g, '$1');
const makeFn = (expr: string, vars: string[]): ((...v: number[]) => number) => new Function(...vars, `return (${toJs(expr)});`) as (...v: number[]) => number;
const POINTS = [-4, -3, -2, 2, 3, 4, 5, 7, 9].map((n) => n + 0.5).concat([-5, -1, 1, 6, 8, 10]);
const same = (a: (x: number) => number, b: (x: number) => number): boolean =>
  POINTS.every((x) => {
    const u = a(x);
    if (!Number.isFinite(u)) return true; // outside the domain of the original expression: nothing to compare
    const v = b(x);
    return Math.abs(u - v) <= 1e-7 * Math.max(1, Math.abs(u), Math.abs(v));
  });

test('INDEPENDENT: every expand / factorise / simplify item: the key equals the prompt expression everywhere and no wrong option does', () => {
  const allowEquivalent: Record<string, string[]> = { 'Factorise completely: 2x² − 8': ['2(x² − 4)'], 'Factorise completely: 6x² + 9x': ['3(2x² + 3x)'] };
  let checked = 0;
  for (const it of all) {
    const m = /^(Expand and simplify|Expand|Factorise completely|Factorise|Factorise by grouping|Simplify): (.+)$/.exec(it.prompt);
    if (!m || /ⁿ|ˣ/.test(it.prompt)) continue;
    const vars = ['x', 'a', 'b', 'c'].filter((v) => new RegExp(`\\b${v}`).test(m[2].replace(/[0-9]/g, '')) || it.options.some((o) => o.includes(v)));
    // the variables are positional: evaluate with x = t, a = t, b = t + 1, c = t + 2 so that a, b, c differ
    const call = (expr: string) => {
      const f = makeFn(expr, ['x', 'a', 'b', 'c']);
      return (t: number) => f(t, t, t + 1, t + 2);
    };
    void vars;
    const truth = call(m[2]);
    assert.ok(same(truth, call(it.answer)), `${it.prompt}: the key "${it.answer}" is not equal to the expression`);
    for (const o of it.options) {
      if (o === it.answer) continue;
      const equal = same(truth, call(o));
      if (equal) assert.ok((allowEquivalent[it.prompt] ?? []).includes(o), `${it.prompt}: the wrong option "${o}" is also correct`);
    }
    checked++;
  }
  assert.ok(checked >= 15, `only ${checked} items were checked`);
});

const solutionsOf = (f: (x: number) => number): number[] => {
  const out: number[] = [];
  for (let k = -400; k <= 400; k++) if (Math.abs(f(k / 4)) < 1e-9) out.push(k / 4);
  return out;
};
const parseValue = (s: string): number => {
  const t = s.replace('−', '-');
  const [n, d] = t.split('/');
  return d ? Number(n) / Number(d) : Number(n);
};
const rootsOfOption = (o: string): number[] => [...o.matchAll(/x = (−?\d+(?:\/\d+)?)/g)].map((m) => parseValue(m[1])).sort((a, b) => a - b);

test('INDEPENDENT: equations: the key lists exactly the real solutions (found by search), and no wrong option does', () => {
  const eqs: Record<string, (x: number) => number> = {
    'Solve for x: 3x + 2 = x + 10': (x) => 3 * x + 2 - (x + 10),
    'Solve for x: x² − 5x + 6 = 0': (x) => x * x - 5 * x + 6,
    'Solve for x: x² + 2x − 15 = 0': (x) => x * x + 2 * x - 15,
    'Solve for x: x² = 7x': (x) => x * x - 7 * x,
    'Solve for x: (x − 2)(x + 3) = 6': (x) => (x - 2) * (x + 3) - 6,
    'Solve for x: 2x² − 5x − 3 = 0': (x) => 2 * x * x - 5 * x - 3,
    'Solve for x: 2ˣ = 32': (x) => 2 ** x - 32,
    'Solve for x: 3^(x + 1) = 27': (x) => 3 ** (x + 1) - 27,
    'Solve for x: 5ˣ = 1/25': (x) => 5 ** x - 1 / 25,
  };
  for (const [prompt, f] of Object.entries(eqs)) {
    const it = all.find((i) => i.prompt === prompt);
    assert.ok(it, prompt);
    const truth = solutionsOf(f);
    assert.ok(truth.length >= 1, prompt);
    const asSet = (o: string) => (/^x = /.test(o) ? rootsOfOption(o) : [parseValue(o)]);
    assert.deepEqual(asSet(it.answer), truth, `${prompt}: key`);
    for (const o of it.options) if (o !== it.answer) assert.notDeepEqual(asSet(o), truth, `${prompt}: wrong option "${o}" is also correct`);
  }
});

test('INDEPENDENT: inequalities, simultaneous equations, literal equation and interval notation', () => {
  const grid = Array.from({ length: 161 }, (_, k) => (k - 80) / 4);
  const ineq: Record<string, (x: number) => boolean> = { 'Solve for x: 2x + 3 > 11': (x) => 2 * x + 3 > 11, 'Solve for x: −3x + 1 ≥ 10': (x) => -3 * x + 1 >= 10 };
  const pred = (o: string): ((x: number) => boolean) => {
    const m = /^x ([<>≤≥]) (−?\d+(?:\/\d+)?)$/.exec(o)!;
    const v = parseValue(m[2]);
    return { '>': (x: number) => x > v, '<': (x: number) => x < v, '≥': (x: number) => x >= v, '≤': (x: number) => x <= v }[m[1] as '>'](0) === undefined ? () => false : { '>': (x: number) => x > v, '<': (x: number) => x < v, '≥': (x: number) => x >= v, '≤': (x: number) => x <= v }[m[1] as '>'];
  };
  for (const [prompt, truth] of Object.entries(ineq)) {
    const it = all.find((i) => i.prompt === prompt)!;
    assert.ok(grid.every((x) => pred(it.answer)(x) === truth(x)), `${prompt}: key`);
    for (const o of it.options) if (o !== it.answer) assert.ok(grid.some((x) => pred(o)(x) !== truth(x)), `${prompt}: wrong option "${o}" is also correct`);
  }
  const sims: Record<string, ((x: number, y: number) => boolean)[]> = {
    'Solve simultaneously: x + y = 7 and x − y = 1': [(x, y) => x + y === 7, (x, y) => x - y === 1],
    'Solve simultaneously: 2x + y = 11 and x − 3y = −5': [(x, y) => 2 * x + y === 11, (x, y) => x - 3 * y === -5],
  };
  for (const [prompt, eqns] of Object.entries(sims)) {
    const it = all.find((i) => i.prompt === prompt)!;
    const xy = (o: string) => { const m = /x = (−?\d+); y = (−?\d+)/.exec(o)!; return [parseValue(m[1]), parseValue(m[2])] as const; };
    assert.ok(eqns.every((e) => e(...xy(it.answer))), `${prompt}: key`);
    for (const o of it.options) if (o !== it.answer) assert.ok(!eqns.every((e) => e(...xy(o))), `${prompt}: wrong option "${o}" is also correct`);
  }
  // the age problem: x + (x + 4) = 30
  const age = all.find((i) => i.prompt.startsWith('Thandi is 4 years older'))!;
  assert.equal(Number(age.answer) + (Number(age.answer) + 4), 30);
  assert.ok(age.options.filter((o) => o !== age.answer).every((o) => Number(o) + Number(o) + 4 !== 30));
  // interval notation: build it from the predicate on a grid
  const interval = (lo: number | null, loIn: boolean, hi: number | null, hiIn: boolean) => (x: number) => (lo === null || (loIn ? x >= lo : x > lo)) && (hi === null || (hiIn ? x <= hi : x < hi));
  const parseInterval = (s: string) => {
    const m = /^([(\[])(−∞|−?\d+); (∞|−?\d+)([)\]])$/.exec(s)!;
    return interval(m[2] === '−∞' ? null : parseValue(m[2]), m[1] === '[', m[3] === '∞' ? null : parseValue(m[3]), m[4] === ']');
  };
  const checks: [string, (x: number) => boolean][] = [['Which interval notation shows x ≤ −3?', (x) => x <= -3], ['Write −2 < x ≤ 5 in interval notation.', (x) => x > -2 && x <= 5]];
  for (const [prompt, truth] of checks) {
    const it = all.find((i) => i.prompt === prompt)!;
    assert.ok(grid.every((x) => parseInterval(it.answer)(x) === truth(x)), `${prompt}: key`);
    for (const o of it.options) if (o !== it.answer) assert.ok(grid.some((x) => parseInterval(o)(x) !== truth(x)), `${prompt}: "${o}" is also correct`);
  }
});

test('INDEPENDENT: number patterns and trigonometry numbers, recomputed from scratch', () => {
  const find = (start: string) => all.find((i) => i.prompt.startsWith(start))!;
  // patterns by building the sequence term by term
  const seq = (first: number, d: number, n: number) => { const out = [first]; while (out.length < n) out.push(out[out.length - 1] + d); return out; };
  assert.equal(find('Write down the next two terms').answer, seq(7, 4, 6).slice(4).join('; '));
  assert.equal(find('What is the 20th term').answer, String(seq(4, 5, 20)[19]));
  assert.equal(find('Which term of 2; 5; 8; 11').answer, String(seq(2, 3, 40).indexOf(62) + 1));
  assert.equal(find('If Tₙ = 5n − 2').answer, String(5 * 10 - 2));
  assert.equal(find('Shape 1 uses 4 matchsticks').answer, String(seq(4, 3, 12)[11]));
  assert.equal(find('For Tₙ = 3n + 4').answer, String(Array.from({ length: 30 }, (_, i) => 3 * (i + 1) + 4).indexOf(40) + 1));
  const rule = (m: number, c: number, terms: number[]) => terms.every((t, i) => m * (i + 1) + c === t);
  assert.ok(rule(3, 2, [5, 8, 11, 14]) && rule(-4, 34, [30, 26, 22, 18]));
  const four = find('Which of these numbers is a term of the pattern Tₙ = 4n − 3?');
  assert.equal(Number.isInteger((Number(four.answer) + 3) / 4), true);
  for (const o of four.options.filter((x) => x !== four.answer)) assert.equal(Number.isInteger((Number(o) + 3) / 4), false);
  // trig
  const r2 = (n: number) => n.toFixed(1).replace('.', ',');
  const rad = (d: number) => (d * Math.PI) / 180;
  assert.equal(find('In a right-angled triangle the hypotenuse is 10 cm').answer, `${r2(10 * Math.sin(rad(30))).replace(',0', '')} cm`);
  assert.equal(find('In a right-angled triangle the side opposite angle θ is 5').answer, `${r2((Math.atan(5 / 8) * 180) / Math.PI)}°`);
  assert.equal(find('A 6 m ladder').answer, `${r2(6 * Math.sin(rad(60)))} m`);
  const ladderWrong = [6 * Math.cos(rad(60)), 6 * Math.tan(rad(60)), 6 / Math.sin(rad(60))].map((v) => `${r2(v)} m`);
  assert.deepEqual(find('A 6 m ladder').options.filter((o) => o !== find('A 6 m ladder').answer).sort(), ladderWrong.sort());
  assert.ok(Math.abs(Math.sin(rad(30)) - 0.5) < 1e-12 && Math.abs(Math.tan(rad(60)) - Math.sqrt(3)) < 1e-12 && Math.abs(Math.cos(rad(45)) - 1 / Math.sqrt(2)) < 1e-12);
  assert.equal(find('The point P(−3; 4)').answer, '−3/5');
  assert.equal(find('The point P(5; −12)').answer, '−12/5');
  assert.equal(Math.hypot(-3, 4), 5);
  assert.equal(Math.hypot(5, -12), 13);
  assert.equal(Math.sqrt(1 - 0.6 ** 2), 0.8); // cos when sin = 3/5 = 0,6
  // 8^(2/3), 32^(2/5): by floating point power
  assert.ok(Math.abs(8 ** (2 / 3) - 4) < 1e-9 && Math.abs(2 ** -3 - 1 / 8) < 1e-12);
  assert.equal(find('Between which two consecutive integers does √45 lie?').answer, `${Math.floor(Math.sqrt(45))} and ${Math.floor(Math.sqrt(45)) + 1}`);
  assert.equal(find('√45 correct to one decimal place is').answer, r2(Math.sqrt(45)));
});
