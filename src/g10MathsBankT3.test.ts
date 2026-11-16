import test from 'node:test';
import assert from 'node:assert/strict';
import { compose } from './curriculum/grade10/mathematics/_shared/bank';
import { ALL_SPECS } from './curriculum/grade10/mathematics/_shared/specs';

// Term 3 banks (analytical geometry, finance, statistics, measurement, trigonometry in context), verified a second, independent way: every key is
// recomputed here with plain Math (no helpers from grade10Helpers3.ts), and every wrong option must be a different value.

const all = ALL_SPECS.filter((s) => s.task.endsWith('-t3')).flatMap((s) => compose(s.questions).map((it) => ({ ...it, task: s.task })));
const find = (start: string) => {
  const hits = all.filter((i) => i.prompt.startsWith(start));
  assert.equal(hits.length, 1, `${start}: ${hits.length} matches`);
  return hits[0];
};
/** "R1 234,50", "$17 112,50", "113,1 cm³", "−3/2", "(2; 5)" -> number(s). */
const num = (s: string): number => {
  const t = s.replace(/−/g, '-').replace(/[R$ ]/g, '').replace(/[^\d,.\-/]/g, '').replace(',', '.');
  const [a, b] = t.split('/');
  return b ? Number(a) / Number(b) : Number(t);
};
const pointOf = (s: string): [number, number] => {
  const m = /^\((−?\d+(?:,\d+)?); (−?\d+(?:,\d+)?)\)$/.exec(s)!;
  return [num(m[1]), num(m[2])];
};
const wrongOnes = (it: { options: string[]; answer: string }) => it.options.filter((o) => o !== it.answer);
/** The key equals `expected` (within tol) and no wrong option is within tol of it. */
const numericItem = (start: string, expected: number, tol: number) => {
  const it = find(start);
  assert.ok(Math.abs(num(it.answer) - expected) <= tol, `${start}: key ${it.answer} vs ${expected}`);
  for (const o of wrongOnes(it)) assert.ok(Math.abs(num(o) - expected) > tol, `${start}: wrong option ${o} equals the key`);
};

test('banks for Term 3 have 12+ items and spread the key over all four positions', () => {
  const tasks = ALL_SPECS.filter((s) => s.task.endsWith('-t3'));
  assert.equal(tasks.length, 5);
  for (const s of tasks) {
    const items = compose(s.questions);
    assert.ok(items.length >= 12, s.task);
    assert.equal(new Set(items.map((i) => i.options.indexOf(i.answer))).size, 4, s.task);
  }
});

test('INDEPENDENT: analytical geometry', () => {
  const d = (a: number[], b: number[]) => Math.hypot(b[0] - a[0], b[1] - a[1]);
  numericItem('What is the distance between A(1; 2) and B(4; 6)?', d([1, 2], [4, 6]), 1e-9);
  const mid = find('What are the coordinates of the midpoint of the line joining (−2; 3) and (6; 7)?');
  assert.deepEqual(pointOf(mid.answer), [(-2 + 6) / 2, (3 + 7) / 2]);
  for (const o of wrongOnes(mid)) assert.notDeepEqual(pointOf(o), [2, 5]);
  numericItem('What is the gradient of the line through (1; 2) and (4; 8)?', (8 - 2) / (4 - 1), 1e-9);
  const b = find('M(3; 1) is the midpoint of AB and A is (1; −2)');
  const bk = pointOf(b.answer);
  assert.ok(Math.abs((1 + bk[0]) / 2 - 3) < 1e-9 && Math.abs((-2 + bk[1]) / 2 - 1) < 1e-9);
  for (const o of wrongOnes(b)) { const p = pointOf(o); assert.ok(!(Math.abs((1 + p[0]) / 2 - 3) < 1e-9 && Math.abs((-2 + p[1]) / 2 - 1) < 1e-9), o); }
  const perp = find('A line has gradient 2/3.');
  assert.ok(Math.abs(num(perp.answer) * (2 / 3) + 1) < 1e-9);
  for (const o of wrongOnes(perp)) assert.ok(Math.abs(num(o) * (2 / 3) + 1) > 1e-9, o);
  assert.equal(find('Line AB has a gradient of −3.').answer, '−3');
  const k = find('A(1; 2), B(3; 6) and C(5; k)');
  const collinear = (kv: number) => (6 - 2) * (5 - 1) === (kv - 2) * (3 - 1); // slope AB = slope AC
  assert.ok(collinear(num(k.answer)));
  for (const o of wrongOnes(k)) assert.ok(!collinear(num(o)), o);
  const par = find('ABCD is a parallelogram with A(0; 0), B(4; 1) and C(5; 4).');
  const pd = pointOf(par.answer);
  assert.deepEqual([(0 + 5) / 2, (0 + 4) / 2], [(4 + pd[0]) / 2, (1 + pd[1]) / 2]); // the midpoints of AC and BD are the same
  for (const o of wrongOnes(par)) { const p = pointOf(o); assert.ok(!((4 + p[0]) / 2 === 2.5 && (1 + p[1]) / 2 === 2), o); }
  // right angle at R: gradients QR · RS = −1, and no other vertex is a right angle
  const Q = [1, 2], R = [4, 6], S = [8, 3];
  const gr = (a: number[], b: number[]) => (b[1] - a[1]) / (b[0] - a[0]);
  assert.ok(Math.abs(gr(Q, R) * gr(R, S) + 1) < 1e-9);
  assert.ok(Math.abs(gr(R, Q) * gr(Q, S) + 1) > 1e-6 && Math.abs(gr(R, S) * gr(S, Q) + 1) > 1e-6);
  assert.equal(find('Q(1; 2), R(4; 6) and S(8; 3)').answer, 'Angle R');
  numericItem('What is the distance from the origin to the point (−5; 12)?', Math.hypot(5, 12), 1e-9);
  numericItem('A(−1; 4) and B(3; −2). What is AB²?', (3 + 1) ** 2 + (-2 - 4) ** 2, 1e-9);
  assert.equal(find('M(x; 4) is the midpoint of P(−1; 2) and Q(7; 6).').answer, String((-1 + 7) / 2));
});

test('INDEPENDENT: finance and growth, by compounding one period at a time', () => {
  const grow = (p: number, i: number, n: number) => { let a = p; for (let k = 0; k < n; k++) a += a * i; return a; };
  const money = (v: number) => Math.round(v * 100 + 1e-7) / 100;
  numericItem('R4 000 is invested at 8% p.a. simple interest for 3 years.', 4000 + 3 * (4000 * 0.08), 0.005);
  numericItem('R5 000 is invested at 10% p.a. compound interest for 2 years.', grow(5000, 0.1, 2), 0.005);
  numericItem('R12 000 is invested at 6% p.a. compounded monthly', money(grow(12000, 0.06 / 12, 12)), 0.005);
  // hire purchase: instalment = balance × (1 + 0,12 × 2) ÷ 24
  numericItem('A R9 000 laptop is bought on hire purchase', (9000 * 0.9 + 9000 * 0.9 * 0.12 * 2) / 24, 0.005);
  numericItem('A price of R200 rises with inflation', money(grow(200, 0.05, 3)), 0.005);
  numericItem('The exchange rate is $1 = R18,50.', 925 / 18.5, 0.005);
  const pop = find('A town of 20 000 people');
  assert.equal(num(pop.answer.replace(/ /g, '')), Math.round(grow(20000, 0.03, 4) / 10) * 10);
  assert.equal(money(1000 * 1.1 ** 2) - (1000 + 2 * 100), 10);
  assert.equal(find('R1 000 is invested for 2 years at 10% p.a.').answer, 'Compound interest earns R10 more');
  assert.equal(find('How many years does it take R1 000 to double').answer, '10');
  assert.equal(1000 * 0.1 * 10, 1000);
  numericItem('What is the interest earned on R6 000 invested at 5% p.a. simple interest', 6000 * 0.05 * 4, 0.005);
  assert.equal(find('Which decimal do you use in the formulae for an interest rate of 7,5%').answer, String(7.5 / 100).replace('.', ','));
  numericItem('After 2 years at 10% p.a. simple interest an investment is worth R3 300.', 3300 / 1.2, 0.005);
  assert.ok(Math.abs(2750 * 1.2 - 3300) < 1e-9);
  numericItem('R2 000 is invested at 8% p.a. compound interest for 3 years.', money(grow(2000, 0.08, 3)), 0.005);
});

test('INDEPENDENT: statistics, quartiles by an index method and grouped data by hand', () => {
  const sorted = (xs: number[]) => [...xs].sort((a, b) => a - b);
  const med = (xs: number[]) => { const s = sorted(xs); return (s[Math.floor((s.length - 1) / 2)] + s[Math.ceil((s.length - 1) / 2)]) / 2; };
  const data = [12, 15, 11, 18, 20, 14, 17, 16];
  const s = sorted(data);
  const q1 = med(s.slice(0, s.length / 2));
  const q3 = med(s.slice(s.length / 2));
  numericItem('What is the median of this data:', med(data), 1e-9);
  numericItem('What is the lower quartile (Q₁)', q1, 1e-9);
  numericItem('What is the upper quartile (Q₃)', q3, 1e-9);
  numericItem('What is the interquartile range', q3 - q1, 1e-9);
  numericItem('What is the range of the data', Math.max(...data) - Math.min(...data), 1e-9);
  const d2 = [2, 4, 4, 5, 7, 8, 9, 11];
  const fn = find('What is the five-number summary');
  const got = fn.answer.split('; ').map(num);
  assert.deepEqual(got, [Math.min(...d2), med(d2.slice(0, 4)), med(d2), med(d2.slice(4)), Math.max(...d2)]);
  for (const o of wrongOnes(fn)) assert.notDeepEqual(o.split('; ').map(num), got);
  numericItem('What is the mean of 2; 4; 4; 5; 7; 8; 9; 11?', d2.reduce((a, b) => a + b, 0) / d2.length, 1e-9);
  assert.equal(find('A box-and-whisker plot has minimum 4').answer, String(22 - 10));
  // grouped data: frequencies 4, 8, 10 over 0–10, 10–20, 20–30
  const mean = (5 * 4 + 15 * 8 + 25 * 10) / 22;
  numericItem('Classes 0–10, 10–20 and 20–30 have frequencies 4, 8 and 10. What is the estimated mean?', Math.round(mean * 10) / 10, 0.01);
  const values = [...Array(4).fill(5), ...Array(8).fill(15), ...Array(10).fill(25)];
  assert.equal(med(values), 15); // the 11th and 12th values are both in the second class
  assert.equal(find('Classes 0–10, 10–20 and 20–30 have frequencies 4, 8 and 10. Which class contains the median?').answer, '10 – 20');
  assert.equal(find('Classes 0–10, 10–20 and 20–30 have frequencies 4, 8 and 10. Which is the modal class?').answer, '20 – 30');
});

test('INDEPENDENT: measurement, with Math.PI', () => {
  const P = Math.PI;
  const r1 = (v: number) => Math.round(v * 10) / 10;
  numericItem('A sphere has a radius of 3 cm. What is its volume', r1((4 / 3) * P * 27), 0.01);
  numericItem('A sphere has a radius of 5 cm. What is its surface area', r1(4 * P * 25), 0.01);
  numericItem('A cone has a base radius of 3 cm and a height of 4 cm. What is its slant height?', Math.hypot(3, 4), 1e-9);
  numericItem('A cone has a base radius of 3 cm and a height of 4 cm. What is its volume', r1((P * 9 * 4) / 3), 0.01);
  numericItem('A cone has a base radius of 3 cm and a height of 4 cm. What is its curved surface area', r1(P * 3 * 5), 0.01);
  numericItem('A cone has a base radius of 3 cm and a height of 4 cm. What is its total surface area', r1(P * 9 + P * 3 * 5), 0.01);
  numericItem('A square-based pyramid has a base of 6 cm and a perpendicular height of 10 cm.', (6 * 6 * 10) / 3, 1e-9);
  numericItem('A square-based pyramid has a base of 6 cm and each triangular face', 36 + 4 * (0.5 * 6 * 5), 1e-9);
  numericItem('A cylinder has a radius of 2 cm and a height of 7 cm. What is its volume', r1(P * 4 * 7), 0.01);
  numericItem('A closed cylinder has a radius of 2 cm and a height of 7 cm.', r1(2 * P * 4 + 2 * P * 2 * 7), 0.01);
  numericItem('A fish tank is 50 cm long', (50 * 40 * 30) / 1000, 1e-9);
  numericItem('What is the total surface area of a solid hemisphere of radius 2 cm', r1(2 * P * 4 + P * 4), 0.01);
  numericItem('A triangular prism has a triangular end of area 12 cm²', 12 * 5, 1e-9);
  numericItem('A cylinder with radius 2 cm and height 7 cm has a hemisphere', r1(P * 4 * 7 + (2 / 3) * P * 8), 0.01);
});

test('INDEPENDENT: trigonometry in context, with Math', () => {
  const rad = (d: number) => (d * Math.PI) / 180;
  const deg = (r: number) => (r * 180) / Math.PI;
  const r1 = (v: number) => Math.round(v * 10) / 10;
  numericItem('You stand 20 m from the foot of a tower', r1(20 * Math.tan(rad(35))), 0.01);
  numericItem('From the top of a 30 m cliff', r1(30 / Math.tan(rad(25))), 0.01);
  numericItem('A 5 m ladder makes an angle of 70°', r1(5 * Math.cos(rad(70))), 0.01);
  numericItem('A 10 m ramp rises 2 m.', r1(deg(Math.asin(0.2))), 0.01);
  // two elevations: solve x tan45 = (x + 20) tan30 by bisection
  let lo = 0;
  let hi = 200;
  for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2; if (m * Math.tan(rad(45)) > (m + 20) * Math.tan(rad(30))) hi = m; else lo = m; }
  numericItem('From A the angle of elevation of the top of a tower is 30°.', r1(lo), 0.01);
  numericItem('ABCD is a rectangle with AB = 8 cm', r1(deg(Math.acos(0.8))), 0.01);
  numericItem('An isosceles triangle has two sides of 10 cm', r1(Math.sqrt(100 - (10 * Math.sin(rad(20))) ** 2)), 0.01);
  numericItem('A 6 m pole casts a shadow 4 m long.', r1(deg(Math.atan(6 / 4))), 0.01);
  assert.equal(find('In triangle ABC, AB = AC and angle B = 65°.').answer, `${180 - 65 - 65}°`);
  numericItem('Triangle ABC has a right angle at B, with AB = 6 and BC = 8.', r1(deg(Math.atan(8 / 6))), 0.01);
  numericItem('From the top of a 12 m building', r1(12 / Math.tan(rad(28))), 0.01);
});
