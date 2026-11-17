import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Parts of an article",
    content: slide(
      <>
        <Rule>A newspaper or magazine article gives information about an event or topic. It has a headline, a by-line (the writer's name), a lead paragraph and a body. A magazine article may be longer and more personal than a newspaper article.</Rule>
        <KeyTable
          title="Parts of an article"
          head={["Part", "What it does"]}
          aria="Parts of an article. Headline: Short, catches the reader's attention. By-line: Names the writer. Lead: The first paragraph; gives the main facts. Body: The details, in order of importance. Quotations: The exact words of people, in quotation marks."
          rows={[["Headline", "Short, catches the reader's attention"], ["By-line", "Names the writer"], ["Lead", "The first paragraph; gives the main facts"], ["Body", "The details, in order of importance"], ["Quotations", "The exact words of people, in quotation marks"]]}
        />
        <Worked
          steps={[
            <>The lead of a news article answers who, what, where, when and why in a few lines.</>,
            <>The body then gives more detail, starting with the most important.</>,
          ]}
        />
        <Mistake>Burying the main fact at the end. Put it in the lead.</Mistake>
      </>,
    ),
  },
  {
    title: "A model article",
    content: slide(
      <>
        <Rule>Read the model. Notice the headline, the by-line, a lead with the main facts, a quotation, and details after it.</Rule>
        <KeyTable
          title="Labelled parts"
          head={["Part", "In the model"]}
          aria="Labelled parts. Headline: Learners plant 200 trees. By-line: By Lindiwe Radebe. Lead: Who, what, where, when and why in one sentence. Quotation: What the chairperson said. Details: Who donated the trees; what happens next."
          rows={[["Headline", "Learners plant 200 trees"], ["By-line", "By Lindiwe Radebe"], ["Lead", "Who, what, where, when and why in one sentence"], ["Quotation", "What the chairperson said"], ["Details", "Who donated the trees; what happens next"]]}
        />
        <ModelText label="Model newspaper article" note="An original model written for this lesson, with invented names and places.">
          <p>Learners plant 200 trees</p>
          <p>By Lindiwe Radebe</p>
          <p>Grade 8 learners of Mount View School planted 200 trees on the school grounds on Saturday, to mark Arbour Day.</p>
          <p>The project was led by the Eco Club. Club chairperson Sipho Nene said: We want our school to be green and cool.</p>
          <p>The trees were donated by a local nursery. Learners will water them each week until the rains come.</p>
        </ModelText>
        <Worked
          steps={[
            <>The lead names who (learners), what (planted 200 trees), where (school grounds), when (Saturday) and why (Arbour Day).</>,
            <>The quotation gives a person's own words.</>,
          ]}
        />
        <Mistake>Putting your own opinion in a news article. Report the facts.</Mistake>
      </>,
    ),
  },
  {
    title: "Fact and opinion, and language",
    content: slide(
      <>
        <Rule>A fact can be checked. An opinion is what someone thinks. News articles report facts and attribute opinions to the people who hold them. Use the past tense for what happened, short sentences and clear words.</Rule>
        <KeyTable
          title="Fact and opinion"
          head={["Kind", "Example"]}
          aria="Fact and opinion. Fact: Learners planted 200 trees on Saturday. Opinion: The school looks much nicer now. Attributed opinion: The principal said the school looks nicer. Style: Short sentences, past tense, plain words."
          rows={[["Fact", "Learners planted 200 trees on Saturday"], ["Opinion", "The school looks much nicer now"], ["Attributed opinion", "The principal said the school looks nicer"], ["Style", "Short sentences, past tense, plain words"]]}
        />
        <Worked
          steps={[
            <>Opinions are given as someone's words: The principal said that the school looks nicer.</>,
            <>A magazine article may add description and the writer's view.</>,
          ]}
        />
        <Mistake>Writing an opinion as if it were a fact.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does the lead answer?</>,
          <>What is a by-line?</>,
          <>What are quotations for?</>,
          <>Which tense is usually used?</>,
        ]}
        answers={[
          <>Who, what, where, when and why.</>,
          <>The writer's name.</>,
          <>To give a person's exact words.</>,
          <>The past tense.</>,
        ]}
      />,
    ),
  },
];
