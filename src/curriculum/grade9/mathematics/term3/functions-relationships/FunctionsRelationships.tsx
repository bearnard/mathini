import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CoordPlane, GRAPH_COLORS, ValueTable } from '../../../../../components/diagrams/maths/Grade9Graphs';
import { fmt, linear, point, ruleFromTable, ruleText } from '../../../../../components/diagrams/maths/grade9GeometryHelpers';

// Every number in the slides below comes from these tested helpers (grade9GeometryHelpers.test.ts, lessonsMaths9.test.ts).
const { indigo: I, green: E, amber: A, rose: R } = GRAPH_COLORS;

// slide 1: substitute
const f1 = linear(2, 1);
const f2 = linear(-2, 5);
const xs1 = [0, 1, 2, 3];
const ys1 = xs1.map(f2);

// slide 2: rule from a table
const tx = [1, 2, 3];
const ty = [3, 5, 7];
const rule = ruleFromTable(tx, ty);

// slide 3: rate of change
const up = linear(5, 0);
const down = linear(-3, 9);

// slide 4: proportional, y-intercept
const dist = linear(60, 0);
const ts = [1, 2, 3];
const plumber = linear(200, 150);

// "Check yourself"
const c1 = linear(3, -4)(5);
const c2 = ruleFromTable([0, 1, 2], [4, 7, 10]);
const c3 = linear(-4, 10)(2);
const c4 = linear(12, 25)(10);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Substitute into a formula, and test a pair',
    content: slide(
      <>
        <Rule>A formula gives exactly one output y for each input x. Replace x with the number, then multiply before you add. A pair (x, y) fits the formula only if it gives that y.</Rule>
        <ValueTable
          rows={[{ head: 'x', values: xs1 }, { head: 'y', values: ys1 }]}
          highlight={3}
          aria={`A table of values for ${ruleText(-2, 5)}. x = ${xs1.join(', ')} gives y = ${ys1.map(fmt).join(', ')}. The pair (3, −1) is highlighted.`}
        />
        <Worked
          steps={[
            <>{ruleText(2, 1)} with x = 4: y = 2 × 4 + 1 = 8 + 1 = <strong>{f1(4)}</strong>.</>,
            <>Does {point(3, -1)} fit {ruleText(-2, 5)}? −2 × 3 + 5 = −6 + 5 = {fmt(f2(3))}. <strong>Yes.</strong></>,
            <>Does {point(2, 2)} fit? −2 × 2 + 5 = {fmt(f2(2))}, not 2. <strong>No.</strong></>,
          ]}
        />
        <Mistake>Forgetting the sign: −2 × 3 is −6, not 6. Then y would be 11, and you would reject the pair that does fit.</Mistake>
      </>,
    ),
  },
  {
    title: 'Find the formula from a table',
    content: slide(
      <>
        <Rule>If y changes by the same amount each time x goes up by 1, the formula is y = mx + c. m is that change; find c by putting in one pair.</Rule>
        <ValueTable
          rows={[{ head: 'x', values: tx }, { head: 'y', values: ty }, { head: 'change', values: ['', `+${ty[1] - ty[0]}`, `+${ty[2] - ty[1]}`] }]}
          aria={`A table: x = ${tx.join(', ')} and y = ${ty.join(', ')}. Each time x goes up by 1, y goes up by ${rule.m}.`}
        />
        <Worked
          steps={[
            <>y goes up by {rule.m} each time, so m = {rule.m}: y = {rule.m}x + c.</>,
            <>Put in x = 1, y = 3: {rule.m} × 1 + c = 3, so c = {rule.c}.</>,
            <>The formula is <strong>{ruleText(rule.m, rule.c)}</strong>. Check x = 3: {rule.m} × 3 + {rule.c} = {ty[2]} ✓</>,
          ]}
        />
        <Mistake>y = x + 2 fits the first pair only: for x = 2 it gives 4, not 5. Always test the formula on every pair.</Mistake>
      </>,
    ),
  },
  {
    title: 'What the number in front of x tells you',
    content: slide(
      <>
        <Rule>In y = mx + c, m is the rate of change: y changes by m each time x goes up by 1. A positive m makes the graph rise; a negative m makes it fall.</Rule>
        <CoordPlane
          x={[0, 4]}
          y={[0, 10]}
          equal={false}
          lines={[
            { fn: up, color: E, label: ruleText(5, 0), labelAt: 1.6, below: false },
            { fn: down, color: R, label: ruleText(-3, 9), labelAt: 0.2, below: false },
          ]}
          steps={[
            { from: { x: 0, y: 0 }, run: 1, rise: 5, color: E, runLabel: false },
            { from: { x: 2, y: down(2) }, run: 1, rise: -3, color: R, runLabel: false },
          ]}
          aria={`Two lines. ${ruleText(5, 0)} rises: one step right, five steps up. ${ruleText(-3, 9)} falls: one step right, three steps down.`}
        />
        <Worked
          steps={[
            <>{ruleText(5, 0)}: x = 1, 2, 3 gives {[1, 2, 3].map(up).join(', ')}. <strong>y increases by 5</strong> for each increase of 1 in x.</>,
            <>{ruleText(-3, 9)}: x = 1, 2, 3 gives {[1, 2, 3].map(down).join(', ')}. m = −3: <strong>y decreases by 3</strong> for each increase of 1 in x.</>,
          ]}
        />
        <Mistake>Reading y = 5x as &quot;y is always 5&quot;. The 5 multiplies x, so y depends on x: x = 2 gives {up(2)}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Direct proportion and the starting value',
    content: slide(
      <>
        <Rule>When y = mx (no c), y is directly proportional to x: the graph is a straight line through the origin. In y = mx + c, c is the y-intercept, the value of y when x = 0.</Rule>
        <CoordPlane
          x={[0, 4]}
          y={[0, 240]}
          yStep={60}
          equal={false}
          axisNames={['t', 'd']}
          lines={[{ fn: dist, color: I, label: 'd = 60t', labelAt: 2.6, below: true }]}
          points={ts.map((t) => ({ x: t, y: dist(t), color: A }))}
          aria={`The graph of d = 60t: a straight line through the origin. After ${ts.join(', ')} hours the distance is ${ts.map(dist).join(', ')} km.`}
        />
        <Worked
          steps={[
            <>A car travels at 60 km/h: distance = 60 × time, so <strong>d = 60t</strong>. t = 1, 2, 3 gives d = {ts.map(dist).join(', ')} km.</>,
            <>A plumber charges R150 to come out plus R200 per hour: C = 200h + 150.</>,
            <>When h = 0, C = R{plumber(0)}: the <strong>y-intercept</strong> is the call-out fee. Three hours cost 200 × 3 + 150 = R{plumber(3)}.</>,
          ]}
        />
        <Mistake>Writing d = t + 60. That says the car has gone 61 km after 1 hour. Speed multiplies time.</Mistake>
      <div className="space-y-2">
  <p className="text-slate-600">{"In the equation of a straight line, the constant term is where the line cuts the vertical axis, because that is the point on the line where x is zero."}</p>
</div>
</>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>y = 3x − 4. Find y when x = 5.</li>
            <li>x = 0, 1, 2 gives y = 4, 7, 10. Find the formula.</li>
            <li>Does (2, 2) fit y = −4x + 10?</li>
            <li>A taxi charges R25 plus R12 per km: C = 12k + 25. What does 25 tell you, and what do 10 km cost?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>3 × 5 − 4 = {c1}</li>
            <li>{ruleText(c2.m, c2.c)}</li>
            <li>−4 × 2 + 10 = {c3}, so yes.</li>
            <li>25 is the y-intercept: the fixed fee at 0 km. 12 × 10 + 25 = R{c4}.</li>
          </ol>
        }
      />,
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
    options: ['y increases by 5 for each increase of 1 in x', 'y increases by 1 for each increase of 5 in x', 'y stays constant whatever the value of x', 'y is always equal to 5 for every value of x'],
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
    options: ['The steepness (slope) of the line', 'Where the line crosses the y-axis', 'Where the line crosses the x-axis', 'The highest value that y can reach'],
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
    options: ['y increases by 3 for each increase of 1 in x', 'y decreases by 3 for each increase of 1 in x', 'y decreases by 1 for each increase of 3 in x', 'x decreases by 3 for each increase of 1 in y'],
    answer: 'y decreases by 3 for each increase of 1 in x',
    explanation: 'A negative slope indicates a decreasing relationship.',
  },
  {
    prompt: 'Which input-output pair fits y = -2x + 5?',
    options: ['(1, 4)', '(2, 2)', '(3, -1)', '(0, -2)'],
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
