import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Construct, test, and improve prototypes safely',
    image: {
      src: '/curriculum/grade8/tech/term3/making-and-evaluating-prototypes/diagram.webp',
      alt: 'Grade 8 learners measuring, building, and evaluating a working technology prototype',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Prototype work combines accurate measuring, safe tool use, joining techniques, and evaluation. Learners test
          against criteria, record findings, and improve the design through iteration.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a prototype?',
    options: [
      'An early model used for testing an idea',
      'A final product made for mass sale',
      'A written exam timetable',
      'A type of battery cell',
    ],
    answer: 'An early model used for testing an idea',
    explanation: 'Prototypes are trial versions used to check design choices.',
  },
  {
    prompt: 'Why is accurate measuring important when making a model?',
    options: [
      'It helps parts fit and function correctly',
      'It makes safety rules unnecessary',
      'It removes the need for planning',
      'It guarantees zero material use',
    ],
    answer: 'It helps parts fit and function correctly',
    explanation: 'Good measurements improve fit, stability, and performance.',
  },
  {
    prompt: 'Which is a safe workshop practice?',
    options: ['Wear safety goggles when cutting', 'Run while carrying tools', 'Leave sharp tools on the floor', 'Work without supervision'],
    answer: 'Wear safety goggles when cutting',
    explanation: 'Eye protection reduces injury risk during cutting and drilling.',
  },
  {
    prompt: 'Choosing glue, screws, or rivets is mainly about...',
    options: ['Selecting a suitable joining method', 'Changing electrical current', 'Drawing truth tables', 'Measuring climate data'],
    answer: 'Selecting a suitable joining method',
    explanation: 'Different materials and loads need different joining techniques.',
  },
  {
    prompt: 'Evaluation criteria are used to...',
    options: ['Judge how well the prototype meets requirements', 'Decorate the model and nothing else', 'Take the place of all practical testing', 'Raise the cost for no good reason'],
    answer: 'Judge how well the prototype meets requirements',
    explanation: 'Criteria help you compare performance to design goals.',
  },
  {
    prompt: 'After testing shows a weakness, the best next step is to...',
    options: ['Modify and retest the prototype', 'Ignore the result', 'Start an unrelated project', 'Discard all measurements'],
    answer: 'Modify and retest the prototype',
    explanation: 'Iterative improvement is central to design and making.',
  },
  {
    prompt: 'A process record should include...',
    options: ['Steps followed, problems found, improvements made', 'Only the final mark that was given', 'Only the prices of the materials used', 'Only the title page of the whole project'],
    answer: 'Steps followed, problems found, improvements made',
    explanation: 'Clear records show evidence of making and evaluating decisions.',
  },
  {
    prompt: 'If a wooden piece needs smoothing before joining, which tool is most suitable?',
    options: ['File or sandpaper', 'Soldering iron', 'Wire stripper', 'Multimeter'],
    answer: 'File or sandpaper',
    explanation: 'Files and sandpaper smooth surfaces for safer handling and better joints.',
  },
];

const MakingAndEvaluatingPrototypes = () => (
  <CapsSubjectTopic
    title="Making and Evaluating Prototypes"
    subtitle="Measuring, joining, safe tool use, testing, and iterative improvement"
    learnSteps={learnSteps}
    task="gr8-making-and-evaluating-prototypes-t3"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default MakingAndEvaluatingPrototypes;
