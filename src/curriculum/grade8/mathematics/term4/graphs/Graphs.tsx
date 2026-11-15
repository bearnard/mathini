import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CoordGrid, ThreeTrends } from '../../../../../components/diagrams/maths/Grade8Space';
import { pt, quadrant } from '../../../../../components/diagrams/maths/grade8SpaceHelpers';

// Every number in the slides below comes from these tested helpers (grade8SpaceHelpers) and
// lessonsMaths7.test.ts checks that the rendered slides show them.
const Q = ['on an axis', 'Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'];
const p1: [number, number] = [-2, 3];
const p2: [number, number] = [0, 5];
const p3: [number, number] = [4, 0];
const swapped: [number, number] = [3, -2]; // the mistake: y first
const table = [0, 1, 2, 3].map((x) => [x, 2 * x] as [number, number]);
const trip: [number, number][] = [[0, 0], [10, 6], [15, 6], [30, 0]];

// "Check yourself", answers computed from the same helpers
const c1 = quadrant(3, -4);
const c2 = quadrant(-5, -1);
const c3 = [1, 2, 3].map((x) => 3 * x + 1);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Plotting points and the four quadrants',
    content: slide(
      <>
        <Rule>Every ordered pair (x; y) names a point: the x-coordinate says how far across to go and the y-coordinate how far up or down. The axes cut the plane into four quadrants.</Rule>
        <CoordGrid
          x={[-5, 5]}
          y={[-4, 6]}
          quadrants
          points={[{ p: p1, color: '#818cf8', label: pt(...p1), at: 'nw' }, { p: p2, color: '#34d399', label: pt(...p2) }, { p: p3, color: '#fbbf24', label: pt(...p3), at: 'ne' }]}
          aria={`A coordinate grid with the quadrants I to IV marked. ${pt(...p1)} is in Quadrant II, ${pt(...p2)} lies on the y-axis and ${pt(...p3)} lies on the x-axis.`}
        />
        <Worked
          steps={[
            <>{pt(...p1)}: 2 left, then 3 up. x is negative and y is positive: <strong>{Q[quadrant(...p1)]}</strong>.</>,
            <>{pt(...p2)}: x = 0, so you do not move across. It lies <strong>on the y-axis</strong>.</>,
            <>{pt(...p3)}: y = 0, so it lies <strong>on the x-axis</strong>. Every point on the x-axis has y = 0.</>,
          ]}
        />
        <Mistake>Plotting y first. {pt(...p1)} and {pt(...swapped)} are different points: the second is in {Q[quadrant(...swapped)]}. Go across first, then up or down.</Mistake>
      </>,
    ),
  },
  {
    title: 'Drawing a graph from a table',
    content: slide(
      <>
        <Rule>Each column of a table gives one ordered pair (x; y). Plot the points; if they lie in a straight line, join them with a ruler.</Rule>
        <CoordGrid
          x={[0, 4]}
          y={[0, 8]}
          lines={[{ m: 2, c: 0, color: '#818cf8' }]}
          points={table.map((p) => ({ p, color: '#818cf8', label: p[0] === 0 ? undefined : pt(...p), at: 'se' as const }))}
          aria={`The points ${table.map((p) => pt(...p)).join(', ')} plotted and joined by a straight line through the origin: y = 2x.`}
        />
        <Worked
          title="x: 0, 1, 2, 3 and y: 0, 2, 4, 6"
          steps={[
            <>The pairs are {table.map((p) => pt(...p)).join(', ')}.</>,
            <>Each y is 2 times its x, so the rule is <strong>y = 2x</strong>.</>,
            <>The points lie on a straight line through the origin (0; 0).</>,
          ]}
        />
        <Mistake>Choosing y = x + 2 because the first step is +2. Test (1; 2): 1 + 2 = 3, not 2. Only y = 2x fits every pair.</Mistake>
      </>,
    ),
  },
  {
    title: 'Increasing, decreasing and constant graphs',
    content: slide(
      <>
        <Rule>Read a graph from left to right. If it rises, y increases as x increases (a positive gradient). If it falls, y decreases. A horizontal line is constant.</Rule>
        <ThreeTrends />
        <Worked
          steps={[
            <>y = 2x + 1: x = 0, 1, 2 gives y = {[0, 1, 2].map((x) => 2 * x + 1).join(', ')}. y increases, so the line <strong>rises</strong>.</>,
            <>y = 6 − x: x = 0, 1, 2 gives y = {[0, 1, 2].map((x) => 6 - x).join(', ')}. As x increases, y <strong>decreases</strong>.</>,
            <>y = 3: y is 3 for every x, a <strong>horizontal line</strong> (constant).</>,
          ]}
        />
        <Mistake>Reading a graph from right to left. A line that falls from left to right is decreasing, even though it goes up when you read it backwards.</Mistake>
      </>,
    ),
  },
  {
    title: 'Interpreting a graph of a trip',
    content: slide(
      <>
        <Rule>Describe each part of a graph in words: where it increases, stays constant and decreases, and what that means in the situation.</Rule>
        <CoordGrid
          x={[0, 30]}
          y={[0, 6]}
          square={false}
          xEvery={5}
          yEvery={2}
          axisNames={['min', 'km']}
          shapes={[{ pts: trip, color: '#fbbf24', closed: false }]}
          points={[{ p: [5, 3], color: '#34d399', label: 'A', at: 'nw' }, { p: [12.5, 6], color: '#818cf8', label: 'B', at: 'ne' }, { p: [22.5, 3], color: '#fb7185', label: 'C', at: 'ne' }]}
          aria={`A graph of distance from home in kilometres against time in minutes. A: from 0 to ${trip[1][0]} minutes the distance rises to ${trip[1][1]} km. B: from ${trip[1][0]} to ${trip[2][0]} minutes it stays ${trip[2][1]} km. C: from ${trip[2][0]} to ${trip[3][0]} minutes it falls back to 0.`}
        />
        <Worked
          title="Sipho cycles to a shop and back (distance from home)"
          steps={[
            <>A, 0 to {trip[1][0]} min: increasing. He rides {trip[1][1]} km away from home.</>,
            <>B, {trip[1][0]} to {trip[2][0]} min: constant. He is {trip[2][1]} km from home for {trip[2][0] - trip[1][0]} minutes: he is in the shop.</>,
            <>C, {trip[2][0]} to {trip[3][0]} min: decreasing. He rides home; the trip back takes {trip[3][0] - trip[2][0]} minutes.</>,
          ]}
        />
        <Mistake>Thinking the flat part B means he rides along a flat road. On a distance-from-home graph, a horizontal part means the distance is not changing: he has stopped.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>In which quadrants are {pt(3, -4)} and {pt(-5, -1)}?</>,
          <>Where does every point with x = 0 lie?</>,
          <>Find y for x = 1, 2, 3 if y = 3x + 1. Is the graph increasing or decreasing?</>,
        ]}
        answers={[
          <>{pt(3, -4)}: {Q[c1]}. {pt(-5, -1)}: {Q[c2]}.</>,
          <>On the y-axis.</>,
          <>y = {c3.join(', ')}. y increases as x increases, so the graph is increasing.</>,
        ]}
      />,
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
