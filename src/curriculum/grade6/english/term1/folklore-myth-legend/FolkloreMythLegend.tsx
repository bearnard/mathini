import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "A story explains why the sun rises each morning. What kind of folklore is this?",
    options: ["A legend", "A myth", "A news report", "A letter"],
    answer: "A myth",
    explanation: "A myth explains something in nature.",
  },
  {
    prompt: "A tale tells of a famous chief who defended his people long ago. What is it?",
    options: ["A legend", "A weather report", "A recipe", "A list"],
    answer: "A legend",
    explanation: "A legend tells of a hero, often linked to history.",
  },
  {
    prompt: "How is folklore usually passed on?",
    options: ["By printing it first", "By telling it aloud", "By photographing it", "By sending a text"],
    answer: "By telling it aloud",
    explanation: "Folklore is shared by telling stories aloud.",
  },
  {
    prompt: "Do we know who first told a folktale?",
    options: ["No, the author is not known", "Yes, always one named writer", "Yes, a famous newspaper", "Yes, the teacher"],
    answer: "No, the author is not known",
    explanation: "Folklore comes from many tellers over many years.",
  },
  {
    prompt: "Which is a feature of folklore?",
    options: ["A simple plot with a problem and a solution", "A table of numbers in a lab for a task", "A headline and a by-line on a system in a program", "A list of steps at a school on a device"],
    answer: "A simple plot with a problem and a solution",
    explanation: "Folktales have a simple plot and a clear ending.",
  },
  {
    prompt: "A hero in a story drinks a whole river in one sip. What is this?",
    options: ["A fact", "A recipe in a program", "A quotation on a device", "Exaggeration"],
    answer: "Exaggeration",
    explanation: "Exaggeration makes the story bigger than life.",
  },
  {
    prompt: "A line comes back three times in a story. What does this help with?",
    options: ["It makes the story shorter in use for a user", "It hides the ending at work in a lab", "It makes the story easy to remember", "It adds a headline in a file on a system"],
    answer: "It makes the story easy to remember",
    explanation: "Repetition helps listeners remember the tale.",
  },
  {
    prompt: "What does the end of a folktale usually show?",
    options: ["A list of names in a program", "The price of food on a device", "A lesson about life", "A weather chart in use"],
    answer: "A lesson about life",
    explanation: "Many folktales end with a lesson.",
  },
  {
    prompt: "Which phrase is a good way to start a folktale?",
    options: ["Today’s weather is", "Long ago", "First, you need", "By our reporter"],
    answer: "Long ago",
    explanation: "Long ago sets the story in an old time.",
  },
  {
    prompt: "In which tense do you write a folktale?",
    options: ["The future tense", "The present tense", "The past tense", "A mix of tenses"],
    answer: "The past tense",
    explanation: "A tale is told as something that happened long ago.",
  },
  {
    prompt: "You plan a story. Which step gives it a problem?",
    options: ["The title only at work in a lab", "The problem part of your plan", "The date in a file on a system", "The by-line for a user at a school"],
    answer: "The problem part of your plan",
    explanation: "The plan needs a problem that the character must solve.",
  },
  {
    prompt: "You read your folktale aloud and a sentence is too long to say. What should you do?",
    options: ["Leave it alone", "Shorten it", "Add more words", "Remove the ending"],
    answer: "Shorten it",
    explanation: "Folklore sounds best in short, clear sentences.",
  },
  {
    prompt: "Which character is typical of a folktale?",
    options: ["A clever tortoise", "A weather reporter", "A bank manager", "A shop assistant"],
    answer: "A clever tortoise",
    explanation: "Animals with clear traits are common in folktales.",
  },
  {
    prompt: "Which sentence best ends a myth about a rooster who brings the sun?",
    options: ["Then the weather report said it would be sunny in use for a user", "The people learned that even a small voice can bring light", "Please add two cups of flour to the bowl at work in a lab", "Turn left at the school and walk straight in a file on a system"],
    answer: "The people learned that even a small voice can bring light",
    explanation: "A myth ends with a lesson that fits the story.",
  },
];

const FolkloreMythLegend = () => (
  <CapsSubjectTopic
    title="Folklore: Myths and Legends"
    subtitle="What a myth and a legend are, their features, and how to write a short folklore story"
    learnSteps={learnSteps}
    task="eng6-folklore-myth-legend"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default FolkloreMythLegend;
