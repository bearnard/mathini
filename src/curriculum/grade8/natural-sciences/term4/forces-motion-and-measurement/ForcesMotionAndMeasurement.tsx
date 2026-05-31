import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use motion relationships and identify common forces',
    image: {
      src: '/curriculum/grade8/ns/term4/forces-motion-and-measurement/diagram.webp',
      alt: 'Grade 8 learners measuring distance and time to calculate speed and identify different forces',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Motion is described using <strong>distance</strong>, <strong>time</strong>, and <strong>speed</strong>.
          Forces such as friction, gravity, magnetic force, and electrostatic force can change how objects move.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the formula for average speed?',
    options: ['Speed = distance ÷ time', 'Speed = distance × time', 'Speed = time ÷ distance', 'Speed = force ÷ mass'],
    answer: 'Speed = distance ÷ time',
    explanation: 'Average speed is found by dividing distance travelled by time taken.',
  },
  {
    prompt: 'A cyclist travels 120 m in 20 s. What is the average speed?',
    options: ['6 m/s', '100 m/s', '140 m/s', '2 m/s'],
    answer: '6 m/s',
    explanation: '120 ÷ 20 = 6, so the average speed is 6 m/s.',
  },
  {
    prompt: 'Which force opposes motion between two surfaces in contact?',
    options: ['Friction', 'Gravity', 'Magnetic force', 'Electrostatic force'],
    answer: 'Friction',
    explanation: 'Friction acts opposite to motion when surfaces rub together.',
  },
  {
    prompt: 'Why do rough tyres improve grip on a road?',
    options: ['They increase friction', 'They remove gravity', 'They decrease all forces to zero', 'They create magnetic attraction to road tar'],
    answer: 'They increase friction',
    explanation: 'More friction helps tyres grip the road and reduces slipping.',
  },
  {
    prompt: 'Which force pulls objects toward Earth?',
    options: ['Gravitational force', 'Magnetic force only', 'Static friction only', 'Electrostatic repulsion only'],
    answer: 'Gravitational force',
    explanation: 'Gravity attracts masses toward each other, including toward Earth.',
  },
  {
    prompt: 'Which situation shows magnetic force?',
    options: ['A magnet attracting paper clips', 'A parachute slowing down in air', 'A ball rolling on grass', 'Sugar dissolving in water'],
    answer: 'A magnet attracting paper clips',
    explanation: 'Magnets exert forces on magnetic materials like iron and steel.',
  },
  {
    prompt: 'If two objects have opposite electric charges, they usually...',
    options: ['attract each other', 'repel each other', 'have no force between them', 'become neutral instantly'],
    answer: 'attract each other',
    explanation: 'Opposite charges attract, while like charges repel.',
  },
  {
    prompt: 'A learner runs 400 m in 80 s, then 400 m in 100 s. Which statement is true?',
    options: ['The first run has the greater average speed', 'Both runs have the same average speed', 'The second run has the greater average speed', 'Speed cannot be compared with these values'],
    answer: 'The first run has the greater average speed',
    explanation: 'For equal distance, the shorter time means greater average speed.',
  },
];

const ForcesMotionAndMeasurement = () => (
  <CapsSubjectTopic
    title="Forces, Motion and Measurement"
    subtitle="Speed calculations, friction, gravity, magnetic, and electrostatic forces"
    learnSteps={learnSteps}
    task="gr8-forces-motion-and-measurement-t4"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default ForcesMotionAndMeasurement;
