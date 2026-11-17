import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does a CPU do?",
    options: ["Stores all files for years", "Prints pages", "Carries out instructions", "Cools the case"],
    answer: "Carries out instructions",
    explanation: "The CPU processes instructions.",
  },
  {
    prompt: "What is a GPU designed for?",
    options: ["Storing the passwords of users", "Cooling the case of a computer", "Charging the battery of a phone", "Graphics and video work"],
    answer: "Graphics and video work",
    explanation: "A GPU handles many simple calculations at once.",
  },
  {
    prompt: "Which user needs a strong GPU most?",
    options: ["A person typing a letter", "A person reading email", "A gamer", "A person using a calculator"],
    answer: "A gamer",
    explanation: "Games draw detailed moving images.",
  },
  {
    prompt: "What does multi-processing mean?",
    options: ["Several cores work together", "One processor works on its own", "The screen has very many pixels", "The disk has very many files"],
    answer: "Several cores work together",
    explanation: "More cores run tasks at the same time.",
  },
  {
    prompt: "What does RAM hold?",
    options: ["Files kept for many years", "The power cable of the unit", "The screen image and nothing else", "Programs and data in use"],
    answer: "Programs and data in use",
    explanation: "RAM holds what the computer is working on.",
  },
  {
    prompt: "What happens to RAM when the power goes off?",
    options: ["The contents are saved", "The contents are printed", "The contents are copied", "The contents are lost"],
    answer: "The contents are lost",
    explanation: "RAM is temporary memory.",
  },
  {
    prompt: "What is cache memory?",
    options: ["A large, slow storage disk", "A kind of network cable", "Small, very fast memory", "A buffer inside a printer"],
    answer: "Small, very fast memory",
    explanation: "Cache keeps the data used most often.",
  },
  {
    prompt: "Which is the correct order from fastest?",
    options: ["Storage, then RAM, then cache", "Cache, then RAM, then storage", "RAM, then cache, then storage", "Cache, then storage, then RAM"],
    answer: "Cache, then RAM, then storage",
    explanation: "Cache is faster than RAM, which is faster than storage.",
  },
  {
    prompt: "Why does too little RAM slow a computer?",
    options: ["The screen gets a little dimmer", "The cooling fan stops turning", "Data swaps with the slow disk", "The mouse becomes a lot slower"],
    answer: "Data swaps with the slow disk",
    explanation: "Extra data goes to the disk, which is slower.",
  },
  {
    prompt: "Which storage is usually faster?",
    options: ["An HDD", "A floppy disk", "An SSD", "A CD"],
    answer: "An SSD",
    explanation: "An SSD has no moving parts and is faster.",
  },
  {
    prompt: "What does disk caching do?",
    options: ["Deletes the old files on a disk", "Makes the files much bigger", "Keeps recent data handy", "Turns off the disk for good"],
    answer: "Keeps recent data handy",
    explanation: "The data can be read again quickly.",
  },
  {
    prompt: "What does the network card speed limit?",
    options: ["How bright the screen can be", "How loud the speakers can be", "How long the battery can last", "How fast data can travel"],
    answer: "How fast data can travel",
    explanation: "A slow card limits a fast connection.",
  },
  {
    prompt: "Which hardware suits a learner who writes documents?",
    options: ["Modest CPU, enough RAM, an SSD", "A top gaming card and many cores", "A server with many large disks", "A very large wall of monitors"],
    answer: "Modest CPU, enough RAM, an SSD",
    explanation: "The need is modest, so the hardware can be too.",
  },
  {
    prompt: "What should a motivation for a computer include?",
    options: ["A reason linking part and need", "The most expensive parts found", "A list of all the brands made", "The colour of the case chosen"],
    answer: "A reason linking part and need",
    explanation: "A motivation explains why each part fits.",
  },
];

const PerformanceGpuCaching = () => (
  <CapsSubjectTopic
    title="Performance: GPU, Memory, Cache and Storage"
    subtitle="What makes a computer fast, and motivating a system for a user"
    learnSteps={learnSteps}
    task="gr12-performance-gpu-caching-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default PerformanceGpuCaching;
