import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You write a recipe for pancakes. Which part lists the items to buy?",
    options: ["The title in use", "What you need", "The warning at work", "The picture in a file"],
    answer: "What you need",
    explanation: "A recipe has a list of what you need before the steps.",
  },
  {
    prompt: "Which word is a command verb in an instruction?",
    options: ["Mixed", "Mixing", "Mixer", "Mix"],
    answer: "Mix",
    explanation: "A command verb begins a step and tells the reader what to do.",
  },
  {
    prompt: "Your steps begin with First, Next, Then and Finally. What are these words?",
    options: ["Headlines for a task", "Sequence words", "Titles", "Quotations on a device"],
    answer: "Sequence words",
    explanation: "Sequence words show the order of the steps.",
  },
  {
    prompt: "Why do you number the steps in a recipe?",
    options: ["To make it longer", "To give a title", "To add a by-line", "To show the order"],
    answer: "To show the order",
    explanation: "Numbers show the order in which to do each step.",
  },
  {
    prompt: "Which sentence is a step in a set of instructions?",
    options: ["The batter was poured into the pan", "Pour the batter into the pan", "I poured the batter yesterday", "We will pour it tomorrow"],
    answer: "Pour the batter into the pan",
    explanation: "An instruction is a command and starts with a verb.",
  },
  {
    prompt: "Which sentence gives a warning in a recipe?",
    options: ["Mix the flour and milk at a school", "Turn the page for a task in use", "Wash your hands in a program at work", "Be careful: the pan is hot"],
    answer: "Be careful: the pan is hot",
    explanation: "A warning tells the reader about a danger.",
  },
  {
    prompt: "You write: two cups of flour. What is this?",
    options: ["A command at a school", "A heading for a task", "A measurement", "A by-line in a program"],
    answer: "A measurement",
    explanation: "Measurements tell how much to use.",
  },
  {
    prompt: "You give directions to the library. Where do you start?",
    options: ["At the library in a program at work", "At a map shop on a device in a file", "At your home in use for a user", "At the place where the person is"],
    answer: "At the place where the person is",
    explanation: "Directions must start from the person’s starting point.",
  },
  {
    prompt: "Which word helps the reader in directions?",
    options: ["By-line", "Headline", "Landmark", "Cartoon"],
    answer: "Landmark",
    explanation: "A landmark such as a shop shows the reader where to turn.",
  },
  {
    prompt: "Which sentence is a correct direction?",
    options: ["Turn left at the shop", "Turned left at the shop", "Turning left at the shop", "The shop is a left turn"],
    answer: "Turn left at the shop",
    explanation: "A direction uses a command verb.",
  },
  {
    prompt: "A direction says: walk straight on for two blocks. What does it give?",
    options: ["A recipe in a file on a system", "A cartoon for a user", "An opinion in a lab", "A rough distance"],
    answer: "A rough distance",
    explanation: "Distance helps the reader to know how far to go.",
  },
  {
    prompt: "A friend follows your recipe and gets stuck at step three. What should you do?",
    options: ["Remove the title at work in a lab", "Add an opinion in a file on a system", "Check and improve that step", "Delete the steps for a user at a school"],
    answer: "Check and improve that step",
    explanation: "Testing shows where your instructions are unclear.",
  },
  {
    prompt: "You forgot to say when to turn the pancake. What went wrong?",
    options: ["A step was missing", "The title was too long", "The tense was wrong", "The by-line was missing"],
    answer: "A step was missing",
    explanation: "Every needed step must be in the instructions.",
  },
  {
    prompt: "What is the best way to be sure that left and right in your directions are correct?",
    options: ["Guess from memory", "Ask a friend to guess", "Walk the route", "Skip the check"],
    answer: "Walk the route",
    explanation: "Walking the route shows if your directions are correct.",
  },
];

const InstructionalText = () => (
  <CapsSubjectTopic
    title="Instructional Texts: Recipes and Directions"
    subtitle="What you need, steps in order, command verbs and sequence words, and giving clear directions"
    learnSteps={learnSteps}
    task="eng6-instructional-text"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default InstructionalText;
