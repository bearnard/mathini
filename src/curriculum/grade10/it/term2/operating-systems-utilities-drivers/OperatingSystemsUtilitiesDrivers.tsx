import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is an operating system?",
    options: ["Programs that run the hardware", "A single video game for a user", "A kind of display screen", "A type of network cable"],
    answer: "Programs that run the hardware",
    explanation: "The OS manages the computer.",
  },
  {
    prompt: "Which is a role of the operating system?",
    options: ["Printing a poster for a user at a school", "Selling software in a lab for a task", "Providing the user interface", "Making cables on a system in a program"],
    answer: "Providing the user interface",
    explanation: "The OS gives you a way to use the computer.",
  },
  {
    prompt: "What does memory management do?",
    options: ["Makes RAM larger in a lab for a task", "Deletes files on a system in a program", "Shares RAM between programs", "Prints reports at a school on a device"],
    answer: "Shares RAM between programs",
    explanation: "The OS decides how RAM is used.",
  },
  {
    prompt: "What does process management do?",
    options: ["Prints a page on a system in a program", "Decides which program runs when", "Cools the CPU at a school on a device", "Draws icons for a task in use"],
    answer: "Decides which program runs when",
    explanation: "The OS shares processor time.",
  },
  {
    prompt: "Which is an operating system?",
    options: ["A web browser", "A spreadsheet", "A printer", "Windows"],
    answer: "Windows",
    explanation: "Windows is an operating system.",
  },
  {
    prompt: "Which operating system is common on smartphones?",
    options: ["Android", "A router", "A cable", "A monitor"],
    answer: "Android",
    explanation: "Android and iOS run on phones.",
  },
  {
    prompt: "What is a network operating system?",
    options: ["One that manages a network", "One made for a single game", "One made for a printer", "One made for a cable"],
    answer: "One that manages a network",
    explanation: "A network OS runs on servers.",
  },
  {
    prompt: "What is an embedded operating system?",
    options: ["One for a laptop PC", "One for a school server", "One inside a smart TV", "One for a desk printer"],
    answer: "One inside a smart TV",
    explanation: "It runs a single device.",
  },
  {
    prompt: "What is a utility program?",
    options: ["A video game for fun", "A web page for news", "A type of network cable", "A maintenance program"],
    answer: "A maintenance program",
    explanation: "Disk clean-up is an example.",
  },
  {
    prompt: "Which is a utility?",
    options: ["A word processor in a file", "Anti-malware software", "A game", "A photo"],
    answer: "Anti-malware software",
    explanation: "It protects the computer.",
  },
  {
    prompt: "What does a compression utility do?",
    options: ["Makes files larger in a program", "Makes files smaller", "Deletes files on a device", "Prints files in use for a user"],
    answer: "Makes files smaller",
    explanation: "Smaller files save space.",
  },
  {
    prompt: "What is a device driver?",
    options: ["A kind of cable for a task in use", "Software that lets the OS use a device", "A type of screen in a program at work", "A person who drives on a device in a file"],
    answer: "Software that lets the OS use a device",
    explanation: "Without it a device may not work.",
  },
  {
    prompt: "What is plug and play?",
    options: ["The user writes the driver on a system", "A type of game at a school on a device", "A kind of cable for a task in use", "The OS installs the driver itself"],
    answer: "The OS installs the driver itself",
    explanation: "The device works at once.",
  },
  {
    prompt: "Why might a new device not work?",
    options: ["The screen is bright on a system", "Its driver may be missing", "The case is blue at a school", "The desk is full for a task in use"],
    answer: "Its driver may be missing",
    explanation: "The OS needs the driver.",
  },
];

const OperatingSystemsUtilitiesDrivers = () => (
  <CapsSubjectTopic
    title="Operating Systems, Utilities and Device Drivers"
    subtitle="The role and types of operating system, common examples, utility programs, and device drivers"
    learnSteps={learnSteps}
    task="gr10-operating-systems-utilities-drivers-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default OperatingSystemsUtilitiesDrivers;
