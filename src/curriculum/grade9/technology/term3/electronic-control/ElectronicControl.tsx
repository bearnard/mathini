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
    options: ['an electronic component that allows current to flow in only one direction', 'a resistor', 'a light source only', 'a type of sensor'],
    answer: 'an electronic component that allows current to flow in only one direction',
    explanation: 'Diodes have a specific direction (anode to cathode) and are essential for rectifying AC to DC.',
  },
  {
    prompt: 'What is an LED?',
    options: ['a light-emitting diode that produces light when current flows through it', 'a type of resistor', 'a battery', 'a switch only'],
    answer: 'a light-emitting diode that produces light when current flows through it',
    explanation: 'LEDs are energy-efficient indicators used in displays, indicators, and lighting applications.',
  },
  {
    prompt: 'What does an LDR do?',
    options: ['changes resistance based on light intensity (light-dependent resistor)', 'emits light', 'stores charge', 'measures time'],
    answer: 'changes resistance based on light intensity (light-dependent resistor)',
    explanation: 'LDRs are sensors that enable circuits to respond to light levels for automatic control.',
  },
  {
    prompt: 'What is a thermistor?',
    options: ['a resistor that changes resistance based on temperature', 'a thermometer', 'a heating element only', 'a light sensor'],
    answer: 'a resistor that changes resistance based on temperature',
    explanation: 'Thermistors enable temperature-responsive control circuits and are used in thermostats.',
  },
  {
    prompt: 'What is a transistor\'s primary function in a control circuit?',
    options: ['to act as an electronic switch controlled by a small signal', 'to increase resistance', 'to reduce temperature', 'to generate light'],
    answer: 'to act as an electronic switch controlled by a small signal',
    explanation: 'Transistors amplify signals and switch circuits on/off, forming the basis of modern electronics.',
  },
  {
    prompt: 'What is an AND gate in logic circuits?',
    options: ['a logic gate that outputs high only when all inputs are high', 'a gate that always opens', 'a gate that is always closed', 'a physical door'],
    answer: 'a logic gate that outputs high only when all inputs are high',
    explanation: 'AND gates implement Boolean logic and are fundamental building blocks in digital circuits.',
  },
  {
    prompt: 'What is an OR gate in logic circuits?',
    options: ['a logic gate that outputs high when any input is high', 'a gate that never opens', 'identical to an AND gate', 'a type of resistor'],
    answer: 'a logic gate that outputs high when any input is high',
    explanation: 'OR gates provide alternative paths for control logic in digital systems.',
  },
  {
    prompt: 'In PAT 2, what must an electronic system demonstrate?',
    options: ['that it meets the design brief criteria and performs its intended function reliably', 'that it is expensive', 'that it is complicated', 'that it glows bright colours'],
    answer: 'that it meets the design brief criteria and performs its intended function reliably',
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
