import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ColourWheel, DepthLayers, LineTypes, ShapeFormValue, TextureMarks } from '../../../../../components/diagrams/arts/Ca8VisualPictures';
import { WHEEL, complementOf, temperature } from '../../../../../components/diagrams/arts/ca8-visual-helpers';

// Colour facts below come from ca8-visual-helpers.ts (tested in ca8-visual-helpers.test.ts).
const name = (i: number) => WHEEL[i].name;
const RED = 0;
const ORANGE = 2;
const orangeComplement = name(complementOf(ORANGE));
const redWarmth = temperature(RED);
const orangeWarmth = temperature(ORANGE);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Line: a mark that makes us feel something',
    content: slide(
      <>
        <Rule>Line is an element of art. An observational drawing is made while studying a real object placed in front of you, and you choose lines that match what you want the viewer to feel.</Rule>
        <LineTypes />
        <Worked
          title="Draw a football rolling across the grass"
          steps={['Look at the real ball and the ground before you draw.', 'To show movement, choose a diagonal line for the path.', 'Add short curved lines round the ball to show it spinning.']}
        />
        <Mistake>Drawing what you think a ball looks like. Draw what you see, from the real object in front of you.</Mistake>
      </>,
    ),
  },
  {
    title: 'Shape, form and value',
    content: slide(
      <>
        <Rule>A shape is flat and two-dimensional. A form looks solid. Value is the lightness or darkness of a colour, and shading with value turns a shape into a form.</Rule>
        <ShapeFormValue />
        <Worked
          title="Turn a circle into a ball"
          steps={['Draw the outline: a flat shape.', 'Decide where the light comes from, for example the top left.', 'Leave that side light and shade the opposite side darker.', 'Blend the steps in value so the ball looks round.']}
        />
        <Mistake>Mixing up value and colour. A light blue and a dark blue are the same colour with different values.</Mistake>
      </>,
    ),
  },
  {
    title: 'Texture: marks that suggest a surface',
    content: slide(
      <>
        <Rule>Texture is how a surface looks or feels. In a drawing you show texture with marks such as hatching, cross-hatching and stippling.</Rule>
        <TextureMarks />
        <Worked
          title="Draw rough tree bark and a smooth pebble"
          steps={['Bark is rough: use cross-hatching with the lines close together.', 'A pebble is smooth: use light, even shading and very few marks.']}
        />
        <Mistake>Using the same mark for every surface. Each surface needs marks that suit how it looks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Warm and cool colours',
    content: slide(
      <>
        <Rule>Red, yellow and blue are the primary colours. Mixing two gives a secondary colour: orange, green or violet. Red, orange and yellow are warm; green, blue and violet are cool.</Rule>
        <ColourWheel />
        <Worked
          title="Which pair is mostly warm: red and orange, or blue and green?"
          steps={[<>Find red and orange on the wheel: red is {redWarmth} and orange is {orangeWarmth}.</>, 'Blue and green are on the cool side.', <>Opposite orange sits {orangeComplement}, its complementary colour.</>]}
        />
        <Mistake>Thinking a dark red is cool. Warm and cool depend on the colour, not on how dark it is.</Mistake>
      </>,
    ),
  },
  {
    title: 'Composition: depth and balance',
    content: slide(
      <>
        <Rule>Composition is how you arrange things on the page. Objects nearest the viewer are in the foreground, then the middle ground, then the background. A balanced composition feels stable.</Rule>
        <DepthLayers />
        <Worked
          title="Arrange a still life"
          steps={['Put the biggest jug low on the page: the foreground.', 'Place the apple behind it, a little smaller and higher: the middle ground.', 'Add the window wall last: the background.', 'Check that no side looks much heavier than the other.']}
        />
        <Mistake>Drawing every object the same size at the same height. The picture then looks flat and has no depth.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Pale yellow and deep navy differ most in which element of art?</li>
            <li>Name two marks that show texture in a drawing.</li>
            <li>Which colour is the complement of orange on the wheel?</li>
            <li>Objects nearest the viewer are in which part of a picture?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Value.</li>
            <li>Hatching and stippling (or cross-hatching).</li>
            <li>{orangeComplement[0].toUpperCase() + orangeComplement.slice(1)}.</li>
            <li>The foreground.</li>
          </ol>
        }
      />,
    ),
  },
];
