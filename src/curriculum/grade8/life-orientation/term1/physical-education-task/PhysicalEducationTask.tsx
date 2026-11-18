import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow, WeekBars } from '../../../../../components/diagrams/lo/PswPictures';
import { planSegments, weekPlan } from '../../../../../components/diagrams/lo/pswHelpers';
import { PassDiagram, SessionBar } from '../../../../../components/diagrams/lo/Lo4Pictures';
import { openTeammate, PASS_SCENE } from '../../../../../components/diagrams/lo/lo4Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers in the pictures and worked examples come from the tested helpers (pswHelpers, lo4Helpers).
const lesson = [
  { label: 'Warm-up', minutes: 10, kind: 'warm' as const },
  { label: 'Drills', minutes: 20, kind: 'work' as const },
  { label: 'Game', minutes: 20, kind: 'work' as const },
  { label: 'Cool-down', minutes: 10, kind: 'cool' as const },
];
const lessonTotal = planSegments(lesson).total;
const fitnessWeek = weekPlan([30, 0, 30, 0, 30]);
const open = openTeammate([...PASS_SCENE.mates], [...PASS_SCENE.defenders]);

export const learnSteps: LearnStep[] = [
  {
    title: 'Warm up and cool down',
    content: slide(
      <>
        <Rule>A warm-up prepares your muscles and lowers the risk of injury. A cool-down of light movement and stretching helps your body return to rest safely.</Rule>
        <SessionBar parts={lesson} aria="One PE lesson as a bar: a 10 minute warm-up, 20 minutes of drills, a 20 minute game and a 10 minute cool-down, 60 minutes in total." />
        <Worked
          title={`A ${lessonTotal} minute PE lesson`}
          steps={[<>Warm up for {lesson[0].minutes} minutes with light jogging and easy movements.</>, <>Practise skills in drills for {lesson[1].minutes} minutes, then play a game for {lesson[2].minutes} minutes.</>, <>Cool down for {lesson[3].minutes} minutes with slow walking and stretching.</>, <>Total: {lessonTotal} minutes.</>]}
        />
        <Mistake>Thinking a warm-up is only for athletes, or that it replaces drinking enough water. Also, do not stop suddenly and sit down straight after hard exercise.</Mistake>
      </>,
    ),
  },
  {
    title: 'Basic fitness and skill drills',
    content: slide(
      <>
        <Rule>Basic fitness grows with regular activity and a balance of effort and rest. Skill drills improve your technique through repetition.</Rule>
        <WeekBars days={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']} minutes={[30, 0, 30, 0, 30]} aria="Five bars for Monday to Friday showing 30 minutes of activity on Monday, Wednesday and Friday and rest on Tuesday and Thursday, 90 minutes in the week." />
        <Worked
          title="Build fitness over a week"
          steps={[<>Choose three active days: Monday, Wednesday and Friday.</>, <>Do 30 minutes each day: 3 × 30 = {fitnessWeek.total} minutes.</>, <>Rest on the days in between.</>, <>In each session, repeat one skill drill, such as passing, many times to improve your control.</>]}
        />
        <Mistake>Doing one hard session once a term and nothing else, or avoiding movement practice. Little and often, with rest, works better.</Mistake>
      </>,
    ),
  },
  {
    title: 'Invasion games and teamwork',
    content: slide(
      <>
        <Rule>In an invasion game, such as soccer, netball, basketball or hockey, teams move into the opponents' space to score. A good teammate passes to an open player and keeps watching the space.</Rule>
        <PassDiagram openIndex={open} aria="A pitch seen from above. The player with the ball passes to the open teammate, who has no defender close. The other teammate is marked by a defender." />
        <Worked
          title="You have the ball"
          steps={[<>Look up and check the space around you.</>, <>Find the teammate with no defender close.</>, <>Pass to that open teammate.</>, <>Move into space so you can receive the ball again.</>]}
        />
        <Mistake>Holding the ball every turn, running without watching the space, or ignoring the team's plan. Sharing the ball creates better chances to score.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fair play and safety',
    content: slide(
      <>
        <Rule>Fair play means respecting the rules and your opponents. After a match, thank your teammates and opponents. If equipment looks unsafe, report it to the teacher immediately.</Rule>
        <StepFlow steps={['Stop. Do not use it.', 'Warn others to stay away.', 'Report it to the teacher immediately.', 'Wait for the teacher\u2019s instructions.']} aria="Four steps when equipment looks unsafe in order: stop and do not use it, warn others, report it to the teacher immediately, wait for the teacher's instructions." />
        <Worked
          title="After a close match you lost"
          steps={[<>Shake hands with the other team.</>, <>Thank your teammates and your opponents.</>, <>Listen to feedback from your coach or teacher.</>, <>Accept the result without blaming anyone.</>]}
        />
        <Mistake>Arguing with every decision, cheating to win, or hiding a safety problem. Never use broken equipment or dare friends to try it first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="Why is a warm-up important, and what is a safe cool-down?" answer="A warm-up prepares the muscles and lowers the risk of injury. A safe cool-down is light movement and stretching." />
        <Check question="What builds basic fitness, and why are skill drills useful?" answer="Regular activity with a balance of effort and rest builds fitness. Drills improve technique through repetition." />
        <Check question="You have the ball in an invasion game. What is a good teamwork action?" answer="Pass to an open teammate." />
        <Check question="Name one fair-play action and what to do about unsafe equipment." answer="Respect the rules and opponents, and thank teammates and opponents. Report unsafe equipment to the teacher immediately." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Why is a warm-up important before activity?',
    options: ['It prepares the muscles and lowers the risk of injury', 'It makes the rules of the game unnecessary', 'It takes the place of drinking enough water', 'It is needed only by athletes who compete'],
    answer: 'It prepares the muscles and lowers the risk of injury',
    explanation: 'Warm-ups raise body readiness and improve movement safety.',
  },
  {
    prompt: 'Which behaviour shows fair play?',
    options: [
      'Respecting rules and opponents',
      'Arguing with every decision',
      'Ignoring safety instructions',
      'Cheating to win quickly',
    ],
    answer: 'Respecting rules and opponents',
    explanation: 'Fair play values honesty, respect, and sportsmanship.',
  },
  {
    prompt: 'In invasion games, what is a good teamwork action?',
    options: [
      'Passing to an open teammate',
      'Holding the ball every turn',
      'Running without watching space',
      'Ignoring team strategy',
    ],
    answer: 'Passing to an open teammate',
    explanation: 'Sharing the ball helps teams create better attacking chances.',
  },
  {
    prompt: 'Which option best builds basic fitness?',
    options: ['Regular activity with a balance of effort and rest', 'One intense session once a term and nothing more', 'Staying away from movement practice', 'Skipping the cool-down on every occasion'],
    answer: 'Regular activity with a balance of effort and rest',
    explanation: 'Regular training supports gradual, safer fitness improvement.',
  },
  {
    prompt: 'What should you do if equipment looks unsafe?',
    options: [
      'Report it immediately to the teacher',
      'Use it anyway',
      'Hide the problem from everyone',
      'Challenge friends to use it first',
    ],
    answer: 'Report it immediately to the teacher',
    explanation: 'Reporting hazards protects everyone in the activity space.',
  },
  {
    prompt: 'Which action shows good sportsmanship after a match?',
    options: [
      'Thanking teammates and opponents',
      'Blaming others loudly',
      'Mocking the losing team',
      'Refusing to follow-up feedback',
    ],
    answer: 'Thanking teammates and opponents',
    explanation: 'Respect after competition reflects positive character.',
  },
  {
    prompt: 'Why are skill drills useful in PE?',
    options: [
      'They improve technique through repetition',
      'They remove the need for rules',
      'They only test theory',
      'They are meant to embarrass learners',
    ],
    answer: 'They improve technique through repetition',
    explanation: 'Practice drills build control, accuracy, and confidence.',
  },
  {
    prompt: 'What is a safe cool-down choice after exercise?',
    options: [
      'Light movement and stretching',
      'Stopping suddenly and sitting immediately',
      'Skipping all recovery actions',
      'Running harder without pause',
    ],
    answer: 'Light movement and stretching',
    explanation: 'Cool-down helps the body return to resting state safely.',
  },
];

const PhysicalEducationTask = () => (
  <CapsSubjectTopic
    title="Physical Education Task"
    subtitle="Warm-ups, fitness, invasion games, safety, teamwork, and fair play"
    learnSteps={learnSteps}
    task="gr8-physical-education-task-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask;
