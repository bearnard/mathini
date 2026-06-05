import CapsSubjectTopic from '@/components/CapsSubjectTopic';
  import type { CapsItem } from '@/components/CapsSubjectTopic';
  import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';

  const learnSteps: LearnStep[] = [
  {
    title: 'Similarity and proportional reasoning',
    content: (
      <>
        <p>
          When triangles are similar, corresponding angles are equal and corresponding sides are proportional.
          Write the matching vertices in the same order so that your ratios stay consistent throughout the proof.
        </p>
        <Formula block>{String.raw`\triangle ADE \sim \triangle ABC \Rightarrow \frac{AD}{AB} = \frac{AE}{AC} = \frac{DE}{BC}`}</Formula>
      </>
    ),
  },
  {
    title: 'Parallel-line theorems and midpoint results',
    content: (
      <>
        <p>
          Parallel lines create equal corresponding and alternate angles, and they also divide transversals in
          proportion. Midpoint results are especially useful because they convert a long proof into a short chain
          of proportional facts.
        </p>
        <Formula block>{String.raw`DE \parallel BC \Rightarrow \frac{AD}{DB} = \frac{AE}{EC}`}</Formula>
      </>
    ),
  },
  {
    title: 'Writing formal riders',
    content: (
      <>
        <p>
          Formal Euclidean riders need a clear chain of reasons. State each theorem, give the matching reason,
          and avoid skipping the logical steps that connect one fact to the next.
        </p>
      </>
    ),
  },
];

  const items: MathematicsItem[] = [
    {
  id: "euc-1",
  question: "In ΔABC, DE ∥ BC. If AD = 3, DB = 2 and AC = 10, find AE.",
  options: ["4", "5", "6", "7"],
  answer: 2,
  explanation: "Since DE ∥ BC, ΔADE ∼ ΔABC. So AD/AB = AE/AC = 3/5, giving AE = 3/5 × 10 = 6.",
},
{
  id: "euc-2",
  question: "If the corresponding side ratio of two similar triangles is 2 : 3, what is the area ratio?",
  options: ["2 : 3", "4 : 9", "6 : 9", "8 : 27"],
  answer: 1,
  explanation: "Area scales with the square of the side ratio, so (2 : 3)² = 4 : 9.",
},
{
  id: "euc-3",
  question: "What does the midpoint theorem state?",
  options: ["The line joining the midpoints of two sides is perpendicular to the third side", "The line joining the midpoints of two sides is parallel to the third side and half its length", "The midpoint always bisects the area", "Any median is equal to the third side"],
  answer: 1,
  explanation: "That is the standard midpoint theorem in a triangle.",
},
{
  id: "euc-4",
  question: "If a line passes through the midpoint of one side of a triangle and is parallel to another side, then it ...",
  options: ["creates a right angle", "bisects the third side", "makes the triangle isosceles", "doubles the base"],
  answer: 1,
  explanation: "This is the converse of the midpoint theorem.",
},
{
  id: "euc-5",
  question: "If corresponding angles in two triangles are equal, the triangles are ...",
  options: ["congruent", "similar", "parallel", "cyclic"],
  answer: 1,
  explanation: "Equal corresponding angles imply the triangles are similar.",
},
{
  id: "euc-6",
  question: "If DE ∥ BC in a triangle, which proportion is correct?",
  options: ["AD/DB = AE/EC", "AD/AB = DB/BC", "AE/AC = DB/BC", "AB/AC = DE/BC"],
  answer: 0,
  explanation: "A line parallel to one side divides the other two sides proportionally, so AD/DB = AE/EC.",
},
{
  id: "euc-7",
  question: "If corresponding sides of similar polygons are in the ratio 5 : 2, the ratio of their perimeters is ...",
  options: ["25 : 4", "10 : 4", "5 : 2", "2 : 5"],
  answer: 2,
  explanation: "Perimeters scale directly with the corresponding side ratio.",
},
{
  id: "euc-8",
  question: "In two similar triangles, AB : DE = 3 : 1. If BC = 15 and BC corresponds to EF, what is EF?",
  options: ["3", "5", "12", "45"],
  answer: 1,
  explanation: "The smaller triangle has side lengths one third of the larger, so EF = 15 ÷ 3 = 5.",
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

  const EuclideanGeometry = () => (
    <CapsSubjectTopic
      title="Euclidean Geometry"
      subtitle="Similarity, proportional reasoning, midpoint theorem and riders"
      learnSteps={topicLearnSteps}
      task="gr12-euclidean-geometry-t3"
      bank={bank}
      apiPath="/api/caps/math"
    />
  );

  export default EuclideanGeometry;
