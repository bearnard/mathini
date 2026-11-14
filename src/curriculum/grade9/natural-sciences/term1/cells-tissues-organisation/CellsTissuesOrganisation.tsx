import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Cell structure: The basic unit of life',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          All living things are made of <strong>cells</strong>. A cell is the smallest unit of life.
          Most cells are too small to see without a microscope.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Plant and animal cells look different but share some organelles.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Organelles and their functions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Cells contain small parts called <strong>organelles</strong> that do different jobs:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Nucleus</strong>
            <p className="text-slate-600">Controls cell activities and contains DNA.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Mitochondria</strong>
            <p className="text-slate-600">Releases energy from food.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Chloroplast</strong>
            <p className="text-slate-600">(Plant only) Captures sunlight for photosynthesis.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Cell wall</strong>
            <p className="text-slate-600">(Plant only) Provides rigid support and protection.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'From cells to tissues to organs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Cells group together to form <strong>tissues</strong>. Tissues work together to form
          <strong> organs</strong>. Organs work together to form <strong>systems</strong>.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Organisation in living things:</p>
          <p className="text-slate-600">Cells → Tissues → Organs → Systems → Organism</p>
        </div>
      </div>
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
    prompt: 'How many times smaller is a cell than the eye can see?',
    options: ['2-5 times', '10-100 times', '1000+ times', 'Cells are visible to the eye'],
    answer: '1000+ times',
    explanation: 'Most cells are microscopic and require a microscope to see them clearly.',
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
