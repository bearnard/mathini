import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { HBars } from '../../../../../components/diagrams/lo/Lo8Pictures';
import { hoursMinutes, subjectMinutes, totalMinutes } from '../../../../../components/diagrams/lo/lo8Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers in the timetable example come from these tested helpers (lo8Helpers.test.ts).
const plan = subjectMinutes([
  { subject: 'Maths', sessions: 3, length: 30 },
  { subject: 'Life Sciences', sessions: 2, length: 30 },
  { subject: 'English', sessions: 2, length: 30 },
]);
const weekTotal = totalMinutes(plan);

export const learnSteps: LearnStep[] = [
  {
    title: 'Subject demands',
    content: slide(
      <>
        <Rule>Subject demands are what a subject asks you to learn and do well: its content, its skills and the standard expected. Different subjects need different study strategies.</Rule>
        <Worked
          title="Match the strategy to the subject"
          steps={[<>Mathematics: practise worked problems.</>, <>Life Sciences: learn the key terms and label diagrams.</>, <>English: read and write regularly.</>, <>Ask each teacher what the subject expects.</>]}
        />
        <Mistake>Thinking subject demands are just the homework you must hand in, or that Grade 10 will be just like Grade 9. Each subject asks for more as you move up.</Mistake>
      </>,
    ),
  },
  {
    title: 'Concentration and study routines',
    content: slide(
      <>
        <Rule>A study routine is a habit of studying regularly. It helps you learn steadily and remember more. To concentrate, use a quiet place, put your phone away and set a clear goal for the session.</Rule>
        <Worked
          title="A 30-minute study session"
          steps={[<>Goal: do ten maths problems.</>, <>Place: a quiet table, phone in another room.</>, <>Work without switching tasks until the goal is done.</>, <>Short break, then stop or start the next goal.</>]}
        />
        <Mistake>Studying next to the television, lying on a bed or playing music with words. A routine is not only for the weeks before exams. It works because you keep it up.</Mistake>
      </>,
    ),
  },
  {
    title: 'Revision and time management',
    content: slide(
      <>
        <Rule>Revision is going over what you learned to strengthen your understanding. Do it regularly, even between tests. Time management is planning and using your time well, with breaks and a balance between subjects.</Rule>
        <HBars title="One week's study plan (minutes)" items={plan.map((p) => ({ label: p.subject, value: p.minutes }))} aria={`A weekly study plan with bars: ${plan.map((p) => `${p.subject} ${p.minutes} minutes`).join(', ')}, ${weekTotal} minutes in total.`} />
        <Worked
          title="Plan the week"
          steps={[<>Maths: 3 sessions × 30 minutes = {plan[0].minutes} minutes.</>, <>Life Sciences and English: 2 × 30 = {plan[1].minutes} minutes each.</>, <>Total: {weekTotal} minutes, or {hoursMinutes(weekTotal)}.</>, <>Add breaks and time to rest.</>]}
        />
        <Mistake>Reading your notes once and moving on, or waiting until the night before a test. Regular short revision is better than one rush.</Mistake>
      </>,
    ),
  },
  {
    title: 'Planning for Grade 10',
    content: slide(
      <>
        <Rule>The FET phase is Grades 10 to 12. Its work is harder, so build good habits now. Start finding out what each subject demands before you choose your subjects.</Rule>
        <StepFlow steps={['List your interests and strengths.', 'Find out what each subject demands.', 'Ask your teachers for advice.', 'Choose subjects that fit your goals.']} aria="Four steps for choosing subjects in order: list interests and strengths, find out what each subject demands, ask your teachers for advice, choose subjects that fit your goals." />
        <Worked
          title="Naledi thinks about Grade 10"
          steps={[<>She lists what she enjoys and does well.</>, <>She asks what the subjects she likes require.</>, <>She checks her study habits against those demands.</>, <>She starts the habits she needs now.</>]}
        />
        <Mistake>Waiting until after the Grade 10 exams, or until Grade 12, to think about subject choices. Planning now gives you time to build the habits you will need.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What are subject demands, and why do they matter for Grade 10?" answer="What a subject asks you to learn and do well. Understanding them now helps you prepare and choose well for Grade 10." />
        <Check question="What helps you concentrate while studying?" answer="A quiet place, no phone and clear goals." />
        <Check question="What should a good study timetable include, and how often should you revise?" answer="Time for each subject, breaks and a balance. Revise regularly, even between tests." />
        <Check question="Which grades make up the FET phase?" answer="Grades 10 to 12." />
      </>,
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
