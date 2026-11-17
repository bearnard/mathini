import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a virus?",
    options: ["A kind of cable on a device in a file", "A type of file in use for a user", "A fast screen at work in a lab", "A harmful program that spreads"],
    answer: "A harmful program that spreads",
    explanation: "Viruses can damage files.",
  },
  {
    prompt: "What is a hoax?",
    options: ["A false warning that people pass on", "A computer part on a device in a file", "A true news story in a program at work", "A kind of cable in use for a user"],
    answer: "A false warning that people pass on",
    explanation: "Hoaxes spread through sharing.",
  },
  {
    prompt: "What is fake news?",
    options: ["A true report at work in a lab", "False information made to look real", "A sports score in a file on a system", "A weather report for a user at a school"],
    answer: "False information made to look real",
    explanation: "It misleads readers.",
  },
  {
    prompt: "What is spam?",
    options: ["Unwanted bulk e-mail", "A secure password for a task", "A wanted letter at a school", "A kind of cable in a program"],
    answer: "Unwanted bulk e-mail",
    explanation: "Spam is sent in large numbers.",
  },
  {
    prompt: "What is phishing?",
    options: ["A kind of network cable", "A fake lure message", "A type of data file", "A fast kind of link"],
    answer: "A fake lure message",
    explanation: "Phishing tricks you into giving details.",
  },
  {
    prompt: "What is e-mail spoofing?",
    options: ["A message with a faked sender", "A message with a file in it", "A message with a picture in it", "A message with a link in it"],
    answer: "A message with a faked sender",
    explanation: "The sender's name is faked.",
  },
  {
    prompt: "What is pharming?",
    options: ["Printing a page in use for a user", "Sending a user to a fake website", "Deleting a file at work in a lab", "Closing a window in a file on a system"],
    answer: "Sending a user to a fake website",
    explanation: "The site looks real but is fake.",
  },
  {
    prompt: "What should you do with an attachment from a stranger?",
    options: ["Open it at once", "Forward it", "Not open it", "Print it"],
    answer: "Not open it",
    explanation: "It may carry a virus.",
  },
  {
    prompt: "What should you check before you click a link?",
    options: ["The colour of the page on a device", "The size of the file in use", "The sender and the link", "The time at work in a lab"],
    answer: "The sender and the link",
    explanation: "Fake links look real.",
  },
  {
    prompt: "Who should you give your password to by e-mail?",
    options: ["Your bank", "Your teacher", "A friend", "Nobody"],
    answer: "Nobody",
    explanation: "A real organisation never asks.",
  },
  {
    prompt: "Why should you not reply to spam?",
    options: ["It deletes the spam at a school on a device", "It saves time for a task in use", "It shows that your address is real", "It makes a backup in a program at work"],
    answer: "It shows that your address is real",
    explanation: "Replies bring more spam.",
  },
  {
    prompt: "What does POPIA stand for?",
    options: ["Public online privacy and internet act", "Protected online personal information account", "Protection of Personal Information Act", "Personal online protection index act"],
    answer: "Protection of Personal Information Act",
    explanation: "It is a South African law.",
  },
  {
    prompt: "What is the purpose of POPIA?",
    options: ["To make websites faster in a file on a system", "To sell personal data for a user at a school", "To protect personal information", "To ban e-mail in a lab for a task"],
    answer: "To protect personal information",
    explanation: "It sets rules for handling personal data.",
  },
  {
    prompt: "Which is personal information?",
    options: ["The weather", "A country's name", "A colour", "An ID number"],
    answer: "An ID number",
    explanation: "It identifies a person.",
  },
];

const EmailInternetThreatsPopia = () => (
  <CapsSubjectTopic
    title="E-mail and Internet Threats, Safe Use and POPIA"
    subtitle="Viruses, hoaxes, fake news, spam, phishing, spoofing and pharming described, safe e-mail and Internet use, and the purpose of POPIA"
    learnSteps={learnSteps}
    task="gr10-email-internet-threats-popia-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default EmailInternetThreatsPopia;
