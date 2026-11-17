import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a PAN?",
    options: ["A network round one person", "A network across a country", "A network inside a school", "A network of satellites"],
    answer: "A network round one person",
    explanation: "PAN stands for personal area network.",
  },
  {
    prompt: "What is a HAN?",
    options: ["A network of cities", "A network in a home", "A network of countries", "A network in space"],
    answer: "A network in a home",
    explanation: "HAN stands for home area network.",
  },
  {
    prompt: "What is a LAN?",
    options: ["A network across the world", "A network inside a pocket", "A network of the planets", "A network in one building"],
    answer: "A network in one building",
    explanation: "LAN stands for local area network.",
  },
  {
    prompt: "Which is a WAN?",
    options: ["A phone and earphones", "A home printer link", "The Internet", "A single cable"],
    answer: "The Internet",
    explanation: "A WAN covers a very wide area.",
  },
  {
    prompt: "Which network is the smallest?",
    options: ["LAN", "WAN", "PAN", "HAN"],
    answer: "PAN",
    explanation: "A PAN covers one person.",
  },
  {
    prompt: "What is VoIP?",
    options: ["A type of video game", "A type of display screen", "A cable for a mouse", "Voice calls over the Net"],
    answer: "Voice calls over the Net",
    explanation: "VoIP stands for voice over Internet protocol.",
  },
  {
    prompt: "What is an intranet?",
    options: ["The public Internet for all", "A satellite link to a dish", "A firm's own network", "A kind of laser printer"],
    answer: "A firm's own network",
    explanation: "Only members of the organisation can use it.",
  },
  {
    prompt: "What is an extranet?",
    options: ["The public Internet for all", "A network inside one home", "Part of an intranet shared", "A network made of cables"],
    answer: "Part of an intranet shared",
    explanation: "An extranet shares part of a private network.",
  },
  {
    prompt: "What does a VPN do?",
    options: ["Protects an Internet link", "Prints encrypted pages", "Cools the router for a day", "Speeds up the screen"],
    answer: "Protects an Internet link",
    explanation: "A VPN encrypts the connection.",
  },
  {
    prompt: "What is location-based computing?",
    options: ["Services that need no power", "Services only for printers", "Services with no screen", "Services based on place"],
    answer: "Services based on place",
    explanation: "Services use GPS or network position.",
  },
  {
    prompt: "Which is a location-based app?",
    options: ["A traffic app", "A calculator", "A text editor", "A clock"],
    answer: "A traffic app",
    explanation: "A traffic app uses your position.",
  },
  {
    prompt: "Which is a social risk of location sharing?",
    options: ["Others may track your trips", "The screen gets a lot brighter", "The battery gets a lot bigger", "The cable gets a lot longer"],
    answer: "Others may track your trips",
    explanation: "Location data can reveal where you go.",
  },
  {
    prompt: "What does an acceptable use policy set?",
    options: ["Rules for network use", "The price of a new phone", "The size of a screen", "The colour of a cable"],
    answer: "Rules for network use",
    explanation: "An AUP says what is allowed on the network.",
  },
  {
    prompt: "Which would an AUP forbid at a school?",
    options: ["Homework done in a lab", "Notes read from a screen", "Games played in lessons", "A file saved to a folder"],
    answer: "Games played in lessons",
    explanation: "Many schools forbid games during lessons.",
  },
];

const NetworkInnovation = () => (
  <CapsSubjectTopic
    title="Network Types, Innovation and Location-Based Computing"
    subtitle="PAN, HAN, LAN and WAN, VoIP, intranet and extranet, VPN, location-based computing and acceptable use"
    learnSteps={learnSteps}
    task="gr11-network-innovation-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default NetworkInnovation;
