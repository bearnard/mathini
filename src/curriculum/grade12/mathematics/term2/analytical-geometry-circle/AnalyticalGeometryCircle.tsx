import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import FunctionGraph from '@/components/subjects/FunctionGraph';

  const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/math/term2/analytical-geometry-circle/diagram.webp", alt: "Analytical Geometry of the Circle" },
    title: 'Centre-radius form of a circle',
    content: (
      <>
        <p>
          A circle is easiest to interpret in centre-radius form because the centre and radius can be read off
          immediately. If the equation is not in standard form, complete the square before identifying the key
          features.
        </p>
        <Formula block>{String.raw`(x-a)^2 + (y-b)^2 = r^2`}</Formula>
      </>
    ),
  },
  {
    title: 'Tangents and perpendicular radii',
    content: (
      <>
        <p>
          A tangent touches a circle at one point, and the radius to that point is perpendicular to the tangent.
          Use gradients to move between the radius and tangent equations when coordinate geometry facts are given
          in algebraic form.
        </p>
        <Formula block>{String.raw`m_1m_2 = -1`}</Formula>
        <FunctionGraph
          curves={[
            {
              fn: (x: number) => (Math.abs(x) <= 5 ? Math.sqrt(25 - x ** 2) : NaN),
              label: 'y = √(25 - x²)',
              color: '#6366f1',
            },
            {
              fn: (x: number) => (Math.abs(x) <= 5 ? -Math.sqrt(25 - x ** 2) : NaN),
              label: 'y = -√(25 - x²)',
              color: '#6366f1',
            },
            { fn: (x: number) => -0.75 * x + 6.25, label: 'tangent at (3, 4)', color: '#ef4444' },
          ]}
          xRange={[-6, 6]}
          yRange={[-6, 7]}
        />
      </>
    ),
  },
  {
    title: 'Chords, diameters and midpoints',
    content: (
      <>
        <p>
          When a diameter or chord is described by its endpoints, use midpoint and distance ideas to extract the
          centre, radius or equation you need. Keep the geometry and algebra linked all the way through the
          solution.
        </p>
        <Formula block>{String.raw`\left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right),\quad \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}`}</Formula>
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "circle-1",
  question: "Which equation represents a circle with centre (2, −1) and radius 5?",
  options: ["(x + 2)² + (y − 1)² = 25", "(x − 2)² + (y + 1)² = 25", "(x − 2)² + (y − 1)² = 5", "(x + 2)² + (y + 1)² = 25"],
  answer: 1,
  explanation: "Use (x − a)² + (y − b)² = r² with a = 2, b = −1 and r = 5.",
},
{
  id: "circle-2",
  question: "Find the centre of x² + y² − 6x + 4y − 12 = 0.",
  options: ["(−3, 2)", "(3, −2)", "(3, 2)", "(−3, −2)"],
  answer: 1,
  explanation: "Completing the square gives (x − 3)² + (y + 2)² = 25, so the centre is (3, −2).",
},
{
  id: "circle-3",
  question: "What is the radius of x² + y² − 6x + 4y − 12 = 0?",
  options: ["4", "5", "6", "25"],
  answer: 1,
  explanation: "After completing the square, the equation becomes (x − 3)² + (y + 2)² = 25, so r = 5.",
},
{
  id: "circle-4",
  question: "A line tangent to a circle is always ...",
  options: ["parallel to the radius at the point of contact", "perpendicular to the radius at the point of contact", "equal in length to the radius", "through the centre"],
  answer: 1,
  explanation: "The radius to the point of contact is perpendicular to the tangent.",
},
{
  id: "circle-5",
  question: "The circle x² + y² = 25 has a tangent at (3, 4). What is the gradient of the tangent?",
  options: ["4/3", "3/4", "−4/3", "−3/4"],
  answer: 3,
  explanation: "The radius from (0, 0) to (3, 4) has gradient 4/3, so the perpendicular tangent has gradient −3/4.",
},
{
  id: "circle-6",
  question: "The endpoints of a diameter are (−2, 1) and (4, 5). What is the centre?",
  options: ["(1, 2)", "(1, 3)", "(2, 3)", "(3, 1)"],
  answer: 1,
  explanation: "The centre is the midpoint: ((−2 + 4)/2, (1 + 5)/2) = (1, 3).",
},
{
  id: "circle-7",
  question: "Which point lies on the circle x² + y² = 25?",
  options: ["(2, 4)", "(4, 3)", "(5, 5)", "(1, 5)"],
  answer: 1,
  explanation: "For (4, 3), x² + y² = 16 + 9 = 25, so the point lies on the circle.",
},
{
  id: "circle-8",
  question: "If the perpendicular distance from the centre of a circle to a line equals the radius, then the line is ...",
  options: ["a diameter", "a chord", "a tangent", "a secant"],
  answer: 2,
  explanation: "A line whose distance from the centre equals the radius touches the circle once, so it is a tangent.",
}
  ];

  const bank: CapsItem[] = items.map((item) => ({
    prompt: item.question,
    options: item.options,
    answer: item.options[item.answer],
    explanation: item.explanation,
  }));

const topicLearnSteps = learnSteps.map((step) => ({
  title: step.title,
  content: <div className="space-y-4 text-left text-lg leading-8 text-slate-600">{step.content}</div>,
}));

  const AnalyticalGeometryCircle = () => (
    <CapsSubjectTopic
      title="Analytical Geometry of the Circle"
      subtitle="Circle equations, tangents, diameters and coordinate proofs"
      learnSteps={topicLearnSteps}
      task="gr12-analytical-geometry-circle-t2"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default AnalyticalGeometryCircle;
