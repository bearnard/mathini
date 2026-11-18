import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a dialogue script looks like",
    content: slide(
      <>
        <Rule>A dialogue script is written to be performed. Each speaker gets a new line that begins with the name of the character, then a colon, then the words that the character says. Quotation marks are not used, because the actors speak the words. The scene begins with a short description of the setting and the characters.</Rule>
        <KeyTable
          title={"Parts of a script"}
          head={["Part", "How it is written"]}
          aria={"Parts of a script. setting: a short description at the top. character name: at the start of a new line, then a colon. spoken words: after the colon, without quotation marks. new speaker: a new line."}
          rows={[["setting", "a short description at the top"], ["character name", "at the start of a new line, then a colon"], ["spoken words", "after the colon, without quotation marks"], ["new speaker", "a new line"]]}
        />
        <Worked
          title={"Set out a line"}
          steps={[
            <>Thabo: Where is my bag?</>,
            <>Lerato: I put it behind the door.</>,
          ]}
        />
        <Mistake>Using quotation marks in a script. The name and the colon show who is speaking.</Mistake>
      </>,
    ),
  },
  {
    title: "Stage directions",
    content: slide(
      <>
        <Rule>Stage directions tell the actors how to speak or move. They are written in brackets and are not spoken aloud. They are usually short, and they come before or after the words. Thabo (searching under the bed): Where is my bag? They can also show the tone: Lerato (laughing): It is behind the door!</Rule>
        <KeyTable
          title={"Stage directions"}
          head={["Direction", "Example"]}
          aria={"Stage directions. movement: (walks to the door). tone: (whispering). feeling: (angrily). sound or light: (a door slams)."}
          rows={[["movement", "(walks to the door)"], ["tone", "(whispering)"], ["feeling", "(angrily)"], ["sound or light", "(a door slams)"]]}
        />
        <Worked
          title={"Add a direction"}
          steps={[
            <>Plain line: Lerato: I did not take it.</>,
            <>With a direction: Lerato (shaking her head): I did not take it.</>,
          ]}
        />
        <Mistake>Writing the stage directions as spoken words. Put them in brackets and do not read them aloud.</Mistake>
      </>,
    ),
  },
  {
    title: "Character and style",
    content: slide(
      <>
        <Rule>The way characters speak shows who they are. A teacher may speak formally and a friend may use slang. Use short lines, because people do not speak in long paragraphs. Give each character a point of view, which is how they see the situation. The dialogue should move the story forward and show what each character wants.</Rule>
        <KeyTable
          title={"Showing character"}
          head={["Character", "How they speak"]}
          aria={"Showing character. an excited child: short, quick sentences. a calm teacher: full sentences and a steady tone. an angry friend: sharp words and exclamations."}
          rows={[["an excited child", "short, quick sentences"], ["a calm teacher", "full sentences and a steady tone"], ["an angry friend", "sharp words and exclamations"]]}
        />
        <Worked
          title={"Match speech to character"}
          steps={[
            <>A shy character: Um, I think, maybe I can help.</>,
            <>A confident character: I will do it. Leave it to me.</>,
          ]}
        />
        <Mistake>Making every character sound the same. Each character should speak in a different way.</Mistake>
      </>,
    ),
  },
  {
    title: "Enacting and checking your script",
    content: slide(
      <>
        <Rule>To enact a drama, read the script aloud with your group. Use your voice for tone and pace and your body for movement, and follow the stage directions. After the first reading, check that the dialogue sounds natural, that each speaker is clear and that the scene has a beginning, a middle and an end. Rewrite what does not work.</Rule>
        <KeyTable
          title={"Check your script"}
          head={["Check", "Question"]}
          aria={"Check your script. format: does each line start with a name and a colon?. directions: are they in brackets?. character: does each person sound different?. structure: does the scene have a beginning, middle and end?."}
          rows={[["format", "does each line start with a name and a colon?"], ["directions", "are they in brackets?"], ["character", "does each person sound different?"], ["structure", "does the scene have a beginning, middle and end?"]]}
        />
        <Worked
          title={"Improve a line"}
          steps={[
            <>Draft: Thabo: I am very upset.</>,
            <>Improved: Thabo (slamming the door): Who touched my bag?</>,
          ]}
        />
        <Mistake>Never reading the script aloud. Reading it aloud shows lines that sound unnatural.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How does each new speaker start in a script?</>,
          <>Where do stage directions go?</>,
          <>Are quotation marks used in a script?</>,
          <>What does a script begin with?</>,
        ]}
        answers={[
          <>With a new line and the name of the character.</>,
          <>In brackets.</>,
          <>No.</>,
          <>A short description of the setting.</>,
        ]}
      />,
    ),
  },
];
