import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { ComplementPairs, ToneScale } from '../../../../../components/diagrams/arts/Ca8VisualGapsPictures';

// Terms, materials and steps follow the Grade 8 visual arts plan; no named artwork or artist is used (docs/notes/g8-ca-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Drawing crumpled fabric",
    content: slide(
      <>
        <Rule>Crumpled fabric is a good subject for learning about tone and texture. Use a 2B or 3B pencil on A3 paper. Look carefully at where the folds catch the light and where they make shadows. Line, tone, texture and mark-making are the ways you show what you see.</Rule>
        <ToneScale aria="Four grades of pencil from lighter to darker: HB, 2B, 3B and 4B. A higher number of B is softer and makes a darker mark." />
        <Worked
          title="Draw the folds"
          steps={[
            "Look at the fabric and find the lightest areas where the light hits the folds.",
            "Draw the outline of the folds with light lines.",
            "Add darker tone in the creases and use small marks to show the texture of the cloth.",
          ]}
        />
        <Mistake>Drawing outlines only. Tone is what makes the folds look three-dimensional.</Mistake>
      </>,
    ),
  },
  {
    title: "Design principles in a drawing",
    content: slide(
      <>
        <Rule>In this drawing you can use balance, proportion, harmony, rhythm, emphasis and contrast. Balance spreads visual weight, proportion compares sizes, harmony makes parts work together, rhythm repeats shapes and lines, emphasis makes one area the focus and contrast places light next to dark.</Rule>
        <FactCards
          cards={[
            { title: "Balance", line1: "weight spread across the page" },
            { title: "Proportion", line1: "sizes compared" },
            { title: "Harmony", line1: "parts work together" },
            { title: "Rhythm", line1: "repeating lines and shapes" },
            { title: "Emphasis", line1: "one area is the focus" },
            { title: "Contrast", line1: "light next to dark" },
          ]}
          aria="Balance: weight spread across the page. Proportion: sizes compared. Harmony: parts work together. Rhythm: repeating lines and shapes. Emphasis: one area is the focus. Contrast: light next to dark."
        />
        <Worked
          title="Find the principles in your drawing"
          steps={[
            "The repeated curving folds make a rhythm across the page.",
            "The darkest crease sits next to a bright fold, which gives contrast and makes it the focus.",
            "The folds fill the page evenly, so the drawing is balanced.",
          ]}
        />
        <Mistake>Thinking that principles are only for painting. They also guide a pencil drawing.</Mistake>
      </>,
    ),
  },
  {
    title: "Oil pastel and tempera",
    content: slide(
      <>
        <Rule>For a themed artwork you can use oil pastels and tempera paint. Choose a theme, collect pictures, make preliminary drawings and plan your colours. Oil pastels can be layered and blended with your fingers, and tempera is an opaque paint that you apply in flat or thick layers. Look at the broader visual world for ideas.</Rule>
        <FactCards
          cards={[
            { title: "Oil pastel", line1: "layer and blend colours" },
            { title: "Tempera", line1: "opaque paint for large areas" },
            { title: "Theme", line1: "chosen with your interests" },
            { title: "Plan", line1: "sketches and colour choices" },
          ]}
          aria="Oil pastel: layer and blend colours. Tempera: opaque paint for large areas. Theme: chosen with your interests. Plan: sketches and colour choices."
        />
        <NumberedSteps steps={["Choose a theme", "Collect visual information", "Make preliminary sketches", "Plan colours and materials", "Make the artwork with oil pastel and tempera"].map((text) => ({ text }))} tone="amber" label="Five steps for a themed artwork" />
        <Worked
          title="Plan an artwork on a theme"
          steps={[
            "Choose a theme, such as my community, and collect photographs.",
            "Make three sketches and choose the strongest.",
            "Layer oil pastel for the details and use tempera for the large areas of colour.",
          ]}
        />
        <Mistake>Starting with the final materials. Plan with sketches before you begin.</Mistake>
      </>,
    ),
  },
  {
    title: "Talking about artworks in the wider world",
    content: slide(
      <>
        <Rule>Visual literacy means talking and writing about artworks using art elements and design principles. Look at international and local examples from the past and the present. Describe the work, say what it means to you, ask questions and reflect. Your own interests and current events can influence the art that you make.</Rule>
        <FactCards
          cards={[
            { title: "Look", line1: "at the artwork closely" },
            { title: "Name", line1: "the elements and principles" },
            { title: "Question", line1: "what the artist wants to say" },
            { title: "Reflect", line1: "on what it means to you" },
          ]}
          aria="Look: at the artwork closely. Name: the elements and principles. Question: what the artist wants to say. Reflect: on what it means to you."
        />
        <Worked
          title="Describe an artwork on a theme"
          steps={[
            "Look at a photograph of an artwork about the sea.",
            "Name the art elements: blue tones, wavy lines and a rough texture.",
            "Say what it means to you and ask one question about the artist's choices.",
          ]}
        />
        <Mistake>Saying that you do not understand art. Use looking, naming, questioning and reflecting to build meaning.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which pencils do you use for the fabric drawing?</>,
          <>How can folds in a drawing create rhythm?</>,
          <>Which paint is opaque?</>,
          <>What is the first thing to do for a themed artwork?</>,
        ]}
        answers={[
          <>2B or 3B.</>,
          <>By repeating similar lines and shapes.</>,
          <>Tempera.</>,
          <>Choose a theme.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which paper size is used for the crumpled-fabric drawing?",
    options: ["A6", "A8", "A3", "A10"],
    answer: "A3",
    explanation: "The drawing uses A3 paper and a 2B or 3B pencil.",
  },
  {
    prompt: "Which pencils suit the crumpled-fabric drawing?",
    options: ["2B or 3B", "Only a white crayon", "A felt-tip pen", "A ballpoint pen"],
    answer: "2B or 3B",
    explanation: "Soft pencils such as 2B or 3B give a range of tones.",
  },
  {
    prompt: "Which parts of crumpled fabric should be the lightest in your drawing?",
    options: ["The deep creases", "The shadows under the folds", "The corners of the page", "The folds that catch the light"],
    answer: "The folds that catch the light",
    explanation: "Light areas show where the light hits the folds.",
  },
  {
    prompt: "Which parts of the fabric should be the darkest?",
    options: ["The tops of the folds", "The deep creases", "The brightest edges", "The paper margin"],
    answer: "The deep creases",
    explanation: "Creases make shadows and are drawn with dark tone.",
  },
  {
    prompt: "What makes the folds in your drawing look three-dimensional?",
    options: ["A thick outline around everything", "A flat colour for the whole drawing", "Changes of tone from light to dark", "A frame around the page"],
    answer: "Changes of tone from light to dark",
    explanation: "Tone creates the feeling of form.",
  },
  {
    prompt: "What are small marks used for in a drawing?",
    options: ["Showing texture", "Showing balance", "Showing the date", "Showing the signature"],
    answer: "Showing texture",
    explanation: "Mark-making shows texture, such as the rough surface of cloth.",
  },
  {
    prompt: "What does rhythm mean in a design?",
    options: ["One area that is the focus", "Parts of the same size", "A page without marks", "Repeating lines and shapes"],
    answer: "Repeating lines and shapes",
    explanation: "Repeating folds in a drawing create a rhythm.",
  },
  {
    prompt: "The darkest crease sits next to a bright fold. Which principle is this?",
    options: ["Balance", "Contrast", "Harmony", "Rhythm"],
    answer: "Contrast",
    explanation: "Contrast places light next to dark.",
  },
  {
    prompt: "Which two principles are added in this drawing to those you used before?",
    options: ["Texture and line", "Colour and tone", "Harmony and rhythm", "Shape and space"],
    answer: "Harmony and rhythm",
    explanation: "This project adds harmony and rhythm to balance, proportion, emphasis and contrast.",
  },
  {
    prompt: "Which paint is opaque and covers the paper well?",
    options: ["Tempera paint", "Water in a jar", "A pencil line", "A white page"],
    answer: "Tempera paint",
    explanation: "Tempera is an opaque paint.",
  },
  {
    prompt: "What can you do with oil pastels?",
    options: ["Dissolve them like ink in water", "Fold them like sheets of paper", "Cut them up with a saw", "Layer and blend the colours"],
    answer: "Layer and blend the colours",
    explanation: "Oil pastels can be layered and blended.",
  },
  {
    prompt: "What should you do before you begin a themed artwork?",
    options: ["Choose a frame", "Make preliminary sketches", "Hang the artwork", "Sell the artwork"],
    answer: "Make preliminary sketches",
    explanation: "Sketches help you to plan the final piece.",
  },
  {
    prompt: "Which examples can you use when you talk about artworks in the wider world?",
    options: ["Only artworks from your school", "Only artworks from this year", "International and local, past and present", "Only artworks you made"],
    answer: "International and local, past and present",
    explanation: "The wider world includes artworks from many places and times.",
  },
  {
    prompt: "You look at an artwork and ask what the artist wants to say. Which step is this?",
    options: ["Question", "Name", "Frame", "Sign"],
    answer: "Question",
    explanation: "Visual literacy includes looking, naming, questioning and reflecting.",
  },
];

const ToneTexturePastelTempera = () => (
  <CapsSubjectTopic
    title="Tone and Texture: Crumpled Fabric, Oil Pastel and Tempera"
    subtitle="Drawing crumpled fabric, design principles, oil pastel and tempera, and talking about artworks"
    learnSteps={learnSteps}
    task="gr8-ca-tone-texture-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default ToneTexturePastelTempera;
