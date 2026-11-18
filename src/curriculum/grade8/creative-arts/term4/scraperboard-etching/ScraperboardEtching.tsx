import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { SCRAPER_STEPS } from '../../../../../components/diagrams/arts/ca8-visual-gaps';

// Terms, materials and steps follow the Grade 8 visual arts plan; no named artwork or artist is used (docs/notes/g8-ca-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What is scraperboard etching?",
    content: slide(
      <>
        <Rule>In scraperboard etching you scratch away a dark layer to show the light colour underneath. For this project you cover stiff paper or board, about 20 by 20 cm, heavily with white wax crayon, paint black ink or black tempera over it, let it dry and then scratch your drawing with a sharp tool. The ink sits on the wax, and scratching removes it.</Rule>
        <FactCards
          cards={[
            { title: "Wax", line1: "white wax crayon first" },
            { title: "Paint", line1: "black ink or tempera on top" },
            { title: "Mix in", line1: "a little dishwashing liquid" },
            { title: "Tool", line1: "a sharp tool to scratch" },
          ]}
          aria="Wax: white wax crayon first. Paint: black ink or tempera on top. Mix in: a little dishwashing liquid. Tool: a sharp tool to scratch."
        />
        <NumberedSteps steps={SCRAPER_STEPS.map((text) => ({ text }))} tone="amber" label="The four steps of a wax and ink scraperboard drawing" />
        <Worked
          title="Prepare your board"
          steps={[
            "Colour the board all over with white wax crayon, pressing hard.",
            "Paint black tempera mixed with a small amount of dishwashing liquid over the wax, so that the paint sticks.",
            "Let it dry completely before you scratch.",
          ]}
        />
        <Mistake>Scratching before the paint is dry. Wet paint smears and spoils the design.</Mistake>
      </>,
    ),
  },
  {
    title: "Shape, line, tone and texture in etching",
    content: slide(
      <>
        <Rule>You draw by scratching, so the scratched lines are white on a black background. Lines show the edges of shapes. Close lines together make a lighter area, and more scratched area makes a lighter tone. Short marks, dots and scratches in different directions show texture. Choose themes that you can observe: small objects, a still life or your interests.</Rule>
        <FactCards
          cards={[
            { title: "Shape", line1: "edges drawn with scratched lines" },
            { title: "Line", line1: "thin, thick, straight or curved scratches" },
            { title: "Tone", line1: "more scratching makes a lighter tone" },
            { title: "Texture", line1: "dots and short marks show surfaces" },
          ]}
          aria="Shape: edges drawn with scratched lines. Line: thin, thick, straight or curved scratches. Tone: more scratching makes a lighter tone. Texture: dots and short marks show surfaces."
        />
        <Worked
          title="Draw a shell"
          steps={[
            "Scratch the outline of the shell as a thin line.",
            "Scratch close lines on the side where the light hits to make it lighter.",
            "Leave the shadow side black and add small dots for the rough surface.",
          ]}
        />
        <Mistake>Scratching everything away. Keep some black areas so that you have contrast.</Mistake>
      </>,
    ),
  },
  {
    title: "Contrast, proportion and emphasis",
    content: slide(
      <>
        <Rule>Black against white gives the strongest contrast. Proportion is how the size of each part compares with the others. Emphasis makes one part the main focus, for example by making the area around it very dark or very detailed. Plan your design on paper first and keep the most important object large.</Rule>
        <FactCards
          cards={[
            { title: "Contrast", line1: "black against white" },
            { title: "Proportion", line1: "sizes of the parts compared" },
            { title: "Emphasis", line1: "one part is the focus" },
          ]}
          aria="Contrast: black against white. Proportion: sizes of the parts compared. Emphasis: one part is the focus."
        />
        <Worked
          title="Give a still life emphasis"
          steps={[
            "Place the biggest object, a jug, in the middle of the board.",
            "Leave the area around it very dark so that its scratched lines stand out.",
            "Keep the other objects smaller so that the jug is the focus.",
          ]}
        />
        <Mistake>Drawing all the objects at the same size. Without proportion and emphasis, nothing is the focus.</Mistake>
      </>,
    ),
  },
  {
    title: "Working safely with sharp tools",
    content: slide(
      <>
        <Rule>Etching tools are sharp found objects such as nails, pins and compass points. Handle them with care. Scratch away from your body and keep your free hand out of the way, work on a protected surface and never point a tool at another person. Put the tools away when you finish and share them fairly.</Rule>
        <FactCards
          cards={[
            { title: "Scratch away", line1: "from your body and your hand" },
            { title: "Protect", line1: "the table with a board" },
            { title: "Never point", line1: "a tool at another person" },
            { title: "Put away", line1: "tools when you finish" },
          ]}
          aria="Scratch away: from your body and your hand. Protect: the table with a board. Never point: a tool at another person. Put away: tools when you finish."
        />
        <Worked
          title="Set up a safe workspace"
          steps={[
            "Place your board on a larger piece of card to protect the table.",
            "Hold the tool like a pencil and scratch away from your body.",
            "When you finish, put the tools in a container with the points down.",
          ]}
        />
        <Mistake>Leaving sharp tools lying on the table. Put them away so that nobody gets hurt.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What goes on the board first?</>,
          <>What does scratching do?</>,
          <>Which tone does more scratching make?</>,
          <>Which way do you scratch?</>,
        ]}
        answers={[
          <>White wax crayon.</>,
          <>Shows the light colour below.</>,
          <>A lighter tone.</>,
          <>Away from your body.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What do you put on the paper first in a wax and ink scraperboard drawing?",
    options: ["Black ink", "A frame", "White wax crayon", "A pencil outline only"],
    answer: "White wax crayon",
    explanation: "The wax goes first, then the black paint, and then you scratch.",
  },
  {
    prompt: "Why do you add a little dishwashing liquid to the black tempera paint?",
    options: ["So that the paint sticks to the wax", "So that the paint smells nice", "So that the paint is red", "So that the paint stays wet for a week"],
    answer: "So that the paint sticks to the wax",
    explanation: "Dishwashing liquid helps the paint to stick on the wax.",
  },
  {
    prompt: "What must you do before you start to scratch your drawing?",
    options: ["Wet the paint again", "Cover it with water", "Paint over it twice", "Let the paint dry completely"],
    answer: "Let the paint dry completely",
    explanation: "Wet paint smears when you scratch.",
  },
  {
    prompt: "What happens when you scratch the black layer away?",
    options: ["The whole paper turns black", "The light colour underneath shows", "The wax melts into the ink", "The paint becomes much thicker"],
    answer: "The light colour underneath shows",
    explanation: "Scratching removes the dark layer and shows the light below.",
  },
  {
    prompt: "In a scraperboard drawing, which tone does a lot of scratching make?",
    options: ["A darker tone", "A blue tone", "A lighter tone", "No tone at all"],
    answer: "A lighter tone",
    explanation: "More scratched area shows more of the light colour.",
  },
  {
    prompt: "Which lines show the edges of shapes in a scraperboard drawing?",
    options: ["Scratched lines", "Pencil lines drawn after", "Folds in the paper", "Cut edges"],
    answer: "Scratched lines",
    explanation: "Lines are drawn by scratching.",
  },
  {
    prompt: "How can you show texture in a scraperboard drawing?",
    options: ["With one long line", "With a flat black area", "With a thick frame", "With dots and short marks"],
    answer: "With dots and short marks",
    explanation: "Dots and short marks in different directions suggest surfaces.",
  },
  {
    prompt: "Which size is the board for the etching project?",
    options: ["About 2 by 2 cm", "About 20 by 20 cm", "About 2 by 2 m", "About 200 by 200 cm"],
    answer: "About 20 by 20 cm",
    explanation: "The stiff paper or board is about 20 by 20 cm.",
  },
  {
    prompt: "Which of these is a good theme for an observational etching?",
    options: ["A page full of numbers", "A blank sheet of paper", "A still life of objects", "A list of phone numbers"],
    answer: "A still life of objects",
    explanation: "Observational themes include small objects and still life arrangements.",
  },
  {
    prompt: "You want a jug to be the focus of your etching. What should you do?",
    options: ["Draw it large with dark around it", "Draw it very small in a corner", "Hide it behind the other objects", "Scratch it off the board edge"],
    answer: "Draw it large with dark around it",
    explanation: "A larger, high-contrast object gets emphasis.",
  },
  {
    prompt: "Which design principle describes black next to white in an etching?",
    options: ["Rhythm", "Harmony", "Balance", "Contrast"],
    answer: "Contrast",
    explanation: "Black against white gives strong contrast.",
  },
  {
    prompt: "Which of these can you use as an etching tool?",
    options: ["A wet sponge", "A nail or a pin", "A paint roller", "A glue stick"],
    answer: "A nail or a pin",
    explanation: "Sharp found objects such as nails, pins and compass points are etching tools.",
  },
  {
    prompt: "Which way should you scratch when you use a sharp tool?",
    options: ["Towards your hand", "Towards your friend", "Away from your body", "Towards your face"],
    answer: "Away from your body",
    explanation: "Scratch away from your body so that you cannot hurt yourself.",
  },
  {
    prompt: "What should you do with sharp tools when you finish?",
    options: ["Put them away safely", "Leave them on the table", "Hand them to a friend by the point", "Hide them in a bag"],
    answer: "Put them away safely",
    explanation: "Put tools away so that nobody gets hurt.",
  },
];

const ScraperboardEtching = () => (
  <CapsSubjectTopic
    title="Scraperboard Etching"
    subtitle="Wax and ink scraperboard, shape, line, tone and texture, contrast and emphasis, and working safely"
    learnSteps={learnSteps}
    task="gr8-ca-scraperboard-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default ScraperboardEtching;
