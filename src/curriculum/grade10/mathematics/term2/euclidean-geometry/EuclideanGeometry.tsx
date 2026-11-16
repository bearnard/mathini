import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { MidpointTriangle, ParallelogramAngles, QuadrilateralFamily, SimilarTriangles } from '../../../../../components/diagrams/maths/Grade10Maths';
import * as g from '../../../../../components/diagrams/maths/grade10Helpers2';

// Every number in the slides below comes from the tested helpers in grade10Helpers2.ts (grade10Helpers2.test.ts, g10MathsLessons.test.ts).

// slide 2: angles
const angA = 65;
const angB = g.coInterior(angA);
const trapA = 80;
const trapD = g.coInterior(trapA);
const x35 = 35; // (3x − 10)° = (2x + 25)°
const solved = 3 * x35 - 10;

// slide 3: midpoint theorem
const bc = 14;
const de = g.midSegment(bc);
// DE = (3x − 1), BC = (4x + 6): 2(3x − 1) = 4x + 6 -> x = 4
const xMid = 4;

// slide 4: similarity
const k = 2;
const base = 3;
const side = 5;
const areaRatio = k * k;

// "Check yourself"
const c1 = g.interiorAngleSum(4) - 90 - 90 - 60; // quadrilateral with angles 90, 90, 60
const c2 = g.coInterior(48);
const c3 = g.midSegment(22);
const c4 = g.scaled(9, g.scaleFactor(6, 8));

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The special quadrilaterals',
    content: slide(
      <>
        <Rule>Each special quadrilateral has properties you can use as reasons. A parallelogram has both pairs of opposite sides parallel. The others add more.</Rule>
        <QuadrilateralFamily />
        <Worked
          steps={[
            <><strong>Parallelogram:</strong> opposite sides parallel and equal, opposite angles equal, diagonals bisect each other.</>,
            <><strong>Rectangle:</strong> a parallelogram with four right angles; the diagonals are equal.</>,
            <><strong>Rhombus:</strong> a parallelogram with four equal sides; the diagonals bisect each other at 90° and bisect the angles.</>,
            <><strong>Square:</strong> a rectangle and a rhombus. <strong>Kite:</strong> two pairs of adjacent sides equal, diagonals meet at 90°. <strong>Trapezium:</strong> one pair of parallel sides.</>,
          ]}
        />
        <Mistake>
          Saying a rectangle has equal diagonals that meet at 90°. Equal diagonals belong to rectangles; diagonals at 90° belong to rhombuses and kites. A square has both.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Angles in quadrilaterals',
    content: slide(
      <>
        <Rule>The angles of a quadrilateral add up to 360°. In a parallelogram opposite angles are equal and neighbouring angles add up to 180° (co-interior angles between parallel lines).</Rule>
        <ParallelogramAngles a={angA} />
        <Worked
          steps={[
            <>Parallelogram with A = {angA}°: C = {angA}° (opposite) and B = 180° − {angA}° = <strong>{angB}°</strong>, D = {angB}°.</>,
            <>Check: {angA} + {angB} + {angA} + {angB} = {2 * angA + 2 * angB}°.</>,
            <>Trapezium with AB ∥ DC and A = {trapA}°: D = 180° − {trapA}° = <strong>{trapD}°</strong>.</>,
            <>Algebra: opposite angles (3x − 10)° and (2x + 25)° are equal, so x = {x35} and each angle is <strong>{solved}°</strong>.</>,
          ]}
        />
        <Mistake>
          Making opposite angles add up to 180°. Opposite angles of a parallelogram are equal; it is the neighbouring (co-interior) angles that add up to 180°.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'The midpoint theorem',
    content: slide(
      <>
        <Rule>The line joining the midpoints of two sides of a triangle is parallel to the third side and half as long. The converse: a line through the midpoint of one side, parallel to the base, bisects the other side.</Rule>
        <MidpointTriangle bc={bc} />
        <Worked
          steps={[
            <>D and E are the midpoints of AB and AC and BC = {bc} cm. Then DE ∥ BC and DE = {bc} ÷ 2 = <strong>{de} cm</strong>.</>,
            <>Writing the reason: "midpoint theorem".</>,
            <>Algebra: DE = (3x − 1) and BC = (4x + 6). BC = 2 × DE, so 4x + 6 = 6x − 2, 8 = 2x and x = <strong>{xMid}</strong>.</>,
            <>Check: DE = 3({xMid}) − 1 = {3 * xMid - 1} and BC = 4({xMid}) + 6 = {4 * xMid + 6} = 2 × {3 * xMid - 1} ✓.</>,
          ]}
        />
        <Mistake>
          Saying DE equals BC, or that DE is a third of BC. It is exactly half, and only when D and E are both midpoints.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Congruent and similar triangles',
    content: slide(
      <>
        <Rule>Congruent triangles are the same size and shape (SSS, SAS, AAS or RHS). Similar triangles have equal angles and sides in the same ratio k, but the areas are in the ratio k².</Rule>
        <SimilarTriangles sides={[base, side]} k={k} />
        <Worked
          steps={[
            <>Small triangle: base {base} cm and side {side} cm. The large one has equal angles and a base of {base * k} cm, so k = {base * k} ÷ {base} = <strong>{k}</strong>.</>,
            <>The matching side is {side} × {k} = <strong>{side * k} cm</strong>.</>,
            <>The area is {k}² = <strong>{areaRatio}</strong> times as big.</>,
            <>To prove two triangles congruent, give the reason: two sides and the angle between them equal is SAS.</>,
          ]}
        />
        <Mistake>
          Thinking a triangle that is twice as long is twice the area. Both the base and the height double, so the area becomes 2 × 2 = 4 times as big.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>A quadrilateral has angles of 90°, 90° and 60°. What is the fourth angle?</>,
          <>In a parallelogram one angle is 48°. How big is a neighbouring angle?</>,
          <>D and E are the midpoints of AB and AC and BC = 22 cm. How long is DE?</>,
          <>Triangles are similar. A side of 6 cm matches a side of 8 cm. What does a 9 cm side match?</>,
        ]}
        answers={[
          <>360° − 90° − 90° − 60° = <strong>{c1}°</strong>.</>,
          <>Neighbouring angles add up to 180°: 180° − 48° = <strong>{c2}°</strong>.</>,
          <>Half of 22: <strong>{c3} cm</strong>.</>,
          <>k = 8 ÷ 6 = 4/3. 9 × 4/3 = <strong>{g.fracStr(c4)} cm</strong>.</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "What is the sum of the interior angles of any quadrilateral?",
    options: ["180°", "360°", "270°", "540°"],
    answer: "360°",
    explanation: "A quadrilateral splits into two triangles: 2 × 180° = 360°.",
  },
  {
    prompt: "In parallelogram ABCD, angle A = 70°. What is angle B?",
    options: ["110°", "70°", "20°", "290°"],
    answer: "110°",
    explanation: "Angles A and B are co-interior angles between the parallel sides AD and BC, so they add up to 180°: 180° − 70° = 110°.",
  },
  {
    prompt: "Which statement about the diagonals of a rhombus is true?",
    options: ["They are equal in length", "They bisect each other but are not perpendicular", "They are parallel to each other", "They bisect each other at right angles"],
    answer: "They bisect each other at right angles",
    explanation: "In a rhombus the diagonals bisect each other at 90° (and bisect the angles). They are only equal if the rhombus is a square.",
  },
  {
    prompt: "Which quadrilateral always has diagonals that are equal and bisect each other?",
    options: ["Rhombus", "Kite", "Rectangle", "Parallelogram that is not a rectangle"],
    answer: "Rectangle",
    explanation: "The diagonals of a rectangle are equal (and bisect each other). In a rhombus they are perpendicular but not equal.",
  },
  {
    prompt: "What is true about the diagonals of a kite?",
    options: ["They bisect each other", "They meet at right angles", "They are equal in length", "They are parallel"],
    answer: "They meet at right angles",
    explanation: "The diagonals of a kite are perpendicular. Only the diagonal of symmetry is bisected by the other one.",
  },
  {
    prompt: "In triangle ABC, D and E are the midpoints of AB and AC. If BC = 18 cm, how long is DE?",
    options: ["9 cm", "36 cm", "18 cm", "6 cm"],
    answer: "9 cm",
    explanation: "By the midpoint theorem the line joining the midpoints of two sides is parallel to the third side and half as long: 18 ÷ 2 = 9 cm.",
  },
  {
    prompt: "In triangle ABC, D is the midpoint of AB and DE is parallel to BC, with E on AC. What can you conclude?",
    options: ["E is the midpoint of BC", "DE = BC", "Angle A = 90°", "E is the midpoint of AC"],
    answer: "E is the midpoint of AC",
    explanation: "This is the converse of the midpoint theorem: a line through the midpoint of one side, parallel to the base, bisects the other side.",
  },
  {
    prompt: "In triangles ABC and PQR, AB = PQ, angle B = angle Q and BC = QR. Which condition makes them congruent: SAS, RHS, SSS or AAS?",
    options: ["RHS", "SSS", "SAS", "AAS"],
    answer: "SAS",
    explanation: "Two sides and the angle between them are equal, so the triangles are congruent by side-angle-side (SAS).",
  },
  {
    prompt: "Triangle ABC is similar to triangle DEF with AB = 4 cm, DE = 10 cm and BC = 6 cm. How long is EF?",
    options: ["12 cm", "15 cm", "7,5 cm", "9 cm"],
    answer: "15 cm",
    explanation: "The scale factor is DE ÷ AB = 10 ÷ 4 = 2,5. EF = 6 × 2,5 = 15 cm.",
  },
  {
    prompt: "In parallelogram ABCD, angle A = (2x + 10)° and angle C = 70°. What is x?",
    options: ["30", "35", "60", "15"],
    answer: "30",
    explanation: "Opposite angles of a parallelogram are equal: 2x + 10 = 70, so 2x = 60 and x = 30.",
  },
  {
    prompt: "ABCD is a rectangle with diagonal AC = 13 cm and side AB = 5 cm. How long is BC?",
    options: ["8 cm", "18 cm", "144 cm", "12 cm"],
    answer: "12 cm",
    explanation: "Triangle ABC has a right angle at B. By Pythagoras BC² = 13² − 5² = 169 − 25 = 144, so BC = 12 cm.",
  },
  {
    prompt: "In trapezium ABCD, AB ∥ DC and angle A = 65°. What is angle D?",
    options: ["65°", "25°", "115°", "295°"],
    answer: "115°",
    explanation: "A and D are co-interior angles between the parallel lines AB and DC, so they add up to 180°: 180° − 65° = 115°.",
  },
  {
    prompt: "Which statement about a square is true?",
    options: ["It is a kite but not a rhombus", "It is both a rectangle and a rhombus", "It has only one pair of parallel sides", "Its diagonals are not equal"],
    answer: "It is both a rectangle and a rhombus",
    explanation: "A square has four equal sides (rhombus) and four right angles (rectangle), so it has all the properties of both.",
  },
  {
    prompt: "A rhombus has sides of 10 cm and one diagonal of 12 cm. How long is the other diagonal?",
    options: ["16 cm", "8 cm", "20 cm", "12 cm"],
    answer: "16 cm",
    explanation: "The diagonals bisect each other at 90°. Half the diagonals are 6 and x, so 6² + x² = 10², x = 8. The other diagonal is 2 × 8 = 16 cm.",
  },
];
// BANK:END

const EuclideanGeometry = () => (
  <CapsSubjectTopic
    title="Euclidean Geometry: Quadrilaterals and Triangles"
    subtitle="Special quadrilaterals, the midpoint theorem, congruence and similarity"
    learnSteps={learnSteps}
    task="gr10-euclidean-geometry-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default EuclideanGeometry;
