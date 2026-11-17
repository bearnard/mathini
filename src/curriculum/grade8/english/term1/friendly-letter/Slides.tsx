import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a friendly letter is",
    content: slide(
      <>
        <Rule>A friendly (informal) letter is a letter to someone you know, such as a friend or a relative. Its purpose is to share news, feelings or ideas. The language is informal and personal, but the writing must still be clear and correct.</Rule>
        <KeyTable
          title="Parts of a friendly letter"
          head={["Part", "What it contains"]}
          aria="Parts of a friendly letter. Sender's address and date: At the top right; the date is written out. Greeting: Dear followed by the person's name, such as Dear Lerato. Opening: A friendly line that starts the letter. Body: Paragraphs about the news, one idea in each. Closing: A friendly ending, such as With love or Your friend. Signature: Your first name."
          rows={[["Sender's address and date", "At the top right; the date is written out"], ["Greeting", "Dear followed by the person's name, such as Dear Lerato"], ["Opening", "A friendly line that starts the letter"], ["Body", "Paragraphs about the news, one idea in each"], ["Closing", "A friendly ending, such as With love or Your friend"], ["Signature", "Your first name"]]}
        />
        <Worked
          steps={[
            <>A friendly letter says why you are writing in the first paragraph, then gives your news and ends with a question or a wish.</>,
            <>Use a new paragraph for each new idea.</>,
          ]}
        />
        <Mistake>Writing in short cellphone language. Use full sentences and correct spelling, even in an informal letter.</Mistake>
      </>,
    ),
  },
  {
    title: "A model friendly letter",
    content: slide(
      <>
        <Rule>Read the model. Notice the address and date, the greeting, the paragraphs and the closing.</Rule>
        <KeyTable
          title="Labelled parts"
          head={["Part", "In the model"]}
          aria="Labelled parts. Address and date: 14 Protea Road, Mthatha, and 12 March 2026. Greeting: Dear Lerato,. Opening: I hope you are well.. Body: Two paragraphs about the trip. Closing and signature: Your friend, Naledi."
          rows={[["Address and date", "14 Protea Road, Mthatha, and 12 March 2026"], ["Greeting", "Dear Lerato,"], ["Opening", "I hope you are well."], ["Body", "Two paragraphs about the trip"], ["Closing and signature", "Your friend, Naledi"]]}
        />
        <ModelText label="Model friendly letter" note="An original model written for this lesson, with invented names and places.">
          <p>14 Protea Road, Mthatha, 5099</p>
          <p>12 March 2026</p>
          <p>Dear Lerato,</p>
          <p>I hope you are well. I am writing to tell you about the school trip to the beach that we took last Friday, because I know you love the sea.</p>
          <p>We left at six o'clock and the bus was full of singing. When we arrived, the waves were big and the sand was warm. Sipho built a huge sandcastle, and I collected shells for my science project.</p>
          <p>Please write soon and tell me about your holiday. Maybe you can visit me in April!</p>
          <p>Your friend,</p>
          <p>Naledi</p>
        </ModelText>
        <Worked
          steps={[
            <>The first paragraph gives the reason for writing. The second gives the details in order.</>,
            <>The last paragraph asks the friend to write back.</>,
          ]}
        />
        <Mistake>Forgetting the date. A letter without a date is hard to place.</Mistake>
      </>,
    ),
  },
  {
    title: "Writing from a visual stimulus",
    content: slide(
      <>
        <Rule>A visual stimulus is a picture, photograph or cartoon that gives you ideas. Look carefully, note what you see, and use it as the starting point of your news. Describe, but do not just list what is in the picture.</Rule>
        <KeyTable
          title="Using a picture"
          head={["Step", "What to do"]}
          aria="Using a picture. Look: Note people, places, actions and feelings. Choose: Pick the ideas that fit your reader. Plan: Decide the order of your paragraphs. Write: Use informal but correct language. Check: Read it aloud; fix spelling and punctuation."
          rows={[["Look", "Note people, places, actions and feelings"], ["Choose", "Pick the ideas that fit your reader"], ["Plan", "Decide the order of your paragraphs"], ["Write", "Use informal but correct language"], ["Check", "Read it aloud; fix spelling and punctuation"]]}
        />
        <Worked
          steps={[
            <>A picture shows a family at a market. A learner writes to a cousin about the busy market, the smells of fresh bread, and the music of a street band.</>,
            <>Use details of sight, sound and smell to make the letter lively.</>,
          ]}
        />
        <Mistake>Writing about the picture like a list. Tell it as news to a friend.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two parts of a friendly letter.</>,
          <>What greeting would you use for a friend named Sipho?</>,
          <>What is a visual stimulus?</>,
          <>How many ideas should each paragraph have?</>,
        ]}
        answers={[
          <>Any two of: address and date, greeting, body, closing, signature.</>,
          <>Dear Sipho,</>,
          <>A picture or other image that gives you ideas.</>,
          <>One.</>,
        ]}
      />,
    ),
  },
];
