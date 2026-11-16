import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { MiniGraph } from '../../../../../components/diagrams/maths/Grade10Maths';
import * as h from '../../../../../components/diagrams/maths/grade10Helpers';
import * as g from '../../../../../components/diagrams/maths/grade10Helpers2';

// Every number in the slides below comes from the tested helpers in grade10Helpers.ts and grade10Helpers2.ts (their tests, g10MathsLessons.test.ts).
const pw = (b: number | string, e: number | string) => (
  <>
    {b}
    <sup className="text-[0.75em] font-bold">{e}</sup>
  </>
);
const f = h.fracStr;
const val = (x: h.Frac): number => x[0] / x[1];
const { pt } = g;

// slide 1: hyperbola y = 3/x + 1
const hy = { a: 3, q: 1 };
const hyX = g.hyperbolaXIntercept(hy)!;

// slide 2: exponential y = 2ˣ + 2
const ex = { a: 1, b: 2, q: 2 };
const exY = g.expoYIntercept(ex);

// slide 3: sine and cosine
const sinVals = [0, 90, 180, 270, 360].map((d) => Math.round(g.trigEval({ fn: 'sin', a: 1, q: 0 }, d)));
const cosVals = [0, 90, 180, 270, 360].map((d) => Math.round(g.trigEval({ fn: 'cos', a: 1, q: 0 }, d)));
const rg2 = g.trigRange({ fn: 'sin', a: 2, q: 0 });
const rg3 = g.trigRange({ fn: 'cos', a: 1, q: 1 });

// slide 4: tangent
const tanPeriod = g.trigPeriod({ fn: 'tan', a: 1, q: 0 });

// "Check yourself"
const c1 = g.hyperbolaXIntercept({ a: 6, q: -3 })!;
const c2 = g.expoYIntercept({ a: 2, b: 3, q: -1 });
const c3 = g.trigRange({ fn: 'sin', a: -2, q: 1 });

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const sv = (n: number) => h.int(n);

export const learnSteps: LearnStep[] = [
  {
    title: 'The hyperbola: y = a/x + q',
    content: slide(
      <>
        <Rule>The graph of y = a/x + q has two branches and two asymptotes: the vertical line x = 0 and the horizontal line y = q. The graph gets close to them but never touches them.</Rule>
        <MiniGraph
          x={[-6, 6]}
          y={[-6, 8]}
          xTicks={[-6, -3, 3, 6]}
          yTicks={[-4, -2, 2, 4, 6]}
          curves={[{ f: (x: number) => (x === 0 ? NaN : hy.a / x + hy.q), label: g.hyperbolaStr(hy), labelAt: 5.8, labelAnchor: 'end', labelDy: -14 }]}
          guides={[{ x: 0 }, { y: hy.q }]}
          points={[{ x: val(hyX), y: 0, label: pt(val(hyX), 0), anchor: 'end', dy: -4 }]}
          aria={`The graph of ${g.hyperbolaStr(hy)} has the asymptotes x = 0 and y = ${hy.q}. It cuts the x-axis at (${f(hyX)}; 0) and never cuts the y-axis.`}
        />
        <Worked
          title={g.hyperbolaStr(hy)}
          steps={[
            <>Asymptotes: x = 0 and y = {hy.q}. So the domain is x ≠ 0 and the range is <strong>y ≠ {hy.q}</strong>.</>,
            <>x-intercept: y = 0 gives 3/x + 1 = 0, so 3/x = −1 and x = <strong>{f(hyX)}</strong>.</>,
            <>There is no y-intercept: x = 0 is not allowed (you cannot divide by 0).</>,
            <>a = 3 is positive, so the branches lie in quadrants 1 and 3 when q = 0; a negative a would give quadrants 2 and 4.</>,
          ]}
        />
        <Mistake>
          Looking for a y-intercept by putting x = 0. The hyperbola never meets the line x = 0, so there is none.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'The exponential graph: y = a · bˣ + q',
    content: slide(
      <>
        <Rule>y = bˣ (b &gt; 0, b ≠ 1) passes through (0; 1) and has the x-axis as asymptote. If b &gt; 1 it grows; if 0 &lt; b &lt; 1 it shrinks. The number q moves the asymptote to y = q.</Rule>
        <MiniGraph
          x={[-3, 3]}
          y={[0, 10]}
          xTicks={[-2, -1, 1, 2, 3]}
          yTicks={[2, 4, 6, 8, 10]}
          curves={[{ f: (x: number) => 2 ** x + ex.q, label: 'y = 2ˣ + 2', labelAt: 0.4, labelAnchor: 'start', labelDy: -18 }]}
          guides={[{ y: ex.q, label: 'y = 2' }]}
          points={[{ x: 0, y: exY, label: pt(0, exY), anchor: 'start', dy: -4 }]}
          aria={`The graph of y = 2 to the power x plus 2 rises quickly to the right and flattens towards the asymptote y = 2 on the left. It passes through (0; ${exY}).`}
        />
        <Worked
          title="y = 2ˣ + 2"
          steps={[
            <>Asymptote: <strong>y = {ex.q}</strong>. The range is <strong>{g.expoRange(ex)}</strong>.</>,
            <>y-intercept: x = 0 gives 2⁰ + 2 = <strong>{exY}</strong>, the point {pt(0, exY)}.</>,
            <>A table: x = −2 gives {h.dec(g.expoEval(ex, -2), 2)}, x = 1 gives {g.expoEval(ex, 1)}, x = 3 gives {g.expoEval(ex, 3)}.</>,
            <>There is no x-intercept, because 2ˣ + 2 is always bigger than 2.</>,
          ]}
        />
        <Mistake>
          Thinking the graph reaches the asymptote. 2ˣ gets close to 0 for very negative x but is never equal to 0, so y = 2ˣ + 2 never equals 2.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Sine and cosine graphs',
    content: slide(
      <>
        <Rule>y = sin x and y = cos x repeat every 360° (the period) and go between −1 and 1 (amplitude 1). The sine graph starts at 0, the cosine graph starts at 1.</Rule>
        <MiniGraph
          x={[0, 360]}
          y={[-1.3, 1.3]}
          xTicks={[90, 180, 270, 360]}
          yTicks={[-1, 1]}
          curves={[
            { f: (x: number) => Math.sin((x * Math.PI) / 180), label: 'sin x', labelAt: 45, labelAnchor: 'end', labelDy: -6 },
            { f: (x: number) => Math.cos((x * Math.PI) / 180), label: 'cos x', labelAt: 300, labelAnchor: 'start', labelDy: -8 },
          ]}
          aria="The graphs of sin x and cos x from 0 to 360 degrees. Sin x starts at 0, rises to 1 at 90 degrees, crosses 0 at 180 degrees, falls to −1 at 270 degrees and returns to 0. Cos x starts at 1 and is the same shape shifted left by 90 degrees."
        />
        <Worked
          steps={[
            <>x = 0°, 90°, 180°, 270°, 360°: sin x = {sinVals.map(sv).join(', ')}.</>,
            <>The same angles for cos x: {cosVals.map(sv).join(', ')}.</>,
            <>y = 2 sin x has amplitude 2, so its range is <strong>{rg2}</strong>.</>,
            <>y = cos x + 1 moves the graph up 1: the range is <strong>{rg3}</strong>.</>,
          ]}
        />
        <Mistake>
          Starting the cosine graph at 0. cos 0° = 1, so cos x begins at its maximum, while sin x begins at 0.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'The tangent graph and choosing a graph',
    content: slide(
      <>
        <Rule>y = tan x repeats every {tanPeriod}°, passes through the origin and has vertical asymptotes at x = 90° and 270° (0° ≤ x ≤ 360°). Its range is all real numbers.</Rule>
        <MiniGraph
          x={[0, 360]}
          y={[-4, 4]}
          xTicks={[90, 180, 270, 360]}
          yTicks={[-2, 2]}
          curves={[{ f: (x: number) => Math.tan((x * Math.PI) / 180), label: 'tan x', labelAt: 215, labelAnchor: 'start', labelDy: -10 }]}
          guides={[{ x: 90, label: '90°' }, { x: 270, label: '270°' }]}
          aria="The graph of tan x from 0 to 360 degrees. It rises steeply towards the asymptote at 90 degrees, comes back from below on the other side, crosses the x-axis at 180 degrees and has a second asymptote at 270 degrees."
        />
        <Worked
          steps={[
            <>tan 0° = 0, tan 45° = 1 and tan 180° = 0. tan 90° has no value: the graph has an asymptote there.</>,
            <>To pick the graph from an equation, look at q (the middle line) and a (the size and flip).</>,
            <>y = −sin x is sin x flipped: it starts at 0 but falls first.</>,
            <>y = sin x + 2 has middle line y = 2, so it goes from <strong>1 to 3</strong>.</>,
          ]}
        />
        <Mistake>
          Giving tan x a maximum of 1. The tangent graph rises without limit towards each asymptote, so it has no maximum and no minimum.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Find the x-intercept of y = 6/x − 3.</>,
          <>Find the y-intercept of y = 2 · 3ˣ − 1.</>,
          <>Write down the range of y = −2 sin x + 1.</>,
          <>Write down the equations of the asymptotes of y = 5/x − 4.</>,
        ]}
        answers={[
          <>6/x − 3 = 0, so 6/x = 3 and x = {f(c1)}. The point is <strong>{pt(val(c1), 0)}</strong>.</>,
          <>x = 0 gives 2 · 3⁰ − 1 = 2 − 1 = <strong>{c2}</strong>. The point is {pt(0, c2)}.</>,
          <>−2 sin x goes from −2 to 2, and the +1 moves it up: <strong>{c3}</strong>.</>,
          <>The asymptotes are <strong>x = 0 and y = −4</strong>.</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "What are the equations of the asymptotes of y = 2/x + 3?",
    options: ["x = 3 and y = 0", "x = 0 and y = 3", "x = 0 and y = 2", "x = 2 and y = 0"],
    answer: "x = 0 and y = 3",
    explanation: "For y = a/x + q the vertical asymptote is x = 0 (x cannot be 0) and the horizontal asymptote is y = q = 3.",
  },
  {
    prompt: "In which quadrants does the graph of y = 3/x lie?",
    options: ["Quadrants 1 and 3", "Quadrants 2 and 4", "Quadrants 1 and 2", "Quadrants 3 and 4"],
    answer: "Quadrants 1 and 3",
    explanation: "a = 3 is positive, so x and y have the same sign: both positive (quadrant 1) or both negative (quadrant 3).",
  },
  {
    prompt: "In which quadrants does the graph of y = −2/x lie?",
    options: ["Quadrants 1 and 3", "Quadrants 1 and 2", "Quadrants 3 and 4", "Quadrants 2 and 4"],
    answer: "Quadrants 2 and 4",
    explanation: "a = −2 is negative, so x and y have opposite signs: quadrant 2 (x < 0, y > 0) and quadrant 4 (x > 0, y < 0).",
  },
  {
    prompt: "What is the x-intercept of y = 4/x − 2?",
    options: ["(−2; 0)", "(4; 0)", "(2; 0)", "(0; 2)"],
    answer: "(2; 0)",
    explanation: "Let y = 0: 4/x − 2 = 0, so 4/x = 2 and x = 2. The point is (2; 0).",
  },
  {
    prompt: "What is the range of y = 1/x + 5?",
    options: ["y ≠ 0", "y ≠ 5", "y ≠ −5", "y > 5"],
    answer: "y ≠ 5",
    explanation: "y can be any real number except the horizontal asymptote value q = 5.",
  },
  {
    prompt: "What is the y-intercept of y = 2ˣ?",
    options: ["(0; 1)", "(0; 2)", "(1; 0)", "(0; 0)"],
    answer: "(0; 1)",
    explanation: "Let x = 0: 2⁰ = 1. The graph passes through (0; 1) and never touches the x-axis.",
  },
  {
    prompt: "What is the equation of the asymptote of y = 2ˣ − 3?",
    options: ["y = 3", "x = −3", "y = 0", "y = −3"],
    answer: "y = −3",
    explanation: "The graph of y = 2ˣ has the x-axis (y = 0) as asymptote. Subtracting 3 moves it down to y = −3.",
  },
  {
    prompt: "What is the y-intercept of y = 3 · 2ˣ + 1?",
    options: ["(0; 3)", "(0; 1)", "(0; 4)", "(0; 7)"],
    answer: "(0; 4)",
    explanation: "Let x = 0: 3 · 2⁰ + 1 = 3 · 1 + 1 = 4.",
  },
  {
    prompt: "What is the range of y = 2ˣ + 1?",
    options: ["y ≥ 1", "y > 1", "y > 0", "y ∈ ℝ"],
    answer: "y > 1",
    explanation: "2ˣ is always positive, so 2ˣ + 1 is always greater than 1, but never equal to 1.",
  },
  {
    prompt: "Which function decreases as x increases?",
    options: ["y = (1/2)ˣ", "y = 2ˣ", "y = 3x + 1", "y = 4ˣ"],
    answer: "y = (1/2)ˣ",
    explanation: "In y = bˣ the graph falls when the base b is between 0 and 1. (1/2)ˣ halves each time x goes up by 1.",
  },
  {
    prompt: "What is the amplitude of y = 3 sin x?",
    options: ["6", "1", "360°", "3"],
    answer: "3",
    explanation: "The amplitude is the largest distance from the middle line: |a| = 3.",
  },
  {
    prompt: "What is the period of y = tan x?",
    options: ["360°", "90°", "180°", "720°"],
    answer: "180°",
    explanation: "The graph of tan x repeats every 180°. (sin x and cos x repeat every 360°.)",
  },
  {
    prompt: "What is the range of y = 2 sin x + 1?",
    options: ["−2 ≤ y ≤ 2", "−1 ≤ y ≤ 3", "−1 ≤ y ≤ 1", "1 ≤ y ≤ 3"],
    answer: "−1 ≤ y ≤ 3",
    explanation: "sin x goes from −1 to 1. Times 2: −2 to 2. Plus 1: −1 to 3.",
  },
  {
    prompt: "Where does y = sin x cut the x-axis for 0° ≤ x ≤ 360°?",
    options: ["x = 0°, 180° and 360°", "x = 90° and 270°", "x = 0° and 360° only", "x = 90°, 180° and 270°"],
    answer: "x = 0°, 180° and 360°",
    explanation: "sin 0° = sin 180° = sin 360° = 0. (90° and 270° are where cos x is 0.)",
  },
];
// BANK:END

const FunctionsOther = () => (
  <CapsSubjectTopic
    title="Functions: Hyperbola, Exponential and Trigonometric Graphs"
    subtitle="Asymptotes, intercepts, range, and the sine, cosine and tangent graphs"
    learnSteps={learnSteps}
    task="gr10-functions-other-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default FunctionsOther;
