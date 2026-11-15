import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Loop, WeekLog } from '@/components/diagrams/lo/LoPictures';
import { meetsTarget, scoreDrop, sessionsIn } from '@/components/diagrams/lo/loHelpers';

// Every number in the slides below comes from these tested helpers (loHelpers.test.ts).
export const stress = { before: 8, after: 5, drop: scoreDrop(8, 5) };
export const goal = { minutes: 30, perWeek: 3, weeks: 4 };
export const weekLog = [true, false, true, false, false, true, false];
export const weekSessions = sessionsIn(weekLog);
export const weekMet = meetsTarget(weekLog, goal.perWeek);
export const lowLog = [false, false, true, false, false, false, false];
export const lowSessions = sessionsIn(lowLog);
export const lowMet = meetsTarget(lowLog, goal.perWeek);
export const check = { drop: scoreDrop(7, 4), perWeek: goal.perWeek * goal.weeks };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const text = 'text-lg leading-8 text-slate-600';

export const learnSteps: LearnStep[] = [
  {
    title: 'Movement and stress relief',
    content: slide(
      <>
        <p className={text}>Physical activity helps the body use up the tension that stress builds. Movement releases tension and lifts mood, and it also gives your mind a break from worry. It works best alongside enough sleep and rest. It does not replace them.</p>
        <Rule>Used in a balanced way, physical activity is a healthy way to manage stress.</Rule>
        <Worked
          title="Rating stress before and after"
          steps={[
            <>Before a Maths test, Thandi rates her stress {stress.before} out of 10.</>,
            <>She walks briskly for 20 minutes with a friend, then rates it again: {stress.after} out of 10.</>,
            <>The drop is {stress.before} − {stress.after} = <strong>{stress.drop} points</strong>. A rating before and after is simple evidence for your reflection.</>,
          ]}
        />
        <Mistake>Believing activity replaces rest. Exercise lifts mood, but a tired body still needs sleep and recovery.</Mistake>
      </>,
    ),
  },
  {
    title: 'Setting a fitness goal',
    content: slide(
      <>
        <p className={text}>A good goal is realistic and measurable, so you can tell at the end whether you reached it. It is linked to your own effort, not to someone else's results. Goals can aim at more activity, better endurance, a practised skill or steadier participation.</p>
        <Rule>A fitness goal must be realistic and measurable, and you must be able to review it.</Rule>
        <Loop steps={['Set goal', 'Do it', 'Record', 'Reflect', 'Adjust']} aria="A loop of five steps in order: set a goal, do it, record it, reflect on it, adjust it, then back to doing it." />
        <Worked
          title="From a vague goal to a measurable one"
          steps={[
            <>Vague: &ldquo;I want to get fit.&rdquo; You cannot measure it.</>,
            <>Measurable: walk for {goal.minutes} minutes, {goal.perWeek} times a week, for {goal.weeks} weeks.</>,
            <>That is {goal.perWeek} × {goal.weeks} = <strong>{check.perWeek} sessions</strong> to record and review.</>,
          ]}
        />
        <Mistake>Choosing a goal by comparing yourself with others. Compare today's effort with your own earlier effort.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rules, teamwork and fair play',
    content: slide(
      <>
        <p className={text}>Rules keep games safe, fair and organised, and they apply to every team, including the one that is losing. Teamwork means communicating, supporting each other and sharing the effort. Fair play means following the rules, encouraging others, controlling frustration and valuing taking part, not only winning.</p>
        <Rule>Fair play: respect the rules, encourage teammates, stay honest, and value participation.</Rule>
        <Worked
          title="Choosing fair play in a match"
          steps={[
            <>Your team is losing. You touch the ball last before it goes out, and the referee did not see.</>,
            <>Cheating would break the rule and be unfair to the other team.</>,
            <>Fair play: be honest, accept the decision, and encourage your teammates to keep trying.</>,
          ]}
        />
        <Mistake>Cheating &ldquo;because the referee is not watching&rdquo; or insulting weaker players. Rules and respect apply to everyone, all the time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reflection and active living',
    content: slide(
      <>
        <p className={text}>Reflection means noticing how movement affects your energy, mood and focus, and how well you kept to your goal. If participation was low, reflect and adjust the routine or goal. Active living is the habit of choosing regular movement, such as sport, walking, dance or home fitness, not exercise only before an assessment.</p>
        <WeekLog
          rows={[
            { label: 'Week A', days: weekLog },
            { label: 'Week B', days: lowLog },
          ]}
          aria={`Two weekly logs. Week A has ${weekSessions} active days and Week B has ${lowSessions}.`}
        />
        <Rule>Reflect, then adjust. Regular movement through the week is active living.</Rule>
        <Worked
          title={`Review against the goal of ${goal.perWeek} sessions a week`}
          steps={[
            <>Week A: {weekSessions} sessions, so the goal was {weekMet ? 'met' : 'not met'}.</>,
            <>Week B: {lowSessions} session, so the goal was {lowMet ? 'met' : 'not met'}.</>,
            <>Reflection: what got in the way? Adjust, for example by fixing set days, rather than dropping the goal.</>,
          ]}
        />
        <Mistake>Blaming the weather or timetable, or stopping altogether. Reflection must lead to a realistic next step.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>A learner rates stress 7 out of 10 before a game and 4 after. What is the drop?</>,
          <>Is &ldquo;get fitter&rdquo; a good goal? Say why, or rewrite it.</>,
          <>Name two behaviours that show fair play.</>,
          <>You planned {goal.perWeek} sessions a week for {goal.weeks} weeks. How many sessions is that, and what should you do if you fall behind?</>,
        ]}
        answers={[
          <>7 − 4 = {check.drop} points.</>,
          <>No, it is not measurable. Better: walk 30 minutes, 3 times a week, for 4 weeks.</>,
          <>For example: respecting the rules and encouraging teammates (also honesty, controlling frustration).</>,
          <>{goal.perWeek} × {goal.weeks} = {check.perWeek} sessions. Reflect and adjust the routine or goal; do not quit.</>,
        ]}
      />,
    ),
  },
];

