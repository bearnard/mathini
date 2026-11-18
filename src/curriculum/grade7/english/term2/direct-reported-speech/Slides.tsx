import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Direct and reported speech",
    content: slide(
      <>
        <Rule>Direct speech gives the exact words of a speaker in quotation marks. Reported (or indirect) speech tells what was said without quotation marks. Use a reporting verb such as said, asked, told or replied. In reported speech the verb moves back one tense, pronouns change and time words change. Lerato said, "I am tired." becomes Lerato said that she was tired.</Rule>
        <KeyTable
          title={"Direct and reported"}
          head={["Direct", "Reported"]}
          aria={"Direct and reported. I am tired.: she was tired. I can swim.: he could swim. I will help.: she would help. We are late.: they were late."}
          rows={[["I am tired.", "she was tired"], ["I can swim.", "he could swim"], ["I will help.", "she would help"], ["We are late.", "they were late"]]}
        />
        <Worked
          title={"Report a statement"}
          steps={[
            <>Direct: Sipho said, "I can swim."</>,
            <>Reported: Sipho said that he could swim.</>,
          ]}
        />
        <Mistake>Keeping the quotation marks. Reported speech has no quotation marks.</Mistake>
      </>,
    ),
  },
  {
    title: "Reported questions",
    content: slide(
      <>
        <Rule>A reported question has no question mark and its word order is the word order of a statement. Use asked with a question word, or asked if or whether for a yes or no question. He asked, "Where do you live?" becomes He asked where I lived. She asked, "Are you ready?" becomes She asked if I was ready.</Rule>
        <KeyTable
          title={"Reported questions"}
          head={["Direct question", "Reported question"]}
          aria={"Reported questions. \"Where do you live?\": He asked where I lived.. \"Are you ready?\": She asked if I was ready.. \"What is your name?\": He asked what my name was.."}
          rows={[["\"Where do you live?\"", "He asked where I lived."], ["\"Are you ready?\"", "She asked if I was ready."], ["\"What is your name?\"", "He asked what my name was."]]}
        />
        <Worked
          title={"Report a question"}
          steps={[
            <>Take: He asked, "Where is the library?"</>,
            <>Report it: He asked where the library was.</>,
          ]}
        />
        <Mistake>Keeping the question word order. Write He asked where the library was, not where was the library.</Mistake>
      </>,
    ),
  },
  {
    title: "Reported commands",
    content: slide(
      <>
        <Rule>To report a command or a request, use told or asked and the word to plus the verb. The teacher said, "Open your books." becomes The teacher told the class to open their books. A negative command uses not to: He said, "Do not run." becomes He told us not to run. A command has no that clause.</Rule>
        <KeyTable
          title={"Reported commands"}
          head={["Direct command", "Reported command"]}
          aria={"Reported commands. \"Close the window.\": She told him to close the window.. \"Do not run.\": He told us not to run.. \"Please sit down.\": He asked me to sit down.."}
          rows={[["\"Close the window.\"", "She told him to close the window."], ["\"Do not run.\"", "He told us not to run."], ["\"Please sit down.\"", "He asked me to sit down."]]}
        />
        <Worked
          title={"Report a command"}
          steps={[
            <>Direct: The teacher said, "Be quiet."</>,
            <>Reported: The teacher told us to be quiet.</>,
          ]}
        />
        <Mistake>Using that after told in a command. Write told us to be quiet.</Mistake>
      </>,
    ),
  },
  {
    title: "Changes of time, place and pronoun",
    content: slide(
      <>
        <Rule>In reported speech time words change: now becomes then, today becomes that day, tomorrow becomes the next day, yesterday becomes the day before, this becomes that and here becomes there. The pronouns change to fit the speaker and the listener: I becomes he or she, and we becomes they.</Rule>
        <KeyTable
          title={"Changes"}
          head={["Direct", "Reported"]}
          aria={"Changes. now: then. tomorrow: the next day. yesterday: the day before. this: that. here: there."}
          rows={[["now", "then"], ["tomorrow", "the next day"], ["yesterday", "the day before"], ["this", "that"], ["here", "there"]]}
        />
        <Worked
          title={"Change the words"}
          steps={[
            <>Direct: She said, "I will come tomorrow."</>,
            <>Reported: She said that she would come the next day.</>,
          ]}
        />
        <Mistake>Changing the tense but not the time word. Change both.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How does reported speech show that it is not direct?</>,
          <>What does tomorrow become in reported speech?</>,
          <>Which word does a reported command use before the verb?</>,
          <>Does a reported question have a question mark?</>,
        ]}
        answers={[
          <>It has no quotation marks.</>,
          <>The next day.</>,
          <>To.</>,
          <>No.</>,
        ]}
      />,
    ),
  },
];
