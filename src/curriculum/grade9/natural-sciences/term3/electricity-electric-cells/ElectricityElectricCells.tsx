import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Electric current and circuits',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Electric current</strong> is the flow of electrons through a conductor. A simple
          circuit includes a power source (cell), wires, and a load (like a bulb).
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800 mb-2">Parts of a circuit:</p>
          <div className="space-y-1 text-slate-600">
            <p><strong>Power source:</strong> Provides energy (cell or battery)</p>
            <p><strong>Conductor:</strong> Allows current to flow (wire)</p>
            <p><strong>Load:</strong> Uses the current (bulb, motor)</p>
            <p><strong>Switch:</strong> Opens or closes the circuit</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Series and parallel circuits',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Circuits can be arranged in different ways:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Series Circuit</strong>
            <p className="text-slate-600">Components in one path; current flows through each in order.</p>
            <p className="text-xs text-slate-500 mt-1">If one breaks, all stop working.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Parallel Circuit</strong>
            <p className="text-slate-600">Components have separate paths; current can split.</p>
            <p className="text-xs text-slate-500 mt-1">If one breaks, others still work.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Potential difference and resistance',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Potential difference</strong> (voltage) pushes current through a circuit.
          <strong> Resistance</strong> opposes the flow of current.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-3">
          <div>
            <p className="font-bold text-slate-800">Potential Difference (V)</p>
            <p className="text-slate-600">Measured in volts; higher voltage pushes more current.</p>
          </div>
          <div>
            <p className="font-bold text-slate-800">Resistance (Ω)</p>
            <p className="text-slate-600">Measured in ohms; thinner or longer wires have more resistance.</p>
          </div>
          <p className="text-sm text-slate-500">V = I × R (Ohm's Law)</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is electric current?',
    options: ['A type of voltage', 'The flow of electrons', 'Resistance in a wire', 'A power source'],
    answer: 'The flow of electrons',
    explanation: 'Electric current is the movement of electrons through a conductor.',
  },
  {
    prompt: 'What does a power source do in a circuit?',
    options: ['Stops the current', 'Provides energy to push current', 'Creates resistance', 'Slows electrons'],
    answer: 'Provides energy to push current',
    explanation: 'A power source (cell or battery) pushes electrons around the circuit.',
  },
  {
    prompt: 'In a series circuit, if one bulb breaks, what happens?',
    options: ['Other bulbs stay bright', 'All bulbs go out', 'Current increases', 'The cell explodes'],
    answer: 'All bulbs go out',
    explanation: 'In series, components share one path; breaking it stops all current.',
  },
  {
    prompt: 'What is an advantage of a parallel circuit?',
    options: ['Uses less energy', 'Brighter bulbs', 'If one path breaks, others still work', 'Easier to build'],
    answer: 'If one path breaks, others still work',
    explanation: 'In parallel circuits, each component has its own path.',
  },
  {
    prompt: 'What is potential difference?',
    options: ['The resistance of a wire', 'The rate of current flow', 'The push that drives current', 'A circuit component'],
    answer: 'The push that drives current',
    explanation: 'Potential difference (voltage) is what pushes electrons through a circuit.',
  },
  {
    prompt: 'What is resistance?',
    options: ['The power source', 'Opposition to current flow', 'A switch', 'A type of wire'],
    answer: 'Opposition to current flow',
    explanation: 'Resistance opposes and reduces the flow of current in a circuit.',
  },
  {
    prompt: 'Which factor increases the resistance of a wire?',
    options: ['Making it thicker', 'Making it shorter', 'Making it longer and thinner', 'Adding current'],
    answer: 'Making it longer and thinner',
    explanation: 'Longer wires and thinner wires have more resistance.',
  },
  {
    prompt: 'In which circuit are all components in one path?',
    options: ['Parallel', 'Series', 'Mixed', 'Random'],
    answer: 'Series',
    explanation: 'Series circuits have all components connected one after another.',
  },
  {
    prompt: 'What happens to brightness when you add more bulbs in series?',
    options: ['Gets brighter', 'Gets dimmer', 'Stays the same', 'Flickers'],
    answer: 'Gets dimmer',
    explanation: 'More resistors in series reduce current and dim the bulbs.',
  },
  {
    prompt: 'What unit measures potential difference?',
    options: ['Amps', 'Ohms', 'Volts', 'Watts'],
    answer: 'Volts',
    explanation: 'Potential difference is measured in volts (V).',
  },
];

const ElectricityElectricCells = () => (
  <CapsSubjectTopic
    title="Electricity and Electric Cells"
    subtitle="Circuits, current, and how electricity flows"
    learnSteps={learnSteps}
    task="gr9-electricity-electric-cells-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default ElectricityElectricCells;
