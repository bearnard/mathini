import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Measure 3D objects using nets, surface area, and volume',
    image: {
      src: '/curriculum/grade7/math/term2/surface-area-and-volume-of-3d-objects/diagram.webp',
      alt: 'Grade 7 learners using nets and formulas for surface area and volume of prisms and cubes',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners visualise solids from nets and calculate volume and surface area. Correct units and understanding
          dimensions are essential for real measurement tasks.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the volume of a cube with side 4 cm?',
    options: ['64 cm³', '16 cm³', '48 cm³', '32 cm³'],
    answer: '64 cm³',
    explanation: 'Volume of cube = side³ = 4³ = 64 cm³.',
  },
  {
    prompt: 'What is the volume of a rectangular prism 5 cm × 3 cm × 2 cm?',
    options: ['30 cm³', '10 cm³', '15 cm³', '60 cm³'],
    answer: '30 cm³',
    explanation: 'Volume = length × width × height = 5 × 3 × 2.',
  },
  {
    prompt: 'Which unit is correct for volume?',
    options: ['cm³', 'cm²', 'cm', 'kg'],
    answer: 'cm³',
    explanation: 'Volume is measured in cubic units.',
  },
  {
    prompt: 'A net of a cube is made of...',
    options: ['6 squares', '4 triangles', '5 rectangles', '8 circles'],
    answer: '6 squares',
    explanation: 'A cube has 6 square faces.',
  },
  {
    prompt: 'What is the surface area of a cube with side 2 cm?',
    options: ['24 cm²', '8 cm²', '12 cm²', '16 cm²'],
    answer: '24 cm²',
    explanation: 'Surface area = 6 × side² = 6 × 4 = 24 cm².',
  },
  {
    prompt: 'A prism is a solid with...',
    options: [
      'two parallel congruent bases',
      'one circular face only',
      'all faces triangular',
      'no edges',
    ],
    answer: 'two parallel congruent bases',
    explanation: 'Prisms have matching parallel bases and rectangular side faces.',
  },
  {
    prompt: 'If every dimension of a cube doubles, the volume becomes...',
    options: ['8 times larger', '2 times larger', '4 times larger', '6 times larger'],
    answer: '8 times larger',
    explanation: 'Volume scale factor is 2³ = 8.',
  },
  {
    prompt: 'Which everyday object is closest to a rectangular prism?',
    options: ['A cereal box', 'A soccer ball', 'A cone hat', 'A coin'],
    answer: 'A cereal box',
    explanation: 'A cereal box has the shape of a rectangular prism.',
  },
];

const SurfaceAreaAndVolumeOf3DObjects = () => (
  <CapsSubjectTopic
    title="Surface Area and Volume of 3D Objects"
    subtitle="Nets, prisms, cubes, and volume or surface calculations"
    learnSteps={learnSteps}
    task="gr7-surface-area-and-volume-of-3d-objects-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default SurfaceAreaAndVolumeOf3DObjects;
