import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './PhysicalEducationTask4Lesson';

const items = [
  {
    prompt: 'Why is lifelong fitness important?',
    options: ['It secures a place in a professional team', 'It supports lasting physical and mental health', 'It matters mainly while learners are at school', 'It replaces medical check-ups in adult life'],
    answer: 1,
    explanation: 'Regular activity remains important throughout adult life.',
  },
  {
    prompt: 'Which recreation choice is most sustainable?',
    options: [
      'The one you hate but copy from others',
      'An activity that is safe, affordable and enjoyable',
      'Any activity done once a month',
      'A routine with no rest or balance',
    ],
    answer: 1,
    explanation: 'Sustainable fitness depends on safety, access and enjoyment.',
  },
  {
    prompt: 'What should healthy routines include besides exercise?',
    options: ['Competition and weekly rankings', 'Sleep, hydration and nutrition', 'Late-night screen time for relaxation', 'Extra training with no rest days'],
    answer: 1,
    explanation: 'Balanced routines support overall wellbeing, not just movement alone.',
  },
  {
    prompt: 'Which goal is most sustainable?',
    options: [
      'Exercise hard for one week and stop',
      'Walk or train three times a week consistently',
      'Choose impossible targets',
      'Compete with everyone around you',
    ],
    answer: 1,
    explanation: 'Consistency makes a goal realistic and sustainable.',
  },
  {
    prompt: 'Why is enjoyment important in activity planning?',
    options: [
      'It makes effort easier to maintain over time',
      'It removes the need for discipline',
      'It is less important than showing off',
      'It only matters for children',
    ],
    answer: 0,
    explanation: 'Enjoyable activity is more likely to become a lasting habit.',
  },
  {
    prompt: 'What is the value of participation evidence?',
    options: [
      'It helps track commitment and reflection',
      'It replaces actual activity',
      'It is only for teachers',
      'It proves someone is the best athlete',
    ],
    answer: 0,
    explanation: 'Participation records help learners reflect on consistency and growth.',
  },
  {
    prompt: 'What should learners avoid when planning long-term fitness?',
    options: ['Gradual plans that suit their schedule', 'Extreme routines they cannot maintain', 'Activities that match their ability', 'Regular reviews of their progress'],
    answer: 1,
    explanation: 'Unsustainable extremes usually lead to inconsistency or injury.',
  },
  {
    prompt: 'How does physical activity support adult life?',
    options: ['By removing work stress from adult life', 'By supporting health, routine and balance', 'By guaranteeing a job right after school ends', 'By replacing family and friend support'],
    answer: 1,
    explanation: 'Activity supports a balanced and healthy adult lifestyle.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const PhysicalEducationTask4 = () => (
  <CapsSubjectTopic
    title='Physical Education Task — Term 4'
    subtitle='Lifetime fitness, recreation choices, healthy routines and sustainable activity goals.'
    learnSteps={learnSteps}
    task='gr12-physical-education-task-4-t4'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default PhysicalEducationTask4;
