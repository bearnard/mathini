import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is cloud computing?",
    options: ["Using a single computer for a task in use", "Using a printer in a program at work", "Using a cable on a device in a file", "Using services over the Internet"],
    answer: "Using services over the Internet",
    explanation: "A provider owns the servers.",
  },
  {
    prompt: "Where are cloud files kept?",
    options: ["Only on your desk in use for a user", "On a phone case at work in a lab", "On a provider's servers", "In a cable in a file on a system"],
    answer: "On a provider's servers",
    explanation: "They are on real servers.",
  },
  {
    prompt: "Which is an advantage of the cloud?",
    options: ["Files reachable from anywhere", "It needs no power to run", "It can fail in no case at all", "It needs no data to use"],
    answer: "Files reachable from anywhere",
    explanation: "Cloud files follow you.",
  },
  {
    prompt: "Which is a disadvantage of the cloud?",
    options: ["It has no files in use for a user", "It needs an Internet connection", "It has no users at work in a lab", "It has no power in a file on a system"],
    answer: "It needs an Internet connection",
    explanation: "Offline you may not reach files.",
  },
  {
    prompt: "What is a cloud application?",
    options: ["A paper form at work in a lab", "A kind of cable in a file on a system", "Software used in a browser", "A game disc for a user at a school"],
    answer: "Software used in a browser",
    explanation: "It keeps files online.",
  },
  {
    prompt: "What is grid computing?",
    options: ["One computer with one job at a school", "A kind of cable for a task in use", "Many computers sharing one big job", "A type of printer in a program at work"],
    answer: "Many computers sharing one big job",
    explanation: "Each does a small part.",
  },
  {
    prompt: "Which is a use of grid computing?",
    options: ["Writing a letter at a school on a device", "Playing a song for a task in use", "Large scientific calculations", "Printing a page in a program at work"],
    answer: "Large scientific calculations",
    explanation: "Big jobs are shared.",
  },
  {
    prompt: "What is the main difference between grid and cloud?",
    options: ["A grid sells services to users in a lab", "A grid has no computers on a system", "A grid pools power for one task", "A grid has no power at a school on a device"],
    answer: "A grid pools power for one task",
    explanation: "A cloud is a service.",
  },
  {
    prompt: "What does downloading do?",
    options: ["Plays without saving", "Deletes the file", "Prints the file", "Saves the whole file"],
    answer: "Saves the whole file",
    explanation: "You can use it offline.",
  },
  {
    prompt: "What does streaming do?",
    options: ["Saves a full copy at a school", "Plays media as it arrives", "Deletes media for a task in use", "Prints media in a program at work"],
    answer: "Plays media as it arrives",
    explanation: "It needs a steady connection.",
  },
  {
    prompt: "Which can be used offline?",
    options: ["A live stream on a device", "A closed link in use for a user", "A downloaded video", "A broken link at work"],
    answer: "A downloaded video",
    explanation: "The file is on the device.",
  },
  {
    prompt: "What does view-only permission allow?",
    options: ["Reading but not changing", "Changing the file in use for a user", "Deleting the file at work in a lab", "Selling the file in a file on a system"],
    answer: "Reading but not changing",
    explanation: "Others cannot edit.",
  },
  {
    prompt: "What does edit permission allow?",
    options: ["Reading the file alone", "Changing the file", "Printing the file alone", "Moving the file alone"],
    answer: "Changing the file",
    explanation: "Editors can alter it.",
  },
  {
    prompt: "Why share a file with the fewest rights needed?",
    options: ["It protects the original", "It slows the file in use for a user", "It adds adverts at work in a lab", "It deletes copies in a file"],
    answer: "It protects the original",
    explanation: "Limit what people can change.",
  },
];

const CloudGridStreaming = () => (
  <CapsSubjectTopic
    title="Cloud and Grid Computing, Streaming and Sharing"
    subtitle="Cloud computing and cloud applications, grid computing, streaming versus downloading, and permissions when sharing files"
    learnSteps={learnSteps}
    task="gr12-cloud-grid-streaming-t2"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default CloudGridStreaming;
