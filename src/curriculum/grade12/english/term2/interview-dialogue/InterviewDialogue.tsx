import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is an interview?",
    options: ["A speech given to a very large crowd", "A silent reading of a long printed text", "A written test set for the learners", "A planned question-and-answer talk"],
    answer: "A planned question-and-answer talk",
    explanation: "An interviewer asks planned questions and the interviewee answers.",
  },
  {
    prompt: "How many phases does an interview have in the CAPS?",
    options: ["Three", "Five", "Four", "Six"],
    answer: "Five",
    explanation: "The phases are introduction, rapport, questions, summary and closure.",
  },
  {
    prompt: "What is the first phase of an interview?",
    options: ["Rapport phase", "Summary phase", "Closure phase", "Introduction"],
    answer: "Introduction",
    explanation: "The interviewer identifies self and states the purpose.",
  },
  {
    prompt: "What does the interviewer do in the introduction?",
    options: ["Asks the hardest question first", "Names self and states purpose", "Thanks the guest and says goodbye", "Reads out the summary of answers"],
    answer: "Names self and states purpose",
    explanation: "The introduction tells the interviewee who is asking and why.",
  },
  {
    prompt: "What is the aim of the rapport phase?",
    options: ["To create an atmosphere of trust", "To end the interview very quickly", "To list the answers in order", "To ask the guest for a lift home"],
    answer: "To create an atmosphere of trust",
    explanation: "Rapport makes the interviewee comfortable.",
  },
  {
    prompt: "In the questions phase, how should questions be ordered?",
    options: ["From specific to general", "In any random order", "From longest to shortest", "From general to specific"],
    answer: "From general to specific",
    explanation: "General questions come first and specific ones follow.",
  },
  {
    prompt: "What does the interviewer do in the summary phase?",
    options: ["Introduces self to the guest first", "Records and sequences the answers", "Builds trust with the guest first", "Asks for the guest's address now"],
    answer: "Records and sequences the answers",
    explanation: "The summary puts the answers in a logical order.",
  },
  {
    prompt: "What does the interviewer do in the closure phase?",
    options: ["Thanks the guest and gives contacts", "Asks the very first question once more", "Argues with the guest about answers", "Reads the whole script word for word"],
    answer: "Thanks the guest and gives contacts",
    explanation: "Closure is polite and leaves a way to be reached.",
  },
  {
    prompt: "Which question is an open question?",
    options: ["What do you enjoy about your work?", "Do you enjoy your work in the clinic?", "Is your work hard for you each day?", "Are you a nurse at the local clinic?"],
    answer: "What do you enjoy about your work?",
    explanation: "An open question invites a full answer.",
  },
  {
    prompt: "Which question is a closed question?",
    options: ["Do you enjoy your work?", "How did you choose your career?", "What was the hardest part of the job?", "Why did you move here?"],
    answer: "Do you enjoy your work?",
    explanation: "A closed question can be answered with yes or no.",
  },
  {
    prompt: "Why should an interviewer ask a follow-up question?",
    options: ["To end the interview sooner today", "To avoid taking notes of answers", "To pick up on an unclear answer", "To change the topic of the talk"],
    answer: "To pick up on an unclear answer",
    explanation: "A follow-up question digs deeper into an answer.",
  },
  {
    prompt: "What is the suggested time for an interview?",
    options: ["10 to 15 minutes", "2 to 3 minutes", "4 to 5 minutes", "20 to 30 minutes"],
    answer: "10 to 15 minutes",
    explanation: "CAPS suggests 10 to 15 minutes for an interview.",
  },
  {
    prompt: "What is the suggested time for a dialogue?",
    options: ["2 to 3 minutes", "10 to 15 minutes", "20 to 30 minutes", "6 to 8 minutes"],
    answer: "6 to 8 minutes",
    explanation: "CAPS suggests 6 to 8 minutes for a dialogue.",
  },
  {
    prompt: "How many speakers share a dialogue?",
    options: ["One", "Five", "Ten", "Two"],
    answer: "Two",
    explanation: "A dialogue is a conversation between two speakers.",
  },
];

const InterviewDialogue = () => (
  <CapsSubjectTopic
    title="Interviews and Dialogues"
    subtitle="Planning an interview, the five phases, asking questions and listening, and dialogue"
    learnSteps={learnSteps}
    task="gr12-interview-dialogue-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default InterviewDialogue;
