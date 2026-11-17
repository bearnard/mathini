import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What must a speaker know first when planning a speech?",
    options: ["The colour of the stage lights", "The length of the school break", "Audience, purpose and theme", "The name of the school caretaker"],
    answer: "Audience, purpose and theme",
    explanation: "The audience, purpose and theme decide the register and the content.",
  },
  {
    prompt: "Which pattern tells events in time order?",
    options: ["Topical", "Chronological", "Compare and contrast", "Problem and solution"],
    answer: "Chronological",
    explanation: "A chronological pattern follows time order.",
  },
  {
    prompt: "Which pattern describes a difficulty and then a way to fix it?",
    options: ["Chronological ordering", "Topical sub-division", "Problem and solution", "Compare and contrast"],
    answer: "Problem and solution",
    explanation: "Problem and solution suits a persuasive speech.",
  },
  {
    prompt: "Which pattern shows how two things are alike and different?",
    options: ["Chronological ordering", "Cause-effect chain", "Compare and contrast", "Topical sub-division"],
    answer: "Compare and contrast",
    explanation: "Compare and contrast sets two things side by side.",
  },
  {
    prompt: "Which pattern shows what causes something and what follows?",
    options: ["Chronological", "Cause and effect", "Topical", "Compare and contrast"],
    answer: "Cause and effect",
    explanation: "Cause and effect links a cause to its result.",
  },
  {
    prompt: "What does a striking introduction do?",
    options: ["Lists the main points again", "Thanks the audience for coming", "Ends the speech very quickly", "Catches attention at once"],
    answer: "Catches attention at once",
    explanation: "An opening should catch attention and set up the purpose.",
  },
  {
    prompt: "What should a powerful conclusion do?",
    options: ["Introduce a brand new topic now", "Apologise for the whole speech", "Read the notes aloud again", "Leave a strong final message"],
    answer: "Leave a strong final message",
    explanation: "A conclusion should leave the audience with a strong message.",
  },
  {
    prompt: "Which is an example of a statistic as proof?",
    options: ["\"I think litter is very ugly.\"", "\"Litter is a problem, as we know.\"", "\"120 learners drop litter daily.\"", "\"Most people really hate litter.\""],
    answer: "\"120 learners drop litter daily.\"",
    explanation: "A statistic is a number from a reliable source.",
  },
  {
    prompt: "Why must a speaker say where a statistic comes from?",
    options: ["So that the speech is much longer", "So that the audience will laugh", "So that fewer notes are needed", "So that the proof is credible"],
    answer: "So that the proof is credible",
    explanation: "Evidence must be credible, valid and relevant.",
  },
  {
    prompt: "Which of these is a non-verbal technique?",
    options: ["Pace", "Eye contact", "Volume", "Word choice"],
    answer: "Eye contact",
    explanation: "Eye contact is non-verbal. Pace and volume are verbal.",
  },
  {
    prompt: "Which of these is a verbal technique?",
    options: ["Posture", "Gestures", "Facial expression", "Voice projection"],
    answer: "Voice projection",
    explanation: "Voice projection is part of how the voice is used.",
  },
  {
    prompt: "Why should a speaker pause after the key point?",
    options: ["It gives listeners time to think", "It hides a mistake from listeners", "It makes the speech much shorter", "It shows that the notes were lost"],
    answer: "It gives listeners time to think",
    explanation: "A pause gives emphasis and time to think.",
  },
  {
    prompt: "What is the suggested time for an unprepared speech?",
    options: ["4 to 5 minutes", "10 to 15 minutes", "2 to 3 minutes", "20 to 30 minutes"],
    answer: "2 to 3 minutes",
    explanation: "CAPS suggests 2 to 3 minutes for an unprepared speech.",
  },
  {
    prompt: "In an unprepared speech, how many main points are enough?",
    options: ["Ten or more", "None", "Two or three", "Exactly twenty"],
    answer: "Two or three",
    explanation: "A short speech needs only a few clear points.",
  },
];

const PreparedUnpreparedSpeeches = () => (
  <CapsSubjectTopic
    title="Prepared and Unprepared Speeches"
    subtitle="Planning, structure and evidence, delivery, and the unprepared speech"
    learnSteps={learnSteps}
    task="gr12-prepared-unprepared-speeches-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default PreparedUnpreparedSpeeches;
