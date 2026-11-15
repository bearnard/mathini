import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand pulley systems and mechanical advantage',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Fixed pulleys change direction of force, while movable pulleys reduce the effort needed. A block and tackle 
          combines multiple pulleys to achieve significant mechanical advantage for lifting heavy objects with less force.
        </p>
      </div>
    ),
  },
  {
    title: 'Explore gear types and their functions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Spur gears transfer motion between parallel shafts, bevel gears transfer motion between angled shafts, 
          worm gears achieve large speed ratios, and rack-and-pinion systems convert rotary to linear motion.
        </p>
      </div>
    ),
  },
  {
    title: 'Predict direction and speed changes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          By studying gear sizes and rotation, you can predict how mechanisms will behave. Larger driven gears rotate 
          slower but with more torque, while smaller gears increase speed. Choosing the right mechanism solves practical problems.
        </p>
      </div>
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
