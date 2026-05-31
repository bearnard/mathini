import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Geometric Construction Tools',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learn to use a compass, straightedge, and protractor to construct triangles, angles, and perpendiculars.
        </p>
      </div>
    ),
  },
  {
    title: 'Justifying Constructions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Explain why constructions work using geometric properties and the relationships between elements.
        </p>
      </div>
    ),
  },
  {
    title: 'Precision and Notation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Develop accuracy in measurements and proper mathematical notation for construction steps.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'To construct an angle bisector, which tool is essential?',
    options: ['Protractor only', 'Ruler only', 'Compass and straightedge', 'Calculator'],
    answer: 'Compass and straightedge',
    explanation: 'A compass is used to mark equal arcs, and a straightedge draws the bisector line.',
  },
  {
    prompt: 'What is the first step in constructing a perpendicular to a line?',
    options: ['Mark a point on the line', 'Draw a circle', 'Measure an angle', 'Find the midpoint'],
    answer: 'Mark a point on the line',
    explanation: 'You begin by identifying where the perpendicular will meet the original line.',
  },
  {
    prompt: 'To construct an equilateral triangle with side length 5 cm, what is the compass width?',
    options: ['2.5 cm', '5 cm', '10 cm', 'Varies'],
    answer: '5 cm',
    explanation: 'All sides of an equilateral triangle are equal, so the compass width equals the side length.',
  },
  {
    prompt: 'How many arcs do you draw to construct the perpendicular bisector of a line segment?',
    options: ['2', '4', '6', '8'],
    answer: '4',
    explanation: 'Two arcs above and two below the segment (one from each endpoint).',
  },
  {
    prompt: 'What property ensures a constructed perpendicular is actually perpendicular?',
    options: ['Equal distances from endpoints', 'Compass arc consistency', 'Straight line use', 'All of the above'],
    answer: 'All of the above',
    explanation: 'These properties work together to guarantee a 90° angle.',
  },
  {
    prompt: 'In constructing a triangle given three sides (SSS), what must you verify?',
    options: ['Angles are 60°', 'The triangle inequality holds', 'Sides are equal', 'All angles sum to 90°'],
    answer: 'The triangle inequality holds',
    explanation: 'The sum of any two sides must exceed the third side for a valid triangle.',
  },
  {
    prompt: 'Which construction creates two angles of equal measure from an original angle?',
    options: ['Perpendicular bisector', 'Angle bisector', 'Parallel line', 'Altitude'],
    answer: 'Angle bisector',
    explanation: 'An angle bisector divides an angle into two equal parts.',
  },
  {
    prompt: 'What notation typically indicates a right angle in geometric construction?',
    options: ['An arc', 'A small square', 'A curved line', 'Dotted lines'],
    answer: 'A small square',
    explanation: 'A small square in the corner indicates a 90° angle in geometric diagrams.',
  },
];

const GeometryConstructions = () => (
  <CapsSubjectTopic
    title="Construction of Geometric Figures"
    subtitle="Accurate geometric constructions with tools and justification"
    learnSteps={learnSteps}
    task="gr9-geometry-constructions-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default GeometryConstructions;
