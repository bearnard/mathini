import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "A romantic film shows a couple who never argue. What should you remember?",
    options: ["Arguments show that the love is over at a school", "Real couples seldom need to talk for a task in use", "Films show exactly how people live in a program", "The film shows a chosen and edited picture"],
    answer: "The film shows a chosen and edited picture",
    explanation: "Media chooses what to show, so it can differ from real life.",
  },
  {
    prompt: "A social media post shows a perfect holiday. What is missing?",
    options: ["The date of the post in a lab for a task", "The name of the holiday spot on a system in a program", "The ordinary and difficult parts of life", "The camera that was used at a school on a device"],
    answer: "The ordinary and difficult parts of life",
    explanation: "Posts usually show the best moments and leave out the rest.",
  },
  {
    prompt: "An advert suggests that a costly gift proves love. What is a healthy view?",
    options: ["Love is measured by money for a task in use", "Gifts replace talking in a program at work", "Care and respect matter more than the price", "Everyone must spend more on a device in a file"],
    answer: "Care and respect matter more than the price",
    explanation: "A relationship is built on respect, not on spending.",
  },
  {
    prompt: "Which message about jealousy is healthier?",
    options: ["Jealousy is the best proof of love", "Jealousy shows that you should check a partner’s phone", "Jealousy is a healthy part of love", "Jealousy can be controlling and needs to be discussed"],
    answer: "Jealousy can be controlling and needs to be discussed",
    explanation: "Jealousy can become controlling, so talk about it.",
  },
  {
    prompt: "You are pressured to send a private photo to prove your love. What should you do?",
    options: ["Send it so that they are not upset", "Say no and talk to a trusted adult", "Post it on social media", "Ignore the feeling and send it later"],
    answer: "Say no and talk to a trusted adult",
    explanation: "You have the right to say no, and a trusted adult can help.",
  },
  {
    prompt: "Which is a sign of a healthy relationship?",
    options: ["One person makes the decisions", "Both people have an equal say", "One person checks the other’s phone", "One person cuts off the other’s friends"],
    answer: "Both people have an equal say",
    explanation: "Equality and respect are signs of a healthy relationship.",
  },
  {
    prompt: "A friend respects your choice not to share a password. What does this show?",
    options: ["Trust and respect", "Secrecy and lies", "Weakness in the friendship", "A lack of interest"],
    answer: "Trust and respect",
    explanation: "Respecting your decision shows trust.",
  },
  {
    prompt: "A partner checks your phone all the time and gets angry if you talk to friends. What is this?",
    options: ["A sign of deep respect", "Controlling behaviour", "A normal part of friendship", "A form of good communication"],
    answer: "Controlling behaviour",
    explanation: "Constant checking and cutting you off from others is controlling.",
  },
  {
    prompt: "Which is a right you have in a relationship?",
    options: ["The right to control the other person", "The right to read every message", "The right to say no and to be safe", "The right to break promises"],
    answer: "The right to say no and to be safe",
    explanation: "You have the right to be safe and to say no.",
  },
  {
    prompt: "Which is a responsibility in a relationship?",
    options: ["Winning the arguments for a task in use", "Respecting the rights of the other person", "Making the decisions in a program at work", "Hiding your real feelings on a device in a file"],
    answer: "Respecting the rights of the other person",
    explanation: "Rights come with the responsibility to respect others.",
  },
  {
    prompt: "You want to judge a media message. Which question helps most?",
    options: ["How loud is the sound? in a lab for a task", "How long is the video? on a system in a program", "Who made it and what is left out?", "What colour is the logo? at a school"],
    answer: "Who made it and what is left out?",
    explanation: "Asking who made it and what is left out helps you think critically.",
  },
  {
    prompt: "An influencer is paid to promote a product. Why does this matter?",
    options: ["It proves that the product is the best in a program", "It means that the content is unreal on a device", "It means that the post is secret in use for a user", "It shows that the message may aim to sell"],
    answer: "It shows that the message may aim to sell",
    explanation: "Knowing a post is paid helps you judge whether it is honest.",
  },
  {
    prompt: "A series makes you feel bad about your body. What can you do?",
    options: ["Watch more of it", "Hide your feelings from everyone", "Change what you watch or follow", "Compare yourself even more"],
    answer: "Change what you watch or follow",
    explanation: "You can limit content that harms your self-esteem.",
  },
  {
    prompt: "Which statement about stereotypes in media is correct?",
    options: ["They show real life as it is for a task in use", "They are checked by relationship experts in a program", "They repeat fixed ideas that may not be true", "They are the same in each culture on a device in a file"],
    answer: "They repeat fixed ideas that may not be true",
    explanation: "Stereotypes are fixed ideas that put pressure on people.",
  },
];

const MediaRelationshipValues = () => (
  <CapsSubjectTopic
    title="The Media and Your Beliefs about Relationships"
    subtitle="How films, adverts and social media shape what you expect from relationships, and how to think about them critically"
    learnSteps={learnSteps}
    task="gr11-media-relationship-values-t1"
    bank={bank}
    apiPath="/api/caps/lo"
    grade={11}
  />
);

export default MediaRelationshipValues;
