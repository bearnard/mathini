import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Direct speech",
    content: slide(
      <>
        <Rule>Direct speech gives the exact words that a person says. Put the spoken words inside quotation marks, which are also called inverted commas. The first word of the spoken sentence starts with a capital letter, and the full stop, question mark or exclamation mark goes inside the closing quotation marks. Lerato said, "I am tired."</Rule>
        <KeyTable
          title={"Direct speech"}
          head={["Part", "Rule"]}
          aria={"Direct speech. quotation marks: around the exact words. capital letter: at the start of the spoken words. comma: after said, before the opening marks. full stop: inside the closing marks."}
          rows={[["quotation marks", "around the exact words"], ["capital letter", "at the start of the spoken words"], ["comma", "after said, before the opening marks"], ["full stop", "inside the closing marks"]]}
        />
        <Worked
          title={"Write direct speech"}
          steps={[
            <>Thabo said, "I like soccer."</>,
            <>The spoken words, I like soccer, are inside the quotation marks, and the full stop is inside them too.</>,
          ]}
        />
        <Mistake>Putting the full stop outside the quotation marks. Write "I am ready." with the full stop inside.</Mistake>
      </>,
    ),
  },
  {
    title: "Indirect speech",
    content: slide(
      <>
        <Rule>Indirect (reported) speech tells what a person said without the exact words. It has no quotation marks. The reporting verb is in the past tense, so the verb in the reported words moves back one tense, and pronouns and time words change. Lerato said, "I am tired." becomes Lerato said that she was tired.</Rule>
        <KeyTable
          title={"From direct to indirect"}
          head={["Direct speech", "Indirect speech"]}
          aria={"From direct to indirect. I am tired.: she was tired. I will come tomorrow.: he would come the next day. We play here.: they played there."}
          rows={[["I am tired.", "she was tired"], ["I will come tomorrow.", "he would come the next day"], ["We play here.", "they played there"]]}
        />
        <Worked
          title={"Report what was said"}
          steps={[
            <>Direct: Sipho said, "I am late."</>,
            <>Indirect: Sipho said that he was late. The pronoun I becomes he and am becomes was.</>,
          ]}
        />
        <Mistake>Keeping the quotation marks in indirect speech. Indirect speech has no quotation marks.</Mistake>
      </>,
    ),
  },
  {
    title: "Changes in indirect speech",
    content: slide(
      <>
        <Rule>Three things change when you report speech. The pronoun changes to fit the speaker: I becomes he or she. The tense moves back one step: am becomes was, will becomes would. Time and place words change: today becomes that day, tomorrow becomes the next day, yesterday becomes the day before, and here becomes there.</Rule>
        <KeyTable
          title={"What changes"}
          head={["Direct", "Indirect"]}
          aria={"What changes. I, we: he, she, they. am, is, are: was, were. will: would. tomorrow: the next day. here: there."}
          rows={[["I, we", "he, she, they"], ["am, is, are", "was, were"], ["will", "would"], ["tomorrow", "the next day"], ["here", "there"]]}
        />
        <Worked
          title={"Report a promise"}
          steps={[
            <>Direct: She said, "We will win tomorrow."</>,
            <>Indirect: She said that they would win the next day.</>,
          ]}
        />
        <Mistake>Changing only the tense. The pronoun and the time word must change too.</Mistake>
      </>,
    ),
  },
  {
    title: "Punctuating speech",
    content: slide(
      <>
        <Rule>Start a new line for each new speaker. Use a comma before the opening quotation marks when the speaker comes first. When the spoken words come first, end them with a comma, a question mark or an exclamation mark inside the marks, and then write the speaker. "I am ready," said Sipho. "Are you ready?" asked Lerato.</Rule>
        <KeyTable
          title={"Punctuation of speech"}
          head={["Pattern", "Example"]}
          aria={"Punctuation of speech. speaker first: Sipho said, \"I am ready.\". speech first: \"I am ready,\" said Sipho.. question: \"Are you ready?\" asked Lerato.."}
          rows={[["speaker first", "Sipho said, \"I am ready.\""], ["speech first", "\"I am ready,\" said Sipho."], ["question", "\"Are you ready?\" asked Lerato."]]}
        />
        <Worked
          title={"Punctuate the sentence"}
          steps={[
            <>Lerato said I am ready becomes Lerato said, "I am ready."</>,
            <>Add the comma, the quotation marks and the capital letter.</>,
          ]}
        />
        <Mistake>Forgetting the capital letter at the start of the spoken words. Begin them with a capital letter.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which marks go around the exact words of a speaker?</>,
          <>In indirect speech, tomorrow changes to what?</>,
          <>Does indirect speech use quotation marks?</>,
          <>Where does the full stop go in direct speech?</>,
        ]}
        answers={[
          <>Quotation marks.</>,
          <>The next day.</>,
          <>No.</>,
          <>Inside the closing quotation marks.</>,
        ]}
      />,
    ),
  },
];
