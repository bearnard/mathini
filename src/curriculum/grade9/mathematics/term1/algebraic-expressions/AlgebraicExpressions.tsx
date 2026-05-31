import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Simplifying Algebraic Expressions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Combine like terms, apply the distributive property, and factor simple expressions.
        </p>
      </div>
    ),
  },
  {
    title: 'Solving Linear Equations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use inverse operations to solve multi-step equations and verify solutions by substitution.
        </p>
      </div>
    ),
  },
  {
    title: 'Algebraic Problem Solving',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Translate word problems into equations and solve contextual problems with algebraic reasoning.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'Simplify: 3x + 5x - 2',
    options: ['8x - 2', '8x + 3', '6x - 2', '5x + 3'],
    answer: '8x - 2',
    explanation: 'Combine like terms: 3x + 5x = 8x, so the expression is 8x - 2.',
  },
  {
    prompt: 'Solve: x + 7 = 12',
    options: ['x = 5', 'x = 19', 'x = -5', 'x = 12'],
    answer: 'x = 5',
    explanation: 'Subtract 7 from both sides: x = 12 - 7 = 5.',
  },
  {
    prompt: 'Expand: 2(x + 3)',
    options: ['2x + 3', '2x + 6', 'x + 6', '2x + 5'],
    answer: '2x + 6',
    explanation: 'Using the distributive property: 2(x + 3) = 2x + 6.',
  },
  {
    prompt: 'Solve: 2x - 5 = 9',
    options: ['x = 2', 'x = 7', 'x = 14', 'x = 4'],
    answer: 'x = 7',
    explanation: 'Add 5 to both sides: 2x = 14. Divide by 2: x = 7.',
  },
  {
    prompt: 'Factor: 3x + 6',
    options: ['3(x + 2)', '3(x + 3)', 'x + 2', '3x + 2'],
    answer: '3(x + 2)',
    explanation: 'The common factor of 3x and 6 is 3: 3x + 6 = 3(x + 2).',
  },
  {
    prompt: 'Simplify: 2x + 3y - x + 2y',
    options: ['x + 5y', '3x + 5y', 'x + y', '2x + 5y'],
    answer: 'x + 5y',
    explanation: 'Combine like terms: 2x - x = x, and 3y + 2y = 5y, giving x + 5y.',
  },
  {
    prompt: 'A number increased by 8 equals 15. What is the number?',
    options: ['7', '23', '8', '-7'],
    answer: '7',
    explanation: 'Let x be the number: x + 8 = 15, so x = 7.',
  },
  {
    prompt: 'Solve: 3(x - 2) = 9',
    options: ['x = 1', 'x = 3', 'x = 5', 'x = 6'],
    answer: 'x = 5',
    explanation: 'Divide by 3: x - 2 = 3. Add 2: x = 5.',
  },
];

const AlgebraicExpressions = () => (
  <CapsSubjectTopic
    title="Algebraic Expressions and Equations"
    subtitle="Simplifying, factorising and solving equations"
    learnSteps={learnSteps}
    task="gr9-algebraic-expressions-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AlgebraicExpressions;
