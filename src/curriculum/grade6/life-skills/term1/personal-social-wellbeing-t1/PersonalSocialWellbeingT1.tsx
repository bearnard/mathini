import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Self-image and personal strengths',
    content: slide(
      <>
        <Rule>Self-image is how you see and feel about yourself. A personal strength is something you do well, such as helping a classmate patiently.</Rule>
        <Worked
          title="Find a strength"
          steps={[
            <>Think of a time you did something well, for example helping a classmate patiently.</>,
            <>Name the strength: patience and helpfulness.</>,
            <>Patience and helpfulness build good relationships, and noticing them grows a positive self-image.</>,
          ]}
        />
        <Mistake>Thinking self-image is only how you look. It is the picture you carry in your mind about yourself, including your strengths.</Mistake>
      </>,
    ),
  },
  {
    title: 'Healthy habits and respect',
    content: slide(
      <>
        <Rule>A healthy habit keeps your body healthy: washing your hands before eating is good hygiene. Respect means showing care, fairness and good manners to others, such as listening when another learner is speaking.</Rule>
        <Worked
          title="Spot the habit and the respect"
          steps={[
            <>Washing your hands before eating helps prevent illness: a healthy habit.</>,
            <>A learner is speaking and you listen: that shows respect.</>,
            <>Interrupting or laughing would not show care or good manners.</>,
          ]}
        />
        <Mistake>Thinking respect only matters with adults. Respect means care, fairness and good manners to everyone.</Mistake>
      </>,
    ),
  },
  {
    title: 'Peer pressure and refusal skills',
    content: slide(
      <>
        <Rule>
          Peer pressure is pressure from others to do something. A good refusal skill is clear and calm and protects you. If unsafe peer pressure continues, tell a trusted adult.
        </Rule>
        <Worked
          title="Say no safely"
          steps={[
            <>A group pushes you to do something you do not want to do: that is peer pressure.</>,
            <>Say it clearly and calmly: “No thanks, I do not want to do that.”</>,
            <>Walk away if you need to.</>,
            <>If the pressure continues and feels unsafe, tell a trusted adult. Trusted adults can help you stay safe and make a good plan.</>,
          ]}
        />
        <Mistake>Giving in to avoid trouble, or keeping unsafe pressure secret. Tell a trusted adult.</Mistake>
      </>,
    ),
  },
  {
    title: 'Supportive friends and simple goals',
    content: slide(
      <>
        <Rule>
          A supportive friend is kind, respectful and welcoming, for example a learner who includes a new classmate in a game. A simple goal is clear, realistic and easy to practise step by step.
        </Rule>
        <Worked
          title="Make a simple goal"
          steps={[
            <>Problem: you sometimes forget your homework.</>,
            <>Goal: “I will pack my homework every night this week.”</>,
            <>It is clear (pack homework), realistic (every night) and easy to practise step by step.</>,
            <>A supportive friend can help by including others and encouraging you.</>,
          ]}
        />
        <Mistake>Making a goal too big or too vague, such as “be perfect”. A simple goal is clear and realistic.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does self-image mean? Which choice shows a personal strength?</li>
            <li>Which is a healthy habit, and which action shows respect?</li>
            <li>What is peer pressure? Give a good refusal sentence and say what to do if it continues.</li>
            <li>Which learner acts like a supportive friend? What is an example of a simple goal?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>How you see and feel about yourself. Helping a classmate patiently.</li>
            <li>Washing your hands before eating. Listening when another learner is speaking.</li>
            <li>Pressure from others to do something. “No thanks, I do not want to do that.” Tell a trusted adult.</li>
            <li>A learner who includes a new classmate in a game. “I will pack my homework every night this week.”</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What does self-image mean?',
    options: [
      'How you see and feel about yourself',
      'How many toys you own',
      'The colour of your school bag',
      'Only what strangers think of you',
    ],
    answer: 'How you see and feel about yourself',
    explanation: 'Self-image is the picture you carry in your mind about yourself.',
  },
  {
    prompt: 'Which choice shows a personal strength?',
    options: [
      'Helping a classmate patiently',
      'Ignoring all school rules',
      'Copying someone else\'s work',
      'Laughing when someone makes a mistake',
    ],
    answer: 'Helping a classmate patiently',
    explanation: 'Patience and helpfulness are personal strengths that build good relationships.',
  },
  {
    prompt: 'Which is a healthy habit?',
    options: ['Washing your hands before eating', 'Sleeping very late every night', 'Skipping all meals', 'Sitting all day without moving'],
    answer: 'Washing your hands before eating',
    explanation: 'Good hygiene helps prevent illness and keeps your body healthy.',
  },
  {
    prompt: 'Which action shows respect?',
    options: [
      'Listening when another learner is speaking',
      'Pushing to be first in every line',
      'Calling people rude names',
      'Taking turns only when adults watch',
    ],
    answer: 'Listening when another learner is speaking',
    explanation: 'Respect means showing care, fairness, and good manners to others.',
  },
  {
    prompt: 'What is peer pressure?',
    options: [
      'Pressure from others to do something',
      'A teacher checking your homework',
      'A goal you set for yourself',
      'A healthy routine before bed',
    ],
    answer: 'Pressure from others to do something',
    explanation: 'Peer pressure happens when friends or a group try to influence your choices.',
  },
  {
    prompt: 'Which sentence is a good refusal skill?',
    options: ['No thanks, I do not want to do that.', 'Maybe I will do it if everyone laughs.', 'I must do it because you said so.', 'I will hide it and hope nobody notices.'],
    answer: 'No thanks, I do not want to do that.',
    explanation: 'A refusal skill is clear, calm, and helps you protect yourself.',
  },
  {
    prompt: 'Which learner is acting like a supportive friend?',
    options: [
      'A learner who includes a new classmate in a game',
      'A learner who spreads hurtful gossip',
      'A learner who dares others to break rules',
      'A learner who mocks someone\'s answer',
    ],
    answer: 'A learner who includes a new classmate in a game',
    explanation: 'Supportive friendships are kind, respectful, and welcoming.',
  },
  {
    prompt: 'Which is the best example of a simple goal?',
    options: [
      'I will pack my homework every night this week',
      'I will become perfect at everything today',
      'I will never make a mistake again',
      'I will do every sport in one afternoon',
    ],
    answer: 'I will pack my homework every night this week',
    explanation: 'A simple goal is clear, realistic, and easy to practise step by step.',
  },
  {
    prompt: 'If unsafe peer pressure continues, what should you do?',
    options: [
      'Tell a trusted adult',
      'Keep it secret forever',
      'Join in so people stop asking',
      'Pretend it is not a problem',
    ],
    answer: 'Tell a trusted adult',
    explanation: 'Trusted adults can help you stay safe and make a good plan.',
  },
];

const PersonalSocialWellbeingT1 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Growing self-respect, healthy habits, and confident choices"
    learnSteps={learnSteps}
    task="personal-social-wellbeing-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PersonalSocialWellbeingT1;
