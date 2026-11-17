import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does GIGO mean?",
    options: ["Good data in, good data out", "Bad data in, bad data out", "A kind of graphics card chip", "A type of backup copy kept"],
    answer: "Bad data in, bad data out",
    explanation: "GIGO stands for garbage in, garbage out.",
  },
  {
    prompt: "Which is human error?",
    options: ["A hard drive failing", "A fire in a room", "Typing a wrong price", "A virus attack"],
    answer: "Typing a wrong price",
    explanation: "A person made the mistake.",
  },
  {
    prompt: "Which is a physical threat?",
    options: ["A stolen laptop", "A fake email sent", "A wrong figure typed", "A slow network link"],
    answer: "A stolen laptop",
    explanation: "Theft is a physical threat.",
  },
  {
    prompt: "Which is a hardware failure?",
    options: ["A storage drive stops", "A password is guessed", "A phishing email arrives", "A user types a wrong date"],
    answer: "A storage drive stops",
    explanation: "Hardware can break down.",
  },
  {
    prompt: "What does a virus do?",
    options: ["Looks like useful software", "Spreads when a file opens", "Locks the files for money", "Records every key typed"],
    answer: "Spreads when a file opens",
    explanation: "A virus attaches itself to files.",
  },
  {
    prompt: "What is a worm?",
    options: ["Malware that needs a file opened", "A fake email sender", "Malware that spreads by itself", "A kind of backup"],
    answer: "Malware that spreads by itself",
    explanation: "A worm moves across a network on its own.",
  },
  {
    prompt: "What is a Trojan?",
    options: ["Software that spreads alone", "Harmful code in a useful app", "Software that locks the files", "Software that cleans a disk"],
    answer: "Harmful code in a useful app",
    explanation: "A Trojan hides harmful code in a useful-looking program.",
  },
  {
    prompt: "What is ransomware?",
    options: ["Records the keys you type", "A kind of backup copy", "A kind of firewall tool", "Locks files until paid"],
    answer: "Locks files until paid",
    explanation: "Victims are asked to pay to get their files back.",
  },
  {
    prompt: "What is a keylogger?",
    options: ["Software that cools a PC", "Software that logs typing", "A kind of connecting cable", "A type of display monitor"],
    answer: "Software that logs typing",
    explanation: "It can capture passwords.",
  },
  {
    prompt: "What is spyware?",
    options: ["Software that makes backups", "Software that spies on you", "Software that prints pages", "Software that speeds a disk"],
    answer: "Software that spies on you",
    explanation: "Spyware sends information to someone else.",
  },
  {
    prompt: "What is pharming?",
    options: ["Redirecting to a fake site", "Locking files until you pay", "Recording the keys you press", "Backing up a disk each night"],
    answer: "Redirecting to a fake site",
    explanation: "The user is redirected to a fake site.",
  },
  {
    prompt: "What is phishing?",
    options: ["A fast kind of backup copy", "A fake trick message", "A kind of RAM memory chip", "A network cable for a lab"],
    answer: "A fake trick message",
    explanation: "Phishing asks for details through a fake message.",
  },
  {
    prompt: "Which protects against power failure?",
    options: ["A CAPTCHA", "A UPS", "A firewall", "A keylogger"],
    answer: "A UPS",
    explanation: "A UPS gives time to save and shut down.",
  },
  {
    prompt: "What does a CAPTCHA help to stop?",
    options: ["Power cuts", "Slow disks", "Dusty keyboards", "Automated bots"],
    answer: "Automated bots",
    explanation: "It checks that a user is a person.",
  },
];

const ComputerManagementThreats = () => (
  <CapsSubjectTopic
    title="Computer Management: Threats and Remedies"
    subtitle="Human error, physical threats, hardware failure, malware, social engineering and their remedies"
    learnSteps={learnSteps}
    task="gr11-computer-management-threats-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default ComputerManagementThreats;
