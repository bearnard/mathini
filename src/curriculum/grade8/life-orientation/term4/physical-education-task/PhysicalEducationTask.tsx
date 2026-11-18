import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow, WeekBars } from '../../../../../components/diagrams/lo/PswPictures';
import { ValueBars } from '../../../../../components/diagrams/lo/lo7Pictures';
import { minutesText, percent, weeklyMinutes } from '../../../../../components/diagrams/lo/lo7Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers in the pictures and examples come from these helpers (lo7Helpers.test.ts).
const terms = ['T1', 'T2', 'T3', 'T4'];
const attended = [6, 7, 8, 9];
const SESSIONS = 10;
const attendedTotal = attended.reduce((a, b) => a + b, 0);
const attendedPct = percent(attendedTotal, SESSIONS * terms.length);
const walk = { minutes: 20, times: 3, week: weeklyMinutes(20, 3) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Track your participation',
    content: slide(
      <>
        <Rule>Participation tracking shows your progress and where to improve. It is for every learner, and it never replaces the practical activity.</Rule>
        <ValueBars title={`Sessions attended out of ${SESSIONS}`} labels={terms} values={attended} aria={`Four bars for terms one to four showing ${attended.join(', ')} sessions attended out of ${SESSIONS}.`} />
        <Worked
          title="Read a participation record"
          steps={[<>Sessions attended: {attended.join(' + ')} = {attendedTotal}.</>, <>Sessions possible: {terms.length} × {SESSIONS} = {SESSIONS * terms.length}.</>, <>Share attended: {attendedTotal} ÷ {SESSIONS * terms.length} = {attendedPct}%.</>, <>The bars go up each term, so attendance improved.</>]}
        />
        <Mistake>Thinking tracking is only for top athletes, or that a record can replace taking part. The record only shows what you did.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fitness for life',
    content: slide(
      <>
        <Rule>Regular activity with realistic goals builds long-term fitness. Warm up before you start and recover afterwards.</Rule>
        <WeekBars days={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']} minutes={[walk.minutes, 0, walk.minutes, 0, walk.minutes]} aria={`Five bars for Monday to Friday. Monday, Wednesday and Friday show ${walk.minutes} minutes of activity, the other days show none, ${walk.week} minutes in the week.`} />
        <Worked
          title="A realistic fitness goal"
          steps={[<>Goal: walk or jog for {walk.minutes} minutes, {walk.times} times a week.</>, <>Start with a gentle warm-up.</>, <>Weekly total: {walk.minutes} × {walk.times} = {walk.week} minutes, or {minutesText(walk.week)}.</>, <>Finish with a slow cool-down.</>]}
        />
        <Mistake>Exercising once and stopping, or skipping the warm-up and recovery. Small, regular sessions build fitness.</Mistake>
      </>,
    ),
  },
  {
    title: 'Game strategy and fair recreation',
    content: slide(
      <>
        <Rule>In games, share roles and adapt to what happens in play. Fair recreation includes others and respects the agreed rules. Healthy reasons to play are wellbeing, enjoyment and friendship.</Rule>
        <StepFlow steps={['Before: agree on roles.', 'During: talk and adapt to play.', 'After: take feedback and reflect.']} aria="Three stages of a game in order: before, agree on roles; during, talk and adapt to play; after, take feedback and reflect." />
        <Worked
          title="A team game at break"
          steps={[<>Agree who defends, who attacks and who rotates.</>, <>The other team changes tactics, so your team adapts.</>, <>Include a learner who is less skilled by passing to them.</>, <>Accept the umpire's decision calmly.</>]}
        />
        <Mistake>Excluding weaker players, changing the rules to favour one side, or arguing with officials all the time. Fair play keeps the game fun for everyone.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safety, reflection and next goals',
    content: slide(
      <>
        <Rule>Play safely: use correct technique, drink water, follow your teacher's instructions and report pain early. After a game, reflect, then set one fitness target and one teamwork target.</Rule>
        <StepFlow steps={['What went well?', 'What can I improve?', 'Set one fitness target.', 'Set one teamwork target.']} aria="Four reflection steps in order: what went well, what can I improve, set one fitness target, set one teamwork target." />
        <Worked
          title="A reflection after a match"
          steps={[<>Went well: I passed to open players.</>, <>Improve: I stopped running after I passed.</>, <>Fitness target: jog {walk.minutes} minutes, {walk.times} times a week.</>, <>Teamwork target: encourage a teammate each game.</>]}
        />
        <Mistake>Playing through serious pain, or blaming other people for the errors. Ask “What went well, and what should I improve next time?”</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="Why is participation tracking useful?" answer="It shows your progress and where to improve." />
        <Check question="Name one behaviour that supports long-term fitness." answer="Regular activity with realistic goals, with a warm-up and recovery." />
        <Check question="What is a good question to ask after a game?" answer="What went well, and what should I improve next time?" />
        <Check question="Give a useful end-of-year PET goal." answer="One fitness target and one teamwork target for next term." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Why is participation tracking useful in PET?',
    options: ['It shows progress and where to improve', 'It takes the place of the practical activity', 'It is meant for top athletes only', 'It removes the need for setting goals'],
    answer: 'It shows progress and where to improve',
    explanation: 'Tracking gives evidence of consistency and development.',
  },
  {
    prompt: 'Which behaviour supports long-term personal fitness?',
    options: [
      'Regular activity with realistic goals',
      'Exercising once and stopping',
      'Ignoring warm-up and recovery',
      'Avoiding movement unless graded',
    ],
    answer: 'Regular activity with realistic goals',
    explanation: 'Fitness improves through consistent healthy routines.',
  },
  {
    prompt: 'What is a good post-game reflection question?',
    options: ['What went well, and what should I improve next time?', 'Who can I blame for each of the errors?', 'How can I stay out of the team?', 'How can I get round all of the rules?'],
    answer: 'What went well, and what should I improve next time?',
    explanation: 'Reflection supports skill development and personal accountability.',
  },
  {
    prompt: 'Which action reflects fair recreation?',
    options: [
      'Including others and respecting agreed rules',
      'Excluding weaker players',
      'Changing rules to benefit one side',
      'Arguing with officials constantly',
    ],
    answer: 'Including others and respecting agreed rules',
    explanation: 'Fair recreation builds confidence and social connection.',
  },
  {
    prompt: 'How can you use strategy during games?',
    options: ['Share roles and adapt to what happens in play', 'Play without any plan', 'Ignore your teammates and the spacing', 'Refuse to take tactical feedback'],
    answer: 'Share roles and adapt to what happens in play',
    explanation: 'Simple strategy improves teamwork and decision-making.',
  },
  {
    prompt: 'Which choice supports safe participation?',
    options: [
      'Using correct technique and reporting pain early',
      'Playing through serious injury signs',
      'Skipping hydration',
      'Ignoring teacher instructions',
    ],
    answer: 'Using correct technique and reporting pain early',
    explanation: 'Safety habits prevent avoidable harm.',
  },
  {
    prompt: 'What is a healthy reason to join recreational activity?',
    options: ['To improve wellbeing, enjoyment and social connection', 'To humiliate other learners', 'To avoid putting in any effort', 'To break the rules in order to get attention'],
    answer: 'To improve wellbeing, enjoyment and social connection',
    explanation: 'Recreation supports physical and emotional health.',
  },
  {
    prompt: 'Which end-of-year PET goal is most useful?',
    options: ['Set one fitness and one teamwork target for next term', 'Set no goals for the year', "Copy another person's goals without thought", 'Choose goals that cannot be measured'],
    answer: 'Set one fitness and one teamwork target for next term',
    explanation: 'Specific future goals keep progress moving forward.',
  },
];

const PhysicalEducationTask = () => (
  <CapsSubjectTopic
    title="Physical Education Task"
    subtitle="Games application, personal fitness review, participation, and recreation"
    learnSteps={learnSteps}
    task="gr8-physical-education-task-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask;
