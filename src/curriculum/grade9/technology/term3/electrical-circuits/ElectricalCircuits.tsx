import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand current, voltage and resistance',
    image: {
      src: '/curriculum/grade9/technology/term3/electrical-circuits/image1.jpg',
      alt: 'learner measuring current with an ammeter and voltage with a voltmeter in a circuit containing resistors',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Current (A) is the flow of charge, voltage (V) is the potential difference, and resistance (Ω) opposes current flow. 
          These quantities relate through Ohm\'s law: V = IR, allowing prediction of circuit behaviour.
        </p>
      </div>
    ),
  },
  {
    title: 'Analyze series and parallel circuits',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In series circuits, components are in a single path; current is constant but voltage divides. In parallel circuits, 
          components have independent paths; voltage is constant but current divides. Each configuration has practical advantages.
        </p>
      </div>
    ),
  },
  {
    title: 'Apply resistor colour codes and solve circuit problems',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Resistor colour codes quickly identify resistance values. Using Ohm\'s law and circuit knowledge, you can calculate 
          unknown quantities, test circuits, and troubleshoot electrical faults.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is electrical current?',
    options: ['the flow of electric charge round a circuit', 'the push that moves charge round a circuit', 'the opposition to the flow of charge', 'the amount of energy a battery can store'],
    answer: 'the flow of electric charge round a circuit',
    explanation: 'Current is measured in Amperes (A) and represents how many charges pass a point per second.',
  },
  {
    prompt: 'What is voltage?',
    options: ['the push (potential difference) that drives the current', 'the flow of charge past a point each second', 'the opposition that a component gives to the current', 'the heat given off by a wire when it is on'],
    answer: 'the push (potential difference) that drives the current',
    explanation: 'Voltage (measured in Volts) is the "push" that makes current flow from positive to negative.',
  },
  {
    prompt: 'What is electrical resistance?',
    options: ['the opposition to current flow in a material', 'a force that stops motion', 'only found in metals', 'something that accelerates current'],
    answer: 'the opposition to current flow in a material',
    explanation: 'Resistance (measured in Ohms, Ω) converts electrical energy into heat or light.',
  },
  {
    prompt: 'What is Ohm\'s law?',
    options: ['V = I × R (voltage equals current times resistance)', 'V = I ÷ R (voltage equals current divided by resistance)', 'V = I + R (voltage equals current plus resistance)', 'V = R ÷ I (voltage equals resistance divided by current)'],
    answer: 'V = I × R (voltage equals current times resistance)',
    explanation: 'Ohm\'s law relates the three fundamental electrical quantities.',
  },
  {
    prompt: 'In a series circuit, what happens to current?',
    options: ['the current is the same at every point in the circuit', 'the current is shared between the branches', 'the current gets bigger after each component', 'the current is used up by the first component'],
    answer: 'the current is the same at every point in the circuit',
    explanation: 'Series circuits have only one path, so current does not vary.',
  },
  {
    prompt: 'In a parallel circuit, what happens to voltage?',
    options: ['voltage is the same across all branches', 'voltage varies in each branch', 'voltage is zero in some branches', 'voltage increases in each branch'],
    answer: 'voltage is the same across all branches',
    explanation: 'All parallel branches are connected to the same power supply, so they have equal voltage.',
  },
  {
    prompt: 'What does a resistor colour code system allow you to determine?',
    options: ['the resistance of a resistor without having to measure it', 'the power rating of a resistor in watts only', 'the voltage that the resistor must be given', 'the maximum current it can carry before it burns'],
    answer: 'the resistance of a resistor without having to measure it',
    explanation: 'Coloured bands on resistors encode their resistance in a standardized way.',
  },
  {
    prompt: 'If you have a 12V source and a 3Ω resistor, what is the current using Ohm\'s law?',
    options: ['4A (calculated as 12 ÷ 3)', '0.25A', '36A', 'cannot be calculated'],
    answer: '4A (calculated as 12 ÷ 3)',
    explanation: 'Using I = V ÷ R: 12V ÷ 3Ω = 4A.',
  },
];

const ElectricalCircuits = () => (
  <CapsSubjectTopic
    title="Electrical Circuits and Ohm\'s Law"
    subtitle="Current, voltage, resistance, series and parallel circuits, V=IR, resistor colour codes"
    learnSteps={learnSteps}
    task="gr9-electrical-circuits-t3"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default ElectricalCircuits;
