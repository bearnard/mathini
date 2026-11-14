import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Explore electronic components and sensing',
    image: {
      src: '/curriculum/grade9/technology/term3/electronic-control/image1.jpg',
      alt: 'learner examining diodes, LEDs, LDRs, thermistors, and transistors in a control circuit setup',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Diodes allow current flow in one direction. LEDs emit light when current passes. LDRs and thermistors change 
          resistance based on light and temperature. Transistors act as electronic switches to control circuits.
        </p>
      </div>
    ),
  },
  {
    title: 'Understand logic switching and control devices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          AND gates require all inputs to be high for output to be high. OR gates require any input to be high. 
          These logic gates, combined with sensors and transistors, create automated control systems that respond to conditions.
        </p>
      </div>
    ),
  },
  {
    title: 'Design and evaluate electronic solutions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          By combining sensors, logic circuits, and output devices, you can design solutions to real problems. 
          PAT 2 involves assembling and testing an electronic system that meets design criteria and performance standards.
        </p>
      </div>
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
