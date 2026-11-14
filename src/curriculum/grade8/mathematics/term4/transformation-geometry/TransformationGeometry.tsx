import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Describe and apply geometric transformations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Transformation geometry studies how shapes move or resize on the coordinate plane. Learners use precise
          language for translations, reflections, rotations, and enlargements.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A translation is a...',
    options: ['slide', 'flip', 'turn', 'resize'],
    answer: 'slide',
    explanation: 'Translation moves every point the same distance and direction.',
  },
  {
    prompt: 'A reflection creates a...',
    options: ['mirror image', 'larger image', 'rotated image only', '3D model'],
    answer: 'mirror image',
    explanation: 'Reflection flips a shape across a line.',
  },
  {
    prompt: 'A rotation changes a shape by...',
    options: ['turning it around a point', 'sliding it horizontally', 'stretching one side only', 'changing all side lengths'],
    answer: 'turning it around a point',
    explanation: 'Rotation uses a centre and an angle of turn.',
  },
  {
    prompt: 'An enlargement with scale factor 2 makes side lengths...',
    options: ['double', 'half', 'unchanged', 'negative'],
    answer: 'double',
    explanation: 'Scale factor 2 multiplies all lengths by 2.',
  },
  {
    prompt: 'Which transformation preserves size and shape?',
    options: ['translation', 'enlargement', 'reduction', 'stretch'],
    answer: 'translation',
    explanation: 'Translations are rigid transformations.',
  },
  {
    prompt: 'Translate (2, -1) by (+3, +2). New point?',
    options: ['(5, 1)', '(1, 1)', '(5, -3)', '(-1, 1)'],
    answer: '(5, 1)',
    explanation: 'Add 3 to x and 2 to y.',
  },
  {
    prompt: 'Reflect (4, -3) in the y-axis.',
    options: ['(-4, -3)', '(4, 3)', '(-4, 3)', '(3, -4)'],
    answer: '(-4, -3)',
    explanation: 'Reflection in y-axis changes x to its opposite.',
  },
  {
    prompt: 'Rotate (1, 2) 90° clockwise about the origin.',
    options: ['(2, -1)', '(-2, 1)', '(1, -2)', '(-1, 2)'],
    answer: '(2, -1)',
    explanation: 'For 90° clockwise, (x, y) becomes (y, -x).',
  },
];

const TransformationGeometry = () => (
  <CapsSubjectTopic
    title="Transformation Geometry"
    subtitle="Translations, reflections, rotations, and enlargements"
    learnSteps={learnSteps}
    task="gr8-transformation-geometry-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default TransformationGeometry;
