import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Subject Demands',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Each subject has different demands—what it requires you to learn and do well.
          Understanding these demands helps you <strong>prepare for Grade 10</strong>.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Different subjects need different study strategies.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Building Strong Study Routines',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>study routine</strong> is a habit of studying regularly. Good routines include:
          <strong> concentration, revision, and time management</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Concentration</strong>
            <p className="text-slate-600">Focus without distractions.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Revision</strong>
            <p className="text-slate-600">Review what you have learned.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Time management</strong>
            <p className="text-slate-600">Plan your study time well.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Preparing for the FET Phase',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>FET phase (Grade 10–12)</strong> is more demanding. Planning ahead now helps you succeed.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Grade 10 preparation includes:</p>
          <p className="text-slate-600">Good study habits, time management, and choosing subjects that match your goals.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What are subject demands?',
    options: ['The tasks that teachers tell you to finish each day', 'What a subject asks you to learn and do well', 'The tests that you write at the end of each term', 'The homework that you must hand in every week'],
    answer: 'What a subject asks you to learn and do well',
    explanation: 'Subject demands include the content, skills, and performance standards expected in each subject.',
  },
  {
    prompt: 'Why is a study routine important?',
    options: ['It is not needed if you are clever', 'It helps you learn steadily and remember more', 'It wastes time that you could spend relaxing', 'It is needed only in the weeks before the exams'],
    answer: 'It helps you learn steadily and remember more',
    explanation: 'Regular study routines help build strong learning habits and improve retention.',
  },
  {
    prompt: 'What helps you concentrate while studying?',
    options: ['Working near the television, so there is some company', 'A quiet place, no phone and clear goals', 'Studying lying down on a bed, so that you stay relaxed', 'Playing music with words while you read your notes'],
    answer: 'A quiet place, no phone and clear goals',
    explanation: 'Good concentration requires a quiet environment and freedom from distractions.',
  },
  {
    prompt: 'What is revision?',
    options: ['Copying out your classwork again in neater writing', 'Going over what you learned to strengthen understanding', 'Waiting until the exams start before you begin', 'Reading your notes through once and then moving on'],
    answer: 'Going over what you learned to strengthen understanding',
    explanation: 'Revision is the process of reviewing material to improve understanding and retention.',
  },
  {
    prompt: 'Why should you plan ahead for Grade 10?',
    options: ['You do not need to, as Grade 10 is just like Grade 9', 'To build study habits for harder work', 'Because the school says every learner must plan ahead', 'To make a good impression on the teachers of Grade 10'],
    answer: 'To build study habits for harder work',
    explanation: 'Grade 10 is more challenging, so building strong habits now helps you succeed.',
  },
  {
    prompt: 'What is time management?',
    options: ['Spending time on whatever comes first each day', 'Planning and using your time well', 'Studying all the time and doing nothing else', 'Never taking a rest, so no time is wasted'],
    answer: 'Planning and using your time well',
    explanation: 'Time management helps you balance study, activities, and rest.',
  },
  {
    prompt: 'When should you start preparing for subject choices?',
    options: ['After your Grade 10 exams, when the marks are out', 'In Grade 12 only, when it is nearly time to apply', 'Now, to find out what each subject demands', 'Never, since the school will choose for you'],
    answer: 'Now, to find out what each subject demands',
    explanation: 'Understanding subject demands now helps you make good choices for Grade 10.',
  },
  {
    prompt: 'What is the FET phase?',
    options: ['Grade 1-3', 'Grade 4-6', 'Grade 7-9', 'Grade 10-12'],
    answer: 'Grade 10-12',
    explanation: 'The Further Education and Training (FET) phase includes Grades 10, 11, and 12.',
  },
  {
    prompt: 'How often should you revise what you have learned?',
    options: ['Never, as notes are only for the day you learn them', 'Only the night before a test, when you are ready', 'Regularly, even between tests', 'Only once per term, before the exams start'],
    answer: 'Regularly, even between tests',
    explanation: 'Regular revision helps strengthen memory and understanding throughout the term.',
  },
  {
    prompt: 'What should an effective study timetable include?',
    options: ['Every subject in every hour, to cover it all', 'Time for each subject, breaks and a balance', 'Study time only, with no breaks until it is done', 'The difficult subjects only, so that easy ones are left'],
    answer: 'Time for each subject, breaks and a balance',
    explanation: 'A good study timetable balances all subjects and includes regular breaks.',
  },
];

const StudySkillsTransition = () => (
  <CapsSubjectTopic
    title="Study Skills and Transition Planning"
    subtitle="Building routines and preparing for Grade 10"
    learnSteps={learnSteps}
    task="gr9-study-skills-transition-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default StudySkillsTransition;
