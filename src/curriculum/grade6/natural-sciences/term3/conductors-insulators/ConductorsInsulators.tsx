import NstTopic from '../../_shared/NstTopic';
import { NstItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Conductors and insulators',
    image: { src: '/curriculum/grade6/nst/term3/conductors-insulators/diagram.svg', alt: 'test circuit showing a material gap and examples of conductors and insulators' },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>conductor</strong> lets electricity pass through it. An <strong>insulator</strong> does not let electricity pass through easily.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-grid gap-2 text-slate-700">
          <span><strong>Conductors:</strong> most metals, such as copper and aluminium</span>
          <span><strong>Insulators:</strong> plastic, rubber, dry wood and glass</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Testing materials',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          To test a material, place it in a <strong>gap</strong> in a simple circuit. If the bulb lights, the material conducts electricity.
        </p>
        <p className="rounded-xl bg-indigo-50 p-5 font-semibold text-indigo-700">
          Bright bulb = conductor. Bulb off = insulator.
        </p>
      </div>
    ),
  },
  {
    title: 'Safety with insulators',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Electric wires are metal inside because metal conducts electricity. They are coated with <strong>plastic</strong> because plastic is an insulator.
        </p>
        <p className="text-slate-500">
          The plastic coating helps protect people from electric shock.
        </p>
      </div>
    ),
  },
];

const bank: NstItem[] = [
  { prompt: 'What is an electrical conductor?', options: ['A material that lets electricity pass through', 'A material that always floats', 'A material that makes shadows', 'A material that only holds water'], answer: 'A material that lets electricity pass through', explanation: 'Conductors allow electric current to move through them.' },
  { prompt: 'Which material is usually a good conductor?', options: ['Copper', 'Plastic', 'Rubber', 'Dry wood'], answer: 'Copper', explanation: 'Copper is a metal, and most metals conduct electricity well.' },
  { prompt: 'What is an electrical insulator?', options: ['A material that does not let electricity pass through easily', 'A material that is always magnetic', 'A material that is always shiny', 'A material that creates rain'], answer: 'A material that does not let electricity pass through easily', explanation: 'Insulators resist the flow of electric current.' },
  { prompt: 'Which material is an insulator?', options: ['Rubber', 'Iron', 'Aluminium', 'Copper'], answer: 'Rubber', explanation: 'Rubber does not let electricity pass through easily.' },
  { prompt: 'Why are electric wires covered in plastic?', options: ['Plastic is an insulator for safety', 'Plastic makes electricity stronger', 'Plastic is the energy source', 'Plastic turns current into water'], answer: 'Plastic is an insulator for safety', explanation: 'The plastic coating helps stop current from passing into your body.' },
  { prompt: 'How can you test if a material conducts electricity?', options: ['Place it in a gap in a simple circuit', 'Smell it carefully', 'Paint it blue', 'Measure its length only'], answer: 'Place it in a gap in a simple circuit', explanation: 'If the test material completes the circuit, the bulb will light.' },
  { prompt: 'In a test circuit, what does a lit bulb usually show?', options: ['The material is a conductor', 'The material is invisible', 'The battery is made of wood', 'The switch is missing forever'], answer: 'The material is a conductor', explanation: 'A lit bulb means current can pass through the test material.' },
  { prompt: 'Which group contains only insulators?', options: ['Plastic, rubber and glass', 'Copper, iron and aluminium', 'Copper, plastic and steel', 'Aluminium, rubber and copper'], answer: 'Plastic, rubber and glass', explanation: 'Plastic, rubber and glass are common electrical insulators.' },
  { prompt: 'Why are metals used inside many wires?', options: ['Metals conduct electricity', 'Metals are always soft', 'Metals stop all current', 'Metals are made from plastic'], answer: 'Metals conduct electricity', explanation: 'Metal wire gives current a good path to flow through.' },
];

const ConductorsInsulators = () => (
  <NstTopic title="Conductors & Insulators" subtitle="Materials that let electricity pass or stop it" learnSteps={learnSteps} task="conductors-insulators" bank={bank} />
);

export default ConductorsInsulators;
