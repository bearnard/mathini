import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Plot and interpret graphs accurately',
    image: {
      src: '/curriculum/grade7/math/term3/graphs/diagram.webp',
      alt: 'Grade 7 learners plotting ordered pairs and linking tables to coordinate graphs',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Graph work includes ordered pairs, coordinate grids, and reading relationships from points and lines. Learners
          connect function tables to graphs.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In the ordered pair (3, 2), the x-coordinate is...',
    options: ['3', '2', '5', '0'],
    answer: '3',
    explanation: 'In (x, y), the first value is x.',
  },
  {
    prompt: 'A point on the y-axis always has...',
    options: ['x = 0', 'y = 0', 'x = y', 'x = 1'],
    answer: 'x = 0',
    explanation: 'The y-axis is where x-values are zero.',
  },
  {
    prompt: 'Moving right on a coordinate plane means...',
    options: ['x increases', 'x decreases', 'y increases', 'y decreases'],
    answer: 'x increases',
    explanation: 'Horizontal movement to the right increases x.',
  },
  {
    prompt: 'Which graph is best for showing change over time?',
    options: ['Line graph', 'Pie chart', 'Venn diagram', 'Stem plot'],
    answer: 'Line graph',
    explanation: 'Line graphs show trends over intervals of time.',
  },
  {
    prompt: 'Which point lies on the x-axis?',
    options: ['(5, 0)', '(0, 5)', '(5, 5)', '(0, 0.5)'],
    answer: '(5, 0)',
    explanation: 'Points on the x-axis have y = 0.',
  },
  {
    prompt: 'If x: 1, 2, 3 and y: 2, 4, 6, the rule is...',
    options: ['y = 2x', 'y = x + 1', 'y = x²', 'y = x − 1'],
    answer: 'y = 2x',
    explanation: 'Each y-value is twice x.',
  },
  {
    prompt: 'The independent variable is usually plotted on the...',
    options: ['horizontal axis', 'vertical axis', 'top margin', 'centre point only'],
    answer: 'horizontal axis',
    explanation: 'The independent variable is conventionally on the x-axis.',
  },
  {
    prompt: 'What is important when choosing graph scale?',
    options: [
      'equal intervals between markings',
      'different intervals each time',
      'using no numbers on axes',
      'using curved axes only',
    ],
    answer: 'equal intervals between markings',
    explanation: 'Consistent scale allows accurate reading and plotting.',
  },
];

const Graphs = () => (
  <CapsSubjectTopic
    title="Graphs"
    subtitle="Ordered pairs, coordinate grids, and graph interpretation"
    learnSteps={learnSteps}
    task="gr7-graphs-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Graphs;
