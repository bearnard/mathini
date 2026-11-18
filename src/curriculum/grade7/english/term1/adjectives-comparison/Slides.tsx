import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Adjectives",
    content: slide(
      <>
        <Rule>An adjective describes a noun. An attributive adjective comes before the noun: a tall boy. A predicative adjective comes after a verb such as is or seems: The boy is tall. Adjectives answer questions such as what kind, how many and which one.</Rule>
        <KeyTable
          title={"Two positions of adjectives"}
          head={["Position", "Example"]}
          aria={"Two positions of adjectives. attributive (before the noun): a cloudy sky. predicative (after the verb): The sky is cloudy.. what kind: a kind teacher. how many: three books."}
          rows={[["attributive (before the noun)", "a cloudy sky"], ["predicative (after the verb)", "The sky is cloudy."], ["what kind", "a kind teacher"], ["how many", "three books"]]}
        />
        <Worked
          title={"Find the adjective"}
          steps={[
            <>In The old bridge is dangerous, old is attributive.</>,
            <>Dangerous comes after is, so it is predicative.</>,
          ]}
        />
        <Mistake>Calling a noun an adjective. A noun names a thing, and an adjective describes it.</Mistake>
      </>,
    ),
  },
  {
    title: "The three degrees",
    content: slide(
      <>
        <Rule>Most adjectives have three degrees. The positive degree describes one thing: tall. The comparative degree compares two things: taller. The superlative degree compares three or more things: tallest. The comparative is usually followed by than: Thabo is taller than Sipho. The superlative is usually used with the: Thabo is the tallest boy in the class.</Rule>
        <KeyTable
          title={"Degrees of comparison"}
          head={["Degree", "Example"]}
          aria={"Degrees of comparison. positive: Thabo is tall.. comparative: Thabo is taller than Sipho.. superlative: Thabo is the tallest boy in the class.."}
          rows={[["positive", "Thabo is tall."], ["comparative", "Thabo is taller than Sipho."], ["superlative", "Thabo is the tallest boy in the class."]]}
        />
        <Worked
          title={"Choose the degree"}
          steps={[
            <>Comparing two girls, Lerato and Mpho: Lerato is cleverer than Mpho.</>,
            <>Comparing the whole class: Lerato is the cleverest girl in the class.</>,
          ]}
        />
        <Mistake>Using the superlative for two things. Use the comparative for two and the superlative for three or more.</Mistake>
      </>,
    ),
  },
  {
    title: "Forming comparatives and superlatives",
    content: slide(
      <>
        <Rule>Add er and est to short adjectives: tall, taller, tallest. If the adjective ends in e, add r and st: nice, nicer, nicest. If it ends in a short vowel and one consonant, double the consonant: big, bigger, biggest. If it ends in consonant plus y, change y to i: happy, happier, happiest. Use more and most with long adjectives: beautiful, more beautiful, most beautiful.</Rule>
        <KeyTable
          title={"Spelling the degrees"}
          head={["Rule", "Example"]}
          aria={"Spelling the degrees. add er, est: small, smaller, smallest. ends in e: nice, nicer, nicest. double the consonant: big, bigger, biggest. y becomes i: happy, happier, happiest. more, most: beautiful, more beautiful, most beautiful."}
          rows={[["add er, est", "small, smaller, smallest"], ["ends in e", "nice, nicer, nicest"], ["double the consonant", "big, bigger, biggest"], ["y becomes i", "happy, happier, happiest"], ["more, most", "beautiful, more beautiful, most beautiful"]]}
        />
        <Worked
          title={"Form the degrees"}
          steps={[
            <>Hot ends in a short vowel and one consonant, so double the t: hotter, hottest.</>,
            <>Careful is long, so use more careful and most careful.</>,
          ]}
        />
        <Mistake>Using more with er. Write taller, not more taller.</Mistake>
      </>,
    ),
  },
  {
    title: "Irregular adjectives and common errors",
    content: slide(
      <>
        <Rule>A few adjectives change completely: good, better, best; bad, worse, worst; many or much, more, most. Never use two comparatives together, such as more taller, or two superlatives together, such as most best. Do not use the superlative to compare only two things.</Rule>
        <KeyTable
          title={"Irregular degrees"}
          head={["Positive", "Comparative and superlative"]}
          aria={"Irregular degrees. good: better, best. bad: worse, worst. many, much: more, most."}
          rows={[["good", "better, best"], ["bad", "worse, worst"], ["many, much", "more, most"]]}
        />
        <Worked
          title={"Correct the error"}
          steps={[
            <>Wrong: This is the most best cake. Right: This is the best cake.</>,
            <>Wrong: Sipho is more taller. Right: Sipho is taller.</>,
          ]}
        />
        <Mistake>Using a double comparative. Better is already a comparative, so do not write more better.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the comparative of small?</>,
          <>What is the superlative of happy?</>,
          <>What is the comparative of good?</>,
          <>How do you compare more than two things?</>,
        ]}
        answers={[
          <>Smaller.</>,
          <>Happiest.</>,
          <>Better.</>,
          <>With the superlative.</>,
        ]}
      />,
    ),
  },
];
