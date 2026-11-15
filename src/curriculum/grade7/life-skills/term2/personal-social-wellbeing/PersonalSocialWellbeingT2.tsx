import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow, Zones } from '../../../../../components/diagrams/lo/PswPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Peer influence: friends and media',
    content: slide(
      <>
        <Rule>Peer influence is pressure from friends or media to act in certain ways. It can be positive, like friends who study together, or negative, like pressure to try something risky.</Rule>
        <Hub centre="My choices" spokes={['Friends', 'Classmates', 'Social media', 'TV and adverts']} aria="A circle labelled My choices with four influences around it: friends, classmates, social media, and TV and adverts." />
        <Worked
          title="A friend says: “Everyone is doing it”"
          steps={[<>Notice the pressure.</>, <>Ask: is it safe, and does it fit my values?</>, <>Question what media and friends show before you copy it.</>, <>Choose for yourself.</>]}
        />
        <Mistake>Believing that “everyone is doing it” makes something safe or normal. Media can make risky behaviour look normal, so check it before copying it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Saying no assertively',
    content: slide(
      <>
        <Rule>Being assertive means saying clearly, calmly and respectfully what you will not do. Substance abuse means misusing harmful substances such as alcohol, cigarettes or drugs.</Rule>
        <Zones zones={[{ title: 'Passive', line: 'Gives in quietly' }, { title: 'Assertive', line: 'Clear, calm and respectful' }, { title: 'Aggressive', line: 'Loud, rude or threatening' }]} aria="Three styles of communication side by side: passive gives in quietly, assertive is clear, calm and respectful, aggressive is loud, rude or threatening." />
        <Worked
          title="A friend offers you a harmful substance"
          steps={[<>Stay calm and look at your friend.</>, <>Say: “No thanks, that is not a safe choice for me.”</>, <>Leave the situation.</>, <>Tell a trusted adult if the pressure continues.</>]}
        />
        <Mistake>Answering with insults, or saying yes just to fit in. Being assertive is firm and polite. It is neither passive nor aggressive.</Mistake>
      </>,
    ),
  },
  {
    title: 'Staying safe online',
    content: slide(
      <>
        <Rule>Keep personal details private: your full name, address, school, phone number and passwords. If you see cyberbullying, do not join in. Save the evidence and tell a trusted adult.</Rule>
        <StepFlow steps={['Do not reply or forward it.', 'Save the evidence (a screenshot).', 'Tell a trusted adult.', 'Block and report the account.']} aria="Four steps when you see cyberbullying in order: do not reply, save the evidence, tell a trusted adult, block and report." />
        <Worked
          title="A stranger online asks where you live and which school you go to"
          steps={[<>Do not answer. Your address and school stay private.</>, <>Tell a trusted adult.</>, <>Block the person.</>]}
        />
        <Mistake>Sharing private details with online “friends” you have never met, or deleting a bullying message before anyone has seen it. Keep the evidence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Empathy and calm communication',
    content: slide(
      <>
        <Rule>Empathy means trying to understand another person's feelings. In a conflict, listen first, then speak calmly about the problem.</Rule>
        <Worked
          title="Two friends argue about a lost pen"
          steps={[<>Listen without interrupting.</>, <>Say what you heard: “You felt upset when it went missing.”</>, <>Say how you feel, calmly: “I feel worried that you blame me.”</>, <>Look for a fair solution together.</>]}
        />
        <Mistake>Thinking empathy means you must agree, or that shouting makes your point stronger. You can understand someone's feelings and still disagree politely.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is peer influence, and how can media affect your choices?" answer="Peer influence is pressure from friends or media to act in certain ways. Media can make risky behaviour look normal, so question it." />
        <Check question="Write one assertive way to say no to something unsafe." answer="For example: “No thanks, that is not a safe choice for me.” It is clear, calm and respectful." />
        <Check question="You see cyberbullying online. What do you do?" answer="Do not join in. Save the evidence and report it to a trusted adult." />
        <Check question="What does empathy mean, and how do you speak in a conflict?" answer="Empathy is trying to understand another person's feelings. Listen first and speak calmly about the problem." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is peer influence?',
    options: [
      'Pressure from friends or media to act in certain ways',
      'A teacher giving homework instructions',
      'A personal timetable for studying',
      'A sports warm-up routine',
    ],
    answer: 'Pressure from friends or media to act in certain ways',
    explanation: 'Peer influence can be positive or negative depending on the behaviour encouraged.',
  },
  {
    prompt: 'Which sentence is an assertive response?',
    options: ['No thanks, that is not a safe choice for me', 'I will do anything that you say', 'Move away, you are useless to me', 'I am too scared to give an answer'],
    answer: 'No thanks, that is not a safe choice for me',
    explanation: 'Assertive communication is clear, respectful, and confident.',
  },
  {
    prompt: 'Which online action is safest?',
    options: [
      'Keeping personal details private',
      'Sharing your password with new friends',
      'Posting your home address publicly',
      'Accepting all unknown requests',
    ],
    answer: 'Keeping personal details private',
    explanation: 'Protecting personal information reduces online risk.',
  },
  {
    prompt: 'What does empathy mean?',
    options: [
      'Trying to understand another person\'s feelings',
      'Winning every argument at all costs',
      'Ignoring people who disagree with you',
      'Copying what others do without thinking',
    ],
    answer: 'Trying to understand another person\'s feelings',
    explanation: 'Empathy supports respectful communication and healthier relationships.',
  },
  {
    prompt: 'If a friend offers a harmful substance, what is the best choice?',
    options: ['Refuse clearly and leave the situation', 'Try it to fit in', 'Hide the situation from adults', 'Offer it to more people'],
    answer: 'Refuse clearly and leave the situation',
    explanation: 'Clear refusal and distance reduce risk and protect your wellbeing.',
  },
  {
    prompt: 'What should you do if you see cyberbullying?',
    options: ['Save the evidence and report it to a trusted adult', 'Forward it to the classmates for fun', 'Reply with harsher insults of your own', 'Pretend that it is normal behaviour'],
    answer: 'Save the evidence and report it to a trusted adult',
    explanation: 'Reporting helps stop harm and keeps learners safer online.',
  },
  {
    prompt: 'How can media influence choices?',
    options: [
      'It can make risky behaviour look normal',
      'It always gives complete truth',
      'It removes the need for critical thinking',
      'It guarantees every advertised product is safe',
    ],
    answer: 'It can make risky behaviour look normal',
    explanation: 'Media messages should be questioned and checked before copying behaviour.',
  },
  {
    prompt: 'Which action shows responsible communication in conflict?',
    options: [
      'Listening and speaking calmly about the problem',
      'Posting private messages publicly',
      'Interrupting and shouting continuously',
      'Ignoring the issue forever',
    ],
    answer: 'Listening and speaking calmly about the problem',
    explanation: 'Respectful communication helps solve conflict more effectively.',
  },
];

const PersonalSocialWellbeingT2 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Peer influence, empathy, substance awareness, and online safety"
    learnSteps={learnSteps}
    task="gr7-personal-social-wellbeing-t2"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PersonalSocialWellbeingT2;
