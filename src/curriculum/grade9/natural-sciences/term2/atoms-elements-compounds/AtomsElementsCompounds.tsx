import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare, Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { MatterKinds, PeriodicStrip } from '../../../../../components/diagrams/science/SciencePictures4';
import { AtomModel } from '../../../../../components/diagrams/science/SciencePictures9';
import { ELEMENTS } from '../../../../../components/diagrams/science/matterHelpers';
import { countAtoms, electronShells, subscripts } from '../../../../../components/diagrams/science/science9Helpers';

// Counts, shells and symbols come from tested helpers (science9.test.ts, motionMatter.test.ts).
const shells = electronShells(6).join(', ');
const water = countAtoms('H2O');
const co2 = countAtoms('CO2');
const el = (symbol: string) => ELEMENTS.find((e) => e.symbol === symbol)!;
const na = el('Na');
const cl = el('Cl');

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Inside an atom',
    content: slide(
      <>
        <Rule>
          An atom is the smallest particle of an element. It has a nucleus, with protons and neutrons, and electrons that move around the nucleus.
        </Rule>
        <AtomModel z={6} neutrons={6} name="carbon" />
        <Worked
          title="Count the particles in a carbon atom"
          steps={[
            <>Protons are positively charged and are found in the nucleus: carbon has 6.</>,
            <>Neutrons have no charge. They are in the nucleus and add mass: carbon here has 6.</>,
            <>Electrons are negatively charged and orbit the nucleus: 6, in shells of {shells}. 6 positive and 6 negative charges cancel, so the atom is neutral.</>,
          ]}
        />
        <Mistake>Thinking the electrons are inside the nucleus. The nucleus holds only protons and neutrons. The electrons move around it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Elements',
    content: slide(
      <>
        <Rule>An element is a pure substance made of one type of atom, such as oxygen gas or carbon.</Rule>
        <MatterKinds />
        <Worked
          title="Is it an element?"
          steps={[<>Oxygen gas contains only oxygen atoms: an element.</>, <>Carbon (as in a diamond or charcoal) contains only carbon atoms: an element.</>, <>Water has hydrogen and oxygen atoms: not an element.</>]}
        />
        <Mistake>Saying that oxygen gas is a compound because its particles contain two atoms. Both atoms are oxygen, so it is still one type of atom: an element.</Mistake>
      </>,
    ),
  },
  {
    title: 'Compounds and mixtures',
    content: slide(
      <>
        <Rule>
          A compound is two or more elements joined by chemical bonds. In a mixture the substances are not chemically bonded.
        </Rule>
        <Compare
          left={{ title: 'Compound', tone: 'emerald', rows: ['elements joined by chemical bonds', 'example: water, H₂O', 'cannot be separated by physical means'] }}
          right={{ title: 'Mixture', tone: 'amber', rows: ['substances mixed, not chemically bonded', 'example: salt water', 'the parts keep their own properties'] }}
        />
        <Worked
          title="Water or salt water?"
          steps={[<>Water is a compound: hydrogen and oxygen atoms are bonded together in every particle.</>, <>Salt water is a mixture: salt particles are mixed with water particles but not chemically joined to them.</>, <>Bonds join the atoms in a compound; a mixture has no bonds.</>]}
        />
        <Mistake>Calling any two substances mixed together a compound. A compound needs chemical bonds between its elements.</Mistake>
      </>,
    ),
  },
  {
    title: 'Symbols and formulas',
    content: slide(
      <>
        <Rule>
          A symbol is shorthand for an element: O is oxygen. A formula shows which atoms make up a compound: H₂O tells us water has two hydrogen atoms and one oxygen atom.
        </Rule>
        <Terms
          rows={[
            ['H', 'hydrogen'],
            ['O', 'oxygen'],
            ['C', 'carbon'],
            ['N', 'nitrogen'],
            [`${na.symbol} and ${cl.symbol}`, `${na.name} and ${cl.name}`],
          ]}
        />
        <Worked
          title="Read formulas"
          steps={[
            <>{subscripts('H2O')}: {water.H} atoms of hydrogen and {water.O} atom of oxygen. Water is a compound made of {water.H} hydrogen atoms and {water.O} oxygen atom.</>,
            <>{subscripts('CO2')}: {co2.C} atom of carbon and {co2.O} atoms of oxygen.</>,
            <>The small number after a symbol tells how many atoms of that element: no number means 1.</>,
          ]}
        />
        <Mistake>Reading {subscripts('H2O')} as two separate substances. The small 2 only says there are two hydrogen atoms, joined to one oxygen atom.</Mistake>
      </>,
    ),
  },
  {
    title: 'The periodic table',
    content: slide(
      <>
        <Rule>
          The periodic table organises all known elements. Each element has a symbol, and the elements are arranged by increasing atomic number.
        </Rule>
        <PeriodicStrip />
        <Worked
          title="Find an element"
          steps={[
            <>{na.name} has the symbol {na.symbol} and atomic number {na.n}.</>,
            <>{cl.name} has the symbol {cl.symbol} and atomic number {cl.n}.</>,
            <>The atomic number is the number of protons in the atom. Sodium chloride, table salt, is a compound of {na.name} and {cl.name}.</>,
          ]}
        />
        <Mistake>Assuming a symbol is always the first letter of the English name. Sodium is Na, not S.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is an atom? In which part of the atom are protons found? Is an electron positive or negative?</li>
            <li>Do neutrons carry charge, and what do they add to an atom?</li>
            <li>What is an element? What is a compound? Which of nitrogen gas, carbon dioxide or sea water is an element?</li>
            <li>How is a mixture different from a compound? What does the symbol N represent? Write the chemical formula for carbon dioxide.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The smallest particle of an element. In the nucleus. Negative.</li>
            <li>No, they are neutral; they add mass.</li>
            <li>A pure substance made of one type of atom. Two or more elements joined by chemical bonds. Nitrogen gas.</li>
            <li>In a mixture, the substances are not chemically bonded. Nitrogen. CO₂.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is an atom?',
    options: ['A particle made of two or more molecules joined', 'The smallest particle of an element', 'A particle made of different compounds joined', 'A gas particle that is found only in air'],
    answer: 'The smallest particle of an element',
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
    options: ['Any material that is found in nature, such as a rock', 'A pure substance made of one type of atom', 'A mixture of gases, such as the air around us', 'A pure substance made of two kinds of atoms bonded'],
    answer: 'A pure substance made of one type of atom',
    explanation: 'An element contains only atoms of one type, like pure oxygen or pure carbon.',
  },
  {
    prompt: 'What is a compound?',
    options: ['A single element made of one kind of atom only', 'Two or more elements joined by chemical bonds', 'A mixture of substances that is easy to separate again', 'A pure substance that has only one kind of atom in it'],
    answer: 'Two or more elements joined by chemical bonds',
    explanation: 'A compound forms when elements bond together chemically, like water (H₂O).',
  },
  {
    prompt: 'What is the difference between a mixture and a compound?',
    options: ['In a mixture, the substances are chemically bonded', 'In a mixture, the substances are not chemically bonded', 'A compound is not pure, but a mixture is a pure substance', 'A mixture is made of one type of atom, like an element'],
    answer: 'In a mixture, the substances are not chemically bonded',
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
