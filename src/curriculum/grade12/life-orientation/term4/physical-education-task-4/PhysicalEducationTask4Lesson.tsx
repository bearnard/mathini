import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { CriteriaTable, Spokes, WeekLog } from '@/components/diagrams/lo/LoPictures';
import { bestOption, criteriaMet, meetsTarget, sessionsIn, weeksMeeting } from '@/components/diagrams/lo/loHelpers';
import type { ActivityOption } from '@/components/diagrams/lo/loHelpers';

// Every number in the slides below comes from these tested helpers (loHelpers.test.ts).
export const options: ActivityOption[] = [
  { name: 'Walking with friends', safe: true, affordable: true, enjoyable: true, accessible: true },
  { name: 'Gym far from home', safe: true, affordable: false, enjoyable: true, accessible: false },
  { name: 'Activity you hate', safe: true, affordable: true, enjoyable: false, accessible: true },
];
export const best = bestOption(options);
export const bestScore = criteriaMet(best);
export const routine = ['Activity', 'Sleep', 'Water', 'Food', 'Recovery'] as const;
export const plan = { target: 3, week: [true, false, true, false, true, false, false] };
export const planCount = sessionsIn(plan.week);
export const planMet = meetsTarget(plan.week, plan.target);
export const fourWeeks = [3, 3, 2, 3];
export const weeksHit = weeksMeeting(fourWeeks, plan.target);
export const hardWeek = [true, true, true, true, true, true, true];
export const check = { weeksHit: weeksMeeting([3, 1, 3, 3], 3) };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const text = 'text-lg leading-8 text-slate-600';

export const learnSteps: LearnStep[] = [
  {
    title: 'A lifelong fitness mindset',
    content: slide(
      <>
        <p className={text}>Physical activity matters after school because it supports lasting physical and mental health, energy, routine and balance in adult life. It does not matter only while you are a learner, and it does not replace medical check-ups, work or the support of family and friends.</p>
        <Rule>See movement as a lifelong habit, not a school-only requirement.</Rule>
        <Worked
          title="What activity gives you as an adult"
          steps={[
            <>Health: it helps the body stay strong and supports disease prevention.</>,
            <>Mind: it supports mental wellbeing and helps with stress.</>,
            <>Life: it gives you routine and balance. It will not guarantee a job or remove all work stress.</>,
          ]}
        />
        <Mistake>Thinking fitness is only for school sport or a professional team. Its value lasts through adult life.</Mistake>
      </>,
    ),
  },
  {
    title: 'Choosing recreation options',
    content: slide(
      <>
        <p className={text}>Adult fitness can be walking, gym work, running, community sport, dance, cycling or home exercise. The best choice is the one you can keep doing. It must be safe, affordable, enjoyable and accessible, so choose by these four, not by copying others or what looks impressive.</p>
        <CriteriaTable options={options} aria={`A table scoring three activities on four criteria. ${options.map((o) => `${o.name}: ${criteriaMet(o)} of 4`).join('. ')}.`} />
        <Worked
          title="Score each option"
          steps={[
            <>Count the ticks for each option: {options.map((o) => `${criteriaMet(o)}`).join(', ')} out of 4.</>,
            <>The most sustainable option is <strong>{best.name}</strong>, with {bestScore} of 4.</>,
            <>Enjoyment matters because effort is easier to keep up over time.</>,
          ]}
        />
        <Mistake>Picking an activity you dislike because others do it. If you hate it, you will not keep it up.</Mistake>
      </>,
    ),
  },
  {
    title: 'Healthy routines and self-care',
    content: slide(
      <>
        <p className={text}>Healthy routines combine activity with sleep, hydration, nutrition and recovery. Wellbeing is strongest when exercise fits into a balanced lifestyle, not when it is extreme or inconsistent. A routine with no rest days, or one that cuts into sleep, works against your health.</p>
        <Spokes centre="Healthy routine" spokes={routine} aria="A centre circle, healthy routine, with five spokes: activity, sleep, water, food and recovery." />
        <Rule>A healthy routine balances activity with sleep, water, food and recovery.</Rule>
        <Mistake>Adding extra training with no rest days, or late-night screen time instead of sleep. Both unbalance the routine.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sustainable goals and evidence',
    content: slide(
      <>
        <p className={text}>A sustainable goal is realistic enough to continue beyond one assessment. It focuses on consistency, enjoyment and personal responsibility. Participation evidence, such as a simple log, helps you track commitment and reflect. It does not replace the activity itself.</p>
        <WeekLog
          rows={[{ label: 'My week', days: plan.week }, { label: 'Hard week', days: hardWeek }]}
          aria={`Two weekly logs. My week has ${planCount} active days and a hard week has 7, with no rest.`}
        />
        <Worked
          title={`Goal: train ${plan.target} times a week`}
          steps={[
            <>The week shown has {planCount} sessions, so the goal was {planMet ? 'met' : 'not met'}.</>,
            <>Over four weeks the log reads {fourWeeks.join(', ')}. The goal was met in <strong>{weeksHit} of 4 weeks</strong>.</>,
            <>Reflect on the week that fell short and adjust the plan gradually.</>,
          ]}
        />
        <Mistake>Exercising hard for one week and then stopping, or setting impossible targets. Extreme routines you cannot maintain lead to inconsistency or injury.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give two reasons physical activity still matters in adult life.</>,
          <>Name the four things a sustainable activity choice should be.</>,
          <>Name three parts of a healthy routine besides exercise.</>,
          <>A log reads 3, 1, 3, 3 sessions for four weeks and the goal is 3 a week. In how many weeks was it met?</>,
        ]}
        answers={[
          <>For example: it supports health and mental wellbeing, and gives routine and balance.</>,
          <>Safe, affordable, enjoyable and accessible.</>,
          <>Sleep, hydration (water), nutrition (food) and recovery.</>,
          <>{check.weeksHit} of 4 weeks (all except the week with 1 session).</>,
        ]}
      />,
    ),
  },
];

