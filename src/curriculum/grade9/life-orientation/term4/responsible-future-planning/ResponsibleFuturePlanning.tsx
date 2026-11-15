import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Branches, StepFlow, WeekBars } from '../../../../../components/diagrams/lo/PswPictures';
import { WideHub } from '../../../../../components/diagrams/lo/Lo11Pictures';
import { gapToGoal, weeklyMinutes } from '../../../../../components/diagrams/lo/lo11Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers in the slides come from these helpers (lo11Helpers.test.ts).
const mark = { now: 54, goal: 60 };
const gap = gapToGoal(mark.now, mark.goal);
const plan = { minutes: 20, days: 4 };
const planTotal = weeklyMinutes(plan.minutes, plan.days);

export const learnSteps: LearnStep[] = [
  {
    title: 'Goal review and reflection',
    content: slide(
      <>
        <Rule>Goal review means looking back at your goals and how well you met them. Reflection helps you see your progress and growth, and what to do next.</Rule>
        <StepFlow steps={['What did I plan?', 'What did I achieve?', 'What helped or got in the way?', 'What will I change?']} aria="Four questions for a goal review in order: what did I plan, what did I achieve, what helped or got in the way, what will I change." />
        <Worked
          title={`Goal: reach ${mark.goal}% in Mathematics`}
          steps={[<>Plan: {mark.goal}%. Achieved: {mark.now}%.</>, <>Gap: {mark.goal} − {mark.now} = {gap} percentage points short.</>, <>Helped: I did past questions. Got in the way: I skipped revision before the test.</>, <>Change: revise before every test.</>]}
        />
        <Mistake>Skipping the review when the results are good, or giving up when you miss a goal. Look at what happened and change your approach.</Mistake>
      </>,
    ),
  },
  {
    title: 'Resilience and support networks',
    content: slide(
      <>
        <Rule>Resilience is the ability to bounce back from problems and keep going. It is a skill you can build. A support network is the people and resources that give help, guidance and encouragement.</Rule>
        <WideHub centre="Me" spokes={['Family', 'Friends', 'Teachers', 'Counsellors']} aria="A circle labelled Me with four sources of support around it: family, friends, teachers and counsellors." />
        <Worked
          title="Kagiso fails a test"
          steps={[<>It is fine to feel disappointed.</>, <>He asks his teacher what went wrong.</>, <>He makes a plan and asks a friend to revise with him.</>, <>He tries again: that is resilience.</>]}
        />
        <Mistake>Thinking resilience is something you are born with, or that asking for help shows weakness. Mentors and other helpers are part of a smart plan.</Mistake>
      </>,
    ),
  },
  {
    title: 'Action plans and motivation',
    content: slide(
      <>
        <Rule>An action plan breaks a goal into steps. Keep your motivation up by remembering why the goal matters and celebrating small wins.</Rule>
        <WeekBars days={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']} minutes={[plan.minutes, plan.minutes, plan.minutes, plan.minutes, 0]} aria={`Bars for Monday to Friday: ${plan.minutes} minutes of maths revision on four days and none on Friday, ${planTotal} minutes in the week.`} />
        <Worked
          title={`Action plan to go from ${mark.now}% to ${mark.goal}%`}
          steps={[<>Revise Mathematics for {plan.minutes} minutes on {plan.days} days: {plan.days} × {plan.minutes} = {planTotal} minutes a week.</>, <>Ask the teacher about anything you did not understand.</>, <>Celebrate each small win.</>]}
        />
        <Mistake>Waiting for inspiration to come back, or forcing yourself with no reason. Remember why the goal matters and keep your plan simple.</Mistake>
      </>,
    ),
  },
  {
    title: 'Decisions and the move to FET',
    content: slide(
      <>
        <Rule>Your choices today shape your chances tomorrow. As you enter the FET phase (Grades 10 to 12), sharpen your goals, build good habits and ask for support.</Rule>
        <Branches
          problem="Grade 10 starts soon"
          options={[
            { choice: 'Wait and see', outcome: 'Good habits start late.' },
            { choice: 'Plan now', outcome: 'You start with a plan.' },
          ]}
          aria="A decision tree. Grade 10 starts soon. Choice one: wait and see, and good habits start late. Choice two: plan now, and you start with a plan."
        />
        <Worked
          title="A plan before Grade 10"
          steps={[<>Review your goals.</>, <>Fix one habit, such as a set study time.</>, <>Name two people who can support you.</>, <>Talk to a counsellor about your subjects.</>]}
        />
        <Mistake>Expecting Grade 10 to be just like Grade 9, or thinking small decisions do not count. Your daily choices add up.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is goal review, and why is reflection important?" answer="Looking back at your goals and how well you met them. Reflection helps you see your progress and growth." />
        <Check question="What is resilience, and who can be in your support network?" answer="The ability to bounce back from problems and keep going. Family, friends, teachers, counsellors and mentors." />
        <Check question="What is an action plan, and how do you stay motivated?" answer="A plan that breaks a goal into steps. Remember why the goal matters and celebrate small wins." />
        <Check question="You did not reach a goal. What do you do?" answer="Look at what happened and change your approach. A setback is a chance to learn." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is goal review?',
    options: ['A step that is not needed once goals are set', 'Looking back at your goals and how well you met them', 'Remembering your goals without writing them down', 'A step that only winning players need to take'],
    answer: 'Looking back at your goals and how well you met them',
    explanation: 'Goal review helps you learn and improve for the future.',
  },
  {
    prompt: 'Why is reflection important?',
    options: ['It is not important when the results are good', 'It helps you see your progress and growth', 'It is daydreaming about things that cannot change', 'It wastes time that is better used for practice'],
    answer: 'It helps you see your progress and growth',
    explanation: 'Reflection builds self-awareness and learning.',
  },
  {
    prompt: 'What is resilience?',
    options: ['Giving up when a task becomes too hard', 'The ability to bounce back from problems and keep going', 'A quality that only tough people are born with', 'A quality that cannot be learned or improved'],
    answer: 'The ability to bounce back from problems and keep going',
    explanation: 'Resilience is a skill that can be developed.',
  },
  {
    prompt: 'Why do support networks matter?',
    options: ['They do not help, since each person must cope alone', 'They give help, guidance and encouragement when needed', 'They show weakness, so it is best not to have one', 'They are not important to young people at school'],
    answer: 'They give help, guidance and encouragement when needed',
    explanation: 'Everyone needs support, and building networks is smart.',
  },
  {
    prompt: 'Who can be part of your support network?',
    options: ['No one, since a support network is not for teens', 'Family, friends, teachers, counsellors and mentors', 'Parents only, as they know you best of all', 'Friends only, as they are your own age'],
    answer: 'Family, friends, teachers, counsellors and mentors',
    explanation: 'Support networks include many different types of people and resources.',
  },
  {
    prompt: 'What is an action plan?',
    options: ['A wish that you hope will come true one day', 'A detailed plan that breaks goals into steps', 'A plan that does not help in reaching a goal', 'A plan that is needed for large goals only'],
    answer: 'A detailed plan that breaks goals into steps',
    explanation: 'Action plans make goals more achievable.',
  },
  {
    prompt: 'How do you maintain motivation?',
    options: ['It just happens, so you do not have to work at it', 'By remembering why your goal matters and celebrating small wins', 'By forcing yourself to carry on, whatever you feel', 'By waiting for inspiration to come back to you'],
    answer: 'By remembering why your goal matters and celebrating small wins',
    explanation: 'Consistent motivation requires active management.',
  },
  {
    prompt: 'What should you do if you do not achieve a goal?',
    options: ['Give up, since the goal was not meant to be', 'Look at what happened and change your approach', 'Pretend that the goal did not matter to you', 'Never try again, so that you avoid more failure'],
    answer: 'Look at what happened and change your approach',
    explanation: 'Setbacks are learning opportunities.',
  },
  {
    prompt: 'How does decision-making shape your future?',
    options: ['They do not, as the future is set by luck', 'Your choices today shape your chances and paths tomorrow', 'They matter little, since you can change course any time', 'Only the big decisions count and small ones do not'],
    answer: 'Your choices today shape your chances and paths tomorrow',
    explanation: 'Decisions have real consequences for your future.',
  },
  {
    prompt: 'What should you do as you enter the FET phase?',
    options: ['Nothing special, as the FET phase is much like Grade 9', 'Sharpen your goals, build good habits and ask for support', 'Carry on as you did in Grade 9 and see what happens', 'Wait for the teachers to tell you what to do each term'],
    answer: 'Sharpen your goals, build good habits and ask for support',
    explanation: 'Active preparation sets you up for FET success.',
  },
];

const ResponsibleFuturePlanning = () => (
  <CapsSubjectTopic
    title="Responsible Future Planning"
    subtitle="Goals, resilience, and the next phase"
    learnSteps={learnSteps}
    task="gr9-responsible-future-planning-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default ResponsibleFuturePlanning;
