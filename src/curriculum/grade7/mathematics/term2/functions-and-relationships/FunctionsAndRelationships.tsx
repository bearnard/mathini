import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Describe rules in functions and relationships',
    image: {
      src: '/curriculum/grade7/math/term2/functions-and-relationships/diagram.webp',
      alt: 'Grade 7 learners using input-output tables and flow diagrams to identify function rules',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Functions and relationships connect inputs to outputs through rules. Learners move between tables, flow
          diagrams, and number sentences to find missing values.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'If the rule is y = 2x + 1, what is y when x = 4?',
    options: ['9', '8', '7', '10'],
    answer: '9',
    explanation: 'Substitute x = 4: y = 2(4) + 1 = 9.',
  },
  {
    prompt: 'For the rule “add 5”, what is the inverse operation?',
    options: ['subtract 5', 'multiply by 5', 'add 10', 'divide by 5'],
    answer: 'subtract 5',
    explanation: 'Inverse operations undo each other.',
  },
  {
    prompt: 'x: 1, 2, 3 and y: 4, 7, 10 follow which rule?',
    options: ['y = 3x + 1', 'y = x + 3', 'y = 2x + 2', 'y = x² + 3'],
    answer: 'y = 3x + 1',
    explanation: 'Each output is three times x plus 1.',
  },
  {
    prompt: 'If y = x − 2, what is y when x = 9?',
    options: ['7', '11', '18', '−7'],
    answer: '7',
    explanation: '9 − 2 = 7.',
  },
  {
    prompt: 'If y = 4x and y = 20, what is x?',
    options: ['5', '4', '16', '80'],
    answer: '5',
    explanation: '20 ÷ 4 = 5.',
  },
  {
    prompt: 'A flow diagram says “×2, then +3”. What is the output for input 6?',
    options: ['15', '12', '9', '18'],
    answer: '15',
    explanation: '6 × 2 = 12, then 12 + 3 = 15.',
  },
  {
    prompt: 'In a function table, each input should have...',
    options: ['one output', 'two outputs', 'no output', 'many unrelated outputs'],
    answer: 'one output',
    explanation: 'A function links each input to exactly one output.',
  },
  {
    prompt: 'If x increases by 1 and y increases by 2 each time, which rule can fit?',
    options: ['y = 2x + c', 'y = x²', 'y = x ÷ 2', 'y = 10 − x'],
    answer: 'y = 2x + c',
    explanation: 'A constant increase of 2 in y suggests a linear rule with slope 2.',
  },
];

const FunctionsAndRelationships = () => (
  <CapsSubjectTopic
    title="Functions and Relationships"
    subtitle="Input-output rules, tables, and inverse thinking"
    learnSteps={learnSteps}
    task="gr7-functions-and-relationships-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default FunctionsAndRelationships;
