import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Plotting on the Cartesian Plane',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Plot points accurately using coordinates and understand the x- and y-axes.
        </p>
      </div>
    ),
  },
  {
    title: 'Reading and Interpreting Graphs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Extract information from graphs, identify trends, and describe graph features informally.
        </p>
      </div>
    ),
  },
  {
    title: 'Connecting Formulae to Graphs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Link equations to their graphical representations and analyse slope and intercepts.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'What are the coordinates of a point 3 units right and 2 units up from the origin?',
    options: ['(2, 3)', '(3, 2)', '(-3, -2)', '(3, -2)'],
    answer: '(3, 2)',
    explanation: 'Right means positive x-value, up means positive y-value, so (3, 2).',
  },
  {
    prompt: 'Which point lies on the line y = 2x + 1?',
    options: ['(1, 2)', '(2, 5)', '(3, 5)', '(1, 3)'],
    answer: '(2, 5)',
    explanation: 'When x = 2: y = 2(2) + 1 = 5, so (2, 5) is on the line.',
  },
  {
    prompt: 'What is the x-intercept of the line y = x - 3?',
    options: ['3', '-3', '1', 'undefined'],
    answer: '3',
    explanation: 'The x-intercept occurs when y = 0: 0 = x - 3, so x = 3.',
  },
  {
    prompt: 'The slope of a line passing through (1, 2) and (3, 6) is:',
    options: ['1', '2', '3', '4'],
    answer: '2',
    explanation: 'Slope = (6 - 2)/(3 - 1) = 4/2 = 2.',
  },
  {
    prompt: 'A horizontal line has a slope of:',
    options: ['Positive', 'Negative', 'Zero', 'Undefined'],
    answer: 'Zero',
    explanation: 'Horizontal lines have no vertical change, so the slope is 0.',
  },
  {
    prompt: 'What is the y-intercept of y = -2x + 4?',
    options: ['-2', '2', '4', '-4'],
    answer: '4',
    explanation: 'The y-intercept is where x = 0: y = -2(0) + 4 = 4.',
  },
  {
    prompt: 'Which describes a parabola (quadratic graph)?',
    options: ['Straight line', 'U-shaped or inverted U', 'Circle', 'Hyperbola'],
    answer: 'U-shaped or inverted U',
    explanation: 'Quadratic functions create parabolas, either opening upward or downward.',
  },
  {
    prompt: 'If two points on a line are (2, 1) and (4, 5), the slope is:',
    options: ['0.5', '1', '2', '4'],
    answer: '2',
    explanation: 'Slope = (5 - 1)/(4 - 2) = 4/2 = 2.',
  },
];

const Graphs = () => (
  <CapsSubjectTopic
    title="Graphs"
    subtitle="Drawing and interpreting linear and non-linear graphs"
    learnSteps={learnSteps}
    task="gr9-graphs-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Graphs;
