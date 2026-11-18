import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Stems, prefixes and suffixes",
    content: slide(
      <>
        <Rule>The stem (or root) is the main part of a word, and it carries the basic meaning. A prefix is a group of letters added to the beginning of a stem. A suffix is a group of letters added to the end. Prefixes and suffixes change the meaning or the kind of word. In unhappy, the prefix is un, and the stem is happy.</Rule>
        <KeyTable
          title="Parts of a word"
          head={["Word", "Parts"]}
          aria="Parts of a word. unhappy: prefix un + stem happy. kindness: stem kind + suffix ness. rewrite: prefix re + stem write. helpful: stem help + suffix ful."
          rows={[["unhappy", "prefix un + stem happy"], ["kindness", "stem kind + suffix ness"], ["rewrite", "prefix re + stem write"], ["helpful", "stem help + suffix ful"]]}
        />
        <Worked
          title="Split a word"
          steps={[
            <>Find the stem first: the word kindly has the stem kind.</>,
            <>Then name the part that is added: the suffix ly.</>,
          ]}
        />
        <Mistake>Thinking that the stem is always the first part. The stem can come after a prefix.</Mistake>
      </>,
    ),
  },
  {
    title: "Prefixes",
    content: slide(
      <>
        <Rule>A prefix changes the meaning of a word. Un means not, re means again, dis means the opposite or not, mis means wrongly, and pre means before. Adding a prefix never changes the spelling of the stem.</Rule>
        <KeyTable
          title="Common prefixes"
          head={["Prefix", "Meaning and example"]}
          aria="Common prefixes. un: not: unkind. re: again: rebuild. dis: opposite: disagree. mis: wrongly: misspell. pre: before: preview."
          rows={[["un", "not: unkind"], ["re", "again: rebuild"], ["dis", "opposite: disagree"], ["mis", "wrongly: misspell"], ["pre", "before: preview"]]}
        />
        <Worked
          title="Add a prefix"
          steps={[
            <>To say that you do not agree, add dis to agree: disagree.</>,
            <>To say that you build again, add re to build: rebuild.</>,
          ]}
        />
        <Mistake>Changing the stem when you add a prefix. Keep the stem as it is: misspell has two s letters, one from mis and one from spell.</Mistake>
      </>,
    ),
  },
  {
    title: "Suffixes",
    content: slide(
      <>
        <Rule>A suffix is added to the end of a stem. Ful means full of, less means without, ness turns an adjective into a noun, ly shows how something is done, er can mean a person who does something, and ment turns a verb into a noun.</Rule>
        <KeyTable
          title="Common suffixes"
          head={["Suffix", "Meaning and example"]}
          aria="Common suffixes. ful: full of: helpful. less: without: careless. ness: state or quality: kindness. ly: how: slowly. er: a person who: teacher."
          rows={[["ful", "full of: helpful"], ["less", "without: careless"], ["ness", "state or quality: kindness"], ["ly", "how: slowly"], ["er", "a person who: teacher"]]}
        />
        <Worked
          title="Add a suffix"
          steps={[
            <>A person who teaches is a teacher: teach plus er.</>,
            <>Without care is careless: care plus less.</>,
          ]}
        />
        <Mistake>Mixing up ful and less. Ful means full of, and less means without.</Mistake>
      </>,
    ),
  },
  {
    title: "Word division and the dictionary",
    content: slide(
      <>
        <Rule>When a word does not fit at the end of a line, you may divide it between syllables and write a hyphen: beau-ti-ful. Never leave one letter alone on a line. To look up a word, use alphabetical order. The guide words at the top of a dictionary page show the first and the last word on that page.</Rule>
        <KeyTable
          title="Using a dictionary"
          head={["Skill", "How"]}
          aria="Using a dictionary. alphabetical order: a, b, c, ... then the second letter. guide words: first and last word on the page. word division: divide between syllables, with a hyphen."
          rows={[["alphabetical order", "a, b, c, ... then the second letter"], ["guide words", "first and last word on the page"], ["word division", "divide between syllables, with a hyphen"]]}
        />
        <Worked
          title="Find a word"
          steps={[
            <>Look for the word planet: first the letter p, then l, then a.</>,
            <>Open the dictionary at the p pages and check the guide words.</>,
          ]}
        />
        <Mistake>Dividing a word in the middle of a syllable. Divide between syllables only.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the stem of kindness?</>,
          <>Which prefix means not in unhappy?</>,
          <>Which suffix means without?</>,
          <>Where do you find guide words?</>,
        ]}
        answers={[
          <>Kind.</>,
          <>Un.</>,
          <>Less.</>,
          <>At the top of a dictionary page.</>,
        ]}
      />,
    ),
  },
];
