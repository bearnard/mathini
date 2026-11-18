import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does a set of instructions explain?",
    options: ["Why a story happened in the past", "Who won a competition", "How to do or make something", "What a character feels"],
    answer: "How to do or make something",
    explanation: "Instructions tell the reader how to do something.",
  },
  {
    prompt: "How should each step in a set of instructions begin?",
    options: ["With a command verb", "With a long description of the step", "With a question", "With a quotation"],
    answer: "With a command verb",
    explanation: "Command verbs make instructions clear.",
  },
  {
    prompt: "Which word is a command verb?",
    options: ["Folded", "Folding", "Folds", "Fold"],
    answer: "Fold",
    explanation: "Fold is the imperative form of the verb.",
  },
  {
    prompt: "Which sentence is a correct step in instructions?",
    options: ["I poured the water into the cup.", "Pour the water into the cup.", "The water was poured into the cup.", "You could maybe pour some water."],
    answer: "Pour the water into the cup.",
    explanation: "A step uses a command verb and no I.",
  },
  {
    prompt: "Which sequence word shows the last step?",
    options: ["first", "next", "finally", "initially"],
    answer: "finally",
    explanation: "Finally shows the end of the steps.",
  },
  {
    prompt: "What does the materials list tell the reader?",
    options: ["What they need before they begin", "How the instructions end and who wrote them", "Who wrote the text", "Why the task is difficult"],
    answer: "What they need before they begin",
    explanation: "The list shows what to prepare.",
  },
  {
    prompt: "Which sentence is more precise?",
    options: ["Stir for a while.", "Stir it a bit.", "Stir until you feel tired.", "Stir for two minutes."],
    answer: "Stir for two minutes.",
    explanation: "Two minutes is an exact time.",
  },
  {
    prompt: "Which tense is used in instructions?",
    options: ["The past tense", "The present tense", "The future tense", "The future perfect tense"],
    answer: "The present tense",
    explanation: "Instructions use the present tense with command verbs.",
  },
  {
    prompt: "Why are the steps numbered?",
    options: ["So that the text is longer", "So that the title can be shorter", "So that the order is clear", "So that the verbs are in the past"],
    answer: "So that the order is clear",
    explanation: "Numbers show which step comes first.",
  },
  {
    prompt: "Which part of instructions keeps the reader safe?",
    options: ["A warning", "The title", "The page number", "The first step"],
    answer: "A warning",
    explanation: "A warning tells the reader about danger.",
  },
  {
    prompt: "A friend cannot follow your instructions because a step is missing. What should you do?",
    options: ["Remove the title and the whole list of materials", "Change the font", "Write them in the past tense", "Add the missing step and test again"],
    answer: "Add the missing step and test again",
    explanation: "Testing finds gaps that you can fix.",
  },
  {
    prompt: "Which title is best for instructions?",
    options: ["My boat story", "How to make a paper boat", "Boats", "A long story about a paper boat race"],
    answer: "How to make a paper boat",
    explanation: "A title for instructions says what you will make.",
  },
  {
    prompt: "Which phrase is vague and should be made exact?",
    options: ["250 ml of water", "two spoons of sugar", "some water", "stir for two minutes"],
    answer: "some water",
    explanation: "Some does not give an amount.",
  },
  {
    prompt: "Which sequence word shows that something comes after the first step?",
    options: ["next", "finally", "first", "last of all"],
    answer: "next",
    explanation: "Next shows that another step follows.",
  },
];

const Instructions = () => (
  <CapsSubjectTopic
    title={"Writing Instructions"}
    subtitle={"Title, materials, numbered steps, command verbs, sequence words and exact details"}
    learnSteps={learnSteps}
    task={"gr7-instructions-t2"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default Instructions;
