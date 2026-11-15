import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { BracedFrame, StructureTypes, TensionCompression } from '../../../../../components/diagrams/science/SciencePictures';
import { LoadsBridge } from '../../../../../components/diagrams/science/SciencePictures5';
import { IDMEC_STEPS } from '../../../../../components/diagrams/science/steps';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'The design brief and IDMEC',
    content: slide(
      <>
        <Rule>
          Technology design starts with a <strong>brief</strong>: a short statement of the problem to solve. In IDMEC, the &quot;I&quot; stands for Investigate, which starts with the problem and its context.
        </Rule>
        <NumberedSteps steps={IDMEC_STEPS} tone="blue" label="The IDMEC process" />
        <Worked
          title="A brief for a footbridge"
          steps={[
            <>The brief: learners need a safe way to cross a stream next to the school.</>,
            <>Investigate: how wide is the stream, how many learners will cross, and what materials can we use?</>,
            <>Only then design, make, evaluate and communicate.</>,
          ]}
        />
        <Mistake>Starting to draw a solution before investigating. The brief and the investigation tell you what the solution must do.</Mistake>
      </>,
    ),
  },
  {
    title: 'Shell, frame and solid structures',
    content: slide(
      <>
        <Rule>
          A frame structure uses joined members to form a strong skeleton. A shell structure is a hollow outer surface that encloses a space. A solid structure is solid all through.
        </Rule>
        <StructureTypes />
        <Worked
          title="Spot the frame structure"
          steps={[<>A cellphone tower is made of joined bars: a frame structure.</>, <>A cooldrink can or an egg is a thin skin that encloses a space: a shell structure.</>, <>A concrete block is solid all through: a solid structure.</>]}
        />
        <Mistake>Calling anything hollow a shell. A shell gets its strength from its curved or folded skin. A frame is hollow because it is made of bars with gaps between them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tension and compression',
    content: slide(
      <>
        <Rule>
          Compression usually pushes materials together. Tension usually pulls materials apart.
        </Rule>
        <TensionCompression />
        <Worked
          title="Name the force in each part"
          steps={[<>The cables of a suspension bridge are stretched: tension.</>, <>The tower legs and pillars are squeezed by the weight above: compression.</>]}
        />
        <Mistake>Thinking a part is only ever in one kind of force. A beam bent by a load is squeezed on one side and stretched on the other.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dead loads and live loads',
    content: slide(
      <>
        <Rule>
          A <strong>dead load</strong> is the permanent weight of the structure itself. A <strong>live load</strong> changes, such as people, furniture or vehicles.
        </Rule>
        <LoadsBridge />
        <Worked
          title="Sort the loads on a footbridge"
          steps={[<>The weight of the beams and the deck is a dead load: it stays constant.</>, <>Learners walking on the footbridge are a live load: the number and position change.</>, <>The structure must carry both the dead load and the largest live load.</>]}
        />
        <Mistake>Thinking a dead load means something that has stopped working. It simply means a load that does not change.</Mistake>
      </>,
    ),
  },
  {
    title: 'Triangles and rigidity',
    content: slide(
      <>
        <Rule>Triangles are used in frame structures because they improve rigidity and reduce shape distortion.</Rule>
        <BracedFrame />
        <Worked
          title="Brace a frame"
          steps={[<>A square frame can be pushed into a slanted shape.</>, <>A diagonal brace splits it into two triangles.</>, <>This triangulation limits unwanted movement and strengthens the frame.</>]}
        />
        <Mistake>Thinking a thicker bar fixes a wobbly frame. Triangulation does more than thicker bars.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Is a cellphone tower a frame or a shell structure? How would you describe a shell structure?</li>
            <li>What does compression usually do to materials? And tension?</li>
            <li>What kind of load is the weight of a footbridge’s own beams? What kind of load is learners walking across it?</li>
            <li>What does the first letter of IDMEC stand for? What makes triangles so useful in a frame?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A frame structure. A hollow outer surface that encloses a space.</li>
            <li>Pushes them together. Pulls them apart.</li>
            <li>A dead load: the permanent weight of the structure itself. A live load.</li>
            <li>Investigate. They improve rigidity and reduce shape distortion.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which is mainly a frame structure?',
    options: ['Cellphone tower', 'Tin can', 'Concrete block', 'Brick wall'],
    answer: 'Cellphone tower',
    explanation: 'A frame structure uses joined members to form a strong skeleton.',
  },
  {
    prompt: 'A shell structure is best described as...',
    options: ['A hollow outer surface that encloses a space', 'A solid block with no hollow inside', 'A circuit part that is used for safety', 'A part that rotates inside a machine'],
    answer: 'A hollow outer surface that encloses a space',
    explanation: 'Shell structures gain strength from their curved or folded skin.',
  },
  {
    prompt: 'Compression force usually pushes materials...',
    options: ['Together', 'Apart', 'Sideways only', 'In circles'],
    answer: 'Together',
    explanation: 'Compression squeezes materials inward.',
  },
  {
    prompt: 'Tension force usually pulls materials...',
    options: ['Apart', 'Together', 'Downward only', 'Into a liquid'],
    answer: 'Apart',
    explanation: 'Tension stretches materials as forces pull away from each other.',
  },
  {
    prompt: 'What is a dead load?',
    options: [
      'The permanent weight of the structure itself',
      'People moving through the structure',
      'Temporary wind pressure only',
      'Electric current in a wire',
    ],
    answer: 'The permanent weight of the structure itself',
    explanation: 'Dead loads stay constant, like beams and roofing materials.',
  },
  {
    prompt: 'Which example is a live load?',
    options: ['Learners walking on a footbridge', 'The steel beams in the bridge', 'The concrete in the foundation', 'The fixed roof truss'],
    answer: 'Learners walking on a footbridge',
    explanation: 'Live loads change, such as people, furniture, or vehicles.',
  },
  {
    prompt: 'In IDMEC, what does "I" stand for?',
    options: ['Investigate', 'Illustrate', 'Insulate', 'Integrate'],
    answer: 'Investigate',
    explanation: 'IDMEC starts with investigating the problem and context.',
  },
  {
    prompt: 'Why are triangles used in frame structures?',
    options: [
      'They improve rigidity and reduce shape distortion',
      'They conduct electricity better',
      'They always reduce material cost to zero',
      'They remove all compression forces',
    ],
    answer: 'They improve rigidity and reduce shape distortion',
    explanation: 'Triangulation strengthens frames by limiting unwanted movement.',
  },
];

const StructuresAndDesignBrief = () => (
  <CapsSubjectTopic
    title="Structures and Design Brief"
    subtitle="Structure types, forces, loads, and IDMEC design thinking"
    learnSteps={learnSteps}
    task="gr8-structures-and-design-brief-t1"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default StructuresAndDesignBrief;
