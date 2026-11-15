import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import {
  AngleBisectorConstruction, EquilateralConstruction, PerpendicularAtPoint, PerpendicularBisector, SSSConstruction,
} from '../../../../../components/diagrams/maths/Grade9Geometry';
import { triangleInequality } from '../../../../../components/diagrams/maths/grade9GeometryHelpers';

// The numbers in the slides below are checked in lessonsMaths9.test.ts and grade9GeometryHelpers.test.ts.

// slide 4: angle bisector
const bisect = { angle: 60, half: 60 / 2 };

// slide 5: three sides
const sss = triangleInequality(4, 5, 7);
const bad = triangleInequality(2, 3, 6);

// "Check yourself"
const c3 = triangleInequality(3, 4, 8);
const c4 = { angle: 90, half: 90 / 2 };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Construct an equilateral triangle with a compass',
    content: slide(
      <>
        <Rule>A construction uses only a compass and a straightedge (a ruler for drawing straight lines). The compass carries a length from one place to another without measuring again.</Rule>
        <EquilateralConstruction side={5} unit="cm" />
        <Worked
          title="An equilateral triangle with sides of 5 cm"
          steps={[
            <>Draw AB = 5 cm with the ruler.</>,
            <>Open the compass to <strong>5 cm</strong>. Put the point on A and draw an arc above AB.</>,
            <>Keep the same width. From B, draw an arc that crosses the first arc at C. Join AC and BC.</>,
          ]}
        />
        <Mistake>Changing the compass width between the two arcs. Then AC and BC are not 5 cm, and the triangle is not equilateral.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bisect a line segment at right angles',
    content: slide(
      <>
        <Rule>The perpendicular bisector cuts a segment in half at 90°. Every point on it is the same distance from both ends of the segment.</Rule>
        <PerpendicularBisector />
        <Worked
          title="Bisect AB"
          steps={[
            <>Open the compass to more than half of AB.</>,
            <>From A, draw one arc above and one below AB. From B, with the same width, do the same: <strong>4 arcs</strong> in all.</>,
            <>Join the two points where the arcs cross. The line cuts AB at its midpoint M, at 90°. Mark the right angle with a small square.</>,
          ]}
        />
        <Mistake>Opening the compass to less than half of AB. The arcs from A and B then never meet, so there is nothing to join.</Mistake>
      </>,
    ),
  },
  {
    title: 'Construct a perpendicular at a point on a line',
    content: slide(
      <>
        <Rule>To draw a line at 90° through a point on a line, first mark the point, then make it the midpoint of a segment and bisect that segment.</Rule>
        <PerpendicularAtPoint />
        <Worked
          steps={[
            <>Mark the point P on the line.</>,
            <>With the point of the compass on P, draw arcs that cut the line at A and B. Now PA = PB.</>,
            <>Open the compass wider. Draw equal arcs from A and from B that cross at Q. Join PQ: it is perpendicular to the line.</>,
          ]}
        />
        <Mistake>Drawing the arcs from A and B with different widths. Q is then not equally far from A and B, so PQ leans and is not at 90°.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bisect an angle',
    content: slide(
      <>
        <Rule>An angle bisector cuts an angle into two equal angles. Arcs of equal radius find a point that is the same distance from both arms.</Rule>
        <AngleBisectorConstruction angle={bisect.angle} />
        <Worked
          title={`Bisect a ${bisect.angle}° angle at O`}
          steps={[
            <>With the compass point on O, draw an arc that cuts both arms, at P and Q.</>,
            <>With the same width, draw an arc from P and an arc from Q. They cross at R.</>,
            <>Join OR. The two new angles are each {bisect.angle}° ÷ 2 = <strong>{bisect.half}°</strong>.</>,
          ]}
        />
        <Mistake>Using a protractor to find the halfway mark. In a construction you use the compass and straightedge; a protractor only checks the result.</Mistake>
      </>,
    ),
  },
  {
    title: 'Construct a triangle from three sides',
    content: slide(
      <>
        <Rule>First check the triangle inequality: the two shorter sides must add up to more than the longest side. Then draw the longest side and use arcs for the other two.</Rule>
        <SSSConstruction base={7} left={4} right={5} unit="cm" />
        <Worked
          title="Sides 4 cm, 5 cm and 7 cm"
          steps={[
            <>Check: 4 + 5 = {sss.shortSum} &gt; {sss.longest}, so the triangle <strong>can</strong> be drawn.</>,
            <>Draw the 7 cm base. From the left end draw an arc of radius 4 cm; from the right end an arc of radius 5 cm.</>,
            <>Join both ends to the point where the arcs cross.</>,
          ]}
        />
        <Mistake>Trying any three lengths. With 2 cm, 3 cm and 6 cm, 2 + 3 = {bad.shortSum}, which is less than {bad.longest}: the arcs never meet, so there is no triangle.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>You construct an equilateral triangle with sides of 6 cm. What compass width do you use?</>,
          <>How many arcs do you draw to bisect a line segment, and what do you join?</>,
          <>Can you construct a triangle with sides 3 cm, 4 cm and 8 cm? Why?</>,
          <>You bisect a right angle. What size is each new angle?</>,
        ]}
        answers={[
          <>6 cm, the same for every arc.</>,
          <>4 arcs (2 from each end); join the two points where they cross.</>,
          <>{c3.ok ? 'Yes' : 'No'}: 3 + 4 = {c3.shortSum}, which is less than {c3.longest}.</>,
          <>{c4.angle}° ÷ 2 = {c4.half}°</>,
        ]}
      />,
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'To construct an angle bisector, which tool is essential?',
    options: ['Protractor only', 'Ruler only', 'Compass and straightedge', 'Calculator'],
    answer: 'Compass and straightedge',
    explanation: 'A compass is used to mark equal arcs, and a straightedge draws the bisector line.',
  },
  {
    prompt: 'What is the first step in constructing a perpendicular to a line?',
    options: ['Mark a point on the line', 'Draw a circle', 'Measure an angle', 'Find the midpoint'],
    answer: 'Mark a point on the line',
    explanation: 'You begin by identifying where the perpendicular will meet the original line.',
  },
  {
    prompt: 'To construct an equilateral triangle with side length 5 cm, what is the compass width?',
    options: ['2,5 cm', '5 cm', '10 cm', 'Varies'],
    answer: '5 cm',
    explanation: 'All sides of an equilateral triangle are equal, so the compass width equals the side length.',
  },
  {
    prompt: 'How many arcs do you draw to construct the perpendicular bisector of a line segment?',
    options: ['2', '4', '6', '8'],
    answer: '4',
    explanation: 'Two arcs above and two below the segment (one from each endpoint).',
  },
  {
    prompt: 'What property ensures a constructed perpendicular is actually perpendicular?',
    options: ['Equal distances from endpoints', 'Compass arc consistency', 'Straight line use', 'All of the above'],
    answer: 'All of the above',
    explanation: 'These properties work together to guarantee a 90° angle.',
  },
  {
    prompt: 'In constructing a triangle given three sides (SSS), what must you verify?',
    options: ['Angles are 60°', 'The triangle inequality holds', 'Sides are equal', 'All angles sum to 90°'],
    answer: 'The triangle inequality holds',
    explanation: 'The sum of any two sides must exceed the third side for a valid triangle.',
  },
  {
    prompt: 'Which construction creates two angles of equal measure from an original angle?',
    options: ['Perpendicular bisector', 'Angle bisector', 'Parallel line', 'Altitude'],
    answer: 'Angle bisector',
    explanation: 'An angle bisector divides an angle into two equal parts.',
  },
  {
    prompt: 'What notation typically indicates a right angle in geometric construction?',
    options: ['An arc', 'A small square', 'A curved line', 'Dotted lines'],
    answer: 'A small square',
    explanation: 'A small square in the corner indicates a 90° angle in geometric diagrams.',
  },
];

const GeometryConstructions = () => (
  <CapsSubjectTopic
    title="Construction of Geometric Figures"
    subtitle="Accurate geometric constructions with tools and justification"
    learnSteps={learnSteps}
    task="gr9-geometry-constructions-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default GeometryConstructions;
