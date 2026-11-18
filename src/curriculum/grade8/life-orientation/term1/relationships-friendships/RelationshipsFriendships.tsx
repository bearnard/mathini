import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Starting a friendship',
    content: slide(
      <>
        <Rule>Friendships begin when two people find something in common and show kindness and interest. To start a friendship, greet people, listen, ask questions, share interests and join in activities. Choose friends who treat you with respect.</Rule>
        <StepFlow steps={['Greet and smile.', 'Ask a question and listen.', 'Find a shared interest.', 'Spend time together.']} aria="Four steps to start a friendship: greet and smile, ask a question and listen, find a shared interest, and spend time together." />
        <Worked
          title="Start a conversation"
          steps={[
            'A new learner sits alone at break.',
            'You greet them and ask which sport they like.',
            'You both like soccer, so you invite them to join your game.',
          ]}
        />
        <Mistake>Waiting for the other person to make the first move. A friendly greeting from you can start a friendship.</Mistake>
      </>,
    ),
  },
  {
    title: 'Keeping a friendship healthy',
    content: slide(
      <>
        <Rule>A healthy friendship is built on trust, honesty, respect, kindness and good communication. Friends listen, keep promises, respect each other's limits and are happy for each other. A friend should never make you feel afraid, pressure you to do harm or force you to keep silent about something that hurts.</Rule>
        <FactCards
          cards={[
            { title: 'Trust', line1: 'keep promises and', line2: 'private things private' },
            { title: 'Respect', line1: 'accept each other’s', line2: 'limits and views' },
            { title: 'Honesty', line1: 'say what you feel', line2: 'in a kind way' },
            { title: 'Support', line1: 'be there in good', line2: 'times and bad' },
          ]}
          aria="Parts of a healthy friendship. Trust: keep promises and private things private. Respect: accept each other's limits and views. Honesty: say what you feel in a kind way. Support: be there in good times and bad."
        />
        <Worked
          title="Spot a healthy sign"
          steps={[
            'A friend keeps your secret, but tells an adult when your safety is at risk: trust with care.',
            'A friend laughs at you in front of others: this is not respectful.',
            'A friend says well done when you win: support.',
          ]}
        />
        <Mistake>Believing that a true friend will do anything you ask or that friends never disagree. Friends respect each other&rsquo;s choices.</Mistake>
      </>,
    ),
  },
  {
    title: 'Disagreeing in a constructive way',
    content: slide(
      <>
        <Rule>Friends sometimes disagree. A constructive disagreement stays calm and aims to solve the problem. Listen to the other person, say how you feel using an I-message, and look for a compromise that both of you can accept. Do not insult, shout or spread rumours.</Rule>
        <StepFlow steps={['Stay calm and listen.', 'Say how you feel: "I feel ... when ...".', 'Look for a compromise.', 'Agree and thank each other.']} aria="Four steps for a constructive disagreement: stay calm and listen, say how you feel with an I-message, look for a compromise, then agree and thank each other." />
        <Worked
          title="Use an I-message"
          steps={[
            'Your friend always borrows your pens and does not return them.',
            'Say: "I feel upset when my pens are not returned, because I need them."',
            'Agree that your friend will bring pens and return yours the same day.',
          ]}
        />
        <Mistake>Using "you always" and "you never". These words start an argument. Describe your feeling and the problem instead.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ending an unhealthy friendship',
    content: slide(
      <>
        <Rule>Some friendships end because people grow apart, and some must end because they are unhealthy, for example when a friend bullies you, pressures you to do harm or makes you feel afraid. End a friendship respectfully and kindly, and keep yourself safe. If you feel unsafe, tell a trusted adult such as a parent, teacher or counsellor, or call Childline on 116.</Rule>
        <FactCards
          cards={[
            { title: 'Drifting', line1: 'interests change and', line2: 'you grow apart' },
            { title: 'Unhealthy', line1: 'bullying, pressure', line2: 'or fear' },
            { title: 'How', line1: 'speak kindly and', line2: 'keep it short' },
            { title: 'Help', line1: 'tell an adult, or', line2: 'call Childline 116' },
          ]}
          aria="Ending a friendship. Drifting: interests change and you grow apart. Unhealthy: bullying, pressure or fear. How: speak kindly and keep it short. Help: tell an adult, or call Childline on 116."
        />
        <Worked
          title="End it with care"
          steps={[
            'A friend keeps putting you down and pressures you to skip class.',
            'You say calmly: "I am going to spend less time together because I want to stay in class."',
            'You tell your teacher what happened and spend time with friends who respect you.',
          ]}
        />
        <Mistake>Ending a friendship by spreading rumours or ignoring someone cruelly. Stay respectful, even when you leave.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give one way to start a friendship.</>,
          <>Name two signs of a healthy friendship.</>,
          <>What is an I-message?</>,
          <>What should you do if a friend makes you feel afraid?</>,
        ]}
        answers={[
          <>Greet the person, ask a question and listen.</>,
          <>For example trust and respect.</>,
          <>A sentence that says how you feel, such as &ldquo;I feel upset when ...&rdquo;.</>,
          <>Keep yourself safe and tell a trusted adult.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which is a good way to start a friendship?",
    options: ["Wait for them to speak first for ever", "Tease them to get their attention", "Greet the person and ask a question", "Ignore them until they come to you"],
    answer: "Greet the person and ask a question",
    explanation: "A friendly greeting and a question show interest.",
  },
  {
    prompt: "A new person sits alone at break. What can you do?",
    options: ["Invite them to join you", "Pretend not to see them", "Laugh at them with others", "Tell them to go away"],
    answer: "Invite them to join you",
    explanation: "A kind invitation can start a friendship.",
  },
  {
    prompt: "Which is a sign of a healthy friendship?",
    options: ["Fear of what a friend may do", "Pressure to do harmful things", "Secrets that make you feel afraid", "Trust and respect"],
    answer: "Trust and respect",
    explanation: "Healthy friends trust and respect each other.",
  },
  {
    prompt: "What does trust in a friendship include?",
    options: ["Telling everyone each other's secrets", "Keeping promises and private things private", "Breaking promises when it suits you", "Checking each other's phones every day"],
    answer: "Keeping promises and private things private",
    explanation: "Trust means being reliable and discreet.",
  },
  {
    prompt: "A friend laughs at you in front of others. What does this show?",
    options: ["A sign of true friendship", "A lack of respect", "A healthy kind of honesty", "Good communication"],
    answer: "A lack of respect",
    explanation: "Respectful friends do not put each other down in public.",
  },
  {
    prompt: "Friends disagree. What is a constructive way to handle it?",
    options: ["Shout until the other gives in", "Spread rumours about them", "Stop speaking for ever", "Stay calm and look for a compromise"],
    answer: "Stay calm and look for a compromise",
    explanation: "A constructive disagreement aims to solve the problem.",
  },
  {
    prompt: "What is an I-message?",
    options: ["A sentence that says how you feel", "An insult that begins with the word I", "A message about how someone else is wrong", "A message sent only on a phone"],
    answer: "A sentence that says how you feel",
    explanation: "For example: I feel upset when my pens are not returned.",
  },
  {
    prompt: "Which is an I-message?",
    options: ["You always laugh at me, always", "You never listen to anyone at all", "I feel upset when you laugh", "Everybody knows that you are rude"],
    answer: "I feel upset when you laugh",
    explanation: "An I-message describes your feeling and the problem without blame.",
  },
  {
    prompt: "Why should you avoid saying you always and you never in a disagreement?",
    options: ["They are always polite words", "They solve the problem fast", "They show good listening", "They start an argument"],
    answer: "They start an argument",
    explanation: "Describe the problem and your feeling instead.",
  },
  {
    prompt: "What is a compromise?",
    options: ["One person wins and the other loses", "Each person gives a little so both can agree", "Both people stop talking", "A person gives in to every demand"],
    answer: "Each person gives a little so both can agree",
    explanation: "A compromise is a solution that both can accept.",
  },
  {
    prompt: "When may a friendship have to end?",
    options: ["When a friend bullies or pressures you", "When a friend wins a school prize", "When a friend is a little late today", "When a friend asks to borrow a pen"],
    answer: "When a friend bullies or pressures you",
    explanation: "Unhealthy friendships that make you afraid or unsafe should end.",
  },
  {
    prompt: "How should you end an unhealthy friendship?",
    options: ["By spreading rumours about them", "By threatening them", "Respectfully, and keep yourself safe", "By ignoring them in a cruel way"],
    answer: "Respectfully, and keep yourself safe",
    explanation: "Stay respectful and tell an adult if you feel unsafe.",
  },
  {
    prompt: "A friend makes you feel afraid. Who can you tell?",
    options: ["No one at all", "Only the person who frightens you", "A parent, teacher or counsellor", "Only strangers online"],
    answer: "A parent, teacher or counsellor",
    explanation: "Telling a trusted adult keeps you safe, and Childline 116 can also help.",
  },
  {
    prompt: "Which number can a child call for help from Childline?",
    options: ["116", "12", "1116", "11 600"],
    answer: "116",
    explanation: "Childline is a free helpline for children on 116.",
  },
];

const RelationshipsFriendships = () => (
  <CapsSubjectTopic
    title="Relationships and Friendships: Starting, Keeping and Ending"
    subtitle="Starting a friendship, keeping it healthy, disagreeing constructively and ending an unhealthy friendship"
    learnSteps={learnSteps}
    task="gr8-relationships-friendships-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default RelationshipsFriendships;
