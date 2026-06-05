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
    options: ['Being thin', 'The ability to do physical activity with strength and endurance', 'Only running', 'Something you are born with'],
    answer: 'The ability to do physical activity with strength and endurance',
    explanation: 'Fitness includes strength, endurance, flexibility, and cardiovascular health.',
  },
  {
    prompt: 'Why is consistency important in physical activity?',
    options: ['It is not important', 'Regular activity builds stronger skills and fitness', 'You only need to exercise once', 'It wastes time'],
    answer: 'Regular activity builds stronger skills and fitness',
    explanation: 'Consistent practice leads to steady improvement in fitness and skills.',
  },
  {
    prompt: 'What does coordination involve?',
    options: ['Only strength', 'Using your body parts together smoothly and with control', 'Only flexibility', 'Only speed'],
    answer: 'Using your body parts together smoothly and with control',
    explanation: 'Coordination involves balance, agility, and the smooth execution of movements.',
  },
  {
    prompt: 'What is teamwork in physical activity?',
    options: ['Competing alone', 'Working together toward a common goal', 'Ignoring teammates', 'Only individual sports'],
    answer: 'Working together toward a common goal',
    explanation: 'Teamwork means supporting teammates, communicating, and working cooperatively.',
  },
  {
    prompt: 'Why is a warm-up important before exercise?',
    options: ['It is not necessary', 'It prepares your body and reduces injury risk', 'It wastes time', 'Only for professionals'],
    answer: 'It prepares your body and reduces injury risk',
    explanation: 'Warm-ups increase heart rate, loosen muscles, and prepare you for activity.',
  },
  {
    prompt: 'What is a fitness log?',
    options: ['A notebook with story', 'A record of your physical activities and progress', 'Not necessary', 'Only for athletes'],
    answer: 'A record of your physical activities and progress',
    explanation: 'A fitness log helps you track what you have done and see your improvement over time.',
  },
  {
    prompt: 'What is safe participation?',
    options: ['Exercising alone', 'Using correct technique, following rules, and avoiding injury', 'Pushing yourself to pain', 'No rules needed'],
    answer: 'Using correct technique, following rules, and avoiding injury',
    explanation: 'Safe participation means using proper form and following safety guidelines.',
  },
  {
    prompt: 'How can you monitor your fitness progress?',
    options: ['You cannot', 'By testing yourself, keeping records, and noticing improvements', 'Only by competitions', 'By comparing to others only'],
    answer: 'By testing yourself, keeping records, and noticing improvements',
    explanation: 'Regular testing and record-keeping help you see your progress clearly.',
  },
  {
    prompt: 'What should you do after physical activity?',
    options: ['Stop immediately', 'Cool down gradually and stretch', 'Drink very cold water', 'Rest for days'],
    answer: 'Cool down gradually and stretch',
    explanation: 'Cool-downs help your heart rate return to normal and prevent soreness.',
  },
  {
    prompt: 'Why is independence in physical activity important?',
    options: ['It means you are alone', 'It means managing your own fitness without always needing help', 'You should never exercise alone', 'Independence is not important'],
    answer: 'It means managing your own fitness without always needing help',
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
