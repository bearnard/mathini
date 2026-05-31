import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Distinguish area from perimeter',
    image: {
      src: '/curriculum/grade7/math/term2/area-and-perimeter-of-2d-shapes/diagram.webp',
      alt: 'Grade 7 learners calculating area and perimeter of rectangles and composite 2D shapes',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Perimeter measures distance around a shape, while area measures the space inside. Learners apply formulas and
          break composite shapes into smaller rectangles.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the perimeter of a rectangle with length 8 cm and width 5 cm?',
    options: ['26 cm', '40 cm', '13 cm', '30 cm'],
    answer: '26 cm',
    explanation: 'Perimeter = 2(l + w) = 2(8 + 5) = 26 cm.',
  },
  {
    prompt: 'What is the area of the same rectangle (8 cm by 5 cm)?',
    options: ['40 cm²', '26 cm²', '13 cm²', '80 cm²'],
    answer: '40 cm²',
    explanation: 'Area = length × width = 8 × 5 = 40 cm².',
  },
  {
    prompt: 'A square has side 7 cm. What is its perimeter?',
    options: ['28 cm', '49 cm', '14 cm', '21 cm'],
    answer: '28 cm',
    explanation: 'Perimeter of a square = 4 × side = 28 cm.',
  },
  {
    prompt: 'A square has side 7 cm. What is its area?',
    options: ['49 cm²', '28 cm²', '14 cm²', '21 cm²'],
    answer: '49 cm²',
    explanation: 'Area = side × side = 7 × 7 = 49 cm².',
  },
  {
    prompt: 'If a composite shape is split into two rectangles with areas 24 cm² and 12 cm², total area is...',
    options: ['36 cm²', '12 cm²', '48 cm²', '24 cm²'],
    answer: '36 cm²',
    explanation: 'Add the rectangle areas: 24 + 12 = 36 cm².',
  },
  {
    prompt: 'Which unit is correct for area?',
    options: ['cm²', 'cm', 'm', 'km/h'],
    answer: 'cm²',
    explanation: 'Area is measured in square units.',
  },
  {
    prompt: 'Perimeter tells you...',
    options: [
      'the distance around a shape',
      'the amount of space inside a shape',
      'the volume of a shape',
      'the number of angles in a shape',
    ],
    answer: 'the distance around a shape',
    explanation: 'Perimeter is the boundary length.',
  },
  {
    prompt: 'A rectangle changes from 10 cm × 3 cm to 12 cm × 3 cm. What is the new perimeter?',
    options: ['30 cm', '36 cm', '24 cm', '15 cm'],
    answer: '30 cm',
    explanation: 'New perimeter = 2(12 + 3) = 30 cm.',
  },
];

const AreaAndPerimeterOf2DShapes = () => (
  <CapsSubjectTopic
    title="Area and Perimeter of 2D Shapes"
    subtitle="Applying formulas to rectangles, squares, and composite shapes"
    learnSteps={learnSteps}
    task="gr7-area-and-perimeter-of-2d-shapes-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AreaAndPerimeterOf2DShapes;
