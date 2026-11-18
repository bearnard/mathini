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
        <Rule>A diary entry is a personal record of your day, written for yourself. You write about what happened and how you felt. Because it is private, you write in the first person, using I and my, and you can use an informal, friendly voice. Each entry starts with the date.</Rule>
        <KeyTable
          title="Parts of an entry"
          head={["Part", "What it does"]}
          aria="Parts of an entry. Date: Shows the day of the entry. Opening: Dear Diary, or a first sentence. Events: What happened, in order. Feelings: How you felt, and why. Ending: A thought or a plan for tomorrow."
          rows={[["Date", "Shows the day of the entry"], ["Opening", "Dear Diary, or a first sentence"], ["Events", "What happened, in order"], ["Feelings", "How you felt, and why"], ["Ending", "A thought or a plan for tomorrow"]]}
        />
        <Worked
          steps={[
            <>Entry: Friday, 14 March. Dear Diary, today our class planted a vegetable garden.</>,
            <>You end with a plan: tomorrow I will bring seeds from home.</>,
          ]}
        />
        <Mistake>Leaving out the date. A diary entry needs a date so you know when it happened.</Mistake>
      </>,
    ),
  },
  {
    title: "First person and past tense",
    content: slide(
      <>
        <Rule>Write about what already happened in the past tense, and about how you feel now in the present tense. Use I and my. Choose a few events, not every minute of the day. Explain your feelings with a reason, such as I was nervous because the test was hard.</Rule>
        <KeyTable
          title="Language of a diary"
          head={["Feature", "Example"]}
          aria="Language of a diary. First person: I, my, we, our. Past tense for events: We planted the seeds. Present tense for feelings now: I feel proud. Reasons: Because I worked hard. Informal voice: Friendly words and short sentences."
          rows={[["First person", "I, my, we, our"], ["Past tense for events", "We planted the seeds"], ["Present tense for feelings now", "I feel proud"], ["Reasons", "Because I worked hard"], ["Informal voice", "Friendly words and short sentences"]]}
        />
        <Worked
          steps={[
            <>I wrote: We planted the seeds. I feel proud because my row looks the neatest.</>,
            <>You tell how you feel and why.</>,
          ]}
        />
        <Mistake>Telling every tiny event. Choose the events that matter to you.</Mistake>
      </>,
    ),
  },
  {
    title: "A model entry",
    content: slide(
      <>
        <Rule>Look at the model. Notice the date, the opening, a few events in order, feelings with reasons and a plan for tomorrow. The entry is short and focused on one part of the day.</Rule>
        <KeyTable
          title="The shape of an entry"
          head={["Part", "In the model"]}
          aria="The shape of an entry. Date: Friday, 14 March. Opening: Dear Diary,. Events: Planted seeds in the garden. Feelings: Proud and tired. Plan: Bring a watering can tomorrow."
          rows={[["Date", "Friday, 14 March"], ["Opening", "Dear Diary,"], ["Events", "Planted seeds in the garden"], ["Feelings", "Proud and tired"], ["Plan", "Bring a watering can tomorrow"]]}
        />
        <ModelText label="A model diary entry" note="An original model written for this lesson.">
          <p>Friday, 14 March</p>
          <p>Dear Diary,</p>
          <p>Today our class planted a vegetable garden behind the classroom. We dug the soil, planted the seeds and watered each row.</p>
          <p>I feel proud because my row looks the neatest, but my arms are tired from digging.</p>
          <p>Tomorrow I will bring a watering can from home.</p>
        </ModelText>
        <Worked
          steps={[
            <>The entry tells three events in order and explains why the writer feels proud.</>,
            <>It ends with a plan, which gives the entry a natural close.</>,
          ]}
        />
        <Mistake>Writing a list of events with no feelings. A diary shows what you think and feel.</Mistake>
      </>,
    ),
  },
  {
    title: "Check your entry",
    content: slide(
      <>
        <Rule>Check that the entry has a date and a first-person voice. Make sure that the events are in order and that you explain your feelings. Look at the tense, and check spelling and punctuation. Keep it private in tone but clear enough for you to understand later.</Rule>
        <KeyTable
          title="Checklist"
          head={["Check", "Why"]}
          aria="Checklist. Date: Marks the day. First person: I and my. Events in order: Easy to follow. Feelings with reasons: Shows what you think. Spelling: Makes it clear."
          rows={[["Date", "Marks the day"], ["First person", "I and my"], ["Events in order", "Easy to follow"], ["Feelings with reasons", "Shows what you think"], ["Spelling", "Makes it clear"]]}
        />
        <Worked
          steps={[
            <>You add the date and a reason for why you felt nervous.</>,
            <>You change he to I where you wrote about yourself.</>,
          ]}
        />
        <Mistake>Mixing first and third person. In a diary, write as I.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a diary entry start with?</>,
          <>Which person do you use?</>,
          <>Which tense do you use for events?</>,
          <>What should you explain?</>,
        ]}
        answers={[
          <>The date.</>,
          <>The first person.</>,
          <>The past tense.</>,
          <>Your feelings and why you felt them.</>,
        ]}
      />,
    ),
  },
];
