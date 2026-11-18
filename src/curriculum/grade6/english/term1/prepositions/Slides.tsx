import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a preposition does",
    content: slide(
      <>
        <Rule>A preposition shows how a noun or a pronoun is related to another word in the sentence. Most prepositions tell you where something is, when something happens, or in which direction something moves. A preposition comes before a noun or a pronoun.</Rule>
        <KeyTable
          title="Three jobs of prepositions"
          head={["Job", "Examples"]}
          aria="Three jobs of prepositions. place: in, on, under, behind, between, next to. time: at, on, in, before, after, during. direction: to, into, across, through, along, towards."
          rows={[["place", "in, on, under, behind, between, next to"], ["time", "at, on, in, before, after, during"], ["direction", "to, into, across, through, along, towards"]]}
        />
        <Worked
          title="Find the preposition"
          steps={[
            <>The cat sleeps under the table. Under is a preposition of place.</>,
            <>The bus leaves at seven. At is a preposition of time.</>,
          ]}
        />
        <Mistake>Thinking that every small word is a preposition. A preposition must be followed by a noun or a pronoun.</Mistake>
      </>,
    ),
  },
  {
    title: "Prepositions of place",
    content: slide(
      <>
        <Rule>Prepositions of place show where something is. In shows that something is inside, on shows that something is on a surface, under means below, behind means at the back, and next to means beside. Use between for two things and among for many things.</Rule>
        <KeyTable
          title="Prepositions of place"
          head={["Preposition", "Example"]}
          aria="Prepositions of place. in: The pen is in the bag.. on: The book is on the desk.. between: She stood between two friends.. among: He found it among the toys.."
          rows={[["in", "The pen is in the bag."], ["on", "The book is on the desk."], ["between", "She stood between two friends."], ["among", "He found it among the toys."]]}
        />
        <Worked
          title="Choose the place word"
          steps={[
            <>Two chairs and a ball in the middle: the ball is between the chairs.</>,
            <>A box with many toys inside: the toy is among the toys.</>,
          ]}
        />
        <Mistake>Using among for two things. Use between for two and among for more than two.</Mistake>
      </>,
    ),
  },
  {
    title: "Prepositions of time",
    content: slide(
      <>
        <Rule>Prepositions of time show when something happens. Use at for clock times and for night: at seven o'clock, at night. Use on for days and dates: on Monday, on 5 May. Use in for months, years, seasons and parts of the day: in June, in 2024, in the morning. Before and after show the order of events.</Rule>
        <KeyTable
          title="Prepositions of time"
          head={["Preposition", "Use with"]}
          aria="Prepositions of time. at: clock times: at 08:00. on: days and dates: on Friday. in: months and years: in March. before, after: order: before lunch."
          rows={[["at", "clock times: at 08:00"], ["on", "days and dates: on Friday"], ["in", "months and years: in March"], ["before, after", "order: before lunch"]]}
        />
        <Worked
          title="Choose the time word"
          steps={[
            <>The test is on Friday, because Friday is a day.</>,
            <>School starts at 08:00, because 08:00 is a clock time.</>,
          ]}
        />
        <Mistake>Writing in Monday. Days take on: on Monday.</Mistake>
      </>,
    ),
  },
  {
    title: "Prepositions of direction",
    content: slide(
      <>
        <Rule>Prepositions of direction show the way something moves. To shows the end point, into shows going inside, across shows going from one side to the other, through shows going from one end to the other inside something, along shows following a line, and towards shows moving in the direction of something.</Rule>
        <KeyTable
          title="Prepositions of direction"
          head={["Preposition", "Example"]}
          aria="Prepositions of direction. to: We walked to school.. into: He ran into the hall.. across: The cow walked across the road.. through: The train went through the tunnel.."
          rows={[["to", "We walked to school."], ["into", "He ran into the hall."], ["across", "The cow walked across the road."], ["through", "The train went through the tunnel."]]}
        />
        <Worked
          title="Choose the direction word"
          steps={[
            <>A bird flies from one side of the river to the other: across the river.</>,
            <>A letter goes inside the envelope: into the envelope.</>,
          ]}
        />
        <Mistake>Mixing up in and into. In says where something is, and into says where it is going.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which preposition do you use with a day: at, on or in?</>,
          <>Which preposition shows where something is under a table?</>,
          <>Which preposition is used with a month?</>,
          <>Which preposition shows moving from one side of a field to the other?</>,
        ]}
        answers={[
          <>On.</>,
          <>Under.</>,
          <>In.</>,
          <>Across.</>,
        ]}
      />,
    ),
  },
];
