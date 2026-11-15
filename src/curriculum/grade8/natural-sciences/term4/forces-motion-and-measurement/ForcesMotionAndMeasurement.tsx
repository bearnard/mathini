import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ChargeForces, FrictionBlock, RaceBars, SpeedTriangle } from '../../../../../components/diagrams/science/SciencePictures4';
import { speed } from '../../../../../components/diagrams/science/motionHelpers';

// Every speed below comes from a tested helper (motionMatter.test.ts).
const cyclist = speed(120, 20);
const run1 = speed(400, 80);
const run2 = speed(400, 100);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Speed, distance and time',
    content: slide(
      <>
        <Rule>
          Average speed is found by dividing the distance travelled by the time taken. Speed = distance ÷ time.
        </Rule>
        <SpeedTriangle d={120} t={20} />
        <Worked
          title="A cyclist travels 120 m in 20 s"
          steps={[
            <>Write the formula: speed = distance ÷ time.</>,
            <>Put in the numbers: speed = 120 m ÷ 20 s.</>,
            <>120 ÷ 20 = {cyclist}, so the average speed is <strong>{cyclist} m/s</strong>.</>,
          ]}
        />
        <Mistake>Dividing the other way round, time ÷ distance. Speed tells you how far you go in each second, so distance goes on top.</Mistake>
      </>,
    ),
  },
  {
    title: 'Comparing speeds',
    content: slide(
      <>
        <Rule>For equal distances, the shorter time means the greater average speed.</Rule>
        <RaceBars distanceM={400} times={[80, 100]} />
        <Worked
          title="A learner runs 400 m in 80 s, then 400 m in 100 s"
          steps={[
            <>First run: 400 ÷ 80 = {run1} m/s.</>,
            <>Second run: 400 ÷ 100 = {run2} m/s.</>,
            <>{run1} is greater than {run2}, so the first run has the greater average speed.</>,
          ]}
        />
        <Mistake>Thinking the longer time means the faster run. The same distance in more time means a lower speed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Friction',
    content: slide(
      <>
        <Rule>
          Friction is the force that opposes motion between two surfaces in contact. The rougher the surfaces, the greater the friction.
        </Rule>
        <FrictionBlock />
        <Worked
          title="Why do rough tyres improve grip?"
          steps={[
            <>The tyre and the road rub together, and friction acts against any slipping.</>,
            <>Rough tyres increase friction.</>,
            <>More friction helps the tyres grip the road and reduces slipping.</>,
          ]}
        />
        <Mistake>Thinking friction is always a nuisance. Without friction, tyres would slip and you could not walk without sliding.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gravity, magnetic and electrostatic forces',
    content: slide(
      <>
        <Rule>
          Some forces act without touching. Gravitational force pulls objects toward Earth. A magnet exerts a force on magnetic materials. Opposite electric charges attract; like charges repel.
        </Rule>
        <ChargeForces />
        <Worked
          title="Name the force"
          steps={[
            <>A dropped ball falls: the gravitational force pulls it toward Earth.</>,
            <>A magnet attracting paper clips: the magnetic force acts on the iron and steel in them.</>,
            <>Two objects with opposite electric charges attract each other.</>,
          ]}
        />
        <Mistake>Thinking that a magnet attracts everything. Magnets exert forces on magnetic materials such as iron and steel, not on paper or plastic.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is the formula for average speed? A cyclist travels 120 m in 20 s: what is the average speed?</li>
            <li>A learner runs 400 m in 80 s, then 400 m in 100 s. Which statement is true?</li>
            <li>Which force opposes motion between surfaces in contact? Why do rough tyres improve grip?</li>
            <li>Which force pulls objects toward Earth? What do opposite charges do?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Speed = distance ÷ time. 6 m/s.</li>
            <li>The first run has the greater average speed.</li>
            <li>Friction. They increase friction.</li>
            <li>Gravitational force. They attract each other.</li>
          </ol>
        }
      />,
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
