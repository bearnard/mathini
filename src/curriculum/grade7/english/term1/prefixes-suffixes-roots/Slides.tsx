import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Roots, prefixes and suffixes",
    content: slide(
      <>
        <Rule>The root is the base part of a word that carries its main meaning. A prefix goes before the root and a suffix goes after it. Many English roots come from Latin and Greek. If you know a root, you can work out the meaning of many words. The root port means carry: transport, import and export.</Rule>
        <KeyTable
          title={"Parts of a word"}
          head={["Word", "Parts"]}
          aria={"Parts of a word. transport: prefix trans (across) + root port (carry). import: prefix im (in) + root port (carry). careless: root care + suffix less (without). unhappiness: prefix un + root happy + suffix ness."}
          rows={[["transport", "prefix trans (across) + root port (carry)"], ["import", "prefix im (in) + root port (carry)"], ["careless", "root care + suffix less (without)"], ["unhappiness", "prefix un + root happy + suffix ness"]]}
        />
        <Worked
          title={"Split a word"}
          steps={[
            <>Find the root first: in unhappiness the root is happy.</>,
            <>Then name what comes before (un) and after (ness).</>,
          ]}
        />
        <Mistake>Cutting a word at any place. Cut it at the prefix, the root and the suffix.</Mistake>
      </>,
    ),
  },
  {
    title: "Common prefixes",
    content: slide(
      <>
        <Rule>The prefix un or dis means not or the opposite, re means again, mis means wrongly, pre means before, sub means under, inter means between, and anti means against. The prefixes in, im and non also mean not. Before p, in becomes im: impossible.</Rule>
        <KeyTable
          title={"Prefixes"}
          head={["Prefix", "Meaning and example"]}
          aria={"Prefixes. re: again: rebuild. pre: before: preview. sub: under: submarine. inter: between: international. anti: against: antiseptic. in, im: not: incorrect, impossible."}
          rows={[["re", "again: rebuild"], ["pre", "before: preview"], ["sub", "under: submarine"], ["inter", "between: international"], ["anti", "against: antiseptic"], ["in, im", "not: incorrect, impossible"]]}
        />
        <Worked
          title={"Add a prefix"}
          steps={[
            <>To say not possible, use im before p: impossible.</>,
            <>To say a view before, use pre: preview.</>,
          ]}
        />
        <Mistake>Using in before p. Write impossible, not inpossible.</Mistake>
      </>,
    ),
  },
  {
    title: "Common suffixes",
    content: slide(
      <>
        <Rule>The suffixes ful and less mean full of and without. Ness and ment make nouns: kindness, enjoyment. Tion makes a noun from a verb: act, action. Able and ible mean can be: readable. Ly makes an adverb: slowly. Er and or name a person who does something: teacher, actor. Ous means full of: dangerous.</Rule>
        <KeyTable
          title={"Suffixes"}
          head={["Suffix", "Meaning and example"]}
          aria={"Suffixes. ful, less: full of, without: helpful, helpless. ness, ment: make nouns: kindness, enjoyment. able, ible: can be: readable. er, or: a person who: teacher, actor. ous: full of: dangerous."}
          rows={[["ful, less", "full of, without: helpful, helpless"], ["ness, ment", "make nouns: kindness, enjoyment"], ["able, ible", "can be: readable"], ["er, or", "a person who: teacher, actor"], ["ous", "full of: dangerous"]]}
        />
        <Worked
          title={"Add a suffix"}
          steps={[
            <>A person who acts is an actor: act plus or.</>,
            <>Full of danger is dangerous: danger plus ous.</>,
          ]}
        />
        <Mistake>Keeping a silent e before a suffix that starts with a vowel. Hope plus ing is hoping, not hopeing.</Mistake>
      </>,
    ),
  },
  {
    title: "Latin and Greek roots",
    content: slide(
      <>
        <Rule>Learn a few roots. Port means carry: transport, export. Dict means say: predict, dictate. Scrib or script means write: describe, script. Aud means hear: audience, audible. Knowing a root helps you to guess the meaning of an unfamiliar word, but check it in a dictionary.</Rule>
        <KeyTable
          title={"Four roots"}
          head={["Root", "Meaning and words"]}
          aria={"Four roots. port: carry: transport, export. dict: say: predict, dictate. scrib, script: write: describe, script. aud: hear: audience, audible."}
          rows={[["port", "carry: transport, export"], ["dict", "say: predict, dictate"], ["scrib, script", "write: describe, script"], ["aud", "hear: audience, audible"]]}
        />
        <Worked
          title={"Guess a meaning"}
          steps={[
            <>The word audible contains aud, which means hear.</>,
            <>Audible means able to be heard.</>,
          ]}
        />
        <Mistake>Guessing a meaning from the root only. Check the word in a dictionary.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does the prefix pre mean?</>,
          <>What does the suffix less mean?</>,
          <>What does the root aud mean?</>,
          <>Which suffix names a person who does something?</>,
        ]}
        answers={[
          <>Before.</>,
          <>Without.</>,
          <>Hear.</>,
          <>Er or or.</>,
        ]}
      />,
    ),
  },
];
