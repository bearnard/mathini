import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CrossingLines, ParallelLines, QuadSplit, TriangleExterior } from '../../../../../components/diagrams/maths/Grade8Geometry';
import { crossingAngles, exteriorAngle, fourthAngle, parallelAngles, polygonName, supplement, thirdAngle } from '../../../../../components/diagrams/maths/grade8GeometryHelpers';

// Every number in the slides below comes from these tested helpers (grade8GeometryHelpers) and
// lessonsMaths5.test.ts checks that the rendered slides show them.
const cross = crossingAngles(40);
const par = parallelAngles(65);
const tri = { a: 50, b: 60, c: thirdAngle(50, 60), ext: exteriorAngle(50, 60) };
const quad = { c: 110, x: fourthAngle(90, 90, 110) };
const names = [5, 6, 8].map((n) => ({ n, name: polygonName(n) }));

// "Check yourself", answers computed from the same helpers
const c1 = crossingAngles(72);
const c2 = parallelAngles(128);
const c3 = exteriorAngle(35, 75);
const c4 = fourthAngle(100, 85, 95);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Angles on a line and vertically opposite angles',
    content: slide(
      <>
        <Rule>Angles on a straight line are supplementary: they add up to 180°. When two lines cross, the vertically opposite angles are equal.</Rule>
        <CrossingLines a={cross[0]} />
        <Worked
          title={`Two lines cross and one angle is ${cross[0]}°`}
          steps={[
            <>The angle next to it lies on the same straight line: 180° − {cross[0]}° = <strong>{cross[1]}°</strong> (angles on a straight line).</>,
            <>The angle opposite {cross[0]}° is also <strong>{cross[2]}°</strong> (vertically opposite angles).</>,
            <>Check: {cross.join('° + ')}° = {cross.reduce((s, v) => s + v, 0)}°, a full revolution.</>,
          ]}
        />
        <Mistake>Thinking the angles next to each other are equal. Neighbours share a straight line and add up to 180°; it is the opposite angles that are equal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Parallel lines and a transversal',
    content: slide(
      <>
        <Rule>A line crossing a pair of parallel lines creates equal corresponding angles, equal alternate angles and co-interior angles that add up to 180°.</Rule>
        <ParallelLines a={par.corresponding} />
        <Worked
          title={`The angle at the top crossing is ${par.corresponding}°`}
          steps={[
            <>Corresponding (same position at the bottom crossing): <strong>{par.corresponding}°</strong>.</>,
            <>Alternate (green and bottom amber: between the lines, opposite sides of the transversal): both <strong>{par.alternate}°</strong>. Green is also vertically opposite the given angle.</>,
            <>Co-interior (green and rose: between the lines, same side): rose = 180° − {par.corresponding}° = <strong>{par.coInterior}°</strong>.</>,
          ]}
        />
        <Mistake>Using these facts when the lines are not parallel. Corresponding and alternate angles are only equal if the lines are parallel (marked with arrows).</Mistake>
      </>,
    ),
  },
  {
    title: 'Angles of a triangle and the exterior angle',
    content: slide(
      <>
        <Rule>The three angles inside any triangle always total 180°. An exterior angle equals the sum of the two interior angles opposite it.</Rule>
        <TriangleExterior a={tri.a} b={tri.b} />
        <Worked
          title={`A triangle has angles ${tri.a}° and ${tri.b}°`}
          steps={[
            <>Third angle: 180° − {tri.a}° − {tri.b}° = <strong>{tri.c}°</strong>.</>,
            <>Extend the side at that angle. The exterior angle is {tri.a}° + {tri.b}° = <strong>{tri.ext}°</strong>.</>,
            <>Check: {tri.c}° + {tri.ext}° = {tri.c + tri.ext}°, because they lie on a straight line.</>,
          ]}
        />
        <Mistake>Adding the angle next to the exterior angle. The exterior angle equals the two opposite angles ({tri.a}° + {tri.b}°), not {tri.c}° plus one of them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Quadrilaterals and other polygons',
    content: slide(
      <>
        <Rule>A diagonal cuts any quadrilateral into two triangles, so its angles add up to 2 × 180° = 360°. Polygons are named by their number of sides.</Rule>
        <QuadSplit angleC={quad.c} />
        <Worked
          steps={[
            <>A quadrilateral has angles 90°, 90°, {quad.c}° and x.</>,
            <>x = 360° − 90° − 90° − {quad.c}° = <strong>{quad.x}°</strong>.</>,
            <>Names: {names.map((p) => `${p.n} sides, ${p.name}`).join('; ')}.</>,
          ]}
        />
        <Mistake>Using 180° for a quadrilateral. 180° is the angle sum of a triangle; a quadrilateral is two triangles, so its sum is 360°.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Two lines cross and one angle is 72°. Find the other three angles.</li>
            <li>A transversal cuts two parallel lines and one angle is 128°. Find its alternate angle and a co-interior angle.</li>
            <li>A triangle has interior angles 35° and 75°. Find the exterior angle opposite them.</li>
            <li>Three angles of a quadrilateral are 100°, 85° and 95°. Find the fourth.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{c1[1]}°, {c1[2]}° and {c1[3]}°.</li>
            <li>Alternate: {c2.alternate}°. Co-interior: 180° − 128° = {c2.coInterior}°.</li>
            <li>35° + 75° = {c3}°.</li>
            <li>360° − 100° − 85° − 95° = {c4}°.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the sum of interior angles of a quadrilateral?',
    options: ['360°', '180°', '540°', '270°'],
    answer: '360°',
    explanation: 'Any quadrilateral can be split into two triangles: 2 × 180°.',
  },
  {
    prompt: 'Vertically opposite angles are always...',
    options: ['equal', 'supplementary', 'complementary', 'right angles'],
    answer: 'equal',
    explanation: 'When two lines intersect, opposite angles are equal.',
  },
  {
    prompt: 'If two parallel lines are cut by a transversal, alternate interior angles are...',
    options: ['equal', 'supplementary', 'opposite signs', 'always 90°'],
    answer: 'equal',
    explanation: 'Alternate interior angles are equal for parallel lines.',
  },
  {
    prompt: 'Supplementary angles add up to...',
    options: ['180°', '90°', '360°', '270°'],
    answer: '180°',
    explanation: 'Supplementary means together they form a straight angle.',
  },
  {
    prompt: 'The interior angles of a triangle add up to...',
    options: ['180°', '360°', '90°', '270°'],
    answer: '180°',
    explanation: 'This is a core triangle angle property.',
  },
  {
    prompt: 'What is an 8-sided polygon called?',
    options: ['Octagon', 'Hexagon', 'Heptagon', 'Nonagon'],
    answer: 'Octagon',
    explanation: 'An octagon has eight sides.',
  },
  {
    prompt: 'For parallel lines, corresponding angles are...',
    options: ['equal', 'always 0°', 'complementary', 'unrelated'],
    answer: 'equal',
    explanation: 'Corresponding angles are equal when lines are parallel.',
  },
  {
    prompt: 'An exterior angle of a triangle equals...',
    options: ['the sum of the two opposite interior angles', 'half of the interior angle next to it', 'always equal to 90 degrees', 'the same size as the adjacent interior angle'],
    answer: 'the sum of the two opposite interior angles',
    explanation: 'This is the exterior-angle theorem for triangles.',
  },
];

const GeometryOf2DShapesAndStraightLines = () => (
  <CapsSubjectTopic
    title="Geometry of 2D Shapes and Straight Lines"
    subtitle="Polygon properties, parallel lines, and angle relationships"
    learnSteps={learnSteps}
    task="gr8-geometry-of-2d-shapes-and-straight-lines-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default GeometryOf2DShapesAndStraightLines;
