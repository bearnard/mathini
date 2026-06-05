import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import FunctionGraph from '@/components/subjects/FunctionGraph';
import UnitCircleExplorer from '@/components/subjects/UnitCircleExplorer';

  const learnSteps: LearnStep[] = [
  {
    title: 'Compound-angle identities',
    content: (
      <>
        <p>
          Compound-angle identities let you expand or simplify expressions involving sums and differences of
          angles. Learn the patterns carefully so that the signs stay correct throughout the manipulation.
        </p>
        <Formula block>{String.raw`\sin(A \pm B)=\sin A\cos B \pm \cos A\sin B,\quad \cos(A \pm B)=\cos A\cos B \mp \sin A\sin B`}</Formula>
      </>
    ),
  },
  {
    title: 'Double-angle identities',
    content: (
      <>
        <p>
          Double-angle identities are special cases of compound angles. They are useful when you need to rewrite
          expressions in terms of one trig ratio or compare how the graph changes when the angle is doubled.
        </p>
        <Formula block>{String.raw`\sin 2x = 2\sin x\cos x,\quad \cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1`}</Formula>
        <FunctionGraph
          curves={[
            { fn: (x: number) => Math.sin(x), label: 'y = sin x', color: '#6366f1' },
            { fn: (x: number) => Math.sin(2 * x), label: 'y = sin 2x', color: '#ef4444' },
          ]}
          xRange={[-6.28, 6.28]}
          yRange={[-1.5, 1.5]}
        />
      </>
    ),
  },
  {
    title: 'Proving and simplifying identities',
    content: (
      <>
        <p>
          In identity questions, work on one side at a time and use known identities such as{' '}
          <Formula>{String.raw`\sin^2\theta + \cos^2\theta = 1`}</Formula> to rewrite expressions. Keep your algebra neat so
          that every step can be justified.
        </p>
      </>
    ),
  },
  {
    title: 'Interactive Unit Circle Explorer',
    content: (
      <>
        <p>
          Explore sine, cosine and tangent values in all four quadrants, and use the CAST rule to connect reference
          angles to the signs you expect when solving identities and equations.
        </p>
        <UnitCircleExplorer initialAngle={45} showCastRule={true} />
      </>
    ),
  },
  {
    title: 'Solving trig equations',
    content: (
      <>
        <p>
          Reduce the equation to a basic form such as <Formula>{String.raw`\sin x = \frac{1}{2}`}</Formula> or{' '}
          <Formula>{String.raw`\cos x = \frac{\sqrt{2}{2}`}</Formula>, then use the CAST diagram and the given interval to
          list all solutions.
        </p>
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "trig1-1",
  question: "Evaluate sin(45° + 45°).",
  options: ["0", "1/2", "√2/2", "1"],
  answer: 3,
  explanation: "45° + 45° = 90°, and sin 90° = 1.",
},
{
  id: "trig1-2",
  question: "Which expression is equal to cos 2x?",
  options: ["2sin x cos x", "2cos²x − 1", "1 + 2sin²x", "tan²x − 1"],
  answer: 1,
  explanation: "One standard double-angle identity is cos 2x = 2cos²x − 1.",
},
{
  id: "trig1-3",
  question: "Simplify (1 − cos 2x)/2.",
  options: ["cos²x", "sin²x", "2sin x", "tan²x"],
  answer: 1,
  explanation: "From cos 2x = 1 − 2sin²x, rearranging gives (1 − cos 2x)/2 = sin²x.",
},
{
  id: "trig1-4",
  question: "Solve sin x = 1/2 for 0° ≤ x < 360°.",
  options: ["30° only", "150° only", "30° and 150°", "210° and 330°"],
  answer: 2,
  explanation: "sin x is positive in quadrants I and II, so x = 30° and 150°.",
},
{
  id: "trig1-5",
  question: "Solve 2cos²x − 1 = 0 for 0° ≤ x ≤ 180°.",
  options: ["0° and 180°", "45° and 135°", "30° and 150°", "60° and 120°"],
  answer: 1,
  explanation: "2cos²x − 1 = 0 gives cos²x = 1/2, so cos x = ±√2/2. In 0° to 180°, x = 45° and 135°.",
},
{
  id: "trig1-6",
  question: "Solve tan x = −√3 for 0° ≤ x < 360°.",
  options: ["60° and 240°", "120° and 300°", "150° and 330°", "30° and 210°"],
  answer: 1,
  explanation: "tan x = −√3 has reference angle 60° and is negative in quadrants II and IV, so x = 120° and 300°.",
},
{
  id: "trig1-7",
  question: "Which identity is correct?",
  options: ["sin 2x = sin²x − cos²x", "sin 2x = 2sin x cos x", "cos 2x = 2sin x cos x", "tan 2x = tan²x"],
  answer: 1,
  explanation: "The correct double-angle identity is sin 2x = 2sin x cos x.",
},
{
  id: "trig1-8",
  question: "Evaluate sin 2(30°).",
  options: ["1/2", "√3/2", "1", "0"],
  answer: 1,
  explanation: "sin 2(30°) = sin 60° = √3/2.",
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

  const TrigonometryIdentitiesEquations = () => (
    <CapsSubjectTopic
      title="Trigonometry: Identities and Equations"
      subtitle="Compound angles, double angles and formal trig solving"
      learnSteps={topicLearnSteps}
      task="gr12-trigonometry-identities-equations-t1"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default TrigonometryIdentitiesEquations;
