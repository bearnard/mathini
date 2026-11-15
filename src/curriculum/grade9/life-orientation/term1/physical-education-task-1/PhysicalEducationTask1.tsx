import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, PlanBar } from '../../../../../components/diagrams/lo/PswPictures';
import { HBars } from '../../../../../components/diagrams/lo/Lo8Pictures';
import { logGain } from '../../../../../components/diagrams/lo/lo8Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers in the examples come from these tested helpers (lo8Helpers.test.ts).
const planA = 40;
const planB = { sessions: 3, length: 20, weeks: 4 };
const planBMinutes = planB.sessions * planB.length * planB.weeks;
const log = [12, 15, 17, 20];
const session = [
  { label: 'Warm-up', minutes: 10, kind: 'break' as const },
  { label: 'Skills', minutes: 30, kind: 'study' as const },
  { label: 'Cool-down', minutes: 5, kind: 'break' as const },
];

export const learnSteps: LearnStep[] = [
  {
    title: 'Fitness and consistency',
    content: slide(
      <>
        <Rule>Fitness is the ability to be active with strength and endurance. It is not something you are born with: regular activity builds it and improves your skills.</Rule>
        <Worked
          title="Two plans for one month"
          steps={[<>Plan A: one long session of {planA} minutes in the month: {planA} minutes.</>, <>Plan B: {planB.sessions} sessions of {planB.length} minutes a week for {planB.weeks} weeks: {planB.sessions} × {planB.length} × {planB.weeks} = {planBMinutes} minutes.</>, <>Plan B gives much more practice, and the practice is regular.</>]}
        />
        <Mistake>Thinking that being thin means being fit, that fitness comes quickly, or that one long session lasts for months. Consistency builds fitness.</Mistake>
      </>,
    ),
  },
  {
    title: 'Coordination and teamwork',
    content: slide(
      <>
        <Rule>Coordination is using the parts of your body together smoothly: balance, agility and control. Teamwork is working together towards a common goal.</Rule>
        <Hub centre="Teamwork" spokes={['Communicate', 'Support', 'Cooperate', 'Share roles']} aria="A circle labelled Teamwork with four labels around it: communicate, support, cooperate and share roles." />
        <Worked
          title="A three-person passing drill"
          steps={[<>Eyes on the ball and feet balanced: that is coordination.</>, <>Call the name of the player you pass to.</>, <>Pass so your teammate can catch it easily.</>, <>Praise a good pass and help after a drop.</>]}
        />
        <Mistake>Ignoring teammates to score yourself. Teamwork means supporting and communicating with the others, not competing against them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safe participation',
    content: slide(
      <>
        <Rule>Safe participation means using good technique, following the rules and avoiding injury. A warm-up prepares the body and lowers the risk of injury. A cool-down brings your heart rate back to normal.</Rule>
        <PlanBar parts={session} aria="One activity session as a bar: a 10 minute warm-up, 30 minutes of skills practice and a 5 minute cool-down, 45 minutes in total." />
        <Worked
          title="A safe session"
          steps={[<>Warm up for {session[0].minutes} minutes: light jogging and loosening the muscles.</>, <>Practise skills for {session[1].minutes} minutes with correct technique.</>, <>Cool down for {session[2].minutes} minutes: walk slowly and stretch.</>, <>Total: {session.reduce((a, p) => a + p.minutes, 0)} minutes.</>]}
        />
        <Mistake>Skipping the warm-up because you are young, pushing on through pain, or stopping suddenly and sitting down. Warm up first and cool down slowly afterwards.</Mistake>
      </>,
    ),
  },
  {
    title: 'Monitoring your progress',
    content: slide(
      <>
        <Rule>A fitness log is a record of your activities and your progress. Test yourself, write down the result and compare it with your own earlier results. This lets you manage your own fitness.</Rule>
        <HBars title="Example log: repetitions in one minute" items={log.map((v, i) => ({ label: `Week ${i + 1}`, value: v }))} aria={`A fitness log with four bars for weeks 1 to 4: ${log.join(', ')} repetitions in one minute.`} />
        <Worked
          title="Read the log"
          steps={[<>Week 1: {log[0]}. Week 4: {log[log.length - 1]}.</>, <>Gain: {log[log.length - 1]} − {log[0]} = {logGain(log)} more repetitions.</>, <>Your progress is shown by the numbers, not by guessing.</>]}
        />
        <Mistake>Guessing, or only comparing yourself with other learners. Fitness can be measured, and the best comparison is with your own earlier results.</Mistake>
      <div className="space-y-2">
  <p className="text-slate-600">{"Being independent in physical activity means you can plan your own training, warm up properly and keep going without a coach telling you what to do next."}</p>
</div>
</>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="Why is consistency important in physical activity?" answer="Regular activity builds stronger skills and fitness. One long session cannot do this." />
        <Check question="What is coordination, and what is teamwork?" answer="Coordination is using the parts of your body together smoothly. Teamwork is working together towards a common goal." />
        <Check question="Why do you warm up first, and what do you do after activity?" answer="A warm-up prepares the body and lowers the risk of injury. Afterwards you cool down slowly and stretch." />
        <Check question="What is a fitness log, and how does it help?" answer="A record of your activities and progress. It lets you test yourself, keep records and see your improvement." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is fitness?',
    options: ['Being thin, which shows that a person is healthy', 'The ability to be active, with strength and endurance', 'Being able to run fast over a short distance only', 'A quality that a person is born with and cannot improve'],
    answer: 'The ability to be active, with strength and endurance',
    explanation: 'Fitness includes strength, endurance, flexibility, and cardiovascular health.',
  },
  {
    prompt: 'Why is consistency important in physical activity?',
    options: ['Fitness is gained quickly, so regular activity is not needed', 'Regular activity builds stronger skills and fitness', 'One long session of exercise is enough for months', 'Regular activity wastes time that is better spent on studying'],
    answer: 'Regular activity builds stronger skills and fitness',
    explanation: 'Consistent practice leads to steady improvement in fitness and skills.',
  },
  {
    prompt: 'What does coordination involve?',
    options: ['Using only the strength of the muscles in your arms', 'Using the parts of your body together smoothly', 'Using only the flexibility of your joints and muscles', 'Using only the speed of your legs over short distances'],
    answer: 'Using the parts of your body together smoothly',
    explanation: 'Coordination involves balance, agility, and the smooth execution of movements.',
  },
  {
    prompt: 'What is teamwork in physical activity?',
    options: ['Competing alone to be the best player on the team', 'Working together towards a common goal', 'Ignoring your teammates to score the points yourself', 'Taking part in individual sports such as running only'],
    answer: 'Working together towards a common goal',
    explanation: 'Teamwork means supporting teammates, communicating, and working cooperatively.',
  },
  {
    prompt: 'Why is a warm-up important before exercise?',
    options: ['It is not needed if you are young and healthy', 'It prepares the body and lowers the risk of injury', 'It tires the muscles so that you play more slowly', 'It is needed only by professional athletes in a match'],
    answer: 'It prepares the body and lowers the risk of injury',
    explanation: 'Warm-ups increase heart rate, loosen muscles, and prepare you for activity.',
  },
  {
    prompt: 'What is a fitness log?',
    options: ['A notebook of stories about the sports you have seen', 'A record of your activities and your progress', 'A list of the fitness rules of your school team', 'A diary kept only by athletes who enter races'],
    answer: 'A record of your activities and your progress',
    explanation: 'A fitness log helps you track what you have done and see your improvement over time.',
  },
  {
    prompt: 'What is safe participation?',
    options: ['Exercising alone so that nobody can slow you down', 'Using good technique, following rules and avoiding injury', 'Pushing yourself until you feel pain, to get fit sooner', 'Playing without rules so that you can move freely'],
    answer: 'Using good technique, following rules and avoiding injury',
    explanation: 'Safe participation means using proper form and following safety guidelines.',
  },
  {
    prompt: 'How can you monitor your fitness progress?',
    options: ['By guessing, since fitness cannot really be measured', 'By testing yourself, keeping records and noting improvement', 'By entering competitions and looking only at the final result', 'By comparing your results with those of other learners'],
    answer: 'By testing yourself, keeping records and noting improvement',
    explanation: 'Regular testing and record-keeping help you see your progress clearly.',
  },
  {
    prompt: 'What should you do after physical activity?',
    options: ['Stop at once and sit down to rest your legs', 'Cool down slowly and stretch the muscles', 'Drink a very cold drink straight after you stop', 'Rest for several days before you move again'],
    answer: 'Cool down slowly and stretch the muscles',
    explanation: 'Cool-downs help your heart rate return to normal and prevent soreness.',
  },
  {
    prompt: 'Why is independence in physical activity important?',
    options: ['You can exercise without the school and teachers', 'You can manage your own fitness without always needing help', 'You must always exercise on your own and never in a group', 'You need not plan activity, as fitness comes by itself'],
    answer: 'You can manage your own fitness without always needing help',
    explanation: 'Independence in physical activity means taking responsibility for your own fitness.',
  },
];

const PhysicalEducationTask1 = () => (
  <CapsSubjectTopic
    title="Physical Education Task — Term 1"
    subtitle="Fitness development, coordination, and safe participation"
    learnSteps={learnSteps}
    task="gr9-physical-education-task-1-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask1;
