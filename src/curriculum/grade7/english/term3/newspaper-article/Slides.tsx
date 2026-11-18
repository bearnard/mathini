import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The parts of a news article",
    content: slide(
      <>
        <Rule>A newspaper article reports a real event for readers. It has a headline, a by-line that names the writer, a lead paragraph and a body. The headline is short and names the story. The lead gives the most important facts. The body adds more details in order of importance, with the least important facts last. This order is called the inverted pyramid.</Rule>
        <KeyTable
          title={"Parts of an article"}
          head={["Part", "What it does"]}
          aria={"Parts of an article. headline: short, names the story. by-line: names the writer. lead: the main facts in the first paragraph. body: details in order of importance."}
          rows={[["headline", "short, names the story"], ["by-line", "names the writer"], ["lead", "the main facts in the first paragraph"], ["body", "details in order of importance"]]}
        />
        <Worked
          title={"Read an article"}
          steps={[
            <>Headline: Learners Plant Trees.</>,
            <>Lead: Learners of Ward 12 Primary planted twenty trees on Friday to make their school field cooler.</>,
          ]}
        />
        <Mistake>Putting the least important facts first. Put the main facts in the lead.</Mistake>
      </>,
    ),
  },
  {
    title: "Who, what, where, when, why and how",
    content: slide(
      <>
        <Rule>The lead of a news article answers the questions who, what, where, when and why, and often how. Check that your lead answers them. Write in the third person and in the past tense, and give facts, not your opinions. Do not use I or you in a news report.</Rule>
        <KeyTable
          title={"The five Ws and H"}
          head={["Question", "Answer in the lead"]}
          aria={"The five Ws and H. who: learners of Ward 12 Primary. what: planted twenty trees. where: on the school field. when: on Friday morning. why: to make the field cooler."}
          rows={[["who", "learners of Ward 12 Primary"], ["what", "planted twenty trees"], ["where", "on the school field"], ["when", "on Friday morning"], ["why", "to make the field cooler"]]}
        />
        <Worked
          title={"Write a lead"}
          steps={[
            <>Draft: Some trees were planted.</>,
            <>Better: Learners of Ward 12 Primary planted twenty trees on the school field on Friday morning to make it cooler.</>,
          ]}
        />
        <Mistake>Giving your opinion in a news report. Report the facts only.</Mistake>
      </>,
    ),
  },
  {
    title: "Quotations",
    content: slide(
      <>
        <Rule>Quotations bring a report to life because they give the exact words of a person. A quotation is put in quotation marks and attributed to the speaker: The principal said, "We want our learners to enjoy playing outside." You may also report the words without quotation marks: The principal said that the school wanted its learners to play outside. Use the speaker's name and role.</Rule>
        <KeyTable
          title={"Quoting people"}
          head={["Way", "Example"]}
          aria={"Quoting people. direct quotation: The principal said, \"We want a green school.\". reported: The principal said that the school wanted to be green.. attribution: who said it: Mr Dlamini, the principal."}
          rows={[["direct quotation", "The principal said, \"We want a green school.\""], ["reported", "The principal said that the school wanted to be green."], ["attribution", "who said it: Mr Dlamini, the principal"]]}
        />
        <Worked
          title={"Add a quotation"}
          steps={[
            <>Fact: The trees will give shade.</>,
            <>Quotation: Mr Dlamini said, "The trees will give shade on sports days."</>,
          ]}
        />
        <Mistake>Quoting without saying who spoke. Always name the speaker.</Mistake>
      </>,
    ),
  },
  {
    title: "Headlines and neutral language",
    content: slide(
      <>
        <Rule>A headline is short, written in the present tense, and leaves out small words such as the and a: Learners Plant Trees. It does not give opinions. The body of the article uses neutral language: the facts are stated without loaded words. Check names, dates and numbers before you hand in the article.</Rule>
        <KeyTable
          title={"Headlines"}
          head={["Feature", "Example"]}
          aria={"Headlines. short: Learners Plant Trees. present tense: School Wins Cup. no opinion: not: Amazing School Wins Wonderful Cup. accurate: check names and numbers."}
          rows={[["short", "Learners Plant Trees"], ["present tense", "School Wins Cup"], ["no opinion", "not: Amazing School Wins Wonderful Cup"], ["accurate", "check names and numbers"]]}
        />
        <Worked
          title={"Improve a headline"}
          steps={[
            <>Weak: A Great Day for Some Learners Who Planted Some Trees.</>,
            <>Better: Learners Plant Trees.</>,
          ]}
        />
        <Mistake>Writing a long headline. A headline names the story in a few words.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which paragraph gives the main facts?</>,
          <>Which tense does the body of a news article use?</>,
          <>What does a by-line show?</>,
          <>Should a news report give the writer's opinion?</>,
        ]}
        answers={[
          <>The lead paragraph.</>,
          <>The past tense.</>,
          <>Who wrote the article.</>,
          <>No.</>,
        ]}
      />,
    ),
  },
];
