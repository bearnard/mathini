import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is e-communication?",
    options: ["Sending a letter by post for a task in use", "A kind of cable in a program at work", "Sending messages by electronic means", "A type of screen on a device in a file"],
    answer: "Sending messages by electronic means",
    explanation: "It uses electronic tools.",
  },
  {
    prompt: "Which tool suits a formal request?",
    options: ["E-mail", "A chat room", "A game chat", "A voice note"],
    answer: "E-mail",
    explanation: "E-mail is formal and written.",
  },
  {
    prompt: "Which is an online lecture or meeting?",
    options: ["A blog", "A vlog", "A webinar", "A browser"],
    answer: "A webinar",
    explanation: "A webinar is held online.",
  },
  {
    prompt: "What is a vlog?",
    options: ["A kind of cable in a program", "A video diary online", "A type of file on a device", "A printer in use for a user"],
    answer: "A video diary online",
    explanation: "It is a video blog.",
  },
  {
    prompt: "What is VoIP?",
    options: ["A kind of cable at a school on a device", "A type of file for a task in use", "Voice calls over the Internet", "A printer in a program at work"],
    answer: "Voice calls over the Internet",
    explanation: "VoIP sends speech as data.",
  },
  {
    prompt: "What does To mean in an e-mail?",
    options: ["A hidden recipient in a lab for a task", "A file sent along on a system in a program", "The main person you write to", "The subject at a school on a device"],
    answer: "The main person you write to",
    explanation: "To is for the main recipient.",
  },
  {
    prompt: "What does Cc do?",
    options: ["Hides recipients on a device in a file", "Copies others who may be seen", "Deletes the mail in use for a user", "Prints the mail at work in a lab"],
    answer: "Copies others who may be seen",
    explanation: "Everyone can see who was copied.",
  },
  {
    prompt: "What does Bcc do?",
    options: ["Shows all addresses in use for a user", "Deletes the mail at work in a lab", "Prints the mail in a file on a system", "Copies others without showing them"],
    answer: "Copies others without showing them",
    explanation: "Blind copies are hidden.",
  },
  {
    prompt: "Why add a subject?",
    options: ["It says what the e-mail is about", "It makes the e-mail longer at work in a lab", "It hides the sender in a file on a system", "It saves a file for a user at a school"],
    answer: "It says what the e-mail is about",
    explanation: "A subject helps readers.",
  },
  {
    prompt: "What is an attachment?",
    options: ["A kind of cable on a system in a program", "A type of address at a school on a device", "A password for a task in use", "A file sent with the message"],
    answer: "A file sent with the message",
    explanation: "Attachments are files.",
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
    prompt: "Which is a benefit of e-mail?",
    options: ["It is slow in a file on a system", "It costs a lot for a user", "It is fast and cheap", "It needs a stamp in a lab"],
    answer: "It is fast and cheap",
    explanation: "E-mail saves time and money.",
  },
  {
    prompt: "What should you do before you send an angry message?",
    options: ["Wait and reread it", "Send it at once", "Add capitals", "Send it to everyone"],
    answer: "Wait and reread it",
    explanation: "A sent message cannot be called back.",
  },
];

const ECommunicationEmailNetiquette = () => (
  <CapsSubjectTopic
    title="E-communication, E-mail and Netiquette"
    subtitle="Tools for electronic communication, using e-mail well, netiquette, and the benefits of e-communication"
    learnSteps={learnSteps}
    task="gr10-e-communication-email-netiquette-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default ECommunicationEmailNetiquette;
