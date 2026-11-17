import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { WeekLog } from '@/components/diagrams/lo/LoPictures';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { PLAN, activeDays, minutesShort, weekMinutes } from '@/components/diagrams/lo/lo12Helpers';

// Every number below comes from lo12Helpers.ts (tested in lo12Helpers.test.ts and g12LoWaveA.test.ts).
const total = weekMinutes(PLAN.days);
const days = activeDays(PLAN.days);
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Long-term effects of being active',
    content: slide(
      <>
        <Rule>Regular physical activity over many years has long-term effects on the body, the mind, your relationships and your feelings. Committing to it is a choice that pays off for life.</Rule>
        <KeyTable
          title="Long-term effects of regular activity"
          head={['Kind of effect', 'Example']}
          aria="A table of the long-term effects of regular physical activity. Physical: a stronger heart and a healthy weight. Mental: better concentration and less stress. Social: friends and team spirit. Emotional: more confidence and a better mood."
          rows={[
            ['Physical', 'Stronger heart, healthy weight'],
            ['Mental', 'Better concentration, less stress'],
            ['Social', 'Friends, team spirit'],
            ['Emotional', 'More confidence, better mood'],
          ]}
        />
        <Worked
          steps={[
            <>A learner who walks or plays sport most days sleeps better and copes better with exam stress.</>,
            <>A team sport also builds friendships and a sense of belonging.</>,
          ]}
        />
        <Mistake>Thinking that exercise is only about looking fit. It also protects the mind and your relationships.</Mistake>
      </>,
    ),
  },
  {
    title: 'Building an action plan',
    content: slide(
      <>
        <Rule>An action plan turns a wish into a routine. It states the goal, the activity, the days, the minutes and how you will check your progress. A good plan is realistic and can grow over time.</Rule>
        <WeekLog
          rows={[{ label: 'My plan', days: PLAN.days.map((d) => d.minutes > 0) }]}
          aria={`A weekly plan with ${days} active days: ${PLAN.days.filter((d) => d.minutes > 0).map((d) => `${d.day} ${d.minutes} minutes`).join(', ')}. Total ${total} minutes, which is above the target of ${PLAN.target} minutes.`}
        />
        <KeyTable
          title="The plan in minutes"
          head={['Day', 'Minutes']}
          aria={`The plan in minutes: ${PLAN.days.map((d) => `${d.day} ${d.minutes}`).join(', ')}. Total ${total}.`}
          rows={[...PLAN.days.map((d) => [d.day, String(d.minutes)] as const), ['Total', `${total} minutes`] as const]}
        />
        <Worked
          steps={[
            `Total: 30 + 45 + 30 + 60 = ${total} minutes on ${days} days.`,
            `Target: ${PLAN.target} minutes. ${total} is above ${PLAN.target}, so the target is met. Minutes short: ${minutesShort(total, PLAN.target)}.`,
            <>Check each week and change the plan if it is too hard or too easy.</>,
          ]}
        />
        <Mistake>Writing a plan that is far too hard, such as an hour every single day from the first week. A plan that cannot be kept helps no one.</Mistake>
      </>,
    ),
  },
  {
    title: 'Benefits and diseases of lifestyle',
    content: slide(
      <>
        <Rule>Regular activity has value-added benefits: it lowers the risk of diseases of lifestyle such as high blood pressure, heart disease and some cancers, and it helps to control body weight and stress.</Rule>
        <KeyTable
          title="Benefits and how to overcome a barrier"
          head={['Barrier', 'A way round it']}
          aria="A table of barriers to activity and a way round each. No gym: walk, run or skip at home. No time: three short sessions of ten minutes. No money: free games and exercises at school or in the park. Feeling shy: join a friend or a group."
          rows={[
            ['No gym', 'Walk, run or skip at home'],
            ['No time', 'Three short sessions of 10 minutes'],
            ['No money', 'Free games at school or in the park'],
            ['Feeling shy', 'Go with a friend or a group'],
          ]}
        />
        <Worked
          steps={[
            <>Moving more lowers blood pressure and strengthens the heart. That cuts the risk of the lifestyle diseases from the last lesson.</>,
            <>Activity is free: walking to school or playing in the street counts.</>,
          ]}
        />
        <Mistake>Waiting for a gym or special clothes before starting. The best plan is the one you can begin today.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the four kinds of long-term effect of regular activity.</>,
          <>A plan has 30, 45 and 30 minutes on three days. How many minutes in total, and how many short of {PLAN.target}?</>,
          <>Give one way to overcome the barrier &ldquo;no gym&rdquo;.</>,
          <>Which lifestyle diseases does regular activity help to prevent?</>,
        ]}
        answers={[
          <>Physical, mental, social and emotional.</>,
          <>30 + 45 + 30 = <strong>{weekMinutes([{ day: 'a', minutes: 30 }, { day: 'b', minutes: 45 }, { day: 'c', minutes: 30 }])} minutes</strong>, which is {minutesShort(105, PLAN.target)} minutes short.</>,
          <>Walk, run, skip or do exercises at home.</>,
          <>Hypertension, heart disease and some cancers.</>,
        ]}
      />,
    ),
  },
];
