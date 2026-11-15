import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import { TrigToolChoice } from '@/components/diagrams/maths/TrigToolChoice';
import UnitCircleExplorer from '@/components/subjects/UnitCircleExplorer';

  const learnSteps: LearnStep[] = [
  {
    title: 'Choosing the right trig tool',
    content: (
      <>
        <p>
          Start by deciding whether the triangle is right-angled or not. That choice tells you whether basic trig
          ratios, the sine rule, the cosine rule or the area rule is the best method.
        </p>
        <TrigToolChoice />
        <Formula block>{String.raw`\tan \theta = \frac{\text{opposite}}{\text{adjacent}}`}</Formula>
      </>
    ),
  },
  {
    title: 'Sine rule, cosine rule and area rule',
    content: (
      <>
        <p>
          In non-right-angled triangles, match the information you know to the correct formula. Substitute with
          care and keep the calculator in degree mode when the question is set in degrees.
        </p>
        <Formula block>{String.raw`\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C},\quad c^2 = a^2 + b^2 - 2ab\cos C`}</Formula>
        <Formula block>{String.raw`\text{Area} = \frac{1}{2}ab\sin C`}</Formula>
      </>
    ),
  },
  {
    title: 'Interpreting 3D diagrams',
    content: (
      <>
        <p>
          In three-dimensional problems, identify the hidden right triangles first. Once you isolate a triangle,
          apply the same trig ideas carefully to space diagonals, sloping edges and vertical heights.
        </p>
      </>
    ),
  },
  {
    title: 'Interactive Unit Circle Explorer',
    content: (
      <>
        <p>
          Explore sine, cosine and tangent values in all four quadrants, and use the CAST rule to track sign changes
          that support angle interpretation in 2D and 3D trig problems.
        </p>
        <UnitCircleExplorer initialAngle={30} showCastRule={true} />
      </>
    ),
  },
  {
    title: 'Angles of elevation and depression',
    content: (
      <>
        <p>
          An angle of elevation is measured upward from a horizontal line, while an angle of depression is
          measured downward. Because the horizontals are parallel, corresponding angles often let you transfer an
          angle from one part of the diagram to another.
        </p>
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "trig2-1",
  question: "In a triangle, two sides are 7 and 8 with included angle 60°. What is the third side?",
  options: ["√41", "√49", "√57", "√73"],
  answer: 2,
  explanation: "By the cosine rule, c² = 7² + 8² − 2(7)(8)cos 60° = 49 + 64 − 56 = 57, so c = √57.",
},
{
  id: "trig2-2",
  question: "Find the area of a triangle with sides 8 and 11 and included angle 30°.",
  options: ["11", "22", "44", "88"],
  answer: 1,
  explanation: "Area = 1/2 ab sin C = 1/2(8)(11)sin 30° = 44 × 1/2 = 22.",
},
{
  id: "trig2-3",
  question: "A 5 m ladder reaches a point 4 m up a wall. What angle does the ladder make with the ground?",
  options: ["36.9°", "53.1°", "60.0°", "66.4°"],
  answer: 1,
  explanation: "sin θ = opposite/hypotenuse = 4/5, so θ ≈ 53.1°.",
},
{
  id: "trig2-4",
  question: "What is the space diagonal of a cube with side length 4?",
  options: ["4√2", "4√3", "8", "8√2"],
  answer: 1,
  explanation: "For a cube, the space diagonal is s√3, so it is 4√3.",
},
{
  id: "trig2-5",
  question: "Which statement is the sine rule?",
  options: ["a² = b² + c² − 2bc cos A", "Area = 1/2 ab sin C", "a/sin A = b/sin B", "tan θ = opposite/adjacent"],
  answer: 2,
  explanation: "The sine rule compares sides to the sine of their opposite angles.",
},
{
  id: "trig2-6",
  question: "In a triangle, a = 10, A = 30° and b = 6. Find angle B.",
  options: ["17.5°", "30°", "36.9°", "72.5°"],
  answer: 0,
  explanation: "Using the sine rule, sin B / 6 = sin 30° / 10, so sin B = 0.3 and B ≈ 17.5°.",
},
{
  id: "trig2-7",
  question: "Which statement about angles of elevation and depression is correct?",
  options: ["They are always supplementary", "They are equal when measured from parallel horizontals", "They are only used in right-angled triangles", "They are measured from the vertical"],
  answer: 1,
  explanation: "They are equal because the horizontal lines are parallel and the line of sight forms equal alternate angles.",
},
{
  id: "trig2-8",
  question: "A 12 m flagpole casts a 5 m shadow. What is the angle of elevation of the sun, to the nearest degree?",
  options: ["23°", "45°", "67°", "78°"],
  answer: 2,
  explanation: "tan θ = 12/5 = 2.4, so θ ≈ 67.4°, which rounds to 67°.",
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

  const TrigonometryTwoThreeDimensions = () => (
    <CapsSubjectTopic
      title="Trigonometry in Two and Three Dimensions"
      subtitle="Non-routine diagrams, sine and cosine rules, and 3D reasoning"
      learnSteps={topicLearnSteps}
      task="gr12-trigonometry-two-three-dimensions-t2"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default TrigonometryTwoThreeDimensions;
