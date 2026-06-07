import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/lo/term4/physical-education-task-4/diagram.webp", alt: "Physical Education Task — Term 4" },
    title: 'Lifetime Fitness Mindset',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Physical activity remains important after school because it supports long-term health, energy, mental wellbeing and disease prevention. Learners should see movement as a lifelong habit, not a school-only requirement.</p>
      </div>
    ),
  },
  {
    title: 'Choosing Recreation and Activity Options',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Adult fitness can include walking, gym work, running, community sport, dance, cycling or home exercise. Sustainable choices depend on interest, affordability, safety and access.</p>
      </div>
    ),
  },
  {
    title: 'Healthy Routines and Self-Care',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Healthy routines combine activity with sleep, hydration, nutrition and recovery. Wellbeing is strongest when exercise fits into a balanced lifestyle rather than becoming inconsistent or extreme.</p>
      </div>
    ),
  },
  {
    title: 'Setting Sustainable Goals',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Sustainable goals are realistic enough to continue beyond one assessment. Learners should focus on consistency, enjoyment and personal responsibility so that activity remains part of adult life.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'Why is lifelong fitness important?',
    options: [
      'It only matters while at school',
      'It supports ongoing physical and mental wellbeing',
      'It guarantees sports success',
      'It replaces medical care completely',
    ],
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
    options: [
      'Only competition',
      'Sleep, hydration and nutrition',
      'Constant screen time',
      'Skipping recovery',
    ],
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
    options: [
      'Realistic scheduling',
      'Extreme routines they cannot maintain',
      'Safe activity choices',
      'Reviewing progress',
    ],
    answer: 1,
    explanation: 'Unsustainable extremes usually lead to inconsistency or injury.',
  },
  {
    prompt: 'How does physical activity support adult life?',
    options: [
      'By removing all stress forever',
      'By contributing to health, routine and emotional balance',
      'By guaranteeing employment',
      'By replacing social support',
    ],
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
