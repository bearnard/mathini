import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Homophones",
    content: slide(
      <>
        <Rule>Homophones are words that sound the same but have different spellings and meanings. Examples are their and there, to, too and two, write and right, and sea and see. Check the meaning in the sentence to choose the correct spelling. Their means belonging to them, and there shows a place.</Rule>
        <KeyTable
          title={"Homophones"}
          head={["Pair", "Meanings"]}
          aria={"Homophones. their, there: belonging to them; in that place. to, too, two: towards; also or very; the number 2. write, right: put words on paper; correct or the opposite of left. sea, see: salt water; use your eyes."}
          rows={[["their, there", "belonging to them; in that place"], ["to, too, two", "towards; also or very; the number 2"], ["write, right", "put words on paper; correct or the opposite of left"], ["sea, see", "salt water; use your eyes"]]}
        />
        <Worked
          title={"Choose the homophone"}
          steps={[
            <>The learners packed their bags: their shows that the bags belong to them.</>,
            <>Put the books over there: there shows a place.</>,
          ]}
        />
        <Mistake>Choosing the spelling by the sound. Choose it by the meaning.</Mistake>
      </>,
    ),
  },
  {
    title: "Homonyms",
    content: slide(
      <>
        <Rule>Homonyms are words with the same spelling and the same sound but different meanings that are not related. A bat is a flying animal or the wood that you hit a ball with. A bank is the side of a river or a place that keeps money. The sentence tells you which meaning is used.</Rule>
        <KeyTable
          title={"Homonyms"}
          head={["Word", "Two meanings"]}
          aria={"Homonyms. bat: a flying animal; wood for hitting a ball. bank: a river side; a place for money. bark: the sound of a dog; the outside of a tree. match: a game; a stick that makes fire."}
          rows={[["bat", "a flying animal; wood for hitting a ball"], ["bank", "a river side; a place for money"], ["bark", "the sound of a dog; the outside of a tree"], ["match", "a game; a stick that makes fire"]]}
        />
        <Worked
          title={"Choose the meaning"}
          steps={[
            <>He sat on the bank of the river: bank means the side of a river.</>,
            <>She put the money in the bank: bank means a place for money.</>,
          ]}
        />
        <Mistake>Thinking that homonyms are spelt differently. Homonyms are spelt the same.</Mistake>
      </>,
    ),
  },
  {
    title: "Polysemy and figurative meaning",
    content: slide(
      <>
        <Rule>A polysemous word has several meanings that are related. The word head can mean the top of the body, the leader of a school or the front of a line. Words can also have a literal meaning, which is the exact meaning, and a figurative meaning, which is an imaginative meaning. She has a cold heart does not mean that her heart is cold in temperature.</Rule>
        <KeyTable
          title={"Literal and figurative"}
          head={["Phrase", "Meaning"]}
          aria={"Literal and figurative. literal: a cold drink: a drink with a low temperature. figurative: a cold heart: unkind and without feeling. literal: He ran home.: He moved quickly on his feet. figurative: Time flies.: Time seems to pass quickly."}
          rows={[["literal: a cold drink", "a drink with a low temperature"], ["figurative: a cold heart", "unkind and without feeling"], ["literal: He ran home.", "He moved quickly on his feet"], ["figurative: Time flies.", "Time seems to pass quickly"]]}
        />
        <Worked
          title={"Choose the meaning"}
          steps={[
            <>The test was a piece of cake. A cake is food, but here the phrase is figurative.</>,
            <>It means that the test was easy.</>,
          ]}
        />
        <Mistake>Taking a figurative phrase literally. A piece of cake here does not mean food.</Mistake>
      </>,
    ),
  },
  {
    title: "Riddles and word play",
    content: slide(
      <>
        <Rule>A riddle uses a word with more than one meaning to make you think. What has a mouth but never eats? A river. The word mouth can mean the opening of a river or part of the face. To solve a riddle, look for a word that can mean two things.</Rule>
        <KeyTable
          title={"Solving a riddle"}
          head={["Step", "Example"]}
          aria={"Solving a riddle. find the key word: mouth. list its meanings: face part, end of a river. choose the one that fits: a river."}
          rows={[["find the key word", "mouth"], ["list its meanings", "face part, end of a river"], ["choose the one that fits", "a river"]]}
        />
        <Worked
          title={"Solve a riddle"}
          steps={[
            <>Riddle: What has teeth but cannot bite? A comb.</>,
            <>The word teeth has a second meaning: the points on a comb.</>,
          ]}
        />
        <Mistake>Giving up too soon. Look at each key word and think of its other meaning.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Do homophones have the same spelling?</>,
          <>Do homonyms have the same spelling?</>,
          <>What is a figurative meaning?</>,
          <>Which word completes The learners packed ___ bags?</>,
        ]}
        answers={[
          <>No.</>,
          <>Yes.</>,
          <>An imaginative meaning, not the exact one.</>,
          <>Their.</>,
        ]}
      />,
    ),
  },
];
