import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a dialogue?",
    options: ["A story told by one person in a file", "A conversation written as speech", "A poem", "A letter in a lab for a task"],
    answer: "A conversation written as speech",
    explanation: "It records the words of speakers.",
  },
  {
    prompt: "How does a line of a dialogue begin?",
    options: ["A date and an address line", "A greeting and a number", "The speaker's name and colon", "A heading written in capitals"],
    answer: "The speaker's name and colon",
    explanation: "A line of dialogue starts with the speaker's name and a colon, as in Thandi: Hello.",
  },
  {
    prompt: "What do the brackets in a dialogue hold?",
    options: ["Directions on how to speak or act", "The speaker's name for a user at a school", "The date in a lab for a task", "The page number on a system in a program"],
    answer: "Directions on how to speak or act",
    explanation: "For example (smiling).",
  },
  {
    prompt: "Where does each speaker's words go?",
    options: ["On the same line", "At the end", "In a table", "On a new line"],
    answer: "On a new line",
    explanation: "Each speaker has a line.",
  },
  {
    prompt: "What does the setting line show?",
    options: ["Who wrote it on a system in a program", "The price at a school on a device", "Where and when the dialogue happens", "The length for a task in use"],
    answer: "Where and when the dialogue happens",
    explanation: "It sets the scene.",
  },
  {
    prompt: "How should the language of a dialogue sound?",
    options: ["Like a legal letter", "Like a long essay", "Like real speech", "Like a dictionary"],
    answer: "Like real speech",
    explanation: "Short and natural.",
  },
  {
    prompt: "Which line is natural speech?",
    options: ["I am unable to attend on this date.", "Regrettably, I decline.", "I can't. Not today.", "It is impossible."],
    answer: "I can't. Not today.",
    explanation: "People use short forms.",
  },
  {
    prompt: "Why should the language fit the speaker?",
    options: ["All speakers sound the same for a user", "It is shorter in a lab for a task", "Different people speak differently", "It is a rule of maths on a system in a program"],
    answer: "Different people speak differently",
    explanation: "A friend and a principal differ.",
  },
  {
    prompt: "Which is a direction?",
    options: ["Thandi:", "(looks at her watch)", "Sipho: Hello", "Setting: The library"],
    answer: "(looks at her watch)",
    explanation: "It is in brackets.",
  },
  {
    prompt: "What is a written interview?",
    options: ["A one-sided speech at work in a lab", "A poem", "A diary", "Questions and answers on paper"],
    answer: "Questions and answers on paper",
    explanation: "It records an interview.",
  },
  {
    prompt: "What does a written interview begin with?",
    options: ["The thanks in a lab for a task", "A short introduction of the person", "The answers on a system in a program", "The date of birth at a school on a device"],
    answer: "A short introduction of the person",
    explanation: "Say who the person is.",
  },
  {
    prompt: "Which question is an open question?",
    options: ["Do you like your work? in a program at work", "What do you enjoy most about your work?", "Are you tired? on a device in a file", "Is it Monday? in use for a user"],
    answer: "What do you enjoy most about your work?",
    explanation: "It needs more than yes or no.",
  },
  {
    prompt: "Why avoid yes or no questions in an interview?",
    options: ["They are rude on a device in a file", "They are long in use for a user", "They are secret at work in a lab", "They give very little to write"],
    answer: "They give very little to write",
    explanation: "Open questions give detail.",
  },
  {
    prompt: "How does an interview usually end?",
    options: ["With a new question for a task", "With a poem in a program at work", "With thanks to the person", "With a bill on a device in a file"],
    answer: "With thanks to the person",
    explanation: "Thank the person.",
  },
];

const DialogueAndInterview = () => (
  <CapsSubjectTopic
    title="Writing a Dialogue and a Written Interview"
    subtitle="The format of a dialogue, how to use stage directions, and the questions and answers of a written interview"
    learnSteps={learnSteps}
    task="gr8-dialogue-and-interview-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={8}
  />
);

export default DialogueAndInterview;
