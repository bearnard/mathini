import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Maintaining Fitness in Grade 12',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Regular physical activity supports heart health, muscular endurance, posture, energy levels and concentration. In Grade 12, fitness maintenance is not about perfection; it is about consistency and choosing activity that supports long-term wellbeing.</p>
      </div>
    ),
  },
  {
    title: 'Conditioning and Training Principles',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Conditioning improves fitness through planned activity that develops strength, endurance, flexibility and coordination. Learners should understand warm-up, progression, hydration and recovery so that exercise remains effective and safe.</p>
      </div>
    ),
  },
  {
    title: 'Balancing Activity and Academics',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">A balanced routine gives time to study and move. Even short sessions such as walking, stretching, games or body-weight exercises can lower stress, improve mood and make academic work more manageable.</p>
      </div>
    ),
  },
  {
    title: 'Safety, Participation and Reflection',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Safe participation means using correct technique, suitable clothing and equipment, and respecting physical limits. Reflection helps learners track effort, identify improvement areas and stay committed to healthy routines over time.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'Why is regular physical activity important during Grade 12?',
    options: ['It can replace study time before exams', 'It supports energy, mood and stress control', 'It only benefits learners in sports teams', 'It makes extra revision unnecessary before exams'],
    answer: 1,
    explanation: 'Physical activity supports both physical health and emotional balance during a demanding year.',
  },
  {
    prompt: 'What is the purpose of a warm-up?',
    options: [
      'To make exercise longer',
      'To prepare the body safely for activity',
      'To test how tired you are',
      'To replace stretching completely',
    ],
    answer: 1,
    explanation: 'A warm-up increases readiness for movement and lowers injury risk.',
  },
  {
    prompt: 'Which fitness component is most linked to the heart and lungs working efficiently?',
    options: ['Muscular flexibility', 'Cardiovascular endurance', 'Reaction speed and agility', 'Muscular strength'],
    answer: 1,
    explanation: 'Cardiovascular endurance reflects how well the heart and lungs support activity.',
  },
  {
    prompt: 'What is a sensible way to balance exercise and academics?',
    options: [
      'Skip all activity until exams end',
      'Choose regular, manageable activity sessions',
      'Exercise only when feeling guilty',
      'Train so hard that studying becomes impossible',
    ],
    answer: 1,
    explanation: 'Manageable routines are more sustainable and effective than extremes.',
  },
  {
    prompt: 'Why is hydration important during exercise?',
    options: ['It is needed after sport ends, not during play', 'It supports body function and performance', 'It replaces the need to warm up first', 'It matters in summer but not in winter'],
    answer: 1,
    explanation: 'Hydration helps regulate temperature and supports safe physical performance.',
  },
  {
    prompt: 'Which action shows safe participation?',
    options: ['Skipping the warm-up to save time', 'Using correct technique and following coaching', 'Playing through exhaustion without rest or water', 'Ignoring pain to impress other players'],
    answer: 1,
    explanation: 'Correct technique and following safety guidance reduce risk.',
  },
  {
    prompt: 'How can physical activity help academic performance?',
    options: ['By reducing the amount of homework given', 'By improving mood, focus and stress control', 'By replacing revision time with sport', 'By making sleep less necessary for learning'],
    answer: 1,
    explanation: 'Activity can improve concentration and emotional regulation, which helps learning.',
  },
  {
    prompt: 'What is the value of keeping a fitness log?',
    options: [
      'It allows dishonest reporting',
      'It helps track participation and progress',
      'It replaces physical activity',
      'It is only for professional athletes',
    ],
    answer: 1,
    explanation: 'A log creates evidence and helps learners reflect on consistency and growth.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const PhysicalEducationTask1 = () => (
  <CapsSubjectTopic
    title='Physical Education Task — Term 1'
    subtitle='Fitness maintenance, conditioning, balanced routines and safe participation under academic pressure.'
    learnSteps={learnSteps}
    task='gr12-physical-education-task-1-t1'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default PhysicalEducationTask1;
