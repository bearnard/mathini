import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Properties of Triangles and Quadrilaterals',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Understand angle sums, side relationships, and classification of triangles and quadrilaterals.
        </p>
      </div>
    ),
  },
  {
    title: 'Angle Relationships with Lines',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learn about vertically opposite angles, corresponding angles, and co-interior angles.
        </p>
      </div>
    ),
  },
  {
    title: 'Deductive Geometry Reasoning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Solve geometry problems by providing step-by-step reasoning with geometric properties and theorems.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'The sum of interior angles in any triangle is:',
    options: ['90°', '180°', '270°', '360°'],
    answer: '180°',
    explanation: 'The angle sum property states that all triangles have interior angles summing to 180°.',
  },
  {
    prompt: 'If two lines are parallel and cut by a transversal, which angles are equal?',
    options: ['All angles', 'Corresponding angles', 'No angles', 'Adjacent angles'],
    answer: 'Corresponding angles',
    explanation: 'Corresponding angles are in the same position at each intersection and are equal when lines are parallel.',
  },
  {
    prompt: 'What is the sum of interior angles in a quadrilateral?',
    options: ['180°', '270°', '360°', '540°'],
    answer: '360°',
    explanation: 'Any quadrilateral has interior angles that sum to 360°.',
  },
  {
    prompt: 'Vertically opposite angles are:',
    options: ['Adjacent', 'Equal', 'Supplementary', 'Complementary'],
    answer: 'Equal',
    explanation: 'Vertically opposite angles (formed by intersecting lines) are always equal.',
  },
  {
    prompt: 'In an isosceles triangle, if one base angle is 50°, what is the other base angle?',
    options: ['40°', '50°', '60°', '80°'],
    answer: '50°',
    explanation: 'Base angles in an isosceles triangle are equal, so both base angles are 50°.',
  },
  {
    prompt: 'What is the third angle in a triangle if two angles are 45° and 65°?',
    options: ['70°', '80°', '90°', '100°'],
    answer: '70°',
    explanation: 'Using the angle sum: 45° + 65° + third angle = 180°, so the third angle is 70°.',
  },
  {
    prompt: 'Co-interior angles on the same side of a transversal are:',
    options: ['Equal', 'Supplementary (sum to 180°)', 'Complementary', 'Vertically opposite'],
    answer: 'Supplementary (sum to 180°)',
    explanation: 'Co-interior (same-side interior) angles sum to 180° when lines are parallel.',
  },
  {
    prompt: 'A quadrilateral has angles 70°, 90°, 80°, and x. What is x?',
    options: ['110°', '120°', '130°', '140°'],
    answer: '120°',
    explanation: 'The sum is 360°: 70° + 90° + 80° + x = 360°, so x = 120°.',
  },
];

const Geometry2DShapes = () => (
  <CapsSubjectTopic
    title="Geometry of 2D Shapes and Straight Lines"
    subtitle="Properties of shapes, angle relationships, and deductive reasoning"
    learnSteps={learnSteps}
    task="gr9-geometry-2d-shapes-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Geometry2DShapes;
