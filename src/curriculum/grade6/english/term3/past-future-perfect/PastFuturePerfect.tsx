import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which sentence is in the past perfect tense?",
    options: ["We ate during the film.", "We are eating at the film.", "We had eaten before the film started.", "We will eat after the film has started."],
    answer: "We had eaten before the film started.",
    explanation: "Had plus the past participle forms the past perfect.",
  },
  {
    prompt: "Which sentence is in the future perfect tense?",
    options: ["By Friday I will have finished my project.", "I finished my project on Friday.", "I have finished my project.", "I will finish my project on Friday after school."],
    answer: "By Friday I will have finished my project.",
    explanation: "Will have plus the past participle forms the future perfect.",
  },
  {
    prompt: "When we reached the station, the train ___ already left.",
    options: ["has", "will", "is", "had"],
    answer: "had",
    explanation: "The train left before we reached the station, so use the past perfect with had.",
  },
  {
    prompt: "By next month she ___ written the book.",
    options: ["had", "will have", "has been", "will have been"],
    answer: "will have",
    explanation: "By next month points to the future perfect.",
  },
  {
    prompt: "Which auxiliary verb forms the past perfect tense?",
    options: ["has", "are", "had", "will"],
    answer: "had",
    explanation: "Had plus the past participle forms the past perfect.",
  },
  {
    prompt: "What is the past participle of see in She had ___ the film?",
    options: ["seen", "saw", "seeing", "sees"],
    answer: "seen",
    explanation: "Seen is the past participle of see.",
  },
  {
    prompt: "Which tense is used in I will have cleaned my room by noon?",
    options: ["Past perfect", "Present perfect", "Simple future", "Future perfect"],
    answer: "Future perfect",
    explanation: "Will have plus the past participle forms the future perfect.",
  },
  {
    prompt: "Which tense is used in They had left before we came?",
    options: ["Future perfect", "Past perfect", "Present perfect", "Simple past"],
    answer: "Past perfect",
    explanation: "Had left shows an earlier past action.",
  },
  {
    prompt: "Which sentence shows an action that was finished before another past action?",
    options: ["She leaves when I arrive.", "She will leave when I arrive.", "She had left when I arrived.", "She is leaving when I arrive."],
    answer: "She had left when I arrived.",
    explanation: "Had left happened first, and arrived happened later.",
  },
  {
    prompt: "Which time clue goes with the future perfect tense?",
    options: ["by tomorrow", "yesterday", "just now", "a few days ago"],
    answer: "by tomorrow",
    explanation: "By tomorrow points to something that will be finished in the future.",
  },
  {
    prompt: "Which sentence is correct?",
    options: ["He had went home.", "He had going home.", "He had goes home.", "He had gone home."],
    answer: "He had gone home.",
    explanation: "Gone is the past participle of go.",
  },
  {
    prompt: "By the end of term, we will have read three books. Which tense is will have read?",
    options: ["Present perfect", "Future perfect", "Past perfect", "Simple future"],
    answer: "Future perfect",
    explanation: "Will have plus the past participle forms the future perfect.",
  },
  {
    prompt: "By the time the rain started, the children ___ home.",
    options: ["will have gone", "have gone", "had gone", "go"],
    answer: "had gone",
    explanation: "The rain started in the past, so the earlier action is in the past perfect.",
  },
  {
    prompt: "By Monday morning the workers ___ the roof.",
    options: ["will have repaired", "had repaired", "have repaired", "are going to be repaired"],
    answer: "will have repaired",
    explanation: "By Monday morning points to the future perfect.",
  },
];

const PastFuturePerfect = () => (
  <CapsSubjectTopic
    title="Past Perfect and Future Perfect"
    subtitle="The past perfect, the future perfect and the time clues that go with them"
    learnSteps={learnSteps}
    task="eng6-past-future-perfect"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PastFuturePerfect;
