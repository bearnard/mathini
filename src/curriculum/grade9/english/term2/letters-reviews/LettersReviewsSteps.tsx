import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { LetterLayout } from '../../../../../components/diagrams/english/Grade9Pictures';
import { REGISTER_PAIRS, closingFor } from '../../../../../components/diagrams/english/grade9';

// The closings and register pairs come from the tested helpers in grade9.ts (grade9.test.ts).
const named = closingFor('Dear Mr Dlamini,');
const unknown = closingFor('Dear Sir or Madam,');
const [r1, r2] = REGISTER_PAIRS;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The friendly letter',
    content: slide(
      <>
        <Rule>A friendly letter is written to someone you know. The tone is warm, personal and conversational, and the layout is simple.</Rule>
        <LetterLayout kind="friendly" />
        <Worked
          title="Open a letter to a friend"
          steps={[
            <>Write your address and the date at the top.</>,
            <>Greet by first name: <strong>Dear Thandi,</strong></>,
            <>Chat in the body: ask how she is, share your news, use everyday words.</>,
            <>Close warmly, for example <strong>Your friend,</strong> and sign with your first name.</>,
          ]}
        />
        <Mistake>Writing a friendly letter as if it were a business letter, or making it so short it says nothing. A friend should hear your voice and receive real detail.</Mistake>
      </>,
    ),
  },
  {
    title: 'The formal letter',
    content: slide(
      <>
        <Rule>A formal letter has the sender&rsquo;s address, the date, the recipient&rsquo;s address, a proper greeting, a clear body and a formal closing.</Rule>
        <LetterLayout kind="formal" />
        <Worked
          title="Greet and close the letter"
          steps={[
            <>To a named person, greet with their title and surname: <strong>Dear Mr Dlamini,</strong></>,
            <>To an unknown person, use <strong>Dear Sir or Madam,</strong></>,
            <>Close a letter to a named person with <strong>{named}</strong> then your full name.</>,
            <>If you began &ldquo;Dear Sir or Madam&rdquo;, the usual closing is {unknown.replace(",", ".")}</>,
          ]}
        />
        <Mistake>Using &ldquo;Hey!&rdquo;, &ldquo;Hi there,&rdquo; or &ldquo;Bye!&rdquo; in a formal letter. Formal greetings and closings are part of the layout, not extras.</Mistake>
      </>,
    ),
  },
  {
    title: 'Register: matching your tone',
    content: slide(
      <>
        <Rule>Register is the level of formality that suits the situation and the audience. Choose it before you write.</Rule>
        <Worked
          title="Move from informal to formal"
          steps={[
            <>Informal: &ldquo;{r1.informal}&rdquo;</>,
            <>Remove slang and short forms (&ldquo;u&rdquo;, &ldquo;asap&rdquo;) and add polite words (&ldquo;please&rdquo;, &ldquo;could&rdquo;).</>,
            <>Formal: &ldquo;{r1.formal}&rdquo;</>,
            <>Another pair: &ldquo;{r2.informal}&rdquo; becomes &ldquo;{r2.formal}&rdquo;</>,
          ]}
        />
        <Mistake>Thinking a friendly teacher allows a casual letter. A letter to a teacher still uses a respectful, formal register, because the relationship at school calls for respect and professionalism.</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing a review',
    content: slide(
      <>
        <Rule>A review says what is being reviewed, judges it against criteria, and ends with a recommendation. It is an opinion supported by reasons, not a retelling.</Rule>
        <Worked
          title="A review of a school canteen"
          steps={[
            <><strong>What:</strong> &ldquo;The school canteen at our school.&rdquo;</>,
            <><strong>Criterion:</strong> &ldquo;The service was quick and accurate compared to other canteens.&rdquo; This is specific and can be judged.</>,
            <><strong>Another criterion:</strong> prices, variety and cleanliness, each with an example.</>,
            <><strong>Recommendation:</strong> say who should use it and why.</>,
          ]}
        />
        <Mistake>Writing &ldquo;I liked it a lot&rdquo; or &ldquo;It was nice&rdquo;. These are feelings, not criteria. A reader needs a reason such as speed, price or quality.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Name three things a formal letter has at the top before the greeting.</>} answer={<>The sender&rsquo;s address, the date and the recipient&rsquo;s address.</>} />
        <Check question={<>How do you close a formal letter to Mr Dlamini?</>} answer={<>{named}</>} />
        <Check question={<>Rewrite &ldquo;Hi! Can u send me the forms asap?&rdquo; in a formal register.</>} answer={<>{r1.formal}</>} />
        <Check question={<>Which is a criterion: &ldquo;I liked it&rdquo; or &ldquo;The service was quick&rdquo;?</>} answer={<>&ldquo;The service was quick&rdquo; gives a reason that can be judged.</>} />
      </>,
    ),
  },
];

