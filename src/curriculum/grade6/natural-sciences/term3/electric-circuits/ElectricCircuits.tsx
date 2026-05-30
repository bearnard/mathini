import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Parts of a circuit',
    image: { src: '/curriculum/grade6/nst/term3/electric-circuits/diagram.svg', alt: 'closed circuit with a cell, bulb, switch and wires' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A simple <strong>electric circuit</strong> has a cell or battery, connecting wires, a bulb and often a switch.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-slate-700">
          <span><strong>Cell or battery:</strong> supplies energy</span>
          <span><strong>Bulb:</strong> changes electrical energy to light</span>
          <span><strong>Wires:</strong> make a path for current</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Closed and open circuits',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Electric current flows only when the circuit is <strong>complete</strong> or <strong>closed</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-5 font-semibold text-emerald-700">Closed circuit → bulb lights</div>
          <div className="rounded-xl bg-rose-50 p-5 font-semibold text-rose-700">Open circuit → bulb is off</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Switches, series and parallel',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>switch</strong> opens or closes a circuit. In a <strong>series</strong> circuit there is one path. In a <strong>parallel</strong> circuit there is more than one path.
        </p>
        <p className="text-slate-500">
          If one bulb breaks in a simple series circuit, the whole path is broken.
        </p>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'What supplies energy in a simple electric circuit?', options: ['A cell or battery', 'Plastic coating', 'A glass jar', 'A wooden ruler'], answer: 'A cell or battery', explanation: 'A cell or battery is the energy source for the circuit.' },
  { prompt: 'When will a bulb light in a simple circuit?', options: ['When the circuit is closed', 'When one wire is missing', 'When the switch is open', 'When the bulb is not connected'], answer: 'When the circuit is closed', explanation: 'Current can flow only around a complete, closed path.' },
  { prompt: 'What does a switch do in a circuit?', options: ['Opens or closes the circuit', 'Turns metal into plastic', 'Stores water', 'Measures temperature'], answer: 'Opens or closes the circuit', explanation: 'A switch can make or break the path for current.' },
  { prompt: 'What happens when a switch is open?', options: ['The circuit is broken', 'The bulb must get brighter', 'The battery becomes a bulb', 'The wire disappears'], answer: 'The circuit is broken', explanation: 'An open switch leaves a gap, so current cannot flow.' },
  { prompt: 'Which part changes electrical energy into light?', options: ['Bulb', 'Switch', 'Wire coating', 'Cell holder'], answer: 'Bulb', explanation: 'A bulb uses electrical energy to produce light.' },
  { prompt: 'What is the job of connecting wires?', options: ['Provide a path for current', 'Stop all electricity', 'Make the cell heavier', 'Cool the bulb with water'], answer: 'Provide a path for current', explanation: 'Wires connect parts so current can move around the circuit.' },
  { prompt: 'How many paths are there in a simple series circuit?', options: ['One path', 'Two or more paths', 'No path', 'Only a water path'], answer: 'One path', explanation: 'Series components are connected one after another in a single path.' },
  { prompt: 'What is a basic feature of a parallel circuit?', options: ['It has more than one path', 'It never uses wires', 'It has no energy source', 'It works only with wood'], answer: 'It has more than one path', explanation: 'Parallel circuits give current more than one route to follow.' },
  { prompt: 'Which set lists common parts of a simple circuit?', options: ['Cell, bulb, switch and wires', 'Soil, seed, leaf and flower', 'Ruler, pencil, book and desk', 'Magnet, string, cup and spoon'], answer: 'Cell, bulb, switch and wires', explanation: 'These are the usual parts used to build a simple electric circuit.' },
];

const ElectricCircuits = () => (
  <NstTopic title="Electric Circuits" subtitle="What makes a bulb light up" learnSteps={learnSteps} task="electric-circuits" bank={bank} />
);

export default ElectricCircuits;
