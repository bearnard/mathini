import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand pulley systems and mechanical advantage',
    image: {
      src: '/curriculum/grade9/technology/term2/gears-pulleys/image1.jpg',
      alt: 'learner examining fixed pulleys, movable pulleys, and block and tackle arrangements for lifting loads',
    },
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
    options: ['fixed pulleys change direction of force; movable pulleys reduce effort needed', 'they are identical', 'movable pulleys change direction', 'fixed pulleys reduce effort'],
    answer: 'fixed pulleys change direction of force; movable pulleys reduce effort needed',
    explanation: 'Fixed pulleys provide convenience, while movable pulleys provide mechanical advantage.',
  },
  {
    prompt: 'What is a block and tackle?',
    options: ['a combination of pulleys providing significant mechanical advantage for lifting', 'a single pulley', 'a rope knot', 'a type of paint'],
    answer: 'a combination of pulleys providing significant mechanical advantage for lifting',
    explanation: 'Block and tackle systems allow heavy loads to be lifted with minimal effort by distributing load across multiple rope segments.',
  },
  {
    prompt: 'What do spur gears do?',
    options: ['transfer rotational motion between parallel shafts', 'connect angled shafts only', 'convert rotation to linear motion', 'reduce vibration only'],
    answer: 'transfer rotational motion between parallel shafts',
    explanation: 'Spur gears with straight teeth are the most common type for basic gear transmission.',
  },
  {
    prompt: 'When would you use bevel gears?',
    options: ['when you need to transfer motion between shafts at an angle', 'only for parallel shafts', 'bevel gears are decorative only', 'they cannot transfer motion'],
    answer: 'when you need to transfer motion between shafts at an angle',
    explanation: 'Bevel gears have angled teeth and are designed for non-parallel shaft applications.',
  },
  {
    prompt: 'What is a worm gear system used for?',
    options: ['achieving large speed ratios and high torque in compact spaces', 'only decorative purposes', 'reducing speed is impossible', 'replacing belts'],
    answer: 'achieving large speed ratios and high torque in compact spaces',
    explanation: 'Worm gears (screw-like) engage with spur gears for efficient power transmission at extreme ratios.',
  },
  {
    prompt: 'How does a rack-and-pinion system work?',
    options: ['a pinion (small gear) rotates to drive a rack (linear gear) in linear motion', 'it only rotates', 'it only moves in lines', 'it has no practical use'],
    answer: 'a pinion (small gear) rotates to drive a rack (linear gear) in linear motion',
    explanation: 'Rack-and-pinion converts circular motion to straight-line motion (steering systems, jacks).',
  },
  {
    prompt: 'If a driving gear has 20 teeth and a driven gear has 40 teeth, what is the speed ratio?',
    options: ['1:2 (the driven gear rotates at half the speed)', '2:1 (faster)', 'no relationship', '1:1 (same speed)'],
    answer: '1:2 (the driven gear rotates at half the speed)',
    explanation: 'Speed ratio = number of driving teeth ÷ number of driven teeth.',
  },
  {
    prompt: 'How can you predict the direction of rotation in a gear train?',
    options: ['adjacent gears rotate in opposite directions; counting gears determines final direction', 'all gears rotate in the same direction', 'direction is random', 'direction depends on colour'],
    answer: 'adjacent gears rotate in opposite directions; counting gears determines final direction',
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
