import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { LineTypes, ObliqueDrawing, VpDrawing, WorkingDrawing } from '../../../../../components/diagrams/g7tech/G7Tech';
import { backScale, drawnLength, fmtMm, obliqueDepthDrawn, obliqueOffset, realLength } from '../../../../../components/diagrams/g7tech/drawingHelpers';

// Every length below comes from drawingHelpers.ts (tested in drawingHelpers.test.ts and g7TechGraphic.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const one = (n: number) => String(Math.round(n * 10) / 10).replace('.', ',');

export const TABLE = { name: 'table top', w: 1200, h: 600, scale: '1:10' };
export const BOX = { w: 40, h: 30, d: 20, k: 0.5 };
export const VP_T = 0.4;

export const learnSteps: LearnStep[] = [
  {
    title: 'Drawings that talk',
    content: slide(
      <>
        <Rule>We draw to develop ideas and to communicate them. A drawing follows conventions: outlines are thick and dark, construction lines are thin and faint, and hidden detail is dashed.</Rule>
        <LineTypes />
        <Worked
          title="Which line do I use?"
          steps={[
            'The edge of the object you can see: a thick, dark outline.',
            'A guide line that helps you place the shape: a thin, faint construction line.',
            'A hole or edge that is behind the surface and cannot be seen: a dashed line for hidden detail.',
            'Free-hand sketching in the design stage does not need a ruler, but the same line ideas help.',
          ]}
        />
        <Mistake>Drawing every line in the same heavy pencil. Then nobody can tell the outline from the guide lines.</Mistake>
      </>,
    ),
  },
  {
    title: 'A working drawing: scale and dimensions',
    content: slide(
      <>
        <Rule>A working drawing shows one face of an object in 2D, using dark, faint and dashed lines. Dimensions give the real size and the scale tells how much smaller or larger the drawing is.</Rule>
        <WorkingDrawing realW={TABLE.w} realH={TABLE.h} scale={TABLE.scale} name={TABLE.name} />
        <Worked
          title={`Draw a ${TABLE.name} of ${fmtMm(TABLE.w)} by ${fmtMm(TABLE.h)} at scale ${TABLE.scale}`}
          steps={[
            `Scale ${TABLE.scale} means the drawing is 10 times smaller than the real object.`,
            `Length on paper: ${TABLE.w} ÷ 10 = ${fmtMm(drawnLength(TABLE.w, TABLE.scale))}.`,
            `Width on paper: ${TABLE.h} ÷ 10 = ${fmtMm(drawnLength(TABLE.h, TABLE.scale))}.`,
            `Write the real sizes, ${fmtMm(TABLE.w)} and ${fmtMm(TABLE.h)}, as the dimensions.`,
            `Going back: a line of ${fmtMm(drawnLength(TABLE.w, TABLE.scale))} on the drawing stands for ${fmtMm(realLength(drawnLength(TABLE.w, TABLE.scale), TABLE.scale))}.`,
          ]}
        />
        <Mistake>Writing the length measured on the paper as the dimension. The dimension is always the real size.</Mistake>
      </>,
    ),
  },
  {
    title: 'Oblique drawing',
    content: slide(
      <>
        <Rule>In an oblique drawing the front view is drawn in its true shape and the depth is drawn at 45° to show a 3D object. Squared paper helps.</Rule>
        <ObliqueDrawing w={BOX.w} h={BOX.h} d={BOX.d} k={BOX.k} />
        <Worked
          title={`A box ${fmtMm(BOX.w)} wide, ${fmtMm(BOX.h)} high and ${fmtMm(BOX.d)} deep`}
          steps={[
            `Draw the front face as a true ${fmtMm(BOX.w)} by ${fmtMm(BOX.h)} rectangle.`,
            `From each corner draw a line at 45°. The depth looks too long if drawn in full, so draw it half size: ${BOX.d} × ½ = ${fmtMm(obliqueDepthDrawn(BOX.d, BOX.k))} along the 45° line.`,
            `That is about ${one(obliqueOffset(BOX.d, BOX.k))} mm across and ${one(obliqueOffset(BOX.d, BOX.k))} mm up.`,
            'Join the ends of the lines to make the back, and use dark outlines on the visible edges.',
          ]}
        />
        <Mistake>Tilting the front face. In oblique drawing the front stays square to the page. Only the depth lines are at 45°.</Mistake>
      </>,
    ),
  },
  {
    title: 'Single vanishing point perspective',
    content: slide(
      <>
        <Rule>In artistic drawing, perspective shows depth in a picture. In single vanishing point perspective, every line that goes back runs to one point on the horizon, and things further away are smaller.</Rule>
        <VpDrawing t={VP_T} />
        <Worked
          title="Draw a box in perspective"
          steps={[
            'Draw the front face in its true shape.',
            'Mark one vanishing point on the horizon and draw a faint line from each front corner to it.',
            `Cut the lines part of the way to the point. If the back face is ${(VP_T * 100).toFixed(0)}% of the way, it is ${(backScale(VP_T) * 100).toFixed(0)}% of the front size.`,
            'Finish with colour, texture and shading to make it look real.',
          ]}
        />
        <Mistake>Using two vanishing points or drawing the back face the same size as the front. Single point perspective has one point, and the back face is smaller.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which line type is used for hidden detail?</>,
          <>A cupboard is {fmtMm(800)} wide. How long is the line for its width at scale 1:20?</>,
          <>At what angle are the depth lines in an oblique drawing?</>,
          <>How many vanishing points does a single vanishing point drawing have?</>,
        ]}
        answers={[
          <>A dashed line.</>,
          <>{800} ÷ 20 = {fmtMm(drawnLength(800, '1:20'))}.</>,
          <>45°.</>,
          <>One.</>,
        ]}
      />,
    ),
  },
];
