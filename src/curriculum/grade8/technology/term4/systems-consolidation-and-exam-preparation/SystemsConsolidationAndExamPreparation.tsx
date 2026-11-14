import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Integrate systems knowledge for exam readiness',
    image: {
      src: '/curriculum/grade8/tech/term4/systems-consolidation-and-exam-preparation/diagram.webp',
      alt: 'Grade 8 learners revising mechanical, structural, and electrical systems together',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 revision combines mechanical, structural, and electrical ideas. You practise reading mixed diagrams,
          using accurate design vocabulary, and writing concise PAT-informed exam answers.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which pair are both mechanical components?',
    options: ['Gear and cam', 'Fuse and earth wire', 'Column and beam', 'Cell and switch'],
    answer: 'Gear and cam',
    explanation: 'Gears and cams are mechanisms that transfer or change motion.',
  },
  {
    prompt: 'Which pair are both structural terms?',
    options: ['Tension and compression', 'Series and parallel', 'Input and output', 'Conductor and insulator'],
    answer: 'Tension and compression',
    explanation: 'Tension and compression describe forces acting in structures.',
  },
  {
    prompt: 'In an electrical diagram, a cell is mainly the...',
    options: ['Energy source', 'Load-bearing member', 'Cutting tool', 'Protective coating'],
    answer: 'Energy source',
    explanation: 'Cells supply electrical energy to a circuit.',
  },
  {
    prompt: 'Why should exam answers in Technology be concise and labelled clearly?',
    options: [
      'Clear communication earns marks for correct understanding',
      'Long answers always score more even if unclear',
      'Labels are only for art class',
      'Diagrams replace all written answers',
    ],
    answer: 'Clear communication earns marks for correct understanding',
    explanation: 'Markers award marks when ideas are accurate and communicated clearly.',
  },
  {
    prompt: 'A system with sensor -> controller -> buzzer is best described as...',
    options: ['An input-process-output control system', 'A frame structure and nothing else', 'A chemical process and nothing else', 'A decorative model and nothing else'],
    answer: 'An input-process-output control system',
    explanation: 'Sensors provide input, controllers process, and buzzers give output.',
  },
  {
    prompt: 'Which is a useful PAT reflection question?',
    options: ['How did testing improve my design?', 'What is my favourite colour?', 'Did I skip all measurements?', 'Can I avoid evaluation completely?'],
    answer: 'How did testing improve my design?',
    explanation: 'PAT reflection focuses on evidence of design decisions and improvements.',
  },
  {
    prompt: 'When revising mixed-system diagrams, first identify...',
    options: ['What each part does in the system', 'The style in which it is drawn', 'The colours of the components', 'The page number of the diagram'],
    answer: 'What each part does in the system',
    explanation: 'Function-based reading helps connect components to system purpose.',
  },
  {
    prompt: 'A strong exam-preparation strategy is to...',
    options: [
      'Practise past-style questions and check key terms',
      'Memorise without understanding diagrams',
      'Skip topics that seem difficult',
      'Write answers without reading questions',
    ],
    answer: 'Practise past-style questions and check key terms',
    explanation: 'Targeted practice and terminology review improve performance.',
  },
];

const SystemsConsolidationAndExamPreparation = () => (
  <CapsSubjectTopic
    title="Systems Consolidation and Exam Preparation"
    subtitle="Integrated mechanical, structural, and electrical revision with PAT reflection"
    learnSteps={learnSteps}
    task="gr8-systems-consolidation-and-exam-preparation-t4"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default SystemsConsolidationAndExamPreparation;
