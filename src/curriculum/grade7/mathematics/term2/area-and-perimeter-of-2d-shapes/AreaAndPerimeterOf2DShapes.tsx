import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { LShapePicture, RectChange, RectPicture } from '../../../../../components/diagrams/maths/Grade7Geometry';
import { lShape } from '../../../../../components/diagrams/maths/grade7Helpers';
import { rectMeasures } from '../../../../../components/diagrams/maths/mathsHelpers';

// Every number in the slides below comes from tested helpers (grade7Helpers.test.ts, areaPerimeterLesson.test.ts).
const rect = rectMeasures(8, 5);
const sq = rectMeasures(7, 7);
const comp = lShape(6, 4, 4, 3);
const before = rectMeasures(10, 3);
const after = rectMeasures(12, 3);
const check = { r: rectMeasures(9, 4), s: rectMeasures(6, 6), l: lShape(5, 4, 2, 4) };
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Perimeter: the distance around',
    content: slide(
      <>
        <Rule>The perimeter is the distance around a shape. For a rectangle, perimeter = 2 × (length + width). It is measured in cm.</Rule>
        <RectPicture l={8} w={5} mode="perimeter" />
        <Worked
          title="Rectangle 8 cm by 5 cm"
          steps={[
            <>Add length and width: 8 + 5 = 13.</>,
            <>Double it, because you walk round two of each: 2 × 13 = <strong>{rect.perimeter} cm</strong>.</>,
          ]}
        />
        <Mistake>Adding only two sides. 8 + 5 = 13 is just half the way round.</Mistake>
      </>,
    ),
  },
  {
    title: 'Area: squares inside the shape',
    content: slide(
      <>
        <Rule>Area is the space inside a shape. For a rectangle, area = length × width. It is measured in square units, such as cm².</Rule>
        <RectPicture l={8} w={5} mode="area" />
        <Worked
          title="The same rectangle"
          steps={[
            <>8 squares in each row, and 5 rows.</>,
            <>8 × 5 = <strong>{rect.area} cm²</strong>.</>,
          ]}
        />
        <Mistake>Writing cm instead of cm². Length and perimeter use cm. Area counts squares, so it uses cm².</Mistake>
      </>,
    ),
  },
  {
    title: 'Squares: perimeter and area',
    content: slide(
      <>
        <Rule>A square has four equal sides. Perimeter = 4 × side. Area = side × side.</Rule>
        <RectPicture l={7} w={7} mode="area" />
        <Worked
          title="Square with side 7 cm"
          steps={[
            <>Perimeter: 4 × 7 = <strong>{sq.perimeter} cm</strong>.</>,
            <>Area: 7 × 7 = <strong>{sq.area} cm²</strong>.</>,
          ]}
        />
        <Mistake>Doubling instead of squaring. 7 × 2 = 14 is not the area. The area is 7 × 7.</Mistake>
      </>,
    ),
  },
  {
    title: 'Composite shapes: split and add',
    content: slide(
      <>
        <Rule>Split an L-shape into rectangles. Find each area and add them.</Rule>
        <LShapePicture w1={6} h1={4} w2={4} h2={3} />
        <Worked
          steps={[
            <>Bottom rectangle: 6 × 4 = {comp.area1} cm².</>,
            <>Top rectangle: 4 × 3 = {comp.area2} cm².</>,
            <>Total: {comp.area1} + {comp.area2} = <strong>{comp.area} cm²</strong>.</>,
          ]}
        />
        <Mistake>Adding the perimeters of the two rectangles. The join is inside the shape, so it is not part of the perimeter. This L-shape has a perimeter of {comp.perimeter} cm.</Mistake>
      </>,
    ),
  },
  {
    title: 'When a side changes',
    content: slide(
      <>
        <Rule>Change one measurement, then work out the perimeter again with the same formula.</Rule>
        <RectChange l1={10} l2={12} w={3} />
        <Worked
          title="A rectangle grows from 10 × 3 to 12 × 3"
          steps={[
            <>Before: 2 × (10 + 3) = {before.perimeter} cm.</>,
            <>After: 2 × (12 + 3) = <strong>{after.perimeter} cm</strong>.</>,
            <>The length grew by 2 cm, and there are two lengths, so the perimeter grew by {after.perimeter - before.perimeter} cm.</>,
          ]}
        />
        <Mistake>Adding 2 cm once. A rectangle has two long sides, so the perimeter grows by 2 × 2 = 4 cm.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Find the perimeter and area of a rectangle 9 cm by 4 cm.</li>
            <li>Find the perimeter and area of a square with side 6 cm.</li>
            <li>An L-shape is a 5 × 4 rectangle with a 2 × 4 rectangle added. What is its area?</li>
            <li>Which unit goes with area: cm, cm² or km/h?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Perimeter 2 × (9 + 4) = {check.r.perimeter} cm. Area 9 × 4 = {check.r.area} cm².</li>
            <li>Perimeter 4 × 6 = {check.s.perimeter} cm. Area 6 × 6 = {check.s.area} cm².</li>
            <li>{check.l.area1} + {check.l.area2} = {check.l.area} cm².</li>
            <li>cm², because area counts squares.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the perimeter of a rectangle with length 8 cm and width 5 cm?',
    options: ['26 cm', '40 cm', '13 cm', '30 cm'],
    answer: '26 cm',
    explanation: 'Perimeter = 2(l + w) = 2(8 + 5) = 26 cm.',
  },
  {
    prompt: 'What is the area of the same rectangle (8 cm by 5 cm)?',
    options: ['40 cm²', '26 cm²', '13 cm²', '80 cm²'],
    answer: '40 cm²',
    explanation: 'Area = length × width = 8 × 5 = 40 cm².',
  },
  {
    prompt: 'A square has side 7 cm. What is its perimeter?',
    options: ['28 cm', '49 cm', '14 cm', '21 cm'],
    answer: '28 cm',
    explanation: 'Perimeter of a square = 4 × side = 28 cm.',
  },
  {
    prompt: 'A square has side 7 cm. What is its area?',
    options: ['49 cm²', '28 cm²', '14 cm²', '21 cm²'],
    answer: '49 cm²',
    explanation: 'Area = side × side = 7 × 7 = 49 cm².',
  },
  {
    prompt: 'If a composite shape is split into two rectangles with areas 24 cm² and 12 cm², total area is...',
    options: ['36 cm²', '12 cm²', '48 cm²', '24 cm²'],
    answer: '36 cm²',
    explanation: 'Add the rectangle areas: 24 + 12 = 36 cm².',
  },
  {
    prompt: 'Which unit is correct for area?',
    options: ['cm²', 'cm', 'm', 'km/h'],
    answer: 'cm²',
    explanation: 'Area is measured in square units.',
  },
  {
    prompt: 'Perimeter tells you...',
    options: [
      'the distance around a shape',
      'the amount of space inside a shape',
      'the volume of a shape',
      'the number of angles in a shape',
    ],
    answer: 'the distance around a shape',
    explanation: 'Perimeter is the boundary length.',
  },
  {
    prompt: 'A rectangle changes from 10 cm × 3 cm to 12 cm × 3 cm. What is the new perimeter?',
    options: ['30 cm', '36 cm', '24 cm', '15 cm'],
    answer: '30 cm',
    explanation: 'New perimeter = 2(12 + 3) = 30 cm.',
  },
];

const AreaAndPerimeterOf2DShapes = () => (
  <CapsSubjectTopic
    title="Area and Perimeter of 2D Shapes"
    subtitle="Applying formulas to rectangles, squares, and composite shapes"
    learnSteps={learnSteps}
    task="gr7-area-and-perimeter-of-2d-shapes-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AreaAndPerimeterOf2DShapes;
