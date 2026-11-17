import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is cybercrime?",
    options: ["Crime done with computers", "Any crime done in an office", "A crime that happens at night", "A crime that leaves no trace"],
    answer: "Crime done with computers",
    explanation: "Cybercrime is carried out with computers or against them.",
  },
  {
    prompt: "What does a hacker (threat actor) do?",
    options: ["Enters a system uninvited", "Tests a system with permission", "Repairs a broken keyboard now", "Sells new computers to firms"],
    answer: "Enters a system uninvited",
    explanation: "A hacker gets into a system without the owner's permission.",
  },
  {
    prompt: "What is a cracker in the CAPS?",
    options: ["A criminal who steals identities", "A hacker with permission", "A person who sells stolen goods", "A person who prints false money"],
    answer: "A hacker with permission",
    explanation: "The CAPS describes a cracker as an ethical hacker.",
  },
  {
    prompt: "What is a cyber gang?",
    options: ["An organised crime group", "A group of friends at school", "A club that repairs computers", "A team that sells printers"],
    answer: "An organised crime group",
    explanation: "Cyber gangs organise crime online, often for money.",
  },
  {
    prompt: "What does a virus author do?",
    options: ["Cleans a hard drive daily", "Installs a new network cable", "Writes malicious software", "Updates a web browser"],
    answer: "Writes malicious software",
    explanation: "Virus authors write software meant to cause harm.",
  },
  {
    prompt: "What is identity theft?",
    options: ["Losing your own password at home", "Changing your own user name now", "Using another person's details", "Buying a new phone online"],
    answer: "Using another person's details",
    explanation: "Criminals pretend to be the victim to get money or services.",
  },
  {
    prompt: "Using a neighbour's Wi-Fi without permission is which crime?",
    options: ["Bandwidth theft", "Hardware theft crime", "Software theft crime", "Identity theft crime"],
    answer: "Bandwidth theft",
    explanation: "It uses someone else's internet capacity without permission.",
  },
  {
    prompt: "Which is theft of time and services?",
    options: ["Stealing a laptop from a shop", "Copying a licensed program", "Using a stolen password", "Private use of work computers"],
    answer: "Private use of work computers",
    explanation: "Private use of an employer's equipment costs the employer time and services.",
  },
  {
    prompt: "What is a worm?",
    options: ["A cable that links two rooms", "A program that tidies a disk", "Malware that spreads by itself", "A fake email asking for details"],
    answer: "Malware that spreads by itself",
    explanation: "Worms copy themselves across networks without a user's help.",
  },
  {
    prompt: "What is a denial-of-service attack?",
    options: ["Flooding a service with requests", "Stealing a password from a user", "Copying a file to a flash drive", "Sending a polite email to a bank"],
    answer: "Flooding a service with requests",
    explanation: "The service is overloaded with requests so real users are locked out.",
  },
  {
    prompt: "What is a back door?",
    options: ["A door at the back of a server room", "A backup stored at another site", "A hidden way in that skips login", "A slow network cable in a room"],
    answer: "A hidden way in that skips login",
    explanation: "A back door lets someone enter without the normal login.",
  },
  {
    prompt: "Which is phishing?",
    options: ["A cable that tests a network", "A program that cleans a disk", "A fake message for details", "A backup made during the night"],
    answer: "A fake message for details",
    explanation: "Phishing messages pretend to come from a trusted source.",
  },
  {
    prompt: "What is a botnet?",
    options: ["A network of school computers", "A shop that sells small robots", "Infected PCs run remotely", "A fast router for a home"],
    answer: "Infected PCs run remotely",
    explanation: "The infected computers are called zombies.",
  },
  {
    prompt: "Which is a safeguard against cybercrime?",
    options: ["Sharing a password with a friend", "Clicking links in unknown email", "Strong passwords and anti-malware", "Switching off your backups for good"],
    answer: "Strong passwords and anti-malware",
    explanation: "Several safeguards together reduce the risk.",
  },
];

const ComputerCriminalsCybercrime = () => (
  <CapsSubjectTopic
    title="Computer Criminals and Cybercrime"
    subtitle="Who commits cybercrime, the types and effects, attacks described, and safeguards"
    learnSteps={learnSteps}
    task="gr12-computer-criminals-cybercrime-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default ComputerCriminalsCybercrime;
