import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does artificial intelligence do?",
    options: ["Stores files on a distant server", "Does tasks needing human thought", "Cools the processor of a computer", "Connects two separate networks"],
    answer: "Does tasks needing human thought",
    explanation: "AI performs tasks such as recognising speech or faces.",
  },
  {
    prompt: "How does an AI system learn?",
    options: ["From one fixed printed instruction", "From patterns in large data sets", "From a manual kept in a drawer", "From the colour of the screen"],
    answer: "From patterns in large data sets",
    explanation: "AI is trained on large data sets and finds patterns.",
  },
  {
    prompt: "Which is a use of AI?",
    options: ["Printing a page of plain text", "Flagging an odd bank payment", "Charging the battery of a phone", "Installing a cable in a wall"],
    answer: "Flagging an odd bank payment",
    explanation: "Fraud detection compares payments with normal patterns.",
  },
  {
    prompt: "Which is an advantage of AI?",
    options: ["It needs no data to work well", "It understands meaning like a person", "It finds patterns in huge data sets", "It cannot make a single mistake"],
    answer: "It finds patterns in huge data sets",
    explanation: "AI is fast and finds patterns people miss.",
  },
  {
    prompt: "Which is a disadvantage of AI?",
    options: ["It makes the data much larger", "Some jobs may be lost to it", "It lowers the screen size", "It slows the keyboard down"],
    answer: "Some jobs may be lost to it",
    explanation: "AI automation can replace some work.",
  },
  {
    prompt: "Which is a limitation of AI?",
    options: ["It works without any power supply", "It is only as good as its data", "It is right in every situation", "It has the common sense of a person"],
    answer: "It is only as good as its data",
    explanation: "Poor or biased data leads to poor or biased results.",
  },
  {
    prompt: "An AI is trained on photos of mostly one group of people. What problem may follow?",
    options: ["A faster processor in the device", "A larger screen on the device", "Lower electricity use at night", "Bias, as it fails for some"],
    answer: "Bias, as it fails for some",
    explanation: "Biased training data gives biased results.",
  },
  {
    prompt: "Why should a person check an important AI decision?",
    options: ["AI gives the same answer each time", "AI can be wrong yet sound sure", "AI does not use data to decide", "A person is not needed to decide"],
    answer: "AI can be wrong yet sound sure",
    explanation: "AI can give a confident but wrong answer.",
  },
  {
    prompt: "What does virtual reality (VR) do?",
    options: ["Adds labels to the real view", "Prints objects in three dimensions", "Stores your data in the cloud", "Puts you inside a made-up world"],
    answer: "Puts you inside a made-up world",
    explanation: "VR replaces the real view with a virtual one.",
  },
  {
    prompt: "What does augmented reality (AR) do?",
    options: ["Replaces the real world completely", "Connects two computers together", "Compresses a long video file", "Adds digital data to the real view"],
    answer: "Adds digital data to the real view",
    explanation: "In AR you still see the real world, with extra information.",
  },
  {
    prompt: "Which describes mixed reality (MR)?",
    options: ["A fully virtual world and nothing else", "A text message service for phones", "Digital objects that react to a room", "A type of printer for offices"],
    answer: "Digital objects that react to a room",
    explanation: "MR blends virtual objects with the real world so that they interact.",
  },
  {
    prompt: "Which is an example of AR?",
    options: ["A phone app showing a chair at home", "A flight simulator seen in a headset", "A voice assistant on a speaker", "A spreadsheet of monthly sales"],
    answer: "A phone app showing a chair at home",
    explanation: "The phone camera view is real, with a digital chair added.",
  },
  {
    prompt: "Which hardware is typical for VR?",
    options: ["A photocopier for use in an office", "A router for use in a home network", "A headset with sensors", "A scanner for use on printed pages"],
    answer: "A headset with sensors",
    explanation: "VR needs a headset and tracking, often with a strong graphics card.",
  },
  {
    prompt: "Which is a limitation of VR?",
    options: ["Cost and motion sickness", "It needs no hardware to work", "It has no uses at school", "It works without electricity"],
    answer: "Cost and motion sickness",
    explanation: "Cost, motion sickness and short battery life limit VR.",
  },
];

const AiVrArMr = () => (
  <CapsSubjectTopic
    title="AI, VR, AR and MR"
    subtitle="What artificial intelligence is used for and where it falls short, and virtual, augmented and mixed reality"
    learnSteps={learnSteps}
    task="gr12-ai-vr-ar-mr-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default AiVrArMr;
