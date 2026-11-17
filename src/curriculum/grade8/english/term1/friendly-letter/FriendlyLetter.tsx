import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Who is a friendly letter written to?",
    options: ["Someone you know well", "A stranger at a bank on a device", "A government office in use", "A company manager at work"],
    answer: "Someone you know well",
    explanation: "It is personal.",
  },
  {
    prompt: "What is the purpose of a friendly letter?",
    options: ["To apply for a job in a lab for a task", "To lodge a complaint on a system", "To order goods at a school on a device", "To share news and feelings"],
    answer: "To share news and feelings",
    explanation: "It is a personal message.",
  },
  {
    prompt: "Which greeting suits a friendly letter to Lerato?",
    options: ["Dear Lerato,", "To whom it may concern,", "Dear Sir,", "Dear Madam,"],
    answer: "Dear Lerato,",
    explanation: "Use the person's name.",
  },
  {
    prompt: "Where does the date go?",
    options: ["At the very end at a school on a device", "In the middle for a task in use", "At the top, with the address", "After the closing in a program at work"],
    answer: "At the top, with the address",
    explanation: "It is placed at the top right.",
  },
  {
    prompt: "Which closing suits a friendly letter?",
    options: ["Yours faithfully,", "Respectfully,", "Your friend,", "Regards to management,"],
    answer: "Your friend,",
    explanation: "It is warm and personal.",
  },
  {
    prompt: "What should each paragraph contain?",
    options: ["Several ideas from the letter", "A single main idea", "No idea of any kind", "Greetings from a friend"],
    answer: "A single main idea",
    explanation: "One idea per paragraph.",
  },
  {
    prompt: "Which opening line suits a friendly letter?",
    options: ["I hope you are well.", "To whom it may concern.", "Re: urgent matter.", "Please find attached."],
    answer: "I hope you are well.",
    explanation: "It is friendly.",
  },
  {
    prompt: "What should a friendly letter use?",
    options: ["Slang and short forms only for a task", "Informal but correct language", "Legal language in a program at work", "A very formal tone on a device in a file"],
    answer: "Informal but correct language",
    explanation: "Correct spelling still matters.",
  },
  {
    prompt: "Which is wrong in a friendly letter?",
    options: ["A clear first paragraph on a device", "Short cellphone spelling", "Paragraphs in use for a user", "A closing at work in a lab"],
    answer: "Short cellphone spelling",
    explanation: "Use full sentences.",
  },
  {
    prompt: "What is a visual stimulus?",
    options: ["A kind of letter on a device in a file", "A type of cable in use for a user", "A picture that gives you ideas", "A poem"],
    answer: "A picture that gives you ideas",
    explanation: "It starts your writing.",
  },
  {
    prompt: "What should you do first with a visual stimulus?",
    options: ["Write the closing of the letter", "Sign the letter at once", "Post it to a friend", "Look carefully and note details"],
    answer: "Look carefully and note details",
    explanation: "First observe the picture closely, and note what you see.",
  },
  {
    prompt: "How should you use a picture in a letter?",
    options: ["List the items in it in a lab for a task", "Tell it as news to a friend", "Copy its caption on a system in a program", "Ignore it at a school on a device"],
    answer: "Tell it as news to a friend",
    explanation: "Make it lively.",
  },
  {
    prompt: "Which detail makes a letter lively?",
    options: ["A vague word like thing", "A vague word like stuff", "Smells of fresh bread", "A blank line on a page"],
    answer: "Smells of fresh bread",
    explanation: "Details of sight, sound and smell bring the letter to life.",
  },
  {
    prompt: "What should the last paragraph often do?",
    options: ["Ask the friend to write back", "State a legal claim for a user at a school", "List costs in a lab for a task", "Give a reference on a system in a program"],
    answer: "Ask the friend to write back",
    explanation: "It invites a reply.",
  },
];

const FriendlyLetter = () => (
  <CapsSubjectTopic
    title="Writing a Friendly Letter"
    subtitle="Purpose, layout, informal language, and writing a letter from a picture or other visual stimulus"
    learnSteps={learnSteps}
    task="gr8-friendly-letter-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={8}
  />
);

export default FriendlyLetter;
