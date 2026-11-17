import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is the Internet of Things?",
    options: ["Connected everyday devices", "A single computer in a lab for a task", "A kind of cable on a system in a program", "A type of screen at a school on a device"],
    answer: "Connected everyday devices",
    explanation: "IoT devices have sensors and a link.",
  },
  {
    prompt: "Which is an IoT example?",
    options: ["A paper map for a task", "A pencil in a program", "A smart thermostat", "A book"],
    answer: "A smart thermostat",
    explanation: "It connects and senses.",
  },
  {
    prompt: "What does IoT use to decide?",
    options: ["Data and AI", "A candle at work", "A broom", "A ruler"],
    answer: "Data and AI",
    explanation: "Data over time and AI decisions.",
  },
  {
    prompt: "Which supports IoT by storing data over time?",
    options: ["A candle", "Big data", "A pencil", "A ruler"],
    answer: "Big data",
    explanation: "Big data collects over time.",
  },
  {
    prompt: "What does the 4IR describe?",
    options: ["Tech changing life", "A kind of network cable", "A type of display screen", "A school in a town"],
    answer: "Tech changing life",
    explanation: "It joins physical and digital worlds.",
  },
  {
    prompt: "Which technology belongs to the 4IR?",
    options: ["Robotics", "A candle in a window", "A paper road map used", "A bicycle bell ringing"],
    answer: "Robotics",
    explanation: "Robots and AI are 4IR.",
  },
  {
    prompt: "What does VR do?",
    options: ["Adds labels to the real view", "Prints pages", "Stores files", "Puts you in a made-up world"],
    answer: "Puts you in a made-up world",
    explanation: "VR replaces the real view.",
  },
  {
    prompt: "What does AR do?",
    options: ["Replaces the real world on a device in a file", "Adds information to the real view", "Prints pages in use for a user", "Stores files at work in a lab"],
    answer: "Adds information to the real view",
    explanation: "The real world stays in view.",
  },
  {
    prompt: "Which is an example of AR?",
    options: ["A phone app placing a sofa in your room", "A flight simulator in a headset on a device", "A voice call in use for a user", "A spreadsheet at work in a lab"],
    answer: "A phone app placing a sofa in your room",
    explanation: "The camera view is real.",
  },
  {
    prompt: "Which is a use of VR?",
    options: ["Printing in a lab", "Pilot training", "Cooking", "Sweeping at a school"],
    answer: "Pilot training",
    explanation: "Simulators use VR.",
  },
  {
    prompt: "What is fake news?",
    options: ["False information made to look true", "True news at work in a lab", "A weather report in a file on a system", "A sports score for a user at a school"],
    answer: "False information made to look true",
    explanation: "It misleads readers.",
  },
  {
    prompt: "Which is bad practice with a shocking story?",
    options: ["Sharing it unchecked", "Checking the source first", "Looking for other reports", "Searching for the picture"],
    answer: "Sharing it unchecked",
    explanation: "Sharing an unchecked story helps false news to spread.",
  },
  {
    prompt: "Which is a good way to check a story?",
    options: ["Share it at once in use for a user", "Believe the headline at work in a lab", "Ignore the date in a file on a system", "Look for other reliable reports"],
    answer: "Look for other reliable reports",
    explanation: "Several sources should agree.",
  },
  {
    prompt: "What can a fact-checking site show?",
    options: ["The price of a phone in a program at work", "A recipe on a device in a file", "A timetable in use for a user", "Whether a claim or photo is true"],
    answer: "Whether a claim or photo is true",
    explanation: "It verifies content.",
  },
];

const IotFourIrVrArFakeNews = () => (
  <CapsSubjectTopic
    title="IoT, the Fourth Industrial Revolution, VR and AR, and Fake News"
    subtitle="The Internet of Things, what the 4IR is, virtual and augmented reality, and spotting fake news"
    learnSteps={learnSteps}
    task="gr11-iot-4ir-vr-ar-fake-news-t3"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={11}
  />
);

export default IotFourIrVrArFakeNews;
