import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { ShapeOnGrid } from '../../../../components/diagrams/maths/Grade6Maths';
import * as t from '../../../../components/diagrams/maths/grade6Transform';

// Every number in the slides below comes from the tested helpers in grade6Transform.ts (grade6Transform.test.ts, g6MathsNewBank.test.ts).
// CAPS Grade 6 Term 4: draw larger or smaller copies of triangles and quadrilaterals by multiplying the lengths of all sides by the same number (e.g. doubling).
const small: t.Pt[] = [[0, 9], [3, 9], [0, 5]]; // right-angled, short sides 3 (bottom) and 4 (left), hypotenuse 5; the bottom-left corner stays fixed
const big = t.scaleFrom(small, 2, 1);
const sides = [3, 4, 5];
const bigSides = t.scaleLengths(sides, 2, 1);
const c = { a: t.scaleLengths([2, 3, 4], 3, 1), b: t.perimeter(t.scaleLengths([6, 8, 10], 1, 2)), d: t.rectArea(2 * 2, 3 * 2) };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Enlarging a triangle',
    content: slide(
      <>
        <Rule>An enlargement makes a bigger copy of a shape. Multiply the length of every side by the same number, for example 2 to double. The enlarged shape has the same shape as the original, only the size is different.</Rule>
        <ShapeOnGrid cols={9} rows={9} shapes={[{ pts: small, sideLabels: [String(sides[0]), String(sides[2]), String(sides[1])] }, { pts: big, dashed: true, sideLabels: [String(bigSides[0]), String(bigSides[2]), String(bigSides[1])] }]} aria="A small right-angled triangle with sides of 3, 4 and 5, and a bigger copy with every side doubled to 6, 8 and 10. The two triangles have the same shape." />
        <Worked
          title="Doubling every side"
          steps={[
            <>The sides are {sides.join(', ')}. Doubling each one: {sides.map((s, i) => `${s} × 2 = ${bigSides[i]}`).join(', ')}.</>,
            <>The new triangle has sides of <strong>{bigSides.join(', ')}</strong>.</>,
            <>Its perimeter is {bigSides.join(' + ')} = <strong>{t.perimeter(bigSides)}</strong>, double the old perimeter of {t.perimeter(sides)}.</>,
            <>The angles stay the same, so the shape stays the same.</>,
          ]}
        />
        <Mistake>Adding 2 to every side. An enlargement multiplies: 3 + 2 = 5 does not double the 3.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reducing a shape',
    content: slide(
      <>
        <Rule>A reduction makes a smaller copy. Divide the length of every side by the same number, for example by 2 to halve. The shape stays the same, and only the size gets smaller.</Rule>
        <ShapeOnGrid cols={9} rows={9} shapes={[{ pts: big, sideLabels: [String(bigSides[0]), String(bigSides[2]), String(bigSides[1])] }, { pts: small, dashed: true, sideLabels: [String(sides[0]), String(sides[2]), String(sides[1])] }]} aria="A big right-angled triangle with sides of 6, 8 and 10, and a smaller copy with every side halved to 3, 4 and 5. The two triangles have the same shape." />
        <Worked
          title="Halving every side"
          steps={[
            <>The sides are {bigSides.join(', ')}. Halving each one: {bigSides.map((s, i) => `${s} ÷ 2 = ${sides[i]}`).join(', ')}.</>,
            <>The reduced triangle has sides of <strong>{sides.join(', ')}</strong>.</>,
            <>Its perimeter is <strong>{c.b}</strong>, half of {t.perimeter(bigSides)}.</>,
            <>Enlarging and then reducing by the same number takes you back to the first shape.</>,
          ]}
        />
        <Mistake>Subtracting from the sides. To halve, divide by 2. Taking 2 away from every side changes the shape.</Mistake>
      </>,
    ),
  },
  {
    title: 'Quadrilaterals and area',
    content: slide(
      <>
        <Rule>To enlarge a rectangle or other quadrilateral, multiply all its sides by the same number. If you change only one pair of opposite sides, the shape changes. When both sides of a rectangle are doubled, the area becomes 4 times as big.</Rule>
        <ShapeOnGrid cols={9} rows={8} shapes={[{ pts: [[0, 5], [3, 5], [3, 3], [0, 3]], sideLabels: ['3', '2', '3', '2'] }, { pts: [[0, 5], [6, 5], [6, 1], [0, 1]], dashed: true, sideLabels: ['6', '4', '6', '4'] }]} aria="A rectangle 3 squares long and 2 wide and a bigger rectangle with both sides doubled, 6 long and 4 wide." />
        <Worked
          title="Doubling both sides of a rectangle"
          steps={[
            <>A 3 by 2 rectangle has an area of {t.rectArea(3, 2)}. Double both sides: <strong>6 by 4</strong>.</>,
            <>The new area is 6 × 4 = <strong>{t.rectArea(6, 4)}</strong>, which is {t.rectArea(6, 4) / t.rectArea(3, 2)} times the old area.</>,
            <>Doubling both sides makes the area {t.areaFactor(2)} times as big, because 2 × 2 = {t.areaFactor(2)}.</>,
            <>If only the length is doubled, 6 by 2, the shape is no longer a copy: its shape has changed.</>,
          ]}
        />
        <Mistake>Thinking the area doubles when both sides double. The area gets 4 times as big, because both the length and the breadth are doubled.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>A triangle has sides of 2, 3 and 4. All the sides are made 3 times as long. What are the new sides?</>,
            <>A triangle has sides of 6, 8 and 10. All the sides are halved. What is the new perimeter?</>,
            <>A 2 by 3 rectangle has both sides doubled. What is the new area?</>,
            <>What stays the same in an enlargement?</>,
          ]}
          answers={[
            <>2 × 3 = 6, 3 × 3 = 9 and 4 × 3 = 12: <strong>{c.a.join(', ')}</strong>.</>,
            <>The sides become 3, 4 and 5: 3 + 4 + 5 = <strong>{c.b}</strong>.</>,
            <>The new sides are 4 and 6: 4 × 6 = <strong>{c.d}</strong>.</>,
            <>The <strong>shape</strong> and the size of the angles.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
export const bank: CapsItem[] = [
  {
    prompt: "A triangle has sides of 3 cm, 4 cm and 5 cm. All the sides are doubled to make an enlargement. How long is the side that was 5 cm?",
    options: ["7 cm", "10 cm", "2,5 cm", "25 cm"],
    answer: "10 cm",
    explanation: "Doubling means multiplying by 2: 5 × 2 = 10 cm.",
  },
  {
    prompt: "A triangle has sides of 3 cm, 4 cm and 5 cm. All the sides are doubled. What is the perimeter of the enlarged triangle?",
    options: ["24 cm", "12 cm", "17 cm", "48 cm"],
    answer: "24 cm",
    explanation: "The new sides are 6, 8 and 10 cm: 6 + 8 + 10 = 24 cm.",
  },
  {
    prompt: "A triangle has sides of 2 cm, 3 cm and 4 cm. All the sides are made 3 times as long. What are the new sides?",
    options: ["5 cm, 6 cm, 7 cm", "2 cm, 3 cm, 12 cm", "6 cm, 3 cm, 4 cm", "6 cm, 9 cm, 12 cm"],
    answer: "6 cm, 9 cm, 12 cm",
    explanation: "Multiply every side by 3: 2 × 3 = 6, 3 × 3 = 9 and 4 × 3 = 12.",
  },
  {
    prompt: "A triangle has sides of 12 cm, 16 cm and 20 cm. A reduction halves all the sides. How long is the side that was 16 cm?",
    options: ["32 cm", "4 cm", "8 cm", "14 cm"],
    answer: "8 cm",
    explanation: "Halving means dividing by 2: 16 ÷ 2 = 8 cm.",
  },
  {
    prompt: "What stays the same when a triangle is enlarged by multiplying all its sides by 2?",
    options: ["The length of its sides", "The size of its angles", "Its perimeter", "Its area"],
    answer: "The size of its angles",
    explanation: "The shape stays the same, so the angles are the same. The sides, the perimeter and the area all change.",
  },
  {
    prompt: "What changes when a shape is reduced by halving all its sides?",
    options: ["Its size", "Its shape", "Its angles", "The order of its sides"],
    answer: "Its size",
    explanation: "A reduction makes a smaller copy of the same shape. The size changes, but the shape and the angles do not.",
  },
  {
    prompt: "A rectangle is 4 cm long and 3 cm wide. Both sides are doubled. What are the sides of the enlarged rectangle?",
    options: ["6 cm by 5 cm", "8 cm by 3 cm", "4 cm by 6 cm", "8 cm by 6 cm"],
    answer: "8 cm by 6 cm",
    explanation: "Doubling both sides gives 4 × 2 = 8 cm and 3 × 2 = 6 cm.",
  },
  {
    prompt: "A rectangle is 3 cm by 5 cm. Both sides are doubled to 6 cm by 10 cm. What is the area of the enlarged rectangle?",
    options: ["30 cm²", "15 cm²", "60 cm²", "16 cm²"],
    answer: "60 cm²",
    explanation: "Area = length × breadth = 6 × 10 = 60 cm².",
  },
  {
    prompt: "The area of a rectangle is 15 cm². Both of its sides are doubled. How many times bigger is the area of the new rectangle?",
    options: ["2 times", "4 times", "3 times", "8 times"],
    answer: "4 times",
    explanation: "The old area is 3 × 5 = 15 and the new area is 6 × 10 = 60. 60 ÷ 15 = 4, so the area is 4 times bigger.",
  },
  {
    prompt: "A rectangle 12 cm by 8 cm is reduced by halving all its sides. What is the perimeter of the smaller rectangle?",
    options: ["20 cm", "40 cm", "10 cm", "24 cm"],
    answer: "20 cm",
    explanation: "The new sides are 6 cm and 4 cm: 6 + 4 + 6 + 4 = 20 cm.",
  },
  {
    prompt: "Halve every side of a 12 cm by 8 cm rectangle. What area does the smaller rectangle have?",
    options: ["48 cm²", "96 cm²", "12 cm²", "24 cm²"],
    answer: "24 cm²",
    explanation: "The new sides are 6 cm and 4 cm: 6 × 4 = 24 cm².",
  },
  {
    prompt: "A rectangle is 4 cm by 3 cm. Only the length is doubled to 8 cm and the breadth stays 3 cm. Is the new rectangle an enlargement of the first one?",
    options: ["Yes, because the length is bigger", "Yes, because the area is bigger", "No, because its shape has changed", "No, because its perimeter is smaller"],
    answer: "No, because its shape has changed",
    explanation: "In an enlargement every side is multiplied by the same number. Here only one pair of sides changes, so the shape changes too.",
  },
];
// BANK:END

const Enlargements = () => (
  <CapsSubjectTopic
    title="Enlargements and Reductions"
    subtitle="Drawing larger and smaller copies of triangles and quadrilaterals"
    learnSteps={learnSteps}
    task="gr6-enlargements-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default Enlargements;
