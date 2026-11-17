import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a network?",
    options: ["A single computer on a desk", "A kind of display screen", "Linked devices", "A type of data file"],
    answer: "Linked devices",
    explanation: "Networks link devices.",
  },
  {
    prompt: "Which is a reason for using a network?",
    options: ["Filling a desk at work", "Making noise in a file", "Slowing work for a user", "Sharing a printer"],
    answer: "Sharing a printer",
    explanation: "Sharing saves cost.",
  },
  {
    prompt: "What is a node?",
    options: ["A kind of cable in a program", "A password on a device in a file", "A device on a network", "A web page in use for a user"],
    answer: "A device on a network",
    explanation: "Printers and servers are nodes.",
  },
  {
    prompt: "What does a NIC do?",
    options: ["Connects a node to a network", "Prints a page in a file on a system", "Stores a file for a user at a school", "Cools a case in a lab for a task"],
    answer: "Connects a node to a network",
    explanation: "NIC means network interface card.",
  },
  {
    prompt: "What does a switch do?",
    options: ["Joins two networks on a system", "Joins devices on a network", "Stores files at a school on a device", "Cools a server for a task in use"],
    answer: "Joins devices on a network",
    explanation: "A router joins networks.",
  },
  {
    prompt: "What does a router do?",
    options: ["Joins a mouse on a system", "Joins networks", "Prints pages at a school", "Draws icons for a task"],
    answer: "Joins networks",
    explanation: "It connects networks.",
  },
  {
    prompt: "What is the fastest wired medium over long distance?",
    options: ["UTP", "Infrared", "Fibre optic", "A telephone line"],
    answer: "Fibre optic",
    explanation: "Fibre uses light.",
  },
  {
    prompt: "Which is a wireless medium?",
    options: ["UTP cable", "Fibre optic cable", "Radio waves", "Coaxial cable"],
    answer: "Radio waves",
    explanation: "Wi-Fi uses radio waves.",
  },
  {
    prompt: "What is a PAN?",
    options: ["A network in a country for a task", "A network in a school in a program", "A network of cities on a device", "A network around one person"],
    answer: "A network around one person",
    explanation: "PAN means personal area network.",
  },
  {
    prompt: "What is a LAN?",
    options: ["A network across the world", "A network in a pocket", "A network in space", "A network in one building"],
    answer: "A network in one building",
    explanation: "LAN means local area network.",
  },
  {
    prompt: "What is a WAN?",
    options: ["A network around one person", "A network in a room", "A network of cables only", "A network over a wide area"],
    answer: "A network over a wide area",
    explanation: "The Internet is a WAN.",
  },
  {
    prompt: "What does a client-server network have?",
    options: ["No server in a file", "A central server", "No clients for a user", "No cables in a lab for a task"],
    answer: "A central server",
    explanation: "Clients use the server.",
  },
  {
    prompt: "What is peer-to-peer?",
    options: ["A central server runs all", "A kind of cable", "Computers share directly", "A type of screen"],
    answer: "Computers share directly",
    explanation: "No central server is needed.",
  },
  {
    prompt: "Which suits a large school network?",
    options: ["Client-server", "Peer-to-peer", "A single laptop", "A paper list"],
    answer: "Client-server",
    explanation: "A server gives control.",
  },
];

const NetworksOverview = () => (
  <CapsSubjectTopic
    title="Networks: An Overview"
    subtitle="Why we use networks, their components and media, PAN, HAN, LAN and WAN, and client-server and peer-to-peer"
    learnSteps={learnSteps}
    task="gr10-networks-overview-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default NetworksOverview;
