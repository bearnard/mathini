import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Subject and predicate",
    content: slide(
      <>
        <Rule>Every sentence has two parts. The subject is who or what the sentence is about. The predicate says something about the subject and contains the verb. In The young girl sang loudly, the subject is The young girl and the predicate is sang loudly. The verb must agree with the subject.</Rule>
        <KeyTable
          title={"Subject and predicate"}
          head={["Sentence", "Parts"]}
          aria={"Subject and predicate. The dog barked.: subject: The dog; predicate: barked. My two friends play soccer.: subject: My two friends; predicate: play soccer. Lerato and Sipho are late.: subject: Lerato and Sipho; predicate: are late."}
          rows={[["The dog barked.", "subject: The dog; predicate: barked"], ["My two friends play soccer.", "subject: My two friends; predicate: play soccer"], ["Lerato and Sipho are late.", "subject: Lerato and Sipho; predicate: are late"]]}
        />
        <Worked
          title={"Find the parts"}
          steps={[
            <>Ask who or what the sentence is about: the dog.</>,
            <>Everything that tells about the dog is the predicate: barked.</>,
          ]}
        />
        <Mistake>Taking only one word as the subject. The subject can be a group of words.</Mistake>
      </>,
    ),
  },
  {
    title: "Clauses",
    content: slide(
      <>
        <Rule>A clause is a group of words with its own subject and verb. A sentence with one clause is a simple sentence: I stayed at home. A main clause makes sense on its own. A dependent clause cannot stand alone because it depends on a main clause. In I stayed at home because it was raining, I stayed at home is the main clause and because it was raining is the dependent clause.</Rule>
        <KeyTable
          title={"Main and dependent clauses"}
          head={["Sentence", "Clauses"]}
          aria={"Main and dependent clauses. I stayed at home because it was raining.: main: I stayed at home; dependent: because it was raining. When the bell rang, we left.: dependent: When the bell rang; main: we left."}
          rows={[["I stayed at home because it was raining.", "main: I stayed at home; dependent: because it was raining"], ["When the bell rang, we left.", "dependent: When the bell rang; main: we left"]]}
        />
        <Worked
          title={"Separate the clauses"}
          steps={[
            <>Find each verb: stayed and was raining.</>,
            <>Each verb has its own subject, so there are two clauses.</>,
          ]}
        />
        <Mistake>Thinking that every group of words is a clause. A clause needs a subject and a verb.</Mistake>
      </>,
    ),
  },
  {
    title: "Conjunctions that start dependent clauses",
    content: slide(
      <>
        <Rule>A dependent clause often starts with a conjunction such as because, when, although, if, while, since or that. Because gives a reason, when gives a time, although shows a contrast, and if gives a condition. The conjunction links the dependent clause to the main clause.</Rule>
        <KeyTable
          title={"Conjunctions"}
          head={["Conjunction", "Example"]}
          aria={"Conjunctions. because (reason): We stayed in because it rained.. when (time): We left when the bell rang.. although (contrast): Although it rained, we played.. if (condition): We will play if it stops.."}
          rows={[["because (reason)", "We stayed in because it rained."], ["when (time)", "We left when the bell rang."], ["although (contrast)", "Although it rained, we played."], ["if (condition)", "We will play if it stops."]]}
        />
        <Worked
          title={"Use a conjunction"}
          steps={[
            <>Join two ideas: It rained. We stayed in.</>,
            <>With a conjunction: We stayed in because it rained.</>,
          ]}
        />
        <Mistake>Leaving a dependent clause alone as a sentence. Because it rained is not a complete sentence.</Mistake>
      </>,
    ),
  },
  {
    title: "Agreement in clauses",
    content: slide(
      <>
        <Rule>The verb in each clause must agree with its own subject. In The learners who are late must sign the book, the subject of the main clause is The learners, so the verb is must, and the subject of the dependent clause is who, so the verb is are. A singular subject takes a singular verb and a plural subject takes a plural verb.</Rule>
        <KeyTable
          title={"Agreement"}
          head={["Subject", "Verb"]}
          aria={"Agreement. The boy: is. The boys: are. Everyone: is. Thabo and Sipho: are."}
          rows={[["The boy", "is"], ["The boys", "are"], ["Everyone", "is"], ["Thabo and Sipho", "are"]]}
        />
        <Worked
          title={"Check the agreement"}
          steps={[
            <>The list of names are long is wrong, because the subject is the list.</>,
            <>The list of names is long is correct.</>,
          ]}
        />
        <Mistake>Making the verb agree with the noun nearest to it. Make it agree with the subject.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What are the two parts of a sentence?</>,
          <>Can a dependent clause stand alone?</>,
          <>Which conjunction gives a reason?</>,
          <>What does a clause need?</>,
        ]}
        answers={[
          <>The subject and the predicate.</>,
          <>No.</>,
          <>Because.</>,
          <>A subject and a verb.</>,
        ]}
      />,
    ),
  },
];
