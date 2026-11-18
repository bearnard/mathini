import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'What is abuse?',
    content: slide(
      <>
        <Rule>Abuse is when someone uses power to hurt, frighten or control another person. It can be physical (hurting the body), emotional (insults, threats, making someone feel worthless), sexual (any unwanted sexual contact or pressure) or neglect (not giving a child food, care or safety). Abuse can happen between an adult and a child and between peers, for example bullying. Abuse is never the fault of the child or young person.</Rule>
        <FactCards
          cards={[
            { title: 'Physical', line1: 'hurting the body', line2: 'of another person' },
            { title: 'Emotional', line1: 'insults, threats and', line2: 'making someone feel small' },
            { title: 'Sexual', line1: 'any unwanted sexual', line2: 'contact or pressure' },
            { title: 'Neglect', line1: 'not giving a child', line2: 'care, food or safety' },
          ]}
          aria="Kinds of abuse. Physical: hurting the body of another person. Emotional: insults, threats and making someone feel small. Sexual: any unwanted sexual contact or pressure. Neglect: not giving a child care, food or safety."
        />
        <Worked
          title="Name the kind"
          steps={[
            'A boy is called names every day and threatened by an older child: emotional abuse and bullying.',
            'A child is left without food or care for days: neglect.',
            'Any adult who touches a child in a way that makes the child uncomfortable is doing something wrong, and the child must tell a trusted adult.',
          ]}
        />
        <Mistake>Thinking that abuse is only about hitting, or that it is the child&rsquo;s fault. Abuse is never the fault of the child.</Mistake>
      </>,
    ),
  },
  {
    title: 'Threatening and risky situations',
    content: slide(
      <>
        <Rule>A situation is risky when you feel unsafe, afraid or uncomfortable. Warning signs include an older person asking you to keep a secret from your parents, offering gifts for something you do not want to do, asking to be alone with you, touching you in a way you do not like, or threatening you if you tell. Trust your feelings: if something feels wrong, it probably is.</Rule>
        <FactCards
          cards={[
            { title: 'Secrets', line1: 'being told to hide', line2: 'something from your family' },
            { title: 'Gifts', line1: 'presents for something', line2: 'you do not want to do' },
            { title: 'Alone', line1: 'pressure to be alone', line2: 'with someone' },
            { title: 'Feelings', line1: 'if it feels wrong,', line2: 'trust that feeling' },
          ]}
          aria="Warning signs of a risky situation. Secrets: being told to hide something from your family. Gifts: presents for something you do not want to do. Alone: pressure to be alone with someone. Feelings: if it feels wrong, trust that feeling."
        />
        <Worked
          title="Spot the warning sign"
          steps={[
            'An older boy gives you airtime and says not to tell anyone.',
            'The secret and the gift are warning signs.',
            'You leave, and you tell a trusted adult what happened.',
          ]}
        />
        <Mistake>Keeping a secret because you were told to, or because you are scared. You should always tell a trusted adult about a secret that makes you feel unsafe.</Mistake>
      </>,
    ),
  },
  {
    title: 'Effects of abuse and protecting yourself',
    content: slide(
      <>
        <Rule>Abuse can affect health, feelings and relationships: a child may feel afraid, sad or ashamed, may find it hard to trust others, and may do worse at school. To protect yourself, say no loudly, get away, and tell a trusted adult, and keep telling until someone helps. Healthy, non-violent relationships are built on respect, honest talk and listening.</Rule>
        <StepFlow steps={['Say no and move away.', 'Go to a safe place.', 'Tell a trusted adult.', 'Keep telling until you get help.']} aria="Four steps to protect yourself: say no and move away, go to a safe place, tell a trusted adult, and keep telling until you get help." />
        <Worked
          title="Protect yourself"
          steps={[
            'Someone at a party tries to make you do something that you do not want.',
            'You say no firmly, leave and go to a place with other people.',
            'You tell your parent or teacher straight away, and you keep telling until someone helps.',
          ]}
        />
        <Mistake>Believing that you will get into trouble if you tell. People who help children want to keep them safe, and it is never your fault.</Mistake>
      </>,
    ),
  },
  {
    title: 'Where to find help',
    content: slide(
      <>
        <Rule>Places of protection and safety include a trusted adult, a teacher, a school counsellor, a clinic, a social worker and the police. You can call Childline on 116, which is free and for children, and the police on 10111 in an emergency. If you know that another child is being abused, tell an adult too.</Rule>
        <FactCards
          cards={[
            { title: 'Trusted adult', line1: 'a parent, relative,', line2: 'teacher or counsellor' },
            { title: 'Childline', line1: 'free, for children,', line2: 'call 116' },
            { title: 'Police', line1: 'in an emergency,', line2: 'call 10111' },
            { title: 'Clinic, social worker', line1: 'care and a safe', line2: 'place if needed' },
          ]}
          aria="Where to find help. Trusted adult: a parent, relative, teacher or counsellor. Childline: free, for children, call 116. Police: in an emergency call 10111. Clinic and social worker: care and a safe place if needed."
        />
        <Worked
          title="Help a friend"
          steps={[
            'A friend tells you that an older person is hurting her.',
            'You say: "It is not your fault. I will help you tell a teacher."',
            'You go together to the school counsellor, or you call Childline on 116.',
          ]}
        />
        <Mistake>Promising to keep a friend&rsquo;s abuse a secret. Some secrets must be told, because telling keeps your friend safe.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two kinds of abuse.</>,
          <>Give one warning sign of a risky situation.</>,
          <>What should you do if you feel unsafe?</>,
          <>Which number can a child call for Childline?</>,
        ]}
        answers={[
          <>For example physical and emotional abuse.</>,
          <>For example being asked to keep a secret from your parents.</>,
          <>Move away, go to a safe place and tell a trusted adult.</>,
          <>116.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is abuse?",
    options: ["A fair game between friends", "A normal way to teach children", "Using power to hurt, frighten or control", "A kind of school rule"],
    answer: "Using power to hurt, frighten or control",
    explanation: "Abuse can be physical, emotional, sexual or neglect.",
  },
  {
    prompt: "Whose fault is abuse?",
    options: ["Never the fault of the child", "Always the child's fault", "Sometimes the child's fault", "The fault of the child's friends"],
    answer: "Never the fault of the child",
    explanation: "The person who abuses is responsible.",
  },
  {
    prompt: "Which is an example of emotional abuse?",
    options: ["A fair mark from a teacher", "A hug from a parent", "A game of soccer", "Daily insults and threats"],
    answer: "Daily insults and threats",
    explanation: "Insults and threats hurt a person's feelings and self-worth.",
  },
  {
    prompt: "What is neglect?",
    options: ["Giving a child a fair chore at home", "Not giving a child proper care", "Giving a child some pocket money", "Giving a child a new school bag"],
    answer: "Not giving a child proper care",
    explanation: "Neglect is a kind of abuse.",
  },
  {
    prompt: "Can abuse happen between peers?",
    options: ["No, only between two adults", "Yes, such as in bullying", "No, only in films and books", "No, never in a school"],
    answer: "Yes, such as in bullying",
    explanation: "Bullying is a form of abuse between peers.",
  },
  {
    prompt: "Which is a warning sign in a risky situation?",
    options: ["A teacher asking for your homework", "A friend saying that you did well", "A parent asking about your day", "Being told to keep a secret from your parents"],
    answer: "Being told to keep a secret from your parents",
    explanation: "Secrets from your family are a warning sign.",
  },
  {
    prompt: "Someone gives you gifts and says not to tell. What is this?",
    options: ["A warning sign", "A reason to keep quiet", "A kind of reward", "A school prize"],
    answer: "A warning sign",
    explanation: "Gifts and secrets together are a warning sign.",
  },
  {
    prompt: "If something feels wrong, what should you do?",
    options: ["Ignore the feeling and stay", "Stay quiet and just hope", "Trust the feeling and leave", "Do whatever you are told"],
    answer: "Trust the feeling and leave",
    explanation: "Your feelings can warn you of danger.",
  },
  {
    prompt: "How can abuse affect a child?",
    options: ["Make the child more sure of themselves", "Make the child do better at school", "Make the child trust everyone", "Make the child feel afraid, sad or ashamed"],
    answer: "Make the child feel afraid, sad or ashamed",
    explanation: "Abuse can harm feelings, trust and school work.",
  },
  {
    prompt: "What is a good first step to protect yourself?",
    options: ["Stay and keep quiet", "Say no loudly and move away", "Smile and say nothing", "Hide for a long time"],
    answer: "Say no loudly and move away",
    explanation: "Move to a safe place and tell an adult.",
  },
  {
    prompt: "Who can you tell if you are being abused?",
    options: ["A trusted adult, like a teacher", "Nobody at all in the world", "Only the person who is hurting you", "Only strangers who you meet online"],
    answer: "A trusted adult, like a teacher",
    explanation: "Keep telling until someone helps.",
  },
  {
    prompt: "What should you do if the first adult does not help?",
    options: ["Give up and say nothing", "Believe that it is your fault", "Keep telling until someone does", "Tell no one again"],
    answer: "Keep telling until someone does",
    explanation: "There are many people who can help.",
  },
  {
    prompt: "Which short number reaches Childline for free?",
    options: ["12", "160", "116", "1160"],
    answer: "116",
    explanation: "Childline is a free helpline for children.",
  },
  {
    prompt: "Which number do you call for the police in an emergency?",
    options: ["10111", "116", "12", "160"],
    answer: "10111",
    explanation: "The police emergency number is 10111.",
  },
];

const DealingWithAbuse = () => (
  <CapsSubjectTopic
    title="Dealing with Abuse"
    subtitle="What abuse is, risky situations, effects, protecting yourself and where to find help"
    learnSteps={learnSteps}
    task="gr7-dealing-with-abuse-t2"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default DealingWithAbuse;
