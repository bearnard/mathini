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
    title: "Art as social commentary",
    content: slide(
      <>
        <Rule>Artists are part of society and can comment on it. A social commentator uses art, craft, design or popular culture to say something about current events and societal issues in South Africa. When you look at an image, you can say what you see, what you think the artist means and how it makes you feel.</Rule>
        <FactCards
          cards={[
            { title: "Look", line1: "say what you see" },
            { title: "Interpret", line1: "say what you think it means" },
            { title: "Respond", line1: "say how it makes you feel" },
            { title: "Respect", line1: "listen to other views" },
          ]}
          aria="Look: say what you see. Interpret: say what you think it means. Respond: say how it makes you feel. Respect: listen to other views."
        />
        <Worked
          title="Respond to an image about water"
          steps={[
            "Look: a picture of a dry tap and a child holding an empty bucket.",
            "Interpret: the artist is showing that water is not always available.",
            "Respond: it makes you feel concerned, and you listen to how others feel.",
          ]}
        />
        <Mistake>Saying only whether you like a picture. Explain what it shows and what it means.</Mistake>
      </>,
    ),
  },
  {
    title: "Symbols",
    content: slide(
      <>
        <Rule>A symbol is an image that stands for an idea. Artists use symbols to talk about societal issues without writing words. A dove can stand for peace, an empty plate for hunger, joined hands for unity and a tree growing from rubbish for hope. You learn to recognise and interpret symbolic language.</Rule>
        <FactCards
          cards={[
            { title: "Dove", line1: "peace" },
            { title: "Empty plate", line1: "hunger" },
            { title: "Joined hands", line1: "unity" },
            { title: "Tree in rubbish", line1: "hope" },
          ]}
          aria="Dove: peace. Empty plate: hunger. Joined hands: unity. Tree in rubbish: hope."
        />
        <Worked
          title="Choose a symbol for water shortage"
          steps={[
            "Think about the issue: there is not enough clean water.",
            "Choose an image that stands for it, such as a dry tap or an empty bucket.",
            "Explain in words why this symbol shows the issue.",
          ]}
        />
        <Mistake>Choosing a symbol that no one else can understand. A good symbol is easy for others to recognise.</Mistake>
      </>,
    ),
  },
  {
    title: "Drawing with pencil tone",
    content: slide(
      <>
        <Rule>In this project you draw a personal comment on a societal issue with 2B, 3B and 4B pencils on squares of paper. The B means black: a higher number is softer and makes a darker mark. Use tone to create contrast, and use proportion, emphasis and unity in your design. Texture and line add detail.</Rule>
        <ToneScale aria="Four grades of pencil from lighter to darker: HB, 2B, 3B and 4B. A higher number of B is softer and makes a darker mark." />
        <Worked
          title="Build tone in a drawing"
          steps={[
            "Use a 2B pencil for the light areas of your drawing.",
            "Add a 3B pencil for the middle tones.",
            "Use the 4B pencil for the darkest parts, to give the main symbol emphasis.",
          ]}
        />
        <Mistake>Pressing hard with a light pencil to get dark tones. Use a softer pencil, such as a 4B, for the darkest marks.</Mistake>
      </>,
    ),
  },
  {
    title: "Plan and respect",
    content: slide(
      <>
        <Rule>Plan your drawing before you start. With guidance, collect images, make preliminary drawings and try different paper sizes and formats, so that you can change the scale and the amount of detail. Talk about similarities and differences between people and communities, and treat other people's ideas with respect and understanding.</Rule>
        <FactCards
          cards={[
            { title: "Paper", line1: "squares in different sizes" },
            { title: "Pencils", line1: "2B, 3B and 4B" },
            { title: "Planning", line1: "collect images and sketch" },
            { title: "Respect", line1: "listen to other views" },
          ]}
          aria="Paper: squares in different sizes. Pencils: 2B, 3B and 4B. Planning: collect images and sketch. Respect: listen to other views."
        />
        <NumberedSteps steps={["Choose a societal issue", "Collect images and information", "Make preliminary sketches", "Draw the final piece", "Explain your symbols to others"].map((text) => ({ text }))} tone="amber" label="A plan for a drawing about a societal issue in five steps" />
        <Worked
          title="Plan a drawing about littering"
          steps={[
            "Choose the issue: litter in your street.",
            "Collect photographs and make three small sketches with different symbols.",
            "Choose the best sketch, draw it large and explain the symbol to a friend.",
          ]}
        />
        <Mistake>Going straight to the final drawing. Sketches let you try ideas and choose the best one.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a symbol do in art?</>,
          <>Which pencil makes the darkest mark?</>,
          <>What does a dove stand for?</>,
          <>What comes first in a plan?</>,
        ]}
        answers={[
          <>Stands for an idea.</>,
          <>4B.</>,
          <>Peace.</>,
          <>Choosing a societal issue.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What does an artist do when they are a social commentator?",
    options: ["Sell paint to the public", "Teach others how to read", "Comment on society through art", "Build houses for families"],
    answer: "Comment on society through art",
    explanation: "Artists can use their work to comment on current events and societal issues.",
  },
  {
    prompt: "A dove is drawn to suggest peace. What is the dove acting as?",
    options: ["A symbol", "A texture", "A tone", "A proportion"],
    answer: "A symbol",
    explanation: "A symbol is an image that stands for an idea, such as peace.",
  },
  {
    prompt: "Which image is a symbol for peace?",
    options: ["An empty plate", "A broken window", "A closed gate", "A dove"],
    answer: "A dove",
    explanation: "A dove is a common symbol of peace.",
  },
  {
    prompt: "Which image could stand for hunger?",
    options: ["Joined hands", "An empty plate", "A tree in sunshine", "A flying bird"],
    answer: "An empty plate",
    explanation: "An empty plate suggests that there is not enough food.",
  },
  {
    prompt: "Which image could stand for unity?",
    options: ["A dry tap", "A locked door", "Joined hands", "A torn page"],
    answer: "Joined hands",
    explanation: "Joined hands show people working together.",
  },
  {
    prompt: "A drawing shows a tree growing out of a heap of rubbish. What idea does it suggest?",
    options: ["Hope", "Hunger", "Fear", "Boredom"],
    answer: "Hope",
    explanation: "Something living and growing from rubbish suggests hope for change.",
  },
  {
    prompt: "What does the B in a 4B pencil stand for?",
    options: ["Brown", "Blue", "Broad", "Black"],
    answer: "Black",
    explanation: "B stands for black, and a higher number is softer and darker.",
  },
  {
    prompt: "Which of these pencils makes the darkest mark?",
    options: ["HB", "4B", "2B", "3B"],
    answer: "4B",
    explanation: "The higher the number of B, the softer and darker the mark.",
  },
  {
    prompt: "You want the darkest parts of your drawing. Which pencil should you choose?",
    options: ["A hard HB pencil pressed lightly", "A 2B pencil held loosely", "A 4B pencil", "A white wax crayon"],
    answer: "A 4B pencil",
    explanation: "A soft 4B pencil gives the darkest tones.",
  },
  {
    prompt: "Why do you make preliminary sketches?",
    options: ["To try ideas before the final drawing", "To avoid drawing the final piece", "To use up more paper", "To hide your idea"],
    answer: "To try ideas before the final drawing",
    explanation: "Sketches help you to plan with guidance.",
  },
  {
    prompt: "When you look at an artwork, which question should you ask?",
    options: ["How much did the frame cost?", "Who sat nearest to the wall?", "How long is the gallery wall?", "What does it show and mean?"],
    answer: "What does it show and mean?",
    explanation: "Look, interpret and respond to an artwork.",
  },
  {
    prompt: "Which paper change helps you to vary scale and detail?",
    options: ["Using only one size of paper", "Using different paper sizes and formats", "Using paper of one colour", "Using paper without edges"],
    answer: "Using different paper sizes and formats",
    explanation: "Changing paper size changes the scale and the detail.",
  },
  {
    prompt: "Why do you treat other people's opinions about your art with respect?",
    options: ["Everyone must agree with you", "Opinions have no real value", "People see different meanings", "Talking about art is not allowed"],
    answer: "People see different meanings",
    explanation: "Talking about similarities and differences shows respect and understanding.",
  },
  {
    prompt: "What should you do first when you plan a drawing about a societal issue?",
    options: ["Choose the issue", "Frame the drawing", "Show it to the class", "Sign your name"],
    answer: "Choose the issue",
    explanation: "Choosing the issue comes before collecting images and making sketches.",
  },
];

const SocietalIssuesArt = () => (
  <CapsSubjectTopic
    title="Societal Issues in South African Art"
    subtitle="Art as social commentary, symbols, drawing with 2B, 3B and 4B pencils, planning and respect"
    learnSteps={learnSteps}
    task="gr8-ca-societal-issues-art-t2"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default SocietalIssuesArt;
