import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ModelText, PartsList } from '../../_shared/ModelText';

export const learnSteps: LearnStep[] = [
  {
    title: 'What is a letter of application?',
    content: (
      <div className="space-y-4">
        <Rule>A letter of application is a formal letter in which you ask for a post, a place or a bursary and explain why you are suitable. It is one of the formal letters that CAPS asks you to practise.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>It has an <strong>introduction</strong>, a <strong>body</strong> and a <strong>conclusion</strong>.</li>
          <li>It is written to a reader you may not know, so the register is formal.</li>
          <li>It is clear and straightforward, concise and logical, so that the reader understands and responds positively.</li>
        </ul>
        <Mistake>A letter of application is not a friendly letter and not a CV. Do not use slang, and do not list everything you have ever done. Choose what suits the post.</Mistake>
      </div>
    ),
  },
  {
    title: 'A model letter, part by part',
    content: (
      <div className="space-y-4">
        <ModelText label="Model letter of application" note="An original model written for this lesson; the writer, the library and the street are invented.">
          <p>14 Lavender Street<br />Kimberley<br />8301</p>
          <p>3 September</p>
          <p>The Librarian<br />Karoo Community Library<br />20 Church Street<br />Kimberley</p>
          <p>Dear Sir or Madam</p>
          <p><strong><u>Application for the post of holiday library assistant</u></strong></p>
          <p>I am writing to apply for the post of holiday library assistant, which was advertised on the library notice board.</p>
          <p>I am in Grade 9 at Hillcrest High School and I have been a library monitor for two years. I shelve books, help younger learners find them and keep the library tidy. I am reliable, and my teachers say that I work well without supervision.</p>
          <p>My CV is attached. I am available for an interview at any time after school. Thank you for considering my application.</p>
          <p>Yours faithfully<br />Naidoo A.</p>
        </ModelText>
      </div>
    ),
  },
  {
    title: 'The layout of a formal letter',
    content: (
      <div className="space-y-4">
        <Rule>A formal letter has a fixed layout. Learn the order.</Rule>
        <PartsList
          parts={[
            { name: 'Writer’s address and date', what: 'at the top right or left.' },
            { name: 'Recipient’s address', what: 'a formal letter has two addresses: the writer’s and the recipient’s.' },
            { name: 'Salutation', what: 'a formal greeting after the recipient’s address, such as Dear Sir or Madam.' },
            { name: 'Subject line', what: 'after the salutation, underlined, saying what the letter is about.' },
            { name: 'Body', what: 'the introduction, the body and the conclusion, in short paragraphs.' },
            { name: 'Closing', what: 'Yours faithfully (no name used) or Yours sincerely (name used), then the writer’s surname and initials.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'What goes in each paragraph',
    content: (
      <div className="space-y-4">
        <Rule>Plan three jobs for your paragraphs: say what you want, show why you suit it, and make the next step easy.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Introduction:</strong> the post you want and where you saw it advertised.</li>
          <li><strong>Body:</strong> your qualifications, experience and qualities that suit the post.</li>
          <li><strong>Conclusion:</strong> say that your CV is attached, that you are available for an interview, and thank the reader.</li>
        </ul>
        <Worked
          title="Weak and strong body paragraphs"
          steps={[
            <><strong>Weak:</strong> &ldquo;I just really, really need a job and I will do anything.&rdquo; This begs and does not say why the writer suits the post.</>,
            <><strong>Strong:</strong> &ldquo;I have been a library monitor for two years and I know how to shelve books.&rdquo; This gives evidence that fits the post.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Language and process',
    content: (
      <div className="space-y-4">
        <Rule>Write in direct, simple and formal language. The reader should understand what you want at once.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Use a formal register: no slang, no jokes and no text-message spelling.</li>
          <li>Keep sentences clear and use conjunctions such as <em>and</em> and <em>because</em> to link ideas.</li>
          <li>Follow the writing process: plan, draft, revise, edit, proof-read and present.</li>
          <li>Check names, addresses and spelling. A careless letter makes a poor first impression.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>What are the three main parts of a letter of application?</>,
          <>Whose addresses appear in a formal letter?</>,
          <>Where does the subject line go?</>,
          <>What should the conclusion of a letter of application mention?</>,
        ]}
        answers={[
          <>An introduction, a body and a conclusion.</>,
          <>Two: the writer&rsquo;s address and the recipient&rsquo;s address.</>,
          <>After the salutation, underlined.</>,
          <>That the CV is attached, that the writer is available for an interview, and thanks to the reader.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is the purpose of a letter of application?',
    options: ['To tell a friend about your weekend', 'To record what happened at a meeting', 'To share out the estate of a close relative', 'To ask for a post and show you suit it'],
    answer: 'To ask for a post and show you suit it',
    explanation: 'A letter of application asks for a post, a place or a bursary and explains why the writer is suitable.',
  },
  {
    prompt: 'What register is used in a letter of application?',
    options: ['Slang', 'Text-message', 'Joking', 'Formal'],
    answer: 'Formal',
    explanation: 'A formal letter reflects a formal language register: no slang, jokes or text-message spelling.',
  },
  {
    prompt: 'How many addresses does a formal letter contain?',
    options: ['One', 'Three', 'Two', 'None'],
    answer: 'Two',
    explanation: 'A formal letter contains two addresses: the writer\'s and the recipient\'s.',
  },
  {
    prompt: 'Where does the salutation go in a formal letter?',
    options: ['Before the writer\'s address line', 'After the closing and the name', 'Under the date and the place', 'After the recipient\'s address'],
    answer: 'After the recipient\'s address',
    explanation: 'A formal salutation follows the recipient\'s address.',
  },
  {
    prompt: 'Where does the subject line go, and how is it shown?',
    options: ['Before the date, in bold capitals', 'After the closing, in italic type', 'At the very end, in brackets', 'After the salutation, underlined'],
    answer: 'After the salutation, underlined',
    explanation: 'The subject line follows the salutation and is underlined.',
  },
  {
    prompt: 'What does the introduction of a letter of application say?',
    options: ['The post and where you saw it', 'Why you left your last school', 'What you ate before the interview', 'Who your referees will be'],
    answer: 'The post and where you saw it',
    explanation: 'The introduction names the post and says where it was advertised.',
  },
  {
    prompt: 'What belongs in the body of a letter of application?',
    options: ['Your qualifications and experience', 'A long story about your family', 'A list of your hobbies in detail', 'Complaints about the advertisement'],
    answer: 'Your qualifications and experience',
    explanation: 'The body shows why you suit the post, using qualifications, experience and qualities.',
  },
  {
    prompt: 'What should the conclusion mention?',
    options: ['That the CV is attached, with thanks', 'That the post might be too hard for you', 'That you will phone the office each day', 'That you may apply for another post too'],
    answer: 'That the CV is attached, with thanks',
    explanation: 'The conclusion says that the CV is attached, that the writer is available for an interview, and thanks the reader.',
  },
  {
    prompt: 'Which sentence suits the body of a letter of application?',
    options: ['I just really, really need a job.', 'I was a library monitor for two years.', 'Hey, give me the job, okay?', 'I will do anything at all, so please say yes.'],
    answer: 'I was a library monitor for two years.',
    explanation: 'It gives evidence that fits the post. The others beg or use informal language.',
  },
  {
    prompt: 'Which sentence is unsuitable for a letter of application?',
    options: ['I am available for an interview.', 'Hey, give me the job, okay?', 'Thank you for considering my application.', 'My CV is attached to this letter.'],
    answer: 'Hey, give me the job, okay?',
    explanation: 'It is informal and demanding. A formal letter keeps a polite, formal register.',
  },
  {
    prompt: 'A letter begins "Dear Sir or Madam". Which closing is correct?',
    options: ['Yours sincerely', 'Cheers and thanks', 'Yours faithfully', 'Love and best wishes'],
    answer: 'Yours faithfully',
    explanation: 'When the receiver\'s name is not used, the formal closing is "Yours faithfully".',
  },
  {
    prompt: 'How should the writer\'s name appear after the closing?',
    options: ['Surname and initials', 'The first name alone', 'A friendly nickname', 'No name after closing'],
    answer: 'Surname and initials',
    explanation: 'CAPS describes a formal conclusion followed by the writer\'s surname and initials, for example "Naidoo A."',
  },
  {
    prompt: 'Why should the language of the letter be clear and concise?',
    options: ['So the letter fits into an envelope', 'So the writer can hide mistakes', 'So the reader understands at once', 'So the letter looks like a poem'],
    answer: 'So the reader understands at once',
    explanation: 'The intended audience should understand what is communicated, so that the response is positive.',
  },
  {
    prompt: 'Which step of the writing process comes after drafting?',
    options: ['Planning', 'Revising', 'Presenting', 'Posting'],
    answer: 'Revising',
    explanation: 'The writing process is planning, drafting, revising, editing, proof-reading and presenting.',
  },
];
