import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You learn best from diagrams and colours. Which study style is this?",
    options: ["Visual", "Auditory", "Kinaesthetic", "Reading and writing"],
    answer: "Visual",
    explanation: "Visual learners understand best from pictures, diagrams and colour.",
  },
  {
    prompt: "You remember best when you talk about a topic with a friend. Which style is this?",
    options: ["Auditory", "Visual", "Kinaesthetic", "Silent reading"],
    answer: "Auditory",
    explanation: "Auditory learners remember well by listening and talking.",
  },
  {
    prompt: "You learn well by practising and doing experiments. Which style is this?",
    options: ["Kinaesthetic", "Visual", "Auditory at a school", "Passive"],
    answer: "Kinaesthetic",
    explanation: "Kinaesthetic learners learn by doing and moving.",
  },
  {
    prompt: "What is a study strategy?",
    options: ["A fixed way of learning for life in a program at work", "The approach you choose for a specific task", "A kind of test on a device in a file", "A school timetable in use for a user"],
    answer: "The approach you choose for a specific task",
    explanation: "A strategy depends on the demands of the task you face.",
  },
  {
    prompt: "For a science topic you draw a mind map. What is the mind map in this case?",
    options: ["A study style in a program at work", "A kind of exam on a device in a file", "Your strategy for that task", "A time table in use for a user"],
    answer: "Your strategy for that task",
    explanation: "Choosing a mind map for a task is a strategy.",
  },
  {
    prompt: "Which is an active study strategy?",
    options: ["Testing yourself with past papers", "Re-reading the notes once more for a task", "Highlighting every line in a program", "Waiting for the night before on a device"],
    answer: "Testing yourself with past papers",
    explanation: "Testing yourself is active and shows what you know.",
  },
  {
    prompt: "You explain a topic to a friend in your own words. Why is this useful?",
    options: ["It replaces reading the notes for a user at a school", "It makes the test shorter in a lab for a task", "It shows what you understand and what you do not", "It guarantees a high mark on a system in a program"],
    answer: "It shows what you understand and what you do not",
    explanation: "Explaining reveals gaps in your understanding.",
  },
  {
    prompt: "Why is revising in short sessions over several days better than a last-night rush?",
    options: ["Spaced revision stays in memory longer", "Short sessions are never helpful on a system", "Revision is not needed before a test at a school", "Cramming gives deeper learning for a task"],
    answer: "Spaced revision stays in memory longer",
    explanation: "Spacing your revision helps you remember.",
  },
  {
    prompt: "A paper has 60 marks and lasts 90 minutes. How many minutes can you spend per mark?",
    options: ["0,5 minutes", "3 minutes", "6 minutes", "1,5 minutes"],
    answer: "1,5 minutes",
    explanation: "90 minutes divided by 60 marks gives 1,5 minutes a mark.",
  },
  {
    prompt: "A question is worth 6 marks in that 60 mark paper. About how long should you spend on it?",
    options: ["3 minutes", "9 minutes", "20 minutes", "30 minutes"],
    answer: "9 minutes",
    explanation: "6 marks at 1,5 minutes a mark is 9 minutes.",
  },
  {
    prompt: "At the start of an exam, what should you do first?",
    options: ["Start writing at once", "Look for the shortest question", "Check the clock only", "Read all the instructions"],
    answer: "Read all the instructions",
    explanation: "Reading the instructions makes sure that you answer correctly.",
  },
  {
    prompt: "You have a few minutes left at the end of the paper. What is a good use of them?",
    options: ["Hand in the paper early", "Start a new question without reading it", "Check your work for careless mistakes", "Leave blanks unanswered"],
    answer: "Check your work for careless mistakes",
    explanation: "Checking helps you to catch simple errors.",
  },
  {
    prompt: "What do you write first when building an annual study plan?",
    options: ["Your test and exam dates", "Your favourite subject in a file", "The books you have lost for a user", "The colour of your pens in a lab"],
    answer: "Your test and exam dates",
    explanation: "Dates set the shape of the whole plan.",
  },
  {
    prompt: "Which goal is specific and measurable?",
    options: ["Study more this year at work in a lab", "Try to be better in a file on a system", "Complete two past papers a week in May", "Work hard at times for a user at a school"],
    answer: "Complete two past papers a week in May",
    explanation: "A measurable goal can be checked, such as two papers a week.",
  },
];

const StudyStylesAnnualPlan = () => (
  <CapsSubjectTopic
    title="Study Styles, Strategies and Your Annual Study Plan"
    subtitle="Skills, styles and strategies, how to write an exam, and how to plan your year"
    learnSteps={learnSteps}
    task="gr11-study-styles-annual-plan-t2"
    bank={bank}
    apiPath="/api/caps/lo"
    grade={11}
  />
);

export default StudyStylesAnnualPlan;
