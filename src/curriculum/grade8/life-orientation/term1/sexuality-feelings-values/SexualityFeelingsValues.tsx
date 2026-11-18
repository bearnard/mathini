import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Understanding your own feelings',
    content: slide(
      <>
        <Rule>Sexuality is a natural part of who you are. During your teenage years your body, feelings and thoughts change, and you may feel new things about yourself and about other people. These feelings are normal. A feeling is not an action: you can have a feeling and still decide, calmly and in your own time, what to do about it.</Rule>
        <FactCards
          cards={[
            { title: 'Feelings', line1: 'new feelings in the', line2: 'teenage years are normal' },
            { title: 'Thoughts', line1: 'you can think before', line2: 'you act' },
            { title: 'Actions', line1: 'what you do is', line2: 'your choice' },
            { title: 'Time', line1: 'there is no need', line2: 'to rush' },
          ]}
          aria="Understanding your feelings. Feelings: new feelings in the teenage years are normal. Thoughts: you can think before you act. Actions: what you do is your choice. Time: there is no need to rush."
        />
        <Worked
          title="Feelings and choices"
          steps={[
            'You notice that you like someone in your class. This is a normal feeling.',
            'You think about what is right for you and what your family and school expect.',
            'You decide to be friendly and to wait, and you know that you can talk to a trusted adult.',
          ]}
        />
        <Mistake>Thinking that a feeling means you must act on it, or that something is wrong with you for having it. Feelings are normal, and your actions are your choice.</Mistake>
      </>,
    ),
  },
  {
    title: 'What influences your views and choices',
    content: slide(
      <>
        <Rule>Many things shape how you think about sexuality. Friends and peers influence you, your family and community have norms, your culture has values, and the media and social media send messages that are not always true. Knowing where an idea comes from helps you decide whether it is right for you.</Rule>
        <FactCards
          cards={[
            { title: 'Friends', line1: 'peers may push', line2: 'or support you' },
            { title: 'Family', line1: 'family and community', line2: 'norms and rules' },
            { title: 'Culture', line1: 'values taught in', line2: 'your culture' },
            { title: 'Media', line1: 'TV, music and apps', line2: 'send mixed messages' },
          ]}
          aria="What influences your views. Friends: peers may push or support you. Family: family and community norms and rules. Culture: values taught in your culture. Media: TV, music and apps send mixed messages."
        />
        <Worked
          title="Ask where the message comes from"
          steps={[
            'A video online says that everyone your age already has a boyfriend or girlfriend.',
            'Ask: who made it, and what do they want? Many such messages are made to sell things or to get attention.',
            'Compare it with what you know from your family, your school and a trusted adult.',
          ]}
        />
        <Mistake>Believing that what the media shows is what most people your age do. Many teenagers are not in relationships, and that is fine.</Mistake>
      </>,
    ),
  },
  {
    title: 'Values, respect and saying no',
    content: slide(
      <>
        <Rule>Respect is the basis of every healthy relationship. You have the right to say no to anything that makes you uncomfortable, and other people have the same right. Consent means that a person freely agrees; pressure, threats or tricks are never consent, and a person who is too young cannot give consent to an adult. If someone pressures you, you can leave and tell a trusted adult.</Rule>
        <StepFlow steps={['Say no clearly.', 'Give a short reason if you want to.', 'Walk away to a safe place.', 'Tell a trusted adult.']} aria="Four steps when someone pressures you: say no clearly, give a short reason if you want to, walk away to a safe place, and tell a trusted adult." />
        <Worked
          title="Practise a calm no"
          steps={[
            'A friend keeps asking you to do something that you are not comfortable with.',
            'You say: "No, I am not comfortable with that." You do not have to explain more.',
            'You walk away and you tell your older cousin or a teacher what happened.',
          ]}
        />
        <Mistake>Thinking that a person has to say no loudly or fight for it to count. No is no, and respect means accepting it the first time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Where to ask and get help',
    content: slide(
      <>
        <Rule>You can ask questions about your body, feelings and relationships. Reliable sources are a parent or caregiver, a teacher or school counsellor, a clinic nurse, and a helpline such as Childline on 116. Be careful of rumours from friends and of websites you do not know. If anyone makes you feel unsafe, tell a trusted adult. It is never your fault.</Rule>
        <FactCards
          cards={[
            { title: 'At home', line1: 'a parent or', line2: 'trusted caregiver' },
            { title: 'At school', line1: 'a teacher or', line2: 'school counsellor' },
            { title: 'Clinic', line1: 'a nurse can answer', line2: 'health questions' },
            { title: 'Childline', line1: 'call 116, a free', line2: 'helpline for children' },
          ]}
          aria="Where to ask and get help. At home: a parent or trusted caregiver. At school: a teacher or school counsellor. Clinic: a nurse can answer health questions. Childline: call 116, a free helpline for children."
        />
        <Worked
          title="Choose a reliable source"
          steps={[
            'You have a question about the changes in your body.',
            'A rumour in the group chat is not reliable. A clinic nurse or your teacher is.',
            'If you feel shy, you can call Childline on 116 and ask there.',
          ]}
        />
        <Mistake>Keeping a worry secret because you feel embarrassed. Asking a trusted adult is a sign of good judgement.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Is it normal to have new feelings during your teenage years?</>,
          <>Name two things that can influence your views on sexuality.</>,
          <>What should you do if someone keeps pressuring you?</>,
          <>Which helpline can a child call on 116?</>,
        ]}
        answers={[
          <>Yes. Feelings are normal, and your actions are your choice.</>,
          <>For example friends, family, culture or the media.</>,
          <>Say no, walk away to a safe place and tell a trusted adult.</>,
          <>Childline.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "You notice new feelings about another person at your age. What is true about these feelings?",
    options: ["They mean something is wrong with you", "They mean you must act on them now", "They are a normal part of growing up", "They are caused by what you eat"],
    answer: "They are a normal part of growing up",
    explanation: "New feelings in the teenage years are normal, and what you do about them is your choice.",
  },
  {
    prompt: "What is the difference between a feeling and an action?",
    options: ["You choose what to do about a feeling", "A feeling always forces an action", "The two are exactly the same thing", "Actions always come before feelings"],
    answer: "You choose what to do about a feeling",
    explanation: "Feelings are normal; you decide on your actions.",
  },
  {
    prompt: "A friend says everyone your age already has a boyfriend or girlfriend. What should you do?",
    options: ["Believe it, because friends are always right", "Start a relationship so that you fit in", "Never speak to that friend again", "Ask where the message comes from and think for yourself"],
    answer: "Ask where the message comes from and think for yourself",
    explanation: "Many messages from peers and the media are not true, and you can decide for yourself.",
  },
  {
    prompt: "Which of these can influence your views about sexuality?",
    options: ["Only the weather and the season", "Friends, family, culture and the media", "Only your school timetable", "Only the shoes you wear"],
    answer: "Friends, family, culture and the media",
    explanation: "Peers, family norms, cultural values and media all play a part.",
  },
  {
    prompt: "Where can a message on social media about relationships be unreliable?",
    options: ["It is always checked by a doctor", "It may be made to get attention or to sell things", "It is always written by your teacher", "It is always true for every teenager"],
    answer: "It may be made to get attention or to sell things",
    explanation: "Check who made it and why before you trust it.",
  },
  {
    prompt: "Which value should every healthy relationship rest on?",
    options: ["Pressure to do what the other wants", "Keeping secrets that cause fear", "Doing whatever friends dare you to do", "Respect for each other"],
    answer: "Respect for each other",
    explanation: "Respect means accepting each person's feelings and limits.",
  },
  {
    prompt: "You are not comfortable with something a friend asks. What is your right?",
    options: ["To say no", "To say yes to keep the peace", "To stay silent and hope it stops", "To do it so you do not hurt feelings"],
    answer: "To say no",
    explanation: "You have the right to say no, and others have the same right.",
  },
  {
    prompt: "What does consent mean?",
    options: ["A person agrees after being threatened", "A person stays silent while pressured", "A person freely agrees without pressure", "A person agrees because of a dare"],
    answer: "A person freely agrees without pressure",
    explanation: "Pressure, threats or tricks are never consent.",
  },
  {
    prompt: "A friend says no to something you asked. How should you respond?",
    options: ["Ask again until they agree", "Tell others that they are boring", "Take it as a challenge", "Accept it the first time"],
    answer: "Accept it the first time",
    explanation: "Respect means accepting a no.",
  },
  {
    prompt: "Someone keeps pressuring you. What is a good first step?",
    options: ["Give in so that it stops", "Say no clearly and walk away to a safe place", "Say nothing and stay where you are", "Keep it a secret from every adult"],
    answer: "Say no clearly and walk away to a safe place",
    explanation: "Then tell a trusted adult what happened.",
  },
  {
    prompt: "Who is a reliable person to ask about changes in your body?",
    options: ["A clinic nurse or a teacher you trust", "A rumour in the group chat", "A stranger on a game site", "A person who sells products"],
    answer: "A clinic nurse or a teacher you trust",
    explanation: "Reliable sources give correct, safe information.",
  },
  {
    prompt: "A child who needs to talk can dial 116. Who answers?",
    options: ["The weather service", "The bus company", "Childline", "A shop hotline"],
    answer: "Childline",
    explanation: "Childline is a free helpline for children.",
  },
  {
    prompt: "You feel embarrassed about a question about your body. What is a wise choice?",
    options: ["Keep the worry secret for ever", "Search for rumours online only", "Ask a trusted adult or call Childline", "Ask a stranger you meet online"],
    answer: "Ask a trusted adult or call Childline",
    explanation: "Asking a trusted adult shows good judgement.",
  },
  {
    prompt: "If someone makes you feel unsafe, whose fault is it?",
    options: ["Never yours", "Always yours", "Yours if you did not shout", "Yours if you were alone"],
    answer: "Never yours",
    explanation: "Always tell a trusted adult; it is never your fault.",
  },
];

const SexualityFeelingsValues = () => (
  <CapsSubjectTopic
    title="Sexuality: Feelings, Values, Pressure and Respect"
    subtitle="Normal feelings, what influences you, respect and consent, saying no and where to get help"
    learnSteps={learnSteps}
    task="gr8-sexuality-feelings-values-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SexualityFeelingsValues;
