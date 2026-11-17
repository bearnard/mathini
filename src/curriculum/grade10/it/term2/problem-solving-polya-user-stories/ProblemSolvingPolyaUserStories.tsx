import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Who set out four steps for solving problems?",
    options: ["Newton", "Polya", "Einstein", "Turing"],
    answer: "Polya",
    explanation: "Polya's steps are widely taught.",
  },
  {
    prompt: "What is the first step in Polya's method?",
    options: ["Understand the problem", "Test the code on a system", "Print the result at a school", "Write the code in a lab for a task"],
    answer: "Understand the problem",
    explanation: "First be clear about the problem.",
  },
  {
    prompt: "What is the second step?",
    options: ["Look back", "Devise a plan", "Carry out the plan", "Understand the problem"],
    answer: "Devise a plan",
    explanation: "Plan before you code.",
  },
  {
    prompt: "What do you do in the third step?",
    options: ["Understand the problem", "Look back", "Carry out the plan", "Devise a plan"],
    answer: "Carry out the plan",
    explanation: "Write the algorithm and code.",
  },
  {
    prompt: "What do you do in the last step?",
    options: ["Write the code", "Understand the problem", "Devise a plan", "Look back and test"],
    answer: "Look back and test",
    explanation: "Check results and improve.",
  },
  {
    prompt: "Which is a way to devise a plan?",
    options: ["Skip the problem", "Try a simpler case", "Ignore the data", "Write code at once"],
    answer: "Try a simpler case",
    explanation: "Simpler cases show patterns.",
  },
  {
    prompt: "What is a user story?",
    options: ["A long program in a lab for a task", "A short statement of what a user needs", "A kind of cable on a system in a program", "A page of code at a school on a device"],
    answer: "A short statement of what a user needs",
    explanation: "It gives the requirements.",
  },
  {
    prompt: "From whose point of view is a user story written?",
    options: ["The programmer's", "The printer's", "The cable's", "The client's"],
    answer: "The client's",
    explanation: "It says what the client wants.",
  },
  {
    prompt: "What does a user story give the programmer?",
    options: ["The password at a school", "The requirements", "The screen for a task", "The cable in a program"],
    answer: "The requirements",
    explanation: "It tells what must be built.",
  },
  {
    prompt: "In a noun-verb analysis, what do nouns suggest?",
    options: ["Actions it performs", "Errors to be fixed", "Cables to be run", "Objects and data"],
    answer: "Objects and data",
    explanation: "Nouns are things.",
  },
  {
    prompt: "In a noun-verb analysis, what do verbs suggest?",
    options: ["Objects it holds", "Errors to fix", "Cables to run", "Behaviour"],
    answer: "Behaviour",
    explanation: "Verbs are actions.",
  },
  {
    prompt: "What is an acceptance test?",
    options: ["A kind of computer virus", "A kind of network cable", "A type of display screen", "A check against it"],
    answer: "A check against it",
    explanation: "It tests against the story.",
  },
  {
    prompt: "In 'a teacher enters a mark', which word is a verb?",
    options: ["teacher", "mark", "a", "enters"],
    answer: "enters",
    explanation: "Enters is the action.",
  },
  {
    prompt: "Why test a program with unusual cases?",
    options: ["They make it slower at work", "They hide errors in a file", "They can reveal errors", "They save time for a user"],
    answer: "They can reveal errors",
    explanation: "Edge cases find mistakes.",
  },
];

const ProblemSolvingPolyaUserStories = () => (
  <CapsSubjectTopic
    title="Problem Solving: Polya, User Stories and Noun-Verb Analysis"
    subtitle="Polya's four steps, writing and analysing user stories, finding objects and behaviour, and acceptance tests"
    learnSteps={learnSteps}
    task="gr10-problem-solving-polya-user-stories-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default ProblemSolvingPolyaUserStories;
