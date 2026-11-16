import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { CubeStack, CubeViews, ObjectViews } from '../../../../components/diagrams/maths/Grade6Maths';
import * as v from '../../../../components/diagrams/maths/grade6Views';

// Every number in the slides below comes from the tested helpers in grade6Views.ts (grade6Views.test.ts, g6MathsNewBank.test.ts).
// CAPS Grade 6 Term 3: match views of everyday objects, collections of objects and composite geometric objects with the position of the viewer.
const rowH: v.Heights = [[1, 3, 2]];
const twoH: v.Heights = [[1, 2], [3, 1]];
const c = { front: v.frontView([[4, 1, 2]]), back: v.backView([[4, 1, 2]]), total: v.totalCubes([[4, 1, 2]]), left: v.leftView([[2, 2], [1, 3]]) };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What you see depends on where you stand',
    content: slide(
      <>
        <Rule>The same object looks different from different places. A viewer can be in front, behind, on the left, on the right or above. We list what a viewer sees from left to right, as that viewer sees it.</Rule>
        <CubeStack heights={rowH} />
        <Worked
          title="A row of towers made of cubes"
          steps={[
            <>The row is one cube deep and has towers of {rowH[0].join(', ')} cubes from left to right as you see it from the front.</>,
            <>The front viewer sees <strong>{v.listText(v.frontView(rowH))}</strong>.</>,
            <>The viewer behind faces the other way, so the towers come in the opposite order: <strong>{v.listText(v.backView(rowH))}</strong>.</>,
            <>The total number of cubes is {rowH[0].join(' + ')} = <strong>{v.totalCubes(rowH)}</strong>.</>,
          ]}
        />
        <Mistake>Giving the same list for the back view. The viewer behind has their left where the front viewer has their right, so the order is reversed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Front, side and top views',
    content: slide(
      <>
        <Rule>From the side of a row that is one cube deep you see only one tower, because the towers stand in a line behind one another. The tallest tower is what you see. From above you see only the squares that the towers stand on.</Rule>
        <CubeViews heights={rowH} />
        <Worked
          title="Three views of the row"
          steps={[
            <>Front view: {v.listText(v.frontView(rowH))} cubes high.</>,
            <>Right-side view: one column, as tall as the tallest tower: <strong>{v.rightView(rowH)[0]}</strong> cubes high.</>,
            <>Top view: {v.footprint(rowH)} squares in a row, one for each tower. The numbers show how high each tower is.</>,
            <>The top view does not tell you how tall the towers are unless the numbers are written on it.</>,
          ]}
        />
        <Mistake>Drawing three separate towers in the side view. Towers behind one another hide each other, so the side view shows only the tallest.</Mistake>
      </>,
    ),
  },
  {
    title: 'Composite objects with two rows',
    content: slide(
      <>
        <Rule>When objects are put together in rows, look along each line of sight. A viewer sees the tallest tower in that line, because it hides the shorter ones behind or in front of it.</Rule>
        <CubeStack heights={twoH} />
        <CubeViews heights={twoH} />
        <Worked
          title="A structure with two rows"
          steps={[
            <>The front row has towers {twoH[0].join(' and ')}, and the back row has towers {twoH[1].join(' and ')}.</>,
            <>Front view: left column {Math.max(twoH[0][0], twoH[1][0])}, right column {Math.max(twoH[0][1], twoH[1][1])}: <strong>{v.listText(v.frontView(twoH))}</strong>.</>,
            <>Right-side view: the front row is on the viewer&apos;s left (tallest {v.rightView(twoH)[0]}) and the back row is on the right (tallest {v.rightView(twoH)[1]}): <strong>{v.listText(v.rightView(twoH))}</strong>.</>,
            <>Altogether there are {twoH.flat().join(' + ')} = <strong>{v.totalCubes(twoH)}</strong> cubes.</>,
          ]}
        />
        <Mistake>Forgetting which row is at the viewer&apos;s left. From the right, the front row is on the viewer&apos;s left. From the left, it is on the viewer&apos;s right.</Mistake>
      </>,
    ),
  },
  {
    title: 'Everyday and geometric objects',
    content: slide(
      <>
        <Rule>Everyday objects are made of geometric shapes. A tin is a cylinder, a party hat is a cone and a dice is a cube. Think about the flat shape that the viewer sees from the front, from the side and from above.</Rule>
        <ObjectViews kind="cylinder" />
        <Worked
          title="Views of a cylinder, a cone and a cube"
          steps={[
            <>A cylinder standing upright: from the front a <strong>rectangle</strong>, from above a <strong>circle</strong>.</>,
            <>A cone standing on its base: from the front a <strong>triangle</strong>, from above a circle with a dot in the middle.</>,
            <>A cube: a <strong>square</strong> from every side and from above.</>,
            <>To match a view to a viewer, ask: where would I have to stand to see this flat shape?</>,
          ]}
        />
        <Mistake>Saying that a cylinder looks like a circle from the front. The curved side makes a rectangle, and the circle is only the top.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>A row of towers is 4, 1 and 2 cubes high from left to right as seen from the front. What does a viewer behind the row see?</>,
            <>How many cubes are in that row?</>,
            <>A viewer on the left of a structure with a front row of 2 and 2 and a back row of 1 and 3 looks along each row. What do they see from left to right?</>,
            <>What does a cone standing on its base look like from above?</>,
          ]}
          answers={[
            <>The order is reversed: <strong>{v.listText(c.back)}</strong>.</>,
            <>4 + 1 + 2 = <strong>{c.total}</strong> cubes.</>,
            <>The back row (tallest 3) is on the viewer&apos;s left, the front row (tallest 2) on the right: <strong>{v.listText(c.left)}</strong>.</>,
            <>A <strong>circle with a dot in the middle</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
export const bank: CapsItem[] = [
  {
    prompt: "Three towers of cubes stand in a row, one cube deep. From the front they are 3, 1 and 2 cubes high from left to right. What does the front viewer see from left to right?",
    options: ["2, 1, 3", "3, 1, 2", "1, 2, 3", "3, 2, 1"],
    answer: "3, 1, 2",
    explanation: "From the front you see the towers in the order they stand, from left to right: 3, 1, 2.",
  },
  {
    prompt: "You stand behind a one-cube-deep row of towers that are 3, 1 and 2 cubes high when seen from the front. What do you see from left to right?",
    options: ["2, 1, 3", "3, 1, 2", "1, 3, 2", "1, 2, 3"],
    answer: "2, 1, 3",
    explanation: "The viewer behind faces the other way, so their left is the front viewer's right. The towers appear in the opposite order: 2, 1, 3.",
  },
  {
    prompt: "A viewer on the right-hand side looks along a row of towers, one cube deep, with heights 3, 1 and 2 as seen from the front. How many cubes high is the view?",
    options: ["1", "2", "6", "3"],
    answer: "3",
    explanation: "From the side you see only one tower, because the towers are one behind the other in a line of sight. The tallest tower hides the others: 3 cubes high.",
  },
  {
    prompt: "How many cubes make up a row of towers that are 3, 1 and 2 cubes high?",
    options: ["3", "5", "6", "9"],
    answer: "6",
    explanation: "Add the towers: 3 + 1 + 2 = 6 cubes.",
  },
  {
    prompt: "A structure has a front row of towers 2 and 1 cubes high and a back row of towers 1 and 3 cubes high, left to right from the front. What does the front viewer see?",
    options: ["2, 1", "2, 3", "1, 3", "3, 2"],
    answer: "2, 3",
    explanation: "In each column the front viewer sees the taller tower: the left column has 2 and 1, so 2; the right column has 1 and 3, so 3.",
  },
  {
    prompt: "Two rows of cubes: the front row is 2 and 1 high and the back row is 1 and 3 high, left to right from the front. A viewer on the left looks along each row. What do they see from left to right?",
    options: ["3, 2", "2, 3", "3, 3", "2, 2"],
    answer: "3, 2",
    explanation: "From the left you look along each row. The back row (tallest tower 3) is on your left and the front row (tallest tower 2) is on your right: 3, 2.",
  },
  {
    prompt: "How many cubes are in two rows where the front towers are 2 and 1 high and the back towers are 1 and 3 high?",
    options: ["4", "6", "8", "7"],
    answer: "7",
    explanation: "Add all the towers: 2 + 1 + 1 + 3 = 7 cubes.",
  },
  {
    prompt: "A bird flies over a structure of four towers of cubes that stand on a 2 by 2 base. How many squares of the base does it see covered?",
    options: ["7", "3", "4", "2"],
    answer: "4",
    explanation: "There are 4 towers, and each stands on one square, so the top view has 4 squares.",
  },
  {
    prompt: "You see towers 2, 1 and 3 cubes high from left to right. Seen from the front the same row is 3, 1 and 2. Where are you standing?",
    options: ["In front of the row", "Behind the row", "Above the row", "At the side of the row"],
    answer: "Behind the row",
    explanation: "The front view is 3, 1, 2. The view 2, 1, 3 is the same row seen the other way round, from behind.",
  },
  {
    prompt: "A tin of beans stands upright on a table. What shape does a viewer see when looking straight down on it?",
    options: ["A circle", "A rectangle", "A triangle", "A square"],
    answer: "A circle",
    explanation: "The top of the tin is a circle.",
  },
  {
    prompt: "A party hat is a cone standing on its flat base. What shape does a viewer see from the front?",
    options: ["A circle", "A rectangle", "A square", "A triangle"],
    answer: "A triangle",
    explanation: "A cone gets narrower to a point at the top, so from the front it looks like a triangle.",
  },
  {
    prompt: "A dice is a cube. What does it look like from the front, from the side and from the top?",
    options: ["A square from the top only", "A rectangle from the front", "A square from every side", "A circle from the top"],
    answer: "A square from every side",
    explanation: "Every face of a cube is a square, so a cube looks like a square from the front, from the side and from above.",
  },
];
// BANK:END

const ViewingObjects = () => (
  <CapsSubjectTopic
    title="Viewing Objects"
    subtitle="Matching views of objects and structures of cubes with the position of the viewer"
    learnSteps={learnSteps}
    task="gr6-viewing-objects-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ViewingObjects;
