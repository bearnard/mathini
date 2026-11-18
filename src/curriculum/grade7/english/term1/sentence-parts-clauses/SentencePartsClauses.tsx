import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "In the sentence The young girl sang loudly, how many words are in the subject?",
    options: ["Two", "Seven", "Three", "Eight"],
    answer: "Three",
    explanation: "The subject is The young girl, which has three words.",
  },
  {
    prompt: "In the sentence The dog barked at the postman, how many words are in the predicate?",
    options: ["Four", "Two", "Three", "Five"],
    answer: "Four",
    explanation: "The predicate is barked at the postman, which has four words.",
  },
  {
    prompt: "Which group of words is a main clause?",
    options: ["Because it rained", "When the bell rang", "Although he tried", "We left early."],
    answer: "We left early.",
    explanation: "A main clause makes sense on its own.",
  },
  {
    prompt: "Which group of words is a dependent clause?",
    options: ["We left early.", "Because it rained", "The long school bell rang loudly.", "She smiled."],
    answer: "Because it rained",
    explanation: "A dependent clause cannot stand alone.",
  },
  {
    prompt: "Which conjunction gives a reason?",
    options: ["although", "when", "because", "if"],
    answer: "because",
    explanation: "Because gives a reason.",
  },
  {
    prompt: "Which conjunction shows a contrast between two ideas?",
    options: ["although", "because", "whenever", "unless"],
    answer: "although",
    explanation: "Although shows that the second idea is surprising.",
  },
  {
    prompt: "Which group of words can follow We stayed at home to make a dependent clause?",
    options: ["yesterday", "in the house", "the big blue door", "because it rained"],
    answer: "because it rained",
    explanation: "Because it rained has its own subject and verb, so it is a dependent clause.",
  },
  {
    prompt: "How many clauses are there in The boy who ran won the race?",
    options: ["One", "Two", "Three", "Four"],
    answer: "Two",
    explanation: "The clauses are The boy won the race and who ran.",
  },
  {
    prompt: "Which sentence has a subject-verb agreement error?",
    options: ["The list of names is long.", "The boys in the class are late.", "The list of names are long.", "Everyone is here."],
    answer: "The list of names are long.",
    explanation: "The subject is list, which is singular, so the verb is is.",
  },
  {
    prompt: "Which verb completes: Thabo and Sipho ___ best friends?",
    options: ["are", "is", "am", "being"],
    answer: "are",
    explanation: "A subject joined by and is plural.",
  },
  {
    prompt: "Which of these can stand alone as a full sentence?",
    options: ["Because it rained.", "When the long school bell rang loudly.", "Although she was tired.", "We stayed in because it rained."],
    answer: "We stayed in because it rained.",
    explanation: "It has a main clause as well as a dependent clause.",
  },
  {
    prompt: "Which word group is only a phrase and not a clause?",
    options: ["the dog barked", "in the garden", "because he left", "when it rains"],
    answer: "in the garden",
    explanation: "A phrase has no subject and verb of its own.",
  },
  {
    prompt: "Which conjunction gives a condition: We will play ___ it stops raining?",
    options: ["because", "although", "if", "since"],
    answer: "if",
    explanation: "If gives a condition.",
  },
  {
    prompt: "What does a clause need?",
    options: ["A subject and a verb", "A noun and an adjective", "A comma and a full stop", "A capital letter only"],
    answer: "A subject and a verb",
    explanation: "A clause has its own subject and verb.",
  },
];

const SentencePartsClauses = () => (
  <CapsSubjectTopic
    title={"Sentence Parts and Clauses"}
    subtitle={"Subject and predicate, main and dependent clauses, conjunctions and agreement"}
    learnSteps={learnSteps}
    task={"gr7-sentence-parts-clauses-t1"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default SentencePartsClauses;
