import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { ShapeOnGrid } from '../../../../components/diagrams/maths/Grade6Maths';
import * as t from '../../../../components/diagrams/maths/grade6Transform';

// Every number in the slides below comes from the tested helpers in grade6Transform.ts (grade6Transform.test.ts, g6MathsNewBank.test.ts).
// CAPS Grade 6 Term 3: use translation, reflection, rotation and symmetry to DESCRIBE patterns (learners do not have to draw tessellations).
const tri: t.Pt[] = [[1, 1], [1, 3], [3, 3]];
const slid = t.translate(tri, 4, 1);
const mirrorAt = 5;
const flipped = t.reflectInVertical(tri, mirrorAt);
const turnCentre: t.Pt = [3, 3];
const turned = t.rotateQuarter(tri, turnCentre, 1);
const c = { a: t.corner(t.translate([[1, 1]], 2, 3)[0]), b: t.corner(t.reflectInVertical([[0, 4]], 2)[0]), d: 4 * 90 };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Translation: sliding',
    content: slide(
      <>
        <Rule>A translation slides a shape to a new place. The shape does not turn, flip or change size. Say how far it moves, for example 4 squares right and 1 square down.</Rule>
        <ShapeOnGrid cols={9} rows={6} shapes={[{ pts: tri }, { pts: slid, dashed: true }]} aria="A triangle on a grid and the same triangle slid 4 squares right and 1 square down. It faces the same way and is the same size." />
        <Worked
          title="Describing a translation"
          steps={[
            <>The top corner of the triangle moves {slid[0][0] - tri[0][0]} squares right and {slid[0][1] - tri[0][1]} square down.</>,
            <>Every other corner moves {slid[0][0] - tri[0][0]} squares right and {slid[0][1] - tri[0][1]} square down too.</>,
            <>A pattern of hexagons in a honeycomb looks as if one hexagon was translated again and again.</>,
            <>A translation keeps the size and the shape, and the shape faces the same way.</>,
          ]}
        />
        <Mistake>Saying a shape was translated when it also turned. If the shape faces a different way it was rotated or reflected.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reflection: a mirror image',
    content: slide(
      <>
        <Rule>A reflection flips a shape over a mirror line. Each point of the image is the same distance from the mirror line as the original point, on the other side. The image is back to front.</Rule>
        <ShapeOnGrid cols={9} rows={6} shapes={[{ pts: tri }, { pts: flipped, dashed: true }]} mirror={{ axis: 'x', at: mirrorAt }} aria="A triangle on the left of a vertical mirror line and its reflection on the right. The image is back to front and the same distance from the line." />
        <Worked
          title="A triangle and its mirror image"
          steps={[
            <>The right-angle corner is {mirrorAt - tri[2][0]} squares to the left of the mirror line.</>,
            <>Its image is {flipped[2][0] - mirrorAt} squares to the right of the line, in the same row.</>,
            <>A bracelet pattern of triangles often comes from reflecting one triangle again and again.</>,
            <>A reflection keeps the size and the shape but changes which way the shape faces.</>,
          ]}
        />
        <Mistake>Moving the shape the same distance in the same direction. That is a translation. In a reflection the image is on the opposite side of the line.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rotation: turning',
    content: slide(
      <>
        <Rule>A rotation turns a shape around a fixed point called the centre. A quarter turn is one quarter of the way round, so the shape is back where it started after turning four times. The shape stays the same size.</Rule>
        <ShapeOnGrid cols={9} rows={6} shapes={[{ pts: tri }, { pts: turned, dashed: true }]} centre={turnCentre} aria="A triangle and the same triangle after a quarter turn clockwise about a marked centre point. It is the same size and has turned to face a different way." />
        <Worked
          title="A quarter turn about a point"
          steps={[
            <>The centre of the turn is the red point. A quarter turn clockwise sends a point on the left of the centre to above it, and a point on the right to below it.</>,
            <>Turning by a quarter four times is a whole circle, which brings the shape back to where it started: 4 × 90° = <strong>{c.d}°</strong>.</>,
            <>The blades of a windmill pattern are one blade rotated about the middle.</>,
            <>A rotation keeps the size and shape, but the shape faces a different way.</>,
          ]}
        />
        <Mistake>Forgetting the centre. A turn needs a point to turn around, so always say where the centre is.</Mistake>
      </>,
    ),
  },
  {
    title: 'Describing patterns',
    content: slide(
      <>
        <Rule>To describe a pattern, look at the shape that repeats and say how it was moved: translated, reflected or rotated. Also say whether the pattern has lines of symmetry, where one half is the mirror image of the other.</Rule>
        <ShapeOnGrid cols={9} rows={6} shapes={[{ pts: tri }, { pts: flipped, dashed: true }]} mirror={{ axis: 'x', at: mirrorAt }} aria="A pattern of two triangles that are mirror images of each other across a vertical line, which is a line of symmetry of the whole pattern." />
        <Worked
          title="Three patterns from life"
          steps={[
            <>A honeycomb: hexagons that fit together. It looks as if one hexagon was <strong>translated</strong>.</>,
            <>A bead bracelet of triangles: each triangle is the <strong>reflection</strong> of the one before it.</>,
            <>A windmill or a flower: one petal <strong>rotated</strong> about the centre. A doily can also use a parallelogram that is translated.</>,
            <>Symmetry: an equilateral triangle has 3 lines of symmetry and a regular hexagon has 6.</>,
          ]}
        />
        <Mistake>Thinking the pattern in nature was really made this way. A bee does not translate hexagons. We use these words to describe how a similar pattern could be made.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>A shape slides 2 squares right and 3 squares down. Its corner was at B2. Where is it now?</>,
            <>A point at A5 is reflected in a vertical mirror line down the middle of column C. Where is its image?</>,
            <>Which transformation turns a shape around a point?</>,
            <>A shape is turned a quarter of the way round twice. What fraction of a full circle is that?</>,
          ]}
          answers={[
            <>2 columns right from B gives C, then D; 3 rows down from 2 gives 5: <strong>{c.a}</strong>.</>,
            <>A is 2 columns left of the mirror line in column C, so the image is 2 columns to the right: <strong>{c.b}</strong>.</>,
            <>A <strong>rotation</strong>.</>,
            <>Two quarters make <strong>a half</strong> of the way round.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
export const bank: CapsItem[] = [
  {
    prompt: "A pattern is made by sliding a hexagon across the page again and again, without turning or flipping it. Which transformation is this?",
    options: ["Reflection", "Translation", "Rotation", "Enlargement"],
    answer: "Translation",
    explanation: "Sliding a shape to a new place without turning or flipping it is a translation.",
  },
  {
    prompt: "A bracelet pattern is made by flipping a triangle over a line, like its image in a mirror. Which transformation is this?",
    options: ["Reflection", "Translation", "Rotation", "Reduction"],
    answer: "Reflection",
    explanation: "A mirror image over a line is a reflection.",
  },
  {
    prompt: "Each blade of a windmill pattern is the blade before it turned around the centre point. Which transformation is this?",
    options: ["Reflection", "Translation", "Enlargement", "Rotation"],
    answer: "Rotation",
    explanation: "Turning a shape around a fixed point is a rotation.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. A triangle has a corner at C2. The triangle is translated 3 squares right and 1 square down. Where is that corner now?",
    options: ["F2", "C5", "F3", "E4"],
    answer: "F3",
    explanation: "Moving 3 columns right from C takes you to D, E and F. Moving 1 row down makes row 2 into row 3: F3.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. A corner of a shape moves from B2 to E5 in a translation. Which move was it?",
    options: ["3 squares right and 3 squares up", "3 squares right and 3 squares down", "4 squares right and 3 squares down", "3 squares left and 3 squares down"],
    answer: "3 squares right and 3 squares down",
    explanation: "B to E is 3 columns to the right, and row 2 to row 5 is 3 rows down.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. A point at B3 is reflected in a mirror line that runs down the middle of column D. Where is its image?",
    options: ["F3", "D3", "B5", "E3"],
    answer: "F3",
    explanation: "B is 2 columns to the left of the mirror line in column D, so the image is 2 columns to the right: F. The row stays 3.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. A point at C2 is reflected in a mirror line along the edge between row 3 and row 4. Where is its image?",
    options: ["C4", "C6", "F2", "C5"],
    answer: "C5",
    explanation: "Row 2 is 1 row above row 3, which touches the mirror line. The image is the same distance below the line, in row 5.",
  },
  {
    prompt: "How many lines of symmetry does an equilateral triangle have?",
    options: ["1", "2", "3", "6"],
    answer: "3",
    explanation: "An equilateral triangle can be folded onto itself in 3 ways, one for each corner.",
  },
  {
    prompt: "How many lines of symmetry does a regular hexagon have?",
    options: ["3", "6", "4", "12"],
    answer: "6",
    explanation: "A regular hexagon has 6 lines of symmetry: 3 through opposite corners and 3 through the middles of opposite sides.",
  },
  {
    prompt: "How many lines of symmetry does a rectangle that is not a square have?",
    options: ["2", "1", "4", "0"],
    answer: "2",
    explanation: "A rectangle that is not a square has 2 lines of symmetry: one through the middles of each pair of opposite sides.",
  },
  {
    prompt: "The pattern on a cloth looks exactly the same on both sides of a vertical line down the middle. What does this show?",
    options: ["The pattern was enlarged by doubling", "The pattern is a reduction of itself", "The pattern has been translated", "The pattern has a line of symmetry"],
    answer: "The pattern has a line of symmetry",
    explanation: "When one half is the mirror image of the other half, the middle line is a line of symmetry.",
  },
  {
    prompt: "How many quarter turns make a full turn?",
    options: ["2", "3", "4", "8"],
    answer: "4",
    explanation: "Four quarter turns make one full turn back to where you started: 4 × 90° = 360°.",
  },
];
// BANK:END

const Transformations = () => (
  <CapsSubjectTopic
    title="Transformations in Patterns"
    subtitle="Describing patterns with translation, reflection, rotation and symmetry"
    learnSteps={learnSteps}
    task="gr6-transformations-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default Transformations;
