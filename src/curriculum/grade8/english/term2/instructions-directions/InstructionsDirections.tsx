import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is an instruction text for?",
    options: ["To tell a funny story on a system in a program", "To show how to do or make something", "To describe a dream at a school on a device", "To praise a friend for a task in use"],
    answer: "To show how to do or make something",
    explanation: "It guides the reader.",
  },
  {
    prompt: "What do the numbers in instructions show?",
    options: ["The page in a lab for a task", "The price on a system in a program", "The order of the steps", "The weight at a school on a device"],
    answer: "The order of the steps",
    explanation: "Steps must be in order.",
  },
  {
    prompt: "What should each step contain?",
    options: ["Many actions", "No action", "A story", "One action"],
    answer: "One action",
    explanation: "One action keeps it clear.",
  },
  {
    prompt: "Which verb form do instructions use?",
    options: ["The question form", "The future tense only", "Poetry", "The imperative"],
    answer: "The imperative",
    explanation: "A command such as mix or pour.",
  },
  {
    prompt: "Which sentence is a good instruction?",
    options: ["You might maybe add flour.", "Flour was added.", "Add two cups of flour.", "Flour is nice."],
    answer: "Add two cups of flour.",
    explanation: "It is a clear command.",
  },
  {
    prompt: "Which is a sequence word?",
    options: ["Banana", "Because of", "Finally", "Blue"],
    answer: "Finally",
    explanation: "It shows order.",
  },
  {
    prompt: "Why give exact amounts?",
    options: ["It is longer at a school on a device", "It is secret for a task in use", "It is a story in a program at work", "The reader gets the same result"],
    answer: "The reader gets the same result",
    explanation: "Exact amounts avoid mistakes.",
  },
  {
    prompt: "What is the list of what you need called?",
    options: ["Results", "Warnings on a system", "Titles", "Materials"],
    answer: "Materials",
    explanation: "It comes before the steps.",
  },
  {
    prompt: "Why add a warning such as be careful: the oven is hot?",
    options: ["It keeps the reader safe", "It is a joke for a task in use", "It is the title in a program", "It is a step on a device in a file"],
    answer: "It keeps the reader safe",
    explanation: "Warnings protect people.",
  },
  {
    prompt: "What do directions tell a person?",
    options: ["How to make a cake at a school on a device", "How to get from one place to another", "How to write a poem for a task in use", "How to read a book in a program at work"],
    answer: "How to get from one place to another",
    explanation: "They describe a route.",
  },
  {
    prompt: "Which is a landmark?",
    options: ["A turn left", "The church", "A step in a list", "A left on a road"],
    answer: "The church",
    explanation: "A fixed, known place.",
  },
  {
    prompt: "Which words show position?",
    options: ["Add and mix on a device", "Opposite and next to", "First and then in use for a user", "Finally and next at work"],
    answer: "Opposite and next to",
    explanation: "They place things.",
  },
  {
    prompt: "Which gives a distance?",
    options: ["Turn left", "After 200 metres", "Opposite the clinic", "Past the church"],
    answer: "After 200 metres",
    explanation: "It says how far.",
  },
  {
    prompt: "Which direction is clearer?",
    options: ["Go that way for a short bit now", "Somewhere near the shops in town", "You will find it in good time", "Right, then 200 m to church"],
    answer: "Right, then 200 m to church",
    explanation: "It has a turn, a distance and a landmark.",
  },
];

const InstructionsDirections = () => (
  <CapsSubjectTopic
    title="Instruction Texts and Giving Directions"
    subtitle="Writing clear instructions with numbered steps, and giving directions with landmarks"
    learnSteps={learnSteps}
    task="gr8-instructions-directions-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={8}
  />
);

export default InstructionsDirections;
