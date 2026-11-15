import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Branches, StepFlow, WeekBars } from '../../../../../components/diagrams/lo/PswPictures';
import { buildUp } from '../../../../../components/diagrams/lo/lo6Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// The minutes in the endurance example come from this tested helper (lo6Helpers.test.ts).
const build = buildUp(10, 2, 3);

export const learnSteps: LearnStep[] = [
  {
    title: 'Relay: the baton exchange',
    content: slide(
      <>
        <Rule>In a relay the baton exchange decides the race. It needs good timing and clear communication between the two runners, and both must stay aware of their lane.</Rule>
        <StepFlow steps={['The next runner starts moving as the baton arrives.', 'The runner with the baton calls clearly.', 'Pass the baton inside the exchange zone.', 'Keep running until the lane is clear.']} aria="Four steps for a baton exchange in order: the next runner starts moving, the runner with the baton calls clearly, pass inside the exchange zone, keep running until the lane is clear." />
        <Worked
          title="Anele passes to Buhle"
          steps={[<>Buhle starts to move when Anele is close.</>, <>Anele calls to Buhle.</>, <>Buhle puts a hand back and takes the baton.</>, <>Both stay in their lanes until the pass is done.</>]}
        />
        <Mistake>Ignoring a teammate's signals, running without lane awareness, or starting before the instructions. Each one causes a dropped baton or a disqualification.</Mistake>
      </>,
    ),
  },
  {
    title: 'Endurance and athletics',
    content: slide(
      <>
        <Rule>Endurance means keeping up effort over a period of time, as in distance running. A sprint is one short, fast effort. Build endurance gradually, adding a little each session.</Rule>
        <WeekBars days={['Mon', 'Wed', 'Fri']} minutes={build.sessions} aria={`Three bars for Monday, Wednesday and Friday showing ${build.sessions.join(', ')} minutes of running, ${build.total} minutes in the week.`} />
        <Worked
          title="A gradual running plan"
          steps={[<>Start with {build.sessions[0]} minutes of steady running.</>, <>Add 2 minutes each session: {build.sessions.join(', ')}.</>, <>Total for the week: {build.total} minutes.</>, <>Keep a steady pace instead of sprinting at the start.</>]}
        />
        <Mistake>Thinking one short sprint is endurance, or going flat out at the start so you stop after a few steps. Endurance is steady effort over time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Flexibility and safe technique',
    content: slide(
      <>
        <Rule>Warm up first, then stretch under control. Warm muscles stretch more safely. Finish with a cool-down. Proper warm-up, technique and cool-down reduce the risk of injury.</Rule>
        <StepFlow steps={['Warm up the body first.', 'Stretch slowly and in control.', 'Hold the stretch and keep breathing.', 'Cool down at the end.']} aria="Four steps for safe stretching in order: warm up, stretch slowly in control, hold and keep breathing, cool down." />
        <Worked
          title="You feel pain in a stretch"
          steps={[<>Stop. Pain is a warning signal.</>, <>Ease off until you feel only a mild pull.</>, <>Keep breathing steadily.</>, <>Tell your teacher if the pain stays.</>]}
        />
        <Mistake>Skipping the warm-up, forcing a painful stretch suddenly, holding your breath or ignoring pain. These can cause injury.</Mistake>
      </>,
    ),
  },
  {
    title: 'Indigenous games, teamwork and fair play',
    content: slide(
      <>
        <Rule>Indigenous games, such as diketo and morabaraba, build movement skills and cultural appreciation. Fair play means following the rules, respecting all players, encouraging teammates and reflecting on your own progress.</Rule>
        <Branches
          problem="Your team is losing the game"
          options={[
            { choice: 'Cheat to win', outcome: 'The game is unfair and trust is lost.' },
            { choice: 'Follow the rules and encourage', outcome: 'The game stays fair and the team grows.' },
          ]}
          aria="A decision tree. Your team is losing. Choice one: cheat to win, and the game is unfair and trust is lost. Choice two: follow the rules and encourage, and the game stays fair and the team grows."
        />
        <Worked
          title="Reflect after the lesson"
          steps={[<>Ask: which skill improved? For example, passing.</>, <>Ask: what will I practise next? For example, calling for the baton.</>, <>Set one small goal for next class.</>]}
        />
        <Mistake>Blaming others for your mistakes, cheating when you are losing, or leaving out the weaker players. Fair play includes everyone.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is most important during a relay baton exchange?" answer="Timing and clear communication." />
        <Check question="What does endurance mean, and how should you build it?" answer="Keeping up effort over a period of time. Build it gradually, adding a little each session." />
        <Check question="How do you reduce injury risk and stretch safely?" answer="Use a proper warm-up, technique and cool-down. Stretch under control and stop if you feel pain." />
        <Check question="Name one reflection question and one sign of fair participation." answer="“Which skill improved, and what will I practise next?” Fair participation means following the rules and respecting all players." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In relay events, what is most important during baton exchange?',
    options: [
      'Timing and clear communication',
      'Running without lane awareness',
      'Ignoring teammate signals',
      'Starting before instructions',
    ],
    answer: 'Timing and clear communication',
    explanation: 'Efficient exchange depends on coordination and trust.',
  },
  {
    prompt: 'Why are indigenous games included in PET?',
    options: ['They build movement skills and cultural appreciation', 'They take the place of all teamwork', 'They remove the fitness demands of the lesson', 'They are meant for spectators only'],
    answer: 'They build movement skills and cultural appreciation',
    explanation: 'Indigenous games support coordination, social skills, and heritage learning.',
  },
  {
    prompt: 'Which action improves flexibility safely?',
    options: [
      'Controlled stretching after warm-up',
      'Forcing painful stretches suddenly',
      'Skipping warm-ups',
      'Holding breath during all stretches',
    ],
    answer: 'Controlled stretching after warm-up',
    explanation: 'Warm muscles respond better to safe flexibility work.',
  },
  {
    prompt: 'What is a key teamwork behaviour in athletics activities?',
    options: [
      'Encouraging peers and following instructions',
      'Distracting others during events',
      'Refusing to take turns',
      'Ignoring safety zones',
    ],
    answer: 'Encouraging peers and following instructions',
    explanation: 'Supportive behaviour strengthens both performance and class culture.',
  },
  {
    prompt: 'How can learners reduce injury risk in PE?',
    options: [
      'Use proper warm-up, technique, and cool-down',
      'Rush into maximum effort immediately',
      'Compete with unsafe equipment',
      'Ignore pain signals',
    ],
    answer: 'Use proper warm-up, technique, and cool-down',
    explanation: 'Preparation and recovery are essential for safe movement.',
  },
  {
    prompt: 'What does endurance mean in athletics?',
    options: ['Keeping up effort over a period of time', 'One short sprint and nothing more', 'Avoiding all physical activity', 'Stopping after every single step'],
    answer: 'Keeping up effort over a period of time',
    explanation: 'Endurance supports longer performance with controlled energy use.',
  },
  {
    prompt: 'Which reflection question supports PET improvement?',
    options: ['Which skill improved, and what will I practise next?', 'Who should I blame for all of my mistakes?', 'How can I avoid taking part next class?', 'How can I skip the safety routines?'],
    answer: 'Which skill improved, and what will I practise next?',
    explanation: 'Constructive reflection guides next-step practice goals.',
  },
  {
    prompt: 'What is a sign of fair participation in games?',
    options: ['Following rules and respecting all players', 'Arguing about every decision that is made', 'Cheating whenever you are losing', 'Leaving out the weaker members of the team'],
    answer: 'Following rules and respecting all players',
    explanation: 'Fair participation creates safe, inclusive sport experiences.',
  },
];

const PhysicalEducationTask = () => (
  <CapsSubjectTopic
    title="Physical Education Task"
    subtitle="Athletics, relays, indigenous games, flexibility, teamwork, and safe participation"
    learnSteps={learnSteps}
    task="gr8-physical-education-task-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask;
