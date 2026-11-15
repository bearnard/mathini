import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { LapBars, ProgressLine } from '../../../../../components/diagrams/lo/PePictures';
import { comma, sum, timeProgress } from '../../../../../components/diagrams/lo/peHelpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const steady = [70, 70, 70, 70];
const fastStart = [55, 70, 85, 100];
const weeklyTimes = [15.2, 14.9, 14.6, 14.4];
const progress = timeProgress(weeklyTimes);

export const learnSteps: LearnStep[] = [
  {
    title: 'Endurance and pacing',
    content: slide(
      <>
        <Rule>Endurance is the ability to keep going for longer. Steady interval running over set distances builds it. In a longer run, start controlled and keep a steady effort.</Rule>
        <LapBars a={steady} b={fastStart} nameA="Steady start" nameB="Too fast, then slow" aria={`Two runners' four laps on one scale. The steady runner takes ${sum(steady)} seconds. The runner who starts too fast slows down and takes ${sum(fastStart)} seconds.`} />
        <Worked
          title="Two runners, four laps"
          steps={[<>Steady runner: 4 × {steady[0]} s = {sum(steady)} s.</>, <>Fast starter: {fastStart.join(' + ')} = {sum(fastStart)} s.</>, <>The steady runner finishes {sum(fastStart) - sum(steady)} s sooner.</>]}
        />
        <Mistake>Sprinting at the start of a long run. You run out of energy and slow down. Control your pace and save energy to finish strongly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Flexibility, warm-up and cool-down',
    content: slide(
      <>
        <Rule>Flexibility training improves your range of movement and reduces injury risk. Before a timed run, warm up gradually with dynamic movement. Afterwards, a cool-down lowers your heart rate and helps you recover.</Rule>
        <StepFlow steps={['Jog lightly.', 'Dynamic leg swings.', 'A few gentle build-up runs.', 'Run your timed event, then cool down.']} aria="Steps around a timed run in order: jog lightly, dynamic leg swings, a few gentle build-up runs, run the timed event and then cool down." />
        <Worked
          title="Before a timed run"
          steps={[<>Jog lightly to raise your heart rate.</>, <>Swing your legs to widen your range of movement.</>, <>Do gentle build-up runs.</>, <>After the run, walk slowly until your breathing settles.</>]}
        />
        <Mistake>Skipping the warm-up and going straight into a fast run, or stopping dead at the finish. Warm up gradually and cool down.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tracking your progress',
    content: slide(
      <>
        <Rule>To track personal progress in athletics, record your times and compare the improvement over weeks.</Rule>
        <ProgressLine values={weeklyTimes} firstLabel="Week 1" lastLabel="Week 4" unit="s" aria={`A line chart of four weekly run times: ${weeklyTimes.map(comma).join(', ')} seconds, getting faster each week.`} />
        <Worked
          title="Four weeks of run times"
          steps={[<>Record each week: {weeklyTimes.map(comma).join(' s, ')} s.</>, <>Compare week 4 with week 1: {comma(progress.first)} − {comma(progress.last)} = {comma(progress.faster)} s.</>, <>You are {comma(progress.faster)} s faster. Set a new goal.</>]}
        />
        <Mistake>Judging yourself from one run. A single result can be good or bad for many reasons. Look at the records over weeks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Indigenous games and relay teamwork',
    content: slide(
      <>
        <Rule>Indigenous games are traditional games from our communities. They build teamwork while celebrating cultural heritage. In a relay, teamwork means giving your teammate clear handover cues.</Rule>
        <Worked
          title="A relay handover"
          steps={[<>The next runner stands ready and looks ahead.</>, <>The runner arriving calls “Now!” as the baton reaches out.</>, <>The baton is passed, then the new runner goes.</>]}
        />
        <Mistake>Playing only to win for yourself, or ignoring the rules of the game. In indigenous games and relays the team succeeds through communication and timing.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="Which activity builds endurance, and what is a good pacing strategy for a longer run?" answer="Steady interval running over set distances. Start controlled and keep a steady effort." />
        <Check question="Why is flexibility training important, and what should you do before a timed run?" answer="It improves movement range and reduces injury risk. Warm up gradually with dynamic movement." />
        <Check question="How can you track personal progress in athletics?" answer="Record your times and compare the improvement over weeks." />
        <Check question="Name one value of indigenous games and one teamwork action in a relay." answer="They build teamwork while celebrating cultural heritage. In a relay, give clear handover cues." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which activity best builds endurance?',
    options: [
      'Steady interval running over set distances',
      'One short sprint then complete rest',
      'Skipping every second practice',
      'Only stretching with no movement drills',
    ],
    answer: 'Steady interval running over set distances',
    explanation: 'Regular aerobic intervals improve stamina and pace control.',
  },
  {
    prompt: 'Why is flexibility training important?',
    options: [
      'It improves movement range and reduces injury risk',
      'It replaces all warm-up activities',
      'It means running technique no longer matters',
      'It is only for professional athletes',
    ],
    answer: 'It improves movement range and reduces injury risk',
    explanation: 'Flexible muscles and joints support safer, smoother movement.',
  },
  {
    prompt: 'What should learners do before a timed running event?',
    options: ['Warm up gradually with dynamic movement', 'Start at maximum speed immediately', 'Skip hydration and preparation', 'Sit quietly until the whistle'],
    answer: 'Warm up gradually with dynamic movement',
    explanation: 'A proper warm-up prepares the body for safe performance.',
  },
  {
    prompt: 'What is one value of indigenous games in PE?',
    options: [
      'They build teamwork while celebrating cultural heritage',
      'They remove the need for physical effort',
      'They are only for spectators',
      'They encourage unfair rule changes',
    ],
    answer: 'They build teamwork while celebrating cultural heritage',
    explanation: 'Indigenous games develop skills and cultural awareness together.',
  },
  {
    prompt: 'How can a learner track personal progress in athletics?',
    options: [
      'Record times and compare improvement over weeks',
      'Ignore all performance results',
      'Measure progress once at year end only',
      'Guess results without evidence',
    ],
    answer: 'Record times and compare improvement over weeks',
    explanation: 'Simple records help learners see growth and set goals.',
  },
  {
    prompt: 'Which action shows teamwork in a relay?',
    options: ['Giving clear handover cues to your teammate', 'Running in another lane to overtake', 'Starting before your teammate arrives', 'Blaming others after every attempt'],
    answer: 'Giving clear handover cues to your teammate',
    explanation: 'Relay success depends on communication and timing.',
  },
  {
    prompt: 'What is the best pacing strategy for a longer run?',
    options: [
      'Start controlled and maintain steady effort',
      'Sprint at full speed for the entire race',
      'Walk most of the race without plan',
      'Stop whenever another runner passes',
    ],
    answer: 'Start controlled and maintain steady effort',
    explanation: 'Controlled pacing helps sustain energy to finish strongly.',
  },
  {
    prompt: 'Why is cool-down important after PE?',
    options: [
      'It helps the body recover safely',
      'It increases injury risk intentionally',
      'It replaces skill practice sessions',
      'It is only needed in winter',
    ],
    answer: 'It helps the body recover safely',
    explanation: 'Cool-down lowers heart rate gradually and supports recovery.',
  },
];

const PhysicalEducationT3 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Athletics, indigenous games, flexibility, endurance, and teamwork"
    learnSteps={learnSteps}
    task="gr7-physical-education-t3"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PhysicalEducationT3;
