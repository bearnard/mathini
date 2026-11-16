import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BalanceEquation, InequalityLine, MiniGraph } from '../../../../../components/diagrams/maths/Grade10Maths';
import * as h from '../../../../../components/diagrams/maths/grade10Helpers';

// Every number in the slides below comes from the tested helpers in grade10Helpers.ts (grade10Helpers.test.ts, g10MathsLessons.test.ts).
const P = h.fmtPoly;
const sq = <sup className="text-[0.75em] font-bold">2</sup>;
const f = h.fracStr;

// slide 1: linear and literal equations
const lin1 = h.solveLinearBoth(5, 1, 2, 16)!; // 5x + 1 = 2x + 16

// slide 2: quadratic equations
const q1 = h.factorQuadratic(1, -7, 12)!; // x² − 7x + 12
const q1roots = h.integerRoots(1, -7, 12)!;
const q2 = h.expandBinomials(1, 1, 1, 5); // (x + 1)(x + 5) = 21 ...
const q2std = h.polySub(q2, [21]); // x² + 6x − 16
const q2f = h.factorQuadratic(1, 6, -16)!;
const q2roots = h.integerRoots(1, 6, -16)!;

// slide 3: simultaneous equations
const s1 = h.solveSimultaneous(1, 1, 10, 1, -1, 4)!; // x + y = 10, x − y = 4
const sub = h.solveSimultaneous(1, -2, -3, 2, 3, 8)!; // y = ... substitution case: x − 2y = −3 and 2x + 3y = 8

// slide 4: inequalities
const i1 = h.solveInequality(3, -4, '≤', 11); // 3x − 4 ≤ 11
const i2 = h.solveInequality(-2, 5, '<', 9); // −2x + 5 < 9
const a2 = h.solveInequality(-2, 5, '<', 9);

// "Check yourself"
const c1 = h.solveLinearBoth(4, -3, 1, 9)!;
const c2 = h.integerRoots(1, 3, -10)!;
const c3 = h.solveSimultaneous(1, 1, 9, 1, -1, 3)!;
const c4 = h.solveInequality(-4, 3, '≥', 19);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Linear and literal equations',
    content: slide(
      <>
        <Rule>Do the same to both sides to get x on its own. Collect the x terms on one side and the numbers on the other.</Rule>
        <BalanceEquation left="5x + 1" right="2x + 16" />
        <Worked
          steps={[
            <>5x + 1 = 2x + 16. Subtract 2x: 3x + 1 = 16.</>,
            <>Subtract 1: 3x = 15. Divide by 3: x = <strong>{f(lin1)}</strong>.</>,
            <>Check: 5(5) + 1 = 26 and 2(5) + 16 = 26 ✓.</>,
            <>A literal equation has letters instead of numbers. Make b the subject of A = ½bh: multiply by 2 to get 2A = bh, then divide by h: <strong>b = 2A/h</strong>.</>,
          ]}
        />
        <Mistake>
          Moving a term to the other side without changing its sign. When 2x goes across the equals sign it becomes −2x, so 5x − 2x = 3x.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Quadratic equations',
    content: slide(
      <>
        <Rule>Write the equation as ax{sq} + bx + c = 0, factorise, then set each factor equal to 0. If a product is 0, one of the factors is 0.</Rule>
        <MiniGraph
          x={[0, 6]}
          y={[-2, 12]}
          yEvery={2}
          curves={[{ f: (x: number) => x * x - 7 * x + 12, label: 'y = x² − 7x + 12', labelAt: 6, labelDy: -14, labelAnchor: 'end' }]}
          points={q1roots.map((r) => ({ x: r, y: 0, label: `x = ${r}`, dy: -4 }))}
          aria={`The parabola y = x squared minus 7x plus 12 crosses the x-axis at x = ${q1roots[0]} and x = ${q1roots[1]}. These are the solutions of the equation.`}
        />
        <Worked
          steps={[
            <>x{sq} − 7x + 12 = 0 factorises as {h.bracket(1, q1.q)}{h.bracket(1, q1.s)} = 0.</>,
            <>So x − 3 = 0 or x − 4 = 0, giving x = <strong>{h.int(q1roots[0])}</strong> or x = <strong>{h.int(q1roots[1])}</strong>.</>,
            <>(x + 1)(x + 5) = 21. Expand: {P(q2)} = 21, so {P(q2std)} = 0.</>,
            <>Factorise: {h.bracket(1, q2f.q)}{h.bracket(1, q2f.s)} = 0, so x = <strong>{h.int(q2roots[0])}</strong> or x = <strong>{h.int(q2roots[1])}</strong>.</>,
          ]}
        />
        <Mistake>
          Setting each bracket equal to 21. Only when the product is 0 can you set the factors to 0. Move everything to one side first so the other side is 0.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Simultaneous equations',
    content: slide(
      <>
        <Rule>Two equations, two unknowns. Eliminate one letter by adding or subtracting, or substitute one equation into the other. Then find the second letter and check in both equations.</Rule>
        <MiniGraph
          x={[0, 10]}
          y={[-4, 12]}
          tickEvery={2}
          curves={[{ f: (x: number) => 10 - x, label: 'x + y = 10', labelAt: 0.4, labelAnchor: 'start', labelDy: -6 }, { f: (x: number) => x - 4, label: 'x − y = 4', labelAt: 9.6, labelAnchor: 'end', labelDy: -8 }]}
          points={[{ x: s1.x[0], y: s1.y[0], label: `(${s1.x[0]}; ${s1.y[0]})`, dy: -9 }]}
          aria={`The lines x + y = 10 and x − y = 4 cross at the point (${s1.x[0]}; ${s1.y[0]}), which is the solution of both equations.`}
        />
        <Worked
          steps={[
            <>x + y = 10 and x − y = 4. Add: 2x = 14, so x = <strong>{f(s1.x)}</strong>.</>,
            <>Substitute into x + y = 10: y = 10 − 7 = <strong>{f(s1.y)}</strong>.</>,
            <>Check in x − y = 4: 7 − 3 = 4 ✓.</>,
            <>Substitution: x − 2y = −3 gives x = 2y − 3. Put it in 2x + 3y = 8: 2(2y − 3) + 3y = 8, so 7y = 14, y = <strong>{f(sub.y)}</strong> and x = <strong>{f(sub.x)}</strong>.</>,
          ]}
        />
        <Mistake>
          Stopping after one letter, or checking in only one equation. A solution must make both equations true.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Inequalities and intervals',
    content: slide(
      <>
        <Rule>Solve an inequality like an equation, with one difference: when you multiply or divide by a negative number, reverse the inequality sign.</Rule>
        <InequalityLine bound={i1.bound[0] / i1.bound[1]} op={i1.op} />
        <Worked
          steps={[
            <>3x − 4 ≤ 11. Add 4: 3x ≤ 15. Divide by 3: <strong>x ≤ {f(i1.bound)}</strong>. Interval notation: <strong>{h.interval(i1.bound, i1.op)}</strong>.</>,
            <>−2x + 5 &lt; 9. Subtract 5: −2x &lt; 4.</>,
            <>Divide by −2 and reverse the sign: <strong>x {a2.op} {f(a2.bound)}</strong>, which is <strong>{h.interval(a2.bound, a2.op)}</strong>.</>,
            <>A square bracket includes the end point, a round bracket excludes it. Infinity ∞ always gets a round bracket.</>,
          ]}
        />
        <Mistake>
          Forgetting to reverse the sign. From −2x &lt; 4, writing x &lt; −2 is wrong. Test x = 0: −2(0) + 5 = 5 &lt; 9 is true, but x = 0 is not less than −2.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Solve 4x − 3 = x + 9.</>,
          <>Solve x{sq} + 3x − 10 = 0.</>,
          <>Solve x + y = 9 and x − y = 3.</>,
          <>Solve −4x + 3 ≥ 19 and write the answer in interval notation.</>,
        ]}
        answers={[
          <>3x = 12, so x = <strong>{f(c1)}</strong>.</>,
          <>(x + 5)(x − 2) = 0, so x = <strong>{h.int(c2[0])}</strong> or x = <strong>{h.int(c2[1])}</strong>.</>,
          <>Add: 2x = 12, x = <strong>{f(c3.x)}</strong>, then y = 9 − 6 = <strong>{f(c3.y)}</strong>.</>,
          <>−4x ≥ 16. Divide by −4 and reverse: <strong>x ≤ {f(c4.bound)}</strong>, which is <strong>{h.interval(c4.bound, c4.op)}</strong>.</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "Solve for x: 3x + 2 = x + 10",
    options: ["x = 6", "x = 4", "x = 2", "x = 3"],
    answer: "x = 4",
    explanation: "Get the x terms on one side: 3x − x = 10 − 2, so 2x = 8 and x = 4.",
  },
  {
    prompt: "Solve for x: x² − 5x + 6 = 0",
    options: ["x = 2 or x = 3", "x = −2 or x = −3", "x = 1 or x = 6", "x = 2 or x = −3"],
    answer: "x = 2 or x = 3",
    explanation: "Factorise: (x − 2)(x − 3) = 0. A product is zero when one factor is zero, so x = 2 or x = 3.",
  },
  {
    prompt: "Solve for x: x² + 2x − 15 = 0",
    options: ["x = 5 or x = −3", "x = −5 or x = −3", "x = 15 or x = −1", "x = −5 or x = 3"],
    answer: "x = −5 or x = 3",
    explanation: "Factorise: (x + 5)(x − 3) = 0, so x = −5 or x = 3.",
  },
  {
    prompt: "Solve for x: x² = 7x",
    options: ["x = 7", "x = 0", "x = 0 or x = 7", "x = −7 or x = 0"],
    answer: "x = 0 or x = 7",
    explanation: "Write it as x² − 7x = 0 and factorise: x(x − 7) = 0. Dividing both sides by x would lose the solution x = 0.",
  },
  {
    prompt: "Solve for x: (x − 2)(x + 3) = 6",
    options: ["x = 2 or x = −3", "x = −4 or x = 3", "x = 8 or x = 3", "x = 4 or x = −3"],
    answer: "x = −4 or x = 3",
    explanation: "A product of 6 does not make a factor equal 6. Expand: x² + x − 6 = 6, so x² + x − 12 = 0. Then (x + 4)(x − 3) = 0.",
  },
  {
    prompt: "Solve simultaneously: x + y = 7 and x − y = 1",
    options: ["x = 4; y = 3", "x = 3; y = 4", "x = 5; y = 2", "x = 6; y = 1"],
    answer: "x = 4; y = 3",
    explanation: "Add the equations: 2x = 8, so x = 4. Then y = 7 − 4 = 3. Check in the second equation: 4 − 3 = 1.",
  },
  {
    prompt: "Solve simultaneously: 2x + y = 11 and x − 3y = −5",
    options: ["x = 3; y = 5", "x = 5; y = 1", "x = 2; y = 7", "x = 4; y = 3"],
    answer: "x = 4; y = 3",
    explanation: "From the first equation y = 11 − 2x. Substitute: x − 3(11 − 2x) = −5, so 7x = 28 and x = 4, then y = 3. A pair that fits only one equation is not a solution.",
  },
  {
    prompt: "Make a the subject of the formula v = u + at",
    options: ["a = v − u/t", "a = (v + u)/t", "a = (v − u)/t", "a = t(v − u)"],
    answer: "a = (v − u)/t",
    explanation: "Subtract u from both sides: v − u = at. Then divide the whole left side by t: a = (v − u)/t.",
  },
  {
    prompt: "Solve for x: 2x + 3 > 11",
    options: ["x < 4", "x > 4", "x > 7", "x > 14"],
    answer: "x > 4",
    explanation: "Subtract 3: 2x > 8. Divide by 2 (positive, so the sign stays): x > 4.",
  },
  {
    prompt: "Solve for x: −3x + 1 ≥ 10",
    options: ["x ≤ −3", "x ≥ −3", "x ≤ 3", "x ≥ 3"],
    answer: "x ≤ −3",
    explanation: "Subtract 1: −3x ≥ 9. Divide by −3 and reverse the inequality sign: x ≤ −3.",
  },
  {
    prompt: "Which interval notation shows x ≤ −3?",
    options: ["(−∞; −3)", "[−3; ∞)", "(−3; ∞)", "(−∞; −3]"],
    answer: "(−∞; −3]",
    explanation: "x ≤ −3 includes −3 (square bracket) and goes down without end (−∞ always has a round bracket).",
  },
  {
    prompt: "Write −2 < x ≤ 5 in interval notation.",
    options: ["[−2; 5)", "(−2; 5)", "(−2; 5]", "[−2; 5]"],
    answer: "(−2; 5]",
    explanation: "The < at −2 excludes it (round bracket). The ≤ at 5 includes it (square bracket).",
  },
  {
    prompt: "Thandi is 4 years older than Sipho. Together their ages add up to 30. How old is Sipho?",
    options: ["14", "13", "11", "26"],
    answer: "13",
    explanation: "Let Sipho be x. Then x + (x + 4) = 30, so 2x = 26 and x = 13.",
  },
  {
    prompt: "Solve for x: 2x² − 5x − 3 = 0",
    options: ["x = −1/2 or x = 3", "x = 3 or x = 1/2", "x = −3 or x = 1/2", "x = −3 or x = −1/2"],
    answer: "x = −1/2 or x = 3",
    explanation: "Factorise: (2x + 1)(x − 3) = 0. So x = −1/2 or x = 3.",
  },
];
// BANK:END

const EquationsInequalities = () => (
  <CapsSubjectTopic
    title="Equations and Inequalities"
    subtitle="Linear, quadratic and simultaneous equations, and inequalities"
    learnSteps={learnSteps}
    task="gr10-equations-inequalities-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default EquationsInequalities;
