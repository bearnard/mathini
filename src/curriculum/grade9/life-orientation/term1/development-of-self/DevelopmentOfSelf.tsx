import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Values',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Values</strong> are the beliefs and principles that guide how we live and make decisions.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Our values help us choose what is important and shape our actions.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Self-Awareness and Self-Motivation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Self-awareness</strong> means understanding your strengths, weaknesses, feelings, and values.
          <strong> Self-motivation</strong> is the drive to do things without needing others to push you.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Self-awareness</strong>
            <p className="text-slate-600">Know yourself and your abilities.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Self-motivation</strong>
            <p className="text-slate-600">Push yourself to achieve your goals.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Goal Setting and Decision-Making',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Goals</strong> are specific things you want to achieve.
          <strong> Decision-making</strong> is choosing between options based on your values and goals.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Good goals are SMART:</p>
          <p className="text-slate-600">Specific, Measurable, Achievable, Relevant, Time-bound</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What are values?',
    options: ['Money and possessions', 'Beliefs and principles that guide how we live', 'Rules made by adults', 'Things we like to do'],
    answer: 'Beliefs and principles that guide how we live',
    explanation: 'Values are core beliefs that shape our decisions and actions.',
  },
  {
    prompt: 'What is self-awareness?',
    options: ['Knowing what others think of you', 'Understanding your strengths, weaknesses, and feelings', 'Being popular', 'Having money'],
    answer: 'Understanding your strengths, weaknesses, and feelings',
    explanation: 'Self-awareness means understanding yourself—your abilities, feelings, and values.',
  },
  {
    prompt: 'Why is self-motivation important?',
    options: ['It is not important', 'To get others to like you', 'To push yourself to achieve your goals', 'To avoid responsibility'],
    answer: 'To push yourself to achieve your goals',
    explanation: 'Self-motivation helps you take action and achieve your goals without needing others to push you.',
  },
  {
    prompt: 'What does it mean to set a goal?',
    options: ['To wish for something', 'To identify something specific you want to achieve', 'To avoid failure', 'To make others happy'],
    answer: 'To identify something specific you want to achieve',
    explanation: 'A goal is a specific, intended result that you work towards.',
  },
  {
    prompt: 'What should you consider when making a decision?',
    options: ['Only what others want', 'Your values, goals, and the consequences', 'The easiest option', 'What is most popular'],
    answer: 'Your values, goals, and the consequences',
    explanation: 'Good decisions are based on your values, goals, and thinking about the consequences.',
  },
  {
    prompt: 'What does SMART stand for in goal setting?',
    options: ['Slow, Minimal, Achievable, Real, Time', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Small, Major, Active, Ready, True', 'Simple, Mature, Able, Real, Together'],
    answer: 'Specific, Measurable, Achievable, Relevant, Time-bound',
    explanation: 'SMART goals are clearly defined and more likely to be achieved.',
  },
  {
    prompt: 'How can you develop self-awareness?',
    options: ['By avoiding reflection', 'By thinking about your feelings, actions, and why you do things', 'By comparing yourself to others', 'By ignoring feedback'],
    answer: 'By thinking about your feelings, actions, and why you do things',
    explanation: 'Reflection and honest self-assessment help build self-awareness.',
  },
  {
    prompt: 'Which is an example of a well-set goal?',
    options: ['I want to do better', 'I will improve my math by 10% by the end of term', 'I want to be happy', 'I will try harder'],
    answer: 'I will improve my math by 10% by the end of term',
    explanation: 'This goal is specific, measurable, achievable, relevant, and time-bound.',
  },
  {
    prompt: 'How do values influence your choices?',
    options: ['They do not', 'They guide what you think is important and right', 'They are imposed by others', 'Only sometimes'],
    answer: 'They guide what you think is important and right',
    explanation: 'Your values are the foundation for your decisions and choices.',
  },
  {
    prompt: 'What is a consequence of a decision?',
    options: ['Something that never happens', 'The result or outcome of a choice you make', 'What other people want', 'Something you cannot control'],
    answer: 'The result or outcome of a choice you make',
    explanation: 'Every decision leads to consequences—results that follow from your choice.',
  },
];

const DevelopmentOfSelf = () => (
  <CapsSubjectTopic
    title="Development of the Self in Society"
    subtitle="Understanding your values, goals, and choices"
    learnSteps={learnSteps}
    task="gr9-development-of-self-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default DevelopmentOfSelf;
