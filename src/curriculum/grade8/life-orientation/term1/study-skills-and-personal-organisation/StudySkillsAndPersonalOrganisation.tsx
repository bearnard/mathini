import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PlanBar, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { planSegments } from '../../../../../components/diagrams/lo/pswHelpers';
import { ProgressBars } from '../../../../../components/diagrams/lo/Lo4Pictures';
import { byDeadline, percentDone } from '../../../../../components/diagrams/lo/lo4Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers in the pictures and worked examples come from the tested helpers (pswHelpers, lo4Helpers).
const afternoon = [
  { label: 'Homework', minutes: 40, kind: 'study' as const },
  { label: 'Break', minutes: 10, kind: 'break' as const },
  { label: 'Revision', minutes: 30, kind: 'study' as const },
];
const afternoonTotal = planSegments(afternoon).total;
const hoursMinutes = (m: number) => `${Math.floor(m / 60)} h ${m % 60} min`;
const tasks = byDeadline([
  { name: 'Read a chapter', daysLeft: 7 },
  { name: 'Maths worksheet', daysLeft: 1 },
  { name: 'History project', daysLeft: 4 },
]);
const dayWord = (n: number) => `${n} ${n === 1 ? 'day' : 'days'}`;
const weeklyGoals = [3, 4, 4, 5];

export const learnSteps: LearnStep[] = [
  {
    title: 'A study timetable',
    content: slide(
      <>
        <Rule>A study timetable organises your tasks and reduces last-minute stress. Plan time for homework, revision and short breaks.</Rule>
        <PlanBar parts={afternoon} aria="One afternoon as a bar: 40 minutes of homework, a 10 minute break, then 30 minutes of revision, 80 minutes in total." />
        <Worked
          title="Plan one afternoon"
          steps={[<>Homework: {afternoon[0].minutes} minutes.</>, <>Break: {afternoon[1].minutes} minutes.</>, <>Revision: {afternoon[2].minutes} minutes.</>, <>Total: {afternoonTotal} minutes, or {hoursMinutes(afternoonTotal)}.</>]}
        />
        <Mistake>Thinking a timetable lets you skip homework, or study one subject for the whole week. A good timetable spreads your subjects out.</Mistake>
      </>,
    ),
  },
  {
    title: 'Concentration and homework routines',
    content: slide(
      <>
        <Rule>You concentrate best in a quiet place with few distractions. A regular homework routine builds consistency and helps you learn independently.</Rule>
        <StepFlow steps={['Choose a regular time.', 'Find a quiet place.', 'Put distractions away.', 'Work, then tick it off.']} aria="Four steps for a homework routine in order: choose a regular time, find a quiet place, put distractions away, work then tick it off." />
        <Worked
          title="Thabo checks social media every few minutes while he studies"
          steps={[<>Spot the distraction: his phone.</>, <>Put the phone out of reach.</>, <>Choose a quiet place and a fixed time.</>, <>Work for the planned time, then take a break.</>]}
        />
        <Mistake>Believing a routine means you do not need to revise, or that it guarantees full marks. A routine only makes it easier to do the work.</Mistake>
      </>,
    ),
  },
  {
    title: 'Prioritising and staying organised',
    content: slide(
      <>
        <Rule>When many tasks are due, rank them by deadline and importance. Stay organised by keeping notes and files sorted by subject.</Rule>
        <StepFlow steps={tasks.map((t) => `${t.name}: due in ${dayWord(t.daysLeft)}`)} aria="Three tasks ranked by deadline, closest first: the maths worksheet due in 1 day, the history project due in 4 days, and reading a chapter due in 7 days." />
        <Worked
          title="Three tasks are due"
          steps={[<>List each task with its deadline.</>, <>Put the closest deadline first: {tasks[0].name}, due in {dayWord(tasks[0].daysLeft)}.</>, <>Then {tasks[1].name} ({dayWord(tasks[1].daysLeft)}), then {tasks[2].name.toLowerCase()} ({dayWord(tasks[2].daysLeft)}).</>, <>If two tasks are due on the same day, do the more important one first.</>]}
        />
        <Mistake>Waiting until the last night, leaving the hard subjects for later, losing worksheets or ignoring due dates. Rank first, then start.</Mistake>
      </>,
    ),
  },
  {
    title: 'Hard topics, progress and balance',
    content: slide(
      <>
        <Rule>When a topic feels difficult, split it into small steps and ask for help when you need it. Review your completed goals each week. Put rest, sleep and revision in your weekly plan.</Rule>
        <ProgressBars labels={['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4']} values={weeklyGoals} max={5} title="Weekly goals done" aria="Four bars showing weekly study goals done out of 5: 3, 4, 4 and 5." />
        <Worked
          title="Fractions feel hard"
          steps={[<>Split it: what a fraction is, then equal denominators, then different denominators.</>, <>Work on one small step at a time.</>, <>Ask your teacher about the step where you get stuck.</>, <>Review each week: week 1, {weeklyGoals[0]} of 5 goals = {percentDone(weeklyGoals[0], 5)}%. Week 4, 5 of 5 = {percentDone(weeklyGoals[3], 5)}%.</>]}
        />
        <Mistake>Avoiding the topic, copying answers without understanding, or studying all night and skipping meals. Rest and sleep help you learn.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is the main purpose of a study timetable?" answer="To organise tasks and reduce last-minute stress." />
        <Check question="Name two habits that improve concentration when you study." answer="Study in a quiet place with few distractions and keep a regular routine." />
        <Check question="You have a maths worksheet due tomorrow and a project due in four days. Which do you start first, and why?" answer="The maths worksheet, because its deadline is closest. Rank tasks by deadline and importance." />
        <Check question="A topic feels very difficult. What strategy works best?" answer="Split it into small steps and ask for help when needed." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main purpose of a study timetable?',
    options: [
      'To organise tasks and reduce last-minute stress',
      'To avoid all homework',
      'To replace class attendance',
      'To study only one subject for the whole week',
    ],
    answer: 'To organise tasks and reduce last-minute stress',
    explanation: 'A timetable helps learners manage workload and deadlines.',
  },
  {
    prompt: 'Which habit improves concentration during study?',
    options: [
      'Studying in a quiet place with limited distractions',
      'Checking social media every few minutes',
      'Doing homework with loud interruptions',
      'Skipping breaks and sleeping less',
    ],
    answer: 'Studying in a quiet place with limited distractions',
    explanation: 'A focused environment supports better attention and memory.',
  },
  {
    prompt: 'Which action shows personal organisation?',
    options: [
      'Keeping notes and files sorted by subject',
      'Losing worksheets regularly',
      'Ignoring due dates',
      'Bringing no equipment to class',
    ],
    answer: 'Keeping notes and files sorted by subject',
    explanation: 'Organised materials save time and improve readiness.',
  },
  {
    prompt: 'A learner has many tasks due. What should they do first?',
    options: ['Rank tasks by deadline and importance', 'Start with whichever tasks you feel like doing', 'Wait until the last night before they are due', 'Leave the difficult subjects for much later'],
    answer: 'Rank tasks by deadline and importance',
    explanation: 'Prioritising helps learners complete work efficiently.',
  },
  {
    prompt: 'Why are homework routines useful?',
    options: [
      'They build consistency and independent learning',
      'They remove the need to revise',
      'They guarantee full marks automatically',
      'They replace teacher feedback',
    ],
    answer: 'They build consistency and independent learning',
    explanation: 'Regular routines make study behaviour more sustainable.',
  },
  {
    prompt: 'Which strategy is best when a topic feels difficult?',
    options: ['Split it into small steps and ask for help when needed', 'Avoid the topic for the rest of the year', 'Copy the answers without understanding them', 'Give up on the topic straight away'],
    answer: 'Split it into small steps and ask for help when needed',
    explanation: 'Small steps and support improve understanding and confidence.',
  },
  {
    prompt: 'What is a good way to check study progress?',
    options: [
      'Review completed goals each week',
      'Never look at your plan again',
      'Only compare yourself with others',
      'Study without any targets',
    ],
    answer: 'Review completed goals each week',
    explanation: 'Regular reflection shows what to continue or improve.',
  },
  {
    prompt: 'Which choice supports healthier study balance?',
    options: ['Putting rest, sleep and revision in your weekly plan', 'Studying all night, every night, to get ahead', 'Skipping meals in order to save study time', 'Removing all of the breaks from your day'],
    answer: 'Putting rest, sleep and revision in your weekly plan',
    explanation: 'Balanced routines protect wellbeing and improve performance.',
  },
];

const StudySkillsAndPersonalOrganisation = () => (
  <CapsSubjectTopic
    title="Study Skills and Personal Organisation"
    subtitle="Time management, concentration, homework routines, and planning"
    learnSteps={learnSteps}
    task="gr8-study-skills-and-personal-organisation-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default StudySkillsAndPersonalOrganisation;
