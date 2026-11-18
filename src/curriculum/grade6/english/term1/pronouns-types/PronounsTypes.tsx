import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "In the sentence Who left the gate open? which word is the interrogative pronoun?",
    options: ["left", "gate", "Who", "open"],
    answer: "Who",
    explanation: "Who is an interrogative pronoun: it is used to ask a question about a person.",
  },
  {
    prompt: "Which sentence asks who owns the bag?",
    options: ["Whose is this bag?", "Who is this bag?", "Where is this bag?", "When is this bag?"],
    answer: "Whose is this bag?",
    explanation: "Whose asks about ownership.",
  },
  {
    prompt: "Which interrogative pronoun is used to ask about a thing and not about a person?",
    options: ["who", "whose", "whom", "what"],
    answer: "what",
    explanation: "What asks about a thing. Who, whose and whom ask about people.",
  },
  {
    prompt: "Which sentence contains a demonstrative pronoun?",
    options: ["She is my sister.", "That is my bag.", "Who is at the door?", "Everyone is here."],
    answer: "That is my bag.",
    explanation: "That points to one thing. The other sentences have a personal, an interrogative and an indefinite pronoun.",
  },
  {
    prompt: "You point at two books on the far side of the room. Which pronoun do you use? ___ are mine.",
    options: ["This", "That", "Those", "These"],
    answer: "Those",
    explanation: "Those is plural and far from you.",
  },
  {
    prompt: "You hold one pencil in your hand. Which sentence is correct?",
    options: ["This is my pencil.", "These is my pencil.", "Those is my pencil.", "These are my pencil."],
    answer: "This is my pencil.",
    explanation: "This is the singular pronoun for something near you.",
  },
  {
    prompt: "Which word in Someone knocked at the door is an indefinite pronoun?",
    options: ["knocked", "door", "at", "Someone"],
    answer: "Someone",
    explanation: "Someone does not name a particular person.",
  },
  {
    prompt: "Which sentence is correct?",
    options: ["Everyone are ready.", "Everyone is ready.", "Everyone were ready.", "Everyone have ready."],
    answer: "Everyone is ready.",
    explanation: "Everyone is singular, so it takes the verb is.",
  },
  {
    prompt: "Which of these words is an indefinite pronoun?",
    options: ["Thandi", "bridge", "nobody", "quickly"],
    answer: "nobody",
    explanation: "Nobody does not name a particular person.",
  },
  {
    prompt: "What does a pronoun do?",
    options: ["Takes the place of a noun", "Describes a noun", "Joins two sentences", "Shows how an action is done"],
    answer: "Takes the place of a noun",
    explanation: "A pronoun replaces a noun so that you do not repeat it.",
  },
  {
    prompt: "Which pronoun replaces the noun in: The learners sang loudly. ___ sang loudly.",
    options: ["It", "Their", "She", "They"],
    answer: "They",
    explanation: "The learners is plural, so use they.",
  },
  {
    prompt: "Which sentence asks about a person using the correct interrogative pronoun?",
    options: ["What won the race?", "Who won the race?", "Whose won the race?", "Where won the race?"],
    answer: "Who won the race?",
    explanation: "Who is used to ask about a person.",
  },
  {
    prompt: "In These are my cousins, what kind of pronoun is These?",
    options: ["Interrogative", "Indefinite", "Demonstrative", "Personal"],
    answer: "Demonstrative",
    explanation: "These points to more than one person or thing near you.",
  },
  {
    prompt: "In Few were late, what kind of pronoun is Few?",
    options: ["Indefinite", "Interrogative", "Demonstrative", "Personal"],
    answer: "Indefinite",
    explanation: "Few does not name a particular person, so it is an indefinite pronoun.",
  },
];

const PronounsTypes = () => (
  <CapsSubjectTopic
    title="Pronouns: Interrogative, Demonstrative and Indefinite"
    subtitle="What a pronoun does, and the interrogative, demonstrative and indefinite pronouns"
    learnSteps={learnSteps}
    task="eng6-pronouns-types"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PronounsTypes;
