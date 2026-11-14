import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Fitness Development',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Fitness</strong> is the ability to do physical activity with strength, speed, and endurance.
          Developing fitness takes practice, patience, and consistency.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Regular physical activity builds strength, endurance, and coordination.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Coordination and Teamwork',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Coordination</strong> is using your body parts together smoothly.
          <strong> Teamwork</strong> means working with others toward a common goal.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Coordination</strong>
            <p className="text-slate-600">Balance, agility, and control.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Teamwork</strong>
            <p className="text-slate-600">Cooperation, communication, support.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Safe Participation and Progress Monitoring',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Safe participation</strong> means using correct technique and following rules.
          <strong> Monitoring progress</strong> helps you see how you are improving.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Good practice includes:</p>
          <p className="text-slate-600">Warm-ups, proper technique, cool-downs, and keeping fitness logs.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is fitness?',
    options: ['Being thin, which shows that a person is healthy', 'The ability to be active, with strength and endurance', 'Being able to run fast over a short distance only', 'A quality that a person is born with and cannot improve'],
    answer: 'The ability to be active, with strength and endurance',
    explanation: 'Fitness includes strength, endurance, flexibility, and cardiovascular health.',
  },
  {
    prompt: 'Why is consistency important in physical activity?',
    options: ['Fitness is gained quickly, so regular activity is not needed', 'Regular activity builds stronger skills and fitness', 'One long session of exercise is enough for months', 'Regular activity wastes time that is better spent on studying'],
    answer: 'Regular activity builds stronger skills and fitness',
    explanation: 'Consistent practice leads to steady improvement in fitness and skills.',
  },
  {
    prompt: 'What does coordination involve?',
    options: ['Using only the strength of the muscles in your arms', 'Using the parts of your body together smoothly', 'Using only the flexibility of your joints and muscles', 'Using only the speed of your legs over short distances'],
    answer: 'Using the parts of your body together smoothly',
    explanation: 'Coordination involves balance, agility, and the smooth execution of movements.',
  },
  {
    prompt: 'What is teamwork in physical activity?',
    options: ['Competing alone to be the best player on the team', 'Working together towards a common goal', 'Ignoring your teammates to score the points yourself', 'Taking part in individual sports such as running only'],
    answer: 'Working together towards a common goal',
    explanation: 'Teamwork means supporting teammates, communicating, and working cooperatively.',
  },
  {
    prompt: 'Why is a warm-up important before exercise?',
    options: ['It is not needed if you are young and healthy', 'It prepares the body and lowers the risk of injury', 'It tires the muscles so that you play more slowly', 'It is needed only by professional athletes in a match'],
    answer: 'It prepares the body and lowers the risk of injury',
    explanation: 'Warm-ups increase heart rate, loosen muscles, and prepare you for activity.',
  },
  {
    prompt: 'What is a fitness log?',
    options: ['A notebook of stories about the sports you have seen', 'A record of your activities and your progress', 'A list of the fitness rules of your school team', 'A diary kept only by athletes who enter races'],
    answer: 'A record of your activities and your progress',
    explanation: 'A fitness log helps you track what you have done and see your improvement over time.',
  },
  {
    prompt: 'What is safe participation?',
    options: ['Exercising alone so that nobody can slow you down', 'Using good technique, following rules and avoiding injury', 'Pushing yourself until you feel pain, to get fit sooner', 'Playing without rules so that you can move freely'],
    answer: 'Using good technique, following rules and avoiding injury',
    explanation: 'Safe participation means using proper form and following safety guidelines.',
  },
  {
    prompt: 'How can you monitor your fitness progress?',
    options: ['By guessing, since fitness cannot really be measured', 'By testing yourself, keeping records and noting improvement', 'By entering competitions and looking only at the final result', 'By comparing your results with those of other learners'],
    answer: 'By testing yourself, keeping records and noting improvement',
    explanation: 'Regular testing and record-keeping help you see your progress clearly.',
  },
  {
    prompt: 'What should you do after physical activity?',
    options: ['Stop at once and sit down to rest your legs', 'Cool down slowly and stretch the muscles', 'Drink a very cold drink straight after you stop', 'Rest for several days before you move again'],
    answer: 'Cool down slowly and stretch the muscles',
    explanation: 'Cool-downs help your heart rate return to normal and prevent soreness.',
  },
  {
    prompt: 'Why is independence in physical activity important?',
    options: ['You can exercise without the school and teachers', 'You can manage your own fitness without always needing help', 'You must always exercise on your own and never in a group', 'You need not plan activity, as fitness comes by itself'],
    answer: 'You can manage your own fitness without always needing help',
    explanation: 'Independence in physical activity means taking responsibility for your own fitness.',
  },
];

const PhysicalEducationTask1 = () => (
  <CapsSubjectTopic
    title="Physical Education Task — Term 1"
    subtitle="Fitness development, coordination, and safe participation"
    learnSteps={learnSteps}
    task="gr9-physical-education-task-1-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask1;
