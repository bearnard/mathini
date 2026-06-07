import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import FunctionGraph from '@/components/subjects/FunctionGraph';
import UnitCircleExplorer from '@/components/subjects/UnitCircleExplorer';

  const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/math/term4/paper2-geometry-trigonometry/diagram.webp", alt: "Paper 2 Geometry and Trigonometry Revision" },
    title: 'Proof structure matters',
    content: (
      <>
        <p>
          In geometry riders, the order of statements matters. Build a logical chain with standard reasons such
          as corresponding angles, tangent-radius facts and similarity so that every conclusion can be justified.
        </p>
      </>
    ),
  },
  {
    title: 'Trig fluency inside Paper 2',
    content: (
      <>
        <p>
          Paper 2 trig questions mix exact values, identities and diagram interpretation. Move comfortably
          between formula work and graph meaning when using the sine rule, cosine rule or familiar trig
          identities.
        </p>
        <Formula block>{String.raw`\sin^2\theta + \cos^2\theta = 1,\quad \frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}`}</Formula>
        <FunctionGraph
          curves={[
            { fn: (x: number) => Math.sin(x), label: 'y = sin x', color: '#6366f1' },
            { fn: (x: number) => Math.cos(x), label: 'y = cos x', color: '#ef4444' },
          ]}
          xRange={[-6.28, 6.28]}
          yRange={[-1.5, 1.5]}
        />
      </>
    ),
  },
  {
    title: 'Interactive Unit Circle Explorer',
    content: (
      <>
        <p>
          Explore sine, cosine and tangent values in all four quadrants, and use the CAST rule to reinforce the sign
          patterns that often appear in Paper 2 trig simplifications and solutions.
        </p>
        <UnitCircleExplorer initialAngle={45} showCastRule={true} />
      </>
    ),
  },
  {
    title: 'Mixed-practice stamina',
    content: (
      <>
        <p>
          Build stamina by switching smoothly between theorem recall, trig computation and structured reasoning.
          The goal is not just one correct line, but a complete solution that keeps working from diagram to final
          answer.
        </p>
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "rev2-1",
  question: "The opposite angles of a cyclic quadrilateral add up to ...",
  options: ["90°", "180°", "270°", "360°"],
  answer: 1,
  explanation: "A standard circle theorem says opposite angles of a cyclic quadrilateral are supplementary.",
},
{
  id: "rev2-2",
  question: "The angle between a radius and a tangent at the point of contact is ...",
  options: ["30°", "45°", "60°", "90°"],
  answer: 3,
  explanation: "A tangent is perpendicular to the radius at the point of contact.",
},
{
  id: "rev2-3",
  question: "In a triangle, two sides are 5 and 7 with included angle 60°. What is the third side?",
  options: ["√29", "√35", "√39", "√49"],
  answer: 2,
  explanation: "By the cosine rule, c² = 5² + 7² − 2(5)(7)cos 60° = 25 + 49 − 35 = 39.",
},
{
  id: "rev2-4",
  question: "Find the area of a triangle with sides 10 and 6 and included angle 30°.",
  options: ["10", "15", "20", "30"],
  answer: 1,
  explanation: "Area = 1/2 ab sin C = 1/2(10)(6)(1/2) = 15.",
},
{
  id: "rev2-5",
  question: "If corresponding angles of two triangles are equal, the triangles are ...",
  options: ["equal in area", "similar", "perpendicular", "cyclic"],
  answer: 1,
  explanation: "Equal corresponding angles imply the triangles are similar.",
},
{
  id: "rev2-6",
  question: "Which formula is the sine rule?",
  options: ["a² = b² + c² − 2bc cos A", "a/sin A = b/sin B", "Area = 1/2 ab", "sin(A + B) = sin A + sin B"],
  answer: 1,
  explanation: "The sine rule links each side to the sine of its opposite angle.",
},
{
  id: "rev2-7",
  question: "Solve cos x = 0 for 0° ≤ x < 360°.",
  options: ["0° and 180°", "45° and 225°", "90° and 270°", "120° and 300°"],
  answer: 2,
  explanation: "cos x = 0 on the y-axis, so x = 90° and 270°.",
},
{
  id: "rev2-8",
  question: "Which identity is correct?",
  options: ["sin 2x = 2sin x cos x", "cos 2x = 2sin x cos x", "tan 2x = tan²x", "sin(x + y) = sin x + sin y"],
  answer: 0,
  explanation: "The correct double-angle identity is sin 2x = 2sin x cos x.",
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

  const Paper2GeometryTrigonometry = () => (
    <CapsSubjectTopic
      title="Paper 2 Geometry and Trigonometry Revision"
      subtitle="Proof structure, theorem recall and non-routine trig review"
      learnSteps={topicLearnSteps}
      task="gr12-paper2-geometry-trigonometry-t4"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default Paper2GeometryTrigonometry;
