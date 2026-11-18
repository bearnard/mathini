import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You walk home alone through an empty field at night. What is a safer choice?",
    options: ["Travel with friends or arrange a lift", "Walk faster and say nothing on a device in a file", "Take a shortcut in the dark in use for a user", "Turn off your phone at work in a lab"],
    answer: "Travel with friends or arrange a lift",
    explanation: "Planning a safer way home reduces the risk.",
  },
  {
    prompt: "Which statement about alcohol and drugs is correct?",
    options: ["They are safe in small amounts for any child in a lab", "They improve your marks in tests on a system in a program", "They are legal for every young person at a school on a device", "They affect judgement and can lead to addiction"],
    answer: "They affect judgement and can lead to addiction",
    explanation: "Substances affect judgement and health and can lead to addiction.",
  },
  {
    prompt: "You are not ready for sex but a friend says everyone is doing it. What are you allowed to do?",
    options: ["Agree so that you are accepted", "Hide it from your friends", "Wait until they stop asking", "Say no at any time"],
    answer: "Say no at any time",
    explanation: "Everyone has the right to say no.",
  },
  {
    prompt: "What must be present before two people have sex?",
    options: ["Pressure from a friend at work in a lab", "Clear consent from both people", "A gift from one person in a file on a system", "A dare"],
    answer: "Clear consent from both people",
    explanation: "Consent must be clear and freely given by both.",
  },
  {
    prompt: "Which of these can protect you from STIs and HIV?",
    options: ["Staying away from the clinic in a file", "Sharing personal items for a user", "Ignoring symptoms in a lab for a task", "Protection and regular testing"],
    answer: "Protection and regular testing",
    explanation: "Protection, testing and early treatment protect health.",
  },
  {
    prompt: "Which number can you phone for advice about HIV?",
    options: ["0800 012 322", "10111", "116", "0800 428 428"],
    answer: "0800 012 322",
    explanation: "0800 012 322 is the AIDS Helpline.",
  },
  {
    prompt: "Friends try to persuade you to try a cigarette. Which response handles the pressure best?",
    options: ["Say yes and hide it in a file on a system", "Say nothing and take it for a user at a school", "Insult them and walk off in a lab for a task", "Say no thanks and suggest another activity"],
    answer: "Say no thanks and suggest another activity",
    explanation: "A clear no with an alternative is an effective response.",
  },
  {
    prompt: "A friend who encourages you to study is an example of what?",
    options: ["Positive peer pressure", "Negative peer pressure", "A risk of addiction", "A form of abuse"],
    answer: "Positive peer pressure",
    explanation: "Peer pressure can also push you in a good direction.",
  },
  {
    prompt: "Why do real friends accept it when you say no?",
    options: ["They want to control you on a device", "They are bored with you in use", "They respect your choices", "They do not care at work in a lab"],
    answer: "They respect your choices",
    explanation: "True friends respect your decisions.",
  },
  {
    prompt: "A friend says that nothing matters any more and pulls away from everyone. What should you do?",
    options: ["Ignore it and hope it passes at a school on a device", "Joke about it with others for a task in use", "Promise to keep it a secret in a program at work", "Take it seriously and tell a trusted adult"],
    answer: "Take it seriously and tell a trusted adult",
    explanation: "A warning sign needs to be taken seriously, and an adult can help.",
  },
  {
    prompt: "A friend tells you something worrying and asks you to keep it a secret. What is right?",
    options: ["Keep the promise at all costs on a device", "Post about it online in use for a user", "Tell a trusted adult for their safety", "Wait a month before saying anything at work"],
    answer: "Tell a trusted adult for their safety",
    explanation: "You cannot promise secrecy when someone may be in danger.",
  },
  {
    prompt: "You want to talk to someone at school about a problem that is hurting you. Who can help?",
    options: ["A stranger online", "A school counsellor", "Nobody, as you must cope alone", "A rival learner"],
    answer: "A school counsellor",
    explanation: "A school counsellor is trained to support learners.",
  },
  {
    prompt: "Which number can a child phone for free help and support?",
    options: ["10111", "116", "0800 012 322", "0800 428 428"],
    answer: "116",
    explanation: "Childline is 116.",
  },
  {
    prompt: "Someone is in immediate danger. Which number should you phone?",
    options: ["10111", "116", "0800 012 322", "0800 428 428"],
    answer: "10111",
    explanation: "SAPS 10111 is the police emergency number.",
  },
];

const RiskyBehaviourPeerPressure = () => (
  <CapsSubjectTopic
    title="Risky Behaviour, Peer Pressure and Getting Help"
    subtitle="Staying safe, handling pressure, and where to find support for your health and well-being"
    learnSteps={learnSteps}
    task="gr11-risky-behaviour-peer-pressure-t3"
    bank={bank}
    apiPath="/api/caps/lo"
    grade={11}
  />
);

export default RiskyBehaviourPeerPressure;
