import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { A, E, R } from '../../../../../components/diagrams/maths/Grade7Pictures';
import { CoordGrid, TrendGraph } from '../../../../../components/diagrams/maths/Grade7Functions';
import { axisPlace, evalLinear, linearRule, ruleFormula, trends } from '../../../../../components/diagrams/maths/grade7Helpers2';

// Every number in the slides below comes from tested helpers (grade7Helpers2.test.ts, lessons2.test.ts).
const tableX = [1, 2, 3];
const tableY = [2, 4, 6];
const found = linearRule(tableX, tableY) ?? { m: 0, c: 0 };
const walk: [number, number][] = [[0, 0], [10, 800], [15, 800], [25, 0]];
const walkTrend = trends(walk);
const place = { a: axisPlace(5, 0), b: axisPlace(0, 4) };
const check = { y: evalLinear(3, 0, 4), on: axisPlace(0, 6) };
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Ordered pairs: x first, then y',
    content: slide(
      <>
        <Rule>An ordered pair (x, y) gives a point. Start at the origin (0, 0). Go right x units along the x-axis, then up y units.</Rule>
        <CoordGrid
          max={5}
          points={[{ x: 3, y: 2, label: 'A(3, 2)', walk: true }, { x: 2, y: 3, label: 'B(2, 3)', color: R }]}
          aria="A grid with x and y from 0 to 5. A dashed path goes from the origin 3 units right and 2 units up to point A at (3, 2). Point B at (2, 3) is a different point."
        />
        <Worked
          title="Plot A(3, 2)"
          steps={[
            <>The first number is the x-coordinate: <strong>3</strong>. Go 3 right.</>,
            <>The second number is the y-coordinate: <strong>2</strong>. Go 2 up and mark A.</>,
          ]}
        />
        <Mistake>Swapping the numbers. (2, 3) is point B, 2 right and 3 up: a different place. Remember: along the corridor, then up the stairs.</Mistake>
      </>,
    ),
  },
  {
    title: 'Points on the axes',
    content: slide(
      <>
        <Rule>Moving right makes x bigger, moving up makes y bigger. Along the x-axis the height is zero, so y = 0. Along the y-axis the sideways distance is zero, so x = 0.</Rule>
        <CoordGrid
          max={5}
          axisGlow="both"
          points={[{ x: 5, y: 0, label: '(5, 0)', color: A }, { x: 0, y: 4, label: '(0, 4)', color: E }]}
          aria="A grid with x and y from 0 to 5. The point (5, 0) lies on the x-axis because it goes 0 up. The point (0, 4) lies on the y-axis because it goes 0 right."
        />
        <Worked
          title="Where are (5, 0) and (0, 4)?"
          steps={[
            <>(5, 0): 5 right and 0 up, so it lies on the <strong>{place.a}</strong>.</>,
            <>(0, 4): 0 right and 4 up, so it lies on the <strong>{place.b}</strong>.</>,
          ]}
        />
        <Mistake>Putting (0, 4) on the x-axis because it has a 0. The 0 is the x-coordinate, so you do not move right at all: you stay on the y-axis.</Mistake>
      </>,
    ),
  },
  {
    title: 'From a table to a graph',
    content: slide(
      <>
        <Rule>Each column of a table is one ordered pair. The input x (the independent variable) goes on the horizontal axis. Both axes need equal steps between markings.</Rule>
        <CoordGrid
          max={6}
          line={found}
          points={tableX.map((x, i) => ({ x, y: tableY[i], label: `(${x}, ${tableY[i]})` }))}
          aria={`A grid with x and y from 0 to 6. The points ${tableX.map((x, i) => `(${x}, ${tableY[i]})`).join(', ')} lie on one straight line through the origin: the graph of ${ruleFormula(found.m, found.c)}.`}
        />
        <Worked
          title="x: 1, 2, 3 and y: 2, 4, 6"
          steps={[
            <>Pairs: {tableX.map((x, i) => `(${x}, ${tableY[i]})`).join(', ')}. Plot each one.</>,
            <>Each y is twice x, so the rule is <strong>{ruleFormula(found.m, found.c)}</strong>. The points lie on a straight line.</>,
          ]}
        />
        <Mistake>Uneven scales, such as 0, 1, 2, 5, 10 spaced equally. The graph then bends and gives wrong readings. Every step on an axis must be the same.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reading a graph over time',
    content: slide(
      <>
        <Rule>A line graph shows change over time, with time on the horizontal axis. Going up is increasing, flat is constant, going down is decreasing.</Rule>
        <TrendGraph
          pts={walk}
          xUnit="time (minutes)"
          yUnit="distance from home (m)"
          xTicks={[0, 10, 15, 25]}
          yTicks={[0, 800]}
          aria={`A line graph of Lindiwe's distance from home. From 0 to 10 minutes it is ${walkTrend[0]} to 800 metres, from 10 to 15 minutes it is ${walkTrend[1]} at 800 metres, and from 15 to 25 minutes it is ${walkTrend[2]} back to 0.`}
        />
        <Worked
          title="Lindiwe walks to the shop and back"
          steps={[
            <>0 to 10 minutes: {walkTrend[0]}. She walks 800 m away from home.</>,
            <>10 to 15 minutes: {walkTrend[1]}. She stays at the shop for 15 − 10 = <strong>{15 - 10} minutes</strong>.</>,
            <>15 to 25 minutes: {walkTrend[2]}. She walks back home.</>,
          ]}
        />
        <Mistake>Reading a flat part as “nothing there”. Flat means the distance stays the same (800 m), not that it is zero.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>In the point (4, 1), what is the y-coordinate?</li>
            <li>On which axis does (0, 6) lie?</li>
            <li>The rule is y = 3x. Which ordered pair belongs on the graph for x = 4?</li>
            <li>Which kind of graph shows how a temperature changes during a day?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>1, the second number.</li>
            <li>The {check.on}, because x = 0.</li>
            <li>y = 3 × 4 = {check.y}, so (4, {check.y}).</li>
            <li>A line graph, because it shows change over time.</li>
          </ol>
        }
      />,
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
    options: ['(5; 0)', '(0; 5)', '(5; 5)', '(0; 0,5)'],
    answer: '(5; 0)',
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
