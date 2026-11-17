import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is copyright?",
    options: ["A kind of software at work", "A creator's legal right", "A computer part in a file on a system", "A type of cable for a user"],
    answer: "A creator's legal right",
    explanation: "The law protects creators.",
  },
  {
    prompt: "What is a licence agreement?",
    options: ["A kind of virus at work in a lab", "A computer part in a file on a system", "Rules for using software", "A type of file for a user at a school"],
    answer: "Rules for using software",
    explanation: "It says what you may do.",
  },
  {
    prompt: "What is piracy?",
    options: ["Buying software in a program at work", "Writing software on a device in a file", "Deleting software in use for a user", "Copying without permission"],
    answer: "Copying without permission",
    explanation: "Piracy is against the law.",
  },
  {
    prompt: "What does creative commons allow?",
    options: ["Copying with no credit given", "Selling copies without asking", "Hiding the author's name", "Sharing under set terms"],
    answer: "Sharing under set terms",
    explanation: "The creator chooses the freedoms.",
  },
  {
    prompt: "What is copyleft?",
    options: ["Free if copies stay free", "Software you must buy in use", "A kind of virus code at work", "A type of screen in a file on a system"],
    answer: "Free if copies stay free",
    explanation: "Changes must be shared in the same way.",
  },
  {
    prompt: "Which is an economic reason for using computers?",
    options: ["Saving paper and labour", "Making a lot of noise at work", "Warming up a room in a file", "Filling up a desk for a user"],
    answer: "Saving paper and labour",
    explanation: "Computers cut costs.",
  },
  {
    prompt: "Which is a reason for using computers in business?",
    options: ["Slow speed of work for a user", "Higher paper use in a lab for a task", "Accuracy and reliability", "More errors made on a system"],
    answer: "Accuracy and reliability",
    explanation: "Computers repeat tasks without tiring.",
  },
  {
    prompt: "What is the digital divide?",
    options: ["A split screen in use for a user", "A broken cable at work in a lab", "The gap in ICT access", "A type of file in a file"],
    answer: "The gap in ICT access",
    explanation: "It is about access and skills.",
  },
  {
    prompt: "Which is a cause of the digital divide?",
    options: ["The cost of devices", "Too many books in a file", "Too much sunshine for a user", "Large classrooms in a lab"],
    answer: "The cost of devices",
    explanation: "Cost limits access.",
  },
  {
    prompt: "What is a digitally enabled citizen?",
    options: ["A person with no phone on a device", "A computer virus in use for a user", "A person with ICT skills", "A kind of cable at work in a lab"],
    answer: "A person with ICT skills",
    explanation: "They can take part in the digital world.",
  },
  {
    prompt: "Which could narrow the digital divide?",
    options: ["Cheaper data", "Higher prices", "Fewer schools", "No training"],
    answer: "Cheaper data",
    explanation: "Access and skills help.",
  },
  {
    prompt: "What is a digital footprint?",
    options: ["Your trail of data", "A mark on a keyboard", "A printed page", "A type of cable"],
    answer: "Your trail of data",
    explanation: "It includes posts and searches.",
  },
  {
    prompt: "Which is an active digital footprint?",
    options: ["A site tracking your visit", "A comment you post", "A hidden cookie", "A server log"],
    answer: "A comment you post",
    explanation: "You leave it on purpose.",
  },
  {
    prompt: "What is a digital citizen?",
    options: ["Someone with no computer", "A computer program", "A kind of cable", "A responsible ICT user"],
    answer: "A responsible ICT user",
    explanation: "They are safe and respectful online.",
  },
];

const LicencesDigitalDivide = () => (
  <CapsSubjectTopic
    title="Licences, Copyright and the Digital Divide"
    subtitle="Software licence agreements, creative commons, piracy and copyright, the digital divide, digital citizenship and the digital footprint"
    learnSteps={learnSteps}
    task="gr10-licences-digital-divide-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default LicencesDigitalDivide;
