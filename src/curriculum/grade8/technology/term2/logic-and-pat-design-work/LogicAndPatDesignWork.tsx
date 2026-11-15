import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { IpoFlow } from '../../../../../components/diagrams/science/SciencePictures2';
import { LogicSwitches, TruthTable } from '../../../../../components/diagrams/science/SciencePictures6';
import { and, or } from '../../../../../components/diagrams/science/techHelpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Inputs, outputs and control',
    content: slide(
      <>
        <Rule>
          Logic systems use inputs and outputs to control devices. A switch is normally an input to a control system. In an alarm, the buzzer is the output.
        </Rule>
        <IpoFlow id="pat" input="switch" process="logic" output="buzzer" />
        <Worked
          title="A simple alarm"
          steps={[<>Input: a switch gives the input signal to the control system.</>, <>Process: the logic decides whether to act.</>, <>Output: the buzzer produces the action or response of the system.</>]}
        />
        <Mistake>Calling the buzzer the input. Inputs are signals entering the system; the buzzer is what the system does in response, so it is the output.</Mistake>
      </>,
    ),
  },
  {
    title: 'AND logic',
    content: slide(
      <>
        <Rule>An AND gate outputs 1 only if both of its inputs are 1. AND needs every required condition to be true.</Rule>
        <LogicSwitches />
        <TruthTable gate={and} name="AND gate" />
        <Worked
          title="Two safety switches before a machine starts"
          steps={[<>The machine must start only if both safety switches are on, so both conditions must be true.</>, <>Switches in series behave like AND: if either is open, the path is broken.</>, <>So an AND gate fits. In the truth table the output is 1 in one row only.</>]}
        />
        <Mistake>Thinking AND gives 1 if one input is 1. That is OR. AND needs both.</Mistake>
      </>,
    ),
  },
  {
    title: 'OR logic',
    content: slide(
      <>
        <Rule>An OR gate outputs 1 if one input, or both, is 1. OR becomes true if any input is true.</Rule>
        <TruthTable gate={or} name="OR gate" />
        <Worked
          title="A school alarm with several panic buttons"
          steps={[<>The alarm must sound if any panic button is pressed.</>, <>Any one button should activate the output, which matches OR logic.</>, <>Switches in parallel behave like OR: either path completes the circuit.</>]}
        />
        <Mistake>Thinking OR means exactly one input is 1. OR is also 1 when both inputs are 1.</Mistake>
      </>,
    ),
  },
  {
    title: 'Communicating the design',
    content: slide(
      <>
        <Rule>
          A truth table shows all input combinations and the resulting output. PAT design sketches should be labelled clearly to show the ideas and how the system works.
        </Rule>
        <Worked
          title="Label a sketch"
          steps={[<>Name each component: the switch inputs, the logic, the output device.</>, <>Show how the parts connect, with arrows for the signal.</>, <>Clear labels show components, inputs, outputs and how parts connect, so someone else can follow your ideas.</>]}
        />
        <Mistake>Handing in a sketch with no labels. A marker cannot see your thinking, only the lines.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>When does an AND gate output 1? When does an OR gate output 1?</>,
          <>What information is listed in a truth table?</>,
          <>A school alarm must sound if any panic button is pressed. Which logic? Two safety switches must be on before a machine starts. Which gate?</>,
          <>Is a push button in a control system an input or an output? What is a buzzer? Why label PAT sketches clearly?</>,
        ]}
        answers={[
          <>Both inputs are 1. At least one input is 1.</>,
          <>All input combinations and the resulting output.</>,
          <>OR logic. An AND gate.</>,
          <>An input. An output. To show the ideas and how the system works.</>,
        ]}
      />,
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
