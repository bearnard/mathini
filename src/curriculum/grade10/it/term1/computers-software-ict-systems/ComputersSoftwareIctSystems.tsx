import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which computer is built for one place and is powerful for its price?",
    options: ["A desktop", "A smartphone", "An embedded computer", "A tablet"],
    answer: "A desktop",
    explanation: "Desktops are used at a fixed place.",
  },
  {
    prompt: "Which computer is very portable and has a touch screen?",
    options: ["A server", "A tablet", "A desktop", "A mainframe"],
    answer: "A tablet",
    explanation: "Tablets and smartphones are small and touch-based.",
  },
  {
    prompt: "What does a server do?",
    options: ["Runs inside a washing machine", "Works as a pocket phone", "Plays only music for a user", "Serves many users"],
    answer: "Serves many users",
    explanation: "A server shares resources over a network.",
  },
  {
    prompt: "Where is an embedded computer found?",
    options: ["Inside an oven or TV", "In a school office block", "On top of a large desk", "In a bank vault room"],
    answer: "Inside an oven or TV",
    explanation: "It controls a single device.",
  },
  {
    prompt: "What is hardware?",
    options: ["The physical parts", "The programs it runs", "The data it holds", "The licence it has"],
    answer: "The physical parts",
    explanation: "You can touch hardware.",
  },
  {
    prompt: "What is system software?",
    options: ["The OS and utilities", "A video game for a task", "A holiday photo in a program", "A spreadsheet file on a device"],
    answer: "The OS and utilities",
    explanation: "It manages the hardware.",
  },
  {
    prompt: "What is application software?",
    options: ["The physical parts", "Programs for tasks", "The cables inside", "The power supply unit"],
    answer: "Programs for tasks",
    explanation: "A word processor is application software.",
  },
  {
    prompt: "What is proprietary software?",
    options: ["Software with open code in a file", "Software free for everyone for a user", "Software with no licence in a lab", "Software a firm owns and sells"],
    answer: "Software a firm owns and sells",
    explanation: "You pay for a licence.",
  },
  {
    prompt: "What is shareware?",
    options: ["Software that is always free", "Software with open code", "Try first, then pay", "Software with no author"],
    answer: "Try first, then pay",
    explanation: "You pay if you keep using it.",
  },
  {
    prompt: "What is freeware?",
    options: ["Software that must be paid for", "Software that is free to use", "Software with open code to edit", "Software with no owner"],
    answer: "Software that is free to use",
    explanation: "Its code is not shared.",
  },
  {
    prompt: "What does FOSS stand for?",
    options: ["Fast online storage service", "Free open-source software", "Free office software suite", "Fixed operating system software"],
    answer: "Free open-source software",
    explanation: "The code can be studied and changed.",
  },
  {
    prompt: "What is data?",
    options: ["Processed facts", "A kind of cable", "Raw facts", "A type of licence"],
    answer: "Raw facts",
    explanation: "Data becomes information once processed.",
  },
  {
    prompt: "Which stage of the cycle shows the average on screen?",
    options: ["Output", "Input", "Storage", "Communication"],
    answer: "Output",
    explanation: "Output presents information.",
  },
  {
    prompt: "Which stage of the cycle e-mails a report?",
    options: ["Communication", "Input stage", "Processing stage", "Output stage"],
    answer: "Communication",
    explanation: "Communication sends information to others.",
  },
];

const ComputersSoftwareIctSystems = () => (
  <CapsSubjectTopic
    title="Computers, Software and ICT Systems"
    subtitle="Types of computers, hardware and software, kinds of software licence, data and information, and the information processing cycle"
    learnSteps={learnSteps}
    task="gr10-computers-software-ict-systems-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default ComputersSoftwareIctSystems;
