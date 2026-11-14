import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Analyse structures and respond to a design brief',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Technology design starts with a brief and uses structure knowledge to solve a problem. You identify shell,
          frame, and solid structures, then reason about tension, compression, and different loads.
        </p>
      </div>
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
