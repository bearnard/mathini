import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "A diary entry",
    content: slide(
      <>
        <Rule>A diary entry is a personal record of your day and your feelings. It begins with the date and is often addressed to the diary: Dear Diary. It is written in the first person and mostly in the past tense. The language can be informal. Say what happened, what you thought and how you felt, and give details that make the day come alive.</Rule>
        <KeyTable
          title={"Parts of a diary entry"}
          head={["Part", "Example"]}
          aria={"Parts of a diary entry. date: Monday, 12 May. greeting: Dear Diary. events: Today we planted trees at school.. feelings: I felt proud and tired.."}
          rows={[["date", "Monday, 12 May"], ["greeting", "Dear Diary"], ["events", "Today we planted trees at school."], ["feelings", "I felt proud and tired."]]}
        />
        <Worked
          title={"Write an entry"}
          steps={[
            <>Monday, 12 May. Dear Diary, today our class planted trees.</>,
            <>I felt proud when I saw the small trees in a row.</>,
          ]}
        />
        <Mistake>Writing only what happened. A diary also shows how you felt.</Mistake>
      </>,
    ),
  },
  {
    title: "An e-mail",
    content: slide(
      <>
        <Rule>An e-mail has a header and a message. The header has To (the address), Cc (people who get a copy) and a Subject that tells the reader the topic in a few words. The message begins with a greeting, such as Dear Mrs Pillay, and has short paragraphs. End with a closing and your name. For a teacher or an adult, use polite, formal language.</Rule>
        <KeyTable
          title={"Parts of an e-mail"}
          head={["Part", "Example"]}
          aria={"Parts of an e-mail. To: mrs.pillay@example.co.za. Subject: Request for a music book. greeting: Dear Mrs Pillay. closing: Yours sincerely, Thandi Mokoena."}
          rows={[["To", "mrs.pillay@example.co.za"], ["Subject", "Request for a music book"], ["greeting", "Dear Mrs Pillay"], ["closing", "Yours sincerely, Thandi Mokoena"]]}
        />
        <Worked
          title={"Write a subject"}
          steps={[
            <>Weak subject: Hi.</>,
            <>Better subject: Request for a music book.</>,
          ]}
        />
        <Mistake>Leaving the subject blank. The subject tells the reader what the e-mail is about.</Mistake>
      </>,
    ),
  },
  {
    title: "A flyer",
    content: slide(
      <>
        <Rule>A flyer is a single page that advertises or announces an event, so it must catch the reader's eye. It has a bold heading, the key facts (what, when, where and the cost), a short, lively message, contact details and often a picture or a slogan. Use few words and large lettering. Check that the facts are correct.</Rule>
        <KeyTable
          title={"Parts of a flyer"}
          head={["Part", "Example"]}
          aria={"Parts of a flyer. heading: SCHOOL FETE. key facts: Saturday 20 June, 09:00 to 14:00, school grounds. message: Games, food and fun for everyone!. contact: Call Mr Dlamini on 082 000 0000."}
          rows={[["heading", "SCHOOL FETE"], ["key facts", "Saturday 20 June, 09:00 to 14:00, school grounds"], ["message", "Games, food and fun for everyone!"], ["contact", "Call Mr Dlamini on 082 000 0000"]]}
        />
        <Worked
          title={"Check a flyer"}
          steps={[
            <>Does it show what, when and where?</>,
            <>Is the heading large and the message short?</>,
          ]}
        />
        <Mistake>Using long paragraphs on a flyer. A flyer uses few words.</Mistake>
      </>,
    ),
  },
  {
    title: "Choosing the text and the register",
    content: slide(
      <>
        <Rule>Choose the text that suits your purpose and audience. A diary entry is private, so its language is informal. An e-mail to a teacher is formal and polite. A flyer is lively and short to attract attention. Match the register to the reader: slang is fine in your diary but not in an e-mail to a principal. Check spelling and punctuation in every text.</Rule>
        <KeyTable
          title={"Register"}
          head={["Text", "Register"]}
          aria={"Register. diary entry: informal and personal. e-mail to a teacher: formal and polite. flyer: lively and short."}
          rows={[["diary entry", "informal and personal"], ["e-mail to a teacher", "formal and polite"], ["flyer", "lively and short"]]}
        />
        <Worked
          title={"Match the register"}
          steps={[
            <>Diary: I was so tired after sports day!</>,
            <>E-mail: I am writing to ask whether I may borrow a book.</>,
          ]}
        />
        <Mistake>Using slang in an e-mail to a teacher. Use polite, formal language.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which text is a personal record of your day?</>,
          <>What does the subject line of an e-mail show?</>,
          <>What does a flyer use?</>,
          <>Which register suits an e-mail to a teacher?</>,
        ]}
        answers={[
          <>A diary entry.</>,
          <>The topic of the e-mail.</>,
          <>Few words and a bold heading.</>,
          <>A formal and polite register.</>,
        ]}
      />,
    ),
  },
];
