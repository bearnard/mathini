import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand orthographic projection principles',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          First-angle orthographic projection shows objects from multiple viewpoints: front, top, and side elevations. 
          Each view is positioned in a specific location to create a complete technical drawing.
        </p>
      </div>
    ),
  },
  {
    title: 'Apply line types and dimensions correctly',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Technical drawings use different line types: solid lines for visible edges, dashed lines for hidden edges, 
          and construction lines for guides. Dimensions and scale annotations ensure clarity and accuracy.
        </p>
      </div>
    ),
  },
  {
    title: 'Interpret and create technical drawings',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Accurate technical drawings help engineers and builders understand designs. By mastering projection, 
          line conventions, and scale, you can communicate complex 3D ideas on 2D paper.
        </p>
      </div>
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
