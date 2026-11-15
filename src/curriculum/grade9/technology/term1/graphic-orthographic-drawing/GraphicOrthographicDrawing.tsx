import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare } from '../../../../../components/diagrams/science/ScienceBlocks';
import { LineTypes, OrthographicViews } from '../../../../../components/diagrams/science/SciencePictures7';
import { drawingLength, realLength } from '../../../../../components/diagrams/science/tech9Helpers';

// The scale example comes from tested helpers (tech9.test.ts).
const real = realLength(5, 10);
const back = drawingLength(real, 10);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Orthographic views',
    content: slide(
      <>
        <Rule>
          First-angle orthographic projection shows an object from multiple viewpoints: front, top and side. In first-angle projection the top view is below the front view. A basic drawing normally has three views: front, top and side.
        </Rule>
        <OrthographicViews />
        <Worked
          title="Draw a stepped block"
          steps={[
            <>Draw the front view first: the block is 4 units wide, with a taller step at the left end.</>,
            <>Draw the top view below the front view, lined up with it: 4 units wide and 2 deep.</>,
            <>Draw the side view (the view from the left) to the right of the front view, lined up with its height.</>,
          ]}
        />
        <Mistake>Putting the top view above the front view. In first-angle projection the top view goes below.</Mistake>
      </>,
    ),
  },
  {
    title: 'Line types',
    content: slide(
      <>
        <Rule>
          Different lines mean different things. Dashed lines represent hidden edges or features. Construction lines are light and thin.
        </Rule>
        <LineTypes />
        <Worked
          title="Read the lines"
          steps={[<>A dashed line shows an edge you cannot see from that view, such as a hole through the block.</>, <>Construction lines are light, thin guides that help you draw accurately, and are often erased or not reproduced in the final print.</>, <>Visible edges are drawn with a thick, continuous line.</>]}
        />
        <Mistake>Drawing hidden edges as solid lines. The viewer would think the edge can be seen.</Mistake>
      </>,
    ),
  },
  {
    title: 'Scale',
    content: slide(
      <>
        <Rule>
          A scale shows the relationship between drawing size and actual size. A scale of 1:10 means 1 unit on the drawing represents 10 units in reality.
        </Rule>
        <Worked
          title="A line measures 5 cm on a 1:10 drawing"
          steps={[<>The scale 1:10 means every 1 cm on the drawing is 10 cm in real life.</>, <>5 × 10 = {real} cm in real life.</>, <>Check by going back: {real} ÷ 10 = {back} cm on the drawing.</>]}
        />
        <Mistake>Dividing instead of multiplying when finding the real size. A 1:10 drawing is smaller than the object, so the real size is 10 times bigger.</Mistake>
      </>,
    ),
  },
  {
    title: 'Why orthographic drawing?',
    content: slide(
      <>
        <Rule>
          Orthographic drawing preserves true dimensions and allows accurate measurement, unlike perspective drawing. Dimensions matter so that builders can make the design to the right size.
        </Rule>
        <Compare
          left={{ title: 'Orthographic', tone: 'sky', rows: ['true lengths, so you can measure from it', 'used for manufacturing and building', 'needs several views'] }}
          right={{ title: 'Perspective', tone: 'amber', rows: ['looks real, like a photograph', 'lengths appear shorter as they go away', 'not used to measure'] }}
        />
        <Worked
          title="Why dimensions matter"
          steps={[<>A drawing without dimensions gives no sizes to work from.</>, <>Clear, accurate dimensions let builders make the parts to fit and assemble.</>]}
        />
        <Mistake>Measuring a perspective drawing with a ruler. Only an orthographic drawing keeps the true dimensions.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Where does the top view go on a first-angle orthographic drawing? How many views do you normally draw?</>,
          <>What do dashed lines represent? Which line type is used for construction guides?</>,
          <>What is the purpose of a scale? What does a scale of 1:10 mean?</>,
          <>What is the advantage of orthographic over perspective drawing? Why is dimension awareness important?</>,
        ]}
        answers={[
          <>Below the front view. Three views: front, top and side.</>,
          <>Hidden edges or features. Construction lines (light, thin).</>,
          <>To show the relationship between drawing size and actual size. 1 unit on the drawing represents 10 units in reality.</>,
          <>It preserves true dimensions and allows accurate measurement. So builders can make the design to the right size.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In first-angle orthographic projection, where is the top view positioned?',
    options: ['below the front view', 'above the front view', 'to the left of the front view', 'behind the object'],
    answer: 'below the front view',
    explanation: 'First-angle projection places the top view below the front elevation in standard technical drawing layout.',
  },
  {
    prompt: 'What do dashed lines represent in a technical drawing?',
    options: ['hidden edges or features', 'visible edges only', 'construction lines', 'dimension lines'],
    answer: 'hidden edges or features',
    explanation: 'Dashed lines show edges or features that are not visible from that particular viewing angle.',
  },
  {
    prompt: 'What is the purpose of a scale on a technical drawing?',
    options: ['to show the relationship between drawing size and actual size', 'to show which materials the parts are made from', 'to show how thick each line must be drawn', 'to show the order in which parts are assembled'],
    answer: 'to show the relationship between drawing size and actual size',
    explanation: 'Scale ensures that models and components can be manufactured accurately based on the drawing.',
  },
  {
    prompt: 'Which line type is used for construction guides in technical drawing?',
    options: ['construction lines (light, thin)', 'dimension lines (thin, with arrowheads)', 'hidden lines (short, thin dashes)', 'outlines (continuous thick lines)'],
    answer: 'construction lines (light, thin)',
    explanation: 'Light construction lines help create accurate drawings and are often erased or not reproduced in final prints.',
  },
  {
    prompt: 'How many views are normally drawn in a basic orthographic drawing of an object?',
    options: ['front, top and side (3 views)', 'front and back only (2 views)', 'top and bottom only (2 views)', 'six views, one for each face'],
    answer: 'front, top and side (3 views)',
    explanation: 'The three main orthographic views provide sufficient information to understand most 3D objects.',
  },
  {
    prompt: 'What is the advantage of orthographic drawing over perspective drawing for technical use?',
    options: ['it preserves true dimensions and allows accurate measurement', 'it shows the object as the eye sees it', 'it needs only a single vanishing point', 'it shows depth with lines that meet far away'],
    answer: 'it preserves true dimensions and allows accurate measurement',
    explanation: 'Orthographic projection maintains scale and proportions, making it essential for engineering and manufacturing.',
  },
  {
    prompt: 'If a drawing is scaled at 1:10, what does this mean?',
    options: ['1 unit on the drawing represents 10 units in reality', '10 units on the drawing represent 1 unit in reality', 'the drawing is 10 times larger', 'there is no relationship to size'],
    answer: '1 unit on the drawing represents 10 units in reality',
    explanation: 'Scale ratios show how much smaller the drawing is compared to the actual object.',
  },
  {
    prompt: 'Why is dimension awareness important in technical drawing?',
    options: ['so builders can make the design to the right size', 'so the drawing fits on the page neatly', 'so every drawing is done in the same colours', 'so the drawing can be copied by hand quickly'],
    answer: 'so builders can make the design to the right size',
    explanation: 'Clear, accurate dimensions are essential for precise manufacturing and assembly.',
  },
];

const GraphicOrthographicDrawing = () => (
  <CapsSubjectTopic
    title="Graphic Communication and Orthographic Drawing"
    subtitle="First-angle projection, views, line types, scale and dimension awareness"
    learnSteps={learnSteps}
    task="gr9-graphic-orthographic-drawing-t1"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default GraphicOrthographicDrawing;
