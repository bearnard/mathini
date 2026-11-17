import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a digital footprint?",
    options: ["A mark on a keyboard at work in a lab", "A printed page in a file on a system", "The trail of data you leave online", "A type of cable for a user at a school"],
    answer: "The trail of data you leave online",
    explanation: "It includes posts and searches.",
  },
  {
    prompt: "Which is an active digital footprint?",
    options: ["A site tracking your visit", "A comment you post", "A hidden cookie", "A server log"],
    answer: "A comment you post",
    explanation: "You leave it on purpose.",
  },
  {
    prompt: "Which is a passive digital footprint?",
    options: ["A post you write in use for a user", "A photo you share at work in a lab", "Data collected as you browse", "A reply you send in a file on a system"],
    answer: "Data collected as you browse",
    explanation: "It is gathered about you.",
  },
  {
    prompt: "What is a cyber profile?",
    options: ["A kind of network cable", "Others' view of you", "A printed page of text", "A type of data file"],
    answer: "Others' view of you",
    explanation: "Others form an impression.",
  },
  {
    prompt: "Why might an employer search your name?",
    options: ["To fix your computer in a file on a system", "To print your photo for a user at a school", "To change your name in a lab for a task", "To learn about you from what is online"],
    answer: "To learn about you from what is online",
    explanation: "Your profile matters.",
  },
  {
    prompt: "Which could break copyright?",
    options: ["Posting your own photo at work in a lab", "Writing your own post in a file on a system", "Posting a song you did not make", "Sharing your own poem for a user at a school"],
    answer: "Posting a song you did not make",
    explanation: "You need permission.",
  },
  {
    prompt: "What is fake news?",
    options: ["False stories that look like real news", "True reports at work in a lab", "Sports scores in a file on a system", "Weather reports for a user at a school"],
    answer: "False stories that look like real news",
    explanation: "It misleads readers.",
  },
  {
    prompt: "What is misinformation?",
    options: ["False information spread on purpose", "False information shared by mistake", "True information", "A type of file"],
    answer: "False information shared by mistake",
    explanation: "No intent to mislead.",
  },
  {
    prompt: "What is disinformation?",
    options: ["False information shared by mistake", "True information", "False information spread on purpose", "A type of cable"],
    answer: "False information spread on purpose",
    explanation: "It is meant to mislead.",
  },
  {
    prompt: "What is defamation?",
    options: ["True statements about a person", "A kind of cable for a lab", "False claims that harm a name", "A type of data file"],
    answer: "False claims that harm a name",
    explanation: "It damages a person's name.",
  },
  {
    prompt: "What is cyberbullying?",
    options: ["Using technology to hurt someone", "A fast network on a system in a program", "A type of game at a school on a device", "A kind of file for a task in use"],
    answer: "Using technology to hurt someone",
    explanation: "It can be threats or shaming.",
  },
  {
    prompt: "What should you do before you share a shocking story?",
    options: ["Share it at once", "Add more details to it", "Check the source", "Delete it from the page"],
    answer: "Check the source",
    explanation: "Checking sources stops the spread of false stories.",
  },
  {
    prompt: "What should a person do if cyberbullied?",
    options: ["Reply with insults for a user at a school", "Delete everything in a lab for a task", "Say nothing on a system in a program", "Keep evidence and tell a trusted adult"],
    answer: "Keep evidence and tell a trusted adult",
    explanation: "Evidence helps.",
  },
  {
    prompt: "Why use privacy settings?",
    options: ["To slow the phone in a program at work", "To delete posts on a device in a file", "To limit who sees your details", "To add adverts in use for a user"],
    answer: "To limit who sees your details",
    explanation: "Settings control access.",
  },
];

const SocialMediaDigitalFootprint = () => (
  <CapsSubjectTopic
    title="Social Media, Digital Footprint and Misinformation"
    subtitle="Social media platforms, legal and ethical issues, your cyber profile and digital footprint, fake news, defamation and cyberbullying"
    learnSteps={learnSteps}
    task="gr12-social-media-digital-footprint-t3"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default SocialMediaDigitalFootprint;
