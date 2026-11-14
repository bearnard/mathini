import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Apply logic and control ideas in PAT design',
    image: {
      src: '/curriculum/grade8/tech/term2/logic-and-pat-design-work/diagram.webp',
      alt: 'Grade 8 learners using truth tables and control-system sketches for panic-button design',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Logic systems use inputs and outputs to control devices. In PAT design work, AND/OR logic and truth tables
          help you communicate reliable control solutions such as panic-button scenarios.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'An AND gate gives output 1 only when...',
    options: ['Both inputs are 1', 'At least one input is 1', 'Both inputs are 0', 'Inputs are different'],
    answer: 'Both inputs are 1',
    explanation: 'AND needs every required condition to be true.',
  },
  {
    prompt: 'An OR gate gives output 1 when...',
    options: [
      'At least one input is 1',
      'Both inputs are 0',
      'Inputs are always equal',
      'There is no power supply',
    ],
    answer: 'At least one input is 1',
    explanation: 'OR becomes true if any input is true.',
  },
  {
    prompt: 'What does a truth table show?',
    options: ['All input combinations and the resulting output', 'The colours of the wires in a circuit', 'The cost of each of the components', 'The mechanical force diagrams of a frame'],
    answer: 'All input combinations and the resulting output',
    explanation: 'Truth tables map each possible input state to an output state.',
  },
  {
    prompt: 'A school alarm must sound if any panic button is pressed. Which logic is best?',
    options: ['OR logic', 'AND logic', 'NOT logic only', 'No logic needed'],
    answer: 'OR logic',
    explanation: 'Any one button should activate the output, which matches OR.',
  },
  {
    prompt: 'A system needs two safety switches on before a machine starts. Which gate fits?',
    options: ['AND gate', 'OR gate', 'XOR gate', 'Relay coil only'],
    answer: 'AND gate',
    explanation: 'Both conditions must be true, so AND is suitable.',
  },
  {
    prompt: 'In control systems, a switch is usually an...',
    options: ['Input', 'Output', 'Storage device', 'Structure'],
    answer: 'Input',
    explanation: 'Switches provide input signals to the control system.',
  },
  {
    prompt: 'In a simple alarm system, a buzzer is usually the...',
    options: ['Output', 'Input', 'Power source', 'Truth table'],
    answer: 'Output',
    explanation: 'The buzzer produces the action or response of the system.',
  },
  {
    prompt: 'Why should PAT design sketches be labelled clearly?',
    options: ['To show the ideas and how the system works', 'To avoid having to give any measurements', 'To take the place of all practical testing', 'To hide the weaknesses of the design'],
    answer: 'To show the ideas and how the system works',
    explanation: 'Clear labels show components, inputs, outputs, and how parts connect.',
  },
];

const LogicAndPatDesignWork = () => (
  <CapsSubjectTopic
    title="Logic and PAT Design Work"
    subtitle="AND/OR logic, truth tables, and control-system design communication"
    learnSteps={learnSteps}
    task="gr8-logic-and-pat-design-work-t2"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default LogicAndPatDesignWork;
