import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "A clause is the object of the verb in She said that she was tired. What type of dependent clause is it?",
    options: ["Adjectival clause", "Adverbial clause", "Noun clause", "Main clause"],
    answer: "Noun clause",
    explanation: "The clause answers the question She said what, so it does the work of a noun.",
  },
  {
    prompt: "In The boy who won the race is my cousin, what type of clause is who won the race?",
    options: ["Adjectival clause", "Noun clause", "Adverbial clause", "Independent clause"],
    answer: "Adjectival clause",
    explanation: "It describes the noun boy.",
  },
  {
    prompt: "In We left when the bell rang, what kind of clause is when the bell rang?",
    options: ["Noun clause", "Adjectival clause", "Main clause", "Adverbial clause"],
    answer: "Adverbial clause",
    explanation: "It tells when we left.",
  },
  {
    prompt: "Which word can begin an adjectival (relative) clause?",
    options: ["because", "who", "although", "if"],
    answer: "who",
    explanation: "Who is a relative pronoun.",
  },
  {
    prompt: "Which relative pronoun completes: The boy ___ bicycle was taken is upset?",
    options: ["who", "whom", "whose", "which"],
    answer: "whose",
    explanation: "Whose shows that the bicycle belongs to the boy.",
  },
  {
    prompt: "Which relative pronoun completes: The teacher ___ taught us last year has retired?",
    options: ["who", "whose", "which", "where"],
    answer: "who",
    explanation: "Who is used for people as the subject of the clause.",
  },
  {
    prompt: "Which group of words is an adverbial clause of reason?",
    options: ["who lives next door", "that she was late", "the old red car", "because he was ill"],
    answer: "because he was ill",
    explanation: "Because gives the reason, and the group has its own subject and verb.",
  },
  {
    prompt: "Which sentence contains an adjectival clause?",
    options: ["I know that she is a nurse at the clinic.", "The woman who lives next door is a nurse.", "She left the house when it began to rain.", "She is a nurse at the town clinic."],
    answer: "The woman who lives next door is a nurse.",
    explanation: "Who lives next door describes the woman.",
  },
  {
    prompt: "Which sentence contains a noun clause?",
    options: ["The woman who lives next door is a nurse.", "She left when it rained.", "I know that she is a nurse.", "She is a nurse."],
    answer: "I know that she is a nurse.",
    explanation: "I know that she is a nurse contains the noun clause that she is a nurse, which is the object of know.",
  },
  {
    prompt: "Which sentence contains an adverbial clause of time?",
    options: ["We went home after the bell rang.", "The bell that rang this morning is loud.", "I heard that the bell rang.", "The bell rang."],
    answer: "We went home after the bell rang.",
    explanation: "We went home after the bell rang contains the adverbial clause after the bell rang, which tells when.",
  },
  {
    prompt: "What does a relative pronoun do?",
    options: ["Joins two main clauses with a comma", "Takes the place of the verb in a clause", "Shows the tense of a verb", "Links a describing clause to a noun"],
    answer: "Links a describing clause to a noun",
    explanation: "A relative pronoun links the clause to the noun that it describes.",
  },
  {
    prompt: "Which relative pronoun completes: The book, ___ is on the table, belongs to Sipho?",
    options: ["who", "which", "whose", "whom"],
    answer: "which",
    explanation: "Which is used for things.",
  },
  {
    prompt: "Which conjunction shows a contrast between two ideas in a clause?",
    options: ["because", "whenever", "although", "unless"],
    answer: "although",
    explanation: "Although shows that the second idea is surprising.",
  },
  {
    prompt: "In What she said surprised me, the clause What she said works as the ___.",
    options: ["subject of the verb", "object of the verb", "description of a noun", "word telling how"],
    answer: "subject of the verb",
    explanation: "It is the subject of surprised.",
  },
];

const Clauses = () => (
  <CapsSubjectTopic
    title={"Noun, Adjectival, Adverbial and Relative Clauses"}
    subtitle={"The three kinds of dependent clause, relative pronouns and adverbial conjunctions"}
    learnSteps={learnSteps}
    task={"gr7-clauses-t3"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default Clauses;
