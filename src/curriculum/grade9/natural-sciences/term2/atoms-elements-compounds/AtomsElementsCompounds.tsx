import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Atomic structure and elements',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          All matter is made of tiny particles called <strong>atoms</strong>. An atom contains a
          <strong> nucleus</strong> (with protons and neutrons) surrounded by <strong>electrons</strong>.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800 mb-2">Key parts of an atom:</p>
          <div className="space-y-1 text-slate-600">
            <p><strong>Protons:</strong> Positively charged; in the nucleus</p>
            <p><strong>Neutrons:</strong> Neutral; in the nucleus</p>
            <p><strong>Electrons:</strong> Negatively charged; orbit the nucleus</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Elements, compounds, and mixtures',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Matter can be classified by the particles it contains:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Element</strong>
            <p className="text-slate-600">Pure substance with only one type of atom (e.g., oxygen, carbon).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Compound</strong>
            <p className="text-slate-600">Two or more elements chemically bonded (e.g., water H₂O).</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Mixture</strong>
            <p className="text-slate-600">Two or more substances not chemically bonded (e.g., salt water).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The periodic table and chemical symbols',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>periodic table</strong> organises all known elements. Each element has a
          <strong> symbol</strong> (like H for hydrogen, O for oxygen).
        </p>
        <div className="bg-slate-50 p-6 rounded-xl">
          <p className="font-bold text-slate-800 mb-3">Common chemical symbols:</p>
          <div className="grid grid-cols-3 gap-2 text-slate-600">
            <p>H = Hydrogen</p>
            <p>O = Oxygen</p>
            <p>C = Carbon</p>
            <p>N = Nitrogen</p>
            <p>Na = Sodium</p>
            <p>Cl = Chlorine</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is an atom?',
    options: ['A type of molecule', 'The smallest particle of matter', 'A type of compound', 'A gas particle'],
    answer: 'The smallest particle of matter',
    explanation: 'An atom is the smallest unit of an element and contains a nucleus and electrons.',
  },
  {
    prompt: 'Where are protons found?',
    options: ['Orbiting the nucleus', 'In the electron cloud', 'In the nucleus', 'Outside the atom'],
    answer: 'In the nucleus',
    explanation: 'Protons are positively charged particles found in the nucleus of an atom.',
  },
  {
    prompt: 'What is the charge of an electron?',
    options: ['Positive', 'Negative', 'Neutral', 'No charge'],
    answer: 'Negative',
    explanation: 'Electrons carry a negative charge and orbit around the nucleus.',
  },
  {
    prompt: 'What is an element?',
    options: ['Any material', 'A pure substance with one type of atom', 'A mixture of gases', 'A compound'],
    answer: 'A pure substance with one type of atom',
    explanation: 'An element contains only atoms of one type, like pure oxygen or pure carbon.',
  },
  {
    prompt: 'What is a compound?',
    options: ['A single element', 'Two or more elements chemically bonded', 'A mixture', 'Pure water'],
    answer: 'Two or more elements chemically bonded',
    explanation: 'A compound forms when elements bond together chemically, like water (H₂O).',
  },
  {
    prompt: 'What is the difference between a mixture and a compound?',
    options: ['No difference', 'In mixtures, substances are not chemically bonded', 'Compounds are not pure', 'Mixtures are elements'],
    answer: 'In mixtures, substances are not chemically bonded',
    explanation: 'In a mixture (like salt water), particles are mixed but not chemically joined.',
  },
  {
    prompt: 'What does the chemical symbol O represent?',
    options: ['Sodium', 'Carbon', 'Oxygen', 'Gold'],
    answer: 'Oxygen',
    explanation: 'O is the chemical symbol for the element oxygen.',
  },
  {
    prompt: 'What is the chemical formula for water?',
    options: ['H₂O', 'CO₂', 'NaCl', 'O₂'],
    answer: 'H₂O',
    explanation: 'Water is a compound made of 2 hydrogen atoms and 1 oxygen atom.',
  },
  {
    prompt: 'What neutrons do in an atom:',
    options: ['Attract electrons', 'Are negatively charged', 'Add mass but are neutral', 'Control the nucleus'],
    answer: 'Add mass but are neutral',
    explanation: 'Neutrons have no electric charge and contribute to the mass of an atom.',
  },
  {
    prompt: 'Which is an example of an element?',
    options: ['Water', 'Salt water', 'Oxygen gas', 'Sugar solution'],
    answer: 'Oxygen gas',
    explanation: 'Oxygen is an element; the others are compounds or mixtures.',
  },
];

const AtomsElementsCompounds = () => (
  <CapsSubjectTopic
    title="Atoms, Elements and Compounds"
    subtitle="Building blocks of matter and how they combine"
    learnSteps={learnSteps}
    task="gr9-atoms-elements-compounds-t2"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default AtomsElementsCompounds;
