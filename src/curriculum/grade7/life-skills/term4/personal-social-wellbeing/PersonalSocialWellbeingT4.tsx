import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PlanBar, StepFlow, WeekBars } from '../../../../../components/diagrams/lo/PswPictures';
import { planSegments, weekPlan } from '../../../../../components/diagrams/lo/pswHelpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// The numbers in the pictures and the worked examples come from these helpers (pswHelpers.test.ts).
const week = weekPlan([30, 30, 30, 30, 30]);
const hoursMinutes = (m: number) => `${Math.floor(m / 60)} h ${m % 60} min`;
const sessionParts = [
  { label: 'Maths', minutes: 30, kind: 'study' as const },
  { label: 'Stretch', minutes: 5, kind: 'break' as const },
  { label: 'English', minutes: 30, kind: 'study' as const },
];
const session = planSegments(sessionParts);

export const learnSteps: LearnStep[] = [
  {
    title: 'Setting a realistic goal',
    content: slide(
      <>
        <Rule>A good goal is specific and realistic. It says what you will do, for how long and how often.</Rule>
        <WeekBars days={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']} minutes={[30, 30, 30, 30, 30]} aria="Five bars for Monday to Friday, each showing 30 minutes of maths revision, 150 minutes in the week." />
        <Worked
          title="“Do better at maths” becomes a goal"
          steps={[<>Specific: which subject? Maths.</>, <>Realistic: 30 minutes, not five hours.</>, <>When: every weekday.</>, <>Goal: revise maths for 30 minutes every weekday. In a week that is 5 × 30 = {week.total} minutes, or {hoursMinutes(week.total)}.</>]}
        />
        <Mistake>A vague goal such as “study more”, or an unrealistic one such as “study all night”. If you cannot measure it or keep it up, it will not help.</Mistake>
      </>,
    ),
  },
  {
    title: 'A study planner and exam stress',
    content: slide(
      <>
        <Rule>A study planner organises your revision so you avoid last-minute panic. A timetable with short movement breaks helps you manage exam stress.</Rule>
        <PlanBar parts={sessionParts} aria="One study session as a bar: 30 minutes of maths, a 5 minute stretch break, then 30 minutes of English, 65 minutes in total." />
        <Worked
          title="Plan one afternoon"
          steps={[<>Maths for {sessionParts[0].minutes} minutes.</>, <>Stretch for {sessionParts[1].minutes} minutes.</>, <>English for {sessionParts[2].minutes} minutes.</>, <>Total: {session.total} minutes, or {hoursMinutes(session.total)}.</>]}
        />
        <Mistake>Leaving all your revision for the night before the exam. A planner spreads the work over many days.</Mistake>
      </>,
    ),
  },
  {
    title: 'Healthy routines and asking for help',
    content: slide(
      <>
        <Rule>Regular sleep and balanced meals support your memory, energy and mood. Ask for support as soon as stress feels hard to manage.</Rule>
        <Worked
          title="Lwazi cannot concentrate before exams"
          steps={[<>Notice the signs: tired and worried.</>, <>Keep a regular bedtime and eat balanced meals.</>, <>Take a short walk between study blocks.</>, <>Talk to a parent, teacher or school counsellor early.</>]}
        />
        <Mistake>Waiting until stress feels unbearable before telling someone. Early support stops stress from becoming overwhelming.</Mistake>
      </>,
    ),
  },
  {
    title: 'Future planning and community',
    content: slide(
      <>
        <Rule>A good first step in future planning is to identify your interests and strengths. Responsible habits include helping your community, for example by joining a clean-up. Reflection helps you improve your routines.</Rule>
        <StepFlow steps={['Identify your interests and strengths.', 'Choose a goal that fits them.', 'Try it and keep a short log.', 'Reflect, then change what did not work.']} aria="Four steps for planning ahead in order: identify interests and strengths, choose a goal, try it and keep a log, reflect and change what did not work." />
        <Worked
          title="A reflection after a study week"
          steps={[<>Log: studied at 16:00 and felt focused.</>, <>Log: studied at 21:00 and felt tired.</>, <>Learn: afternoons work better for me.</>, <>Change: move revision to the afternoon.</>]}
        />
        <Mistake>Using reflection only to blame yourself. Reflection means learning from experience so you can improve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="Which goal is better: “study more” or “revise maths for 30 minutes every weekday”? Why?" answer="The second. It is specific and realistic, so it is easy to follow and measure." />
        <Check question="Name two things that help you manage exam stress." answer="For example: use a timetable and take short movement breaks. Regular sleep and balanced meals help too." />
        <Check question="When should you ask for support with stress?" answer="As soon as it feels hard to manage." />
        <Check question="What is a good first step in future planning, and what does reflection help you do?" answer="Identify your interests and strengths. Reflection helps you improve your routines by learning from experience." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which goal is realistic and specific?',
    options: [
      'Revise maths for 30 minutes every weekday',
      'Become perfect at everything tomorrow',
      'Never feel stressed again',
      'Finish all subjects in one hour',
    ],
    answer: 'Revise maths for 30 minutes every weekday',
    explanation: 'Specific, realistic goals are easier to follow and measure.',
  },
  {
    prompt: 'Which strategy helps manage exam stress?',
    options: [
      'Use a timetable and take short movement breaks',
      'Stay awake all night before tests',
      'Skip meals during revision',
      'Ignore all difficult subjects',
    ],
    answer: 'Use a timetable and take short movement breaks',
    explanation: 'Planning and balanced breaks reduce pressure and improve focus.',
  },
  {
    prompt: 'Which routine supports healthy learning?',
    options: [
      'Regular sleep and balanced meals',
      'Constant screen time late at night',
      'Studying without any rest',
      'Skipping breakfast every day',
    ],
    answer: 'Regular sleep and balanced meals',
    explanation: 'Healthy habits support memory, energy, and emotional regulation.',
  },
  {
    prompt: 'What is a good first step in future planning?',
    options: [
      'Identify interests and strengths',
      'Choose based only on peer pressure',
      'Avoid thinking about next year',
      'Copy someone else\'s choices exactly',
    ],
    answer: 'Identify interests and strengths',
    explanation: 'Self-knowledge helps learners make informed pathway choices.',
  },
  {
    prompt: 'Which action shows community responsibility?',
    options: [
      'Joining a clean-up or helping project',
      'Ignoring shared spaces completely',
      'Damaging school resources for fun',
      'Mocking people who volunteer',
    ],
    answer: 'Joining a clean-up or helping project',
    explanation: 'Responsible actions contribute to safer, healthier communities.',
  },
  {
    prompt: 'Why use a study planner in Term 4?',
    options: [
      'To organise revision and avoid last-minute panic',
      'To remove all need for effort',
      'To study only favourite topics',
      'To skip assignments without consequences',
    ],
    answer: 'To organise revision and avoid last-minute panic',
    explanation: 'Planners help learners balance workloads and deadlines.',
  },
  {
    prompt: 'When should you seek support for stress?',
    options: [
      'As soon as stress feels hard to manage',
      'Only after refusing all help for months',
      'Never, because stress must stay private',
      'Only after exams have ended',
    ],
    answer: 'As soon as stress feels hard to manage',
    explanation: 'Early support can prevent stress from becoming overwhelming.',
  },
  {
    prompt: 'What does personal reflection help you do?',
    options: ['Improve routines by learning from experience', 'Blame other people for every result', 'Avoid setting goals of any kind', 'Ignore both progress and setbacks'],
    answer: 'Improve routines by learning from experience',
    explanation: 'Reflection helps learners adapt strategies for better outcomes.',
  },
];

const PersonalSocialWellbeingT4 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Goal setting, stress management, healthy routines, and future planning"
    learnSteps={learnSteps}
    task="gr7-personal-social-wellbeing-t4"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PersonalSocialWellbeingT4;
