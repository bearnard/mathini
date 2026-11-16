import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CartesianAngle, RatioTriangle } from '../../../../../components/diagrams/maths/Grade10Maths';
import { SpecialTriangles } from '../../../../../components/diagrams/maths/SpecialTriangles';
import * as h from '../../../../../components/diagrams/maths/grade10Helpers';

// Every number in the slides below comes from the tested helpers in grade10Helpers.ts (grade10Helpers.test.ts, g10MathsLessons.test.ts).
const f = h.fracStr;

// slide 1: the three ratios in a right-angled triangle (5, 12, 13)
const hyp = h.pythagoras(5, 12);

// slide 2: special angles
// slide 3: the Cartesian plane
const pt = h.ratiosFromPoint(-8, 6); // r = 10

// slide 4: solving a right-angled triangle
const sideOpp = h.oppositeFromHyp(8, 35, 2);
const sideAdj = h.oppositeFromAdj(12, 40, 1);
const angle = h.angleFromCos(7, 9, 1);

// "Check yourself"
const c1 = h.ratiosFromPoint(12, -5);
const c2 = h.oppositeFromHyp(20, 25, 1);
const c3 = h.angleFromTan(9, 4, 1);
const c4 = h.quadrant(300);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const deg = '°';

export const learnSteps: LearnStep[] = [
  {
    title: 'The three trigonometric ratios',
    content: slide(
      <>
        <Rule>Name the sides from the angle θ: opposite (across from θ), adjacent (next to θ) and the hypotenuse (across from the right angle). sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj.</Rule>
        <RatioTriangle deg={35} />
        <Worked
          title="A triangle with sides 5, 12 and 13"
          steps={[
            <>The hypotenuse is the longest side: 13 (check: 5² + 12² = {5 * 5 + 12 * 12} = 13²).</>,
            <>For the angle opposite the side 5: sin θ = 5/{hyp}, cos θ = 12/{hyp}, tan θ = 5/12.</>,
            <>The reciprocal ratios turn each one upside down: cosec θ = 1/sin θ = {hyp}/5, sec θ = {hyp}/12, cot θ = 12/5.</>,
          ]}
        />
        <Mistake>
          Swapping opposite and adjacent. They change when you change the angle: the side that is opposite one acute angle is adjacent to the other.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Special angles',
    content: slide(
      <>
        <Rule>Some angles have exact values, found from half an equilateral triangle (30° and 60°) and half a square (45°).</Rule>
        <SpecialTriangles />
        <div className="overflow-x-auto rounded-xl bg-white/70 p-3">
          <table className="w-full min-w-[18rem] text-center text-slate-800" aria-label="Exact values of sin, cos and tan at the special angles">
            <thead>
              <tr className="text-sm text-slate-600"><th className="p-1">θ</th><th className="p-1">sin θ</th><th className="p-1">cos θ</th><th className="p-1">tan θ</th></tr>
            </thead>
            <tbody>
              {[30, 45, 60].map((a) => (
                <tr key={a}><td className="p-1 font-semibold">{a}{deg}</td><td className="p-1">{h.SPECIAL[a].sin}</td><td className="p-1">{h.SPECIAL[a].cos}</td><td className="p-1">{h.SPECIAL[a].tan}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <Worked
          steps={[
            <>Half of an equilateral triangle of side 2 has sides 1, √3 and 2, with angles 30° and 60°.</>,
            <>sin 30° = 1/2 and cos 30° = √3/2. So sin 60° = √3/2 and cos 60° = 1/2.</>,
            <>Half a square of side 1 has legs 1 and 1 and hypotenuse √2, so sin 45° = cos 45° = 1/√2 and tan 45° = 1.</>,
            <>Use them: 2 sin 30° + tan 45° = 2(1/2) + 1 = <strong>2</strong>.</>,
          ]}
        />
        <Mistake>
          Mixing up sin 30° and sin 60°. The smaller angle has the smaller sine: sin 30° = 1/2 (0,5) and sin 60° = √3/2 (about 0,87).
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Angles on the Cartesian plane',
    content: slide(
      <>
        <Rule>For a point (x; y) on the terminal arm of θ, let r = √(x² + y²). Then sin θ = y/r, cos θ = x/r and tan θ = y/x. The signs depend on the quadrant.</Rule>
        <CartesianAngle x={-8} y={6} />
        <Worked
          title="P(−8; 6)"
          steps={[
            <>r = √((−8)² + 6²) = √{64 + 36} = <strong>{pt.r}</strong>.</>,
            <>sin θ = 6/{pt.r} = <strong>{f(pt.sin)}</strong>, cos θ = −8/{pt.r} = <strong>{f(pt.cos)}</strong>, tan θ = 6/(−8) = <strong>{f(pt.tan)}</strong>.</>,
            <>x is negative and y is positive: quadrant 2. There only sin is positive.</>,
            <>Remember the order: quadrant 1 all positive, quadrant 2 sin, quadrant 3 tan, quadrant 4 cos.</>,
          ]}
        />
        <Mistake>
          Forgetting the sign of x or y. r is always positive, but y/r and x/r take the sign of y and x.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Solving right-angled triangles',
    content: slide(
      <>
        <Rule>Pick the ratio that has the side you know and the side you want. To find an angle, use the inverse key (sin⁻¹, cos⁻¹, tan⁻¹). Set your calculator to degrees.</Rule>
        <RatioTriangle deg={40} />
        <Worked
          steps={[
            <>Find the side opposite 35° when the hypotenuse is 8 cm: sin 35° = x/8, so x = 8 sin 35° = <strong>{h.dec(sideOpp, 2)} cm</strong>.</>,
            <>A 12 m horizontal distance and an angle of 40°: tan 40° = h/12, so h = 12 tan 40° = <strong>{h.dec(sideAdj, 1)} m</strong>.</>,
            <>Adjacent 7 and hypotenuse 9: cos θ = 7/9, so θ = cos⁻¹(7/9) = <strong>{h.dec(angle, 1)}°</strong>.</>,
            <>Simple equations: if sin θ = 1/2 for an acute angle, θ = 30°.</>,
          ]}
        />
        <Mistake>
          Using the wrong ratio. Label the sides first. If you know the opposite and the hypotenuse you must use sin; tan would need the adjacent side.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>The point (12; −5) is on the terminal arm of θ. Find sin θ and cos θ.</>,
          <>The hypotenuse is 20 cm and an angle is 25°. How long is the side opposite the angle (one decimal place)?</>,
          <>The opposite side is 9 and the adjacent side is 4. Find the angle (one decimal place).</>,
          <>In which quadrant does an angle of 300° lie, and is its cosine positive or negative?</>,
        ]}
        answers={[
          <>r = √(144 + 25) = {c1.r}. sin θ = <strong>{f(c1.sin)}</strong> and cos θ = <strong>{f(c1.cos)}</strong>.</>,
          <>20 sin 25° = <strong>{h.dec(c2, 1)} cm</strong>.</>,
          <>tan θ = 9/4, so θ = tan⁻¹(9/4) = <strong>{h.dec(c3, 1)}°</strong>.</>,
          <>270° &lt; 300° &lt; 360°, so quadrant <strong>{c4}</strong>. In quadrant 4 only cos is positive: <strong>positive</strong>.</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "A right-angled triangle has sides 3, 4 and 5 (the hypotenuse is 5). For the angle opposite the side of length 3, what is sin θ?",
    options: ["4/5", "3/5", "3/4", "5/3"],
    answer: "3/5",
    explanation: "sin θ = opposite ÷ hypotenuse = 3/5.",
  },
  {
    prompt: "In the same triangle (sides 3, 4, 5), what is tan θ for the angle opposite the side of length 3?",
    options: ["3/4", "4/3", "3/5", "5/4"],
    answer: "3/4",
    explanation: "tan θ = opposite ÷ adjacent = 3/4.",
  },
  {
    prompt: "What is the exact value of sin 30°?",
    options: ["√3/2", "1/√2", "1", "1/2"],
    answer: "1/2",
    explanation: "From half of an equilateral triangle with side 2: the side opposite 30° is 1 and the hypotenuse is 2, so sin 30° = 1/2.",
  },
  {
    prompt: "What is the exact value of tan 60°?",
    options: ["1/√3", "1/2", "√3", "√3/2"],
    answer: "√3",
    explanation: "In the half-equilateral triangle: opposite 60° is √3 and adjacent is 1, so tan 60° = √3/1 = √3.",
  },
  {
    prompt: "What is the exact value of cos 45°?",
    options: ["1/2", "1/√2", "√3/2", "1"],
    answer: "1/√2",
    explanation: "In a square cut along its diagonal the legs are 1 and the hypotenuse is √2, so cos 45° = 1/√2.",
  },
  {
    prompt: "In which quadrant is cos θ negative and sin θ positive?",
    options: ["Quadrant 2", "Quadrant 1", "Quadrant 3", "Quadrant 4"],
    answer: "Quadrant 2",
    explanation: "In quadrant 2 x is negative and y is positive: sin is positive (+), cos is negative (−) and tan is negative (−).",
  },
  {
    prompt: "Is tan 200° positive or negative, and why?",
    options: ["Negative, because 200° lies in quadrant 3", "Positive, because 200° lies in quadrant 2", "Negative, because 200° lies in quadrant 2", "Positive, because 200° lies in quadrant 3"],
    answer: "Positive, because 200° lies in quadrant 3",
    explanation: "180° < 200° < 270°, so 200° is in quadrant 3. There x and y are both negative, so tan θ = y/x is positive.",
  },
  {
    prompt: "The point P(−3; 4) is on the terminal arm of angle θ. What is cos θ?",
    options: ["3/5", "−3/4", "−3/5", "4/5"],
    answer: "−3/5",
    explanation: "r = √((−3)² + 4²) = 5. cos θ = x/r = −3/5.",
  },
  {
    prompt: "The point P(5; −12) lies on the terminal arm of θ. What is tan θ?",
    options: ["12/5", "−12/5", "−5/12", "−12/13"],
    answer: "−12/5",
    explanation: "tan θ = y/x = −12/5. (r = 13 is only needed for sin and cos.)",
  },
  {
    prompt: "In a right-angled triangle the hypotenuse is 10 cm and one angle is 30°. How long is the side opposite the 30° angle?",
    options: ["5 cm", "8,7 cm", "5,8 cm", "20 cm"],
    answer: "5 cm",
    explanation: "opposite = hypotenuse × sin 30° = 10 × 0,5 = 5 cm.",
  },
  {
    prompt: "In a right-angled triangle the side opposite angle θ is 5 and the adjacent side is 8. What is θ, correct to one decimal place?",
    options: ["58,0°", "38,7°", "51,3°", "32,0°"],
    answer: "32,0°",
    explanation: "Opposite and adjacent are given, so use tan: tan θ = 5/8. θ = tan⁻¹(5/8) = 32,0°.",
  },
  {
    prompt: "A 6 m ladder leans against a wall and makes an angle of 60° with the ground. How high up the wall does it reach (one decimal place)?",
    options: ["3,0 m", "10,4 m", "5,2 m", "6,9 m"],
    answer: "5,2 m",
    explanation: "The height is opposite the 60° angle and the ladder is the hypotenuse: height = 6 × sin 60° = 5,2 m.",
  },
  {
    prompt: "θ is an acute angle with sin θ = 3/5. What is cos θ?",
    options: ["3/4", "4/5", "5/4", "2/5"],
    answer: "4/5",
    explanation: "Draw a right-angled triangle with opposite 3 and hypotenuse 5. The adjacent side is 4 (3-4-5). cos θ = 4/5.",
  },
  {
    prompt: "For the angle θ opposite the side of length 3 in a 3-4-5 triangle, what is cosec θ?",
    options: ["5/3", "3/5", "5/4", "4/3"],
    answer: "5/3",
    explanation: "cosec θ = 1/sin θ. sin θ = 3/5, so cosec θ = 5/3.",
  },
];
// BANK:END

const Trigonometry = () => (
  <CapsSubjectTopic
    title="Trigonometry"
    subtitle="Ratios, special angles, the Cartesian plane and right-angled triangles"
    learnSteps={learnSteps}
    task="gr10-trigonometry-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Trigonometry;
