import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Multiple Representations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Connect tables, formulae, and graphs to understand relationships between variables.
        </p>
      </div>
    ),
  },
  {
    title: 'Interpreting Trends',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Explain patterns in data and describe how changes in one variable affect another.
        </p>
      </div>
    ),
  },
  {
    title: 'Context and Communication',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Interpret relationships in real-world contexts and communicate findings clearly.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'If y = 2x + 1, what is y when x = 4?',
    options: ['8', '9', '10', '11'],
    answer: '9',
    explanation: 'y = 2(4) + 1 = 8 + 1 = 9.',
  },
  {
    prompt: 'Which description matches the relationship y = 5x?',
    options: ['y increases by 5 for each increase of 1 in x', 'y stays constant', 'y decreases', 'y is always 5'],
    answer: 'y increases by 5 for each increase of 1 in x',
    explanation: 'The coefficient 5 means y changes 5 times as much as x.',
  },
  {
    prompt: 'Given a table with x: 1, 2, 3 and y: 3, 5, 7, what is the formula?',
    options: ['y = x + 2', 'y = 2x + 1', 'y = x + 3', 'y = 3x'],
    answer: 'y = 2x + 1',
    explanation: 'Checking: x=1, y=3: 2(1)+1=3 ✓; x=2, y=5: 2(2)+1=5 ✓; x=3, y=7: 2(3)+1=7 ✓.',
  },
  {
    prompt: 'What does the y-intercept represent in the equation y = mx + b?',
    options: ['The slope', 'Where the line crosses the y-axis', 'The maximum value', 'Where x = 0'],
    answer: 'Where the line crosses the y-axis',
    explanation: 'When x = 0, y = b, so b is the y-intercept.',
  },
  {
    prompt: 'A car travels at 60 km/h. The relationship between distance and time is:',
    options: ['d = 60t', 'd = t + 60', 'd = 60/t', 'd = 60 - t'],
    answer: 'd = 60t',
    explanation: 'Distance equals speed multiplied by time: d = 60 × t.',
  },
  {
    prompt: 'If a linear relationship has a slope of -3, what does this mean?',
    options: ['y increases by 3', 'y decreases by 3 for each increase of 1 in x', 'y stays the same', 'x decreases'],
    answer: 'y decreases by 3 for each increase of 1 in x',
    explanation: 'A negative slope indicates a decreasing relationship.',
  },
  {
    prompt: 'Which input-output pair fits y = -2x + 5?',
    options: ['(1, 3)', '(2, 1)', '(3, -1)', '(0, -2)'],
    answer: '(3, -1)',
    explanation: 'y = -2(3) + 5 = -6 + 5 = -1, so (3, -1) is correct.',
  },
  {
    prompt: 'In a proportional relationship, what always passes through the origin?',
    options: ['A curve', 'A horizontal line', 'A straight line', 'An asymptote'],
    answer: 'A straight line',
    explanation: 'Proportional relationships have the form y = mx (where b = 0), always passing through (0, 0).',
  },
];

const FunctionsRelationships = () => (
  <CapsSubjectTopic
    title="Functions and Relationships"
    subtitle="Formalising variables and using multiple representations"
    learnSteps={learnSteps}
    task="gr9-functions-relationships-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default FunctionsRelationships;
