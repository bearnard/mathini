import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare, Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { MatterKinds, PeriodicStrip } from '../../../../../components/diagrams/science/SciencePictures4';
import { ELEMENTS, byKind } from '../../../../../components/diagrams/science/matterHelpers';

// The element facts come from a tested table (motionMatter.test.ts).
const sym = (s: string) => ELEMENTS.find((e) => e.symbol === s)!;
const oxygen = sym('O');
const sulfur = sym('S');
const metals = byKind('metal').map((e) => e.name).join(', ');

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Elements, compounds and mixtures',
    content: slide(
      <>
        <Rule>
          Matter can be grouped as elements, compounds or mixtures. An <strong>element</strong> contains only one type of atom. A <strong>compound</strong> has different atoms chemically combined in a fixed ratio.
        </Rule>
        <MatterKinds />
        <Worked
          title="Classify oxygen and water"
          steps={[
            <>Oxygen ({oxygen.symbol}, atomic number {oxygen.n}) contains one type of atom only: an element.</>,
            <>Water (H₂O) has hydrogen and oxygen chemically combined in a fixed ratio: a compound.</>,
            <>A compound has different properties from the elements in it.</>,
          ]}
        />
        <Mistake>Thinking a compound is just a mixture. In a compound the atoms are chemically joined in a fixed ratio. In a mixture they are not.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mixtures and alloys',
    content: slide(
      <>
        <Rule>
          In a mixture the components are physically combined and can often be separated. A mixture keeps the properties of its components.
        </Rule>
        <Compare
          left={{ title: 'Homogeneous mixture', tone: 'sky', rows: ['looks the same all through', 'a solution is a homogeneous mixture: the solute is evenly distributed in the solvent', 'example: salt dissolved in water'] }}
          right={{ title: 'Heterogeneous mixture', tone: 'amber', rows: ['you can see the different parts', 'example: sand and iron filings', 'a magnet can separate the iron filings'] }}
        />
        <Worked
          title="Brass is made from copper and zinc"
          steps={[<>Brass is copper and zinc combined.</>, <>The metals are mixed, not chemically joined into a new substance.</>, <>So brass is a mixture (alloy). Alloys are mixtures of metals.</>]}
        />
        <Mistake>Calling salty water a compound because the salt cannot be seen. It is a homogeneous mixture, and evaporating the water gets the salt back.</Mistake>
      </>,
    ),
  },
  {
    title: 'The periodic table',
    content: slide(
      <>
        <Rule>
          The periodic table organises the elements. Their order follows increasing atomic number, which is the number of protons in the atom.
        </Rule>
        <PeriodicStrip />
        <Worked
          title="Read the first rows"
          steps={[
            <>Hydrogen has atomic number 1, helium 2, lithium 3, and so on, up to argon, 18.</>,
            <>Each row is read from left to right, and then the next row begins.</>,
            <>Oxygen is {oxygen.n} and sulfur is {sulfur.n}: both are on the right-hand side, among the non-metals.</>,
          ]}
        />
        <Mistake>Thinking the table is in alphabetical order or by mass of the elements. It is arranged by increasing atomic number.</Mistake>
      </>,
    ),
  },
  {
    title: 'Metals and non-metals',
    content: slide(
      <>
        <Rule>Elements can be metals or non-metals. Iron is a metal; oxygen and sulfur are non-metals.</Rule>
        <Terms
          rows={[
            ['Metals', 'shiny, conduct heat and electricity, can be hammered into shape (malleable)'],
            ['Non-metals', 'usually dull, brittle if solid, poor conductors'],
            ['In the table', `metals are on the left, for example ${metals}; non-metals on the right`],
          ]}
        />
        <Worked
          title="Match each element to its group"
          steps={[<>Iron: metal.</>, <>Oxygen: non-metal, a gas.</>, <>Sulfur: non-metal, a yellow solid.</>]}
        />
        <Mistake>Thinking every element is a metal because it is solid. Sulfur is a solid, but it is a non-metal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which is an element: water or oxygen? What is water (H₂O) classified as?</li>
            <li>What is true about mixtures? What is a solution?</li>
            <li>Which is a heterogeneous mixture: salt water, or sand and iron filings?</li>
            <li>What decides the order of the elements in the periodic table? What is brass?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Oxygen. A compound.</li>
            <li>Components are physically combined and can often be separated. A homogeneous mixture.</li>
            <li>Sand and iron filings.</li>
            <li>By increasing atomic number. A mixture (alloy).</li>
          </ol>
        }
      />,
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
