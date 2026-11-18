import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Use the rule that the verb moves back one tense. Zanele said, \"I am hungry.\" becomes Zanele said that she ___ hungry.",
    options: ["is", "will be", "was", "has been"],
    answer: "was",
    explanation: "Am moves back one tense to was.",
  },
  {
    prompt: "Use the rule that the verb moves back one tense. Sipho said, \"I can swim.\" becomes Sipho said that he ___ swim.",
    options: ["could", "can", "would", "may"],
    answer: "could",
    explanation: "Can moves back one tense to could.",
  },
  {
    prompt: "Use the rule that the verb moves back one tense. She said, \"I will help.\" becomes She said that she ___ help.",
    options: ["will", "could", "should", "would"],
    answer: "would",
    explanation: "Will moves back one tense to would.",
  },
  {
    prompt: "Which sentence correctly reports He asked, \"Where do you live?\"",
    options: ["He asked where did I live.", "He asked where I lived.", "He asked where do I live.", "He asked, where I lived?"],
    answer: "He asked where I lived.",
    explanation: "A reported question has statement word order and no question mark.",
  },
  {
    prompt: "Which sentence correctly reports She asked, \"Are you ready?\"",
    options: ["She asked if was I ready.", "She asked if I am ready?", "She asked if I was ready.", "She asked are you ready."],
    answer: "She asked if I was ready.",
    explanation: "Use if with statement word order.",
  },
  {
    prompt: "Which sentence correctly reports The teacher said to the class, \"Open your books.\"",
    options: ["The teacher told the class to open their books.", "The teacher told the class that open their books.", "The teacher told the class opening their books.", "The teacher told the class they opened books."],
    answer: "The teacher told the class to open their books.",
    explanation: "A reported command uses told and to plus the verb.",
  },
  {
    prompt: "Which sentence correctly reports the command Do not run?",
    options: ["He told us do not run.", "He told us that not run.", "He told us to not running.", "He told us not to run."],
    answer: "He told us not to run.",
    explanation: "A negative command uses not to.",
  },
  {
    prompt: "Which punctuation mark ends a reported question?",
    options: ["A question mark", "A full stop", "An exclamation mark", "A comma"],
    answer: "A full stop",
    explanation: "A reported question is a statement, so it ends with a full stop.",
  },
  {
    prompt: "In reported speech, what does yesterday change to?",
    options: ["the following day", "that day", "the day before", "today"],
    answer: "the day before",
    explanation: "After a past reporting verb, yesterday becomes the day before.",
  },
  {
    prompt: "In reported speech, what does now change to?",
    options: ["then", "here", "there", "today"],
    answer: "then",
    explanation: "After a past reporting verb, now becomes then.",
  },
  {
    prompt: "Which sentence is written in direct speech?",
    options: ["Mpho asked if I was ready.", "Mpho wanted to know if I was ready.", "Mpho told me to get ready.", "Mpho asked, \"Are you ready?\""],
    answer: "Mpho asked, \"Are you ready?\"",
    explanation: "Direct speech gives the exact words in quotation marks.",
  },
  {
    prompt: "Thabo and Sipho said, \"We are late.\" Which pronoun completes: Thabo and Sipho said that ___ were late?",
    options: ["we", "they", "I", "them"],
    answer: "they",
    explanation: "A reporter who was not one of the speakers changes we to they.",
  },
  {
    prompt: "Which sentence correctly reports She said, \"I will come tomorrow.\"",
    options: ["She said that she will come tomorrow afternoon.", "She said that I would come tomorrow.", "She said that she would come the next day.", "She said that she came the next day."],
    answer: "She said that she would come the next day.",
    explanation: "Will becomes would, I becomes she and tomorrow becomes the next day.",
  },
  {
    prompt: "Which reporting verb suits a polite request in Please sit down?",
    options: ["asked", "replied", "exclaimed", "complained"],
    answer: "asked",
    explanation: "He asked me to sit down reports a polite request.",
  },
];

const DirectReportedSpeech = () => (
  <CapsSubjectTopic
    title={"Direct and Reported Speech"}
    subtitle={"Reported statements, questions and commands, and the changes of tense, time and pronoun"}
    learnSteps={learnSteps}
    task={"gr7-direct-reported-speech-t2"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default DirectReportedSpeech;
