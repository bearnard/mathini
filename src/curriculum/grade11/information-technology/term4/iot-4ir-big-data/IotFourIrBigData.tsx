import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is the Internet of Things (IoT)?",
    options: ["A single large computer", "Linked everyday devices", "A kind of network cable", "A type of display screen"],
    answer: "Linked everyday devices",
    explanation: "IoT devices have sensors and a connection.",
  },
  {
    prompt: "Which is an IoT device?",
    options: ["A paper road map", "A connected camera", "A pencil and ruler", "A printed school book"],
    answer: "A connected camera",
    explanation: "It sends data over the Internet.",
  },
  {
    prompt: "Which is a characteristic of IoT devices?",
    options: ["No power supply", "No software inside", "No data collected", "Sensors and a link"],
    answer: "Sensors and a link",
    explanation: "They sense, connect and share data.",
  },
  {
    prompt: "Which is an example of IoT in a home?",
    options: ["A candle on a shelf", "Lights run by an app", "A paper letter in a box", "A broom in a cupboard"],
    answer: "Lights run by an app",
    explanation: "Appliances can be controlled remotely.",
  },
  {
    prompt: "What can a connected car send?",
    options: ["Paper road maps", "Position and state", "A packet of food", "Heat to the driver"],
    answer: "Position and state",
    explanation: "Connected cars report data.",
  },
  {
    prompt: "What does 4IR join?",
    options: ["Two roads in a town", "Physical and digital", "Two schools in a town", "Two books on a shelf"],
    answer: "Physical and digital",
    explanation: "4IR uses technologies such as IoT and AI.",
  },
  {
    prompt: "Which is a 4IR technology?",
    options: ["A candle in a window", "A paper road map used", "Robotics and AI", "A bicycle bell ringing"],
    answer: "Robotics and AI",
    explanation: "AI is one of the technologies.",
  },
  {
    prompt: "What does 5IR stress?",
    options: ["Machines working on their own", "People working on their own", "People with machines", "Paper work in an office"],
    answer: "People with machines",
    explanation: "5IR keeps human skills at the centre.",
  },
  {
    prompt: "What is big data?",
    options: ["A small spreadsheet file", "Huge, fast data sets", "A paper file in a drawer", "A short note on a desk"],
    answer: "Huge, fast data sets",
    explanation: "Big data needs special tools.",
  },
  {
    prompt: "What does volume mean for big data?",
    options: ["A very large amount", "A loud kind of sound", "A kind of fast speed", "A kind of great value"],
    answer: "A very large amount",
    explanation: "Volume is the amount of data.",
  },
  {
    prompt: "What does velocity mean for big data?",
    options: ["Data that is very large", "Data that arrives fast", "Data of many kinds", "Data that is useful"],
    answer: "Data that arrives fast",
    explanation: "Velocity is the speed of data.",
  },
  {
    prompt: "What does variety mean for big data?",
    options: ["One single kind of data", "Data that is missing", "Many kinds of data", "Data that moves slowly"],
    answer: "Many kinds of data",
    explanation: "Numbers, text, images and sensor data.",
  },
  {
    prompt: "Which is a use of big data?",
    options: ["Printing a page of text", "Making a network cable", "Cooling a computer case", "Customer profiling"],
    answer: "Customer profiling",
    explanation: "Shops use data to learn what customers want.",
  },
  {
    prompt: "Which is a social implication of big data?",
    options: ["Brighter screens", "Privacy risk", "Longer cables", "Quieter fans"],
    answer: "Privacy risk",
    explanation: "Collecting data raises privacy questions.",
  },
];

const IotFourIrBigData = () => (
  <CapsSubjectTopic
    title="The Internet of Things, 4IR and Big Data"
    subtitle="What the Internet of Things is, the fourth and fifth industrial revolutions, big data and its four Vs, and the social implications"
    learnSteps={learnSteps}
    task="gr11-iot-4ir-big-data-t4"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default IotFourIrBigData;
