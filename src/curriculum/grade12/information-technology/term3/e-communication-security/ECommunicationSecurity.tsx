import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What makes a password strong?",
    options: ["It is a pet's name", "It is long and hard to guess", "It is the same for every site", "It is written on a note"],
    answer: "It is long and hard to guess",
    explanation: "Long, varied passwords are hard to guess.",
  },
  {
    prompt: "Why use a different password for each account?",
    options: ["It makes each login much faster", "One leak risks one account", "It stops every phishing attempt", "It removes any malware found"],
    answer: "One leak risks one account",
    explanation: "If one site leaks a password, other accounts stay safe.",
  },
  {
    prompt: "What is multi-layer verification?",
    options: ["A longer single password only", "A faster link to the Internet", "A backup of the hard disk", "Two or more proofs of ID"],
    answer: "Two or more proofs of ID",
    explanation: "It combines things such as a password and a code.",
  },
  {
    prompt: "Which is something you have?",
    options: ["A password you memorised", "A phone with a code", "A PIN you memorised", "A favourite colour you like"],
    answer: "A phone with a code",
    explanation: "A phone or card is something you possess.",
  },
  {
    prompt: "Which is something you are?",
    options: ["A password", "A one-time code", "A fingerprint", "A bank card"],
    answer: "A fingerprint",
    explanation: "Biometrics such as fingerprints identify the person.",
  },
  {
    prompt: "What is encryption?",
    options: ["Deleting data from a disk", "Copying data to a flash drive", "Printing data in colour", "Scrambling data using a key"],
    answer: "Scrambling data using a key",
    explanation: "Only someone with the right key can read the data.",
  },
  {
    prompt: "What is decryption?",
    options: ["Scrambling data with a key", "Deleting old files from a disk", "Unscrambling data with a key", "Copying files over a network"],
    answer: "Unscrambling data with a key",
    explanation: "Decryption restores the readable data.",
  },
  {
    prompt: "What is a blockchain?",
    options: ["A shared record of blocks", "A cable made of several blocks", "A type of printer for offices", "A timetable used at school"],
    answer: "A shared record of blocks",
    explanation: "Each block holds a fingerprint of the one before it.",
  },
  {
    prompt: "Why is a blockchain hard to change?",
    options: ["It is kept on one computer only", "An altered block breaks it", "It has no data stored in it", "It is printed on paper sheets"],
    answer: "An altered block breaks it",
    explanation: "The fingerprints no longer match if a block is altered.",
  },
  {
    prompt: "What does SSL protect?",
    options: ["Data between browser and site", "The screen from small scratches", "A battery from too much heat", "A printer from a paper jam"],
    answer: "Data between browser and site",
    explanation: "SSL encrypts the connection.",
  },
  {
    prompt: "In SSL, which key encrypts data sent to a website?",
    options: ["The public key", "The private key", "The screen key", "The shift key"],
    answer: "The public key",
    explanation: "The public key is shared openly and used to encrypt.",
  },
  {
    prompt: "In SSL, which key decrypts the data?",
    options: ["The private key", "The public key", "The password hint", "The tab key"],
    answer: "The private key",
    explanation: "The private key is kept secret by the website.",
  },
  {
    prompt: "What does a certificate show?",
    options: ["The site is very fast to load", "The site has no adverts on it", "The site is who it claims", "The site is new on the Web"],
    answer: "The site is who it claims",
    explanation: "A trusted authority issues it to prove identity.",
  },
  {
    prompt: "What does a firewall do?",
    options: ["Removes every virus it finds", "Doubles the Internet speed", "Blocks unruled traffic", "Backs up the user's files"],
    answer: "Blocks unruled traffic",
    explanation: "A firewall filters incoming and outgoing traffic.",
  },
];

const ECommunicationSecurity = () => (
  <CapsSubjectTopic
    title="E-communication Security"
    subtitle="Passwords and multi-layer verification, encryption and blockchain, SSL with keys and certificates, and firewalls"
    learnSteps={learnSteps}
    task="gr12-e-communication-security-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default ECommunicationSecurity;
