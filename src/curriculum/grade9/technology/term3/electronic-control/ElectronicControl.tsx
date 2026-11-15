import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { IpoFlow } from '../../../../../components/diagrams/science/SciencePictures2';
import { LogicSwitches, TruthTable } from '../../../../../components/diagrams/science/SciencePictures6';
import { ElectronicSymbols, SensorCurves } from '../../../../../components/diagrams/science/SciencePictures8';
import { current } from '../../../../../components/diagrams/science/electronicsHelpers';
import { and, or } from '../../../../../components/diagrams/science/techHelpers';

// The Ohm's law example comes from a tested helper (electronics.test.ts), which also checks that an LDR falls in light.
const amps = current(12, 3);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Diodes and LEDs',
    content: slide(
      <>
        <Rule>
          A diode is a component that lets current flow in one direction only. An LED is a light-emitting diode that gives light when current flows through it.
        </Rule>
        <ElectronicSymbols />
        <Worked
          title="Fit an LED the right way round"
          steps={[<>A diode has a direction, from anode to cathode, so it must be connected the correct way.</>, <>Connected one way, current flows and the LED lights.</>, <>Turned round, no current flows and the LED stays off. LEDs are energy-efficient indicators.</>]}
        />
        <Mistake>Thinking a diode works the same both ways. It lets current flow in one direction only.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sensors: LDR and thermistor',
    content: slide(
      <>
        <Rule>
          An LDR&apos;s resistance changes with the amount of light that falls on it. A thermistor is a resistor whose resistance changes with temperature.
        </Rule>
        <SensorCurves />
        <Worked
          title="A light sensor for a street lamp"
          steps={[
            <>In the dark the LDR&apos;s resistance is high, and in bright light it is low.</>,
            <>A lower resistance lets more current flow. For example, by Ohm&apos;s law, 12 V across 3 Ω gives {amps} A.</>,
            <>The circuit can use this change to respond to light levels for automatic control. A thermistor does the same for temperature, as in a thermostat.</>,
          ]}
        />
        <Mistake>Saying a sensor makes light or heat. It only changes its resistance when the light or temperature changes.</Mistake>
      </>,
    ),
  },
  {
    title: 'The transistor as a switch',
    content: slide(
      <>
        <Rule>
          A transistor works as an electronic switch turned on by a small signal. It can also amplify signals.
        </Rule>
        <IpoFlow id="trn" input="LDR sensor" process="transistor" output="lamp" />
        <Worked
          title="An automatic night light"
          steps={[<>Input: the LDR senses that it has become dark.</>, <>Process: its change in resistance gives a small signal that turns the transistor on.</>, <>Output: the transistor switches on the lamp, which needs much more current than the signal.</>]}
        />
        <Mistake>Thinking the small sensor current runs the lamp. The small signal only turns the transistor on; the lamp is supplied by the main supply.</Mistake>
      </>,
    ),
  },
  {
    title: 'Logic gates and PAT 2',
    content: slide(
      <>
        <Rule>
          An AND gate is a logic gate whose output is high only if all inputs are high. An OR gate is a logic gate whose output is high if any input is high. In PAT 2, an electronic system must meet the brief and do its job reliably.
        </Rule>
        <LogicSwitches />
        <TruthTable gate={and} name="AND gate" />
        <TruthTable gate={or} name="OR gate" />
        <Worked
          title="Choose the gate"
          steps={[<>A greenhouse fan must run only if it is hot AND the window is shut: an AND gate.</>, <>An alarm must sound if the door OR the window is opened: an OR gate.</>, <>For PAT 2, test the circuit and show that it meets the brief and works reliably.</>]}
        />
        <Mistake>Using OR when both conditions must be true. When all inputs must be high, you need AND.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a diode? What is an LED?</>,
          <>What does an LDR do? What is a thermistor?</>,
          <>What job does a transistor do in a control circuit?</>,
          <>What is an AND gate? What is an OR gate? What must your PAT 2 electronic system show?</>,
        ]}
        answers={[
          <>A component that lets current flow in one direction only. A light-emitting diode that gives light when current flows through it.</>,
          <>Its resistance changes with the amount of light that falls on it. A resistor whose resistance changes with temperature.</>,
          <>To work as an electronic switch turned on by a small signal.</>,
          <>A logic gate whose output is high only if all inputs are high. A logic gate whose output is high if any input is high. That it meets the brief and does its job reliably.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a diode?',
    options: ['a component that lets current flow in one direction only', 'a component that lets current flow in both ways', 'a component that stores charge for later use', 'a component that changes with the light level'],
    answer: 'a component that lets current flow in one direction only',
    explanation: 'Diodes have a specific direction (anode to cathode) and are essential for rectifying AC to DC.',
  },
  {
    prompt: 'What is an LED?',
    options: ['a light-emitting diode that gives light when current flows through it', 'a light-emitting device that glows when the circuit is cut', 'a light-emitting diode that works whichever way it is joined', 'a lamp that lights up only when the room is dark'],
    answer: 'a light-emitting diode that gives light when current flows through it',
    explanation: 'LEDs are energy-efficient indicators used in displays, indicators, and lighting applications.',
  },
  {
    prompt: 'What does an LDR do?',
    options: ['its resistance changes with the amount of light that falls on it', 'its resistance changes with the heat that surrounds it', 'it gives off light when the current passes through it', 'it stores charge that is released when it gets dark'],
    answer: 'its resistance changes with the amount of light that falls on it',
    explanation: 'LDRs are sensors that enable circuits to respond to light levels for automatic control.',
  },
  {
    prompt: 'What is a thermistor?',
    options: ['a resistor whose resistance changes with temperature', 'a resistor whose resistance changes with light', 'a thermometer that shows the heat on a dial', 'a switch that opens when it gets too wet'],
    answer: 'a resistor whose resistance changes with temperature',
    explanation: 'Thermistors enable temperature-responsive control circuits and are used in thermostats.',
  },
  {
    prompt: 'What is a transistor\'s primary function in a control circuit?',
    options: ['to work as an electronic switch turned on by a small signal', 'to work as a fuse that melts when the current is too big', 'to store charge and release it in a single burst', 'to give a fixed resistance in a circuit'],
    answer: 'to work as an electronic switch turned on by a small signal',
    explanation: 'Transistors amplify signals and switch circuits on/off, forming the basis of modern electronics.',
  },
  {
    prompt: 'What is an AND gate in logic circuits?',
    options: ['a logic gate whose output is high only if all inputs are high', 'a logic gate whose output is high if any input is high', 'a logic gate whose output is the reverse of its input', 'a logic gate whose output is high only if all inputs are low'],
    answer: 'a logic gate whose output is high only if all inputs are high',
    explanation: 'AND gates implement Boolean logic and are fundamental building blocks in digital circuits.',
  },
  {
    prompt: 'What is an OR gate in logic circuits?',
    options: ['a logic gate whose output is high if any input is high', 'a logic gate whose output is high only if all inputs are high', 'a logic gate whose output is the reverse of its input', 'a logic gate whose output is always low'],
    answer: 'a logic gate whose output is high if any input is high',
    explanation: 'OR gates provide alternative paths for control logic in digital systems.',
  },
  {
    prompt: 'In PAT 2, what must an electronic system demonstrate?',
    options: ['that it meets the brief and does its job reliably', 'that it uses as many components as possible', 'that it costs more than a bought product', 'that it has been made from recycled parts only'],
    answer: 'that it meets the brief and does its job reliably',
    explanation: 'PAT 2 assessment focuses on practical design implementation and meeting specified requirements.',
  },
];

const ElectronicControl = () => (
  <CapsSubjectTopic
    title="Electronic Control and PAT 2"
    subtitle="Diodes, LEDs, LDRs, thermistors, transistors, AND/OR logic, control devices, design solutions"
    learnSteps={learnSteps}
    task="gr9-electronic-control-t3"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default ElectronicControl;
