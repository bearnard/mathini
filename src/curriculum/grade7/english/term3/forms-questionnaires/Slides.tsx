import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Reading and filling in a form",
    content: slide(
      <>
        <Rule>A form collects information in an organised way. Before you write, read all the instructions. Write in the spaces that are given, in block letters if the form asks for them. Fill in every compulsory section, and check the information that you must supply, such as your full name, date of birth and contact number. Sign the form at the end if there is a place for a signature.</Rule>
        <KeyTable
          title={"Steps for a form"}
          head={["Step", "What you do"]}
          aria={"Steps for a form. read: read all the instructions first. write: use block letters if asked. fill in: complete the compulsory sections. check and sign: check and sign where it says."}
          rows={[["read", "read all the instructions first"], ["write", "use block letters if asked"], ["fill in", "complete the compulsory sections"], ["check and sign", "check and sign where it says"]]}
        />
        <Worked
          title={"Fill in a line"}
          steps={[
            <>Instruction: Write your surname in block letters.</>,
            <>Answer: MOKOENA.</>,
          ]}
        />
        <Mistake>Writing before reading the instructions. The form may ask for something special.</Mistake>
      </>,
    ),
  },
  {
    title: "Dates, ticks and personal details",
    content: slide(
      <>
        <Rule>Follow the format that the form shows. A date may be written as day, month, year: 05/03/2012. Tick a box with a tick or a cross, as the form says, and tick only one box if it says to choose one. Give your full name, not a nickname. Give an address and contact number that are correct, so that the reader can reach you.</Rule>
        <KeyTable
          title={"Common parts"}
          head={["Part", "Example"]}
          aria={"Common parts. date of birth: 05/03/2012 (day, month, year). tick box: Tick one: Yes or No. full name: Thandi Mokoena. contact number: 082 000 0000."}
          rows={[["date of birth", "05/03/2012 (day, month, year)"], ["tick box", "Tick one: Yes or No"], ["full name", "Thandi Mokoena"], ["contact number", "082 000 0000"]]}
        />
        <Worked
          title={"Write a date"}
          steps={[
            <>5 March 2012 on a form that asks for dd/mm/yyyy is written 05/03/2012.</>,
            <>The day comes first, then the month, then the year.</>,
          ]}
        />
        <Mistake>Ticking two boxes when the form says choose one. Tick one only.</Mistake>
      </>,
    ),
  },
  {
    title: "Questionnaires",
    content: slide(
      <>
        <Rule>A questionnaire is a list of questions that collects people's opinions or information. Closed questions have set answers, such as yes or no, a list to tick or a rating from one to five. Open questions let people answer in their own words. A good questionnaire has clear, short questions, a polite introduction and thanks at the end.</Rule>
        <KeyTable
          title={"Question types"}
          head={["Type", "Example"]}
          aria={"Question types. closed (yes or no): Do you walk to school? Yes / No. closed (tick a list): How do you travel? Walk / Bus / Car. rating scale: Rate the canteen from 1 to 5. open: What would you change at the canteen?."}
          rows={[["closed (yes or no)", "Do you walk to school? Yes / No"], ["closed (tick a list)", "How do you travel? Walk / Bus / Car"], ["rating scale", "Rate the canteen from 1 to 5"], ["open", "What would you change at the canteen?"]]}
        />
        <Worked
          title={"Write a question"}
          steps={[
            <>Unclear: What about the canteen?</>,
            <>Clear: How would you rate the canteen food from 1 to 5?</>,
          ]}
        />
        <Mistake>Asking two questions in one. Ask one thing at a time.</Mistake>
      </>,
    ),
  },
  {
    title: "Signature and declaration",
    content: slide(
      <>
        <Rule>Many forms end with a declaration, which is a statement that the information is true. Read it before you sign. A signature is your own handwritten name and shows that you agree with the form. A young person may need a parent or guardian to sign as well. Check the whole form once more before you hand it in.</Rule>
        <KeyTable
          title={"At the end of a form"}
          head={["Part", "Meaning"]}
          aria={"At the end of a form. declaration: a statement that the information is true. signature: your own handwritten name. parent or guardian: signs if you are under age. final check: check every section before handing in."}
          rows={[["declaration", "a statement that the information is true"], ["signature", "your own handwritten name"], ["parent or guardian", "signs if you are under age"], ["final check", "check every section before handing in"]]}
        />
        <Worked
          title={"Check a form"}
          steps={[
            <>Is every compulsory section filled in?</>,
            <>Is the date written in the format that the form shows?</>,
          ]}
        />
        <Mistake>Signing a form that you have not read. Read the declaration first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What should you do before you write on a form?</>,
          <>How is the date 5 March 2012 written as dd/mm/yyyy?</>,
          <>What is an open question?</>,
          <>What does your signature show?</>,
        ]}
        answers={[
          <>Read all the instructions.</>,
          <>05/03/2012.</>,
          <>A question that you answer in your own words.</>,
          <>That you agree with the form.</>,
        ]}
      />,
    ),
  },
];
