import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Reviewing Fitness Progress',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          End-of-year reflection helps learners recognise how their fitness, effort, and participation habits have changed over time.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left text-sm">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Areas to review</strong>
            <p className="text-slate-600">Endurance, strength, flexibility, coordination, confidence, and consistency.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Evidence of progress</strong>
            <p className="text-slate-600">Participation records, teacher feedback, personal reflections, and improved performance.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Lifelong Physical Activity and Health',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Physical activity should continue beyond school because it supports lifelong physical, mental, and social wellbeing.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2 text-sm text-slate-600">
          <p><strong className="text-slate-800">Long-term benefits:</strong> stronger heart and muscles, better stress management, healthier body composition, better sleep, and improved mood.</p>
          <p>Regular movement also reduces the risk of many lifestyle-related illnesses.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Setting Sustainable SMART Goals',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Future activity goals should be <strong>SMART</strong>: specific, measurable, achievable, relevant, and time-bound.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left text-sm">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Specific</strong>
            <p className="text-slate-600">Say exactly what activity you will do.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Measurable</strong>
            <p className="text-slate-600">Track time, frequency, or distance.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Sustainable</strong>
            <p className="text-slate-600">Choose goals that fit your real routine and resources.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Evaluating Participation Habits',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Honest evaluation helps you identify habits that support or block regular activity, such as motivation, time management, transport, safety, and social support.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2">
          <p className="font-bold text-slate-800">Reflection questions:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
            <li>What helped me stay active this year?</li>
            <li>What barriers reduced my participation?</li>
            <li>What realistic habit can I improve next?</li>
            <li>Who or what can support my future goals?</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Why is fitness reflection useful at the end of the year?',
    options: [
      'It helps learners recognise progress and identify areas for improvement',
      'It replaces all physical activity',
      'It only matters for top athletes',
      'It is only about marks',
    ],
    answer: 'It helps learners recognise progress and identify areas for improvement',
    explanation: 'Reflection makes growth visible and supports future planning.',
  },
  {
    prompt: 'Which of the following is a long-term benefit of regular physical activity?',
    options: ['Increased stress only', 'Improved heart health and mood', 'Less need for sleep', 'Guaranteed sporting talent'],
    answer: 'Improved heart health and mood',
    explanation: 'Regular activity supports both physical and mental health over time.',
  },
  {
    prompt: 'What does SMART stand for in goal setting?',
    options: [
      'Strong, modern, active, realistic, temporary',
      'Specific, measurable, achievable, relevant, time-bound',
      'Safe, managed, athletic, rapid, timed',
      'Simple, mixed, active, random, tracked',
    ],
    answer: 'Specific, measurable, achievable, relevant, time-bound',
    explanation: 'SMART goals make activity planning clear and practical.',
  },
  {
    prompt: 'Which goal is the best example of a SMART physical activity goal?',
    options: [
      'I will exercise more sometime',
      'I will walk for 30 minutes after school on Mondays, Wednesdays, and Fridays for six weeks',
      'I will become the fittest person in the country',
      'I will think about joining a team next year',
    ],
    answer: 'I will walk for 30 minutes after school on Mondays, Wednesdays, and Fridays for six weeks',
    explanation: 'The goal is specific, measurable, realistic, and time-bound.',
  },
  {
    prompt: 'Why should future fitness goals be sustainable?',
    options: [
      'So they fit your real routine and can be maintained',
      'So they are impossible and impressive',
      'So they depend only on competition',
      'So they ignore your health needs',
    ],
    answer: 'So they fit your real routine and can be maintained',
    explanation: 'Sustainable goals are more likely to become lasting healthy habits.',
  },
  {
    prompt: 'Which factor could be a barrier to regular participation in physical activity?',
    options: ['Good time management', 'Strong motivation', 'Unsafe environments or lack of transport', 'Supportive friends'],
    answer: 'Unsafe environments or lack of transport',
    explanation: 'Barriers can reduce participation and should be identified when planning future activity.',
  },
  {
    prompt: 'What kind of evidence can show fitness progress?',
    options: ['Participation records and personal reflections', 'Rumours from friends', 'Only expensive equipment', 'Social media likes'],
    answer: 'Participation records and personal reflections',
    explanation: 'Progress can be tracked through records, observations, and reflective notes.',
  },
  {
    prompt: 'Why does lifelong physical activity matter?',
    options: [
      'It supports health and wellbeing beyond school years',
      'It is only important for school grades',
      'It removes the need for rest',
      'It is useful only during adolescence',
    ],
    answer: 'It supports health and wellbeing beyond school years',
    explanation: 'Physical activity should remain part of a healthy lifestyle throughout life.',
  },
];

const PhysicalEducationTask4 = () => (
  <CapsSubjectTopic
    title="Physical Education Task — Term 4"
    subtitle="Fitness reflection, lifelong physical activity, sustainable goals and participation habits"
    learnSteps={learnSteps}
    task="gr11-physical-education-task-4-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask4;
