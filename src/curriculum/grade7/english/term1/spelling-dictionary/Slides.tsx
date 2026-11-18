import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Plurals",
    content: slide(
      <>
        <Rule>Most nouns add s to make the plural: book, books. Nouns that end in s, x, z, ch or sh add es: bus, buses; box, boxes; church, churches. Nouns that end in a consonant and y change y to i and add es: story, stories. Some nouns that end in f or fe change to ves: knife, knives. A few nouns are irregular: child, children; man, men.</Rule>
        <KeyTable
          title={"Plurals"}
          head={["Rule", "Example"]}
          aria={"Plurals. add s: book, books. s, x, z, ch, sh: add es: box, boxes. consonant + y: ies: story, stories. f, fe: ves: knife, knives. irregular: child, children."}
          rows={[["add s", "book, books"], ["s, x, z, ch, sh: add es", "box, boxes"], ["consonant + y: ies", "story, stories"], ["f, fe: ves", "knife, knives"], ["irregular", "child, children"]]}
        />
        <Worked
          title={"Form a plural"}
          steps={[
            <>Church ends in ch, so add es: churches.</>,
            <>Baby ends in consonant plus y, so change y to i: babies.</>,
          ]}
        />
        <Mistake>Adding s to every noun. Check the ending of the noun.</Mistake>
      </>,
    ),
  },
  {
    title: "Adding ing, ed and other endings",
    content: slide(
      <>
        <Rule>Drop a silent e before ing: make, making. Double the last consonant after a short vowel when the word has one syllable: run, running; stop, stopped. Change y to i before ed: carry, carried. Keep y before ing: carry, carrying. Learn these rules, and then check any doubtful word in a dictionary.</Rule>
        <KeyTable
          title={"Endings"}
          head={["Rule", "Example"]}
          aria={"Endings. drop silent e: make, making. double the consonant: run, running. y becomes i before ed: carry, carried. keep y before ing: carry, carrying."}
          rows={[["drop silent e", "make, making"], ["double the consonant", "run, running"], ["y becomes i before ed", "carry, carried"], ["keep y before ing", "carry, carrying"]]}
        />
        <Worked
          title={"Add an ending"}
          steps={[
            <>Hope ends in a silent e: hoping.</>,
            <>Stop ends in a short vowel and p: stopped.</>,
          ]}
        />
        <Mistake>Doubling the consonant after two vowels. Write boiling and not boilling.</Mistake>
      </>,
    ),
  },
  {
    title: "Spelling patterns and South African spelling",
    content: slide(
      <>
        <Rule>Silent letters are hard to hear: knife, write, gnat. South African English uses British spelling: colour, favourite, centre, neighbour. Practise is the verb and practice is the noun: You must practise every day. Soccer practice starts at four. Learn word families, such as sign, signal and signature, to see spelling patterns.</Rule>
        <KeyTable
          title={"South African spelling"}
          head={["Word", "Note"]}
          aria={"South African spelling. colour: not color. favourite: not favorite. practise: verb: I practise. practice: noun: soccer practice. centre: not center."}
          rows={[["colour", "not color"], ["favourite", "not favorite"], ["practise", "verb: I practise"], ["practice", "noun: soccer practice"], ["centre", "not center"]]}
        />
        <Worked
          title={"Choose the spelling"}
          steps={[
            <>I need to practise my reading: practise is a verb here.</>,
            <>The choir practice is on Friday: practice is a noun here.</>,
          ]}
        />
        <Mistake>Using the American spelling. Use colour, favourite and centre in South Africa.</Mistake>
      </>,
    ),
  },
  {
    title: "Using a dictionary",
    content: slide(
      <>
        <Rule>A dictionary entry gives the headword, how to say it, the part of speech (n. for noun, v. for verb, adj. for adjective), the meaning and often an example. Use guide words at the top of the page to find the page. Words are in alphabetical order, so use the second and third letters when the first letters are the same.</Rule>
        <KeyTable
          title={"A dictionary entry"}
          head={["Part", "What it tells you"]}
          aria={"A dictionary entry. headword: the word in bold. part of speech: n., v., adj.. meaning: what the word means. example: the word in a sentence. guide words: first and last word on the page."}
          rows={[["headword", "the word in bold"], ["part of speech", "n., v., adj."], ["meaning", "what the word means"], ["example", "the word in a sentence"], ["guide words", "first and last word on the page"]]}
        />
        <Worked
          title={"Find a word"}
          steps={[
            <>To find planet, go to the p pages, then look for pl.</>,
            <>Check the guide words at the top of the page.</>,
          ]}
        />
        <Mistake>Ignoring the part of speech. Practice is a noun and practise is a verb, and a dictionary shows both.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the plural of box?</>,
          <>What is hope plus ing?</>,
          <>Is practise the verb or the noun?</>,
          <>What are guide words?</>,
        ]}
        answers={[
          <>Boxes.</>,
          <>Hoping.</>,
          <>The verb.</>,
          <>The first and last word on a dictionary page.</>,
        ]}
      />,
    ),
  },
];
