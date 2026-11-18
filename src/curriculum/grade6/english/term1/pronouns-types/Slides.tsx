import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a pronoun does",
    content: slide(
      <>
        <Rule>A pronoun takes the place of a noun, so that you do not have to repeat the noun again and again. Thandi, the books and the dog can become she, they and it. In this lesson you learn three kinds of pronoun: interrogative, demonstrative and indefinite.</Rule>
        <KeyTable
          title="Nouns and the pronouns that replace them"
          head={["Noun", "Pronoun"]}
          aria="Nouns and the pronouns that replace them. Thandi: she. the books: they. the dog: it. Sipho and I: we."
          rows={[["Thandi", "she"], ["the books", "they"], ["the dog", "it"], ["Sipho and I", "we"]]}
        />
        <Worked
          title="Use a pronoun"
          steps={[
            <>Without a pronoun: Thandi came late because Thandi missed the bus.</>,
            <>With a pronoun: Thandi came late because she missed the bus.</>,
          ]}
        />
        <Mistake>Repeating the same noun in every sentence. Use a pronoun so that your writing flows.</Mistake>
      </>,
    ),
  },
  {
    title: "Interrogative pronouns",
    content: slide(
      <>
        <Rule>Interrogative pronouns are used to ask questions. Who asks about a person, whose asks who owns something, what asks about a thing, and which asks you to choose between known people or things.</Rule>
        <KeyTable
          title="Interrogative pronouns"
          head={["Pronoun", "Asks about"]}
          aria="Interrogative pronouns. who: a person. whom: a person (formal, as the object). whose: who owns something. what: a thing. which: a choice between known things."
          rows={[["who", "a person"], ["whom", "a person (formal, as the object)"], ["whose", "who owns something"], ["what", "a thing"], ["which", "a choice between known things"]]}
        />
        <Worked
          title="Ask questions"
          steps={[
            <>Who broke the window? asks about a person.</>,
            <>Whose scarf is this? asks who owns it.</>,
            <>Which would you like, the red one or the blue one? asks for a choice.</>,
          ]}
        />
        <Mistake>Using what to ask about a person. To ask about a person, use who.</Mistake>
      </>,
    ),
  },
  {
    title: "Demonstrative pronouns",
    content: slide(
      <>
        <Rule>Demonstrative pronouns point out things. This and that are for one thing, and these and those are for more than one. This and these are near you, and that and those are far from you. A demonstrative pronoun stands alone and takes the place of a noun.</Rule>
        <KeyTable
          title="Demonstrative pronouns"
          head={["Pronoun", "Points to"]}
          aria="Demonstrative pronouns. this: one thing, near. that: one thing, far. these: more than one thing, near. those: more than one thing, far."
          rows={[["this", "one thing, near"], ["that", "one thing, far"], ["these", "more than one thing, near"], ["those", "more than one thing, far"]]}
        />
        <Worked
          title="Point things out"
          steps={[
            <>You hold one pen: This is my pen.</>,
            <>You point at one tree across the field: That is a very old tree.</>,
            <>You point at shoes across the room: Those are mine.</>,
          ]}
        />
        <Mistake>Using this for more than one thing. For more than one thing near you, say these.</Mistake>
      </>,
    ),
  },
  {
    title: "Indefinite pronouns",
    content: slide(
      <>
        <Rule>Indefinite pronouns do not name a particular person or thing. Examples are someone, anyone, everyone, nobody, something, nothing, all, some, many and few. Pronouns such as everyone, someone and nothing take a singular verb.</Rule>
        <KeyTable
          title="Indefinite pronouns"
          head={["Pronoun", "Example sentence"]}
          aria="Indefinite pronouns. someone: Someone is knocking.. everyone: Everyone is happy.. nothing: Nothing was lost.. many: Many were late.."
          rows={[["someone", "Someone is knocking."], ["everyone", "Everyone is happy."], ["nothing", "Nothing was lost."], ["many", "Many were late."]]}
        />
        <Worked
          title="Choose the verb"
          steps={[
            <>Everyone is the subject, and it is singular, so use is.</>,
            <>Everyone is ready is correct. Everyone are ready is wrong.</>,
          ]}
        />
        <Mistake>Using a plural verb with everyone. Write Everyone is ready.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which pronoun asks who owns something?</>,
          <>Which demonstrative pronoun points at one thing that is near you?</>,
          <>Which verb goes with everyone: is or are?</>,
          <>What does a pronoun do?</>,
        ]}
        answers={[
          <>Whose.</>,
          <>This.</>,
          <>Is.</>,
          <>It takes the place of a noun.</>,
        ]}
      />,
    ),
  },
];
