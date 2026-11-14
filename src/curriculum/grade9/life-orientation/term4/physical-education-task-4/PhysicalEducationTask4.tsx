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
    options: ['A task that is not needed if you feel fit', 'Checking your fitness and your progress over time', 'A test that only athletes need to write', 'A waste of time, since fitness shows by itself'],
    answer: 'Checking your fitness and your progress over time',
    explanation: 'Reviews help you understand your fitness level and growth.',
  },
  {
    prompt: 'Why is an active lifestyle important?',
    options: ['It matters for young people and not for adults', 'Regular activity supports lifelong health and wellbeing', 'It matters at school during sport periods only', 'It matters for athletes and not for others'],
    answer: 'Regular activity supports lifelong health and wellbeing',
    explanation: 'Active lifestyles prevent disease and promote happiness.',
  },
  {
    prompt: 'What does game application mean?',
    options: ['Practising your skills on your own in training', 'Using your skills in real game situations', 'Using skills in training sessions only', 'A step that does not matter once skills are learned'],
    answer: 'Using your skills in real game situations',
    explanation: 'Game application tests and develops your skills.',
  },
  {
    prompt: 'What are personal targets?',
    options: ['Goals that are not needed in sport', 'Fitness or skill goals that you set for yourself', 'Goals that only the winning players set', 'Goals that are given to you by your coach'],
    answer: 'Fitness or skill goals that you set for yourself',
    explanation: 'Personal targets motivate and guide your training.',
  },
  {
    prompt: 'Why keep participation records?',
    options: ['They are not helpful, as you remember what you did', 'To track your involvement and see progress and patterns', 'They are too much work to keep up each week', 'They are not relevant to how well you play'],
    answer: 'To track your involvement and see progress and patterns',
    explanation: 'Records provide evidence of effort and growth.',
  },
  {
    prompt: 'What is self-evaluation?',
    options: ['Comparing your results with those of other learners', 'Honestly judging your own effort, progress and growth', 'A step that is too hard to do honestly', 'A step that is not needed if a teacher marks you'],
    answer: 'Honestly judging your own effort, progress and growth',
    explanation: 'Self-evaluation builds self-awareness and accountability.',
  },
  {
    prompt: 'How often should you set personal targets?',
    options: ['Once a year, at the end of the school year', 'Regularly, such as every quarter or term', 'Never, as the coach sets all your targets', 'Only when your results begin to fall'],
    answer: 'Regularly, such as every quarter or term',
    explanation: 'Regular targets keep motivation and focus high.',
  },
  {
    prompt: 'What makes a good personal target?',
    options: ['Any goal that sounds good when you say it', 'Specific, achievable and relevant to your needs', 'A goal that is very hard, so that you must stretch', 'A wish that is not tied to a date or a measure'],
    answer: 'Specific, achievable and relevant to your needs',
    explanation: 'Good targets are clear and realistic.',
  },
  {
    prompt: 'How should you reflect on your year of physical activity?',
    options: ['No reflection is needed once the year is over', 'Review records, celebrate wins, name challenges and plan ahead', 'Forget the year and begin a new one afresh', 'Reflect only if you won a prize or a medal'],
    answer: 'Review records, celebrate wins, name challenges and plan ahead',
    explanation: 'Reflection guides continuous improvement.',
  },
  {
    prompt: 'What does sustained participation mean?',
    options: ['Taking part only now and then, when you feel like it', 'Steady involvement over time, even through setbacks', 'Taking part when it is easy and stopping when it is hard', 'Stopping after a setback and starting again next year'],
    answer: 'Steady involvement over time, even through setbacks',
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
