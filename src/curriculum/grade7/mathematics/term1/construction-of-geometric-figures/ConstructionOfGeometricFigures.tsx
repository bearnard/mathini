import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { EquilateralBuild, ParallelPairs, PerpBisector, ProtractorAngle, TriangleTypes } from '../../../../../components/diagrams/maths/Grade7Geometry';
import { missingAngle, triangleType } from '../../../../../components/diagrams/maths/grade7Helpers';

// Every number in the slides below comes from tested helpers (grade7Helpers.test.ts, constructionLessons.test.ts).
const angle = 50;
const bisect = { len: 8, half: 8 / 2, goodWidth: 5 };
const tri = { sides: [5, 5, 8] as [number, number, number], known: [60, 70] };
const third = missingAngle(tri.known, 180);
const check = {
  side: 9,
  angles: [40, 75],
  third: missingAngle([40, 75], 180),
  type: triangleType(7, 7, 3),
};
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const minWidth = bisect.half;

export const learnSteps: LearnStep[] = [
  {
    title: 'Measure an angle with a protractor',
    content: slide(
      <>
        <Rule>Put the centre mark on the vertex and the baseline along one arm. Read the scale from the 0 on that arm.</Rule>
        <ProtractorAngle deg={angle} />
        <Worked
          title="Measure the angle ABC"
          steps={[
            <>Centre mark on the vertex B.</>,
            <>Baseline along arm BA, so that arm sits on 0°.</>,
            <>The other arm crosses the scale at <strong>{angle}°</strong>. It is less than 90°, so it is an acute angle.</>,
            <>Names: 90° is a right angle, 180° is a straight angle.</>,
          ]}
        />
        <Mistake>Reading the wrong scale. If the arm you aligned is on 0, a small angle cannot read {180 - angle}°.</Mistake>
      </>,
    ),
  },
  {
    title: 'The compass: circles and equilateral triangles',
    content: slide(
      <>
        <Rule>A compass keeps one radius, so it draws a circle or an arc. For an equilateral triangle, set it to the side length.</Rule>
        <EquilateralBuild side={6} />
        <Worked
          title="Equilateral triangle, side 6 cm"
          steps={[
            <>Draw AB = 6 cm with a ruler.</>,
            <>Set the compass to 6 cm.</>,
            <>Draw an arc from A, then an arc from B with the same width. They cross at C.</>,
            <>Join AC and BC. All three sides are 6 cm.</>,
          ]}
        />
        <Mistake>Changing the compass width between the two arcs. Then AC and BC are different, and the triangle is not equilateral.</Mistake>
      </>,
    ),
  },
  {
    title: 'The perpendicular bisector',
    content: slide(
      <>
        <Rule>Draw equal arcs from both ends of the line, wider than half of it. Join the two crossing points.</Rule>
        <PerpBisector len={bisect.len} />
        <Worked
          title={`Line AB = ${bisect.len} cm`}
          steps={[
            <>Half of AB is {bisect.half} cm, so open the compass wider than {bisect.half} cm. Use {bisect.goodWidth} cm.</>,
            <>Draw arcs above and below the line from A.</>,
            <>Keep the same width and draw arcs from B. They cross above and below.</>,
            <>Join the crossings. The line meets AB at its midpoint, {bisect.half} cm from each end, at 90°.</>,
          ]}
        />
        <Mistake>
          A compass width of {minWidth - 1} cm or less. The arcs never meet, so there is nothing to join.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Triangles: sides and angles',
    content: slide(
      <>
        <Rule>Three equal sides: equilateral. Two equal: isosceles. None equal: scalene. The angles always add to 180°.</Rule>
        <TriangleTypes triples={[[5, 5, 5], [5, 5, 8], [4, 5, 7]]} />
        <Worked
          title={`Sides ${tri.sides.join(', ')} cm`}
          steps={[
            <>Two sides are equal (5 and 5), so it is <strong>{triangleType(...tri.sides)}</strong>.</>,
            <>If two angles are {tri.known[0]}° and {tri.known[1]}°, the third is 180° − {tri.known[0] + tri.known[1]}° = <strong>{third}°</strong>.</>,
          ]}
        />
        <Mistake>Calling 5, 5, 8 equilateral. Only two sides match, and a triangle can be isosceles without a right angle.</Mistake>
      </>,
    ),
  },
  {
    title: 'Quadrilaterals: parallel sides',
    content: slide(
      <>
        <Rule>A trapezium has exactly one pair of parallel sides. Parallelograms, rectangles, squares and rhombuses have two pairs.</Rule>
        <ParallelPairs />
        <Worked
          title="Which has exactly one pair?"
          steps={[
            <>Rectangle: 2 pairs. Square: 2 pairs. Rhombus: 2 pairs.</>,
            <>Trapezium: only the top and bottom are parallel, so 1 pair. <strong>Trapezium.</strong></>,
          ]}
        />
        <Mistake>Choosing the rectangle. Its opposite sides are parallel in both directions, so it has two pairs.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What compass width builds an equilateral triangle with sides of {check.side} cm?</li>
            <li>A triangle has angles of {check.angles[0]}° and {check.angles[1]}°. What is the third angle?</li>
            <li>A triangle has sides 7 cm, 7 cm and 3 cm. What kind is it?</li>
            <li>Why must the arcs for a perpendicular bisector be wider than half the line?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{check.side} cm, the same as the side length.</li>
            <li>180° − {check.angles[0] + check.angles[1]}° = {check.third}°.</li>
            <li>{check.type}: two sides are equal.</li>
            <li>If the width is half the line or less, the arcs never cross.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which instrument is used to draw a circle with a fixed radius?',
    options: ['Compass', 'Protractor', 'Set square', 'Ruler only'],
    answer: 'Compass',
    explanation: 'A compass keeps the radius constant while drawing a circle.',
  },
  {
    prompt: 'A triangle with sides 5 cm, 5 cm, and 8 cm is...',
    options: ['Isosceles', 'Equilateral', 'Scalene', 'Right-angled only'],
    answer: 'Isosceles',
    explanation: 'Two equal sides make it an isosceles triangle.',
  },
  {
    prompt: 'An angle of 90° is called a...',
    options: ['Right angle', 'Acute angle', 'Reflex angle', 'Straight angle'],
    answer: 'Right angle',
    explanation: 'A right angle measures exactly 90°.',
  },
  {
    prompt: 'To construct a perpendicular bisector of a line segment, you must draw...',
    options: [
      'equal arcs from both endpoints',
      'one arc from the midpoint only',
      'a random diagonal first',
      'parallel lines through one endpoint',
    ],
    answer: 'equal arcs from both endpoints',
    explanation: 'Intersecting equal arcs from each endpoint locate the bisector.',
  },
  {
    prompt: 'What is the sum of interior angles in any triangle?',
    options: ['180°', '90°', '270°', '360°'],
    answer: '180°',
    explanation: 'All triangles have interior angles adding to 180°.',
  },
  {
    prompt: 'When measuring with a protractor, the centre mark should be placed on...',
    options: ['the vertex of the angle', 'the end of the ruler', 'the longest side', 'the midpoint of a page'],
    answer: 'the vertex of the angle',
    explanation: 'Correct placement starts at the angle vertex.',
  },
  {
    prompt: 'Which quadrilateral has exactly one pair of parallel sides?',
    options: ['Trapezium', 'Rectangle', 'Square', 'Rhombus'],
    answer: 'Trapezium',
    explanation: 'A trapezium has one pair of opposite parallel sides.',
  },
  {
    prompt: 'To construct an equilateral triangle with side 6 cm, the compass width must stay at...',
    options: ['6 cm', '3 cm', '12 cm', 'any random width'],
    answer: '6 cm',
    explanation: 'All sides are equal, so the same radius is used from both endpoints.',
  },
];

const ConstructionOfGeometricFigures = () => (
  <CapsSubjectTopic
    title="Construction of Geometric Figures"
    subtitle="Using ruler, compass, and protractor for accurate constructions"
    learnSteps={learnSteps}
    task="gr7-construction-of-geometric-figures-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default ConstructionOfGeometricFigures;
