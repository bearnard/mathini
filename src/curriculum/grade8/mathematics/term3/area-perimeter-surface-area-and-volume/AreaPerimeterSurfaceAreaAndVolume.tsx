import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Choose the correct measure and formula',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Measurement problems require selecting the right quantity: perimeter, area, surface area, or volume.
          Learners substitute values carefully and include appropriate units in answers.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Find the area of a rectangle with length 8 cm and width 3 cm.',
    options: ['24 cm²', '22 cm²', '11 cm²', '48 cm²'],
    answer: '24 cm²',
    explanation: 'Area = length × width = 8 × 3.',
  },
  {
    prompt: 'Find the perimeter of a rectangle with sides 5 m and 2 m.',
    options: ['14 m', '10 m', '7 m', '20 m'],
    answer: '14 m',
    explanation: 'Perimeter = 2(5 + 2) = 14.',
  },
  {
    prompt: 'Find the area of a triangle with base 10 cm and height 4 cm.',
    options: ['20 cm²', '40 cm²', '14 cm²', '10 cm²'],
    answer: '20 cm²',
    explanation: 'Area = 1/2 × base × height = 1/2 × 10 × 4.',
  },
  {
    prompt: 'What is the volume of a cube with side 3 cm?',
    options: ['27 cm³', '9 cm³', '18 cm³', '12 cm³'],
    answer: '27 cm³',
    explanation: 'Volume of cube = side³ = 3³.',
  },
  {
    prompt: 'What is the surface area of a cube with side 2 cm?',
    options: ['24 cm²', '8 cm²', '12 cm²', '16 cm²'],
    answer: '24 cm²',
    explanation: 'Surface area = 6 × side² = 6 × 4.',
  },
  {
    prompt: 'Find the volume of a rectangular prism: 4 cm × 3 cm × 2 cm.',
    options: ['24 cm³', '9 cm³', '20 cm³', '18 cm³'],
    answer: '24 cm³',
    explanation: 'Volume = length × width × height.',
  },
  {
    prompt: 'Which unit is most suitable for volume?',
    options: ['cm³', 'cm²', 'cm', 'degrees'],
    answer: 'cm³',
    explanation: 'Volume is measured in cubic units.',
  },
  {
    prompt: 'Which measure describes distance around a shape?',
    options: ['Perimeter', 'Area', 'Volume', 'Surface area'],
    answer: 'Perimeter',
    explanation: 'Perimeter is the total outside boundary length.',
  },
];

const AreaPerimeterSurfaceAreaAndVolume = () => (
  <CapsSubjectTopic
    title="Area, Perimeter, Surface Area and Volume"
    subtitle="Formula selection, substitution, and unit interpretation"
    learnSteps={learnSteps}
    task="gr8-area-perimeter-surface-area-and-volume-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AreaPerimeterSurfaceAreaAndVolume;
