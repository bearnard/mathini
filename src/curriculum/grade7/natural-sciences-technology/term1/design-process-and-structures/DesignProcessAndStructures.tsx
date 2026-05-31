import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use IDMEC to design stronger structures',
    image: {
      src: '/curriculum/grade7/nst/term1/design-process-and-structures/diagram.webp',
      alt: 'Grade 7 learners applying the design process and testing frame, shell, and solid structures',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Technology tasks use the <strong>IDMEC</strong> process: investigate, design, make, evaluate, and
          communicate. Learners compare <strong>frame, shell,</strong> and <strong>solid structures</strong> and
          explain how <strong>tension</strong> and <strong>compression</strong> affect stability.
        </p>
      </div>
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
