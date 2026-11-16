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
    const others = all.filter((o) => o.task === it.task && o.prompt !== it.prompt).map((o) => o.prompt); // the repo-wide check also looks for near-duplicates inside one topic
    const r = checkQuestion({ prompt: it.prompt, options: it.options, answer: it.answer, explanation: it.explanation }, { decimalComma: 'warn', existingPrompts: others });
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
const toJs = (raw: string): string => {
  const parts = raw.split(' ÷ ');
  const s = parts.length === 2 && !/^\(.*\)$/.test(parts[0]) ? `(${parts[0]}) ÷ (${parts[1]})` : raw;
  return s
    .replace(/−/g, '-')
    .replace(/·/g, '*')
    .replace(/÷/g, '/')
    .replace(/([a-z0-9)])([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_m, base: string, e: string) => `${base}**(${[...e].map((c) => SUP[c]).join('')})`)
    .replace(/(\d)([a-z(])/g, '$1*$2')
    .replace(/([a-z)])([a-z(])/g, '$1*$2')
    .replace(/([a-z)])([a-z(])/g, '$1*$2') // twice: "xyz"
    .replace(/(\d)\s+(?=\d)/g, '$1');
};
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
  const allowEquivalent: Record<string, string[]> = { 'Factorise completely: 2x² − 8': ['2(x² − 4)'], '(2 marks) Factorise completely: 3x² − 12': ['3(x² − 4)'], 'Factorise completely: 6x² + 9x': ['3(2x² + 3x)'] };
  let checked = 0;
  for (const it of all) {
    const m = /^(?:\(\d marks?\) )?(Expand and simplify|Expand|Factorise completely|Factorise|Factorise by grouping|Simplify): (.+)$/.exec(it.prompt);
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
  assert.ok(checked >= 17, `only ${checked} items were checked`);
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
    '(3 marks) Solve for x: x² − 3x − 10 = 0': (x) => x * x - 3 * x - 10,
    '(2 marks) Solve for x: 3^(x − 2) = 81': (x) => 3 ** (x - 2) - 81,
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


// ---------------------------------------------------------------- Term 2: functions and geometry, checked independently
const point = (o: string): [number, number] => {
  const m = /^\((−?\d+(?:\/\d+)?); (−?\d+(?:\/\d+)?)\)$/.exec(o)!;
  return [parseValue(m[1]), parseValue(m[2])];
};
const xs = Array.from({ length: 801 }, (_, k) => (k - 400) / 8); // −50 … 50 in steps of 1/8
const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) <= tol;

/** Does the option (a range statement) describe exactly the set of values the function takes? Sampled over a wide grid. */
const rangeMatches = (option: string, values: number[]): boolean => {
  const lo = Math.min(...values);
  const hi = Math.max(...values);
  let m: RegExpExecArray | null;
  if (option === 'y ∈ ℝ') return lo < -1e3 && hi > 1e3;
  if ((m = /^y ≠ (−?\d+)$/.exec(option))) { const c = parseValue(m[1]); return values.every((v) => !near(v, c)) && hi > c + 1e3 && lo < c - 1e3; }
  if ((m = /^y ≥ (−?\d+)$/.exec(option))) return near(lo, parseValue(m[1])) && hi > 1e3;
  if ((m = /^y > (−?\d+)$/.exec(option))) return lo > parseValue(m[1]) && lo - parseValue(m[1]) < 1e-3 && hi > 1e3;
  if ((m = /^y ≤ (−?\d+)$/.exec(option))) return near(hi, parseValue(m[1])) && lo < -1e3;
  if ((m = /^y < (−?\d+)$/.exec(option))) return hi < parseValue(m[1]) && parseValue(m[1]) - hi < 1e-3 && lo < -1e3;
  if ((m = /^(−?\d+) ≤ y ≤ (−?\d+)$/.exec(option))) return near(lo, parseValue(m[1]), 1e-6) && near(hi, parseValue(m[2]), 1e-6);
  throw new Error(`unparsed range: ${option}`);
};

test('INDEPENDENT (Term 2): points (intercepts, turning points) and ranges come from evaluating the function', () => {
  const find = (start: string) => all.find((i) => i.prompt.startsWith(start))!;
  const f = (x: number) => 2 * x - 6;
  const yint = find('What are the coordinates of the y-intercept of y = 2x − 6?');
  assert.deepEqual(point(yint.answer), [0, f(0)]);
  for (const o of yint.options.filter((x) => x !== yint.answer)) assert.notDeepEqual(point(o), [0, f(0)]);
  const f2 = (x: number) => -4 * x + 8;
  const xint = find('Where does the line y = −4x + 8 cut the x-axis?');
  const root = xs.find((x) => near(f2(x), 0))!;
  assert.deepEqual(point(xint.answer), [root, 0]);
  for (const o of xint.options.filter((x) => x !== xint.answer)) assert.ok(!near(f2(point(o)[0]), 0) || point(o)[1] !== 0, o);
  // turning point of y = −x² + 3 = the maximum
  const tp = find('What is the turning point of y = −x² + 3?');
  const ys = xs.map((x) => -x * x + 3);
  const best = xs[ys.indexOf(Math.max(...ys))];
  assert.deepEqual(point(tp.answer), [best, -best * best + 3]);
  for (const o of tp.options.filter((x) => x !== tp.answer)) assert.notDeepEqual(point(o), [best, -best * best + 3]);
  // hyperbola x-intercept: 4/x − 2 = 0
  const hx = find('What is the x-intercept of y = 4/x − 2?');
  const hxRoot = xs.filter((x) => x !== 0).find((x) => near(4 / x - 2, 0))!;
  assert.deepEqual(point(hx.answer), [hxRoot, 0]);
  for (const o of hx.options.filter((x) => x !== hx.answer)) assert.ok(!(near(4 / point(o)[0] - 2, 0) && point(o)[1] === 0), o);
  // y-intercepts of exponentials
  for (const [start, fn, ans] of [['What is the y-intercept of y = 2ˣ?', (x: number) => 2 ** x, null], ['What is the y-intercept of y = 3 · 2ˣ + 1?', (x: number) => 3 * 2 ** x + 1, null]] as const) {
    const it = find(start);
    assert.deepEqual(point(it.answer), [0, fn(0)]);
    for (const o of it.options.filter((x) => x !== it.answer)) assert.notDeepEqual(point(o), [0, fn(0)]);
    void ans;
  }
  // ranges
  const ranges: [string, (x: number) => number][] = [
    ['What is the range of y = x² − 5?', (x) => x * x - 5],
    ['What is the range of y = 1/x + 5?', (x) => 1 / x + 5],
    ['What is the range of y = 2ˣ + 1?', (x) => 2 ** x + 1],
    ['What is the range of y = 2 sin x + 1?', (x) => 2 * Math.sin((x * Math.PI) / 180) + 1],
    ['(2 marks) What is the range of y = 3ˣ − 2?', (x) => 3 ** x - 2],
  ];
  for (const [prompt, fn] of ranges) {
    const it = find(prompt);
    const hyper = Array.from({ length: 21 }, (_, k) => k - 10).filter((c) => c !== 5).map((c) => 1 / (c - 5)); // the x that would give y = c, for c = −10 … 10
    const grid = /sin/.test(prompt) ? Array.from({ length: 361 }, (_, k) => k) : /ˣ/.test(prompt) ? Array.from({ length: 109 }, (_, k) => -12 + k / 4) : xs.filter((x) => x !== 0).concat([1e-4, -1e-4, 1e-5, -1e-5], hyper);
    const values = grid.map(fn);
    assert.ok(rangeMatches(it.answer, values), `${prompt}: key "${it.answer}"`);
    for (const o of it.options.filter((x) => x !== it.answer)) assert.ok(!rangeMatches(o, values), `${prompt}: wrong option "${o}" is also correct`);
  }
});

test('INDEPENDENT (Term 2): lines, parabolas, asymptotes, quadrants and trigonometric graphs', () => {
  const find = (start: string) => all.find((i) => i.prompt.startsWith(start))!;
  const linePred = (o: string): ((x: number) => number) => {
    const body = o.replace('y = ', '').replace(/−/g, '-');
    return makeFn(body.replace(/^x\/3/, 'x/3'), ['x']) as (x: number) => number;
  };
  // gradient of the line through (1; 3) and (3; 9)
  assert.equal(find('What is the gradient of the straight line through (1; 3) and (3; 9)?').answer, String((9 - 3) / (3 - 1)));
  // a line with gradient −2 and y-intercept 5
  const l4 = find('A straight line has gradient −2 and cuts the y-axis at 5.');
  assert.ok(near(linePred(l4.answer)(0), 5) && near(linePred(l4.answer)(1) - linePred(l4.answer)(0), -2));
  for (const o of l4.options.filter((x) => x !== l4.answer)) assert.ok(!(near(linePred(o)(0), 5) && near(linePred(o)(1) - linePred(o)(0), -2)), o);
  // parallel to y = 3x − 1: gradient 3 but not the same line
  const par = find('Which line is parallel to y = 3x − 1?');
  const gr = (o: string) => linePred(o)(1) - linePred(o)(0);
  assert.ok(near(gr(par.answer), 3) && !near(linePred(par.answer)(0), -1));
  for (const o of par.options.filter((x) => x !== par.answer)) assert.ok(!near(gr(o), 3), o);
  // the line through (0; −2) and (4; 6)
  const l14 = find('What is the equation of the straight line through (0; −2) and (4; 6)?');
  assert.ok(near(linePred(l14.answer)(0), -2) && near(linePred(l14.answer)(4), 6));
  for (const o of l14.options.filter((x) => x !== l14.answer)) assert.ok(!(near(linePred(o)(0), -2) && near(linePred(o)(4), 6)), o);
  // y = ax² + q through (0; −3) and (2; 5)
  const pq = find('The parabola y = ax² + q has its turning point at (0; −3)');
  const parab = (o: string) => makeFn(o.replace('y = ', '').replace(/(\d)x\*\*\(2\)/, '$1*x**2'), ['x']) as (x: number) => number;
  assert.ok(near(parab(pq.answer)(0), -3) && near(parab(pq.answer)(2), 5));
  for (const o of pq.options.filter((x) => x !== pq.answer)) assert.ok(!(near(parab(o)(0), -3) && near(parab(o)(2), 5)), o);
  // f(3) for 2x² − 1
  assert.equal(find('If f(x) = 2x² − 1, what is f(3)?').answer, String(2 * 3 * 3 - 1));
  // x-intercepts of y = x² − 4 (reuse the equation reader) and of y = −3x² + 12
  const x4 = find('What are the x-intercepts of y = x² − 4?');
  assert.deepEqual(rootsOfOption(x4.answer), solutionsOf((x) => x * x - 4));
  const x12 = find('(2 marks) What are the x-intercepts of y = −3x² + 12?');
  assert.deepEqual(rootsOfOption(x12.answer), solutionsOf((x) => -3 * x * x + 12));
  for (const it of [x4, x12]) for (const o of it.options.filter((x) => x !== it.answer)) assert.notDeepEqual(rootsOfOption(o), rootsOfOption(it.answer), o);
  // asymptotes by behaviour
  const asym: [string, (x: number) => number][] = [
    ['What are the equations of the asymptotes of y = 2/x + 3?', (x) => 2 / x + 3],
    ['(2 marks) What are the equations of the asymptotes of y = −1/x + 2?', (x) => -1 / x + 2],
  ];
  const holds = (o: string, fn: (x: number) => number) => {
    const m = /^x = (−?\d+) and y = (−?\d+)$/.exec(o);
    if (!m) return false;
    const [vx, hy] = [parseValue(m[1]), parseValue(m[2])];
    return Math.abs(fn(vx + 1e-7)) > 1e6 && Math.abs(fn(vx - 1e-7)) > 1e6 && near(fn(1e9), hy, 1e-6) && near(fn(-1e9), hy, 1e-6);
  };
  for (const [prompt, fn] of asym) {
    const it = find(prompt);
    assert.ok(holds(it.answer, fn), prompt);
    for (const o of it.options.filter((x) => x !== it.answer)) assert.ok(!holds(o, fn), `${prompt}: ${o}`);
  }
  const hAsym = find('What is the equation of the asymptote of y = 2ˣ − 3?');
  assert.ok(near(2 ** -60 - 3, -3, 1e-9) && hAsym.answer === 'y = −3');
  // quadrants of y = 3/x and y = −2/x
  const quads = (fn: (x: number) => number) => [...new Set(xs.filter((x) => x !== 0).map((x) => { const y = fn(x); return x > 0 ? (y > 0 ? 1 : 4) : (y > 0 ? 2 : 3); }))].sort();
  assert.equal(find('In which quadrants does the graph of y = 3/x lie?').answer, `Quadrants ${quads((x) => 3 / x).join(' and ')}`);
  assert.equal(find('In which quadrants does the graph of y = −2/x lie?').answer, `Quadrants ${quads((x) => -2 / x).join(' and ')}`);
  // trigonometric graphs, sampled every degree
  const deg = Array.from({ length: 361 }, (_, k) => k);
  const sin = (x: number) => Math.sin((x * Math.PI) / 180);
  const amp = (fn: (x: number) => number) => (Math.max(...deg.map(fn)) - Math.min(...deg.map(fn))) / 2;
  assert.ok(near(amp((x) => 3 * sin(x)), 3, 1e-9) && find('What is the amplitude of y = 3 sin x?').answer === '3');
  const period = (fn: (x: number) => number) => deg.slice(1).find((p) => deg.filter((x) => x + p <= 360 && Math.abs(Math.cos((x * Math.PI) / 180)) > 1e-6 && Math.abs(Math.cos(((x + p) * Math.PI) / 180)) > 1e-6).every((x) => near(fn(x + p), fn(x), 1e-7)));
  assert.equal(`${period((x) => Math.tan((x * Math.PI) / 180))}°`, find('What is the period of y = tan x?').answer);
  const zeros = deg.filter((x) => near(sin(x), 0, 1e-12)).map((x) => `${x}°`);
  assert.equal(find('Where does y = sin x cut the x-axis').answer, `x = ${zeros[0]}, ${zeros[1]} and ${zeros[2]}`);
});

test('INDEPENDENT (Term 2): geometry numbers and the mixed exam items, recomputed from scratch', () => {
  const find = (start: string) => all.find((i) => i.prompt.startsWith(start))!;
  assert.equal(find('What is the sum of the interior angles of any quadrilateral?').answer, `${2 * 180}°`);
  assert.equal(find('In parallelogram ABCD, angle A = 70°. What is angle B?').answer, `${180 - 70}°`);
  assert.equal(find('In triangle ABC, D and E are the midpoints of AB and AC. If BC = 18 cm').answer, `${18 / 2} cm`);
  assert.equal(find('Triangle ABC is similar to triangle DEF').answer, `${(6 * 10) / 4} cm`);
  assert.equal(find('In parallelogram ABCD, angle A = (2x + 10)° and angle C = 70°').answer, String((70 - 10) / 2));
  assert.equal(find('ABCD is a rectangle with diagonal AC = 13 cm').answer, `${Math.sqrt(13 ** 2 - 5 ** 2)} cm`);
  assert.equal(find('In trapezium ABCD, AB ∥ DC and angle A = 65°').answer, `${180 - 65}°`);
  assert.equal(find('A rhombus has sides of 10 cm and one diagonal of 12 cm').answer, `${2 * Math.sqrt(10 ** 2 - 6 ** 2)} cm`);
  // exam items
  assert.equal(all.find((i) => i.prompt.startsWith('(2 marks) What is the 15th term'))!.answer, String(9 + 14 * 4));
  const sim = all.find((i) => i.prompt.startsWith('(3 marks) Solve simultaneously'))!;
  assert.equal(3 * 4 + 2 * 2, 16);
  assert.equal(4 - 2, 2);
  assert.equal(sim.answer, 'x = 4; y = 2');
  for (const o of sim.options.filter((x) => x !== sim.answer)) { const m = /x = (−?\d+); y = (−?\d+)/.exec(o)!; const [x, y] = [parseValue(m[1]), parseValue(m[2])]; assert.ok(!(3 * x + 2 * y === 16 && x - y === 2), o); }
  const rad = (d: number) => (d * Math.PI) / 180;
  const tri = all.find((i) => i.prompt.startsWith('(3 marks) A right-angled triangle has hypotenuse 15 cm'))!;
  const c = (v: number) => `${v.toFixed(1).replace('.', ',')} cm`;
  assert.equal(tri.answer, c(15 * Math.sin(rad(40))));
  assert.deepEqual(tri.options.filter((x) => x !== tri.answer).sort(), [c(15 * Math.cos(rad(40))), c(15 * Math.tan(rad(40))), c(15 / Math.sin(rad(40)))].sort());
  assert.equal(all.find((i) => i.prompt.startsWith('(2 marks) θ is acute and sin θ = 5/13'))!.answer, `${Math.sqrt(13 * 13 - 5 * 5)}/13`);
  assert.equal(all.find((i) => i.prompt.startsWith('(2 marks) What is the gradient of the line through (−1; 5)'))!.answer, '−2');
  assert.equal((-1 - 5) / (2 - -1), -2);
  const angleP = 2 * 30 + 20;
  assert.equal(angleP + (3 * 30 + 10), 180);
  assert.equal(all.find((i) => i.prompt.startsWith('(3 marks) In parallelogram PQRS'))!.answer, `${3 * 30 + 10}°`);
  assert.equal(2 * (2 * 5 + 1), 5 * 5 - 3); // BC = 2 DE at x = 5
  const interval = all.find((i) => i.prompt.startsWith('(3 marks) Solve for x and write the answer in interval notation'))!;
  const solPred = (x: number) => 5 - 2 * x < 11;
  const gridI = Array.from({ length: 161 }, (_, k) => (k - 80) / 4);
  const parseIv = (s: string) => { const m = /^([(\[])(−∞|−?\d+); (∞|−?\d+)([)\]])$/.exec(s)!; const lo = m[2] === '−∞' ? -Infinity : parseValue(m[2]); const hi = m[3] === '∞' ? Infinity : parseValue(m[3]); return (x: number) => (m[1] === '[' ? x >= lo : x > lo) && (m[4] === ']' ? x <= hi : x < hi); };
  assert.ok(gridI.every((x) => parseIv(interval.answer)(x) === solPred(x)));
  for (const o of interval.options.filter((x) => x !== interval.answer)) assert.ok(gridI.some((x) => parseIv(o)(x) !== solPred(x)), o);
});
