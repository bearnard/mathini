import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './PhysicalEducationTask2Lesson';

const items = [
  {
    prompt: 'How can physical activity help with stress?',
    options: ['By giving you extra time to worry', 'By releasing tension and lifting mood', 'By keeping you away from friends and family', 'By replacing the need for rest'],
    answer: 1,
    explanation: 'Movement can reduce tension and improve mood when used in a balanced way.',
  },
  {
    prompt: 'What makes a good fitness goal?',
    options: [
      'It compares you unfairly to others',
      'It is realistic and measurable',
      'It changes every day without reason',
      'It depends on luck',
    ],
    answer: 1,
    explanation: 'Realistic, measurable goals are easier to follow and review.',
  },
  {
    prompt: 'Which behaviour shows fair play?',
    options: [
      'Insulting weaker players',
      'Respecting rules and encouraging teammates',
      'Cheating when the referee is not watching',
      'Refusing to cooperate',
    ],
    answer: 1,
    explanation: 'Fair play values respect, honesty and teamwork.',
  },
  {
    prompt: 'Why is teamwork important in games?',
    options: [
      'One player should always control everything',
      'It helps players communicate and achieve shared goals',
      'It reduces the need for practice',
      'It only matters in professional sport',
    ],
    answer: 1,
    explanation: 'Teamwork allows groups to function effectively and support one another.',
  },
  {
    prompt: 'Which activity best shows an active lifestyle habit?',
    options: [
      'Sitting all weekend after one match',
      'Choosing regular movement through the week',
      'Avoiding all physical challenges',
      'Exercising only before assessment',
    ],
    answer: 1,
    explanation: 'Active living is based on regular participation, not occasional effort only.',
  },
  {
    prompt: 'What should a learner do after noticing low participation levels?',
    options: ['Continue as before and hope it improves', 'Reflect and adjust the routine or goal', 'Blame the weather or timetable', 'Drop the goal and stop exercising'],
    answer: 1,
    explanation: 'Reflection should lead to realistic improvement steps.',
  },
  {
    prompt: 'Why are rules important in games?',
    options: [
      'They prevent fun completely',
      'They promote safety and fairness',
      'They only help skilled players',
      'They can be ignored if a team is losing',
    ],
    answer: 1,
    explanation: 'Rules keep participation safe, fair and organised.',
  },
  {
    prompt: 'Which option best links PET to overall wellbeing?',
    options: [
      'It is only for marks',
      'It supports health, discipline and stress management',
      'It should replace academic effort',
      'It matters only for competitive athletes',
    ],
    answer: 1,
    explanation: 'Physical education contributes to balanced wellbeing, not just assessment records.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const PhysicalEducationTask2 = () => (
  <CapsSubjectTopic
    title='Physical Education Task — Term 2'
    subtitle='Game participation, fitness goals, stress relief, teamwork and active lifestyle habits.'
    learnSteps={learnSteps}
    task='gr12-physical-education-task-2-t2'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default PhysicalEducationTask2;
