import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "What are graphics used for in Technology?",
    options: ["To measure the mass of a finished product", "To replace the need for any real model", "To develop ideas and to communicate ideas", "To record who made which part"],
    answer: "To develop ideas and to communicate ideas",
    explanation: "Technology uses graphics to develop an idea and to communicate it clearly to other people.",
  },
  {
    prompt: "Which type of line is used for the outline of an object?",
    options: ["A thick, dark line", "A thin, faint line", "A dashed line", "A wavy line"],
    answer: "A thick, dark line",
    explanation: "Outlines are drawn thick and dark so that the shape stands out.",
  },
  {
    prompt: "Which type of line is a construction line?",
    options: ["A thick, dark line", "A dashed line", "A double line", "A thin, faint line"],
    answer: "A thin, faint line",
    explanation: "Construction lines help you to place the drawing. They are thin and faint.",
  },
  {
    prompt: "How is hidden detail, such as a hole behind a surface, shown?",
    options: ["With a thick, dark line", "With a dashed line", "With a thin, faint line", "It is left out of the drawing"],
    answer: "With a dashed line",
    explanation: "Parts that cannot be seen are shown with dashed lines.",
  },
  {
    prompt: "What does dimensioning a drawing mean?",
    options: ["Shading the drawing to make it look solid", "Writing the real sizes on the drawing", "Making the drawing larger than the object", "Drawing the object from three sides"],
    answer: "Writing the real sizes on the drawing",
    explanation: "Dimensions give the real size of the object, whatever the scale of the drawing.",
  },
  {
    prompt: "A table top is 1 200 mm long. How long is its line on a drawing at scale 1:10?",
    options: ["12 mm", "1 210 mm", "12 000 mm", "120 mm"],
    answer: "120 mm",
    explanation: "Scale 1:10 means the drawing is 10 times smaller: 1 200 ÷ 10 = 120 mm.",
  },
  {
    prompt: "A shelf is 800 mm wide. How long is its line at scale 1:5?",
    options: ["160 mm", "4 000 mm", "795 mm", "16 mm"],
    answer: "160 mm",
    explanation: "800 ÷ 5 = 160 mm.",
  },
  {
    prompt: "A small bolt is 15 mm long. It is drawn at scale 2:1. How long is the drawing?",
    options: ["7,5 mm", "17 mm", "30 mm", "13 mm"],
    answer: "30 mm",
    explanation: "Scale 2:1 means the drawing is twice as big: 15 × 2 = 30 mm.",
  },
  {
    prompt: "A line measures 45 mm on a drawing at scale 1:10. What real size does it show?",
    options: ["4,5 mm", "55 mm", "4 500 mm", "450 mm"],
    answer: "450 mm",
    explanation: "Multiply by 10 to go back to the real size: 45 × 10 = 450 mm.",
  },
  {
    prompt: "What does a working drawing show?",
    options: ["Three views of an object in colour", "One face of an object in 2D, with dimensions", "A realistic picture with shadows", "A cartoon story of how it is used"],
    answer: "One face of an object in 2D, with dimensions",
    explanation: "In Grade 7 a working drawing is a 2D drawing of one face of the object, with the conventions, dimensions and scale.",
  },
  {
    prompt: "In an oblique drawing the receding edges of a box are drawn at which angle?",
    options: ["45°", "90°", "30°", "60°"],
    answer: "45°",
    explanation: "Depth lines in an oblique drawing are drawn at 45° to the horizontal.",
  },
  {
    prompt: "A box is 20 mm deep. In an oblique drawing the depth is drawn at half size. How long is the depth line?",
    options: ["20 mm", "40 mm", "10 mm", "5 mm"],
    answer: "10 mm",
    explanation: "Half of 20 mm is 10 mm, drawn along the 45° line.",
  },
  {
    prompt: "In single vanishing point perspective, where do the lines that go back into the picture meet?",
    options: ["At two points on the horizon", "At the corners of the page", "At one point on the horizon", "They never meet"],
    answer: "At one point on the horizon",
    explanation: "All the lines that go back run to the one vanishing point on the horizon.",
  },
  {
    prompt: "In a perspective drawing, how does a face further from you look compared with a nearer face of the same size?",
    options: ["Larger", "Smaller", "The same size", "Dashed"],
    answer: "Smaller",
    explanation: "Things that are further away look smaller, so the back face of a box is drawn smaller.",
  },
];

const GraphicalCommunication = () => (
  <CapsSubjectTopic
    title="Graphical Communication"
    subtitle="Line types, working drawings, oblique drawing and perspective"
    learnSteps={learnSteps}
    task="gr7-graphical-communication-t1"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default GraphicalCommunication;
