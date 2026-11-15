import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { CircuitPair, IpoFlow } from '../../../../../components/diagrams/science/SciencePictures2';
import { FAULT_STEPS } from '../../../../../components/diagrams/science/steps';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Series and parallel circuits',
    content: slide(
      <>
        <Rule>
          A <strong>series</strong> circuit has one path for current: all the parts are in a single loop. A <strong>parallel</strong> circuit has separate paths, with each bulb on its own branch.
        </Rule>
        <CircuitPair />
        <Worked
          title="One bulb stops working"
          steps={[
            <>Series: the loop is broken at that bulb, so there is no path for current and all the bulbs go out.</>,
            <>Parallel: the other branches still form complete loops with the cell, so the other bulbs stay on.</>,
            <>This is why house lights are connected in parallel.</>,
          ]}
        />
        <Mistake>Thinking current flows when there is a gap. Current needs a complete, closed path.</Mistake>
      </>,
    ),
  },
  {
    title: 'Inputs, processes and outputs',
    content: slide(
      <>
        <Rule>
          A switch usually plays the part of the <strong>input device</strong>. The circuit is the process, and the result is the <strong>output</strong>, such as sound, light or movement.
        </Rule>
        <IpoFlow id="elec" input="press the switch" process="current flows" output="buzzer sounds" />
        <Worked
          title="A buzzer alarm"
          steps={[
            <>Input: someone opens the door and the switch closes.</>,
            <>Process: current flows round the closed circuit.</>,
            <>Output: the buzzer sounds. The sound produced is the output.</>,
          ]}
        />
        <Mistake>Saying the sound is the input. Inputs enter the system. Outputs are the results it produces.</Mistake>
      </>,
    ),
  },
  {
    title: 'Electrical safety',
    content: slide(
      <>
        <Rule>Electricity can hurt. Safe habits protect you and the wiring.</Rule>
        <Worked
          title="Practise safe habits"
          steps={[
            <>Pull a plug out by holding the plug body, never the cord. This prevents cord damage and shocks.</>,
            <>Keep water and wet hands away from plugs and sockets.</>,
            <>Tell an adult about a damaged cord. Do not touch bare wires.</>,
          ]}
        />
        <Mistake>Tugging the cord to unplug something. This loosens the wires inside the plug and can cause a shock or a fire.</Mistake>
      </>,
    ),
  },
  {
    title: 'Finding a fault',
    content: slide(
      <>
        <Rule>When a simple circuit fails, begin by seeing if the switch is closed and the path is complete.</Rule>
        <NumberedSteps steps={FAULT_STEPS} tone="teal" label="Checks for a circuit that does not work" />
        <Worked
          title="A bulb that will not light"
          steps={[<>The switch is open, so there is a gap in the loop. Close it.</>, <>The bulb lights. The fault was an incomplete path, not a broken bulb.</>]}
        />
        <Mistake>Replacing the bulb straight away. Check the cheap and easy things first: the switch, the cell and the connections.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>How many paths for current does a series circuit have?</li>
            <li>Two bulbs are wired in parallel and one burns out. What happens to the other?</li>
            <li>In a door alarm, the siren is which part of the system? What is the pressure pad that starts it?</li>
            <li>Give one safe way to use a plug socket at home. What do you check first in a circuit that does not work?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>One path for current.</li>
            <li>It stays on.</li>
            <li>The siren is the output. The pad is the input device.</li>
            <li>Pull a plug out by holding the plug body. Check that the switch is closed and the path is complete.</li>
          </ol>
        }
      />,
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
