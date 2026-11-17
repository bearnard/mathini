import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a digital citizen?",
    options: ["Someone with no computer on a device", "A computer program in use for a user", "A kind of cable at work in a lab", "Someone who uses ICT responsibly"],
    answer: "Someone who uses ICT responsibly",
    explanation: "They are safe and respectful online.",
  },
  {
    prompt: "What is a digital footprint?",
    options: ["A mark on a keyboard at work in a lab", "A printed page in a file on a system", "The trail of data you leave online", "A type of cable for a user at a school"],
    answer: "The trail of data you leave online",
    explanation: "It includes posts and searches.",
  },
  {
    prompt: "Which is an active digital footprint?",
    options: ["A site tracking your visit", "A comment you post", "A hidden cookie", "A server log"],
    answer: "A comment you post",
    explanation: "You leave it on purpose.",
  },
  {
    prompt: "Which is a passive digital footprint?",
    options: ["A post you write in use for a user", "A photo you share at work in a lab", "Data collected as you browse", "A reply you send in a file on a system"],
    answer: "Data collected as you browse",
    explanation: "It is gathered about you.",
  },
  {
    prompt: "Why think before you post?",
    options: ["Posts vanish at once on a device", "Posts cost money in use for a user", "Posts are private at work in a lab", "Posts last and can spread"],
    answer: "Posts last and can spread",
    explanation: "Content may be copied.",
  },
  {
    prompt: "What is netiquette?",
    options: ["A kind of cable in a file", "A type of file for a user", "A printer in a lab for a task", "Good manners online"],
    answer: "Good manners online",
    explanation: "It is online etiquette.",
  },
  {
    prompt: "Why avoid typing in capitals?",
    options: ["It saves time in a file on a system", "It hides the text for a user", "It adds colour in a lab for a task", "It looks like shouting"],
    answer: "It looks like shouting",
    explanation: "Capitals seem rude.",
  },
  {
    prompt: "Why use a subject line in an e-mail?",
    options: ["It makes the e-mail longer on a device in a file", "It hides the sender in use for a user", "It tells the reader what it is about", "It saves a file at work in a lab"],
    answer: "It tells the reader what it is about",
    explanation: "A subject helps readers.",
  },
  {
    prompt: "What should you do before you send an angry reply?",
    options: ["Wait and reread it", "Send it at once for a user", "Add capitals in a lab", "Send it to all on a system"],
    answer: "Wait and reread it",
    explanation: "A sent message cannot be called back.",
  },
  {
    prompt: "What is a blog?",
    options: ["A kind of cable in a program", "A type of screen on a device", "A web diary of posts", "A virus"],
    answer: "A web diary of posts",
    explanation: "Posts are shown newest first.",
  },
  {
    prompt: "What is a vlog?",
    options: ["A written web diary", "A kind of cable for a screen", "A type of data file", "A video blog"],
    answer: "A video blog",
    explanation: "A vlog is a blog that uses video to share its posts.",
  },
  {
    prompt: "What is a wiki?",
    options: ["A site many people can edit", "A site only one person edits", "A kind of cable", "A virus"],
    answer: "A site many people can edit",
    explanation: "It is built together.",
  },
  {
    prompt: "What is a web application?",
    options: ["A paper form on a device in a file", "A kind of cable in use for a user", "Software used in a browser", "A game disc at work in a lab"],
    answer: "Software used in a browser",
    explanation: "It runs online.",
  },
  {
    prompt: "Which is an example of a web application?",
    options: ["A paper letter in a lab for a task", "A pencil on a system in a program", "An online word processor", "A ruler"],
    answer: "An online word processor",
    explanation: "It runs in a browser.",
  },
];

const DigitalCitizenshipNetiquetteBlogs = () => (
  <CapsSubjectTopic
    title="Digital Citizenship, Netiquette, Blogs and Web Applications"
    subtitle="Being a responsible digital citizen, your digital footprint, netiquette for e-mail and social media, and blogs, wikis and web applications"
    learnSteps={learnSteps}
    task="gr10-digital-citizenship-netiquette-blogs-t3"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={10}
  />
);

export default DigitalCitizenshipNetiquetteBlogs;
