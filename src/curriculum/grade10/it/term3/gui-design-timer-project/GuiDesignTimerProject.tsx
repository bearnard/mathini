import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does HCI stand for?",
    options: ["High computer input for a task", "Human-computer interaction", "Hard copy index in a program at work", "Home computer internet on a device"],
    answer: "Human-computer interaction",
    explanation: "It is about usability.",
  },
  {
    prompt: "What is the aim of good GUI design?",
    options: ["A program with many colours", "A program with no labels", "A program with hidden buttons", "A program that is easy to use"],
    answer: "A program that is easy to use",
    explanation: "Usability matters.",
  },
  {
    prompt: "Why group related controls?",
    options: ["They look random in use for a user", "They use less memory at work", "They hide the data in a file", "Users find them easily"],
    answer: "Users find them easily",
    explanation: "Grouping aids understanding.",
  },
  {
    prompt: "What should a button say?",
    options: ["Click here now", "What it does", "Press this one", "A random word"],
    answer: "What it does",
    explanation: "Clear labels help users.",
  },
  {
    prompt: "What is a panel for?",
    options: ["Playing sound for a user", "Grouping controls", "Storing files in a lab", "Printing on a system"],
    answer: "Grouping controls",
    explanation: "A panel holds related controls.",
  },
  {
    prompt: "What is a tabbed pane?",
    options: ["A kind of cable on a system in a program", "A type of file at a school on a device", "Several groups on one form", "A virus"],
    answer: "Several groups on one form",
    explanation: "Tabs show one group at a time.",
  },
  {
    prompt: "What does a timer do?",
    options: ["Runs code at an interval", "Prints a page in a lab for a task", "Stores a file on a system in a program", "Draws a form at a school on a device"],
    answer: "Runs code at an interval",
    explanation: "It raises events regularly.",
  },
  {
    prompt: "A timer interval of 100 ms moves a ball 5 pixels each time. How far in one second?",
    options: ["5 pixels", "100 pixels", "500 pixels", "50 pixels"],
    answer: "50 pixels",
    explanation: "10 events x 5 = 50.",
  },
  {
    prompt: "What is a good use of a timer?",
    options: ["Saving a file for a user", "A simple animation", "Printing a page in a lab", "Closing a form on a system"],
    answer: "A simple animation",
    explanation: "Move an object a little each event.",
  },
  {
    prompt: "What is program persistence?",
    options: ["Keeping state so it can be restored", "Making a program faster at work in a lab", "Deleting data in a file on a system", "Printing data for a user at a school"],
    answer: "Keeping state so it can be restored",
    explanation: "For example saving a high score.",
  },
  {
    prompt: "What does a user story give?",
    options: ["The password at work in a lab", "Who needs what, and the limits", "The screen colour in a file on a system", "The cable for a user at a school"],
    answer: "Who needs what, and the limits",
    explanation: "It states requirements.",
  },
  {
    prompt: "What is a test case?",
    options: ["An input and the expected output", "A kind of cable for a user at a school", "A type of file in a lab for a task", "A virus"],
    answer: "An input and the expected output",
    explanation: "You compare actual and expected.",
  },
  {
    prompt: "For a VAT of 15% on 100, what output do you expect?",
    options: ["115", "15", "100", "85"],
    answer: "115",
    explanation: "100 + 15 = 115.",
  },
  {
    prompt: "Why plan before you code?",
    options: ["It is faster to guess in a program", "It hides errors on a device", "It saves nothing in use for a user", "Requirements are clear"],
    answer: "Requirements are clear",
    explanation: "Planning avoids mistakes.",
  },
];

const GuiDesignTimerProject = () => (
  <CapsSubjectTopic
    title="GUI Design, the Timer and Planning a Project"
    subtitle="Human-computer interaction and grouping, panels and tabbed panes, a timer for animation, program persistence, and project requirements"
    learnSteps={learnSteps}
    task="gr10-gui-design-timer-project-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default GuiDesignTimerProject;
