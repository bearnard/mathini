import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does a file extension show?",
    options: ["The size of a file", "The type of file", "The owner of a file", "The date of a file"],
    answer: "The type of file",
    explanation: "The extension tells which program opens it.",
  },
  {
    prompt: "Which is a graphics file type?",
    options: ["jpg", "zip", "mp3", "dll"],
    answer: "jpg",
    explanation: "jpg is a picture format.",
  },
  {
    prompt: "Which is a compressed file type?",
    options: ["png", "docx", "wav", "zip"],
    answer: "zip",
    explanation: "zip holds files in less space.",
  },
  {
    prompt: "Which type is a Delphi source file?",
    options: ["exe", "jpg", "pas", "mp3"],
    answer: "pas",
    explanation: "pas holds source code.",
  },
  {
    prompt: "What is an executable file?",
    options: ["A picture in use for a user", "A song", "A file that runs as a program", "A letter in a file on a system"],
    answer: "A file that runs as a program",
    explanation: "A file the computer can run as a program",
  },
  {
    prompt: "What happens when you save a report as pdf?",
    options: ["It is deleted at a school on a device", "It becomes a song for a task in use", "It becomes a picture in a program at work", "It looks the same on any computer"],
    answer: "It looks the same on any computer",
    explanation: "pdf keeps the layout.",
  },
  {
    prompt: "What does disk clean-up do?",
    options: ["Adds new files in use for a user", "Removes temporary files", "Installs a game at work in a lab", "Prints a page in a file on a system"],
    answer: "Removes temporary files",
    explanation: "It frees space.",
  },
  {
    prompt: "Why install updates?",
    options: ["They delete files for a user at a school", "They fix faults and security weaknesses", "They slow the computer in a lab for a task", "They remove the screen on a system in a program"],
    answer: "They fix faults and security weaknesses",
    explanation: "Updates keep a computer safe.",
  },
  {
    prompt: "Why make a backup?",
    options: ["To delete the files at work in a lab", "To restore files if they are lost", "To slow the computer in a file on a system", "To hide the files for a user at a school"],
    answer: "To restore files if they are lost",
    explanation: "A backup is a spare copy.",
  },
  {
    prompt: "What does compression do?",
    options: ["Adds viruses", "Deletes files", "Saves space", "Shows adverts"],
    answer: "Saves space",
    explanation: "Compressed files are smaller.",
  },
  {
    prompt: "Which file name is the clearest?",
    options: ["New Document 3 on a system in a program", "asdf", "file1", "Maths_Homework_2026-03-14"],
    answer: "Maths_Homework_2026-03-14",
    explanation: "A good name says what is inside.",
  },
  {
    prompt: "What does a firewall do?",
    options: ["Deletes files for a task in use", "Prints pages in a program at work", "Blocks unwanted network traffic", "Plays music on a device in a file"],
    answer: "Blocks unwanted network traffic",
    explanation: "It filters traffic.",
  },
  {
    prompt: "What does anti-virus software do?",
    options: ["Prints a page at a school on a device", "Finds and removes malicious programs", "Plays a video for a task in use", "Draws icons in a program at work"],
    answer: "Finds and removes malicious programs",
    explanation: "It protects against malware.",
  },
  {
    prompt: "What is a licence key used for?",
    options: ["Opening a window in a lab", "Printing on a system in a program", "Proving a valid copy", "Cooling"],
    answer: "Proving a valid copy",
    explanation: "Software needs a licence.",
  },
];

const ComputerManagement = () => (
  <CapsSubjectTopic
    title="Computer Management: Files, Housekeeping and Security"
    subtitle="File types and extensions, saving and exporting, housekeeping tasks, security features, and installing software"
    learnSteps={learnSteps}
    task="gr10-computer-management-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default ComputerManagement;
