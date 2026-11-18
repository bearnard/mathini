import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which verb is finite in the sentence Thabo wants to swim?",
    options: ["to swim", "swim", "wants", "Thabo"],
    answer: "wants",
    explanation: "Wants shows the tense and agrees with Thabo.",
  },
  {
    prompt: "Which verb form is the infinitive?",
    options: ["to swim", "swimming", "swum", "swims"],
    answer: "to swim",
    explanation: "The infinitive is to plus the plain verb.",
  },
  {
    prompt: "In the sentence Dancing is good exercise, what kind of word is Dancing?",
    options: ["A finite verb", "An infinitive", "A present participle", "A gerund"],
    answer: "A gerund",
    explanation: "Dancing works as a noun and is the subject, so it is a gerund.",
  },
  {
    prompt: "Which sentence has a gerund as its subject?",
    options: ["She is reading a book in the library.", "Reading improves your vocabulary.", "I like to read before I go to bed.", "He reads a short story every day."],
    answer: "Reading improves your vocabulary.",
    explanation: "Reading names an activity and is the subject.",
  },
  {
    prompt: "Which sentence has a gerund as its object?",
    options: ["She is singing in the school choir.", "She wants to sing.", "She enjoys singing.", "She sang."],
    answer: "She enjoys singing.",
    explanation: "Singing is the object of enjoys.",
  },
  {
    prompt: "Which verb in the sentence The learners enjoyed reading is finite?",
    options: ["enjoyed", "reading", "learners", "The"],
    answer: "enjoyed",
    explanation: "Enjoyed shows the past tense and agrees with the learners.",
  },
  {
    prompt: "What is the present participle of the verb run?",
    options: ["ran", "runs", "has run", "running"],
    answer: "running",
    explanation: "Add ing and double the n.",
  },
  {
    prompt: "What is the past participle of the verb break?",
    options: ["broke", "broken", "breaking", "breaks"],
    answer: "broken",
    explanation: "Break is irregular: broke is the past tense and broken is the past participle.",
  },
  {
    prompt: "Which sentence uses the correct past participle?",
    options: ["She has ate her lunch.", "She has eating her lunch.", "She has eaten her lunch.", "She has eats her lunch."],
    answer: "She has eaten her lunch.",
    explanation: "Eaten is the past participle of eat.",
  },
  {
    prompt: "Which of these words is an auxiliary verb?",
    options: ["will", "run", "quickly", "tall"],
    answer: "will",
    explanation: "Will helps the main verb to show the future.",
  },
  {
    prompt: "In The windows were cleaned, which word is the auxiliary verb?",
    options: ["windows", "cleaned", "The", "were"],
    answer: "were",
    explanation: "Were helps the main verb cleaned to form the passive.",
  },
  {
    prompt: "Which verb form does not show a tense?",
    options: ["runs", "to run", "ran", "will run"],
    answer: "to run",
    explanation: "The infinitive is non-finite.",
  },
  {
    prompt: "In He is swimming now, what is the word swimming?",
    options: ["A gerund used as a noun", "An infinitive with to", "A present participle", "A finite verb in the past"],
    answer: "A present participle",
    explanation: "It is part of the verb group is swimming.",
  },
  {
    prompt: "Which sentence has a finite verb and an infinitive?",
    options: ["They want to leave.", "Leaving is difficult.", "The leaving was sad.", "She is leaving."],
    answer: "They want to leave.",
    explanation: "Want is finite and to leave is the infinitive.",
  },
];

const VerbsGerunds = () => (
  <CapsSubjectTopic
    title={"Verbs: Auxiliary, Finite and Non-finite, Gerunds"}
    subtitle={"Finite and non-finite verbs, auxiliary verbs, participles and gerunds"}
    learnSteps={learnSteps}
    task={"gr7-verbs-gerunds-t4"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default VerbsGerunds;
