import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Athletics and Indigenous Games',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Athletics</strong> includes running, jumping, and throwing. <strong>Indigenous games</strong> are traditional sports
          that build skill, fitness, and cultural understanding.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Both athletics and indigenous games teach discipline, teamwork, and cultural pride.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Fitness Maintenance and Leadership',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Fitness maintenance</strong> means keeping up your fitness year-round.
          <strong> Leadership in physical activity</strong> means helping others participate and succeed.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Fitness</strong>
            <p className="text-slate-600">Consistent training and balance.</p>
          </div>
          <div className="rounded-xl bg-green-50 p4">
            <strong className="text-green-700">Leadership</strong>
            <p className="text-slate-600">Motivating and supporting others.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Technique, Rules, and Participation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Mastering technique in athletics involves proper form, breathing, and pacing.
          Following rules and showing consistency demonstrates respect and growth.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Excellence requires:</p>
          <p className="text-slate-600">Good technique, understanding rules, and regular participation with focus.</p>
        </div>
      </div>
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
