import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Sport Skills and Technique',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Sport skills</strong> are techniques and movements specific to each sport or activity.
          Developing skills requires practice and feedback.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Good technique prevents injury and improves performance.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Endurance, Flexibility, and Fair Play',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Endurance</strong> is your ability to keep going during activity.
          <strong> Flexibility</strong> is your range of movement. <strong>Fair play</strong> means following rules and respecting others.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Endurance</strong>
            <p className="text-slate-600">Stamina and persistence.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Flexibility</strong>
            <p className="text-slate-600">Range of motion and stretch.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Fair play</strong>
            <p className="text-slate-600">Rules and respect for all.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Competitive and Recreational Activity',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Competitive activity involves competing against others or standards.
          Recreational activity is for enjoyment and fitness, not necessarily to win.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Both types are valuable:</p>
          <p className="text-slate-600">Competition builds skills and drive; recreation builds joy and lifelong fitness habits.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What are sport skills?',
    options: ['Just running', 'Techniques and movements specific to each sport', 'Only for professionals', 'Not important'],
    answer: 'Techniques and movements specific to each sport',
    explanation: 'Sports skills are learned techniques that improve performance and safety.',
  },
  {
    prompt: 'Why is proper technique important in sport?',
    options: ['It is not', 'It improves performance and prevents injury', 'Only for competitions', 'Waste of time'],
    answer: 'It improves performance and prevents injury',
    explanation: 'Good technique is efficient, effective, and safe.',
  },
  {
    prompt: 'What is endurance?',
    options: ['Strength only', 'The ability to sustain physical activity over time', 'Only for athletes', 'Not relevant'],
    answer: 'The ability to sustain physical activity over time',
    explanation: 'Endurance is cardiovascular and muscular stamina developed through training.',
  },
  {
    prompt: 'Why is flexibility important?',
    options: ['It is not', 'It improves range of motion, prevents injury, and aids performance', 'Only for dancers', 'Not needed'],
    answer: 'It improves range of motion, prevents injury, and aids performance',
    explanation: 'Flexibility supports all physical activities and reduces injury risk.',
  },
  {
    prompt: 'What is fair play?',
    options: ['Just winning', 'Following rules and respecting all participants', 'Not important', 'Cheating sometimes'],
    answer: 'Following rules and respecting all participants',
    explanation: 'Fair play is central to good sportsmanship and healthy competition.',
  },
  {
    prompt: 'How do you maintain safety in competitive sport?',
    options: ['Safety does not matter', 'Use correct technique, follow rules, warm up, cool down', 'Play recklessly', 'Ignore warnings'],
    answer: 'Use correct technique, follow rules, warm up, cool down',
    explanation: 'Safety practices are essential even in competitive contexts.',
  },
  {
    prompt: 'What is recreational activity?',
    options: ['Only at school', 'Physical activity for enjoyment and health, not primarily to win', 'Not real exercise', 'Waste of time'],
    answer: 'Physical activity for enjoyment and health, not primarily to win',
    explanation: 'Recreation builds fitness and lifetime enjoyment of physical activity.',
  },
  {
    prompt: 'How does competition benefit participants?',
    options: ['It does not', 'It builds skills, motivation, and personal growth', 'Only for winners', 'Harmful'],
    answer: 'It builds skills, motivation, and personal growth',
    explanation: 'Competition, when fair and healthy, drives improvement and development.',
  },
  {
    prompt: 'What should you do if injured during sport?',
    options: ['Keep playing', 'Stop, assess, and get medical attention if needed', 'Play through it', 'Hide the injury'],
    answer: 'Stop, assess, and get medical attention if needed',
    explanation: 'Stopping and getting help prevents minor injuries from becoming serious.',
  },
  {
    prompt: 'How can you apply sport skills in game play?',
    options: ['You cannot', 'Through practice, focusing on technique, and adjusting for game conditions', 'Only in training', 'Skills do not transfer'],
    answer: 'Through practice, focusing on technique, and adjusting for game conditions',
    explanation: 'Practised skills become automatic in game situations with experience.',
  },
];

const PhysicalEducationTask2 = () => (
  <CapsSubjectTopic
    title="Physical Education Task — Term 2"
    subtitle="Sport skills, competitive and recreational activity"
    learnSteps={learnSteps}
    task="gr9-physical-education-task-2-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask2;
