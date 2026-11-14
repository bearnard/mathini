import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/math/term3/euclidean-geometry/diagram.webp", alt: "Euclidean Geometry" },
    title: 'Apply Circle Theorems with Exact Statements',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Write the theorem you are using as you solve. This makes your reasoning clear and protects method marks.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`\\angle AOB = 2\\angle ACB`}</Formula>
          <Formula block>{String.raw`\\angle \\text{in the same segment are equal}`}</Formula>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => 2 * x, label: 'centre angle = 2 × circumference angle', color: '#6366f1' },
          ]}
          xRange={[0, 90]}
          yRange={[0, 180]}
        />
      </div>
    ),
  },
  {
    title: 'Track Angles in Cyclic Quadrilaterals',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">When a quadrilateral is cyclic, opposite angles are supplementary. Use that result together with equal angles from the same segment.</p>
        <Formula block>{String.raw`\\angle A + \\angle C = 180^\\circ`}</Formula>
        <FunctionGraph
          curves={[
            { fn: (x: number) => 180 - x, label: 'opposite angle pair', color: '#14b8a6' },
          ]}
          xRange={[0, 180]}
          yRange={[0, 180]}
        />
        <div className="rounded-xl bg-cyan-50 p-4">
          <p className="text-sm text-slate-600">If one opposite angle is <Formula>{String.raw`112^\\circ`}</Formula>, the other is <Formula>{String.raw`68^\\circ`}</Formula>.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Use Tangent and Chord Relationships',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">A tangent creates right angles with the radius, and the angle between a tangent and chord equals the angle in the opposite segment.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-4">
            <Formula block>{String.raw`PT \\perp OT`}</Formula>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <Formula block>{String.raw`\\angle \\text{between tangent and chord} = \\angle \\text{in opposite segment}`}</Formula>
          </div>
        </div>
        <p className="text-sm text-slate-600">Always give a reason beside each angle step, especially in multi-line proofs.</p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'The angle inscribed in a semicircle is always:',
    options: ['45°', '180°', '90°', '60°'],
    answer: '90°',
    explanation: 'An angle in a semicircle (angle subtended by a diameter) is always 90°.',
  },
  {
    prompt: 'Opposite angles in a cyclic quadrilateral:',
    options: ['Add up to 180°', 'Are equal', 'Add up to 360°', 'Add up to 90°'],
    answer: 'Add up to 180°',
    explanation: 'Opposite angles of a cyclic quadrilateral are supplementary: they sum to 180°.',
  },
  {
    prompt: 'A tangent to a circle is perpendicular to:',
    options: ['Any chord of the circle', 'The diameter of the circle', 'The radius at the point of tangency', 'Another tangent to the circle'],
    answer: 'The radius at the point of tangency',
    explanation: 'The tangent and radius at the point of contact are always perpendicular (90°) to each other.',
  },
  {
    prompt: 'The tangent-chord angle theorem states that this angle equals:',
    options: ['The central angle on the same chord', 'The inscribed angle in the alternate segment', 'Double the angle in the alternate segment', 'The angle in the same segment'],
    answer: 'The inscribed angle in the alternate segment',
    explanation: 'This is the Tangent-Chord (Alternate Segment) Theorem.',
  },
  {
    prompt: 'The angle at the centre of a circle is ___ times the inscribed angle on the same arc:',
    options: ['Equal', 'Three', 'Twice', 'Half'],
    answer: 'Twice',
    explanation: 'Central angle = 2 × inscribed angle on the same chord/arc. This is a core circle theorem.',
  },
  {
    prompt: 'A perpendicular from the centre of a circle to a chord:',
    options: ['Bisects the arc only', 'Bisects the chord', 'Is a tangent', 'Passes through a point on the circle'],
    answer: 'Bisects the chord',
    explanation: 'The perpendicular from the centre bisects the chord — and also bisects the arc.',
  },
  {
    prompt: 'In cyclic quadrilateral ABCD, ∠A = 70°. What is ∠C?',
    options: ['70°', '90°', '140°', '110°'],
    answer: '110°',
    explanation: 'Opposite angles of a cyclic quad sum to 180°: ∠A + ∠C = 180°, so ∠C = 110°.',
  },
  {
    prompt: 'Equal chords in the same circle are:',
    options: ['Equidistant from the centre', 'Parallel to each other', 'Equal to the radius', 'Perpendicular'],
    answer: 'Equidistant from the centre',
    explanation: 'Equal chords are the same distance from the centre of the circle.',
  },
  {
    prompt: 'Angles subtended by the same arc at the circumference are:',
    options: ['Supplementary', 'Complementary', 'Twice the central angle', 'Equal'],
    answer: 'Equal',
    explanation: 'Inscribed angles subtending the same chord/arc from the same side are equal.',
  },
];

const EuclideanGeometry = () => (
  <CapsSubjectTopic
    title="Euclidean Geometry"
    subtitle="Circle theorems, tangents, chords and cyclic quadrilaterals"
    learnSteps={learnSteps}
    task="gr11-euclidean-geometry-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default EuclideanGeometry;
