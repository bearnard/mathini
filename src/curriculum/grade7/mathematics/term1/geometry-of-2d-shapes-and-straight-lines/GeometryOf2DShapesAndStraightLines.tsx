import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { AnglesOnLine, CrossingLines, ParallelTransversal, QuadSplit, RegularPolygonAngles } from '../../../../../components/diagrams/maths/Grade7Geometry';
import { missingAngle, polygonAngleSum, polygonName, regularExterior, regularInterior } from '../../../../../components/diagrams/maths/grade7Helpers';

// Every number in the slides below comes from tested helpers (grade7Helpers.test.ts, geometryLessons.test.ts).
const line = { a: 65, b: missingAngle([65], 180) };
const cross = { a: 50, b: missingAngle([50], 180) };
const par = { a: 70, b: missingAngle([70], 180) };
const quad = { known: [90, 80, 100], fourth: missingAngle([90, 80, 100], 360) };
const penta = { n: 5, sum: polygonAngleSum(5), each: regularInterior(5), ext: regularExterior(5) };
const octa = { n: 8, sum: polygonAngleSum(8), each: regularInterior(8) };
const check = {
  line: { a: 130, b: missingAngle([130], 180) },
  hex: { n: 6, sum: polygonAngleSum(6), each: regularInterior(6), ext: regularExterior(6) },
  tri: missingAngle([55, 65], 180),
  opposite: 35,
};
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Angles on a straight line',
    content: slide(
      <>
        <Rule>Angles that share a straight line add up to 180°.</Rule>
        <AnglesOnLine a={line.a} />
        <Worked
          title={`One angle is ${line.a}°`}
          steps={[
            <>The two angles sit on one straight line, so they add to 180°.</>,
            <>180° − {line.a}° = <strong>{line.b}°</strong>.</>,
          ]}
        />
        <Mistake>Using 90° or 360°. A right angle is 90°. A full turn is 360°. A straight line is half a turn, 180°.</Mistake>
      </>,
    ),
  },
  {
    title: 'Vertically opposite angles',
    content: slide(
      <>
        <Rule>When two straight lines cross, the angles opposite each other are equal.</Rule>
        <CrossingLines a={cross.a} />
        <Worked
          title={`One angle is ${cross.a}°`}
          steps={[
            <>The opposite angle is also <strong>{cross.a}°</strong>.</>,
            <>The angles beside it are on a straight line: 180° − {cross.a}° = {cross.b}°. The other opposite pair is {cross.b}° and {cross.b}°.</>,
          ]}
        />
        <Mistake>Thinking opposite angles add to 180°. It is the angles side by side that add to 180°. Opposite angles are equal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Parallel lines: corresponding angles',
    content: slide(
      <>
        <Rule>When parallel lines are cut by a transversal, corresponding angles are equal.</Rule>
        <ParallelTransversal a={par.a} />
        <Worked
          title={`The top angle is ${par.a}°`}
          steps={[
            <>The angle in the same position at the other line is its corresponding angle: <strong>{par.a}°</strong>.</>,
            <>The angle next to it is on a straight line: 180° − {par.a}° = {par.b}°.</>,
          ]}
        />
        <Mistake>Using the rule when the lines are not parallel. The angles are equal only if the lines are parallel.</Mistake>
      </>,
    ),
  },
  {
    title: 'Triangles and quadrilaterals: angle sums',
    content: slide(
      <>
        <Rule>The angles of a triangle add up to 180°. The angles of a quadrilateral add up to 360°, because it splits into two triangles.</Rule>
        <QuadSplit />
        <Worked
          steps={[
            <>Quadrilateral with angles {quad.known.join('°, ')}°: the fourth is 360° − {quad.known.reduce((a, b) => a + b, 0)}° = <strong>{quad.fourth}°</strong>.</>,
            <>An equilateral triangle has three equal sides and three equal angles: 180° ÷ 3 = {180 / 3}° each.</>,
          ]}
        />
        <Mistake>Using 180° for a quadrilateral. It has four angles and two triangles inside, so the sum is 360°.</Mistake>
      </>,
    ),
  },
  {
    title: 'Polygons: names and angles',
    content: slide(
      <>
        <Rule>A polygon with n sides has angles adding to (n − 2) × 180°. In a regular polygon, divide by n.</Rule>
        <RegularPolygonAngles n={penta.n} />
        <Worked
          title={`Regular ${polygonName(penta.n)} (${penta.n} sides)`}
          steps={[
            <>({penta.n} − 2) × 180° = {penta.sum}°.</>,
            <>{penta.sum}° ÷ {penta.n} = <strong>{penta.each}°</strong> each interior angle.</>,
            <>The exterior angle makes a straight line with it: 180° − {penta.each}° = {penta.ext}°.</>,
            <>Names: 5 sides pentagon, 6 hexagon, 7 heptagon, <strong>8 {polygonName(octa.n)}</strong>.</>,
          ]}
        />
        <Mistake>Mixing up the names. An octagon has 8 sides, not 6 or 7. Its regular interior angle is {octa.each}°.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Two angles on a straight line: one is {check.line.a}°. Find the other.</li>
            <li>Two lines cross and one angle is {check.opposite}°. What is the angle opposite it?</li>
            <li>A triangle has angles of 55° and 65°. What is the third?</li>
            <li>Find each interior and exterior angle of a regular {polygonName(check.hex.n)}.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>180° − {check.line.a}° = {check.line.b}°.</li>
            <li>{check.opposite}°, because vertically opposite angles are equal.</li>
            <li>180° − {55 + 65}° = {check.tri}°.</li>
            <li>({check.hex.n} − 2) × 180° ÷ {check.hex.n} = {check.hex.each}° interior, and {check.hex.ext}° exterior.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the sum of interior angles in a quadrilateral?',
    options: ['360°', '180°', '270°', '540°'],
    answer: '360°',
    explanation: 'Any quadrilateral has interior angles that add up to 360°.',
  },
  {
    prompt: 'Vertically opposite angles are always...',
    options: ['equal', 'supplementary only', 'acute only', 'different'],
    answer: 'equal',
    explanation: 'When two lines intersect, opposite angles are equal.',
  },
  {
    prompt: 'Two adjacent angles on a straight line add up to...',
    options: ['180°', '90°', '360°', '45°'],
    answer: '180°',
    explanation: 'Angles on a straight line are supplementary.',
  },
  {
    prompt: 'When two parallel lines are cut by a transversal, corresponding angles are...',
    options: ['equal', 'always 90°', 'always obtuse', 'unrelated'],
    answer: 'equal',
    explanation: 'Corresponding angles match in size for parallel lines.',
  },
  {
    prompt: 'A triangle with all three sides equal is called...',
    options: ['Equilateral', 'Isosceles', 'Scalene', 'Right'],
    answer: 'Equilateral',
    explanation: 'Equilateral triangles have all equal sides and equal angles.',
  },
  {
    prompt: 'How many sides does an octagon have?',
    options: ['8', '6', '7', '10'],
    answer: '8',
    explanation: 'An octagon is an 8-sided polygon.',
  },
  {
    prompt: 'In a regular pentagon, each interior angle is...',
    options: ['108°', '90°', '120°', '72°'],
    answer: '108°',
    explanation: 'A regular pentagon has equal interior angles of 108°.',
  },
  {
    prompt: 'One interior angle and its adjacent exterior angle at a vertex add up to...',
    options: ['180°', '360°', '90°', '270°'],
    answer: '180°',
    explanation: 'Interior and adjacent exterior angles form a straight line.',
  },
];

const GeometryOf2DShapesAndStraightLines = () => (
  <CapsSubjectTopic
    title="Geometry of 2D Shapes and Straight Lines"
    subtitle="Shape properties, classification, and angle relationships"
    learnSteps={learnSteps}
    task="gr7-geometry-of-2d-shapes-and-straight-lines-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default GeometryOf2DShapesAndStraightLines;
