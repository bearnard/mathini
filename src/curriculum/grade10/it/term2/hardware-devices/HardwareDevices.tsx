import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which is an input device?",
    options: ["A printer in a program", "A monitor on a device", "A speaker in use", "A keyboard"],
    answer: "A keyboard",
    explanation: "A keyboard sends data in.",
  },
  {
    prompt: "Which is an output device?",
    options: ["A monitor", "A scanner", "A mouse", "A microphone"],
    answer: "A monitor",
    explanation: "A monitor shows results.",
  },
  {
    prompt: "Which is both input and output?",
    options: ["A keyboard in a lab", "A printer on a system", "A touch screen", "A speaker at a school"],
    answer: "A touch screen",
    explanation: "A touch screen shows and senses touch.",
  },
  {
    prompt: "What does a biometric reader do?",
    options: ["Prints a page on a system in a program", "Identifies a person by a body feature", "Stores a file at a school on a device", "Plays music for a task in use"],
    answer: "Identifies a person by a body feature",
    explanation: "A fingerprint is an example.",
  },
  {
    prompt: "Which printer is cheap to buy and used at home?",
    options: ["A laser printer", "An ink printer", "A 3D printer", "A line printer"],
    answer: "An ink printer",
    explanation: "Ink printers cost less.",
  },
  {
    prompt: "Which storage has no moving parts?",
    options: ["A hard drive", "A tape", "An SSD", "A floppy disk"],
    answer: "An SSD",
    explanation: "Solid state storage is electronic.",
  },
  {
    prompt: "Which is portable storage?",
    options: ["A hard drive in a desktop", "A motherboard", "A monitor", "A USB flash drive"],
    answer: "A USB flash drive",
    explanation: "Flash drives are small and portable.",
  },
  {
    prompt: "What is primary memory?",
    options: ["A hard drive", "RAM", "A flash drive", "A DVD"],
    answer: "RAM",
    explanation: "Primary memory holds what is in use.",
  },
  {
    prompt: "What happens to RAM when the power goes off?",
    options: ["Its contents are saved", "Its contents are printed", "Its contents are lost", "Its contents are copied"],
    answer: "Its contents are lost",
    explanation: "RAM is temporary.",
  },
  {
    prompt: "What is secondary memory?",
    options: ["Working memory in a program at work", "A kind of port on a device in a file", "Storage that keeps data permanently", "A kind of screen in use for a user"],
    answer: "Storage that keeps data permanently",
    explanation: "Drives are secondary storage.",
  },
  {
    prompt: "What does the motherboard do?",
    options: ["Prints pages in a file", "Shows the picture for a user", "Plays sounds in a lab for a task", "Joins all the parts"],
    answer: "Joins all the parts",
    explanation: "It is the main circuit board.",
  },
  {
    prompt: "What does the CPU do?",
    options: ["Stores files in a lab for a task", "Prints pages on a system in a program", "Carries out instructions", "Cools the case at a school on a device"],
    answer: "Carries out instructions",
    explanation: "The CPU processes.",
  },
  {
    prompt: "Which port sends video and sound to a screen?",
    options: ["USB", "NIC", "Power", "HDMI"],
    answer: "HDMI",
    explanation: "HDMI carries video and audio.",
  },
  {
    prompt: "What does a NIC connect a computer to?",
    options: ["A printer", "A monitor", "A network", "A speaker"],
    answer: "A network",
    explanation: "A network interface card.",
  },
];

const HardwareDevices = () => (
  <CapsSubjectTopic
    title="Hardware: Devices, the System Unit and Ports"
    subtitle="Input, output, storage and combined devices, the system unit, ports, and primary and secondary memory"
    learnSteps={learnSteps}
    task="gr10-hardware-devices-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default HardwareDevices;
