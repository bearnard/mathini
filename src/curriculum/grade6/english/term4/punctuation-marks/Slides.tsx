import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Commas and the full stop",
    content: slide(
      <>
        <Rule>A comma separates the items in a list: We bought apples, pears, plums and grapes. Put a comma after an introductory word such as however or first, and put commas around extra information. A full stop ends a statement and a question mark ends a question.</Rule>
        <KeyTable
          title={"Commas"}
          head={["Use", "Example"]}
          aria={"Commas. items in a list: We bought apples, pears and plums.. after an introductory word: However, we won the match.. extra information: My cousin, Sipho, is tall.."}
          rows={[["items in a list", "We bought apples, pears and plums."], ["after an introductory word", "However, we won the match."], ["extra information", "My cousin, Sipho, is tall."]]}
        />
        <Worked
          title={"Add the commas"}
          steps={[
            <>Without commas: Mpho Sipho and Lerato came.</>,
            <>With commas: Mpho, Sipho and Lerato came.</>,
          ]}
        />
        <Mistake>Putting a comma before the last item in every list. In this lesson, use and without a comma before it.</Mistake>
      </>,
    ),
  },
  {
    title: "Colons and semi-colons",
    content: slide(
      <>
        <Rule>A colon introduces a list or an explanation: You will need three things: a pen, a ruler and a rubber. A semi-colon joins two main clauses that are closely related: The bus was late; we walked. Each part of a sentence with a semi-colon could stand on its own.</Rule>
        <KeyTable
          title={"Colon and semi-colon"}
          head={["Mark", "Use"]}
          aria={"Colon and semi-colon. colon: introduces a list: Bring a pen, a ruler and a rubber.. semi-colon: joins two related main clauses."}
          rows={[["colon", "introduces a list: Bring a pen, a ruler and a rubber."], ["semi-colon", "joins two related main clauses"]]}
        />
        <Worked
          title={"Choose the mark"}
          steps={[
            <>You want to introduce a list: use a colon.</>,
            <>You want to join two related sentences: use a semi-colon.</>,
          ]}
        />
        <Mistake>Using a semi-colon before a list. A list is introduced with a colon.</Mistake>
      </>,
    ),
  },
  {
    title: "Apostrophes in contractions",
    content: slide(
      <>
        <Rule>A contraction is a short form of two words. The apostrophe shows where letters have been left out. Do not becomes don't, she will becomes she'll, cannot becomes can't and it is becomes it's. Its without an apostrophe shows that something belongs to it: The dog wagged its tail.</Rule>
        <KeyTable
          title={"Contractions"}
          head={["Two words", "Contraction"]}
          aria={"Contractions. do not: don't. she will: she'll. cannot: can't. it is: it's."}
          rows={[["do not", "don't"], ["she will", "she'll"], ["cannot", "can't"], ["it is", "it's"]]}
        />
        <Worked
          title={"Make a contraction"}
          steps={[
            <>Write do not as one word with an apostrophe where the o is left out: don't.</>,
            <>It's raining means It is raining.</>,
          ]}
        />
        <Mistake>Writing it's for belonging. The dog wagged its tail has no apostrophe.</Mistake>
      </>,
    ),
  },
  {
    title: "Brackets (parentheses)",
    content: slide(
      <>
        <Rule>Brackets, also called parentheses, hold extra information that is not needed for the sentence to make sense. My cousin (who lives in Durban) is visiting us. If you remove the words in brackets, the sentence is still complete. Use brackets sparingly.</Rule>
        <KeyTable
          title={"Brackets"}
          head={["Use", "Example"]}
          aria={"Brackets. extra information: My cousin (who lives in Durban) is visiting.. an explanation: The SPCA (an animal charity) helps pets.."}
          rows={[["extra information", "My cousin (who lives in Durban) is visiting."], ["an explanation", "The SPCA (an animal charity) helps pets."]]}
        />
        <Worked
          title={"Add brackets"}
          steps={[
            <>Take the sentence My teacher (Mrs Pillay) is kind.</>,
            <>Without the brackets: My teacher is kind. It still makes sense.</>,
          ]}
        />
        <Mistake>Putting needed words in brackets. The sentence must still work without the bracketed words.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which mark introduces a list?</>,
          <>What is the contraction of should not?</>,
          <>Which mark fits between The bus was late and We walked home?</>,
          <>What do brackets hold?</>,
        ]}
        answers={[
          <>A colon.</>,
          <>Shouldn't.</>,
          <>A semi-colon.</>,
          <>Extra information.</>,
        ]}
      />,
    ),
  },
];
