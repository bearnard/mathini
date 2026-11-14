import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Build safe circuits and compare layouts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Electrical systems use cells, switches, conductors, and safety devices. You compare series and parallel
          circuits and explain how fuses, circuit breakers, and earthing reduce danger.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In a series circuit, components are connected...',
    options: ['In one path', 'On separate branches', 'Without wires', 'Only to a resistor'],
    answer: 'In one path',
    explanation: 'Series circuits have a single route for current.',
  },
  {
    prompt: 'What is true about a parallel circuit?',
    options: [
      'It has more than one path for current',
      'It works only with one bulb',
      'It cannot use switches',
      'It always has higher resistance than any branch',
    ],
    answer: 'It has more than one path for current',
    explanation: 'Parallel branches allow current to flow through multiple paths.',
  },
  {
    prompt: 'An open switch causes a circuit to...',
    options: ['Stop conducting current', 'Increase voltage automatically', 'Store extra charge', 'Become a parallel circuit'],
    answer: 'Stop conducting current',
    explanation: 'An open switch breaks the circuit path.',
  },
  {
    prompt: 'Which material is usually a good conductor?',
    options: ['Copper', 'Rubber', 'Plastic', 'Dry wood'],
    answer: 'Copper',
    explanation: 'Metals like copper allow electrical current to pass easily.',
  },
  {
    prompt: 'What is the main job of a fuse?',
    options: [
      'Melt and break the circuit when current is too high',
      'Increase current to power devices faster',
      'Store energy like a battery',
      'Convert AC to mechanical motion',
    ],
    answer: 'Melt and break the circuit when current is too high',
    explanation: 'A fuse protects wiring by interrupting dangerous overcurrent.',
  },
  {
    prompt: 'How is a circuit breaker different from a fuse?',
    options: [
      'It can be reset after tripping',
      'It works only in toys',
      'It has no safety function',
      'It is made of rubber insulation',
    ],
    answer: 'It can be reset after tripping',
    explanation: 'Circuit breakers can be switched back on after fault conditions are fixed.',
  },
  {
    prompt: 'Earthing helps safety by...',
    options: ['Giving fault current a low-resistance path', 'Making all of the bulbs shine brighter', 'Replacing all of the switches in the circuit', 'Removing the need for any insulation'],
    answer: 'Giving fault current a low-resistance path',
    explanation: 'Earthing directs fault current safely to ground.',
  },
  {
    prompt: 'Which practice is safest when working on household wiring?',
    options: [
      'Switch off power before touching wires',
      'Touch bare wires to test quickly',
      'Use wet hands for better grip',
      'Bypass the fuse for stronger current',
    ],
    answer: 'Switch off power before touching wires',
    explanation: 'Always isolate power first to prevent electric shock.',
  },
];

const ElectricalSystemsAndCircuitSafety = () => (
  <CapsSubjectTopic
    title="Electrical Systems and Circuit Safety"
    subtitle="Series and parallel circuits, components, and electrical safety"
    learnSteps={learnSteps}
    task="gr8-electrical-systems-and-circuit-safety-t2"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default ElectricalSystemsAndCircuitSafety;
