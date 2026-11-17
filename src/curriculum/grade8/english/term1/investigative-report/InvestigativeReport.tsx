import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is an investigative report?",
    options: ["A story about a dream on a system", "A report on what you found out", "A poem", "A letter to a friend for a task in use"],
    answer: "A report on what you found out",
    explanation: "It presents facts.",
  },
  {
    prompt: "What is a questionnaire?",
    options: ["A list of questions for a group", "A kind of story for a task in use", "A type of poem in a program at work", "A friendly letter on a device in a file"],
    answer: "A list of questions for a group",
    explanation: "It collects comparable answers.",
  },
  {
    prompt: "Why give all learners the same questions?",
    options: ["It is shorter in a lab for a task", "It is secret on a system in a program", "It is rude at a school on a device", "The answers can be compared"],
    answer: "The answers can be compared",
    explanation: "Same questions give fair results.",
  },
  {
    prompt: "What does the introduction state?",
    options: ["The recommendation at a school on a device", "The question being investigated", "The signature for a task in use", "The date of the party in a program"],
    answer: "The question being investigated",
    explanation: "It says why you investigated.",
  },
  {
    prompt: "What does the method part describe?",
    options: ["The conclusion in a program at work", "How the facts were collected", "The heading on a device in a file", "The closing in use for a user"],
    answer: "How the facts were collected",
    explanation: "For example a questionnaire.",
  },
  {
    prompt: "What goes in the findings?",
    options: ["Your opinions only on a device in a file", "A story", "What you found, with numbers", "A poem"],
    answer: "What you found, with numbers",
    explanation: "Facts and figures.",
  },
  {
    prompt: "22 of 40 learners walk. What percentage is this?",
    options: ["22%", "55%", "40%", "45%"],
    answer: "55%",
    explanation: "22 / 40 = 0,55.",
  },
  {
    prompt: "10 learners take a taxi and 8 take a bus. How many learners use these two?",
    options: ["2", "18", "80", "48"],
    answer: "18",
    explanation: "10 + 8 = 18 learners use a taxi or a bus.",
  },
  {
    prompt: "Which style is used in an investigative report?",
    options: ["I and my feelings in use for a user", "Very informal slang at work in a lab", "Poetic language in a file on a system", "Impersonal, in the third person"],
    answer: "Impersonal, in the third person",
    explanation: "Keep it objective.",
  },
  {
    prompt: "Which sentence is impersonal?",
    options: ["I asked the learners myself.", "I think it is cool.", "The learners were asked.", "My friends told me so."],
    answer: "The learners were asked.",
    explanation: "An impersonal sentence avoids I and my, as in the learners were asked.",
  },
  {
    prompt: "Which tense is mostly used for findings?",
    options: ["The future tense", "The present tense only", "The past tense", "The command form"],
    answer: "The past tense",
    explanation: "The survey is finished.",
  },
  {
    prompt: "What must a conclusion do?",
    options: ["Follow from the findings", "Add new facts on a device in a file", "Tell a story in use for a user", "Repeat the heading at work in a lab"],
    answer: "Follow from the findings",
    explanation: "It sums up what the facts show.",
  },
  {
    prompt: "What must a recommendation be?",
    options: ["A joke told to the reader", "A secret kept from the reader", "Practical and evidence-based", "A poem for the school"],
    answer: "Practical and evidence-based",
    explanation: "It says what should be done.",
  },
  {
    prompt: "Why use headings?",
    options: ["They make it longer in use for a user", "They hide facts at work in a lab", "They replace facts in a file on a system", "They show the parts clearly"],
    answer: "They show the parts clearly",
    explanation: "Readers find parts easily.",
  },
];

const InvestigativeReport = () => (
  <CapsSubjectTopic
    title="Writing an Investigative Report"
    subtitle="Asking a question, using a questionnaire, presenting findings, and writing a conclusion and recommendation"
    learnSteps={learnSteps}
    task="gr8-investigative-report-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={8}
  />
);

export default InvestigativeReport;
