import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which sentence is correct?",
    options: ["The boys plays soccer.", "The boy play soccer.", "The boys play soccer.", "The boys is soccer."],
    answer: "The boys play soccer.",
    explanation: "A plural subject takes the plural verb play.",
  },
  {
    prompt: "Complete: My sister ___ to school by bus.",
    options: ["goes", "go", "going", "gone"],
    answer: "goes",
    explanation: "My sister is singular, so use goes.",
  },
  {
    prompt: "Which subject is plural?",
    options: ["The head teacher", "My mother", "A bird", "The children"],
    answer: "The children",
    explanation: "The children means more than one.",
  },
  {
    prompt: "Thabo and Sipho ___ best friends.",
    options: ["is", "are", "am", "being"],
    answer: "are",
    explanation: "A subject joined by and is plural, so use are.",
  },
  {
    prompt: "Which verb is in the simple past tense?",
    options: ["walks", "will walk", "walked", "walking"],
    answer: "walked",
    explanation: "Walked is the simple past tense of walk.",
  },
  {
    prompt: "Which sentence is in the simple future tense?",
    options: ["We will visit our gran tomorrow.", "We visited our gran last weekend after school.", "We visit our gran every Sunday.", "We were at our gran's house."],
    answer: "We will visit our gran tomorrow.",
    explanation: "Will plus the plain verb forms the simple future.",
  },
  {
    prompt: "Yesterday we ___ the match.",
    options: ["win", "wins", "will win", "won"],
    answer: "won",
    explanation: "Yesterday shows the past, and the past tense of win is won.",
  },
  {
    prompt: "Which sentence has a subject-verb error?",
    options: ["She sings well.", "He sing well.", "They sing well.", "We sing well."],
    answer: "He sing well.",
    explanation: "He is singular, so it takes sings.",
  },
  {
    prompt: "I ___ ready.",
    options: ["is", "are", "am", "be"],
    answer: "am",
    explanation: "The verb to be is am with I.",
  },
  {
    prompt: "Every day my dog ___ in the garden.",
    options: ["plays", "play", "played", "will play"],
    answer: "plays",
    explanation: "Every day shows the present tense, and my dog is singular.",
  },
  {
    prompt: "In Mpho kicked the ball, what is the subject?",
    options: ["kicked", "the ball", "kicked the ball", "Mpho"],
    answer: "Mpho",
    explanation: "The subject is the person who does the action.",
  },
  {
    prompt: "Which word shows that a sentence is in the future tense?",
    options: ["was", "will", "having", "did"],
    answer: "will",
    explanation: "Will plus the plain verb forms the simple future.",
  },
  {
    prompt: "What is the simple past tense of go?",
    options: ["goed", "gone", "went", "going"],
    answer: "went",
    explanation: "Go is an irregular verb, and its simple past tense is went.",
  },
  {
    prompt: "The cat and the dog ___ friends.",
    options: ["are", "is", "am", "was"],
    answer: "are",
    explanation: "The cat and the dog is a plural subject, so use are.",
  },
];

const SubjectVerbAgreement = () => (
  <CapsSubjectTopic
    title="Subject-Verb Agreement and the Simple Tenses"
    subtitle="Subject and verb, agreement, and the simple present, past and future tenses"
    learnSteps={learnSteps}
    task="eng6-subject-verb-agreement"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default SubjectVerbAgreement;
