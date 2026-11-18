import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/g9eng';

// Grade 9 English HL: reading cartoons and visual texts. Cartoons are described in words, no copied artwork. General criteria; no marks.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "How a cartoon works",
    content: slide(
      <>
        <Rule>A cartoon is a drawing that makes a point, often about a news event or an idea, and often with humour. It may have one frame or several. Words appear in speech bubbles (what a character says), thought bubbles (what a character thinks) and captions (a line of text below or above). Read frames from left to right and from the top down.</Rule>
        <InfoTable
          cols={[{ title: "Feature", w: 30 }, { title: "What it does", w: 70 }]}
          rows={[
            ["Frame", "one box in the story"],
            ["Speech bubble", "what a character says"],
            ["Thought bubble", "what a character thinks"],
            ["Caption", "a line that explains"],
          ]}
          aria={"A table of cartoon features. Frame: one box in the story. Speech bubble: what a character says. Thought bubble: what a character thinks. Caption: a line that explains."}
        />
        <Worked
          title="Read a described cartoon"
          steps={[
            <>Frame 1: a man holds a large umbrella on a dry, sunny day.</>,
            <>Frame 2: his neighbour, who has no umbrella, is soaked by a small cloud over his head only.</>,
            <>The caption reads: &quot;Some people always get the rain.&quot; The message is about unfairness.</>,
          ]}
        />
        <Mistake>Reading only the words. The pictures carry part of the message.</Mistake>
      </>,
    ),
  },
  {
    title: "Exaggeration, symbols and caricature",
    content: slide(
      <>
        <Rule>Cartoonists exaggerate: they make a feature much bigger or sillier than real, so that the point is clear. A caricature exaggerates a person&apos;s looks. A symbol is an object that stands for an idea: a dove can stand for peace and a set of scales for justice. Ask what is exaggerated and what each symbol means.</Rule>
        <InfoTable
          cols={[{ title: "Device", w: 28 }, { title: "Example", w: 42 }, { title: "Effect", w: 30 }]}
          rows={[
            ["Exaggeration", "a huge bill", "stresses the cost"],
            ["Symbol", "a dove", "stands for peace"],
            ["Caricature", "a very large nose", "mocks a person"],
          ]}
          aria={"A table of cartoon devices. Exaggeration, for example a huge bill, stresses the cost. A symbol, for example a dove, stands for peace. A caricature, for example a very large nose, mocks a person."}
        />
        <Worked
          title="Find the point"
          steps={[
            <>A giant rubbish bin swallows a small town: the exaggeration shows how much waste there is.</>,
            <>A tiny dove sits on a huge gun: the symbol suggests that peace is weak against war.</>,
            <>The cartoonist wants the reader to think about waste or war.</>,
          ]}
        />
        <Mistake>Taking a cartoon literally. Ask what the cartoonist really means.</Mistake>
      </>,
    ),
  },
  {
    title: "Layout, tone and message",
    content: slide(
      <>
        <Rule>Layout is how the parts are arranged: the size of the frames, the position of the characters and the use of colour or empty space. Bigger or central figures draw the eye first. The tone may be humorous, angry or sad. To state the message, say who or what is criticised and what the cartoonist wants readers to think or do.</Rule>
        <FlowSteps
          aria={"Steps for reading a cartoon. Look at frames, figures and symbols, read the bubbles and caption, ask what is exaggerated, then state the message and the tone."}
          steps={[{ label: "Look: frames, figures, symbols" }, { label: "Read: bubbles and caption" }, { label: "Ask: what is exaggerated?" }, { label: "State the message and the tone" }]}
        />
        <Worked
          title="Write the message"
          steps={[
            <>Topic: a crowded taxi rank with one empty bus.</>,
            <>Exaggeration: the taxis are piled on top of each other.</>,
            <>Message: the cartoonist asks why the empty bus is not used. Tone: humorous but critical.</>,
          ]}
        />
        <Mistake>Describing the cartoon only. Explain what it means, not just what it shows.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which part of a cartoon shows what a character thinks?</>,
          <>What is a symbol?</>,
          <>What does a cartoonist do to a feature in an exaggeration?</>,
          <>What two things should you give when you state the message?</>,
        ]}
        answers={[
          <>The <strong>thought bubble</strong>.</>,
          <>An object that <strong>stands for an idea</strong>.</>,
          <>Makes it <strong>much bigger or sillier</strong> than real.</>,
          <><strong>Who or what is criticised</strong>, and what the cartoonist wants.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a cartoon?",
    options: ["A long written report about the news", "A drawing that makes a point, often with humour", "A photograph of a real news event", "A table of figures for a budget"],
    answer: "A drawing that makes a point, often with humour",
    explanation: "A cartoon uses pictures to make a point.",
  },
  {
    prompt: "What does a speech bubble show?",
    options: ["What a character thinks", "Where the story takes place", "Who drew the cartoon", "What a character says"],
    answer: "What a character says",
    explanation: "Speech bubbles hold spoken words.",
  },
  {
    prompt: "What does a thought bubble show?",
    options: ["What a character thinks", "What a character says aloud", "The title of the cartoon", "The date of the cartoon"],
    answer: "What a character thinks",
    explanation: "Thought bubbles hold unspoken ideas.",
  },
  {
    prompt: "What is a caption?",
    options: ["A drawing of a single face", "A bubble that holds a thought", "A line of text that explains the picture", "A frame at the end"],
    answer: "A line of text that explains the picture",
    explanation: "A caption is a short line of text with the cartoon.",
  },
  {
    prompt: "In which order do you normally read the frames of a cartoon?",
    options: ["From right to left and bottom up", "Left to right and from the top down", "In any order that you like", "From the middle outwards"],
    answer: "Left to right and from the top down",
    explanation: "Most readers follow this order.",
  },
  {
    prompt: "What is exaggeration in a cartoon?",
    options: ["Drawing it exactly the way it is in life", "Leaving it out of the frame completely", "Writing its name below it as a label", "Making something much bigger or sillier than real"],
    answer: "Making something much bigger or sillier than real",
    explanation: "Exaggeration makes a point clear.",
  },
  {
    prompt: "A cartoon shows a huge bill on a tiny table. What does the exaggeration stress?",
    options: ["The cost is very large", "The table is very old", "The room is very small", "The picture is very funny"],
    answer: "The cost is very large",
    explanation: "The huge bill stresses the cost.",
  },
  {
    prompt: "What is a symbol?",
    options: ["A word inside a bubble", "A line that joins two frames", "An object that stands for an idea", "A very small character"],
    answer: "An object that stands for an idea",
    explanation: "A dove, for example, can stand for peace.",
  },
  {
    prompt: "A cartoon shows scales held up. What idea may the scales stand for?",
    options: ["Hunger", "Justice", "Speed", "Music"],
    answer: "Justice",
    explanation: "Scales are a common symbol of justice.",
  },
  {
    prompt: "What is a caricature?",
    options: ["A photograph of a famous person", "A caption beneath a drawing", "A symbol of peace", "A drawing that exaggerates a person's looks"],
    answer: "A drawing that exaggerates a person's looks",
    explanation: "Caricatures mock or stress certain features.",
  },
  {
    prompt: "What does the layout of a cartoon mean?",
    options: ["How the parts are arranged", "The name of the cartoonist", "The year it was drawn", "The length of the caption"],
    answer: "How the parts are arranged",
    explanation: "Layout includes frame size and position.",
  },
  {
    prompt: "Which figure in a cartoon usually draws the eye first?",
    options: ["The smallest figure at the edge", "The figure with no colour", "The biggest or most central figure", "The figure who says nothing"],
    answer: "The biggest or most central figure",
    explanation: "Size and position guide the eye.",
  },
  {
    prompt: "Which sentence states the message of a cartoon?",
    options: ["The cartoon has a bus and some taxis.", "The cartoonist asks why an empty bus is not used.", "The picture has four frames.", "The caption is under the picture."],
    answer: "The cartoonist asks why an empty bus is not used.",
    explanation: "A message says what the cartoonist wants readers to think.",
  },
  {
    prompt: "What is the tone of a cartoon?",
    options: ["The size of the frames that are used", "The colour of the title at the top", "The number of bubbles in the frames", "The attitude, such as humorous or angry"],
    answer: "The attitude, such as humorous or angry",
    explanation: "The tone shows the cartoonist's feeling.",
  },
];

const ReadingCartoonsVisualTexts = () => (
  <CapsSubjectTopic
    title="Reading Cartoons and Visual Texts"
    subtitle="Frames, bubbles and captions, exaggeration, symbols and caricature, layout, tone and message"
    learnSteps={learnSteps}
    task="gr9-reading-cartoons-visual-texts-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={9}
  />
);

export default ReadingCartoonsVisualTexts;
