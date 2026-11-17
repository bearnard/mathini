import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is artificial intelligence?",
    options: ["Software that learns from data", "A kind of cable on a system in a program", "A type of screen at a school on a device", "A printer for a task in use"],
    answer: "Software that learns from data",
    explanation: "AI finds patterns.",
  },
  {
    prompt: "What does AI need in order to learn?",
    options: ["Paper", "Data", "A keyboard", "A desk"],
    answer: "Data",
    explanation: "AI is trained on data.",
  },
  {
    prompt: "Which is an everyday use of AI?",
    options: ["A paper map in a lab for a task", "A pencil on a system in a program", "A video app suggesting what to watch", "A calendar page at a school on a device"],
    answer: "A video app suggesting what to watch",
    explanation: "Recommendations use AI.",
  },
  {
    prompt: "What can AI help with?",
    options: ["Making coffee on a system", "Cleaning a floor at a school", "Finding information", "Painting a wall for a task"],
    answer: "Finding information",
    explanation: "It aids information discovery.",
  },
  {
    prompt: "Why should a person check an important AI result?",
    options: ["It is always right", "It may be wrong", "It is a secret", "It is a poem"],
    answer: "It may be wrong",
    explanation: "AI makes mistakes.",
  },
  {
    prompt: "In simple terms, what is big data?",
    options: ["Data too big for simple tools", "A small file kept on a disk", "A paper list kept in a drawer", "A short note kept on a desk"],
    answer: "Data too big for simple tools",
    explanation: "Big data needs special tools.",
  },
  {
    prompt: "Big data has great volume. What does that mean?",
    options: ["A very large amount", "A loud sound in a program", "A kind of speed on a device", "A kind of cable in use"],
    answer: "A very large amount",
    explanation: "Volume is size.",
  },
  {
    prompt: "Big data has high velocity. What does that mean?",
    options: ["Data is very small in use for a user", "Data arrives and changes fast", "Data is very old at work in a lab", "Data has no use in a file on a system"],
    answer: "Data arrives and changes fast",
    explanation: "Velocity is speed.",
  },
  {
    prompt: "Big data has variety. What does that mean?",
    options: ["One kind of data on a device", "No data", "Many kinds of data", "Old data at work in a lab"],
    answer: "Many kinds of data",
    explanation: "Text, numbers and pictures.",
  },
  {
    prompt: "Which is a source of big data?",
    options: ["A pencil for a user at a school", "A book", "Phones and sensors", "A chair"],
    answer: "Phones and sensors",
    explanation: "Devices create data.",
  },
  {
    prompt: "How does big data relate to AI?",
    options: ["It is used to train AI", "It stops AI in a lab for a task", "It is unrelated on a system", "It deletes AI at a school"],
    answer: "It is used to train AI",
    explanation: "More data helps AI learn.",
  },
  {
    prompt: "What is training data?",
    options: ["A school timetable on a system in a program", "A kind of cable at a school on a device", "Data used to teach an AI system", "A printer for a task in use"],
    answer: "Data used to teach an AI system",
    explanation: "The AI learns from it.",
  },
  {
    prompt: "What may biased data cause?",
    options: ["Faster screens", "Longer cables", "Quieter fans", "Unfair results"],
    answer: "Unfair results",
    explanation: "Poor data gives poor results.",
  },
  {
    prompt: "Why must companies protect personal data?",
    options: ["It is free in a lab for a task", "It is old on a system in a program", "It is small at a school on a device", "It is private information"],
    answer: "It is private information",
    explanation: "Privacy matters.",
  },
];

const AiBigData = () => (
  <CapsSubjectTopic
    title="Artificial Intelligence and Big Data"
    subtitle="What AI is, how it learns from data, what big data is, and how the two are linked"
    learnSteps={learnSteps}
    task="gr11-ai-big-data-t2"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={11}
  />
);

export default AiBigData;
