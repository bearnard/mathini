import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which describes the gig economy?",
    options: ["One steady job for life for a task", "Work in short jobs found online", "Work done for no pay in a program at work", "Work done only at night on a device"],
    answer: "Work in short jobs found online",
    explanation: "Gigs are found through platforms.",
  },
  {
    prompt: "Which person is working a gig?",
    options: ["A permanent teacher post in a file", "A delivery job paid per trip", "A bank manager post for a user at a school", "A full-time clerk post in a lab"],
    answer: "A delivery job paid per trip",
    explanation: "Gigs are paid per job.",
  },
  {
    prompt: "What is decentralised work?",
    options: ["Work done in one office in use", "Work done in many places", "Work done on paper at work in a lab", "Work done by one person in a file"],
    answer: "Work done in many places",
    explanation: "Technology lets people work anywhere.",
  },
  {
    prompt: "Which is a benefit of gig work?",
    options: ["A guaranteed salary", "Flexible hours", "A pension", "Paid leave"],
    answer: "Flexible hours",
    explanation: "Gig workers choose their time.",
  },
  {
    prompt: "Which is a drawback of gig work?",
    options: ["A fixed wage on a system", "Paid leave at a school", "A pension for a task", "No steady salary"],
    answer: "No steady salary",
    explanation: "Income can be uncertain.",
  },
  {
    prompt: "What is phishing?",
    options: ["A kind of network cable", "A type of data file", "A fake lure message", "A fast kind of link"],
    answer: "A fake lure message",
    explanation: "A phishing message pretends to come from a trusted sender to get your details.",
  },
  {
    prompt: "What is pharming?",
    options: ["Sending users to a fake website", "Locking files in use for a user", "Recording keys at work in a lab", "Backing up a disk in a file on a system"],
    answer: "Sending users to a fake website",
    explanation: "The site looks real.",
  },
  {
    prompt: "Which is a warning sign of phishing?",
    options: ["A polite greeting only on a device in a file", "A known friend's voice in use for a user", "Urgent wording and strange links", "A printed letter at work in a lab"],
    answer: "Urgent wording and strange links",
    explanation: "Phishing creates pressure.",
  },
  {
    prompt: "Who asks for your password by e-mail?",
    options: ["Your bank in use for a user", "Your teacher at work in a lab", "Your friend in a file on a system", "No real organisation"],
    answer: "No real organisation",
    explanation: "Real organisations do not.",
  },
  {
    prompt: "What should you do with a suspicious link?",
    options: ["Click it at once", "Not click it", "Forward it to friends", "Print it on paper"],
    answer: "Not click it",
    explanation: "Do not click a suspicious link, because it may lead to a fake site or malware.",
  },
  {
    prompt: "How can you avoid fake links?",
    options: ["Click the first link in a file", "Reply to the sender for a user", "Type the address yourself", "Share the link in a lab for a task"],
    answer: "Type the address yourself",
    explanation: "Go to the site directly.",
  },
  {
    prompt: "What does the padlock show?",
    options: ["The site is honest in use for a user", "The site is fast at work in a lab", "The site is new in a file on a system", "The connection is encrypted"],
    answer: "The connection is encrypted",
    explanation: "It does not prove honesty.",
  },
  {
    prompt: "What does extra verification do?",
    options: ["Speeds up login on a system in a program", "Deletes the account at a school on a device", "Shares the password for a task in use", "Stops a thief with only your password"],
    answer: "Stops a thief with only your password",
    explanation: "A second proof is needed.",
  },
  {
    prompt: "What should you do with a phishing message?",
    options: ["Reply to it", "Open the link", "Keep clicking", "Report it"],
    answer: "Report it",
    explanation: "Reporting helps block it.",
  },
];

const GigEconomyPhishingPharming = () => (
  <CapsSubjectTopic
    title="The Gig Economy, Phishing and Pharming"
    subtitle="Decentralised work and the gig economy, and deception-based attacks (phishing and pharming) described, with how to avoid them"
    learnSteps={learnSteps}
    task="gr11-gig-economy-phishing-pharming-t3"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={11}
  />
);

export default GigEconomyPhishingPharming;
