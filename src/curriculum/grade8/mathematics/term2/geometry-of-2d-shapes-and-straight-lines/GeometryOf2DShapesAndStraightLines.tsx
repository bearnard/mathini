import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Reason with 2D shape and line-angle properties',
    image: {
      src: '/curriculum/grade8/math/term2/geometry-of-2d-shapes-and-straight-lines/diagram.webp',
      alt: 'Grade 8 learners solving angle problems in polygons and parallel lines',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Geometry of 2D shapes and lines develops logical reasoning. Learners classify polygons, apply angle facts,
          and justify steps when solving unknown-angle problems.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the sum of interior angles of a quadrilateral?',
    options: ['360°', '180°', '540°', '270°'],
    answer: '360°',
    explanation: 'Any quadrilateral can be split into two triangles: 2 × 180°.',
  },
  {
    prompt: 'Vertically opposite angles are always...',
    options: ['equal', 'supplementary', 'complementary', 'right angles'],
    answer: 'equal',
    explanation: 'When two lines intersect, opposite angles are equal.',
  },
  {
    prompt: 'If two parallel lines are cut by a transversal, alternate interior angles are...',
    options: ['equal', 'supplementary', 'opposite signs', 'always 90°'],
    answer: 'equal',
    explanation: 'Alternate interior angles are equal for parallel lines.',
  },
  {
    prompt: 'Supplementary angles add up to...',
    options: ['180°', '90°', '360°', '270°'],
    answer: '180°',
    explanation: 'Supplementary means together they form a straight angle.',
  },
  {
    prompt: 'The interior angles of a triangle add up to...',
    options: ['180°', '360°', '90°', '270°'],
    answer: '180°',
    explanation: 'This is a core triangle angle property.',
  },
  {
    prompt: 'What is an 8-sided polygon called?',
    options: ['Octagon', 'Hexagon', 'Heptagon', 'Nonagon'],
    answer: 'Octagon',
    explanation: 'An octagon has eight sides.',
  },
  {
    prompt: 'For parallel lines, corresponding angles are...',
    options: ['equal', 'always 0°', 'complementary', 'unrelated'],
    answer: 'equal',
    explanation: 'Corresponding angles are equal when lines are parallel.',
  },
  {
    prompt: 'An exterior angle of a triangle equals...',
    options: ['the sum of the two opposite interior angles', 'half of the interior angle', '90° always', 'the adjacent interior angle'],
    answer: 'the sum of the two opposite interior angles',
    explanation: 'This is the exterior-angle theorem for triangles.',
  },
];

const GeometryOf2DShapesAndStraightLines = () => (
  <CapsSubjectTopic
    title="Geometry of 2D Shapes and Straight Lines"
    subtitle="Polygon properties, parallel lines, and angle relationships"
    learnSteps={learnSteps}
    task="gr8-geometry-of-2d-shapes-and-straight-lines-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default GeometryOf2DShapesAndStraightLines;
