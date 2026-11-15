import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow, WeekBars, Zones } from '../../../../../components/diagrams/lo/PswPictures';
import { weekPlan } from '../../../../../components/diagrams/lo/pswHelpers';
import { fasterBy } from '../../../../../components/diagrams/lo/lo10Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Times and totals below come from these helpers (lo10Helpers.test.ts, pswHelpers.test.ts).
const logMinutes = [30, 0, 30, 45, 0];
const logTotal = weekPlan(logMinutes).total;
const first = '16,4';
const second = '15,9';
const better = fasterBy(first, second);

export const learnSteps: LearnStep[] = [
  {
    title: 'Athletics: running, jumping and throwing',
    content: slide(
      <>
        <Rule>Athletics covers track and field: running, jumping, throwing and other field events. For your task, choose events from more than one group.</Rule>
        <Zones zones={[{ title: 'Running', line: 'Sprints and relays' }, { title: 'Jumping', line: 'Long jump and high jump' }, { title: 'Throwing', line: 'Shot put and javelin' }]} aria="Three groups of athletics events: running with sprints and relays, jumping with long jump and high jump, throwing with shot put and javelin." />
        <Worked
          title="Choosing your events"
          steps={[<>Pick one running event, such as the 100 m sprint.</>, <>Pick one jumping event, such as the long jump.</>, <>Pick one throwing event, such as the shot put.</>]}
        />
        <Mistake>Thinking athletics means only running. Jumps and throws are part of athletics too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Technique, safety and fair play',
    content: slide(
      <>
        <Rule>Good technique improves performance and prevents injury. Athletes follow the rules of the sport and the principles of fair play.</Rule>
        <StepFlow steps={['Warm up first.', 'Practise the technique slowly.', 'Add speed or distance.', 'Follow the rules and compete fairly.']} aria="Four steps in order: warm up first, practise the technique slowly, add speed or distance, follow the rules and compete fairly." />
        <Worked
          title="The long jump"
          steps={[<>Run up at a steady speed.</>, <>Take off from behind the take-off line. Stepping over it is a no jump.</>, <>Jump as far as you can and land in the sand.</>]}
        />
        <Mistake>Skipping the warm-up, or using more speed with poor technique. That raises the chance of injury and does not improve your result.</Mistake>
      </>,
    ),
  },
  {
    title: 'Consistency, logs and timed events',
    content: slide(
      <>
        <Rule>Fitness maintenance means keeping your fitness up steadily through the year. Show consistency by training regularly. A participation log tracks your activity, and timed events measure your progress.</Rule>
        <WeekBars days={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']} minutes={logMinutes} aria="Five bars of training minutes for Monday to Friday: 30, 0, 30, 45 and 0, which is 105 minutes in the week." />
        <Worked
          title="Reading a log and a timed event"
          steps={[<>Add the log: 30 + 0 + 30 + 45 + 0 = {logTotal} minutes.</>, <>Your first 100 m time was {first} s. Your later time was {second} s.</>, <>Subtract: {first} − {second} = {better} s faster.</>]}
        />
        <Mistake>Thinking only the fastest athlete is outstanding. Outstanding means skill, dedication, respect for others and steady improvement.</Mistake>
      </>,
    ),
  },
  {
    title: 'Indigenous games and leadership',
    content: slide(
      <>
        <Rule>Indigenous games build fitness and link us to our cultural heritage. Leadership in physical activity means motivating others and helping them improve.</Rule>
        <Hub centre="Leader" spokes={['Explains', 'Encourages', 'Helps', 'Plays fair']} aria="A circle labelled Leader with four labels around it: explains, encourages, helps and plays fair." />
        <Worked
          title="Leading an indigenous game such as diketo"
          steps={[<>Explain the rules clearly before you start.</>, <>Show how to play.</>, <>Encourage everyone, not only the best players.</>, <>Help anyone who struggles to improve.</>]}
        />
        <Mistake>Thinking a leader is the best player who gives orders. A leader helps everyone around them do better.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="Name the three groups of events in athletics." answer="Running, jumping and throwing (track and field events)." />
        <Check question="Why does proper technique matter, and which rules should athletes follow?" answer="It improves performance and prevents injury. Athletes follow the rules of the sport and the principles of fair play." />
        <Check question="Your log shows 30, 0, 30, 45 and 0 minutes. How many minutes is that in total, and how do logs help?" answer="105 minutes. Logs track your activity and show your progress over time." />
        <Check question="How can you show leadership in an indigenous game?" answer="Motivate others and help them to improve." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does athletics include?',
    options: ['Running events only, on a track of set length', 'Running, jumping, throwing and field events', 'Team sports only, such as netball and soccer', 'Any kind of exercise that is done for fun'],
    answer: 'Running, jumping, throwing and field events',
    explanation: 'Athletics covers track and field disciplines.',
  },
  {
    prompt: 'Why are indigenous games important?',
    options: ['They do not matter, as modern sports are better', 'They build fitness and link us to our cultural heritage', 'They are only for fun and have no cultural value', 'They are outdated and no longer played anywhere'],
    answer: 'They build fitness and link us to our cultural heritage',
    explanation: 'Indigenous games honour culture and teach valuable skills.',
  },
  {
    prompt: 'What is fitness maintenance?',
    options: ['Staying fit during the sports season only', 'Keeping up your fitness steadily through the year', 'A task that is not needed once you are fit', 'Staying fit in the summer months only'],
    answer: 'Keeping up your fitness steadily through the year',
    explanation: 'Consistent training prevents fitness loss and maintains health.',
  },
  {
    prompt: 'How does leadership show in physical activity?',
    options: ['By being the best player in the team', 'By motivating others and helping them to improve', 'By being the captain, since only captains lead', 'By winning more games than other teams'],
    answer: 'By motivating others and helping them to improve',
    explanation: 'Leaders elevate everyone around them.',
  },
  {
    prompt: 'Why is proper technique in athletics important?',
    options: ['It matters only for professional athletes', 'It improves performance and prevents injury', 'It matters less than strength in most events', 'It slows an athlete down and wastes training time'],
    answer: 'It improves performance and prevents injury',
    explanation: 'Good technique is efficient and safe.',
  },
  {
    prompt: 'What rules should athletes follow?',
    options: ['No rules, as athletes may judge for themselves', 'The rules of the sport and the principles of fair play', 'Suggestions that athletes may take or leave', 'Whichever rules suit the athlete on the day'],
    answer: 'The rules of the sport and the principles of fair play',
    explanation: 'Rules ensure fairness and safety.',
  },
  {
    prompt: 'How can you show consistency in athletics?',
    options: ['It cannot be shown, as results change from day to day', 'By training regularly, preparing well and taking part fully', 'By training only in the weeks before an event takes place', 'By entering one event and doing well in it'],
    answer: 'By training regularly, preparing well and taking part fully',
    explanation: 'Consistency builds skill and endurance.',
  },
  {
    prompt: 'What is the benefit of participating in timed events?',
    options: ['It brings no benefit to anyone who takes part', 'It measures progress and motivates improvement', 'It benefits the winners and nobody else', 'It causes stress and has no other effect'],
    answer: 'It measures progress and motivates improvement',
    explanation: 'Timed events provide clear benchmarks for growth.',
  },
  {
    prompt: 'How do participation logs help?',
    options: ['They do not help, as results are easy to remember', 'They track your activity and show your progress over time', 'They take too much work to be worth keeping', 'They are needed by athletes who enter competitions only'],
    answer: 'They track your activity and show your progress over time',
    explanation: 'Logs build awareness and motivation.',
  },
  {
    prompt: 'What makes an athlete outstanding?',
    options: ['Speed alone, since the fastest athlete wins', 'Skill, dedication, respect for others and steady improvement', 'Natural ability alone, as training changes little', 'Easy wins against weaker opponents in each event'],
    answer: 'Skill, dedication, respect for others and steady improvement',
    explanation: 'Excellence in athletics combines multiple qualities.',
  },
];

const PhysicalEducationTask3 = () => (
  <CapsSubjectTopic
    title="Physical Education Task — Term 3"
    subtitle="Athletics, indigenous games, and leadership"
    learnSteps={learnSteps}
    task="gr9-physical-education-task-3-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask3;
