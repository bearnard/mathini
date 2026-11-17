import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ModelText, PartsList } from '../../_shared/ModelText';

export const learnSteps: LearnStep[] = [
  {
    title: 'What is an e-mail?',
    content: (
      <div className="space-y-4">
        <Rule>An e-mail is a message sent electronically. Its purpose is to inform and to maintain a relationship, whether with a friend, a teacher or an organisation.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>It follows a correct format, so that the reader finds the information at once.</li>
          <li>It has a clear purpose, with a main idea and supporting ideas.</li>
          <li>Its register depends on the reader: formal for a principal or an employer, informal for a friend.</li>
        </ul>
        <Mistake>An e-mail to a teacher or an employer is not a text message. Do not use slang or text-message spelling, and do not leave the subject line empty.</Mistake>
      </div>
    ),
  },
  {
    title: 'A model e-mail, part by part',
    content: (
      <div className="space-y-4">
        <ModelText label="Model e-mail" note="An original model written for this lesson; the people and addresses are invented.">
          <p><strong>To:</strong> mrs.dlamini@hillcrest.example.co.za</p>
          <p><strong>CC:</strong> head.of.grade9@hillcrest.example.co.za</p>
          <p><strong>Subject:</strong> Request to use the hall for a choir practice</p>
          <p>Dear Mrs Dlamini</p>
          <p>I am writing on behalf of the Grade 9 choir to ask if we may use the school hall on Thursday afternoon for a practice before the concert.</p>
          <p>We would need the hall from 14:30 to 15:30. A teacher will supervise us.</p>
          <p>Thank you for considering our request.</p>
          <p>Kind regards<br />Aisha Naidoo<br />Cell: 082 000 0000</p>
        </ModelText>
        <PartsList
          parts={[
            { name: 'To', what: 'the address of the person you write to.' },
            { name: 'CC', what: 'people whose attention you wish to call to the e-mail.' },
            { name: 'Subject', what: 'a summary of the content of the e-mail.' },
            { name: 'Message', what: 'the greeting, the main idea, the supporting details and a polite close.' },
            { name: 'Sender’s name and signature', what: 'your name, and if you wish other contact details at the end.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The e-mail address',
    content: (
      <div className="space-y-4">
        <Rule>An e-mail address has a name, the @ sign, the server and the country of the server.</Rule>
        <Worked
          title="Reading an address"
          steps={[
            <>Take the address <strong>moloi.q@webmail.co.za</strong>.</>,
            <><strong>moloi.q</strong> is the name of the person, <strong>webmail</strong> is the server, and <strong>.za</strong> is the country (South Africa).</>,
            <>The sender&rsquo;s address shows automatically when the e-mail is received, so the message does not repeat it.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Register and language',
    content: (
      <div className="space-y-4">
        <Rule>Match your language to your reader and your purpose.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700"><strong className="text-emerald-700">Formal (a teacher, a principal)</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>&ldquo;Dear Mrs Dlamini&rdquo;.</li><li>Full sentences and polite words.</li><li>&ldquo;Kind regards&rdquo; at the end.</li></ul></div>
          <div className="rounded-xl bg-amber-50 p-4 text-sm text-slate-700"><strong className="text-amber-700">Informal (a friend)</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>&ldquo;Hi Zinzi&rdquo;.</li><li>Lively, simple language.</li><li>&ldquo;Chat soon&rdquo; at the end.</li></ul></div>
        </div>
        <p className="text-left text-sm text-slate-600">Keep sentences in a logical order, use conjunctions to link ideas, and vary your sentence types and lengths.</p>
      </div>
    ),
  },
  {
    title: 'Writing it with the process',
    content: (
      <div className="space-y-4">
        <Rule>Write an e-mail with the writing process: plan, draft, revise, edit, proof-read and present.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Plan: who is the reader, what is the purpose and what are the main points?</li>
          <li>Draft: write the subject line last, as a summary of the message.</li>
          <li>Revise and edit: check the order of the sentences and the register.</li>
          <li>Proof-read: check the address, the spelling and the attachment before you send it.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Why do people send e-mails?</>,
          <>What does the subject line contain?</>,
          <>What does CC mean in practice?</>,
          <>How should you write to a principal: formally or informally?</>,
        ]}
        answers={[
          <>To inform and to maintain a relationship.</>,
          <>A summary of the content of the e-mail.</>,
          <>It sends a copy to people whose attention you wish to call to the e-mail.</>,
          <>A formal register, with a greeting such as Dear Mrs Dlamini.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is the purpose of an e-mail?',
    options: ['To inform and maintain a relationship', 'To set out the rules of an organisation', 'To record a day in a private diary', 'To share out an estate after death'],
    answer: 'To inform and maintain a relationship',
    explanation: 'An e-mail informs and helps to maintain a relationship with the reader.',
  },
  {
    prompt: 'What does the subject line of an e-mail contain?',
    options: ['A summary of the content', 'The sender\'s home address', 'The reader\'s school marks', 'A long list of greetings'],
    answer: 'A summary of the content',
    explanation: 'The subject is a summary of the content of the e-mail.',
  },
  {
    prompt: 'What is the CC line used for?',
    options: ['To hide the message from the main reader', 'To write the sender\'s name there', 'To call other people\'s attention to it', 'To attach a photograph or file'],
    answer: 'To call other people\'s attention to it',
    explanation: 'CC is for people whose attention you wish to call to the e-mail.',
  },
  {
    prompt: 'In the address moloi.q@webmail.co.za, what is "webmail"?',
    options: ['The person\'s name', 'The country', 'The subject', 'The server'],
    answer: 'The server',
    explanation: 'The address has the name, the @ sign, the server (webmail) and the country (.za).',
  },
  {
    prompt: 'Which part of the address a.nkosi@mailbox.co.za shows the country of the server?',
    options: ['The start "a.nkosi"', 'The ending ".za"', 'The middle "mailbox"', 'The sign "@"'],
    answer: 'The ending ".za"',
    explanation: 'The last part of an address shows the country of the server: .za is South Africa.',
  },
  {
    prompt: 'Why is the sender\'s address not written again in the message?',
    options: ['It is not needed in a message', 'It shows up on arrival', 'It is hidden by the CC line', 'It is part of the subject line'],
    answer: 'It shows up on arrival',
    explanation: 'The sender\'s address reflects automatically. The sender may add other contact details as a signature.',
  },
  {
    prompt: 'What is a signature at the end of an e-mail?',
    options: ['Other details of the sender', 'The date on which it is sent', 'The name of the mail server', 'A copy of the whole subject line'],
    answer: 'Other details of the sender',
    explanation: 'The sender may choose to give other contact details at the end. This is called a signature.',
  },
  {
    prompt: 'Which greeting suits an e-mail to a principal?',
    options: ['Hi Mrs D, how are you', 'Yo, madam, how is it', 'Dear Mrs Dlamini', 'Hey you, hello there'],
    answer: 'Dear Mrs Dlamini',
    explanation: 'A formal greeting with a name suits a reader such as a principal.',
  },
  {
    prompt: 'Which closing suits a formal e-mail?',
    options: ['Chat soon', 'Cheers mate', 'Kind regards', 'See you later, mate'],
    answer: 'Kind regards',
    explanation: 'A formal e-mail ends politely, for example with "Kind regards".',
  },
  {
    prompt: 'Which sentence suits an e-mail to a teacher?',
    options: ['May we please use the hall on Thursday?', 'Can u gimme the hall on thurs or what ok?', 'Gimme the hall on Thursday, okay?', 'We want the hall now, so open it!'],
    answer: 'May we please use the hall on Thursday?',
    explanation: 'It is polite, complete and formal. The others use slang, text-message spelling or demands.',
  },
  {
    prompt: 'Which sentence suits an informal e-mail to a friend?',
    options: ['Dear Sir or Madam, I am writing to apply.', 'Yours faithfully, A. Naidoo', 'Hi Zinzi, guess what happened today!', 'The meeting is now closed.'],
    answer: 'Hi Zinzi, guess what happened today!',
    explanation: 'It is lively and friendly. The others suit formal letters or meetings.',
  },
  {
    prompt: 'When is the subject line best written?',
    options: ['Before choosing a reader', 'Left out, as it is not needed', 'After drafting, as a summary', 'After sending the e-mail'],
    answer: 'After drafting, as a summary',
    explanation: 'The subject line summarises the message, so it is easy to write once the message is drafted.',
  },
  {
    prompt: 'What should you check when you proof-read an e-mail?',
    options: ['The colour of the screen display', 'The speed of the internet link', 'The length of the server name used', 'The address and the spelling'],
    answer: 'The address and the spelling',
    explanation: 'Proof-reading checks the address, the spelling and any attachment before the e-mail is sent.',
  },
  {
    prompt: 'Why is an e-mail to an employer not written like a text message?',
    options: ['Employers do not read e-mail at work', 'A formal register suits the reader', 'Text messages are free of cost to send', 'Spelling is not checked in an e-mail'],
    answer: 'A formal register suits the reader',
    explanation: 'The register must suit the reader. An employer expects formal language, not slang or text-message spelling.',
  },
];
