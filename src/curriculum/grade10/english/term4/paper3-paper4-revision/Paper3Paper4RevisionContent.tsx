import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PaperMarks } from '../../../../../components/diagrams/english/EnglishPictures';
import { CAPS_G10 } from '../../_shared/capsFacts';

/** Original essay topics written for this lesson, with the type each one asks for. */
export const TOPICS: [topic: string, type: string][] = [
  ['Write a story that begins: "The lights went out at 7:14."', 'Narrative essay'],
  ['Describe a busy taxi rank at dawn.', 'Descriptive essay'],
  ['"Learners should be allowed to use cellphones in class." Argue for or against this statement.', 'Argumentative essay'],
];

export const PAPER3_TIME_PLAN = [
  { part: 'Essay (50 marks), with 10 minutes of planning', minutes: 60 },
  { part: 'Two transactional texts (2 x 25 marks)', minutes: 50 },
  { part: 'Checking your answers', minutes: 10 },
];

export const learnSteps: LearnStep[] = [
  {
    title: 'Paper 3 and Paper 4 at a glance',
    content: (
      <div className="space-y-4">
        <Rule>Paper 3 (writing) is {CAPS_G10.paper3Marks} marks and Paper 4 (the oral) is {CAPS_G10.paper4Marks} marks of the year-end 300.</Rule>
        <PaperMarks papers={[{ label: 'Paper 1: Language in context', marks: CAPS_G10.paper1Marks }, { label: 'Paper 2: Literature', marks: CAPS_G10.paper2Marks }, { label: 'Paper 3: Writing', marks: CAPS_G10.paper3Marks }, { label: 'Paper 4: Oral', marks: CAPS_G10.paper4Marks }]} />
        <Worked
          title="Paper 3 in two hours"
          steps={PAPER3_TIME_PLAN.map((r) => <>{r.part}: {r.minutes} minutes.</>)}
        />
      </div>
    ),
  },
  {
    title: 'Choose and plan the essay',
    content: (
      <div className="space-y-4">
        <Rule>Read the topic for its verb. The wording tells you which essay to write.</Rule>
        <ul className="space-y-1.5 text-left text-sm text-slate-700">
          {TOPICS.map(([t, y]) => (
            <li key={t} className="flex flex-col gap-0.5 rounded-lg bg-slate-50 px-3 py-2"><span>{t}</span><strong className="text-indigo-700">{y}</strong></li>
          ))}
        </ul>
        <Worked
          title="A two-minute plan"
          steps={[
            <>Type and reader: an argumentative essay for an exam marker.</>,
            <>Stance: for the statement, with rules.</>,
            <>Three points with proof, one answer to the other side, an ending that restates the stance.</>,
            <>Length: 300 to 350 words, marked 60% on content and planning, 30% on language, style and editing, 10% on structure.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Transactional texts: the signals',
    content: (
      <div className="space-y-4">
        <Rule>Each transactional text has signals the marker looks for. Make them obvious.</Rule>
        <ul className="space-y-1.5 text-left text-sm text-slate-700">
          <li><strong>Formal letter:</strong> both addresses, date, formal salutation, subject line, formal closing, surname and initials.</li>
          <li><strong>Friendly letter:</strong> only your address, the date, a warm greeting, your first name.</li>
          <li><strong>CV and covering letter:</strong> details, qualifications, experience, referees; the post named in the letter.</li>
          <li><strong>Agenda and minutes:</strong> items in order with times; minutes in the past tense with attendance and resolutions.</li>
          <li><strong>Report:</strong> title, introduction, body, conclusions, recommendations; formal and impersonal.</li>
          <li><strong>Review:</strong> relevant facts and a fair, honest judgement.</li>
          <li><strong>Newspaper article:</strong> title, sub-title, the most important facts first.</li>
          <li><strong>Speech, dialogue, interview:</strong> built for speaking: openers and short sentences; a new line for each speaker.</li>
        </ul>
        <Mistake>A text of 180 to 200 words in the wrong format has lost most of the format marks. Check the signals before you check the spelling.</Mistake>
      </div>
    ),
  },
  {
    title: 'Paper 4: the oral tasks',
    content: (
      <div className="space-y-4">
        <Rule>The oral work of the year is assessed in tasks, and it counts for 50 of the 300 marks in the year-end total.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Each year: one listening for comprehension (15 marks), prepared speeches (10 marks each) and an unprepared speech (15 marks).</li>
          <li>In term 4 the tasks are introducing a speaker or a vote of thanks, and a panel or forum discussion that applies the conventions: let others finish, then restate to check you understood.</li>
        </ul>
        <Worked
          title="A vote of thanks in four sentences"
          steps={[
            <>Name the speaker and the occasion.</>,
            <>Thank them for something specific that they said.</>,
            <>Say what the audience learned.</>,
            <>End with a warm, short thank you.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The last week',
    content: (
      <div className="space-y-4">
        <Rule>Revision is practice. Use past papers and your own writing under time.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Before:</strong> write one timed essay and two transactional texts, and count the words.</li>
          <li><strong>During:</strong> read all instructions, plan, watch the clock and keep to the formats.</li>
          <li><strong>After each paper:</strong> rest, then look at the next paper, not at the last one.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>(1 mark) How many marks is Paper 3 and how are they shared?</>,
          <>(1 mark) Which essay type does &ldquo;Describe a busy taxi rank at dawn&rdquo; ask for?</>,
          <>(2 marks) Name two signals of a formal letter.</>,
          <>(1 mark) How many marks is the oral, Paper 4?</>,
        ]}
        answers={[
          <>100: the essay is 50 and the two transactional texts are 25 each.</>,
          <>A descriptive essay.</>,
          <>Any two of: both addresses, subject line, formal salutation and closing, surname and initials.</>,
          <>50 marks.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: '(1 mark) How many marks is Paper 3, Writing, in the Grade 10 year-end examination?',
    options: ['150', '100', '120', '110'],
    answer: '100',
    explanation: 'Paper 3 is out of 100: an essay of 50 marks and two transactional texts of 25 marks each.',
  },
  {
    prompt: '(1 mark) A topic says "Describe a busy taxi rank at dawn." Which essay does it ask for?',
    options: ['A narrative essay', 'An argumentative essay', 'A formal letter', 'A descriptive essay'],
    answer: 'A descriptive essay',
    explanation: '"Describe" asks for a picture in words, so the topic asks for a descriptive essay. A narrative tells a story and an argumentative essay takes a side.',
  },
  {
    prompt: '(1 mark) A topic says "Write a story that begins: The lights went out." Which essay does it ask for?',
    options: ['A narrative essay', 'A descriptive essay', 'An argumentative essay', 'A report'],
    answer: 'A narrative essay',
    explanation: 'A story with events is a narrative essay.',
  },
  {
    prompt: '(1 mark) A topic says "Cellphones should be banned in schools. Argue for or against." Which essay does it ask for?',
    options: ['A narrative essay', 'A descriptive essay', 'An argumentative essay', 'A friendly letter of advice'],
    answer: 'An argumentative essay',
    explanation: '"Argue for or against" asks for a stance with reasons and proof.',
  },
  {
    prompt: '(1 mark) How many marks does the Paper 3 essay carry?',
    options: ['25', '30', '100', '50'],
    answer: '50',
    explanation: 'The essay carries 50 marks. The two transactional texts carry 25 marks each.',
  },
  {
    prompt: '(2 marks) You have two hours for Paper 3. Which time plan is the most sensible?',
    options: ['Essay 5, texts 110, no checking', 'Essay 60, texts 50, checking 10', 'Essay 100, texts 10, no checking', 'Essay 40, texts 40, nothing else'],
    answer: 'Essay 60, texts 50, checking 10',
    explanation: 'The essay is worth half of the marks and the two texts the other half, so time follows the marks, with a few minutes to check.',
  },
  {
    prompt: '(1 mark) Which of these is a signal of a formal letter?',
    options: ['The writer\'s first name at the end', 'Slang in the closing words', 'One address and no date at all', 'A subject line under the greeting'],
    answer: 'A subject line under the greeting',
    explanation: 'Formal letters have a subject line, both addresses and a formal closing with surname and initials.',
  },
  {
    prompt: '(1 mark) In which tense are the minutes of a meeting written?',
    options: ['The future tense', 'The past tense', 'The present tense', 'Any tense'],
    answer: 'The past tense',
    explanation: 'Minutes record what has already happened at the meeting.',
  },
  {
    prompt: '(1 mark) How long should a transactional text be?',
    options: ['300 to 350 words', '180 to 200 words', '90 to 100 words', '400 to 450 words'],
    answer: '180 to 200 words',
    explanation: 'Each transactional text is 180 to 200 words. The essay is the longer text at 300 to 350 words.',
  },
  {
    prompt: '(2 marks) A learner writes a perfect 190-word text but in the wrong format (a letter instead of minutes). What will the marks reflect?',
    options: ['Full marks, because the length is right', 'Lost format marks: wrong text type', 'Extra marks for being very creative', 'No marks are lost at all, in fact'],
    answer: 'Lost format marks: wrong text type',
    explanation: 'Content, planning and format carry 60% of a transactional text, so the wrong format costs many marks.',
  },
  {
    prompt: '(1 mark) How many marks is the oral, Paper 4, in the year-end examination?',
    options: ['100', '70', '80', '50'],
    answer: '50',
    explanation: 'The year-end total of 300 is Paper 1 (70), Paper 2 (80), Paper 3 (100) and Paper 4, the oral (50).',
  },
  {
    prompt: '(1 mark) A vote of thanks to a visiting speaker should include which of the following?',
    options: ['Thanks for something specific they said', 'A new, long speech on the same topic', 'A list of the speaker\'s mistakes', 'A request that the speaker should leave'],
    answer: 'Thanks for something specific they said',
    explanation: 'A good vote of thanks is short and warm, and names something the speaker gave the audience.',
  },
  {
    prompt: '(1 mark) In a panel or forum discussion, which behaviour follows the turn-taking conventions?',
    options: ['Talk over the others to win', 'Stay silent for the whole discussion', 'Let others finish, then restate', 'Read a prepared speech aloud'],
    answer: 'Let others finish, then restate',
    explanation: 'Turn-taking conventions include allowing others to speak, restating to clarify and asking for clarification.',
  },
];
