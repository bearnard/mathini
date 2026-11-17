import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does a switch do?",
    options: ["Joins a network to the Internet", "Sends data to the right device", "Stores a shared file", "Plays a sound"],
    answer: "Sends data to the right device",
    explanation: "A switch passes data between devices on a local network.",
  },
  {
    prompt: "What does a router do?",
    options: ["Joins networks together", "Joins two cables inside a wall", "Stores all of a user's files", "Prints a map of the network"],
    answer: "Joins networks together",
    explanation: "A router sends data between networks.",
  },
  {
    prompt: "What is a wireless base station for?",
    options: ["Cleaning the dust off a cable", "Printing pages for a whole class", "Letting devices join by radio", "Charging the battery of a laptop"],
    answer: "Letting devices join by radio",
    explanation: "It is an access point for Wi-Fi.",
  },
  {
    prompt: "What is an all-in-one router?",
    options: ["A cable made of four colours", "One box doing four jobs", "A very fast hard disk drive", "A cloud service for storage"],
    answer: "One box doing four jobs",
    explanation: "It combines modem, router, switch and base station.",
  },
  {
    prompt: "Which connection is fast and stable where a cable is laid?",
    options: ["Satellite", "Fibre", "Wi-Fi to a phone", "Infrared"],
    answer: "Fibre",
    explanation: "Fibre uses light in a cable for very fast speeds.",
  },
  {
    prompt: "Which connection suits a remote area with no cables?",
    options: ["Fibre cable", "Ethernet cable", "Satellite link", "Network switch"],
    answer: "Satellite link",
    explanation: "Satellite reaches remote areas, with more delay.",
  },
  {
    prompt: "Which is a mobile network standard?",
    options: ["HTTP", "USB", "HTML", "5G"],
    answer: "5G",
    explanation: "4G and 5G are cellular networks.",
  },
  {
    prompt: "What is Wi-Fi?",
    options: ["A wireless link to a router", "A cable that runs to a provider", "A website address for a school", "A type of computer memory"],
    answer: "A wireless link to a router",
    explanation: "Wi-Fi links devices to a router without cables.",
  },
  {
    prompt: "What do user rights on a shared folder decide?",
    options: ["What colour the folder looks", "How big the disk is in use", "Which provider supplies the line", "Who may read or change files"],
    answer: "Who may read or change files",
    explanation: "Rights limit what each user can do.",
  },
  {
    prompt: "Which is a benefit of an online storage service?",
    options: ["Files cannot be shared", "Files are stored on one computer only", "Files can be reached from any device", "Files need no login"],
    answer: "Files can be reached from any device",
    explanation: "Online storage lets users share and reach files anywhere.",
  },
  {
    prompt: "Which is a risk of BitTorrent file sharing?",
    options: ["Smaller sizes for all files", "Faster screens on laptops", "Quieter fans in computers", "Malware inside shared files"],
    answer: "Malware inside shared files",
    explanation: "Shared files may carry malware or break copyright.",
  },
  {
    prompt: "What is remote access?",
    options: ["Cleaning a keyboard with a cloth", "Plugging in a printer cable", "Saving a file on a local disk", "Using a computer from afar"],
    answer: "Using a computer from afar",
    explanation: "The user works on a computer without being next to it.",
  },
  {
    prompt: "What does a VPN do?",
    options: ["Speeds up the processor inside", "Prints encrypted pages for a user", "Cools the router during a day", "Protects the link on the Internet"],
    answer: "Protects the link on the Internet",
    explanation: "A VPN encrypts the connection.",
  },
  {
    prompt: "Which is true of a VPN?",
    options: ["It removes every virus found", "It protects the link only", "It doubles the speed of a line", "It replaces the need for a password"],
    answer: "It protects the link only",
    explanation: "A VPN does not stop malware on the device.",
  },
];

const NetworkPartsInternetAccess = () => (
  <CapsSubjectTopic
    title="Network Parts and Internet Access"
    subtitle="Switch, router and modem, ways to connect, sharing files, and remote access with a VPN"
    learnSteps={learnSteps}
    task="gr12-network-parts-internet-access-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default NetworkPartsInternetAccess;
