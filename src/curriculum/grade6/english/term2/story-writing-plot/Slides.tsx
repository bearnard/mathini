import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a story needs",
    content: slide(
      <>
        <Rule>A story has characters who do things, a setting that tells where and when, and a plot, which is the order of events. The plot has a beginning, a problem, a series of events and an ending where the problem is solved. A good story keeps readers wondering what will happen next.</Rule>
        <KeyTable
          title="Story elements"
          head={["Element", "What it is"]}
          aria="Story elements. Character: A person or animal in the story. Setting: Where and when it happens. Plot: The events in order. Problem: What the character must deal with. Ending: How the problem is solved."
          rows={[["Character", "A person or animal in the story"], ["Setting", "Where and when it happens"], ["Plot", "The events in order"], ["Problem", "What the character must deal with"], ["Ending", "How the problem is solved"]]}
        />
        <Worked
          steps={[
            <>In a story about a girl who loses her school bag, the girl is the character, the taxi rank is the setting and finding the bag is the ending.</>,
            <>The plot follows her search from one place to the next.</>,
          ]}
        />
        <Mistake>Starting to write with no problem. Without a problem the story has no plot.</Mistake>
      </>,
    ),
  },
  {
    title: "Plan the plot on a flow chart",
    content: slide(
      <>
        <Rule>A flow chart shows the plot in boxes with arrows. Write the beginning in the first box, the problem in the second, the main events in the next boxes and the ending in the last. Planning in this way helps you to keep the events in order and to avoid forgetting the ending.</Rule>
        <KeyTable
          title="A plot flow chart"
          head={["Box", "What goes in it"]}
          aria="A plot flow chart. 1 Beginning: Introduce the character and the setting. 2 Problem: Something goes wrong. 3 Event: The character tries to fix it. 4 Event: A second try or a surprise. 5 Ending: The problem is solved."
          rows={[["1 Beginning", "Introduce the character and the setting"], ["2 Problem", "Something goes wrong"], ["3 Event", "The character tries to fix it"], ["4 Event", "A second try or a surprise"], ["5 Ending", "The problem is solved"]]}
        />
        <Worked
          steps={[
            <>Box 1: Lerato walks to school. Box 2: she loses her bag. Box 3: she asks the taxi marshal. Box 4: a friend helps. Box 5: the bag is found.</>,
            <>Each box becomes one or two paragraphs.</>,
          ]}
        />
        <Mistake>Putting too many events in one story. Keep to a few events that you can tell well.</Mistake>
      </>,
    ),
  },
  {
    title: "Write the story",
    content: slide(
      <>
        <Rule>Write one paragraph for each box of your plan. Use the past tense and describe the setting and feelings with a few exact words. Use dialogue for speech, with inverted commas, and begin a new line for each speaker. Link paragraphs with words such as then, soon and later.</Rule>
        <KeyTable
          title="Writing tips"
          head={["Tip", "Example"]}
          aria="Writing tips. Past tense: Lerato walked to school. Show feeling: Her heart raced. Dialogue: “Have you seen a blue bag?” she asked.. Linking words: Then, soon, later, at last. New paragraph: For a new event or speaker."
          rows={[["Past tense", "Lerato walked to school"], ["Show feeling", "Her heart raced"], ["Dialogue", "“Have you seen a blue bag?” she asked."], ["Linking words", "Then, soon, later, at last"], ["New paragraph", "For a new event or speaker"]]}
        />
        <ModelText label="A short model story" note="An original model written for this lesson.">
          <p>Lerato walked to school with her blue bag on her back. When she reached the gate, her bag was gone.</p>
          <p>Her heart raced. “Have you seen a blue bag?” she asked the taxi marshal. He shook his head.</p>
          <p>Soon her friend Sipho came running. “I found it at the rank!” he shouted.</p>
          <p>Lerato smiled with relief. From that day, she checked her bag every time she left a taxi.</p>
        </ModelText>
        <Worked
          steps={[
            <>You write: Lerato’s heart raced. “Have you seen a blue bag?” she asked the marshal.</>,
            <>The next paragraph begins with Soon, and tells how a friend helped.</>,
          ]}
        />
        <Mistake>Writing the whole story as one long paragraph. Start a new paragraph for each new part.</Mistake>
      </>,
    ),
  },
  {
    title: "Revise and edit",
    content: slide(
      <>
        <Rule>After you write, check the plot: does it have a problem and an ending? Then edit your spelling, punctuation and tense. Read the story aloud to find sentences that are unclear. Finally, write a title that names the main event or character.</Rule>
        <KeyTable
          title="Checklist"
          head={["Check", "Why"]}
          aria="Checklist. Problem and ending: The story needs a shape. Past tense: Keeps the story steady. Dialogue marks: Show who speaks. Paragraphs: Make it easy to read. Title: Gives readers a hint."
          rows={[["Problem and ending", "The story needs a shape"], ["Past tense", "Keeps the story steady"], ["Dialogue marks", "Show who speaks"], ["Paragraphs", "Make it easy to read"], ["Title", "Gives readers a hint"]]}
        />
        <Worked
          steps={[
            <>You find that the problem is solved too quickly, so you add a second try.</>,
            <>You add inverted commas to Sipho’s words.</>,
          ]}
        />
        <Mistake>Handing in a first draft. Revising makes a story much better.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the plot?</>,
          <>What does a flow chart show?</>,
          <>Which tense do you use?</>,
          <>What do inverted commas show?</>,
        ]}
        answers={[
          <>The events of the story in order.</>,
          <>The plot in boxes with arrows.</>,
          <>The past tense.</>,
          <>The words that a character speaks.</>,
        ]}
      />,
    ),
  },
];
