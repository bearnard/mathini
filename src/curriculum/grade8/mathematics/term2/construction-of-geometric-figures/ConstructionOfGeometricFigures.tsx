import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Construct geometric figures with precision',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Construction skills rely on accurate instrument use. Learners apply geometric constraints to build triangles,
          angles, and quadrilaterals that satisfy given measurements.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the sum of interior angles of a triangle?',
    options: ['180°', '90°', '270°', '360°'],
    answer: '180°',
    explanation: 'All triangles have interior angles adding to 180°.',
  },
  {
    prompt: 'Which instrument is used to measure an angle?',
    options: ['Protractor', 'Compass', 'Ruler', 'Set square only'],
    answer: 'Protractor',
    explanation: 'A protractor measures and draws specific angle sizes.',
  },
  {
    prompt: 'An equilateral triangle has...',
    options: ['all sides equal', 'two sides equal', 'one right angle', 'no equal sides'],
    answer: 'all sides equal',
    explanation: 'Equilateral means all three sides are equal.',
  },
  {
    prompt: 'A right angle measures...',
    options: ['90°', '45°', '180°', '60°'],
    answer: '90°',
    explanation: 'By definition, a right angle is 90°.',
  },
  {
    prompt: 'What construction uses intersecting arcs from segment endpoints?',
    options: ['Perpendicular bisector', 'Angle bisector', 'Parallel line', 'Median'],
    answer: 'Perpendicular bisector',
    explanation: 'Equal-radius arcs from both endpoints locate the bisector line.',
  },
  {
    prompt: 'A triangle with sides 5 cm, 5 cm, and 8 cm is...',
    options: ['isosceles', 'equilateral', 'scalene', 'right-angled only'],
    answer: 'isosceles',
    explanation: 'Two sides are equal, so it is isosceles.',
  },
  {
    prompt: 'How many degrees are on a straight line?',
    options: ['180°', '90°', '270°', '360°'],
    answer: '180°',
    explanation: 'A straight angle is 180°.',
  },
  {
    prompt: 'To copy a line segment exactly, you mainly use a...',
    options: ['compass and ruler', 'protractor only', 'calculator', 'set square only'],
    answer: 'compass and ruler',
    explanation: 'A compass transfers length and a ruler draws the segment.',
  },
];

const ConstructionOfGeometricFigures = () => (
  <CapsSubjectTopic
    title="Construction of Geometric Figures"
    subtitle="Instrument use, constraints, and accurate geometric constructions"
    learnSteps={learnSteps}
    task="gr8-construction-of-geometric-figures-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default ConstructionOfGeometricFigures;
