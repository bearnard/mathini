import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a news report?",
    options: ["A personal story on a system in a program", "A poem", "An objective account of what happened", "A letter to a friend for a task in use"],
    answer: "An objective account of what happened",
    explanation: "It is factual. The model text in the lesson shows this.",
  },
  {
    prompt: "What must a news report be?",
    options: ["Emotional in use for a user", "Accurate and objective", "Full of opinions at work in a lab", "Funny"],
    answer: "Accurate and objective",
    explanation: "Report facts. The model text in the lesson shows this.",
  },
  {
    prompt: "What does the lead contain?",
    options: ["The ending in use", "A joke", "An opinion in a file", "The key facts"],
    answer: "The key facts",
    explanation: "Who, what, where, when, why. The model text in the lesson shows this.",
  },
  {
    prompt: "Which facts come first?",
    options: ["The most important", "The least important", "The funniest", "The longest"],
    answer: "The most important",
    explanation: "Important facts first. The model text in the lesson shows this.",
  },
  {
    prompt: "Why name sources?",
    options: ["It is decoration in use for a user", "It is a rule of grammar at work in a lab", "It saves space in a file on a system", "Readers know where facts come from"],
    answer: "Readers know where facts come from",
    explanation: "Sources show reliability. The model text in the lesson shows this.",
  },
  {
    prompt: "Which is a good source?",
    options: ["A named municipal official", "A rumour at a school on a device", "An unknown friend for a task in use", "Nobody"],
    answer: "A named municipal official",
    explanation: "Use named people. The model text in the lesson shows this.",
  },
  {
    prompt: "Which sentence is objective?",
    options: ["The awful rank was a disgrace. at work in a lab", "I hate floods. in a file on a system", "The taxi rank was closed after flooding.", "It was a terrible mess. for a user at a school"],
    answer: "The taxi rank was closed after flooding.",
    explanation: "It states a fact. The model text in the lesson shows this.",
  },
  {
    prompt: "Which tense does a news report use?",
    options: ["The future tense", "The command form", "The past tense", "A question form"],
    answer: "The past tense",
    explanation: "It reports what happened. The model text in the lesson shows this.",
  },
  {
    prompt: "What should a report do if two sides disagree?",
    options: ["Give both sides", "Give only one side", "Hide both", "Take sides"],
    answer: "Give both sides",
    explanation: "Be fair. The model text in the lesson shows this.",
  },
  {
    prompt: "Which should a news report avoid?",
    options: ["Facts", "Sources", "A headline in a program", "The writer's opinion"],
    answer: "The writer's opinion",
    explanation: "Keep opinion out. The model text in the lesson shows this.",
  },
  {
    prompt: "How does an article differ from a news report?",
    options: ["It may be longer and more personal", "It has no facts on a device in a file", "It has no headline in use for a user", "It is a poem at work in a lab"],
    answer: "It may be longer and more personal",
    explanation: "Articles can add background. The model text in the lesson shows this.",
  },
  {
    prompt: "Which task needs an objective tone?",
    options: ["A diary entry", "A friendly letter", "A news report", "A story"],
    answer: "A news report",
    explanation: "A report is objective. The model text in the lesson shows this.",
  },
  {
    prompt: "What does a headline do in a report?",
    options: ["Sums up the news briefly", "Gives the whole text on a device", "Names the reader in use for a user", "Gives opinions at work in a lab"],
    answer: "Sums up the news briefly",
    explanation: "It is short. The model text in the lesson shows this.",
  },
  {
    prompt: "Why is a report short?",
    options: ["Readers want the facts quickly", "It has no facts on a system in a program", "It is a secret at a school on a device", "It is a poem for a task in use"],
    answer: "Readers want the facts quickly",
    explanation: "News is brief. The model text in the lesson shows this.",
  },
];

const JournalisticReport = () => (
  <CapsSubjectTopic
    title="Writing a Journalistic (News) Report"
    subtitle="Objective tone, facts first, sources and quotations, the past tense, and how a news report differs from an article"
    learnSteps={learnSteps}
    task="gr8-journalistic-report-t4"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={8}
  />
);

export default JournalisticReport;
