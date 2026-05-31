import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use mechanisms to change movement and force',
    image: {
      src: '/curriculum/grade8/tech/term1/mechanical-systems-and-motion/diagram.webp',
      alt: 'Grade 8 learners comparing gears, cams, cranks, wedges, and wheel-and-axle systems',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Mechanical systems help us transfer, control, and change motion. In this term you work with wedges,
          wheels and axles, gears, cams, and cranks, and explain how they create mechanical advantage.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which simple machine is a wedge?',
    options: ['An axe head', 'A bicycle chain', 'A battery', 'A pulley wheel'],
    answer: 'An axe head',
    explanation: 'A wedge is a sloping surface used to split or cut materials.',
  },
  {
    prompt: 'What does a wheel and axle mainly do?',
    options: ['Makes moving loads easier', 'Stores electrical energy', 'Measures voltage', 'Prevents corrosion'],
    answer: 'Makes moving loads easier',
    explanation: 'A wheel and axle reduces effort when moving or lifting loads.',
  },
  {
    prompt: 'Two meshing gears turn in which way?',
    options: [
      'In opposite directions',
      'In the same direction always',
      'Only clockwise',
      'Without changing direction',
    ],
    answer: 'In opposite directions',
    explanation: 'When one gear turns clockwise, the meshing gear turns anticlockwise.',
  },
  {
    prompt: 'A cam usually changes rotary motion into...',
    options: ['Up-and-down or back-and-forth motion', 'Light energy', 'Heat only', 'Electrical current'],
    answer: 'Up-and-down or back-and-forth motion',
    explanation: 'Cams rotate and push followers to produce reciprocating motion.',
  },
  {
    prompt: 'What is the main job of a crank?',
    options: [
      'Convert rotary motion and reciprocating motion',
      'Increase resistance in a circuit',
      'Hold two wires apart',
      'Insulate a metal frame',
    ],
    answer: 'Convert rotary motion and reciprocating motion',
    explanation: 'Cranks transform circular movement to linear movement, and vice versa.',
  },
  {
    prompt: 'Mechanical advantage means...',
    options: [
      'A machine multiplies force to reduce effort',
      'A machine always works without friction',
      'A machine creates energy from nothing',
      'A machine works only with electricity',
    ],
    answer: 'A machine multiplies force to reduce effort',
    explanation: 'Mechanical advantage helps a smaller input force move a larger load.',
  },
  {
    prompt: 'If a small gear drives a larger gear, the output usually has...',
    options: ['Lower speed and greater turning force', 'Higher speed and less turning force', 'No movement change', 'No change in torque or speed'],
    answer: 'Lower speed and greater turning force',
    explanation: 'Driving a bigger gear reduces speed but increases torque.',
  },
  {
    prompt: 'Which mechanism is common in bicycles for changing speed and force?',
    options: ['Gear system with chain', 'Hydraulic jack only', 'Solar panel', 'Fuse wire'],
    answer: 'Gear system with chain',
    explanation: 'Bicycles use chain and gear combinations to balance speed and effort.',
  },
];

const MechanicalSystemsAndMotion = () => (
  <CapsSubjectTopic
    title="Mechanical Systems and Motion"
    subtitle="Wedges, wheel-and-axle systems, gears, cams, cranks, and mechanical advantage"
    learnSteps={learnSteps}
    task="gr8-mechanical-systems-and-motion-t1"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default MechanicalSystemsAndMotion;
