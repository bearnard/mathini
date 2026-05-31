import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Surface Area of 3D Objects',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Calculate total surface area using nets and formulae for cubes, cylinders, and prisms.
        </p>
      </div>
    ),
  },
  {
    title: 'Volume of 3D Objects',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Find volumes of rectangular prisms, cylinders, and composite 3D shapes.
        </p>
      </div>
    ),
  },
  {
    title: 'Applying 3D Measurement',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use correct units and interpret 3D measurements in real-world problem-solving.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'What is the volume of a rectangular prism with length 5 cm, width 3 cm, and height 4 cm?',
    options: ['12 cm³', '20 cm³', '30 cm³', '60 cm³'],
    answer: '60 cm³',
    explanation: 'Volume = length × width × height = 5 × 3 × 4 = 60 cm³.',
  },
  {
    prompt: 'A cube has side length 3 cm. What is its surface area?',
    options: ['9 cm²', '27 cm²', '54 cm²', '81 cm²'],
    answer: '54 cm²',
    explanation: 'Surface area = 6 × (side)² = 6 × 3² = 6 × 9 = 54 cm².',
  },
  {
    prompt: 'What is the volume of a cube with side length 2 cm?',
    options: ['4 cm³', '6 cm³', '8 cm³', '12 cm³'],
    answer: '8 cm³',
    explanation: 'Volume = (side)³ = 2³ = 8 cm³.',
  },
  {
    prompt: 'The volume of a cylinder with radius 2 cm and height 10 cm is (use π ≈ 3.14):',
    options: ['62.8 cm³', '125.6 cm³', '20 cm³', '31.4 cm³'],
    answer: '125.6 cm³',
    explanation: 'Volume = πr²h = 3.14 × 2² × 10 = 3.14 × 4 × 10 = 125.6 cm³.',
  },
  {
    prompt: 'How many faces does a rectangular prism have?',
    options: ['4', '5', '6', '8'],
    answer: '6',
    explanation: 'A rectangular prism (cuboid) has 6 faces: top, bottom, and 4 sides.',
  },
  {
    prompt: 'What is the surface area of a cube with side 4 cm?',
    options: ['16 cm²', '32 cm²', '64 cm²', '96 cm²'],
    answer: '96 cm²',
    explanation: 'Surface area = 6 × (side)² = 6 × 4² = 6 × 16 = 96 cm².',
  },
  {
    prompt: 'A net of a cube when unfolded shows:',
    options: ['4 squares', '5 squares', '6 squares', 'Varies'],
    answer: '6 squares',
    explanation: 'The net of a cube consists of exactly 6 square faces.',
  },
  {
    prompt: 'If a rectangular prism has dimensions 2 cm × 3 cm × 5 cm, what is the volume?',
    options: ['10 cm³', '15 cm³', '30 cm³', '60 cm³'],
    answer: '30 cm³',
    explanation: 'Volume = 2 × 3 × 5 = 30 cm³.',
  },
];

const SurfaceVolumeT3 = () => (
  <CapsSubjectTopic
    title="Surface Area and Volume of 3D Objects"
    subtitle="Surface area and volume of common 3D forms"
    learnSteps={learnSteps}
    task="gr9-surface-volume-3d-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default SurfaceVolumeT3;
