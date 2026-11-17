import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a personal hotspot?",
    options: ["A public Wi-Fi in a shop in use", "A kind of cable at work in a lab", "Your phone sharing its data", "A type of screen in a file on a system"],
    answer: "Your phone sharing its data",
    explanation: "Other devices join your phone.",
  },
  {
    prompt: "What is a risk of a public hotspot?",
    options: ["It is too fast in a program at work", "It has no signal on a device in a file", "Others may read what you send", "It needs no password in use for a user"],
    answer: "Others may read what you send",
    explanation: "Be careful with passwords.",
  },
  {
    prompt: "What is Bluetooth used for?",
    options: ["Short range links", "Very long links", "Sending e-mail by post", "Printing posters"],
    answer: "Short range links",
    explanation: "Earphones and speakers use it.",
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
    prompt: "Which is faster?",
    options: ["4G", "3G", "2G", "5G"],
    answer: "5G",
    explanation: "5G is faster than 4G.",
  },
  {
    prompt: "What does GPS do?",
    options: ["Finds position using satellites", "Prints maps in use for a user", "Makes calls at work in a lab", "Stores files in a file on a system"],
    answer: "Finds position using satellites",
    explanation: "GPS gives location.",
  },
  {
    prompt: "Which uses GPS?",
    options: ["A calculator", "A map app", "A text editor", "A clock"],
    answer: "A map app",
    explanation: "Maps need your position.",
  },
  {
    prompt: "What is a risk of location sharing?",
    options: ["A brighter screen in a program at work", "A longer cable on a device in a file", "Others may track your movements", "A quieter fan in use for a user"],
    answer: "Others may track your movements",
    explanation: "Location is personal.",
  },
  {
    prompt: "How can you control location sharing?",
    options: ["Switch it off for apps", "Share it with every app", "Share it on paper notes", "Share it by a cable"],
    answer: "Switch it off for apps",
    explanation: "Allow only what is needed.",
  },
  {
    prompt: "What is a mobile app?",
    options: ["A kind of cable in a lab for a task", "A type of screen on a system in a program", "A program on a phone or tablet", "A printer at a school on a device"],
    answer: "A program on a phone or tablet",
    explanation: "It is installed on the device.",
  },
  {
    prompt: "Where should you install apps from?",
    options: ["Any link in a message", "A trusted app store", "A stranger", "A flash drive found in the street"],
    answer: "A trusted app store",
    explanation: "Trusted stores check apps.",
  },
  {
    prompt: "Why read an app's permissions?",
    options: ["It is a joke for a user at a school", "It is a price in a lab for a task", "It is a name on a system in a program", "It may ask for more than it needs"],
    answer: "It may ask for more than it needs",
    explanation: "Permissions show what the app can access.",
  },
  {
    prompt: "Why keep apps updated?",
    options: ["Updates delete files on a system in a program", "Updates fix faults and weaknesses", "Updates add adverts at a school on a device", "Updates slow phones for a task in use"],
    answer: "Updates fix faults and weaknesses",
    explanation: "Old apps are easier to attack.",
  },
];

const WirelessNfcGpsMobileApps = () => (
  <CapsSubjectTopic
    title="Hotspots, Bluetooth, NFC, GPS, 4G and 5G, and Mobile Apps"
    subtitle="Wireless technologies for mobile devices, location services, and installing and using mobile apps"
    learnSteps={learnSteps}
    task="gr11-wireless-nfc-gps-mobile-apps-t3"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={11}
  />
);

export default WirelessNfcGpsMobileApps;
