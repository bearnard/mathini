import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { VpDrawing } from '../../../../../components/diagrams/g7tech/G7Tech';
import { ClassroomView, EyeLevel, WoodBlock } from '../../../../../components/diagrams/g9persp/G9Persp';
import { backWidth, brightness, NORMALS } from '../../../../../components/diagrams/g9persp/perspectiveHelpers';

// Every number below comes from perspectiveHelpers.ts (tested in perspectiveHelpers.test.ts and g9TechPerspective.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const pct = (t: number) => `${Math.round(t * 100)}%`;
// 1 - t as a decimal with a comma, without float noise (0,6 not 0.6000000000000001)
const rest = (t: number) => String(Math.round((1 - t) * 100) / 100).replace('.', ',');

export const BLOCK = { w: 60, h: 40, t: 0.4 };
export const ROOM = { pageW: 200, t: 0.55 };
const order = [
  { face: 'top', b: brightness(NORMALS.top) },
  { face: 'front', b: brightness(NORMALS.front) },
  { face: 'right side', b: brightness(NORMALS.right) },
];

export const learnSteps: LearnStep[] = [
  {
    title: 'Eye level and the vanishing point',
    content: slide(
      <>
        <Rule>In single vanishing point perspective the horizon is your eye level. The one vanishing point sits on the horizon, and every line that goes back into the picture runs to it.</Rule>
        <EyeLevel t={0.3} />
        <Worked
          title="What can you see of a box?"
          steps={[
            'A box below the horizon is below your eyes, so you look down on it and see its top.',
            'A box above the horizon is above your eyes, so you look up at it and see its underside.',
            'A box level with your eyes shows neither the top nor the underside, only its front and one side.',
          ]}
        />
        <Mistake>Putting the vanishing point anywhere on the page. It must sit on the horizon, at your eye level.</Mistake>
      </>,
    ),
  },
  {
    title: 'Draw a wooden block',
    content: slide(
      <>
        <Rule>Draw the front face in its true shape. Join each corner to the vanishing point, then stop partway and draw the back face. Things further away are smaller.</Rule>
        <VpDrawing t={BLOCK.t} />
        <Worked
          title={`A block with a front face of ${BLOCK.w} mm by ${BLOCK.h} mm, back face ${pct(BLOCK.t)} of the way to the vanishing point`}
          steps={[
            `The back face is ${pct(1 - BLOCK.t)} of the front size.`,
            `Back width: ${BLOCK.w} × ${rest(BLOCK.t)} = ${backWidth(BLOCK.w, BLOCK.t)} mm.`,
            `Back height: ${BLOCK.h} × ${rest(BLOCK.t)} = ${backWidth(BLOCK.h, BLOCK.t)} mm.`,
            'Join the back corners with lines parallel to the front edges.',
          ]}
        />
        <Mistake>Drawing the back face the same size as the front. In perspective it is always smaller.</Mistake>
      </>,
    ),
  },
  {
    title: 'Colour, texture and shadow',
    content: slide(
      <>
        <Rule>Add colour, texture and shadow to make a drawing look real. A face turned toward the light is lighter, a face turned away is darker, and a cast shadow falls on the side away from the light.</Rule>
        <WoodBlock t={BLOCK.t} />
        <Worked
          title="Light from the upper left"
          steps={[
            `The ${order[0].face} faces the light most, so it is the lightest.`,
            `The ${order[1].face} is turned partly away, so it is a middle tone.`,
            `The ${order[2].face} is turned away from the light, so it is the darkest.`,
            'Draw wood grain along the length of the wood. On the top, the grain lines run toward the vanishing point. The shadow falls to the right.',
          ]}
        />
        <Mistake>Colouring every face the same. Without light and dark faces a block looks flat.</Mistake>
      </>,
    ),
  },
  {
    title: 'The inside of a classroom',
    content: slide(
      <>
        <Rule>To draw the inside of a room, look straight at the back wall. It faces you, so it is a true rectangle. The floor, ceiling and side walls run back to the vanishing point.</Rule>
        <ClassroomView t={ROOM.t} />
        <Worked
          title={`A page ${ROOM.pageW} mm wide, with the back wall ${pct(ROOM.t)} of the way to the vanishing point`}
          steps={[
            `The back wall is ${pct(1 - ROOM.t)} of the page size.`,
            `Back wall width: ${ROOM.pageW} × ${rest(ROOM.t)} = ${backWidth(ROOM.pageW, ROOM.t)} mm.`,
            'Draw the board on the back wall, then the desks nearer to you, each a smaller or larger box.',
          ]}
        />
        <Mistake>Drawing the back wall as a slanted four-sided shape. In one-point perspective the back wall is a rectangle.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Where is the vanishing point in single vanishing point perspective?</>,
          <>A box is above the horizon. Which face can you see?</>,
          <>A front face is {100} mm wide. The back face is drawn {25}% of the way to the vanishing point. How wide is the back face?</>,
          <>Which face of a block is darkest when the light comes from the upper left?</>,
        ]}
        answers={[
          <>On the horizon, at eye level.</>,
          <>Its underside, because you look up at it.</>,
          <>{100} × {rest(0.25)} = {backWidth(100, 0.25)} mm.</>,
          <>The right side, because it is turned away from the light.</>,
        ]}
      />,
    ),
  },
];
