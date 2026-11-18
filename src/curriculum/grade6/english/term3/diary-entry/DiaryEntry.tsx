import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You write about your day in a private book. What are you writing?",
    options: ["A diary entry", "A recipe", "A news article", "A weather report"],
    answer: "A diary entry",
    explanation: "A diary entry is a personal record of your day.",
  },
  {
    prompt: "What should an entry begin with?",
    options: ["The by-line", "The headline", "The date", "The key"],
    answer: "The date",
    explanation: "The date shows when it happened.",
  },
  {
    prompt: "Which word shows the first person?",
    options: ["He", "They", "I", "She"],
    answer: "I",
    explanation: "The first person uses I, my and we.",
  },
  {
    prompt: "Which sentence is correct for an event that already happened?",
    options: ["We plant the seeds tomorrow", "We will plant the seeds", "We planted the seeds", "Plant the seeds"],
    answer: "We planted the seeds",
    explanation: "Events that happened use the past tense.",
  },
  {
    prompt: "Which sentence explains a feeling?",
    options: ["I feel", "The row was neat in a program at work", "Proud proud proud on a device in a file", "I feel proud because my row looks neat"],
    answer: "I feel proud because my row looks neat",
    explanation: "A good entry gives a reason for the feeling.",
  },
  {
    prompt: "What does Dear Diary do?",
    options: ["Gives the weather for a task in use", "Names the reporter in a program at work", "Sets a recipe on a device in a file", "Opens the entry in a friendly way"],
    answer: "Opens the entry in a friendly way",
    explanation: "Dear Diary is a friendly opening.",
  },
  {
    prompt: "Which ending suits a diary entry?",
    options: ["A by-line at a school on a device", "A recipe for a task in use", "A plan for tomorrow", "A headline in a program"],
    answer: "A plan for tomorrow",
    explanation: "Ending with a thought or a plan feels natural.",
  },
  {
    prompt: "Which voice suits a diary?",
    options: ["Very formal on a device in a file", "Informal and friendly", "Like a news report in use", "Like a recipe at work in a lab"],
    answer: "Informal and friendly",
    explanation: "A diary is personal, so the voice is friendly.",
  },
  {
    prompt: "How many events should you tell?",
    options: ["The whole day in order", "Just the weather", "Nothing about your day", "A few that matter"],
    answer: "A few that matter",
    explanation: "Choose the events that matter to you.",
  },
  {
    prompt: "You write: He felt proud, when you mean yourself. What is wrong?",
    options: ["You should use the future", "You should add a headline", "You should use I", "You should delete the date"],
    answer: "You should use I",
    explanation: "In a diary you write about yourself as I.",
  },
  {
    prompt: "Why put events in order?",
    options: ["It makes it longer for a task in use", "It hides feelings in a program at work", "It removes the date on a device in a file", "It makes the entry easy to follow"],
    answer: "It makes the entry easy to follow",
    explanation: "Order helps the reader to follow what happened.",
  },
  {
    prompt: "Which sentence tells a feeling now?",
    options: ["We dug the soil", "I feel tired", "The class planted seeds", "The bell rang"],
    answer: "I feel tired",
    explanation: "Feelings now use the present tense.",
  },
  {
    prompt: "You forgot the date. What should you do?",
    options: ["Delete the entry for a user", "Write it twice in a lab for a task", "Remove the first line on a system", "Add the date at the top"],
    answer: "Add the date at the top",
    explanation: "The date belongs at the top of every entry.",
  },
  {
    prompt: "Which sentence is a plan for tomorrow?",
    options: ["Yesterday I dug the soil at work in a lab", "Tomorrow I will bring a watering can", "The soil was wet in a file on a system", "I am tired now for a user at a school"],
    answer: "Tomorrow I will bring a watering can",
    explanation: "A plan looks ahead using will.",
  },
];

const DiaryEntry = () => (
  <CapsSubjectTopic
    title="Writing a Diary Entry"
    subtitle="The date, the first person, the past tense, feelings, and what you plan for tomorrow"
    learnSteps={learnSteps}
    task="eng6-diary-entry"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default DiaryEntry;
