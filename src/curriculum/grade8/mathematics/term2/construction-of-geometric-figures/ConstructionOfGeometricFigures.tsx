import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CopySegment, PerpBisector, SSSTriangle, StraightLineAngles } from '../../../../../components/diagrams/maths/Grade8Geometry';
import { classifyBySides, makesTriangle, supplement, thirdAngle } from '../../../../../components/diagrams/maths/grade8GeometryHelpers';

// Every number in the slides below comes from these tested helpers (grade8GeometryHelpers) and
// lessonsMaths5.test.ts checks that the rendered slides show them.
const ray = { a: 50, x: supplement(50) };
const bis = { ab: 8, r: 5, half: 8 / 2 };
const iso = { a: 5, b: 5, c: 8, kind: classifyBySides(5, 5, 8) };
const bad = { a: 2, b: 3, c: 8, ok: makesTriangle(2, 3, 8) };
const eq = { s: 6, kind: classifyBySides(6, 6, 6), angle: 180 / 3 };
const third = thirdAngle(90, 35);

// "Check yourself", answers computed from the same helpers
const c1 = supplement(115);
const c2 = classifyBySides(7, 4, 7);
const c3 = makesTriangle(3, 4, 9);
const c4 = thirdAngle(48, 67);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Instruments and angle sizes',
    content: slide(
      <>
        <Rule>A protractor measures and draws angles. A right angle is 90° and the angles on a straight line add up to 180°. A ruler draws straight lines; a compass draws arcs and copies lengths.</Rule>
        <StraightLineAngles a={ray.a} />
        <Worked
          title={`A ray makes ${ray.a}° with a straight line. Find x.`}
          steps={[
            <>The two angles lie on a straight line, so x + {ray.a}° = 180°.</>,
            <>x = 180° − {ray.a}° = <strong>{ray.x}°</strong>.</>,
            <>Measure it with the protractor to check: put its centre on the vertex and its 0° line on the straight line.</>,
          ]}
        />
        <Mistake>Reading the wrong scale on the protractor. An angle of {ray.a}° is smaller than a right angle, so if you read {ray.x}° for it you used the other scale.</Mistake>
      </>,
    ),
  },
  {
    title: 'Copying a line segment with a compass',
    content: slide(
      <>
        <Rule>To copy a length exactly, use a compass and a ruler: the compass carries the length, the ruler draws the line.</Rule>
        <CopySegment len={6} />
        <Worked
          title="Copy AB = 6 cm"
          steps={[
            <>Draw a line with the ruler and mark a point A′ on it.</>,
            <>Put the compass point on A and open it until the pencil touches B.</>,
            <>Without changing the opening, put the point on A′ and draw an arc to cut the line at B′. Then A′B′ = AB.</>,
          ]}
        />
        <Mistake>Letting the compass opening slip between steps. If the opening changes, A′B′ is no longer equal to AB, so hold the compass by its top.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bisecting a line segment at 90°',
    content: slide(
      <>
        <Rule>The perpendicular bisector cuts a segment into two equal parts at 90°. Use intersecting arcs of the same radius from both endpoints.</Rule>
        <PerpBisector ab={bis.ab} r={bis.r} />
        <Worked
          title={`Bisect AB = ${bis.ab} cm`}
          steps={[
            <>Open the compass to more than half of AB, say {bis.r} cm.</>,
            <>Draw arcs above and below AB, first from A and then from B, with the same opening.</>,
            <>Join the two crossing points. The line cuts AB at M with AM = MB = <strong>{bis.half} cm</strong>, at 90°.</>,
          ]}
        />
        <Mistake>Opening the compass to less than half of AB. Arcs of 3 cm from the ends of an {bis.ab} cm segment never meet, because 3 + 3 &lt; {bis.ab}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Constructing a triangle from three sides',
    content: slide(
      <>
        <Rule>Draw the longest side first. From each end, draw an arc with the length of another side. Where the arcs cross is the third vertex.</Rule>
        <SSSTriangle a={iso.a} b={iso.b} c={iso.c} />
        <Worked
          title={`Sides ${iso.a} cm, ${iso.b} cm and ${iso.c} cm`}
          steps={[
            <>Draw AB = {iso.c} cm.</>,
            <>Arc of {iso.b} cm from A, arc of {iso.a} cm from B. They cross at C; join AC and BC.</>,
            <>Two sides are equal ({iso.a} cm), so the triangle is <strong>{iso.kind}</strong>.</>,
          ]}
        />
        <Mistake>
          Expecting any three lengths to work. For {bad.a} cm, {bad.b} cm and {bad.c} cm the arcs never meet, because {bad.a} + {bad.b} = {bad.a + bad.b} is less than {bad.c}. Two sides together must be longer than the third.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'The equilateral triangle and the angle sum',
    content: slide(
      <>
        <Rule>The angles of every triangle add up to 180°. An equilateral triangle has all sides equal and all angles equal, so each angle is 180° ÷ 3 = 60°.</Rule>
        <SSSTriangle a={eq.s} b={eq.s} c={eq.s} angles={[eq.angle, eq.angle, eq.angle]} />
        <Worked
          steps={[
            <>Draw AB = {eq.s} cm. Keep the compass at {eq.s} cm and draw arcs from A and B; they meet at C.</>,
            <>All sides are {eq.s} cm, so it is {eq.kind}: each angle is 180° ÷ 3 = <strong>{eq.angle}°</strong>. This is also how to construct a 60° angle.</>,
            <>A triangle with angles 90° and 35°: the third angle is 180° − 90° − 35° = <strong>{third}°</strong>.</>,
          ]}
        />
        <Mistake>Thinking a bigger triangle has a bigger angle sum. However long the sides, the three angles always add up to 180°.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>A ray makes an angle of 115° with a straight line. What is the other angle?</>,
          <>A triangle has sides 7 cm, 4 cm and 7 cm. What type of triangle is it?</>,
          <>Can you construct a triangle with sides 3 cm, 4 cm and 9 cm? Why?</>,
          <>Two angles of a triangle are 48° and 67°. Find the third angle.</>,
        ]}
        answers={[
          <>180° − 115° = {c1}°.</>,
          <>{c2[0].toUpperCase() + c2.slice(1)}: two sides are equal.</>,
          <>{c3 ? 'Yes' : 'No'}: 3 + 4 = 7, which is less than 9, so the arcs do not meet.</>,
          <>180° − 48° − 67° = {c4}°.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the sum of interior angles of a triangle?',
    options: ['180°', '90°', '270°', '360°'],
    answer: '180°',
    explanation: 'All triangles have interior angles adding to 180°.',
  },
  {
    prompt: 'Which instrument is used to measure an angle?',
    options: ['Protractor', 'Compass', 'Ruler', 'Set square only'],
    answer: 'Protractor',
    explanation: 'A protractor measures and draws specific angle sizes.',
  },
  {
    prompt: 'An equilateral triangle has...',
    options: ['all sides equal', 'two sides equal', 'one right angle', 'no equal sides'],
    answer: 'all sides equal',
    explanation: 'Equilateral means all three sides are equal.',
  },
  {
    prompt: 'A right angle measures...',
    options: ['90°', '45°', '180°', '60°'],
    answer: '90°',
    explanation: 'By definition, a right angle is 90°.',
  },
  {
    prompt: 'What construction uses intersecting arcs from segment endpoints?',
    options: ['Perpendicular bisector', 'Angle bisector', 'Parallel line', 'Median'],
    answer: 'Perpendicular bisector',
    explanation: 'Equal-radius arcs from both endpoints locate the bisector line.',
  },
  {
    prompt: 'A triangle with sides 5 cm, 5 cm, and 8 cm is...',
    options: ['isosceles', 'equilateral', 'scalene', 'right-angled only'],
    answer: 'isosceles',
    explanation: 'Two sides are equal, so it is isosceles.',
  },
  {
    prompt: 'How many degrees are on a straight line?',
    options: ['180°', '90°', '270°', '360°'],
    answer: '180°',
    explanation: 'A straight angle is 180°.',
  },
  {
    prompt: 'To copy a line segment exactly, you mainly use a...',
    options: ['compass and ruler', 'protractor only', 'calculator', 'set square only'],
    answer: 'compass and ruler',
    explanation: 'A compass transfers length and a ruler draws the segment.',
  },
];

const ConstructionOfGeometricFigures = () => (
  <CapsSubjectTopic
    title="Construction of Geometric Figures"
    subtitle="Instrument use, constraints, and accurate geometric constructions"
    learnSteps={learnSteps}
    task="gr8-construction-of-geometric-figures-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default ConstructionOfGeometricFigures;
