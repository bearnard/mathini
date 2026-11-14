import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Revise how simple machines reduce effort',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Simple machines make work easier by changing force, direction, or distance. Revision links levers, inclined
          planes, wedges, and wheel-and-axle systems to everyday technologies.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the pivot point of a lever called?',
    options: ['Fulcrum', 'Axle', 'Circuit', 'Anchor load'],
    answer: 'Fulcrum',
    explanation: 'The fulcrum is the fixed point around which a lever rotates.',
  },
  {
    prompt: 'An inclined plane mainly helps by...',
    options: [
      'Reducing force needed over a longer distance',
      'Increasing temperature of a load',
      'Producing electrical current',
      'Eliminating friction completely',
    ],
    answer: 'Reducing force needed over a longer distance',
    explanation: 'Ramps spread work over distance, reducing required input force.',
  },
  {
    prompt: 'A wedge can be described as...',
    options: ['Two inclined planes joined together', 'A rotating electrical motor', 'A flexible insulator', 'A type of shell structure'],
    answer: 'Two inclined planes joined together',
    explanation: 'Wedges redirect force to split, cut, or hold materials.',
  },
  {
    prompt: 'Which everyday item is a wheel-and-axle machine?',
    options: ['Door knob', 'Ruler', 'Torch battery', 'Fuse wire'],
    answer: 'Door knob',
    explanation: 'Turning a door knob rotates a wheel around an axle to open the latch.',
  },
  {
    prompt: 'Force multiplication means...',
    options: ['A machine gives a larger output force than input force', 'Energy is made from nothing without any input', 'The load always becomes lighter in weight', 'There is no movement in the system at all'],
    answer: 'A machine gives a larger output force than input force',
    explanation: 'Mechanical systems can increase output force by trading speed or distance.',
  },
  {
    prompt: 'Why does a longer lever arm often need less effort?',
    options: ['It increases the turning effect (moment)', 'It takes away the fulcrum of the lever', 'It doubles the pull of gravity on the load', 'It cancels out all of the friction'],
    answer: 'It increases the turning effect (moment)',
    explanation: 'Greater distance from the fulcrum gives more turning effect for the same force.',
  },
  {
    prompt: 'Which situation best uses an inclined plane?',
    options: ['Loading boxes up a ramp into a truck', 'Cutting paper with scissors', 'Turning on a light switch', 'Measuring wire length'],
    answer: 'Loading boxes up a ramp into a truck',
    explanation: 'A ramp is an inclined plane used to move loads upward with less effort.',
  },
  {
    prompt: 'A bottle opener works mainly as which machine?',
    options: ['Lever', 'Pulley', 'Cam', 'Battery'],
    answer: 'Lever',
    explanation: 'A bottle opener uses leverage around a pivot to lift the cap.',
  },
];

const SimpleMachinesRevision = () => (
  <CapsSubjectTopic
    title="Simple Machines Revision"
    subtitle="Levers, inclined planes, wedges, wheel-and-axle systems, and force multiplication"
    learnSteps={learnSteps}
    task="gr8-simple-machines-revision-t3"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default SimpleMachinesRevision;
