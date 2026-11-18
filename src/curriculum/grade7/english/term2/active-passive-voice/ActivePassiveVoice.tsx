import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "In the sentence The learners cleaned the classroom, which word is a transitive verb?",
    options: ["learners", "the", "cleaned", "classroom"],
    answer: "cleaned",
    explanation: "Cleaned takes an object, the classroom.",
  },
  {
    prompt: "Which sentence contains an intransitive verb?",
    options: ["The baby slept soundly.", "The baby dropped the cup.", "The baby threw the ball.", "The baby ate the banana."],
    answer: "The baby slept soundly.",
    explanation: "Slept does not take an object.",
  },
  {
    prompt: "Which sentence cannot be changed into the passive voice?",
    options: ["Thabo kicked the ball.", "She wrote a letter.", "They painted the wall.", "The sun rose early."],
    answer: "The sun rose early.",
    explanation: "Rose is intransitive, and it has no object that could become the subject.",
  },
  {
    prompt: "Which sentence is the passive form of The chef cooks the meal?",
    options: ["The meal was cooked by the chef.", "The meal is cooked by the chef.", "The meal cooks the chef.", "The chef is cooked by the meal."],
    answer: "The meal is cooked by the chef.",
    explanation: "The present tense is kept: is cooked.",
  },
  {
    prompt: "Which sentence is the passive form of The chef is cooking the meal?",
    options: ["The meal is cooked by the chef.", "The meal was being cooked by the chef.", "The meal is being cooked by the chef.", "The meal has been cooked by the chef."],
    answer: "The meal is being cooked by the chef.",
    explanation: "Is being plus the past participle forms the present progressive passive.",
  },
  {
    prompt: "Which sentence is in the passive voice and the present progressive tense?",
    options: ["The road is being repaired.", "The road was repaired.", "The road is repaired every year.", "They are repairing the road."],
    answer: "The road is being repaired.",
    explanation: "Is being repaired is the present progressive passive.",
  },
  {
    prompt: "Which sentence is the passive form of They will paint the hall?",
    options: ["The hall will have been painted by them.", "The hall was painted by them.", "The hall will paint them.", "The hall will be painted by them."],
    answer: "The hall will be painted by them.",
    explanation: "Will be plus the past participle forms the future passive.",
  },
  {
    prompt: "Which sentence is the active form of The tests were marked by the teacher?",
    options: ["The teacher marks the tests.", "The teacher marked the tests.", "The teacher will mark the tests.", "The tests marked the teacher."],
    answer: "The teacher marked the tests.",
    explanation: "Were marked is the past tense, so the active verb is marked.",
  },
  {
    prompt: "The books ___ returned yesterday.",
    options: ["was", "is", "were", "will be"],
    answer: "were",
    explanation: "The books is plural and yesterday shows the past, so use were.",
  },
  {
    prompt: "Why is the passive useful in the sentence A window was broken last night?",
    options: ["The doer is not known", "The doer is the writer", "The window is very large", "The sentence is a question"],
    answer: "The doer is not known",
    explanation: "The passive can leave out an unknown doer.",
  },
  {
    prompt: "Which verb group is in the present progressive passive?",
    options: ["is built", "has been built", "will be built", "is being built"],
    answer: "is being built",
    explanation: "Is being plus the past participle shows an action happening now.",
  },
  {
    prompt: "In Thabo kicked the red ball, how many words are in the object of the verb?",
    options: ["Two", "Three", "Seven", "Eight"],
    answer: "Three",
    explanation: "The object is the red ball, which has three words.",
  },
  {
    prompt: "Which sentence is in the passive voice?",
    options: ["The principal will announce the winners tomorrow.", "The principal is announcing the winners.", "The winners were announced by the principal.", "The principal announced the winners."],
    answer: "The winners were announced by the principal.",
    explanation: "Were announced is a form of be plus the past participle.",
  },
  {
    prompt: "The cake ___ eaten by the guests last night.",
    options: ["was", "is", "were", "are"],
    answer: "was",
    explanation: "Last night shows the past, and cake is singular, so use was.",
  },
];

const ActivePassiveVoice = () => (
  <CapsSubjectTopic
    title={"Active and Passive Voice"}
    subtitle={"Transitive and intransitive verbs, the passive in three tenses and the present progressive passive"}
    learnSteps={learnSteps}
    task={"gr7-active-passive-voice-t2"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ActivePassiveVoice;
