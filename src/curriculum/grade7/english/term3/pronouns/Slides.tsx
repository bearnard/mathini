import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Personal pronouns",
    content: slide(
      <>
        <Rule>A personal pronoun takes the place of a noun. Subject pronouns are I, you, he, she, it, we and they. Object pronouns are me, you, him, her, it, us and them. Use a subject pronoun before the verb: Lerato and I are friends. Use an object pronoun after the verb or a preposition: The teacher thanked us.</Rule>
        <KeyTable
          title={"Subject and object pronouns"}
          head={["Subject", "Object"]}
          aria={"Subject and object pronouns. I: me. he, she: him, her. we: us. they: them."}
          rows={[["I", "me"], ["he, she", "him, her"], ["we", "us"], ["they", "them"]]}
        />
        <Worked
          title={"Choose the pronoun"}
          steps={[
            <>The teacher and I laughed: I is the subject.</>,
            <>The teacher thanked Sipho and me: me is the object.</>,
          ]}
        />
        <Mistake>Writing Me and Lerato are friends. Write Lerato and I are friends.</Mistake>
      </>,
    ),
  },
  {
    title: "Possessive and reflexive pronouns",
    content: slide(
      <>
        <Rule>A possessive pronoun shows ownership and stands alone: mine, yours, his, hers, ours, theirs. The red bag is mine. Do not mix it up with my, your and her, which come before a noun. A reflexive pronoun ends in self or selves and refers back to the subject: myself, yourself, himself, herself, itself, ourselves, themselves.</Rule>
        <KeyTable
          title={"Possessive and reflexive"}
          head={["Type", "Examples"]}
          aria={"Possessive and reflexive. possessive pronoun: mine, yours, his, hers, ours, theirs. reflexive pronoun: myself, himself, herself, themselves. possessive adjective (before a noun): my bag, her pen."}
          rows={[["possessive pronoun", "mine, yours, his, hers, ours, theirs"], ["reflexive pronoun", "myself, himself, herself, themselves"], ["possessive adjective (before a noun)", "my bag, her pen"]]}
        />
        <Worked
          title={"Use the pronoun"}
          steps={[
            <>The red bag belongs to me: The red bag is mine.</>,
            <>Sipho looked at Sipho in the mirror: Sipho looked at himself in the mirror.</>,
          ]}
        />
        <Mistake>Writing hisself or theirselves. The forms are himself and themselves.</Mistake>
      </>,
    ),
  },
  {
    title: "Demonstrative, interrogative and indefinite pronouns",
    content: slide(
      <>
        <Rule>Demonstrative pronouns point out things: this, that, these and those. Interrogative pronouns ask questions: who, whom, whose, which and what. Indefinite pronouns do not name a particular person or thing: someone, everybody, nothing, all, some, many. Everybody and nothing take a singular verb.</Rule>
        <KeyTable
          title={"Three more kinds"}
          head={["Kind", "Examples"]}
          aria={"Three more kinds. demonstrative: this, that, these, those. interrogative: who, whom, whose, which, what. indefinite: someone, everybody, nothing, many."}
          rows={[["demonstrative", "this, that, these, those"], ["interrogative", "who, whom, whose, which, what"], ["indefinite", "someone, everybody, nothing, many"]]}
        />
        <Worked
          title={"Name the kind"}
          steps={[
            <>Those are mine: those is demonstrative and mine is possessive.</>,
            <>Everybody is here: everybody is indefinite and takes is.</>,
          ]}
        />
        <Mistake>Using a plural verb with everybody. Write Everybody is here.</Mistake>
      </>,
    ),
  },
  {
    title: "Relative pronouns and agreement",
    content: slide(
      <>
        <Rule>Relative pronouns who, whom, whose, which and that begin relative clauses. Who and whom refer to people, which refers to things, and whose shows belonging. A pronoun must agree with the noun that it replaces in number and person. The girls took their bags is correct, because girls is plural and their is plural.</Rule>
        <KeyTable
          title={"Agreement"}
          head={["Noun", "Pronoun"]}
          aria={"Agreement. the girl: she, her. the girls: they, them, their. the book: it. Thabo and I: we."}
          rows={[["the girl", "she, her"], ["the girls", "they, them, their"], ["the book", "it"], ["Thabo and I", "we"]]}
        />
        <Worked
          title={"Check the agreement"}
          steps={[
            <>The learners took his bags is wrong, because learners is plural.</>,
            <>The learners took their bags is correct.</>,
          ]}
        />
        <Mistake>Using a singular pronoun for a plural noun. Match the pronoun to the noun.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which pronoun completes Lerato and ___ are friends?</>,
          <>Which pronoun is possessive: mine or my?</>,
          <>Which word is a reflexive pronoun: himself or him?</>,
          <>Which verb goes with everybody?</>,
        ]}
        answers={[
          <>I.</>,
          <>Mine.</>,
          <>Himself.</>,
          <>Is.</>,
        ]}
      />,
    ),
  },
];
