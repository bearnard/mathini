import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Branches, Hub, WeekBars } from '../../../../../components/diagrams/lo/PswPictures';
import { ProgressLine } from '../../../../../components/diagrams/lo/PePictures';
import { countGain, hoursMinutes } from '../../../../../components/diagrams/lo/peHelpers';
import { weekPlan } from '../../../../../components/diagrams/lo/pswHelpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const weekMinutes = [30, 0, 30, 0, 40];
const weekTotal = weekPlan(weekMinutes).total;
const passes = [5, 6, 7, 8];

export const learnSteps: LearnStep[] = [
  {
    title: 'A personal fitness plan',
    content: slide(
      <>
        <Rule>A personal fitness plan has clear goals, activities and a weekly schedule. It must also include rest and recovery, which keeps training safe.</Rule>
        <WeekBars days={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']} minutes={weekMinutes} aria={`Bars for Monday to Friday showing ${weekMinutes.join(', ')} minutes of training. The days with no bar are rest days. ${weekTotal} minutes in the week.`} />
        <Worked
          title="Goal: run for 20 minutes without stopping"
          steps={[<>Activities: jogging on Monday, Wednesday and Friday.</>, <>Rest and recovery on Tuesday and Thursday.</>, <>Minutes: {weekMinutes.filter((m) => m > 0).join(' + ')} = {weekTotal} minutes, or {hoursMinutes(weekTotal)}.</>]}
        />
        <Mistake>A plan with no rest days, or with no clear goal. Your body needs recovery, and a plan needs a goal and a schedule.</Mistake>
      </>,
    ),
  },
  {
    title: 'Game strategy',
    content: slide(
      <>
        <Rule>Game strategy means planned decisions to improve team performance. Good strategy adapts during play. If your team is losing space in attack, adjust your positioning and communicate quickly.</Rule>
        <Branches
          problem="Your team is losing space in attack"
          options={[
            { choice: 'Stay where you are', outcome: 'Defenders close the gap.' },
            { choice: 'Move to open space and call', outcome: 'A teammate can pass to you.' },
          ]}
          aria="A decision tree. Your team is losing space in attack. Choice one: stay where you are, and defenders close the gap. Choice two: move to open space and call, and a teammate can pass to you."
        />
        <Worked
          title="Adapt in the game"
          steps={[<>Notice: there is no space in front of you.</>, <>Move sideways into open space.</>, <>Call “Here!” so a teammate sees you.</>]}
        />
        <Mistake>Keeping to the first plan even when the game changes. A good strategy responds to what is happening.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reviewing participation and improvement',
    content: slide(
      <>
        <Rule>Review your participation by reflecting on effort, skills and teamwork. Good evidence of improvement is measurable and repeated, such as faster times and better skill consistency.</Rule>
        <ProgressLine values={passes} firstLabel="Week 1" lastLabel="Week 4" unit="passes" aria={`A line chart of successful passes out of 10 in four weeks: ${passes.join(', ')}, going up each week.`} />
        <Worked
          title="Passes completed out of 10"
          steps={[<>Record each week: {passes.join(', ')}.</>, <>Compare: {passes[passes.length - 1]} − {passes[0]} = {countGain(passes)} more passes.</>, <>The evidence is repeated and measurable, so it shows improvement.</>]}
        />
        <Mistake>Judging your year only by whether your team won, or by one good game. Review your effort, skills and teamwork over time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Recreation and teamwork calls',
    content: slide(
      <>
        <Rule>Regular recreation supports your physical and mental wellbeing. Clear, respectful calls during play strengthen teamwork.</Rule>
        <Hub centre="Play" spokes={['Fitness', 'Stress relief', 'Enjoyment']} aria="A circle labelled Play with three benefits of recreation around it: fitness, stress relief and enjoyment." />
        <Worked
          title="Make recreation a habit"
          steps={[<>Pick an activity you enjoy, such as a walk or a ball game with friends.</>, <>Put it in your weekly schedule.</>, <>During play use short, respectful calls: “Left!” “Well done!”</>]}
        />
        <Mistake>Thinking recreation is a waste of time, or that shouting at teammates helps. Recreation supports wellbeing, and respectful calls help the team.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What should a personal fitness plan include, and which principle keeps training safe?" answer="Clear goals, activities and a weekly schedule. Include rest and recovery." />
        <Check question="What is game strategy, and what do you do if your team is losing space in attack?" answer="Planned decisions to improve team performance. Adjust your positioning and communicate quickly." />
        <Check question="How can you review participation, and what evidence shows improvement?" answer="Reflect on effort, skills and teamwork. Faster times and better skill consistency." />
        <Check question="Give one benefit of recreation and one communication habit for teamwork." answer="It supports physical and mental wellbeing. Use clear, respectful calls during play." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What should a personal fitness plan include?',
    options: ['Clear goals, activities and a weekly schedule', 'One workout that you picked on a whim', 'No rest or recovery time in the week', 'A plan that is copied without any changes'],
    answer: 'Clear goals, activities and a weekly schedule',
    explanation: 'A useful plan is specific, balanced, and realistic.',
  },
  {
    prompt: 'What is game strategy?',
    options: [
      'Planned decisions to improve team performance',
      'Ignoring positions and rules',
      'Using the same move every situation',
      'Arguing with teammates to gain control',
    ],
    answer: 'Planned decisions to improve team performance',
    explanation: 'Strategy helps teams respond to changing game situations.',
  },
  {
    prompt: 'How can learners review participation effectively?',
    options: ['Reflect on effort, skills and teamwork', 'Focus on the winning scores only, nothing else', 'Avoid feedback from the teachers entirely', 'Skip all of the self-assessment tasks'],
    answer: 'Reflect on effort, skills and teamwork',
    explanation: 'Participation review identifies progress and next goals.',
  },
  {
    prompt: 'What is one benefit of regular recreation?',
    options: [
      'It supports physical and mental wellbeing',
      'It removes the need for sleep',
      'It guarantees instant fitness',
      'It replaces all academic responsibilities',
    ],
    answer: 'It supports physical and mental wellbeing',
    explanation: 'Recreation helps fitness, stress relief, and enjoyment.',
  },
  {
    prompt: 'If your team is losing space in attack, what should you do?',
    options: [
      'Adjust positioning and communicate quickly',
      'Keep repeating the same failing play',
      'Ignore teammates completely',
      'Break rules to recover possession',
    ],
    answer: 'Adjust positioning and communicate quickly',
    explanation: 'Good strategy requires adaptation during play.',
  },
  {
    prompt: 'Which evidence can show personal improvement?',
    options: ['Faster times and better skill consistency', 'The colour of your sports kit', 'How loud the crowd was on the day', 'One lucky result in a single game'],
    answer: 'Faster times and better skill consistency',
    explanation: 'Performance evidence should be measurable and repeated.',
  },
  {
    prompt: 'Which principle keeps training safe?',
    options: [
      'Include rest and recovery in the schedule',
      'Train at maximum intensity daily',
      'Ignore pain during exercise',
      'Skip hydration in hot weather',
    ],
    answer: 'Include rest and recovery in the schedule',
    explanation: 'Recovery is essential for adaptation and injury prevention.',
  },
  {
    prompt: 'What communication habit strengthens teamwork?',
    options: [
      'Use clear, respectful calls during play',
      'Blame teammates after mistakes',
      'Remain silent in all situations',
      'Shout over everyone without listening',
    ],
    answer: 'Use clear, respectful calls during play',
    explanation: 'Positive communication improves decisions and coordination.',
  },
];

const PhysicalEducationT4 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Personal fitness plans, game strategy, participation review, and recreation"
    learnSteps={learnSteps}
    task="gr7-physical-education-t4"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PhysicalEducationT4;
