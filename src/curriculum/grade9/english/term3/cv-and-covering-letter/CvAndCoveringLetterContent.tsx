import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ModelText, PartsList } from '../../_shared/ModelText';

export const learnSteps: LearnStep[] = [
  {
    title: 'What is a CV?',
    content: (
      <div className="space-y-4">
        <Rule>A curriculum vitae (CV) presents you in a document to the world. It must make a strong first impression and address the post that you want.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Present information <strong>clearly, objectively and concisely</strong>.</li>
          <li>Choose what to include: a CV for a particular job speaks mainly of your involvement in that area.</li>
          <li>A CV goes with a <strong>covering letter</strong>, and the two must agree.</li>
        </ul>
        <Mistake>A CV is not a diary or an essay about yourself. Do not tell a story. List the facts that matter for the post, and make sure each one is true.</Mistake>
      </div>
    ),
  },
  {
    title: 'A model CV, part by part',
    content: (
      <div className="space-y-4">
        <ModelText label="Model CV" note="An original model written for this lesson; the person, school and shop are invented.">
          <p><strong>Curriculum vitae of Lerato Mahlangu</strong></p>
          <p><strong>Post applied for:</strong> Weekend assistant, Kopano Books</p>
          <p><strong>Personal details:</strong> Lerato Mahlangu; 8 Aloe Road, Kimberley; cell 082 000 0000; lerato@example.com</p>
          <p><strong>Qualifications:</strong> Grade 9, Hillcrest High School. Grade 8 final report: English 68%, Mathematics 61%.</p>
          <p><strong>Experience:</strong> Sold cakes at the school fete; library monitor for two years.</p>
          <p><strong>Referees:</strong> Mrs N. Dlamini, class teacher, Hillcrest High School, 053 000 0000</p>
        </ModelText>
        <PartsList
          parts={[
            { name: 'Post applied for', what: 'so the CV addresses the job.' },
            { name: 'Personal details', what: 'name, address and contact details.' },
            { name: 'Formal qualifications', what: 'school and results.' },
            { name: 'Work experience', what: 'if applicable; any relevant duties or responsibilities.' },
            { name: 'Referees', what: 'people who can speak about you, with their contact details.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Language and layout of a CV',
    content: (
      <div className="space-y-4">
        <Rule>Use headings, short lines and neutral language so that the reader finds what they need quickly.</Rule>
        <Worked
          title="Weak and strong"
          steps={[
            <><strong>Weak:</strong> &ldquo;I am the best person ever and everyone loves me.&rdquo; This is a boast, not a fact.</>,
            <><strong>Strong:</strong> &ldquo;Library monitor for two years; sold cakes at the school fete.&rdquo; This is clear and can be checked.</>,
            <>Keep it to one or two pages, use clear headings, and check spelling and numbers, because mistakes spoil the first impression.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The covering letter',
    content: (
      <div className="space-y-4">
        <Rule>A covering letter goes with the CV. It is a short formal letter that says which post you want, why you suit it and that your CV is attached.</Rule>
        <ModelText label="Model covering letter" note="An original model written for this lesson.">
          <p>8 Aloe Road<br />Kimberley<br />8301</p>
          <p>12 May</p>
          <p>The Manager<br />Kopano Books<br />12 Main Road<br />Kimberley</p>
          <p>Dear Sir or Madam</p>
          <p><strong>Application for the post of weekend assistant</strong></p>
          <p>I am applying for the post of weekend assistant advertised in the shop window. I enjoy reading and I have served customers at the school fete.</p>
          <p>My CV is attached. I am available for an interview at any time after school.</p>
          <p>Yours faithfully<br />Lerato Mahlangu</p>
        </ModelText>
      </div>
    ),
  },
  {
    title: 'Layout and process of the covering letter',
    content: (
      <div className="space-y-4">
        <Rule>The covering letter has the layout of a formal letter and is written for a particular reader and purpose.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Sender&rsquo;s address, then the date, then the receiver&rsquo;s address.</li>
          <li>A salutation and a subject line saying which post you want.</li>
          <li>Short paragraphs: the post you want, why you suit it, and that your CV is attached.</li>
          <li>With &ldquo;Dear Sir or Madam&rdquo; end with &ldquo;Yours faithfully&rdquo;. With a name, such as &ldquo;Dear Mr Naidoo&rdquo;, end with &ldquo;Yours sincerely&rdquo;.</li>
          <li>Use the writing process: plan, draft, revise, edit, proof-read and present.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Name three things that a CV should provide.</>,
          <>What should a CV address?</>,
          <>What should a covering letter tell the reader?</>,
          <>How does a letter that begins &ldquo;Dear Sir or Madam&rdquo; end?</>,
        ]}
        answers={[
          <>Any three of: personal details, formal qualifications, work experience, referees.</>,
          <>The post for which the candidate seeks employment.</>,
          <>That it is attached, and why the writer suits the post.</>,
          <>With &ldquo;Yours faithfully&rdquo;.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is the purpose of a CV?',
    options: ['To present you to an employer', 'To tell a story about a holiday', 'To set the rules of a youth club', 'To list who inherits an estate'],
    answer: 'To present you to an employer',
    explanation: 'A CV presents you in a document to the world and must make a strong first impression.',
  },
  {
    prompt: 'Which item belongs in a CV?',
    options: ['A will', 'Referees', 'A rule list', 'A diary entry'],
    answer: 'Referees',
    explanation: 'A CV provides personal details, formal qualifications, work experience (if applicable) and referees.',
  },
  {
    prompt: 'What is a referee?',
    options: ['A person who checks your spelling', 'A person who signs your letter', 'A person who can speak about you', 'A person who reads your CV aloud'],
    answer: 'A person who can speak about you',
    explanation: 'Referees are people who can speak about your character or work. Their contact details are given in the CV.',
  },
  {
    prompt: 'How should information be presented in a CV?',
    options: ['Dramatically, loudly and at length', 'Emotionally, vaguely and in detail', 'Clearly, objectively and concisely', 'Casually, humorously and in slang'],
    answer: 'Clearly, objectively and concisely',
    explanation: 'A CV must present information clearly, objectively and concisely.',
  },
  {
    prompt: 'What should a CV for a particular job address?',
    options: ['The home of the employer', 'The post being applied for', 'The weather on the day', 'The writer\'s favourite food'],
    answer: 'The post being applied for',
    explanation: 'Every CV must address a situation: a CV for a job speaks mainly of the writer\'s involvement in that area.',
  },
  {
    prompt: 'Which entry is best for a CV?',
    options: ['The very best person in our town', 'Everyone in class loves me', 'I am amazing at each subject', 'Library monitor for two years'],
    answer: 'Library monitor for two years',
    explanation: 'It is a clear, checkable fact. The others are boasts that cannot be checked.',
  },
  {
    prompt: 'Why must the facts in a CV be true?',
    options: ['Employers dislike long documents', 'It makes the page look neat', 'An employer may check them', 'It saves time in typing'],
    answer: 'An employer may check them',
    explanation: 'Employers check qualifications and referees, and false information can cost a person the job.',
  },
  {
    prompt: 'What does a covering letter do?',
    options: ['Replaces the CV completely', 'Introduces the CV and writer', 'Lists the estate of the writer', 'Describes a day in a diary'],
    answer: 'Introduces the CV and writer',
    explanation: 'A covering letter goes with the CV, says which post is wanted, why the writer suits it and that the CV is attached.',
  },
  {
    prompt: 'Which part of a covering letter tells the reader which post is wanted?',
    options: ['The subject line', 'The receiver\'s address', 'The date', 'The closing'],
    answer: 'The subject line',
    explanation: 'The subject line, for example "Application for the post of weekend assistant", states the post.',
  },
  {
    prompt: 'A letter begins "Dear Sir or Madam". How should it end?',
    options: ['Yours sincerely', 'Love and best wishes', 'Yours faithfully', 'Cheers and thanks'],
    answer: 'Yours faithfully',
    explanation: 'When the reader\'s name is not used, the formal ending is "Yours faithfully".',
  },
  {
    prompt: 'A letter begins "Dear Mr Naidoo". How should it end?',
    options: ['Yours faithfully', 'Best wishes always', 'Yours sincerely', 'See you soon'],
    answer: 'Yours sincerely',
    explanation: 'When the reader is addressed by name, the formal ending is "Yours sincerely".',
  },
  {
    prompt: 'Which order of address and date is correct in a formal covering letter?',
    options: ['Date, receiver\'s address, sender\'s address', 'Receiver\'s address, date, sender\'s address', 'Sender\'s address, date, receiver\'s address', 'Signature, date, sender\'s address'],
    answer: 'Sender\'s address, date, receiver\'s address',
    explanation: 'A formal letter shows the sender\'s address, then the date, then the receiver\'s address.',
  },
  {
    prompt: 'Which sentence belongs in a covering letter?',
    options: ['I leave my house to my daughter.', 'My CV is attached to this letter.', 'The meeting is now closed for today.', 'Dear Diary, today was very long.'],
    answer: 'My CV is attached to this letter.',
    explanation: 'A covering letter tells the reader that the CV is attached.',
  },
  {
    prompt: 'Which step of the writing process comes before drafting a covering letter?',
    options: ['Proof-reading', 'Planning', 'Presenting', 'Editing'],
    answer: 'Planning',
    explanation: 'The writing process is planning, drafting, revising, editing, proof-reading and presenting.',
  },
];
