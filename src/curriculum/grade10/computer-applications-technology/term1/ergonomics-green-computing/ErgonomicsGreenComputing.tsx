import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is ergonomics?",
    options: ["Fitting equipment to people", "A kind of software to install", "A type of cable to buy", "A virus that hits laptops"],
    answer: "Fitting equipment to people",
    explanation: "It lowers the risk of injury.",
  },
  {
    prompt: "Where should the top of the screen be?",
    options: ["Below the knees", "Above the head", "Behind you", "At eye level"],
    answer: "At eye level",
    explanation: "Eye level avoids neck strain.",
  },
  {
    prompt: "How should wrists be when typing?",
    options: ["Bent sharply at a school", "Straight and relaxed", "Hanging down for a task", "Held high in a program at work"],
    answer: "Straight and relaxed",
    explanation: "Straight wrists reduce strain.",
  },
  {
    prompt: "What does a good chair do?",
    options: ["Hurts the back", "Tilts you forward", "Supports the back", "Lifts your feet"],
    answer: "Supports the back",
    explanation: "Support lowers back pain.",
  },
  {
    prompt: "What does RSI stand for?",
    options: ["Repetitive strain injury", "Rapid screen image for a task", "Remote system input in a program", "Random storage index on a device"],
    answer: "Repetitive strain injury",
    explanation: "It comes from repeated movements.",
  },
  {
    prompt: "What causes eye strain?",
    options: ["Too much sleep at a school on a device", "Long screen time without rests", "Eating fruit for a task in use", "Walking"],
    answer: "Long screen time without rests",
    explanation: "Eyes tire if they stare for long.",
  },
  {
    prompt: "How can you reduce eye strain?",
    options: ["Stare longer for a user at a school", "Look away from the screen often", "Make the screen very dim in a lab for a task", "Sit closer on a system in a program"],
    answer: "Look away from the screen often",
    explanation: "Rest your eyes.",
  },
  {
    prompt: "What helps prevent back pain?",
    options: ["Slouching in a file on a system", "Sitting for hours for a user at a school", "Lying on a bed in a lab for a task", "Sitting correctly and moving often"],
    answer: "Sitting correctly and moving often",
    explanation: "Good posture helps.",
  },
  {
    prompt: "What is the 20-20-20 rule?",
    options: ["Rest your eyes every 20 minutes", "Type for 20 hours without a break", "Use 20 screens at the same time", "Print 20 pages in a single go"],
    answer: "Rest your eyes every 20 minutes",
    explanation: "It rests the eyes.",
  },
  {
    prompt: "What is green computing?",
    options: ["Painting computers green for a task in use", "Using computers to reduce harm to nature", "A kind of software in a program at work", "A type of cable on a device in a file"],
    answer: "Using computers to reduce harm to nature",
    explanation: "It saves energy and waste.",
  },
  {
    prompt: "Which is a green computing practice?",
    options: ["Leaving lights on on a device in a file", "Printing every page in use for a user", "Buying new devices often at work", "Switching off when not in use"],
    answer: "Switching off when not in use",
    explanation: "It saves electricity.",
  },
  {
    prompt: "Why print on both sides?",
    options: ["It uses more ink", "It saves paper", "It slows the printer", "It wastes paper"],
    answer: "It saves paper",
    explanation: "Less paper is used.",
  },
  {
    prompt: "Why recycle old computers?",
    options: ["They are made of paper on a device in a file", "They never break in use for a user", "They can contain harmful materials", "They are free at work in a lab"],
    answer: "They can contain harmful materials",
    explanation: "Recycling cuts pollution.",
  },
  {
    prompt: "Which saves paper?",
    options: ["Printing every e-mail at work in a lab", "Printing in colour in a file on a system", "Reading a document on screen", "Printing twice for a user at a school"],
    answer: "Reading a document on screen",
    explanation: "Screens avoid paper.",
  },
];

const ErgonomicsGreenComputing = () => (
  <CapsSubjectTopic
    title="Ergonomics and Green Computing"
    subtitle="A healthy workstation, health issues from computer use, and green computing practices"
    learnSteps={learnSteps}
    task="gr10-ergonomics-green-computing-t1"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={10}
  />
);

export default ErgonomicsGreenComputing;
