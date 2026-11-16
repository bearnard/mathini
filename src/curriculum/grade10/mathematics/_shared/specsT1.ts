import { q, type Q } from './bank';
import * as h from '../../../../components/diagrams/maths/grade10Helpers';

const { fmtPoly, expandBinomials, expandSquare, bracket, sup, int, dec, fracStr, frac } = h;
const P = (c: number[], v = 'x') => fmtPoly(c, v);

// ---------------------------------------------------------------- Algebraic Expressions
export const algebraicExpressions: Q[] = (() => {
  const e1 = expandBinomials(1, 3, 1, 5); // (x+3)(x+5)
  const e2 = expandSquare(1, -4); // (x−4)²
  const e3 = expandBinomials(2, 1, 1, -3); // (2x+1)(x−3)
  const t1 = h.factorQuadratic(1, 1, -12)!; // x²+x−12
  const cf = h.coefHcf([6, 9]);
  const cube = h.cubeFactors(1, 3, -1); // x³−27
  const sumAB = h.addFractions(2, 1, 3, 2); // 2/x + 3/(2x): coefficients over x
  const [lo, hi] = h.sqrtBetween(45);
  return [
    q('Expand and simplify: (x + 3)(x + 5)', P(e1), [P([15, 0, 1]), P([8, 15, 1]), P([8, 8, 1])],
      'Multiply every term in the first bracket by every term in the second: x² + 5x + 3x + 15. Then add the like terms 5x and 3x to get 8x.'),
    q('Expand: (x − 4)²', P(e2), [P([-16, 0, 1]), P([16, 0, 1]), P([-16, -8, 1])],
      `A square means the bracket times itself: (x − 4)(x − 4) = x² − 4x − 4x + 16. The middle term is −8x and the last term is +16.`),
    q('Expand and simplify: (2x + 1)(x − 3)', P(e3), [P([-3, 5, 2]), P([-3, -7, 2]), P([3, -5, 2])],
      '2x · x = 2x², 2x · (−3) = −6x, 1 · x = x, 1 · (−3) = −3. Then −6x + x = −5x.'),
    q('Factorise completely: 6x² + 9x', `${h.int(cf)}x(2x + 3)`, ['3(2x² + 3x)', '3x(2x + 9)', '6x(x + 9)'],
      'The highest common factor of 6x² and 9x is 3x. Dividing each term by 3x gives 2x and 3. Taking out only 3 leaves a common factor of x inside the bracket.'),
    q('Factorise: x² − 49', '(x − 7)(x + 7)', ['(x − 7)²', '(x + 7)²', 'x(x − 49)'],
      'x² and 49 are both perfect squares with a minus between them: a difference of two squares. a² − b² = (a − b)(a + b) with a = x and b = 7.'),
    q('Factorise: x² + x − 12', `${bracket(1, t1.q)}${bracket(1, t1.s)}`, ['(x − 4)(x + 3)', '(x + 6)(x − 2)', '(x + 12)(x − 1)'],
      'Find two numbers that multiply to −12 and add to +1: +4 and −3. So x² + x − 12 = (x + 4)(x − 3).'),
    q('Factorise by grouping: 2a + 2b + ca + cb', '(a + b)(2 + c)', ['(a + b)(2c)', '(2 + a)(b + c)', '(a + c)(b + 2)'],
      'Group the terms in pairs: 2(a + b) + c(a + b). Now (a + b) is a common factor, so the answer is (a + b)(2 + c).'),
    q('Factorise: x³ − 27', `${bracket(1, -3)}(${P(cube.second)})`, ['(x − 3)(x² − 3x + 9)', '(x + 3)(x² − 3x + 9)', '(x − 3)(x² + 9)'],
      'x³ − 27 = x³ − 3³ is a difference of cubes: a³ − b³ = (a − b)(a² + ab + b²). With a = x and b = 3 the second bracket is x² + 3x + 9.'),
    q('Simplify: (x² − 9) ÷ (x² + x − 6)', '(x − 3)/(x − 2)', ['(x − 3)/(x + 2)', '(x + 3)/(x − 2)', '3/2'],
      'Factorise first: (x − 3)(x + 3) over (x + 3)(x − 2). Cancel the common factor (x + 3). Never cancel x² or single terms across + or −.'),
    q('Simplify: 2/x + 3/(2x)', `${sumAB.n}/(${sumAB.d}x)`, ['5/(3x)', '5/(2x)', '6/(2x²)'],
      'The lowest common denominator is 2x. 2/x = 4/(2x). Add: 4/(2x) + 3/(2x) = 7/(2x).'),
    q('Which of these numbers is irrational?', '√2', ['√25', '22/7', '0,75'],
      'A rational number can be written as a fraction of two integers. √25 = 5, 22/7 is a fraction and 0,75 = 3/4. The decimal of √2 never ends and never repeats, so it is irrational.'),
    q('Between which two consecutive integers does √45 lie?', `${lo} and ${hi}`, ['5 and 6', '7 and 8', '22 and 23'],
      '36 < 45 < 49, so 6 < √45 < 7.'),
    q('√45 correct to one decimal place is', dec(h.sqrtRounded(45, 1), 1), [dec(6.5, 1), dec(7, 1), dec(6, 1)],
      'A calculator gives √45 = 6,7082... so to one decimal place it is 6,7.'),
    q('Factorise completely: 2x² − 8', '2(x − 2)(x + 2)', ['2(x² − 4)', '2(x − 2)²', '(x − 2)(x + 4)'],
      'Take out the common factor 2 first: 2(x² − 4). Then x² − 4 is a difference of squares: (x − 2)(x + 2).'),
  ];
})();

// ---------------------------------------------------------------- Exponents
export const exponents: Q[] = (() => {
  const r23 = h.rationalPower(8, 2, 3)!;
  const m3 = h.intPower(2, -3);
  const sol = h.solveExpEquation(2, [32, 1])!;
  const sol2 = h.solveExpEquation(3, [27, 1])! - 1; // 3^(x+1) = 27
  const sol3 = h.solveExpEquation(5, [1, 25])!;
  return [
    q('Simplify: x⁵ · x³', `x${sup(h.expProduct(5, 3))}`, [`x${sup(15)}`, `x${sup(2)}`, `2x${sup(8)}`],
      'Same base, multiply: add the exponents. 5 + 3 = 8, so x⁵ · x³ = x⁸.'),
    q('Simplify: (2x³)²', `4x${sup(h.expPower(3, 2))}`, [`2x${sup(6)}`, `4x${sup(5)}`, `2x${sup(5)}`],
      'Square everything inside the bracket: 2² = 4 and (x³)² = x⁶. So (2x³)² = 4x⁶.'),
    q('What is the value of 2⁻³?', fracStr(m3), ['−8', '1/6', '−1/8'],
      'A negative exponent means the reciprocal: 2⁻³ = 1/2³ = 1/8.'),
    q('What is 5⁰ + 3⁰?', '2', ['0', '1', '8'], 'Any non-zero number to the power 0 is 1, so 5⁰ + 3⁰ = 1 + 1 = 2.'),
    q('Simplify: (a⁶b⁴) ÷ (a²b)', `a${sup(4)}b${sup(3)}`, [`a${sup(3)}b${sup(4)}`, `a${sup(4)}b${sup(4)}`, `a${sup(8)}b${sup(5)}`],
      'Divide letter by letter and subtract the exponents. a: 6 − 2 = 4. For b, a lone b is b¹, so 4 − 1 = 3.'),
    q('What is the value of 8^(2/3)?', fracStr(r23), ['16', '2', '16/3'],
      'The denominator 3 is the root, the numerator 2 is the power: 8^(2/3) = (∛8)² = 2² = 4.'),
    q('Solve for x: 2ˣ = 32', String(sol), ['16', '4', '6'], '32 = 2⁵. When the bases are the same, the exponents are equal, so x = 5.'),
    q('Solve for x: 3^(x + 1) = 27', String(sol2), ['3', '9', '4'], '27 = 3³. So x + 1 = 3 and x = 2. Check: 3^(2+1) = 3³ = 27.'),
    q('Solve for x: 5ˣ = 1/25', int(sol3), ['2', '−5', '1/2'], '1/25 = 5⁻². Same base, so x = −2.'),
    q('Simplify: x⁻² · x⁵', `x${sup(3)}`, [`x${sup(-7)}`, `x${sup(7)}`, `x${sup(-3)}`], 'Add the exponents: −2 + 5 = 3.'),
    q('Simplify: 2^(n + 2) − 2ⁿ', '3 · 2ⁿ', ['2²', '2ⁿ⁺¹', '4 · 2ⁿ'],
      '2^(n + 2) = 2ⁿ · 2² = 4 · 2ⁿ. Then 4 · 2ⁿ − 1 · 2ⁿ = 3 · 2ⁿ.'),
    q('Which expression is equal to √x?', 'x^(1/2)', ['x²', 'x^(−1/2)', '2x'], 'A square root is the exponent 1/2: √x = x^(1/2).'),
    q('Simplify: (2^(x + 1) · 3ˣ) ÷ 6ˣ', '2', ['6', '1', '2ˣ'], '6ˣ = 2ˣ · 3ˣ. So the 3ˣ and 2ˣ cancel, leaving 2¹ = 2.'),
    q('What is the value of −3²?', int(-9), ['9', '−6', '6'], 'The exponent applies only to the 3: −3² = −(3 × 3) = −9. It is (−3)² that equals 9.'),
  ];
})();

// ---------------------------------------------------------------- Number Patterns
export const numberPatterns: Q[] = (() => {
  const r = h.linearRule(5, 3);
  const r2 = h.linearRule(30, -4);
  const t20 = h.linearTerm(4, 5, 20);
  const n62 = h.termNumberOf(2, 3, 62)!;
  const t10 = h.linearTerm(3, 5, 10); // 5n − 2: T1 = 3
  const m12 = h.linearTerm(4, 3, 12);
  const n40 = h.termNumberOf(7, 3, 40)!; // 3n + 4: T1 = 7
  return [
    q('Write down the next two terms: 7; 11; 15; 19; …', h.sequence(7, 4, 6).slice(4).join('; '), ['22; 25', '23; 28', '24; 29'], 'The common difference is 4. 19 + 4 = 23 and 23 + 4 = 27.'),
    q('Find the general term of: 5; 8; 11; 14; …', h.ruleStr(r), [h.ruleStr({ m: 3, c: 5 }), h.ruleStr({ m: 5, c: 3 }), h.ruleStr({ m: 3, c: -2 })],
      'The difference is 3, so Tₙ = 3n + c. For n = 1: 3 + c = 5, so c = 2.'),
    q('What is the 20th term of: 4; 9; 14; 19; …?', String(t20), ['100', '104', '95'], 'd = 5 and T₁ = 4, so Tₙ = 5n − 1. T₂₀ = 5(20) − 1 = 99.'),
    q('Which term of 2; 5; 8; 11; … is equal to 62?', String(n62), ['20', '22', '19'], 'Tₙ = 3n − 1. Set 3n − 1 = 62, so 3n = 63 and n = 21.'),
    q('Which of these numbers is a term of the pattern Tₙ = 4n − 3?', '41', ['42', '40', '38'], 'Add 3 and divide by 4: (41 + 3) ÷ 4 = 11, a whole number, so 41 is T₁₁. The other numbers do not give whole numbers.'),
    q('Find the general term of the decreasing pattern: 30; 26; 22; 18; …', h.ruleStr(r2), [h.ruleStr({ m: -4, c: 30 }), h.ruleStr({ m: 4, c: -34 }), h.ruleStr({ m: -4, c: 26 })],
      'The difference is −4, so Tₙ = −4n + c. For n = 1: −4 + c = 30, so c = 34.'),
    q('What is true about the differences between consecutive terms of a linear pattern?', 'They are all equal', ['They increase by the same amount each time', 'They are all equal to the first term', 'They add up to zero'],
      'A linear pattern has a constant difference. If the differences themselves change, the pattern is not linear.'),
    q('If Tₙ = 5n − 2, what is T₁₀?', String(t10), ['40', '52', '50'], 'Substitute n = 10: 5(10) − 2 = 48.'),
    q('Shape 1 uses 4 matchsticks. Each next shape uses 3 more matchsticks than the one before. How many matchsticks does shape 12 use?', String(m12), ['36', '40', '39'],
      'Tₙ = 3n + 1. T₁₂ = 3(12) + 1 = 37. (The 3 is added 11 times, not 12 times.)'),
    q('For Tₙ = 3n + 4, which value of n gives Tₙ = 40?', String(n40), ['11', '13', '36'], '3n + 4 = 40, so 3n = 36 and n = 12.'),
    q('Which of these is NOT a linear pattern?', '2; 4; 8; 16', ['1; 4; 7; 10', '9; 7; 5; 3', '10; 20; 30; 40'], 'The differences in 2; 4; 8; 16 are 2, 4, 8: they are not constant.'),
    q('In the general term Tₙ = an + b, what does a represent?', 'The common difference', ['The first term', 'The number of terms', 'The term number'], 'Each time n increases by 1, Tₙ changes by a. So a is the constant difference.'),
  ];
})();

// ---------------------------------------------------------------- Equations and Inequalities
export const equationsInequalities: Q[] = (() => {
  const l1 = h.solveLinearBoth(3, 2, 1, 10)!;
  const f2 = h.factorQuadratic(1, -5, 6)!;
  const f3 = h.factorQuadratic(1, 2, -15)!;
  const f5 = h.factorQuadratic(1, 1, -12)!;
  const s6 = h.solveSimultaneous(1, 1, 7, 1, -1, 1)!;
  const s7 = h.solveSimultaneous(2, 1, 11, 1, -3, -5)!;
  const i9 = h.solveInequality(2, 3, '>', 11);
  const i10 = h.solveInequality(-3, 1, '≥', 10);
  const age = (30 - 4) / 2;
  const r14 = h.factorQuadratic(2, -5, -3)!;
  const bothRoots = (f: { p: number; q: number; r: number; s: number }) => {
    const rs = [frac(-f.q, f.p), frac(-f.s, f.r)].sort((a, b) => a[0] / a[1] - b[0] / b[1]);
    return `x = ${fracStr(rs[0])} or x = ${fracStr(rs[1])}`;
  };
  return [
    q('Solve for x: 3x + 2 = x + 10', `x = ${fracStr(l1)}`, ['x = 6', 'x = 2', 'x = 3'], 'Get the x terms on one side: 3x − x = 10 − 2, so 2x = 8 and x = 4.'),
    q('Solve for x: x² − 5x + 6 = 0', bothRoots(f2), ['x = −2 or x = −3', 'x = 1 or x = 6', 'x = 2 or x = −3'], 'Factorise: (x − 2)(x − 3) = 0. A product is zero when one factor is zero, so x = 2 or x = 3.'),
    q('Solve for x: x² + 2x − 15 = 0', bothRoots(f3), ['x = 5 or x = −3', 'x = −5 or x = −3', 'x = 15 or x = −1'], 'Factorise: (x + 5)(x − 3) = 0, so x = −5 or x = 3.'),
    q('Solve for x: x² = 7x', 'x = 0 or x = 7', ['x = 7', 'x = 0', 'x = −7 or x = 0'],
      'Write it as x² − 7x = 0 and factorise: x(x − 7) = 0. Dividing both sides by x would lose the solution x = 0.'),
    q('Solve for x: (x − 2)(x + 3) = 6', bothRoots(f5), ['x = 2 or x = −3', 'x = 8 or x = 3', 'x = 4 or x = −3'],
      'A product of 6 does not make a factor equal 6. Expand: x² + x − 6 = 6, so x² + x − 12 = 0. Then (x + 4)(x − 3) = 0.'),
    q('Solve simultaneously: x + y = 7 and x − y = 1', `x = ${fracStr(s6.x)}; y = ${fracStr(s6.y)}`, ['x = 3; y = 4', 'x = 5; y = 2', 'x = 6; y = 1'],
      'Add the equations: 2x = 8, so x = 4. Then y = 7 − 4 = 3. Check in the second equation: 4 − 3 = 1.'),
    q('Solve simultaneously: 2x + y = 11 and x − 3y = −5', `x = ${fracStr(s7.x)}; y = ${fracStr(s7.y)}`, ['x = 3; y = 5', 'x = 5; y = 1', 'x = 2; y = 7'],
      'From the first equation y = 11 − 2x. Substitute: x − 3(11 − 2x) = −5, so 7x = 28 and x = 4, then y = 3. A pair that fits only one equation is not a solution.'),
    q('Make a the subject of the formula v = u + at', 'a = (v − u)/t', ['a = v − u/t', 'a = (v + u)/t', 'a = t(v − u)'],
      'Subtract u from both sides: v − u = at. Then divide the whole left side by t: a = (v − u)/t.'),
    q('Solve for x: 2x + 3 > 11', `x ${i9.op} ${fracStr(i9.bound)}`, ['x < 4', 'x > 7', 'x > 14'], 'Subtract 3: 2x > 8. Divide by 2 (positive, so the sign stays): x > 4.'),
    q('Solve for x: −3x + 1 ≥ 10', `x ${i10.op} ${fracStr(i10.bound).replace('-', '−')}`, ['x ≥ −3', 'x ≤ 3', 'x ≥ 3'],
      'Subtract 1: −3x ≥ 9. Divide by −3 and reverse the inequality sign: x ≤ −3.'),
    q('Which interval notation shows x ≤ −3?', h.interval([-3, 1], '≤'), ['(−∞; −3)', '[−3; ∞)', '(−3; ∞)'],
      'x ≤ −3 includes −3 (square bracket) and goes down without end (−∞ always has a round bracket).'),
    q('Write −2 < x ≤ 5 in interval notation.', '(−2; 5]', ['[−2; 5)', '(−2; 5)', '[−2; 5]'], 'The < at −2 excludes it (round bracket). The ≤ at 5 includes it (square bracket).'),
    q('Thandi is 4 years older than Sipho. Together their ages add up to 30. How old is Sipho?', String(age), ['14', '11', '26'], 'Let Sipho be x. Then x + (x + 4) = 30, so 2x = 26 and x = 13.'),
    q('Solve for x: 2x² − 5x − 3 = 0', bothRoots(r14), ['x = 3 or x = 1/2', 'x = −3 or x = 1/2', 'x = −3 or x = −1/2'], 'Factorise: (2x + 1)(x − 3) = 0. So x = −1/2 or x = 3.'),
  ];
})();

// ---------------------------------------------------------------- Trigonometry
export const trigonometry: Q[] = (() => {
  const p1 = h.ratiosFromPoint(-3, 4);
  const p2 = h.ratiosFromPoint(5, -12);
  const hyp = h.pythagoras(3, 4);
  const opp30 = h.oppositeFromHyp(10, 30, 0);
  const aTan = h.angleFromTan(5, 8, 1);
  const ladder = h.oppositeFromHyp(6, 60, 1);
  return [
    q('A right-angled triangle has sides 3, 4 and 5 (the hypotenuse is 5). For the angle opposite the side of length 3, what is sin θ?', `${3}/${hyp}`, ['4/5', '3/4', '5/3'], 'sin θ = opposite ÷ hypotenuse = 3/5.'),
    q('In the same triangle (sides 3, 4, 5), what is tan θ for the angle opposite the side of length 3?', '3/4', ['4/3', '3/5', '5/4'], 'tan θ = opposite ÷ adjacent = 3/4.'),
    q('What is the exact value of sin 30°?', h.SPECIAL[30].sin, [h.SPECIAL[60].sin, h.SPECIAL[45].sin, '1'], 'From half of an equilateral triangle with side 2: the side opposite 30° is 1 and the hypotenuse is 2, so sin 30° = 1/2.'),
    q('What is the exact value of tan 60°?', h.SPECIAL[60].tan, ['1/√3', '1/2', '√3/2'], 'In the half-equilateral triangle: opposite 60° is √3 and adjacent is 1, so tan 60° = √3/1 = √3.'),
    q('What is the exact value of cos 45°?', h.SPECIAL[45].cos, ['1/2', '√3/2', '1'], 'In a square cut along its diagonal the legs are 1 and the hypotenuse is √2, so cos 45° = 1/√2.'),
    q('In which quadrant is cos θ negative and sin θ positive?', 'Quadrant 2', ['Quadrant 1', 'Quadrant 3', 'Quadrant 4'], 'In quadrant 2 x is negative and y is positive: sin is positive (+), cos is negative (−) and tan is negative (−).'),
    q('Is tan 200° positive or negative, and why?', 'Positive, because 200° lies in quadrant 3', ['Negative, because 200° lies in quadrant 3', 'Positive, because 200° lies in quadrant 2', 'Negative, because 200° lies in quadrant 2'],
      '180° < 200° < 270°, so 200° is in quadrant 3. There x and y are both negative, so tan θ = y/x is positive.'),
    q('The point P(−3; 4) is on the terminal arm of angle θ. What is cos θ?', fracStr(p1.cos).replace('-', '−'), ['3/5', '−3/4', '4/5'], 'r = √((−3)² + 4²) = 5. cos θ = x/r = −3/5.'),
    q('The point P(5; −12) lies on the terminal arm of θ. What is tan θ?', fracStr(p2.tan).replace('-', '−'), ['12/5', '−5/12', '−12/13'], 'tan θ = y/x = −12/5. (r = 13 is only needed for sin and cos.)'),
    q('In a right-angled triangle the hypotenuse is 10 cm and one angle is 30°. How long is the side opposite the 30° angle?', `${opp30} cm`, ['8,7 cm', '5,8 cm', '20 cm'], 'opposite = hypotenuse × sin 30° = 10 × 0,5 = 5 cm.'),
    q('In a right-angled triangle the side opposite angle θ is 5 and the adjacent side is 8. What is θ, correct to one decimal place?', `${dec(aTan, 1)}°`, [`${dec(h.angleFromTan(8, 5, 1), 1)}°`, `${dec(h.angleFromSin(5, 8, 1), 1)}°`, `${dec(h.angleFromCos(5, 8, 1), 1)}°`],
      'Opposite and adjacent are given, so use tan: tan θ = 5/8. θ = tan⁻¹(5/8) = 32,0°.'),
    q('A 6 m ladder leans against a wall and makes an angle of 60° with the ground. How high up the wall does it reach (one decimal place)?', `${dec(ladder, 1)} m`, ['3,0 m', '10,4 m', '6,9 m'],
      'The height is opposite the 60° angle and the ladder is the hypotenuse: height = 6 × sin 60° = 5,2 m.'),
    q('θ is an acute angle with sin θ = 3/5. What is cos θ?', '4/5', ['3/4', '5/4', '2/5'], 'Draw a right-angled triangle with opposite 3 and hypotenuse 5. The adjacent side is 4 (3-4-5). cos θ = 4/5.'),
    q('For the angle θ opposite the side of length 3 in a 3-4-5 triangle, what is cosec θ?', '5/3', ['3/5', '5/4', '4/3'], 'cosec θ = 1/sin θ. sin θ = 3/5, so cosec θ = 5/3.'),
  ];
})();
