import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Myth or legend?",
    content: slide(
      <>
        <Rule>Folklore is a story that people have told aloud for many years. A myth explains something in nature or about the world, such as why the sun rises, and often has gods or spirits. A legend tells about a hero or a place and is partly based on history, but it has been made bigger over time. No one knows who first told these stories.</Rule>
        <KeyTable
          title="Myth and legend compared"
          head={["Feature", "Myth or legend"]}
          aria="Myth and legend compared. Myth: Explains how or why something in nature began. Legend: Tells of a hero or place linked to history. Characters: Gods, spirits, animals or a great hero. Told: Aloud, passed from person to person. Author: Not known; the story is shared by many people."
          rows={[["Myth", "Explains how or why something in nature began"], ["Legend", "Tells of a hero or place linked to history"], ["Characters", "Gods, spirits, animals or a great hero"], ["Told", "Aloud, passed from person to person"], ["Author", "Not known; the story is shared by many people"]]}
        />
        <Worked
          steps={[
            <>A story about why the moon changes shape is a myth, because it explains something in nature.</>,
            <>A story about a brave leader who saved a village is a legend, because it is about a hero.</>,
          ]}
        />
        <Mistake>Thinking that a legend is simply a fairy tale. A legend is linked to real people or places, which have become bigger than life.</Mistake>
      </>,
    ),
  },
  {
    title: "Features of folklore",
    content: slide(
      <>
        <Rule>Folklore often has a simple plot with a beginning, a problem, a turning point and an ending that shows a lesson. Characters are clear, such as a clever tortoise or a brave hero. The language is easy to say aloud, with repetition and exaggeration. The setting is often a village, a river or a mountain.</Rule>
        <KeyTable
          title="Features to look for"
          head={["Feature", "Example"]}
          aria="Features to look for. Simple plot: A problem is solved by the end. Clear characters: A brave hero or a cunning animal. Repetition: A line that comes back three times. Exaggeration: A giant who drinks a whole river. A lesson: The end shows what is wise or foolish."
          rows={[["Simple plot", "A problem is solved by the end"], ["Clear characters", "A brave hero or a cunning animal"], ["Repetition", "A line that comes back three times"], ["Exaggeration", "A giant who drinks a whole river"], ["A lesson", "The end shows what is wise or foolish"]]}
        />
        <Worked
          steps={[
            <>In a tale of a tortoise and a hare, the tortoise wins by being steady. The lesson is that patience pays.</>,
            <>The tale repeats a short line each time the hare boasts.</>,
          ]}
        />
        <Mistake>Writing a long list of events with no problem. A folktale needs a problem and a clear ending.</Mistake>
      </>,
    ),
  },
  {
    title: "Plan and write your folklore",
    content: slide(
      <>
        <Rule>To write your own, first choose whether it will explain something in nature or tell of a hero. Next plan the beginning, the problem, how it is solved and the lesson. Use simple, lively language, a few exaggerations and a repeated line. Write in the past tense, and begin with a phrase such as Long ago.</Rule>
        <KeyTable
          title="A story planner"
          head={["Part", "Question to answer"]}
          aria="A story planner. Beginning: Who is the character and where do they live?. Problem: What goes wrong or what must be explained?. Turning point: How does the character act?. Ending: How is the problem solved?. Lesson: What does the story teach?."
          rows={[["Beginning", "Who is the character and where do they live?"], ["Problem", "What goes wrong or what must be explained?"], ["Turning point", "How does the character act?"], ["Ending", "How is the problem solved?"], ["Lesson", "What does the story teach?"]]}
        />
        <ModelText label="A short model myth" note="An original model written for this lesson.">
          <p>Long ago, when the world was always dark, a small rooster lived in a village by a river.</p>
          <p>The people could not see to plant or to find water. The rooster felt sorry for them, so he climbed the tallest tree and called as loudly as he could.</p>
          <p>The sun heard the call and rose over the hills. From that day, the rooster called each morning, and the sun came.</p>
          <p>The people learned that even a small voice can bring light.</p>
        </ModelText>
        <Worked
          steps={[
            <>You plan a myth about why the rooster crows at dawn: a rooster who calls the sun, a sky that stays dark, the call that brings light, and a lesson about being brave.</>,
            <>You start with Long ago, when the world was always dark.</>,
          ]}
        />
        <Mistake>Telling a tale with no lesson. Folklore usually teaches something about life.</Mistake>
      </>,
    ),
  },
  {
    title: "Check your folklore",
    content: slide(
      <>
        <Rule>When you have finished, read your story aloud. Does it begin with Long ago or a similar phrase? Is there a problem and a clear ending? Does the lesson match the story? Check your spelling and punctuation, and use the past tense. Folklore sounds best when it is told aloud, so listen for lines that are too long.</Rule>
        <KeyTable
          title="Checklist"
          head={["Check", "Why"]}
          aria="Checklist. Starts like a folktale: Sets the time and the place. Problem and ending: Gives the story a shape. Repeated line: Makes it easy to remember. Lesson: Shows the meaning. Read aloud: Finds clumsy sentences."
          rows={[["Starts like a folktale", "Sets the time and the place"], ["Problem and ending", "Gives the story a shape"], ["Repeated line", "Makes it easy to remember"], ["Lesson", "Shows the meaning"], ["Read aloud", "Finds clumsy sentences"]]}
        />
        <Worked
          steps={[
            <>You read the myth to a friend, who suggests that the repeated call comes back three times.</>,
            <>You fix a sentence that was too long to say in one breath.</>,
          ]}
        />
        <Mistake>Changing tenses in the middle. Keep to the past tense from start to finish.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a myth explain?</>,
          <>Name a feature of folklore.</>,
          <>What tense do you use?</>,
          <>Who is the author of folklore?</>,
        ]}
        answers={[
          <>Something in nature or how the world began.</>,
          <>Repetition, a simple plot or a lesson.</>,
          <>The past tense.</>,
          <>Not known; it is shared by many people.</>,
        ]}
      />,
    ),
  },
];
