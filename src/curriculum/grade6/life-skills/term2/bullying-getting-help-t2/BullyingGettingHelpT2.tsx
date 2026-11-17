import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "Which description fits bullying?",
    options: ["Hurting someone again and again on purpose", "A friendly game that both children enjoy", "One accidental bump in the school corridor", "A single argument that is soon forgotten"],
    answer: "Hurting someone again and again on purpose",
    explanation: "Bullying happens again and again and is meant to hurt. One accident or one argument is not bullying.",
  },
  {
    prompt: "Leaving a child out of every game and spreading rumours about the child is which kind of bullying?",
    options: ["Leaving out and spreading rumours", "Physical bullying with the hands", "A kind of fair play at school", "Healthy competition between friends"],
    answer: "Leaving out and spreading rumours",
    explanation: "Bullying can hurt feelings and friendships without any hitting.",
  },
  {
    prompt: "Sending hurtful messages to a classmate on a phone is called:",
    options: ["A harmless chat", "Fair teasing", "Online bullying", "Good manners"],
    answer: "Online bullying",
    explanation: "Hurtful messages or pictures sent on a phone or the internet are online bullying.",
  },
  {
    prompt: "Which of these is a physical kind of bullying?",
    options: ["Calling a classmate a very rude name", "Leaving someone out of the game", "Kicking and taking someone's things", "Sending an unkind message to them"],
    answer: "Kicking and taking someone's things",
    explanation: "Physical bullying hurts the body or takes things by force.",
  },
  {
    prompt: "Why do some children bully others?",
    options: ["They are happy with themselves", "They want to feel strong or important", "They have no feelings of their own at all", "They are told to by the adults"],
    answer: "They want to feel strong or important",
    explanation: "Some children bully to feel powerful, to copy others, or to get attention. These are reasons, not excuses.",
  },
  {
    prompt: "A child was bullied last year and now bullies a smaller child. What does this show?",
    options: ["Some children copy hurt done to them", "Bullying is a good way to learn things", "The smaller child deserves it in a way", "The first child can never change at all"],
    answer: "Some children copy hurt done to them",
    explanation: "Some children who have been bullied hurt others. It is still wrong, and they can get help to change.",
  },
  {
    prompt: "A child is bullied. Whose fault is it?",
    options: ["Not the fault of the child bullied", "The fault of the child who is bullied", "The fault of the whole of the class", "The fault of the parents of the child"],
    answer: "Not the fault of the child bullied",
    explanation: "The person who bullies is responsible for the bullying. The child who is bullied is never to blame.",
  },
  {
    prompt: "What should you do first if someone bullies you at school?",
    options: ["Tell a trusted adult such as a teacher", "Keep it a secret from everybody at all", "Hit the child back as hard as you can", "Stay away from the school for a while"],
    answer: "Tell a trusted adult such as a teacher",
    explanation: "Telling an adult is the way to get help. It is not telling tales.",
  },
  {
    prompt: "Which free number can a child phone to talk to someone about bullying or other worries?",
    options: ["The weather line on 0800", "A shop on 10177", "Childline on 116", "A taxi rank on 112"],
    answer: "Childline on 116",
    explanation: "Childline is a free helpline for children. The number is 116.",
  },
  {
    prompt: "Why is it a bad idea to hit back at a bully?",
    options: ["It makes the bully stop at once", "It is the best way to get help quickly", "Teachers want you to do it", "You may get hurt or into trouble"],
    answer: "You may get hurt or into trouble",
    explanation: "Walk away, stay with friends and tell an adult instead.",
  },
  {
    prompt: "What is the first step for a child who wants to get out of the bullying habit?",
    options: ["Wait for someone else to stop it for you", "Find a new child to bully instead", "See that it hurts and decide to stop", "Pretend that nothing has happened"],
    answer: "See that it hurts and decide to stop",
    explanation: "A child can change by thinking about how others feel, saying sorry and asking for help.",
  },
  {
    prompt: "A child who sees bullying can help by:",
    options: ["Laughing along with the bully at school", "Not joining in and telling an adult", "Filming it and sharing it online", "Walking past and saying nothing"],
    answer: "Not joining in and telling an adult",
    explanation: "Children who do not join in, support the child who is hurt and tell an adult make bullying stop.",
  },
];

const BullyingGettingHelpT2 = () => (
  <CapsSubjectTopic
    title="Bullying: Reasons and Getting Help"
    subtitle="What bullying is, why some children bully, where to find help, and how to stop"
    learnSteps={learnSteps}
    task="bullying-getting-help-t2"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default BullyingGettingHelpT2;
