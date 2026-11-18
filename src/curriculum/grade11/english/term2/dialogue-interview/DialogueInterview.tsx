import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Two speakers answer each other and take turns. What kind of oral text is this?",
    options: ["A dialogue", "A prepared speech", "A vote of thanks", "A debate"],
    answer: "A dialogue",
    explanation: "A dialogue is a spoken exchange between people who respond to each other.",
  },
  {
    prompt: "You are asked to present a dialogue in class. About how long should it last?",
    options: ["1 to 2 minutes", "20 to 30 minutes", "45 to 60 minutes", "6 to 8 minutes"],
    answer: "6 to 8 minutes",
    explanation: "A dialogue in an oral task lasts about 6 to 8 minutes.",
  },
  {
    prompt: "In your dialogue you wait for your partner to finish before you reply. Which convention is this?",
    options: ["Rebuttal on a device", "Resolution in use", "Turn-taking", "Closure"],
    answer: "Turn-taking",
    explanation: "Turn-taking lets each person be heard.",
  },
  {
    prompt: "At the start of an interview you say your name and why you are there. Which phase is this?",
    options: ["The rapport phase of trust", "The introduction phase", "The summary phase of notes", "The closure phase of thanks"],
    answer: "The introduction phase",
    explanation: "In the introduction you identify yourself and state your purpose.",
  },
  {
    prompt: "You chat about the weather to make the guest feel at ease. Which phase are you in?",
    options: ["Closure", "Summary", "Rapport", "Introduction"],
    answer: "Rapport",
    explanation: "Rapport creates an atmosphere of trust.",
  },
  {
    prompt: "Which phase of an interview comes after the questions?",
    options: ["Summary", "Introduction", "Rapport", "Resolution"],
    answer: "Summary",
    explanation: "After the questions you summarise the answers, and then close.",
  },
  {
    prompt: "You thank the guest and give your contact details. Which phase is this?",
    options: ["Introduction", "Rapport", "Closure", "Questions"],
    answer: "Closure",
    explanation: "Closure thanks the person and offers contact details.",
  },
  {
    prompt: "In which order should your interview questions run?",
    options: ["From specific to general", "In a random order", "From hardest to easiest", "From general to specific"],
    answer: "From general to specific",
    explanation: "General questions come first and specific questions follow.",
  },
  {
    prompt: "Which question is open?",
    options: ["Did you study at university? at a school", "Are you a teacher? for a task in use", "Why did you choose this career?", "Do you work on Fridays? in a program"],
    answer: "Why did you choose this career?",
    explanation: "An open question that starts with why invites a full answer.",
  },
  {
    prompt: "You ask: Can you tell me more about that? What type of question is this?",
    options: ["A closed question", "A follow-up question", "A rhetorical question", "A resolution"],
    answer: "A follow-up question",
    explanation: "A follow-up question digs deeper into an earlier answer.",
  },
  {
    prompt: "What helps you listen actively during an interview?",
    options: ["Reading your questions without looking up in a lab", "Talking about yourself most of the time on a system", "Looking out of the window at a school on a device", "Taking brief notes and keeping eye contact"],
    answer: "Taking brief notes and keeping eye contact",
    explanation: "Active listening uses notes, eye contact and attention.",
  },
  {
    prompt: "You find out about the person before the interview. Why is this useful?",
    options: ["You can skip the introduction in a lab for a task", "You can speak for the guest on a system in a program", "You can ask better, relevant questions", "You can shorten the time at a school on a device"],
    answer: "You can ask better, relevant questions",
    explanation: "Background research makes your questions relevant.",
  },
  {
    prompt: "About how long is an interview in an oral task?",
    options: ["10 to 15 minutes", "1 to 2 minutes", "40 to 60 minutes", "3 to 4 hours"],
    answer: "10 to 15 minutes",
    explanation: "The usual duration for an interview is 10 to 15 minutes.",
  },
  {
    prompt: "The guest gives a very short answer to your question. What is a good reaction?",
    options: ["Move on and ignore the answer", "Answer the question yourself", "Ask a follow-up question", "End the interview at once"],
    answer: "Ask a follow-up question",
    explanation: "A follow-up invites the guest to say more.",
  },
];

const DialogueInterview = () => (
  <CapsSubjectTopic
    title="Dialogues and Interviews"
    subtitle="Features of a dialogue, the five phases of an interview, question types and active listening"
    learnSteps={learnSteps}
    task="gr11-dialogue-interview-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={11}
  />
);

export default DialogueInterview;
