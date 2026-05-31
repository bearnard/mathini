import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Perimeter and Area Formulae',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learn formulae for common 2D shapes: triangles, rectangles, circles, and parallelograms.
        </p>
      </div>
    ),
  },
  {
    title: 'Composite Figures',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Break complex shapes into simpler parts and calculate total area and perimeter accurately.
        </p>
      </div>
    ),
  },
  {
    title: 'Unit Consistency and Applications',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use correct units and interpret measurements in practical problem-solving contexts.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'What is the area of a rectangle with length 8 cm and width 5 cm?',
    options: ['13 cm²', '26 cm²', '40 cm²', '65 cm²'],
    answer: '40 cm²',
    explanation: 'Area = length × width = 8 × 5 = 40 cm².',
  },
  {
    prompt: 'The perimeter of a square with side 6 m is:',
    options: ['6 m', '12 m', '24 m', '36 m'],
    answer: '24 m',
    explanation: 'Perimeter = 4 × side = 4 × 6 = 24 m.',
  },
  {
    prompt: 'What is the area of a triangle with base 10 cm and height 8 cm?',
    options: ['40 cm²', '80 cm²', '18 cm²', '20 cm²'],
    answer: '40 cm²',
    explanation: 'Area = ½ × base × height = ½ × 10 × 8 = 40 cm².',
  },
  {
    prompt: 'The circumference of a circle with radius 5 cm is approximately:',
    options: ['15.7 cm', '31.4 cm', '78.5 cm', '10 cm'],
    answer: '31.4 cm',
    explanation: 'Circumference = 2πr = 2 × π × 5 ≈ 31.4 cm.',
  },
  {
    prompt: 'A composite figure consists of a rectangle (6 × 4) and a triangle (base 6, height 3) stacked on top. What is the total area?',
    options: ['24 cm²', '33 cm²', '48 cm²', '57 cm²'],
    answer: '33 cm²',
    explanation: 'Rectangle area = 6 × 4 = 24; Triangle area = ½ × 6 × 3 = 9; Total = 33 cm².',
  },
  {
    prompt: 'The perimeter of a rectangle is 20 m. If the length is 8 m, what is the width?',
    options: ['2 m', '4 m', '5 m', '12 m'],
    answer: '2 m',
    explanation: 'Perimeter = 2(length + width); 20 = 2(8 + w); w = 2 m.',
  },
  {
    prompt: 'What is the area of a circle with radius 3 cm (use π ≈ 3.14)?',
    options: ['6.28 cm²', '9.42 cm²', '28.26 cm²', '18.84 cm²'],
    answer: '28.26 cm²',
    explanation: 'Area = πr² = 3.14 × 3² = 3.14 × 9 ≈ 28.26 cm².',
  },
  {
    prompt: 'A parallelogram has a base of 12 cm and a height of 5 cm. Its area is:',
    options: ['17 cm²', '30 cm²', '60 cm²', '85 cm²'],
    answer: '60 cm²',
    explanation: 'Area of a parallelogram = base × height = 12 × 5 = 60 cm².',
  },
];

const AreaAndPerimeter = () => (
  <CapsSubjectTopic
    title="Area and Perimeter of 2D Shapes"
    subtitle="Formulae and problem solving for compound 2D figures"
    learnSteps={learnSteps}
    task="gr9-area-perimeter-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AreaAndPerimeter;
