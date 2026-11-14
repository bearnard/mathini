import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Select and process materials for purpose',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Engineers choose materials by looking at properties such as <strong>hardness, flexibility,</strong> and
          <strong> durability</strong>. Learners compare <strong>natural</strong> and <strong>processed</strong>
          materials, describe safe shaping and joining steps, and consider sustainability.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which is a processed material?',
    options: ['Paper made from wood pulp', 'A raw tree trunk', 'Unprocessed cotton in a field', 'Natural river sand only'],
    answer: 'Paper made from wood pulp',
    explanation: 'Processing changes raw materials into useful manufactured products.',
  },
  {
    prompt: 'Which property is most important for a metal ruler edge?',
    options: ['Hardness', 'Sweetness', 'Transparency only', 'Low mass only'],
    answer: 'Hardness',
    explanation: 'A hard edge resists bending and wear during use.',
  },
  {
    prompt: 'Why are plastic or wooden handles used on cooking pots?',
    options: ['They are poorer heat conductors', 'They are stronger than all metals', 'They dissolve in hot water', 'They increase electrical current'],
    answer: 'They are poorer heat conductors',
    explanation: 'Insulating handles reduce heat transfer to the hand.',
  },
  {
    prompt: 'What does flexibility mean for a material?',
    options: ['It can bend without breaking easily', 'It must always be transparent', 'It attracts iron strongly', 'It can only be used once'],
    answer: 'It can bend without breaking easily',
    explanation: 'Flexible materials change shape more easily without snapping.',
  },
  {
    prompt: 'Which joining method is commonly used for wood in simple models?',
    options: ['Wood glue', 'Condensation', 'Evaporation', 'Magnetic repulsion only'],
    answer: 'Wood glue',
    explanation: 'Adhesives such as wood glue create stable joints in wooden models.',
  },
  {
    prompt: 'A sustainable material choice usually means...',
    options: ['using resources responsibly and reducing waste', 'always choosing the heaviest material', 'discarding usable off-cuts', 'avoiding maintenance and repairs'],
    answer: 'using resources responsibly and reducing waste',
    explanation: 'Sustainability focuses on wise resource use and lower environmental impact.',
  },
];

const ProcessingMaterialsAndProperties = () => (
  <CapsSubjectTopic
    title="Processing Materials and Properties"
    subtitle="Selecting, shaping, and joining materials safely and sustainably"
    learnSteps={learnSteps}
    task="gr7-processing-materials-and-properties-t2"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default ProcessingMaterialsAndProperties;
