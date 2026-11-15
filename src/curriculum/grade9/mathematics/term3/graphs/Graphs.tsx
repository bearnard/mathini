import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CoordPlane, GRAPH_COLORS } from '../../../../../components/diagrams/maths/Grade9Graphs';
import { fmt, gradient, intercepts, linear, point, ruleText } from '../../../../../components/diagrams/maths/grade9GeometryHelpers';

// Every number in the slides below comes from these tested helpers (grade9GeometryHelpers.test.ts, lessonsMaths9.test.ts).
const { indigo: I, green: E, amber: A, rose: R } = GRAPH_COLORS;
const sq = <sup className="text-[0.75em] font-bold">2</sup>;

// slide 2: a line from a table
const f = linear(2, 1);
const xs = [-1, 0, 1, 2];

// slide 3: intercepts
const g = { m: -2, c: 4, ...intercepts(-2, 4) };
const k = { m: 1, c: -3, ...intercepts(1, -3) };

// slide 4: gradient
const g1 = gradient({ x: 1, y: 2 }, { x: 3, y: 6 });
const g2 = gradient({ x: 2, y: 1 }, { x: 4, y: 5 });
const flat = gradient({ x: -1, y: 3 }, { x: 4, y: 3 });

// slide 5: parabola
const px = [-2, -1, 0, 1, 2];
const py = px.map((x) => x * x);

// "Check yourself"
const c1 = linear(3, -2)(4);
const c2 = intercepts(-3, 6);
const c3 = gradient({ x: 0, y: 1 }, { x: 2, y: 7 });

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Plot points on the Cartesian plane',
    content: slide(
      <>
        <Rule>A point (x, y) is found from the origin: x tells you how far to move right (+) or left (−), then y how far up (+) or down (−).</Rule>
        <CoordPlane
          x={[-4, 4]}
          y={[-3, 4]}
          points={[
            { x: 3, y: 2, color: E, label: point(3, 2) },
            { x: 2, y: 3, color: A, label: point(2, 3), side: 'left' },
            { x: -3, y: -2, color: R, label: point(-3, -2) },
          ]}
          aria="A Cartesian plane with three points: (3, 2) is 3 right and 2 up; (2, 3) is 2 right and 3 up; (−3, −2) is 3 left and 2 down."
        />
        <Worked
          steps={[
            <>{point(3, 2)}: start at the origin, move 3 right, then 2 up.</>,
            <>{point(-3, -2)}: move 3 left, then 2 down.</>,
            <>{point(2, 3)} is a different point: 2 right, 3 up.</>,
          ]}
        />
        <Mistake>Swapping the coordinates. (3, 2) is not (2, 3): the x-value always comes first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Draw a straight-line graph from a table',
    content: slide(
      <>
        <Rule>Make a table of values from the formula, plot the points and join them with a ruler. A point lies on the line only if its coordinates fit the formula.</Rule>
        <CoordPlane
          x={[-2, 4]}
          y={[-2, 8]}
          equal={false}
          lines={[{ fn: f, color: I }]}
          points={[
            ...xs.map((x) => ({ x, y: f(x), color: I })),
            { x: 2, y: f(2), color: E, label: point(2, 5), side: 'left' as const },
            { x: 3, y: 5, color: R, label: point(3, 5) },
          ]}
          aria={`The line ${ruleText(2, 1)} through the points ${xs.map((x) => point(x, f(x))).join(', ')}. The point (2, 5) is on the line; the point (3, 5) is not.`}
        />
        <Worked
          title={ruleText(2, 1)}
          steps={[
            <>x = {xs.map(fmt).join('; ')} gives y = {xs.map((x) => fmt(f(x))).join('; ')}.</>,
            <>Is {point(2, 5)} on the line? 2 × 2 + 1 = {f(2)} ✓ <strong>Yes</strong>.</>,
            <>Is {point(3, 5)} on the line? 2 × 3 + 1 = {f(3)}, not 5. <strong>No</strong>.</>,
          ]}
        />
        <Mistake>Plotting only two points. A third point checks your arithmetic: if it is not in line, one of the values is wrong.</Mistake>
      </>,
    ),
  },
  {
    title: 'Intercepts: where a graph crosses the axes',
    content: slide(
      <>
        <Rule>The y-intercept is where the line crosses the y-axis: put x = 0. The x-intercept is where it crosses the x-axis: put y = 0 and solve.</Rule>
        <CoordPlane
          x={[-2, 5]}
          y={[-4, 5]}
          equal={false}
          lines={[
            { fn: linear(g.m, g.c), color: I },
            { fn: linear(k.m, k.c), color: E },
          ]}
          points={[
            { x: 0, y: g.y, color: I, label: point(0, g.y) },
            { x: g.x, y: 0, color: I, label: point(g.x, 0) },
            { x: 0, y: k.y, color: E, label: point(0, k.y), below: true },
            { x: k.x, y: 0, color: E, label: point(k.x, 0), below: true },
          ]}
          aria={`Two lines. ${ruleText(g.m, g.c)} crosses the y-axis at ${point(0, g.y)} and the x-axis at ${point(g.x, 0)}. ${ruleText(k.m, k.c)} crosses the y-axis at ${point(0, k.y)} and the x-axis at ${point(k.x, 0)}.`}
        />
        <Worked
          steps={[
            <>{ruleText(g.m, g.c)}: x = 0 gives y = <strong>{g.y}</strong>. y = 0: 0 = −2x + 4, so 2x = 4 and x = <strong>{g.x}</strong>.</>,
            <>{ruleText(k.m, k.c)}: x = 0 gives y = <strong>{fmt(k.y)}</strong>. y = 0: 0 = x − 3, so x = <strong>{k.x}</strong>.</>,
          ]}
        />
        <Mistake>The x-intercept of y = x − 3 is not −3. That is the y-intercept. On the x-axis y = 0, so x = {k.x}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gradient: rise over run',
    content: slide(
      <>
        <Rule>The gradient (slope) measures steepness: gradient = rise ÷ run = change in y ÷ change in x. Upward lines have a positive gradient; a horizontal line has gradient 0.</Rule>
        <CoordPlane
          x={[0, 5]}
          y={[0, 7]}
          lines={[{ fn: linear(g1.m, 0), color: I }]}
          points={[
            { x: 1, y: 2, color: A, label: point(1, 2) },
            { x: 3, y: 6, color: A, label: point(3, 6), side: 'left' },
          ]}
          steps={[{ from: { x: 1, y: 2 }, run: g1.run, rise: g1.rise, color: E }]}
          aria={`A line through (1, 2) and (3, 6). From (1, 2) the run is ${g1.run} and the rise is ${g1.rise}, so the gradient is ${g1.rise} ÷ ${g1.run} = ${g1.m}.`}
        />
        <Worked
          steps={[
            <>{point(1, 2)} to {point(3, 6)}: rise = 6 − 2 = {g1.rise}, run = 3 − 1 = {g1.run}. Gradient = {g1.rise} ÷ {g1.run} = <strong>{g1.m}</strong>.</>,
            <>{point(2, 1)} to {point(4, 5)}: {g2.rise} ÷ {g2.run} = <strong>{g2.m}</strong>.</>,
            <>A horizontal line, e.g. y = 3: rise = {flat.rise}, so the gradient is <strong>{flat.m}</strong>.</>,
          ]}
        />
        <Mistake>Dividing run by rise: 2 ÷ 4 = 0,5 is wrong. The change in y goes on top.</Mistake>
      </>,
    ),
  },
  {
    title: 'Non-linear graphs: the parabola',
    content: slide(
      <>
        <Rule>When x is squared, the graph is not a straight line. y = x{sq} makes a U-shaped curve called a parabola; y = −x{sq} is an upside-down U.</Rule>
        <CoordPlane
          x={[-3, 3]}
          y={[-4, 4]}
          equal={false}
          lines={[
            { fn: (x) => x * x, color: I, label: 'y = x²', labelAt: 1.75, below: true },
            { fn: (x) => -x * x, color: R, label: 'y = −x²', labelAt: 1.75, below: false, dashed: true },
          ]}
          points={px.map((x, i) => ({ x, y: py[i], color: I }))}
          aria={`The parabola y = x squared through ${px.map((x, i) => point(x, py[i])).join(', ')}: a U shape with its lowest point at the origin. The dashed curve y = minus x squared is the same shape upside down.`}
        />
        <Worked
          title={<>y = x{sq}</>}
          steps={[
            <>x = {px.map(fmt).join('; ')} gives y = {py.join('; ')}.</>,
            <>The values go down to 0 and back up, so the points make a <strong>U shape</strong>, symmetrical about the y-axis.</>,
          ]}
        />
        <Mistake>Joining the points with straight lines and a sharp point at the bottom. A parabola is a smooth curve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Is (4, 10) on the line y = 3x − 2?</li>
            <li>Find both intercepts of y = −3x + 6.</li>
            <li>Find the gradient of the line through (0, 1) and (2, 7).</li>
            <li>Which graph is U-shaped: y = 2x + 1 or y = x{sq}?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>3 × 4 − 2 = {c1}, so {c1 === 10 ? 'yes' : 'no'}.</li>
            <li>y-intercept {c2.y}; x-intercept {c2.x} (0 = −3x + 6).</li>
            <li>(7 − 1) ÷ (2 − 0) = {c3.rise} ÷ {c3.run} = {c3.m}</li>
            <li>y = x{sq}, a parabola.</li>
          </ol>
        }
      />,
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
    options: ['(1, 2)', '(2, 5)', '(3, 5)', '(1, 4)'],
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
