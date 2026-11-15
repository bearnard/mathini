import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CircleRadius, ParallelogramHalves, RectangleSides, RectangleWithRoof, UnitSquareGrid } from '../../../../../components/diagrams/maths/Grade9Pictures';
import { rectMeasures } from '../../../../../components/diagrams/maths/mathsHelpers';
import { areaFactor, breadthFromPerimeter, circleMeasures, num, triangleArea } from '../../../../../components/diagrams/maths/grade9Helpers';

// Every number in the slides below comes from these tested helpers (grade9Helpers.test.ts, lessonsMaths8.test.ts).
const S = num;
const sq = <sup className="text-[0.75em] font-bold">2</sup>;

// slide 1: perimeter
const square = 4 * 6;
const back = breadthFromPerimeter(20, 8);
const backCheck = rectMeasures(8, back.breadth).perimeter;
const wrongBack = 20 - 8;

// slide 2: area of rectangles, parallelograms, triangles
const rect = rectMeasures(8, 5).area;
const para = 12 * 5;
const bigPara = 10 * 8;
const tri = triangleArea(10, 8);

// slide 3: circles (π ≈ 3,14)
const c3 = circleMeasures(3);

// slide 4: composite
const house = { rect: 6 * 4, tri: triangleArea(6, 3) };
const houseTotal = house.rect + house.tri;
const houseWrong = house.rect + 6 * 3;

// slide 5: units of area
const mm2 = areaFactor(10);
const cm2 = areaFactor(100);
const ex1 = 3.5 * mm2;
const ex2 = 25000 / cm2;

// "Check yourself"
const q1 = breadthFromPerimeter(30, 9);
const q2 = triangleArea(14, 5);
const q3 = circleMeasures(10);
const q4 = 4.2 * cm2;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Perimeter: the distance around the outside',
    content: slide(
      <>
        <Rule>Perimeter is the total length of all the sides. For a rectangle, P = 2(l + b). For a square, P = 4 × side.</Rule>
        <RectangleSides length={8} breadth={back.breadth} unit="m" caption={`P = 2(8 + ${back.breadth}) = ${backCheck} m`} />
        <Worked
          steps={[
            <>A square with side 6 m: P = 4 × 6 = <strong>{square} m</strong>.</>,
            <>A rectangle has P = 20 m and l = 8 m. Half the perimeter is one length plus one breadth: 20 ÷ 2 = {back.half} m.</>,
            <>b = {back.half} − 8 = <strong>{back.breadth} m</strong>. Check: 2(8 + {back.breadth}) = {backCheck} m ✓</>,
          ]}
        />
        <Mistake>b is not 20 − 8 = {wrongBack} m. The perimeter goes round two lengths and two breadths, so halve it first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Area of rectangles, parallelograms and triangles',
    content: slide(
      <>
        <Rule>Rectangle and parallelogram: A = base × perpendicular height. A diagonal cuts a parallelogram into two equal triangles, so a triangle is A = ½ × base × height.</Rule>
        <ParallelogramHalves base={10} height={8} slant={4} unit="cm" />
        <Worked
          steps={[
            <>Rectangle 8 cm by 5 cm: A = 8 × 5 = <strong>{rect} cm{sq}</strong>.</>,
            <>Parallelogram, base 12 cm, height 5 cm: A = 12 × 5 = <strong>{para} cm{sq}</strong>.</>,
            <>Triangle, base 10 cm, height 8 cm: half of 10 × 8 = {bigPara}, so A = ½ × 10 × 8 = <strong>{tri} cm{sq}</strong>.</>,
          ]}
        />
        <Mistake>Using the slanted side as the height. The height must meet the base at a right angle, like the dashed line.</Mistake>
      </>,
    ),
  },
  {
    title: 'Circles: circumference and area',
    content: slide(
      <>
        <Rule>Circumference C = 2πr (the distance around). Area A = πr{sq} (the space inside). Use π ≈ 3,14 unless told otherwise.</Rule>
        <CircleRadius r={3} unit="cm" caption={`A = 3,14 × ${c3.rSquared} = ${S(c3.area)} cm²`} />
        <Worked
          steps={[
            <>The circle in the picture has r = 3 cm: C = 2 × 3,14 × 3 = <strong>{S(c3.circumference)} cm</strong>.</>,
            <>For the area, r{sq} = 3 × 3 = {c3.rSquared}.</>,
            <>A = 3,14 × {c3.rSquared} = <strong>{S(c3.area)} cm{sq}</strong>.</>,
          ]}
        />
        <Mistake>Only r is squared. 3{sq} = 9, not 3 × 2 = 6. And if you are given the diameter, halve it first to get r.</Mistake>
      </>,
    ),
  },
  {
    title: 'Composite shapes: split, then add',
    content: slide(
      <>
        <Rule>Split a composite shape into shapes you know. Work out each area with its own formula, then add the parts.</Rule>
        <RectangleWithRoof width={6} height={4} roof={3} unit="cm" />
        <Worked
          title="A rectangle 6 cm × 4 cm with a triangle (base 6 cm, height 3 cm) on top"
          steps={[
            <>Rectangle: 6 × 4 = {house.rect} cm{sq}.</>,
            <>Triangle: ½ × 6 × 3 = {house.tri} cm{sq}.</>,
            <>Total: {house.rect} + {house.tri} = <strong>{houseTotal} cm{sq}</strong>.</>,
          ]}
        />
        <Mistake>Forgetting the ½ for the triangle: 6 × 3 = 18 would give {houseWrong} cm{sq}, which is too big.</Mistake>
      </>,
    ),
  },
  {
    title: 'Change units of area',
    content: slide(
      <>
        <Rule>Square the length conversion. 1 cm = 10 mm, so 1 cm{sq} = 10 × 10 = {mm2} mm{sq}. 1 m = 100 cm, so 1 m{sq} = {S(cm2)} cm{sq}.</Rule>
        <UnitSquareGrid split={10} big="cm" small="mm" />
        <Worked
          steps={[
            <>3,5 cm{sq} to mm{sq}: 3,5 × {mm2} = <strong>{S(ex1)} mm{sq}</strong>.</>,
            <>25 000 cm{sq} to m{sq}: 25 000 ÷ {S(cm2)} = <strong>{S(ex2)} m{sq}</strong>.</>,
          ]}
        />
        <Mistake>1 m{sq} is not 100 cm{sq}. A square 1 m by 1 m holds 100 rows of 100 squares of 1 cm{sq}: {S(cm2)} cm{sq}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A rectangle has a perimeter of 30 cm and a length of 9 cm. Find its breadth.</li>
            <li>Find the area of a triangle with base 14 cm and height 5 cm.</li>
            <li>A circle has radius 10 cm. Find its circumference and area (π ≈ 3,14).</li>
            <li>Write 4,2 m{sq} in cm{sq}.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>30 ÷ 2 = {q1.half}; {q1.half} − 9 = {q1.breadth} cm.</li>
            <li>½ × 14 × 5 = {q2} cm{sq}.</li>
            <li>C = 2 × 3,14 × 10 = {S(q3.circumference)} cm; A = 3,14 × {q3.rSquared} = {S(q3.area)} cm{sq}.</li>
            <li>4,2 × {S(cm2)} = {S(q4)} cm{sq}.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'What is the area of a rectangle with length 8 cm and width 5 cm?',
    options: ['13 cm²', '26 cm²', '40 cm²', '65 cm²'],
    answer: '40 cm²',
    explanation: 'Area = length × width = 8 × 5 = 40 cm².',
  },
  {
    prompt: 'The perimeter of a square with side 6 m is:',
    options: ['6 m', '12 m', '24 m', '36 m'],
    answer: '24 m',
    explanation: 'Perimeter = 4 × side = 4 × 6 = 24 m.',
  },
  {
    prompt: 'What is the area of a triangle with base 10 cm and height 8 cm?',
    options: ['40 cm²', '80 cm²', '18 cm²', '20 cm²'],
    answer: '40 cm²',
    explanation: 'Area = ½ × base × height = ½ × 10 × 8 = 40 cm².',
  },
  {
    prompt: 'The circumference of a circle with radius 5 cm is approximately:',
    options: ['15.7 cm', '31.4 cm', '78.5 cm', '10 cm'],
    answer: '31.4 cm',
    explanation: 'Circumference = 2πr = 2 × π × 5 ≈ 31.4 cm.',
  },
  {
    prompt: 'A composite figure consists of a rectangle (6 × 4) and a triangle (base 6, height 3) stacked on top. What is the total area?',
    options: ['24 cm²', '33 cm²', '48 cm²', '57 cm²'],
    answer: '33 cm²',
    explanation: 'Rectangle area = 6 × 4 = 24; Triangle area = ½ × 6 × 3 = 9; Total = 33 cm².',
  },
  {
    prompt: 'The perimeter of a rectangle is 20 m. If the length is 8 m, what is the width?',
    options: ['2 m', '4 m', '5 m', '12 m'],
    answer: '2 m',
    explanation: 'Perimeter = 2(length + width); 20 = 2(8 + w); w = 2 m.',
  },
  {
    prompt: 'What is the area of a circle with radius 3 cm (use π ≈ 3.14)?',
    options: ['6.28 cm²', '9.42 cm²', '28.26 cm²', '18.84 cm²'],
    answer: '28.26 cm²',
    explanation: 'Area = πr² = 3.14 × 3² = 3.14 × 9 ≈ 28.26 cm².',
  },
  {
    prompt: 'A parallelogram has a base of 12 cm and a height of 5 cm. Its area is:',
    options: ['17 cm²', '30 cm²', '60 cm²', '85 cm²'],
    answer: '60 cm²',
    explanation: 'Area of a parallelogram = base × height = 12 × 5 = 60 cm².',
  },
];

const AreaAndPerimeter = () => (
  <CapsSubjectTopic
    title="Area and Perimeter of 2D Shapes"
    subtitle="Formulae and problem solving for compound 2D figures"
    learnSteps={learnSteps}
    task="gr9-area-perimeter-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AreaAndPerimeter;
