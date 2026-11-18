import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which sentence is in the present continuous tense?",
    options: ["The baby slept all night.", "The baby will sleep soon.", "The baby is sleeping now.", "The baby sleeps very well."],
    answer: "The baby is sleeping now.",
    explanation: "Is plus a verb ending in ing forms the present continuous.",
  },
  {
    prompt: "The children ___ in the garden at the moment.",
    options: ["are playing", "plays", "played", "will be playing the game"],
    answer: "are playing",
    explanation: "At the moment shows the present continuous.",
  },
  {
    prompt: "When I phoned, my gran ___ a cake.",
    options: ["bakes", "is baking", "is going to bake", "was baking"],
    answer: "was baking",
    explanation: "Was plus ing forms the past continuous, which suits an action in progress in the past.",
  },
  {
    prompt: "Which auxiliary verb completes the past continuous? They ___ playing when it rained.",
    options: ["will", "were", "has", "does"],
    answer: "were",
    explanation: "Were plus ing forms the past continuous.",
  },
  {
    prompt: "Which sentence is in the present perfect tense?",
    options: ["She finished her homework yesterday.", "She will finish her homework.", "She has finished her homework.", "She is finishing her homework."],
    answer: "She has finished her homework.",
    explanation: "Has plus the past participle forms the present perfect.",
  },
  {
    prompt: "Which sentence is correct?",
    options: ["He has eaten his lunch.", "He has ate his lunch.", "He have eaten his lunch.", "He has eating his lunch."],
    answer: "He has eaten his lunch.",
    explanation: "Use has with he, and use the past participle eaten.",
  },
  {
    prompt: "What is the past participle of write in I have ___ a letter?",
    options: ["wrote", "writing", "writes", "written"],
    answer: "written",
    explanation: "The past participle of write is written.",
  },
  {
    prompt: "Which word is an auxiliary verb in We were singing songs?",
    options: ["We", "were", "singing", "songs"],
    answer: "were",
    explanation: "Were helps the main verb singing.",
  },
  {
    prompt: "Which tense uses will be plus a verb ending in ing?",
    options: ["Simple future", "Past continuous", "Future continuous", "Present perfect continuous"],
    answer: "Future continuous",
    explanation: "Will be plus ing forms the future continuous.",
  },
  {
    prompt: "Tomorrow at ten o\\'clock I ___ my maths test.",
    options: ["will be writing", "wrote", "was writing", "had been writing"],
    answer: "will be writing",
    explanation: "Tomorrow at ten o'clock shows the future continuous.",
  },
  {
    prompt: "They ___ already left.",
    options: ["has", "is", "having", "have"],
    answer: "have",
    explanation: "Use have with they in the present perfect.",
  },
  {
    prompt: "Which time word often goes with the present perfect tense?",
    options: ["yesterday", "already", "tomorrow", "last year"],
    answer: "already",
    explanation: "Already is a clue for the present perfect.",
  },
  {
    prompt: "In The builder is working, which word is the main verb?",
    options: ["The", "builder", "working", "is"],
    answer: "working",
    explanation: "Washing is the main verb. Is is the helping verb.",
  },
  {
    prompt: "Which sentence is in the past continuous tense?",
    options: ["They were watching TV at eight.", "They watch TV every single night.", "They will watch TV later tonight.", "They have watched TV this afternoon."],
    answer: "They were watching TV at eight.",
    explanation: "Were plus ing forms the past continuous.",
  },
];

const ContinuousPresentPerfect = () => (
  <CapsSubjectTopic
    title="Continuous Tenses and the Present Perfect"
    subtitle="Auxiliary verbs, the continuous tenses and the present perfect"
    learnSteps={learnSteps}
    task="eng6-continuous-present-perfect"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ContinuousPresentPerfect;
