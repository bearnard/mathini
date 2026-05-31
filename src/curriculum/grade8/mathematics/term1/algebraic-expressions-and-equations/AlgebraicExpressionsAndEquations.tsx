import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Simplify expressions and solve equations',
    image: {
      src: '/curriculum/grade8/math/term1/algebraic-expressions-and-equations/diagram.webp',
      alt: 'Grade 8 learners simplifying expressions and solving linear equations',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Algebra links number relationships to symbols. Learners combine like terms, expand brackets, substitute
          values, and solve linear equations with logical steps.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Simplify 3x + 2x.',
    options: ['5x', '6x', '5x²', 'x'],
    answer: '5x',
    explanation: 'Like terms add: 3x + 2x = 5x.',
  },
  {
    prompt: 'Expand 4(a + 2).',
    options: ['4a + 8', '4a + 2', 'a + 8', '8a + 2'],
    answer: '4a + 8',
    explanation: 'Multiply 4 by each term in the bracket.',
  },
  {
    prompt: 'If x = 3, what is 2x + 5?',
    options: ['11', '10', '8', '13'],
    answer: '11',
    explanation: 'Substitute x = 3: 2(3) + 5 = 11.',
  },
  {
    prompt: 'Solve x + 7 = 15.',
    options: ['8', '22', '7', '6'],
    answer: '8',
    explanation: 'Subtract 7 from both sides.',
  },
  {
    prompt: 'Solve 3x = 21.',
    options: ['7', '18', '24', '6'],
    answer: '7',
    explanation: 'Divide both sides by 3.',
  },
  {
    prompt: 'Solve 2x - 4 = 10.',
    options: ['7', '3', '14', '6'],
    answer: '7',
    explanation: 'Add 4 then divide by 2.',
  },
  {
    prompt: 'Simplify 6y - 2 + y.',
    options: ['7y - 2', '7y + 2', '6y - 2y', '12y - 2'],
    answer: '7y - 2',
    explanation: 'Combine like terms 6y and y.',
  },
  {
    prompt: 'Which expression means “a number n increased by 9”?',
    options: ['n + 9', '9 - n', '9n', 'n - 9'],
    answer: 'n + 9',
    explanation: '“Increased by” means add.',
  },
];

const AlgebraicExpressionsAndEquations = () => (
  <CapsSubjectTopic
    title="Algebraic Expressions and Equations"
    subtitle="Like terms, substitution, expansion, and linear equation solving"
    learnSteps={learnSteps}
    task="gr8-algebraic-expressions-and-equations-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AlgebraicExpressionsAndEquations;
