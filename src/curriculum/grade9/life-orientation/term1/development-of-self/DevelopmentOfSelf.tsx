import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Branches, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { SmartGoal } from '../../../../../components/diagrams/lo/Lo8Pictures';
import { targetMark } from '../../../../../components/diagrams/lo/lo8Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers in the goal example come from these tested helpers (lo8Helpers.test.ts).
const mark = { now: 55, gain: 10, target: targetMark(55, 10) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Values guide your choices',
    content: slide(
      <>
        <Rule>Values are the beliefs and principles that guide how we live and make decisions. They shape what you see as important and right.</Rule>
        <StepFlow steps={['You hold a value: honesty.', 'It guides a choice: return the extra change.', 'You act on it.', 'The result: people trust you.']} aria="Four steps from a value to a result: you hold the value honesty, it guides a choice to return extra change, you act on it, and people trust you." />
        <Worked
          title="A cashier gives you R20 too much change"
          steps={[<>Your value: honesty.</>, <>Your choice: tell the cashier.</>, <>Your action: hand the R20 back.</>, <>The consequence: you act in line with your values.</>]}
        />
        <Mistake>Thinking values are just rules made by adults, or that they have no effect on your choices. Values are your own beliefs, and they guide what you do even when nobody is watching.</Mistake>
      </>,
    ),
  },
  {
    title: 'Self-awareness and self-motivation',
    content: slide(
      <>
        <Rule>Self-awareness is understanding your strengths, weaknesses, feelings and values. You build it by reflecting on your feelings, your actions and your reasons. Self-motivation is the drive to reach your own goals without being pushed.</Rule>
        <Worked
          title="Thandi reflects on a poor science test"
          steps={[<>Feelings: rushed and worried.</>, <>Actions: she started revising the night before.</>, <>Reason: she spent the week on her phone.</>, <>Strength: she is good at diagrams. Weakness: planning. She sets her own reminders (self-motivation).</>]}
        />
        <Mistake>Thinking self-awareness means being popular, comparing yourself with the best learner, or ignoring your teachers&apos; feedback. It means honestly understanding yourself.</Mistake>
      </>,
    ),
  },
  {
    title: 'Setting SMART goals',
    content: slide(
      <>
        <Rule>A goal names something specific you want to achieve. A SMART goal is Specific, Measurable, Achievable, Relevant and Time-bound.</Rule>
        <SmartGoal
          rows={[
            { letter: 'S', word: 'Specific' },
            { letter: 'M', word: 'Measurable' },
            { letter: 'A', word: 'Achievable' },
            { letter: 'R', word: 'Relevant' },
            { letter: 'T', word: 'Time-bound' },
          ]}
          aria={`The five SMART letters for the goal to raise a maths mark from ${mark.now} to ${mark.target}: specific, measurable, achievable, relevant and time-bound.`}
        />
        <Worked
          title="“Do better in maths” becomes a SMART goal"
          steps={[<>Specific: my maths mark.</>, <>Measurable: {mark.gain} marks higher, from {mark.now} to {mark.target}.</>, <>Time-bound: by the end of term.</>, <>Goal: I will improve my maths mark by {mark.gain} marks by the end of term.</>]}
        />
        <Mistake>Wishes such as “I want to do better” or “I will try harder and see what happens”. They cannot be measured and have no deadline.</Mistake>
      </>,
    ),
  },
  {
    title: 'Decisions and consequences',
    content: slide(
      <>
        <Rule>A consequence is the result of a choice you make. When you decide, think about your values, your goals and the consequences, not only what friends want or what is easiest.</Rule>
        <Branches
          problem="Friends invite you out the night before a maths test"
          options={[
            { choice: 'Go out', outcome: 'Less revision. Your mark may drop.' },
            { choice: 'Study, go on Saturday', outcome: 'Goal stays on track. You still see them.' },
          ]}
          aria="A decision tree. Friends invite you out the night before a maths test. Going out means less revision and a mark that may drop. Studying and going on Saturday keeps your goal on track and you still see your friends."
        />
        <Worked
          title="Choose using values, goals and consequences"
          steps={[<>Value: I take my work seriously.</>, <>Goal: improve my maths mark.</>, <>Consequences: going out hurts the goal; Saturday does not.</>, <>Choice: study tonight, go out on Saturday.</>]}
        />
        <Mistake>Choosing whatever is easiest or most popular in your class. You cannot control every outcome, but you can think about likely consequences before you decide.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What are values, and how do they influence your choices?" answer="Values are beliefs and principles that guide how we live. They guide what you see as important and right when you choose." />
        <Check question="What does SMART stand for, and is “I will try harder at maths” a SMART goal?" answer="Specific, Measurable, Achievable, Relevant, Time-bound. No: it cannot be measured and has no deadline." />
        <Check question="How can you build self-awareness?" answer="By reflecting honestly on your feelings, your actions and your reasons for them." />
        <Check question="Name three things to consider before you decide, and say what a consequence is." answer="Your values, your goals and the consequences. A consequence is the result or outcome of a choice." />
      </>,
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
