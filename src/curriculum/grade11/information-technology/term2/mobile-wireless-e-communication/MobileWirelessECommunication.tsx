import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which style suits a text message to a friend?",
    options: ["Long and very formal", "Short and informal", "A legal letter style", "A printed report style"],
    answer: "Short and informal",
    explanation: "Channels such as SMS are usually informal.",
  },
  {
    prompt: "Which suits an e-mail to a principal?",
    options: ["A slang style", "Formal style", "Emoji symbols", "A voice note"],
    answer: "Formal style",
    explanation: "The audience decides the style.",
  },
  {
    prompt: "What is a mobile app?",
    options: ["A website in a browser", "A kind of cable for it", "An installed program", "A type of router box"],
    answer: "An installed program",
    explanation: "Apps are installed on the device.",
  },
  {
    prompt: "What is true of a mobile website?",
    options: ["It must be installed", "It opens in a browser", "It has no pages in it", "It needs a cable to run"],
    answer: "It opens in a browser",
    explanation: "A website is opened in the browser.",
  },
  {
    prompt: "What does GPS do?",
    options: ["Finds your position", "Sends the e-mail", "Cools down a phone", "Prints a map on paper"],
    answer: "Finds your position",
    explanation: "GPS gives the location of a device.",
  },
  {
    prompt: "Which is faster?",
    options: ["4G", "3G", "2G", "5G"],
    answer: "5G",
    explanation: "5G is the faster cellular standard.",
  },
  {
    prompt: "Which has the shortest range?",
    options: ["A Wi-Fi network", "Bluetooth", "A 4G cell network", "A 5G cell network"],
    answer: "Bluetooth",
    explanation: "Bluetooth is for short distances.",
  },
  {
    prompt: "What is an access point?",
    options: ["A kind of cable for it", "A Wi-Fi source device", "A type of laser printer", "A file type for text"],
    answer: "A Wi-Fi source device",
    explanation: "It lets wireless devices join a network.",
  },
  {
    prompt: "What is throttling?",
    options: ["Speeding up a connection", "Encrypting a message", "Printing a page", "Slowing a connection"],
    answer: "Slowing a connection",
    explanation: "A provider may throttle speed after a limit.",
  },
  {
    prompt: "What is shaping?",
    options: ["Deleting some of the traffic", "Printing some of the traffic", "Counting disks in a lab", "Giving some traffic priority"],
    answer: "Giving some traffic priority",
    explanation: "Traffic shaping controls how bandwidth is shared.",
  },
  {
    prompt: "Which protocol sends e-mail?",
    options: ["POP3", "SMTP", "IMAP", "VoIP"],
    answer: "SMTP",
    explanation: "SMTP stands for simple mail transfer protocol.",
  },
  {
    prompt: "Which protocol receives e-mail and lets you read it on several devices?",
    options: ["IMAP", "SMTP", "VoIP", "HTTP"],
    answer: "IMAP",
    explanation: "IMAP keeps mail on the server for many devices.",
  },
  {
    prompt: "What is a blockchain?",
    options: ["A kind of network cable", "A type of laser printer", "A slow kind of disk", "A shared linked record"],
    answer: "A shared linked record",
    explanation: "Each block holds a fingerprint of the one before it.",
  },
  {
    prompt: "What is multi-layer verification?",
    options: ["A longer password only", "A faster link to the Net", "A backup of the disk", "Two or more proofs of ID"],
    answer: "Two or more proofs of ID",
    explanation: "For example a password and a one-time code.",
  },
];

const MobileWirelessECommunication = () => (
  <CapsSubjectTopic
    title="Mobile and Wireless E-communication"
    subtitle="Mobile devices and apps, wireless technologies, connection speed, protocols, blockchain and data security"
    learnSteps={learnSteps}
    task="gr11-mobile-wireless-e-communication-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default MobileWirelessECommunication;
