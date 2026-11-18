import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The apostrophe of possession",
    content: slide(
      <>
        <Rule>The apostrophe shows that something belongs to someone. For one owner, add apostrophe s: the girl's bag. For a plural noun that ends in s, add only an apostrophe: the girls' bags. For a plural noun that does not end in s, add apostrophe s: the children's toys. Its without an apostrophe shows belonging: The dog hurt its paw.</Rule>
        <KeyTable
          title={"Possession"}
          head={["Owner", "Example"]}
          aria={"Possession. one owner: the girl's bag. two or more owners ending in s: the girls' bags. plural not ending in s: the children's toys. belonging to it: its paw."}
          rows={[["one owner", "the girl's bag"], ["two or more owners ending in s", "the girls' bags"], ["plural not ending in s", "the children's toys"], ["belonging to it", "its paw"]]}
        />
        <Worked
          title={"Place the apostrophe"}
          steps={[
            <>The bag of one girl: the girl's bag.</>,
            <>The bags of two girls: the girls' bags.</>,
          ]}
        />
        <Mistake>Using an apostrophe to make a plural. Write tomatoes, not tomato's.</Mistake>
      </>,
    ),
  },
  {
    title: "Contractions",
    content: slide(
      <>
        <Rule>An apostrophe in a contraction shows where letters have been left out: he is becomes he's, they are becomes they're, I will becomes I'll, and do not becomes don't. It's means it is or it has. Do not mix it with its, which shows belonging.</Rule>
        <KeyTable
          title={"Contractions"}
          head={["Long form", "Short form"]}
          aria={"Contractions. he is: he's. they are: they're. I will: I'll. it is: it's."}
          rows={[["he is", "he's"], ["they are", "they're"], ["I will", "I'll"], ["it is", "it's"]]}
        />
        <Worked
          title={"Make a contraction"}
          steps={[
            <>It is a sunny day becomes It's a sunny day.</>,
            <>The dog hurt its paw has no apostrophe.</>,
          ]}
        />
        <Mistake>Writing it's for belonging. Its with no apostrophe shows belonging.</Mistake>
      </>,
    ),
  },
  {
    title: "The hyphen",
    content: slide(
      <>
        <Rule>A hyphen joins words or parts of words. Use it in numbers from twenty-one to ninety-nine, in compound adjectives before a noun (a well-known singer, a ten-year-old boy), with some prefixes (ex-president), and to divide a word at the end of a line between syllables (beau-ti-ful). A hyphen is shorter than a dash.</Rule>
        <KeyTable
          title={"Hyphens"}
          head={["Use", "Example"]}
          aria={"Hyphens. numbers: twenty-one. compound adjective: a well-known singer. prefix: ex-president. word division: beau-ti-ful."}
          rows={[["numbers", "twenty-one"], ["compound adjective", "a well-known singer"], ["prefix", "ex-president"], ["word division", "beau-ti-ful"]]}
        />
        <Worked
          title={"Add a hyphen"}
          steps={[
            <>A boy who is ten years old: a ten-year-old boy.</>,
            <>The number 35 in words: thirty-five.</>,
          ]}
        />
        <Mistake>Putting a hyphen after the noun. The singer is well known has no hyphen after the verb.</Mistake>
      </>,
    ),
  },
  {
    title: "Quotation marks",
    content: slide(
      <>
        <Rule>Quotation marks surround the exact words of a speaker: Mpho said, "I am ready." Start the spoken words with a capital letter. The comma, full stop, question mark or exclamation mark that ends the spoken words goes inside the closing quotation marks. "I am ready," said Mpho. A new speaker starts a new line.</Rule>
        <KeyTable
          title={"Quotation marks"}
          head={["Rule", "Example"]}
          aria={"Quotation marks. marks around the words: Mpho said, \"I am ready.\". punctuation inside the marks: \"I am ready,\" said Mpho.. capital letter: \"Come here,\" she said.. new speaker, new line: \"Ready?\" asked Lerato.."}
          rows={[["marks around the words", "Mpho said, \"I am ready.\""], ["punctuation inside the marks", "\"I am ready,\" said Mpho."], ["capital letter", "\"Come here,\" she said."], ["new speaker, new line", "\"Ready?\" asked Lerato."]]}
        />
        <Worked
          title={"Punctuate speech"}
          steps={[
            <>Lerato said I am coming becomes Lerato said, "I am coming."</>,
            <>Add the comma, the marks, the capital letter and the full stop inside.</>,
          ]}
        />
        <Mistake>Putting the full stop outside the closing marks in direct speech. Put it inside.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Where does the apostrophe go in the bags of two girls?</>,
          <>Does its need an apostrophe to show belonging?</>,
          <>Which mark joins the parts of twenty-one?</>,
          <>Where does a full stop go in direct speech?</>,
        ]}
        answers={[
          <>After the s: the girls' bags.</>,
          <>No.</>,
          <>A hyphen.</>,
          <>Inside the closing quotation marks.</>,
        ]}
      />,
    ),
  },
];
