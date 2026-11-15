import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { ProgressBars } from '../../../../../components/diagrams/lo/Lo4Pictures';
import { gain } from '../../../../../components/diagrams/lo/lo4Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers in the pictures and worked examples come from lo4Helpers (lo4Helpers.test.ts).
const quizMarks = [4, 5, 6, 7];
const marksGained = gain(quizMarks[0], quizMarks[quizMarks.length - 1]);
const goal = { from: 55, to: 65, points: gain(55, 65) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Self-image and self-concept',
    content: slide(
      <>
        <Rule>Self-image is the picture you have of yourself. Self-concept is your wider view of who you are, including your strengths and the areas you can improve.</Rule>
        <Hub centre="Me" spokes={['Strengths', 'Areas to improve', 'Values', 'Self-image']} aria="A circle labelled Me with four parts of the self-concept around it: strengths, areas to improve, values and self-image." />
        <Worked
          title="Write a short self-profile"
          steps={[<>List two strengths: “I am reliable and I draw well.”</>, <>List one area to improve: “I rush my homework.”</>, <>Write one value: “Kindness matters to me.”</>, <>Join them: “I am a reliable, creative learner who is working on slowing down.”</>]}
        />
        <Mistake>Thinking self-concept is a school rule, a trend on social media or one sports score. It is your own view of yourself, and it can grow.</Mistake>
      </>,
    ),
  },
  {
    title: 'Strengths and self-esteem',
    content: slide(
      <>
        <Rule>Knowing your strengths helps you set realistic goals and builds confidence. You strengthen your self-esteem with positive self-talk and by celebrating small progress.</Rule>
        <ProgressBars labels={['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4']} values={quizMarks} max={10} title="Maths quiz marks" aria="Four bars of maths quiz marks out of 10 over four weeks: 4, 5, 6 and 7." />
        <Worked
          title="“I am hopeless at maths”"
          steps={[<>Notice the negative thought.</>, <>Check the facts: the quiz marks were {quizMarks.join(', ')} out of 10.</>, <>Work out the progress: {quizMarks[3]} − {quizMarks[0]} = {marksGained} marks.</>, <>Say it kindly: “I am improving.” Then celebrate it.</>]}
        />
        <Mistake>Comparing yourself negatively every day, or ignoring your successes. Knowing your strengths does not mean you never need support.</Mistake>
      </>,
    ),
  },
  {
    title: 'Self-motivation and SMART goals',
    content: slide(
      <>
        <Rule>Self-motivation means carrying on with a goal even when the work is hard. A SMART goal is specific, measurable, achievable, relevant and time-bound.</Rule>
        <StepFlow steps={['Specific: say exactly what.', 'Measurable: use a number.', 'Achievable: realistic for you.', 'Relevant: it matters to you.', 'Time-bound: set a date.']} aria="The five SMART goal words in order: specific, measurable, achievable, relevant and time-bound." />
        <Worked
          title="“Get better marks” becomes a goal"
          steps={[<>Specific: my maths mark.</>, <>Measurable: from {goal.from}% to {goal.to}%, a rise of {goal.points} percentage points.</>, <>Achievable: practise a little on school days.</>, <>Time-bound: by the end of Term 2.</>]}
        />
        <Mistake>Making a goal vague, based on luck or copied from a friend, or giving up after one mistake. Adjust the plan and keep going.</Mistake>
      </>,
    ),
  },
  {
    title: 'Support systems and feeling overwhelmed',
    content: slide(
      <>
        <Rule>A support system is made of trusted people who listen and guide you, such as family, a teacher or a counsellor. When you feel overwhelmed, talk to one of them and make a simple action plan.</Rule>
        <Hub centre="Me" spokes={['Family', 'Teacher', 'Friend', 'Counsellor']} aria="A circle labelled Me with four supporters around it: family, a teacher, a friend and a counsellor." />
        <Worked
          title="Three tests in one week"
          steps={[<>Tell a trusted person how you feel.</>, <>List what is due and when.</>, <>Make a simple plan: one task a day.</>, <>Reflect on feedback and adjust the plan.</>]}
        />
        <Mistake>Keeping quiet, passing your stress on to classmates or skipping your duties. A person who pressures you into risky choices or mocks your effort is not support.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is self-concept, and why is it useful to know your strengths?" answer="Self-concept is how you see your strengths and areas to improve. Knowing your strengths helps you set realistic goals and build confidence." />
        <Check question="Turn “I want to do better at maths” into a SMART goal." answer="For example: raise my maths mark from 55% to 65% by the end of Term 2. It is specific, measurable and time-bound." />
        <Check question="Give two ways to build self-esteem." answer="Use positive self-talk and celebrate small progress." />
        <Check question="You feel overwhelmed. What is a good first step?" answer="Talk to a trusted person and make a simple action plan." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is self-concept?',
    options: ['How you see your own strengths and areas to improve', 'A list of the school rules for all learners', 'A sports score from a single game that you played', 'A trend that is spreading on social media'],
    answer: 'How you see your own strengths and areas to improve',
    explanation: 'Self-concept is your view of who you are and how you can grow.',
  },
  {
    prompt: 'Which action best shows self-motivation?',
    options: ['Carrying on with a study goal even when the work is hard', 'Waiting for other people to do your tasks for you', 'Giving up after you make a single mistake', 'Blaming everyone else for your low marks'],
    answer: 'Carrying on with a study goal even when the work is hard',
    explanation: 'Self-motivation means pushing yourself to keep improving.',
  },
  {
    prompt: 'Why is it useful to identify your strengths?',
    options: [
      'It helps you set realistic goals and build confidence',
      'It means you never need support',
      'It removes all challenges instantly',
      'It guarantees perfect marks in every subject',
    ],
    answer: 'It helps you set realistic goals and build confidence',
    explanation: 'Knowing strengths helps learners plan and progress with purpose.',
  },
  {
    prompt: 'Which person is part of a healthy support system for a learner?',
    options: ['A trusted adult who listens and guides', 'Someone who pressures risky choices', 'A person who mocks effort', 'A stranger who demands secrets'],
    answer: 'A trusted adult who listens and guides',
    explanation: 'Support systems include reliable people who promote safety and growth.',
  },
  {
    prompt: 'A SMART personal goal should be...',
    options: ['specific and time-linked', 'vague and impossible to measure', 'based only on luck', 'copied from a friend'],
    answer: 'specific and time-linked',
    explanation: 'Clear goals are easier to track and achieve.',
  },
  {
    prompt: 'How can a learner strengthen self-esteem?',
    options: [
      'Use positive self-talk and celebrate small progress',
      'Compare themselves negatively every day',
      'Ignore every success completely',
      'Pretend problems do not exist',
    ],
    answer: 'Use positive self-talk and celebrate small progress',
    explanation: 'Recognising progress and speaking kindly to yourself builds confidence.',
  },
  {
    prompt: 'Which response shows responsibility for personal growth?',
    options: [
      'Reflecting on feedback and adjusting your plan',
      'Rejecting all advice without thinking',
      'Avoiding all goals',
      'Choosing shortcuts that break rules',
    ],
    answer: 'Reflecting on feedback and adjusting your plan',
    explanation: 'Reflection helps learners improve their choices and habits.',
  },
  {
    prompt: 'What is a good first step when you feel overwhelmed?',
    options: ['Talk to a trusted person and make a simple action plan', 'Keep quiet about it and stop trying', 'Pass your stress on to your classmates', 'Skip all of your school duties for a while'],
    answer: 'Talk to a trusted person and make a simple action plan',
    explanation: 'Support and planning help you regain control in healthy ways.',
  },
];

const DevelopmentOfTheSelfInSociety = () => (
  <CapsSubjectTopic
    title="Development of the Self in Society"
    subtitle="Self-image, self-motivation, strengths, support systems, and personal goals"
    learnSteps={learnSteps}
    task="gr8-development-of-the-self-in-society-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default DevelopmentOfTheSelfInSociety;
