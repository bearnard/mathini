import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is the comparative form of the adjective tall?",
    options: ["tallest", "more tall", "taller", "tallier"],
    answer: "taller",
    explanation: "Add er to a short adjective to make the comparative.",
  },
  {
    prompt: "What is the superlative form of the adjective happy?",
    options: ["happiest", "happyest", "most happy", "happier"],
    answer: "happiest",
    explanation: "Change y to i and add est.",
  },
  {
    prompt: "What is the comparative form of the adjective big?",
    options: ["biger", "more big", "biggest", "bigger"],
    answer: "bigger",
    explanation: "Double the consonant after a short vowel and add er.",
  },
  {
    prompt: "What is the superlative form of the adjective good?",
    options: ["goodest", "best", "most good", "better"],
    answer: "best",
    explanation: "Good is irregular: good, better, best.",
  },
  {
    prompt: "Which sentence compares two boys correctly?",
    options: ["Thabo is more taller than Sipho.", "Thabo is tallest than Sipho.", "Thabo is taller than Sipho.", "Thabo is taller from Sipho."],
    answer: "Thabo is taller than Sipho.",
    explanation: "Use the comparative with than.",
  },
  {
    prompt: "Which sentence compares three or more things?",
    options: ["She is the cleverest girl in the class.", "She is cleverer than her younger sister.", "She is very clever.", "She is clever."],
    answer: "She is the cleverest girl in the class.",
    explanation: "The superlative compares one thing with all the others.",
  },
  {
    prompt: "What is the comparative form of the adjective beautiful?",
    options: ["beautifuller", "most beautiful", "beautifuler", "more beautiful"],
    answer: "more beautiful",
    explanation: "Long adjectives use more to form the comparative.",
  },
  {
    prompt: "Which sentence has a predicative adjective?",
    options: ["We saw a cloudy sky.", "The sky is cloudy.", "The cloudy sky arrived.", "Many cloudy days followed."],
    answer: "The sky is cloudy.",
    explanation: "The adjective cloudy comes after the verb is.",
  },
  {
    prompt: "What is the superlative form of the adjective nice?",
    options: ["niccest", "nicer", "nicest", "most nice"],
    answer: "nicest",
    explanation: "Adjectives that end in e add st.",
  },
  {
    prompt: "Which sentence compares two bags correctly?",
    options: ["My bag is bigger than yours.", "My bag is more bigger than yours.", "My bag is biggest than yours.", "My bag is big than yours."],
    answer: "My bag is bigger than yours.",
    explanation: "Use bigger with than.",
  },
  {
    prompt: "What is the comparative form of the adjective bad?",
    options: ["badder", "more bad", "worst", "worse"],
    answer: "worse",
    explanation: "Bad is irregular: bad, worse, worst.",
  },
  {
    prompt: "Which word is not a comparative form?",
    options: ["smaller", "tallest", "faster", "brighter"],
    answer: "tallest",
    explanation: "Tallest is a superlative. The other words are comparatives.",
  },
  {
    prompt: "Of the three sisters, Lerato is the ___.",
    options: ["younger", "more young", "youngest", "most youngest"],
    answer: "youngest",
    explanation: "Three sisters need the superlative.",
  },
  {
    prompt: "In Thabo carried a heavy bag home, which word is an attributive adjective?",
    options: ["heavy", "carried", "bag", "home"],
    answer: "heavy",
    explanation: "Heavy comes before the noun bag.",
  },
];

const AdjectivesComparison = () => (
  <CapsSubjectTopic
    title={"Adjectives and Degrees of Comparison"}
    subtitle={"Attributive and predicative adjectives, positive, comparative and superlative, and irregular forms"}
    learnSteps={learnSteps}
    task={"gr7-adjectives-comparison-t1"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default AdjectivesComparison;
