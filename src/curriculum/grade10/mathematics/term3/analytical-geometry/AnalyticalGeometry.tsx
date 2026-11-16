import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { MiniGraph } from '../../../../../components/diagrams/maths/Grade10Maths';
import { fracStr, type Frac } from '../../../../../components/diagrams/maths/grade10Helpers';
import * as t from '../../../../../components/diagrams/maths/grade10Helpers3';

// Every number in the slides below comes from the tested helpers in grade10Helpers3.ts (grade10Helpers3.test.ts, g10MathsBankT3.test.ts).
const f = fracStr;
const pt = (p: t.P) => `(${String(p[0]).replace('-', '−')}; ${String(p[1]).replace('-', '−')})`;
const fp = (p: [Frac, Frac]) => `(${f(p[0])}; ${f(p[1])})`;

// slide 1: distance
const A: t.P = [1, 2];
const B: t.P = [4, 6];
const AB2 = t.distanceSquared(A, B);
const AB = t.distanceExact(A, B);
// slide 2: gradient and midpoint
const P: t.P = [-2, 3];
const Q: t.P = [6, 7];
const midPQ = t.midpoint(P, Q);
const mAB = t.gradient(A, B);
// slide 3: parallel, perpendicular, end point
const m1 = t.gradient([1, 2], [4, 8]);
const mPerp = t.perpendicular([2, 3]);
const M: t.P = [3, 1];
const start: t.P = [1, -2];
const end = t.endFromMidpoint(start, M);
// slide 4: collinear and parallelogram
const C: t.P = [5, 10];
const okColl = t.collinear([1, 2], [3, 6], C);
const D: t.P = t.parallelogramD([0, 0], [4, 1], [5, 4]);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The distance between two points',
    content: slide(
      <>
        <Rule>The distance between A(x₁; y₁) and B(x₂; y₂) comes from the theorem of Pythagoras: AB² = (x₂ − x₁)² + (y₂ − y₁)². Take the square root last.</Rule>
        <MiniGraph
          x={[0, 6]}
          y={[0, 8]}
          xTicks={[1, 2, 3, 4, 5]}
          yTicks={[2, 4, 6]}
          curves={[{ f: (x: number) => 2 + (4 / 3) * (x - 1), label: 'AB' }]}
          points={[
            { x: A[0], y: A[1], label: `A${pt(A)}`, anchor: 'start', dy: 10 },
            { x: B[0], y: B[1], label: `B${pt(B)}`, anchor: 'end', dy: -6 },
          ]}
          aria={`A line segment from A${pt(A)} to B${pt(B)}. The horizontal step is ${B[0] - A[0]} and the vertical step is ${B[1] - A[1]}, so AB is the hypotenuse of a right-angled triangle.`}
        />
        <Worked
          title={`Distance from A${pt(A)} to B${pt(B)}`}
          steps={[
            <>Horizontal step: {B[0]} − {A[0]} = {B[0] - A[0]}. Vertical step: {B[1]} − {A[1]} = {B[1] - A[1]}.</>,
            <>AB² = {B[0] - A[0]}² + {B[1] - A[1]}² = {(B[0] - A[0]) ** 2} + {(B[1] - A[1]) ** 2} = <strong>{AB2}</strong>.</>,
            <>AB = √{AB2} = <strong>{AB}</strong>.</>,
          ]}
        />
        <Mistake>Taking the square root of each part separately, or forgetting to square the differences. Square both steps, add them, and only then take the root.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gradient and midpoint',
    content: slide(
      <>
        <Rule>The gradient is the rise over the run: m = (y₂ − y₁) ÷ (x₂ − x₁). The midpoint is the average of the coordinates: ((x₁ + x₂)/2 ; (y₁ + y₂)/2). A vertical line has no defined gradient.</Rule>
        <MiniGraph
          x={[-3, 7]}
          y={[0, 9]}
          xTicks={[-2, 2, 6]}
          yTicks={[3, 5, 7]}
          curves={[{ f: (x: number) => 3 + (x + 2) / 2, label: 'PQ' }]}
          points={[
            { x: P[0], y: P[1], label: `P${pt(P)}`, anchor: 'start', dy: 10 },
            { x: Number(f(midPQ[0])), y: Number(f(midPQ[1])), label: `M${fp(midPQ)}`, anchor: 'start', dy: 10 },
            { x: Q[0], y: Q[1], label: `Q${pt(Q)}`, anchor: 'end', dy: -6 },
          ]}
          aria={`The line PQ from P${pt(P)} to Q${pt(Q)}. Its midpoint M is ${fp(midPQ)}, exactly half way along.`}
        />
        <Worked
          title="Gradient and midpoint"
          steps={[
            <>Gradient of AB: ({B[1]} − {A[1]}) ÷ ({B[0]} − {A[0]}) = {B[1] - A[1]}/{B[0] - A[0]} = <strong>{f(mAB)}</strong>.</>,
            <>Midpoint of the line joining {pt(P)} and {pt(Q)}: x = ({P[0]} + {Q[0]}) ÷ 2 = {f(midPQ[0])}, y = ({P[1]} + {Q[1]}) ÷ 2 = {f(midPQ[1])}.</>,
            <>So the midpoint is <strong>{fp(midPQ)}</strong>.</>,
            <>The vertical line x = 4 has a run of 0, so its gradient is not defined (we cannot divide by 0).</>,
          ]}
        />
        <Mistake>Mixing the order of the points: subtract in the same order on the top and the bottom. Another trap is adding the coordinates and forgetting to divide by 2 for the midpoint.</Mistake>
      </>,
    ),
  },
  {
    title: 'Parallel, perpendicular and end points',
    content: slide(
      <>
        <Rule>Parallel lines have equal gradients. Perpendicular lines have gradients whose product is −1: if m = a/b, the perpendicular gradient is −b/a. If M is the midpoint of AB, then B = 2M − A.</Rule>
        <MiniGraph
          x={[-4, 4]}
          y={[-4, 4]}
          xTicks={[-2, 2]}
          yTicks={[-2, 2]}
          curves={[
            { f: (x: number) => (2 / 3) * x, label: 'm = 2/3', labelAt: 3.6, labelAnchor: 'end', labelDy: -4 },
            { f: (x: number) => (-3 / 2) * x, label: 'm = −3/2', labelAt: -2.4, labelAnchor: 'start', labelDy: -4 },
          ]}
          aria="Two perpendicular lines through the origin. One has gradient 2/3 and the other has gradient −3/2, the negative reciprocal. They meet at a right angle."
        />
        <Worked
          title="Three quick results"
          steps={[
            <>Parallel: a line with gradient −3 has parallel lines with gradient <strong>−3</strong>.</>,
            <>Perpendicular: gradient 2/3 gives <strong>{f(mPerp as Frac)}</strong>, because (2/3) × ({f(mPerp as Frac)}) = −1.</>,
            <>End point: M{pt(M)} is the midpoint of AB and A is {pt(start)}. B = (2 × {M[0]} − {start[0]} ; 2 × {M[1]} − ({String(start[1]).replace('-', '−')})) = <strong>{pt(end)}</strong>.</>,
            <>Check: the gradient of the line through {pt([1, 2])} and {pt([4, 8])} is {f(m1)}.</>,
          ]}
        />
        <Mistake>Giving the negative of the gradient instead of the negative reciprocal: for 2/3 the perpendicular gradient is −3/2, not −2/3.</Mistake>
      </>,
    ),
  },
  {
    title: 'Collinear points and special shapes',
    content: slide(
      <>
        <Rule>Three points are collinear when the gradients between them are equal. In a parallelogram ABCD the diagonals bisect each other, so D = A + C − B. A right angle at R needs the two gradients at R to multiply to −1.</Rule>
        <MiniGraph
          x={[0, 6]}
          y={[0, 12]}
          xTicks={[1, 3, 5]}
          yTicks={[2, 6, 10]}
          curves={[{ f: (x: number) => 2 * x }]}
          points={[
            { x: 1, y: 2, label: 'A(1; 2)', anchor: 'start', dy: 10 },
            { x: 3, y: 6, label: 'B(3; 6)', anchor: 'start', dy: 10 },
            { x: 5, y: 10, label: 'C(5; 10)', anchor: 'end', dy: -6 },
          ]}
          aria="The points A(1; 2), B(3; 6) and C(5; 10) lie on one straight line with gradient 2, so they are collinear."
        />
        <Worked
          title="Collinear and parallelogram"
          steps={[
            <>A{pt([1, 2])}, B{pt([3, 6])} and C{pt(C)}: gradient AB = 2, gradient AC = {f(t.gradient([1, 2], C))}.</>,
            <>The gradients are equal, so the points are collinear: {String(okColl)}. This is why k = 10 for C(5; k).</>,
            <>Parallelogram A{pt([0, 0])}, B{pt([4, 1])}, C{pt([5, 4])}: D = ({0 + 5 - 4} ; {0 + 4 - 1}) = <strong>{pt(D)}</strong>.</>,
            <>Right angle: gradients with product −1 at the same vertex show a right angle there.</>,
          ]}
        />
        <Mistake>Comparing gradients of segments that do not share a point. For collinear points all the gradients must be measured between the same points.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Find the distance between {pt([0, 0])} and {pt([-5, 12])}.</>,
            <>Find the gradient of the line through {pt([1, 2])} and {pt([4, 8])}.</>,
            <>Find the midpoint of the line joining {pt([-2, 3])} and {pt([6, 7])}.</>,
            <>A line has gradient 2/3. What is the gradient of a line perpendicular to it?</>,
          ]}
          answers={[
            <>√({(-5) ** 2} + {12 ** 2}) = √{t.distanceSquared([0, 0], [-5, 12])} = <strong>{t.distanceExact([0, 0], [-5, 12])}</strong>.</>,
            <>({8} − {2}) ÷ ({4} − {1}) = <strong>{f(m1)}</strong>.</>,
            <><strong>{fp(midPQ)}</strong>.</>,
            <><strong>{f(mPerp as Frac)}</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "What is the distance between A(1; 2) and B(4; 6)?",
    options: ["7", "5", "25", "2,6"],
    answer: "5",
    explanation: "d = √((4 − 1)² + (6 − 2)²) = √(9 + 16) = √25 = 5.",
  },
  {
    prompt: "What are the coordinates of the midpoint of the line joining (−2; 3) and (6; 7)?",
    options: ["(2; 5)", "(4; 2)", "(8; 10)", "(−1; 2)"],
    answer: "(2; 5)",
    explanation: "Add the x-coordinates and halve: (−2 + 6)/2 = 2. Add the y-coordinates and halve: (3 + 7)/2 = 5. The midpoint is (2; 5).",
  },
  {
    prompt: "What is the gradient of the line through (1; 2) and (4; 8)?",
    options: ["1/2", "3", "6", "2"],
    answer: "2",
    explanation: "Gradient = (8 − 2) ÷ (4 − 1) = 6 ÷ 3 = 2. Change in y over change in x.",
  },
  {
    prompt: "M(3; 1) is the midpoint of AB and A is (1; −2). What are the coordinates of B?",
    options: ["(2; 3)", "(4; −1)", "(5; 4)", "(7; 0)"],
    answer: "(5; 4)",
    explanation: "The midpoint is halfway, so B is as far from M as A is, in the same direction: x: 2(3) − 1 = 5 and y: 2(1) − (−2) = 4. B is (5; 4).",
  },
  {
    prompt: "A line has gradient 2/3. What is the gradient of a line perpendicular to it?",
    options: ["3/2", "−3/2", "−2/3", "2/3"],
    answer: "−3/2",
    explanation: "Perpendicular gradients multiply to −1: (2/3) × m = −1, so m = −3/2.",
  },
  {
    prompt: "Line AB has a gradient of −3. What is the gradient of a line parallel to AB?",
    options: ["−3", "3", "1/3", "−1/3"],
    answer: "−3",
    explanation: "Parallel lines have equal gradients, so the gradient is also −3.",
  },
  {
    prompt: "A(1; 2), B(3; 6) and C(5; k) lie on one straight line. What is k?",
    options: ["8", "9", "12", "10"],
    answer: "10",
    explanation: "The gradient AB = (6 − 2) ÷ (3 − 1) = 2. For C to be on the line, the gradient AC must also be 2: (k − 2) ÷ 4 = 2, so k = 10.",
  },
  {
    prompt: "ABCD is a parallelogram with A(0; 0), B(4; 1) and C(5; 4). What are the coordinates of D?",
    options: ["(9; 5)", "(−1; −3)", "(1; 3)", "(0; 4)"],
    answer: "(1; 3)",
    explanation: "The diagonals of a parallelogram bisect each other, so the midpoint of AC is the midpoint of BD. D = A + C − B = (0 + 5 − 4; 0 + 4 − 1) = (1; 3).",
  },
  {
    prompt: "Q(1; 2), R(4; 6) and S(8; 3) are the vertices of a triangle. Which angle is a right angle?",
    options: ["Angle Q", "Angle R", "Angle S", "None of the angles"],
    answer: "Angle R",
    explanation: "Gradient QR = 4/3 and gradient RS = (3 − 6) ÷ (8 − 4) = −3/4. The product is (4/3)(−3/4) = −1, so QR ⊥ RS and the right angle is at R.",
  },
  {
    prompt: "What is the distance from the origin to the point (−5; 12)?",
    options: ["13", "7", "17", "169"],
    answer: "13",
    explanation: "d = √((−5 − 0)² + (12 − 0)²) = √(25 + 144) = √169 = 13.",
  },
  {
    prompt: "Which formula gives the midpoint of the line joining (x₁; y₁) and (x₂; y₂)?",
    options: ["((x₂ − x₁)/2 ; (y₂ − y₁)/2)", "(x₁ + x₂ ; y₁ + y₂)", "√((x₂ − x₁)² + (y₂ − y₁)²)", "((x₁ + x₂)/2 ; (y₁ + y₂)/2)"],
    answer: "((x₁ + x₂)/2 ; (y₁ + y₂)/2)",
    explanation: "The midpoint is the average of the x-coordinates and the average of the y-coordinates.",
  },
  {
    prompt: "A(−1; 4) and B(3; −2). What is AB²?",
    options: ["10", "100", "52", "20"],
    answer: "52",
    explanation: "AB² = (3 − (−1))² + (−2 − 4)² = 4² + (−6)² = 16 + 36 = 52.",
  },
  {
    prompt: "What is the gradient of the vertical line x = 4?",
    options: ["0", "Undefined", "4", "1"],
    answer: "Undefined",
    explanation: "On a vertical line the change in x is 0, so the gradient (Δy ÷ Δx) would need a division by 0: it is undefined. (A horizontal line has gradient 0.)",
  },
  {
    prompt: "M(x; 4) is the midpoint of P(−1; 2) and Q(7; 6). What is x?",
    options: ["3", "4", "6", "2"],
    answer: "3",
    explanation: "x = (−1 + 7) ÷ 2 = 3. (Check y: (2 + 6) ÷ 2 = 4 ✓.)",
  },
];
// BANK:END

const AnalyticalGeometry = () => (
  <CapsSubjectTopic
    title="Analytical Geometry"
    subtitle="Distance, gradient, midpoint, parallel and perpendicular lines, and collinear points"
    learnSteps={learnSteps}
    task="gr10-analytical-geometry-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AnalyticalGeometry;
