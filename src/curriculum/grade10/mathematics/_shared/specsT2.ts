import { q, type Q } from './bank';
import * as g from '../../../../components/diagrams/maths/grade10Helpers2';
import { fracStr, int } from '../../../../components/diagrams/maths/grade10Helpers';

const { pt } = g;

// ---------------------------------------------------------------- Functions: linear and quadratic
export const functionsLinearQuadratic: Q[] = (() => {
  const xi = g.lineXIntercept(2, -6)!; // y = 2x − 6
  const grad = g.lineGradient(1, 3, 3, 9);
  const l4 = g.lineStr(-2, 5);
  const par = g.parabolaXIntercepts({ a: 1, q: -4 })!;
  const tp = g.parabolaTurning({ a: -1, q: 3 });
  const rg = g.parabolaRange({ a: 1, q: -5 });
  const fit = g.parabolaFromPoints(-3, 2, 5)!;
  const f3 = g.parabolaEval({ a: 2, q: -1 }, 3);
  const through = g.lineThrough(0, -2, 4, 6);
  return [
    q('What are the coordinates of the y-intercept of y = 2x − 6?', pt(0, -6), [pt(0, 6), pt(3, 0), pt(-6, 0)],
      'The y-intercept is where x = 0. Then y = 2(0) − 6 = −6, so the point is (0; −6).'),
    q('What are the coordinates of the x-intercept of y = 2x − 6?', pt(Number(fracStr(xi)), 0), [pt(-3, 0), pt(0, 3), pt(6, 0)],
      'The x-intercept is where y = 0. Then 2x − 6 = 0, so 2x = 6 and x = 3. The point is (3; 0).'),
    q('What is the gradient of the straight line through (1; 3) and (3; 9)?', fracStr(grad), ['1/3', '6', '2'],
      'Gradient = change in y ÷ change in x = (9 − 3) ÷ (3 − 1) = 6 ÷ 2 = 3.'),
    q('A straight line has gradient −2 and cuts the y-axis at 5. What is its equation?', l4, [g.lineStr(2, 5), g.lineStr(-2, -5), g.lineStr(5, -2)],
      'The equation of a line is y = ax + q with a the gradient and q the y-intercept: y = −2x + 5.'),
    q('Which line is parallel to y = 3x − 1?', g.lineStr(3, 4), [g.lineStr(-3, -1), 'y = x/3 − 1', g.lineStr(1, 3)],
      'Parallel lines have the same gradient. y = 3x − 1 has gradient 3, and so does y = 3x + 4.'),
    q('What are the x-intercepts of y = x² − 4?', `x = ${int(par[0])} and x = ${par[1]}`, ['x = 4 only', 'x = −4 and x = 4', 'x = 2 only'],
      'Let y = 0: x² − 4 = 0, so x² = 4 and x = 2 or x = −2. A square has two square roots.'),
    q('What is the turning point of y = −x² + 3?', pt(tp[0], tp[1]), [pt(0, -3), pt(3, 0), pt(-3, 0)],
      'For y = ax² + q the turning point is (0; q). Here q = 3. Because a < 0 it is a maximum.'),
    q('What is the range of y = x² − 5?', g.parabolaRange({ a: 1, q: -5 }), ['y ≤ −5', 'y ≥ 5', 'y ∈ ℝ'],
      'The parabola opens upward with its lowest point at y = −5, so every y-value is −5 or more.'),
    q('Which statement is true for y = −2x²?', 'It opens downwards and its turning point (0; 0) is a maximum', ['It opens upwards and its turning point (0; 0) is a minimum', 'It opens downwards and its turning point (0; 0) is a minimum', 'It opens upwards and has a turning point at (0; −2)'],
      'a = −2 is negative, so the parabola opens downwards. The turning point is (0; q) = (0; 0), the highest point: a maximum.'),
    q('What is the equation of the axis of symmetry of y = x² + 2?', 'x = 0', ['y = 0', 'x = 2', 'y = 2'],
      'The turning point is (0; 2) and the graph is symmetric about the vertical line through it: x = 0, the y-axis.'),
    q('The parabola y = ax² + q has its turning point at (0; −3) and passes through (2; 5). What is its equation?', g.parabolaStr(fit), [g.parabolaStr({ a: 1, q: -3 }), g.parabolaStr({ a: 4, q: -3 }), g.parabolaStr({ a: 2, q: 5 })],
      'q = −3. Substitute (2; 5): 5 = a(2)² − 3, so 4a = 8 and a = 2. The equation is y = 2x² − 3.'),
    q('What is the domain of y = x² + 1?', 'x ∈ ℝ', ['x ≥ 1', 'x ≥ 0', 'y ≥ 1'],
      'The domain is every allowed x-value. You can square any real number, so x ∈ ℝ. (y ≥ 1 is the range.)'),
    q('If f(x) = 2x² − 1, what is f(3)?', String(f3), ['35', '5', '11'],
      'Substitute x = 3: 2(3)² − 1 = 2(9) − 1 = 17. Square the 3 first, then multiply by 2.'),
    q('What is the equation of the straight line through (0; −2) and (4; 6)?', g.lineStr(2, -2), [g.lineStr(2, 2), g.lineStr(-2, -2), g.lineStr(1, -2)],
      `Gradient = (6 − (−2)) ÷ (4 − 0) = 8 ÷ 4 = ${fracStr(through.a)}. The line cuts the y-axis at −2, so y = 2x − 2.`),
  ];
})();

// ---------------------------------------------------------------- Functions: hyperbola, exponential and trigonometric graphs
export const functionsOther: Q[] = (() => {
  const hx = g.hyperbolaXIntercept({ a: 4, q: -2 })!;
  const ey = g.expoYIntercept({ a: 3, b: 2, q: 1 });
  const t1 = g.trigAmplitude({ fn: 'sin', a: 3, q: 0 })!;
  const t2 = g.trigPeriod({ fn: 'tan', a: 1, q: 0 });
  const rg = g.trigRange({ fn: 'sin', a: 2, q: 1 });
  return [
    q('What are the equations of the asymptotes of y = 2/x + 3?', 'x = 0 and y = 3', ['x = 3 and y = 0', 'x = 0 and y = 2', 'x = 2 and y = 0'],
      'For y = a/x + q the vertical asymptote is x = 0 (x cannot be 0) and the horizontal asymptote is y = q = 3.'),
    q('In which quadrants does the graph of y = 3/x lie?', 'Quadrants 1 and 3', ['Quadrants 2 and 4', 'Quadrants 1 and 2', 'Quadrants 3 and 4'],
      'a = 3 is positive, so x and y have the same sign: both positive (quadrant 1) or both negative (quadrant 3).'),
    q('In which quadrants does the graph of y = −2/x lie?', 'Quadrants 2 and 4', ['Quadrants 1 and 3', 'Quadrants 1 and 2', 'Quadrants 3 and 4'],
      'a = −2 is negative, so x and y have opposite signs: quadrant 2 (x < 0, y > 0) and quadrant 4 (x > 0, y < 0).'),
    q('What is the x-intercept of y = 4/x − 2?', pt(Number(fracStr(hx)), 0), [pt(-2, 0), pt(4, 0), pt(0, 2)],
      'Let y = 0: 4/x − 2 = 0, so 4/x = 2 and x = 2. The point is (2; 0).'),
    q('What is the range of y = 1/x + 5?', 'y ≠ 5', ['y ≠ 0', 'y ≠ −5', 'y > 5'],
      'y can be any real number except the horizontal asymptote value q = 5.'),
    q('What is the y-intercept of y = 2ˣ?', pt(0, 1), [pt(0, 2), pt(1, 0), pt(0, 0)], 'Let x = 0: 2⁰ = 1. The graph passes through (0; 1) and never touches the x-axis.'),
    q('What is the equation of the asymptote of y = 2ˣ − 3?', 'y = −3', ['y = 3', 'x = −3', 'y = 0'],
      'The graph of y = 2ˣ has the x-axis (y = 0) as asymptote. Subtracting 3 moves it down to y = −3.'),
    q('What is the y-intercept of y = 3 · 2ˣ + 1?', pt(0, ey), [pt(0, 3), pt(0, 1), pt(0, 7)], 'Let x = 0: 3 · 2⁰ + 1 = 3 · 1 + 1 = 4.'),
    q('What is the range of y = 2ˣ + 1?', 'y > 1', ['y ≥ 1', 'y > 0', 'y ∈ ℝ'], '2ˣ is always positive, so 2ˣ + 1 is always greater than 1, but never equal to 1.'),
    q('Which function decreases as x increases?', 'y = (1/2)ˣ', ['y = 2ˣ', 'y = 3x + 1', 'y = 4ˣ'],
      'In y = bˣ the graph falls when the base b is between 0 and 1. (1/2)ˣ halves each time x goes up by 1.'),
    q('What is the amplitude of y = 3 sin x?', String(t1), ['6', '1', '360°'], 'The amplitude is the largest distance from the middle line: |a| = 3.'),
    q('What is the period of y = tan x?', `${t2}°`, ['360°', '90°', '720°'], 'The graph of tan x repeats every 180°. (sin x and cos x repeat every 360°.)'),
    q('What is the range of y = 2 sin x + 1?', rg, ['−2 ≤ y ≤ 2', '−1 ≤ y ≤ 1', '1 ≤ y ≤ 3'],
      'sin x goes from −1 to 1. Times 2: −2 to 2. Plus 1: −1 to 3.'),
    q('Where does y = sin x cut the x-axis for 0° ≤ x ≤ 360°?', 'x = 0°, 180° and 360°', ['x = 90° and 270°', 'x = 0° and 360° only', 'x = 90°, 180° and 270°'],
      'sin 0° = sin 180° = sin 360° = 0. (90° and 270° are where cos x is 0.)'),
  ];
})();

// ---------------------------------------------------------------- Euclidean geometry
export const euclideanGeometry: Q[] = (() => {
  const mid = g.midSegment(18);
  const k = g.scaleFactor(4, 10);
  const ef = g.scaled(6, k);
  const side = g.otherSide(13, 5)!;
  const dia = g.rhombusOtherDiagonal(10, 12)!;
  return [
    q('What is the sum of the interior angles of any quadrilateral?', `${g.interiorAngleSum(4)}°`, ['180°', '270°', '540°'], 'A quadrilateral splits into two triangles: 2 × 180° = 360°.'),
    q('In parallelogram ABCD, angle A = 70°. What is angle B?', `${g.coInterior(70)}°`, ['70°', '20°', '290°'],
      'Angles A and B are co-interior angles between the parallel sides AD and BC, so they add up to 180°: 180° − 70° = 110°.'),
    q('Which statement about the diagonals of a rhombus is true?', 'They bisect each other at right angles', ['They are equal in length', 'They bisect each other but are not perpendicular', 'They are parallel to each other'],
      'In a rhombus the diagonals bisect each other at 90° (and bisect the angles). They are only equal if the rhombus is a square.'),
    q('Which quadrilateral always has diagonals that are equal and bisect each other?', 'Rectangle', ['Rhombus', 'Kite', 'Parallelogram that is not a rectangle'],
      'The diagonals of a rectangle are equal (and bisect each other). In a rhombus they are perpendicular but not equal.'),
    q('What is true about the diagonals of a kite?', 'They meet at right angles', ['They bisect each other', 'They are equal in length', 'They are parallel'],
      'The diagonals of a kite are perpendicular. Only the diagonal of symmetry is bisected by the other one.'),
    q('In triangle ABC, D and E are the midpoints of AB and AC. If BC = 18 cm, how long is DE?', `${mid} cm`, ['36 cm', '18 cm', '6 cm'],
      'By the midpoint theorem the line joining the midpoints of two sides is parallel to the third side and half as long: 18 ÷ 2 = 9 cm.'),
    q('In triangle ABC, D is the midpoint of AB and DE is parallel to BC, with E on AC. What can you conclude?', 'E is the midpoint of AC', ['E is the midpoint of BC', 'DE = BC', 'Angle A = 90°'],
      'This is the converse of the midpoint theorem: a line through the midpoint of one side, parallel to the base, bisects the other side.'),
    q('In triangles ABC and PQR, AB = PQ, angle B = angle Q and BC = QR. Which condition makes them congruent: SAS, RHS, SSS or AAS?', 'SAS', ['RHS', 'SSS', 'AAS'],
      'Two sides and the angle between them are equal, so the triangles are congruent by side-angle-side (SAS).'),
    q('Triangle ABC is similar to triangle DEF with AB = 4 cm, DE = 10 cm and BC = 6 cm. How long is EF?', `${fracStr(ef)} cm`, ['12 cm', '7,5 cm', '9 cm'],
      'The scale factor is DE ÷ AB = 10 ÷ 4 = 2,5. EF = 6 × 2,5 = 15 cm.'),
    q('In parallelogram ABCD, angle A = (2x + 10)° and angle C = 70°. What is x?', '30', ['35', '60', '15'],
      'Opposite angles of a parallelogram are equal: 2x + 10 = 70, so 2x = 60 and x = 30.'),
    q('ABCD is a rectangle with diagonal AC = 13 cm and side AB = 5 cm. How long is BC?', `${side} cm`, ['8 cm', '18 cm', '144 cm'],
      'Triangle ABC has a right angle at B. By Pythagoras BC² = 13² − 5² = 169 − 25 = 144, so BC = 12 cm.'),
    q('In trapezium ABCD, AB ∥ DC and angle A = 65°. What is angle D?', '115°', ['65°', '25°', '295°'],
      'A and D are co-interior angles between the parallel lines AB and DC, so they add up to 180°: 180° − 65° = 115°.'),
    q('Which statement about a square is true?', 'It is both a rectangle and a rhombus', ['It is a kite but not a rhombus', 'It has only one pair of parallel sides', 'Its diagonals are not equal'],
      'A square has four equal sides (rhombus) and four right angles (rectangle), so it has all the properties of both.'),
    q('A rhombus has sides of 10 cm and one diagonal of 12 cm. How long is the other diagonal?', `${dia} cm`, ['8 cm', '20 cm', '12 cm'],
      'The diagonals bisect each other at 90°. Half the diagonals are 6 and x, so 6² + x² = 10², x = 8. The other diagonal is 2 × 8 = 16 cm.'),
  ];
})();

// ---------------------------------------------------------------- Mid-year exam preparation: mixed Term 1 and Term 2 items, marks shown
import * as h from '../../../../components/diagrams/maths/grade10Helpers';

export const midYearExamPrep: Q[] = (() => {
  const r2 = h.integerRoots(1, -3, -10)!; // x² − 3x − 10
  const t15 = h.linearTerm(9, 4, 15);
  const sim = h.solveSimultaneous(3, 2, 16, 1, -1, 2)!;
  const side40 = h.oppositeFromHyp(15, 40, 1);
  const wrongSides = [h.adjacentFromHyp(15, 40, 1), h.oppositeFromAdj(15, 40, 1), h.roundTo(15 / h.sinD(40), 1)];
  const grad = g.lineGradient(-1, 5, 2, -1);
  const ineq = h.solveInequality(-2, 5, '<', 11);
  const exp = h.solveExpEquation(3, [81, 1])! + 2;
  const xInt = g.parabolaXIntercepts({ a: -3, q: 12 })!;
  const angleQ = 3 * 30 + 10;
  return [
    q('(2 marks) Factorise completely: 3x² − 12', '3(x − 2)(x + 2)', ['3(x² − 4)', '3(x − 2)²', '(x − 2)(x + 6)'],
      'Take out the common factor 3 first: 3(x² − 4). Then x² − 4 is a difference of squares, so 3(x − 2)(x + 2). One mark for the common factor, one for the squares.'),
    q('(3 marks) Solve for x: x² − 3x − 10 = 0', `x = ${int(r2[0])} or x = ${r2[1]}`, ['x = 2 or x = −5', 'x = −2 or x = −5', 'x = 10 or x = −1'],
      'Factorise (1 mark): (x − 5)(x + 2) = 0. Set each factor to 0 (1 mark): x = 5 or x = −2 (1 mark).'),
    q('(2 marks) Simplify: (3x²)³ ÷ 9x⁴', '3x²', ['9x²', '3x⁴', '27x²'], '(3x²)³ = 27x⁶ (1 mark). Then 27x⁶ ÷ 9x⁴ = 3x² (1 mark): divide the numbers and subtract the exponents.'),
    q('(2 marks) Solve for x: 3^(x − 2) = 81', String(exp), ['4', '5', '2'], '81 = 3⁴ (1 mark), so x − 2 = 4 and x = 6 (1 mark).'),
    q('(3 marks) Solve for x and write the answer in interval notation: 5 − 2x < 11', h.interval(ineq.bound, ineq.op), ['(−∞; −3)', '(3; ∞)', '[−3; ∞)'],
      '−2x < 6 (1 mark). Divide by −2 and reverse the sign (1 mark): x > −3, which is (−3; ∞) (1 mark).'),
    q('(2 marks) What is the 15th term of the pattern 9; 13; 17; 21; …?', String(t15), ['69', '60', '56'], 'd = 4, so Tₙ = 4n + 5 (1 mark). T₁₅ = 4(15) + 5 = 65 (1 mark).'),
    q('(3 marks) Solve simultaneously: 3x + 2y = 16 and x − y = 2', `x = ${fracStr(sim.x)}; y = ${fracStr(sim.y)}`, ['x = 2; y = 5', 'x = 6; y = −1', 'x = 0; y = 8'],
      'From the second equation x = y + 2 (1 mark). Substitute: 3(y + 2) + 2y = 16, so 5y = 10 and y = 2 (1 mark). Then x = 4 (1 mark).'),
    q('(3 marks) A right-angled triangle has hypotenuse 15 cm and an angle of 40°. How long is the side opposite the 40° angle (one decimal place)?', `${h.dec(side40, 1)} cm`, wrongSides.map((v) => `${h.dec(v, 1)} cm`) as [string, string, string],
      'opposite = hypotenuse × sin 40° (1 mark for the ratio, 1 mark for the substitution). 15 × 0,6428 = 9,6 cm (1 mark).'),
    q('(2 marks) θ is acute and sin θ = 5/13. What is cos θ?', '12/13', ['5/12', '13/12', '8/13'], 'Draw a triangle with opposite 5 and hypotenuse 13 (1 mark). The adjacent side is 12 (5-12-13), so cos θ = 12/13 (1 mark).'),
    q('(2 marks) What is the gradient of the line through (−1; 5) and (2; −1)?', fracStr(grad), ['2', '−1/2', '−6'], 'Gradient = (−1 − 5) ÷ (2 − (−1)) = −6 ÷ 3 = −2.'),
    q('(2 marks) What are the x-intercepts of y = −3x² + 12?', `x = ${int(xInt[0])} and x = ${xInt[1]}`, ['x = −4 and x = 4', 'x = 2 only', 'x = −12 and x = 12'], 'Let y = 0: 3x² = 12, so x² = 4 and x = ±2.'),
    q('(2 marks) What are the equations of the asymptotes of y = −1/x + 2?', 'x = 0 and y = 2', ['x = 2 and y = 0', 'x = 0 and y = −1', 'x = −1 and y = 2'], 'The vertical asymptote is x = 0 (1 mark) and the horizontal asymptote is y = 2 (1 mark).'),
    q('(2 marks) What is the range of y = 3ˣ − 2?', 'y > −2', ['y ≥ −2', 'y > 2', 'y > 0'], '3ˣ > 0 for every x, so 3ˣ − 2 > −2: the range is y > −2 (the asymptote value is never reached).'),
    q('(3 marks) In parallelogram PQRS, angle P = (2x + 20)° and angle Q = (3x + 10)°. How big is angle Q?', `${angleQ}°`, ['80°', '30°', '90°'],
      'P and Q are co-interior angles, so they add up to 180°: 5x + 30 = 180 (1 mark), x = 30 (1 mark). Angle Q = 3(30) + 10 = 100° (1 mark).'),
    q('(2 marks) D and E are the midpoints of AB and AC in triangle ABC. DE = (2x + 1) cm and BC = (5x − 3) cm. What is x?', '5', ['4/3', '7/8', '6'],
      'BC = 2 × DE by the midpoint theorem (1 mark): 5x − 3 = 4x + 2, so x = 5 (1 mark).'),
    q('(2 marks) Which of these numbers is irrational?', '√20', ['√(25/4)', '−3/7', '0,125'], '√(25/4) = 5/2, −3/7 is a fraction and 0,125 = 1/8. 20 is not a perfect square, so √20 is irrational.'),
  ];
})();
