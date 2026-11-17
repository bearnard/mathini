import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is cloud storage?",
    options: ["Files kept in a drawer on a system in a program", "Files kept on paper at a school on a device", "Files kept in a cable for a task in use", "Files kept on a provider's servers"],
    answer: "Files kept on a provider's servers",
    explanation: "You reach them over the Internet.",
  },
  {
    prompt: "What does SaaS stand for?",
    options: ["Software as a service", "Storage as a screen in a program", "System as a server on a device", "Support as a service in use"],
    answer: "Software as a service",
    explanation: "You use software online.",
  },
  {
    prompt: "Who looks after the hardware in SaaS?",
    options: ["The user in use", "The teacher at work", "The provider", "A printer in a file"],
    answer: "The provider",
    explanation: "The provider runs the servers.",
  },
  {
    prompt: "Which is an advantage of cloud storage?",
    options: ["It needs no Internet link", "It can fail in no case", "It is free in every plan", "Files reached anywhere"],
    answer: "Files reached anywhere",
    explanation: "Cloud files follow you.",
  },
  {
    prompt: "Which is a risk of cloud storage?",
    options: ["It has no files at a school on a device", "It needs an Internet connection", "It has no users for a task in use", "It has no power in a program at work"],
    answer: "It needs an Internet connection",
    explanation: "Offline you may not reach files.",
  },
  {
    prompt: "What helps to protect a cloud account?",
    options: ["A shorter password", "Extra verification", "Sharing the password", "A bigger screen"],
    answer: "Extra verification",
    explanation: "Two-step verification adds safety.",
  },
  {
    prompt: "Why keep a second copy of important work?",
    options: ["Cloud is always safe in a lab for a task", "Copies cost money on a system in a program", "Cloud files can be lost or unavailable", "Copies are slow at a school on a device"],
    answer: "Cloud files can be lost or unavailable",
    explanation: "A backup protects you.",
  },
  {
    prompt: "What should you compare when you choose cloud storage?",
    options: ["Colour and size of the case for a task", "The brand of the desk in a program at work", "Space, cost, security and sharing", "The age of the user on a device in a file"],
    answer: "Space, cost, security and sharing",
    explanation: "These factors matter.",
  },
  {
    prompt: "In an advert, what does the specification show?",
    options: ["The colour of the case alone", "The shop's name and nothing else", "Memory and storage features", "The date and nothing else"],
    answer: "Memory and storage features",
    explanation: "It lists the technical details.",
  },
  {
    prompt: "Which laptop suits large files and speed?",
    options: ["One with an SSD and more memory", "One with the least memory in a lab", "One with no storage on a system in a program", "One with a broken screen at a school"],
    answer: "One with an SSD and more memory",
    explanation: "SSD and memory help.",
  },
  {
    prompt: "Why read the small print?",
    options: ["It is a joke in a program at work", "It is the price on a device in a file", "It may show limits and extra costs", "It is the name in use for a user"],
    answer: "It may show limits and extra costs",
    explanation: "Important conditions are there.",
  },
  {
    prompt: "An advert says 'unlimited storage' but limits file size. What does this show?",
    options: ["The claim is true in use for a user", "The storage is free at work in a lab", "The claim is not fully true", "The file is deleted in a file on a system"],
    answer: "The claim is not fully true",
    explanation: "Small print can change a claim.",
  },
  {
    prompt: "Why not judge only by price?",
    options: ["The dearest is best at work in a lab", "Price is secret in a file on a system", "The cheapest may not meet your needs", "Price is blue for a user at a school"],
    answer: "The cheapest may not meet your needs",
    explanation: "Needs come first.",
  },
  {
    prompt: "What is a monthly fee?",
    options: ["A one-off price on a system in a program", "A free offer at a school on a device", "A discount for a task in use", "A payment made each month"],
    answer: "A payment made each month",
    explanation: "Cloud plans often charge monthly.",
  },
];

const CloudStorageSaasAdverts = () => (
  <CapsSubjectTopic
    title="Cloud Storage, SaaS and Reading Adverts"
    subtitle="Cloud storage as software as a service, its advantages and risks, and interpreting adverts for hardware and cloud storage"
    learnSteps={learnSteps}
    task="gr11-cloud-storage-saas-adverts-t2"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={11}
  />
);

export default CloudStorageSaasAdverts;
