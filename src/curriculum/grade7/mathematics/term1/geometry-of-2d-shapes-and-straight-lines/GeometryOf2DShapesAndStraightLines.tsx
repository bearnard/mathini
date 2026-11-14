import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use shape properties and line-angle facts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Geometry of 2D shapes includes classifying triangles and quadrilaterals and applying angle facts for
          intersecting and parallel lines.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the sum of interior angles in a quadrilateral?',
    options: ['360°', '180°', '270°', '540°'],
    answer: '360°',
    explanation: 'Any quadrilateral has interior angles that add up to 360°.',
  },
  {
    prompt: 'Vertically opposite angles are always...',
    options: ['equal', 'supplementary only', 'acute only', 'different'],
    answer: 'equal',
    explanation: 'When two lines intersect, opposite angles are equal.',
  },
  {
    prompt: 'Two adjacent angles on a straight line add up to...',
    options: ['180°', '90°', '360°', '45°'],
    answer: '180°',
    explanation: 'Angles on a straight line are supplementary.',
  },
  {
    prompt: 'When two parallel lines are cut by a transversal, corresponding angles are...',
    options: ['equal', 'always 90°', 'always obtuse', 'unrelated'],
    answer: 'equal',
    explanation: 'Corresponding angles match in size for parallel lines.',
  },
  {
    prompt: 'A triangle with all three sides equal is called...',
    options: ['Equilateral', 'Isosceles', 'Scalene', 'Right'],
    answer: 'Equilateral',
    explanation: 'Equilateral triangles have all equal sides and equal angles.',
  },
  {
    prompt: 'How many sides does an octagon have?',
    options: ['8', '6', '7', '10'],
    answer: '8',
    explanation: 'An octagon is an 8-sided polygon.',
  },
  {
    prompt: 'In a regular pentagon, each interior angle is...',
    options: ['108°', '90°', '120°', '72°'],
    answer: '108°',
    explanation: 'A regular pentagon has equal interior angles of 108°.',
  },
  {
    prompt: 'One interior angle and its adjacent exterior angle at a vertex add up to...',
    options: ['180°', '360°', '90°', '270°'],
    answer: '180°',
    explanation: 'Interior and adjacent exterior angles form a straight line.',
  },
];

const GeometryOf2DShapesAndStraightLines = () => (
  <CapsSubjectTopic
    title="Geometry of 2D Shapes and Straight Lines"
    subtitle="Shape properties, classification, and angle relationships"
    learnSteps={learnSteps}
    task="gr7-geometry-of-2d-shapes-and-straight-lines-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default GeometryOf2DShapesAndStraightLines;
