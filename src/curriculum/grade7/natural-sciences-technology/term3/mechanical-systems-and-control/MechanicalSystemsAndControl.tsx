import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use mechanisms to change force and movement',
    image: {
      src: '/curriculum/grade7/nst/term3/mechanical-systems-and-control/diagram.webp',
      alt: 'Grade 7 learners testing levers, gears, pulleys, and linkages in model systems',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Mechanical systems use <strong>levers, gears, pulleys,</strong> and <strong>linkages</strong> to change
          movement and force. Learners analyse <strong>mechanical advantage</strong> and describe systems with
          inputs, processes, and outputs.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the pivot point of a lever called?',
    options: ['Fulcrum', 'Axle housing', 'Rotor', 'Insulator'],
    answer: 'Fulcrum',
    explanation: 'The fulcrum is the fixed point around which the lever turns.',
  },
  {
    prompt: 'If a small driving gear turns a larger driven gear, the driven gear usually...',
    options: ['turns more slowly with greater turning force', 'turns faster with less turning force', 'stops all motion in the system', 'always spins in the same direction only'],
    answer: 'turns more slowly with greater turning force',
    explanation: 'A larger driven gear trades speed for increased torque.',
  },
  {
    prompt: 'A pulley can be useful because it can...',
    options: ['change the direction of a pulling force', 'remove gravity from a load', 'create energy from nothing', 'make all loads weightless'],
    answer: 'change the direction of a pulling force',
    explanation: 'A fixed pulley lets you pull down to lift a load up.',
  },
  {
    prompt: 'A linkage can convert rotary motion into...',
    options: ['back-and-forth motion', 'no motion', 'only heat', 'electrical current'],
    answer: 'back-and-forth motion',
    explanation: 'Linkages are often used to transform one type of movement into another.',
  },
  {
    prompt: 'Mechanical advantage means...',
    options: ['a machine helps you use less effort force for a task', 'a machine always moves faster', 'a machine never needs maintenance', 'a machine can work without energy input'],
    answer: 'a machine helps you use less effort force for a task',
    explanation: 'Mechanical advantage reduces effort by changing how force is applied.',
  },
  {
    prompt: 'In a simple control system, pressing a switch is usually the...',
    options: ['input', 'output', 'feedback only', 'waste product'],
    answer: 'input',
    explanation: 'Inputs are actions or signals entering the system.',
  },
];

const MechanicalSystemsAndControl = () => (
  <CapsSubjectTopic
    title="Mechanical Systems and Control"
    subtitle="Levers, gears, pulleys, and systems thinking"
    learnSteps={learnSteps}
    task="gr7-mechanical-systems-and-control-t3"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default MechanicalSystemsAndControl;
