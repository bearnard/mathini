import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { IpoFlow } from '../../../../../components/diagrams/science/SciencePictures2';
import { TensionCompression } from '../../../../../components/diagrams/science/SciencePictures';
import { CircuitSymbols } from '../../../../../components/diagrams/science/SciencePictures6';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Reading a mixed system: function first',
    content: slide(
      <>
        <Rule>
          A technology system joins mechanical, structural and electrical parts. Start revising a mixed-system diagram by working out the job of each part. A system with sensor, controller and buzzer is an input-process-output control system.
        </Rule>
        <IpoFlow id="sys" input="sensor" process="controller" output="buzzer" />
        <Worked
          title="Read a burglar alarm"
          steps={[<>The sensor detects a door opening: it gives the input.</>, <>The controller decides what to do: the process.</>, <>The buzzer gives the output. Reading by function connects each component to the system purpose.</>]}
        />
        <Mistake>Naming parts without saying what they do. Marks go to the function of each part, not only its name.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mechanical and structural terms',
    content: slide(
      <>
        <Rule>
          Gears and cams are both mechanical components: mechanisms that transfer or change motion. Tension and compression are both structural terms: they describe forces acting in structures.
        </Rule>
        <TensionCompression />
        <Terms
          rows={[
            ['Gear', 'toothed wheel that passes on motion and changes speed and turning force'],
            ['Cam', 'turns and pushes a follower, so rotary motion becomes up-and-down motion'],
            ['Tension', 'a pulling force that stretches'],
            ['Compression', 'a pushing force that squeezes'],
          ]}
        />
        <Worked
          title="Which pair belongs together?"
          steps={[<>Gear and cam: both are mechanical components.</>, <>Tension and compression: both are structural terms.</>]}
        />
        <Mistake>Mixing the groups. Tension is a force in a structure, not a mechanism.</Mistake>
      </>,
    ),
  },
  {
    title: 'Electrical parts and circuit diagrams',
    content: slide(
      <>
        <Rule>On an electrical diagram the cell supplies the energy. Cells supply electrical energy to a circuit.</Rule>
        <CircuitSymbols />
        <Worked
          title="Label a circuit diagram"
          steps={[<>Cell: the energy source.</>, <>Switch: an input that opens or closes the path.</>, <>Bulb or buzzer: an output. Fuse: a safety device.</>]}
        />
        <Mistake>Calling the bulb the energy source. The cell supplies the energy; the bulb uses it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Exam answers and PAT reflection',
    content: slide(
      <>
        <Rule>
          Clear communication earns marks for correct understanding. Exam answers should be concise and labelled clearly. A useful PAT reflection question is: How did testing improve my design?
        </Rule>
        <Terms
          rows={[
            ['Do', 'use short answers, neat labels and the correct design vocabulary'],
            ['Do', 'practise past-style questions and check key terms'],
            ['Avoid', 'long paragraphs with no labels, or diagrams with no names on the parts'],
          ]}
        />
        <Worked
          title="A PAT reflection"
          steps={[<>Describe a test you did on the prototype.</>, <>Say what the test showed, and what you changed.</>, <>That is evidence of how testing improved the design.</>]}
        />
        <Mistake>Revising only by re-reading. Prepare well for exams by practising past-style questions and checking key terms.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two mechanical components. Name two structural terms.</>,
          <>What does the cell do in an electrical diagram? How would you describe a system where a sensor feeds a controller that sounds a buzzer?</>,
          <>Why should Technology exam answers be short and labelled? Give a good reflection question for your PAT.</>,
          <>What should you work out first when revising a mixed-system diagram? How should you prepare for an exam?</>,
        ]}
        answers={[
          <>Gear and cam. Tension and compression.</>,
          <>The energy source. An input-process-output control system.</>,
          <>Clear communication earns marks for correct understanding. How did testing improve my design?</>,
          <>What each part does in the system. Practise past-style questions and check key terms.</>,
        ]}
      />,
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
