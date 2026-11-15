import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './PhysicalEducationTask3Lesson';

const items = [
  {
    prompt: 'What best maintains fitness over time?',
    options: [
      'One intense session per term',
      'Regular participation and effort',
      'Avoiding all rest days',
      'Training only when assessed',
    ],
    answer: 1,
    explanation: 'Fitness is maintained through consistent activity over time.',
  },
  {
    prompt: 'Why is teamwork valuable in physical education?',
    options: [
      'It allows some learners to do nothing',
      'It builds cooperation and communication skills',
      'It removes the need for rules',
      'It matters only in tournaments',
    ],
    answer: 1,
    explanation: 'Teamwork teaches learners to communicate, support and adapt.',
  },
  {
    prompt: 'What does self-discipline look like in PET?',
    options: ['Skipping sessions when tired or busy', 'Being prepared and following through', 'Letting teammates carry the effort', 'Waiting for the coach to motivate you'],
    answer: 1,
    explanation: 'Self-discipline involves commitment, preparation and consistency.',
  },
  {
    prompt: 'Why should learners review their participation record?',
    options: [
      'To hide weak effort',
      'To reflect honestly and improve goals',
      'To avoid future activity',
      'Because marks are the only purpose of PE',
    ],
    answer: 1,
    explanation: 'Reflection helps learners understand progress and make better choices.',
  },
  {
    prompt: 'Which action shows responsibility for personal health?',
    options: [
      'Ignoring repeated exhaustion',
      'Balancing effort, rest and hydration',
      'Exercising through injury without help',
      'Comparing yourself negatively to others',
    ],
    answer: 1,
    explanation: 'Responsible health choices include balance, recovery and safe practice.',
  },
  {
    prompt: 'What is a likely result of consistent participation?',
    options: [
      'Lower skill confidence',
      'Improved fitness and routine',
      'No change at all',
      'Guaranteed competition success',
    ],
    answer: 1,
    explanation: 'Consistent participation usually improves both fitness and confidence.',
  },
  {
    prompt: 'How should teammates respond to different ability levels?',
    options: ['Let stronger players take most turns', 'Work respectfully and support inclusion', 'Leave beginners to practise on their own', 'Tease weaker players to push them'],
    answer: 1,
    explanation: 'Respect and inclusion strengthen teamwork and participation for everyone.',
  },
  {
    prompt: 'What should happen if a learner notices poor consistency?',
    options: [
      'Ignore it until the end of the year',
      'Set a realistic improvement target',
      'Quit all activity',
      'Hide the attendance record',
    ],
    answer: 1,
    explanation: 'A realistic target turns reflection into constructive action.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const PhysicalEducationTask3 = () => (
  <CapsSubjectTopic
    title='Physical Education Task — Term 3'
    subtitle='Fitness maintenance, teamwork, self-discipline, participation review and health responsibility.'
    learnSteps={learnSteps}
    task='gr12-physical-education-task-3-t3'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default PhysicalEducationTask3;
