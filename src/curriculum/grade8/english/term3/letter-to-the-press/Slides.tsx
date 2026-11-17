import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a letter to the press is",
    content: slide(
      <>
        <Rule>A letter to the press (to the editor) is a short formal letter in which a reader gives a view on something published in a newspaper or on a matter that affects the community. It is meant to be printed, so it must be clear, polite and to the point.</Rule>
        <KeyTable
          title="Parts of the letter"
          head={["Part", "What it contains"]}
          aria="Parts of the letter. Sender's address and date: At the top. Address of the editor: The newspaper's name and address. Salutation: Dear Editor,. Heading: Refers to the article or topic. Body: Your view, with reasons, in short paragraphs. Closing: Yours faithfully, with your name."
          rows={[["Sender's address and date", "At the top"], ["Address of the editor", "The newspaper's name and address"], ["Salutation", "Dear Editor,"], ["Heading", "Refers to the article or topic"], ["Body", "Your view, with reasons, in short paragraphs"], ["Closing", "Yours faithfully, with your name"]]}
        />
        <Worked
          steps={[
            <>A reader reacts to an article about a new taxi rank. The letter names the article and the date, and says whether the writer agrees.</>,
            <>Keep it short, because editors print short letters.</>,
          ]}
        />
        <Mistake>Writing an angry attack on a person. Argue about the issue, not about people.</Mistake>
      </>,
    ),
  },
  {
    title: "A model letter to the press",
    content: slide(
      <>
        <Rule>Read the model. Notice that the first paragraph names the article, the middle gives reasons, and the last asks for action.</Rule>
        <KeyTable
          title="Labelled parts"
          head={["Part", "In the model"]}
          aria="Labelled parts. Heading: Re: Your article Library to close on 1 September. Opening: Names the article and the writer's view. Reasons: Firstly and secondly, with facts. Request: The council should keep the library open. Closing: Yours faithfully, Zinhle Mkhize."
          rows={[["Heading", "Re: Your article Library to close on 1 September"], ["Opening", "Names the article and the writer's view"], ["Reasons", "Firstly and secondly, with facts"], ["Request", "The council should keep the library open"], ["Closing", "Yours faithfully, Zinhle Mkhize"]]}
        />
        <ModelText label="Model letter to the press" note="An original model written for this lesson, with invented names and places.">
          <p>22 Acacia Street, Umtata, 5100</p>
          <p>3 August 2026</p>
          <p>The Editor, The Eastern Herald, P O Box 14, Umtata</p>
          <p>Dear Editor,</p>
          <p>Re: Your article Library to close on 1 September</p>
          <p>I am writing about your article of 1 August, in which it was reported that the town library will close. I strongly disagree with this decision.</p>
          <p>Firstly, many learners in our area have no books at home and use the library to study. Secondly, the library gives free access to computers. Closing it will make life harder for these learners.</p>
          <p>I urge the council to find the money to keep the library open.</p>
          <p>Yours faithfully,</p>
          <p>Zinhle Mkhize</p>
        </ModelText>
        <Worked
          steps={[
            <>The writer uses Firstly and Secondly to organise the reasons.</>,
            <>The last paragraph says what should be done.</>,
          ]}
        />
        <Mistake>Forgetting to say which article you are reacting to.</Mistake>
      </>,
    ),
  },
  {
    title: "Tone and persuasion",
    content: slide(
      <>
        <Rule>Use formal, polite language. Give reasons and facts, not only feelings. Use linking words such as firstly, however and therefore. A persuasive letter ends with a clear request.</Rule>
        <KeyTable
          title="Persuasive language"
          head={["Feature", "Example"]}
          aria="Persuasive language. Formal register: I would like to express my concern. Reasons: Because many learners have no books at home. Linking words: Firstly, secondly, therefore, however. Polite request: I urge the council to reconsider. Avoid: Insults, shouting in capitals, slang."
          rows={[["Formal register", "I would like to express my concern"], ["Reasons", "Because many learners have no books at home"], ["Linking words", "Firstly, secondly, therefore, however"], ["Polite request", "I urge the council to reconsider"], ["Avoid", "Insults, shouting in capitals, slang"]]}
        />
        <Worked
          steps={[
            <>Weak: This is stupid! Better: I believe that this decision is unwise because...</>,
            <>A fact such as many learners use the library each day makes the view stronger.</>,
          ]}
        />
        <Mistake>Using slang and capital letters. They weaken the argument.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>To whom do you address a letter to the press?</>,
          <>How should a letter to the press end?</>,
          <>What must the opening paragraph state?</>,
          <>Why give reasons?</>,
        ]}
        answers={[
          <>The editor of a newspaper.</>,
          <>Yours faithfully, with the writer's name.</>,
          <>Which article you are reacting to and your view.</>,
          <>They make the view convincing.</>,
        ]}
      />,
    ),
  },
];
