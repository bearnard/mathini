import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { LetterLayout } from '../../../../../components/diagrams/english/EnglishPictures';

export const learnSteps: LearnStep[] = [
  {
    title: 'Transactional writing: purpose first',
    content: (
      <div className="space-y-4">
        <Rule>Transactional texts are functional: they do a job. Who you write to and why decides the format and the register.</Rule>
        <Worked
          title="In Paper 3"
          steps={[
            <>Section B has two transactional texts, each marked out of 25 and each 180 to 200 words long.</>,
            <>Marks go to content, planning and format (60%), and language, style and editing (40%).</>,
            <>Before you write, ask: who is the reader, what do I want from them, and which format fits?</>,
          ]}
        />
        <p className="text-left text-sm text-slate-600">This lesson covers friendly and formal letters, the curriculum vitae (CV) and covering letter, the agenda and minutes of a meeting, and the obituary.</p>
      </div>
    ),
  },
  {
    title: 'The friendly letter',
    content: (
      <div className="space-y-4">
        <Rule>A friendly letter uses an informal or semi-formal register, lively simple language and a clear order: introduction, body, conclusion.</Rule>
        <LetterLayout kind="friendly" />
        <ul className="space-y-1 text-left text-sm text-slate-700">
          <li>Write only <strong>one</strong> address, yours, with the date below it.</li>
          <li>Open with an informal or semi-formal greeting, for example <em>Dear Naledi,</em></li>
          <li>Close in an informal or semi-formal way, for example <em>Lots of love</em>, and sign with your <strong>first name</strong>.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'The formal letter',
    content: (
      <div className="space-y-4">
        <Rule>A formal letter is clear, straightforward and to the point, in a formal register. It ends with a formal closing and your surname and initials.</Rule>
        <LetterLayout kind="formal" />
        <Worked
          title="Choose the closing"
          steps={[
            <>You do not know the name of the person: begin <em>Dear Sir or Madam</em> and end <em>Yours faithfully</em>.</>,
            <>You know the name: begin <em>Dear Mr Dlamini</em> and end <em>Yours sincerely</em>.</>,
            <>Under the closing, write your surname and initials, for example <em>Mokoena, P.</em></>,
          ]}
        />
        <Mistake>Do not use slang, abbreviations or an emotional tone in a request or complaint. The content is what matters most: state exactly what you need and by when.</Mistake>
      </div>
    ),
  },
  {
    title: 'The CV and covering letter',
    content: (
      <div className="space-y-4">
        <Rule>A CV presents you clearly, objectively and briefly. The covering letter introduces it and addresses the post you want.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4 text-sm text-slate-700">
            <strong className="text-indigo-700">A CV gives</strong>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>personal details</li>
              <li>formal qualifications</li>
              <li>work experience, if you have any</li>
              <li>referees</li>
            </ul>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700">
            <strong className="text-emerald-700">A covering letter</strong>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>names the post you are applying for</li>
              <li>says briefly why you suit it</li>
              <li>refers the reader to your CV</li>
              <li>is a formal letter, so it follows formal layout</li>
            </ul>
          </div>
        </div>
        <Mistake>A CV is not a story of your life. Include only what supports your application for this post, and keep each point short.</Mistake>
      </div>
    ),
  },
  {
    title: 'Agenda, minutes and obituary',
    content: (
      <div className="space-y-4">
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-sky-50 p-4 text-sm text-slate-700">
            <strong className="text-sky-700">Agenda</strong>
            <p className="mt-1">An outline of what will be discussed. It is sent before the meeting, with the items in order of importance and the time for each.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-sm text-slate-700">
            <strong className="text-amber-700">Minutes</strong>
            <p className="mt-1">A record of what happened: the organisation, the date, place and time, the attendance register, what was proposed and agreed, and resolutions word for word. Written in the past tense.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-sm text-slate-700">
            <strong className="text-rose-700">Obituary</strong>
            <p className="mt-1">A formal notice of a death: name, age, dates, achievements, next of kin and sometimes a sympathy message. Euphemism such as &ldquo;passed away&rdquo; is usual.</p>
          </div>
        </div>
        <Worked
          title="Write one line of minutes"
          steps={[
            <>What happened: the chairperson proposed that the class raise money for the library, and Aisha seconded.</>,
            <>Use the past tense and a summary: <em>It was proposed by Ms Naidoo that the class raise money for the library. Seconded: Aisha Khan.</em></>,
            <>A resolution is quoted exactly: <em>Resolved: That a cake sale be held on Friday 14 March.</em></>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>How many addresses appear in a friendly letter, and whose is it?</>,
          <>You begin a letter <em>Dear Sir or Madam</em>. How should it end?</>,
          <>Name two things that belong in the minutes of a meeting.</>,
          <>Why is &ldquo;passed away&rdquo; used in an obituary instead of &ldquo;died&rdquo;?</>,
        ]}
        answers={[
          <>One address: the writer&rsquo;s, with the date below it.</>,
          <><em>Yours faithfully</em>, followed by your surname and initials.</>,
          <>Any two of: the name of the organisation, the date, place and time, the attendance register, what was proposed and agreed, resolutions word for word.</>,
          <>It is a euphemism: a gentler expression for a harsh word, suited to the formal, respectful register of an obituary.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What does "transactional writing" mean?',
    options: ['A story about buying and selling', 'Functional writing that does a job', 'Writing about money and banks', 'Poetry written for a public reading'],
    answer: 'Functional writing that does a job',
    explanation: 'Transactional texts have a practical purpose and a set format: letters, minutes, reports and similar texts.',
  },
  {
    prompt: 'How many words should each transactional text in the Grade 10 writing paper be?',
    options: ['300 to 350 words', '180 to 200 words', '80 to 100 words', '400 to 450 words'],
    answer: '180 to 200 words',
    explanation: 'Transactional texts are 180 to 200 words, and each is worth 25 marks. The essay is the longer text, at 300 to 350 words.',
  },
  {
    prompt: 'How many addresses are written in a friendly letter?',
    options: ['One: the writer\'s address', 'Two: the writer\'s and the reader\'s', 'None at all', 'Three: the writer\'s, the reader\'s and the school\'s'],
    answer: 'One: the writer\'s address',
    explanation: 'A friendly letter shows only the writer\'s address, with the date below it. A formal letter also shows the reader\'s details.',
  },
  {
    prompt: 'Which closing is the best for a friendly letter to a cousin?',
    options: ['Yours faithfully, Mokoena N.', 'Yours respectfully, Ms N. Mokoena', 'Lots of love, Naledi', 'Regards, The Writer'],
    answer: 'Lots of love, Naledi',
    explanation: 'A friendly letter closes warmly and is signed with the first name. A surname and initials belong in formal letters.',
  },
  {
    prompt: 'A formal letter begins "Dear Sir or Madam". Which closing should follow?',
    options: ['Yours sincerely', 'With love from me', 'Yours faithfully', 'Cheers for now'],
    answer: 'Yours faithfully',
    explanation: 'When the reader\'s name is not known, "Dear Sir or Madam" is paired with "Yours faithfully". "Yours sincerely" goes with a named person such as "Dear Mr Dlamini".',
  },
  {
    prompt: 'What should follow the closing in a formal letter?',
    options: ['The writer\'s surname and initials', 'The writer\'s nickname', 'A joke about the topic', 'The reader\'s surname and initials'],
    answer: 'The writer\'s surname and initials',
    explanation: 'A formal letter ends with a formal closing followed by the writer\'s surname and initials.',
  },
  {
    prompt: 'Which sentence belongs in a formal letter of complaint?',
    options: ['Your service is rubbish and I am so annoyed!!!', 'I wish to complain about the late delivery.', 'OMG, where is my order?? It is so late!!', 'Hey, what happened to my parcel, bro? Sort it!'],
    answer: 'I wish to complain about the late delivery.',
    explanation: 'A formal complaint states the problem clearly and politely in a formal register. The other options use slang, shouting or casual language.',
  },
  {
    prompt: 'Which of the following should NOT be on a CV?',
    options: ['A story about a holiday and a party', 'Personal details and contact numbers', 'Formal qualifications and marks', 'The names and numbers of referees'],
    answer: 'A story about a holiday and a party',
    explanation: 'A story about a holiday has no place on a CV. A CV gives personal details, qualifications, work experience (if any) and referees, clearly and briefly.',
  },
  {
    prompt: 'What is the purpose of a covering letter sent with a CV?',
    options: ['To repeat the whole CV in the same words', 'To tell the story of the writer\'s whole life', 'To complain about the employer\'s last advert', 'To name the post and say why you suit it'],
    answer: 'To name the post and say why you suit it',
    explanation: 'A covering letter addresses the post and introduces the CV. It is short and formal.',
  },
  {
    prompt: 'How should the items on a meeting agenda be arranged?',
    options: ['In alphabetical order of the speakers\' surnames', 'In the order in which people arrive', 'With the most trivial items first', 'By importance, with a time for each item'],
    answer: 'By importance, with a time for each item',
    explanation: 'An agenda is prepared beforehand and sent to delegates, with items arranged by importance and with time allowed for each.',
  },
  {
    prompt: 'In which tense are the minutes of a meeting written?',
    options: ['The future tense', 'The past tense', 'The present tense', 'Any tense that the writer prefers'],
    answer: 'The past tense',
    explanation: 'Minutes record what happened at a meeting that has taken place, so they use the past tense.',
  },
  {
    prompt: 'How should a resolution be recorded in minutes?',
    options: ['Quoted word for word', 'Left out, to save space', 'Written as a joke', 'Replaced by the writer\'s opinion of it'],
    answer: 'Quoted word for word',
    explanation: 'A resolution is the exact decision of the meeting, so it is quoted word for word. The discussion that led to it is summarised.',
  },
  {
    prompt: 'Why does an obituary say "passed away" instead of "died"?',
    options: ['It is a gentle euphemism that suits a formal tone', 'It is a spelling mistake that writers should avoid', 'It is slang that teenagers use in messages', 'It means that the person moved to another house'],
    answer: 'It is a gentle euphemism that suits a formal tone',
    explanation: 'A euphemism replaces a harsh word with a gentler one. Obituaries are formal and respectful, so "passed away" is customary.',
  },
];
