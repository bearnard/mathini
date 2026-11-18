import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "In The bus leaves at seven o'clock, which word is a preposition?",
    options: ["bus", "leaves", "at", "seven"],
    answer: "at",
    explanation: "At is a preposition of time.",
  },
  {
    prompt: "Complete: My birthday is ___ June.",
    options: ["in", "on", "at", "to"],
    answer: "in",
    explanation: "Months take the preposition in.",
  },
  {
    prompt: "Complete: We have a test ___ Friday.",
    options: ["in", "at", "to", "on"],
    answer: "on",
    explanation: "Days take the preposition on.",
  },
  {
    prompt: "Complete: The school day starts ___ 08:00.",
    options: ["on", "at", "in", "for"],
    answer: "at",
    explanation: "Clock times take the preposition at.",
  },
  {
    prompt: "Which preposition shows direction in The learners walked across the field?",
    options: ["learners", "walked", "across", "field"],
    answer: "across",
    explanation: "Across shows the direction of the walking.",
  },
  {
    prompt: "Which sentence uses a preposition of place?",
    options: ["The keys are under the cushion.", "She will arrive after lunch.", "The bird flew across the river.", "They stopped talking."],
    answer: "The keys are under the cushion.",
    explanation: "Under shows where the keys are.",
  },
  {
    prompt: "Complete: The ball is ___ the two chairs.",
    options: ["among", "through", "along", "between"],
    answer: "between",
    explanation: "Use between for two things.",
  },
  {
    prompt: "Which word is not a preposition?",
    options: ["behind", "quickly", "under", "underneath"],
    answer: "quickly",
    explanation: "Quickly is an adverb. The other words are prepositions.",
  },
  {
    prompt: "Complete: We swim ___ the morning.",
    options: ["at", "on", "in", "to"],
    answer: "in",
    explanation: "Parts of the day take the preposition in.",
  },
  {
    prompt: "Complete: The cat jumped ___ the wall to reach the garden on the other side.",
    options: ["over", "inside", "with", "among"],
    answer: "over",
    explanation: "Over shows the direction of the jump.",
  },
  {
    prompt: "Which word is a preposition of time?",
    options: ["beside", "across", "under", "before"],
    answer: "before",
    explanation: "Before shows the order of events.",
  },
  {
    prompt: "Complete: She put the letters ___ the envelope so that they were inside it.",
    options: ["onto", "into", "off", "over"],
    answer: "into",
    explanation: "Into shows that the letters go inside.",
  },
  {
    prompt: "What does a preposition show?",
    options: ["How an action is done in a sentence", "That a noun is plural or singular", "How a noun relates to another word", "Which noun in a list is chosen"],
    answer: "How a noun relates to another word",
    explanation: "Prepositions show place, time or direction in relation to a noun or pronoun.",
  },
  {
    prompt: "Complete: I live ___ a small town.",
    options: ["in", "at", "on", "to"],
    answer: "in",
    explanation: "Cities take the preposition in.",
  },
];

const Prepositions = () => (
  <CapsSubjectTopic
    title="Prepositions"
    subtitle="Prepositions of place, time and direction"
    learnSteps={learnSteps}
    task="eng6-prepositions"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default Prepositions;
