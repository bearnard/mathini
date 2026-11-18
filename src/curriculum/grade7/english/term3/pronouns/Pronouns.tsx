import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which pronoun completes: Thabo and ___ went to the shop?",
    options: ["me", "myself", "I", "mine"],
    answer: "I",
    explanation: "Thabo and I is the subject of went.",
  },
  {
    prompt: "Which pronoun completes: The teacher gave the books to Sipho and ___?",
    options: ["me", "I", "my", "mine"],
    answer: "me",
    explanation: "An object pronoun follows the preposition to.",
  },
  {
    prompt: "Which of these is a reflexive pronoun?",
    options: ["him", "his", "whichever", "himself"],
    answer: "himself",
    explanation: "A reflexive pronoun ends in self or selves.",
  },
  {
    prompt: "Which pronoun completes: The red bag is ___ (it belongs to me)?",
    options: ["my", "mine", "myself", "me"],
    answer: "mine",
    explanation: "Mine is a possessive pronoun that stands alone.",
  },
  {
    prompt: "Which sentence uses a personal pronoun as the object?",
    options: ["We thanked the teacher.", "They are late.", "The teacher thanked us.", "She sings well."],
    answer: "The teacher thanked us.",
    explanation: "Us is the object of thanked.",
  },
  {
    prompt: "Which relative pronoun completes: The man ___ car was stolen called the police?",
    options: ["whose", "who", "whom", "which"],
    answer: "whose",
    explanation: "Whose shows that the car belongs to the man.",
  },
  {
    prompt: "Which of these is an interrogative pronoun?",
    options: ["my", "myself", "someone", "who"],
    answer: "who",
    explanation: "Who is used to ask a question.",
  },
  {
    prompt: "Which of these is an indefinite pronoun?",
    options: ["myself", "everybody", "whichever", "mine"],
    answer: "everybody",
    explanation: "Everybody does not name a particular person.",
  },
  {
    prompt: "Which of these is a demonstrative pronoun?",
    options: ["he", "mine", "this", "who"],
    answer: "this",
    explanation: "This points out something near the speaker.",
  },
  {
    prompt: "Which sentence uses a pronoun correctly?",
    options: ["Lerato and I are friends.", "Lerato and me are friends.", "Me and Lerato are friends.", "Lerato and myself are friends."],
    answer: "Lerato and I are friends.",
    explanation: "Lerato and I is the subject, so use I.",
  },
  {
    prompt: "The teacher and I laughed. Which pronoun replaces the teacher and I?",
    options: ["They", "Us", "You", "We"],
    answer: "We",
    explanation: "The subject is the teacher and the speaker, so use we.",
  },
  {
    prompt: "Sipho read the books. Which pronoun replaces the books as the object: Sipho read ___?",
    options: ["they", "them", "their", "theirs"],
    answer: "them",
    explanation: "The books is the object, so use the object pronoun them.",
  },
  {
    prompt: "Which sentence is correct?",
    options: ["The learners took its bags with them.", "The learners took her bags with them.", "The learners took their bags.", "The learners took his bags with them."],
    answer: "The learners took their bags.",
    explanation: "Learners is plural, so use the plural their.",
  },
  {
    prompt: "Which pronoun completes: Everybody ___ here?",
    options: ["is", "are", "were", "have"],
    answer: "is",
    explanation: "Everybody is singular, so use is.",
  },
];

const Pronouns = () => (
  <CapsSubjectTopic
    title={"Pronouns"}
    subtitle={"Personal, possessive, reflexive, demonstrative, interrogative, indefinite and relative pronouns"}
    learnSteps={learnSteps}
    task={"gr7-pronouns-t3"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default Pronouns;
