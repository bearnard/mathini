import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CrossingLines, ParallelTransversal, QuadrilateralAngles, TriangleAngles } from '../../../../../components/diagrams/maths/Grade9Geometry';
import { PICTURE_COLORS } from '../../../../../components/diagrams/maths/Grade7Pictures';
import { isosceles, missingAngle, polygonAngleSum, supplement, thirdAngle } from '../../../../../components/diagrams/maths/grade9GeometryHelpers';

// Every number in the slides below comes from these tested helpers (grade9GeometryHelpers.test.ts, lessonsMaths9.test.ts).
const { indigo: I, green: E, amber: A } = PICTURE_COLORS;
const r = (text: string) => <span className="text-slate-500">({text})</span>;

// slide 1: lines crossing
const cross = { given: 50, adjacent: supplement(50) };

// slide 2: parallel lines
const par = { given: 65, co: supplement(65) };

// slide 3: triangles
const tri = { a: 45, b: 65, c: thirdAngle(45, 65), ext: 45 + thirdAngle(45, 65) };
const iso = isosceles(50);

// slide 4: quadrilaterals and polygons
const quad = missingAngle(4, [70, 90, 80]);
const penta = polygonAngleSum(5);

// "Check yourself"
const c1 = supplement(112);
const c2 = supplement(74);
const c3 = thirdAngle(38, 90);
const c4 = { sum: polygonAngleSum(6), each: polygonAngleSum(6) / 6 };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Angles on a straight line and vertically opposite angles',
    content: slide(
      <>
        <Rule>Angles on a straight line add up to 180°. When two lines cross, the vertically opposite angles are equal.</Rule>
        <CrossingLines angle={cross.given} />
        <Worked
          title={`Two lines cross. One angle is ${cross.given}°.`}
          steps={[
            <>The angle next to it: 180° − {cross.given}° = <strong>{cross.adjacent}°</strong> {r('∠s on a str line')}.</>,
            <>The angle opposite the {cross.given}° angle is <strong>{cross.given}°</strong> {r('vert opp ∠s')}.</>,
            <>Check: {cross.given}° + {cross.adjacent}° + {cross.given}° + {cross.adjacent}° = 360° {r('∠s round a point')}.</>,
          ]}
        />
        <Mistake>Vertically opposite angles are not the ones side by side. Those are adjacent and add up to 180°; the opposite pair is equal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Parallel lines cut by a transversal',
    content: slide(
      <>
        <Rule>When a line cuts two parallel lines, corresponding angles are equal, alternate angles are equal, and co-interior angles add up to 180°.</Rule>
        <ParallelTransversal
          angle={par.given}
          marks={[
            { line: 'top', corner: 'ur', color: I, label: `${par.given}°` },
            { line: 'bottom', corner: 'ur', color: E, label: `${par.given}°` },
            { line: 'top', corner: 'lr', color: A, label: `${par.co}°` },
          ]}
          aria={`Two parallel lines cut by a transversal. On the top line the upper-right angle is ${par.given}°. On the bottom line the upper-right angle, the corresponding angle, is also ${par.given}°. On the top line the lower-right angle is ${par.co}°; it is co-interior with the bottom ${par.given}° angle, and ${par.co}° + ${par.given}° = 180°.`}
        />
        <Worked
          steps={[
            <>Corresponding angle at the bottom line: <strong>{par.given}°</strong> {r('corr ∠s, lines ∥')}.</>,
            <>Alternate angles sit on opposite sides of the transversal, between the lines: they are also equal {r('alt ∠s, lines ∥')}.</>,
            <>Co-interior angle: 180° − {par.given}° = <strong>{par.co}°</strong> {r('co-int ∠s, lines ∥')}.</>,
          ]}
        />
        <Mistake>Co-interior angles are usually not equal. Look for two angles between the lines on one side of the transversal: together they make 180°.</Mistake>
      </>,
    ),
  },
  {
    title: 'Angles of a triangle',
    content: slide(
      <>
        <Rule>The angles of a triangle add up to 180°. An exterior angle equals the sum of the two interior opposite angles. In an isosceles triangle the base angles are equal.</Rule>
        <TriangleAngles left={tri.a} right={tri.b} exterior />
        <Worked
          steps={[
            <>Two angles are {tri.a}° and {tri.b}°: third angle = 180° − {tri.a}° − {tri.b}° = <strong>{tri.c}°</strong> {r('sum of ∠s in △')}.</>,
            <>Exterior angle at the {tri.b}° corner: {tri.a}° + {tri.c}° = <strong>{tri.ext}°</strong>, the same as 180° − {tri.b}° {r('ext ∠ of △')}.</>,
            <>Isosceles, one base angle {iso.other}°: the other base angle is <strong>{iso.other}°</strong>, and the third is 180° − 2 × {iso.other}° = {iso.apex}°.</>,
          ]}
        />
        <Mistake>The equal angles of an isosceles triangle are the base angles, opposite the equal sides. The third angle is usually different: here {iso.apex}°, not {iso.other}°.</Mistake>
      </>,
    ),
  },
  {
    title: 'Angles of quadrilaterals and other polygons',
    content: slide(
      <>
        <Rule>A diagonal cuts a quadrilateral into two triangles, so its angles add up to 2 × 180° = 360°. An n-sided polygon has angles that add up to (n − 2) × 180°.</Rule>
        <QuadrilateralAngles angles={[70, 90, 80, quad.missing]} labels={['70°', '90°', '80°', 'x']} />
        <Worked
          title="A quadrilateral has angles 70°, 90°, 80° and x."
          steps={[
            <>70° + 90° + 80° = {quad.known}°.</>,
            <>x = {quad.sum}° − {quad.known}° = <strong>{quad.missing}°</strong> {r('sum of ∠s in quad')}.</>,
            <>A pentagon (5 sides): (5 − 2) × 180° = <strong>{penta}°</strong>.</>,
          ]}
        />
        <Mistake>A quadrilateral&apos;s angles do not add up to 180°. That is a triangle. Four angles need 360°.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Two angles lie on a straight line. One is 112°. Find the other.</>,
          <>Two parallel lines are cut by a transversal. One angle is 74°. Find its co-interior angle.</>,
          <>A right-angled triangle has a 38° angle. Find the third angle.</>,
          <>Find the sum of the angles of a hexagon, and each angle of a regular hexagon.</>,
        ]}
        answers={[
          <>180° − 112° = {c1}°</>,
          <>180° − 74° = {c2}°</>,
          <>180° − 90° − 38° = {c3}°</>,
          <>(6 − 2) × 180° = {c4.sum}°; {c4.sum}° ÷ 6 = {c4.each}°</>,
        ]}
      />,
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'The sum of interior angles in any triangle is:',
    options: ['90°', '180°', '270°', '360°'],
    answer: '180°',
    explanation: 'The angle sum property states that all triangles have interior angles summing to 180°.',
  },
  {
    prompt: 'If two lines are parallel and cut by a transversal, which angles are equal?',
    options: ['All angles', 'Corresponding angles', 'No angles', 'Adjacent angles'],
    answer: 'Corresponding angles',
    explanation: 'Corresponding angles are in the same position at each intersection and are equal when lines are parallel.',
  },
  {
    prompt: 'What is the sum of interior angles in a quadrilateral?',
    options: ['180°', '270°', '360°', '540°'],
    answer: '360°',
    explanation: 'Any quadrilateral has interior angles that sum to 360°.',
  },
  {
    prompt: 'Vertically opposite angles are:',
    options: ['Adjacent', 'Equal', 'Supplementary', 'Complementary'],
    answer: 'Equal',
    explanation: 'Vertically opposite angles (formed by intersecting lines) are always equal.',
  },
  {
    prompt: 'In an isosceles triangle, if one base angle is 50°, what is the other base angle?',
    options: ['40°', '50°', '60°', '80°'],
    answer: '50°',
    explanation: 'Base angles in an isosceles triangle are equal, so both base angles are 50°.',
  },
  {
    prompt: 'What is the third angle in a triangle if two angles are 45° and 65°?',
    options: ['70°', '80°', '90°', '100°'],
    answer: '70°',
    explanation: 'Using the angle sum: 45° + 65° + third angle = 180°, so the third angle is 70°.',
  },
  {
    prompt: 'Co-interior angles on the same side of a transversal are:',
    options: ['Equal', 'Supplementary (sum to 180°)', 'Complementary', 'Vertically opposite'],
    answer: 'Supplementary (sum to 180°)',
    explanation: 'Co-interior (same-side interior) angles sum to 180° when lines are parallel.',
  },
  {
    prompt: 'A quadrilateral has angles 70°, 90°, 80°, and x. What is x?',
    options: ['110°', '120°', '130°', '140°'],
    answer: '120°',
    explanation: 'The sum is 360°: 70° + 90° + 80° + x = 360°, so x = 120°.',
  },
];

const Geometry2DShapes = () => (
  <CapsSubjectTopic
    title="Geometry of 2D Shapes and Straight Lines"
    subtitle="Properties of shapes, angle relationships, and deductive reasoning"
    learnSteps={learnSteps}
    task="gr9-geometry-2d-shapes-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Geometry2DShapes;
