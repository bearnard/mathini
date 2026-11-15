import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow, Zones } from '../../../../../components/diagrams/lo/PswPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Healthy relationships and self-respect',
    content: slide(
      <>
        <Rule>Relationships are connections with family, friends and peers. A healthy relationship is built on trust, respect and honest communication. Self-respect means valuing yourself and your wellbeing.</Rule>
        <Hub centre="Healthy bond" spokes={['Trust', 'Respect', 'Honest talk', 'Support']} aria="A circle labelled Healthy bond with four labels around it: trust, respect, honest talk and support." />
        <Worked
          title="Compare two friends"
          steps={[<>Friend A listens, keeps your secrets and accepts it when you say no: healthy.</>, <>Friend B tells you who you may talk to and pressures you: not healthy.</>, <>Self-respect: you are allowed to step back from Friend B.</>]}
        />
        <Mistake>Thinking a relationship where someone controls you, or where you always do what others want, is normal. Self-respect is not pride or selfishness. It is valuing your own wellbeing.</Mistake>
      </>,
    ),
  },
  {
    title: 'Emotions and change in adolescence',
    content: slide(
      <>
        <Rule>Adolescence brings physical, emotional and social changes. Emotions such as joy, sadness, anger and fear are natural. They help you understand yourself and connect with others. With family, you may want more freedom but you still need support.</Rule>
        <Worked
          title="Lerato wants to stay out later than her parents allow"
          steps={[<>Name the emotion: “I feel frustrated.”</>, <>Say it calmly instead of hiding it.</>, <>Listen to why her parents worry.</>, <>Ask to talk about a fair plan.</>]}
        />
        <Mistake>Hiding emotions because they show weakness, or thinking your family stops mattering as friends become more important. Family support stays important while you become more independent.</Mistake>
      </>,
    ),
  },
  {
    title: 'Boundaries and peer pressure',
    content: slide(
      <>
        <Rule>A boundary is a limit you set to protect your physical, emotional and mental wellbeing. To handle peer pressure, know your values and say no when something feels wrong.</Rule>
        <Zones zones={[{ title: 'Passive', line: 'Goes along, stays quiet' }, { title: 'Assertive', line: 'Clear, calm and respectful' }, { title: 'Aggressive', line: 'Loud, rude or threatening' }]} aria="Three ways of answering pressure side by side: passive goes along and stays quiet, assertive is clear, calm and respectful, aggressive is loud, rude or threatening." />
        <Worked
          title="A friend asks for your phone password"
          steps={[<>Your boundary: passwords are private.</>, <>Say calmly: “No, I keep my password to myself.”</>, <>Repeat it if they push.</>, <>Walk away or tell a trusted adult if the pressure continues.</>]}
        />
        <Mistake>Believing a boundary means being unfriendly, or going along with something while you are unhappy. A boundary protects you and you can state it politely.</Mistake>
      </>,
    ),
  },
  {
    title: 'Communication, conflict and getting help',
    content: slide(
      <>
        <Rule>Good communication means listening and being honest about how you feel. Conflict resolution is working together to settle a disagreement with respect. If a relationship feels unsafe, tell a trusted adult.</Rule>
        <StepFlow steps={['Calm down first.', 'Listen to the other person.', 'Say how you feel.', 'Agree on a fair solution.']} aria="Four steps to settle a conflict in order: calm down, listen, say how you feel, agree on a fair solution." />
        <Worked
          title="Two friends argue over a group project"
          steps={[<>Both calm down before talking.</>, <>Each listens without interrupting.</>, <>Each says how they feel: “I felt left out.”</>, <>They share the tasks fairly.</>]}
        />
        <Mistake>Always giving in, avoiding every conflict, or keeping quiet when a relationship feels unsafe. Do not handle an unsafe situation alone: tell a trusted adult.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is a healthy relationship based on, and what is self-respect?" answer="Trust, respect and honest communication. Self-respect is valuing yourself and your wellbeing." />
        <Check question="What changes happen in adolescence, and why do emotions matter?" answer="Physical, emotional and social changes. Emotions are natural and help you understand yourself and connect with others." />
        <Check question="What is a boundary, and how do you handle peer pressure?" answer="A limit you set to protect your wellbeing. Know your values and say no when something feels wrong." />
        <Check question="A relationship feels unsafe. What do you do? What is conflict resolution?" answer="Tell a trusted adult. Conflict resolution is working together to settle a disagreement with respect." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a healthy relationship?',
    options: ['One where someone controls you', 'One based on trust, respect, and communication', 'One where you do what others want', 'Friendship only'],
    answer: 'One based on trust, respect, and communication',
    explanation: 'Healthy relationships are built on mutual trust, respect, and honest communication.',
  },
  {
    prompt: 'Why are emotions important?',
    options: ['They show weakness, so they should be hidden', 'They matter little, as thoughts are more important', 'They help you understand yourself and connect with others', 'They matter only when they are sad ones'],
    answer: 'They help you understand yourself and connect with others',
    explanation: 'Emotions are natural and help you communicate and understand yourself.',
  },
  {
    prompt: 'What is a boundary?',
    options: ['A wall that is built to keep other people away', 'A limit you set to protect your wellbeing', 'A rule that other people set and that cannot be changed', 'A sign that a person is unfriendly and does not like company'],
    answer: 'A limit you set to protect your wellbeing',
    explanation: 'Boundaries are necessary to protect your physical, emotional, and mental wellbeing.',
  },
  {
    prompt: 'What changes happen during adolescence?',
    options: ['Physical changes only, such as growth in height', 'Physical, emotional and social changes', 'Emotional changes only, such as mood swings', 'Social changes only, such as new friends and interests'],
    answer: 'Physical, emotional and social changes',
    explanation: 'Adolescence involves changes in your body, emotions, and relationships.',
  },
  {
    prompt: 'What does good communication involve?',
    options: ['Always agreeing with others so there are no arguments', 'Listening and being honest about how you feel', 'Keeping all your feelings inside to avoid conflict', 'Talking only about the good things that happen to you'],
    answer: 'Listening and being honest about how you feel',
    explanation: 'Good communication means both speaking honestly and listening to others.',
  },
  {
    prompt: 'How can you handle peer pressure?',
    options: ['Do whatever your friends want so that they like you', 'Know your values and say no when something feels wrong', 'Avoid all of your friends so that you stay out of trouble', 'Stay quiet and go along, even if you are unhappy'],
    answer: 'Know your values and say no when something feels wrong',
    explanation: 'Knowing your values helps you make good choices, even under peer pressure.',
  },
  {
    prompt: 'What is self-respect?',
    options: ['Being proud and selfish', 'Valuing yourself and your wellbeing', 'Thinking you are better than others', 'Never asking for help'],
    answer: 'Valuing yourself and your wellbeing',
    explanation: 'Self-respect means treating yourself with care and dignity.',
  },
  {
    prompt: 'How can family relationships change during adolescence?',
    options: ['They stay exactly the same as they were in childhood', 'You may want more freedom but still need support', 'They stop mattering as friends become more important', 'You should keep away from your family completely'],
    answer: 'You may want more freedom but still need support',
    explanation: 'During adolescence, you develop independence while family remains important.',
  },
  {
    prompt: 'What should you do if a relationship feels unsafe?',
    options: ['Say nothing', 'Tell a trusted adult', 'Stay quiet', 'Handle it alone'],
    answer: 'Tell a trusted adult',
    explanation: 'If a relationship feels unsafe, it is important to reach out to a trusted adult.',
  },
  {
    prompt: 'What is conflict resolution?',
    options: ['Always giving in so that the other person is happy', 'Working together to settle disagreements with respect', 'Avoiding all conflict so that no one is upset', 'Getting the other person into trouble with an adult'],
    answer: 'Working together to settle disagreements with respect',
    explanation: 'Conflict resolution involves finding solutions that respect both people.',
  },
];

const RelationshipsLifeChanges = () => (
  <CapsSubjectTopic
    title="Relationships and Life Changes"
    subtitle="Managing emotions, boundaries, and healthy communication"
    learnSteps={learnSteps}
    task="gr9-relationships-life-changes-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default RelationshipsLifeChanges;
