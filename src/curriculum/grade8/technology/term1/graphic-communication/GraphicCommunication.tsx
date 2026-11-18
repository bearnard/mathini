import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { IsoBlock, LineTypesPicture, ScalePicture } from '../../../../../components/diagrams/tech8/Tech8';
import { LINE_TYPES, VANISHING_POINTS, dimensionLabel, realFromDrawing, scaleDown, scaleUp } from '../../../../../components/diagrams/tech8/tech8Helpers';

// Every number comes from tech8Helpers.ts (tested in tech8Helpers.test.ts and g8TechT1.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Why we draw, and the line types',
    content: slide(
      <>
        <Rule>The purpose of graphics is to develop and communicate ideas. Technical drawings follow conventions so that everyone reads them in the same way. Outlines are thick, dark lines. Construction lines are thin, feint lines. Hidden detail is shown with dashed lines, and centre lines are chain (dash-dot) lines.</Rule>
        <LineTypesPicture />
        <Worked
          title="Choose the line"
          steps={[
            `The visible edges of a part: ${LINE_TYPES[0].name}, a ${LINE_TYPES[0].look}.`,
            `Guides for laying out the drawing: ${LINE_TYPES[1].name}, a ${LINE_TYPES[1].look}.`,
            `A hole hidden behind the surface: ${LINE_TYPES[2].name} (dashed); the middle of a round hole: ${LINE_TYPES[3].name} (${LINE_TYPES[3].look}).`,
          ]}
        />
        <Mistake>Drawing hidden detail with a solid line. Use a dashed line so that it is not mistaken for a visible edge.</Mistake>
      </>,
    ),
  },
  {
    title: 'Scale and dimensions',
    content: slide(
      <>
        <Rule>Scaling down makes the drawing smaller than the real object, for example a scale of 1:2 is half size. Scaling up makes the drawing larger. Dimensions are written in millimetres (mm) and always show the real size of the part, whatever the scale of the drawing.</Rule>
        <ScalePicture realMm={240} n={4} />
        <Worked
          title="Calculate with a scale"
          steps={[
            `A part is 240 mm long. At a scale of 1:4 the line on the drawing is 240 ÷ 4 = ${scaleDown(240, 4)} mm, but the dimension written is ${dimensionLabel(240)}.`,
            `A small part is 15 mm long. At a scale of 2:1 (scaling up) the drawing is 15 × 2 = ${scaleUp(15, 2)} mm.`,
            `A line on a 1:5 drawing is 60 mm, so the real length is 60 × 5 = ${realFromDrawing(60, 5)} mm.`,
          ]}
        />
        <Mistake>Writing the measured length of the drawing as the dimension. The dimension is the real size.</Mistake>
      </>,
    ),
  },
  {
    title: 'Single-view and isometric drawings',
    content: slide(
      <>
        <Rule>A working drawing used for planning is a single-view flat 2D drawing with dimensions, line types and a scale. An isometric drawing shows a 3D object, with three faces visible at once, on an isometric grid: the horizontal edges are drawn at 30° and vertical edges are drawn vertical, and all the lengths along the axes are drawn to the same scale.</Rule>
        <IsoBlock l={4} w={2} h={3} />
        <Worked
          title="Draw a block on an isometric grid"
          steps={[
            'Draw the vertical edge first, then two edges at 30° going left and right from the bottom.',
            'Measure each edge along the grid lines to the same scale, then complete the top face.',
            'A block has 12 edges but only 3 faces are visible, so the hidden edges are left out or shown dashed.',
          ]}
        />
        <Mistake>Drawing the sloping edges at 45°. On an isometric grid they are at 30° to the horizontal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Perspective and artistic drawing',
    content: slide(
      <>
        <Rule>An artistic drawing in double vanishing-point perspective shows how an object looks to the eye: parallel edges go towards one of {VANISHING_POINTS} vanishing points on the horizon, so the object gets smaller as it gets further away. A drawing is made more realistic by adding colour, texture, shading and shadows. Sketch with a pencil, a ruler and blank paper.</Rule>
        <FactCards
          cards={[
            { title: 'Double vanishing point', line1: 'two vanishing points on the', line2: 'horizon line' },
            { title: 'Realism', line1: 'colour, texture, shading', line2: 'and shadows' },
            { title: 'Sketching', line1: 'pencil, ruler and', line2: 'blank paper' },
          ]}
          aria="Perspective and artistic drawing. Double vanishing point perspective has two vanishing points on the horizon line. Realism comes from colour, texture, shading and shadows. Sketching needs a pencil, a ruler and blank paper."
        />
        <Worked
          title="Choose the drawing"
          steps={[
            'To show a builder the exact sizes: a single-view working drawing with dimensions.',
            'To show a client how the building will look: a perspective drawing with colour and shading.',
            'To show the 3D shape with the sizes kept to scale: an isometric drawing.',
          ]}
        />
        <Mistake>Using an isometric drawing when the picture should look realistic. In an isometric drawing parallel edges stay parallel; in perspective they meet.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which line type shows hidden detail?</>,
          <>A part 240 mm long is drawn at 1:4. How long is the line on the drawing?</>,
          <>At what angle are the horizontal edges drawn on an isometric grid?</>,
          <>A perspective drawing is made with two vanishing points on the horizon. What is it called?</>,
        ]}
        answers={[
          <>A dashed line.</>,
          <>{scaleDown(240, 4)} mm.</>,
          <>30°.</>,
          <>Double vanishing-point perspective ({VANISHING_POINTS} points).</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is the purpose of graphics in technology?",
    options: ["To make a product look expensive", "To replace the need for making models", "To develop and communicate ideas", "To measure the strength of materials"],
    answer: "To develop and communicate ideas",
    explanation: "Graphics are used to develop and communicate ideas.",
  },
  {
    prompt: "Which line type is thick and dark?",
    options: ["An outline", "A construction line", "A hidden detail line", "A centre line"],
    answer: "An outline",
    explanation: "Outlines are drawn as thick, dark lines.",
  },
  {
    prompt: "Which line type is thin and feint?",
    options: ["An outline", "A hidden detail line", "A dimension line", "A construction line"],
    answer: "A construction line",
    explanation: "Construction lines are thin and feint guides.",
  },
  {
    prompt: "Which kind of line shows hidden detail?",
    options: ["A thick solid line", "A dashed line", "A chain line", "A feint solid line"],
    answer: "A dashed line",
    explanation: "Hidden detail is shown dashed.",
  },
  {
    prompt: "Which kind of line is used for the centre of a round hole?",
    options: ["A dashed line", "A chain (dash-dot) line", "A thick solid line", "A feint construction line"],
    answer: "A chain (dash-dot) line",
    explanation: "Centre lines are chain lines.",
  },
  {
    prompt: "In which unit are dimensions written on a technical drawing in Grade 8?",
    options: ["Centimetres", "Metres", "Kilometres", "Millimetres"],
    answer: "Millimetres",
    explanation: "Dimensions are written in mm.",
  },
  {
    prompt: "A part is 240 mm long and is drawn at a scale of 1:4. How long is the line on the drawing?",
    options: ["60 mm", "960 mm", "236 mm", "244 mm"],
    answer: "60 mm",
    explanation: "240 ÷ 4 = 60 mm.",
  },
  {
    prompt: "A drawing at a scale of 1:5 has a line 60 mm long. What is the real length?",
    options: ["12 mm", "65 mm", "300 mm", "55 mm"],
    answer: "300 mm",
    explanation: "60 × 5 = 300 mm.",
  },
  {
    prompt: "A small part is 15 mm long and is drawn at a scale of 2:1. How long is the line on the drawing?",
    options: ["7,5 mm", "17 mm", "13 mm", "30 mm"],
    answer: "30 mm",
    explanation: "Scaling up: 15 × 2 = 30 mm.",
  },
  {
    prompt: "Which dimension is written on a drawing that is scaled down?",
    options: ["The length of the line on the drawing", "The real size of the part", "Half the real size", "The scale factor"],
    answer: "The real size of the part",
    explanation: "Dimensions always show the real size.",
  },
  {
    prompt: "What does a scale of 1:2 mean?",
    options: ["The drawing is half the real size", "The drawing is twice the real size", "The drawing is the same size", "The drawing has 2 views"],
    answer: "The drawing is half the real size",
    explanation: "At 1:2 the drawing is scaled down to half size.",
  },
  {
    prompt: "At what angle to the horizontal are the sloping edges drawn on an isometric grid?",
    options: ["45°", "60°", "30°", "90°"],
    answer: "30°",
    explanation: "Isometric drawings use edges at 30° to the horizontal.",
  },
  {
    prompt: "How many faces of a block are visible in an isometric drawing?",
    options: ["One", "Two", "Three", "Six"],
    answer: "Three",
    explanation: "An isometric drawing shows three faces at once.",
  },
  {
    prompt: "How many vanishing points are used in a double VP drawing?",
    options: ["Two", "One", "Three", "Four"],
    answer: "Two",
    explanation: "Double VP perspective has two vanishing points on the horizon.",
  },
];

const GraphicCommunication = () => (
  <CapsSubjectTopic
    title="Graphic Communication"
    subtitle="Line types, scale and dimensions, isometric drawing and perspective"
    learnSteps={learnSteps}
    task="gr8-graphic-communication-t1"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default GraphicCommunication;
