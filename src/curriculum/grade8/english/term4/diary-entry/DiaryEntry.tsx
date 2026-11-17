import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "How would you describe a diary entry?",
    options: ["Personal record of a day", "A formal letter to a paper", "A news report on an event", "A set of instructions for use"],
    answer: "Personal record of a day",
    explanation: "It is private and personal. The model text in the lesson shows this.",
  },
  {
    prompt: "What does a diary entry begin with?",
    options: ["The signature", "A recipe", "The date", "A heading in capitals"],
    answer: "The date",
    explanation: "Start with day and date. The model text in the lesson shows this.",
  },
  {
    prompt: "Which person does a diary use?",
    options: ["The third person", "The first person", "The second person", "No person"],
    answer: "The first person",
    explanation: "It uses I. The model text in the lesson shows this.",
  },
  {
    prompt: "Which greeting is common in a diary?",
    options: ["Dear Sir,", "To whom it may concern,", "Dear Diary,", "Dear Editor,"],
    answer: "Dear Diary,",
    explanation: "Many writers address the diary. The model text in the lesson shows this.",
  },
  {
    prompt: "Which tense is used for events?",
    options: ["The future tense", "Commands", "The past tense", "Questions"],
    answer: "The past tense",
    explanation: "Events have happened. The model text in the lesson shows this.",
  },
  {
    prompt: "What else besides events does a diary show?",
    options: ["Prices of goods in a shop", "Maps of a town and its roads", "Feelings", "Rules of a game for teams"],
    answer: "Feelings",
    explanation: "Feelings make it personal. The model text in the lesson shows this.",
  },
  {
    prompt: "Which is a feeling word?",
    options: ["Nervous", "A table in a hall", "A road to the school", "A chair in a room"],
    answer: "Nervous",
    explanation: "It names an emotion. The model text in the lesson shows this.",
  },
  {
    prompt: "Which sentence is stronger?",
    options: ["It was just bad as a whole day.", "I felt sad as we lost.", "It was just nice as a whole day.", "Things sort of happened to us."],
    answer: "I felt sad as we lost.",
    explanation: "The first sentence names the feeling and the reason. The model text shows this.",
  },
  {
    prompt: "What does reflection mean in a diary?",
    options: ["Looking in a mirror in use for a user", "Copying the date at work in a lab", "Listing prices in a file on a system", "Thinking about what you learned"],
    answer: "Thinking about what you learned",
    explanation: "It sums up the day's meaning. The model text in the lesson shows this.",
  },
  {
    prompt: "Which language suits a diary?",
    options: ["A legal style in a file", "A very formal style for a user", "Informal but correct", "Telegram style only in a lab"],
    answer: "Informal but correct",
    explanation: "It is personal. The model text in the lesson shows this.",
  },
  {
    prompt: "Which detail makes a diary vivid?",
    options: ["It was a place at a school on a device", "The hall smelled of floor polish", "Something happened for a task in use", "The thing in a program at work"],
    answer: "The hall smelled of floor polish",
    explanation: "Sensory details help. The model text in the lesson shows this.",
  },
  {
    prompt: "Which closing suits a diary?",
    options: ["Yours faithfully,", "Regards to management,", "With best wishes to the editor,", "Goodnight."],
    answer: "Goodnight.",
    explanation: "A short sign-off. The model text in the lesson shows this.",
  },
  {
    prompt: "What is wrong with a diary written in the third person?",
    options: ["It is too short", "A diary says I", "It has no date", "It is too neat"],
    answer: "A diary says I",
    explanation: "Use the first person. The model text in the lesson shows this.",
  },
  {
    prompt: "Why choose exact feeling words?",
    options: ["They make it long in a lab for a task", "They hide the day on a system in a program", "They show how you really felt", "They are rude at a school on a device"],
    answer: "They show how you really felt",
    explanation: "Exact words are clearer. The model text in the lesson shows this.",
  },
];

const DiaryEntry = () => (
  <CapsSubjectTopic
    title="Writing a Diary Entry"
    subtitle="Date, first person, events and feelings, informal language, and reflection"
    learnSteps={learnSteps}
    task="gr8-diary-entry-t4"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={8}
  />
);

export default DiaryEntry;
