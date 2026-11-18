import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does a diary entry begin with?",
    options: ["The ending", "A quotation", "The date", "A subject line"],
    answer: "The date",
    explanation: "A diary entry starts with the date.",
  },
  {
    prompt: "Which person is used in a diary entry?",
    options: ["The first person", "The second person", "The third person", "No person"],
    answer: "The first person",
    explanation: "A diary entry uses I and my.",
  },
  {
    prompt: "What does a diary entry usually include as well as what happened?",
    options: ["A list of ingredients", "A weather report", "A heading in capital letters", "How the writer felt"],
    answer: "How the writer felt",
    explanation: "A diary is personal and shows feelings.",
  },
  {
    prompt: "What does the subject line of an e-mail tell the reader?",
    options: ["The name of the writer", "The topic of the message", "The date of birth", "The length of the e-mail"],
    answer: "The topic of the message",
    explanation: "The subject tells the reader what the e-mail is about.",
  },
  {
    prompt: "You write to Mrs Pillay, your music teacher. Which greeting do you use?",
    options: ["Hey you", "Yo Pillay", "Dear Mrs Pillay", "Hello there, Pillay!"],
    answer: "Dear Mrs Pillay",
    explanation: "A polite greeting suits an adult.",
  },
  {
    prompt: "What does Cc mean in an e-mail?",
    options: ["People who get a copy", "The main person who writes", "The subject", "The signature"],
    answer: "People who get a copy",
    explanation: "Cc is short for carbon copy.",
  },
  {
    prompt: "Which closing suits a formal e-mail?",
    options: ["Cheers mate", "See you at break", "Laters", "Yours sincerely"],
    answer: "Yours sincerely",
    explanation: "A formal e-mail has a polite closing.",
  },
  {
    prompt: "What is the purpose of a flyer?",
    options: ["To record the decisions of a meeting", "To advertise or announce an event", "To tell a long story", "To show a timetable"],
    answer: "To advertise or announce an event",
    explanation: "A flyer catches the reader's attention.",
  },
  {
    prompt: "Which information must a flyer for a school fete include?",
    options: ["The history of the school", "A list of marks", "What, when and where", "A poem"],
    answer: "What, when and where",
    explanation: "The reader needs the key facts.",
  },
  {
    prompt: "Which is the best heading for a flyer?",
    options: ["SCHOOL FETE: SATURDAY 20 JUNE", "Some information about an event that may happen", "Fete", "Read this long notice about the fete before you decide"],
    answer: "SCHOOL FETE: SATURDAY 20 JUNE",
    explanation: "A flyer heading is bold and gives the main message.",
  },
  {
    prompt: "Which line would you most likely find in a diary?",
    options: ["Please find attached the report for the term.", "Dear Sir or Madam", "The match starts at three.", "I was so nervous before the race!"],
    answer: "I was so nervous before the race!",
    explanation: "A diary entry is informal and personal.",
  },
  {
    prompt: "Which sentence suits a formal e-mail to a principal?",
    options: ["Can we use the hall after school? Thx.", "I am writing to ask to use the hall.", "Gimme the hall key.", "Hall please lol."],
    answer: "I am writing to ask to use the hall.",
    explanation: "A formal e-mail is polite and clear.",
  },
  {
    prompt: "Which of these should be kept short on a flyer?",
    options: ["The date", "The place", "The message", "The contact number"],
    answer: "The message",
    explanation: "A flyer uses few words.",
  },
  {
    prompt: "Which text is private and informal?",
    options: ["A diary entry", "An e-mail to a principal", "A formal letter", "A school notice"],
    answer: "A diary entry",
    explanation: "A diary is written for the writer.",
  },
];

const DiaryEmailFlyer = () => (
  <CapsSubjectTopic
    title={"Diary Entry, E-mail and Flyer"}
    subtitle={"A diary entry, an e-mail, a flyer and choosing the register"}
    learnSteps={learnSteps}
    task={"gr7-diary-email-flyer-t4"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default DiaryEmailFlyer;
