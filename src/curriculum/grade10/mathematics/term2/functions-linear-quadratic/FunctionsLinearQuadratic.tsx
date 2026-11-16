import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FunctionTable, MiniGraph } from '../../../../../components/diagrams/maths/Grade10Maths';
import * as h from '../../../../../components/diagrams/maths/grade10Helpers';
import * as g from '../../../../../components/diagrams/maths/grade10Helpers2';

// Every number in the slides below comes from the tested helpers in grade10Helpers.ts and grade10Helpers2.ts (their tests, g10MathsLessons.test.ts).
const sq = <sup className="text-[0.75em] font-bold">2</sup>;
const f = h.fracStr;
const val = (x: h.Frac): number => x[0] / x[1];
const { pt } = g;

// slide 1: a function and its three forms
const rows: [number, number][] = [-1, 0, 1, 2].map((x) => [x, 2 * x - 1]);
const f4 = 3 * 4 + 2; // f(x) = 3x + 2
const fNeg = 3 * -1 + 2;
const xFor = (11 - 2) / 3;

// slide 2: straight lines y = −2x + 4
const lineA = -2;
const lineQ = 4;
const lineX = g.lineXIntercept(lineA, lineQ)!;
const gr = g.lineGradient(1, 2, 3, -2);

// slide 3: parabola y = x² − 9
const par = { a: 1, q: -9 };
const parX = g.parabolaXIntercepts(par)!;
const parTp = g.parabolaTurning(par);

// slide 4: parameters
const at2 = [g.parabolaEval({ a: 1, q: 0 }, 2), g.parabolaEval({ a: 2, q: 0 }, 2)];

// "Check yourself"
const c1 = g.lineXIntercept(3, -12)!;
const c2 = g.lineThrough(1, 1, 3, 7);
const c3 = g.parabolaXIntercepts({ a: 1, q: -16 })!;
const c4 = g.parabolaRange({ a: -1, q: 5 });

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'A function: one input, one output',
    content: slide(
      <>
        <Rule>A function gives exactly one output y for every input x. You can show it as a formula, a table or a graph.</Rule>
        <FunctionTable rule="y = 2x − 1" rows={rows} />
        <Worked
          title="f(x) = 3x + 2"
          steps={[
            <>f(4) means put x = 4 into the formula: 3(4) + 2 = <strong>{f4}</strong>.</>,
            <>f(−1) = 3(−1) + 2 = <strong>{h.int(fNeg)}</strong>.</>,
            <>When is f(x) = 11? Solve 3x + 2 = 11: 3x = 9, so x = <strong>{xFor}</strong>.</>,
            <>A graph is a function when no vertical line cuts it twice: each x has one y.</>,
          ]}
        />
        <Mistake>
          Reading f(4) as f × 4. The bracket holds the input: f(4) is the output when x is 4.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Straight lines: y = ax + q',
    content: slide(
      <>
        <Rule>In y = ax + q, a is the gradient (how steep) and q is where the line cuts the y-axis. For the y-intercept put x = 0. For the x-intercept put y = 0.</Rule>
        <MiniGraph
          x={[-1, 5]}
          y={[-4, 6]}
          yEvery={2}
          curves={[{ f: (x: number) => lineA * x + lineQ, label: g.lineStr(lineA, lineQ), labelAt: 4.9, labelY: 4.6, labelAnchor: 'end' }]}
          points={[{ x: 0, y: lineQ, label: pt(0, lineQ), anchor: 'start', dy: -4 }, { x: val(lineX), y: 0, label: pt(val(lineX), 0), anchor: 'start', dy: -4 }]}
          aria={`The line ${g.lineStr(lineA, lineQ)} cuts the y-axis at (0; ${lineQ}) and the x-axis at (${f(lineX)}; 0).`}
        />
        <Worked
          title={g.lineStr(lineA, lineQ)}
          steps={[
            <>y-intercept: x = 0 gives y = {lineQ}, so the point is <strong>{pt(0, lineQ)}</strong>.</>,
            <>x-intercept: y = 0 gives −2x + 4 = 0, so x = <strong>{f(lineX)}</strong> and the point is <strong>{pt(val(lineX), 0)}</strong>.</>,
            <>Gradient from two points (1; 2) and (3; −2): (−2 − 2) ÷ (3 − 1) = <strong>{f(gr)}</strong>.</>,
            <>Parallel lines have the same gradient: y = −2x + 9 is parallel to this line.</>,
          ]}
        />
        <Mistake>
          Turning the gradient upside down. The gradient is the change in y ÷ the change in x (rise ÷ run), not the other way round.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Parabolas: y = ax² + q',
    content: slide(
      <>
        <Rule>The graph of y = ax{sq} + q is a parabola with turning point (0; q) on the y-axis. If a is positive it opens up (minimum), if a is negative it opens down (maximum).</Rule>
        <MiniGraph
          x={[-5, 5]}
          y={[-10, 12]}
          xTicks={[-4, -2, 2, 4]}
          yTicks={[-8, -4, 4, 8, 12]}
          curves={[{ f: (x: number) => x * x + par.q, label: g.parabolaStr(par), labelAt: 0, labelY: 6 }]}
          points={[{ x: 0, y: par.q, label: pt(parTp[0], parTp[1]), dy: 9 }, { x: parX[0], y: 0, label: String(parX[0]).replace('-', '−'), dy: -4 }, { x: parX[1], y: 0, label: String(parX[1]), dy: -4 }]}
          aria={`The parabola ${g.parabolaStr(par)} has its turning point at (0; ${par.q}) and cuts the x-axis at x = ${parX[0]} and x = ${parX[1]}.`}
        />
        <Worked
          title={g.parabolaStr(par)}
          steps={[
            <>Turning point: <strong>{pt(parTp[0], parTp[1])}</strong>, a minimum because a = 1 is positive.</>,
            <>x-intercepts: y = 0 gives x{sq} − 9 = 0, so x{sq} = 9 and x = <strong>{h.int(parX[0])}</strong> or x = <strong>{parX[1]}</strong>.</>,
            <>y-intercept: the same point as the turning point, (0; −9).</>,
            <>Domain: x ∈ ℝ. Range: <strong>{g.parabolaRange(par)}</strong>. The axis of symmetry is x = 0.</>,
          ]}
        />
        <Mistake>
          Finding only x = 3 from x{sq} = 9. A square has two square roots, +3 and −3, and a parabola crosses the x-axis on both sides of the y-axis.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'How a and q change the graph',
    content: slide(
      <>
        <Rule>q moves the graph up or down. When a is bigger than 1 the parabola is narrower; between 0 and 1 it is wider; when a is negative it is flipped upside down.</Rule>
        <MiniGraph
          x={[-7, 5]}
          y={[-8, 12]}
          xTicks={[-4, -2, 2, 4]}
          yTicks={[-8, -4, 4, 8, 12]}
          curves={[
            { f: (x: number) => x * x + 3, label: 'y = x² + 3', labelAt: -6.8, labelY: 10.5, labelAnchor: 'start' },
            { f: (x: number) => x * x, label: 'y = x²', labelAt: -6.8, labelY: 6.5, labelAnchor: 'start' },
            { f: (x: number) => -(x * x), label: 'y = −x²', labelAt: -6.8, labelY: 2.5, labelAnchor: 'start' },
          ]}
          aria="Three parabolas. y = x² has its turning point at the origin. y = x² + 3 is the same shape moved up 3. y = −x² is the first one flipped upside down."
        />
        <Worked
          steps={[
            <>Compare y = x{sq} and y = 2x{sq} at x = 2: {at2[0]} and {at2[1]}. The second is steeper, so it is narrower.</>,
            <>y = x{sq} + 3 is y = x{sq} moved up 3: turning point (0; 3), range y ≥ 3.</>,
            <>y = −x{sq} is y = x{sq} flipped: turning point (0; 0) is now a maximum and the range is y ≤ 0.</>,
          ]}
        />
        <Mistake>
          Thinking y = x{sq} + 3 has its turning point at (3; 0). Adding q outside the square moves the graph vertically: the turning point is (0; 3).
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Find the x-intercept of y = 3x − 12.</>,
          <>Find the equation of the line through (1; 1) and (3; 7).</>,
          <>Find the x-intercepts of y = x{sq} − 16.</>,
          <>What is the range of y = −x{sq} + 5?</>,
        ]}
        answers={[
          <>3x − 12 = 0, so x = {f(c1)}. The point is <strong>{pt(val(c1), 0)}</strong>.</>,
          <>Gradient (7 − 1) ÷ (3 − 1) = {f(c2.a)}, and q = 1 − {f(c2.a)}(1) = {h.int(val(c2.q))}. <strong>y = 3x − 2</strong>.</>,
          <>x{sq} = 16, so x = <strong>{h.int(c3[0])}</strong> or x = <strong>{c3[1]}</strong>.</>,
          <>a is negative, so the maximum is at (0; 5): <strong>{c4}</strong>.</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "What are the coordinates of the y-intercept of y = 2x − 6?",
    options: ["(0; 6)", "(0; −6)", "(3; 0)", "(−6; 0)"],
    answer: "(0; −6)",
    explanation: "The y-intercept is where x = 0. Then y = 2(0) − 6 = −6, so the point is (0; −6).",
  },
  {
    prompt: "Where does the line y = −4x + 8 cut the x-axis?",
    options: ["(2; 0)", "(−2; 0)", "(0; 2)", "(8; 0)"],
    answer: "(2; 0)",
    explanation: "The x-intercept is where y = 0. Then −4x + 8 = 0, so 4x = 8 and x = 2. The point is (2; 0).",
  },
  {
    prompt: "What is the gradient of the straight line through (1; 3) and (3; 9)?",
    options: ["1/3", "6", "2", "3"],
    answer: "3",
    explanation: "Gradient = change in y ÷ change in x = (9 − 3) ÷ (3 − 1) = 6 ÷ 2 = 3.",
  },
  {
    prompt: "A straight line has gradient −2 and cuts the y-axis at 5. What is its equation?",
    options: ["y = 2x + 5", "y = −2x − 5", "y = −2x + 5", "y = 5x − 2"],
    answer: "y = −2x + 5",
    explanation: "The equation of a line is y = ax + q with a the gradient and q the y-intercept: y = −2x + 5.",
  },
  {
    prompt: "Which line is parallel to y = 3x − 1?",
    options: ["y = −3x − 1", "y = 3x + 4", "y = x/3 − 1", "y = x + 3"],
    answer: "y = 3x + 4",
    explanation: "Parallel lines have the same gradient. y = 3x − 1 has gradient 3, and so does y = 3x + 4.",
  },
  {
    prompt: "What are the x-intercepts of y = x² − 4?",
    options: ["x = −2 and x = 2", "x = 4 only", "x = −4 and x = 4", "x = 2 only"],
    answer: "x = −2 and x = 2",
    explanation: "Let y = 0: x² − 4 = 0, so x² = 4 and x = 2 or x = −2. A square has two square roots.",
  },
  {
    prompt: "What is the turning point of y = −x² + 3?",
    options: ["(0; −3)", "(3; 0)", "(−3; 0)", "(0; 3)"],
    answer: "(0; 3)",
    explanation: "For y = ax² + q the turning point is (0; q). Here q = 3. Because a < 0 it is a maximum.",
  },
  {
    prompt: "What is the range of y = x² − 5?",
    options: ["y ≤ −5", "y ≥ 5", "y ≥ −5", "y ∈ ℝ"],
    answer: "y ≥ −5",
    explanation: "The parabola opens upward with its lowest point at y = −5, so every y-value is −5 or more.",
  },
  {
    prompt: "Which statement is true for y = −2x²?",
    options: ["It opens upwards and its turning point (0; 0) is a minimum", "It opens downwards and its turning point (0; 0) is a maximum", "It opens downwards and its turning point (0; 0) is a minimum", "It opens upwards and has a turning point at (0; −2)"],
    answer: "It opens downwards and its turning point (0; 0) is a maximum",
    explanation: "a = −2 is negative, so the parabola opens downwards. The turning point is (0; q) = (0; 0), the highest point: a maximum.",
  },
  {
    prompt: "What is the equation of the axis of symmetry of y = x² + 2?",
    options: ["x = 0", "y = 0", "x = 2", "y = 2"],
    answer: "x = 0",
    explanation: "The turning point is (0; 2) and the graph is symmetric about the vertical line through it: x = 0, the y-axis.",
  },
  {
    prompt: "The parabola y = ax² + q has its turning point at (0; −3) and passes through (2; 5). What is its equation?",
    options: ["y = x² − 3", "y = 4x² − 3", "y = 2x² + 5", "y = 2x² − 3"],
    answer: "y = 2x² − 3",
    explanation: "q = −3. Substitute (2; 5): 5 = a(2)² − 3, so 4a = 8 and a = 2. The equation is y = 2x² − 3.",
  },
  {
    prompt: "What is the domain of y = x² + 1?",
    options: ["x ≥ 1", "x ≥ 0", "x ∈ ℝ", "y ≥ 1"],
    answer: "x ∈ ℝ",
    explanation: "The domain is every allowed x-value. You can square any real number, so x ∈ ℝ. (y ≥ 1 is the range.)",
  },
  {
    prompt: "If f(x) = 2x² − 1, what is f(3)?",
    options: ["35", "17", "5", "11"],
    answer: "17",
    explanation: "Substitute x = 3: 2(3)² − 1 = 2(9) − 1 = 17. Square the 3 first, then multiply by 2.",
  },
  {
    prompt: "What is the equation of the straight line through (0; −2) and (4; 6)?",
    options: ["y = 2x − 2", "y = 2x + 2", "y = −2x − 2", "y = x − 2"],
    answer: "y = 2x − 2",
    explanation: "Gradient = (6 − (−2)) ÷ (4 − 0) = 8 ÷ 4 = 2. The line cuts the y-axis at −2, so y = 2x − 2.",
  },
];
// BANK:END

const FunctionsLinearQuadratic = () => (
  <CapsSubjectTopic
    title="Functions: Straight Lines and Parabolas"
    subtitle="Tables, graphs and formulae, intercepts, turning points, domain and range"
    learnSteps={learnSteps}
    task="gr10-functions-linear-quadratic-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default FunctionsLinearQuadratic;
