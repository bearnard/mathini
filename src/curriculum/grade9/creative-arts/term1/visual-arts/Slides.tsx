import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { gridEnlarge } from '../../../../../components/diagrams/arts/ca9-visual-helpers';
import { AtmosphericPicture, GridEnlargePicture, OnePointPicture, TwoPointPicture, ValueShadingPicture } from '../../../../../components/diagrams/arts/Ca9VisualPictures';

// Every measurement below comes from ca9-visual-helpers.ts (tested in ca9-visual-helpers.test.ts).
export const GRID = gridEnlarge(4, 3, 2, 3); // 2 cm squares enlarged three times: 6 cm squares
const Q = gridEnlarge(5, 4, 1, 4); // check question: 1 cm squares enlarged four times

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'One-point perspective',
    content: slide(
      <>
        <Rule>In one-point perspective, parallel lines that go away from you meet at a single vanishing point on the horizon line.</Rule>
        <OnePointPicture />
        <Worked
          title="Draw a box"
          steps={[
            'Draw the horizon line and mark one vanishing point on it.',
            'Draw the front face of the box as a rectangle.',
            'Lightly join each front corner to the vanishing point.',
            'Pick the depth, draw the back face between those lines, then erase the extra line.',
          ]}
        />
        <Mistake>Drawing the receding edges parallel. They must all point to the same vanishing point.</Mistake>
      </>,
    ),
  },
  {
    title: 'Two-point perspective',
    content: slide(
      <>
        <Rule>Two-point perspective suits buildings and street scenes seen from a corner. Edges slope to two vanishing points on the horizon line.</Rule>
        <TwoPointPicture />
        <Worked
          title="Draw a building corner"
          steps={['Draw a horizon line with a vanishing point near each end.', 'Draw the nearest corner as a vertical line.', 'Join its top and bottom to both vanishing points.', 'Close each side with a vertical line.']}
        />
        <Mistake>Sloping the vertical edges. In both kinds of perspective, upright edges stay upright.</Mistake>
      </>,
    ),
  },
  {
    title: 'Proportion and the grid method',
    content: slide(
      <>
        <Rule>Proportion is how the sizes of the parts of a drawing relate to each other. The grid method copies and enlarges a design accurately by keeping those sizes.</Rule>
        <GridEnlargePicture cell={6} factor={3} />
        <Worked
          title="Enlarge a design three times"
          steps={[
            <>Draw a grid of {GRID.cols} by {GRID.rows} squares of {GRID.cell} cm on the small picture: {GRID.width} cm by {GRID.height} cm.</>,
            <>Draw the same number of squares, each {GRID.bigCell} cm, on your paper: {GRID.bigWidth} cm by {GRID.bigHeight} cm.</>,
            'Copy the lines square by square.',
          ]}
        />
        <Mistake>Making only the width bigger. Both sides grow by the same amount or the proportions change.</Mistake>
      </>,
    ),
  },
  {
    title: 'Value and shading',
    content: slide(
      <>
        <Rule>Value is how light or dark a tone is. Hatching uses one set of close parallel lines. Cross-hatching adds a second set across the first.</Rule>
        <ValueShadingPicture />
        <Worked
          title="Shade a sphere"
          steps={['Use light hatching on the lit side.', 'Put the lines closer together for the middle tones.', 'Cross-hatch the darkest side.']}
        />
        <Mistake>Shading everything equally dark. Without a range of values the drawing looks flat.</Mistake>
      </>,
    ),
  },
  {
    title: 'Atmospheric perspective and balance',
    content: slide(
      <>
        <Rule>Atmospheric perspective makes distant objects fainter and hazier. Balance spreads visual weight: symmetry or asymmetry.</Rule>
        <AtmosphericPicture />
        <Worked
          title="Paint hills and balance them"
          steps={['Paint the nearest hill darkest and clearest.', 'Add more pale blue to each hill further away.', 'Symmetry repeats the same on both sides. Asymmetry balances a big quiet shape with a small bold one.']}
        />
        <Mistake>Painting far objects as dark and detailed as near ones. Then there is no depth.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which kind of perspective has all receding lines meeting at one point?</>,
          <>You enlarge a {Q.cols} by {Q.rows} grid of {Q.cell} cm squares four times. How wide is each new square and how wide is the new grid?</>,
          <>Which shading method uses two sets of crossing lines?</>,
          <>What does atmospheric perspective do to distant objects?</>,
        ]}
        answers={[
          <>One-point perspective.</>,
          <>Each square is {Q.bigCell} cm; the grid is {Q.bigWidth} cm wide and {Q.bigHeight} cm high.</>,
          <>Cross-hatching.</>,
          <>It makes them fainter and hazier.</>,
        ]}
      />,
    ),
  },
];
