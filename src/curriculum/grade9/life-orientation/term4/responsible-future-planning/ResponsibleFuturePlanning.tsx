import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Reviewing Your Progress',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Goal review</strong> means looking back at what you set out to achieve and how you did.
          Reflection helps you understand your progress and what you learned.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Reviewing progress builds confidence and guides future planning.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Resilience and Support Networks',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Resilience</strong> is the ability to bounce back from challenges.
          <strong> Support networks</strong> are people and resources that help you succeed.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Resilience</strong>
            <p className="text-slate-600">Strength, persistence, adaptability.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Support networks</strong>
            <p className="text-slate-600">Family, friends, counsellors, mentors.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Action Planning and Motivation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Action plans</strong> break down your goals into steps. <strong>Motivation</strong> keeps you moving forward.
          Decision-making shapes your future.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Planning for the next phase:</p>
          <p className="text-slate-600">Set clear goals, make action plans, stay motivated, and use your support network.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is goal review?',
    options: ['A step that is not needed once goals are set', 'Looking back at your goals and how well you met them', 'Remembering your goals without writing them down', 'A step that only winning players need to take'],
    answer: 'Looking back at your goals and how well you met them',
    explanation: 'Goal review helps you learn and improve for the future.',
  },
  {
    prompt: 'Why is reflection important?',
    options: ['It is not important when the results are good', 'It helps you see your progress and growth', 'It is daydreaming about things that cannot change', 'It wastes time that is better used for practice'],
    answer: 'It helps you see your progress and growth',
    explanation: 'Reflection builds self-awareness and learning.',
  },
  {
    prompt: 'What is resilience?',
    options: ['Giving up when a task becomes too hard', 'The ability to bounce back from problems and keep going', 'A quality that only tough people are born with', 'A quality that cannot be learned or improved'],
    answer: 'The ability to bounce back from problems and keep going',
    explanation: 'Resilience is a skill that can be developed.',
  },
  {
    prompt: 'Why do support networks matter?',
    options: ['They do not help, since each person must cope alone', 'They give help, guidance and encouragement when needed', 'They show weakness, so it is best not to have one', 'They are not important to young people at school'],
    answer: 'They give help, guidance and encouragement when needed',
    explanation: 'Everyone needs support, and building networks is smart.',
  },
  {
    prompt: 'Who can be part of your support network?',
    options: ['No one, since a support network is not for teens', 'Family, friends, teachers, counsellors and mentors', 'Parents only, as they know you best of all', 'Friends only, as they are your own age'],
    answer: 'Family, friends, teachers, counsellors and mentors',
    explanation: 'Support networks include many different types of people and resources.',
  },
  {
    prompt: 'What is an action plan?',
    options: ['A wish that you hope will come true one day', 'A detailed plan that breaks goals into steps', 'A plan that does not help in reaching a goal', 'A plan that is needed for large goals only'],
    answer: 'A detailed plan that breaks goals into steps',
    explanation: 'Action plans make goals more achievable.',
  },
  {
    prompt: 'How do you maintain motivation?',
    options: ['It just happens, so you do not have to work at it', 'By remembering why your goal matters and celebrating small wins', 'By forcing yourself to carry on, whatever you feel', 'By waiting for inspiration to come back to you'],
    answer: 'By remembering why your goal matters and celebrating small wins',
    explanation: 'Consistent motivation requires active management.',
  },
  {
    prompt: 'What should you do if you do not achieve a goal?',
    options: ['Give up, since the goal was not meant to be', 'Look at what happened and change your approach', 'Pretend that the goal did not matter to you', 'Never try again, so that you avoid more failure'],
    answer: 'Look at what happened and change your approach',
    explanation: 'Setbacks are learning opportunities.',
  },
  {
    prompt: 'How does decision-making shape your future?',
    options: ['They do not, as the future is set by luck', 'Your choices today shape your chances and paths tomorrow', 'They matter little, since you can change course any time', 'Only the big decisions count and small ones do not'],
    answer: 'Your choices today shape your chances and paths tomorrow',
    explanation: 'Decisions have real consequences for your future.',
  },
  {
    prompt: 'What should you do as you enter the FET phase?',
    options: ['Nothing special, as the FET phase is much like Grade 9', 'Sharpen your goals, build good habits and ask for support', 'Carry on as you did in Grade 9 and see what happens', 'Wait for the teachers to tell you what to do each term'],
    answer: 'Sharpen your goals, build good habits and ask for support',
    explanation: 'Active preparation sets you up for FET success.',
  },
];

const ResponsibleFuturePlanning = () => (
  <CapsSubjectTopic
    title="Responsible Future Planning"
    subtitle="Goals, resilience, and the next phase"
    learnSteps={learnSteps}
    task="gr9-responsible-future-planning-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default ResponsibleFuturePlanning;
