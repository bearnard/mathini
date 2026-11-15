import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare } from '../../../../../components/diagrams/science/ScienceBlocks';
import { CellPair, LevelsRow, SizeScale } from '../../../../../components/diagrams/science/SciencePictures5';
import { CELL_MM, LEVELS, mmToMicrometres } from '../../../../../components/diagrams/science/lifeTechHelpers';

// The sizes and levels come from tested helpers (lifeTech.test.ts).
const sa = (n: number) => String(n).replace('.', ',');
const small = sa(CELL_MM[0]);
const big = sa(CELL_MM[1]);
const microLow = mmToMicrometres(CELL_MM[0]);
const microHigh = mmToMicrometres(CELL_MM[1]);
const levelNames = LEVELS.slice(0, 4);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'The cell: the basic unit of life',
    content: slide(
      <>
        <Rule>
          A cell is the basic unit of life. All living things are made of cells. A typical plant or animal cell is about {small} to {big} mm across.
        </Rule>
        <SizeScale />
        <Worked
          title="Why do we need a microscope?"
          steps={[
            <>A cell is about {small} to {big} mm, which is {microLow} to {microHigh} micrometres across.</>,
            <>The smallest thing the naked eye can see is about {big} mm, so most cells are at or below the limit.</>,
            <>So we need a microscope to see most cells clearly.</>,
          ]}
        />
        <Mistake>Thinking a cell is just a bit of a living thing. A cell is itself alive and carries out the jobs of life. It is the basic unit of life.</Mistake>
      </>,
    ),
  },
  {
    title: 'Organelles and their jobs',
    content: slide(
      <>
        <Rule>
          Organelles are small parts inside a cell that do different jobs. The nucleus controls cell activities and contains DNA. Mitochondria release energy from food.
        </Rule>
        <CellPair />
        <Worked
          title="Match the organelle to its job"
          steps={[
            <>Nucleus: controls the cell&apos;s activities.</>,
            <>Mitochondria: break down food and release usable energy.</>,
            <>Chloroplast (plant cells only): captures sunlight for photosynthesis. Cell wall (plant cells only): gives rigid support and protection.</>,
          ]}
        />
        <Mistake>Thinking the mitochondria make energy from nothing. They release the energy that is stored in food, in respiration.</Mistake>
      </>,
    ),
  },
  {
    title: 'Plant and animal cells compared',
    content: slide(
      <>
        <Rule>Plant and animal cells look different but share some organelles. Both have a nucleus.</Rule>
        <Compare
          left={{ title: 'Both plant and animal cells', tone: 'sky', rows: ['nucleus controls cell activities', 'mitochondria release energy', 'cell membrane and cytoplasm'] }}
          right={{ title: 'Only plant cells', tone: 'emerald', rows: ['cell wall: rigid support', 'chloroplasts: capture sunlight', 'a large vacuole'] }}
        />
        <Worked
          title="Which cell is it?"
          steps={[<>A cell with chloroplasts is a plant cell, because the chloroplast is only found in plant cells.</>, <>A cell with a nucleus but no cell wall is probably an animal cell.</>]}
        />
        <Mistake>Believing that animal cells have no nucleus. Both plant and animal cells have a nucleus.</Mistake>
      </>,
    ),
  },
  {
    title: 'From cells to organ systems',
    content: slide(
      <>
        <Rule>
          Cells group to form tissues, tissues form organs, and organs form systems. A tissue is a group of similar cells working together. The order is {levelNames.join(' → ')}.
        </Rule>
        <LevelsRow levels={levelNames} />
        <Worked
          title="Follow the heart"
          steps={[
            <>Muscle cells are cells.</>,
            <>Many muscle cells working together form muscle tissue.</>,
            <>Muscle and other tissues form an organ, the heart. The heart, blood and blood vessels form the circulatory system.</>,
          ]}
        />
        <Mistake>Mixing up the order. An organ is made of tissues, not the other way round.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is a cell? What is the typical size of a plant or animal cell?</li>
            <li>Which organelle controls cell activities? Where is energy released in a cell?</li>
            <li>Which organelle is only found in plant cells? What does the cell wall do?</li>
            <li>What is a tissue? What is the correct order of organisation?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The basic unit of life. About 0,01 to 0,1 mm.</li>
            <li>The nucleus. In the mitochondria.</li>
            <li>The chloroplast. It provides rigid support.</li>
            <li>A group of similar cells working together. Cells → Tissues → Organs → Systems.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a cell?',
    options: ['The basic unit of life', 'A type of tissue', 'An organ', 'A complete organism'],
    answer: 'The basic unit of life',
    explanation: 'All living things are made of cells, which are the smallest living units.',
  },
  {
    prompt: 'Which organelle controls cell activities?',
    options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Chloroplast'],
    answer: 'Nucleus',
    explanation: 'The nucleus controls cell activities and contains DNA.',
  },
  {
    prompt: 'Where is energy released in a cell?',
    options: ['Nucleus', 'Cell wall', 'Mitochondria', 'Chloroplast'],
    answer: 'Mitochondria',
    explanation: 'Mitochondria are the powerhouse of the cell and release energy from food.',
  },
  {
    prompt: 'Which organelle is only found in plant cells?',
    options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Ribosome'],
    answer: 'Chloroplast',
    explanation: 'Chloroplasts are only in plant cells and capture sunlight for photosynthesis.',
  },
  {
    prompt: 'What is the correct order of organisation in living things?',
    options: ['Tissues → Cells → Organs → Systems', 'Cells → Tissues → Organs → Systems', 'Organs → Tissues → Cells → Systems', 'Systems → Organs → Tissues → Cells'],
    answer: 'Cells → Tissues → Organs → Systems',
    explanation: 'The correct hierarchy is cells forming tissues, tissues forming organs, and organs forming systems.',
  },
  {
    prompt: 'What is a tissue?',
    options: ['A single cell that has its own nucleus', 'A group of similar cells working together', 'A group of different organs working together', 'A group of organs that form one body system'],
    answer: 'A group of similar cells working together',
    explanation: 'A tissue is a group of similar cells that perform the same function.',
  },
  {
    prompt: 'What does the cell wall do?',
    options: ['Controls the cell', 'Provides energy', 'Provides rigid support', 'Captures sunlight'],
    answer: 'Provides rigid support',
    explanation: 'The cell wall gives plant cells rigid support and protection.',
  },
  {
    prompt: 'Which statement compares plant and animal cells correctly?',
    options: ['Both have chloroplasts', 'Both have a nucleus', 'Both have a cell wall', 'Both have centrioles'],
    answer: 'Both have a nucleus',
    explanation: 'Both plant and animal cells have a nucleus that controls cell activities.',
  },
  {
    prompt: 'What is the role of mitochondria?',
    options: ['Make food', 'Control the cell', 'Release energy from food', 'Store water'],
    answer: 'Release energy from food',
    explanation: 'Mitochondria break down food and release usable energy for the cell.',
  },
  {
    prompt: 'What is the typical size of a plant or animal cell?',
    options: ['About 0,01 to 0,1 mm', 'About 1 to 10 mm', 'About 1 to 10 cm', 'About 0,0001 mm'],
    answer: 'About 0,01 to 0,1 mm',
    explanation: 'Most plant and animal cells are 0,01 to 0,1 mm (10 to 100 micrometres) across. The smallest thing the naked eye can see is about 0,1 mm, so we need a microscope to see most cells clearly.',
  },
];

const CellsTissuesOrganisation = () => (
  <CapsSubjectTopic
    title="Cells, Tissues and Levels of Organisation"
    subtitle="From cells to systems: How living things are organised"
    learnSteps={learnSteps}
    task="gr9-cells-tissues-organisation-t1"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default CellsTissuesOrganisation;
