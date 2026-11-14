import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Classify matter and use periodic-table basics',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Matter can be grouped as <strong>elements</strong>, <strong>compounds</strong>, or
          <strong> mixtures</strong>. The periodic table organises elements and helps identify properties such as
          metals and non-metals.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which option is an element?',
    options: ['Oxygen', 'Salt water', 'Air', 'Bronze'],
    answer: 'Oxygen',
    explanation: 'An element contains only one type of atom.',
  },
  {
    prompt: 'Water (H₂O) is classified as a...',
    options: ['compound', 'mixture', 'element', 'metal'],
    answer: 'compound',
    explanation: 'Water has hydrogen and oxygen chemically combined in a fixed ratio.',
  },
  {
    prompt: 'Which statement about mixtures is correct?',
    options: ['Components are physically combined and can often be separated', 'Components are chemically bonded in fixed ratios', 'A mixture contains only one type of atom', 'Mixtures cannot change composition'],
    answer: 'Components are physically combined and can often be separated',
    explanation: 'Mixtures keep the properties of their components and can often be separated physically.',
  },
  {
    prompt: 'A solution is best described as...',
    options: ['a homogeneous mixture', 'a pure element', 'a gas only', 'a chemical reaction only'],
    answer: 'a homogeneous mixture',
    explanation: 'In a solution, the solute is evenly distributed in the solvent.',
  },
  {
    prompt: 'Which pair is correctly matched?',
    options: ['Iron: metal', 'Oxygen: metal', 'Copper: non-metal', 'Sulfur: metal'],
    answer: 'Iron: metal',
    explanation: 'Iron is a metal; oxygen and sulfur are non-metals.',
  },
  {
    prompt: 'In the periodic table, elements are arranged by...',
    options: ['increasing atomic number', 'alphabetical order only', 'state of matter only', 'colour'],
    answer: 'increasing atomic number',
    explanation: 'Atomic number (number of protons) determines position.',
  },
  {
    prompt: 'Which is a heterogeneous mixture?',
    options: ['Sand and iron filings', 'Salt dissolved in water', 'Vinegar', 'Air'],
    answer: 'Sand and iron filings',
    explanation: 'You can see different parts in a heterogeneous mixture.',
  },
  {
    prompt: 'Brass is made from copper and zinc. Brass is a...',
    options: ['mixture (alloy)', 'pure element', 'compound with fixed formula', 'non-metal gas'],
    answer: 'mixture (alloy)',
    explanation: 'Alloys are mixtures of metals.',
  },
];

const ClassificationOfMatterAndPeriodicTable = () => (
  <CapsSubjectTopic
    title="Classification of Matter and Periodic Table"
    subtitle="Elements, compounds, mixtures, and periodic-table interpretation"
    learnSteps={learnSteps}
    task="gr8-classification-of-matter-and-periodic-table-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default ClassificationOfMatterAndPeriodicTable;
