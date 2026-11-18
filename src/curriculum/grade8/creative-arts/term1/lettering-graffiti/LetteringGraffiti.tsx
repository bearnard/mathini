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
    title: "Lettering in popular culture",
    content: slide(
      <>
        <Rule>Creative lettering means designing letters as pictures, not only as words. You see it on posters, packaging, signs and murals. Graffiti is a form of lettering and image-making that artists make with paint or ink on walls. You can look at it, talk about it and write about the role of the artist in popular culture.</Rule>
        <FactCards
          cards={[
            { title: "Posters", line1: "letters designed to catch the eye" },
            { title: "Packaging", line1: "lettering that shows a brand" },
            { title: "Signs", line1: "clear lettering to give information" },
            { title: "Murals and graffiti", line1: "large lettering and images on walls" },
          ]}
          aria="Posters: letters designed to catch the eye. Packaging: lettering that shows a brand. Signs: clear lettering to give information. Murals and graffiti: large lettering and images on walls."
        />
        <Worked
          title="Describe a poster"
          steps={[
            "Look at the lettering on a poster for a school concert.",
            "Name what you see: thick lines, tall shapes and a rough texture.",
            "Say what it makes you feel and what the artist wanted you to notice.",
          ]}
        />
        <Mistake>Thinking that graffiti is only about writing a name. Graffiti is also visual expression, and artists plan its shapes, colours and message.</Mistake>
      </>,
    ),
  },
  {
    title: "Art elements in lettering",
    content: slide(
      <>
        <Rule>The art elements that you use in lettering are shape, line, tone, texture and complementary colour. Complementary colours sit opposite each other on the colour wheel, such as red and green, blue and orange, and yellow and purple. Placing them side by side makes each look brighter.</Rule>
        <ComplementPairs aria="Three pairs of complementary colours, each pair opposite on the colour wheel: red and green, blue and orange, yellow and purple." />
        <Worked
          title="Choose colours for a letter"
          steps={[
            "You want a big letter to stand out on a poster.",
            "Pick yellow for the letter and purple for the background, because they are complementary colours.",
            "Use thick lines for the shape and add a little texture with dots of ink.",
          ]}
        />
        <Mistake>Using colours that are too close together. Letters in a similar tone to the background are hard to read.</Mistake>
      </>,
    ),
  },
  {
    title: "Design principles in lettering",
    content: slide(
      <>
        <Rule>Design principles help you to arrange your lettering. Contrast makes parts stand out by placing very different tones or colours together. Proportion compares the sizes of the parts. Emphasis makes the most important part the focus. Unity makes all the parts look as if they belong together. Balance spreads the visual weight evenly.</Rule>
        <FactCards
          cards={[
            { title: "Contrast", line1: "light against dark" },
            { title: "Proportion", line1: "the sizes of the parts" },
            { title: "Emphasis", line1: "the focus of the design" },
            { title: "Unity", line1: "parts belong together" },
            { title: "Balance", line1: "weight spread evenly" },
          ]}
          aria="Contrast: light against dark. Proportion: the sizes of the parts. Emphasis: the focus of the design. Unity: parts belong together. Balance: weight spread evenly."
        />
        <Worked
          title="Design a sports day poster"
          steps={[
            "Make the word SPORTS very large, which gives it emphasis.",
            "Draw every letter in the same style so that the poster has unity.",
            "Place small letters on the other side to balance the big word.",
          ]}
        />
        <Mistake>Making every letter the same size and the same colour. Without contrast and emphasis, nothing stands out.</Mistake>
      </>,
    ),
  },
  {
    title: "Designing with ink and talking about values",
    content: slide(
      <>
        <Rule>You can experiment with creative lettering using coloured inks and small brushes on small rectangles of paper. Try different paper sizes and formats, and change the scale and the amount of detail. When you talk about graffiti, listen to the opinions of others and respect them. Make graffiti on paper or with permission, never on property that is not yours.</Rule>
        <FactCards
          cards={[
            { title: "Materials", line1: "coloured inks and small brushes" },
            { title: "Paper", line1: "small rectangles in different sizes" },
            { title: "Values", line1: "listen to and respect opinions" },
            { title: "Where", line1: "on paper or with permission" },
          ]}
          aria="Materials: coloured inks and small brushes. Paper: small rectangles in different sizes. Values: listen to and respect opinions. Where: on paper or with permission."
        />
        <NumberedSteps steps={["Sketch your letters lightly with a pencil", "Go over them with ink and a small brush", "Add a complementary colour", "Show a friend and listen to their opinion"].map((text) => ({ text }))} tone="amber" label="A plan for a lettering design in four steps" />
        <Worked
          title="Work through a design"
          steps={[
            "Sketch your letters lightly with a pencil.",
            "Go over the letters with ink and a small brush, and add a complementary colour.",
            "Show your design to a friend, listen to their opinion and say what you would change.",
          ]}
        />
        <Mistake>Painting on walls without permission. Making art on someone else's property is vandalism, so keep graffiti for paper or places where you have permission.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which colour is complementary to red?</>,
          <>What does emphasis do in a design?</>,
          <>What is creative lettering?</>,
          <>Name one safe place for graffiti.</>,
        ]}
        answers={[
          <>Green.</>,
          <>It makes the main part the focus.</>,
          <>Designing letters as pictures.</>,
          <>Paper, or a wall where you have permission.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "An orange shape sits next to a blue shape on a poster. What are these two colours called?",
    options: ["Neighbouring colours", "Neutral colours", "Complementary colours", "Pastel colours"],
    answer: "Complementary colours",
    explanation: "Blue sits opposite orange on the colour wheel, so they are complementary.",
  },
  {
    prompt: "Which colour pair makes the strongest contrast on a poster?",
    options: ["Yellow and purple", "Red and orange", "Blue and purple", "Green and yellow"],
    answer: "Yellow and purple",
    explanation: "Yellow and purple are complementary colours, so they look bright side by side.",
  },
  {
    prompt: "What are complementary colours?",
    options: ["Colours that look almost the same", "Colours made with black and white", "Colours that are used only on walls", "Colours opposite on the colour wheel"],
    answer: "Colours opposite on the colour wheel",
    explanation: "Red and green, blue and orange, and yellow and purple are complementary pairs.",
  },
  {
    prompt: "You make the first word of a poster much bigger than the rest. Which design principle is this?",
    options: ["Balance", "Emphasis", "Unity", "Texture"],
    answer: "Emphasis",
    explanation: "Emphasis makes one part the focus.",
  },
  {
    prompt: "Every letter on your poster is drawn in the same style. Which design principle does this give?",
    options: ["Contrast", "Proportion", "Unity", "Line"],
    answer: "Unity",
    explanation: "Unity makes the parts of a design belong together.",
  },
  {
    prompt: "Dark letters are placed on a light background. Which design principle does this show?",
    options: ["Contrast", "Unity", "Balance", "Proportion"],
    answer: "Contrast",
    explanation: "Contrast places very different tones or colours together.",
  },
  {
    prompt: "Which of these is an art element, not a design principle?",
    options: ["Balance", "Emphasis", "Contrast", "Texture"],
    answer: "Texture",
    explanation: "Shape, line, tone, texture and complementary colour are art elements.",
  },
  {
    prompt: "What does the word proportion describe in a design?",
    options: ["How shiny a surface is", "How the sizes of the parts compare", "How many colours are used", "How old the artist is"],
    answer: "How the sizes of the parts compare",
    explanation: "Proportion compares the size of one part with another.",
  },
  {
    prompt: "Which materials are used for the lettering project?",
    options: ["Clay and carving tools", "Wax crayon and nails", "Coloured inks and small brushes", "Fabric and glue"],
    answer: "Coloured inks and small brushes",
    explanation: "The lettering project uses coloured inks, dyes and small brushes on small paper.",
  },
  {
    prompt: "Why do you change the paper size when you design lettering?",
    options: ["To change the scale and the detail", "To save time on drawing", "To avoid using colour", "To make the letters smaller each time"],
    answer: "To change the scale and the detail",
    explanation: "Different sizes change the scale and the amount of detail you can show.",
  },
  {
    prompt: "A friend says they dislike your graffiti design. What is the best response?",
    options: ["Tell them that they are wrong", "Throw the design away at once", "Stop speaking to your friend", "Listen to them and respect it"],
    answer: "Listen to them and respect it",
    explanation: "Talking about art helps you to respect the opinions of others.",
  },
  {
    prompt: "Where is it right to make graffiti?",
    options: ["On a neighbour's wall at night", "On paper or with permission", "On a school desk with a pen", "On a bus shelter in the road"],
    answer: "On paper or with permission",
    explanation: "Making graffiti on property without permission is vandalism.",
  },
  {
    prompt: "Which of these is a place where you see creative lettering?",
    options: ["A clay pot", "A pencil case lid only", "A poster", "A kitchen table leg"],
    answer: "A poster",
    explanation: "Posters, packaging, signs and murals all use designed lettering.",
  },
  {
    prompt: "An artist plans the shapes, colours and message of a mural. What does this show about graffiti?",
    options: ["It is visual expression", "It cannot be planned ahead", "It uses no colour or shape", "It has no message for people"],
    answer: "It is visual expression",
    explanation: "Graffiti artists plan their work like other artists.",
  },
];

const LetteringGraffiti = () => (
  <CapsSubjectTopic
    title="Creative Lettering and Graffiti"
    subtitle="Lettering in popular culture, art elements, design principles, complementary colours and designing with ink"
    learnSteps={learnSteps}
    task="gr8-ca-lettering-graffiti-t1"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default LetteringGraffiti;
