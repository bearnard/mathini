import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Prepositions and prepositional phrases",
    content: slide(
      <>
        <Rule>A preposition links a noun or a pronoun to another word and shows place, time or direction. A prepositional phrase has a preposition and its noun: in the garden, after school, across the bridge. Some words go with a fixed preposition: afraid of, interested in, good at, depend on, listen to.</Rule>
        <KeyTable
          title={"Fixed prepositions"}
          head={["Words", "Example"]}
          aria={"Fixed prepositions. afraid of: She is afraid of spiders.. interested in: He is interested in music.. good at: I am good at maths.. depend on: It depends on the weather.. listen to: Listen to the teacher.."}
          rows={[["afraid of", "She is afraid of spiders."], ["interested in", "He is interested in music."], ["good at", "I am good at maths."], ["depend on", "It depends on the weather."], ["listen to", "Listen to the teacher."]]}
        />
        <Worked
          title={"Choose the preposition"}
          steps={[
            <>After afraid, use of: afraid of the dark.</>,
            <>After listen, use to: listen to the radio.</>,
          ]}
        />
        <Mistake>Using the wrong preposition with a fixed combination. Learn the pair together.</Mistake>
      </>,
    ),
  },
  {
    title: "Adverbs: forms",
    content: slide(
      <>
        <Rule>Make an adverb of manner by adding ly to an adjective: quick, quickly. If the adjective ends in y, change y to i: happy, happily. Some adverbs are irregular. The adverb of good is well. A few adverbs have the same form as the adjective: fast, hard and late. Hardly and lately have different meanings.</Rule>
        <KeyTable
          title={"Forming adverbs"}
          head={["Adjective", "Adverb"]}
          aria={"Forming adverbs. quick: quickly. happy: happily. good: well. fast: fast. hard: hard."}
          rows={[["quick", "quickly"], ["happy", "happily"], ["good", "well"], ["fast", "fast"], ["hard", "hard"]]}
        />
        <Worked
          title={"Form the adverb"}
          steps={[
            <>Careful becomes carefully: She wrote carefully.</>,
            <>Good becomes well: She sings well.</>,
          ]}
        />
        <Mistake>Using good as an adverb. Write She sings well, not She sings good.</Mistake>
      </>,
    ),
  },
  {
    title: "Adverbs of manner, time, place and degree",
    content: slide(
      <>
        <Rule>An adverb gives more information about a verb, an adjective or another adverb. Adverbs of manner say how, time says when, place says where, and degree says how much. An adverb of degree can modify an adjective: extremely hot. It can modify another adverb: very quietly.</Rule>
        <KeyTable
          title={"What adverbs modify"}
          head={["Modifies", "Example"]}
          aria={"What adverbs modify. a verb: He ran quickly.. an adjective: The soup is extremely hot.. another adverb: She spoke very quietly.."}
          rows={[["a verb", "He ran quickly."], ["an adjective", "The soup is extremely hot."], ["another adverb", "She spoke very quietly."]]}
        />
        <Worked
          title={"Find the adverb"}
          steps={[
            <>In The soup is extremely hot, extremely tells how hot.</>,
            <>Extremely modifies the adjective hot.</>,
          ]}
        />
        <Mistake>Confusing an adjective and an adverb. Hot is an adjective and extremely is an adverb.</Mistake>
      </>,
    ),
  },
  {
    title: "Hard, hardly, late and lately",
    content: slide(
      <>
        <Rule>Hard can be an adjective (a hard test) or an adverb (He works hard). Hardly is a different adverb and means almost not: He hardly slept. Late can be an adjective or an adverb: The bus arrived late. Lately means recently: I have not seen her lately. Use the word that gives the meaning you want.</Rule>
        <KeyTable
          title={"Words that look alike"}
          head={["Word", "Meaning"]}
          aria={"Words that look alike. hard: with effort: He works hard.. hardly: almost not: He hardly slept.. late: after the time: The bus arrived late.. lately: recently: I have not seen her lately.."}
          rows={[["hard", "with effort: He works hard."], ["hardly", "almost not: He hardly slept."], ["late", "after the time: The bus arrived late."], ["lately", "recently: I have not seen her lately."]]}
        />
        <Worked
          title={"Choose the word"}
          steps={[
            <>She studied hard and passed.</>,
            <>She hardly studied and failed. Hardly changes the meaning.</>,
          ]}
        />
        <Mistake>Thinking that hardly means with great effort. Hardly means almost not.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which preposition follows afraid?</>,
          <>What is the adverb of good?</>,
          <>What is the adverb of happy?</>,
          <>What does hardly mean?</>,
        ]}
        answers={[
          <>Of.</>,
          <>Well.</>,
          <>Happily.</>,
          <>Almost not.</>,
        ]}
      />,
    ),
  },
];
