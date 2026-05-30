import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Why we use circuit diagrams',
    image: { src: '/curriculum/grade6/nst/term3/circuit-diagrams/diagram.svg', alt: 'chart of standard circuit symbols' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>circuit diagram</strong> uses simple symbols to show the parts of an electric circuit clearly.
        </p>
        <p className="rounded-xl bg-slate-50 p-5 text-slate-700">
          Diagrams are quicker to draw than pictures of real batteries, bulbs and switches.
        </p>
      </div>
    ),
  },
  {
    title: 'Common circuit symbols',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 6 diagrams use standard symbols for a <strong>cell</strong>, <strong>battery</strong>, <strong>lamp</strong>, <strong>switch</strong> and <strong>wires</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-5 font-semibold text-indigo-700">Long and short lines → cell</div>
          <div className="rounded-xl bg-amber-50 p-5 font-semibold text-amber-700">Circle with a cross → lamp</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Reading a diagram',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Follow the <strong>wires</strong> around the diagram. If there is no gap, the circuit is closed and current can flow.
        </p>
        <p className="text-slate-500">
          An open switch shows a gap. A closed switch shows the path joined.
        </p>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'What is a circuit diagram?', options: ['A drawing using symbols for circuit parts', 'A map of rivers only', 'A food chain picture', 'A weather chart'], answer: 'A drawing using symbols for circuit parts', explanation: 'Circuit diagrams use standard symbols to show electrical parts.' },
  { prompt: 'Which symbol usually shows a cell?', options: ['One long line and one short line', 'A triangle with dots', 'A square filled with water', 'A cloud shape'], answer: 'One long line and one short line', explanation: 'A cell is drawn with a long and a short parallel line.' },
  { prompt: 'What does several cell symbols together represent?', options: ['A battery', 'A lamp', 'A wire only', 'An insulator'], answer: 'A battery', explanation: 'A battery is made of two or more cells connected together.' },
  { prompt: 'Which symbol is often used for a lamp or bulb?', options: ['A circle with a cross inside', 'A plain rectangle', 'A dotted spiral', 'A star with a tail'], answer: 'A circle with a cross inside', explanation: 'A lamp is commonly shown as a circle with a cross.' },
  { prompt: 'What do straight lines in a circuit diagram usually show?', options: ['Connecting wires', 'Water pipes', 'Wooden sticks', 'Thermometers'], answer: 'Connecting wires', explanation: 'Straight lines represent the wires joining components.' },
  { prompt: 'What does an open switch symbol show?', options: ['A gap in the circuit', 'A bulb that is always bright', 'A new battery', 'A plastic cover'], answer: 'A gap in the circuit', explanation: 'An open switch breaks the path for current.' },
  { prompt: 'What does a closed switch symbol show?', options: ['A joined path for current', 'A missing cell', 'A broken wire', 'A glass insulator'], answer: 'A joined path for current', explanation: 'A closed switch completes the path so current can flow.' },
  { prompt: 'Why are standard circuit symbols useful?', options: ['People can understand diagrams in the same way', 'They make circuits need no energy', 'They turn bulbs into batteries', 'They stop all current'], answer: 'People can understand diagrams in the same way', explanation: 'Standard symbols make circuit diagrams clear and consistent.' },
  { prompt: 'How can you tell if a simple diagram shows a complete circuit?', options: ['The wires make an unbroken path', 'The page is coloured blue', 'There are no symbols at all', 'The bulb is drawn very large'], answer: 'The wires make an unbroken path', explanation: 'A complete circuit has a closed path with no gaps.' },
];

const CircuitDiagrams = () => (
  <NstTopic title="Circuit Diagrams & Symbols" subtitle="Reading simple electrical symbols" learnSteps={learnSteps} task="circuit-diagrams" bank={bank} />
);

export default CircuitDiagrams;
