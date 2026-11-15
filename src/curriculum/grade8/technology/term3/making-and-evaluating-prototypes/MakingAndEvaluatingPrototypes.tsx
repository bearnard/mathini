import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { PROTOTYPE_STEPS } from '../../../../../components/diagrams/science/steps';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'What is a prototype?',
    content: slide(
      <>
        <Rule>
          A prototype is an early model used for testing an idea. It is a trial version used to check design choices before the final product is made.
        </Rule>
        <NumberedSteps steps={PROTOTYPE_STEPS} tone="amber" label="Making and evaluating a prototype" />
        <Worked
          title="A model of a bridge"
          steps={[<>Build a small model from card and glue to test the design.</>, <>Load it and watch where it bends.</>, <>Change the design and test again, before building the real bridge.</>]}
        />
        <Mistake>Treating the prototype as the finished product. Its job is to show what to improve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Measuring and safe making',
    content: slide(
      <>
        <Rule>
          Accurate measuring helps parts fit and function correctly. Wear safety goggles when cutting, and use tools the safe way.
        </Rule>
        <Worked
          title="Cut two pieces to fit"
          steps={[
            <>Measure each piece twice and mark it with a pencil before cutting.</>,
            <>Wear safety goggles when cutting, because eye protection reduces injury risk during cutting and drilling.</>,
            <>Smooth rough edges with a file or sandpaper before joining. This gives safer handling and better joints.</>,
          ]}
        />
        <Mistake>Eyeballing the length. A few millimetres of error can stop parts fitting, and so the model fails.</Mistake>
      </>,
    ),
  },
  {
    title: 'Choosing a joining method',
    content: slide(
      <>
        <Rule>Choosing glue, screws or rivets is mainly about selecting a suitable joining method for the material and the load.</Rule>
        <Terms
          rows={[
            ['Glue', 'good for wood, card and paper in light models. It needs time to set.'],
            ['Screws', 'hold wood or metal firmly and can be undone to make changes.'],
            ['Rivets', 'join metal sheets permanently.'],
          ]}
        />
        <Worked
          title="Pick a method"
          steps={[<>A card model of a house: glue is enough.</>, <>A wooden frame that must carry a load and may need changes: screws.</>, <>Two metal sheets that will never be taken apart: rivets.</>]}
        />
        <Mistake>Using one method for every job. Different materials and loads need different joining techniques.</Mistake>
      </>,
    ),
  },
  {
    title: 'Testing, evaluating and recording',
    content: slide(
      <>
        <Rule>
          Evaluation criteria are used to judge how well the prototype meets requirements. After testing shows a weakness, modify and retest the prototype. A process record shows steps followed, problems found and improvements made.
        </Rule>
        <Worked
          title="Evaluate a crane model"
          steps={[
            <>Criteria: it must lift a 200 g mass 20 cm without tipping.</>,
            <>Test: it tips over. That is a weakness.</>,
            <>Modify (a wider base) and retest. Record: steps followed, the problem found (tipping) and the improvement made (wider base).</>,
          ]}
        />
        <Mistake>Stopping after the first test. Iterative improvement, modifying and retesting, is central to design and making.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is a prototype? Why is accurate measuring important when making a model?</li>
            <li>Which is a safe workshop practice? Choosing glue, screws or rivets is mainly about what?</li>
            <li>What are evaluation criteria used to do? After testing shows a weakness, what is the best next step?</li>
            <li>What should a process record include? Which tool smooths a wooden piece before joining?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>An early model used for testing an idea. It helps parts fit and function correctly.</li>
            <li>Wear safety goggles when cutting. Selecting a suitable joining method.</li>
            <li>Judge how well the prototype meets requirements. Modify and retest the prototype.</li>
            <li>Steps followed, problems found, improvements made. A file or sandpaper.</li>
          </ol>
        }
      />,
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
