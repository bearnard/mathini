import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which sentence is in the passive voice?",
    options: ["The ball broke the window.", "The ball is breaking the window.", "The window was broken by the ball.", "The ball was breaking the window again and again."],
    answer: "The window was broken by the ball.",
    explanation: "Was broken is a form of be plus the past participle, so the sentence is passive.",
  },
  {
    prompt: "Which sentence is in the active voice?",
    options: ["Thandi painted the fence.", "The fence was painted by Thandi.", "The fence is painted every year.", "The fence will be painted soon."],
    answer: "Thandi painted the fence.",
    explanation: "In an active sentence the subject, Thandi, does the action.",
  },
  {
    prompt: "Which sentence is the passive form of The cook baked the bread?",
    options: ["The bread baked the cook.", "The bread is baked by the cook.", "The cook was baked by the bread.", "The bread was baked by the cook."],
    answer: "The bread was baked by the cook.",
    explanation: "The tense stays the same, so baked becomes was baked.",
  },
  {
    prompt: "Which sentence is the active form of The letter was written by Sipho?",
    options: ["Sipho writes the letter.", "Sipho wrote the letter.", "The letter wrote Sipho.", "Sipho will write the letter."],
    answer: "Sipho wrote the letter.",
    explanation: "Was written is in the past tense, so the active verb is wrote.",
  },
  {
    prompt: "Which verb group is in the passive voice?",
    options: ["is cleaning", "has cleaned", "was cleaned", "will clean"],
    answer: "was cleaned",
    explanation: "Was cleaned is a form of be plus the past participle.",
  },
  {
    prompt: "In the passive voice, what happens to the object of the active sentence?",
    options: ["It becomes the subject", "It is left out", "It becomes the verb", "It changes into a pronoun"],
    answer: "It becomes the subject",
    explanation: "The cat in The dog chased the cat becomes the subject of The cat was chased.",
  },
  {
    prompt: "Which word often introduces the doer in a passive sentence?",
    options: ["with", "for", "at", "by"],
    answer: "by",
    explanation: "The doer is added with by, as in was chased by the dog.",
  },
  {
    prompt: "Which passive sentence is in the future tense?",
    options: ["The tests were marked yesterday.", "The tests will be marked tomorrow.", "The tests are marked every week.", "The tests have been marked already."],
    answer: "The tests will be marked tomorrow.",
    explanation: "Will be plus the past participle forms the future passive.",
  },
  {
    prompt: "Why might a writer choose the passive in My bicycle was stolen?",
    options: ["The doer is a friend", "The bicycle is very fast", "The doer is not known", "The sentence is a question"],
    answer: "The doer is not known",
    explanation: "The passive is useful when you do not know who did the action.",
  },
  {
    prompt: "Which sentence is passive and uses the correct past participle?",
    options: ["The song was sung by the choir.", "The song was sang by the choir.", "The song was singing by the choir.", "The song were sung by the choir."],
    answer: "The song was sung by the choir.",
    explanation: "Sung is the past participle of sing, and was agrees with the song.",
  },
  {
    prompt: "The tests ___ marked by the teacher every week.",
    options: ["is", "am", "being", "are"],
    answer: "are",
    explanation: "The tests is plural, so the present passive uses are.",
  },
  {
    prompt: "Which sentence has the same meaning as The dog chased the cat?",
    options: ["The cat chased the dog.", "The cat was chased by the dog.", "The dog was chased by the cat.", "The cat was chasing the dog."],
    answer: "The cat was chased by the dog.",
    explanation: "In both sentences the dog does the chasing.",
  },
  {
    prompt: "Which sentence leaves out the doer of the action?",
    options: ["The ball broke the window.", "Thabo broke the window.", "The window was broken.", "The window was broken by Thabo."],
    answer: "The window was broken.",
    explanation: "A passive sentence can leave out the doer: The window was broken.",
  },
  {
    prompt: "Which sentence is the passive form of The learners clean the hall?",
    options: ["The hall is cleaned by the learners.", "The hall was cleaned by the learners.", "The hall will be cleaned by the learners.", "The learners are cleaned by the hall."],
    answer: "The hall is cleaned by the learners.",
    explanation: "The active verb is in the present tense, so the passive uses is cleaned.",
  },
];

const ActivePassiveVoice = () => (
  <CapsSubjectTopic
    title="Active and Passive Voice"
    subtitle="The active voice, the passive voice, the passive in three tenses and when to use it"
    learnSteps={learnSteps}
    task="eng6-active-passive-voice"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ActivePassiveVoice;
