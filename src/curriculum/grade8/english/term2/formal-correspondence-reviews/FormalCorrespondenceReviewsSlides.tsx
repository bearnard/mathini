import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ClueCards, LetterLayout } from '../../../../../components/diagrams/english/EnglishLayoutPictures';
import { letterFraming } from '../../../../../components/diagrams/english/lessonSkills';

// Greetings and closings come from lessonSkills.ts (tested).
const unknown = letterFraming();
const known = letterFraming('Dlamini');

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Choose the format for the audience',
    content: slide(
      <>
        <Rule>Audience and purpose decide the text type. Feedback to a school principal needs a formal letter. A note to a cousin can be an informal letter.</Rule>
        <ClueCards
          cards={[
            { title: 'Formal letter', clue: 'Principal, company, official: respectful and precise.', color: '#818cf8' },
            { title: 'Informal letter', clue: 'Friend or family: warm and relaxed.', color: '#34d399' },
            { title: 'Email', clue: 'Quick and written: needs a clear subject line.', color: '#fbbf24' },
            { title: 'Review', clue: 'Judges a text or performance, with reasons.', color: '#fb7185' },
          ]}
          aria="Four cards. Formal letter: for a principal, company or official. Informal letter: for friends and family. Email: quick, with a clear subject line. Review: judges a text or performance with reasons."
        />
        <Worked
          title="Pick the text type"
          steps={[
            <>Situation: you want to give feedback about the school library to the principal.</>,
            <>Audience: a person in authority. Purpose: to be taken seriously.</>,
            <>So choose a <strong>formal letter</strong>.</>,
          ]}
        />
        <Mistake>Writing to a principal the way you text a friend. Audience awareness guides tone, detail and format choices.</Mistake>
      </>,
    ),
  },
  {
    title: 'Parts of a formal letter',
    content: slide(
      <>
        <Rule>A formal letter has your address and the date, the recipient, a greeting, the body, a closing and your name. The greeting and the closing must match.</Rule>
        <LetterLayout aria="A letter drawn as blocks, top to bottom: your address and date at the top right, the recipient, a greeting, the body paragraphs, a closing and your name." />
        <Worked
          title="Match greeting and closing"
          steps={[
            <>Name unknown: <strong>{unknown.salutation}</strong> ends with <strong>{unknown.closing}</strong></>,
            <>Name known (Mr Dlamini): <strong>{known.salutation}</strong> ends with <strong>{known.closing}</strong></>,
          ]}
        />
        <Mistake>Mixing the pairs, such as &quot;Dear Sir or Madam&quot; with &quot;Yours sincerely&quot;. When the recipient is unknown, close with &quot;{unknown.closing}&quot;</Mistake>
      </>,
    ),
  },
  {
    title: 'Register: choose the right style',
    content: slide(
      <>
        <Rule>Register is the style of language. Formal writing is respectful and precise. Semi-formal writing can be warmer but is still controlled.</Rule>
        <Worked
          title="Raise the register"
          steps={[
            <>Informal: <em>Hey, send me a reply asap!</em></>,
            <>Remove slang and the bossy tone.</>,
            <>Formal: <strong>I would appreciate your reply at your earliest convenience.</strong></>,
          ]}
        />
        <Mistake>Using slang, shortened words or exclamation marks in a formal letter. Keep the language polite and exact.</Mistake>
      </>,
    ),
  },
  {
    title: 'Email subject lines',
    content: slide(
      <>
        <Rule>A clear subject line summarises the purpose of the email, so the reader knows what it is about before opening it.</Rule>
        <Worked
          title="Write the subject"
          steps={[
            <>Email: asking the school secretary to book the hall for choir practice.</>,
            <>Weak subject: <em>Hi</em> or <em>Question</em>. These say nothing.</>,
            <>Clear subject: <strong>Request to book the school hall for choir practice</strong>.</>,
          ]}
        />
        <Mistake>Leaving the subject line empty or vague. A reader may delay or ignore an email that does not say why it was sent.</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing a balanced review',
    content: slide(
      <>
        <Rule>A review evaluates a text or performance with reasons. Support each judgement with evidence: specific examples from the text or performance. Make your recommendation match your reasons.</Rule>
        <Worked
          title="Review a school play (invented)"
          steps={[
            <>Judgement: <em>The lead actor was convincing.</em></>,
            <>Evidence: <em>She spoke so softly in the sad scene that the whole hall went quiet.</em></>,
            <>Balance: <em>The costumes, however, were hard to see from the back.</em></>,
            <>Recommendation: <em>Worth seeing, but sit near the front.</em> It fits the reasons given.</>,
          ]}
        />
        <Mistake>Giving only opinions, such as &quot;It was good&quot;. A review needs examples, and a recommendation that agrees with the reasons.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which text type suits feedback to a school principal?</li>
            <li>Which closing goes with &quot;Dear Sir or Madam&quot;?</li>
            <li>Rewrite &quot;Reply asap!&quot; in formal register.</li>
            <li>What must a review give besides an opinion?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A formal letter.</li>
            <li>{unknown.closing.replace(',', '')}</li>
            <li>For example: I would appreciate your reply at your earliest convenience.</li>
            <li>Evidence: specific examples from the text or performance, and a recommendation that matches.</li>
          </ol>
        }
      />,
    ),
  },
];

