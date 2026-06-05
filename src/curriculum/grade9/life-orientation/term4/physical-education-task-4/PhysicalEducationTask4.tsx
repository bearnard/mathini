import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Fitness Review and Active Lifestyles',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Fitness review</strong> means assessing your current fitness level and progress.
          An <strong>active lifestyle</strong> means making physical activity a regular part of your life.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Fitness habits built now set you up for lifelong health.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Game Application and Personal Targets',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Game application</strong> means using skills in real competition.
          <strong> Personal targets</strong> are fitness or skill goals you set for yourself.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Game application</strong>
            <p className="text-slate-600">Skill in real play.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Personal targets</strong>
            <p className="text-slate-600">Goals you set and track.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Participation Records and Self-Evaluation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Participation records</strong> track your involvement. <strong>Self-evaluation</strong> means honestly assessing your effort and growth.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Year-end reflection:</p>
          <p className="text-slate-600">Review your records, celebrate achievements, and plan for next year's goals.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a fitness review?',
    options: ['Not necessary', 'Assessing your current fitness and progress over time', 'Only for athletes', 'Waste of time'],
    answer: 'Assessing your current fitness and progress over time',
    explanation: 'Reviews help you understand your fitness level and growth.',
  },
  {
    prompt: 'Why is an active lifestyle important?',
    options: ['It is not', 'Regular physical activity supports lifelong health and wellbeing', 'Only for young people', 'Just for school'],
    answer: 'Regular physical activity supports lifelong health and wellbeing',
    explanation: 'Active lifestyles prevent disease and promote happiness.',
  },
  {
    prompt: 'What does game application mean?',
    options: ['Just practice', 'Using your skills in real game situations', 'Only in training', 'Not important'],
    answer: 'Using your skills in real game situations',
    explanation: 'Game application tests and develops your skills.',
  },
  {
    prompt: 'What are personal targets?',
    options: ['Not needed', 'Fitness or skill goals you set for yourself', 'Only for winners', 'Given by coaches'],
    answer: 'Fitness or skill goals you set for yourself',
    explanation: 'Personal targets motivate and guide your training.',
  },
  {
    prompt: 'Why keep participation records?',
    options: ['They are not helpful', 'To track involvement and see progress and patterns', 'Too much work', 'Not relevant'],
    answer: 'To track involvement and see progress and patterns',
    explanation: 'Records provide evidence of effort and growth.',
  },
  {
    prompt: 'What is self-evaluation?',
    options: ['Comparing to others', 'Honestly assessing your own effort, progress, and growth', 'Too hard', 'Not necessary'],
    answer: 'Honestly assessing your own effort, progress, and growth',
    explanation: 'Self-evaluation builds self-awareness and accountability.',
  },
  {
    prompt: 'How often should you set personal targets?',
    options: ['Once a year', 'Regularly—quarterly or term-based', 'Never', 'Only when failing'],
    answer: 'Regularly—quarterly or term-based',
    explanation: 'Regular targets keep motivation and focus high.',
  },
  {
    prompt: 'What makes a good personal target?',
    options: ['Any goal', 'Specific, achievable, relevant to your needs', 'Very difficult', 'Vague wishes'],
    answer: 'Specific, achievable, relevant to your needs',
    explanation: 'Good targets are clear and realistic.',
  },
  {
    prompt: 'How should you reflect on your year of physical activity?',
    options: ['No reflection needed', 'Review records, celebrate wins, identify challenges, plan for growth', 'Forget about it', 'Only if you won'],
    answer: 'Review records, celebrate wins, identify challenges, plan for growth',
    explanation: 'Reflection guides continuous improvement.',
  },
  {
    prompt: 'What does sustained participation mean?',
    options: ['Just sometimes', 'Consistent involvement over time despite challenges', 'Only when easy', 'Quitting after setbacks'],
    answer: 'Consistent involvement over time despite challenges',
    explanation: 'Sustained participation builds fitness and character.',
  },
];

const PhysicalEducationTask4 = () => (
  <CapsSubjectTopic
    title="Physical Education Task — Term 4"
    subtitle="Fitness review, personal goals, and lifelong activity"
    learnSteps={learnSteps}
    task="gr9-physical-education-task-4-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask4;
