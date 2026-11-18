import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Three kinds of dependent clause",
    content: slide(
      <>
        <Rule>A dependent clause has its own subject and verb but cannot stand alone. There are three kinds. A noun clause does the work of a noun: She said that she was tired. An adjectival clause describes a noun: The boy who won the race is my cousin. An adverbial clause does the work of an adverb and tells when, why, where or how: We left when the bell rang.</Rule>
        <KeyTable
          title={"Dependent clauses"}
          head={["Kind", "Example"]}
          aria={"Dependent clauses. noun clause: I know that you are right.. adjectival clause: The girl who sings is my sister.. adverbial clause: He stayed home because he was ill.."}
          rows={[["noun clause", "I know that you are right."], ["adjectival clause", "The girl who sings is my sister."], ["adverbial clause", "He stayed home because he was ill."]]}
        />
        <Worked
          title={"Name the clause"}
          steps={[
            <>In She said that she was tired, the clause that she was tired is the object of said, so it is a noun clause.</>,
            <>In He stayed home because he was ill, the clause tells why, so it is an adverbial clause.</>,
          ]}
        />
        <Mistake>Thinking that a dependent clause is a sentence. It needs a main clause.</Mistake>
      </>,
    ),
  },
  {
    title: "Relative clauses and relative pronouns",
    content: slide(
      <>
        <Rule>An adjectival clause is also called a relative clause. It starts with a relative pronoun: who for people, which for things, whose for belonging, and whom for people as the object. The relative pronoun links the clause to the noun that it describes. The girl whose bag was stolen reported it. The teacher who taught us has retired.</Rule>
        <KeyTable
          title={"Relative pronouns"}
          head={["Pronoun", "Use and example"]}
          aria={"Relative pronouns. who: people: the teacher who laughed. whose: belonging: the girl whose bag was stolen. whom: people as object: the girl whom I met. which: things: the book, which is old."}
          rows={[["who", "people: the teacher who laughed"], ["whose", "belonging: the girl whose bag was stolen"], ["whom", "people as object: the girl whom I met"], ["which", "things: the book, which is old"]]}
        />
        <Worked
          title={"Choose the relative pronoun"}
          steps={[
            <>The person is a woman, so use who: The woman who lives next door is a nurse.</>,
            <>A bag belongs to the girl, so use whose: the girl whose bag was stolen.</>,
          ]}
        />
        <Mistake>Using which for people. For people use who, whom or whose.</Mistake>
      </>,
    ),
  },
  {
    title: "Adverbial clauses",
    content: slide(
      <>
        <Rule>An adverbial clause starts with a conjunction. When, after and before show time. Because and since show reason. Although shows contrast. If shows condition. Where shows place. We went home after the bell rang. They stayed in because it rained. Although she was tired, she finished.</Rule>
        <KeyTable
          title={"Adverbial clauses"}
          head={["Conjunction", "Shows"]}
          aria={"Adverbial clauses. when, after, before: time. because, since: reason. although: contrast. if: condition. where: place."}
          rows={[["when, after, before", "time"], ["because, since", "reason"], ["although", "contrast"], ["if", "condition"], ["where", "place"]]}
        />
        <Worked
          title={"Choose the conjunction"}
          steps={[
            <>It rained, so the match was cancelled: The match was cancelled because it rained.</>,
            <>It rained, but we played: We played although it rained.</>,
          ]}
        />
        <Mistake>Leaving out the main clause. Because it rained is not a sentence on its own.</Mistake>
      </>,
    ),
  },
  {
    title: "Noun clauses",
    content: slide(
      <>
        <Rule>A noun clause can be the object or the subject of a verb. It often starts with that, what, who or whether. I know that she is a nurse (object). What she said surprised me (subject). You can test a noun clause by replacing it with it or something: I know it. Something surprised me.</Rule>
        <KeyTable
          title={"Noun clauses"}
          head={["Sentence", "Job of the clause"]}
          aria={"Noun clauses. I know that she is a nurse.: object of know. What she said surprised me.: subject of surprised. He asked whether it was true.: object of asked."}
          rows={[["I know that she is a nurse.", "object of know"], ["What she said surprised me.", "subject of surprised"], ["He asked whether it was true.", "object of asked"]]}
        />
        <Worked
          title={"Test a noun clause"}
          steps={[
            <>Replace the clause: I know it.</>,
            <>It works, so that she is a nurse is a noun clause.</>,
          ]}
        />
        <Mistake>Confusing noun and adjectival clauses. A noun clause replaces a noun and does not describe one.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which kind of clause describes a noun?</>,
          <>Which relative pronoun shows belonging?</>,
          <>Which conjunction shows a reason?</>,
          <>What can a noun clause be?</>,
        ]}
        answers={[
          <>An adjectival clause.</>,
          <>Whose.</>,
          <>Because.</>,
          <>A subject or an object.</>,
        ]}
      />,
    ),
  },
];
