import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Transformations on the Plane',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Understand translations, reflections, rotations, and enlargements on coordinate axes.
        </p>
      </div>
    ),
  },
  {
    title: 'Describing Transformations Precisely',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use coordinates to specify transformation details and verify results mathematically.
        </p>
      </div>
    ),
  },
  {
    title: 'Properties and Symmetry',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Analyse how transformations preserve or change shape properties and explore symmetry on the plane.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'If point A(2, 3) is translated 3 units right and 2 units up, what are its new coordinates?',
    options: ['(5, 5)', '(5, 1)', '(-1, 5)', '(2, 6)'],
    answer: '(5, 5)',
    explanation: 'New coordinates: (2 + 3, 3 + 2) = (5, 5).',
  },
  {
    prompt: 'Which transformation preserves the size and shape of a figure?',
    options: ['Enlargement only', 'Translation, reflection, and rotation', 'All transformations', 'Rotation only'],
    answer: 'Translation, reflection, and rotation',
    explanation: 'These rigid transformations preserve size and shape; enlargement changes size.',
  },
  {
    prompt: 'If point B(3, 4) is reflected over the y-axis, what are its new coordinates?',
    options: ['(-3, 4)', '(3, -4)', '(-3, -4)', '(4, 3)'],
    answer: '(-3, 4)',
    explanation: 'Reflection over the y-axis changes the x-coordinate sign: (3, 4) → (-3, 4).',
  },
  {
    prompt: 'A point C(1, 0) is rotated 90° counterclockwise around the origin. Its new position is:',
    options: ['(0, 1)', '(0, -1)', '(1, 0)', '(-1, 0)'],
    answer: '(0, 1)',
    explanation: 'A 90° counterclockwise rotation maps (x, y) to (-y, x): (1, 0) → (0, 1).',
  },
  {
    prompt: 'What does an enlargement with scale factor 2 do to a figure?',
    options: ['Doubles the size', 'Halves the size', 'Rotates it', 'Reflects it'],
    answer: 'Doubles the size',
    explanation: 'A scale factor of 2 means all linear dimensions become twice as large.',
  },
  {
    prompt: 'If a figure has a line of symmetry, what happens when you fold along that line?',
    options: ['The parts do not match', 'The parts match exactly', 'Only one part is visible', 'It rotates'],
    answer: 'The parts match exactly',
    explanation: 'A line of symmetry divides a figure into two identical halves.',
  },
  {
    prompt: 'Point D(2, 2) is reflected over the line y = x. Its new coordinates are:',
    options: ['(2, 2)', '(-2, -2)', '(2, -2)', '(x, y) swaps'],
    answer: '(2, 2)',
    explanation: 'Reflection over y = x swaps coordinates: (2, 2) → (2, 2) (it lies on the line).',
  },
  {
    prompt: 'An enlargement with scale factor 1/2 from the origin maps (4, 6) to:',
    options: ['(2, 3)', '(8, 12)', '(4, 6)', '(2, 6)'],
    answer: '(2, 3)',
    explanation: 'Multiplying each coordinate by 1/2: (4 × 1/2, 6 × 1/2) = (2, 3).',
  },
];

const TransformationGeometry = () => (
  <CapsSubjectTopic
    title="Transformation Geometry"
    subtitle="Translations, reflections, rotations and enlargements"
    learnSteps={learnSteps}
    task="gr9-transformations-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default TransformationGeometry;
