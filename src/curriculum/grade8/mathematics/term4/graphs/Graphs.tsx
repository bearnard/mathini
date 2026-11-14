import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Plot and interpret coordinate graphs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Graphs show relationships visually. Learners plot ordered pairs, read trends, and interpret whether
          relationships are increasing, decreasing, or constant.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is true for the point (0, 5)?',
    options: ['It lies on the y-axis', 'It lies on the x-axis', 'It is in Quadrant I', 'It is the origin'],
    answer: 'It lies on the y-axis',
    explanation: 'Points with x = 0 lie on the y-axis.',
  },
  {
    prompt: 'A line with positive gradient...',
    options: ['rises from left to right', 'falls from left to right', 'is horizontal', 'is vertical'],
    answer: 'rises from left to right',
    explanation: 'Positive gradient means y increases as x increases.',
  },
  {
    prompt: 'Which rule fits x: 1, 2, 3 and y: 2, 4, 6?',
    options: ['y = 2x', 'y = x + 2', 'y = x²', 'y = 3x'],
    answer: 'y = 2x',
    explanation: 'Each output is double the input.',
  },
  {
    prompt: 'A point on the x-axis always has...',
    options: ['y = 0', 'x = 0', 'x = y', 'x = 1'],
    answer: 'y = 0',
    explanation: 'The x-axis is where y-values are zero.',
  },
  {
    prompt: 'In which quadrant is (-2, 3)?',
    options: ['Quadrant II', 'Quadrant I', 'Quadrant III', 'Quadrant IV'],
    answer: 'Quadrant II',
    explanation: 'x is negative and y is positive.',
  },
  {
    prompt: 'A constant relationship is shown by a...',
    options: ['horizontal line', 'vertical line', 'curved line only', 'line through origin only'],
    answer: 'horizontal line',
    explanation: 'If y does not change, the graph is horizontal.',
  },
  {
    prompt: 'In an ordered pair (x, y), the first number is the...',
    options: ['x-coordinate', 'y-coordinate', 'gradient', 'intercept'],
    answer: 'x-coordinate',
    explanation: 'Ordered pairs are written as (x, y).',
  },
  {
    prompt: 'If a graph decreases as x increases, then y...',
    options: ['decreases', 'increases', 'stays zero', 'is undefined'],
    answer: 'decreases',
    explanation: 'A decreasing trend means larger x gives smaller y.',
  },
];

const Graphs = () => (
  <CapsSubjectTopic
    title="Graphs"
    subtitle="Ordered pairs, plotting, and interpreting graph behaviour"
    learnSteps={learnSteps}
    task="gr8-graphs-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Graphs;
