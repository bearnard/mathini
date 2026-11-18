import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which preposition completes: She is afraid ___ spiders?",
    options: ["off", "from", "of", "at"],
    answer: "of",
    explanation: "The fixed pair is afraid of.",
  },
  {
    prompt: "Which preposition completes: He is interested ___ music?",
    options: ["in", "of", "on", "for"],
    answer: "in",
    explanation: "The fixed pair is interested in.",
  },
  {
    prompt: "Which preposition completes: I am good ___ maths?",
    options: ["of", "on", "for", "at"],
    answer: "at",
    explanation: "The fixed pair is good at.",
  },
  {
    prompt: "Which preposition completes: It depends ___ the weather?",
    options: ["of", "on", "at", "for"],
    answer: "on",
    explanation: "The fixed pair is depend on.",
  },
  {
    prompt: "Which preposition completes: Please listen ___ the teacher?",
    options: ["at", "of", "to", "on"],
    answer: "to",
    explanation: "The fixed pair is listen to.",
  },
  {
    prompt: "What is the adverb that is made from the adjective quick?",
    options: ["quickly", "quick", "quicker", "quickness"],
    answer: "quickly",
    explanation: "Add ly to quick.",
  },
  {
    prompt: "What is the adverb that is made from the adjective happy?",
    options: ["happyly", "happy", "happiness", "happily"],
    answer: "happily",
    explanation: "Change y to i and add ly.",
  },
  {
    prompt: "Which word completes: She sings ___?",
    options: ["good", "well", "goodly", "gooder"],
    answer: "well",
    explanation: "Well is the adverb of good.",
  },
  {
    prompt: "Which sentence uses hard as an adverb?",
    options: ["This is a very hard wooden chair.", "He is a hard worker at school.", "He works hard every day.", "The test was hard."],
    answer: "He works hard every day.",
    explanation: "Hard modifies the verb works.",
  },
  {
    prompt: "Which group of words is a prepositional phrase?",
    options: ["in the garden", "the dog barked", "because it rained", "very quickly"],
    answer: "in the garden",
    explanation: "A prepositional phrase begins with a preposition.",
  },
  {
    prompt: "Which sentence has an adverb that modifies an adjective?",
    options: ["She walked slowly along the road.", "The hot soup is ready now.", "He ran home.", "The soup is extremely hot."],
    answer: "The soup is extremely hot.",
    explanation: "Extremely modifies the adjective hot.",
  },
  {
    prompt: "Which adverb is irregular?",
    options: ["quickly", "well", "slowly", "carefully"],
    answer: "well",
    explanation: "Most adverbs of manner end in ly, but well does not.",
  },
  {
    prompt: "The bus arrived ___ for school.",
    options: ["lately", "latly", "late", "latest"],
    answer: "late",
    explanation: "Late is the adverb here.",
  },
  {
    prompt: "She walked ___ the bridge to reach the other side.",
    options: ["across", "beside", "at", "of"],
    answer: "across",
    explanation: "Across shows the direction of the walking.",
  },
];

const PrepositionsAdverbs = () => (
  <CapsSubjectTopic
    title={"Prepositions and Adverbs"}
    subtitle={"Prepositional phrases, fixed prepositions, the forms of adverbs and the words hard, hardly, late and lately"}
    learnSteps={learnSteps}
    task={"gr7-prepositions-adverbs-t2"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default PrepositionsAdverbs;
