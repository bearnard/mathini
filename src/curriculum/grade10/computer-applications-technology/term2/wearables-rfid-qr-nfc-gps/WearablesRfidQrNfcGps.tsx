import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a wearable?",
    options: ["A kind of cable in a file", "A type of server for a user", "A virus", "A device you wear"],
    answer: "A device you wear",
    explanation: "For example a smartwatch.",
  },
  {
    prompt: "Which is a wearable?",
    options: ["A fitness tracker", "A desktop PC for a user", "A router in a lab for a task", "A printer on a system"],
    answer: "A fitness tracker",
    explanation: "It is worn on the body.",
  },
  {
    prompt: "What does a fitness tracker count?",
    options: ["Pages printed for a task", "Files saved in a program", "Steps and heart rate", "Emails sent on a device"],
    answer: "Steps and heart rate",
    explanation: "It measures activity.",
  },
  {
    prompt: "How does RFID send data?",
    options: ["By ink to paper", "By cable to a plug", "By sound to a speaker", "By radio to a reader"],
    answer: "By radio to a reader",
    explanation: "No line of sight is needed.",
  },
  {
    prompt: "Which stores data on a swiped strip?",
    options: ["A magnetic strip", "A QR code on a device", "A bar code in use for a user", "An RFID tag at work"],
    answer: "A magnetic strip",
    explanation: "The strip is magnetic.",
  },
  {
    prompt: "What does a till read to find a product?",
    options: ["A password", "A bar code", "A cable", "A screen"],
    answer: "A bar code",
    explanation: "It holds a number.",
  },
  {
    prompt: "What can a QR code hold?",
    options: ["A web address", "A hot drink for a task", "A heavy box in a program", "A loud sound on a device"],
    answer: "A web address",
    explanation: "A phone camera reads it.",
  },
  {
    prompt: "What reads a QR code?",
    options: ["A mouse", "A printer on a system", "A phone camera", "A cable"],
    answer: "A phone camera",
    explanation: "Phones scan QR codes.",
  },
  {
    prompt: "What is NFC?",
    options: ["Near field communication", "New file copy on a system in a program", "Network file cable at a school", "Name for computers for a task"],
    answer: "Near field communication",
    explanation: "It works at very short range.",
  },
  {
    prompt: "Which uses NFC?",
    options: ["Sending a letter in a program", "Reading a book on a device", "Drawing a map in use for a user", "Tapping a card to pay"],
    answer: "Tapping a card to pay",
    explanation: "The card must be close.",
  },
  {
    prompt: "What does GPS do?",
    options: ["Finds position using satellites", "Prints maps in use for a user", "Makes calls at work in a lab", "Stores files in a file on a system"],
    answer: "Finds position using satellites",
    explanation: "GPS gives location.",
  },
  {
    prompt: "Which has the shortest range?",
    options: ["Wi-Fi", "Bluetooth", "NFC", "4G"],
    answer: "NFC",
    explanation: "NFC works only very near.",
  },
  {
    prompt: "Which links earphones to a phone?",
    options: ["A cable only", "Bluetooth", "A printer", "Satellite"],
    answer: "Bluetooth",
    explanation: "Bluetooth is short range.",
  },
  {
    prompt: "What does Wi-Fi do?",
    options: ["Links devices to a network", "Prints pages in a file on a system", "Stores files for a user at a school", "Draws maps in a lab for a task"],
    answer: "Links devices to a network",
    explanation: "It covers a building or area.",
  },
];

const WearablesRfidQrNfcGps = () => (
  <CapsSubjectTopic
    title="Wearables, Codes, NFC, GPS and Communication Channels"
    subtitle="Wearable devices, RFID, magnetic strips, bar codes and QR codes, NFC, GPS, and the channels devices use to communicate"
    learnSteps={learnSteps}
    task="gr10-wearables-rfid-qr-nfc-gps-t2"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={10}
  />
);

export default WearablesRfidQrNfcGps;
