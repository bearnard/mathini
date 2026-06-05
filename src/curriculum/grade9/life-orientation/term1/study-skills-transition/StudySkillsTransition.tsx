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
    options: ['Things teachers ask you to do', 'What a subject requires you to learn and do well', 'Tests only', 'Homework only'],
    answer: 'What a subject requires you to learn and do well',
    explanation: 'Subject demands include the content, skills, and performance standards expected in each subject.',
  },
  {
    prompt: 'Why is a study routine important?',
    options: ['It is not important', 'It helps you learn consistently and remember better', 'It wastes time', 'Only for tests'],
    answer: 'It helps you learn consistently and remember better',
    explanation: 'Regular study routines help build strong learning habits and improve retention.',
  },
  {
    prompt: 'What helps you concentrate while studying?',
    options: ['Studying with distractions', 'A quiet place, without phone, and clear goals', 'Studying lying down', 'Background noise'],
    answer: 'A quiet place, without phone, and clear goals',
    explanation: 'Good concentration requires a quiet environment and freedom from distractions.',
  },
  {
    prompt: 'What is revision?',
    options: ['Writing your work again', 'Reviewing what you have learned to strengthen understanding', 'Waiting until exams', 'Reading once'],
    answer: 'Reviewing what you have learned to strengthen understanding',
    explanation: 'Revision is the process of reviewing material to improve understanding and retention.',
  },
  {
    prompt: 'Why should you plan ahead for Grade 10?',
    options: ['You do not need to', 'To build study habits and prepare for more demanding work', 'Because you have to', 'To impress teachers'],
    answer: 'To build study habits and prepare for more demanding work',
    explanation: 'Grade 10 is more challenging, so building strong habits now helps you succeed.',
  },
  {
    prompt: 'What is time management?',
    options: ['Wasting time', 'Organizing and using your time well', 'Studying all the time', 'Never resting'],
    answer: 'Organizing and using your time well',
    explanation: 'Time management helps you balance study, activities, and rest.',
  },
  {
    prompt: 'When should you start preparing for subject choices?',
    options: ['Never', 'In Grade 12 only', 'Now, to understand what each subject demands', 'After your exams'],
    answer: 'Now, to understand what each subject demands',
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
    options: ['Never', 'Only before tests', 'Regularly, even between tests', 'Only once per term'],
    answer: 'Regularly, even between tests',
    explanation: 'Regular revision helps strengthen memory and understanding throughout the term.',
  },
  {
    prompt: 'What should an effective study timetable include?',
    options: ['All subjects all the time', 'Time for each subject, breaks, and balance', 'No breaks', 'Only difficult subjects'],
    answer: 'Time for each subject, breaks, and balance',
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
