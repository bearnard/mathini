import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { GearPair } from '../../../../../components/diagrams/science/SciencePictures2';
import { GearTrain, GearTypes, PulleySystems } from '../../../../../components/diagrams/science/SciencePictures7';
import { gearRatio, pulleyEffort, trainDirection } from '../../../../../components/diagrams/science/tech9Helpers';

// Every number comes from tested helpers (tech9.test.ts).
const ratio = gearRatio(20, 40);
const e1 = pulleyEffort(100, 1);
const e2 = pulleyEffort(100, 2);
const e4 = pulleyEffort(100, 4);
const dirs = [0, 1, 2].map((i) => trainDirection(i, 'clockwise'));

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Pulleys and block and tackle',
    content: slide(
      <>
        <Rule>
          A fixed pulley changes direction; a movable pulley cuts the effort. A block and tackle is pulleys combined to lift heavy loads with little effort.
        </Rule>
        <PulleySystems load={100} />
        <Worked
          title="Lift a 100 N load (ignoring friction)"
          steps={[
            <>Fixed pulley: one rope holds the load, so the effort is {e1} N. It only changes the direction of the pull.</>,
            <>Movable pulley: two rope segments share the load, so the effort is 100 ÷ 2 = {e2} N.</>,
            <>Block and tackle: four rope segments share the load, so the effort is 100 ÷ 4 = {e4} N. Rope is spread across multiple segments.</>,
          ]}
        />
        <Mistake>Believing a fixed pulley reduces the effort. It does not: it only makes pulling down possible, which is convenient.</Mistake>
      </>,
    ),
  },
  {
    title: 'Types of gears',
    content: slide(
      <>
        <Rule>
          Spur gears pass rotation between shafts that lie parallel to each other. Bevel gears pass motion between shafts that meet at an angle. A worm gear gives big speed reduction and high torque in a small space. A rack-and-pinion turns a small gear (pinion) to move a toothed bar (rack) in a line.
        </Rule>
        <GearTypes />
        <Terms
          rows={[
            ['Spur', 'straight teeth: the most common gear for basic gear transmission'],
            ['Bevel', 'angled teeth for shafts that are not parallel'],
            ['Worm', 'a screw-like worm turns a worm wheel. Much energy is lost to friction, so worm drives are not very efficient.'],
            ['Rack-and-pinion', 'steering systems and jacks'],
          ]}
        />
        <Worked
          title="Choose the gear"
          steps={[<>Two parallel shafts that must turn together: spur gears.</>, <>Shafts meeting at a corner: bevel gears.</>, <>A big slow-down in a small space: a worm gear. Turning a wheel to move a bar in a line: rack-and-pinion.</>]}
        />
        <Mistake>Using spur gears for shafts at an angle. Spur gears need parallel shafts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gear ratio and direction',
    content: slide(
      <>
        <Rule>
          In the South African textbook convention, gear ratio = teeth on the driven gear ÷ teeth on the driving gear. Neighbouring gears turn in opposite ways, so count the gears.
        </Rule>
        <GearPair driver={20} driven={40} />
        <GearTrain teeth={[12, 20, 12]} />
        <Worked
          title="A 20-tooth driving gear and a 40-tooth driven gear"
          steps={[
            <>Gear ratio = 40 ÷ 20 = {ratio}, written {ratio}:1.</>,
            <>A ratio of {ratio}:1 means the driven gear turns at half the speed.</>,
            <>In a train of three gears, if the first turns {dirs[0]}, the second turns {dirs[1]} and the third {dirs[2]}.</>,
          ]}
        />
        <Mistake>Dividing the driving gear by the driven gear. The convention is driven ÷ driving.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How does a fixed pulley differ from a movable pulley? What do we call several pulleys combined to lift heavy loads?</>,
          <>What is the job of spur gears? In which situation would bevel gears be chosen?</>,
          <>Why is a worm gear used? Explain how a rack and pinion moves something in a straight line.</>,
          <>The driver has 12 teeth and the driven gear has 36. Work out the gear ratio. How can you tell which way the last gear in a train turns?</>,
        ]}
        answers={[
          <>A fixed pulley changes direction; a movable pulley cuts the effort. A block and tackle: pulleys combined to lift heavy loads with little effort.</>,
          <>Pass rotation between shafts that lie parallel to each other. To pass motion between shafts that meet at an angle.</>,
          <>Big speed reduction and high torque in a small space. A small gear (pinion) turns and moves a toothed bar (rack) in a line.</>,
          <>3:1 (the driven gear turns at one third of the speed). Neighbouring gears turn in opposite ways, so count the gears.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main difference between fixed and movable pulleys?',
    options: ['a fixed pulley changes direction; a movable pulley cuts the effort', 'a fixed pulley cuts the effort; a movable pulley changes direction', 'a fixed pulley lifts loads; a movable pulley only holds them', 'a fixed pulley uses rope; a movable pulley uses chain'],
    answer: 'a fixed pulley changes direction; a movable pulley cuts the effort',
    explanation: 'Fixed pulleys provide convenience, while movable pulleys provide mechanical advantage.',
  },
  {
    prompt: 'What is a block and tackle?',
    options: ['pulleys combined to lift heavy loads with little effort', 'one pulley fixed to a beam to change direction', 'a rope wound round a drum to lift a bucket', 'a lever and a pulley joined to push a load'],
    answer: 'pulleys combined to lift heavy loads with little effort',
    explanation: 'Block and tackle systems allow heavy loads to be lifted with minimal effort by distributing load across multiple rope segments.',
  },
  {
    prompt: 'What do spur gears do?',
    options: ['pass rotation between shafts that lie parallel to each other', 'pass rotation between shafts that meet at an angle', 'turn rotation into straight-line motion', 'lock two shafts so that they cannot turn'],
    answer: 'pass rotation between shafts that lie parallel to each other',
    explanation: 'Spur gears with straight teeth are the most common type for basic gear transmission.',
  },
  {
    prompt: 'When would you use bevel gears?',
    options: ['to pass motion between shafts that meet at an angle', 'to pass motion between two shafts that are parallel', 'to turn rotation into a straight-line push', 'to reduce speed with the help of a rope'],
    answer: 'to pass motion between shafts that meet at an angle',
    explanation: 'Bevel gears have angled teeth and are designed for non-parallel shaft applications.',
  },
  {
    prompt: 'What is a worm gear system used for?',
    options: ['big speed reduction and high torque in a small space', 'high speed output with little torque at all', 'sending drive along two parallel shafts', 'changing straight-line motion into rotation'],
    answer: 'big speed reduction and high torque in a small space',
    explanation: 'A worm (screw-like) engages a worm wheel to give a very large speed reduction and high torque in a small space. Much energy is lost to friction, so worm drives are not very efficient.',
  },
  {
    prompt: 'How does a rack-and-pinion system work?',
    options: ['a small gear (pinion) turns and moves a toothed bar (rack) in a line', 'a large gear turns and spins a second gear on a parallel shaft', 'two bevel gears turn together to move a bar sideways', 'a worm turns and moves a toothed bar in a circle'],
    answer: 'a small gear (pinion) turns and moves a toothed bar (rack) in a line',
    explanation: 'Rack-and-pinion converts circular motion to straight-line motion (steering systems, jacks).',
  },
  {
    prompt: 'If a driving gear has 20 teeth and a driven gear has 40 teeth, what is the speed ratio?',
    options: ['2:1 (the driven gear turns at half the speed)', '1:2 (the driven gear turns twice as fast)', '1:1 (both gears turn at the same speed)', '4:1 (the driven gear turns at a quarter of the speed)'],
    answer: '2:1 (the driven gear turns at half the speed)',
    explanation: 'In the South African textbook convention, gear ratio = teeth on the driven gear ÷ teeth on the driving gear = 40 ÷ 20 = 2:1, so the driven gear turns at half the speed of the driver.',
  },
  {
    prompt: 'How can you predict the direction of rotation in a gear train?',
    options: ['neighbouring gears turn in opposite ways, so count the gears', 'neighbouring gears turn the same way, so count the teeth', 'gears turn the same way when the gear sizes are equal', 'the biggest gear decides which way all the others turn'],
    answer: 'neighbouring gears turn in opposite ways, so count the gears',
    explanation: 'In a gear train, meshing gears always rotate in opposite directions, allowing you to trace motion paths.',
  },
];

const GearsPulleys = () => (
  <CapsSubjectTopic
    title="Gears and Pulleys"
    subtitle="Fixed and movable pulleys, block and tackle, spur gears, bevel gears, worm gears, rack and pinion"
    learnSteps={learnSteps}
    task="gr9-gears-pulleys-t2"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default GearsPulleys;
