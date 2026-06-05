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
    options: ['Not necessary', 'Looking back at your goals and how well you achieved them', 'Just remembering', 'Only for winners'],
    answer: 'Looking back at your goals and how well you achieved them',
    explanation: 'Goal review helps you learn and improve for the future.',
  },
  {
    prompt: 'Why is reflection important?',
    options: ['It is not', 'It helps you understand your progress and growth', 'Just daydreaming', 'Waste of time'],
    answer: 'It helps you understand your progress and growth',
    explanation: 'Reflection builds self-awareness and learning.',
  },
  {
    prompt: 'What is resilience?',
    options: ['Giving up', 'The ability to bounce back from challenges and keep going', 'Only for tough people', 'Not learned'],
    answer: 'The ability to bounce back from challenges and keep going',
    explanation: 'Resilience is a skill that can be developed.',
  },
  {
    prompt: 'Why do support networks matter?',
    options: ['They do not', 'They provide help, guidance, and encouragement when you need it', 'Sign of weakness', 'Not important'],
    answer: 'They provide help, guidance, and encouragement when you need it',
    explanation: 'Everyone needs support, and building networks is smart.',
  },
  {
    prompt: 'Who can be part of your support network?',
    options: ['No one', 'Family, friends, teachers, counsellors, mentors', 'Only parents', 'Only friends'],
    answer: 'Family, friends, teachers, counsellors, mentors',
    explanation: 'Support networks include many different types of people and resources.',
  },
  {
    prompt: 'What is an action plan?',
    options: ['Just a wish', 'A detailed plan breaking down goals into steps', 'Not helpful', 'Only for big goals'],
    answer: 'A detailed plan breaking down goals into steps',
    explanation: 'Action plans make goals more achievable.',
  },
  {
    prompt: 'How do you maintain motivation?',
    options: ['It just happens', 'By remembering why your goal matters and celebrating small wins', 'Force yourself', 'Wait for inspiration'],
    answer: 'By remembering why your goal matters and celebrating small wins',
    explanation: 'Consistent motivation requires active management.',
  },
  {
    prompt: 'What should you do if you do not achieve a goal?',
    options: ['Give up', 'Reflect on what happened and adjust your approach', 'Pretend it did not matter', 'Never try again'],
    answer: 'Reflect on what happened and adjust your approach',
    explanation: 'Setbacks are learning opportunities.',
  },
  {
    prompt: 'How does decision-making shape your future?',
    options: ['It does not', 'Your choices today determine opportunities and paths tomorrow', 'Does not matter much', 'Only big decisions count'],
    answer: 'Your choices today determine opportunities and paths tomorrow',
    explanation: 'Decisions have real consequences for your future.',
  },
  {
    prompt: 'What should you do as you enter the FET phase?',
    options: ['Nothing special', 'Refine your goals, build strong habits, and reach out for support', 'Just do what you did in Gr 9', 'Wait and see'],
    answer: 'Refine your goals, build strong habits, and reach out for support',
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
