import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "How a comic strip tells a story",
    content: slide(
      <>
        <Rule>A comic strip tells a story in a row of boxes called panels. Each panel shows one moment in pictures. Words appear in speech bubbles for what characters say, in thought bubbles for what they think and in captions for the narrator. Sound words, such as BANG, show noises.</Rule>
        <KeyTable
          title="Parts of a comic strip"
          head={["Part", "What it does"]}
          aria="Parts of a comic strip. Panel: One box showing one moment. Speech bubble: Shows what a character says. Thought bubble: Shows what a character thinks. Caption: Tells the reader where or when. Sound word: Shows a noise, such as BANG."
          rows={[["Panel", "One box showing one moment"], ["Speech bubble", "Shows what a character says"], ["Thought bubble", "Shows what a character thinks"], ["Caption", "Tells the reader where or when"], ["Sound word", "Shows a noise, such as BANG"]]}
        />
        <Worked
          steps={[
            <>In panel one, a caption says Saturday morning. A speech bubble shows a girl saying, I am late!</>,
            <>In panel three, a sound word BANG shows a door slamming.</>,
          ]}
        />
        <Mistake>Putting too many words in one bubble. Keep the words short so the pictures can tell the story.</Mistake>
      </>,
    ),
  },
  {
    title: "Planning a comic script",
    content: slide(
      <>
        <Rule>A comic script is a plan with a description of each panel and the words that go in it. Decide on the characters, the setting and a short story with a beginning, a problem and an ending. Four to six panels are enough. In your script, number each panel and say what the picture shows.</Rule>
        <KeyTable
          title="Script planner"
          head={["Panel", "What to plan"]}
          aria="Script planner. 1: Introduce the characters and place. 2: Show the problem. 3: Show what the character does. 4: Show the result or the surprise. Words: Short speech bubbles and captions."
          rows={[["1", "Introduce the characters and place"], ["2", "Show the problem"], ["3", "Show what the character does"], ["4", "Show the result or the surprise"], ["Words", "Short speech bubbles and captions"]]}
        />
        <Worked
          steps={[
            <>Panel 1: A boy, Sipho, walks to school. Panel 2: His shoe comes off. Panel 3: He hops to the gate. Panel 4: His teacher laughs and gives him a plaster.</>,
            <>Each panel has one clear moment.</>,
          ]}
        />
        <Mistake>Trying to tell a long story. A short comic needs one problem and a quick ending.</Mistake>
      </>,
    ),
  },
  {
    title: "Writing the script",
    content: slide(
      <>
        <Rule>Write the panel number, then a short description of the picture, then the words. Write the speech in inverted commas or in a bubble and put the name of the speaker first. Use present tense in the picture descriptions. Use exclamation marks and sound words to show feeling and noise.</Rule>
        <KeyTable
          title="A script format"
          head={["Part", "Example"]}
          aria="A script format. Panel number: Panel 2. Picture: Sipho’s shoe flies off. Speaker and words: Sipho: Oh no!. Sound word: FLAP!. Caption: A minute later."
          rows={[["Panel number", "Panel 2"], ["Picture", "Sipho’s shoe flies off"], ["Speaker and words", "Sipho: Oh no!"], ["Sound word", "FLAP!"], ["Caption", "A minute later"]]}
        />
        <ModelText label="A short model script" note="An original model written for this lesson.">
          <p>Panel 1: Sipho walks to school with his bag. Caption: Monday morning.</p>
          <p>Panel 2: Sipho’s shoe flies off. Sipho: Oh no! (sound word: FLAP!)</p>
          <p>Panel 3: Sipho hops to the gate. Sipho thinks: I will be late!</p>
          <p>Panel 4: The teacher gives him a plaster and smiles. Teacher: Come in, Sipho.</p>
        </ModelText>
        <Worked
          steps={[
            <>Panel 2: Sipho’s shoe flies off. Sipho: Oh no! The sound word FLAP! appears next to the shoe.</>,
            <>The picture descriptions are in the present tense.</>,
          ]}
        />
        <Mistake>Writing the picture description in the past tense. A script describes what the picture shows now.</Mistake>
      </>,
    ),
  },
  {
    title: "Check your comic script",
    content: slide(
      <>
        <Rule>Check that each panel shows one moment and that the story has a problem and an ending. Make sure the speech bubbles are short and the speakers clear. Check spelling and punctuation, and that your sound words and captions fit.</Rule>
        <KeyTable
          title="Checklist"
          head={["Check", "Why"]}
          aria="Checklist. One moment per panel: Keeps the story clear. Problem and ending: Gives it a shape. Short words: Pictures do the work. Clear speakers: Readers know who talks. Spelling: Makes it clear."
          rows={[["One moment per panel", "Keeps the story clear"], ["Problem and ending", "Gives it a shape"], ["Short words", "Pictures do the work"], ["Clear speakers", "Readers know who talks"], ["Spelling", "Makes it clear"]]}
        />
        <Worked
          steps={[
            <>You shorten a long bubble to four words so the picture can tell the rest.</>,
            <>You add a caption to show that panel four is later in the day.</>,
          ]}
        />
        <Mistake>Having no ending. The last panel should solve the problem or give a surprise.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a panel?</>,
          <>What does a speech bubble show?</>,
          <>What does a caption do?</>,
          <>What do sound words show?</>,
        ]}
        answers={[
          <>One box that shows one moment.</>,
          <>What a character says.</>,
          <>Tells where or when.</>,
          <>Noises, such as BANG.</>,
        ]}
      />,
    ),
  },
];
