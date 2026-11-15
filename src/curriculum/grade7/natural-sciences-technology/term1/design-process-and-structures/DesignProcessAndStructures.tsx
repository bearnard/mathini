import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { BracedFrame, StructureTypes, TensionCompression } from '../../../../../components/diagrams/science/SciencePictures';
import { IDMEC_STEPS } from '../../../../../components/diagrams/science/steps';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'The IDMEC design process',
    content: slide(
      <>
        <Rule>
          Technology uses the <strong>IDMEC</strong> process: Investigate, Design, Make, Evaluate, Communicate. You always start by investigating the problem.
        </Rule>
        <NumberedSteps steps={IDMEC_STEPS} tone="blue" label="The IDMEC process" />
        <Worked
          title="A school needs a shelter for bicycles"
          steps={[
            <>Investigate the problem: how many bicycles, how much space, and what it must keep out (rain, sun).</>,
            <>Design: sketch ideas and choose the best one.</>,
            <>Make a model. Then evaluate: during evaluate you check the model against the design criteria, for example &quot;keeps the rain off&quot;.</>,
          ]}
        />
        <Mistake>Starting to build before investigating. Design begins with understanding the needs, the limits and the context.</Mistake>
      </>,
    ),
  },
  {
    title: 'Frame, shell and solid structures',
    content: slide(
      <>
        <Rule>
          A <strong>frame</strong> structure is bars joined together. A <strong>shell</strong> structure is a thin outer surface that holds its shape and load. A <strong>solid</strong> structure is solid all the way through.
        </Rule>
        <StructureTypes />
        <Worked
          title="Sort three structures"
          steps={[
            <>A bicycle frame is made of joined bars: a frame structure.</>,
            <>A cooldrink can is a thin metal surface, hollow inside: a shell structure.</>,
            <>A concrete block is the same material right through: a solid structure.</>,
          ]}
        />
        <Mistake>Thinking a shell is solid. A can is a thin surface with air inside, and the surface does the work of holding the load.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tension and compression',
    content: slide(
      <>
        <Rule>
          <strong>Tension</strong> pulls and stretches a structure, like a rope pulled tight. <strong>Compression</strong> squeezes it, like the roof pressing down on a pillar.
        </Rule>
        <TensionCompression />
        <Worked
          title="Name the force"
          steps={[
            <>The chain of a swing is pulled by the seat and the bolt: tension.</>,
            <>A pillar holding up a roof is pushed down by the roof and up by the ground: compression.</>,
          ]}
        />
        <Mistake>Mixing the two up. They are opposites: tension pulls apart and stretches, compression pushes together and shortens.</Mistake>
      </>,
    ),
  },
  {
    title: 'Triangles make frames rigid',
    content: slide(
      <>
        <Rule>
          Triangles increase rigidity and reduce wobbling. A frame made of triangles keeps its shape under force, and a wide base makes a structure more stable.
        </Rule>
        <BracedFrame />
        <Worked
          title="Stop a square gate from folding"
          steps={[
            <>A square frame can fold sideways into a slanted shape when pushed.</>,
            <>Add a diagonal brace from one corner to the opposite corner.</>,
            <>The brace splits the square into two triangles, and a triangle cannot change shape without bending a bar.</>,
          ]}
        />
        <Mistake>Thinking a thicker bar fixes wobble. A brace that makes triangles works better than only making the bars thicker.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which IDMEC stage comes before you design anything?</li>
            <li>Which IDMEC stage is for testing the finished product against the brief?</li>
            <li>Name the force on a rope pulled tight, and the force on a pillar that carries a roof.</li>
            <li>What makes a triangle a good shape for a bridge truss?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Investigate the problem.</li>
            <li>The evaluate stage.</li>
            <li>Tension (the rope). Compression (the pillar).</li>
            <li>They increase rigidity and reduce wobbling.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is usually the first step in the IDMEC process?',
    options: ['Investigate the problem', 'Evaluate the final product', 'Communicate the final report', 'Paint the model'],
    answer: 'Investigate the problem',
    explanation: 'Design begins with understanding needs, limits, and context.',
  },
  {
    prompt: 'A force that squeezes a structure is called...',
    options: ['compression', 'tension', 'friction', 'rotation'],
    answer: 'compression',
    explanation: 'Compression pushes inward and can shorten or crush materials.',
  },
  {
    prompt: 'A force that pulls and stretches a structure is called...',
    options: ['tension', 'compression', 'gravity', 'magnetism'],
    answer: 'tension',
    explanation: 'Tension pulls materials apart along their length.',
  },
  {
    prompt: 'Which is a common example of a shell structure?',
    options: ['A cooldrink can', 'A ladder frame', 'A concrete block', 'A bridge truss only'],
    answer: 'A cooldrink can',
    explanation: 'Shell structures are thin outer surfaces that hold shape and load.',
  },
  {
    prompt: 'Why are triangles used in many frame structures?',
    options: ['They increase rigidity and reduce wobbling', 'They make all materials waterproof', 'They remove all compression forces', 'They stop metal from rusting'],
    answer: 'They increase rigidity and reduce wobbling',
    explanation: 'Triangles are stable and resist shape change under force.',
  },
  {
    prompt: 'In IDMEC, when do you check if your design met the criteria?',
    options: ['During evaluate', 'During investigate only', 'During make only', 'After discarding all evidence'],
    answer: 'During evaluate',
    explanation: 'Evaluation compares the product with design criteria and constraints.',
  },
];

const DesignProcessAndStructures = () => (
  <CapsSubjectTopic
    title="Design Process and Structures"
    subtitle="IDMEC, forces, and stability in engineered solutions"
    learnSteps={learnSteps}
    task="gr7-design-process-and-structures-t1"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default DesignProcessAndStructures;
