import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Construct accurate geometric figures',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Geometric construction uses instruments carefully. Learners construct angles, triangles, and quadrilaterals
          while checking lengths and angle properties.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which instrument is used to draw a circle with a fixed radius?',
    options: ['Compass', 'Protractor', 'Set square', 'Ruler only'],
    answer: 'Compass',
    explanation: 'A compass keeps the radius constant while drawing a circle.',
  },
  {
    prompt: 'A triangle with sides 5 cm, 5 cm, and 8 cm is...',
    options: ['Isosceles', 'Equilateral', 'Scalene', 'Right-angled only'],
    answer: 'Isosceles',
    explanation: 'Two equal sides make it an isosceles triangle.',
  },
  {
    prompt: 'An angle of 90° is called a...',
    options: ['Right angle', 'Acute angle', 'Reflex angle', 'Straight angle'],
    answer: 'Right angle',
    explanation: 'A right angle measures exactly 90°.',
  },
  {
    prompt: 'To construct a perpendicular bisector of a line segment, you must draw...',
    options: [
      'equal arcs from both endpoints',
      'one arc from the midpoint only',
      'a random diagonal first',
      'parallel lines through one endpoint',
    ],
    answer: 'equal arcs from both endpoints',
    explanation: 'Intersecting equal arcs from each endpoint locate the bisector.',
  },
  {
    prompt: 'What is the sum of interior angles in any triangle?',
    options: ['180°', '90°', '270°', '360°'],
    answer: '180°',
    explanation: 'All triangles have interior angles adding to 180°.',
  },
  {
    prompt: 'When measuring with a protractor, the centre mark should be placed on...',
    options: ['the vertex of the angle', 'the end of the ruler', 'the longest side', 'the midpoint of a page'],
    answer: 'the vertex of the angle',
    explanation: 'Correct placement starts at the angle vertex.',
  },
  {
    prompt: 'Which quadrilateral has exactly one pair of parallel sides?',
    options: ['Trapezium', 'Rectangle', 'Square', 'Rhombus'],
    answer: 'Trapezium',
    explanation: 'A trapezium has one pair of opposite parallel sides.',
  },
  {
    prompt: 'To construct an equilateral triangle with side 6 cm, the compass width must stay at...',
    options: ['6 cm', '3 cm', '12 cm', 'any random width'],
    answer: '6 cm',
    explanation: 'All sides are equal, so the same radius is used from both endpoints.',
  },
];

const ConstructionOfGeometricFigures = () => (
  <CapsSubjectTopic
    title="Construction of Geometric Figures"
    subtitle="Using ruler, compass, and protractor for accurate constructions"
    learnSteps={learnSteps}
    task="gr7-construction-of-geometric-figures-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default ConstructionOfGeometricFigures;
