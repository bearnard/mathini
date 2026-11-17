import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which operating system is built for touch screens and battery life?",
    options: ["A server OS", "A printer OS", "A cable OS", "A mobile OS"],
    answer: "A mobile OS",
    explanation: "Mobile operating systems suit phones and tablets.",
  },
  {
    prompt: "What is an embedded operating system?",
    options: ["An OS used on servers only", "An OS held on a flash drive", "An OS for large printers", "A small OS inside a device"],
    answer: "A small OS inside a device",
    explanation: "It is built into a device such as a smart TV.",
  },
  {
    prompt: "What does a network operating system manage?",
    options: ["Users and shared files", "A single game on a PC", "The colour of the screen", "The size of the page font"],
    answer: "Users and shared files",
    explanation: "A network OS controls shared files and users.",
  },
  {
    prompt: "What does a compiler do?",
    options: ["Runs the program line by line", "Draws the image on the screen", "Deletes the program from disk", "Translates it all first"],
    answer: "Translates it all first",
    explanation: "A compiler produces machine code before running.",
  },
  {
    prompt: "What does an interpreter do?",
    options: ["Translates the whole program first", "Prints the program", "Stores the program", "Translates and runs line by line"],
    answer: "Translates and runs line by line",
    explanation: "An interpreter works through the code one line at a time.",
  },
  {
    prompt: "Which is a feature of a compiled program?",
    options: ["It must be translated each run", "It cannot be run", "It has no code", "It runs fast once it is built"],
    answer: "It runs fast once it is built",
    explanation: "The translation is done beforehand.",
  },
  {
    prompt: "What is multi-tasking?",
    options: ["Using one program only", "Switching between programs", "Turning a program off for good", "Adding more RAM to the unit"],
    answer: "Switching between programs",
    explanation: "The OS switches quickly between tasks.",
  },
  {
    prompt: "What is multi-threading?",
    options: ["One program split into threads", "Several programs on one screen", "Two screens joined to one PC", "A thread made of cable"],
    answer: "One program split into threads",
    explanation: "Threads of one program run at the same time.",
  },
  {
    prompt: "What is multi-processing?",
    options: ["A single processor working alone", "A lot of RAM in use at once", "Several processors or cores", "Several screens in use at once"],
    answer: "Several processors or cores",
    explanation: "More processors can work at the same time.",
  },
  {
    prompt: "Which needs more than one processor or core?",
    options: ["Multi-tasking mode", "Virtual memory use", "Caching of web pages", "Multi-processing"],
    answer: "Multi-processing",
    explanation: "Multi-processing uses several processors.",
  },
  {
    prompt: "When is virtual memory used?",
    options: ["When RAM is full", "When the power is off", "When the screen is dim", "When the mouse is idle"],
    answer: "When RAM is full",
    explanation: "The OS uses drive space when RAM runs out.",
  },
  {
    prompt: "What is a disadvantage of virtual memory?",
    options: ["It needs no drive", "It has no storage", "It is faster than RAM", "It is slower than RAM"],
    answer: "It is slower than RAM",
    explanation: "The drive is slower than RAM.",
  },
  {
    prompt: "What is a virtual machine?",
    options: ["A very fast kind of processor", "A type of network cable", "A kind of display screen", "Software acting as a computer"],
    answer: "Software acting as a computer",
    explanation: "It runs its own system inside the real computer.",
  },
  {
    prompt: "Why use a virtual machine?",
    options: ["To test software safely", "To make the RAM much bigger", "To heat the room in winter", "To print the pages faster"],
    answer: "To test software safely",
    explanation: "A virtual machine keeps tests apart from the real system.",
  },
];

const SystemSoftwareProcessing = () => (
  <CapsSubjectTopic
    title="System Software and Processing Techniques"
    subtitle="Types of operating system, compilers and interpreters, multi-tasking, virtual memory and virtual machines"
    learnSteps={learnSteps}
    task="gr11-system-software-processing-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default SystemSoftwareProcessing;
