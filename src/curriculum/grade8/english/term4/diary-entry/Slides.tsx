import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a diary entry is",
    content: slide(
      <>
        <Rule>A diary entry is a personal record of your day, your thoughts and your feelings. It is written in the first person (I), in the past tense for events, and in an informal, honest voice. It begins with the date, and often the time.</Rule>
        <KeyTable
          title="Parts of a diary entry"
          head={["Part", "What it contains"]}
          aria="Parts of a diary entry. Date: Day, date and month, sometimes the time. Greeting (optional): Dear Diary,. Events: What happened, in order. Feelings: How you felt, and why. Reflection: What you learned or hope for. Closing: A short sign-off such as Goodnight."
          rows={[["Date", "Day, date and month, sometimes the time"], ["Greeting (optional)", "Dear Diary,"], ["Events", "What happened, in order"], ["Feelings", "How you felt, and why"], ["Reflection", "What you learned or hope for"], ["Closing", "A short sign-off such as Goodnight"]]}
        />
        <Worked
          steps={[
            <>A diary entry mixes events and feelings: We lost the match, and I felt like crying.</>,
            <>It ends with a thought about tomorrow or what the day taught you.</>,
          ]}
        />
        <Mistake>Writing only a list of events. A diary also shows feelings.</Mistake>
      </>,
    ),
  },
  {
    title: "A model diary entry",
    content: slide(
      <>
        <Rule>Read the model. Notice the date, the first person, the events and the feelings.</Rule>
        <KeyTable
          title="Labelled parts"
          head={["Part", "In the model"]}
          aria="Labelled parts. Date and time: Friday, 20 March 2026, 9 p.m.. Greeting: Dear Diary,. Events: The play, the forgotten line, the clapping. Feelings: Nervous, proud, relieved. Reflection: Being brave is not being unafraid."
          rows={[["Date and time", "Friday, 20 March 2026, 9 p.m."], ["Greeting", "Dear Diary,"], ["Events", "The play, the forgotten line, the clapping"], ["Feelings", "Nervous, proud, relieved"], ["Reflection", "Being brave is not being unafraid"]]}
        />
        <ModelText label="Model diary entry" note="An original model written for this lesson, with invented names.">
          <p>Friday, 20 March 2026, 9 p.m.</p>
          <p>Dear Diary,</p>
          <p>Today was the day of our school play, and I was so nervous that my hands shook. When the curtain opened, I forgot my first line. Then Thandi smiled at me, and the words came back.</p>
          <p>At the end everyone clapped, and I felt proud and relieved.</p>
          <p>I learned that being brave does not mean you are not afraid. Tomorrow I will sleep late!</p>
          <p>Goodnight.</p>
        </ModelText>
        <Worked
          steps={[
            <>The entry uses I and my, so it is in the first person.</>,
            <>Feeling words such as nervous and relieved show how the writer felt.</>,
          ]}
        />
        <Mistake>Writing in the third person. A diary says I.</Mistake>
      </>,
    ),
  },
  {
    title: "Language of a diary",
    content: slide(
      <>
        <Rule>Use informal language and short sentences, but keep correct spelling and punctuation. Use feeling words and details of what you saw and heard. Use the past tense for what happened and the present or future for thoughts.</Rule>
        <KeyTable
          title="Language"
          head={["Feature", "Example"]}
          aria="Language. First person: I walked home with Zinhle. Past tense for events: We lost the match. Feeling words: disappointed, excited, nervous. Details: The hall smelled of floor polish. Future thoughts: Tomorrow I will try again."
          rows={[["First person", "I walked home with Zinhle"], ["Past tense for events", "We lost the match"], ["Feeling words", "disappointed, excited, nervous"], ["Details", "The hall smelled of floor polish"], ["Future thoughts", "Tomorrow I will try again"]]}
        />
        <Worked
          steps={[
            <>Weak: It was bad. Better: I felt disappointed because we lost by one point.</>,
            <>A detail of a smell or a sound makes the day real.</>,
          ]}
        />
        <Mistake>Using the same word for every feeling, such as nice or bad. Choose exact feeling words.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How do you start a diary entry?</>,
          <>Which person is used in a diary?</>,
          <>Name two things a diary entry includes.</>,
          <>What is reflection?</>,
        ]}
        answers={[
          <>The date.</>,
          <>The first person (I).</>,
          <>Events and feelings.</>,
          <>Thinking about what you learned.</>,
        ]}
      />,
    ),
  },
];
