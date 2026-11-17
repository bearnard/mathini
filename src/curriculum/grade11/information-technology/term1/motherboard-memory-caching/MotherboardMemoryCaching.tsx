import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is the motherboard?",
    options: ["The main board for parts", "A type of display screen", "A kind of laser printer", "A cable for storage disks"],
    answer: "The main board for parts",
    explanation: "The motherboard connects the components of a computer.",
  },
  {
    prompt: "What does the BIOS chip do?",
    options: ["Draws the pictures", "Stores all documents", "Prints the pages", "Starts the computer"],
    answer: "Starts the computer",
    explanation: "The BIOS checks hardware and starts the operating system.",
  },
  {
    prompt: "What does modular design allow?",
    options: ["Parts are fixed for good", "Parts have no slots at all", "Parts do not need a supply", "Parts swap in slots"],
    answer: "Parts swap in slots",
    explanation: "Modular design lets users upgrade or replace parts.",
  },
  {
    prompt: "What is an expansion card?",
    options: ["A board that adds a feature", "A card used to pay on a site", "A spare cooling fan for a PC", "A cable that links a mouse"],
    answer: "A board that adds a feature",
    explanation: "It adds a feature such as better graphics.",
  },
  {
    prompt: "What is VRAM?",
    options: ["Memory that holds the BIOS code", "A kind of hard disk drive", "A cable that links a screen", "Memory the GPU uses for images"],
    answer: "Memory the GPU uses for images",
    explanation: "VRAM is video memory for the graphics processor.",
  },
  {
    prompt: "What is ROM?",
    options: ["Permanent start-up memory", "Memory that clears at once", "A very fast kind of cache", "A kind of display screen"],
    answer: "Permanent start-up memory",
    explanation: "ROM keeps its contents when the power is off.",
  },
  {
    prompt: "What is a bus?",
    options: ["A type of laser printer", "A key on the keyboard", "A disk that stores files", "A path that carries data"],
    answer: "A path that carries data",
    explanation: "Busses carry data on the motherboard.",
  },
  {
    prompt: "Which path shows how a program is run?",
    options: ["CPU, then storage, then RAM", "RAM, then storage, then CPU", "CPU, then RAM, then storage", "Storage, then RAM, then CPU"],
    answer: "Storage, then RAM, then CPU",
    explanation: "A program is loaded into RAM before the CPU runs it.",
  },
  {
    prompt: "Which path shows how an image is drawn?",
    options: ["RAM, then VRAM, then GPU", "GPU, then RAM, then CPU", "CPU, then storage, then GPU", "VRAM, then storage, then RAM"],
    answer: "RAM, then VRAM, then GPU",
    explanation: "Image data moves through VRAM to the GPU.",
  },
  {
    prompt: "What is cache memory?",
    options: ["Large, slow permanent storage", "Small, fast memory by the CPU", "A kind of motherboard board", "A type of network cable"],
    answer: "Small, fast memory by the CPU",
    explanation: "Cache keeps the data the CPU uses most.",
  },
  {
    prompt: "Why does cache speed up a computer?",
    options: ["The screen becomes brighter", "The CPU waits less for data", "The disk becomes much larger", "The fan becomes much quieter"],
    answer: "The CPU waits less for data",
    explanation: "Frequently used data is close to the CPU.",
  },
  {
    prompt: "What is web caching?",
    options: ["Deleting pages after one use", "Printing every web page seen", "Keeping copies of seen pages", "Blocking some of the sites"],
    answer: "Keeping copies of seen pages",
    explanation: "Cached pages load faster the next time.",
  },
  {
    prompt: "What is disk caching?",
    options: ["Formatting a disk to clear it", "Keeping recent data handy", "Copying a disk onto a CD", "Locking a disk with a password"],
    answer: "Keeping recent data handy",
    explanation: "Recently used data is read again quickly.",
  },
  {
    prompt: "What does the GPU do?",
    options: ["Starts the computer up", "Handles graphics work", "Stores the user's files", "Cools the case down"],
    answer: "Handles graphics work",
    explanation: "The GPU is a processor for images and video.",
  },
];

const MotherboardMemoryCaching = () => (
  <CapsSubjectTopic
    title="The Motherboard, Memory and Caching"
    subtitle="Components of the motherboard, how data flows, and the role of cache and caching"
    learnSteps={learnSteps}
    task="gr11-motherboard-memory-caching-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default MotherboardMemoryCaching;
