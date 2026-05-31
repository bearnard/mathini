import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Solve linear equations step by step',
    image: {
      src: '/curriculum/grade8/math/term2/algebraic-equations/diagram.webp',
      alt: 'Grade 8 learners balancing and solving algebraic equations',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Equation solving is about balance. Learners isolate the variable using inverse operations and verify answers
          by substitution to check correctness.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Solve x - 9 = 4.',
    options: ['13', '5', '-13', '36'],
    answer: '13',
    explanation: 'Add 9 to both sides.',
  },
  {
    prompt: 'Solve 2x = 18.',
    options: ['9', '16', '8', '36'],
    answer: '9',
    explanation: 'Divide both sides by 2.',
  },
  {
    prompt: 'Solve x/3 = 5.',
    options: ['15', '8', '2', '5/3'],
    answer: '15',
    explanation: 'Multiply both sides by 3.',
  },
  {
    prompt: 'Solve 4x + 2 = 18.',
    options: ['4', '5', '3', '16'],
    answer: '4',
    explanation: 'Subtract 2, then divide by 4.',
  },
  {
    prompt: 'Solve 5 - 2x = -7.',
    options: ['6', '-6', '1', '12'],
    answer: '6',
    explanation: 'Subtract 5: -2x = -12, then divide by -2.',
  },
  {
    prompt: 'Solve 3(x - 1) = 12.',
    options: ['5', '4', '3', '15'],
    answer: '5',
    explanation: 'Divide by 3 to get x - 1 = 4, then add 1.',
  },
  {
    prompt: 'Solve 2x + 7 = x + 15.',
    options: ['8', '22', '7', '15'],
    answer: '8',
    explanation: 'Subtract x from both sides and then subtract 7.',
  },
  {
    prompt: 'Is x = 4 a solution to 3x + 1 = 13?',
    options: ['Yes', 'No', 'Only for x = -4', 'Cannot be determined'],
    answer: 'Yes',
    explanation: 'Substitute x = 4: 3(4) + 1 = 13.',
  },
];

const AlgebraicEquations = () => (
  <CapsSubjectTopic
    title="Algebraic Equations"
    subtitle="Balancing equations, inverse operations, and substitution checks"
    learnSteps={learnSteps}
    task="gr8-algebraic-equations-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AlgebraicEquations;
