import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is online storage?",
    options: ["A kind of cable at a school", "A type of screen for a task", "A printer in a program at work", "Files kept on a server"],
    answer: "Files kept on a server",
    explanation: "You can reach them anywhere.",
  },
  {
    prompt: "What is synchronisation?",
    options: ["Deleting a copy for a task in use", "Printing a copy in a program at work", "Hiding a copy on a device in a file", "Keeping copies on devices the same"],
    answer: "Keeping copies on devices the same",
    explanation: "Changes appear on all devices.",
  },
  {
    prompt: "What is collaboration?",
    options: ["People working on one file together", "One person working alone on a system in a program", "A virus", "A kind of cable for a task in use"],
    answer: "People working on one file together",
    explanation: "Several users edit the same document.",
  },
  {
    prompt: "Which is a risk of online shopping?",
    options: ["Faster delivery", "Lower cost", "Fraud", "More choice"],
    answer: "Fraud",
    explanation: "Fake shops exist.",
  },
  {
    prompt: "Which shows a safer shopping site?",
    options: ["A very low price only for a task in use", "No contact details in a program at work", "https and a secure payment method", "A blank page on a device in a file"],
    answer: "https and a secure payment method",
    explanation: "Check security.",
  },
  {
    prompt: "Which is a risk of social media?",
    options: ["A faster computer", "A bigger screen", "A longer cable", "Loss of privacy"],
    answer: "Loss of privacy",
    explanation: "Posts can be copied.",
  },
  {
    prompt: "What should you check before you post a photo?",
    options: ["The colour of the photo", "The size of the file", "The time", "Your privacy settings"],
    answer: "Your privacy settings",
    explanation: "Settings control who sees it.",
  },
  {
    prompt: "What is a text file?",
    options: ["A picture file for a user at a school", "A video file in a lab for a task", "A file that stores text", "A program on a system in a program"],
    answer: "A file that stores text",
    explanation: "It holds plain text.",
  },
  {
    prompt: "Which saves a list box to a file in Delphi?",
    options: ["SaveToFile", "LoadFromFile", "FileExists", "Close"],
    answer: "SaveToFile",
    explanation: "SaveToFile writes the lines to a file.",
  },
  {
    prompt: "Which loads a list box from a file?",
    options: ["SaveToFile in a program", "LoadFromFile", "Delete", "Hide"],
    answer: "LoadFromFile",
    explanation: "LoadFromFile reads the lines.",
  },
  {
    prompt: "Why check FileExists before loading?",
    options: ["It makes the file bigger on a device", "It deletes the file in use for a user", "It prints the file at work in a lab", "A missing file gives an error"],
    answer: "A missing file gives an error",
    explanation: "The program can crash.",
  },
  {
    prompt: "Why save data to a file?",
    options: ["The program is faster for a task in use", "The screen is bigger in a program at work", "The data remains after the program closes", "The file is smaller on a device in a file"],
    answer: "The data remains after the program closes",
    explanation: "Saved data is kept when the program closes.",
  },
  {
    prompt: "What do comments in code do?",
    options: ["Run the code at work in a lab", "Delete the code in a file on a system", "Explain what the code does", "Hide the code for a user at a school"],
    answer: "Explain what the code does",
    explanation: "They help readers.",
  },
  {
    prompt: "Why test as you build?",
    options: ["It saves nothing on a system", "It hides errors at a school", "It slows nothing for a task", "Errors are found early"],
    answer: "Errors are found early",
    explanation: "Early tests are cheaper.",
  },
];

const InternetServicesTextFiles = () => (
  <CapsSubjectTopic
    title="Internet Services and Text Files"
    subtitle="Online storage, synchronisation, collaboration, shopping and social media, and saving and loading a text file for the PAT"
    learnSteps={learnSteps}
    task="gr10-internet-services-text-files-t4"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default InternetServicesTextFiles;
