import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What an adverb does",
    content: slide(
      <>
        <Rule>An adverb tells you more about a verb, an adjective or another adverb. Most adverbs answer one of these questions: how, when, where, how much, how long or how often. In The tortoise walked slowly, slowly tells how the tortoise walked.</Rule>
        <KeyTable
          title={"Questions that adverbs answer"}
          head={["Kind", "Question and examples"]}
          aria={"Questions that adverbs answer. manner: how: slowly, carefully. time: when: yesterday, soon. place: where: here, outside. degree: how much: very, quite, too. frequency: how often: always, never."}
          rows={[["manner", "how: slowly, carefully"], ["time", "when: yesterday, soon"], ["place", "where: here, outside"], ["degree", "how much: very, quite, too"], ["frequency", "how often: always, never"]]}
        />
        <Worked
          title={"Find the adverb"}
          steps={[
            <>In She sang beautifully, ask how she sang.</>,
            <>The answer, beautifully, is an adverb of manner.</>,
          ]}
        />
        <Mistake>Thinking that all adverbs end in ly. Soon, here and very are adverbs that do not end in ly.</Mistake>
      </>,
    ),
  },
  {
    title: "Manner, time and place",
    content: slide(
      <>
        <Rule>Adverbs of manner say how an action is done: She carried the tray carefully. Adverbs of time say when it happens: We will leave soon. Adverbs of place say where it happens: The children are playing outside. Many adverbs of manner are made by adding ly to an adjective: careful becomes carefully.</Rule>
        <KeyTable
          title={"Manner, time and place"}
          head={["Kind", "Example"]}
          aria={"Manner, time and place. manner: He ran quickly.. time: They arrived yesterday.. place: Put it there.."}
          rows={[["manner", "He ran quickly."], ["time", "They arrived yesterday."], ["place", "Put it there."]]}
        />
        <Worked
          title={"Make an adverb of manner"}
          steps={[
            <>The adjective is careful.</>,
            <>Add ly to make the adverb carefully: She wrote carefully.</>,
          ]}
        />
        <Mistake>Using an adjective instead of an adverb. Write She sang beautifully, not She sang beautiful.</Mistake>
      </>,
    ),
  },
  {
    title: "Degree, duration and frequency",
    content: slide(
      <>
        <Rule>Adverbs of degree say how much: The soup is very hot. Adverbs of duration say how long: We waited for an hour. Adverbs of frequency say how often: He never lies, she always smiles, and we sometimes walk. Frequency adverbs go before the main verb but after the verb to be.</Rule>
        <KeyTable
          title={"Degree, duration and frequency"}
          head={["Kind", "Example"]}
          aria={"Degree, duration and frequency. degree: The test was too difficult.. duration: We waited for two hours.. frequency: She always smiles.. frequency (none): He never lies.."}
          rows={[["degree", "The test was too difficult."], ["duration", "We waited for two hours."], ["frequency", "She always smiles."], ["frequency (none)", "He never lies."]]}
        />
        <Worked
          title={"Choose the kind"}
          steps={[
            <>She is always late: always tells how often.</>,
            <>We waited for two hours: for two hours tells how long.</>,
          ]}
        />
        <Mistake>Putting the frequency adverb in the wrong place. Write She is always late, not She always is late.</Mistake>
      </>,
    ),
  },
  {
    title: "Adverbs in sentences",
    content: slide(
      <>
        <Rule>An adverb can change a verb (run quickly), an adjective (very tall) or another adverb (quite slowly). Move an adverb to make a different emphasis, but keep it close to the word that it changes. When you write, choose a precise verb and add an adverb only when it makes the meaning clearer.</Rule>
        <KeyTable
          title={"What adverbs modify"}
          head={["Word modified", "Example"]}
          aria={"What adverbs modify. a verb: She sang loudly.. an adjective: The cake is very sweet.. another adverb: He ran quite slowly.."}
          rows={[["a verb", "She sang loudly."], ["an adjective", "The cake is very sweet."], ["another adverb", "He ran quite slowly."]]}
        />
        <Worked
          title={"Find what the adverb modifies"}
          steps={[
            <>In The cake is very sweet, very tells how sweet.</>,
            <>Very modifies the adjective sweet.</>,
          ]}
        />
        <Mistake>Adding adverbs everywhere. Use them only when they help the reader.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which kind of adverb answers how often?</>,
          <>Which adverb is made from careful?</>,
          <>Which kind of adverb answers where?</>,
          <>Which word is an adverb of degree: very or yesterday?</>,
        ]}
        answers={[
          <>Frequency.</>,
          <>Carefully.</>,
          <>Place.</>,
          <>Very.</>,
        ]}
      />,
    ),
  },
];
