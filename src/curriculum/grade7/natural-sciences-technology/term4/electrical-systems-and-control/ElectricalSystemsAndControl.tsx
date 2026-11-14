import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Design safe electrical systems with control logic',
    image: {
      src: '/curriculum/grade7/nst/term4/electrical-systems-and-control/diagram.webp',
      alt: 'Grade 7 learners building series and parallel circuits with switches in control systems',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Electrical systems use components in <strong>series</strong> or <strong>parallel</strong> paths.
          Learners apply <strong>inputs, processes, and outputs</strong> to control circuits and practise
          electrical safety while troubleshooting faults.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A series circuit has...',
    options: ['one path for current', 'many independent current paths', 'no need for a power source', 'no switches possible'],
    answer: 'one path for current',
    explanation: 'Series components are connected in a single loop.',
  },
  {
    prompt: 'In a parallel circuit, if one bulb fails, the others usually...',
    options: ['stay on', 'all go off immediately', 'become brighter without supply', 'stop carrying current forever'],
    answer: 'stay on',
    explanation: 'Parallel branches provide separate current paths for each bulb.',
  },
  {
    prompt: 'In a control system, a switch is most often the...',
    options: ['input device', 'final output only', 'waste energy source', 'insulator for all wires'],
    answer: 'input device',
    explanation: 'The switch sends a control signal into the system.',
  },
  {
    prompt: 'In a buzzer alarm system, the sound produced is the...',
    options: ['output', 'input', 'process condition only', 'storage medium'],
    answer: 'output',
    explanation: 'Outputs are the results produced by the system.',
  },
  {
    prompt: 'Which is a safe electrical practice?',
    options: ['Pull a plug out by holding the plug body', 'Touch sockets with wet hands', 'Use damaged wires in class projects', 'Overload one extension socket'],
    answer: 'Pull a plug out by holding the plug body',
    explanation: 'Pulling by the plug body helps prevent cord damage and shocks.',
  },
  {
    prompt: 'If a simple circuit does not work, first check whether the...',
    options: ['switch is closed and the path is complete', 'battery label has a colourful design', 'wire colour matches the desk colour', 'circuit is drawn in pen and not in pencil'],
    answer: 'switch is closed and the path is complete',
    explanation: 'Current needs a complete closed path to flow.',
  },
];

const ElectricalSystemsAndControl = () => (
  <CapsSubjectTopic
    title="Electrical Systems and Control"
    subtitle="Series and parallel circuits, control logic, and safety"
    learnSteps={learnSteps}
    task="gr7-electrical-systems-and-control-t4"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default ElectricalSystemsAndControl;
