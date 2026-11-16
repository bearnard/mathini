import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { MarkSplit, ToolPairs } from '../../../../../components/diagrams/maths/Grade10Maths';
import * as h from '../../../../../components/diagrams/maths/grade10Helpers';

// Every number in the slides below comes from the tested helpers in grade10Helpers.ts (g10MathsLessons.test.ts).
const sq = <sup className="text-[0.75em] font-bold">2</sup>;

// slide 1: a 3-mark quadratic, x² − 5x − 14 = 0
const quad = h.factorQuadratic(1, -5, -14)!;
const quadRoots = h.integerRoots(1, -5, -14)!;

// slide 2: checking
const checkX = quadRoots[1];
const checkValue = checkX * checkX - 5 * checkX - 14;
const sin30 = h.sinD(30);
const opp = h.oppositeFromHyp(20, 30, 1);

// slide 3: tools
const tanSide = h.oppositeFromAdj(10, 35, 1);

// "Check yourself"
const c1 = h.solveLinearBoth(5, -4, 2, 8)!;
const c2 = h.expandBinomials(1, 3, 1, -4);
const c3 = h.hypFromOpp(7, 28, 1);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Marks tell you how much to show',
    content: slide(
      <>
        <Rule>The marks next to a question tell you how many separate things the marker looks for. A 3-mark question needs three steps on paper, not just an answer.</Rule>
        <MarkSplit steps={['Write the equation in the form you need and factorise', 'Set each factor equal to 0', 'Write both solutions']} />
        <Worked
          title={<>(3 marks) Solve x{sq} − 5x − 14 = 0</>}
          steps={[
            <>Factorise (1 mark): {h.bracket(1, quad.q)}{h.bracket(1, quad.s)} = 0.</>,
            <>Each factor can be 0 (1 mark): x − 7 = 0 or x + 2 = 0.</>,
            <>Both answers (1 mark): x = <strong>{h.int(quadRoots[0])}</strong> or x = <strong>{quadRoots[1]}</strong>.</>,
          ]}
        />
        <Mistake>
          Writing only the final answer. If the answer is wrong you get 0, but with the steps shown you can still earn the method marks.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check before you move on',
    content: slide(
      <>
        <Rule>Use any minutes left to check. Put your answer back into the question, and ask whether it is a sensible size.</Rule>
        <MarkSplit steps={['Estimate the answer first', 'Do the calculation', 'Ask: is this the right size and units?']} />
        <Worked
          steps={[
            <>Substitute x = {checkX} into x{sq} − 5x − 14: {checkX}{sq} − 5({checkX}) − 14 = {checkX * checkX} − {5 * checkX} − 14 = <strong>{checkValue}</strong> ✓.</>,
            <>Triangle with hypotenuse 20 cm and an angle of 30°: the opposite side must be shorter than 20 cm. 20 sin 30° = <strong>{h.dec(opp, 0)} cm</strong> ✓.</>,
            <>Calculator in degrees mode? sin 30° must show {h.dec(sin30, 1)}. If it shows −0,99 your calculator is in radians.</>,
          ]}
        />
        <Mistake>
          Leaving the calculator in the wrong mode. Check sin 30° = 0,5 at the start of the paper: a wrong mode makes every trigonometry answer wrong.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Pick the right tool',
    content: slide(
      <>
        <Rule>Read the question for key words, then choose the method before you calculate. Many exam mistakes come from choosing the wrong tool.</Rule>
        <ToolPairs
          pairs={[
            ['two brackets multiplied', 'expand and collect like terms'],
            ['a quadratic equals 0', 'factorise, set each factor to 0'],
            ['two unknowns, two equations', 'eliminate or substitute'],
            ['a side and an angle in a right triangle', 'sin, cos or tan'],
            ['a graph: intercepts', 'x = 0 for y, y = 0 for x'],
          ]}
        />
        <Worked
          steps={[
            <>Adjacent side 10 cm, angle 35°, find the opposite side: opposite and adjacent means tan. 10 tan 35° = <strong>{h.dec(tanSide, 1)} cm</strong>.</>,
            <>5x − 4 = 2x + 8 is a linear equation: collect the x terms, 3x = 12, x = <strong>{h.fracStr(c1)}</strong>.</>,
          ]}
        />
        <Mistake>
          Using sin when the hypotenuse is not part of the problem. First mark opposite, adjacent and hypotenuse, then pick the ratio that has your two sides.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>(2 marks) Expand and simplify (x + 3)(x − 4).</>,
          <>(2 marks) The opposite side is 7 cm and the angle is 28°. Find the hypotenuse (one decimal place).</>,
          <>(1 mark) What mode must your calculator be in for trigonometry in degrees?</>,
        ]}
        answers={[
          <>x{sq} − 4x + 3x − 12 = <strong>{h.fmtPoly(c2)}</strong>. One mark for the four products, one for collecting like terms.</>,
          <>sin 28° = 7 ÷ hypotenuse, so hypotenuse = 7 ÷ sin 28° = <strong>{h.dec(c3, 1)} cm</strong>.</>,
          <>Degrees (DEG).</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "(2 marks) Factorise completely: 3x² − 12",
    options: ["3(x² − 4)", "3(x − 2)(x + 2)", "3(x − 2)²", "(x − 2)(x + 6)"],
    answer: "3(x − 2)(x + 2)",
    explanation: "Take out the common factor 3 first: 3(x² − 4). Then x² − 4 is a difference of squares, so 3(x − 2)(x + 2). One mark for the common factor, one for the squares.",
  },
  {
    prompt: "(3 marks) Solve for x: x² − 3x − 10 = 0",
    options: ["x = −2 or x = 5", "x = 2 or x = −5", "x = −2 or x = −5", "x = 10 or x = −1"],
    answer: "x = −2 or x = 5",
    explanation: "Factorise (1 mark): (x − 5)(x + 2) = 0. Set each factor to 0 (1 mark): x = 5 or x = −2 (1 mark).",
  },
  {
    prompt: "(2 marks) Simplify: (3x²)³ ÷ 9x⁴",
    options: ["9x²", "3x⁴", "27x²", "3x²"],
    answer: "3x²",
    explanation: "(3x²)³ = 27x⁶ (1 mark). Then 27x⁶ ÷ 9x⁴ = 3x² (1 mark): divide the numbers and subtract the exponents.",
  },
  {
    prompt: "(2 marks) Solve for x: 3^(x − 2) = 81",
    options: ["4", "5", "6", "2"],
    answer: "6",
    explanation: "81 = 3⁴ (1 mark), so x − 2 = 4 and x = 6 (1 mark).",
  },
  {
    prompt: "(3 marks) Solve for x and write the answer in interval notation: 5 − 2x < 11",
    options: ["(−∞; −3)", "(−3; ∞)", "(3; ∞)", "[−3; ∞)"],
    answer: "(−3; ∞)",
    explanation: "−2x < 6 (1 mark). Divide by −2 and reverse the sign (1 mark): x > −3, which is (−3; ∞) (1 mark).",
  },
  {
    prompt: "(2 marks) What is the 15th term of the pattern 9; 13; 17; 21; …?",
    options: ["65", "69", "60", "56"],
    answer: "65",
    explanation: "d = 4, so Tₙ = 4n + 5 (1 mark). T₁₅ = 4(15) + 5 = 65 (1 mark).",
  },
  {
    prompt: "(3 marks) Solve simultaneously: 3x + 2y = 16 and x − y = 2",
    options: ["x = 2; y = 5", "x = 6; y = −1", "x = 0; y = 8", "x = 4; y = 2"],
    answer: "x = 4; y = 2",
    explanation: "From the second equation x = y + 2 (1 mark). Substitute: 3(y + 2) + 2y = 16, so 5y = 10 and y = 2 (1 mark). Then x = 4 (1 mark).",
  },
  {
    prompt: "(3 marks) A right-angled triangle has hypotenuse 15 cm and an angle of 40°. How long is the side opposite the 40° angle (one decimal place)?",
    options: ["11,5 cm", "12,6 cm", "9,6 cm", "23,3 cm"],
    answer: "9,6 cm",
    explanation: "opposite = hypotenuse × sin 40° (1 mark for the ratio, 1 mark for the substitution). 15 × 0,6428 = 9,6 cm (1 mark).",
  },
  {
    prompt: "(2 marks) θ is acute and sin θ = 5/13. What is cos θ?",
    options: ["5/12", "12/13", "13/12", "8/13"],
    answer: "12/13",
    explanation: "Draw a triangle with opposite 5 and hypotenuse 13 (1 mark). The adjacent side is 12 (5-12-13), so cos θ = 12/13 (1 mark).",
  },
  {
    prompt: "(2 marks) What is the gradient of the line through (−1; 5) and (2; −1)?",
    options: ["−2", "2", "−1/2", "−6"],
    answer: "−2",
    explanation: "Gradient = (−1 − 5) ÷ (2 − (−1)) = −6 ÷ 3 = −2.",
  },
  {
    prompt: "(2 marks) What are the x-intercepts of y = −3x² + 12?",
    options: ["x = −4 and x = 4", "x = 2 only", "x = −12 and x = 12", "x = −2 and x = 2"],
    answer: "x = −2 and x = 2",
    explanation: "Let y = 0: 3x² = 12, so x² = 4 and x = ±2.",
  },
  {
    prompt: "(2 marks) What are the equations of the asymptotes of y = −1/x + 2?",
    options: ["x = 2 and y = 0", "x = 0 and y = −1", "x = 0 and y = 2", "x = −1 and y = 2"],
    answer: "x = 0 and y = 2",
    explanation: "The vertical asymptote is x = 0 (1 mark) and the horizontal asymptote is y = 2 (1 mark).",
  },
  {
    prompt: "(2 marks) What is the range of y = 3ˣ − 2?",
    options: ["y ≥ −2", "y > −2", "y > 2", "y > 0"],
    answer: "y > −2",
    explanation: "3ˣ > 0 for every x, so 3ˣ − 2 > −2: the range is y > −2 (the asymptote value is never reached).",
  },
  {
    prompt: "(3 marks) In parallelogram PQRS, angle P = (2x + 20)° and angle Q = (3x + 10)°. How big is angle Q?",
    options: ["100°", "80°", "30°", "90°"],
    answer: "100°",
    explanation: "P and Q are co-interior angles, so they add up to 180°: 5x + 30 = 180 (1 mark), x = 30 (1 mark). Angle Q = 3(30) + 10 = 100° (1 mark).",
  },
  {
    prompt: "(2 marks) D and E are the midpoints of AB and AC in triangle ABC. DE = (2x + 1) cm and BC = (5x − 3) cm. What is x?",
    options: ["4/3", "7/8", "6", "5"],
    answer: "5",
    explanation: "BC = 2 × DE by the midpoint theorem (1 mark): 5x − 3 = 4x + 2, so x = 5 (1 mark).",
  },
  {
    prompt: "(2 marks) Which of these numbers is irrational?",
    options: ["√(25/4)", "−3/7", "√20", "0,125"],
    answer: "√20",
    explanation: "√(25/4) = 5/2, −3/7 is a fraction and 0,125 = 1/8. 20 is not a perfect square, so √20 is irrational.",
  },
];
// BANK:END

const MidYearExamPrep = () => (
  <CapsSubjectTopic
    title="Mid-year Exam Preparation"
    subtitle="Mixed Term 1 and Term 2 practice with the marks shown"
    learnSteps={learnSteps}
    task="gr10-midyear-exam-prep-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default MidYearExamPrep;
