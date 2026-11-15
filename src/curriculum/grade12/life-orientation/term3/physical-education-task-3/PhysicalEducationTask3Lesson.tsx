import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Loop, WeekLog } from '@/components/diagrams/lo/LoPictures';
import { attendancePercent, sessionsIn } from '@/components/diagrams/lo/loHelpers';

// Every number in the slides below comes from these tested helpers (loHelpers.test.ts).
export const steady = [true, false, true, false, true, false, false];
export const burst = [false, false, false, false, false, true, false];
export const steadyCount = sessionsIn(steady);
export const burstCount = sessionsIn(burst);
export const record = { planned: 12, attended: 9, pct: attendancePercent(9, 12) };
export const target = { current: record.attended, planned: record.planned, next: record.attended + 1 };
export const check = { pct: attendancePercent(6, 8), missed: 8 - 6 };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const text = 'text-lg leading-8 text-slate-600';

export const learnSteps: LearnStep[] = [
  {
    title: 'Consistency maintains fitness',
    content: slide(
      <>
        <p className={text}>Fitness is maintained by regular participation and effort, not by one hard session now and then. Consistent activity usually improves fitness, builds skill confidence and turns exercise into a routine. Training only when you are assessed, or only once a term, does not maintain fitness.</p>
        <WeekLog
          rows={[
            { label: 'Steady', days: steady },
            { label: 'One burst', days: burst },
          ]}
          aria={`Two weekly logs. The steady learner was active on ${steadyCount} days. The learner who trained once had ${burstCount} active day.`}
        />
        <Rule>Regular participation maintains fitness. One intense session does not.</Rule>
        <Worked
          title="Comparing two learners"
          steps={[
            <>Steady: {steadyCount} shorter sessions spread across the week.</>,
            <>One burst: {burstCount} very hard session and nothing else.</>,
            <>The steady learner builds a routine and a lasting improvement. Regular effort wins.</>,
          ]}
        />
        <Mistake>Believing consistent training guarantees competition success. It improves fitness and confidence, but it does not guarantee a win.</Mistake>
      </>,
    ),
  },
  {
    title: 'Teamwork and cooperation',
    content: slide(
      <>
        <p className={text}>Many activities need you to cooperate, communicate and adapt to other people. Teamwork builds trust and cooperation, and it teaches every learner to contribute even when ability levels differ. Everyone has a role, so nobody should be left to do nothing and nobody should be left out.</p>
        <Rule>Respond to different ability levels with respect and inclusion.</Rule>
        <Worked
          title="A mixed-ability practice"
          steps={[
            <>Your group has strong players and beginners.</>,
            <>Share turns, give clear and kind instructions, and adapt the drill so everyone can take part.</>,
            <>Result: trust grows and everyone improves. Teasing weaker players, or letting the strongest take most turns, does neither.</>,
          ]}
        />
        <Mistake>Leaving beginners to practise alone or teasing them &ldquo;to push them&rdquo;. That excludes people. Support and respect help more.</Mistake>
      </>,
    ),
  },
  {
    title: 'Self-discipline and responsibility',
    content: slide(
      <>
        <p className={text}>Self-discipline in PET means arriving prepared, following your routine, managing your effort and staying committed. It is personal responsibility for your health, not waiting for a coach or last-minute motivation. Responsible choices also include balancing effort with rest, drinking enough water and getting help with an injury.</p>
        <Rule>Self-discipline is being prepared and following through. Responsibility includes rest, hydration and safe practice.</Rule>
        <Worked
          title="A tired learner on a training day"
          steps={[
            <>You are tired but not ill, and the session is planned.</>,
            <>Prepare your kit and water, then do the session at a sensible effort.</>,
            <>If you feel pain or repeated exhaustion, stop and ask for help. Do not train through injury alone.</>,
          ]}
        />
        <Mistake>Skipping sessions when you are busy or tired, or ignoring repeated exhaustion. Discipline means follow-through and balance, not pushing through harm.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reviewing participation and progress',
    content: slide(
      <>
        <p className={text}>A participation record lets you reflect honestly on attendance, effort, strengths and areas to improve. It is not for hiding weak effort and marks are not the only purpose. If you notice poor consistency, set a realistic improvement target and review again.</p>
        <Loop steps={['Record', 'Review', 'Set target', 'Act']} aria="A loop of four steps: record participation, review it honestly, set a realistic target, act on it, then record again." />
        <Worked
          title="Reading a participation record"
          steps={[
            <>You planned {record.planned} sessions this term and attended {record.attended}.</>,
            <>{record.attended} ÷ {record.planned} × 100 = <strong>{record.pct}%</strong> attendance.</>,
            <>Realistic target: aim for {target.next} of {target.planned} next term, then review again.</>,
          ]}
        />
        <Mistake>Hiding the record or ignoring poor consistency until the end of the year. Honest reflection is what makes improvement possible.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which keeps fitness better: one intense session a term or regular sessions? Why?</li>
            <li>Name two ways teammates can support different ability levels.</li>
            <li>You attended 6 of 8 planned sessions. What is your attendance percentage?</li>
            <li>Your consistency is poor. What should you do?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Regular sessions. Fitness is maintained through consistent activity over time.</li>
            <li>For example: share turns and give kind, clear help, so no one is excluded.</li>
            <li>6 ÷ 8 × 100 = {check.pct}%. You missed {check.missed} sessions.</li>
            <li>Reflect honestly and set a realistic improvement target.</li>
          </ol>
        }
      />,
    ),
  },
];

