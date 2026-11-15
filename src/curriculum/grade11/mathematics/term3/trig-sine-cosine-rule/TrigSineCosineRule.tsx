import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';
import UnitCircleExplorer from '@/components/subjects/UnitCircleExplorer';

const learnSteps: LearnStep[] = [
  {
    title: 'Choose Between the Sine and Cosine Rule',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Use the sine rule when you have an angle-opposite side pair. Use the cosine rule for <Formula>{String.raw`SAS`}</Formula> or <Formula>{String.raw`SSS`}</Formula> cases.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}`}</Formula>
          <Formula block>{String.raw`c^2 = a^2 + b^2 - 2ab\cos C`}</Formula>
        </div>
      </div>
    ),
  },
  {
    title: 'Substitute Carefully and Keep the Pairings Correct',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Match each side to its opposite angle. A wrong pairing changes the whole answer.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <h4 className="font-semibold text-indigo-700">Sine rule example</h4>
            <Formula block>{String.raw`\frac{8}{\sin 40^\circ} = \frac{x}{\sin 65^\circ}`}</Formula>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <h4 className="font-semibold text-violet-700">Cosine rule example</h4>
            <Formula block>{String.raw`x^2 = 7^2 + 9^2 - 2(7)(9)\cos 50^\circ`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Unit Circle Explorer',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Explore sine, cosine, and tangent values in all four quadrants and use the CAST rule to see how reference angles support non-right-angled triangle work.</p>
        <UnitCircleExplorer initialAngle={60} showCastRule={true} />
      </div>
    ),
  },
  {
    title: 'Use the Area Formula with Included Angle',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">If two sides and the included angle are known, find the area directly before doing any extra work.</p>
        <Formula block>{String.raw`\text{Area} = \frac{1}{2}ab\sin C`}</Formula>
        <FunctionGraph
          curves={[
            { fn: (x: number) => 24 * Math.sin((x * Math.PI) / 180), label: 'Area for a=6, b=8', color: '#14b8a6' },
          ]}
          xRange={[0, 180]}
          yRange={[0, 26]}
        />
        <p className="text-sm text-slate-600">The area is greatest when the included angle is close to <Formula>{String.raw`90^\circ`}</Formula> because <Formula>{String.raw`\sin 90^\circ = 1`}</Formula>.</p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'The area rule for a triangle is:',
    options: ['½ × base × height', '½ab sin C', 'a² = b² + c² − 2bc cos A', 'a/sin A = b/sin B'],
    answer: '½ab sin C',
    explanation: 'Area = ½ab sin C, where a and b are two sides and C is the included angle.',
  },
  {
    prompt: 'In △ABC, a = 5, A = 30°, B = 45°. Using the sine rule, b equals:',
    options: ['5', '5√3', '5√2', '10'],
    answer: '5√2',
    explanation: 'b/sin 45° = 5/sin 30°. b = 5 × sin 45°/sin 30° = 5 × (√2/2)/(1/2) = 5√2.',
  },
  {
    prompt: 'The cosine rule is best used when:',
    options: ['Two angles and a side are known (AAS)', 'No side-angle pair is known (SAS or SSS)', 'Three angles are known', 'Two sides and an opposite angle are given'],
    answer: 'No side-angle pair is known (SAS or SSS)',
    explanation: 'The cosine rule applies to SAS (two sides and included angle) or SSS (three sides).',
  },
  {
    prompt: 'In △ABC, b = 3, c = 4, A = 60°. Using the cosine rule, a equals:',
    options: ['5', '√7', '√19', '√13'],
    answer: '√13',
    explanation: 'a² = 9 + 16 − 2(3)(4) cos 60° = 25 − 24(0,5) = 25 − 12 = 13. So a = √13.',
  },
  {
    prompt: 'The sine rule should be used when:',
    options: ['All three sides are known', 'Two sides and the included angle are known', 'A known angle-opposite side pair exists', 'No angles are given'],
    answer: 'A known angle-opposite side pair exists',
    explanation: 'The sine rule requires at least one complete side-angle pair: a/sin A = b/sin B = c/sin C.',
  },
  {
    prompt: 'The area of a triangle with sides 6 and 8, and included angle 30°, is:',
    options: ['48', '12', '24', '6'],
    answer: '12',
    explanation: 'Area = ½(6)(8) sin 30° = 24 × 0,5 = 12.',
  },
  {
    prompt: 'In the ambiguous case of the sine rule (SSA), what is the greatest number of different triangles the given information can form?',
    options: ['Zero triangles', 'One triangle', 'Two triangles', 'Three triangles'],
    answer: 'Two triangles',
    explanation: 'When two sides and a non-included angle are given, the given side might swing to form two valid triangles.',
  },
  {
    prompt: 'When C = 90°, the cosine rule simplifies to:',
    options: ['a = b + c', 'a² = b² − c²', 'c² = a² + b²', 'c = a × b'],
    answer: 'c² = a² + b²',
    explanation: 'c² = a² + b² − 2ab cos 90° = a² + b² − 0 = a² + b². This is Pythagoras\' theorem.',
  },
  {
    prompt: 'A triangle has sides a = 4, b = 6 and included angle C = 30°. Its area is:',
    options: ['12', '8', '6', '3'],
    answer: '6',
    explanation: 'Area = ½(4)(6) sin 30° = 12 × 0,5 = 6.',
  },
];

const TrigSineCosineRule = () => (
  <CapsSubjectTopic
    title="Trigonometry — Sine, Cosine and Area Rules"
    subtitle="Solving non-right-angled triangles with the correct rule"
    learnSteps={learnSteps}
    task="gr11-trig-sine-cosine-rule-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default TrigSineCosineRule;
