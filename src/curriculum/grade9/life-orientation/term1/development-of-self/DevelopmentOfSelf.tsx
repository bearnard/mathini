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
    options: ['The money and possessions that make a person successful', 'Beliefs and principles that guide how we live', 'Rules made by adults that learners must obey at school', 'The hobbies and things that a person enjoys doing most'],
    answer: 'Beliefs and principles that guide how we live',
    explanation: 'Values are core beliefs that shape our decisions and actions.',
  },
  {
    prompt: 'What is self-awareness?',
    options: ['Knowing what other people think of your behaviour', 'Understanding your strengths, weaknesses, and feelings', 'Being well known and liked by most of your classmates', 'Knowing the subjects in which you get the best marks'],
    answer: 'Understanding your strengths, weaknesses, and feelings',
    explanation: 'Self-awareness means understanding yourself—your abilities, feelings, and values.',
  },
  {
    prompt: 'Why is self-motivation important?',
    options: ['To get other people to like and praise you more', 'To make sure that others do the work for you', 'To push yourself to reach your own goals', 'To avoid taking responsibility when plans go wrong'],
    answer: 'To push yourself to reach your own goals',
    explanation: 'Self-motivation helps you take action and achieve your goals without needing others to push you.',
  },
  {
    prompt: 'What does it mean to set a goal?',
    options: ['To wish for something that you hope will happen', 'To name something specific that you want to achieve', 'To make sure that you never fail at anything', 'To do whatever makes other people happy'],
    answer: 'To name something specific that you want to achieve',
    explanation: 'A goal is a specific, intended result that you work towards.',
  },
  {
    prompt: 'What should you consider when making a decision?',
    options: ['Only what your friends and family want for you', 'Your values, goals, and the consequences', 'Whichever option is the easiest to carry out now', 'Whichever option is the most popular in your class'],
    answer: 'Your values, goals, and the consequences',
    explanation: 'Good decisions are based on your values, goals, and thinking about the consequences.',
  },
  {
    prompt: 'What does SMART stand for in goal setting?',
    options: ['Simple, Mature, Achievable, Real, Time-limited', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Short-term, Meaningful, Active, Reachable, Tested', 'Special, Motivated, Ambitious, Realistic, Timed'],
    answer: 'Specific, Measurable, Achievable, Relevant, Time-bound',
    explanation: 'SMART goals are clearly defined and more likely to be achieved.',
  },
  {
    prompt: 'How can you develop self-awareness?',
    options: ['By avoiding time to reflect on how you behave', 'By thinking about your feelings, actions and your reasons for them', 'By comparing yourself with the best learners in class', 'By ignoring the feedback that your teachers give you'],
    answer: 'By thinking about your feelings, actions and your reasons for them',
    explanation: 'Reflection and honest self-assessment help build self-awareness.',
  },
  {
    prompt: 'Which is an example of a well-set goal?',
    options: ['I want to do better in maths during the coming term', 'I will improve my maths mark by 10% by the end of term', 'I want to be happy and to enjoy all my subjects', 'I will try harder at maths and see what happens'],
    answer: 'I will improve my maths mark by 10% by the end of term',
    explanation: 'This goal is specific, measurable, achievable, relevant, and time-bound.',
  },
  {
    prompt: 'How do values influence your choices?',
    options: ['They have no effect on the choices that you make', 'They guide what you see as important and right', 'They are fixed by other people and cannot be changed', 'They affect your choices only when you feel strongly'],
    answer: 'They guide what you see as important and right',
    explanation: 'Your values are the foundation for your decisions and choices.',
  },
  {
    prompt: 'What is a consequence of a decision?',
    options: ['An event that never takes place after a decision', 'The result or outcome of a choice that you make', 'What other people want you to do about a choice', 'An outcome that nobody can control or predict'],
    answer: 'The result or outcome of a choice that you make',
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
