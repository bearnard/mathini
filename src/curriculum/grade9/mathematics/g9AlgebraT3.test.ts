import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { mathematicsGrade9 } from './index';
import mathGr9Term3 from '../../../lib/server/caps/tasks/math-gr9-term3.json';

// Grade 9 Term 3 algebra (CAPS: factorising in expressions; equations by factorisation, products of factors, tables of ordered pairs).
// Worked numbers are written out by hand; factorisations are verified by evaluating both sides.

stubCss();
const fac = await import('./term3/factorising-algebraic-expressions/FactorisingAlgebraicExpressions');
const eq = await import('./term3/solving-equations-by-factorising/SolvingEquationsByFactorising');
// adjacent React text nodes render with a gap between them: close it so factors read (x + 2)(x + 3)
const squash = (slides: ReturnType<typeof renderSlides>) => slides.map((s) => ({ ...s, text: s.text.replace(/\) \(/g, ')(').replace(/\) ²/g, ')²') }));
const fs = squash(renderSlides(fac.learnSteps));
const es = squash(renderSlides(eq.learnSteps));
const XS = [-7, -4, -3, -2, -1, 0, 1, 2, 3, 5, 8];

test('registered in Term 3 after the existing three, with task instructions', () => {
  const ids = mathematicsGrade9.terms[2].topics.map((t) => t.id);
  assert.deepEqual(ids.slice(3), ['gr9-factorising-algebraic-expressions', 'gr9-solving-equations-by-factorising']);
  for (const id of ids.slice(3)) assert.ok(mathGr9Term3.tasks[`${id}-t3` as keyof typeof mathGr9Term3.tasks], id);
});

test('both lessons have the standard shape and no stray backslash', () => {
  for (const s of [fs, es]) {
    assertLessonShape(s);
    for (const slide of s) assert.ok(!slide.text.includes('\\'));
  }
  assert.equal(fs.length, 6);
  assert.equal(es.length, 6);
});

test('factorising: worked forms in the slides', () => {
  assert.match(fs[0].text, /2x\(x \+ 3\) = 2x² \+ 6x/);
  assert.match(fs[0].text, /2a²\(3a² − 2\)/);
  assert.match(fs[0].text, /\(a − b\)\(2x − 3\)/);
  assert.match(fs[1].text, /\(a − b\)\(x \+ 2\)/);
  assert.match(fs[1].text, /\(a − b\)\(2x \+ 3\)/);
  assert.match(fs[2].text, /\(5a − 1\)\(5a \+ 1\)/);
  assert.match(fs[2].text, /3\(x − 3\)\(x \+ 3\)/);
  assert.match(fs[2].text, /\(a − b\)\(a \+ b\)\(a² \+ b²\)/);
  assert.match(fs[2].text, /7 ² − 3 ²|7² − 3²/);
  assert.match(fs[3].text, /\(x \+ 2\)\(x \+ 3\)/);
  assert.match(fs[3].text, /\(x − 3\)\(x − 2\)/);
  assert.match(fs[3].text, /\(x − 3\)\(x \+ 2\)/);
  assert.match(fs[3].text, /\(x − 3\)²/);
  assert.match(fs[3].text, /2\(x \+ 2\)\(x \+ 3\)/);
  assert.match(fs[3].text, /\(x \+ 1\)\(x \+ 6\) = x² \+ 7x \+ 6/);
  assert.match(fs[4].text, /1\/2/);
  assert.match(fs[4].text, /3a − 1/);
  assert.match(fs[5].text, /\(x \+ 2\)\(x \+ 6\)/);
  assert.match(fs[5].text, /\(4a − 3\)\(4a \+ 3\)/);
  assert.match(fs[5].text, /x \+ 5/);
});

test('solving: worked solutions in the slides', () => {
  assert.match(es[0].text, /x = 2 or x = −5/);
  assert.match(es[0].text, /x = 0 or x = 4/);
  assert.match(es[1].text, /x = 0 or x = 3/);
  assert.match(es[1].text, /x = −5 or x = 5/);
  assert.match(es[2].text, /x = −3 or x = −2/);
  assert.match(es[2].text, /x = −2 or x = 3/);
  assert.match(es[2].text, /x = 3/);
  assert.match(es[3].text, /x² \+ 3x − 28 = 0/);
  assert.match(es[3].text, /\(x − 4\)\(x \+ 7\) = 0, so x = 4 or x = −7/);
  assert.match(es[3].text, /x = 4/);
  assert.match(es[3].text, /4 × 7 = 28/);
  assert.match(es[3].text, /s \+ 9 = 2\(s \+ 3\)/);
  assert.match(es[4].text, /= 2 × 4 − 3 = 5/);
  assert.match(es[4].text, /8 − 8 \+ 3 = 3/);
  assert.match(es[4].text, /8x³ \+ 16x² \+ 6x/);
  assert.match(es[5].text, /x = −2 or x = 6/);
  assert.match(es[5].text, /x = −4 or x = 2/);
  assert.match(es[5].text, /x = 0 or x = 9/);
  assert.match(es[5].text, /9 − 6 − 1 = 2/);
});

test('independent arithmetic behind the slides', () => {
  for (const x of XS) {
    assert.equal(2 * x * (x + 3) + 0, 2 * x * x + 6 * x);
    assert.equal((x - 3) * (x + 2) + 0, x * x - x - 6);
    assert.equal(2 * (x + 2) * (x + 3) + 0, 2 * x * x + 10 * x + 12);
    assert.equal(2 * x * (2 * x + 1) * (2 * x + 3) + 0, 8 * x ** 3 + 16 * x ** 2 + 6 * x);
  }
  for (const [a, b] of [[2, 1], [5, 3], [7, 2]]) assert.equal((a ** 4 - b ** 4), (a - b) * (a + b) * (a * a + b * b));
  assert.equal(7 ** 2 - 3 ** 2, (7 + 3) * (7 - 3));
  assert.equal(2 * (-2) ** 2 - 3, 5);
  assert.equal(2 * (-2) ** 2 + 4 * -2 + 3, 3);
  assert.equal(4 * 7, 28);
  const s = 3; // ages
  assert.equal(s + 9, 2 * (s + 3));
});

for (const [name, mod] of Object.entries({ factorising: fac, solving: eq })) {
  test(`${name}: 14 clean questions, key in all four positions, no stray backslash`, () => {
    assert.equal(mod.bank.length, 14);
    assert.equal(new Set(mod.bank.map((q) => q.prompt)).size, 14);
    const pos = [0, 0, 0, 0];
    for (const q of mod.bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.ok(q.options.includes(q.answer));
      assert.ok(!q.prompt.includes('\\') && !q.options.some((o) => o.includes('\\')) && !(q.explanation ?? '').includes('\\'));
      pos[q.options.indexOf(q.answer)]++;
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: mod.bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    }
    assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= 5, JSON.stringify(pos));
  });
}

test('bank keys re-derived independently (substitution and expansion)', () => {
  const key = (m: { bank: { prompt: string; answer: string }[] }, start: string) => m.bank.find((q) => q.prompt.startsWith(start))!.answer;
  assert.equal(key(fac, 'Factorise x² + 7x + 10'), '(x + 2)(x + 5)');
  for (const x of XS) assert.equal((x + 2) * (x + 5) + 0, x * x + 7 * x + 10);
  assert.equal(key(fac, 'Factorise x² − 8x + 15'), '(x − 3)(x − 5)');
  for (const x of XS) assert.equal((x - 3) * (x - 5) + 0, x * x - 8 * x + 15);
  assert.equal(key(fac, 'Factorise x² + 2x − 15'), '(x + 5)(x − 3)');
  for (const x of XS) assert.equal((x + 5) * (x - 3) + 0, x * x + 2 * x - 15);
  assert.equal(key(fac, 'Factorise 3x² + 15x + 18'), '3(x + 2)(x + 3)');
  for (const x of XS) assert.equal(3 * (x + 2) * (x + 3) + 0, 3 * x * x + 15 * x + 18);
  assert.equal(key(fac, 'Factorise 16a² − 25'), '(4a − 5)(4a + 5)');
  for (const x of XS) assert.equal((4 * x - 5) * (4 * x + 5) + 0, 16 * x * x - 25);
  assert.equal(key(eq, 'Solve x² + 8x + 12'), 'x = −2 or x = −6');
  for (const x of [-2, -6]) assert.equal(x * x + 8 * x + 12 + 0, 0);
  assert.equal(key(eq, 'Solve x² − 2x − 15'), 'x = 5 or x = −3');
  for (const x of [5, -3]) assert.equal(x * x - 2 * x - 15 + 0, 0);
  assert.equal(key(eq, 'What is the value of 3x²'), String(3 * 4 + 4));
  assert.equal(key(eq, 'For y = 3x'), '−4');
  assert.equal(3 * -1 - (-1) ** 2, -4);
  assert.equal(key(eq, 'For the table of y = x²'), String(9 + 6 - 1));
  assert.equal(4 * (4 + 2), 24);
});
